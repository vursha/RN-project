import {createStore } from 'redux';
import reducer from './index';

export default function configureStore(){
    const store = createStore(reducer);
    return store;
};