
import Settings from './components/screens/settings';

export interface CustomProps {
  pageName?: string;
}


const routeMappings = {
    SETTINGS:'/'
}

export const routes = [
  {
    path: routeMappings['SETTINGS'],
    exact: true,
    component : Settings
  }
];
