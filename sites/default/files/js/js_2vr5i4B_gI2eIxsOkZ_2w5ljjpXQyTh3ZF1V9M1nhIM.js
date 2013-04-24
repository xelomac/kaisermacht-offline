(function ($, Drupal, window, document, undefined) {
  $(document).ready(function() {
//    var windowWidth = $(window).width();
//    var newPosX = (windowWidth - 1040) / 2 + 1040-10;
//    $('span.addtoany_list').css('left', newPosX);
    
    $('#footer').prepend($('span.addtoany_list'));
    /*
    if ($.browser.msie && $.browser.version < 9){
      $('.block-edge-suite').hide();
    } else {
      $('.front #branding').hide();
    }
    */
    
    /* Höhe benachbarter Divs in Sector View angleichen BEGINN*/
    if($('#block-views-sectors-block-2 .views-row').size() > 1) {
      // check if we have two columns (same vertical position of the first two views-rows)
      var topPos1 = $('#block-views-sectors-block-2 .views-row-1').position().top;
      var topPos2 = $('#block-views-sectors-block-2 .views-row-2').position().top;
      if (topPos1 == topPos2) {
        var viewsRowCount = $('#block-views-sectors-block-2 .views-row').size();
        var viewsPairedRows = parseInt(viewsRowCount/2);
        for (var t = 0; t <= viewsPairedRows; t++) {
  //        alert('$('#block-views-sectors-block-2 .views-row-odd:eq(' + t + ')').position().top)');
          var leftHeight = $('#block-views-sectors-block-2 .views-row-odd:eq(' + t + ')').outerHeight();
          var rightHeight = $('#block-views-sectors-block-2 .views-row-even:eq(' + t + ')').outerHeight();
          if (leftHeight > rightHeight) {
            $('#block-views-sectors-block-2 .views-row-even:eq(' + t + ')').css({ height: leftHeight });
          }
          else {
            $('#block-views-sectors-block-2 .views-row-odd:eq(' + t + ')').css({ height: rightHeight });
          }
          
        }
      }
    }
    /* Höhe benachbarter Divs in Sector View angleichen ENDE*/
    
  }); // End $(document).ready(function()
  
  $(window).resize(function() {
    var windowWidth = $(window).width();
    var newPosX = (windowWidth - 1040) / 2 + 1040-10;
    $('span.addtoany_list').css('left', newPosX);
  }); // End $(window).resize(function()
  
})(jQuery, Drupal, this, this.document);;
