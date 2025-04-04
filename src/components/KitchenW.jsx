import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion as m, useAnimation } from "framer-motion";
import Cursor from "./Cursor";
import Img from "../assets/reni.png";
import Img2 from "../assets/sendtruly.png";
import Img3 from "../assets/heiler.png";
import Img4 from "../assets/qlsport.png";
import Img5 from "../assets/qiblog.png";

import { InView, useInView } from "react-intersection-observer";

const KitchenW = () => {
  // const { ref, inView } = useInView();

  // useEffect(() => {
  // 	console.log(inView);
  // });

  const projects = [
    {
      id: 1,
      h1: "Renimail",
      img: Img,
      to: "https://renimail.com/",
      stack: ["HTML", "CSS", "Vite", "React"],
      text: "Developed the frontend of Renimail, an email marketing platform, creating a fast and responsive interface with interactive UI components for seamless email marketing functionality.",
    },
    {
      id: 2,
      h1: "Sendtruly",
      img: Img2,
      to: "https://sendtruly.com/",
      stack: ["HTML", "Tailwind CSS", "Vite", "React", "Typescript"],
      text: "Revamped Sendtruly, an SMS marketing tool, by optimizing the old codebase and adding bulk SMS, review, and Text2Pay features, ensuring a responsive and intuitive user experience.",
    },
    {
      id: 3,
      h1: "Heiler",
      img: Img3,
      to: "https://app.heiler.health/",
      stack: ["HTML", "Tailwind CSS", "React", "Vite", "Typescript"],
      text: "Designed and developed Heiler, a medical platform, enabling seamless patient-doctor communication with a responsive chat application featuring real-time messaging, chat storage, and doctor case note creation, powered by RESTful API integration with Axios.",
    },
    {
      id: 4,
      h1: "Quantum Leap Sports",
      img: Img4,
      to: "https://qlsportsonline.com/",
      stack: ["HTML", "Tailwind CSS", "React", "Axios", "PHP", "Typescript"],
      text: "Designed and developed Quantum Leap Sports, a sports management platform, enabling players to create profiles, scouts to view them, and admins to manage blogs and registered players, with seamless backend integration using RESTful APIs via Axios and PHP.",
    },
    {
      id: 5,
      h1: "Qi's_Blog",
      img: Img5,
      to: "https://qi-blog.vercel.app/",

      stack: ["Next js", "Tailwind", "Sanity io", "React", "Typescript"],
      text: "I Created a mini blog site using Next js, tailwind and sanity io for my backend in other to be able to upload my contents",
    },
  ];

  // animation
  const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    open: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.7, ease: [0.32, 0, 0.67, 0] },
    },
  };

  // const mainControls = useAnimation();

  const [hoverStates, setHoverStates] = useState(
    Array(projects.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  return (
    <div className="w-full font-quicksand">
      <Cursor />
      <div className="relative w-full py-[10rem] px-4 lg:py-[9.5rem] md:px-[4rem] z-0">
        <div className=" overflow-hidden">
          <m.h1
            variants={{
              visible: { y: 0 },
              hidden: { y: "-100%" },
            }}
            animate="visible"
            initial="hidden"
            transition={{ delay: 1.2, duration: 1 }}
            className=" text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-raleway"
          >
            K<span className=" font-dance text-lightgreen">IT</span>CHEN
          </m.h1>
        </div>

        <div className="mt-36 md:mt-40">
          <div>
            <div className=" overflow-hidden">
              <m.div
                variants={{
                  visible: { x: 0 },
                  hidden: { x: "-100%" },
                }}
                animate="visible"
                initial="hidden"
                transition={{ delay: 1.2, duration: 1 }}
                className=" flex items-center gap-2"
              >
                <div className="w-20 h-1 bg-darkerColor"></div>
                <span>Click to Preview </span>
              </m.div>
            </div>

            <div className="">
              <div className="">
                {projects.map(({ id, h1, img, to, stack, text }, index) => (
                  <InView key={id}>
                    {({ ref, inView }) => (
                      <div
                        ref={ref}
                        className={`relative mt-20 border-b border-b-darkColor pb-10 ${
                          inView ? "animate__animated animate__fadeInUp" : ""
                        }`}
                      >
                        <m.h1
                          ref={ref}
                          variants={{
                            visible: { x: 0 },
                            hidden: { x: "-100%" },
                          }}
                          animate={inView ? "visible" : "hidden"}
                          initial="hidden"
                          transition={{ delay: 0.5, duration: 2 }}
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={() => handleMouseLeave(index)}
                          className="text-center font-playfair text-3xl xs:text-5xl md:text-8xl lg:text-9xl font-bold mb-20"
                        >
                          <Link to={to} target="_blank">
                            {h1}
                          </Link>
                        </m.h1>

                        {hoverStates[index] && (
                          <m.div
                            initial="initial"
                            animate="open"
                            exit="closed"
                            variants={scaleAnimation}
                            className="w-[10rem] md:w-[20rem] overflow-hidden absolute z-10 left-[35%] -top-[2rem] md:left-[40%] pointer-events-none"
                          >
                            <img className="w-full" src={img} alt="" />
                          </m.div>
                        )}

                        <div>
                          <h1 className="text-2xl sm:text-4xl font-bold underline mb-3">
                            Description
                          </h1>
                          <p className="text-xl sm:text-3xl mb-10">{text}</p>
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-0">
                            <Link
                              to={to}
                              className="w-fit relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-darkColor transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-lightGray group"
                            >
                              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-darkColor group-hover:h-full"></span>
                              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg
                                  className="w-5 h-5 text-darkColor"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                  ></path>
                                </svg>
                              </span>
                              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg
                                  className="w-5 h-5 text-lightGray"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                  ></path>
                                </svg>
                              </span>
                              <span className="relative w-full flex gap-1 items-center text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                                Visit Site
                              </span>
                            </Link>

                            <ul className="flex flex-wrap sm:flex-nowrap sm:items-center gap-5 sm:gap-10">
                              {stack.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </InView>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenW;
