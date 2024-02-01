tinymce.init({
    selector: 'textarea#text-editor',
    plugins: 'lists link image table code help wordcount',
    setup: (editor) => {
      editor.on('click', () => {
        document.querySelector('#previw-content').innerHTML = editor.getContent();
      });
      editor.on('keyup', () => {
        document.querySelector('#previw-content').innerHTML = editor.getContent();
      })
    }
  });