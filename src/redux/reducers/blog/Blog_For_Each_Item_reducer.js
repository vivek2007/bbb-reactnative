import {
  Blog_LOADING,
  toke_saved,
  toke_notSaved,
  Blog_For_Each_Item_Fetch_FAILED,
  Blog_For_Each_Item_Fetch_SUCCESS,
  Blog_Comment_Fetch_SUCCESS,
  Blog_Comment_Fetch_FAILED,
  Blog_Comment_Add_SUCCESS,
  Blog_Comment_Add_FAILED,
  showCategories_FAILED,
  showCategories_SUCCESS,
  showCategories_Item_FAILED,
  showCategories_Item_SUCCESS,
  ShowNotification_FAILED,
  ShowNotification_SUCCESS,
  updateProfile_SUCCESS,
  ProfileBuild_FAILED,
  ProfileBuild_SUCCESS,
  updateProfile_FAILED,
  ShowProfile_SUCCESS,
  ShowProfile_FAILED,
  Search_SUCCESS,
  Search_FAILED,
  ADDBLOG_FIMAGE_SUCCESS,
  ADDBLOG_FIMAGE_FAILED,
  HTML_SUCCESS,
  HTML_FAILED,
  ADD_BLOG_SUCCESS,
  ADD_BLOG_FAILED,
  PROFILE_IMAGE_SUCCESS,
  PROFILE_IMAGE_FAILED,
  COVER_IMAGE_SUCCESS,
  COVER_IMAGE_FAILED,
  ADD_BLOG_RATING_SUCCESS,
  ADD_BLOG_RATING_FAILED,
  REPORT_LIST_SUCCESS,
  REPORT_LIST_FAILED,
  ADD_REPORT_SUCCESS,
  ADD_REPORT_FAILED,
  HIDE_BLOG_SUCCESS,
  HIDE_BLOG_FAILED,
  USERID_SAVE,
  USERID_NOTSAVE,
  HIDE_BLOG_LIST_SUCCESS,
  HIDE_BLOG_LIST_FAILED,
  LIKECOMMENT_SUCCESS,
  LIKECOMMENT_FAILED,
  COMMENTREPLY_SUCCESS,
  COMMENTREPLY_FAILED,
  SHOWCOMMENTREPLY_SUCCESS,
  SHOWCOMMENTREPLY_FAILED,
  EDITCOMMENT_SUCCESS,
  EDITCOMMENT_FAILED,
  DELETECOMMENT_SUCCESS,
  DELETECOMMENT_FAILED,
  ADDBLOG_FIMAGE_LOADING,
  blogDeatialLoading,
  commentFetchLoading,
  AddCommentLoading,
  categoryItemsLoading,
  NotifyLoading,
  ProfileUpdateLoading,
  profileFetchLoading,
  ADDBLOG_LOADING,
  profileUploadLoading,
  coverUploadLoading,
  BuildProfileLoading,
  FEATCHALLTCKETSUCCESS_LOADING,
  FEATCHALLTCKETSUCCESS,
  FEATCHALLTCKETFAILED,

} from "./Blog_For_Each_Item_type";

const State = {
  blog_loading: true,
  blogDetailFetchLoading: false,
  addblogFILoading: false,
  commentFecthLoading: false,
  commentAddLoading: false,
  cateItemLoading: false,
  profileUpdateLoader: false,
  buildingProfileLoading: false,
  profilefetchLoader: false,
  addBlogLoading:false,
  profileUploadLoader:false,
  coverUploadLoader:false,
  fetchticketloading:false,
  token_is: "",
  userId_is: "",
  Blog_For_Each_Item_info: [],
  Blog_Comment: [],
  Add_Blog_Comment: {},
  showCategories: [],
  showCategories_Item: [],
  ShowNotification: [],
  updateProfile: [],
  ProfileBuild: [],
  ShowProfile: [],
  SearchData: [],
  Addblog_fimage: {},
  html_data: [],
  ADD_BLOG_DATA: [],
  PROFILE_IMAGE: {},
  COVER_IMAGE: {},
  Addrate: "",
  reportList: [],
  addReport: {},
  hideBlog: {},
  hideBlogList: [],
  likeComment: [],
  replyComment: {},
  showCommentreplies: [],
  deleteComment: {},
  editComment: {},
  fetchAllTcketData:[],
};
export default Blog_For_Each_Item_reducer = (state = State, action) => {
  switch (action.type) {
    case Blog_LOADING:
      return {
        ...state,
        blog_loading: true,
      };
    case ADDBLOG_FIMAGE_LOADING:
      return {
        ...state,
        addblogFILoading: true,
      };
    case blogDeatialLoading:
      return {
        ...state,
        blogDetailFetchLoading: true,
      };

    case commentFetchLoading:
      return {
        ...state,
        commentFetchLoading: true,
      };
    case AddCommentLoading:
      return {
        ...state,
        commentAddLoading: true,
      };
    case categoryItemsLoading:
      return {
        ...state,
        cateItemLoading: true,
      };
    case NotifyLoading:
      return {
        ...state,
        notifyFetchLoading: true,
      };
    case ProfileUpdateLoading:
      return {
        ...state,
        profileUpdateLoader: true,
      };
    case BuildProfileLoading:
      return {
        ...state,
        buildingProfileLoading: true,
      };
    case profileFetchLoading:
      return {
        ...state,
        buildingProfileLoading: true,
      };
      case ADDBLOG_LOADING:
        return {
          ...state,
          addBlogLoading: true,
        };
        case profileUploadLoading:
            return {
              ...state,
              profileUploadLoader: true,
            };
            case coverUploadLoading:
                return {
                  ...state,
                  coverUploadLoader: true,
                };
                
                case FEATCHALLTCKETSUCCESS_LOADING:
                  return {
                    ...state,
                    fetchticketloading: true,
                  };

    //token
    case toke_saved:
      return {
        ...state,
        token_is: action.payload,
        blog_loading: false,
      };
    case toke_notSaved:
      return {
        ...state,
        blog_loading: false,
      };
    //UserId
    case USERID_SAVE:
      return {
        ...state,
        userId_is: action.payload,
        blog_loading: false,
      };
    case USERID_NOTSAVE:
      return {
        ...state,
        blog_loading: false,
      };
    //    Blog_For_Each_Item_Fetch
    case Blog_For_Each_Item_Fetch_SUCCESS:
      return {
        ...state,
        Blog_For_Each_Item_info: action.payload,
        blogDetailFetchLoading: false,
      };
    case Blog_For_Each_Item_Fetch_FAILED:
      return {
        ...state,
        blogDetailFetchLoading: false,
      };
    //// show comment case Blog_LOADING:
    case Blog_Comment_Fetch_SUCCESS:
      return {
        ...state,
        Blog_Comment: action.payload,
        commentFetchLoading: false,
      };
    case Blog_Comment_Fetch_FAILED:
      return {
        ...state,
        commentFetchLoading: false,
      };
    ////// add comment
    case Blog_Comment_Add_SUCCESS:
      return {
        ...state,
        Add_Blog_Comment: action.payload,
        commentAddLoading: false,
      };
    case Blog_Comment_Add_FAILED:
      return {
        ...state,
        commentAddLoading: false,
      };
    ////// showCategories
    case showCategories_SUCCESS:
      return {
        ...state,
        showCategories: action.payload,
        blog_loading: false,
      };
    case showCategories_FAILED:
      return {
        ...state,
        blog_loading: false,
      };
    // showCategories_Item
    case showCategories_Item_SUCCESS:
      return {
        ...state,
        showCategories_Item: action.payload,
        cateItemLoading: false,
      };
    case showCategories_Item_FAILED:
      return {
        ...state,
        cateItemLoading: false,
      };
    // ShowNotification
    case ShowNotification_SUCCESS:
      return {
        ...state,
        ShowNotification: action.payload,
        notifyFetchLoading: false,
      };
    case ShowNotification_FAILED:
      return {
        ...state,
        notifyFetchLoading: false,
      };
    // updateProfile
    case updateProfile_SUCCESS:
      return {
        ...state,
        updateProfile: action.payload,
        profileUpdateLoader: false,
      };
    case updateProfile_FAILED:
      return {
        ...state,
        profileUpdateLoader: false,
      };
    // PROFILE BUILD
    case ProfileBuild_SUCCESS:
      return {
        ...state,
        ProfileBuild: action.payload,
        buildingProfileLoading: false,
      };
    case ProfileBuild_FAILED:
      return {
        ...state,
        buildingProfileLoading: false,
      };
    // ShowProfile
    case ShowProfile_SUCCESS:
      return {
        ...state,
        Showprofile: action.payload,
        profilefetchLoader: false,
      };
    case ShowProfile_FAILED:
      return {
        ...state,
        profilefetchLoader: false,
      };
    // search
    case Search_SUCCESS:
      return {
        ...state,
        SearchData: action.payload,
        blog_loading: false,
      };
    case Search_FAILED:
      return {
        ...state,
        blog_loading: false,
      };
    // addblog_fimage
    case ADDBLOG_FIMAGE_SUCCESS:
      return {
        ...state,
        Addblog_fimage: action.payload,
        addblogFILoading: false,
      };
    case ADDBLOG_FIMAGE_FAILED:
      return {
        ...state,
        addblogFILoading: false,
      };
    // addblog_HTML
    case HTML_SUCCESS:
      return {
        ...state,
        html_data: action.payload,
        blog_loading: false,
      };
    case HTML_FAILED:
      return {
        ...state,
        blog_loading: false,
      };
    // Add_blog
    case ADD_BLOG_SUCCESS:
      return {
        ...state,
        ADD_BLOG_DATA: action.payload,
        addBlogLoading: false,
      };
    case ADD_BLOG_FAILED:
      return {
        ...state,
        addBlogLoading: false,
      };
    // PROFILE_IMAGE
    case PROFILE_IMAGE_SUCCESS:
      return {
        ...state,
        PROFILE_IMAGE: action.payload,
        profileUploadLoader: false,
      };
    case PROFILE_IMAGE_FAILED:
      return {
        ...state,
        profileUploadLoader: false,
      };
    // COVER IMAGE
    case COVER_IMAGE_SUCCESS:
      return {
        ...state,
        COVER_IMAGE: action.payload,
        coverUploadLoader: false,
      };
    case COVER_IMAGE_FAILED:
      return {
        ...state,
        coverUploadLoader: false,
      };
    // ADDRATING
    case ADD_BLOG_RATING_SUCCESS:
      return {
        ...state,
        Addrate: action.payload,
        blog_loading: false,
      };
    case ADD_BLOG_RATING_FAILED:
      return {
        ...state,
        blog_loading: false,
      };
    // Report list
    case REPORT_LIST_SUCCESS:
      return {
        ...state,
        reportList: action.payload,
        blog_loading: false,
      };
    case REPORT_LIST_FAILED:
      return {
        ...state,
        blog_loading: false,
      };
    //Add Report
    case ADD_REPORT_SUCCESS:
      return {
        ...state,
        addReport: action.payload,
        blog_loading: false,
      };
    case ADD_REPORT_FAILED:
      return {
        ...state,
        blog_loading: false,
      };
    //HIDE  BLOG
    case HIDE_BLOG_SUCCESS:
      return {
        ...state,
        hideBlog: action.payload,
        blog_loading: false,
      };
    case HIDE_BLOG_FAILED:
      return {
        ...state,
        blog_loading: false,
      };
    //HIDE  BLOG  LIST
    case HIDE_BLOG_LIST_SUCCESS:
      return {
        ...state,
        hideBlogList: action.payload,
        blog_loading: false,
      };
    case HIDE_BLOG_LIST_FAILED:
      return {
        ...state,
        blog_loading: false,
      };
    //like comment
    case LIKECOMMENT_SUCCESS:
      return {
        ...state,
        likeComment: action.payload,
        blog_loading: false,
      };
    case LIKECOMMENT_FAILED:
      return {
        ...state,
        blog_loading: false,
      };
    //reply comment
    case COMMENTREPLY_SUCCESS:
      return {
        ...state,
        replyComment: action.payload,
        blog_loading: false,
      };
    case COMMENTREPLY_FAILED:
      return {
        ...state,
        blog_loading: false,
      };
    //show all reply of each comment
    case SHOWCOMMENTREPLY_SUCCESS:
      return {
        ...state,
        showCommentreplies: action.payload,
        blog_loading: false,
      };
    case SHOWCOMMENTREPLY_FAILED:
      return {
        ...state,
        blog_loading: false,
      };
    //edit  comment
    case EDITCOMMENT_SUCCESS:
      return {
        ...state,
        editComment: action.payload,
        blog_loading: false,
      };
    case EDITCOMMENT_FAILED:
      return {
        ...state,
        blog_loading: false,
      };
    //DELETE  comment
    case DELETECOMMENT_SUCCESS:
      return {
        ...state,
        deleteComment: action.payload,
        blog_loading: false,
      };
    case DELETECOMMENT_FAILED:
      return {
        ...state,
        blog_loading: false,
      };

       //DELETE  comment
    case FEATCHALLTCKETSUCCESS:
      return {
        ...state,
        fetchAllTcketData: action.payload,
        fetchticketloading: false,
      };
    case FEATCHALLTCKETFAILED:
      return {
        ...state,
        fetchticketloading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
