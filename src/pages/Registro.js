import Layout from '../Components/Layout';
import {TextField, Button} from '@material-ui/core';
import Link from 'next/link'

import '../styles/index.sass';

const Home = () => {
  return (
      <Layout pageName="Inicio">
        <form noValidate={false} autoComplete="on" className="form">
          <TextField label="Usuario" variant="outlined"/>
          <TextField label="Contraseña" variant="outlined"/>
          <TextField label="Confirmar Contraseña" variant="outlined"/>
          <Link href="/Confirmacion"><Button variant="contained" color="primary">Registrame</Button></Link>
          <h5>¿YA TIENES UNA CUENTA? <Link href="/Login"><a>Inicia Sesion</a></Link></h5>
        </form>
      </Layout>
  )
}

export default Home;
