import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "./authOps";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(logIn.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.isError = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logIn.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logOut.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
  },
});

export default authSlice.reducer;
