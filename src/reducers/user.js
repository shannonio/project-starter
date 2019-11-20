import { SET_USER, setUser } from '../actions';

export default function user(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return action.user
    default:
      return state
  }
}
