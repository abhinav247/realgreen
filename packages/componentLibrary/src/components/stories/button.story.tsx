import * as React from 'react';

import { storiesOf } from '@storybook/react';
import ButtonWrapper from '../widgets/button/button'
 
storiesOf('Buttons', module).add('Primary Button', () => (
    <ButtonWrapper text="Primary Button"
    type="default"
    stylingMode="contained"
    onClick={()=>clickHandler("Primary")}
    />
));

storiesOf('Buttons', module).add('Save Button', () => (
    <ButtonWrapper text="Save Button"
    type="default"
    stylingMode="contained"
    icon='save'
    />
));

storiesOf('Buttons', module).add('Default Button', () => (
    <ButtonWrapper text="Default Button"
    type="normal"
    stylingMode="contained"
    />
));

storiesOf('Buttons', module).add('Cancel Button', () => (
    <ButtonWrapper text="Cancel Button"
    type="normal"
    stylingMode="contained"
    icon="clear"
    />
));

storiesOf('Buttons', module).add('Secondary Button', () => (
    <ButtonWrapper text="Secondary Button"
    type="default"
    stylingMode="contained"
    />
));

storiesOf('Buttons', module).add('Update Button', () => (
    <ButtonWrapper text="Update Button"
    type="default"
    stylingMode="contained"
    icon="refresh"
    />
));

storiesOf('Buttons', module).add('Success Button', () => (
    <ButtonWrapper text="Success Button"
    type="success"
    stylingMode="contained"
    />
));

storiesOf('Buttons', module).add('Generate Button', () => (
    <ButtonWrapper text="Generate Button"
    type="success"
    stylingMode="contained"
    icon="print"
    />
));

storiesOf('Buttons', module).add('Warning Button', () => (
    <ButtonWrapper text="Warning Button"
    type="danger"
    stylingMode="contained"
    />
));

storiesOf('Buttons', module).add('Delete Button', () => (
    <ButtonWrapper text="Delete Button"
    type="danger"
    stylingMode="contained"
    icon='trash'
    />
));

function clickHandler(type:string) {
    alert(type+' Button Called')
}
