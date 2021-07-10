import MyLayout from "../../../component/layout/Layout";
import { useEffect, useState } from "react";
import styles from "../../../styles/demo.module.css";
// import data from "./data";
import { ApiRegister } from "../../../apis/services/apiRegister/ApiRegister";

function HomePage() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [selectList, setSelectList] = useState("");
  const [title, settitle] = useState("");
  const [subMarkets, setSubMarkets] = useState([]);
  const [dataChoice, setDataChoice] = useState({
    title: "",
    submarket: "",
  });

  useEffect(() => {
    const _handleRequestApi = async () => {
      let params = null;
      let loadData = null;
      let dataUrl = "/api/v1/markets/";
      let response = await ApiRegister().apiRequest(
        loadData,
        "get",
        dataUrl,
        false,
        params
      );
      console.log("res uncom :", response);
      const data = response;
      setData(response); //==> output: {}
    };
    _handleRequestApi();
  }, []);

  function clickButton(e) {
    setSelectList(e.id);
    setSubMarkets(e.submarkets);
    setDataChoice({ ...dataChoice, title: e.title });

    setPage(2);
    console.log("el :>> ", e);
    settitle(e.title);
    console.log("e.title :>> ", e.title);
  }
  function finalClick(e) {
    console.log("ee :>> ", e);
    setDataChoice({ ...dataChoice, submarket: e.title });
  }

  function GoBack() {
    if (page === 1) {
    } else {
      setPage((page) => page - 1);
    }
  }

  return (
    <>
      <div className={styles.wrapper}>
        {/* // progress bar */}
        <div className={styles.Header}>
          <button onClick={GoBack} className={styles.btn_icon}>
            <span
              className="fas fa-arrow-right "
              style={{
                fontSize: "25px",
                color: "#5E7488",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            ></span>
          </button>
          {page === 1 && <h2>انتخاب دسته بندی</h2>}
          {page !== 1 && <h2> انتخاب زیر دسته از "{title} "</h2>}
        </div>
        <div className={styles.content}>
          {page === 1 &&
            data.map((e) => {
              return (
                <button onClick={() => clickButton(e)} className={styles.btn}>
                  <div className={styles.in_btn}>
                    <h2 style={{ marginRight: "14px" }}>{e.title}</h2>
                    <span
                      style={{ marginLeft: "14px" }}
                      className="fas fa-chevron-left fa-4x"
                    ></span>
                  </div>
                </button>
              );
            })}

          {page != 1 && (
            <>
              {subMarkets.map((e) => {
                return (
                  <button onClick={() => finalClick(e)} className={styles.btn}>
                    <div className={styles.in_btn}>
                      <h2 style={{ marginRight: "14px" }}>{e.title}</h2>
                      <span
                        style={{ marginLeft: "14px" }}
                        className="fas fa-chevron-left fa-4x"
                      ></span>
                    </div>
                  </button>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;

HomePage.Layout = MyLayout;
