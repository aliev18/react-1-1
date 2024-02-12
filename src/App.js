import jordan from './img/jordan.svg';
import nike from './img/NIKE .svg';
import search from './img/from.svg';
import Vector from './img/Vector.svg';
import avatar from './img/avatar.svg';
import fon from './img/fon.svg';
import CTA from './img/CTA.svg';
import Pricing from './img/Pricing.svg';
import navigation from './img/navigation bar.svg';
function App() {
	return (
		<div className='wrapper'>
			<header
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '30px',
				}}
			>
				<div>
					<div className='header'>
						<img src={jordan} alt='jpordan' />
						<img src={nike} alt='nike' />
					</div>
					<h2
						style={{
							padding: '0',
							margin: '0',
							fontSize: '1em',
							color: '#fff',
						}}
					>
						JORDAN
					</h2>
				</div>
				<div className='homeman'>
					<ul
						style={{
							display: 'flex',
							gap: '55px',
							listStyle: 'none',
							color: '#fff',
						}}
					>
						<li className='li'>HOME</li>
						<li className='li'>MAN</li>
						<li className='li'>WOMAN</li>
						<li className='li'>KIDS</li>
						<li className='li'>SALE</li>
					</ul>
				</div>
				<div className='Group'>
					<img src={search} alt='search' />
					<img src={Vector} alt='his' />
					<img src={avatar} alt='may' />
				</div>
			</header>
			<div
				style={{
					marginLeft: '1380px',
					position: 'relative',
					top: '220px',
					right: '14px',
				}}
			>
				<img src={navigation} alt='navigation' />
			</div>
			<div style={{ margin: '395px', marginLeft: '15px' }}>
				<h1
					style={{
						color: '#fff',
						marginLeft: '90px',
						fontSize: '12px',
						fontWeight: 'bold',
					}}
				>
					CHOOSE COLOR :{' '}
				</h1>
				<img src={fon} alt='fon' />
			</div>
			<div
				style={{
					marginTop: '-494px',
					marginLeft: '533px',
				}}
			>
				<img src={CTA} alt='CTA' />
			</div>
			<div>
				<h4
					style={{
						color: '#fff',

						width: '140px',
						height: '17px',
						marginTop: '-105px',
						marginLeft: '1050px',
					}}
				>
					INSPIRATION
				</h4>
				<p
					style={{
						color: '#fff',
						font: 'Roboto',
						fontSize: '13px',
						width: '333px',
						height: '60.75px',
						marginLeft: '1050px',
						marginTop: '-13px',
					}}
				>
					Inspired by the design of the latest Air Jordan game shoe,
					the Jordan Jumpman 2021 helps up-and-coming players level up
					their game.
				</p>
			</div>
			<div
				style={{
					marginLeft: '774px',
					marginTop: '-226px',
				}}
			>
				<img src={Pricing} alt='Pricing' />
			</div>
			<div
				style={{
					font: 'Roboto',
					color: 'black',
					margin: '290px',
					marginLeft: '1149px',
					fontSize: '20px',
				}}
			>
				<h3>www.nickelfox.com</h3>
			</div>
		</div>
	);
}

export default App;
