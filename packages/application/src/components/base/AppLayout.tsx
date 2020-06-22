import React, { Suspense } from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, RouteProps } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next'
import { routes } from '../../routes';
import configureStore from "../../store"
import i18n from '../../internationaliation/index'
import Base from './Base';

const store = configureStore();

const RouteWithSubRoutes = (route: RouteProps): JSX.Element => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
  );
};


export const AppLayout: React.FC<any> = () => {
  return (
    <>
      <Provider store={store} >
        <I18nextProvider i18n={i18n}>
          <Suspense fallback={(<div>Loading</div>)}>
            <Base>
              <Router>
                <Switch>
                  {routes.map((route: RouteProps, i: number) => (
                    <RouteWithSubRoutes key={i} {...route} />
                  ))}
                </Switch>
              </Router>
            </Base>
          </Suspense>
        </I18nextProvider>
      </Provider>
    </>
  );
}

