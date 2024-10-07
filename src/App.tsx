import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import { Suspense } from "react";


export default function () {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <RouterProvider router={router} />
    </Suspense>

  )
}
