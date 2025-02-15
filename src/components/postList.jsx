/** package */
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
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
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  function addPostsHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: { "Content-Type": "application/json" },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostsHandler} />
        </Modal>
      )}

      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}

          {/*{defaultPostData.map((post, index) => (*/}
          {/*  <Post*/}
          {/*    key={post.userId || index}*/}
          {/*    author={post.username}*/}
          {/*    body={post.article}*/}
          {/*  />*/}
          {/*))}*/}
        </ul>
      )}

      {isFetching && <p>Loading posts....</p>}

      {posts.length === 0 && (
        <div
          style={{
            textAlign: "center",
          }}
        >
          <p style={{ color: "red", fontSize: "40px", fontWeight: "bold" }}>
            NO POST FOUNDED
          </p>
          <p
            style={{
              fontSize: "22px",
            }}
          >
            start add some post
          </p>
        </div>
      )}
    </>
  );
}
