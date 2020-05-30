import Link from 'next/link'


const Header = () => {
  return (
    <div className="Header">
      <Link href="/"><img src="/images/magnet_rojo.png" className="logo"/></Link>
    </div>
  )
}

export default Header
