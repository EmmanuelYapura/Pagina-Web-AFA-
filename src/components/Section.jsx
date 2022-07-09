import './Section.css'

export function Section({ position , image }) {
	return (
		<div className="container-section">
			<div className={`container-img-${position}`}>
				<img
					width='100%' height='100%'
					src={require(`../assets/${image}.jpg`)}
					alt='Foto de jugador' />
			</div>

			<div className='container-text'>
				<h1 className='title-section'>Rivales en Qatar22</h1>
				<hr />
				<div className="container-info">
					<h2 className='title-group'>Grupo X</h2>
					<h3 className='title-rivals'>Rivales a enfrentar:</h3>
					<ul>
						<li className='item-li'>rival 1</li>
						<li className='item-li'>rival 2</li>
						<li className='item-li'>rival 3</li>
					</ul>
					<h3 className='title-rivals'>Rivales candidatos:</h3>
					<ul>
						<li className='item-li'>rival 1</li>
						<li className='item-li'>rival 2</li>
						<li className='item-li'>rival 3</li>
					</ul>
				</div>
			</div>

		</div>
	)
}