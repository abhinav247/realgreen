import * as React from 'react';

import { storiesOf } from '@storybook/react';
import TagBoxWrapper from '../widgets/tagBox'

import Box, {
    Item
} from 'devextreme-react/box';


export const days = [
    'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'
];

const storyClass = {
}

storiesOf('TagBox', module).add('default', () => (

    <div style={storyClass}>
       <TagBoxWrapper/>
    </div>

));