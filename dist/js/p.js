!function(e){var s={};function i(a){if(s[a])return s[a].exports;var l=s[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,i),l.l=!0,l.exports}i.m=e,i.c=s,i.d=function(e,s,a){i.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,s){if(1&s&&(e=i(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var l in e)i.d(a,l,function(s){return e[s]}.bind(null,l));return a},i.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(s,"a",s),s},i.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},i.p="",i(i.s=0)}([function(e,s,i){"use strict";i.r(s);i(1),i(2),i(3),i(4),i(5),i(6),i(7),i(8),i(9),i(10),i(11),i(12)},function(e,s,i){},function(e,s,i){},function(e,s,i){},function(e,s,i){},function(e,s,i){},function(e,s,i){},function(e,s,i){},function(e,s,i){},function(e,s,i){},function(e,s,i){},function(e,s,i){},function(e,s){jQuery((function(e){e(".shared-files-frontend-file-upload.shared-files-frontend-file-upload-ajax-active").submit((function(s){var a=e(this).closest(".shared-files-main-container").data("elem-class"),l=e(this)[0],t=l.elements._SF_GOTO.value;e("."+a+" .sf-public-file-upload-submit").hide(),e("."+a+" .shared-files-ajax-upload-progress-bar-container").show();var n=new FormData(l);if(void 0!==l.elements["_sf_files[]"]){var f=l.elements["_sf_files[]"].files;for(i=0;i<f.length;i++)n.append("file",l.elements["_sf_files[]"].files[i])}else void 0!==l.elements._sf_file&&n.append("file",l.elements._sf_file.files);return e("."+a+" .shared-files-ajax-upload-phase-1").show(),e.ajax({xhr:function(){var s=new window.XMLHttpRequest;return s.upload.addEventListener("progress",(function(s){if(s.lengthComputable){var i=s.loaded/s.total;i=parseInt(100*i),e("."+a+" .shared-files-progress-bar").width(i+"%"),e("."+a+" .shared-files-progress-bar").html(i+"%"),100===i&&(e("."+a+" .shared-files-progress-bar").addClass("shared-files-progress-bar-green"),e("."+a+" .shared-files-ajax-upload-phase-2").show())}}),!1),s},url:t,type:"POST",data:n,contentType:!1,processData:!1,success:function(s){e("."+a+" .shared-files-ajax-upload-phase-2 img").hide(),e("."+a+" .shared-files-ajax-upload-phase-3").show()}}),!1})),e(".sf-public-file-upload-container input[type=checkbox]").prop("disabled",!1),e(".sf-termlist input[type=checkbox]").click((function(){this.checked?e(this).parents("li").children().children("input[type=checkbox]").prop("checked",!0):e(this).parents("li").children().children("input[type=checkbox]").prop("checked",!1)})),e(document).on("click",".shared-files-add-to-favorites",(function(s){s.preventDefault();var i={action:"sf_add_to_favorites",file_id:e(this).data("file-id")},a=e(this).parent();jQuery.post(ajaxurl,i,(function(e){var s=e.replace(/0$/,"");a.html(s)}))})),e(document).on("click",".shared-files-delete-from-favorites",(function(s){s.preventDefault();var i={action:"sf_delete_from_favorites",file_id:e(this).data("file-id")},a=e(this).parent();jQuery.post(ajaxurl,i,(function(e){var s=e.replace(/0$/,"");a.html(s)}))})),e(document).on("click",".shared-files-modal-container",(function(s){if(s.target===this){var i=e(this).data("file-id");i?e(".shared-files-modal-container-"+i).hide():e(".shared-files-modal-container").hide()}})),e(document).on("click",".shared-files-close-modal",(function(s){s.preventDefault();var i=e(this).data("file-id");i?e(".shared-files-modal-container-"+i).hide():e(".shared-files-modal-container").hide()})),e(document).on("click",".shared-files-edit-file",(function(s){s.preventDefault();var i=e(this).data("file-id"),a=".shared-files-modal-container-edit-file-"+i,l="shared-files-description-editor-file-"+i;tinyMCE.execCommand("mceRemoveEditor",!1,"shared-files-editor-"+i),tinyMCE.editors.length=0,tinyMCE.init({mode:"specific_textareas",elements:"pre-details",theme:"modern",skin:"lightgray",menubar:!1,statusbar:!1,toolbar:["bold italic underline | alignleft aligncenter alignright | bullist numlist outdent indent | undo redo | link"],plugins:"paste, lists, link",paste_auto_cleanup_on_paste:!0,paste_postprocess:function(e,s){s.node.innerHTML=s.node.innerHTML.replace(/&nbsp;+/gi," ")},editor_selector:l}),e(a).show()})),e(document).on("click","a.shared-files-file-title, a.shared-files-preview-image",(function(s){var i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),a=e(this).data("file-type"),l=e(this).data("file-url"),t=e(this).data("external-url"),n=e(this).attr("href");if(e(this).data("image-url")&&(n=e(this).data("image-url")),a.startsWith("video")&&!i){s.preventDefault();var f=l,r=e(this).data("video-url-redir");r&&(f=r);var o='<video preload controls autoplay><source src="'+f+'" /></video>',d=basicLightbox.create(o);jQuery.post(l,{only_meta:1},(function(e){})),d.show()}else if("youtube"==a&&t){s.preventDefault();var h=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/),c=h&&11===h[2].length?h[2]:null,u=basicLightbox.create('<iframe allow="autoplay" src="//www.youtube.com/embed/'+c+'?autoplay=1" width="560" height="315" frameborder="0" allowfullscreen style="width: 560px;"></iframe>');jQuery.post(l,{youtube:1},(function(e){})),u.show()}else if("image"==a){s.preventDefault(),basicLightbox.create('<img src="'+n+'" />').show(),l&&jQuery.post(l,{only_meta:1},(function(e){}))}})),e(".shared-files-category-select, .shared-files-tag-select, .shared-files-custom-field-select").change((function(){var s=e(this).closest("form").data("elem-class"),i="";(i=e(this).closest("form").find('select[name="sf_category"]').val())||(i=e(this).closest("form").find('input[name="sf_category"]').val());var a={action:"sf_get_files",sf_category:i,sf_tag:e(this).closest("form").find('select[name="sf_tag"]').val(),atts:e(this).closest("form").find('input[name="atts"]').val(),cf_1:e(this).closest("form").find('select[name="cf_1"]').val(),cf_2:e(this).closest("form").find('select[name="cf_2"]').val(),cf_3:e(this).closest("form").find('select[name="cf_3"]').val(),cf_4:e(this).closest("form").find('select[name="cf_4"]').val(),cf_5:e(this).closest("form").find('select[name="cf_5"]').val(),cf_6:e(this).closest("form").find('select[name="cf_6"]').val(),cf_7:e(this).closest("form").find('select[name="cf_7"]').val(),cf_8:e(this).closest("form").find('select[name="cf_8"]').val(),cf_9:e(this).closest("form").find('select[name="cf_9"]').val(),cf_10:e(this).closest("form").find('select[name="cf_10"]').val(),cf_11:e(this).closest("form").find('select[name="cf_11"]').val(),cf_12:e(this).closest("form").find('select[name="cf_12"]').val(),cf_13:e(this).closest("form").find('select[name="cf_13"]').val(),cf_14:e(this).closest("form").find('select[name="cf_14"]').val(),cf_15:e(this).closest("form").find('select[name="cf_15"]').val(),cf_16:e(this).closest("form").find('select[name="cf_16"]').val(),cf_17:e(this).closest("form").find('select[name="cf_17"]').val(),cf_18:e(this).closest("form").find('select[name="cf_18"]').val(),cf_19:e(this).closest("form").find('select[name="cf_19"]').val(),cf_20:e(this).closest("form").find('select[name="cf_20"]').val()};jQuery.post(ajaxurl,a,(function(i){var a=i.replace(/0$/,"");e("."+s+" .shared-files-non-ajax").hide(),e("."+s+" .shared-files-pagination").hide(),e("."+s+" .shared-files-pagination-improved").hide(),e("."+s+" .shared-files-ajax-list").empty().append(a);var l="./?"+e("."+s+" .shared-files-ajax-form select").serialize();window.history.pushState({urlPath:l},"",l)}))})),e(document).on("click",".shared-files-tag-link",(function(s){s.preventDefault();var i,a,l=e(this).closest(".shared-files-main-container").data("elem-class"),t="",n="";(t=e("."+l+" .shared-files-ajax-form").find('select[name="sf_category"]').val())||(t=e("."+l+" .shared-files-ajax-form").find('input[name="sf_category"]').val()),i=e(this).data("tag-slug"),a=e("."+l+" .shared-files-ajax-form").find('input[name="atts"]').val(),1==e(this).data("hide-description")&&(n=1);var f={action:"sf_get_files",sf_category:t,sf_tag:i,hide_description:n,atts:a};jQuery.post(ajaxurl,f,(function(s){var a=s.replace(/0$/,"");e("."+l+" .shared-files-pagination").hide(),e("."+l+" .shared-files-pagination-improved").hide(),e("."+l+" .shared-files-non-ajax").hide(),e("."+l+" .shared-files-category-select").val(e("."+l+" .shared-files-category-select option:first").val()),e("."+l+" .shared-files-ajax-list").empty().append(a);var t="";t=i?"./?sf_tag="+i:"./?sf_tag=",window.history.pushState({urlPath:t},"",t)}))})),e(".shared-files-search-files").keyup((function(s){var i,a,l,t,n,f=e(this).data("elem-class");a=(i=e("."+f+" .shared-files-search-files")).val().toUpperCase(),e("."+f+" .shared-files-all-files"),l=e("."+f+" .shared-files-all-files li");var r=0,o=0;for(t=0;t<l.length;t++)(n=l[t].getElementsByClassName("shared-files-main-elements")[0])&&n.textContent.toUpperCase().indexOf(a)>-1?(l[t].style.display="",o++):(l[t].style.display="none",r++);""==i.value?(e("."+f+" .shared-files-nothing-found").hide(),e("."+f+" .shared-files-files-found").hide(),e("."+f+" .shared-files-main-file-list").show(),e("."+f+" .shared-files-pagination").show(),e("."+f+" .shared-files-pagination-improved").show(),e("."+f+" .shared-files-all-files").hide()):l.length==r?(e("."+f+" .shared-files-nothing-found").show(),e("."+f+" .shared-files-files-found").hide(),e("."+f+" .shared-files-main-file-list").hide(),e("."+f+" .shared-files-pagination").hide(),e("."+f+" .shared-files-pagination-improved").hide(),e("."+f+" .shared-files-all-files").show()):(e("."+f+" .shared-files-nothing-found").hide(),e("."+f+" .shared-files-files-found").html(o+" "+(o>1?e("."+f+" .shared-files-more-than-one-file-found").html():e("."+f+" .shared-files-one-file-found").html())),e("."+f+" .shared-files-files-found").show(),e("."+f+" .shared-files-main-file-list").hide(),e("."+f+" .shared-files-pagination").hide(),e("."+f+" .shared-files-pagination-improved").hide(),e("."+f+" .shared-files-all-files").show())})),e(".shared-files-simple-search").keyup((function(){var s,i,a,l,t,n=e(this).data("elem-class");i=(s=e("."+n+" .shared-files-simple-search")).val().toUpperCase(),e("."+n+" .shared-files-simple-search-all-files .shared-files-simple-list"),a=e("."+n+" .shared-files-simple-search-all-files .shared-files-simple-list .shared-files-simple-list-row");var f=0,r=0;for(l=0;l<a.length;l++)(t=a[l])&&t.textContent.toUpperCase().indexOf(i)>-1?(a[l].style.display="",r++):(a[l].style.display="none",f++);""==s.value?(e("."+n+" .shared-files-simple-ajax-results").show(),e("."+n+" .shared-files-simple-search-all-files").hide(),e("."+n+" .shared-files-simple-nothing-found").hide(),e("."+n+" .shared-files-files-found").hide(),e("."+n+" .shared-files-pagination").show(),e("."+n+" .shared-files-pagination-improved").show()):a.length==f?(e("."+n+" .shared-files-simple-ajax-results").hide(),e("."+n+" .shared-files-simple-search-all-files").hide(),e("."+n+" .shared-files-simple-nothing-found").show(),e("."+n+" .shared-files-files-found").hide(),e("."+n+" .shared-files-pagination").hide(),e("."+n+" .shared-files-pagination-improved").hide()):(e("."+n+" .shared-files-simple-ajax-results").hide(),e("."+n+" .shared-files-simple-search-all-files").show(),e("."+n+" .shared-files-simple-nothing-found").hide(),e("."+n+" .shared-files-files-found").html(r+" "+(r>1?e("."+n+" .shared-files-more-than-one-file-found").html():e("."+n+" .shared-files-one-file-found").html())),e("."+n+" .shared-files-files-found").show(),e("."+n+" .shared-files-pagination").hide(),e("."+n+" .shared-files-pagination-improved").hide())})),e(document).on("click",".shared-files-accordion-category-title-container",(function(s){var i=e(this).data("elem-class"),a=e(this).data("category-id"),l="."+i+" .shared-files-accordion-category-"+a,t="."+i+" .shared-files-accordion-contents-"+a;e(t).is(":visible")?(e(l).removeClass("shared-files-accordion-category-open"),e(l).addClass("shared-files-accordion-category-closed"),e(t).hide()):(e(l).addClass("shared-files-accordion-category-open"),e(l).removeClass("shared-files-accordion-category-closed"),e(t).show())})),e(".shared-files-search-all-files").keyup((function(){var s,i,a,l,t,n=e(this).data("elem-class");i=(s=e("."+n+" .shared-files-search-all-files")).val().toUpperCase();var f=e("."+n+" .shared-files-in-category"),r=0;for(z=0;z<f.length;z++){a=f[z].getElementsByTagName("li");var o=0;for(l=0;l<a.length;l++)(t=a[l].getElementsByClassName("shared-files-main-elements")[0])&&t.textContent.toUpperCase().indexOf(i)>-1?(a[l].style.display="",r++,o++):(a[l].style.display="none");f[z].parentElement.style.display=0==o?"none":""}""==s.val()?(e("."+n+" .shared-files-nothing-found").hide(),e("."+n+" .shared-files-files-found").hide(),e("."+n+" .shared-files-all-files-and-categories").hide()):0==r?(e("."+n+" .shared-files-nothing-found").show(),e("."+n+" .shared-files-files-found").hide(),e("."+n+" .shared-files-all-files-and-categories").show()):(e("."+n+" .shared-files-nothing-found").hide(),e("."+n+" .shared-files-files-found").html(r+" "+(r>1?e("."+n+" .shared-files-more-than-one-file-found").html():e("."+n+" .shared-files-one-file-found").html())),e("."+n+" .shared-files-files-found").show(),e("."+n+" .shared-files-all-files-and-categories").show())})),e(".shared-files-search-files-v2").keyup((function(){var s,i,a,l,t,n=e(this).data("elem-class");i=(s=e("."+n+" .shared-files-search-files-v2")).val().toUpperCase(),e("."+n+" .shared-files-all-files"),a=e("."+n+" .shared-files-all-files li");var f=0,r=0;for(l=0;l<a.length;l++)(t=a[l].getElementsByClassName("shared-files-main-elements")[0])&&t.textContent.toUpperCase().indexOf(i)>-1?(a[l].style.display="",r++):(a[l].style.display="none",f++);""==s.val()?(e("."+n+" .shared-files-nothing-found").hide(),e("."+n+" .shared-files-files-found").hide(),e("."+n+" .shared-files-main-file-list").show(),e("."+n+" .shared-files-pagination").show(),e("."+n+" .shared-files-pagination-improved").show(),e("."+n+" .shared-files-all-files").hide()):a.length==f?(e("."+n+" .shared-files-nothing-found").show(),e("."+n+" .shared-files-files-found").hide(),e("."+n+" .shared-files-main-file-list").hide(),e("."+n+" .shared-files-pagination").hide(),e("."+n+" .shared-files-pagination-improved").hide(),e("."+n+" .shared-files-all-files").show()):(e("."+n+" .shared-files-nothing-found").hide(),e("."+n+" .shared-files-files-found").html(r+" "+(r>1?e("."+n+" .shared-files-more-than-one-file-found").html():e("."+n+" .shared-files-one-file-found").html())),e("."+n+" .shared-files-files-found").show(),e("."+n+" .shared-files-main-file-list").hide(),e("."+n+" .shared-files-pagination").hide(),e("."+n+" .shared-files-pagination-improved").hide(),e("."+n+" .shared-files-all-files").show())}))}))}]);