import { combineReducers } from 'redux';
import SurveyReducer from './SurveyReducer';

export default combineReducers({
  movies: SurveyReducer
})
