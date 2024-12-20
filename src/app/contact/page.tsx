"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Contact() {
  return (
    <div className="h-[60rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-9xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mb-9">
          Contact Us
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-md text-center relative z-10">
          We are here to help with any questions about our courses, programmes
          or events. Reach out and let us know how we can assist you in the
          musical journey.
        </p>
        <input
          type="text"
          placeholder="type your queries"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 p-5"
        />

        <button className="p-[3px] relative my-5">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Send Message
          </div>
        </button>
      </div>
      <BackgroundBeams />
    </div>
  );
}
