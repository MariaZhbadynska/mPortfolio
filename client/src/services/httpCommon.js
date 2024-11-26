import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/api/messages",
  headers: {
    "Content-Type": "application/json",
  },
});
