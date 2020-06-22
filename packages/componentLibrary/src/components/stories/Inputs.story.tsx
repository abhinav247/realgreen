import * as React from 'react';

import { storiesOf } from '@storybook/react';
import NumberInput from '../widgets/NumbeBox';
 

const storyClass ={
     width:'45%',
     marginTop:'100px',
     marginLeft:'100px'
}

storiesOf('Inputs', module).add('minutes format', () => (
     <div style={storyClass}>
         <NumberInput format="## minute"/>
     </div>
));