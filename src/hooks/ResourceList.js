/* eslint-disable react/prop-types */
import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  return <div>{resources.length}</div>;
};

export default ResourceList;
