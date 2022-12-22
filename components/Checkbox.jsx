const Checkbox = ({
	id,
	className,
	label,
	onChange = '',
	checked = false,
	...props
}) => {
	return (
		<div className={className} {...props}>
			<input
				type='checkbox'
				id={id}
				onChange={onChange}
				checked={checked}
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	);
};

export default Checkbox;
