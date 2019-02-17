import React from 'react';
import { storiesOf } from '@storybook/react';
import Toast from './index';

storiesOf('Toast', module)
  .add('Toast', () => {
    let clickChild;
    return (
      <div>
        <button onClick={() => clickChild()}>add</button>
        <Toast handlerAddToast={click => (clickChild = click)}>
          <span>I am Toast !</span>
        </Toast>
      </div>
    );
  })
  .add('Toast duration=1200 height=200 width=500', () => {
    let clickChild;
    return (
      <div>
        <button onClick={() => clickChild()}>add</button>
        <Toast duration={1200} height={200} width={500} handlerAddToast={click => (clickChild = click)}>
          <span>I am quick Toast !</span>
        </Toast>
      </div>
    );
  });
