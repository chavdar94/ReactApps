import Button from './Button';
import Projects from './Projects';

const Sidebar = ({ onAddProjectClick, projects }) => {
	return (
		<aside className='w-1/4 pl-10 bg-black  rounded-tr-2xl text-white'>
			<div className='pt-20'>
				<p className='text-4xl font-bold mb-10'>YOUR PROJECTS</p>
				<Button
					onClick={onAddProjectClick}
					text={'+ Add Project'}
					type={'gray'}
				/>
			</div>
			<div className='flex flex-col items-center justify-center mt-12 w-3/4 gap-2'>
				{projects && <Projects projects={projects} />}
			</div>
		</aside>
	);
};

export default Sidebar;
