import './Card.css'

export function Card({ type , image , fullName, games, goals, lastClub}) {
	return (
		<div className='body-card'>
			<header>
				<img className={type} src={require(`../assets/${image}.jpg`)} id="jugador" alt="jugador" />
			</header>
			<div className='info-card'>
			<h3 className='title-info-card'>{fullName}</h3>
				<ul>
					<li>Partidos jugados: {games}</li>
					<li>Goles: {goals}</li>
					<li>Ultimo club: {lastClub}</li>
				</ul>
			</div>
		</div>
	)
}