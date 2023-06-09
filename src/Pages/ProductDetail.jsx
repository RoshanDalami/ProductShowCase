import { useParams, Link } from "react-router-dom";
import Data from '../assets/Data';

import classes from './ProductDetail.module.css'
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const [image,setImage ] = useState('');
  const [title,setTitel ] = useState('');
  const [description,setDescription ] = useState('');
  const params = useParams();
  
  const idParams = params.productID;
  const findItem = (id)=>{
    const  index = Data.findIndex((item)=> id === item.id.toString())
     const  details = Data[index];
     setImage(details.image);
     setTitel(details.title);
     setDescription(details.description)
  }
  useEffect(()=>{
     findItem(idParams)
  },[idParams])
  return (
    <>

    <div>
      <h1 style={{ color: "white" , textAlign:'center' }}>ProductDetails</h1>

      <div className={classes.container}>
      <div className={classes.wrapper}>
      <center>

        <img src={image} alt="" className={classes.image} />
      </center>
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.description}>{description}</p>
      </div>
      </div>
<center>

      <p>
        <Link to={".."} relative={"path"} >
          {" "}
          <button className={classes.btn}>Go Back</button>
        </Link>
      </p>
</center>
    </div>
    </>
  );
};

export default ProductDetail;
