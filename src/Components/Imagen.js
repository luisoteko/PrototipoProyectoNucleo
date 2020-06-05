import {Radio, RadioGroup, FormControlLabel, TextField, Button} from '@material-ui/core'
import {useEffect, useState} from 'react'

const Imagen = (props) => {

  const [imagen, setImagen] = useState("einstein")
  const [pregunta, setPregunta] = useState("abierta")

  useEffect(()=>{
    let random1 = Math.trunc(Math.random() * 5)
    let random2 = Math.trunc(Math.random() * 2)

      setImagen( random1 == 0 ? "parque_grande":
        random1 == 1 ? "parque_niña":
          random1 == 2 ? "juguetes":
            random1 == 3 ? "leer":
              //random == 4 ?
              "cocinar")
      setPregunta( random2 == 0 ?"abierta":"cerrada")
  }, [props.time])

  return(
      <div className="form">
        <h4>PREGUNTA N°: {props.time}</h4>
        <img src={"/images/acciones/" + imagen + ".jpeg"} className="cientifico"/>
        {
          pregunta=="abierta"?
          <div className="imagenAbierta">
            <h3>ESCRIBE QUE SE TE VIENE A LA MENTE AL VER LA IMAGEN</h3>
            <TextField placeholder="Tu respuesta" multiline rows={2} rowsMax={4}/>
          </div>:
          <div>
            <h3>SELECCIONA LA OPCION QUE CONSIDERES CORRECTA</h3>
            <div className="form_audio">
              <RadioGroup aria-label="gender" name="opciones" >
                <FormControlLabel value="a. The person is happy" control={<Radio />} label="a. The person is happy" />
                <FormControlLabel value="b. The person is sad" control={<Radio />} label="b. The person is sad" />
                <FormControlLabel value="c. The person is worried" control={<Radio />} label="c. The person is worried" />
                <FormControlLabel value="d. None of above" control={<Radio />} label="d. None of above" />
              </RadioGroup>
            </div>
          </div>
        }
            <Button variant="contained" color="primary" onClick={props.handle}>CONTINUAR</Button>

      </div>
  )
}

export default Imagen;