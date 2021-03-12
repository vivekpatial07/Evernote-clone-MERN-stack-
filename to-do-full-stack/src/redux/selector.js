import { createSelector } from "reselect";
export const todoSelector = createSelector(
    state=>state.todo[0],
    todo=>todo
)