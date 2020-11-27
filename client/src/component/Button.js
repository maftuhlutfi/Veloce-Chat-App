import './Button.scss';

function Button({label, icon, ...otherProps}) {
	return (
		<button className='button' {...otherProps}>
			{label && label}
			{icon && icon}
		</button>
	);
}

export default Button;