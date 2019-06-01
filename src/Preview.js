import React from 'react';
import marked from 'marked';
import './Preview.css';

function Preview(props) {
  const renderedMarkdown = marked(props.textToPreview, {
    breaks: true,
    sanitize: true,
  });

  return (
    <div
      className={props.textToPreview ? 'preview' : 'preview preview_is-empty'}
      dangerouslySetInnerHTML={{ __html: renderedMarkdown }}
    />
  );
}

export default Preview;
