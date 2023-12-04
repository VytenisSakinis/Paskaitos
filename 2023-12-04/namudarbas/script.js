document.write('<p>')

for (let black = 0; black < 10; black++) {
    for (let red = 0; red < 10; red++) {
      if (black === red) {
        document.write('<span class="red">*</span>');
      } else {
        document.write('*');
      }
    }
    document.write('<br>');
  }

  document.write('</p>');

