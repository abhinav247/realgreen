import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import { fetchSettings } from "../../services/settings"
import * as actionCreators from "../settings/action";
import * as actionTypes from "../settings/types";

function* onLoadSettings() {
  try {
    yield put(actionCreators.getSettings());
    const { data } = yield call(fetchSettings);
    yield put(actionCreators.getSettingsSuccess(data.settings));
  } catch (error) {
    // yield put(actionCreators.getLyricsFailure(error.response.data.error));
  }
}

function* watchOnLoadSettings() {
  yield takeEvery(actionTypes.GET_SETTINGS, onLoadSettings);
}

export default function* settingsSaga() {
  yield all([fork(watchOnLoadSettings)]);
}
