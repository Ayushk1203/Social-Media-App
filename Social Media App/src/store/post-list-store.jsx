import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addNewPost: () => {},
  deletePost: () => {},
  addInitialPosts:()=>{}
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "ADD_POST") {
    newPostList = [action.payload,...currPostList];  
  }else if(action.type === 'ADD_INITIAL_POSTS'){
    newPostList = action.payload.posts;
  } 
  else if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );

  const addNewPost = (userId, postTitle, postBody, postReactions, postTags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: postReactions,
        userId: userId,
        tags: postTags,
      },
    });
  };
  
 const addInitialPosts = (posts) => {
  const normalizedPosts = posts.map(post => ({
    ...post,
    reactions:
      typeof post.reactions === "object"
        ? (post.reactions.likes || 0) + (post.reactions.dislikes || 0)
        : post.reactions,
  }));

  dispatchPostList({
    type: "ADD_INITIAL_POSTS",
    payload: { posts: normalizedPosts },
  });
};
  
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addNewPost, deletePost,addInitialPosts }}>
      {children}
    </PostList.Provider>
  );
};



export default PostListProvider;
