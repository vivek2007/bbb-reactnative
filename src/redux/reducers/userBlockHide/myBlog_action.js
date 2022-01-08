import { Alert } from "react-native";
import {
  blockList,
  blockUnblockUser,
  Blog,
  getRequestApi,
  ShowProfile,
} from "../../../api/ap-apis";
import { _showAxiosError } from "../../../utils/messages";
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
  REQUESTMEMBER_FAILED,
  REQUESTMEMBER_SUCCESS,
  REQUESTMEMBER_LOADING,
  UNBLOCKUSER_FAILED,
  UNBLOCKUSER_SUCCESS,
  FRIENDSMEMBER_LOADING,
  FRIENDSMEMBER_FAILED,
  FRIENDSMEMBER_SUCCESS,
  SENDREQUESTTOMEMBER_LOADING,
  SENDREQUESTTOMEMBER_FAILED,
  SENDREQUESTTOMEMBER_SUCCESS,
  SUGGESTMEMBER_LOADING,
  SUGGESTMEMBER_FAILED,
  SUGGESTMEMBER_SUCCESS,
  RECIEVEREQUESTFROMMEMBER_LOADING,
  RECIEVEREQUESTFROMMEMBER_FAILED,
  RECIEVEREQUESTFROMMEMBER_SUCCESS,
} from "./myBlogType";

/**
 * Action that will help in fetching myblog for ap user
 * @param {Object} details
 * @param {Object} fcmDetails
 * @param {Object} navigation
 * @returns
 */
export const myBlog_fetching_action = (bodyFormData, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: MYBLOG_LOADING,
      });

      await Blog(bodyFormData)
        .then((response) => {
          if (response.data.status == "error") {
            dispatch({
              type: MYBLOG_FETCH_FAILED,
            });
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            }
          } else {
            dispatch({
              type: MYBLOG_FETCH_SUCCESS,
              payload: response.data.data,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: MYBLOG_FETCH_FAILED,
          });
          console.log(err);
        });
    } catch (error) {
      dispatch({
        type: MYBLOG_FETCH_FAILED,
      });
      console.log(error);
    }
  };
};

/**
 * Action that will help in fetching auther profile for ap user
 * @param {Object} details
 * @param {Object} fcmDetails
 * @param {Object} navigation
 * @returns
 */
export const SubscriberProfile_action = (bodyFormData, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: MYBLOG_LOADING,
      });

      await ShowProfile(bodyFormData)
        .then((response) => {
          if (response.data.status == "error") {
            dispatch({
              type: AUTHER_PROFILE_FAILED,
            });
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            }
          } else {
            dispatch({
              type: AUTHER_PROFILE_SUCCESS,
              payload: response.data.data,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: AUTHER_PROFILE_FAILED,
          });
          console.log(err);
        });
    } catch (error) {
      dispatch({
        type: AUTHER_PROFILE_FAILED,
      });
      console.log(error);
    }
  };
};

/**
 * Action that will help in fetching blocklist for ap user
 * @param {Object} details
 * @param {Object} fcmDetails
 * @param {Object} navigation
 * @returns
 */
export const blockList_action = (token, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: MYBLOG_LOADING,
      });

      await blockList(token)
        .then((response) => {
          if (response.data.status == "error") {
            dispatch({
              type: BLOCKLIST_FAILED,
            });
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            }
          } else {
            dispatch({
              type: BLOCKLIST_SUCCESS,
              payload: response.data.data,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: BLOCKLIST_FAILED,
          });
          console.log(err);
        });
    } catch (error) {
      dispatch({
        type: BLOCKLIST_FAILED,
      });
      console.log(error);
    }
  };
};

/**
 * Action that will help in fetching blockUser for ap user
 * @param {Object} details
 * @param {Object} fcmDetails
 * @param {Object} navigation
 * @returns
 */
export const blockUser_action = (data, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: MYBLOG_LOADING,
      });

      await blockUnblockUser(data)
        .then((response) => {
          // console.log(response.data,navigation,"==============")
          if (response.data.status == "error") {
            dispatch({
              type: BLOCKUSER_FAILED,
            });
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            } else alert(response.data.message);
            console.log("if called");
          } else {
            dispatch({
              type: BLOCKUSER_SUCCESS,
              payload: response.data,
            });
            navigation.push("App");
            Alert.alert(response.data.message);
            console.log("else called");
          }
        })
        .catch((err) => {
          dispatch({
            type: BLOCKUSER_FAILED,
          });
          console.log(err);
        });
    } catch (error) {
      dispatch({
        type: BLOCKUSER_FAILED,
      });
      console.log(error);
    }
  };
};

/**
 * Action that will help in fetching unblockUser for ap user
 * @param {Object} details
 * @param {Object} fcmDetails
 * @param {Object} navigation
 * @returns
 */
export const unblockUser_action = (bodyFormData, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: MYBLOG_LOADING,
      });

      await blockUnblockUser(bodyFormData)
        .then((response) => {
          if (response.data.status == "error") {
            dispatch({
              type: UNBLOCKUSER_FAILED,
            });
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            }
          } else {
            dispatch({
              type: UNBLOCKUSER_SUCCESS,
              payload: response.data.data,
            });
            Alert.alert(response.data.message);
          }
        })
        .catch((err) => {
          dispatch({
            type: UNBLOCKUSER_FAILED,
          });
          console.log(err);
        });
    } catch (error) {
      dispatch({
        type: UNBLOCKUSER_FAILED,
      });
      console.log(error);
    }
  };
};

/**
 * Action that will help in fetching user for SENDS REQUEST IN circle/members
 * @param {Object} details
 * @param {Object} fcmDetails
 * @param {Object} navigation
 * @returns
 */
export const sendReqTomember_action = (bodyFormData, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: SENDREQUESTTOMEMBER_LOADING,
      });

      await getRequestApi(bodyFormData)
        .then((response) => {
          if (response.data.status == "error") {
            dispatch({
              type: SENDREQUESTTOMEMBER_FAILED,
            });
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            }
          } else {
            dispatch({
              type: SENDREQUESTTOMEMBER_SUCCESS,
              payload: response.data.data,
            });
            // Alert.alert(response.data.message);
          }
        })
        .catch((err) => {
          dispatch({
            type: SENDREQUESTTOMEMBER_FAILED,
          });
          console.log(err);
        });
    } catch (error) {
      dispatch({
        type: SENDREQUESTTOMEMBER_FAILED,
      });
      console.log(error);
    }
  };
};



/**
 * Action that will help in fetching user for SENDS REQUEST IN circle/members
 * @param {Object} details
 * @param {Object} fcmDetails
 * @param {Object} navigation
 * @returns
 */
 export const recieveReqfromMember_action = (bodyFormData, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: RECIEVEREQUESTFROMMEMBER_LOADING,
      });

      await getRequestApi(bodyFormData)
        .then((response) => {
          if (response.data.status == "error") {
            dispatch({
              type: RECIEVEREQUESTFROMMEMBER_FAILED,
            });
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            }
          } else {
            dispatch({
              type: RECIEVEREQUESTFROMMEMBER_SUCCESS,
              payload: response.data.data,
            });
            // Alert.alert(response.data.message);
          }
        })
        .catch((err) => {
          dispatch({
            type: RECIEVEREQUESTFROMMEMBER_FAILED,
          });
          console.log(err);
        });
    } catch (error) {
      dispatch({
        type: RECIEVEREQUESTFROMMEMBER_FAILED,
      });
      console.log(error);
    }
  };
};





/**
 * Action that will help in fetching user frineds for circle/members
 * @param {Object} details
 * @param {Object} fcmDetails
 * @param {Object} navigation
 * @returns
 */
 export const memberFriend_action = (bodyFormData, navigation) => {
    return async (dispatch) => {
      try {
        await dispatch({
          type: FRIENDSMEMBER_LOADING,
        });
  
        await getRequestApi(bodyFormData)
          .then((response) => {
            if (response.data.status == "error") {
              dispatch({
                type: FRIENDSMEMBER_FAILED,
              });
              if (response.data.msg == "Invalid Token") {
                alert("Session expired.Please Login again.");
              } else if (response.data.msg == "Logged in user id is required") {
                alert("Something went wrong. Please try again");
              }
            } else {
              dispatch({
                type: FRIENDSMEMBER_SUCCESS,
                payload: response.data.data,
              });
            }
          })
          .catch((err) => {
            dispatch({
              type: FRIENDSMEMBER_FAILED,
            });
            console.log(err);
          });
      } catch (error) {
        dispatch({
          type: FRIENDSMEMBER_FAILED,
        });
        console.log(error);
      }
    };
  };
  
  
/**
 * Action that will help in fetching user SUGGESTIONS for circle/members
 * @param {Object} details
 * @param {Object} fcmDetails
 * @param {Object} navigation
 * @returns
 */
 export const suggestFriend_action = (bodyFormData, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: SUGGESTMEMBER_LOADING,
      });

      await getRequestApi(bodyFormData)
        .then((response) => {
          if (response.data.status == "error") {
            dispatch({
              type: SUGGESTMEMBER_FAILED,
            });
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            }
          } else {
            dispatch({
              type: SUGGESTMEMBER_SUCCESS,
              payload: response.data.data,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: SUGGESTMEMBER_FAILED,
          });
          console.log(err);
        });
    } catch (error) {
      dispatch({
        type: SUGGESTMEMBER_FAILED,
      });
      console.log(error);
    }
  };
};
