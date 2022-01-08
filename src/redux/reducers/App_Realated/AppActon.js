import { _showAxiosError } from '../../../utils/messages';
import {ACTIVE_ID_SUCCESS,ACTIVE_ID_FAILED,GUEST_ID_SUCCESS, GUEST_ID_FAILED, LOCATION_SAVE_FAILED, LOCATION_SAVE_SUCCESS, NOTIFY_DOT_FAILED, NOTIFY_DOT_SUCCESS, ACTIVEITEM_FAILED, ACTIVEITEM_SUCCESS, EXPOTOKEN_FAILED, EXPOTOKEN_SUCCESS} from './AppReducer';


/**
 * Action that will help in saving activeId
 * @param {Object} ActiveId 
 * @returns 
 */
export const ActiveId_Action = (id) => {
    return async (dispatch) => {
      try {
        if (id == null) {
          dispatch({
            type: ACTIVE_ID_FAILED,
            
          });
          console.log("failed in if condition")
        } else {
          dispatch({
            type: ACTIVE_ID_SUCCESS,
            payload: id,
          });
        }
      } catch (error) {
        dispatch({
          type: ACTIVE_ID_FAILED,
        });
        console.log(error, "error in saving Active id");
        alert(error);
      }
    };
  };
  



/**
 * Action that will help in saving GUEST ID
 * @param {Object} ActiveId 
 * @returns 
 */
export const GuestId_Action = (id) => {
  return async (dispatch) => {
    try {
      if (id == null) {
        dispatch({
          type: GUEST_ID_FAILED,
          
        });
        console.log("failed in if saving GUEST ID")
      } else {
        dispatch({
          type: GUEST_ID_SUCCESS,
          payload: id,
        });
      }
    } catch (error) {
      dispatch({
        type: GUEST_ID_FAILED,
      });
      console.log(error, "error in saving  GUEST ID");
      alert(error);
    }
  };
};


/**
 * Action that will help in saving Location value
 * @param {Object} ActiveId 
 * @returns 
 */
 export const Location_Action = (val) => {
  return async (dispatch) => {
    try {
      if (val == null) {
        dispatch({
          type: LOCATION_SAVE_FAILED,
          
        });
        console.log("failed in if saving Location")
      } else {
        dispatch({
          type: LOCATION_SAVE_SUCCESS,
          payload: val,
        });
      }
      
    } catch (error) {
      dispatch({
        type: LOCATION_SAVE_FAILED,
      });
      console.log(error, "error in saving  Location value");
      alert(error);
    }
  };
};



/**
 * Action that will help in saving notification dot color value
 * @param {Object} ActiveId 
 * @returns 
 */
 export const NotificationDot_Action = (val) => {
  return async (dispatch) => {
    try {
      if (val == null) {
        dispatch({
          type: NOTIFY_DOT_FAILED,
          
        });
        console.log("failed in if saving NotificationDot_Action")
      } else {
        dispatch({
          type: NOTIFY_DOT_SUCCESS,
          payload: val,
        });
      }
      
    } catch (error) {
      dispatch({
        type: NOTIFY_DOT_FAILED,
      });
      console.log(error, "error in saving  NotificationDot_Action value");
      alert(error);
    }
  };
};




/**
 * Action that will help in saving Drawer active item value
 * @param {Object} ActiveId 
 * @returns 
 */
 export const drawerActiveItem_acticon = (val) => {
  return async (dispatch) => {
    try {
      if (val == null) {
        dispatch({
          type: ACTIVEITEM_FAILED,
          
        });
        console.log("failed in if saving drawerActiveItem_acticon")
      } else {
        dispatch({
          type: ACTIVEITEM_SUCCESS,
          payload: val,
        });
      }
      
    } catch (error) {
      dispatch({
        type: ACTIVEITEM_FAILED,
      });
      console.log(error, "error in saving  drawerActiveItem_acticon value");
      alert(error);
    }
  };
};



/**
 * Action that will help in saving expoToken for notification
 * @returns 
 */
 export const expoToken_Action = (val) => {
  return async (dispatch) => {
    try {
      if (val == null) {
        dispatch({
          type: EXPOTOKEN_FAILED,
          
        });
        console.log(val,"failed in if saving expoToken_Action")
      } else {
        dispatch({
          type: EXPOTOKEN_SUCCESS,
          payload: val,
        });
      }
      
    } catch (error) {
      dispatch({
        type: EXPOTOKEN_FAILED,
      });
      console.log(error, "error in saving  expoToken_Action value");
      alert(error);
    }
  };
};

