import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NAME } from "./constants";
import User from "typing/User";

const userSlice = createSlice({
  name: NAME,
  initialState: {} as User,
  reducers: {
    set: (state, action: PayloadAction<User>) => action.payload,
  },
});

export default userSlice;
