import Layout from '../Components/Layout'
import {Card} from '@material-ui/core'
import Link from 'next/link'

import '../styles/index.scss';

const Resultados = () => {

  return(
    <Layout pageName="Resultados">
      <h2>Elige un tema para practicar</h2>
      <div className="CardsContainer">
        <Card variant="outlined">
          <img src="/images/magnet.png"/>
          <h4>Ciencia</h4>
        </Card>
        <Card variant="outlined">
          <img src="/images/magnet.png"/>
          <h4>Arte</h4>
        </Card>
        <Card variant="outlined">
          <img src="/images/magnet.png"/>
          <h4>Deportes</h4>
        </Card>
        <Card variant="outlined">
          <img src="/images/magnet.png"/>
          <h4>Entretenimiento</h4>
        </Card>
      </div>

    </Layout>
  )
}

export default Resultados;