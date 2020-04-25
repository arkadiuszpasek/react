import React from 'react';
import FormComponent from './FormComponent';
// import ImageList from './ImageList';

class InputApp extends React.Component {
  state = { images: [] };

  render() {
    return (
      <FormComponent />
    );
  }
}

export default InputApp;
