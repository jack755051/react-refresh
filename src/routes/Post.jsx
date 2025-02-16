/** package */
import { useState } from "react";
/** template */
import PostList from "../components/PostList.jsx";
import { Outlet } from "react-router-dom";

/** style */

export default function Post() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();

  return resData.posts;
}
