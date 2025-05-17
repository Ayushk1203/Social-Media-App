import Post from "./Post";
import { useContext,useEffect,useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import Loading from "./Loading";

const PostList = () => {
  const { postList,addInitialPosts } = useContext(PostListData);
  const [loadingState,setLoadingState] = useState(false);
   
    useEffect(() => {
        setLoadingState(true);
        const controller = new AbortController();
        const signal = controller.signal;

       fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setLoadingState(false);
    });
    
    return () =>{
        controller.abort();
    }

    },[])

    
  return (
    <>
      {loadingState && <Loading/>}
      {!loadingState && postList.length === 0 && <WelcomeMessage/>}
      {!loadingState && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      ;
    </>
  );
};

export default PostList;
