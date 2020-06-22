import axios from '../utils/interceptors';
import {SettingsProps} from  "../components/screens/settingType"

interface settingsResponse {
  settings: SettingsProps;
}

export async function fetchSettings(
): Promise<settingsResponse> {
  return await axios.get('https://run.mocky.io/v3/653fc3cd-3da6-443e-bd36-9a73c3d1dc3f');
}
