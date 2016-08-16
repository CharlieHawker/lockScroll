(function($) {
  
  var $w = $(window);

  var LockScroll = function(elem) {
    this.elem = elem;
    this.init();
  };

  LockScroll.prototype.init = function() {
    var l = this,
        resizeReducer;

    l.reposition();

    $w.on('resize', function() {
      clearTimeout(resizeReducer);
      resizeReducer = setTimeout(function() {
        l.reposition();
      }, 200);
    });
  };

  LockScroll.prototype.reposition = function() {
    var l = this,
        rect = l.elem.css('position', 'static').get(0).getBoundingClientRect();
    l.elem.css({
      position: "fixed",
      top: rect.top,
      left: rect.left,
      width: rect.width
    });
  }

  $.fn.extend({
    lockScroll: function() {
      return this.each(function() {
        var elem = $(this);
        elem.data('lockScroll', new LockScroll(elem));
      });
    }
  })
})(jQuery);