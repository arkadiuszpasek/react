/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import LanguageContext from './contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    const { onLanguageChange } = this.context;
    return (
      <div>
        Select a language:
        <i className="flag us" onClick={() => onLanguageChange('eng')} />
        <i className="flag fr" onClick={() => onLanguageChange('fr')} />
      </div>
    );
  }
}

export default LanguageSelector;
