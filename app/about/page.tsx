"use client"
import React from 'react';
import Tag from '../components/tags';
import Heading from '../components/heading';
import { languages } from '@/lib/data';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView("about");
    return (
        <motion.section ref={ref} id="about"  className='w-full h-fit -mt-12 pt-24 bg-lgrey items-center justify-between px-36'>
            <Heading
                title="About me"
                description="Here you will find more information about
                    me, what I do, and my current skills mostly in terms of programming and
                    technology."
                number="01"/>

            <div className=''>
                <div className='col-span-2 flex-shrink pr-5'>
                    <div>
                        <h3 className="text-xl font-bold tracking-tight sm:text-xl">Who am I?</h3>
                        <p className='mb-2'>I&apos;m a senior at Purdue University studying Computer Science
                            with concentration in Software Engineer, Security and Machine Learning. I also
                            have a minor in Art and Design Studio. I&apos;m actively seeking  <strong>
                             &nbsp;full-time positions&nbsp;
                            </strong>
                            where I can apply my knowledge and skills to solve complex problems and collaborate 
                            with like-minded professionals. I&apos;m searching for an opportunity to be part of a team that&apos;s making a difference. I
                            strive to create products that are not only functional but also aesthestically
                            pleasing.
                        </p>
                        <p className='mb-2'> I&apos;m looking to diversify
                            my technical knowledge and portfolio. I&apos;m willing to learn and adapt to
                            new technologies . I am especially curious about
                             <strong>
                             &nbsp;machine intelligence&nbsp;
                            </strong>
                            and the integration of machine learning into technical products. Because of
                            this, I&apos;m open to opportunities where I can learn more about and contribute to
                            the field.
                        </p>
                        <p>
                            I am currently eligible for full-time positions in the U.S. under&nbsp;
                            <a
                                className='underline font-bold'
                                href='https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-opt-for-f-1-students'
                                target='_blank'>
                                Optional Practical Training (OPT)
                            </a>.
                        </p>
                    </div>
                    <div className="mx-auto max-w-screen place-self-start lg:mx-0 mt-5">
                        <h3 className="text-xl font-bold mb-2 sm:text-xl">My skills</h3>
                        {languages.map(language => (<Tag key={language} language={language}/>))}

                    </div>
                </div>
                {/*
                <div className='ml-6 h-full'>
                    <div className="w-full h-full border-2"></div>
    </div>*/}
            </div>
            
            

        </motion.section>
    )
}
