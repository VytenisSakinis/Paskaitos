document.write('<p>')
let n = 45
for (let black = 0; black < n; black++) {
    for (let red = 0; red < n; red++) {
      if (black === red || black + red + 1 === n) {
        document.write('<span class="red">*</span>');
      } else {
        document.write('*');
      }
    }
    document.write('<br>');
  }

  document.write('</p>');

