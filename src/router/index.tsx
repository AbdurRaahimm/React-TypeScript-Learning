import { lazy } from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Error from "../components/Error";

const Counter = lazy(() => import('../pages/Counter'))
const Todo = lazy(() => import('../pages/Todo'))

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<Error />} >
        <Route index element={<Counter />} />
        <Route path="todo" element={<Todo />} />
      </Route>
    </>
  )
)
