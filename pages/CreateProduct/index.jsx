import * as Yup from "yup";
import { Fragment, useEffect, useState } from "react";

import styles from "../../public/assets/scss/style.module.scss"

// import { CustomFormikFormInput, CustomInfoTooltip ,CustomFormikForm , CustomFormikButton , CustomSwitchButton ,ErrorMessage } from '../../component/index';


import CustomFormikFormInput from "../../component/Custom/CustomFormikFormInput/CustomFormikFormInput";
import CustomInfoTooltip from "../../component/Custom/CustomInfoTooltip/CustomInfoTooltip";
import CustomFormikForm from "../../component/Custom/CustomFormikForm/CustomFormikForm";
import CustomFormikButton from "../../component/Custom/CustomFormikButton/CustomFormikButton";
import CustomSwitchButton from "../../component/Custom/CustomSwitchButton/CustomSwitchButton";
import ErrorMessage from '../../component/Custom/CustomErrorMessage/CustomErrorMessage';
import { numberSeparateUtils } from "../../utils/numberSeparateUtils/numberSeparateUtils";
import { useFormikContext } from "formik";
import { toastWarningMessage } from "../../utils/toastMessage/toastMessage";

let validationSchema = Yup.object({
  title: Yup.string()
    .required("عنوان محصول اجباری می باشد")
    .max(120, "عنوان محصول نمی تواند از 120 کاراکتر بیشتر باشد"),
  description: Yup.string().max(
    5000,
    "عنوان محصول نمی تواند از 5000 کاراکتر بیشتر باشد"
  ),
  category: Yup.string().required("عنوان محصول اجباری می باشد"),
  weight: Yup.string().required("وزن خالص اجباری می باشد"),
  price: Yup.string().required("قیمت محصول اجباری می باشد"),
  count: Yup.string().required("موجودی محصول اجباری می باشد"),
  preparationTime: Yup.string().required("زمان آماده سازی اجباری می باشد"),
  weightWithPackaging: Yup.string().required("وزن با بسته بندی اجباری می باشد"),
});

const DiscountPrice = () => {
  const { values } = useFormikContext();

  const [isOffer, setIsOffer] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSetOffer = (value) => {
    if (value) {
      if (values["price"] >= 1000) {
        setIsOffer(value);
      } else {
        toastWarningMessage("ابتدا قیمت محصول را وارد نمایید");
      }
    } else {
      setIsOffer(false);
    }
  };

  useEffect(() => {
    if (values["priceWithDiscount"] > values["price"] && isOffer) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [values, isOffer]);

  return (
    <Fragment>
      <div className="mt-4">
        <CustomSwitchButton
          isSquare
          value={isOffer}
          onChange={(e) => handleSetOffer(e.target.checked)}
          label="تخفیف دارم"
          checked={isOffer}
        />
      </div>
      {isOffer && (
        <Fragment>
          <div className="mt-4">
            <CustomFormikFormInput
              label="قیمت با تخفیف"
              name="priceWithDiscount"
              suffixText="تومان"
              type="number"
            />
            <ErrorMessage
              visible={isError}
              message="قیمت با تخفیف نمیتواند از قیمت اصلی کمتر باید"
            />
          </div>
          <div className={styles.discount - container}>
            <p className={styles.preview - text}>پیش نمایش:</p>
            <p className={styles.discount - price}>
              {numberSeparateUtils(values["priceWithDiscount"])} تومان
            </p>
            <p className={styles.discount - price - line - through}>
              {numberSeparateUtils(values["price"])}
            </p>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const CreateProduct = () => {
  return (


    <Fragment>
      <div className="rtl">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <CustomFormikForm
                initialValues={{
                  title: "",
                  description: "",
                  category: "",
                  width: "",
                  weight: "",
                  price: "0",
                  count: "0",
                  status: "",
                  preparationTime: "0",
                  weightWithPackaging: "",
                  priceWithDiscount: "0",
                }}
                onSubmit={(value) => console.log(value)}
                validationSchema={validationSchema}
              >
                <Fragment>
                  <div style={{background:"red" , width:"300px" , height:"300px"}}></div>
                  <div>
                    <div>
                      <h5 className="mb-0 d-inline mr-2">عکس و ویدیو محصول*</h5>
                      <CustomInfoTooltip
                        title="با انتخاب تصاویر از زوایای مختلف و به اندازه کافی، به کاربران
                اجازه دهید تا همه جزییات محصول را ببینند."
                      />
                    </div>
                    <p className={styles.helper_text}>
                      انتخاب عکس خوب روی بازدید و فروش شما تاثیر بسیار بالایی دارد.
                    </p>
                  </div>
                  <hr />
                  <div>
                    <div>
                      <h5 className="mb-0 d-inline mr-2">معرفی محصول</h5>
                    </div>
                    <p className={styles.helper_text}>
                      برای جذب مشتری اطلاعات زیاد از محصولتان بنویسید.
                    </p>
                  </div>
                  <div>
                    <div className="mt-4">
                      <CustomFormikFormInput
                        label="عنوان محصول*"
                        name="title"
                        placeholder="اسباب بازی قایق بازی سوختی دیگ بخار"
                        length="120"
                      />
                    </div>
                    <div className="mt-4">
                      <CustomFormikFormInput
                        label="معرفی کامل محصول"
                        name="description"
                        placeholder="توضیح محصول "
                        length="5000"
                        tooltipTitle="روش تولید، مصرف و جزییات دیگر را اینجا بنویسید."
                        isTextArea
                      />
                    </div>
                    <div className="mt-4">
                      <CustomFormikFormInput label="دسته‌بندی*" name="category" />
                    </div>
                    <div className="mt-4">
                      <CustomFormikFormInput
                        label="ابعاد"
                        placeholder="سانتیمتر"
                        name="width"
                      />
                    </div>
                    <div className="mt-4">
                      <CustomFormikFormInput
                        label="وزن خالص‌*"
                        type="number"
                        suffixText="گرم"
                        name="weight"
                      />
                    </div>
                  </div>
                  <hr />
                  <div>
                    <div className="mt-4">
                      <CustomFormikFormInput
                        label="قیمت‌*"
                        type="number"
                        suffixText="تومان"
                        name="price"
                      />
                    </div>

                    <DiscountPrice />

                    <div className="mt-4">
                      <CustomFormikFormInput
                        label="موجودی محصول*"
                        isCounter
                        name="count"
                      />
                    </div>
                    <div className="mt-4">
                      <CustomFormikFormInput label="وضعیت محصول" name="status" />
                    </div>
                  </div>
                  <hr />
                  <div>
                    <h5>تنظیمات ارسال</h5>
                    <div className="mt-4 row justify-content-between">
                      <div>
                        <input className="mr-1" type="radio" />
                        <label>به سراسر ایران</label>
                      </div>
                      <div>
                        <input className="mr-1" type="radio" />
                        <label>انتخاب شهرها</label>
                      </div>
                    </div>
                    <div className="mt-4">
                      <CustomFormikFormInput
                        label="زمان آماده‌سازی*"
                        tooltipTitle="می‌توانید تعیین کنید بعد از دریافت سفارش چند روز زمان نیاز دارید تا محصول را آماده و ارسال کنید."
                        name="preparationTime"
                        isCounter
                      />
                    </div>
                    <div className="mt-4">
                      <CustomFormikFormInput
                        label="وزن با بسته‌بندی*"
                        name="weightWithPackaging"
                        suffixText="گرم"
                        tooltipTitle="وزن خالص محصول را به اضافه وزن کارتن بسته بندی کنید و اینجا ثبت کنید."
                      />
                    </div>
                  </div>

                  <CustomFormikButton type="submit">ثبت</CustomFormikButton>
                </Fragment>
              </CustomFormikForm>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>

      </div>


    </Fragment>
  );
};

export default CreateProduct;
