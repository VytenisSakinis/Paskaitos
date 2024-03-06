tinymce.init({
    selector: 'textarea#text-editor',
    plugins: 'lists link image table code help wordcount',
    setup: (editor) => {
      editor.on('keyup', () => {
        document.querySelector('#previw-content').innerHTML = editor.getContent();
      })
      editor.on('change', () => {
        document.querySelector('#previw-content').innerHTML = editor.getContent();
      })
    }
  });