'use client';

import React, { useEffect, useRef } from 'react';

const GalaxyAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadThreeJS = async () => {
      if (typeof window !== 'undefined' && !window.THREE) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        script.async = true;
        document.head.appendChild(script);
        
        return new Promise((resolve) => {
          script.onload = () => resolve();
        });
      }
    };

    const initGalaxy = async () => {
      await loadThreeJS();
      
      if (!window.THREE || !canvasRef.current) return;

      const THREE = window.THREE;
      const canvas = canvasRef.current;

      const debugObject = {
        count: 200000,
        size: 15,
        branches: 4,
        radius: 3,
        randomness: 0.65,
        randomnessPower: 3.2,
        innerColor: '#52A5FC',
        outerColor: '#52A5FC',
        rotationSpeed: 0.3
      };

      const sizes = {
        width: window.innerWidth,
        height: 300
      };

      const scene = new THREE.Scene();
      let geometry = null;
      let material = null;
      let mesh = null;

      const generateGalaxy = () => {
        if (geometry) {
          geometry.dispose();
          material.dispose();
          scene.remove(mesh);
        }

        geometry = new THREE.BufferGeometry();
        
        const positions = new Float32Array(debugObject.count * 3);
        const scales = new Float32Array(debugObject.count);
        const colors = new Float32Array(debugObject.count * 3);
        const randomness = new Float32Array(debugObject.count * 3);

        const innerColor = new THREE.Color(debugObject.innerColor);
        const outerColor = new THREE.Color(debugObject.outerColor);
        
        for (let i = 0; i < debugObject.count; i++) {
          const randomRadius = Math.random() * debugObject.radius;
          const i3 = i * 3;
      
          const angle = (i % debugObject.branches) / debugObject.branches * Math.PI * 2;
      
          positions[i3] = Math.cos(angle) * randomRadius * debugObject.radius;
          positions[i3 + 1] = 0;
          positions[i3 + 2] = Math.sin(angle) * randomRadius * debugObject.radius;

          scales[i] = Math.random();

          const pointColor = innerColor.clone();
          pointColor.lerp(outerColor, randomRadius / debugObject.radius);

          colors[i3] = pointColor.r;
          colors[i3 + 1] = pointColor.g;
          colors[i3 + 2] = pointColor.b;

          randomness[i3] = Math.pow(Math.random(), debugObject.randomnessPower) * (Math.random() > 0.5 ? -1 : 1) * debugObject.randomness * randomRadius;
          randomness[i3 + 1] = Math.pow(Math.random(), debugObject.randomnessPower) * (Math.random() > 0.5 ? -1 : 1) * debugObject.randomness * randomRadius;
          randomness[i3 + 2] = Math.pow(Math.random(), debugObject.randomnessPower) * (Math.random() > 0.5 ? -1 : 1) * debugObject.randomness * randomRadius;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));
        geometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('aRandomness', new THREE.BufferAttribute(randomness, 3));
        
        material = new THREE.ShaderMaterial({
          vertexShader: `
            uniform float uSize;
            uniform float uTime;
            uniform float uRotationSpeed;

            attribute float aScale;
            attribute vec3 aColor;
            attribute vec3 aRandomness;

            varying vec2 vUv;
            varying vec3 vColor;
    
            void main() {
              vec4 bodyPosition = modelMatrix * vec4(position, 1.0);
              
              float angle = atan(bodyPosition.x, bodyPosition.z);
              
              float distanceToCenter = length(bodyPosition.xz);
              
              float angleOffset = (1.0 / distanceToCenter) * uTime * uRotationSpeed;
              angle += angleOffset;

              bodyPosition.x = cos(angle) * distanceToCenter;
              bodyPosition.z = sin(angle) * distanceToCenter;

              bodyPosition.xyz += aRandomness.xyz;

              vec4 viewPosition = viewMatrix * bodyPosition;
              vec4 projectionPosition = projectionMatrix * viewPosition;
    
              gl_Position = projectionPosition;
    
              gl_PointSize = uSize * aScale;
              gl_PointSize *= (1.0 / -viewPosition.z);

              vUv = uv;
              vColor = aColor;
            }
          `,
          fragmentShader: `
            varying vec3 vColor;
            varying vec2 vUv;

            void main() {
              float distanceFromCenter = 1.0 - distance(gl_PointCoord, vec2(.5));
              distanceFromCenter = pow(distanceFromCenter, 6.0);

              vec3 finalColor = mix(vec3(0.0), vColor, distanceFromCenter);

              gl_FragColor = vec4(finalColor, 1.0);
            }
          `,
          blending: THREE.AdditiveBlending,
          sizeAttenuation: true,
          depthWrite: false,
          transparent: true,
          uniforms: {
            uSize: { value: debugObject.size },
            uTime: { value: 0 },
            uRotationSpeed: { value: debugObject.rotationSpeed }
          }
        });
        
        mesh = new THREE.Points(geometry, material);
        scene.add(mesh);
      };

      generateGalaxy();

      const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
      camera.position.x = 3;
      camera.position.y = 2;
      camera.position.z = 1;
      camera.lookAt(new THREE.Vector3(0, 0, 0));
      scene.add(camera);

      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true
      });
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const clock = new THREE.Clock();

      const tick = () => {
        const elapsedTime = clock.getElapsedTime();

        if (material) {
          material.uniforms.uTime.value = elapsedTime;
        }

        renderer.render(scene, camera);
        window.requestAnimationFrame(tick);
      };

      tick();

      const handleResize = () => {
        sizes.width = window.innerWidth;
        sizes.height = 300;

        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (geometry) geometry.dispose();
        if (material) material.dispose();
        if (mesh) scene.remove(mesh);
        if (renderer) renderer.dispose();
      };
    };

    initGalaxy();
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="w-full"
      style={{
        height: '200px',
        background: 'transparent'
      }}
    />
  );
};

export default GalaxyAnimation;
