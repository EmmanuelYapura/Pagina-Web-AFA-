import './Card.css'

export function Card({ type , image , fullName, games, goals, lastClub}) {
	return (
		<div className='body-card'>
			<header>
				<img className={type} src={require(`../assets/${image}.jpg`)} alt="" width="100%" height="350px" />
			</header>
			<div className='info-card'>
			<h3>{fullName}</h3>
				<ul>
					<li>Partidos jugados: {games}</li>
					<li>Goles: {goals}</li>
					<li>Ultimo club: {lastClub}</li>
				</ul>
			</div>
		</div>
	)
}