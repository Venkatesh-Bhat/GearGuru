import { configureStore, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const userData = JSON.parse(localStorage.getItem("user"));
// let isExpired = true;

// const refresh = async (userData) => {
//   try {
//     const res = await axios.post("http://localhost:8000/api/users/token", {
//       token: userData.refreshToken,
//     });
//     localStorage.setItem(
//       "user",
//       JSON.stringify({
//         ...userData,
//         accessToken: res.data.accessToken,
//         currentTime: new Date().getTime(),
//       })
//     );
//     return false;
//   } catch (err) {
//     // isExpired = true;
//     console.log("Token refresh failed:\n", err);
//     return true;
//   }
// };

// if (userData) {
//   const time = (new Date().getTime() - userData.currentTime) / (1000 * 60 * 60);
//   isExpired = time >= 24 && time >= 24 * 7;
//   if (time >= 24) {
//     refresh(userData.refreshToken);
//   }
// }

// const checkTokenIsExpired = () => {
//   const userData = JSON.parse(localStorage.getItem("user"));
//   if (userData) {
//     const time =
//       (new Date().getTime() - userData.currentTime) / (1000 * 60 * 60);
//     // isExpired = time >= 24 && time >= 24 * 7;
//     if (time >= 24) {
//       return refresh(userData);
//     } else {
//       store.dispatch(authActions.login()); // Dispatch action to update Redux state
//       return false;
//     }
//   }
// };

// checkTokenIsExpired();

// const userAlreadyLoggedIn = !checkTokenIsExpired();

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
      localStorage.removeItem("user");
    },
  },
});

export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: authSlice.reducer,
});
