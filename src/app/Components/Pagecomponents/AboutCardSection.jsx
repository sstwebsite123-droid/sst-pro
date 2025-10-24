"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import Title from "../Uiux/Title";
import Description from "../Uiux/Description";
import Button from "../Uiux/Button";
import aboutImg from ".././../../../public/banners/aboutusbg.jpg"
import bannerImg from ".././../../../public/banners/aboutudbg1.jpg"
// import aboutImg from "../../../../../public/banners/aboutusbg.jpg";
// import bannerImg from "../../../../../public/banners/aboutudbg1.jpg";

const skills = [
  { label: "Video Editing", value: 85 },
  { label: "Videography", value: 90 },
  { label: "Branding", value: 77 },
];

const stats = [
  { value: 20, label: "Years Of Experience" },
  { value: 1000, label: "Projects Done" },
  { value: 300, label: "Satisfied Clients" },
  { value: 64, label: "Certified Awards" },
];

const AboutCardSection = () => {
  const [skillProgress, setSkillProgress] = useState(skills.map(() => 0));
  const [statValues, setStatValues] = useState(stats.map(() => 0));

  // Ref + inView hook for scroll-trigger animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animate skills + stats when in view
  useEffect(() => {
    if (!isInView) return;
    let start= null;
    const duration = 3500; 

    const animateSkills = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setSkillProgress(skills.map((s) => Math.floor(progress * s.value)));
      if (progress < 1) requestAnimationFrame(animateSkills);
    };
    requestAnimationFrame(animateSkills);

    // Animate stats
    const animateStats = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setStatValues(stats.map((s) => Math.floor(progress * s.value)));
      if (progress < 1) requestAnimationFrame(animateStats);
    };
    requestAnimationFrame(animateStats);
  }, [isInView]);

  return (
    <section ref={ref} className="inn_container pt-24 2xl:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="p-4 gradient_border rounded-[50px]"
      >
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-12">
          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 group"
          >
            <Image
              src={aboutImg}
              alt="studio"
              width={1200}
              height={800}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
          </motion.div>

          {/* RIGHT: Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8 2xl:p-10"
          >
            <div className="pointer-events-none absolute inset-2 rounded-[32px] border border-white/10" />
            <div className="relative z-[1] space-y-4">
              <p className="text-white/60 text-sm">About Us</p>

              <Title
                title={
                  'We Always <span class="gradient_text"> Make The Best </span>'
                }
                color={"text-white"}
              />

              <Description
                description={
                  "We create stunning visuals, creative campaigns, and cinematic experiences. With expertise in branding, video editing, and storytelling, we help your brand shine."
                }
                color={"text-white/80"}
              />

              <div className="pt-4 w-max">
                <Button
                  btn_name="Contact Us"
                  border_color={"border-primary"}
                  color="text-black"
                  btn_background="bg-primary"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills + Stats */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-12">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8"
          >
            <h4 className="text-2xl text-white font-semibold">Our Skills</h4>
            <p className="text-white/70 mt-2">
              Our creative team delivers excellence in every frame, design, and
              brand experience.
            </p>

            <div className="mt-6 space-y-5">
              {skills.map((s, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between text-white/80 text-sm">
                    <span>{s.label}</span>
                    <span>{skillProgress[i]}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skillProgress[i]}%` }}
                      transition={{ duration: 0.6 }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((st, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="p-4 rounded-2xl border border-white/10 bg-white/5 text-center hover:bg-white/[0.08] transition-all"
                >
                  <div className="text-3xl md:text-4xl font-semibold gradient_text">
                    {statValues[i]}
                    {st.value > 50 && "+"}
                  </div>
                  <div className="text-white/70 text-sm mt-1">{st.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-10 relative overflow-hidden rounded-[40px] border border-white/10 group"
        >
          <Image
            src={bannerImg}
            alt="cta"
            width={1600}
            height={700}
            className="w-full h-[260px] md:h-[340px] object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <h3 className="text-2xl md:text-3xl xl:text-4xl text-white font-semibold">
              We Are Always Ready To{" "}
              <span className="gradient_text">Take A Perfect Shot</span>
            </h3>
            <Button
              btn_name="Get Started"
              border_color={"border-primary"}
              color="text-black"
              btn_background="bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutCardSection;
