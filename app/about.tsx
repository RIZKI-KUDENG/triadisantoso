"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 p-6 max-sm:grid-cols-1">
        <div className="p-4">
          <h1 className="text-5xl text-center font-bold" data-aos="fade-up">
            About
          </h1>
          <p className="mt-4 " data-aos="fade-up">
            I turn ideas into content that works. As a Content Creator and
            Social Media Specialist, I thrive at the intersection of creativity
            and data. My focus is on creating content that doesn't just stop the
            scroll, but builds genuine connections and drives action. From
            scripting viral short-form videos and designing informative
            carousels to writing captions that convert, I handle it all. I am
            skilled in crafting end-to-end social media strategies designed to
            increase brand awareness, build a solid community, and hit your
            business targets. Let's create something amazing together!
          </p>
        </div>
        <div className="p-4">
          <h1 className="text-5xl text-center font-bold " data-aos="fade-up">
            Technical Skill
          </h1>
          <div className="flex justify-center gap-4 p-4">
            <img
              src="/ae.png"
              alt=""
              className="w-14 h-14"
              data-aos="fade-up"
            />
            <img
              src="/pr.png"
              alt=""
              className="w-14 h-14"
              data-aos="fade-up"
            />
            <img
              src="/vn.png"
              alt=""
              className="w-14 h-14"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
