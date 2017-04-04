$(".dropdown-menu a").on('click',function(e) {
   e.preventDefault(); // stops link form loading
   $('.content').hide(); // hides all content divs
   $('#' + $(this).attr('href') ).show(); //get the href and use it find which div to show
});
