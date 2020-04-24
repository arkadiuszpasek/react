import React from 'react';
import ReactDOM from 'react-dom';

import faker from 'faker';

import SimpleComment from './SimpleComment';

const App = () => {
  return (
    <div className="ui comments">
      <SimpleComment
        author={faker.name.firstName()}
        avatar={faker.image.avatar()}
        text={faker.lorem.words()}
      />
      <SimpleComment
        author={faker.name.firstName()}
        avatar={faker.image.avatar()}
        text={faker.lorem.words()}
      />
      <SimpleComment
        author={faker.name.firstName()}
        avatar={faker.image.avatar()}
        text={faker.lorem.words()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
