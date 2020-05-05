import {useState} from 'react';

const useGlobal = () => {

    const [state, setState] = useState(null);
    const [favorites, setFavorites] = useState(null);

    function actions(action) {
        const {type, payload} = action;
        switch (type) {
            case 'setState':
                return setState(payload)
            default:
                return state
        }
    }
    return {state, actions}
}

export default useGlobal;