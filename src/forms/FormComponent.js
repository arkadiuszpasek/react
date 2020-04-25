import React from 'react';

import unsplash from './unsplash';
import Input from './Input';

class FormComponent extends React.Component {
  state = { inputValue: '' };

  onSearchSubmit = (e) => {
    e.preventDefault();
    const { inputValue } = this.state;

    this.makeQuery(inputValue);
  }

  makeQuery = async (inputValue) => {
    const response = await unsplash.get(
      '/search/photos', {
        params: { query: inputValue },
      },
    );
    console.log(response);
  };

  onInputChange = (inputValue) => {
    this.setState({ inputValue });
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.onSearchSubmit}>
        <div className="field">
          <Input
            onSubmit={this.onSearchSubmit}
            onChange={this.onInputChange}
          />
        </div>
        <button className="ui button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default FormComponent;
