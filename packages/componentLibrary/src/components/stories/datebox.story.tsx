import * as React from 'react';

import { storiesOf } from '@storybook/react';
import DateBoxWrapper from '../widgets/dateBox/index'
 


storiesOf('Datebox', module).add('date picker', () => (
    <DateBoxWrapper defaultValue={new Date()}
    pickerType="rollers"/> 
));  