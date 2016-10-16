"use strict";!function(t,e){function n(e,n){e.on("mouseover",function(){t(this).hasClass(n)||t(this).addClass(n)}),e.on("mouseleave",function(){t(this).hasClass(n)&&t(this).removeClass(n)})}function a(e,n){e.on("click",function(){e.removeClass(n),t(this).hasClass(n)||t(this).addClass(n)})}function o(){var e=t(".scroll-button");e.on("click",function(){t(this).removeClass("infinite flash"),t(this).hasClass("pulse")?t(this).removeClass("pulse").addClass("flash"):t(this).addClass("flash")})}function i(e,n){var a=0,o=t("."+e);o.each(function(){t(this).delay(a).fadeIn(1e3).addClass(n),a+=500})}function s(){t("a").on("click",function(e){if(""!==this.hash){e.preventDefault();var n=this.hash;t("html, body").animate({scrollTop:t(n).offset().top},800,function(){window.location.hash=n})}})}function c(){var t=arguments;t.length<=0||!function e(n){n>=t.length||"function"!=typeof t[n]||window.setTimeout(function(){t[n](),e(n+1)},500)}(0)}function l(){var e=t(".header-bar--menu-btn");e.on("click",function(e){var n="nav-el",a="nav-el--active";i(n,a),t("html").one("click",function(){t("."+n).removeClass("nav-el--active")}),e.stopPropagation()})}function r(){var e=t(".header-top--left-avatar"),n=t(".header-top--left-name"),a=t(".header-top--left-occupation"),o=t(".header-top--right--dummy"),i=t(".header-top--right--dummy-button"),s=t(".header-bar");setTimeout(function(){e.addClass("animated bounceIn"),setTimeout(function(){n.addClass("animated fadeIn"),setTimeout(function(){a.addClass("animated fadeInUp"),setTimeout(function(){o.addClass("animated fadeInRight"),setTimeout(function(){i.addClass("animated fadeInRight"),setTimeout(function(){s.addClass("animated fadeInDown")},100)},150)},200)},250)},250)},500)}function d(){var e=t(window).scrollTop(),n=t("#overview");t(window).scroll({previousTop:0},function(){var a=n.offset().top-20;t(window).scrollTop()>a&&(e<this.previousTop||c(function(){var e=t(".showOverview");e.each(function(e){var n=t(this);setTimeout(function(){n.addClass("animated bounceIn")},200*e)})},function(){var e=t(".showOverviewText");e.each(function(e){var n=t(this);setTimeout(function(){n.addClass("animated fadeInUp")},200*e)})})),this.previousTop=e})}function u(){var e=t(".main-element"),o="animated fadeIn element--hover",s="animated fadeOut element--click";i("main-element"),n(e,o),a(e,s)}function f(){function n(n){var a=e.template(t("#catTemp").html()),o=t("#navAjax"),i=Array.prototype.slice.call(n.projects),s=t(document.createDocumentFragment()),c=i.reduce(function(t,e){var n=t.filter(function(t){return e.category==t.category});return 0==n.length&&t.push(e),t},[]);c.forEach(function(t){s.append(a({category:t.category}))}),o.append(s),d=t(".category-btn")}function a(n){var a=e.template(t("#projTemp").html()),o=t("#galleryAjax"),i=n.projects,s=t(document.createDocumentFragment());i.forEach(function(t){s.append(a({id:t.id,category:t.category,name:t.name,desc:t.desc,repo:t.repo}))}),o.append(s),r=t(".project-el")}function o(){var e=t(window).scrollTop(),n=t("#projects"),a=t(".project-el"),o=t(".category-btn");t(window).scroll({previousTop:0},function(){var i=n.offset().top-20;t(window).scrollTop()>i&&(e<this.previousTop||a.each(function(e){var n=t(this);setTimeout(function(){n.addClass("animated fadeIn")},150*e)})),t(window).scrollTop()>i&&(e<this.previousTop||o.each(function(e){var n=t(this);setTimeout(function(){n.addClass("inactive")},150*e)})),this.previousTop=e})}function i(){function e(){i.css("opacity","0")}var n=t(".lightbox"),a=t(".lightbox-wrapper--text"),o=t(".lightbox-wrapper--img"),i=t(".spinner");r.on("click",function(s){var c=t(this),l=c.find(".project-el--thumb-overlay h3").text(),r=c.find(".project-el--thumb-overlay p").text(),d=c.find(".project-el--thumb img").attr("data-bigSrc"),u=c.find(".project-el--thumb img").attr("data-repo");n.addClass("animated fadeIn").css("pointer-events","all"),setTimeout(function(){e(),setTimeout(function(){o.html('<img src="'+d+'" alt="'+l+'" />'),a.html('<a href="'+u+'" target="_blank"><h3 class="animated flash">'+l+"</h3></a><p>"+r+"</p>")},300)},1e3),t("html").one("click",function(){n.removeClass("animated fadeIn").css("pointer-events","none"),o.html(""),a.html(""),i.css("opacity","1"),t("body").removeClass("stop-scrolling")}),t("body").hasClass("stop-scrolling")||t("body").addClass("stop-scrolling"),s.stopPropagation()})}function s(){var e=t(".category-btn"),n=(t(".all-btn"),t(".project-el"));e.on("click",function(){var a=t(this).attr("data-category");t(this).hasClass("all-btn")?n.show():n.each(function(){var e=t(this),n=e.data("category");n==a?e.show():e.hide()}),e.removeClass("active"),t(this).addClass("active")})}function c(t){a(t),n(t),o(),i(),s()}function l(){console.log("Whooops! Something went wrong with loading the JSON file data for the Projects Gallery!")}var r,d;t.when(t.ajax("projects.json")).then(c,l)}function h(){var e=t(".nav-wrapper-el");e.each(function(){var e=t(this),n=e.attr("data-scrollTo"),a=t(window).scrollTop();t(window).scroll({previousTop:0},function(){var o=t("#"+n).offset().top-20;if(t(window).scrollTop()>o)if(a<this.previousTop){var i=e.find("use");i.attr("xlink:href","symbol-defs.svg#icn-radio-unchecked")}else{var i=e.find("use");i.attr("xlink:href","symbol-defs.svg#icn-radio-checked")}this.previousTop=a})})}function p(){function n(n){var a=e.template(t("#testTemp").html()),o=t("#testimonialsAjax"),i=n.testimonials,s=t(document.createDocumentFragment());i.forEach(function(t){s.append(a({id:t.id,content:t.quote,author:t.author,imgSrc:t.imgSrc}))}),o.append(s)}function a(t){n(t),console.log("Yay! Testimonials loaded!"),m()}function o(){console.log("ups! Testimonials didnt load properly")}t.when(t.ajax("testimonials.json")).then(a,o)}function m(){var e=t("#slides li").outerWidth(),n=e*-1;t("#slides li:first").before(t("#slides li:last")),t("#slides ul").css({left:n}),t("#next").click(function(){var a=parseInt(t("#slides ul").css("left"))+e;return t("#slides ul").animate({left:a},400,function(){t("#slides li:first").before(t("#slides li:last")),t("#slides ul").css({left:n})}),!1}),t("#prev").click(function(){var a=parseInt(t("#slides ul").css("left"))-e;return t("#slides ul").animate({left:a},400,function(){t("#slides li:last").after(t("#slides li:first")),t("#slides ul").css({left:n})}),!1})}function v(){function n(n){var a=e.template(t("#skillsTemp").html()),o=t("#webdev"),i=t("#design"),s=Array.prototype.slice.call(n.skills),c=t(document.createDocumentFragment()),l=t(document.createDocumentFragment());s.forEach(function(t){"webdev"==t.category?c.append(a({id:t.id,name:t.name,cat:t.category,level:t.level,imgSrc:t.imgSrc})):"design"==t.category?l.append(a({id:t.id,name:t.name,cat:t.category,level:t.level,imgSrc:t.imgSrc})):console.log("sad element without a category screaaaams to You! @_@!!")}),o.append(c),i.append(l),r=t(".el")}function a(){var e=t(".el[data-cat='webdev']"),n=t(".el[data-cat='design']"),a=e.length;n.length;e.each(function(){var e=100/a+"%",n=t(this);n.css("width",e)})}function o(){var e=t("#scroll-skills"),n=t(".skills-container"),a="animated fadeIn",o=t(window).scrollTop();t(window).scroll({previousTop:0},function(){var i=e.offset().top-20;t(window).scrollTop()>i&&(o<this.previousTop||(t(n).addClass(a),s(function(){t(".el--bar").each(function(e){var n=t(this),a=100,o=+t(this).find(".el--bar-fill").attr("data-skillLevel"),i=a-o;setTimeout(function(){n.find(".el--bar-fill").css("transform","translateY("+i.toString()+"%)")},250*e)})},function(){var e=t(".el--bar-icn");e.each(function(e){var n=t(this);setTimeout(function(){n.addClass("el--bar-icn-active")},250*e)})}))),this.previousTop=o})}function i(){var e=t(".el--bar");e.each(function(){var e=t(this).find(".el--bar-icn");t(this).on("mouseover",function(){e.addClass("el--bar-icn-active")})})}function s(){var t=arguments;t.length<=0||!function e(n){n>=t.length||"function"!=typeof t[n]||window.setTimeout(function(){t[n](),e(n+1)},500)}(0)}function c(t){console.log("Yes! Success!"),n(t),o(),i(),a()}function l(){console.log("Whooops! Something went wrong with loading the JSON file data for S K I L L S!")}var r;t.when(t.ajax("skills.json")).then(c,l)}function g(){var e=t(".offer-nav-icn");e.on("click",function(){var e=t(this),n=t(".offer-nav-icn"),a=t(".offer-content-el"),o=e.data("type");n.each(function(){var n=t(this);n.hasClass("active")&&n.removeClass("active"),e.hasClass("active")||e.addClass("active")}),a.each(function(){var e=t(this),n=e.data("type");e.removeClass("active"),e.hasClass("active")?e.removeClass("active"):n==o&&e.addClass("active")})})}f(),v(),p(),l(),r(),u(),o(),s(),d(),h(),g()}(window.$,window._);