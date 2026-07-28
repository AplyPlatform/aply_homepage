/**
 * logo-grid.js - 브랜드 심볼(LOGO) 그리드 공용 스크립트
 * /symbol 페이지와 about.html(회사소개) 두 곳에서 함께 사용한다.
 *
 * about.html 은 app.js 가 #mainContents 로 나중에 주입하므로,
 * document 위임 방식으로 묶어 주입 시점과 무관하게 동작하게 한다.
 */
(function ($) {
  'use strict';

  $(document).on('click', '.logo-bg-btn', function () {
    var $btn = $(this);
    var $section = $btn.closest('.logo-section');
    var mode = $btn.data('bg');

    $btn.closest('.logo-toolbar').find('.logo-bg-btn').removeClass('is-active');
    $btn.addClass('is-active');

    $section.removeClass('logo-preview-light logo-preview-dark');
    if (mode !== 'checker') {
      $section.addClass('logo-preview-' + mode);
    }
  });
})(jQuery);
