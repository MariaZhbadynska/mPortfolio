import http from "./httpCommon";

const getAllMessages = async () => {
  const response = await http.get("/");
  return response.data;
};
const deleteMessage = async (id) => {
  const response = await http.delete(`/${id}`);
  return response.data;
};

const pushMessage = async (mes) => {
  const response = await http.post("/", mes);
  return response.data;
};

export { getAllMessages, deleteMessage, pushMessage };
