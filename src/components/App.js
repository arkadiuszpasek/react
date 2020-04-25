import React from 'react';

import faker from 'faker';

import SimpleComment from '../comments/SimpleComment';
import ApproveCard from '../comments/ApproveCard';
import Geo from '../geolocation/Geo';
import InputApp from '../forms/InputApp';

const App = () => {
  return (
    <div>
      <InputApp />
      <Geo />
      <ApproveCard actions={['Approve', 'Reject']}>
        <SimpleComment
          author={faker.name.firstName()}
          avatar={faker.image.avatar()}
          text={faker.lorem.words()}
        />
      </ApproveCard>
      <ApproveCard />
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
    </div>
  );
};

export default App;
