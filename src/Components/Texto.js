import {TextField, Button} from '@material-ui/core'


const Texto = (props) => {

  return(
      <div className="form">
        <h4>PREGUNTA N°: {props.time}</h4>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu rutrum felis. Nullam mollis massa quis diam fermentum hendrerit. Donec blandit vitae neque vitae dictum. Maecenas vehicula erat ut dignissim aliquet. Praesent volutpat egestas sollicitudin. Nulla tempor ante magna, gravida.
        </p>
        <h3>¿QUE ACCION ESTA REALIZANDO EL PADRE DE LA NIÑA?</h3>
        <TextField placeholder="Tu respuesta" multiline rows={2} rowsMax={4}/>
        <Button variant="contained" color="primary" onClick={props.handle}>CONTINUAR</Button>

      </div>
  )
}

export default Texto;