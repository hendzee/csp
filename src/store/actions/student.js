import { studentAction } from './actionTypes';

const addStudent = (value) => {
    return {
        type: studentAction.STUDENT_ADD,
        newValue: value
    }
}

export { addStudent };