import { UPDATE_DOSAGE } from "../utils/actions";
import { reducer } from '../utils/reducers';

const initialState = {
    dosage: []
};

test('UPDATE_DOSAGE', () => {
    let newState = reducer(initialState, {
        type: UPDATE_DOSAGE,
        dosage: [{}, {}]
    });

    expect(newState.dosage.length).toBe(2);
    expect(initialState.dosage.length).toBe(0);
});

