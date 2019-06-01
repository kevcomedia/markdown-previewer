import React from 'react';
import './Editor.css';

function Editor(props) {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <textarea
      className="editor"
      value={props.rawText}
      placeholder="Type markdown here"
      onChange={handleChange}
      aria-label="Enter markdown here"
    />
  );
}

export default Editor;
