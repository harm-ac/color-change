document.addEventListener('DOMContentLoaded', function() {
    const colors = [
      'color1', 'color2', 'color3', 'color4', 'color5', 'color6', 'color7', 'color8', 'color9', 'color10',
      'color11', 'color12', 'color13', 'color14', 'color15', 'color16', 'color17', 'color18', 'color19', 'color20',
      'color21', 'color22', 'color23', 'color24', 'color25', 'color26', 'color27', 'color28', 'color29', 'color30',
      'color31', 'color32', 'color33', 'color34', 'color35', 'color36', 'color37', 'color38', 'color39', 'color40',
      'color41', 'color42', 'color43', 'color44', 'color45', 'color46', 'color47', 'color48', 'color49', 'color50',
      'color51', 'color52', 'color53', 'color54', 'color55', 'color56', 'color57', 'color58', 'color59', 'color60',
      'color61', 'color62', 'color63', 'color64', 'color65', 'color66', 'color67', 'color68', 'color69', 'color70',
      'color71', 'color72', 'color73', 'color74', 'color75', 'color76', 'color77', 'color78', 'color79', 'color80',
      'color81', 'color82', 'color83', 'color84', 'color85', 'color86', 'color87', 'color88', 'color89', 'color90',
      'color91', 'color92', 'color93', 'color94', 'color95', 'color96', 'color97', 'color98', 'color99', 'color100',
    ];
    let currentIndex = 0;
  
    function changeBackgroundColor() {
      document.body.className = colors[currentIndex];
      currentIndex = (currentIndex + 1) % colors.length;
    }

    changeBackgroundColor();

    setInterval(changeBackgroundColor, 100);
  });
  
