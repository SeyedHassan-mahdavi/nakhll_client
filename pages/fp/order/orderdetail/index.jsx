import { data } from "dom7";
import { useEffect, useState } from "react";
import { ApiRegister } from "../../../../apis/services/apiRegister/ApiRegister";
import MyLayout from "../../../../component/layout/Layout";
import styles from "../../../../styles/order/orderdetail.module.css";

function HomePage() {
  const [data, setdata] = useState({});
  useEffect(() => {
    const _handleRequestApi = async () => {
      let params = { factor_id: "85c7c8e1-6624-456f-adc5-e09ae5f75763" };
      let loadData = null;
      let dataUrl = "/app/api/v1/get-factor-details/";
      let response = await ApiRegister().apiRequest(
        loadData,
        "get",
        dataUrl,
        true,
        params
      );
      console.log("aaaa:", response.profile.user.first_name);
      // const data = response;
      setdata(response);
      // setData(response); //==> output: {}
    };
    _handleRequestApi();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.wrapper}>
      {/* وضعیت سفارش */}

      <div className={styles.order_status}>
        <h1 className={styles.header}>وضعیت سفارش</h1>
        <hr />
        <div className={styles.content}></div>
      </div>

      {/* اطلاعات ارسال */}

      <div className={styles.post_information}>
        <h1 className={styles.header}>اطلاعات ارسال</h1>
        <hr />
        <div className={styles.content}>
          <div className={styles.post_information_content}>
            <h4>نام مشتری</h4>
            <h3 style={{ marginTop: "5px" }}>{data.profile.user.first_name}</h3>
          </div>
          <div className={styles.post_information_content}>
            <h4>نام گیرنده</h4>
            <h3 className={styles.post_information_h3}>محمدرضا محمودی</h3>
          </div>
          <div className={styles.post_information_content}>
            <h4>شماره تماس</h4>
            <h3 className={styles.post_information_h3}>09139939426</h3>
          </div>
          <div className={styles.post_information_content}>
            <h4>آدرس</h4>
            <h3 className={styles.post_information_h3}>
              کرمان-خیابان خواجو-کوچه 29
            </h3>
          </div>
          <div className={styles.post_information_content}>
            <h4>کد پستی</h4>
            <h3 className={styles.post_information_h3}>776829540346</h3>
          </div>
          <div className={styles.post_information_content}>
            <h4>پلاک -واحد</h4>
            <h3 className={styles.post_information_h3}>23</h3>
          </div>
        </div>
      </div>

      {/* جزییات سفارش */}

      <div className={styles.post_details}>
        <h1 className={styles.header}> جزییات سفارش وارسال</h1>
        <hr />
        <div className={styles.content}>
          <div className={styles.post_details_content}>
            <h4>تاریخ ثبت سفارش</h4>
            <h4>1400/04/18 22:00</h4>
          </div>
          <div className={styles.post_details_content}>
            <h4>مهلت ارسال کالا</h4>
            <h4>1400/04/22</h4>
          </div>
          <div className={styles.post_details_content}>
            <h4>روش ارسال</h4>
            <h4> پست پیشتاز</h4>
          </div>
          <div className={styles.post_details_content}>
            <h4>هزینه ارسال پرداخت شده</h4>
            <h4>
              {" "}
              12,000 <span>هزار تومان</span>
            </h4>
          </div>
          <div className={styles.post_details_content}>
            <h4>کد رهگیری</h4>
            <h4>029860006300331500076119</h4>
          </div>
        </div>
      </div>

      {/* کالاهای خریداری شده */}

      <div className={styles.purchased_good}>
        <h1 className={styles.header}>کالاهای خریداری شده</h1>
        <hr />
        <div className={styles.purchased_good_content}>
          <div className={styles.purchased_good_one}>
            <img style={{ height: "45px", width: "45px" }} />
            <h3 style={{ marginRight: "15px" }}>
              گل محمدی تولید شده در مجموعه آفاق
            </h3>
          </div>
          <div
            className={styles.purchased_good_two}
            style={{ marginTop: "16px" }}
          >
            <div style={{ display: "flex" }}>
              <h4>قیمت :</h4>
              <h4 style={{ color: "#364254" }}>
                205,920 <span style={{ color: "#5E7488" }}>تومان</span>
              </h4>
            </div>
            <div>
              <h4 style={{ color: "#364254" }}>
                20 <span>عدد</span>
              </h4>
            </div>
          </div>
          {isOpen && (
            <div className={styles.purchased_good_three}>
              <div className={styles.good_three_content}>
                <h4>مجموع هزینه محصول</h4>
                <h4 style={{ color: "#089319", fontWeight: "bold" }}>
                  4,118,400+ <span style={{ color: "#5E7488" }}>تومان</span>
                </h4>
              </div>
              <div className={styles.good_three_content}>
                <h4> هزینه ارسال</h4>
                <h4 style={{ color: "#089319", fontWeight: "bold" }}>
                  12.000+ <span style={{ color: "#5E7488" }}>تومان</span>
                </h4>
              </div>
              <div
                className={styles.good_three_content}
                style={{ marginBottom: "30px" }}
              >
                <h4>تخفیف مجصول</h4>
                <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
                  200,000- <span style={{ color: "#5E7488" }}>تومان</span>
                </h4>
              </div>
              <div
                className={styles.good_three_content}
                style={{ marginBottom: "30px" }}
              >
                <h4>تخفیف ارسال</h4>
                <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
                  200,000- <span style={{ color: "#5E7488" }}>تومان</span>
                </h4>
              </div>
              <div
                className={styles.good_three_content}
                style={{ marginBottom: "30px" }}
              >
                <h4>استرداد</h4>
                <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
                  0- <span style={{ color: "#5E7488" }}>تومان</span>
                </h4>
              </div>
              <div
                className={styles.good_three_content}
                style={{ marginBottom: "30px" }}
              >
                <h4>کارمزد</h4>
                <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
                  370,656- <span style={{ color: "#5E7488" }}>تومان</span>
                </h4>
              </div>
            </div>
          )}
          <div className={styles.good_four}>
            <button className={styles.btn} onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h3>جزییات کمتر</h3>
                    <span
                      style={{ fontSize: "16px", marginRight: "10px" }}
                      className="fas fa-chevron-up"
                    ></span>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h3>جزییات بیشتر</h3>
                    <span
                      style={{ fontSize: "16px", marginRight: "10px" }}
                      className="fas fa-chevron-down"
                    ></span>
                  </div>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* فاکتور نهایی */}

      <div className={styles.final_invoice}>
        <h1 className={styles.header}>فاکتور نهایی</h1>
        <hr />
        <div className={styles.content}>
          <div className={styles.final_invoice_content}>
            <h4>مجموع قیمت محصولات</h4>
            <h4 style={{ color: "#089319", fontWeight: "bold" }}>
              12.000+ <span style={{ color: "#5E7488" }}>تومان</span>
            </h4>
          </div>
          <div className={styles.final_invoice_content}>
            <h4>مجموع هزینه ارسال</h4>
            <h4 style={{ color: "#089319", fontWeight: "bold" }}>
              12.000+ <span style={{ color: "#5E7488" }}>تومان</span>
            </h4>
          </div>
          <div
            className={styles.final_invoice_content}
            style={{ marginBottom: "30px" }}
          >
            <h4>کارمزد</h4>
            <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
              12.000- <span style={{ color: "#5E7488" }}>تومان</span>
            </h4>
          </div>
        </div>
        <hr />
        <div className={styles.final_invoice_content_sub}>
          <h3 style={{ color: "#364254" }}>مبلغ قابل تسویه</h3>
          <h4 style={{ color: "#089319", fontWeight: "bold" }}>
            12.000+ <span style={{ color: "#5E7488" }}>تومان</span>
          </h4>
        </div>
      </div>

      <div style={{ marginTop: "80px" }}></div>
    </div>
  );
}

export default HomePage;

HomePage.Layout = MyLayout;
