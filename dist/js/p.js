!function(e){var s={};function i(a){if(s[a])return s[a].exports;var t=s[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=s,i.d=function(e,s,a){i.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,s){if(1&s&&(e=i(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var t in e)i.d(a,t,function(s){return e[s]}.bind(null,t));return a},i.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(s,"a",s),s},i.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},i.p="",i(i.s=0)}([function(e,s,i){"use strict";i.r(s);i(1),i(2),i(3),i(4),i(5),i(6),i(7),i(8),i(9),i(10),i(11)},function(e,s,i){},function(e,s,i){},function(e,s,i){},function(e,s,i){},function(e,s,i){},function(e,s,i){},function(e,s,i){},function(e,s,i){},function(e,s,i){},function(e,s,i){},function(e,s){jQuery((function(e){e(".sf-public-file-upload-container input[type=checkbox]").prop("disabled",!1),e(".sf-termlist input[type=checkbox]").click((function(){this.checked?e(this).parents("li").children().children("input[type=checkbox]").prop("checked",!0):e(this).parents("li").children().children("input[type=checkbox]").prop("checked",!1)})),e(document).on("click",".shared-files-add-to-favorites",(function(s){s.preventDefault();var i={action:"sf_add_to_favorites",file_id:e(this).data("file-id")},a=e(this).parent();jQuery.post(ajaxurl,i,(function(e){var s=e.replace(/0$/,"");a.html(s)}))})),e(document).on("click",".shared-files-delete-from-favorites",(function(s){s.preventDefault();var i={action:"sf_delete_from_favorites",file_id:e(this).data("file-id")},a=e(this).parent();jQuery.post(ajaxurl,i,(function(e){var s=e.replace(/0$/,"");a.html(s)}))})),e(document).on("click",".shared-files-modal-container",(function(s){if(s.target===this){var i=e(this).data("file-id");i?e(".shared-files-modal-container-"+i).hide():e(".shared-files-modal-container").hide()}})),e(document).on("click",".shared-files-close-modal",(function(s){s.preventDefault();var i=e(this).data("file-id");i?e(".shared-files-modal-container-"+i).hide():e(".shared-files-modal-container").hide()})),e(document).on("click",".shared-files-edit-file",(function(s){s.preventDefault();var i=e(this).data("file-id"),a=".shared-files-modal-container-edit-file-"+i,t="shared-files-description-editor-file-"+i;tinyMCE.execCommand("mceRemoveEditor",!1,"shared-files-editor-"+i),tinyMCE.editors.length=0,tinyMCE.init({mode:"specific_textareas",elements:"pre-details",theme:"modern",skin:"lightgray",menubar:!1,statusbar:!1,toolbar:["bold italic underline | alignleft aligncenter alignright | bullist numlist outdent indent | undo redo | link"],plugins:"paste, lists, link",paste_auto_cleanup_on_paste:!0,paste_postprocess:function(e,s){s.node.innerHTML=s.node.innerHTML.replace(/&nbsp;+/gi," ")},editor_selector:t}),e(a).show()})),e(document).on("click","a.shared-files-file-title, a.shared-files-preview-image",(function(s){var i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),a=e(this).data("file-type"),t=e(this).data("file-url"),l=e(this).data("external-url"),n=e(this).attr("href");if(e(this).data("image-url")&&(n=e(this).data("image-url")),a.startsWith("video")&&!i){s.preventDefault();var f='<video preload controls autoplay><source src="'+t+'" /></video>',o=basicLightbox.create(f);jQuery.post(t,{only_meta:1},(function(e){})),o.show()}else if("youtube"==a&&l){s.preventDefault();var r=l.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/),d=r&&11===r[2].length?r[2]:null,h=basicLightbox.create('<iframe allow="autoplay" src="//www.youtube.com/embed/'+d+'?autoplay=1" width="560" height="315" frameborder="0" allowfullscreen style="width: 560px;"></iframe>');jQuery.post(t,{youtube:1},(function(e){})),h.show()}else if("image"==a){s.preventDefault(),basicLightbox.create('<img src="'+n+'" />').show(),t&&jQuery.post(t,{only_meta:1},(function(e){}))}})),e(".shared-files-category-select, .shared-files-tag-select, .shared-files-custom-field-select").change((function(){var s=e(this).closest("form").data("elem-class"),i="";(i=e(this).closest("form").find('select[name="sf_category"]').val())||(i=e(this).closest("form").find('input[name="sf_category"]').val());var a={action:"sf_get_files",sf_category:i,sf_tag:e(this).closest("form").find('select[name="sf_tag"]').val(),atts:e(this).closest("form").find('input[name="atts"]').val(),cf_1:e(this).closest("form").find('select[name="cf_1"]').val(),cf_2:e(this).closest("form").find('select[name="cf_2"]').val(),cf_3:e(this).closest("form").find('select[name="cf_3"]').val(),cf_4:e(this).closest("form").find('select[name="cf_4"]').val(),cf_5:e(this).closest("form").find('select[name="cf_5"]').val(),cf_6:e(this).closest("form").find('select[name="cf_6"]').val(),cf_7:e(this).closest("form").find('select[name="cf_7"]').val(),cf_8:e(this).closest("form").find('select[name="cf_8"]').val(),cf_9:e(this).closest("form").find('select[name="cf_9"]').val(),cf_10:e(this).closest("form").find('select[name="cf_10"]').val(),cf_11:e(this).closest("form").find('select[name="cf_11"]').val(),cf_12:e(this).closest("form").find('select[name="cf_12"]').val(),cf_13:e(this).closest("form").find('select[name="cf_13"]').val(),cf_14:e(this).closest("form").find('select[name="cf_14"]').val(),cf_15:e(this).closest("form").find('select[name="cf_15"]').val(),cf_16:e(this).closest("form").find('select[name="cf_16"]').val(),cf_17:e(this).closest("form").find('select[name="cf_17"]').val(),cf_18:e(this).closest("form").find('select[name="cf_18"]').val(),cf_19:e(this).closest("form").find('select[name="cf_19"]').val(),cf_20:e(this).closest("form").find('select[name="cf_20"]').val()};jQuery.post(ajaxurl,a,(function(i){var a=i.replace(/0$/,"");e("."+s+" .shared-files-non-ajax").hide(),e("."+s+" .shared-files-pagination").hide(),e("."+s+" .shared-files-pagination-improved").hide(),e("."+s+" .shared-files-ajax-list").empty().append(a);var t="./?"+e("."+s+" .shared-files-ajax-form select").serialize();window.history.pushState({urlPath:t},"",t)}))})),e(document).on("click",".shared-files-tag-link",(function(s){s.preventDefault();var i,a,t=e(this).closest(".shared-files-main-container").data("elem-class"),l="",n="";(l=e("."+t+" .shared-files-ajax-form").find('select[name="sf_category"]').val())||(l=e("."+t+" .shared-files-ajax-form").find('input[name="sf_category"]').val()),i=e(this).data("tag-slug"),a=e("."+t+" .shared-files-ajax-form").find('input[name="atts"]').val(),1==e(this).data("hide-description")&&(n=1);var f={action:"sf_get_files",sf_category:l,sf_tag:i,hide_description:n,atts:a};jQuery.post(ajaxurl,f,(function(s){var a=s.replace(/0$/,"");e("."+t+" .shared-files-pagination").hide(),e("."+t+" .shared-files-pagination-improved").hide(),e("."+t+" .shared-files-non-ajax").hide(),e("."+t+" .shared-files-category-select").val(e("."+t+" .shared-files-category-select option:first").val()),e("."+t+" .shared-files-ajax-list").empty().append(a);var l="";l=i?"./?sf_tag="+i:"./?sf_tag=",window.history.pushState({urlPath:l},"",l)}))})),e(".shared-files-search-files").keyup((function(s){var i,a,t,l,n,f=e(this).data("elem-class");a=(i=e("."+f+" .shared-files-search-files")).val().toUpperCase(),e("."+f+" #shared-files-all-files"),t=e("."+f+" #shared-files-all-files li");var o=0,r=0;for(l=0;l<t.length;l++)(n=t[l].getElementsByClassName("shared-files-main-elements")[0])&&n.textContent.toUpperCase().indexOf(a)>-1?(t[l].style.display="",r++):(t[l].style.display="none",o++);""==i.value?(e("."+f+" #shared-files-nothing-found").hide(),e("."+f+" #shared-files-files-found").hide(),e("."+f+" #myList").show(),e("."+f+" #shared-files-pagination").show(),e("."+f+" .shared-files-pagination-improved").show(),e("."+f+" #shared-files-all-files").hide()):t.length==o?(e("."+f+" #shared-files-nothing-found").show(),e("."+f+" #shared-files-files-found").hide(),e("."+f+" #myList").hide(),e("."+f+" #shared-files-pagination").hide(),e("."+f+" .shared-files-pagination-improved").hide(),e("."+f+" #shared-files-all-files").show()):(e("."+f+" #shared-files-nothing-found").hide(),e("."+f+" #shared-files-files-found").html(r+" "+(r>1?e("."+f+" #shared-files-more-than-one-file-found").html():e("."+f+" #shared-files-one-file-found").html())),e("."+f+" #shared-files-files-found").show(),e("."+f+" #myList").hide(),e("."+f+" #shared-files-pagination").hide(),e("."+f+" .shared-files-pagination-improved").hide(),e("."+f+" #shared-files-all-files").show())})),e(".shared-files-simple-search").keyup((function(){var s,i,a,t,l,n=e(this).data("elem-class");i=(s=e("."+n+" .shared-files-simple-search")).val().toUpperCase(),e("."+n+" .shared-files-simple-list"),a=e("."+n+" .shared-files-simple-list .shared-files-simple-list-row");var f=0,o=0;for(t=0;t<a.length;t++)(l=a[t].getElementsByClassName("shared-files-simple-list-col-name")[0])&&l.textContent.toUpperCase().indexOf(i)>-1?(a[t].style.display="",o++):(a[t].style.display="none",f++);""==s.value?(e("."+n+" .shared-files-simple-nothing-found").hide(),e("."+n+" #shared-files-files-found").hide()):a.length==f?(e("."+n+" .shared-files-simple-nothing-found").show(),e("."+n+" #shared-files-files-found").hide()):(e("."+n+" .shared-files-simple-nothing-found").hide(),e("."+n+" #shared-files-files-found").html(o+" "+(o>1?e("."+n+" #shared-files-more-than-one-file-found").html():e("."+n+" #shared-files-one-file-found").html())),e("."+n+" #shared-files-files-found").show())})),e(document).on("click",".shared-files-accordion-category-title-container",(function(s){var i=e(this).data("elem-class"),a=e(this).data("category-id"),t="."+i+" .shared-files-accordion-category-"+a,l="."+i+" .shared-files-accordion-contents-"+a;e(l).is(":visible")?(e(t).removeClass("shared-files-accordion-category-open"),e(t).addClass("shared-files-accordion-category-closed"),e(l).hide()):(e(t).addClass("shared-files-accordion-category-open"),e(t).removeClass("shared-files-accordion-category-closed"),e(l).show())})),e(".shared-files-search-all-files").keyup((function(){var s,i,a,t,l,n=e(this).data("elem-class");i=(s=e("."+n+" .shared-files-search-all-files")).val().toUpperCase();var f=e("."+n+" .shared-files-in-category"),o=0;for(z=0;z<f.length;z++){a=f[z].getElementsByTagName("li");var r=0;for(t=0;t<a.length;t++)(l=a[t].getElementsByClassName("shared-files-main-elements")[0])&&l.textContent.toUpperCase().indexOf(i)>-1?(a[t].style.display="",o++,r++):(a[t].style.display="none");f[z].parentElement.style.display=0==r?"none":""}""==s.val()?(e("."+n+" #shared-files-nothing-found").hide(),e("."+n+" #shared-files-files-found").hide(),e("."+n+" .shared-files-all-files-and-categories").hide()):0==o?(e("."+n+" #shared-files-nothing-found").show(),e("."+n+" #shared-files-files-found").hide(),e("."+n+" .shared-files-all-files-and-categories").show()):(e("."+n+" #shared-files-nothing-found").hide(),e("."+n+" #shared-files-files-found").html(o+" "+(o>1?e("."+n+" #shared-files-more-than-one-file-found").html():e("."+n+" #shared-files-one-file-found").html())),e("."+n+" #shared-files-files-found").show(),e("."+n+" .shared-files-all-files-and-categories").show())})),e(".shared-files-search-files-v2").keyup((function(){var s,i,a,t,l,n=e(this).data("elem-class");i=(s=e("."+n+" .shared-files-search-files-v2")).val().toUpperCase(),e("."+n+" #shared-files-all-files"),a=e("."+n+" #shared-files-all-files li");var f=0,o=0;for(t=0;t<a.length;t++)(l=a[t].getElementsByClassName("shared-files-main-elements")[0])&&l.textContent.toUpperCase().indexOf(i)>-1?(a[t].style.display="",o++):(a[t].style.display="none",f++);""==s.val()?(e("."+n+" #shared-files-nothing-found").hide(),e("."+n+" #shared-files-files-found").hide(),e("."+n+" #myList").show(),e("."+n+" #shared-files-pagination").show(),e("."+n+" .shared-files-pagination-improved").show(),e("."+n+" #shared-files-all-files").hide()):a.length==f?(e("."+n+" #shared-files-nothing-found").show(),e("."+n+" #shared-files-files-found").hide(),e("."+n+" #myList").hide(),e("."+n+" #shared-files-pagination").hide(),e("."+n+" .shared-files-pagination-improved").hide(),e("."+n+" #shared-files-all-files").show()):(e("."+n+" #shared-files-nothing-found").hide(),e("."+n+" #shared-files-files-found").html(o+" "+(o>1?e("."+n+" #shared-files-more-than-one-file-found").html():e("."+n+" #shared-files-one-file-found").html())),e("."+n+" #shared-files-files-found").show(),e("."+n+" #myList").hide(),e("."+n+" #shared-files-pagination").hide(),e("."+n+" .shared-files-pagination-improved").hide(),e("."+n+" #shared-files-all-files").show())}))}))}]);