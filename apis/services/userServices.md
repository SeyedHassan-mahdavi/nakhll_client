import http from "./configServices/httpService";

// Auth Services
export const signupService = (userData) => {
  return http.post(`${process.env.REACT_APP_BASE_URL}/Auth/signup`, JSON.stringify(userData));
};

export const signinService = (userData) => {
  return http.post(`${process.env.REACT_APP_BASE_URL}/Auth/signin`, JSON.stringify(userData));
};

export const signoutService = () => {
  return http.post(`${process.env.REACT_APP_BASE_URL}/Auth/signout`);
};
// End
