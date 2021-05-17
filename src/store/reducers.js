/* eslint-disable import/prefer-default-export,import/no-extraneous-dependencies,import/named */
import { combineReducers } from 'redux';
import {
  SET_CURRENT_PAGE, GET_DATA, SET_TOTAL_COUNT, TOGGLE_IS_FETCHING
} from './types';

const initialState = {
  data: [],
  pageSize: 10,
  totalCount: 0,
  currentPage: 0,
  isFetching: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.data
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export const reducers = combineReducers({ data: dataReducer });
