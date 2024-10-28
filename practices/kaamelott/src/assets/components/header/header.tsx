import './header.css';

const logoKaamelott = 'https://seeklogo.com/images/K/kaamelott-bw-logo-752E25AA33-seeklogo.com.png';

interface headerProps {
	logoKaamelott: string;
}

function Header({logoKaamelott}: headerProps) {
	return (
		<>
			<header className='header-wrapper'>
				<nav className='header__nav'>
					<section className="header__section">
						<img className="header__logo" src={logoKaamelott} alt="" />
						<ul className="header__ul">
							<li>Item 1</li>
							<li>Item 2</li>
							<li>Item 3</li>
						</ul>
					</section>
				</nav>
			</header>
		</>
	)

}

export default Header;