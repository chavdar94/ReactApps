import Button from './Button';

const Project = ({ onAddProjectClick }) => {
	return (
		<div className='w-3/4 mt-44 min-w-max mx-auto'>
			<div className='flex flex-col gap-6 items-center justify-center'>
				<img src='./logo.png' alt='' className='h-40' />
				<p className='text-3xl font-bold text-stone-500'>
					No Project Selected
				</p>
				<p className='text-2xl text-stone-400'>
					Select a project or get started with a new one
				</p>
				<Button
					onClick={onAddProjectClick}
					text={'Crete new project'}
					type={'gray'}
				/>
			</div>
		</div>
	);
};

export default Project;
