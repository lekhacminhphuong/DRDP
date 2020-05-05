import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import useGlobalState from './globalStore/useGlobal';
import Context from './globalStore/context';

const Index = () => {
    const store = useGlobalState();
    return(
        <Context.Provider value={store}>
            <App/>
        </Context.Provider>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.unregister();
