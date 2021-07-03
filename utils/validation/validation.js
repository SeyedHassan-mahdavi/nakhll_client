
// import { isEmpty } from "lodash";
// import {
//   mobilePhoneNumberRegex,
//   minLengthRegex,
//   maxLengthRegex,
//   dateRegex,
//   emailRegex,
//   numericRegex,
//   urlRegex,
//   urlWithOutProtocolRegex,
//   latinRegex,
//   imageFormatRegex,
//   iranianNationalIdRegex,
//   persianCharacterRegex,
// } from "../validationUtils/validationUtils";

export const formInputValidation = (
  value,
  currentValidation = []
) => {
  let message = "";
  let count = 0;
  // currentValidation?.map((validation) => {
  //   let validate = validation.split(":");
  //   switch (validate[0]) {
  //     case "required":
  //       if (isEmpty(value)) {
  //         message += `فیلد مورد نظر اجباری می باشد|`;
  //         count += 1;
  //       }
  //       break;
  //     case "phoneNumber":
  //       if (!mobilePhoneNumberRegex(value)) {
  //         message += `شماره موبایل را به درستی وارد نمایید|`;
  //         count += 1;
  //       }
  //       break;
  //     case "date":
  //       if (!dateRegex(value)) {
  //         message += `تاریخ را به درستی وارد نمایید|`;
  //         count += 1;
  //       }
  //       break;
  //     case "email":
  //       if (!emailRegex(value)) {
  //         message += `پست الکترونیک را به درستی وارد نمایید|`;
  //         count += 1;
  //       }
  //       break;
  //     case "numeric":
  //       if (!numericRegex(value)) {
  //         message += `فقط عدد وارد نمایید|`;
  //         count += 1;
  //       }
  //       break;
  //     case "min":
  //       if (!minLengthRegex(value, validate[1])) {
  //         message += `حداقل ${validate[1]} حروف وارد نمایید|`;
  //         count += 1;
  //       }
  //       break;
  //     case "max":
  //       if (!maxLengthRegex(value, validate[1])) {
  //         message += `حداکثر ${validate[1]} حروف وارد نمایید|`;
  //         count += 1;
  //       }
  //       break;
  //     case "equal":
  //       if (!(value?.length === validate[1])) {
  //         message += `طول حروف باید برابر با ${validate[1]} باشد|`;
  //         count += 1;
  //       }
  //       break;
  //     case "url":
  //       if (!urlRegex(value)) {
  //         message += `آدرس اینترنتی را به درستی وارد نمایید|`;
  //         count += 1;
  //       }
  //       break;
  //     case "urlWithOutProtocol":
  //       if (!urlWithOutProtocolRegex(value)) {
  //         message += `آدرس اینترنتی را به درستی و بدون پروتکل وارد نمایید|`;
  //         count += 1;
  //       }
  //       break;
  //     case "latin":
  //       if (!latinRegex(value)) {
  //         message += `فقط از حروف لاتین استفاده نمایید|`;
  //         count += 1;
  //       }
  //       break;
  //     case "nationalNumber":
  //       if (!iranianNationalIdRegex(value)) {
  //         message += `کد ملی معتبر نمی باشد|`;
  //         count += 1;
  //       }
  //       break;
  //     case "image":
  //       if (!imageFormatRegex(value)) {
  //         message += `پسوند تصویر معتبر نمی باشد|`;
  //         count += 1;
  //       }
  //       break;
  //     case "persian":
  //       if (!persianCharacterRegex(value)) {
  //         message += `فقط از حروف فارسی استفاده نمایید|`;
  //         count += 1;
  //       }
  //       break;

  //     default:
  //       break;
  //   }
  // });

  const errorMessages = message.split("|");

  return {
    errorMessages: errorMessages.map((message) => (
      <span className="d-block text-danger">{message}</span>
    )),
    count,
  };
};
