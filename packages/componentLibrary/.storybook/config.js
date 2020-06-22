import { configure } from '@storybook/react';
import '../src/styles/index.scss';

function loadStories() {
    require('glob-loader!./stories.pattern')
}

configure(loadStories, module);
