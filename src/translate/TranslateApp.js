import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from './contexts/LanguageContext';
import ColorContext from './contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class TranslateApp extends React.Component {
  state = { language: 'eng' };

  onLanguageChange = (language) => {
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container">
        This part is about learning Context vs props
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="pink">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default TranslateApp;
