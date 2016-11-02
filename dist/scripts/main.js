"use strict";!function(t,e){function n(){var e=t(".scroll-button");e.on("click",function(){t(this).removeClass("infinite flash"),t(this).hasClass("pulse")?t(this).removeClass("pulse").addClass("flash"):t(this).addClass("flash")})}function o(e,n){var o=0,i=t("."+e);i.each(function(){t(this).delay(o).fadeIn(1e3).addClass(n),o+=500})}function i(){t("a").on("click",function(e){if(""!==this.hash){e.preventDefault();var n=this.hash;t("html, body").animate({scrollTop:t(n).offset().top},800,function(){window.location.hash=n})}})}function a(e,n,o,i){var a=t(window).scrollTop();t(window).scroll({previousTop:0},function(){var i=e.offset().top-20;t(window).scrollTop()>i&&(a<this.previousTop||t(n).addClass(o)),this.previousTop=a}),"function"==typeof i&&i()}function s(){var t=arguments;t.length<=0||!function e(n){n>=t.length||"function"!=typeof t[n]||window.setTimeout(function(){t[n](),e(n+1)},500)}(0)}function c(){var e=t(".header-bar--menu-btn");e.on("click",function(e){var n="nav-el",i="nav-el--active";o(n,i),t("html").one("click",function(){t("."+n).removeClass("nav-el--active")}),e.stopPropagation()})}function l(){var e=t(".header-top--left-avatar"),n=t(".header-top--left-name"),o=t(".header-top--left-occupation"),i=t(".header-top--right--dummy"),a=t(".header-top--right--dummy-button"),s=t(".header-bar");setTimeout(function(){e.addClass("animated bounceIn"),setTimeout(function(){n.addClass("animated fadeIn"),setTimeout(function(){o.addClass("animated fadeInUp"),setTimeout(function(){i.addClass("animated fadeInRight"),setTimeout(function(){a.addClass("animated fadeInRight"),setTimeout(function(){s.addClass("animated fadeInDown")},100)},150)},200)},250)},250)},500)}function r(){var e=t(window).scrollTop(),n=t("#overview");t(window).scroll({previousTop:0},function(){var o=n.offset().top-20;t(window).scrollTop()>o&&(e<this.previousTop||s(function(){var e=t(".showOverview");e.each(function(e){var n=t(this);setTimeout(function(){n.addClass("animated bounceIn")},200*e)})},function(){var e=t(".showOverviewText");e.each(function(e){var n=t(this);setTimeout(function(){n.addClass("animated fadeInUp")},200*e)})})),this.previousTop=e})}function d(){o("main-element")}function f(){function n(n){var o=e.template(t("#catTemp").html()),i=t("#navAjax"),a=Array.prototype.slice.call(n.projects),s=t(document.createDocumentFragment()),c=a.reduce(function(t,e){var n=t.filter(function(t){return e.category==t.category});return 0==n.length&&t.push(e),t},[]);c.forEach(function(t){s.append(o({category:t.category}))}),i.append(s),d=t(".category-btn")}function o(n){var o=e.template(t("#projTemp").html()),i=t("#galleryAjax"),a=n.projects,s=t(document.createDocumentFragment());a.forEach(function(t){s.append(o({id:t.id,category:t.category,name:t.name,desc:t.desc,repo:t.repo,thumb:t.pics.pic[0].img}))}),i.append(s),r=t(".project-el")}function i(){var e=t(window).scrollTop(),n=t("#projects"),o=t(".project-el"),i=t(".category-btn");t(window).scroll({previousTop:0},function(){var a=n.offset().top-20;t(window).scrollTop()>a&&(e<this.previousTop||o.each(function(e){var n=t(this);setTimeout(function(){n.addClass("animated fadeIn")},150*e)})),t(window).scrollTop()>a&&(e<this.previousTop||i.each(function(e){var n=t(this);setTimeout(function(){n.addClass("inactive")},150*e)})),this.previousTop=e})}function a(e){var n=t(".lightbox"),o=t(".lightbox-wrapper--text"),i=t(".lightbox-wrapper--img"),a=t(".lightbox-miniatures"),s=t(".spinner"),c=e.projects;r.on("click",function(e){var l=t(this),r=l.find(".project-el--thumb-overlay h3").text(),d=l.find(".project-el--thumb-overlay p").text(),f=l.find(".project-el--thumb img").attr("data-bigSrc"),u=(l.find(".project-el--thumb img").attr("data-repo"),l.find(".project-el--thumb img").attr("data-id"));console.log(u),n.addClass("animated fadeIn").css("pointer-events","all"),setTimeout(function(){s.css("opacity","0"),setTimeout(function(){i.html('<img src="'+f+'" alt="'+r+'" />'),o.html("<h3>"+r+"</h3><p>"+d+"</p>"),c.forEach(function(t){if(t.id==u){var e=t.pics.pic;e.forEach(function(t){var e=t.img;a.append("<li class='animated fadeInUp'><img src='images/gallery/thumb/"+e+"'></li>")})}}),setTimeout(function(){var e=t(".lightbox-miniatures li");e.on("click",function(){var e=t(this).find("img").attr("src"),n=e.split("/");i.html('<img src="images/gallery/'+n[3]+'" />')})},100)},300)},1e3),t(".lightbox-quit").on("click",function(){n.removeClass("animated fadeIn").css("pointer-events","none"),i.html(""),o.html(""),a.html(""),s.css("opacity","1"),t("body").removeClass("stop-scrolling")}),t("body").hasClass("stop-scrolling")||t("body").addClass("stop-scrolling")})}function s(){var e=t(".category-btn"),n=(t(".all-btn"),t(".project-el"));e.on("click",function(){var o=t(this).attr("data-category");t(this).hasClass("all-btn")?n.show():n.each(function(){var e=t(this),n=e.data("category");n==o?e.show():e.hide()}),e.removeClass("active"),t(this).addClass("active")})}function c(t){o(t),n(t),i(),a(t),s()}function l(){console.log("Whooops! Something went wrong with loading the JSON file data for the Projects Gallery!")}var r,d;t.when(t.ajax("projects.json")).then(c,l)}function u(){var e=t(".nav-wrapper-el");e.each(function(){var e=t(this),n=e.attr("data-scrollTo"),o=t(window).scrollTop();t(window).scroll({previousTop:0},function(){var i=t("#"+n).offset().top-20;if(t(window).scrollTop()>i)if(o<this.previousTop){var a=e.find("use");a.attr("xlink:href","symbol-defs.svg#icn-radio-unchecked")}else{var a=e.find("use");a.attr("xlink:href","symbol-defs.svg#icn-radio-checked")}this.previousTop=o})})}function p(){function n(n){var o=e.template(t("#testTemp").html()),i=t("#testimonialsAjax"),a=n.testimonials,s=t(document.createDocumentFragment());a.forEach(function(t){s.append(o({id:t.id,content:t.quote,author:t.author,imgSrc:t.imgSrc}))}),i.append(s)}function o(t){n(t),console.log("Yay! Testimonials loaded!"),h()}function i(){console.log("ups! Testimonials didnt load properly")}t.when(t.ajax("testimonials.json")).then(o,i)}function h(){var e=t("#slides li").outerWidth(),n=e*-1;t("#slides li:first").before(t("#slides li:last")),t("#slides ul").css({left:n}),t("#next").click(function(){var o=parseInt(t("#slides ul").css("left"))+e;return t("#slides ul").animate({left:o},400,function(){t("#slides li:first").before(t("#slides li:last")),t("#slides ul").css({left:n})}),!1}),t("#prev").click(function(){var o=parseInt(t("#slides ul").css("left"))-e;return t("#slides ul").animate({left:o},400,function(){t("#slides li:last").after(t("#slides li:first")),t("#slides ul").css({left:n})}),!1})}function m(){function n(n){var o=e.template(t("#skillsTemp").html()),i=t("#webdev"),a=t("#design"),s=Array.prototype.slice.call(n.skills),c=t(document.createDocumentFragment()),l=t(document.createDocumentFragment());s.forEach(function(t){"webdev"==t.category?c.append(o({id:t.id,name:t.name,cat:t.category,level:t.level,imgSrc:t.imgSrc})):"design"==t.category?l.append(o({id:t.id,name:t.name,cat:t.category,level:t.level,imgSrc:t.imgSrc})):console.log("sad element without a category screaaaams to You! @_@!!")}),i.append(c),a.append(l),r=t(".el")}function o(){var e=t(".el[data-cat='webdev']"),n=t(".el[data-cat='design']"),o=e.length;n.length;e.each(function(){var e=100/o+"%",n=t(this);n.css("width",e)})}function i(){var e=t("#scroll-skills"),n=t(".skills-container"),o="animated fadeIn",i=t(window).scrollTop();t(window).scroll({previousTop:0},function(){var a=e.offset().top-20;t(window).scrollTop()>a&&(i<this.previousTop||(t(n).addClass(o),s(function(){t(".el--bar").each(function(e){var n=t(this),o=100,i=+t(this).find(".el--bar-fill").attr("data-skillLevel"),a=o-i;setTimeout(function(){n.find(".el--bar-fill").css("transform","translateY("+a.toString()+"%)")},250*e)})},function(){var e=t(".el--bar-icn");e.each(function(e){var n=t(this);setTimeout(function(){n.addClass("el--bar-icn-active")},250*e)})}))),this.previousTop=i})}function a(){var e=t(".el--bar");e.each(function(){var e=t(this).find(".el--bar-icn");t(this).on("mouseover",function(){e.addClass("el--bar-icn-active")})})}function s(){var t=arguments;t.length<=0||!function e(n){n>=t.length||"function"!=typeof t[n]||window.setTimeout(function(){t[n](),e(n+1)},500)}(0)}function c(t){console.log("Yes! Success!"),n(t),i(),a(),o()}function l(){console.log("Whooops! Something went wrong with loading the JSON file data for S K I L L S!")}var r;t.when(t.ajax("skills.json")).then(c,l)}function v(){var e=t(".offer-nav-icn"),n=t("#scroll-skills"),o=".offer",i="animated fadeInUp";e.on("click",function(){var e=t(this),n=t(".offer-nav-icn"),o=t(".offer-content-el"),i=e.data("type");n.each(function(){var n=t(this);n.hasClass("active")&&n.removeClass("active"),e.hasClass("active")||e.addClass("active")}),o.each(function(){var e=t(this),n=e.data("type");e.removeClass("active"),e.hasClass("active")?e.removeClass("active"):n==i&&e.addClass("active")})}),a(n,o,i)}f(),m(),p(),c(),l(),d(),n(),i(),r(),u(),v()}(window.$,window._);