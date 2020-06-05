import Layout from '../Components/Layout';
import { TextField, Button } from '@material-ui/core';
import Link from 'next/link'

import '../styles/index.sass';

const EligePrimera = () => {
  return (
    <Layout pageName="Confirmacion">
      <h3>POR MEDIO DEL SIGUIENTE TEST PODREMOS EVALUAR TU DESEMPEÑO EN CADA UNA DE LAS TÉCNICAS Y ASÍ PODERTE BRINDAR UNA EXPERIENCIA COMPLETAMENTE DIFERENTE AL MOMENTO DE APRENDER </h3>
      <h3>ACOMPAÑANOS</h3>
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
