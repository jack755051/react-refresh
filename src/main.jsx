import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store.jsx";
import { Provider } from "react-redux";

import "./index.css";
import Post from "./routes/Post.jsx";
import NewPost from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";

const root = createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Post />,
        children: [{ path: "/create-post", element: <NewPost /> }],
      },
    ],
  },
]);

root.render(
  <StrictMode>
    {/*<Provider store={store}>*/}
    {/*  <App />*/}
    {/*</Provider>*/}

    <RouterProvider router={router} />
  </StrictMode>,
);

console.log("Production mode:", import.meta.env.PROD);
