import { createContext,useReducer } from "react";

export const PostList = createContext({
    postList : [],
    addNewPost : ()=>{},
    deletePost : () =>{}

 });
    
const postListReducer = ({currPostList,action}) =>{
    return currPostList;
}

const PostListProvider = ({children}) =>{
    
     const [postList,dispatchPostList] =useReducer(postListReducer,DEFAULT_POST_LIST);

    const addNewPost = () =>{

    }
    const deletePost = () =>{

    }

    return <PostList.Provider value={{postList,addNewPost,deletePost}}>{children}</PostList.Provider>
}

const DEFAULT_POST_LIST = [{
    id : '1',
    title: 'Going to Mumbai',
    body : 'I am going to Mumbai for my vacations. Hope to enjoy a lot',
    reactions : 2,
    userId: 'user-g9',
    tags : ['vacation', 'Mumbai', 'Enjoying']
},
{
    id : '2',
    title: 'Having Fun',
    body : 'Played cricket with my friends',
    reactions : 3,
    userId: 'user-g10',
    tags : ['Cricket','Fun']
}

]

export default PostListProvider;