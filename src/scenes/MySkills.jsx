import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';

const MySkills = () => {
	const isAboveLarge = useMediaQuery('(min-width: 1060px)');
	return (
		<section id='skills' className='pt-10 pb-24 mb-24'>
			{/* HEADER AND IMAGE SECTION */}
			<div className='md:flex md:justify-between md:gap-16 mt-12'>
				<motion.div
					className='md:w-1/3'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<p className='font-playfair font-semibold text-4xl mb-5'>
						MY <span className='text-sky-400'>SKILLS</span>
					</p>
					<LineGradient width='w-1/3' />
					<p className='mt-6 mb-7'>
						I am a highly skilled full stack web developer with experience in
						building and maintaining dynamic and responsive websites using a
						variety of modern technologies. My skillset includes proficiency in
						front-end development frameworks such as React, as well as back-end
						technologies like Noje.js, Express.js, and databases like MongoDB
						and MySQL. I am well-versed in designing and implementing RESTful
						APIs and integrating with third-party services. Additionally, I have
						a strong understanding of responsive design and web accessibility.
					</p>
				</motion.div>

				<div className='mt-16 md:mt-0'>
					{isAboveLarge ? (
						<div
							className='relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]'
						>
							<img
								alt='skills'
								className='z-10'
								src='assets/skills-image.png'
							/>
						</div>
					) : (
						<img alt='skills' className='z-10' src='assets/skills-image.png' />
					)}
				</div>
			</div>

			{/* SKILLS */}
			<div className='md:flex md:justify-between mt-16 gap-32'>
				{/* EXPERIENCE */}
				<motion.div
					className='md:w-1/3 mt-10'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='font-playfair font-semibold text-3xl mt-3 pt-10'>
								Experience
							</p>
						</div>
						<div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						I have extensive experience in full stack web development, with a
						focus on creating dynamic and responsive websites using modern
						technologies such as ES6 JavaScript, React, Node.js, and Express.js.
						My education and project work has given me a broad understanding of
						both front-end and back-end applications.
					</p>
				</motion.div>

				{/* INNOVATIVE */}
				<motion.div
					className='md:w-1/3 mt-10'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='font-playfair font-semibold text-3xl mt-3 pt-10'>
								Front-end
							</p>
						</div>
						<div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						I have a strong passion for designing beautiful and intuitive user
						interfaces. My expertise includes proficiency in technologies such
						as JavaScript, React, HTML5, CSS/SCSS, Tailwind CSS, and MaterialUI.
						I have a keen eye for detail and I am dedicated to creating visually
						appealing, pixel-perfect websites.
					</p>
				</motion.div>
				{/* IMAGINATIVE */}
				<motion.div
					className='md:w-1/3 mt-10'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='font-playfair font-semibold text-3xl mt-3 pt-10'>
								Back-end
							</p>
						</div>
						<div className='w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						I am a skilled back-end web developer with experience in building
						and maintaing robust and efficient server-side systems. I am
						well-versed in designing and implementing RESTful APIs and
						integrating with third-party services, as well as implementing
						authenitcation and authorization mechanisms. I have experience
						working with data and data structures, and I am able to create and
						optimize database queries for efficient data retrieval. experience .
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default MySkills;
