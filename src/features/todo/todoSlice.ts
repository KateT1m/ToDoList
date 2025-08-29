import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TToDo } from "../../app/types";

interface TodoState {
    data: TToDo[];
}

const initialState: TodoState = {
    data: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo = { title: action.payload, id: Date.now(), completed: false } as TToDo;
            state.data.push(newTodo);
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.data.find(t => t.id === action.payload);
            if (todo) todo.completed = !todo.completed;
        },
        removeCompleted: (state) => {
            state.data = state.data.filter((todo) => !todo.completed);
        },
    },
});

export const { addTodo, toggleTodo, removeCompleted } = todoSlice.actions;

export default todoSlice.reducer;