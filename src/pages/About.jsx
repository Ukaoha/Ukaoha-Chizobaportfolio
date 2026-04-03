import React from 'react'
import { Link, Element } from "react-scroll";


const About = () => {

    return (
        <>
            <Element name="about" className=" bg-white">
                <div className="w-[90%] lg:w-[60%] mx-auto mt-10 mb-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 px-4">
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Chizoba 👋</h1>
                            <p className="text-2xl text-black font-meduim">
                                Software Engineer | JavaScript | TypeScript| PHP 
                            </p>
                        </div>

                        <div>
                            <img src="./avatar.jpg" alt="Avatar" className="h-48 w-48 rounded-full mx-auto md:mx-0" />
                        </div>
                    </div>

                    <section className='px-4 pb-4'>
                        <h2 className='font-bold text-xl text-black'>About</h2>
                        <p className='text-[#737373] font-meduim'>I am Ukaoha Chizoba , a Software  engineer with over 4 years of
                            experience solving real world problems with technology.
                            I have a diploma degree in software enginering and also Political science. Over the years , I have specialized in building scalabel applications , knowing how to design systems that work , using my knowladge in systems design , PHP , Laravel , Next.js , Typescript , Docker to deploy solutions that solve people's problems.
                            I love to build and 
                        I  can collaborate with a cross-functional
                            team to build successful products that meets the needs of our clients. I pay attention to detail and practice good code for better user experience and optimization. I have the ability to learn fast
                            In addition to my developer role , I love to write technical aticles , teaching what I know and helping others.
                            <div className=""></div>

                        </p>
                    </section>

                </div>
            </Element>


        </>
    )

}

export default About 