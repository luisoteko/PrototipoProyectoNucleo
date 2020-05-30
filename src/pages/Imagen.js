import Layout from '../Components/Layout'
import {TextField, Button} from '@material-ui/core'
import Link from 'next/link'

import '../styles/index.scss';

const Audio = () => {

  return(
    <Layout pageName="Audio">
      <form className="form">
        <img src="/images/einstein.png" className="cientifico"/>
        <TextField placeholder="Por favor escribe lo que ves" multiline rows={2} rowsMax={4}/>
        <Link href="/Texto"><Button variant="contained" color="primary">Continuar</Button></Link>
      </form>
    </Layout>
  )
}

export default Audio;