import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Form from '../components/Form';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Form', module).add('Simple form', () => {

  const inputs = [
    {
      title: 'First name',
      name: 'first_name',
      title: 'First name',
      type: 'text'
    },
    {
      name: 'last_name',
      type: 'text'
    },
    {
      title: 'Date of birth',
      name: 'birth_date',
      type: 'date'
    }
  ];

  return (<Form inputs={inputs}/>);
})