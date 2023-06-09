import Data from "../assets/Data";
import Card from "../Components/Card";
import classes from './Product.module.css'

const Product = () => {
  return (
    <div className={classes.container}>
      {Data.map((prod) => {
        return (<Card title={prod.title} image={prod.image} key={prod.id} id={prod.id} />);
      })}
    </div>
  );
};

export default Product;
