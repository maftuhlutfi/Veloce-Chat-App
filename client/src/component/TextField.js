import { useState } from 'react';
import './TextField.scss';

function TextField({label, handleChange, value, underlined, ...otherProps}) {
	const [isFocus, setIsFocus] = useState(false);

	const underlinedStyle = {
		border: '0 0 2px 0 solid #000',
		borderRadius: '0'
	}

	return (
		<div className='text-field'>
			{label && <span
				className={`label ${isFocus || value ? 'shrink' : ''}`}
			>
				{label}
			</span>}
			<input 
				onFocus={() => setIsFocus(true)}
				onBlur={() => setIsFocus(false)} 
				className={`input ${isFocus || value ? 'focus' : ''}`}
				onChange={handleChange}
				style={underlined ? underlinedStyle : {}}
				{...otherProps} 
			/>
		</div>
	);
}

export default TextField;