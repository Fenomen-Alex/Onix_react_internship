/* eslint-disable import/prefer-default-export,no-console */
import {
  SET_CURRENT_PAGE, GET_DATA, SET_TOTAL_COUNT, TOGGLE_IS_FETCHING
} from './types';
import { apiUrl } from '../constants/constants';

export const getDataAC = (data) => ({ type: GET_DATA, data });

export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const setTotalCountAC = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });

export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const fetchDataThunk = () => (dispatch) => {
  dispatch(toggleIsFetchingAC(true));
  fetch(apiUrl)
    .then((response) => response.json())
    .then(
      (res) => {
        dispatch(getDataAC(
          res.results.map((item) => ({
            ...item,
            isActive: false,
            isOver: false,
          })),
        ));
        dispatch(toggleIsFetchingAC(false));
        dispatch(setTotalCountAC(res.resultCount));
      },
      (error) => {
        console.log(`Error : ${error}`);
      }
    );
};
