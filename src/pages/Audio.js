import Layout from '../Components/Layout'
import {TextField, Button} from '@material-ui/core'
import Link from 'next/link'

import '../styles/index.scss';

const Audio = () => {

  return(
    <Layout pageName="Audio">
      <form className="form">
        <audio controls>
          <source src="horse.ogg" type="audio/ogg"/>
          <source src="horse.mp3" type="audio/mpeg"/>
        </audio>
        <TextField placeholder="Por favor escribe lo que escuchaste" multiline rows={2} rowsMax={4}/>
        <Link href="/Imagen"><Button variant="contained" color="primary">Continuar</Button></Link>
      </form>
    </Layout>
  )
}

export default Audio;