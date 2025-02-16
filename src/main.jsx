import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/store.jsx";
import { Provider } from "react-redux";

import "./index.css";
import Post, { loader as postsLoader } from "./routes/Post.jsx";
import NewPost, { action as newPostAction } from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import ErrorPage from "./routes/ErrorPage.js";

const root = createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Post />,
        loader: postsLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction },
        ],
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
