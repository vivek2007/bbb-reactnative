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
  showCategories_Item_SUCCESS,
  showCategories_Item_FAILED,
  ShowNotification_FAILED,
  ShowNotification_SUCCESS,
  updateProfile_SUCCESS,
  updateProfile_FAILED,
  ShowProfile_SUCCESS,
  ShowProfile_FAILED,
  PROFILE_IMAGE_SUCCESS,
  PROFILE_IMAGE_FAILED,
  Search_SUCCESS,
  Search_FAILED,
  ADDBLOG_FIMAGE_SUCCESS,
  ADDBLOG_FIMAGE_FAILED,
  HTML_SUCCESS,
  HTML_FAILED,
  ADD_BLOG_SUCCESS,
  ADD_BLOG_FAILED,
  ADD_BLOG_RATING_SUCCESS,
  ADD_BLOG_RATING_FAILED,
  COVER_IMAGE_SUCCESS,
  COVER_IMAGE_FAILED,
  ProfileBuild_FAILED,
  ProfileBuild_SUCCESS,
  REPORT_LIST_FAILED,
  REPORT_LIST_SUCCESS,
  ADD_REPORT_SUCCESS,
  HIDE_BLOG_FAILED,
  HIDE_BLOG_SUCCESS,
  USERID_NOTSAVE,
  USERID_SAVE,
  HIDE_BLOG_LIST_FAILED,
  HIDE_BLOG_LIST_SUCCESS,
  UNHIDE_BLOG_SUCCESS,
  UNHIDE_BLOG_FAILED,
  LIKECOMMENT_FAILED,
  LIKECOMMENT_SUCCESS,
  COMMENTREPLY_FAILED,
  COMMENTREPLY_SUCCESS,
  SHOWCOMMENTREPLY_FAILED,
  SHOWCOMMENTREPLY_SUCCESS,
  EDITCOMMENT_FAILED,
  EDITCOMMENT_SUCCESS,
  DELETECOMMENT_FAILED,
  DELETECOMMENT_SUCCESS,
  DELETEREPLYCOMMENT_FAILED,
  DELETEREPLYCOMMENT_SUCCESS,
  EDITREPLYCOMMENT_FAILED,
  EDITREPLYCOMMENT_SUCCESS,
  LIKEREPLYCOMMENT_FAILED,
  LIKEREPLYCOMMENT_SUCCESS,
  ADDBLOG_FIMAGE_LOADING,
  blogDeatialLoading,
  commentFetchLoading,
  AddCommentLoading,
  categoryItemsLoading,
  NotifyLoading,
  ProfileUpdateLoading,
  BuildProfileLoading,
  profileFetchLoading,
  ADDBLOG_LOADING,
  profileUploadLoading,
  coverUploadLoading,
  FEATCHALLTCKETSUCCESS_LOADING,
  FEATCHALLTCKETFAILED,
  FEATCHALLTCKETSUCCESS,
} from "./Blog_For_Each_Item_type";
import { _showAxiosError } from "../../../utils/messages";
import {
  addHide,
  addProfileBuild,
  AddReplyCommentApi,
  addReport,
  Add_blog,
  Add_Rating,
  Blog_For_Each_Item,
  coverImage,
  deleteCommentApi,
  deleteReplyApi,
  editCommentApi,
  editReplyCommentApi,
  hideBlogList,
  LikeCommentApi,
  LikeReplyApi,
  profileImage,
  reportList,
  showAllTicket,
  ShowCommentReplies,
  unhideBlog,
} from "../../../api/ap-apis";
import { Show_Comment } from "../../../api/ap-apis";
import { Posting_Comment } from "../../../api/ap-apis";
import { showCategories } from "../../../api/ap-apis";
import { showCategories_Item } from "../../../api/ap-apis";
import { ShowNotification } from "../../../api/ap-apis";
import { updateProfile } from "../../../api/ap-apis";
import { ShowProfile } from "../../../api/ap-apis";
import { search } from "../../../api/ap-apis";
import { Fimage } from "../../../api/ap-apis";
import { Alert,ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const Token_action = (ap_token) => {
  return async (dispatch) => {
    try {
      if (ap_token == null) {
        dispatch({
          type: toke_notSaved,
        });
      } else {
        dispatch({
          type: toke_saved,
          payload: ap_token,
        });
      }
    } catch (error) {
      dispatch({
        type: toke_notSaved,
      });
      console.log(error, "error in toke_notSaved");
    }
  };
};

export const userId_action = (id) => {
  return async (dispatch) => {
    try {
      if (id == null) {
        dispatch({
          type: USERID_NOTSAVE,
        });
      } else {
        dispatch({
          type: USERID_SAVE,
          payload: id,
        });
      }
    } catch (error) {
      dispatch({
        type: USERID_NOTSAVE,
      });
      console.log(error, "error in toke_notSaved");
    }
  };
};

/**
 * Action that will help in fetching Blog_For_Each_Item
 * @param {Object} details
 * @param {Object} navigation
 * @returns
 */
export const Blog_fetching_For_Each_Item_action = (
  bodyFormData,
  navigation,
  id
) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: blogDeatialLoading,
      });

      await Blog_For_Each_Item(bodyFormData)
        .then((response) => {

          // console.log(response.data,"+++++++++++++++++")
          if (response.data.status == "error") {
            dispatch({
              type: Blog_For_Each_Item_Fetch_FAILED,
            });
            _showAxiosError(response.data.msg);
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            } else {
              alert(response.data.msg);
            }
          } else {
            dispatch({
              type: Blog_For_Each_Item_Fetch_SUCCESS,
              payload: response.data.data,
            });
            // navigation.navigate("Custom_blog", {
            //   product: response.data.data,
            //   blog_id: id,
            // });
          }
        })
        .catch((err) => {
          dispatch({
            type: Blog_For_Each_Item_Fetch_FAILED,
          });
        
        });
    } catch (error) {
      dispatch({
        type: Blog_For_Each_Item_Fetch_FAILED,
      });
    }
  };
};

/**
 * Action that will help in fetching Blog_comments
 * @param {Object} details
 * @param {Object} navigation
 * @returns
 */
export const Blog_Comment_action = (bodyFormData, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: commentFetchLoading,
      });

      await Show_Comment(bodyFormData)
        .then((response) => {
          if (response.data.status == "error") {
            dispatch({
              type: Blog_Comment_Fetch_FAILED,
            });
            // _showAxiosError(response.data.msg);
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            }
          } else {
            dispatch({
              type: Blog_Comment_Fetch_SUCCESS,
              payload: response.data.data,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: Blog_Comment_Fetch_FAILED,
          });
          console.log(err, "belongs to Blog_Comment_action");
          // _showAxiosError(err);
        });
    } catch (error) {
      dispatch({
        type: Blog_Comment_Fetch_FAILED,
      });
      // alert(error);
    }
  };
};

/**
 * Action that will help in Posting Blog_comments
 * @param {Object} details
 * @param {Object} navigation
 * @returns
 */
export const Add_Blog_Comment_action = (bodyFormData, navigation) => {

  return async (dispatch) => {
    try {
      await dispatch({
        type: AddCommentLoading,
      });

      await Posting_Comment(bodyFormData)
        .then((response) => {
          // console.log(response.data, "belongs to Add_Blog_Comment_action ");
          if (response.data.status == "error") {
            dispatch({
              type: Blog_Comment_Add_FAILED,
            });
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            } else {
              Alert.alert(response.data.msg);
            }
          } else {
            if(response.data.type=="error"){
              Alert.alert(response.data.msg);

            }
            else{
              // ToastAndroid(response.data.msg)
              // Add a Toast on screen.
// let toast = Toast.show(response.data.msg, {
//   duration: Toast.durations.LONG,
// });
// toast()
// // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
// setTimeout(function hideToast() {
//   Toast.hide(toast);
// }, 500);
              dispatch({
                type: Blog_Comment_Add_SUCCESS,
                payload: response.data.data,
              });
            }
          }
        })
        .catch((err) => {
          dispatch({
            type: Blog_Comment_Add_FAILED,
          });
          console.log(err, "belongs to Add_Blog_Comment_action");
          // _showAxiosError(err);
        });
    } catch (error) {
      dispatch({
        type: Blog_Comment_Add_FAILED,
      });
      // alert(error);
    }
  };
};

/**
 * Action that will help in fetching showCategories
 * @param {Object} details
 * @param {Object} navigation
 * @returns
 */
export const showCategories_action = (bodyFormData, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: Blog_LOADING,
      });

      await showCategories(bodyFormData)
        .then((response) => {
          // console.log(response.data, "belongs to showCategories_action ");
          if (response.data.status == "error") {
            dispatch({
              type: showCategories_FAILED,
            });
            // _showAxiosError(response.data.msg);
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            }
          } else {
            dispatch({
              type: showCategories_SUCCESS,
              payload: response.data.data,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: showCategories_FAILED,
          });
          console.log(err, "belongs to showCategories_action");
          // _showAxiosError(err);
        });
    } catch (error) {
      dispatch({
        type: showCategories_FAILED,
      });
      // alert(error);
    }
  };
};

/**
 * Action that will help in fetching showCategories_Item
 * @param {Object} details
 * @param {Object} navigation
 * @returns
 */
export const showCategories_Item_action = (bodyFormData, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: categoryItemsLoading,
      });

      await showCategories_Item(bodyFormData)
        .then((response) => {
          // console.log(response.data, "belongs to showCategories_action ");
          if (response.data.status == "error") {
            dispatch({
              type: showCategories_Item_FAILED,
            });
            // _showAxiosError(response.data.msg);
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            }
            console.log("belongs to showCategories_action");
          } else {
            dispatch({
              type: showCategories_Item_SUCCESS,
              payload: response.data.data,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: showCategories_Item_FAILED,
          });
          console.log(err, "belongs to showCategories_action");
          // _showAxiosError(err);
        });
    } catch (error) {
      dispatch({
        type: showCategories_Item_FAILED,
      });
      // alert(error);
    }
  };
};

/**
 * Action that will help in fetching ShowNotification
 * @param {Object} details
 * @param {Object} navigation
 * @returns
 */
export const ShowNotification_action = (bodyFormData, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: NotifyLoading,
      });

      await ShowNotification(bodyFormData)
        .then((response) => {
          // console.log(response.data, "belongs to ShowNotification ");
          if (response.data.status == "error") {
            dispatch({
              type: ShowNotification_FAILED,
            });
            // _showAxiosError(response.data.msg);
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            }
            console.log("belongs to ShowNotification");
          } else {
            dispatch({
              type: ShowNotification_SUCCESS,
              payload: response.data.data,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: ShowNotification_FAILED,
          });
          console.log(err, "belongs to ShowNotification");
          // _showAxiosError(err);
        });
    } catch (error) {
      dispatch({
        type: ShowNotification_FAILED,
      });
      // alert(error);
    }
  };
};

/**
 * Action that will help in fetching updateProfile
 * @param {Object} details
 * @param {Object} navigation
 * @param [array] showprofile data
 * @returns
 */
export const updateProfile_action = (bodyFormData, navigation) => {
  // console.log(s_data)
  return async (dispatch) => {
    try {
      await dispatch({
        type: ProfileUpdateLoading,
      });

      await updateProfile(bodyFormData)
        .then((response) => {
          // console.log(response.data, "belongs to updateProfile ");
          if (response.data.status == "error") {
            dispatch({
              type: updateProfile_FAILED,
            });
            // _showAxiosError(response.data.msg);
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            } else {
              _showAxiosError(response.data.msg);
            }

            console.log("belongs to updateProfile");
          } else {
            dispatch({
              type: updateProfile_SUCCESS,
              payload: response.data.data,
            });
            // Alert.alert("Profile Updated"); this
          }
        })
        .catch((err) => {
          dispatch({
            type: updateProfile_FAILED,
          });
          console.log(err, "belongs to updateProfile");
        });
    } catch (error) {
      dispatch({
        type: updateProfile_FAILED,
      });
      // alert(error);
    }
  };
};

/**
 * Action that will help in fetching profile build
 * @param {Object} details
 * @param {Object} navigation
 * @param [array] showprofile data
 * @returns
 */
export const ProfileBuild_action = (
  bodyFormData,
  navigation,
  Guest_id,
  param
) => {

  const merge = async () => {
    let value = "1";
    if (Guest_id == -1 && param != undefined) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'EmailVerify' }]
    })
      // navigation.navigate("EmailVerify");
    } else {
      await AsyncStorage.removeItem("@user_type");
      await AsyncStorage.mergeItem("@user_type", value);
      Alert.alert("Great! You are all set");
      navigation.reset({
        index: 0,
        routes: [{ name: 'App' }]
    })
      // navigation.dispatch(CommonActions.navigate("App"));
    }
  };
  return async (dispatch) => {
    try {
      await dispatch({
        type: BuildProfileLoading,
      });

      await addProfileBuild(bodyFormData)
        .then((response) => {
          // console.log(response.data, "belongs to ProfileBuild_action ");
          if (response.data.status == "error") {
            dispatch({
              type: ProfileBuild_FAILED,
            });
            // _showAxiosError(response.data.msg);
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            } else {
              Alert.alert(response.data.msg);
            }
            console.log("belongs to ProfileBuild_action");
          } else {
            dispatch({
              type: ProfileBuild_SUCCESS,
              payload: response.data.data,
            });
            merge();
          }
        })
        .catch((err) => {
          dispatch({
            type: ProfileBuild_FAILED,
          });
          console.log(err, "belongs to ProfileBuild_action");
          // _showAxiosError(err);
        });
    } catch (error) {
      dispatch({
        type: ProfileBuild_FAILED,
      });
      // alert(error);
    }
  };
};

/**
 * Action that will help in fetching ShowProfile
 * @param {Object} details
 * @param {Object} navigation
 * @returns
 */
export const ShowProfile_action = (bodyFormData, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: profileFetchLoading,
      });

      await ShowProfile(bodyFormData)
        .then((response) => {
          // console.log(response.data, "belongs to ShowProfile_action ");
          if (response.data.status == "error") {
            dispatch({
              type: ShowProfile_FAILED,
            });
            // _showAxiosError(response.data.msg);
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            }
          } else {
            dispatch({
              type: ShowProfile_SUCCESS,
              payload: response.data.data,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: ShowProfile_FAILED,
          });
          console.log(err, "belongs to ShowProfile_action");
          // _showAxiosError(err);
        });
    } catch (error) {
      dispatch({
        type: ShowProfile_FAILED,
      });
      // alert(error);
    }
  };
};

/**
 * Action that will help in fetching SearchData
 * @param {Object} details
 * @param {Object} navigation
 * @returns
 */
export const Search_action = (bodyFormData, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: Blog_LOADING,
      });

      await search(bodyFormData)
        .then((response) => {
          if (response.data.status == "error") {
            dispatch({
              type: Search_FAILED,
            });
            // _showAxiosError(response.data.msg);
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            }
            console.log("belongs to Search_action+++++++++++++++++");
          } else {
            dispatch({
              type: Search_SUCCESS,
              payload: response.data.data,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: Search_FAILED,
          });
          console.log(err, "belongs to Search_action");
          // _showAxiosError(err);
        });
    } catch (error) {
      dispatch({
        type: Search_FAILED,
      });
      // alert(error);
    }
  };
};

/**
 * Action that will help in fetching AddBlog_fImage
 * @param {Object} details
 * @param {Object} navigation
 * @returns
 */
export const AddBlog_fImage_action = (bodyFormData, navigation) => {

  return async (dispatch) => {
    try {
      await dispatch({
        type: ADDBLOG_FIMAGE_LOADING,
      });

      await Fimage(bodyFormData)
        .then((response) => {
          // console.log(response.data, "belongs to AddBlog_fImage_action ");
          if (response.data.status == "error") {
            dispatch({
              type: ADDBLOG_FIMAGE_FAILED,
            });
            // _showAxiosError(response.data.msg);
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            }
            console.log("belongs to AddBlog_fImage_action+++++++++++++++++");
          } else {
            dispatch({
              type: ADDBLOG_FIMAGE_SUCCESS,
              payload: response.data,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: ADDBLOG_FIMAGE_FAILED,
          });
          console.log(err, "belongs to AddBlog_fImage_action");
          // _showAxiosError(err);
        });
    } catch (error) {
      dispatch({
        type: ADDBLOG_FIMAGE_FAILED,
      });
      // alert(error);
    }
  };
};

export const Htmal_data_AddBlog = (data) => {
  // console.log(data,"000000000000")
  return async (dispatch) => {
    try {
      if (data == null) {
        dispatch({
          type: HTML_FAILED,
        });
      } else {
        dispatch({
          type: HTML_SUCCESS,
          payload: data,
        });
        // console.log("html data saved")
      }
      // console.log("tryyyyyyyyy")
    } catch (error) {
      dispatch({
        type: HTML_FAILED,
      });
      console.log(error, "error in saving HTML");
      // alert(error);
    }
  };
};

/**
 * Action that will help in fetching ADDBLOG DATA
 * @param {Object} details
 * @param {Object} navigation
 * @returns
 */
export const Add_Blog_action = (bodyFormData, navigation) => {

  return async (dispatch) => {
    try {
      await dispatch({
        type: ADDBLOG_LOADING,
      });

      await Add_blog(bodyFormData)
        .then((response) => {
          console.log(response.data, "belongs to Add_blog ");
          if (response.data.status == "error") {
            dispatch({
              type: ADD_BLOG_FAILED,
            });
            _showAxiosError(response.data.message);
            console.log("belongs to Add_blog status if+++++++++++++++++");
          } else {
            dispatch({
              type: ADD_BLOG_SUCCESS,
              payload: response.data,
            });
            if (response.data.status == "success") {
              // Alert.alert("blog added successfully"); this
              navigation.goBack();
            }
            // nav();
          }
        })
        .catch((err) => {
          dispatch({
            type: ADD_BLOG_FAILED,
          });
          console.log(err, ".catch error belongs to Add_blog");
          _showAxiosError(err);
        });
    } catch (error) {
      dispatch({
        type: ADD_BLOG_FAILED,
      });
      // alert(error);
    }
  };
};

/**
 * Action that will help in fetching PROFILE_Image
 * @param {Object} details
 * @param {Object} navigation
 * @returns
 */

export const Profile_image_action = (bodyFormData, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: profileUploadLoading,
      });

      await profileImage(bodyFormData)
        .then((response) => {
          // console.log(response.data, "belongs to Profile_image_action ");
          if (response.data.status == "error") {
            dispatch({
              type: PROFILE_IMAGE_FAILED,
            });
            // _showAxiosError(response.data.msg);
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            }
          } else {
            dispatch({
              type: PROFILE_IMAGE_SUCCESS,
              payload: response.data,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: PROFILE_IMAGE_FAILED,
          });
          console.log(err, "belongs to Profile_image_action");
          // _showAxiosError(err);
        });
    } catch (error) {
      dispatch({
        type: PROFILE_IMAGE_FAILED,
      });
      // alert(error);
    }
  };
};

/**
 * Action that will help in fetching COVER_Image
 * @param {Object} details
 * @param {Object} navigation
 * @returns
 */

export const cover_image_action = (bodyFormData, navigation) => {
  // console.log("called");

  return async (dispatch) => {
    try {
      await dispatch({
        type: coverUploadLoading,
      });

      await coverImage(bodyFormData)
        .then((response) => {
          // console.log(response.data, "belongs to cover_image_action ");
          if (response.data.status == "error") {
            dispatch({
              type: COVER_IMAGE_FAILED,
            });
            // _showAxiosError(response.data.msg);
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            }
            console.log("belongs to cover_image_action+++++++++++++++++");
          } else {
            dispatch({
              type: COVER_IMAGE_SUCCESS,
              payload: response.data,
            });
            // console.log("object")
          }
        })
        .catch((err) => {
          dispatch({
            type: COVER_IMAGE_FAILED,
          });
          console.log(err, "belongs to cover_image_action");
          // _showAxiosError(err);
        });
    } catch (error) {
      dispatch({
        type: COVER_IMAGE_FAILED,
      });
      // alert(error);
    }
  };
};

/**
 * AddRating that will help in fetching PROFILE_Image
 * @param {Object} details
 * @param {Object} navigation
 * @returns
 */

export const AddRating_action = (bodyFormData, navigation) => {
  // console.log("called");

  return async (dispatch) => {
    try {
      await dispatch({
        type: Blog_LOADING,
      });

      await Add_Rating(bodyFormData)
        .then((response) => {
          // console.log(response.data, "belongs to AddRating_action ");
          if (response.data.type == "error") {
            dispatch({
              type: ADD_BLOG_RATING_FAILED,
            });
            _showAxiosError(response.data.message);
            console.log("belongs to AddRating_action+++++++++++++++++");
          } else {
            dispatch({
              type: ADD_BLOG_RATING_SUCCESS,
              payload: response.data,
            });
            // console.log("object");
            // Alert.alert(response.data.message);
          }
        })
        .catch((err) => {
          dispatch({
            type: ADD_BLOG_RATING_FAILED,
          });
          console.log(err, "belongs to AddRating_action");
          // _showAxiosError(err);
        });
    } catch (error) {
      dispatch({
        type: ADD_BLOG_RATING_FAILED,
      });
      // alert(error);
    }
  };
};

/**
 *  api that will help in fetching reportlist
 * @param {Object} details
 * @param {Object} navigation
 * @returns
 */

export const ReportList_Action = (bodyFormData, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: Blog_LOADING,
      });

      await reportList(bodyFormData)
        .then((response) => {
          if (response.data.type == "error") {
            dispatch({
              type: REPORT_LIST_FAILED,
            });
            _showAxiosError(response.data.message);
            console.log("belongs to ReportList_Action+++++++++++++++++");
          } else {
            dispatch({
              type: REPORT_LIST_SUCCESS,
              payload: response.data.data,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: REPORT_LIST_FAILED,
          });
          console.log(err, "belongs to ReportList_Action");
          _showAxiosError(err);
        });
    } catch (error) {
      dispatch({
        type: REPORT_LIST_FAILED,
      });
      alert(error);
    }
  };
};

/**
 *  api that will help in fetching addReport
 * @param {Object} details
 * @param {Object} navigation
 * @returns
 */

export const addReport_Action = (bodyFormData, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: Blog_LOADING,
      });

      await addReport(bodyFormData)
        .then((response) => {
          // console.log(response.data, "{{{{{");

          if (response.data.type == "error") {
            dispatch({
              type: ADD_REPORT_FAILED,
            });
            _showAxiosError(response.data.message);
            console.log("belongs to addReport_Action+++++++++++++++++");
          } else {
            dispatch({
              type: ADD_REPORT_SUCCESS,
              payload: response.data,
            });
            Alert.alert(
              "Your report has been submitted. After reviewing we will take necessary action, within 24 to 48 hours."
            );
          }
        })
        .catch((err) => {
          dispatch({
            type: ADD_REPORT_FAILED,
          });
          console.log(err, "belongs to addReport_Action");
          _showAxiosError(err);
        });
    } catch (error) {
      dispatch({
        type: ADD_REPORT_FAILED,
      });
      alert(error);
    }
  };
};

/**
 *  api that will help in hideBlog
 * @param {Object} details
 * @param {Object} navigation
 * @returns
 */

export const hideBlog_Action = (bodyFormData, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: Blog_LOADING,
      });

      await addHide(bodyFormData)
        .then((response) => {
          // console.log(response.data, "{{{{{");

          if (response.data.type == "error") {
            dispatch({
              type: HIDE_BLOG_FAILED,
            });
            _showAxiosError(response.data.message);
            // console.log("belongs to hideBlog_Action+++++++++++++++++");
          } else {
            dispatch({
              type: HIDE_BLOG_SUCCESS,
              payload: response.data,
            });
            // Alert.alert("Your report has been submitted. After reviewing we will take necessary action, within 24 to 48 hours.")
            navigation.push("App");
          }
        })
        .catch((err) => {
          dispatch({
            type: HIDE_BLOG_FAILED,
          });
          console.log(err, "belongs to hideBlog_Action");
          _showAxiosError(err);
        });
    } catch (error) {
      dispatch({
        type: HIDE_BLOG_FAILED,
      });
      alert(error);
    }
  };
};

/**
 * Action that will help in fetching hideBloglist for ap user
 * @param {Object} details
 * @param {Object} fcmDetails
 * @param {Object} navigation
 * @returns
 */
export const hideBlogList_action = (token, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: Blog_LOADING,
      });

      await hideBlogList(token)
        .then((response) => {
          // console.log(response.data,"yyyyyy")
          if (response.data.status == "error") {
            dispatch({
              type: HIDE_BLOG_LIST_FAILED,
            });
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            }
            // else{Alert.alert(response.data.message)}
          } else {
            dispatch({
              type: HIDE_BLOG_LIST_SUCCESS,
              payload: response.data.data,
            });
            // Alert.alert(response.data.message)
          }
        })
        .catch((err) => {
          dispatch({
            type: HIDE_BLOG_LIST_FAILED,
          });
          console.log(err);
        });
    } catch (error) {
      dispatch({
        type: HIDE_BLOG_LIST_FAILED,
      });
      console.log(error);
    }
  };
};

/**
 * Action that will help in fetching unhideBlog for ap user
 * @param {Object} details
 * @param {Object} fcmDetails
 * @param {Object} navigation
 * @returns
 */
export const unhideBlog_action = (data, navigation) => {
  console.log(data);
  return async (dispatch) => {
    try {
      await dispatch({
        type: Blog_LOADING,
      });

      await unhideBlog(data)
        .then((response) => {
          if (response.data.status == "error") {
            dispatch({
              type: UNHIDE_BLOG_FAILED,
            });
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            } else {
              Alert.alert(response.data.message);
            }
          } else {
            dispatch({
              type: UNHIDE_BLOG_SUCCESS,
              payload: response.data.data,
            });
            // Alert.alert(response.data.message);
          }
        })
        .catch((err) => {
          dispatch({
            type: UNHIDE_BLOG_FAILED,
          });
          console.log(err);
        });
    } catch (error) {
      dispatch({
        type: UNHIDE_BLOG_FAILED,
      });
      console.log(error);
    }
  };
};


/**
 * Action that will help in fetching LIKE/UNLIKE COMMENT for ap user
 * @param {Object} details
 * @param {Object} fcmDetails
 * @param {Object} navigation
 * @returns
 */
 export const LikeComment_Action = (data, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: Blog_LOADING,
      });

      await LikeCommentApi(data)
        .then((response) => {
          // console.log(response.data,"################################")
          if (response.data.status == "error") {
            dispatch({
              type: LIKECOMMENT_FAILED,
            });
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            } else {
              Alert.alert(response.data.message);
            }
            console.log("error belongs to LikeComment_Action")
          } else {
            dispatch({
              type: LIKECOMMENT_SUCCESS,
              payload: response.data.data,
            });
            // Alert.alert(response.data.msg);
          }
        })
        .catch((err) => {
          dispatch({
            type: LIKECOMMENT_FAILED,
          });
          console.log(err,"error belongs to LikeComment_Action");
        });


    } catch (error) {
      dispatch({
        type: LIKECOMMENT_FAILED,
      });
      console.log(error,"error belongs to LikeComment_Action");
    }
  };
};

/**
 * Action that will help in fetching LIKE/UNLIKE FOR REPLY COMMENT for ap user
 * @param {Object} details
 * @param {Object} fcmDetails
 * @param {Object} navigation
 * @returns
 */
 export const LikeReplyComment_Action = (data, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: Blog_LOADING,
      });

      await LikeReplyApi(data)
        .then((response) => {
          console.log(response.data,"################################")
          if (response.data.status == "error") {
            dispatch({
              type: LIKEREPLYCOMMENT_FAILED,
            });
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            } else {
              Alert.alert(response.data.message);
            }
            console.log("error belongs to LikeReplyComment_Action")
          } else {
            dispatch({
              type: LIKEREPLYCOMMENT_SUCCESS,
              payload: response.data.data,
            });
            // Alert.alert(response.data.msg);
          }
        })
        .catch((err) => {
          dispatch({
            type: LIKEREPLYCOMMENT_FAILED,
          });
          console.log(err,"error belongs to LikeReplyComment_Action");
        });


    } catch (error) {
      dispatch({
        type: LIKEREPLYCOMMENT_FAILED,
      });
      console.log(error,"error belongs to LikeReplyComment_Action");
    }
  };
};



/**
 * Action that will help in commit replyCOMMENT for blogpost
 * @param {Object} details
 * @param {Object} fcmDetails
 * @param {Object} navigation
 * @returns
 */
 export const replyComment_Action = (data, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: Blog_LOADING,
      });

      await AddReplyCommentApi(data)
        .then((response) => {
          // console.log(response.data,"################################")
          if (response.data.status == "error") {
            dispatch({
              type: COMMENTREPLY_FAILED,
            });
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            } else {
              Alert.alert(response.data.message);
            }
            console.log("error belongs to replyComment_Action")
          } else {
            dispatch({
              type: COMMENTREPLY_SUCCESS,
              payload: response.data.data,
            });
            // Alert.alert(response.data.msg);
          }
        })
        .catch((err) => {
          dispatch({
            type: COMMENTREPLY_FAILED,
          });
          console.log(err,"error belongs to replyComment_Action");
        });


    } catch (error) {
      dispatch({
        type: COMMENTREPLY_FAILED,
      });
      console.log(error,"error belongs to replyComment_Action");
    }
  };
};



/**
 * Action that will help in fetching showReplyCOMMENT for blogpost
 * @param {Object} details
 * @param {Object} fcmDetails
 * @param {Object} navigation
 * @returns
 */
 export const showReplyComment_Action = (data, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: Blog_LOADING,
      });

      await ShowCommentReplies(data)
        .then((response) => {
          // console.log(response.data,"################################")
          if (response.data.status == "error") {
            dispatch({
              type: SHOWCOMMENTREPLY_FAILED,
            });
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            } else {
              Alert.alert(response.data.message);
            }
            console.log(response.data,"error belongs to showReplyComment_Action")
          } else {
            dispatch({
              type: SHOWCOMMENTREPLY_SUCCESS,
              payload: response.data.data,
            });
            // Alert.alert(response.data.msg);
          }
        })
        .catch((err) => {
          dispatch({
            type: SHOWCOMMENTREPLY_FAILED,
          });
          console.log(err,"error belongs to showReplyComment_Action");
        });


    } catch (error) {
      dispatch({
        type: SHOWCOMMENTREPLY_FAILED,
      });
      console.log(error,"error belongs to showReplyComment_Action");
    }
  };
};


/**
 * Action that will help in edditing comment for blogpost
 * @param {Object} details
 * @param {Object} fcmDetails
 * @param {Object} navigation
 * @returns
 */
 export const editComment_Action = (data, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: Blog_LOADING,
      });

      await editCommentApi(data)
        .then((response) => {
          if (response.data.status == "error") {
            dispatch({
              type: EDITCOMMENT_FAILED,
            });
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            } else {
              Alert.alert(response.data.message);
            }
            console.log("error belongs to editComment_Action")
          } else {
            dispatch({
              type: EDITCOMMENT_SUCCESS,
              payload: response.data.data,
            });
            // Alert.alert(response.data.msg);
          }
        })
        .catch((err) => {
          dispatch({
            type: EDITCOMMENT_FAILED,
          });
          console.log(err,"error belongs to editComment_Action");
        });


    } catch (error) {
      dispatch({
        type: EDITCOMMENT_FAILED,
      });
      console.log(error,"error belongs to editComment_Action");
    }
  };
};


/**
 * Action that will help in edditing REPLY of comment for blogpost
 * @param {Object} details
 * @param {Object} fcmDetails
 * @param {Object} navigation
 * @returns
 */
 export const editReplyComment_Action = (data, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: Blog_LOADING,
      });

      await editReplyCommentApi(data)
        .then((response) => {
          if (response.data.status == "error") {
            dispatch({
              type: EDITREPLYCOMMENT_FAILED,
            });
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            } else {
              Alert.alert(response.data.message);
            }
            console.log("error belongs to editReplyComment_Action")
          } else {
            dispatch({
              type: EDITREPLYCOMMENT_SUCCESS,
              payload: response.data.data,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: EDITREPLYCOMMENT_FAILED,
          });
          console.log(err,"error belongs to editReplyComment_Action");
        });


    } catch (error) {
      dispatch({
        type: EDITREPLYCOMMENT_FAILED,
      });
      console.log(error,"error belongs to editReplyComment_Action");
    }
  };
};




/**
 * Action that will help in DLETE comment for blogpost
 * @param {Object} details
 * @param {Object} fcmDetails
 * @param {Object} navigation
 * @returns
 */
 export const deletComment_action = (data, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: Blog_LOADING,
      });

      await deleteCommentApi(data)
        .then((response) => {
          if (response.data.status == "error") {
            dispatch({
              type: DELETECOMMENT_FAILED,
            });
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            } else {
              Alert.alert(response.data.message);
            }
            console.log("error belongs to deletComment_action")
          } else {
            dispatch({
              type: DELETECOMMENT_SUCCESS,
              payload: response.data.data,
            });
            // Alert.alert(response.data.msg); this
          }
        })
        .catch((err) => {
          dispatch({
            type: DELETECOMMENT_FAILED,
          });
          console.log(err,"error belongs to deletComment_action");
        });


    } catch (error) {
      dispatch({
        type: DELETECOMMENT_FAILED,
      });
      console.log(error,"error belongs to deletComment_action");
    }
  };
};


/**
 * Action that will help in DLETE REPLY of comment for blogpost
 * @param {Object} details
 * @param {Object} fcmDetails
 * @param {Object} navigation
 * @returns
 */
 export const Home = (data, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: Blog_LOADING,
      });

      await deleteReplyApi(data)
        .then((response) => {
          if (response.data.status == "error") {
            dispatch({
              type: DELETEREPLYCOMMENT_FAILED,
            });
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            } else {
              Alert.alert(response.data.message);
            }
            console.log("error belongs to Home")
          } else {
            dispatch({
              type: DELETEREPLYCOMMENT_SUCCESS,
              payload: response.data.data,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: DELETEREPLYCOMMENT_FAILED,
          });
          console.log(err,"error belongs to Home");
        });


    } catch (error) {
      dispatch({
        type: DELETEREPLYCOMMENT_FAILED,
      });
      console.log(error,"error belongs to Home");
    }
  };
};


/**
 * Action that will help in fetching create tickets
 * @param {Object} details
 * @param {Object} fcmDetails
 * @param {Object} navigation
 * @returns
 */
 export const fetchAllTicket_action = (data, navigation) => {
  return async (dispatch) => {
    try {
      await dispatch({
        type: FEATCHALLTCKETSUCCESS_LOADING,
      });

      await showAllTicket(data)
        .then((response) => {
          if (response.data.status == "error") {
            dispatch({
              type: FEATCHALLTCKETFAILED,
            });
            if (response.data.msg == "Invalid Token") {
              alert("Session expired.Please Login again.");
            } else if (response.data.msg == "Logged in user id is required") {
              alert("Something went wrong. Please try again");
            } else {
              return null
              // Alert.alert(response.data.message);
            }
            console.log("error belongs to Home")
          } else {
            dispatch({
              type: FEATCHALLTCKETSUCCESS,
              payload: response.data.data,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: FEATCHALLTCKETFAILED,
          });
          console.log(err,"error belongs to Home");
        });


    } catch (error) {
      dispatch({
        type: FEATCHALLTCKETFAILED,
      });
      console.log(error,"error belongs to Home");
    }
  };
};


