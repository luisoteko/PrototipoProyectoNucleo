import Layout from '../Components/Layout';
import {Button} from '@material-ui/core';
import Link from 'next/link'

import '../styles/index.sass';

const Home = () => {
  return (
      <Layout pageName="Inicio">
        <form noValidate={false} autoComplete="on" className="form">
          <h3>EL PRESENTE ES UN PROTOTIPO DE UNA IDEA, LA CUAL CONSISTE EN UNA PLATAFORMA DE APRENDIZAJE DE IDIOMAS, QUE A TRAVES DE MACHINE LEARNING Y APRENDIZAJE NO SUPERVISADO PUEDA DETECTAR LA MANERA EN LA QUE UNA PERSONA APRENDE DE MANERA MAS EFECTIVA</h3>
          <Link href="/"><Button variant="contained" color="primary">REGRESAR</Button></Link>
        </form>
      </Layout>
  )
}

export default Home;
