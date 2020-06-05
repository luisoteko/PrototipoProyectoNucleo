import Tarjeta from './Tarjeta'

const Categoria = (props) => {

  return (
    <Tarjeta text={props.titulo} handle={props.handle} selected={props.selected} className="Categoria">
      {props.titulo == "VERBOS"
        ? <div className="collage">
            <img src="/images/verbos/control.png"/>
            <img src="/images/verbos/microfono.png"/>
            <img src="/images/verbos/libro.png"/>
            <img src="/images/verbos/audifonos.png"/>
          </div>
        : props.titulo == "PRONOMBRES"
          ? <div className="collage">
              <img src="/images/pronombres/familia.png"/>
            </div>
          : props.titulo == "PROFESIONES"
            ? <div className="collage">
                <img src="/images/profesiones/codificacion.png"/>
                <img src="/images/profesiones/doctor.png"/>
                <img src="/images/profesiones/guerra.png"/>
                <img src="/images/profesiones/epi.png"/>
                <img src="/images/profesiones/ingeniero.png"/>
                <img src="/images/profesiones/policia.png"/>
              </div>
            : props.titulo == "DEPORTES"
              ? <div className="collage">
                <img src="/images/deportes/ajedrez.png"/>
                <img src="/images/deportes/baloncesto.png"/>
                <img src="/images/deportes/bicicleta.png"/>
                <img src="/images/deportes/deporte.png"/>
                <img src="/images/deportes/futbol-americano.png"/>
                <img src="/images/deportes/tenis.png"/>
                <img src="/images/deportes/gimnasio.png"/>
                <img src="/images/deportes/trofeo.png"/>
              </div>
              : props.titulo == "COMIDA"
                ? <div className="collage">
                  <img src="/images/comida/carne.png"/>
                  <img src="/images/comida/comida-rapida.png"/>
                  <img src="/images/comida/comida-sana.png"/>
                  <img src="/images/comida/guacamole.png"/>
                  <img src="/images/comida/pan-de-molde.png"/>
                  <img src="/images/comida/vegetal.png"/>
                </div>
                : props.titulo == "ROPA"
                  ? <div className="collage">
                    <img src="/images/ropa/chaqueta.png"/>
                    <img src="/images/ropa/jeans-azules.png"/>
                    <img src="/images/ropa/moda.png"/>
                    <img src="/images/ropa/ropa.png"/>
                    <img src="/images/ropa/sujetador-deportivo.png"/>
                    <img src="/images/ropa/zapato.png"/>
                  </div>
                  : props.titulo == "ACCESORIOS"
                    ? <div className="collage">
                      <img src="/images/accesorios/bolso.png"/>
                      <img src="/images/accesorios/cinturon.png"/>
                      <img src="/images/accesorios/colgante.png"/>
                      <img src="/images/accesorios/corbata.png"/>
                      <img src="/images/accesorios/gafas.png"/>
                      <img src="/images/accesorios/joyeria.png"/>
                      <img src="/images/accesorios/joyeria (1).png"/>
                      {/* <img src="/images/accesorios/reloj-inteligente.png"/> */}
                      <img src="/images/accesorios/viaje.png"/>
                    </div>
                    : props.titulo == "LUGARES"
                      ? <div className="collage">
                        <img src="/images/lugares/sitio.png"/>
                      </div>:null}
    </Tarjeta>
  )
}

export default Categoria