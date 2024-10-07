import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { Suspense } from "react";
import Loading from "./components/Loading";


export default function () {
  return (
    <Suspense fallback={<Loading/>}>
      <RouterProvider router={router} />
    </Suspense>

  )
}
