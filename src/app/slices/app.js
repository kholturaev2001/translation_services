import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  consultModal: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    consultModalAC: (state, action) => {
        state.consultModal = action.payload
    }
  },
})

export const { consultModalAC } = appSlice.actions

export default appSlice.reducer