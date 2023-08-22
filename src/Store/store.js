import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counterValue: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counterValue++;
    },
    decrement(state) {
      state.counterValue--;
    },
    increaseByValue(state, action) {
      state.counterValue = state.counterValue + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counterReducer: counterSlice.reducer,
    authReducer: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions; //to dispatch actions
export const authAuctions = authSlice.actions;
export default store;
