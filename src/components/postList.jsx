/** package */
import { faker } from "@faker-js/faker";
import { useState } from "react";
/** template */
import Post from "./post.jsx";
import NewPost from "./newPost.jsx";
import Modal from "./modal.jsx";
/** style */
import classes from "./postList.module.css";

export function createRandomPostData() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    article: faker.lorem.lines(2),
  };
}

export function generatePostData(count) {
  if (typeof count !== "number" || count <= 0) {
    return []; // ✅ 避免無效輸入時回傳 `undefined`，改為回傳空陣列
  }

  return faker.helpers.multiple(createRandomPostData, { count });
}

export default function PostList({ isPosting, onStopPosting }) {
  const defaultPostData = generatePostData(2);
  const [posts, setPosts] = useState([]);

  function addPostsHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={{ addPostsHandler }} />
        </Modal>
      )}
      <ul className={classes.posts}>
        {defaultPostData.map((post, index) => (
          <Post
            key={post.userId || index}
            author={post.username}
            body={post.article}
          />
        ))}
      </ul>
    </>
  );
}
