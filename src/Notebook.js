import React from 'react';

const Notebook = (props) => (
  <div className="notebook">
    <h1>{props.title}</h1>
    <p>{props.numberOfNotes}</p>
  </div>
);

export default Notebook;

// import React, { Component } from 'react';
//
// class Notebook extends Component {
//
//   render() {
//     return (
//       <div className="notebook">
//         <h1>Aziz's Super Secret Diary</h1>
//         <p>0</p>
//       </div>
//     );
//   }
// }
//
// export default Notebook;
