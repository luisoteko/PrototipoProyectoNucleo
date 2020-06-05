import {Button} from '@material-ui/core'
import Link from 'next/link'

const Resultados = () => {

  return(
      <div className="form">
        <h2>RESULTADOS</h2>
        <span><h4>AUDIO:</h4> 10%</span>
        <span><h4>IMAGENES:</h4> 30%</span>
        <span><h4>TEXTO:</h4> 5%</span>
        <span><h4>VIDEO:</h4> 55%</span>
        <span>GENIAL, PARECE QUE LA MANERA EN LA QUE MEJOR APRENDES ES VIENDO VIDEOS</span>
        <Link href="/Categorias"><Button variant="contained" color="primary">CONTINUAR</Button></Link>
      </div>
  )
}

export default Resultados;