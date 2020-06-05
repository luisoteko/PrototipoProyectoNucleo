import { Card } from '@material-ui/core';

const Tarjeta = (props) =>{

  let classes=props.selected?"card selected":"card"
  classes = classes + " " + props.className

  return (
    <Card variant="outlined" onClick={props.handle} className={classes}>
      {
        props.src==null ? 
          props.children:
          <img src={props.src} className={props.className}/>
      }
      <h4>{props.text}</h4>
    </Card>
  )
}

export default Tarjeta