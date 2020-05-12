import {useState} from 'react';

const useGlobal = () => {

    const [state, setState] = useState(null);
    const [favorites, setFavorites] = useState(null);
    const [report, setReport] = useState({})
    const [submission, setSubmission] = useState(null)

    function actions(action) {
        const {type, payload} = action;
        switch (type) {
            case 'setState':
                return setState(payload)
            case 'setFavorites':
                return setFavorites(payload)
            case 'setReport':
                return setReport(payload)
            case 'setSubmission':
                return setSubmission(payload)
            default:
                return state
        }
    }
    return {state, favorites, report, submission, actions}
}

export default useGlobal;