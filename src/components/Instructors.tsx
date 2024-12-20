import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip';

const instructors = [
    {
      id: 1,
      name: "John Doe",
      designation: "Vocal Coach",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Guitar Instructor",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Drumming Expert",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "Piano Teacher", 
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    }
  ];

export default function Instructors() {
  return (
    <div className='relative h-[50rem] overflow-hidden flex items-center justify-center'>
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <p className="text-2xl md:text-4xl lg:text-9xl text-white font-bold inter-var text-center">
                Meet our Instructors
            </p>
            <p className="text-base md:text-2xl mt-4 text-white font-normal inter-var text-center">
                Discover the talented professionals who will guide your musical journey
            </p>
            <div className='flex flex-row items-center justify-center mt-10 w-full'>
                <AnimatedTooltip items={instructors} />  
            </div>
        </WavyBackground>
    </div>
  )
}
