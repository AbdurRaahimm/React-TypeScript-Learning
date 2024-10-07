import React, { createContext, FC, useContext, useReducer, Dispatch } from "react";
import { todos as initialTodos } from "../data/todo"; // Assuming "todos" is the imported data

// Define the shape of a Todo item
interface TodoType {
  id: number;
  title: string;
  completed: boolean;
}

// Define the shape of the entire state
interface TodoState {
  todos: TodoType[];
}

// Define actions that can be dispatched
type TodoAction =
  | { type: "ADD_TODO"; payload: TodoType }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "UPDATE_TODO"; payload: TodoType }
  | { type: "DELETE_TODO"; payload: number };

// Create the initial state
const initialState: TodoState = {
  todos: initialTodos,
};

// Define the reducer function
const reducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

// Define the shape of the context, which includes state and dispatch
interface TodoContextType {
  state: TodoState;
  dispatch: Dispatch<TodoAction>;
}

// Create the context with an initial value of null
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// TodoProvider component to wrap the app or components that need access to the todo state
export const TodoProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook to use the todo context
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
