import './Contact.css'
import { HiPhone, HiLocationMarker, HiClock } from "react-icons/hi"

export function Contact(){
    return(
        <div className='container-contact-comp'>

        <div className='contact-text'>

        <p className='contact-text-p'> <i className='contact-icon'><HiLocationMarker /></i> <b> Ubicacion: </b> texto</p>
        <p className='contact-text-p'> <i className='contact-icon'> <HiClock /></i> <b>Horarios: </b> texto</p>
        <p className='contact-text-p'> <i className='contact-icon'><HiPhone /></i> <b>Tel: </b>texto</p>

        </div>
        
        <div className='contact-form'>

        <form className='content-form'>
               
              <label htmlFor="nombre">Nombre
                </label>
                <input type="text" name='nombre'/>

                <label htmlFor="apellido">Apellido
                </label>
                <input type="text" name='apellido'/>

                <label htmlFor="comentario">Comentario
                </label>
                <input type="text" name='comentario'/>

                <button>Enviar</button>
            </form>

        </div>        
        </div>
    )
}