/* eslint-disable import/prefer-default-export */
import {
  SET_CURRENT_PAGE, GET_DATA, SET_TOTAL_COUNT, TOGGLE_IS_FETCHING
} from './types';

export const getDataAC = (data) => ({ type: GET_DATA, data });

export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setTotalCountAC = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });

export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
