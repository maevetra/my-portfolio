"use client";
import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes'
import { useScrollPosition } from '@/lib/hooks';
//import ResumePDF from './resume.pdf';

const NavBar = () => {
    const scrollPosition = useScrollPosition()

    return (
        <div className={`flex flex-row-reverse mr-5`}>
                    <div className="flex items-stretch justify-end gap-4">
                            <button className='hover:scale-110 '>
                                <a title='GitHub' href="https://github.com/maevetra" target="_blank">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="30"
                                        fill="none"
                                        stroke="#580C0C"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path
                                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </a>
                            </button>
                            <button className='hover:scale-110 '>
                                <a
                                    title='LinkedIn'
                                    href="https://www.linkedin.com/in/maeve-tra-3a65911b4/"
                                    target="_blank">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="28"
                                        fill="#580C0C"
                                        stroke="#580C0C"
                                        strokeWidth="1">
                                        <g>
                                            <path fill="none" d="M0 0h24v24H0z" strokeWidth="3"/>
                                            <path
                                                d="M12 9.55C12.917 8.613 14.111 8 15.5 8a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 0 0-7 0V21h-2V8.5h2v1.05zM5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-1 2h2V21H4V8.5z"/>
                                        </g>
                                    </svg>
                                </a>
                            </button>
                            <button className='min-w-fit bg-nblue hover:scale-110 text-white whitespace-nowrap hover:bg-red-700 text-sm px-4 py-2 rounded-full '>
                                <Link title='Resume' target='_blank' href='/resume.pdf'>
                                   My Resume
                                </Link>
                            </button>
                    </div>
        </div>
    )
}

export default NavBar;