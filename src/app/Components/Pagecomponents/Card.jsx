"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const Card = ({ img, icon, title, desc, className = "" }) => {
  const wrapRef = useRef(null);
  const [tilt, setTilt] = useState("rotateX(0deg) rotateY(0deg)");
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onMove = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;   
    const y = (e.clientY - r.top) / r.height;   
    const rx = ((y - 0.5) * -12).toFixed(2);
    const ry = ((x - 0.5) *  16).toFixed(2);
    setTilt(`rotateX(${rx}deg) rotateY(${ry}deg)`);
    el.style.setProperty("--mx", `${(x * 100).toFixed(2)}%`);
    el.style.setProperty("--my", `${(y * 100).toFixed(2)}%`);
  };

  const onLeave = () => {
    setHovered(false);
    setTilt("rotateX(0deg) rotateY(0deg)");
  };

  const onTouchStart = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${e.touches[0].clientX - r.left}px`;
    ripple.style.top = `${e.touches[0].clientY - r.top}px`;
    el.querySelector(".card-surface")?.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  };

  return (
    <div className={`group relative max-w-[308px] ${className}`} style={{ perspective: "1200px" }}>
      <div
        ref={wrapRef}
        onMouseEnter={() => setHovered(true)}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onTouchStart={onTouchStart}
        className={`relative rounded-3xl will-change-transform transition-transform duration-300 ease-[cubic-bezier(.2,.8,.2,1)]
          ${inView ? "animate-enter" : "opacity-0 translate-y-6"}`}
        style={{
          transformStyle: "preserve-3d",
          transform: `${tilt} ${hovered ? " translateZ(60px) scale(1.04)" : " translateZ(0) scale(1)"}`
        }}
      >
        <div className="card-surface relative rounded-3xl overflow-hidden">
          <span aria-hidden className="glow" style={{ opacity: hovered ? 1 : 0 }} />
          <Image
            src={img}
            alt=""
            width={1000}
            height={500}
            className="object-contain select-none pointer-events-none w-full h-auto transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.012]"
            priority={false}
          />
           <span aria-hidden className="wave-effect" />
          {hovered && <span className="shine" aria-hidden />}
          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="w-[70%] m-auto">
              <div
                className="bg-secondary flex justify-center items-center w-[50px] xl:w-[66px] h-[50px] xl:h-[66px] rounded-[50%]"
                style={{ transform: "translateZ(28px)" }}
              >
                <Image
                  src={icon}
                  alt="icon"
                  width={1000}
                  height={500}
                  className="max-w-[30px] md:max-w-[42px] max-h-[30px] md:max-h-[42px] object-contain transition-transform duration-500 group-hover:-translate-y-0.5"
                />
              </div>
              <div className="pt-5" style={{ transform: "translateZ(22px)" }}>
                <p
                  className="text-xl md:text-[30px] text-black pb-2 w-max"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <span className="sub_description text-black">{desc}</span>
              </div>
            </div>
          </div>
          <span className="spot" aria-hidden />
        </div>
      </div>
    </div>
  );
};

export default Card;
