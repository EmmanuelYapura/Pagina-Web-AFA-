import './Section.css'

export function Section({ position , image, rivalsGroup, candidates }) {
	return (
		<div className="container-section">
			<div className={`container-img-${position} img-base`}>
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
						<li className='item-li'>{rivalsGroup[0]}</li>
						<li className='item-li'>{rivalsGroup[1]}</li>
						<li className='item-li'>{rivalsGroup[2]}</li>
					</ul>
					<h3 className='title-rivals'>Rivales candidatos:</h3>
					<ul>
						<li className='item-li'>{candidates[0]}</li>
						<li className='item-li'>{candidates[1]}</li>
						<li className='item-li'>{candidates[2]}</li>
					</ul>
				</div>
			</div>

		</div>
	)
}