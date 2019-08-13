import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  // Only looking at language context, not color
  static contextType = LanguageContext;

  // USING THIS.CONTEXT TO RETRIEVE
  render() {
    const text = this.context.language === 'english' ? 'Name' : 'Naam';
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
