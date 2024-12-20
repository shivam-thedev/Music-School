'use client'
import Link from 'next/link'
import React from 'react'
import courseData from '../data/music_courses.json'
import { BackgroundGradient } from './ui/background-gradient'

interface Course{
  id: number,
  title:string ,
  slug:string ,
  description:string ,
  price: number,
  instructor:string ,
  isFeatured: boolean,
  image:string 
}

export default function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter((course:Course)=>course.isFeatured)
  return (
    <div className='py-16 bg-gray-950'>
        <div className='text-center'>
            <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the Best</p>
        </div>
        <div className='mt-14'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-md:px-4'>
            {featuredCourses.map((course:Course)=>(
              <div key={course.id} className='flex justify-center'>
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                  <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                    <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{course.title}</p>
                    <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{course.description}</p>
                    <Link href={`/courses/${course.slug}`} className='text-xl mt-4'>Learn More</Link>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-20 text-center'>
          <Link href={"/courses"} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>View All courses</Link>
        </div>
    </div>
  )
}
