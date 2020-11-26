import './Logo.scss';

function Logo(props) {
	return (
		<div className="logo-container">
			<img className='logo' src="https://i.ibb.co/N1znKjQ/vc-logo500px.png" alt="vc-logo800px" />
			<div>
				<h3>Veloce Chat</h3>
				<span className='tagline'>Quick chat app for you</span>
			</div>
		</div>
	);
}

export default Logo;