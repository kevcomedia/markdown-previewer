import React from 'react';
import marked from 'marked';

function Preview(props) {
  const renderedMarkdown = marked(props.textToPreview, {
    breaks: true,
    sanitize: true,
  });

  return (
    <div
      className="preview"
      dangerouslySetInnerHTML={{ __html: renderedMarkdown }}
    />
  );
}

export default Preview;
