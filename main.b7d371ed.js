parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";$(document).ready(function(){$(".header__hamburger").click(function(){$(".header__nav").toggleClass("header__nav--active"),$(".header__hamburger").toggleClass("header__hamburger--close")}),$(".comments__button--right").click(function(){var t=$(".comments__comment-container--active"),n=$(".comments__comment-container--active").index(),a=n+1,e=$(".comments__comment-container").eq(a);t.fadeOut(0),t.removeClass("comments__comment-container--active"),n===$(".comments__comment-container:first").index()&&$(".comments__button--left").prop("disabled",!1),a===$(".comments__comment-container:last").index()&&$(".comments__button--right").prop("disabled",!0),e.fadeIn(0),e.addClass("comments__comment-container--active")}),$(".comments__button--left").click(function(){var t=$(".comments__comment-container--active"),n=$(".comments__comment-container--active").index(),a=n-1,e=$(".comments__comment-container").eq(a);n===$(".comments__comment-container:last").index()&&$(".comments__button--right").prop("disabled",!1),a===$(".comments__comment-container:first").index()&&$(".comments__button--left").prop("disabled",!0),t.fadeOut(0),t.removeClass("comments__comment-container--active"),e.fadeIn(0),e.addClass("comments__comment-container--active")}),$(".questions__question-toggler").click(function(){$(this).toggleClass("questions__question-toggler--close"),$(this).parent().next().slideToggle(100)});var t=/^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i,n=$(".contact-us__email"),a=$(".contact-us__name"),e=$(".contact-us__message"),c=$(".contact-us__form"),s=function(){""!==$(this).val()?($(this).removeClass("contact-us__invalid"),$(this).addClass("contact-us__valid"),$(this).parent().removeClass("contact-us__input-container--warning")):($(this).addClass("contact-us__invalid"),$(this).removeClass("contact-us__valid"),$(this).parent().addClass("contact-us__input-container--warning"))},o=function(){$(this).parent().removeClass("contact-us__input-container--error").removeClass("contact-us__input-container--warning")},i=function(t){t.addClass("contact-us__invalid"),t.removeClass("contact-us__valid"),t.parent().addClass("contact-us__input-container--warning")},_=function(t){t.val(""),t.removeClass("contact-us__invalid"),t.removeClass("contact-us__valid")};n.blur(function(){0===n.val().search(t)?(n.removeClass("contact-us__invalid"),n.addClass("contact-us__valid"),n.parent().removeClass("contact-us__input-container--error")):(n.addClass("contact-us__invalid"),n.removeClass("contact-us__valid"),n.parent().addClass("contact-us__input-container--error"))}),a.blur(s),e.blur(s),n.focus(o),a.focus(o),e.focus(o),c.submit(function(c){c.preventDefault(),""===n.val()?i(n):0!==n.val().search(t)&&(n.addClass("contact-us__invalid"),n.removeClass("contact-us__valid"),n.parent().addClass("contact-us__input-container--error")),""===a.val()&&i(a),""===e.val()&&i(e),""!==a.val()&&""!==e.val()&&0===n.val().search(t)&&(_(n),_(a),_(e),$(".contact-us__input-container").removeClass("contact-us__input-container--warning").removeClass("contact-us__input-container--error"))})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.b7d371ed.js.map