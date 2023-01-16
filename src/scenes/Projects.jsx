import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';

const container = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const projectVariant = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, link, image }) => {
	const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
	const projectTitle = title.split(' ').join('-').toLowerCase();

	return (
		<motion.div variants={projectVariant} className='relative w-full h-[368px]'>
			<a href={link} target='_blank' rel='noreferrer'>
				<div className={overlayStyles}>
					<p className='text-2xl font-playfair'>{title}</p>
					<p className='mt-7'>{description}</p>
				</div>
			</a>
			<img
				src={`../assets/${image}`}
				alt={projectTitle}
				className='object-cover w-full h-full object-left-top'
			/>
		</motion.div>
	);
};

const Projects = () => {
	return (
		<section id='projects' className='pt-16 pb-28'>
			{/* HEADINGS */}
			<motion.div
				className='md:w-2/5 mx-auto text-center'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, y: -50 },
					visible: { opacity: 1, y: 0 },
				}}
			>
				<div>
					<p className='font-playfair font-semibold text-4xl'>
						<span className='text-sky-400'>PRO</span>JECTS
					</p>
					<div className='flex justify-center mt-5'>
						<LineGradient width='w-2/3' />
					</div>
				</div>
				<p className='mt-10 mb-10'>
					I have worked on a multitude of projects ranging from small
					single-page applications to large scale e-commerce platforms. My
					expertise includes designing responsive user interfaces to ensure that
					the websites I build are accessible on all devices. I am also
					experienced in implementing RESTful APIs, and database management and
					optimization, utilizing technologies such as MongoDB and MySQL. I am
					passionate and a continous learner, and I am always keeping up with
					the latest web development trends and best practices to ensure that
					the projects I work on are of the highest quality.
				</p>
			</motion.div>

			{/* PROJECTS */}
			<div className='flex justify-center items-center lg:max-w-[75%] lg:mx-auto mt-12 '>
				<motion.div
					className='sm:grid sm:grid-cols-3'
					variants={container}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.2 }}
				>
					{/* ROW 1 */}
					{/* <div
						className='flex justify-center text-center items-center p-10 bg-sky-400
              text-2xl font-playfair font-semibold'
					>
						PIXEL-PERFECT USER INTERFACES
					</div> */}
					<Project
						title='Admin Dashboard'
						description='Dashboard for business/enterprise admin and data visualization'
						link='https://bradonsiegle.github.io/admin-dashboard/'
						image='dashboard.png'
					/>
					<Project
						title='Weather Forecast App'
						description='A user-friendly, responsive Weather App, made with React and Vanilla JavaScript. Uses OpenWeather API and GeoDB Cities API. Styled with Tailwind CSS. Built with Vite. Deployed on GitHub Pages.'
						link='https://bradonsiegle.github.io/weather-simple-forecast-app/'
						image='weather2.png'
					/>
					<Project
						title='Jobify'
						description='Web-based job application tracking solution. Built with React, Express, Node, and MongoDB Cloud Atlas. Live site currently hosted on Heroku.'
						link='https://jobify-web-app.herokuapp.com/'
						image='jobify.png'
					/>

					{/* ROW 2 */}

					<Project
						title='RecipeHub'
						description='Full-stack website/blog for sharing food recipes, using React with TypeScript, Next.js, MySQL hosted on AWS RDS, and Strapi for content management. Hosted on Vercel using Github Actions for CI/CD.'
						link='https://therecipehub.vercel.app/'
						image='recipe.png'
					/>

					<Project
						title='Film Statistics Finder'
						description='Compare film and box office statistics and find the superior movie! Using Javascript and Bulma CSS, and Open Movie Database API for film information. Live site hosted on Netlify.'
						link='https://film-statistics.netlify.app/'
						image='film.png'
					/>
					<Project
						title='UHost Template'
						description='Demo/Template Website (Structure and Design) for a server hosting company. Built with HTML, Vanilla CSS, and JavaScript.'
						link='https://uhost-template.netlify.app/'
						image='uhost.png'
					/>

					{/* ROW 3 */}

					{/* <div
						className='flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
					>
						SMOOTH USER EXPERIENCES
					</div> */}
				</motion.div>
			</div>
			<div className='flex justify-center mt-12'>
				<LineGradient width='w-2/3' />
			</div>
			<div className='flex justify-center items-center mt-8 gap-4'>
				<p>
					To view source code and more projects, visit my{' '}
					<a
						className='hover:opacity-50 transition duration-500 underline'
						href='https://github.com/bradonsiegle'
						target='_blank'
						rel='noreferrer'
					>
						GitHub page!
					</a>
				</p>
				<a
					className='hover:opacity-50 transition duration-500'
					href='https://github.com/bradonsiegle'
					target='_blank'
					rel='noreferrer'
				>
					<BsGithub size={34} />
				</a>
			</div>
		</section>
	);
};

export default Projects;
