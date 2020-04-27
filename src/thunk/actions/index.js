import jsonplaceholder from '../api/jsonplaceholder';

export const fetchPosts = async () => {
  return {
    type: 'FETCH_POSTS',
  };
};
