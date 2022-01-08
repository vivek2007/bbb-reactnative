import { combineReducers } from "redux";
import {
  APUser_Reducer,
  Blog_Reducer,
  Blog_For_Each_Item_reducer,
  ActiveId_Reducer,
  NewsReducer,
  myBlog_Reducer,
  Ads,
  markeetReducer,
  categoryReducer,
  
} from "./reducers";

export const RootReducer = combineReducers({
  ap_user: APUser_Reducer,
  Blog_info: Blog_Reducer,
  Blog_For_Each_Item: Blog_For_Each_Item_reducer,
  ActiveId_Reducer: ActiveId_Reducer,
  NewsPosts: NewsReducer,
  Ads:Ads,
  myblog:myBlog_Reducer,
  markeet: markeetReducer,
  categories:categoryReducer,
});
