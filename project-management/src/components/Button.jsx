const Button = ({ onClick, text, type }) => {
	return (
		<button
			onClick={onClick}
			className={`px-4 py-2 text-xs md:text-2xl rounded-md ${
				type === 'gray'
					? 'bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'
					: type === 'main'
					? 'bg-slate-900 text-white hover:bg-slate-800'
					: type === 'white'
					? 'bg-transperant text-black '
					: ''
			}`}
		>
			{text}
		</button>
	);
};

export default Button;
