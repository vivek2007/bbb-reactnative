/*
    File that will contains api related to ap zone
*/

import axios from "axios";

// http://meet-api.shareslate.com/api/users/create_api

export const BASE_URL = "https://sandbox.shareslate.com/";
export const BASE_URL_blog = "http://meet-api.shareslate.com/api/";
// export const BASE_URL_blog = "https://www.shareslate.com/";

/**
 * Login API for ap user
 * @param {Object} details
 * @returns
 */
// https://www.shareslate.com/apis/checklogin.php
export const _LOGIN_API = (details) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "apis/checklogin.php",
        method: "POST",
        data: details,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * register API for ap user
 * @param {Object} details
 * @returns
 */
// https://www.shareslate.com/apis/register.php
export const register = (details) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "api/users/create_api",
        method: "POST",
        data: details,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Blog API for show blog_post
 * @param {Object} bodyFormData
 * @returns
 */

//  https://www.shareslate.com/apis/showBlogs.php
export const Blog = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "apis/showBlogs.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
          // console.log(response.data)
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Blog API for Blog_For_Each_Item
 * @param {Object} bodyFormData
 * @returns
 */

export const Blog_For_Each_Item = (bodyFormData) => {
  // console.log(bodyFormData,")))))))))))")
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "apis/blogDetail.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
  // console.log(response.data,")))))))))))")

        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Blog API for post Blog_Comment
 * @param {Object} bodyFormData
 * @returns
 */
// https://www.shareslate.com/apis/addComment.php

export const Posting_Comment = (bodyFormData) => {
  // console.log(bodyFormData,"+++++++++++++++++++")
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "apis/addComment.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Show comment api
 * @param {Object} bodyFormData
 * @returns
 */
//

export const Show_Comment = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/showComment.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * showCategories for button api
 * @param {Object} bodyFormData
 * @returns
 */
//https://www.shareslate.com/apis/showCategories.php

export const showCategories = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/showCategories.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * showCategories_Item for button api
 * @param {Object} bodyFormData
 * @returns
 */
//https://www.shareslate.com/apis/showBlogs.php

export const showCategories_Item = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/showBlogs.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * ShowNotification api
 *  * @param {Object} bodyFormData
 * @returns
 */
//https://www.shareslate.com/apis/notifications.php

export const ShowNotification = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/notifications.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * showProfile api
 *  * @param {Object} bodyFormData
 * @returns
 */
//https://www.shareslate.com/apis/showProfile.php

export const ShowProfile = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/showProfile.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * updateProfile api
 *  * @param {Object} bodyFormData
 * @returns
 */
//https://www.shareslate.com/apis/updateProfile.php

export const updateProfile = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/updateProfile.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * search api
 *  * @param {Object} bodyFormData
 * @returns
 */
// https://www.shareslate.com/apis/search.php

export const search = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/search.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * resetpassword api
 *  * @param {Object} bodyFormData
 * @returns
 */
//https://www.shareslate.com/apis/resetpassword.php

export const resetpassword = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/resetpassword.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * addblogfeaturedimage api
 *  * @param {Object} bodyFormData
 * @returns
 */
// https://www.shareslate.com/apis/addblogfeaturedimage.php

export const Fimage = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/addblogfeaturedimage.php",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },

        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * addblog api
 *  * @param {Object} bodyFormData
 * @returns
 */
//  https://www.shareslate.com/apis/addblog.php

export const Add_blog = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/addblog.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * uploadProfileImage api
 *  * @param {Object} bodyFormData
 * @returns
 */
//  https://www.shareslate.com/apis/uploadProfileImage.php

export const profileImage = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/uploadProfileImage.php",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },

        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * uploadCoverImage api
 *  * @param {Object} bodyFormData
 * @returns
 */
//  https://www.shareslate.com/apis/uploadCoverImage.php

export const coverImage = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/uploadCoverImage.php",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },

        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * addProfileBuild api
 *  * @param {Object} bodyFormData
 * @returns
 */
//https://www.shareslate.com/apis/addProfileBuild.php

export const addProfileBuild = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/addProfileBuild.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};
/**
 * post rating api
 *  * @param {Object} bodyFormData
 * @returns
 */
//  https://www.shareslate.com/apis/addRating.php

export const Add_Rating = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/addRating.php",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },

        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Blog API for show News_post
 * @param {Object} bodyFormData
 * @returns
 */

//  https://www.shareslate.com/apis/news/top.php
export const News_Api = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "apis/news/top.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * showCategories for News button api
 * @param {Object} bodyFormData
 * @returns
 */
//https://www.shareslate.com/apis/news/categories.php

export const showNewsCategories = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/news/categories.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * showCategories for News search api
 * @param {Object} bodyFormData
 * @returns
 */
//https://www.shareslate.com/apis/news/search.php

export const NewsSearch = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/news/search.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *  genrate authenticator code api
 * @param {Object} bodyFormData
 * @returns
 */
// https://www.shareslate.com/apis/auth/generateCode.php

export const GenCode = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/auth/generateCode.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

//advertisemwnt apies.

/**
 *   insert ads  api
 * @param {Object} bodyFormData
 * @returns
 */
//  https://www.shareslate.com/apis/ads/insertAds.php

export const InsertAds = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/ads/insertAds.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *  getcoins  api
 * @param {Object} bodyFormData
 * @returns
 */
//  https://www.shareslate.com/apis/ads/getcoins.php

export const GetCoins = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/ads/getcoins.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *   adscheck ads limit  api
 * @param {Object} bodyFormData
 * @returns
 */
// https://www.shareslate.com/apis/ads/adscheck.php

export const AdsCheck = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/ads/adscheck.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *  on register user location  api
 * @param {Object} bodyFormData
 * @returns
 */
//  https://www.shareslate.com/apis/saveLocation.php

export const Userlocation = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/saveLocation.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *  on read news or blog activity api
 * @param {Object} bodyFormData
 * @returns
 */
//  https://www.shareslate.com/apis/insertActivity.php

export const ActivityApi = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/insertActivity.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *  on Ads History api
 * @param {Object} bodyFormData
 * @returns
 */

//  https://www.shareslate.com/apis/ads/getStatement.php
export const AdsRewardState = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/ads/getStatement.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * adding reward on reading blogs
 * @param {Object} bodyFormData
 * @returns
 */

//  https://www.shareslate.com/apis/ads/blogReward.php
export const addBlogReadingReward = (data) => {
  var bodyFormData = new FormData();
  bodyFormData.append("token", data.token);
  bodyFormData.append("action", "insert");
  bodyFormData.append("activity", "blog");
  bodyFormData.append("activity_id", data.blogsid);
console.log(bodyFormData)


  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/ads/blogReward.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *  on sms verify api
 * @param {Object} bodyFormData
 * @returns
 */
//  https://www.shareslate.com/apis/auth/smsVerification.php
export const Smsverify = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/auth/smsVerification.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *  on ah verify api
 * @param {Object} bodyFormData
 * @returns
 */
//  https://www.shareslate.com/apis/auth/emailVerification.php
export const emailverify = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/auth/emailVerification.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
          console.log(response.data)
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *  on eligibleReward  api
 * @param {Object} bodyFormData
 * @returns
 */
//  https://www.shareslate.com/apis/ads/eligibleReward.php

export const eligibleReward = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/ads/eligibleReward.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *  on reportList  api
 * @param {Object} bodyFormData
 * @returns
 */
// https://www.shareslate.com/apis/reportList.php

export const reportList = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/reportList.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

// blog hide/unhide report

/**
 *  on addReport  api
 * @param {Object} bodyFormData
 * @returns
 */
// https://www.shareslate.com/apis/addReport.php

export const addReport = (bodyFormData) => {
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/addReport.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
          console.log(response)
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *  on NotIntrested api
 * @param {Object} bodyFormData
 * @returns
 */
// https://www.shareslate.com/apis/hide/addHide.php

export const addHide = (bodyFormData) => {
  console.log(bodyFormData)
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/hide/addHide.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
          console.log(response.data)
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *  on hideBlog list api
 * @param {Object} bodyFormData
 * @returns
 */
// https://www.shareslate.com/apis/hide/list.php

export const hideBlogList = (token) => {
  var bodyFormData = new FormData();
  bodyFormData.append("token", token);
  bodyFormData.append("action", "list");
  bodyFormData.append("activity", "blog");

  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/hide/list.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
          // console.log(response.data)
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *  on unhide blog api
 * @param {Object} bodyFormData
 * @returns
 */
// https://www.shareslate.com/apis/hide/removeHide.php

export const unhideBlog = (data) => {
  var bodyFormData = new FormData();
  bodyFormData.append("token", data.token_is);
  bodyFormData.append("activity", data.action);
  bodyFormData.append("activityId", data.blogId);
// console.log(bodyFormData)
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/hide/removeHide.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

//  Block/unblock user
/**
 *  on block list api
 * @param {Object} bodyFormData
 * @returns
 */
// https://www.shareslate.com/apis/block/list.php

export const blockList = (token) => {
  var bodyFormData = new FormData();
  bodyFormData.append("token", token);
  bodyFormData.append("action", "list");

  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/block/list.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *  on block/unblock user api
 * @param {Object} bodyFormData
 * @returns
 */
// https://www.shareslate.com/apis/block/blockUser.php

export const blockUnblockUser = (data) => {
  var bodyFormData = new FormData();
  bodyFormData.append("token", data.token);
  bodyFormData.append("action", data.action);
  bodyFormData.append("userId", data.id);
console.log(data)
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/block/blockUser.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};


/**
 *  on make friend/unfriend user api
 * @param {Object} bodyFormData
 * @returns
 */
// https://www.shareslate.com/apis/request/send.php

export const makeFriendUnfriend = (data) => {
  var bodyFormData = new FormData();
  bodyFormData.append("token", data.token);
  bodyFormData.append("action", data.action);
  bodyFormData.append("receiver_id", data.id);
console.log(bodyFormData)
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/request/send.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response.data);
          // console.log(response.data)
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *   like/unlike comment in blogpost api
 * @param {Object} bodyFormData
 * @returns
 */
// https://www.shareslate.com/apis/blog/commentLike.php

export const LikeCommentApi = (data) => {
  var bodyFormData = new FormData();
  bodyFormData.append("token", data.token);
  bodyFormData.append("commentId", data.cid);
  bodyFormData.append("userId", data.uid);
  bodyFormData.append("blogId", data.bid);
  bodyFormData.append("action", data.action);

  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/blog/commentLike.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
          console.log(response.data)
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};





/**
 *   like/unlike reply in blogpost api
 * @param {Object} bodyFormData
 * @returns
 */
// https://www.shareslate.com/apis/blog/replyLike.php

export const LikeReplyApi = (data) => {
  var bodyFormData = new FormData();
  bodyFormData.append("token", data.token);
  bodyFormData.append("blogId", data.bid);
  bodyFormData.append("replyId", data.rid);
  bodyFormData.append("commentId", data.cid);
  bodyFormData.append("action", data.action);

  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/blog/replyLike.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};






/**
 *   reply comment in blogpost api
 * @param {Object} bodyFormData
 * @returns
 */
// https://www.shareslate.com/apis/blog/addReply.php

export const AddReplyCommentApi = (data) => {
  var bodyFormData = new FormData();
  bodyFormData.append("token", data.token);
  bodyFormData.append("commentId", data.cid);
  bodyFormData.append("blogId", data.bid);
  bodyFormData.append("type", data.type);
  bodyFormData.append("reply", data.rep);

  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/blog/addReply.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *   ShowAllReply comment in blogpost api
 * @param {Object} bodyFormData
 * @returns
 */
// https://www.shareslate.com/apis/blog/showReplies.php

export const ShowCommentReplies = (data) => {
  var bodyFormData = new FormData();
  bodyFormData.append("token", data.token);
  bodyFormData.append("commentId", data.cid);
  bodyFormData.append("blogId", data.bid);
  bodyFormData.append("type", data.type);
  // console.log(bodyFormData)
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/blog/showReplies.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
          // console.log(response.data,"00000000")
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *   Edit reply in blogpost api
 * @param {Object} bodyFormData
 * @returns
 */
// https://www.shareslate.com/apis/blog/editReply.php

export const editReplyCommentApi = (data) => {
  var bodyFormData = new FormData();
  bodyFormData.append("token", data.token);
  bodyFormData.append("replyId", data.rid);
  bodyFormData.append("commentId", data.cid);
  bodyFormData.append("blogId", data.bid);
  bodyFormData.append("reply", data.reply);
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/blog/editReply.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *   Edit comment in blogpost api
 * @param {Object} bodyFormData
 * @returns
 */
// https://www.shareslate.com/apis/blog/editComment.php

export const editCommentApi = (data) => {
  var bodyFormData = new FormData();
  bodyFormData.append("token", data.token);
  bodyFormData.append("commentId", data.cid);
  bodyFormData.append("blogId", data.bid);
  bodyFormData.append("rate", data.rate);
  bodyFormData.append("comment", data.comment);
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/blog/editComment.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *   delet comment in blogpost api
 * @param {Object} bodyFormData
 * @returns
 */
// https://www.shareslate.com/apis/blog/deleteComment.php

export const deleteCommentApi = (data) => {
  var bodyFormData = new FormData();
  bodyFormData.append("token", data.token);
  bodyFormData.append("commentId", data.cid);
  bodyFormData.append("blogId", data.bid);
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/blog/deleteComment.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
          console.log(response.data,"+++++++++++++++++++++++++++++")
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 *   delet reply in blogpost api
 * @param {Object} bodyFormData
 * @returns
 */
// https://www.shareslate.com/apis/blog/deleteReply.php

export const deleteReplyApi = (data) => {
  var bodyFormData = new FormData();
  bodyFormData.append("token", data.token);
  bodyFormData.append("commentId", data.cid);
  bodyFormData.append("blogId", data.bid);
  bodyFormData.append("replyId", data.rid);

  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/blog/deleteReply.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};


/**
 *   delet  blogpost 
 * @param {Object} bodyFormData
 * @returns
 */
// https://www.shareslate.com/apis/blog/delete.php

export const deleteBlogPost = (data) => {
  var bodyFormData = new FormData();
  bodyFormData.append("token", data.token_is);
  bodyFormData.append("blogID", data.bid);
  bodyFormData.append("action", "delete");
console.log(bodyFormData)
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: BASE_URL_blog + "/apis/blog/delete.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};



export const PushToken = (data) => {
  var bodyFormData = new FormData();
  bodyFormData.append("token", data.token_is);
  bodyFormData.append("userId", data.userId_is);
  bodyFormData.append("deviceToken", data.expoToken);
console.log(data)
    return new Promise((resolve, reject) => {
      try {
        axios({
          url: "https://www.shareslate.com/apis/auth/insertToken.php",
          method: "POST",
          data: bodyFormData,
        })
          .then((response) => {
            // resolve(response)
            console.log(response.data, "ssssssssssssss");
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    });
  
};
export const deletePushToken = (data) => {
  var bodyFormData = new FormData();
  bodyFormData.append("token", data.token_is);
  bodyFormData.append("userId", data.userId_is);
  bodyFormData.append("deviceToken", data.expoToken);
  // console.log(bodyFormData,"ddddddddddddd");
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: "https://www.shareslate.com/apis/auth/deleteToken.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {

          // resolve(response)
          console.log(response.data, "dddddddddddddhhhhhhhhhhhh");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  });
};



export const getRequestApi = (data) => {
  var bodyFormData = new FormData();
  bodyFormData.append("token", data.token);
  bodyFormData.append("action", data.action);
  // console.log(bodyFormData,"ddddddddddddd");
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: "https://www.shareslate.com/apis/timeline/getRequest.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {

          resolve(response)
          // console.log(response.data, "dddddddddddddhhhhhhhhhhhh");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  });
};



// create ticket api
export const createTicket = (data) => {
  // https://www.shareslate.com/apis/support/create.php"
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: "https://www.shareslate.com/apis/support/create.php",
        method: "POST",
        data: data,
      })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  });
};

// show all ticket api
export const showAllTicket = (data) => {
  // https://www.shareslate.com/apis/support/create.php"
  var bodyFormData = new FormData();
  bodyFormData.append("token", data.token_is);
  bodyFormData.append("action", data.action);
  console.log(bodyFormData)
  return new Promise((resolve, reject) => {
    try {
      axios({
        url: "https://www.shareslate.com/apis/support/show.php",
        method: "POST",
        data: bodyFormData,
      })
        .then((response) => {
          resolve(response)
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  });
};

