import { data } from "dom7";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ApiRegister } from "../../../../apis/services/apiRegister/ApiRegister";
import MyLayout from "../../../../component/layout/Layout";
// import styles from "../../../../styles/order/orderdetail.module.css";
import styles from "../../../../styles/order/orderdetail.module.scss";

// import Table Bootstrap
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

function HomePage() {
  const columns = [
    {
      dataField: "id",
      text: "ردیف",
    },
    {
      dataField: "name",
      text: "نام محصول",
    },
    {
      dataField: "namesefaresh",
      text: "تعداد سفارش",
    },
    {
      dataField: "price",
      text: "قیمت",
    },
    {
      dataField: "pricei",
      text: "",
    },
  ];
  function conactorData() {}

  // const datai = [
  //   { id: 1, name: "milad", namesefaresh: 500, price: 250000, pricei: "" },
  // ];
  const expandRow = {
    renderer: (row) => (
      <div>
        <p>{`This Expand row is belong to rowKey ${row.id}`}</p>
        <p>
          You can render anything here, also you can add additional data on
          every row object
        </p>
        <p>
          expandRow.renderer callback will pass the origin row object to you
        </p>
      </div>
    ),
  };
  const [datai, setdatai] = useState({
    id: "",
    name: "",
    namesefaresh: "",
    price: "",
    pricei: "",
  });
  const [idDiv, setIdDiv] = useState(0);

  const [data, setdata] = useState({});
  const [isShow, setisShow] = useState(false);
  const [btnOk, setbtnOk] = useState(true);

  useEffect(() => {
    const _handleRequestApi = async () => {
      let params = { factor_id: "67a7f662-efe8-4634-ae5f-9b60eff8ce97" };
      let loadData = null;
      let dataUrl = "/app/api/v1/get-factor-details/";
      let response = await ApiRegister().apiRequest(
        loadData,
        "get",
        dataUrl,
        true,
        params
      );

      // const data = response;
      setdata(response);
      setisShow(true);
      // setData(response); //==> output: {}

      console.log("data :>> ", response);
    };
    _handleRequestApi();

    console.log("XXXX ", datai);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isShow && (
        <>
          {true && (
            <div className={styles.wrapper}>
              {/* وضعیت سفارش */}

              <div className={styles.order_statusD}>
                <div className={styles.order_statusD_first}>
                  <h3 style={{ display: "inline-block" }}>وضعیت سفارش</h3>

                  <div className={styles.title_status_patD}>
                    <div className={styles.title_status}>
                      <h3 style={{ fontSize: "15px", fontWeight: "bold" }}>
                        {data.order_status === "2" && "در انتظار تحویل به پست"}
                        {data.order_status === "3" && "در انتظار تایید"}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className={styles.contentD}>
                  <div className={styles.order_status_allD}>
                    {/* تایید سفارش */}

                    <div className={styles.order_status_oneLevel}>
                      {data.order_status === "3" && (
                        <div className={styles.place_icon_two}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-clipboard-check "
                          ></span>
                        </div>
                      )}
                      {data.order_status === "2" && (
                        <div className={styles.place_icon_three}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-clipboard-check "
                          ></span>
                        </div>
                      )}

                      <div
                        className={styles.order_status_right_icon}
                        style={{ marginRight: "20px" }}
                      >
                        {" "}
                        <h4>تایید سفارش</h4>
                        <h4 style={{ color: "#000" }}>22 ساعت 10 دقیقه</h4>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "19px",
                        height: "0px",
                        border: "2px solid #E0E6E9",
                        marginLeft: "30px",
                        marginRight: "30px",
                        marginTop: "auto",
                        marginBottom: "auto",
                      }}
                    ></div>

                    {/* تحویل مرسوله به پست */}

                    <div className={styles.order_status_oneLevel}>
                      <div className={styles.place_icon}>
                        <span
                          style={{ fontSize: "20px", color: "#fff" }}
                          className="fas fa-truck "
                        ></span>
                      </div>
                      <div
                        className={styles.order_status_right_icon}
                        style={{ marginRight: "20px" }}
                      >
                        {" "}
                        <h4>تحویل مرسوله به پست</h4>
                        {data.order_status === "3" && ""}
                        {data.order_status === "2" && (
                          <h4 style={{ color: "#000" }}>22/04/1400</h4>
                        )}
                      </div>
                    </div>
                    <div
                      style={{
                        width: "19px",
                        height: "0px",
                        border: "2px solid #E0E6E9",
                        marginLeft: "30px",
                        marginRight: "30px",
                        marginTop: "auto",
                        marginBottom: "auto",
                      }}
                    ></div>

                    {/* تایید مشتری */}

                    <div className={styles.order_status_oneLevel}>
                      <div className={styles.place_icon}>
                        <span
                          style={{ fontSize: "20px", color: "#fff" }}
                          className="fas fa-box"
                        ></span>
                      </div>
                      <div
                        className={styles.order_status_right_icon}
                        style={{ marginRight: "20px" }}
                      >
                        {" "}
                        <h4>تایید مشتری</h4>
                        <h4 style={{ color: "#000" }}>29/04/1400</h4>
                      </div>
                    </div>
                  </div>

                  {/* ‌Buttons */}
                  {btnOk ? (
                    <div className={styles.order_statusD_button}>
                      <button
                        onClick={() => {
                          setbtnOk(!btnOk);
                        }}
                        className={`${styles.btn} ${styles.btnSubmit}`}
                      >
                        <h3>تایید</h3>
                      </button>
                      <button className={`${styles.btn} ${styles.btnProblem}`}>
                        <h3>ثبت مشکل</h3>
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className={styles.ButtonsGridD}>
                        <div className={styles.order_statusD_code}>
                          <input
                            className={styles.btn_code}
                            type="number"
                            placeholder="کد رهگیری مرسوله"
                          />
                        </div>
                        <div className={styles.order_statusDcod_button}>
                          <button
                            onClick={() => {
                              setbtnOk(!btnOk);
                            }}
                            className={`${styles.btn} ${styles.btnSubmit}`}
                          >
                            <h3>ثبت کد رهگیری</h3>
                          </button>
                          <button
                            className={`${styles.btn} ${styles.btnProblem}`}
                          >
                            <h3>ثبت مشکل</h3>
                          </button>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Buttons 2 */}
                </div>
              </div>

              {/* اطلاعات ارسال */}

              <div className={styles.post_informationD}>
                <h1 className={styles.header}>اطلاعات ارسال</h1>
                <hr />
                <div className={styles.contentinfD}>
                  <div className={styles.post_informationD_content}>
                    <h4>نام مشتری</h4>
                    <h3 style={{ marginTop: "5px" }}>
                      {`${data.profile.user.first_name}  ${data.profile.user.last_name}`}
                    </h3>
                  </div>
                  {/* <div className={styles.post_informationD_content}>
                <h4>نام گیرنده</h4>
                <h3 className={styles.post_information_h3}>محمدرضا محمودی</h3>
              </div> */}
                  <div className={styles.post_informationD_content}>
                    <h4>شماره تماس</h4>
                    <h3 className={styles.post_information_h3}>09139939426</h3>
                  </div>
                  <div></div>
                  <div className={styles.post_informationD_content}>
                    <h4>آدرس</h4>
                    <h3 className={styles.post_information_h3}>
                      {`${data.state} | ${data.big_city}  | ${data.address}`}
                    </h3>
                  </div>
                  <div className={styles.post_informationD_content}>
                    <h4>کد پستی</h4>
                    <h3 className={styles.post_information_h3}>
                      {data.zip_code}
                    </h3>
                  </div>
                  {/* <div className={styles.post_informationD_content}>
                <h4>پلاک -واحد</h4>
                <h3 className={styles.post_information_h3}>23</h3>
              </div> */}
                </div>
              </div>

              {/* جزییات سفارش */}

              <div className={styles.post_details}>
                <h1 className={styles.header}> جزییات سفارش وارسال</h1>
                <hr />
                <div className={styles.contentpostD}>
                  <div className={styles.post_details_content}>
                    <h4>تاریخ ثبت سفارش</h4>
                    <h4 style={{ direction: "ltr" }}>
                      {data.jalali_order_date}
                    </h4>
                  </div>
                  {/* <div className={styles.post_details_content}>
                <h4>مهلت ارسال کالا</h4>
                <h4>1400/04/22</h4>
              </div> */}
                  <div className={styles.post_details_content}>
                    <h4>روش ارسال</h4>
                    <h4> پست پیشتاز</h4>
                  </div>
                  <div className={styles.post_details_content}>
                    <h4>هزینه ارسال پرداخت شده</h4>
                    <h4>
                      {" "}
                      {data.post_price} <span>هزار تومان</span>
                    </h4>
                  </div>
                  {/* <div className={styles.post_details_content}>
                <h4>کد رهگیری</h4>
                <h4>029860006300331500076119</h4>
              </div> */}
                </div>
              </div>

              {/* کالاهای خریداری شده */}
              {/* TODO here work */}
              {/* <div style={{ fontSize: "20px" }}>
                <BootstrapTable
                  keyField="id"
                  data={datai}
                  columns={columns}
                  pagination={paginationFactory()}
                />
              </div> */}
              <div className={styles.purchased_good}>
                <h1 className={styles.header}>کالاهای خریداری شده</h1>
                <hr />
                {data.factor_post.map((e, index) => {
                  return (
                    <>
                      <div className={styles.purchased_good_contentD}>
                        <h3>{index + 1}</h3>
                        <div
                          style={{
                            backgroundColor: "gold",
                            width: "50px",
                            height: "50px",
                          }}
                        ></div>
                        <div className={styles.row}>
                          <h3 style={{ marginRight: "15px" }}>
                            {e.product.title}
                          </h3>
                        </div>

                        <div style={{ width: "40px" }}>
                          <h4 style={{ color: "#364254" }}>
                            {e.ProductCount} <span>عدد</span>
                          </h4>
                        </div>
                        <div style={{ width: "94px", display: "flex" }}>
                          <h4 style={{ color: "#364254" }}>
                            {e.product.price}{" "}
                            <span style={{ color: "#5E7488" }}>تومان</span>
                          </h4>
                        </div>

                        <div className={styles.good_four}>
                          <button
                            className={styles.btn}
                            onClick={() => setIsOpen(!isOpen)}
                          >
                            {isOpen ? (
                              <>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <h3>جزییات کمتر</h3>
                                  <span
                                    style={{
                                      fontSize: "16px",
                                      marginRight: "10px",
                                    }}
                                    className="fas fa-chevron-up"
                                  ></span>
                                </div>
                              </>
                            ) : (
                              <>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <h3>جزییات بیشتر</h3>
                                  <span
                                    style={{
                                      fontSize: "16px",
                                      marginRight: "10px",
                                    }}
                                    className="fas fa-chevron-down"
                                  ></span>
                                </div>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                      <div className={styles.lineTable}></div>
                      {isOpen && (
                        <div
                          id={index + 1}
                          className={styles.purchased_good_threeD}
                        >
                          <div className={styles.good_three_content}>
                            <h4>مجموع هزینه محصول</h4>
                            <h4
                              style={{ color: "#089319", fontWeight: "bold" }}
                            >
                              {e.get_total_item_price}+{" "}
                              <span style={{ color: "#5E7488" }}>تومان</span>
                            </h4>
                          </div>
                          {/* <div className={styles.good_three_content}>
                      <h4> هزینه ارسال</h4>
                      <h4 style={{ color: "#089319", fontWeight: "bold" }}>
                        12.000+{" "}
                        <span style={{ color: "#5E7488" }}>تومان</span>
                      </h4>
                    </div> */}
                          <div
                            className={styles.good_three_content}
                            style={{ marginBottom: "30px" }}
                          >
                            <h4>تخفیف محصول</h4>
                            <h4
                              style={{ color: "#D14343", fontWeight: "bold" }}
                            >
                              {e.product.discount}-{" "}
                              <span style={{ color: "#5E7488" }}>تومان</span>
                            </h4>
                          </div>
                          {/* <div
                      className={styles.good_three_content}
                      style={{ marginBottom: "30px" }}
                    >
                      <h4>تخفیف ارسال</h4>
                      <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
                        200,000-{" "}
                        <span style={{ color: "#5E7488" }}>تومان</span>
                      </h4>
                    </div> */}
                          {/* <div
                      className={styles.good_three_content}
                      style={{ marginBottom: "30px" }}
                    >
                      <h4>استرداد</h4>
                      <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
                        0- <span style={{ color: "#5E7488" }}>تومان</span>
                      </h4>
                    </div> */}
                          {/* <div
                      className={styles.good_three_content}
                      style={{ marginBottom: "30px" }}
                    >
                      <h4>کارمزد</h4>
                      <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
                        370,656-{" "}
                        <span style={{ color: "#5E7488" }}>تومان</span>
                      </h4>
                    </div> */}
                        </div>
                      )}
                    </>
                  );
                })}
              </div>

              {/* فاکتور نهایی */}

              <div className={styles.final_invoice}>
                <h1 className={styles.header}>فاکتور نهایی</h1>
                <hr />
                <div className={styles.content}>
                  <div className={styles.final_invoice_content}>
                    <h4>مجموع قیمت محصولات</h4>
                    <h4 style={{ color: "#089319", fontWeight: "bold" }}>
                      {data.total_price}+{" "}
                      <span style={{ color: "#5E7488" }}>تومان</span>
                    </h4>
                  </div>
                  <div className={styles.final_invoice_content}>
                    <h4>مجموع هزینه ارسال</h4>
                    <h4 style={{ color: "#089319", fontWeight: "bold" }}>
                      {data.post_details.post_price}+{" "}
                      <span style={{ color: "#5E7488" }}>تومان</span>
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
          )}
          {false && (
            <div className={styles.wrapper}>
              {/* وضعیت سفارش */}

              <div className={styles.order_status}>
                <h1 className={styles.header}>وضعیت سفارش</h1>
                <hr />
                <div className={styles.content}>
                  <h3 style={{ paddingTop: "20px", textAlign: "center" }}>
                    وضعیت سفارش
                  </h3>
                  <div className={styles.title_status_pat}>
                    <div className={styles.title_status}>
                      <h3 style={{ fontSize: "15px", fontWeight: "bold" }}>
                        {data.order_status === "2" && "در انتظار تحویل به پست"}
                        {data.order_status === "3" && "در انتظار تایید"}
                      </h3>
                    </div>
                  </div>
                  <div className={styles.order_status_all}>
                    {/* تایید سفارش */}

                    <div className={styles.order_status_oneLevel}>
                      {data.order_status === "3" && (
                        <div className={styles.place_icon_two}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-clipboard-check "
                          ></span>
                        </div>
                      )}
                      {data.order_status === "2" && (
                        <div className={styles.place_icon_three}>
                          <span
                            style={{ fontSize: "20px", color: "#fff" }}
                            className="fas fa-clipboard-check "
                          ></span>
                        </div>
                      )}

                      <div
                        className={styles.order_status_right_icon}
                        style={{ marginRight: "20px" }}
                      >
                        {" "}
                        <h4>تایید سفارش</h4>
                        <h4 style={{ color: "#000" }}>22 ساعت 10 دقیقه</h4>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "1px",
                        height: "20px",
                        border: "1px solid #E0E6E9",
                        marginTop: "8px",
                        marginBottom: "8px",
                        marginRight: "20px",
                      }}
                    ></div>

                    {/* تحویل مرسوله به پست */}

                    <div className={styles.order_status_oneLevel}>
                      <div className={styles.place_icon}>
                        <span
                          style={{ fontSize: "20px", color: "#fff" }}
                          className="fas fa-truck "
                        ></span>
                      </div>
                      <div
                        className={styles.order_status_right_icon}
                        style={{ marginRight: "20px" }}
                      >
                        {" "}
                        <h4>تحویل مرسوله به پست</h4>
                        {data.order_status === "3" && ""}
                        {data.order_status === "2" && (
                          <h4 style={{ color: "#000" }}>22/04/1400</h4>
                        )}
                      </div>
                    </div>
                    <div
                      style={{
                        width: "1px",
                        height: "20px",
                        border: "1px solid #E0E6E9",
                        marginTop: "8px",
                        marginBottom: "8px",
                        marginRight: "20px",
                      }}
                    ></div>

                    {/* تایید مشتری */}

                    <div className={styles.order_status_oneLevel}>
                      <div className={styles.place_icon}>
                        <span
                          style={{ fontSize: "20px", color: "#fff" }}
                          className="fas fa-box"
                        ></span>
                      </div>
                      <div
                        className={styles.order_status_right_icon}
                        style={{ marginRight: "20px" }}
                      >
                        {" "}
                        <h4>تایید مشتری</h4>
                        <h4 style={{ color: "#000" }}>29/04/1400</h4>
                      </div>
                    </div>
                  </div>

                  {/* ‌Buttons */}
                  {btnOk ? (
                    <div className={styles.order_status_button}>
                      <button
                        onClick={() => {
                          setbtnOk(!btnOk);
                        }}
                        className={`${styles.btn} ${styles.btnSubmit}`}
                      >
                        <h3>تایید</h3>
                      </button>
                      <button className={`${styles.btn} ${styles.btnProblem}`}>
                        <h3>ثبت مشکل</h3>
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className={styles.order_status_code}>
                        <input
                          className={styles.btn_code}
                          type="number"
                          placeholder="کد رهگیری مرسوله"
                        />
                      </div>
                      <div className={styles.order_status_button}>
                        <button
                          onClick={() => {
                            setbtnOk(!btnOk);
                          }}
                          className={`${styles.btn} ${styles.btnSubmit}`}
                        >
                          <h3>ثبت کد رهگیری</h3>
                        </button>
                        <button
                          className={`${styles.btn} ${styles.btnProblem}`}
                        >
                          <h3>ثبت مشکل</h3>
                        </button>
                      </div>
                    </>
                  )}

                  {/* Buttons 2 */}
                </div>
              </div>

              {/* اطلاعات ارسال */}

              <div className={styles.post_information}>
                <h1 className={styles.header}>اطلاعات ارسال</h1>
                <hr />
                <div className={styles.content}>
                  <div className={styles.post_information_content}>
                    <h4>نام مشتری</h4>
                    <h3 style={{ marginTop: "5px" }}>
                      {`${data.profile.user.first_name}  ${data.profile.user.last_name}`}
                    </h3>
                  </div>
                  {/* <div className={styles.post_information_content}>
                <h4>نام گیرنده</h4>
                <h3 className={styles.post_information_h3}>محمدرضا محمودی</h3>
              </div> */}
                  <div className={styles.post_information_content}>
                    <h4>{data.profile.user.username}</h4>
                    <h3 className={styles.post_information_h3}>09139939426</h3>
                  </div>
                  <div className={styles.post_information_content}>
                    <h4>آدرس</h4>
                    <h3 className={styles.post_information_h3}>
                      {`${data.state} | ${data.big_city}  | ${data.address}`}
                    </h3>
                  </div>
                  <div className={styles.post_information_content}>
                    <h4>کد پستی</h4>
                    <h3 className={styles.post_information_h3}>
                      {data.zip_code}
                    </h3>
                  </div>
                  {/* <div className={styles.post_information_content}>
                <h4>پلاک -واحد</h4>
                <h3 className={styles.post_information_h3}>23</h3>
              </div> */}
                </div>
              </div>

              {/* جزییات سفارش */}

              <div className={styles.post_details}>
                <h1 className={styles.header}> جزییات سفارش وارسال</h1>
                <hr />
                <div className={styles.content}>
                  <div className={styles.post_details_content}>
                    <h4>تاریخ ثبت سفارش</h4>
                    <h4 style={{ direction: "ltr" }}>
                      {data.jalali_order_date}
                    </h4>
                  </div>
                  {/* <div className={styles.post_details_content}>
                <h4>مهلت ارسال کالا</h4>
                <h4>1400/04/22</h4>
              </div> */}
                  <div className={styles.post_details_content}>
                    <h4>روش ارسال</h4>
                    <h4> پست پیشتاز</h4>
                  </div>
                  <div className={styles.post_details_content}>
                    <h4>هزینه ارسال پرداخت شده</h4>
                    <h4>
                      {" "}
                      {data.post_price} <span>هزار تومان</span>
                    </h4>
                  </div>
                  {/* <div className={styles.post_details_content}>
                <h4>کد رهگیری</h4>
                <h4>029860006300331500076119</h4>
              </div> */}
                </div>
              </div>

              {/* کالاهای خریداری شده */}
              {true && (
                <div className={styles.purchased_good}>
                  <h1 className={styles.header}>کالاهای خریداریزبب شده</h1>
                  <hr />
                  <div className={styles.HeaderTableD}>
                    <h3>ردیف</h3>
                    <h3>نام محصول</h3>
                    <h3>تعداد سفارش</h3>
                    <h3>قیمت</h3>
                  </div>
                  {data.factor_post.map((e) => {
                    return (
                      <div className={styles.purchased_good_content}>
                        <div className={styles.purchased_good_one}>
                          <Image
                            src={`${e.product.image_thumbnail_url}`}
                            width={45}
                            height={45}
                          />
                          <h3 style={{ marginRight: "15px" }}>
                            {e.product.title}
                          </h3>
                        </div>
                        <div
                          className={styles.purchased_good_two}
                          style={{ marginTop: "16px" }}
                        >
                          <div style={{ display: "flex" }}>
                            <h4>قیمت :</h4>
                            <h4 style={{ color: "#364254" }}>
                              {e.product.price}{" "}
                              <span style={{ color: "#5E7488" }}>تومان</span>
                            </h4>
                          </div>
                          <div>
                            <h4 style={{ color: "#364254" }}>
                              {e.ProductCount} <span>عدد</span>
                            </h4>
                          </div>
                        </div>
                        {isOpen && (
                          <div className={styles.purchased_good_three}>
                            <div className={styles.good_three_content}>
                              <h4>مجموع هزینه محصول</h4>
                              <h4
                                style={{ color: "#089319", fontWeight: "bold" }}
                              >
                                {e.get_total_item_price}+{" "}
                                <span style={{ color: "#5E7488" }}>تومان</span>
                              </h4>
                            </div>
                            {/* <div className={styles.good_three_content}>
                        <h4> هزینه ارسال</h4>
                        <h4 style={{ color: "#089319", fontWeight: "bold" }}>
                          12.000+{" "}
                          <span style={{ color: "#5E7488" }}>تومان</span>
                        </h4>
                      </div> */}
                            <div
                              className={styles.good_three_content}
                              style={{ marginBottom: "30px" }}
                            >
                              <h4>تخفیف محصول</h4>
                              <h4
                                style={{ color: "#D14343", fontWeight: "bold" }}
                              >
                                {e.product.discount}-{" "}
                                <span style={{ color: "#5E7488" }}>تومان</span>
                              </h4>
                            </div>
                            {/* <div
                        className={styles.good_three_content}
                        style={{ marginBottom: "30px" }}
                      >
                        <h4>تخفیف ارسال</h4>
                        <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
                          200,000-{" "}
                          <span style={{ color: "#5E7488" }}>تومان</span>
                        </h4>
                      </div> */}
                            {/* <div
                        className={styles.good_three_content}
                        style={{ marginBottom: "30px" }}
                      >
                        <h4>استرداد</h4>
                        <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
                          0- <span style={{ color: "#5E7488" }}>تومان</span>
                        </h4>
                      </div> */}
                            {/* <div
                        className={styles.good_three_content}
                        style={{ marginBottom: "30px" }}
                      >
                        <h4>کارمزد</h4>
                        <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
                          370,656-{" "}
                          <span style={{ color: "#5E7488" }}>تومان</span>
                        </h4>
                      </div> */}
                          </div>
                        )}
                        <div className={styles.good_four}>
                          <button
                            className={styles.btn}
                            onClick={() => setIsOpen(!isOpen)}
                          >
                            {isOpen ? (
                              <>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <h3>جزییات کمتر</h3>
                                  <span
                                    style={{
                                      fontSize: "16px",
                                      marginRight: "10px",
                                    }}
                                    className="fas fa-chevron-up"
                                  ></span>
                                </div>
                              </>
                            ) : (
                              <>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <h3>جزییات بیشتر</h3>
                                  <span
                                    style={{
                                      fontSize: "16px",
                                      marginRight: "10px",
                                    }}
                                    className="fas fa-chevron-down"
                                  ></span>
                                </div>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              {false && (
                <div className={styles.purchased_good}>
                  <h1 className={styles.header}>کالاهای خریداری شده</h1>
                  <hr />
                  {data.factor_post.map((e) => {
                    return (
                      <div className={styles.purchased_good_content}>
                        <div className={styles.purchased_good_one}>
                          <Image
                            src={`${e.product.image_thumbnail_url}`}
                            width={45}
                            height={45}
                          />
                          <h3 style={{ marginRight: "15px" }}>
                            {e.product.title}
                          </h3>
                        </div>
                        <div
                          className={styles.purchased_good_two}
                          style={{ marginTop: "16px" }}
                        >
                          <div style={{ display: "flex" }}>
                            <h4>قیمت :</h4>
                            <h4 style={{ color: "#364254" }}>
                              {e.product.price}{" "}
                              <span style={{ color: "#5E7488" }}>تومان</span>
                            </h4>
                          </div>
                          <div>
                            <h4 style={{ color: "#364254" }}>
                              {e.ProductCount} <span>عدد</span>
                            </h4>
                          </div>
                        </div>
                        {isOpen && (
                          <div className={styles.purchased_good_three}>
                            <div className={styles.good_three_content}>
                              <h4>مجموع هزینه محصول</h4>
                              <h4
                                style={{ color: "#089319", fontWeight: "bold" }}
                              >
                                {e.get_total_item_price}+{" "}
                                <span style={{ color: "#5E7488" }}>تومان</span>
                              </h4>
                            </div>
                            {/* <div className={styles.good_three_content}>
                        <h4> هزینه ارسال</h4>
                        <h4 style={{ color: "#089319", fontWeight: "bold" }}>
                          12.000+{" "}
                          <span style={{ color: "#5E7488" }}>تومان</span>
                        </h4>
                      </div> */}
                            <div
                              className={styles.good_three_content}
                              style={{ marginBottom: "30px" }}
                            >
                              <h4>تخفیف محصول</h4>
                              <h4
                                style={{ color: "#D14343", fontWeight: "bold" }}
                              >
                                {e.product.discount}-{" "}
                                <span style={{ color: "#5E7488" }}>تومان</span>
                              </h4>
                            </div>
                            {/* <div
                        className={styles.good_three_content}
                        style={{ marginBottom: "30px" }}
                      >
                        <h4>تخفیف ارسال</h4>
                        <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
                          200,000-{" "}
                          <span style={{ color: "#5E7488" }}>تومان</span>
                        </h4>
                      </div> */}
                            {/* <div
                        className={styles.good_three_content}
                        style={{ marginBottom: "30px" }}
                      >
                        <h4>استرداد</h4>
                        <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
                          0- <span style={{ color: "#5E7488" }}>تومان</span>
                        </h4>
                      </div> */}
                            {/* <div
                        className={styles.good_three_content}
                        style={{ marginBottom: "30px" }}
                      >
                        <h4>کارمزد</h4>
                        <h4 style={{ color: "#D14343", fontWeight: "bold" }}>
                          370,656-{" "}
                          <span style={{ color: "#5E7488" }}>تومان</span>
                        </h4>
                      </div> */}
                          </div>
                        )}
                        <div className={styles.good_four}>
                          <button
                            className={styles.btn}
                            onClick={() => setIsOpen(!isOpen)}
                          >
                            {isOpen ? (
                              <>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <h3>جزییات کمتر</h3>
                                  <span
                                    style={{
                                      fontSize: "16px",
                                      marginRight: "10px",
                                    }}
                                    className="fas fa-chevron-up"
                                  ></span>
                                </div>
                              </>
                            ) : (
                              <>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <h3>جزییات بیشتر</h3>
                                  <span
                                    style={{
                                      fontSize: "16px",
                                      marginRight: "10px",
                                    }}
                                    className="fas fa-chevron-down"
                                  ></span>
                                </div>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              {/* فاکتور نهایی */}

              <div className={styles.final_invoice}>
                <h1 className={styles.header}>فاکتور نهایی</h1>
                <hr />
                <div className={styles.content}>
                  <div className={styles.final_invoice_content}>
                    <h4>مجموع قیمت محصولات</h4>
                    <h4 style={{ color: "#089319", fontWeight: "bold" }}>
                      {data.total_price}+{" "}
                      <span style={{ color: "#5E7488" }}>تومان</span>
                    </h4>
                  </div>
                  <div className={styles.final_invoice_content}>
                    <h4>مجموع هزینه ارسال</h4>
                    <h4 style={{ color: "#089319", fontWeight: "bold" }}>
                      {data.post_details.post_price}+{" "}
                      <span style={{ color: "#5E7488" }}>تومان</span>
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
          )}
        </>
      )}
    </>
  );
}

export default HomePage;

HomePage.Layout = MyLayout;
