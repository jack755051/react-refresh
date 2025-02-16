/** package */
import { useState } from "react";
/** template */
/** style */
import classes from "./NewPost.module.css";
import Modal from "../components/modal.jsx";

export default function NewPost({ onAddPost, onCancel }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };

    onAddPost(postData);

    console.warn(postData);

    onCancel();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" rows={3} required onChange={bodyChangeHandler} />
        </p>
        {/*<p>{enteredBody}</p>*/}
        <p>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          />
        </p>
        <p className={classes.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}
