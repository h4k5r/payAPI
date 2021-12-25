import {createSlice} from "@reduxjs/toolkit";
interface uiSliceInterface {
    isMobileNavOpen: boolean;
}
const initialState: uiSliceInterface = {
    isMobileNavOpen: false,
};
const UiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    toggleMobileNav: (state) => {
        state.isMobileNavOpen = !state.isMobileNavOpen;
    },
    closeMobileNav: (state) => {
        state.isMobileNavOpen = false;
    }
  }
});
export const UiActions = UiSlice.actions;
export default UiSlice.reducer;