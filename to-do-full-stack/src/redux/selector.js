import { createSelector } from "reselect";
export const todoSelector = createSelector(
    state=>state.todo[0],
    todo=>todo
)
export const noteSelector = createSelector(
    state=>state.note,
    note=>note
)
export const authSelector = createSelector(
    state=>state.auth,
    auth=>auth
)