'use client';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container mx-auto h-screen">
      <div className="grid grid-cols-2 p-6 max-sm:grid-cols-1">
        <div className="p-4">
          <h1 className="text-5xl text-center font-bold" data-aos="fade-up">About</h1>
          <p className="mt-4 " data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eum
            veniam voluptas facilis optio at, possimus, eius soluta atque error
            aliquam ex dolorum quia qui? Recusandae accusamus harum hic qui,
            eligendi aut nulla error impedit pariatur cum voluptate rerum illum,
            incidunt dolorum? Quidem amet exercitationem consectetur facere
            placeat? Suscipit vitae voluptates explicabo dolorum quidem sit
            perspiciatis expedita officia optio dignissimos.
          </p>
        </div>
        <div className="p-4">
          <h1 className="text-5xl text-center font-bold " data-aos="fade-up">Technical Skill</h1>
          <div className="flex justify-center gap-4 p-4">
            <img src="/ae.png" alt="" className="w-14 h-14" data-aos="fade-up"/>
            <img src="/pr.png" alt="" className="w-14 h-14"  data-aos="fade-up"/>
            <img src="/vn.png" alt="" className="w-14 h-14"  data-aos="fade-up"/>
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-5xl text-center font-bold " data-aos="fade-up">contact</h1>
          <div className="flex justify-center gap-4 p-4">
            <img src="/wa.png" alt="" className="w-10 h-10" data-aos="fade-up" />
          <img src="/ig.png" alt="" className="w-10 h-10" data-aos="fade-up"/>
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-5xl text-center font-bold" data-aos="fade-up">Education</h1>
        </div>
      </div>
    </div>
  );
}
