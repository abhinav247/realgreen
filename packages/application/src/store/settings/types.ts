import { SettingsProps } from "../../components/screens/settingType";

export const SET_SETTINGS= "SettingsActionTypes/SET_SETTINGs";
export interface SetSettingsAction {
  type: typeof SET_SETTINGS;
  settings: SettingsProps;
}

export const GET_SETTINGS = "SettingsActionTypes/GET_SETTINGS";
export interface GetSettingsAction {
  type: typeof GET_SETTINGS;
}

export const GET_SETTINGS_REQUEST = "SettingsActionTypes/GET_SETTINGS_REQUEST";
export interface GetSettingsRequestAction {
  type: typeof GET_SETTINGS_REQUEST;
}

export const GET_SETTINGS_SUCCESS = "SettingsActionTypes/GET_SETTINGS_SUCCESS";
export interface GetSettingsSuccessAction {
  type: typeof GET_SETTINGS_SUCCESS;
  settings: SettingsProps;
}

export type SettingsAction =
  | SetSettingsAction
  | GetSettingsAction
