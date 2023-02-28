/** @format */

import axios from "axios";
import config from "../../config";

const HTTP = axios.create({
  baseURL: config.baseUrl,
});

export default HTTP;
