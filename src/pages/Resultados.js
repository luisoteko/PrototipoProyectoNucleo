import Layout from '../Components/Layout'
import {Button} from '@material-ui/core'
import Link from 'next/link'

import '../styles/index.scss';

const Resultados = () => {

  return(
    <Layout pageName="Resultados">
      <form className="form">
        <h2>Resultados</h2>
        <span><h5>Audio:</h5> 15%</span>
        <span><h5>Imagenes:</h5> 30%</span>
        <span><h5>Texto:</h5> 55%</span>
        <span>Genial, parece que la manera en la que mejora aprendes es leyendo textos</span>
        <Link href="/Categorias"><Button variant="contained" color="primary">Continuar</Button></Link>
      </form>
    </Layout>
  )
}

export default Resultados;