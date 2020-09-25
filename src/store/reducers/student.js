import { studentAction } from '../actions/actionTypes';

const initialState = {
    dataStudents: [
        {
            'id': '100001',
            'name': 'VIRGINIA HENDRAS PRAWIRA',
            'phone': '0850000001',
            'address': 'Jl. Raya Malang no.10, Malang.',
            'hobby': 'Belajar dan bermain'
        },
        {
            'id': '100002',
            'name': 'BIMO WIDODO SYAHPUTRO',
            'phone': '0850000002',
            'address': 'Jl. Merdeka no.11, Malang.',
            'hobby': 'Belajar dan bermain'
        },
    ]
}

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case studentAction.STUDENT_ADD:
            return Object.assign({}, state, {
                dataStudents: [
                    ...state.dataStudents,
                    action.newValue
                ]
            });
    
        default:
            return state;
    }
}

export default studentReducer;
