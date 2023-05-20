import axios from "axios";

const api = axios.create({
  baseURL: "https://4xdw47d8bg.execute-api.us-east-1.amazonaws.com/dev/",
});

export const addNewBook = async (values) => {
  const res = await api.post("/books", { ...values });
  const payload = res.data;
  return { payload };
};

export const getAllBooks = async () => {
  const res = await api.get("/books");
  const payload = res.data;
  return { payload };
};

export const updateABook = async (itemId) => {
  const res = await api.put(`/books/${itemId}`);
  const payload = res.data;
  return { payload };
};

export const deleteABook = async (itemId) => {
  const res = await api.delete(`/books/${itemId}`);
  const payload = res.data;
  return { payload };
};
