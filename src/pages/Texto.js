import Layout from '../Components/Layout'
import {TextField, Button} from '@material-ui/core'
import Link from 'next/link'

import '../styles/index.scss';

const Audio = () => {

  return(
    <Layout pageName="Audio">
      <form className="form">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu rutrum felis. Nullam mollis massa quis diam fermentum hendrerit. Donec blandit vitae neque vitae dictum. Maecenas vehicula erat ut dignissim aliquet. Praesent volutpat egestas sollicitudin. Nulla tempor ante magna, gravida.
        </p>
        <TextField placeholder="Por favor traduce la lectura" multiline rows={2} rowsMax={4}/>
        <Link href="/Resultados"><Button variant="contained" color="primary">Continuar</Button></Link>
      </form>
    </Layout>
  )
}

export default Audio;