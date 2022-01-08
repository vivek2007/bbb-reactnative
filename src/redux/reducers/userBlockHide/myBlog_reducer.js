import {
  AUTHER_PROFILE_FAILED,
  AUTHER_PROFILE_SUCCESS,
  BLOCKLIST_FAILED,
  BLOCKLIST_SUCCESS,
  BLOCKUSER_FAILED,
  BLOCKUSER_SUCCESS,
  MYBLOG_FETCH_FAILED,
  MYBLOG_FETCH_SUCCESS,
  MYBLOG_LOADING,
  UNBLOCKUSER_FAILED,
  UNBLOCKUSER_SUCCESS,
  SENDREQUESTTOMEMBER_FAILED,
  SENDREQUESTTOMEMBER_LOADING,
  SENDREQUESTTOMEMBER_SUCCESS,

  FRIENDSMEMBER_FAILED,
  FRIENDSMEMBER_LOADING,
  FRIENDSMEMBER_SUCCESS,
  SUGGESTMEMBER_LOADING,
  RECIEVEREQUESTFROMMEMBER_LOADING,
  RECIEVEREQUESTFROMMEMBER_SUCCESS,
  RECIEVEREQUESTFROMMEMBER_FAILED,
  SUGGESTMEMBER_SUCCESS,
  SUGGESTMEMBER_FAILED,
} from "./myBlogType";

const State = {
  myblog_loading: true,
  sendReqToMember_loading:false,
  recieveReqfromMember_loading:false,
  friendsMember_loading:false,
  suggestMember_loading:false,
  myBlog_data: [],
  SubscriberProfile: [],
  blockList:[],
  unblockUser:{},
  blockUser:{},
  finish: "",
  reqToMember:[],
  reqFromMember:[],
  friendsMember:[],
  suggestMember:[]

};
export default function myBlog_Reducer(state = State, action) {
  switch (action.type) {
    case MYBLOG_LOADING:
      return {
        ...state,
        myblog_loading: true,
      };
    case  SENDREQUESTTOMEMBER_LOADING:
      return {
        ...state,
        sendReqToMember_loading: true,
      };
      case  FRIENDSMEMBER_LOADING:
      return {
        ...state,
        friendsMember_loading: true,
      };
      case  SUGGESTMEMBER_LOADING:
      return {
        ...state,
        suggestMember_loading: true,
      };
      case  RECIEVEREQUESTFROMMEMBER_LOADING:
      return {
        ...state,
        recieveReqfromMember_loading: true,
      };
    case MYBLOG_FETCH_SUCCESS:
      return {
        ...state,
        myBlog_data: action.payload,
        myblog_loading: false,
      };
    case MYBLOG_FETCH_FAILED:
      return {
        ...state,
        myblog_loading: false,
      };

    //auther profile
    case AUTHER_PROFILE_SUCCESS:
      return {
        ...state,
        SubscriberProfile: action.payload,
        myblog_loading: false,
      };
    case AUTHER_PROFILE_FAILED:
      return {
        ...state,
        myblog_loading: false,
      };
 //blockList
 case BLOCKLIST_SUCCESS:
  return {
    ...state,
    blockList: action.payload,
    myblog_loading: false,
  };
case BLOCKLIST_FAILED:
  return {
    ...state,
    myblog_loading: false,
  };
  //blockUser
 case BLOCKUSER_SUCCESS:
  return {
    ...state,
    blockUser: action.payload,
    myblog_loading: false,
  };
case BLOCKUSER_FAILED:
  return {
    ...state,
    myblog_loading: false,
  };
 //unblockUser
 case UNBLOCKUSER_SUCCESS:
  return {
    ...state,
    unblockUser: action.payload,
    myblog_loading: false,
  };
case UNBLOCKUSER_FAILED:
  return {
    ...state,
    myblog_loading: false,
  };
  //send requests to member in circle
 case SENDREQUESTTOMEMBER_SUCCESS:
  return {
    ...state,
    reqToMember: action.payload,
    sendReqToMember_loading: false,
  };
case SENDREQUESTTOMEMBER_FAILED:
  return {
    ...state,
    sendReqToMember_loading: false,
  };
    //RECIEVE requests FROM member in circle
 case RECIEVEREQUESTFROMMEMBER_SUCCESS:
  return {
    ...state,
    reqFromMember: action.payload,
    recieveReqfromMember_loading: false,
  };
case RECIEVEREQUESTFROMMEMBER_FAILED:
  return {
    ...state,
    recieveReqfromMember_loading: false,
  };

  //friends member in circle
  case FRIENDSMEMBER_SUCCESS:
    return {
      ...state,
      friendsMember: action.payload,
      friendsMember_loading: false,
    };
  case FRIENDSMEMBER_FAILED:
    return {
      ...state,
      friendsMember_loading: false,
    };
  
     //SUGGEST member in circle
  case SUGGESTMEMBER_SUCCESS:
    return {
      ...state,
      suggestMember: action.payload,
      suggestMember_loading: false,
    };
  case SUGGESTMEMBER_FAILED:
    return {
      ...state,
      suggestMember_loading: false,
    };
  
    default:
      return {
        ...state,
      };
  }
}
