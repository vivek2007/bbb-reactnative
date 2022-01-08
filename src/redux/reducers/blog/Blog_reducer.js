import {
  Blog_Fetch_FAILED,
  Blog_Fetch_SUCCESS,
  Blog_LOADING,
  SUGGESSION_BLOG_FAILED,
  SUGGESSION_BLOG_SUCCESS,
} from "./blog_type";
export const DeleteBlog = "deleteBlog";
const State = {
  blog_loading: true,
  Blog_info: [],
  SuggestBlog_info: [],
  finish: "",
};
export default Blog_Reducer = (state = State, action) => {
  switch (action.type) {
    case Blog_LOADING:
      return {
        ...state,
        blog_loading: true,
      };

    case Blog_Fetch_SUCCESS:
      let arr = [...state.Blog_info, ...action.payload.data];
      let filter=arr.filter(
        (v, i, a) =>
            a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i
      )
      let isFinish = action.payload.finish;
      // console.log(arr,filter,"+++++++++++")

      return {
        ...state,
        Blog_info: filter,
        // Blog_info:action.payload.data,
        finish: isFinish,
        blog_loading: false,
      };
    case Blog_Fetch_FAILED:
      return {
        ...state,
        blog_loading: false,
      };
    // case DeleteBlog:
    //   alert("access");
    //   let array = state.Blog_info.filter((i) => i.id !== action.payload);
    //   return {
    //     Blog_info: array,
    //     blog_loading: false,
    //   };

    // Suggest blog
    case SUGGESSION_BLOG_SUCCESS:
      return {
        ...state,
        SuggestBlog_info: action.payload,
        blog_loading: false,
      };
    case SUGGESSION_BLOG_FAILED:
      return {
        ...state,
        blog_loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};
