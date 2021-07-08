import React, { useState } from "react";
import Head from "next/head";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Layout.module.css";
import MenuMobile from "../MenuMobile/MenuMobile";
// components
import useViewport from "../viewPort/index";
// import person from '../../public/assets/image/person.png'
//  import nakhll from '../../public/assets/image/nakhl.png'

// import person from "./person.png";
// import nakhl from "./nakhl.png";
// import { DashboardMain } from "./DashBoardMain/DashboardMain";


export default function MyLayout({ children }) {
  const [counter, setCounter] = useState(0);

  const router = useRouter();
  const { width } = useViewport();
  const breakpoint = 620;
  return (
    <>
      <div>
        <Head>
          <title>My page title</title>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      </div>

      {router.pathname == "/" && (
        <header>
          <div className={styles.hedtop}>
            <span>
              {/* <Image
              src={nakhll}
              alt="Picture of the author"
            /> */}
            </span>

            <h1> داشبور مدیریت نخل</h1>
          </div>

          <div className={styles.hedtop_mobile}>
            <h1>پیشخوان</h1>
            <span>
              {/* <Image
              // src={nakhll}
              alt="Picture of the author"
            /> */}
            </span>
          </div>
        </header>
      )}
      <div
        className={`${
          width < breakpoint && router.pathname == "/fp/product/list"
            ? styles.wrapperProduct
            : styles.wrapper
        }`}
      >
        {/* <!-- Right  SideBar--> */}
        {!(width < breakpoint && router.pathname == "/fp/product/list") && (
          <div className={styles.Right}>
            <section className={styles.info_card}>
              <div className={styles.info_card_pic}>
                <div className={styles.info_card_pic_person}></div>
              </div>
              <div className="info-cardH">
                <h1
                  style={{
                    paddingTop: "1.7rem",
                    textAlign: "center",
                    paddingBottom: "2.9rem",
                  }}
                >
                  حجره طلاسازی
                </h1>
              </div>
              <div className={styles.info_card_btn}>
                <div className={styles.info_card_btn_one}>
                  <i className="far fa-envelope fa-2x"></i>
                  <h4 style={{ textAlign: "center" }}>پیام ها</h4>
                </div>
                <div className={styles.info_card_btn_one}>
                  <i className="fas fa-user-cog fa-2x"></i>
                  <h4 style={{ textAlign: "center" }}>تنظیمات</h4>
                </div>
                <div className={styles.info_card_btn_one}>
                  <i className="fas fa-sign-out-alt fa-2x"></i>
                  <h4 style={{ textAlign: "center" }}>خروج</h4>
                </div>
              </div>
            </section>
            <section className={styles.menu_card}>
              <Link href="/">
                <span
                  className={`${styles.menu_card_item}   ${
                    router.pathname == "/" ? styles.selectNav : ""
                  }`}
                >
                  <span
                    style={{ marginLeft: "18px" }}
                    className="fas fa-home fa-2x "
                  ></span>
                  <h2>داشبورد</h2>
                </span>
              </Link>
              <Link
                // activeClassName="selectNav"
                href="/fp/order"
              >
                <span
                  className={`${styles.menu_card_item}   ${
                    router.pathname == "/fp/order" ? styles.selectNav : ""
                  }`}
                >
                  <span
                    style={{ marginLeft: "18px" }}
                    className={`fas fa-shopping-basket fa-2x`}
                  ></span>
                  <h2>سفارشات</h2>
                </span>
              </Link>
              <Link activeClassName="selectNav" href="/fp/product/list">
                <span
                  className={`${styles.menu_card_item}   ${
                    router.pathname == "/fp/product/list"
                      ? styles.selectNav
                      : ""
                  }`}
                >
                  <span
                    style={{ marginLeft: "18px" }}
                    className={`fas fa-box-open fa-2x `}
                  ></span>
                  <h2>محصولات</h2>
                </span>
              </Link>
              <Link activeClassName="selectNav" href="/fp/customer">
                <span
                  className={`${styles.menu_card_item}   ${
                    router.pathname == "/fp/customer" ? styles.selectNav : ""
                  }`}
                >
                  <span
                    style={{ marginLeft: "18px" }}
                    className="fas fa-users fa-2x"
                  ></span>
                  <h2>لیست مشتریان</h2>
                </span>
              </Link>
              <Link activeClassName="selectNav" href="/fp/comments">
                <span
                  className={`${styles.menu_card_item}   ${
                    router.pathname == "/fp/comments" ? styles.selectNav : ""
                  }`}
                >
                  <span
                    style={{ marginLeft: "18px" }}
                    className="far fa-comment-dots fa-2x"
                  ></span>
                  <h2>دیدگاه ها</h2>
                </span>
              </Link>
              <Link activeClassName="selectNav" href="/fp/financial">
                <span
                  className={`${styles.menu_card_item}   ${
                    router.pathname == "/fp/financial" ? styles.selectNav : ""
                  }`}
                >
                  <span
                    style={{ marginLeft: "25px" }}
                    className="fas fa-dollar-sign fa-2x"
                  ></span>
                  <h2>مالی</h2>
                </span>
              </Link>
              <Link activeClassName="selectNav" href="/fp/discount">
                <span
                  className={`${styles.menu_card_item}   ${
                    router.pathname == "/fp/discount" ? styles.selectNav : ""
                  }`}
                >
                  <span
                    style={{ marginLeft: "18px" }}
                    className="fas fa-percent fa-2x"
                  ></span>
                  <h2>کد تخفیف</h2>
                </span>
              </Link>
              <Link activeClassName="selectNav" href="/fp/support">
                <span
                  className={`${styles.menu_card_item}   ${
                    router.pathname == "/fp/support" ? styles.selectNav : ""
                  }`}
                >
                  <span
                    style={{ marginLeft: "18px" }}
                    className="fas fa-life-ring fa-2x"
                  ></span>
                  <h2>پشتیبانی</h2>
                </span>
              </Link>
            </section>
          </div>
        )}
        {/* <!-- Left --> */}
        <div
          className={`${
            router.pathname == "/" ? styles.left : styles.leftProduct
          }`}
        >
          {children}

          {/* <Switch>
            <Route path="/admin" component={DashboardMain}></Route>
            <Route path="/buy" component={Buy}></Route>
            <Route path="/product" component={Product}></Route>
            <Route path="/customer" component={Customer}></Route>
            <Route path="/support" component={Customer}></Route>
          </Switch> */}
        </div>
        <MenuMobile />
      </div>
    </>
  );
}
