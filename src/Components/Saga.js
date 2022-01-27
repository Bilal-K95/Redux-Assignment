import {put,takeEvery,delay,all} from 'redux-saga/effects'
function* increamentAsync()
{
    yield delay(1000)
    yield put({type:'DEC',payload:2})
}
function* decreamentAsync()
{
    yield delay(2000)
    yield put({type:'INC',payload:2})
}
function* watcher()
{
    yield takeEvery('INCASYNC',increamentAsync)
    yield takeEvery('DECASYNC',decreamentAsync)
}
export function *rootSaga()
{
    yield all([watcher])
}


