import classes from "./Home.module.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className={classes.container}
      initial={{ y: -300 }}
      animate={{
        y: 150,
      }}
      transition={{type:'spring',stiffness:200,duration:2}}
    >
      <h1 className={classes.heroText}>Welcome !</h1>
    </motion.div>
  );
};

export default Home;
