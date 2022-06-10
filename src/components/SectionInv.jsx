import './SectionInv.css'

export function SectionInv({ image }) {
    return (
        <div className="container-section">
            <div className='container-text'>
                <h1 className='title-section-inv'>Rivales en Qatar22</h1>
                <hr />
                <div className="container-info">

                    <h2 className='title-group-inv'>Grupo X</h2>
                    <h3 className='title-rivals-inv'>Rivales a enfrentar:</h3>
                    <ul>
                        <li className='item-li-inv'>rival 1</li>
                        <li className='item-li-inv'>rival 2</li>
                        <li className='item-li-inv'>rival 3</li>
                    </ul>
                    <h3 className='title-rivals-inv'>Rivales candidatos:</h3>
                    <ul>
                        <li className='item-li-inv'>rival 1</li>
                        <li className='item-li-inv'>rival 2</li>
                        <li className='item-li-inv'>rival 3</li>
                    </ul>
                </div>
            </div>

            <div className="container-img">
                <img
                    width='100%' height='100%'
                    src={require(`../assets/${image}.jpg`)}
                    alt='Foto de jugador' />
            </div>

        </div>
    )
}