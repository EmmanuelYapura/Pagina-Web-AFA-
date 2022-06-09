import './Contact.css'
import { HiPhone, HiLocationMarker, HiClock } from "react-icons/hi"

export function Contact(){
    return(
        <div className='container-contact'>

        <div className='contact-text'>

        <p> <i><HiLocationMarker /></i> <b> Ubicacion: </b> texto</p>
        <p> <i> <HiClock /></i> <b>Horarios: </b> texto</p>
        <p> <i><HiPhone /></i> <b>Tel: texto</b></p>

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

        {/* 
              <label htmlFor="nombre">Nombre:
                </label>
                <input type="text" name='nombre'/>

                <label htmlFor="apellido">Apellido:
                </label>
                <input type="text" name='apellido'/>

                <label htmlFor="comentario">Comentario:
                </label>
                <input type="text" name='comentario'/>
         */}

         {/* 
            <label htmlFor="">Nombre:
                <input type="text" name='nombre'/>
                </label>
                <label htmlFor="">Apellido:
                <input type="text" name='apellido'/>
                </label>
                <label htmlFor="">Comentario:
                <input type="text" name='comentario'/>
                </label>
          */}
          
        </div>
    )
}