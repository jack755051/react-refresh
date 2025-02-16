/** package */
import { faker } from "@faker-js/faker";
import { useLoaderData } from "react-router-dom";
/** template */
import Post from "./post.jsx";
/** style */
import classes from "./PostList.module.css";

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

export default function PostList() {
  // const defaultPostData = generatePostData(2);
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

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
