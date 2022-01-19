import { useReducer } from 'react';
import { UPDATE_DOSAGE } from './actions';
// import { UPDATE_USER } from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_DOSAGE:
            return {
                ...state,
                dosage: [...action.dosage]
            };

        default:
            return state;
    }
};

//route to get logged in user's info (needs token)
export const getMe = (token) => {
    return fetch('/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
  };
  

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}