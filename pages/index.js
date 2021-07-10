import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
// import { toastSuccessMessage } from "../utils/toastMessage/toastMessage"
import { useEffect } from "react";
// import CreateProduct from './createProduct';
import { ApiRegister } from "../apis/services/apiRegister/ApiRegister";
import MyLayout from "../component/layout/Layout";
import styles from "../styles/dashboard/dashboard.module.css";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

export default function Home() {
  useEffect(() => {

    //     console.log('[Node.js only] ENV_VARIABLE:', process.env.ENV_VARIABLE)
    // console.log(
    //   '[Node.js only] ENV_LOCAL_VARIABLE:',
    //   process.env.ENV_LOCAL_VARIABLE
    const date = new Date();
    // date.setTime(date.getTime() + expire * 24 * 60 * 60 * 1000);
    if (process.browser) {
      document.cookie = `sessionid=yi1vr3kzutl2rg8w2rfl3spy641eqjmh;path=/`;
      setTimeout(() => {

        axios.get("http://localhost:8000/app/api/v1/get-user-info/", {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            Cookie: `sessionid=yi1vr3kzutl2rg8w2rfl3spy641eqjmh;path=/`
          }
        });
      }, 2000);
    }
    // )
    // console.log(">>>>", _handleRequestApi);
    // const _handleRequestApi = async () => {
    //   let loadData = null;
    //   let dataUrl = '/app/api/v1/get-user-info/';
    //   let response = await ApiRegister().apiRequest(loadData, 'get', dataUrl, false);
    //   console.log("res uncom :", response);
    //   // setImages(response);//==> output: {}
    // }
    // _handleRequestApi();

    //   // toastSuccessMessage('success');

  }, []);

  return (
    <>
      <div dir="rtl" className={styles.left_one}>
        <div className={styles.left_one_1}>
          <i
            className="fas fa-cart-plus fa-3x"
            style={{ color: "#007aff" }}
          ></i>
          <h1> 8</h1>
          <h4>سفارش ها تکمیل نشده</h4>
        </div>
        <div className={styles.left_one_1}>
          <i
            className="fas fa-user-clock fa-3x"
            style={{ color: "#007aff" }}
          ></i>
          <h1>8</h1>
          <h4>سفارش ها تکمیل نشده</h4>
        </div>
        <div className={styles.left_one_1}>
          <i
            className="far fa-comment-alt fa-3x"
            style={{ color: "#007aff" }}
          ></i>
          <h1>8</h1>
          <h4>سفارش ها تکمیل نشده</h4>
        </div>
        <div className={styles.left_one_1}>
          <i className="fas fa-wallet fa-3x" style={{ color: "#007aff" }}></i>
          <h1>8</h1>
          <h4>سفارش ها تکمیل نشده</h4>
        </div>
      </div>
      <div dir="rtl" className={styles.left_two}>
        <Swiper
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // spaceBetween={50}
          slidesPerView={1}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div style={{ background: "red", height: "269px" }}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ background: "blue", height: "269px" }}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ background: "gold", height: "269px" }}></div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div dir="rtl" className={styles.left_three}>
        <div className={styles.left_three_head}>
          <h3 style={{ margin: "1.5rem" }}>وضعیت محصول</h3>
        </div>
        <div className={styles.left_three_content}>
          <div className="">
            <h1
              style={{
                display: "inline-block",
                color: " black",
                marginLeft: "0.5rem",
              }}
            >
              8
            </h1>
            <h3 style={{ display: "inline-block", color: "black" }}>عدد</h3>
            <h4 style={{ marginTop: "1rem" }}>کالاهای فعال</h4>
          </div>
          <div className="">
            <h1
              style={{
                display: "inline-block",
                color: "black",
                marginLeft: "0.5rem",
              }}
            >
              0
            </h1>
            <h3 style={{ display: "inline-block", color: "black" }}>عدد</h3>
            <h4 style={{ marginTop: "1rem" }}>کالا های در حال اتمام</h4>
          </div>
          <div className="">
            <h1
              style={{
                display: "inline-block",
                color: "black",
                marginLeft: "0.5rem",
              }}
            >
              0
            </h1>
            <h3 style={{ display: "inline-block", color: "black" }}>عدد</h3>
            <h4 style={{ marginTop: "1rem" }}>کالاهای غیرفعال</h4>
          </div>
          <div className="">
            <h1
              style={{
                display: "inline-block",
                color: " black",
                marginLeft: "0.5rem",
              }}
            >
              0
            </h1>
            <h3 style={{ display: " inline-block", color: "black" }}>عدد</h3>
            <h4 style={{ marginTop: "1rem" }}>کالاهای ناموجود</h4>
          </div>
        </div>
      </div>
      <div dir="rtl" className={styles.left_three}>
        <div className={styles.left_three_head}>
          <h3 style={{ margin: "1.5rem" }}>وضعیت فروش</h3>
        </div>
        <div className={styles.left_three_content}>
          <div className="">
            <h1
              style={{
                display: "inline-block",
                color: " black",
                marginLeft: "0.5rem",
              }}
            >
              8,000,000
            </h1>
            <h3 style={{ display: "inline-block", color: "black" }}>تومان</h3>
            <h4 style={{ marginTop: "1rem" }}>فروش هفته جاری</h4>
          </div>
          <div className="">
            <h1
              style={{
                display: " inline-block",
                color: "black",
                marginLeft: "0.5rem",
              }}
            >
              8,000,000
            </h1>
            <h3 style={{ display: "inline-block", color: "black" }}>تومان</h3>
            <h4 style={{ marginTop: "1rem" }}>فروش ماه گذشته</h4>
          </div>
          <div className="">
            <h1
              style={{
                display: "inline-block",
                color: "black",
                marginLeft: "0.5rem",
              }}
            >
              8,000,000
            </h1>
            <h3 style={{ display: "inline-block", color: "black" }}>عدد</h3>
            <h4 style={{ marginTop: "1rem" }}>فروش هفته گذشته</h4>
          </div>
        </div>
      </div>
      <div dir="rtl" className={styles.left_five}>
        A5
      </div>
    </>
  );
}

Home.Layout = MyLayout;
