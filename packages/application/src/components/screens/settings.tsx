import React, { useEffect, useState, Dispatch } from "react";
import { useSelector, connect, ConnectedProps } from 'react-redux'
import * as actionCreators from '../../store/settings/action'
import {GetSettingsAction } from '../../store/settings/types'
import { createSelector } from 'reselect'
import { SettingsProps } from "../screens/settingType";
import { AppState } from "../../store/rootReducer";
import axios from '../../utils/interceptors'
import { useTranslation } from 'react-i18next';

// const getSettingSelector = createSelector(
//     (state: any) => state.settings,
//     settings => settings
// )
// const useSettingsData = (): SettingsProps => {
//     return useSelector(getSettingSelector);
// }

const connector = connect(
    (state: AppState) => {
        return {
            settings: state.settings
        }
    },
    (dispatch: Dispatch<GetSettingsAction>) => ({
        getSettings: () => {
            dispatch(actionCreators.getSettings());
        },
    })
)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & SettingsProps

const Settings = (props: Props): JSX.Element => {
    const {t} = useTranslation();
    const [settings, setSettings] = useState<SettingsProps>();
    const [loading, setloading] = useState<boolean>(false);

    useEffect(
        () => {
            try {
                const getSettings = async () => {
                    setloading(true);
                    const response = await axios.get('https://run.mocky.io/v3/1388aba2-d40c-45a7-b8f9-0b69529eadb8');
                    setSettings(response.data)
                    setloading(false);
                }

                getSettings();
            }
            catch (e) {

            }
        }
        , [])

    if (loading) {
        return <div>loading....</div>
    }


    return (
        <>
            {settings && <table>
                {
                    (Object.keys(settings) as Array<keyof SettingsProps>).map((key: keyof SettingsProps) => {
                        
                        return (
                            <tr>
                                <td key={Math.random()}>{t(`settings.${key}`)}</td>
                                <td>{settings[key]}</td>
                            </tr>
                        )
                    })
                }
            </table>
            } 
        </>
    )

}
export default connector(Settings)
