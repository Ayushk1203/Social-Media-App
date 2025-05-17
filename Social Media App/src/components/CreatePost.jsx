import { useContext, useRef } from "react";
import { PostList as PostListData } from "../store/post-list-store";

const CreatePost = () => {

  const {addNewPost} = useContext(PostListData);

  const postIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const postReactionsElement = useRef();
  const postTagsElement = useRef();

  const handleSubmitButton = (event) =>{
    event.preventDefault();
    const userId = postIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const postReactions = postReactionsElement.current.value;
    const postTags = postTagsElement.current.value.split(' ');

    addNewPost(userId,postTitle,postBody,postReactions,postTags);
    
    postIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    postReactionsElement.current.value = "";
    postTagsElement.current.value = "";

  }
  return (
    <>
      <form className="create-post" onSubmit={handleSubmitButton}>
        <div className="mb-3">
          <label htmlFor="user-Id" className="form-label">
            Enter you userId here
          </label>
          <input
            ref={postIdElement}
            type="text"
            className="form-control"
            id="Id"
            aria-describedby="emailHelp"
            placeholder="Your UserId"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="create-post" className="form-label">
            Post-Title
          </label>
          <input
            ref={postTitleElement}
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="How are you feeling today"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            ref={postBodyElement}
            rows='5'
            type="text"
            className="form-control"
            id="body"
            aria-describedby="emailHelp"
            placeholder="Tell us more about it"
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of Reactions
          </label>
          <input
            ref={postReactionsElement}
            type="text"
            className="form-control"
            id="reactions"
            aria-describedby="emailHelp"
            placeholder="How many people reacted"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            ref={postTagsElement}
            type="text"
            className="form-control"
            id="tags"
            aria-describedby="emailHelp"
            placeholder="Please enter tags using space"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
