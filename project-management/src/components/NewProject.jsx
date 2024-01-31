import { useRef, useEffect, useState } from 'react';
import Button from './Button';

const initialData = {
	title: '',
	description: '',
	date: '',
};

const NewProject = ({ onSubmit, onCancel }) => {
	const titleRef = useRef();
	const descRef = useRef();
	const dateRef = useRef();

	const [active, setActive] = useState(null);
	const [formData, setFormData] = useState(initialData);

	const handleFocus = (fieldName) => {
		setActive(fieldName);
	};

	const handleBlur = () => {
		setActive(null);
	};

	const handleChange = (e) => {
		setFormData((oldState) => ({
			...oldState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		onSubmit(formData);

		setFormData(initialData);
	};

	return (
		<div className='w-3/4 mt-44 min-w-max mx-auto pl-20 pr-96'>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col items-center justify-center'
			>
				<div className='flex gap-4 ml-auto'>
					<Button onClick={onCancel} text={'Cancel'} type={'white'} />
					<Button text={'Save'} type={'main'} />
				</div>
				<div className='w-full'>
					<div className='flex flex-col gap-2'>
						<label
							className='text-xl text-stone-600 font-bold'
							htmlFor='title'
						>
							TITLE
						</label>
						<input
							className={`bg-stone-200 h-12 border-b-2 ${
								active === 'title'
									? 'border-black'
									: 'border-stone-400'
							} text-xl text-stone-600 px-2 outline-none`}
							type='text'
							ref={titleRef}
							onFocus={() => {
								handleFocus('title');
							}}
							onBlur={handleBlur}
							name='title'
							onChange={handleChange}
							value={formData.title}
						/>
					</div>

					<div className='flex flex-col gap-2'>
						<label
							className='text-xl text-stone-600 font-bold'
							htmlFor='title'
						>
							DESCRIPTION
						</label>
						<textarea
							className={`bg-stone-200 h-24 border-b-2 ${
								active === 'desc'
									? 'border-black'
									: 'border-stone-400'
							} text-xl text-stone-600 p-2 outline-none`}
							ref={descRef}
							onFocus={() => {
								handleFocus('desc');
							}}
							onBlur={handleBlur}
							name='description'
							onChange={handleChange}
							value={formData.description}
						/>
					</div>

					<div className='flex flex-col gap-2'>
						<label
							className='text-xl text-stone-600 font-bold'
							htmlFor='title'
						>
							DATE
						</label>
						<input
							className={`bg-stone-200 h-12 border-b-2 ${
								active === 'date'
									? 'border-black'
									: 'border-stone-400'
							} text-xl text-stone-600 px-2 outline-none`}
							type='date'
							ref={dateRef}
							onFocus={() => {
								handleFocus('date');
							}}
							onBlur={handleBlur}
							name='date'
							onChange={handleChange}
							value={formData.date}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default NewProject;
