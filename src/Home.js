import React, { Component } from 'react';

import NotebooksList from './NotebooksList';

class Home extends Component {

  render() {
    return (
      <div className="notebooks-container">
        <button>Add Notebook</button>
        <NotebooksList />
      </div>
    );
  }
}

export default Home;
