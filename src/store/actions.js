/* eslint-disable import/prefer-default-export */
import {
  SET_CURRENT_PAGE, GET_DATA, SET_TOTAL_COUNT, TOGGLE_IS_FETCHING
} from './types';

export const getData = (data) => ({ type: GET_DATA, data });

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
