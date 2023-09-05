import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = {
        email: "",
        token: "",
        localId: "",
      };
    },
  },
});

export const { setUser } = authSlice.actions;
export const { logout } = authSlice.actions;

export default authSlice.reducer;
