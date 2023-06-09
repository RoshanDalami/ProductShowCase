import { Link} from "react-router-dom";

import classes from './Card.module.css'

const Card = ({image,title,id}) => {
    
  return (
    <Link className={classes.link}>
    <div className={classes.container}>

      <div className={classes.imageWrapper} >
      <center>

        <img src={image} alt="" className={ classes.image }/>
      </center>
      </div>
      <div className={classes.wrapper}>

      <div className={classes.title}>
        <h4>{title}</h4>
      </div>
      <Link to={`${id}`} className={classes.btn}>
        Details
      </Link>
      </div>
    </div>
    </Link>
  )
}

export default Card
