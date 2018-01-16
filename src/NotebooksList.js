import React, { Component } from 'react';

import Notebook from './Notebook';
import NotebookList from './data/notebooks';

const NotebooksList = () => {
  let notebooks = NotebookList.map(notebook => (
    <Notebook title={notebook.title} numberOfNotes={notebook.numberOfNotes}/>
  ));

  return (
    <div className="notebooks-list">
      {notebooks}
    </div>
  );
}

export default NotebooksList;

// class NotebooksList extends Component {
//
//   render() {
//     return (
//       <div className="notebooks-list">
//         {NotebookList.map(
//           (notebook) => (<Notebook title={notebook.title} numberOfNotes={notebook.numberOfNotes}/>)
//         )}
//       </div>
//     );
//   }
// }
//
// export default NotebooksList;
