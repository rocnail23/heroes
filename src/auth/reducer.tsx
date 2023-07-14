import { LOGIN, LOGOUT } from "../types/types";


const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...action.payload,
        login: true,
      };

    case LOGOUT:
      return {
        login: false,
      };

    default:
      state;
  }
};
export default authReducer
