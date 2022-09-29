import React from "react";
import Banner from "../../../components/Client/Banner/Banner";
import ListProduct from "../../../feature/components/listProduct";
import styles from "./homepage.module.css";
const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Banner />
      <ListProduct />
    </div>
  );
};

export default HomePage;
