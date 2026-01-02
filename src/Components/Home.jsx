import React, { useEffect, useRef } from 'react';
import pic from '../assets/1.png';
import { ReactTyped } from "react-typed";
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { SiFreelancer } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
    
    const headingRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const iconRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(headingRef.current,
            { opacity: 0, y: -50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 80%",
                }
            }
        );

        gsap.fromTo(textRef.current,
            { opacity: 0, x: -100 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 0.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                }
            }
        );

        gsap.fromTo(imageRef.current,
            { opacity: 0, x: 100 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 80%",
                }
            }
        );

        // Rotating Icon Animation
        gsap.to(iconRef.current, {
            rotation: 360,
            duration: 5,
            repeat: -1,
            ease: "linear"
        });
    }, []);

    return (
        <>
            <div name="Home" className=' bg-white dark:bg-[#061231] dark:mt-0 dark:pt-20 dark:text-white max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row '>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <h1 ref={headingRef} className='text-2xl font-bold md:text-4xl'>Welcome to my website</h1>
                        <div className='flex space-x-2 text-2xl font-semibold md:text-4xl'>
                            <h1> I am a</h1>
                            <ReactTyped
                                className='text-green-600'
                                strings={["Software developer", "Web Specialist", "PSD to HTML Expert"]}
                                typeSpeed={200}
                                backDelay={1000}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p ref={textRef} className=' text-justify text-lg md:text-md'>
                            Welcome to my portfolio website! You will find a collection of my best work, skills, and creative projects here. I am passionate about delivering high-quality results and always strive for excellence. You are in the right place whether you are looking for innovative designs, smart solutions, or creative ideas.
                        </p>
                        <br />
                        <div className='flex space-x-48'>
                            <div className='space-y-2'>
                                <p className='font-bold'>Contact Me on Social Media</p>
                                <div className='flex space-x-2 text-2xl cursor-pointer'>
                                    <a href="https://www.facebook.com/profile.php?id=61565241867075" target="_blank">
                                        <SiFacebook />
                                    </a>
                                    <FaLinkedin />
                                    <FaSquareTwitter />
                                    <SiFreelancer />
                                    <FaTelegramPlane />
                                </div>
                            </div>
                            <div className=' md:space-y-2 hidden'>
                                <p className='font-bold'>Currently Working On</p>
                                <div className='flex space-x-3 text-xl md:text-2xl cursor-pointer rounded-full'>
                                    <FaReact />
                                    <BiLogoMongodb />
                                    <IoLogoJavascript />
                                    <SiExpress />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 order-1 md:order-2 relative'>
                        <img
                            ref={imageRef}
                            src={pic}
                            className='rounded-full shadow-blue-400  md:w-[550px] md:h-[450px] mb-10'
                            alt=""
                        />
                        <div
                            ref={iconRef}
                            className='absolute shadow-blue-950 ml-1 top-[60%] left-[36%] text-6xl md:top-[60%] md:left-[33%] md:text-9xl text-blue-600'
                        >
                            <FaReact />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}

export default Home;
