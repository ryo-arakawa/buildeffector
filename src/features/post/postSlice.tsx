import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";
import { PROPS_NEWPOST, PROPS_LIKED, PROPS_COMMENT } from "../types";

const apiUrlPost = `${process.env.REACT_APP_DEV_API_URL}api/post/`;

export const fetchAsyncGetPosts = createAsyncThunk("post/get", async () => {
  const res = await axios.get(apiUrlPost, {
    headers: {
      Authorization: `JWT ${localStorage.localJWT}`,
    },
  });
  return res.data;
});

