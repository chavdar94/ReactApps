const Projects = ({ projects }) => {
	return (
		<>
			{projects.map((project, idx) => (
				<div className='w-full' key={idx}>
					<p className='text-2xl text-stone-400 text-start rounded-md p-4 hover:text-white hover:bg-stone-900'>
						{project.title}
					</p>
				</div>
			))}
		</>
	);
};

export default Projects;
