import React from 'react';
import { storiesOf } from '@kadira/storybook';
import {
  withKnobs,
  text, boolean, number, object,
} from '@kadira/storybook-addon-knobs';

const stories = storiesOf('Storybook Knobs', module);
stories.addDecorator(withKnobs);

stories.add('with a button', () => {
  const style = {
    backgroundColor: '#FFF',
    border: '1px solid #DDD',
    borderRadius: 2,
    outline: 0,
    fontSize: 15,
    cursor: 'pointer',
  };

  return (
    <button
      disabled={boolean('Disabled', true)}
      style={object('Style', style)}
    >
      {text('Label', 'Hello Button')}
    </button>
  );
});

stories.add('with some text', () => {
  let content = text('Content', 'This is the content');
  content = content.replace(/\n/g, '<br />');

  return (
    <div
      dangerouslySetInnerHTML={{__html: content}}
    />
  );
});

stories.add('as dynamic variables', () => {
  const name = text('Name', 'Arunoda Susiripala');
  const age = number('Age', 89);

  const content = `I am ${name} and I'm ${age} years old.`;
  return (<div>{content}</div>);
});
