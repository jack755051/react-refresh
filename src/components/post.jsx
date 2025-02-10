/** package */
/** template */
/** style */
import classes from "./post.module.css";

export default function Post({ author, body }) {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </div>
  );
}
