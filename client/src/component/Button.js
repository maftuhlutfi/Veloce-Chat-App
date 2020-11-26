import './Button.scss';

function Button({label, style, icon}) {
	return (
		<button className='button' style={style}>
			{label && label}
			{icon && icon}
		</button>
	);
}

export default Button;