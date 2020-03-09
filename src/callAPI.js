import { create } from "axios";

const createClient = baseURL =>
  create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Version: "1.0"
    }
  });

export default createClient(process.env.REACT_APP_API_URL);
