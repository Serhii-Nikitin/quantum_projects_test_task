'use strict';

$(document).ready(function() {
  $('.header__hamburger').click(function() {
    $('.header__nav').toggleClass('header__nav--active');
    $('.header__hamburger').toggleClass('header__hamburger--close');
  });

  $('.comments__button--right').click(function() {
    const currentComment = $('.comments__comment-container--active');
    const currentCommentIndex = $('.comments__comment-container--active')
      .index();
    const nextCommentIndex = currentCommentIndex + 1;
    const nextComment = $('.comments__comment-container').eq(nextCommentIndex);

    currentComment.fadeOut(0);
    currentComment.removeClass('comments__comment-container--active');

    if (currentCommentIndex === (
      $('.comments__comment-container:first').index())
    ) {
      $('.comments__button--left').prop('disabled', false);
    };

    if (nextCommentIndex === ($('.comments__comment-container:last').index())) {
      $('.comments__button--right').prop('disabled', true);
    };

    nextComment.fadeIn(0);
    nextComment.addClass('comments__comment-container--active');
  });

  $('.comments__button--left').click(function() {
    const currentComment = $('.comments__comment-container--active');
    const currentCommentIndex = $('.comments__comment-container--active')
      .index();
    const prevCommentIndex = currentCommentIndex - 1;
    const prevComment = $('.comments__comment-container').eq(prevCommentIndex);

    if (currentCommentIndex === (
      $('.comments__comment-container:last').index())
    ) {
      $('.comments__button--right').prop('disabled', false);
    };

    if (prevCommentIndex === (
      $('.comments__comment-container:first').index())
    ) {
      $('.comments__button--left').prop('disabled', true);
    };

    currentComment.fadeOut(0);
    currentComment.removeClass('comments__comment-container--active');
    prevComment.fadeIn(0);
    prevComment.addClass('comments__comment-container--active');
  });

  $('.questions__question-toggler').click(function() {
    $(this).toggleClass('questions__question-toggler--close');
    $(this).parent().next().slideToggle(100);
  });
});
