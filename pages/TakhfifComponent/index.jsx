import * as Yup from "yup";
import { Fragment, useEffect, useState } from "react";

import CustomFormikFormInput from "./../../component/Custom/CustomFormikFormInput/CustomFormikFormInput";
// import CustomInfoTooltip from "./../../utils/Custom/CustomInfoTooltip/CustomInfoTooltip";
import CustomFormikForm from "./../../component/Custom/CustomFormikForm/CustomFormikForm";
import CustomSelectList from "./../../component/Custom/CustomSelectList/CustomSelectList";
import CustomFormikButton from "./../../component/Custom/CustomFormikButton/CustomFormikButton";
import CustomSwitchButton from "./../../component/Custom/CustomSwitchButton/CustomSwitchButton";
import CustomDivNote from "./../../component/Custom/CustomDivNote/CustomDivNote";
import MyLayout from "../../component/layout/Layout";

// import CustomButton from "../../utils/Custom/CustomButton/CustomButton";
// import ErrorMessage from "./../../utils/Custom/CustomErrorMessage/CustomErrorMessage";
// import { numberSeparateUtils } from "../../utils/numberSeparateUtils/numberSeparateUtils";
// import { useFormikContext } from "formik";
// import { toastWarningMessage } from "../../utils/toastMessage/toastMessage";
import styles from "./TakhfifCss.module.css";
const INITIAL_FORM_STATE = {
  coupon_name: "",
  // couponType:"",
  // discount:"",
  // maxDiscountAmount:"",
};

const FORM_VALIDAITION = Yup.object().shape({
  coupon_name: Yup.string()
    .required("عنوان کد تخفیف الزامی است")
    .max(100, "عنوان کد تخفیف نمی تواند از 120 کاراکتر بیشتر باشد"),
});

const TakhfifComponent = () => {
  const [isActive, setIsActive] = useState(false);
  const [offProduct, setoffProduct] = useState(false);
  const [termsOfUse, setTermsOfUse] = useState(false);
  const [usageRestrictions, setUsageRestrictions] = useState(false);
  const [offCerProduct, setOffCerProduct] = useState(false);

  //  3
  const handleSetActive = (value) => {
    if (value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  //4
  const changeOffCerProduct = (value) => {
    if (value) {
      setOffCerProduct(true);
    } else {
      setOffCerProduct(false);
    }
  };
  // 5
  const changeTermsOfUse = (value) => {
    if (value) {
      setTermsOfUse(true);
    } else {
      setTermsOfUse(false);
    }
  };
  //۶
  const changeUsageRestrictions = (value) => {
    if (value) {
      setUsageRestrictions(true);
    } else {
      setUsageRestrictions(false);
    }
  };

  return (
    <Fragment>
      <div className="rtl">
        <div className={styles.content_background}>
          <div className={styles.main_container}>
            <div className={styles.right_menu}>
              <div className={styles.side_menu_containe}></div>
            </div>
            {/* main partt */}
            <div className={styles.content}>
              <div className="row">
                <div className={`${styles.ios_header} w-100`}>
                </div>
                <CustomFormikForm
                  initialValues={{ ...INITIAL_FORM_STATE }}
                  validationSchema={FORM_VALIDAITION}
                >
                  {/* ۱ */}
                  <div className={`${styles.box} col-12 col-lg-7`}>
                    <CustomFormikFormInput
                      label="عنوان کد تخفیف"
                      name="coupon_name"
                      placeholder="مثلا میلاد"
                      length="100"
                    />
                  </div>

                  <CustomDivNote
                    text="
                ‍‍‍ باید برای کد تخفیف خود یک نام انتخاب کنید
                <br />
                بعنوان مثال نخل 55
                "
                  />

                  {/* ۲ */}
                  <div className={`${styles.box} col-12 col-lg-7`}>
                    <CustomSelectList
                      label="نوع تخفیف"
                      selectedText="انتخاب کنید"
                      onChange={(e) => console.log("e :>> ", e)}
                      valuesSelect={[
                        "درصدی",
                        "مقداری",
                        "تخفیف فقط روی هزینه ارسال",
                      ]}
                    />
                  </div>

                  <CustomDivNote
                    text="
                
                نوع تخفیف می‌تواند درصدی یا مقداری باشد درصدی: درصد تخفیفی
                که روی سبد خریدار اعمال می شود.می‌توانید حداکثر تخفیف را
                تعیین کنید مقداری: می‌توانید برای کد تخفیف مقدار تخفیف معینی
                در نظر بگیرید
              
                "
                  />
                  {/* 3 */}
                  <div className="box col-12 col-lg-7">
                    <CustomSwitchButton
                      isSquare
                      value={isActive}
                      onChange={(e) => handleSetActive(e.target.checked)}
                      label="تخفیف بر روی ارسال"
                      checked={isActive}
                    />
                    {isActive && (
                      <div className="pt-4">
                        <CustomSelectList
                          selectedText="انتخاب کنید"
                          valuesSelect={[
                            "۵۰٪ تخفیف هزینه ارسال",
                            "۱۰۰٪ تخفیف هزینه ارسال",
                          ]}
                        />
                      </div>
                    )}
                  </div>

                  <CustomDivNote
                    text="
                
                تخفیف بر روی هزینه ارسال می‌تواند برای مشتری جذاب باشد اما
                مراقب هزینه ارسال باشید
              
                "
                  />
                  {/* 4 */}
                  <div className="box col-12 col-lg-7">
                    <p className="m-2">اعمال تخفیف</p>
                    <div>
                      <div className="w-100 mt-4">
                        <CustomSwitchButton
                          isSquare
                          value={offCerProduct}
                          onChange={(e) => changeOffCerProduct(e.target.checked)}
                          label="تخفیف بر روی محصول خاص"
                          checked={offCerProduct}
                        />
                      </div>
                      {offCerProduct && (
                        <div>
                          <button className="btn btn-link text-primary m-2">
                            <i className="bi-plus"></i>
                          افزودن
                        </button>
                        </div>
                      )}
                      {/* <div className="w-100 mt-4">
                      <CustomSwitchButton
                        isSquare
                        value={isActive}
                        onChange={(e) => handleSetActive(e.target.checked)}
                        label="تخفیف بر روی شخص خاص"
                        checked={isActive}
                      />
                    </div> */}
                    </div>
                  </div>

                  <CustomDivNote
                    text="
                    
                تخفیف بر روی هزینه ارسال می‌تواند برای مشتری جذاب باشد اما
                مراقب هزینه ارسال باشید
              "
                  />
                  {/* 5 */}
                  <div className="box col-12 col-lg-7">
                    <div className="w-100 mt-4">
                      <CustomSwitchButton
                        isSquare
                        value={termsOfUse}
                        onChange={(e) => changeTermsOfUse(e.target.checked)}
                        label="شرط استفاده"
                        checked={termsOfUse}
                      />
                    </div>
                    {termsOfUse && (
                      <>
                        <div className="mt-4 row">
                          <div className="col-lg-5 p-2">
                            <input
                              type="radio"
                              name="my-rule"
                              id="min-bascket-count"
                              value="count"
                              className="checkbox"
                            />
                            <label htmlFor="min-bascket-count">
                              حداقل تعداد محصول در سبد
                          </label>
                          </div>
                          <div className="col-lg-7">
                            <CustomFormikFormInput isCounter name="count" />
                          </div>
                        </div>
                        <div className="mt-4 row">
                          <div className="col-lg-5 p-2">
                            <input
                              type="radio"
                              name="my-rule"
                              id="min-bascket-count"
                              value="count"
                              className="checkbox"
                            />
                            <label htmlFor="min-bascket-count">
                              حداقل میزان خرید
                          </label>
                          </div>
                          <div className="col-lg-7">
                            <CustomFormikFormInput
                              type="number"
                              suffixText="تومان"
                              name="price"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <CustomDivNote
                    text="
                حداقل تعداد محصول در سبد: حداقل تعداد محصولی که باید از غرفه ی شما در سبد خرید کاربر موجود باشد تا تخفیف اعمال شود حداقل میزان خرید: مبلغ خرید در سبد کاربر ' از غرفه شما ' از این مقدار بیشتر باشد تا تخفیف اعمال شود
                "
                  />
                  {/* 6 */}
                  <div className="box col-12 col-lg-7">
                    <div className="w-100 mt-4">
                      <CustomSwitchButton
                        isSquare
                        value={usageRestrictions}
                        onChange={(e) =>
                          changeUsageRestrictions(e.target.checked)
                        }
                        label="محدودیت استفاده"
                        checked={usageRestrictions}
                      />
                    </div>
                    {usageRestrictions && (
                      <>
                        <div className="row mt-4 p2">
                          <input
                            type="checkbox"
                            name="onceOnPerson"
                            id="onceOnPerson"
                            className="checkbox"
                          />
                          <label htmlFor="onceOnPerson" class="mb-0">
                            امکان استفاده فقط یکبار برای هر فرد
                        </label>
                        </div>
                        <div className="mt-4 row">
                          <div className="col-lg-5 p-2">
                            <input
                              type="radio"
                              name="my-rule"
                              id="min-bascket-count"
                              value="count"
                              className="checkbox"
                            />
                            <label htmlFor="min-bascket-count">
                              حداکثر تعداد استفاده از کد تخفیف
                          </label>
                          </div>
                          <div className="col-lg-7">
                            <CustomFormikFormInput
                              isCounter
                              name="limitUsingCount"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <CustomDivNote
                    text="
                فقط یکبار برای هر فرد: با فعال کردن این گزینه هر کاربر تنها یکبار مجاز به استفاده از این کد تخفیف می‌باشد. در غیر این صورت کاربر می‌تواند چند بار از کد تخفیف استفاده کند 
                "
                    text2="
                
                حداکثر تعداد استفاده از کد تخفیف: این کد تخفیف حداکثر چندبار قابل استفاده است"
                  />

                  {/* ۷ */}
                  <div className="box col-12 col-lg-7">
                    <p className="m-2">تاریخ اعتبار کد تخفیف</p>
                    <div className="mt-4">
                      <CustomFormikFormInput
                        label="از تاریخ"
                        name="coupon_name"
                        placeholder="1400/02/20"
                      />
                    </div>
                    <div className="mt-4">
                      <CustomFormikFormInput
                        label="تا تاریخ"
                        name="coupon_name"
                      />
                    </div>
                  </div>

                  {/* 8 */}
                  <div className="box col-12 col-lg-7">
                    <p className="m-4">کد کد تخفیف</p>
                    <CustomFormikFormInput name="coupon_name" />
                  </div>

                  <CustomDivNote
                    text="
                می‌توانید متن لاتین خاصی برای کد کد تخفیف بصورت دستی وارد کنید
                "
                  />

                  {/* 9 */}
                  <div className="box col-12 col-lg-7"></div>
                  {/* 10 */}
                  <div className={`${styles.box} col-12 col-lg-7`}>
                    <div className="row mt-4 p2">
                      <input
                        type="checkbox"
                        name="onceOnPerson"
                        id="onceOnPerson"
                        className={styles.checkbox}
                      />
                      <label htmlFor="onceOnPerson" className="mb-0">
                        دنبال کنندگانم ببینند
                    </label>
                    </div>
                    <div className="row mt-4 p2">
                      <input
                        type="checkbox"
                        name="onceOnPerson"
                        id="onceOnPerson"
                        className={styles.checkbox}
                      />
                      <label htmlFor="onceOnPerson" className="mb-0">
                        قوانین ساخت کد تخفیف را مطالعه نموده و می‌پذیرم.
                    </label>
                    </div>
                  </div>

                  <CustomDivNote
                    text="
                
با انتخاب این گزینه، کد تخفیف در صفحه تخفیف‌های دنبال‌کنندگان یا صفحات دیگر نخل به صورت عمومی نمایش داده می‌شود.
                "
                  />

                  {/* 11 */}
                  <div className="mt-5 col-12">
                    <CustomFormikButton type="submit">
                      ایجاد کد تخفیف
                  </CustomFormikButton>
                  </div>
                </CustomFormikForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TakhfifComponent;

TakhfifComponent.Layout = MyLayout;

