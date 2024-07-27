import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
}

const initialState: AuthState = {
  token: localStorage.getItem("project_auth")
    ? JSON.parse(localStorage.getItem("project_auth")!).token
    : null,
  user: localStorage.getItem("project_auth")
    ? JSON.parse(localStorage.getItem("project_auth")!).user
    : null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    userLoggedIn: (
      state,
      action: PayloadAction<{ token: string; user: User }>
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      localStorage.setItem(
        "project_auth",
        JSON.stringify({
          token: action.payload.token,
          user: action.payload.user,
        })
      );
    },
    userLoggedOut: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("project_auth");
    },
    updateUserState: (state, action: PayloadAction<{ user: User }>) => {
      state.user = action.payload.user;
      const token = state.token;
      localStorage.setItem(
        "project_auth",
        JSON.stringify({
          user: action.payload.user,
          token: token,
        })
      );
    },
  },
});

export const { userLoggedIn, userLoggedOut, updateUserState } =
  authSlice.actions;

export default authSlice.reducer;
