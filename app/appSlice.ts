import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state
interface AppState {
  loginDialog: {
    open: boolean,
  }
}

// Define the initial state using that type
const initialState: AppState = {
    loginDialog: {
        open: false,   
    }
}

export const appSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Open the login dialog
    openLoginDialog: (state) => {
        state.loginDialog.open = true;
    },
    // Close the login dialog
    closeLoginDialog: (state) => {
        state.loginDialog.open = false;
    },
  },
})

export const { openLoginDialog, closeLoginDialog } = appSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAppState = (state: RootState) => state.app.loginDialog.open;

export default appSlice.reducer