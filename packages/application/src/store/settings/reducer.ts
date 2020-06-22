import * as actions from "./types";
import { SettingsProps } from "../../components/screens/settingType";


const initialState = {
    StartingDate: new Date(),
    Days: [],
    StartTime: '',
    EndTime: '',
    ZeroDelay: 0
};

export default function settings (
  state: SettingsProps = initialState,
  action: actions.SettingsAction
): SettingsProps {
  switch (action.type) {
    case actions.SET_SETTINGS:
      return action.settings;
    default:
      return state;
  }
}
