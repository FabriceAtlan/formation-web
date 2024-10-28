import './footer.css';

interface FooterProps {
	logoKaamelott: string;
}

function Footer({logoKaamelott}: FooterProps) {
	return (
		<>
			<footer className='footer-wrapper'>
				<nav className='footer__nav'>
					<img className="footer__logo" src={logoKaamelott} alt="" />
					<ul className="footer__ul">
						<li>6 chemin de la Table ronde</li>
						<li>Île de Bretagne - royaume de Logres</li>
					</ul>
					{/* <section className="footer__section"> */}
					{/* </section> */}
				</nav>
			</footer>
		</>
	)

}

export default Footer;