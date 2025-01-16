require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.38.0/min/vs' } });

require(['vs/editor/editor.main'], function () {
  const htmlEditor = monaco.editor.create(document.getElementById('html-editor'), {
    value: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>Document</title>\n  </head>\n  <body>\n    <h1>Hello, World!</h1>\n  </body>\n</html>',
    language: 'html',
    theme: 'vs-dark',
  });

  const cssEditor = monaco.editor.create(document.getElementById('css-editor'), {
    value: 'body {\n  background-color: #f4f4f4;\n  font-family: Arial, sans-serif;\n}',
    language: 'css',
    theme: 'vs-dark',
  });

  const jsEditor = monaco.editor.create(document.getElementById('js-editor'), {
    value: 'console.log("Hello, World!");',
    language: 'javascript',
    theme: 'vs-dark',
  });

  const outputFrame = document.getElementById('output');

  function updateOutput() {
    const html = htmlEditor.getValue();
    const css = `<style>${cssEditor.getValue()}</style>`;
    const js = `<script>${jsEditor.getValue()}<\/script>`;
    const combinedCode = `${html}${css}${js}`;
    outputFrame.srcdoc = combinedCode;
  }

  [htmlEditor, cssEditor, jsEditor].forEach((editor) => {
    editor.onDidChangeModelContent(updateOutput);
  });

  updateOutput();
});
