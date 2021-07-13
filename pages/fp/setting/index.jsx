import { useState } from "react";
import MyLayout from "../../../component/layout/Layout";
import styles from "../../../styles/setting/setting.module.css";
function HomePage() {
  //   useState MenuBar

  const [onMenu, setOnMenu] = useState("1");

  return (
    <div dir="rtl" className={styles.setting}>
      {/* Header Site */}
      <div className={styles.header}>
        <div className={styles.header_title}>
          <h1>تنظیمات</h1>
        </div>

        {/* Header MenuBar */}
        <div className={styles.header_menu}>
          <button
            onClick={() => {
              setOnMenu("1");
            }}
            className={styles.header_menu_btn}
          >
            <h1 className={onMenu == "1" && styles.onBtn}>حجره</h1>
          </button>

          <button
            onClick={() => {
              setOnMenu("2");
            }}
            className={styles.header_menu_btn}
          >
            <h1 className={onMenu == "2" && styles.onBtn}>حساب بانکی</h1>
          </button>
          <button
            onClick={() => {
              setOnMenu("3");
            }}
            className={styles.header_menu_btn}
          >
            <h1 className={onMenu == "3" && styles.onBtn}>ارسال</h1>
          </button>
          <button
            onClick={() => {
              setOnMenu("4");
            }}
            className={styles.header_menu_btn}
          >
            <h1 className={onMenu == "4" && styles.onBtn}>لینک ها</h1>
          </button>
        </div>
      </div>

      {/* Setting Conttent */}
      <div className={styles.wrapper}>
        {/* Hojreh */}

        {onMenu == "1" && (
          <>
            <div className={styles.Hojreh_head}>
              <div className={styles.Hojreh_head_pic}>
                <div className={styles.Hojreh_head_edit_icon_pic}>
                  <span className="fas fa-edit"></span>
                </div>
              </div>
              <div className={styles.Hojreh_head_edit_icon}>
                <span className="fas fa-edit"></span>
              </div>
            </div>
            <div className={styles.Hojreh_profile}>
              <div className={styles.HeadName}>
                <h1>حجره</h1>
              </div>
              <div className={styles.input_setting}>
                <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                  نام حجره
                </h2>
                <div className={styles.inputWidRtl}>
                  <input type="text" placeholder="پسته برادران  اکبری" />
                </div>
              </div>
              <div className={styles.input_setting}>
                <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                  آدرس اینترنتی حجره
                </h2>
                <div className={styles.inputWid}>
                  <input type="text" defaultValue="nakhll.com/" />
                </div>
              </div>
              <div className={styles.input_setting}>
                <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                  درباره حجره
                </h2>
                <div className={styles.inputWidRtlH}>
                  <textarea rows="4" cols="50" placeholder="فروش کالا" />
                </div>
              </div>
              <div className={styles.input_setting}>
                <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                  نوع کسب وکار
                </h2>
                <div className={styles.inputWidRtl}>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className={styles.Hojreh_space}>
              <div className={styles.HeadName}>
                <h1>مشخصات</h1>
              </div>
              <div className={styles.input_setting}>
                <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                  کد ملی
                </h2>
                <div className={styles.inputWid}>
                  <input type="text" />
                </div>
              </div>

              <div className={styles.input_setting}>
                <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                  شماره تماس اصلی
                </h2>
                <div className={styles.inputWid}>
                  <input type="text" />
                </div>
              </div>
              <div className={styles.input_setting}>
                <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                  شماره تماس جایگزین
                </h2>
                <div className={styles.inputWid}>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className={styles.Hojreh_Address}>
              <div className={styles.HeadName}>
                <h1>آدرس</h1>
              </div>
              <div className={styles.input_setting}>
                <h2 style={{ marginBottom: "10px", color: "#364254" }}>آدرس</h2>
                <div className={styles.inputWidRtlH}>
                  <textarea rows="4" cols="50" />
                </div>
              </div>
              <div className={styles.input_setting}>
                <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                  کد پستی
                </h2>
                <div className={styles.inputWid}>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className={styles.status_button_one}>
              <button
                // onClick={() => {
                //   setbtnOk(!btnOk);
                // }}
                className={`${styles.btn} ${styles.btnSubmit}`}
              >
                <h3>ذخیره اطلاعات</h3>
              </button>
            </div>
            <div style={{ marginTop: "80px" }}></div>
          </>
        )}

        {/* HesabBanki */}
        {onMenu == "2" && (
          <>
            <div className={styles.note}>
              <span className="fas fa-info-circle"></span>

              <h1 className={styles.note_text}>
                برای ویرایش شماره شبا ابتدا گزینه ویرایش را انتخاب کنید سپس
                اقدام به ویرایش کنید.
              </h1>
            </div>

            <div className={styles.input_setting}>
              <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                شماره شبا
              </h2>
              <div className={styles.inputWid}>
                <input type="text" defaultValue="IR-" />
              </div>
            </div>

            <div className={styles.input_setting}>
              <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                صاحب حساب
              </h2>
              <div className={styles.inputWid}>
                <input type="text" />
              </div>
            </div>
            {/* ‌Buttons */}

            <div className={styles.status_button_one}>
              <button
                // onClick={() => {
                //   setbtnOk(!btnOk);
                // }}
                className={`${styles.btn} ${styles.btnSubmit}`}
              >
                <h3>به روز رسانی</h3>
              </button>
            </div>
          </>
        )}

        {/* Telegram */}
        {onMenu == "4" && (
          <>
            <div className={styles.input_setting}>
              <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                آدرس تلگرام
              </h2>
              <div className={styles.inputWid}>
                <input type="text" defaultValue="t.me/" />
              </div>
            </div>
            <div className={styles.input_setting}>
              <h2 style={{ marginBottom: "10px", color: "#364254" }}>
                آدرس اینستاگرام
              </h2>
              <div className={styles.inputWid}>
                <input type="text" defaultValue="instagram.com/" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;

HomePage.Layout = MyLayout;
