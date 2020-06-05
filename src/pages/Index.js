import Layout from '../Components/Layout';
import {Button} from '@material-ui/core';
import Link from 'next/link'

import '../styles/index.sass';

const Home = () => {
  return (
      <Layout pageName="Inicio">
        <form noValidate={false} autoComplete="on" className="form">
          <Link href="/Login"><Button variant="contained" color="primary">Iniciar Sesion</Button></Link>
          <Link href="/Regitro"><Button variant="contained" color="primary">Registrame</Button></Link>
          <Link href="/Conocenos"><Button variant="contained" color="primary">Conocenos</Button></Link>
        </form>
      </Layout>
  )
}

export default Home;
