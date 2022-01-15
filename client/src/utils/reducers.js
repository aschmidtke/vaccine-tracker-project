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

        // case UPDATE_USER:
        //     return {
        //         ...state,
        //         user: [...action.user]
        //     };
        // default:
        //     return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}