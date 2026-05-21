import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GlobalState {
  activeBusiness: string;
  user: {
    name: string;
    role: string;
  } | null;
}

const initialState: GlobalState = {
  activeBusiness: "Precision Enterprise",
  user: {
    name: "John Doe",
    role: "Senior Manager",
  },
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setActiveBusiness: (state, action: PayloadAction<string>) => {
      state.activeBusiness = action.payload;
    },
  },
});

export const { setActiveBusiness } = globalSlice.actions;

export const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
