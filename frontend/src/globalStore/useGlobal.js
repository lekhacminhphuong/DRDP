import {useState} from 'react';

const useGlobal = () => {

    const [state, setState] = useState(null);
    const [favorites, setFavorites] = useState(null);

    function actions(action) {
        const {type, payload} = action;
        switch (type) {
            case 'setState':
                return setState(payload)
            case 'setFavorites':
                return setFavorites(payload)
            default:
                return state
        }
    }
    return {state, favorites, actions}
}

export default useGlobal;