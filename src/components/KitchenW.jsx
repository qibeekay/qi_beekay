import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { motion as m, useAnimation } from 'framer-motion';
import Cursor from './Cursor';
import Img from '../assets/pro3.png';
import Img2 from '../assets/pro5.png';
import Img4 from '../assets/pro2.png';
import Img3 from '../assets/pro4.png';
import Img5 from '../assets/pro6.png';
import Img6 from '../assets/gallery.png';
import Img7 from '../assets/hebbymix.png';
import Img8 from '../assets/lxa.png';
import Img9 from '../assets/movie.png';
import Img10 from '../assets/sheda.png';
import { InView, useInView } from 'react-intersection-observer';

const KitchenW = () => {
	// const { ref, inView } = useInView();

	// useEffect(() => {
	// 	console.log(inView);
	// });

	const projects = [
		{
			id: 1,
			h1: 'Sheda Blog',
			img: Img10,
			to: 'https://sheda-blog.vercel.app/',
			git: 'https://github.com/chi-beekay/bankProject-.git',
			stack: ['Next js', 'Tailwind', 'Sanity io', 'React', 'Typescript'],
			text: 'I Created a mini blog site using Next js, tailwind and sanity io for my backend in other to be able to upload my contents',
		},
		{
			id: 2,
			h1: 'Movie Info App',
			img: Img9,
			to: 'https://movie-discovery-app-nine.vercel.app/',
			git: 'https://github.com/chi-beekay/movie-discovery-app.git',
			stack: ['Next js', 'Tailwind', 'React', 'Typescript'],
			text: 'The Movie Discovery App is a web application built using Next.js, React, Tailwind CSS, and other technologies. This app allows users to explore movies, search for specific movies, view movie details, and save their favorite movies. It leverages data from The Movie Database (TMDb) API to provide up-to-date movie information',
		},
		{
			id: 3,
			h1: 'Image Gallery',
			img: Img6,
			to: 'https://image-galley-dnd.vercel.app/',
			git: 'https://github.com/chi-beekay/image-galley-dnd.git',
			stack: ['Next js', 'Tailwind', 'MongoDB', 'React', 'Typescript'],
			text: 'This web application is an Image Gallery with an integrated Authentication System. It allows users to freely drag and drop images when logged in. This web application also allows you search for images by their tag name and filters and displays them. The application is built using modern web technologies, including Next.js, MongoDB, React, and more',
		},
		{
			id: 4,
			h1: 'LXA Logistics',
			img: Img8,
			to: 'https://bank-api-three.vercel.app/',
			git: 'https://github.com/chi-beekay/bankProject-.git',
			stack: ['Next js', 'Tailwind', 'React', 'Typescript'],
			text: 'LXA.ng is a website i created for a logistics company using nextjs, tailwind and typescript, to display information about the company and the service they render in between',
		},
		{
			id: 5,
			h1: 'BANK UI',
			img: Img,
			to: 'https://bank-api-three.vercel.app/',
			git: 'https://github.com/chi-beekay/bankProject-.git',
			stack: ['HTML', 'CSS', 'Javascript'],
			text: 'In order to enhance my knowledge of HTML, CSS, and JavaScript, I undertook the task of redesigning a Bank app UI. Throughout the process, I utilized the CSS Calc function and ensured that the UI was fully responsive.',
		},

		{
			id: 6,
			h1: 'INITIATIVE',
			img: Img2,
			to: 'https://charlesaladeinitiative.com/',
			git: 'https://github.com/chi-beekay/ca_initiative.git',
			stack: ['HTML', 'CSS', 'Javascript'],
			text: 'I utilized HTML, Tailwind CSS, and JavaScript as my primary tools to develop a fully responsive website, leveraging my knowledge of Tailwind for this project.',
		},
		{
			id: 7,
			h1: 'PROLEAD',
			img: Img4,
			to: 'https://celebrated-dolphin-02d6af.netlify.app/',
			git: 'https://github.com/chi-beekay/prolead.git',
			stack: ['React js', 'Tailwind', 'Javascript'],
			text: 'Prolead was created with HTML and styled using Tailwind. React.js and Vite were used for bundling assets. The project is fully responsive and serves as my second React project where I gained experience with react-router-dom for routing.',
		},
		{
			id: 8,
			h1: 'FOODIE',
			img: Img5,
			to: 'https://github.com/chi-beekay/FoodieXpress.git',
			git: 'https://github.com/chi-beekay/FoodieXpress.git',
			stack: ['HTML', 'CSS', 'Javascript'],
			text: 'The development of this project involved utilizing HTML, CSS, and JavaScript to create a fully responsive food ordering app.',
		},
		{
			id: 9,
			h1: 'CRYPTO UI',
			img: Img3,
			to: 'https://crypto-challenge-sand.vercel.app/',
			git: 'https://github.com/chi-beekay/FoodieXpress.git',
			stack: ['HTML', 'CSS', 'Javascript'],
			text: 'I came across this challenging project on Twitter and decided to take it on. For this project, I utilized HTML, CSS, and JavaScript, incorporating scroll reveal for the animation effects.',
		},
	];

	// animation
	const scaleAnimation = {
		initial: { scale: 0, x: '-50%', y: '-50%' },
		open: {
			scale: 1,
			x: '-50%',
			y: '-50%',
			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
		},
		closed: {
			scale: 0,
			x: '-50%',
			y: '-50%',
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
		<div className='w-full font-quicksand'>
			<Cursor />
			<div className='relative w-full py-[10rem] px-4 lg:py-[9.5rem] md:px-[4rem] z-0'>
				<div className=' overflow-hidden'>
					<m.h1
						variants={{
							visible: { y: 0 },
							hidden: { y: '-100%' },
						}}
						animate='visible'
						initial='hidden'
						transition={{ delay: 1.2, duration: 1 }}
						className=' text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-raleway'>
						K<span className=' font-dance text-lightgreen'>IT</span>CHEN
					</m.h1>
				</div>

				<div className='mt-36 md:mt-40'>
					<div>
						<div className=' overflow-hidden'>
							<m.div
								variants={{
									visible: { x: 0 },
									hidden: { x: '-100%' },
								}}
								animate='visible'
								initial='hidden'
								transition={{ delay: 1.2, duration: 1 }}
								className=' flex items-center gap-2'>
								<div className='w-20 h-1 bg-darkerColor'></div>
								<span>Click to Preview </span>
							</m.div>
						</div>

						<div className=''>
							<div className=''>
								{projects.map(
									({ id, h1, img, to, git, stack, text }, index) => (
										<InView key={id}>
											{({ ref, inView }) => (
												<div
													ref={ref}
													className={`relative mt-20 border-b border-b-darkColor pb-10 ${
														inView ? 'animate__animated animate__fadeInUp' : ''
													}`}>
													<m.h1
														ref={ref}
														variants={{
															visible: { x: 0 },
															hidden: { x: '-100%' },
														}}
														animate={inView ? 'visible' : 'hidden'}
														initial='hidden'
														transition={{ delay: 0.5, duration: 2 }}
														onMouseEnter={() => handleMouseEnter(index)}
														onMouseLeave={() => handleMouseLeave(index)}
														className='text-center font-playfair text-3xl xs:text-5xl md:text-8xl lg:text-9xl font-bold mb-20'>
														<Link to={to} target='_blank'>
															{h1}
														</Link>
													</m.h1>

													{hoverStates[index] && (
														<m.div
															initial='initial'
															animate='open'
															exit='closed'
															variants={scaleAnimation}
															className='w-[10rem] md:w-[20rem] overflow-hidden absolute z-10 left-[35%] -top-[2rem] md:left-[40%] pointer-events-none'>
															<img className='w-full' src={img} alt='' />
														</m.div>
													)}

													<div>
														<h1 className='text-2xl sm:text-4xl font-bold underline mb-3'>
															Description
														</h1>
														<p className='text-xl sm:text-3xl mb-10'>{text}</p>
														<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-0'>
															<Link
																to={git}
																className='w-fit relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-darkColor transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-lightGray group'>
																<span className='absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-darkColor group-hover:h-full'></span>
																<span className='absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12'>
																	<svg
																		className='w-5 h-5 text-darkColor'
																		fill='none'
																		stroke='currentColor'
																		viewBox='0 0 24 24'
																		xmlns='http://www.w3.org/2000/svg'>
																		<path
																			strokeLinecap='round'
																			strokeLinejoin='round'
																			strokeWidth='2'
																			d='M14 5l7 7m0 0l-7 7m7-7H3'></path>
																	</svg>
																</span>
																<span className='absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200'>
																	<svg
																		className='w-5 h-5 text-lightGray'
																		fill='none'
																		stroke='currentColor'
																		viewBox='0 0 24 24'
																		xmlns='http://www.w3.org/2000/svg'>
																		<path
																			strokeLinecap='round'
																			strokeLinejoin='round'
																			strokeWidth='2'
																			d='M14 5l7 7m0 0l-7 7m7-7H3'></path>
																	</svg>
																</span>
																<span className='relative w-full flex gap-1 items-center text-left transition-colors duration-200 ease-in-out group-hover:text-white'>
																	Github <FaGithub />
																</span>
															</Link>

															<ul className='flex flex-wrap sm:flex-nowrap sm:items-center gap-5 sm:gap-10'>
																{stack.map((item) => (
																	<li key={item}>{item}</li>
																))}
															</ul>
														</div>
													</div>
												</div>
											)}
										</InView>
									)
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default KitchenW;
