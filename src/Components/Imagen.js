import {TextField, Button} from '@material-ui/core'

const Imagen = (props) => {

  return(
      <div className="form">
        <h4>PREGUNTA N°: {props.time}</h4>
        <img src="/images/einstein.png" className="cientifico"/>
        <h5>ESCRIBE QUE SE TE VIENE A LA MENTE AL VER LA IMAGEN</h5>
        <TextField placeholder="Tu respuesta" multiline rows={2} rowsMax={4}/>
        <Button variant="contained" color="primary" onClick={props.handle}>CONTINUAR</Button>

      </div>
  )
}

export default Imagen;