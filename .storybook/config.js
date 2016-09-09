import { configure, addDecorator } from '@kadira/storybook';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
