import React, { useState } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import initialMarkdown from './initialMarkdown';
import './App.css';

function App() {
  const [rawText, setRawText] = useState(initialMarkdown);

  return (
    <div className="App">
      <Editor rawText={rawText} onChange={setRawText} />
      <Preview textToPreview={rawText} />
    </div>
  );
}

export default App;
