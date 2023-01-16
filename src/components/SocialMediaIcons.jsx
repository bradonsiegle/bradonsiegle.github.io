import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const SocialMediaIcons = () => {
	return (
		<div className='flex justify-center md:justify-start my-4 gap-6'>
			<a
				className='hover:opacity-50 transition duration-500'
				href='https://www.linkedin.com/in/bradon-siegle'
				target='_blank'
				rel='noreferrer'
			>
				<BsLinkedin size={42} />
			</a>
			<a
				className='hover:opacity-50 transition duration-500'
				href='https://github.com/bradonsiegle'
				target='_blank'
				rel='noreferrer'
			>
				<BsGithub size={42} />
			</a>
		</div>
	);
};

export default SocialMediaIcons;
