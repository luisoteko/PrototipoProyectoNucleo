import {TextField, Button} from '@material-ui/core'
import {useEffect, useState} from 'react'

const Imagen = (props) => {

  const [imagen, setImagen] = useState("einstein")
  useEffect(()=>{
    let random = Math.trunc(Math.random() * 5)
    async function set(){
      await setImagen( random == 0 ? "parque_grande":
        random == 1 ? "parque_niña":
          random == 2 ? "juguetes":
            random == 3 ? "leer":
              //random == 4 ?
              "cocinar")
    }
    set()
    console.log(imagen)
  })

  return(
      <div className="form">
        <h4>PREGUNTA N°: {props.time}</h4>
        <img src={"/images/acciones/" + imagen + ".jpeg"} className="cientifico"/>
        <h3>ESCRIBE QUE SE TE VIENE A LA MENTE AL VER LA IMAGEN</h3>
        <TextField placeholder="Tu respuesta" multiline rows={2} rowsMax={4}/>
        <Button variant="contained" color="primary" onClick={props.handle}>CONTINUAR</Button>

      </div>
  )
}

export default Imagen;