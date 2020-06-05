import Layout from '../Components/Layout'
import {Button, Card} from '@material-ui/core';
import Link from 'next/link';
import Tarjeta from '../Components/Tarjeta';
import {useState} from 'react'

import '../styles/index.sass';

const Confirmacion = () => {

  const idiomas = [
    { text:"INGLÉS", src:"/images/banderaing.svg"   },
    { text:"ESPAÑOL", src:"/images/banderaesp.svg"  },
    { text:"PORTUGÉS", src:"/images/banderaptg.svg" },
    { text:"FRANCÉS", src:"/images/banderafra.svg"  }
  ]

  const [selected, setSelected] = useState("")

  const handleClick = e =>{
    console.log(e)
    e.persist()
    console.log(e.currentTarget.children[1].childNodes[0].data)
    let target = e.currentTarget.children[1].childNodes[0].data;
    setSelected(target)
  }

  return(
    <Layout pageName="Confirmacion">
      <h3>POR FAVOR SELECCIONA EL IDIOMA QUE DESEAS APRENDER</h3>
      <div className="banderasContainer">

        {
          idiomas.map((idioma, key)=>{
              if(selected===idioma.text){
                return <Tarjeta handle={handleClick} src={idioma.src} className="bandera" selected text={idioma.text} key={key} />
              } else {
                return <Tarjeta handle={handleClick} src={idioma.src} className="bandera" text={idioma.text} key={key} />
              }
            }
          )
        }

      </div>
      <br/>
      <Link href="/EligePrimera"><Button variant="contained" color="primary">CONTINUAR</Button></Link>
    </Layout>
  )

}

export default Confirmacion;