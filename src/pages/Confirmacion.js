import Layout from '../Components/Layout'
import {Button} from '@material-ui/core';
import Link from 'next/link'

import '../styles/index.css';

const Confirmacion = () => {

  return(
    <Layout pageName="Confirmacion">
      <h3>A continuacion te haremos un pequeño test para identificar la manera en la que tu aprendes mejor</h3>
      <img src="/images/bandera.svg" className="bandera"/>
      <br/>
      <Link href="Audio"><Button variant="contained" color="primary">Continuar</Button></Link>
    </Layout>
  )

}

export default Confirmacion;