/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.escwa = {
    attach: function (context, settings) {

      //Removes page load animation when window is finished loading
      window.addEventListener("load", function () {    document.querySelector('body').classList.add('loaded');  });

      var homeslideoptions = {
        imagesLoaded: true,
        autoPlay: 12500,
        wrapAround: false,
        prevNextButtons: false,
        pageDots: false,
        watchCSS: false,
        draggable: true
      };

      $('.slider').flickity(homeslideoptions);

      $('.homeslider-container').each(function(i, container) {
        var $container = $(container);
        var $slider = $container.find('.slider');
        var flkty = $slider.data('flickity');
        var selectedIndex = flkty.selectedIndex;

        var slideCount = flkty.slides.length;

        var $pagers = $container.next('.homeslider-pager');

        for (i = 0; i < slideCount; i++) {
          $pagers.append('<span></span>');
        }

        var $pager = $pagers.find('span');

        $pager.first().addClass('is--active');

        $slider.on('select.flickity', function() {
          $pager.filter('.is--active').removeClass('is--active');
          $pager.eq(flkty.selectedIndex).addClass('is--active');

        });

        $pagers.on('click', 'span', function() {
          var index = $(this).index();
          $slider.flickity('select', index);
        });

      });

      $(document).ready(function(){
        $("#focusInput").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#focusList a").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });

      $(document).ready(function () {
        $(".filterInput").on("keyup", function () {
          var value = $(this).val().toLowerCase();
          var list = $(this).data("target");
          $("#"+list+" li").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });
  
    }
  };

})(jQuery, Drupal);
