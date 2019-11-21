import { Fetch_Users, Get_Token } from '../actions/types';

const getInitialState = {};

export default function(state = getInitialState, action) {
  switch (action.type) {
    case Fetch_Users:
    return {
        ...state,
        allUsers: action.payload,
      }
      break;
    case 'Get_Token':
      return {
        ...state,
        token: action.payload
      }
      break;
    default:
     return state;
      break;
  }
}
