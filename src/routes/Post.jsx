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
