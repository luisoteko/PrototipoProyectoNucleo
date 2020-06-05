import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button } from '@material-ui/core'

const Video = (props) => {

  return (
    <div className="form">
      <h4>PREGUNTA N°: {props.time}</h4>
      <video controls>
        <source src="horse.ogg" type="video/ogg" />
      </video>
      <h3>SELECCIONA LA OPCION QUE CONSIDERES CORRECTA</h3>

        <RadioGroup aria-label="gender" name="opciones" >
          <FormControlLabel value="a. Son dos amigas hablando" control={<Radio />} label="a. Son dos amigas hablando" />
          <FormControlLabel value="b. Son dos desconocidas hablando" control={<Radio />} label="b. Son dos desconocidas hablando" />
          <FormControlLabel value="c. Son dos enemigas hablando" control={<Radio />} label="c. Son dos enemigas hablando" />
          <FormControlLabel value="d. Ninguna de las anteriores" control={<Radio />} label="d. Ninguna de las anteriores" />
        </RadioGroup>
      <Button onClick={props.handle} variant="contained" color="primary" >CONTINUAR</Button>
    </div>
  )
}

export default Video;