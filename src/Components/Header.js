import Link from 'next/link'

const Header = (props) => {
  return (
    <div className="Header">
      <Link href="/">
        <div>
          {props.name=="Inicio"?
          <img src="/images/magnet_rojo.png" className="logo logo_big"/>:
          <img src="/images/magnet_rojo.png" className="logo"/>
          }
          <br/>
          <br/>

        </div>
      </Link>
    </div>
  )
}

export default Header
