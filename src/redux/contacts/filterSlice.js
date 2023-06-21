import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { search: '' };

const filterSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    filterContacts: {reducer(state, action) {
        state.filter = action.payload;
    },
    }
  },
});
export const { filterContacts } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;