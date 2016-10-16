"use strict";!function(t,e){function n(e,n){e.on("mouseover",function(){t(this).hasClass(n)||t(this).addClass(n)}),e.on("mouseleave",function(){t(this).hasClass(n)&&t(this).removeClass(n)})}function o(e,n){e.on("click",function(){e.removeClass(n),t(this).hasClass(n)||t(this).addClass(n)})}function a(){var e=t(".scroll-button");e.on("click",function(){t(this).removeClass("infinite flash"),t(this).hasClass("pulse")?t(this).removeClass("pulse").addClass("flash"):t(this).addClass("flash")})}function i(e,n){var o=0,a=t("."+e);a.each(function(){t(this).delay(o).fadeIn(1e3).addClass(n),o+=500})}function s(){t("a").on("click",function(e){if(""!==this.hash){e.preventDefault();var n=this.hash;t("html, body").animate({scrollTop:t(n).offset().top},800,function(){window.location.hash=n})}})}function c(e,n,o,a){var i=t(window).scrollTop();t(window).scroll({previousTop:0},function(){var a=e.offset().top-20;t(window).scrollTop()>a&&(i<this.previousTop||t(n).addClass(o)),this.previousTop=i}),"function"==typeof a&&a()}function l(){var t=arguments;t.length<=0||!function e(n){n>=t.length||"function"!=typeof t[n]||window.setTimeout(function(){t[n](),e(n+1)},500)}(0)}function r(){var e=t(".header-bar--menu-btn");e.on("click",function(e){var n="nav-el",o="nav-el--active";i(n,o),t("html").one("click",function(){t("."+n).removeClass("nav-el--active")}),e.stopPropagation()})}function d(){var e=t(".header-top--left-avatar"),n=t(".header-top--left-name"),o=t(".header-top--left-occupation"),a=t(".header-top--right--dummy"),i=t(".header-top--right--dummy-button"),s=t(".header-bar");setTimeout(function(){e.addClass("animated bounceIn"),setTimeout(function(){n.addClass("animated fadeIn"),setTimeout(function(){o.addClass("animated fadeInUp"),setTimeout(function(){a.addClass("animated fadeInRight"),setTimeout(function(){i.addClass("animated fadeInRight"),setTimeout(function(){s.addClass("animated fadeInDown")},100)},150)},200)},250)},250)},500)}function f(){var e=t(window).scrollTop(),n=t("#overview");t(window).scroll({previousTop:0},function(){var o=n.offset().top-20;t(window).scrollTop()>o&&(e<this.previousTop||l(function(){var e=t(".showOverview");e.each(function(e){var n=t(this);setTimeout(function(){n.addClass("animated bounceIn")},200*e)})},function(){var e=t(".showOverviewText");e.each(function(e){var n=t(this);setTimeout(function(){n.addClass("animated fadeInUp")},200*e)})})),this.previousTop=e})}function u(){var e=t(".main-element"),a="animated fadeIn element--hover",s="animated fadeOut element--click";i("main-element"),n(e,a),o(e,s)}function h(){function n(n){var o=e.template(t("#catTemp").html()),a=t("#navAjax"),i=Array.prototype.slice.call(n.projects),s=t(document.createDocumentFragment()),c=i.reduce(function(t,e){var n=t.filter(function(t){return e.category==t.category});return 0==n.length&&t.push(e),t},[]);c.forEach(function(t){s.append(o({category:t.category}))}),a.append(s),d=t(".category-btn")}function o(n){var o=e.template(t("#projTemp").html()),a=t("#galleryAjax"),i=n.projects,s=t(document.createDocumentFragment());i.forEach(function(t){s.append(o({id:t.id,category:t.category,name:t.name,desc:t.desc,repo:t.repo}))}),a.append(s),r=t(".project-el")}function a(){var e=t(window).scrollTop(),n=t("#projects"),o=t(".project-el"),a=t(".category-btn");t(window).scroll({previousTop:0},function(){var i=n.offset().top-20;t(window).scrollTop()>i&&(e<this.previousTop||o.each(function(e){var n=t(this);setTimeout(function(){n.addClass("animated fadeIn")},150*e)})),t(window).scrollTop()>i&&(e<this.previousTop||a.each(function(e){var n=t(this);setTimeout(function(){n.addClass("inactive")},150*e)})),this.previousTop=e})}function i(){function e(){i.css("opacity","0")}var n=t(".lightbox"),o=t(".lightbox-wrapper--text"),a=t(".lightbox-wrapper--img"),i=t(".spinner");r.on("click",function(s){var c=t(this),l=c.find(".project-el--thumb-overlay h3").text(),r=c.find(".project-el--thumb-overlay p").text(),d=c.find(".project-el--thumb img").attr("data-bigSrc"),f=c.find(".project-el--thumb img").attr("data-repo");n.addClass("animated fadeIn").css("pointer-events","all"),setTimeout(function(){e(),setTimeout(function(){a.html('<img src="'+d+'" alt="'+l+'" />'),o.html('<a href="'+f+'" target="_blank"><h3 class="animated flash">'+l+"</h3></a><p>"+r+"</p>")},300)},1e3),t("html").one("click",function(){n.removeClass("animated fadeIn").css("pointer-events","none"),a.html(""),o.html(""),i.css("opacity","1"),t("body").removeClass("stop-scrolling")}),t("body").hasClass("stop-scrolling")||t("body").addClass("stop-scrolling"),s.stopPropagation()})}function s(){var e=t(".category-btn"),n=(t(".all-btn"),t(".project-el"));e.on("click",function(){var o=t(this).attr("data-category");t(this).hasClass("all-btn")?n.show():n.each(function(){var e=t(this),n=e.data("category");n==o?e.show():e.hide()}),e.removeClass("active"),t(this).addClass("active")})}function c(t){o(t),n(t),a(),i(),s()}function l(){console.log("Whooops! Something went wrong with loading the JSON file data for the Projects Gallery!")}var r,d;t.when(t.ajax("projects.json")).then(c,l)}function p(){var e=t(".nav-wrapper-el");e.each(function(){var e=t(this),n=e.attr("data-scrollTo"),o=t(window).scrollTop();t(window).scroll({previousTop:0},function(){var a=t("#"+n).offset().top-20;if(t(window).scrollTop()>a)if(o<this.previousTop){var i=e.find("use");i.attr("xlink:href","symbol-defs.svg#icn-radio-unchecked")}else{var i=e.find("use");i.attr("xlink:href","symbol-defs.svg#icn-radio-checked")}this.previousTop=o})})}function v(){function n(n){var o=e.template(t("#testTemp").html()),a=t("#testimonialsAjax"),i=n.testimonials,s=t(document.createDocumentFragment());i.forEach(function(t){s.append(o({id:t.id,content:t.quote,author:t.author,imgSrc:t.imgSrc}))}),a.append(s)}function o(t){n(t),console.log("Yay! Testimonials loaded!"),m()}function a(){console.log("ups! Testimonials didnt load properly")}t.when(t.ajax("testimonials.json")).then(o,a)}function m(){var e=t("#slides li").outerWidth(),n=e*-1;t("#slides li:first").before(t("#slides li:last")),t("#slides ul").css({left:n}),t("#next").click(function(){var o=parseInt(t("#slides ul").css("left"))+e;return t("#slides ul").animate({left:o},400,function(){t("#slides li:first").before(t("#slides li:last")),t("#slides ul").css({left:n})}),!1}),t("#prev").click(function(){var o=parseInt(t("#slides ul").css("left"))-e;return t("#slides ul").animate({left:o},400,function(){t("#slides li:last").after(t("#slides li:first")),t("#slides ul").css({left:n})}),!1})}function g(){function n(n){var o=e.template(t("#skillsTemp").html()),a=t("#webdev"),i=t("#design"),s=Array.prototype.slice.call(n.skills),c=t(document.createDocumentFragment()),l=t(document.createDocumentFragment());s.forEach(function(t){"webdev"==t.category?c.append(o({id:t.id,name:t.name,cat:t.category,level:t.level,imgSrc:t.imgSrc})):"design"==t.category?l.append(o({id:t.id,name:t.name,cat:t.category,level:t.level,imgSrc:t.imgSrc})):console.log("sad element without a category screaaaams to You! @_@!!")}),a.append(c),i.append(l),r=t(".el")}function o(){var e=t(".el[data-cat='webdev']"),n=t(".el[data-cat='design']"),o=e.length;n.length;e.each(function(){var e=100/o+"%",n=t(this);n.css("width",e)})}function a(){var e=t("#scroll-skills"),n=t(".skills-container"),o="animated fadeIn",a=t(window).scrollTop();t(window).scroll({previousTop:0},function(){var i=e.offset().top-20;t(window).scrollTop()>i&&(a<this.previousTop||(t(n).addClass(o),s(function(){t(".el--bar").each(function(e){var n=t(this),o=100,a=+t(this).find(".el--bar-fill").attr("data-skillLevel"),i=o-a;setTimeout(function(){n.find(".el--bar-fill").css("transform","translateY("+i.toString()+"%)")},250*e)})},function(){var e=t(".el--bar-icn");e.each(function(e){var n=t(this);setTimeout(function(){n.addClass("el--bar-icn-active")},250*e)})}))),this.previousTop=a})}function i(){var e=t(".el--bar");e.each(function(){var e=t(this).find(".el--bar-icn");t(this).on("mouseover",function(){e.addClass("el--bar-icn-active")})})}function s(){var t=arguments;t.length<=0||!function e(n){n>=t.length||"function"!=typeof t[n]||window.setTimeout(function(){t[n](),e(n+1)},500)}(0)}function c(t){console.log("Yes! Success!"),n(t),a(),i(),o()}function l(){console.log("Whooops! Something went wrong with loading the JSON file data for S K I L L S!")}var r;t.when(t.ajax("skills.json")).then(c,l)}function w(){var e=t(".offer-nav-icn"),n=t("#scroll-skills"),o=".offer",a="animated fadeInUp";e.on("click",function(){var e=t(this),n=t(".offer-nav-icn"),o=t(".offer-content-el"),a=e.data("type");n.each(function(){var n=t(this);n.hasClass("active")&&n.removeClass("active"),e.hasClass("active")||e.addClass("active")}),o.each(function(){var e=t(this),n=e.data("type");e.removeClass("active"),e.hasClass("active")?e.removeClass("active"):n==a&&e.addClass("active")})}),c(n,o,a)}h(),g(),v(),r(),d(),u(),a(),s(),f(),p(),w()}(window.$,window._);