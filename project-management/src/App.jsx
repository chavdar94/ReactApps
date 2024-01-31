import { useState } from 'react';
import Project from './components/Project';
import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';

function App() {
	const [showNewProject, setShowNewProject] = useState(false);
	const [projects, setProjects] = useState([]);

	const handleAddProjectClick = () => {
		setShowNewProject(true);
	};

	const handleCancelNewProject = () => {
		setShowNewProject(false);
	};

	const handleAddProject = (project) => {
		setProjects((oldProjects) => [...oldProjects, project]);
	};

	return (
		<main className='flex pt-16 min-h-screen'>
			<Sidebar
				onAddProjectClick={handleAddProjectClick}
				projects={projects}
			/>
			{showNewProject ? (
				<NewProject
					onSubmit={handleAddProject}
					onCancel={handleCancelNewProject}
				/>
			) : (
				<Project onAddProjectClick={handleAddProjectClick} />
			)}
		</main>
	);
}

export default App;
