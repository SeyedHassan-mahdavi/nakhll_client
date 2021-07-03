// import Swal from "sweetalert2";
import { toast } from "react-toastify";

let toastOption = {
  position: "bottom-right",
  autoClose: true,
  closeOnClick: true,
};

export const toastSuccessMessage = (message) => {
  toast.success(message, toastOption);
};

export const toastErrorMessage = (message) => {
  toast.error(message, toastOption);
};

export const toastWarningMessage = (message) => {
  toast.warning(message, toastOption);
};

// export const deliverySuccessMessage = (message) => {
//   Swal.fire({
//     icon: "success",
//     html: `<h5> ${message} </h5>`,
//     confirmButtonText: "تایید",
//   });
// };

// const Toast = Swal.mixin({
//   toast: true,
//   position: "top-end",
//   showConfirmButton: false,
//   timer: 5000,
//   showCloseButton: true,
//   timerProgressBar: true,
//   onOpen: (toast) => {
//     toast.addEventListener("mouseenter", Swal.stopTimer);
//     toast.addEventListener("mouseleave", Swal.resumeTimer);
//   },
// });
