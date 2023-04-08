import axios from "axios";
import config from "../config/config";

const signup = async (data) => {
  try {
    const result = await axios.post(`${config.domain}/auth/signup`, data);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const signin = async (data) => {
  try {
    const result = await axios.post(`${config.domain}/auth/signin`, data);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const profile = async () => {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
  };
  try {
    const result = await axios.get(`${config.domain}/auth/profile`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const allApi = {
  signin,
  signup,
  profile,
};

export default allApi;
