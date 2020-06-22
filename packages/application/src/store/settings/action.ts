import * as actions from "./types";
import { SettingsProps } from "../../components/screens/settingType";

export function setSettings(settings: SettingsProps): actions.SetSettingsAction {
  return {
    type: actions.SET_SETTINGS,
    settings
  };
}

export function getSettings(
): actions.GetSettingsAction {
  return {
    type: actions.GET_SETTINGS
  };
}



export function getSettingsSuccess(
  settings: SettingsProps
): actions.GetSettingsSuccessAction {
  return {
    type: actions.GET_SETTINGS_SUCCESS,
    settings
  };
}

// export function getLyricsFailure(
//   error: Error | string
// ): actions.GetLyricsFailureAction {
//   return {
//     type: actions.GET_LYRICS_FAILURE,
//     error
//   };
// }


export function getSettingsRequest(): actions.GetSettingsRequestAction {
  return {
    type: actions.GET_SETTINGS_REQUEST
  };
}


