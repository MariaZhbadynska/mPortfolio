import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import {
  deleteMessage,
  getAllMessages,
  pushMessage,
} from "../services/mesService";

export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async () => {
    const response = await getAllMessages();
    return response;
  }
);

export const removeMes = createAsyncThunk("messages/removeMes", async (id) => {
  await deleteMessage(id);
  return id;
});

export const addMes = createAsyncThunk("messages/addMes", async (mes) => {
  const response = await pushMessage(mes);
  return response;
});

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(removeMes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.filter((note) => note.id !== action.payload);
      })
      .addCase(addMes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload);
      });
  },
});

export default messagesSlice.reducer;
