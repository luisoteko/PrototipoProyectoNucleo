import Layout from '../Components/Layout'
import Categoria from '../Components/Categoria'
import {Card} from '@material-ui/core'
import {useState} from 'react'

import '../styles/index.sass';

const Categorias = () => {

  
  const data = [
    {titulo: 'VERBOS'},
    {titulo: 'PRONOMBRES'},
    {titulo: 'PROFESIONES'},
    {titulo: 'DEPORTES'},
    {titulo: 'COMIDA'},
    {titulo: 'ROPA'},
    {titulo: 'ACCESORIOS'},
    {titulo: 'LUGARES'}
  ]

  const [selected, setSelected] = useState("")

  const handleClick = e =>{
    e.persist()
    let target = e.currentTarget.children[1].childNodes[0].data;
    setSelected(target)
    console.log(selected)
  }

  return(
    <Layout pageName="Resultados">
      <h2>Elige un tema para practicar</h2>
      <div className="CardsContainer">
      {
        data.map((item, index)=>{
            return selected===item.titulo?
              <Categoria titulo={item.titulo} key={index} handle={handleClick} selected/>
            : <Categoria titulo={item.titulo} key={index} handle={handleClick}/>
          }
        )
      }
      </div>

    </Layout>
  )
}

export default Categorias;