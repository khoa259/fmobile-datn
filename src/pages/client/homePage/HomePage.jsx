import React from "react";
import { NavLink } from "react-router-dom";
import Banner from "../../../components/Client/Banner/Banner";
import styles from "./homepage.module.css";
const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Banner />
      <div className="mx-auto text-center w-full">
        <div className="mt-10 flex gap-8 justify-center">
          <NavLink to={`/iphone`}>
            <div className={styles.cate}>
              <div className="text-center text-white text-2xl font-semibold py-5">iPhone</div>
              <div className="">
                <img src="https://fstudiobyfpt.com.vn/ContentV2/assets/img/iphone.png" alt="" className="h-auto w-56" />
              </div>
            </div>
          </NavLink>
          <div className={styles.cate}>
            <div className="text-center text-white text-2xl font-semibold py-5">iPad</div>
            <div className="">
              <img src="https://fstudiobyfpt.com.vn/ContentV2/assets/img/ipad..png" alt="" className="h-auto w-56" />
            </div>
          </div>
          <div className={styles.cate}>
            <div className="text-center text-white text-2xl font-semibold py-5">Mac</div>
            <div className="">
              <img src="https://fstudiobyfpt.com.vn/ContentV2/assets/img/mac..png" alt="" className="h-auto w-56" />
            </div>
          </div>
          <div className={styles.cate}>
            <div className="text-center text-white text-2xl font-semibold py-5">Apple Watch</div>
            <div className="">
              <img
                src="https://fstudiobyfpt.com.vn/ContentV2/assets/img/Apple-watch..png"
                alt=""
                className="h-auto w-56"
              />
            </div>
          </div>
          <div className={styles.cate}>
            <div className="text-center text-white text-2xl font-semibold py-5">Phụ Kiện</div>
            <div className="">
              <img src="https://fstudiobyfpt.com.vn/ContentV2/assets/img/airtag..png" alt="" className="h-auto w-56" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
