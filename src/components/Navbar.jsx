import './Navbar.css'

export function Navbar() {
	return (
		<div className="barra-nav">
			<a href="#" className="logo">Logo</a>
			{/* Aqui va un boton  */}
			<ul className="nav-menu">
				<li className="nav-menu-item"><a href="#" className="nav-menu-link">Item 1</a></li>
				<li className="nav-menu-item"><a href="#" className="nav-menu-link">Item 2</a></li>
				<li className="nav-menu-item"><a href="#" className="nav-menu-link">Item 3</a></li>
				<li className="nav-menu-item"><a href="#" className="nav-menu-link">Item 4</a></li>
			</ul>

		</div>
	)
}