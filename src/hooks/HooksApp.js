import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const HooksApp = () => {
  const [resource, setResource] = useState('posts');
  return (
    <div>
      <div>
        <button type="button" onClick={() => setResource('posts')}>Posts</button>
        <button type="button" onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
      <UserList />
    </div>
  );
};

export default HooksApp;
