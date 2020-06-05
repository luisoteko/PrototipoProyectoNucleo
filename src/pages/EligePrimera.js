import Layout from '../Components/Layout';
import { TextField, Button } from '@material-ui/core';
import Link from 'next/link'

import '../styles/index.sass';

const EligePrimera = () => {
  return (
    <Layout pageName="Confirmacion">
      <h3>CON EL SIGUIENTE TEST ANALIZAREMOS TU NIVEL DEL IDIOMA QUE ELEGISTE Y LA ESTRUCTURA DE LAS PREGUNTAS QUE MEJOR COMPRENDES </h3>
      <h3>ELIGE LA CATEGORIA CON LA QUE TE SIENTAS MAS COMODO</h3>
      <div className="botonesEleccion">
        <Link href={{pathname: "/Test", query:{tipo: 'TEXTO'}}}><Button variant="contained" color="primary">Comprension de Texto</Button></Link>
        <Link href={{pathname: "/Test", query:{tipo: 'IMAGEN'}}}><Button variant="contained" color="primary">Imagenes</Button></Link>
        <Link href={{pathname: "/Test", query:{tipo: 'AUDIO'}}}><Button variant="contained" color="primary">Audio</Button></Link>
        <Link href={{pathname: "/Test", query:{tipo: 'VIDEO'}}}><Button variant="contained" color="primary">Video</Button></Link>
      </div>
    </Layout>
  )
}

export default EligePrimera;
