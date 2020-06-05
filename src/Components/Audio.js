import {RadioGroup, FormControlLabel, Radio, Button} from '@material-ui/core'

const Audio = (props) => {

  return(
      <div className="form">
      <h4>PREGUNTA N°: {props.time}</h4>
        <audio controls>
          <source src="horse.ogg" type="audio/ogg"/>
        </audio>
        <h3>SELECCIONA LA OPCIÓN QUE CONSIDERES CORRECTA</h3>
        <div className="form_audio">
          <RadioGroup aria-label="gender" name="opciones" >
            <FormControlLabel value="a. Estan en una tienda" control={<Radio />} label="a. Estan en una tienda" />
            <FormControlLabel value="b. Estan en una casa" control={<Radio />} label="b. Estan en una casa" />
            <FormControlLabel value="c. Estan en la calle" control={<Radio />} label="c. Estan en la calle" />
            <FormControlLabel value="d. Estan en un aeropuerto" control={<Radio />} label="d. Estan en un aeropuerto" />
          </RadioGroup>
        </div>
        <Button onClick={props.handle} variant="contained" color="primary" >CONTINUAR</Button>
      </div>
  )
}

export default Audio;