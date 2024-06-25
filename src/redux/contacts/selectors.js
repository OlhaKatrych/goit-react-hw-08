import { createSelector } from "@reduxjs/toolkit";
import selectNameFilter from "../../redux/filters/selectors";
export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (selectContacts, selectNameFilter) => {
    return selectContacts.filter((selectContacts) => {
      return selectContacts.name
        .toLowerCase()
        .includes(selectNameFilter.toLowerCase());
    });
  }
);
