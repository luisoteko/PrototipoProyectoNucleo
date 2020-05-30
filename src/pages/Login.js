import Layout from '../Components/Layout';
import {TextField, Button} from '@material-ui/core';
import Link from 'next/link'

import '../styles/index.scss';

const Login = () => {
  return (
    <Layout pageName="Login">
          <form noValidate={false} autoComplete="on" className="form">
          <TextField label="Usuario" variant="outlined"/>
          <TextField label="Contraseña" variant="outlined"/>
          <Link href="/Confirmacion"><Button variant="contained" color="primary">Iniciar Sesion</Button></Link>
          <h5>No tienes una cuenta? <Link href="/"><a>Registrate</a></Link></h5>
        </form>
    </Layout>
  )
}

export default Login;