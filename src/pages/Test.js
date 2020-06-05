import '../styles/index.sass';
import {useState, useEffect} from 'react'
import Layout from '../Components/Layout'
import Audio from '../Components/Audio'
import Imagen from '../Components/Imagen'
import Texto from '../Components/Texto'
import Video from '../Components/Video'
import Resultados from '../Components/Resultados'

const Test = (props) => {

  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(0);

  const [next, setNext] = useState("");

  useEffect(()=>{
    handleClick();
  },[])

  const nextPage = () => {
    if (count < 10) {
      setCount(count + 1)

      if (count === 0 && props.url.query['tipo'] != null) {
        console.log(count)
        return props.url.query['tipo']
      }
      props.url.query['tipo'] != null ? setRandom(Math.trunc(Math.random() * 5)) : setRandom(Math.trunc(Math.random() * 4))

      if (random == 0) {
        return "IMAGEN"
      } else if (random == 1) {
        return "AUDIO"
      } else if (random == 2){
        return "TEXTO"
      } else if(random == 3){
        return "VIDEO"
      }
      else {
        return props.url.query['tipo']
      }
    } else {
      return "RESULTADOS"
    }
  }

  const handleClick=()=>{
    setNext(nextPage())
  }


  return(
    <Layout pageName="Test">
      {
        next == "IMAGEN" ? <Imagen handle={handleClick} time={count} />:
          next == "AUDIO" ? <Audio handle={handleClick} time={count} />:
            next == "TEXTO" ? <Texto handle={handleClick} time={count} />:
              next == "VIDEO" ? <Video handle={handleClick} time={count} /> :
              next == "RESULTADOS"?<Resultados />:null
      }
    </Layout>
  )

}

export default Test;