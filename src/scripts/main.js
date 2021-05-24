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

  const regexp = /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
  const mail = $('.contact-us__email');
  const name = $('.contact-us__name');
  const message = $('.contact-us__message');
  const form = $('.contact-us__form');

  const textValidation = function() {
    if ($(this).val() !== '') {
      $(this).removeClass('contact-us__invalid');
      $(this).addClass('contact-us__valid');
    } else {
      $(this).addClass('contact-us__invalid');
      $(this).removeClass('contact-us__valid');
    }
  };

  mail.blur(function() {
    if (mail.val().search(regexp) === 0) {
      mail.removeClass('contact-us__invalid');
      mail.addClass('contact-us__valid');

      $('.contact-us__input-container')
        .removeClass('contact-us__input-container--error');
    } else {
      mail.addClass('contact-us__invalid');
      mail.removeClass('contact-us__valid');

      $('.contact-us__input-container')
        .addClass('contact-us__input-container--error');
    }
  });
  name.blur(textValidation);
  message.blur(textValidation);

  mail.focus(function() {
    $('.contact-us__input-container')
      .removeClass('contact-us__input-container--error');
  });

  form.submit(function(event) {
    event.preventDefault();

    if (mail.val().search(regexp) !== 0 || mail.val() === '') {
      mail.addClass('contact-us__invalid');
      mail.removeClass('contact-us__valid');

      $('.contact-us__input-container')
        .addClass('contact-us__input-container--error');
    }

    if (name.val() === '') {
      name.addClass('contact-us__invalid');
      name.removeClass('contact-us__valid');
    }

    if (message.val() === '') {
      message.addClass('contact-us__invalid');
      message.removeClass('contact-us__valid');
    }

    if (name.val() !== ''
      && message.val() !== ''
      && mail.val().search(regexp) === 0
    ) {
      name.val('');
      name.removeClass('contact-us__invalid');
      name.removeClass('contact-us__valid');
      message.val('');
      message.removeClass('contact-us__invalid');
      message.removeClass('contact-us__valid');
      mail.val('');
      mail.removeClass('contact-us__invalid');
      mail.removeClass('contact-us__valid');

      $('.contact-us__input-container')
        .removeClass('contact-us__input-container--error');
    }
  });
});
