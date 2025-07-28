'use client';
import React from 'react';
import Image from 'next/image';
import { FaArrowRight, } from 'react-icons/fa6';

const Card = ({
  title,
  image,
  overlayTitle,
  overlayDesc,
  tags,
}: {
  title: string;
  image: string;
  overlayTitle: string;
  overlayDesc: string;
  tags: string[];
}) => {
  return (
    <div className="relative rounded-[3rem] overflow-hidden bg-black text-white w-full max-w-[650px] group transition-all duration-500 shadow-lg border">
      <Image
        src={image}
        alt={title}
        width={800}
        height={500}
        className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
      />

      {/* Hover Overlay Content */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-center">
        <div className="mb-4">
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">{overlayTitle}</h3>
          <p className="text-white text-sm md:text-base">{overlayDesc}</p>
        </div>

        {/* Tags */}
        <div className="flex gap-4 flex-wrap mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-white text-black text-sm px-4 py-2 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Title */}
      <div className="absolute bottom-6 left-6 z-10">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      {/* Arrow Button */}
      <div className="absolute bottom-4 right-4 z-10">
        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black rotate-45 group-hover:rotate-0 transition-transform duration-300">
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <main className=" text-white bg-black py-16 px-5 lg:px-20">
      <div className='flex flex-wrap gap-8 justify-center'>
        <Card
        title="PREMIER PADEL"
        image="https://ik.imagekit.io/msmrd69gi/e9e16a41870703.5607091e53b51.jpg?updatedAt=1750949958488"
        overlayTitle="QATAR AIRWAYS PREMIER PADEL TOUR"
        overlayDesc="We service the world's biggest padel tour by bringing to life their fan-facing platforms and also provide a technology solution to administrate their 30 global events."
        tags={['Mobile App', 'Website', 'UI/UX Design']}
      />
      <Card
        title="TEAM GB"
        image="https://ik.imagekit.io/msmrd69gi/rzbPtCB0tgIXOz1ypbASf10eVU.png?updatedAt=1751096412159"
        overlayTitle="TEAM GB ATHLETICS"
        overlayDesc="Team GB brings together elite athletes, combining style and strength to represent Britain at the highest level of international competition."
        tags={['Branding', 'Photography', 'Web Design']}
      />
      </div>

      <div className="text pt-20 flex justify-between items-center">
        <h1 className='text-3xl'>Consciously creative and crafted for you. We deliver with <br /> precision and purpose no fluff, just fierce results.</h1>
        <button className='uppercase border px-5 py-3 rounded-full flex gap-2 items-center hover:bg-white duration-500 cursor-pointer hover:text-black'>View Case Studies <FaArrowRight/></button>
      </div>
    </main>
  );
}
