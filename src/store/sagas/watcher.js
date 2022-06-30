import {takeLatest, put, call} from 'redux-saga/effects';
import { API_SUCCESS,API_REQUEST } from "../actions/index";
import  Api  from '../../Api';


export default function* watcher() {
    yield takeLatest(API_REQUEST, search)
}

function* search(action)  {
    try {
        const response = yield call(Api.wikiSearch, action.payload)

        yield put({
            type: API_SUCCESS,
            payload: response.data.query.search
        })

    } catch (error) {
        console.log(error);
    }
}