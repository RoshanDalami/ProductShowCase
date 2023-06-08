import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';
import { motion } from "framer-motion";

const MainNavigation = () => {
  return (
    <>
    
      <motion.div className={classes.wrapper} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3, delay:2}}>
        <nav>
          <ul className={classes.itemWrapper}>
            <NavLink to={"/"} className={classes.item}>
              Home
            </NavLink>
            <NavLink to={"/products"} className={classes.item}>
              Products
            </NavLink>
            
          </ul>
        </nav>
      </motion.div>
    </>
  );
};


export default MainNavigation
