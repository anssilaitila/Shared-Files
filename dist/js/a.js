!function(e){var t={};function s(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(i,a,function(t){return e[t]}.bind(null,a));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=15)}([,,,,,,,,,,,,,,,function(e,t,s){"use strict";s.r(t);s(16),s(17),s(18),s(19),s(20),s(21),s(22),s(23),s(24),s(25),s(26)},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t){jQuery((function(e){if(e(".shared-files-settings-tabs li").on("click",(function(t){var s=e(this).data("settings-container");e(".shared-files-settings-tabs li").removeClass("active"),e(".shared-files-settings-tab-1").hide(),e(".shared-files-settings-tab-2").hide(),e(".shared-files-settings-tab-3").hide(),e(".shared-files-settings-tab-4").hide(),e(".shared-files-settings-tab-5").hide(),e(".shared-files-settings-tab-51").hide(),e(".shared-files-settings-tab-6").hide(),e(".shared-files-settings-tab-7").hide(),e(".shared-files-settings-tab-8").hide(),e(".shared-files-settings-tab-9").hide(),e(".shared-files-settings-tab-10").hide(),e(".shared-files-settings-tab-11").hide(),e(".shared-files-settings-tab-12").hide(),e(".shared-files-settings-tab-13").hide(),e(".shared-files-settings-tab-14").hide(),e(".shared-files-settings-tab-15").hide(),e(".shared-files-settings-tab-16").hide(),e(".shared-files-settings-tab-17").hide(),e(".shared-files-settings-tab-18").hide(),e(".shared-files-settings-tab-19").hide(),e(".shared-files-settings-tab-20").hide(),e(this).addClass("active"),e("."+s).show(),window.history.pushState("","","#"+s),e(".shared-files-settings-form").attr("action","options.php#"+s)})),window.location.hash&&~window.location.hash.indexOf("shared-files-settings-tab")){var t=window.location.hash.substr(1);e(".shared-files-settings-tabs li").removeClass("active"),e(".shared-files-settings-tab-1").hide(),e(".shared-files-settings-tab-2").hide(),e(".shared-files-settings-tab-3").hide(),e(".shared-files-settings-tab-4").hide(),e(".shared-files-settings-tab-5").hide(),e(".shared-files-settings-tab-51").hide(),e(".shared-files-settings-tab-6").hide(),e(".shared-files-settings-tab-7").hide(),e(".shared-files-settings-tab-8").hide(),e(".shared-files-settings-tab-9").hide(),e(".shared-files-settings-tab-10").hide(),e(".shared-files-settings-tab-11").hide(),e(".shared-files-settings-tab-12").hide(),e(".shared-files-settings-tab-13").hide(),e(".shared-files-settings-tab-14").hide(),e(".shared-files-settings-tab-15").hide(),e(".shared-files-settings-tab-16").hide(),e(".shared-files-settings-tab-17").hide(),e(".shared-files-settings-tab-18").hide(),e(".shared-files-settings-tab-19").hide(),e(".shared-files-settings-tab-20").hide(),e("."+t+"-title").addClass("active"),e("."+t).show(),e(".shared-files-settings-form").attr("action","options.php#"+t)}else e(".shared-files-settings-tab-1-title").addClass("active");e(".shared-files-add-multiple-files").on("click",(function(t){t.preventDefault(),e(".shared-files-multiple-files-upload-container").toggle()})),e(".post-type-shared_file form#post").attr("autocomplete","off"),e('.wp-list-table tr[data-slug="shared-files"] .plugin-version-author-uri a:first-of-type').attr("target","_blank"),e(".shared-files-sync-files #shared-file-category").change((function(){e(".shared-files-single-file-category").val(this.value)})),e(".shared-files-pro-required").on("click",(function(e){return e.preventDefault(),!1})),e(".shared-files-show-password").on("click",(function(){e("#shared-file-password").attr("type","text"),e(this).hide()})),e(".shared-files-show-cat-password").on("click",(function(){e("#_sf_cat_password").attr("type","text"),e(this).hide()}))}))}]);