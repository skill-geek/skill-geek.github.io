/*
-------------------------------------------------------------------------
* Template Name    : Softes - SaaS & Software Html5 Landing Page        * 
* Author           : ThemesBoss                                         *
* Version          : 1.0.0                                              *
* Created          : August 2019                                        * 
* File Description : Main JS file of the template                       *
*------------------------------------------------------------------------
*/
$(window).on("scroll",function(){$(window).scrollTop()>=50?$(".sticky").addClass("stickyadd"):$(".sticky").removeClass("stickyadd")}),$(".nav-item a").on("click",function(o){var t=$(this);$("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top-50},1500,"easeInOutExpo"),o.preventDefault()}),$(document).on("click",".navbar-collapse.show",function(o){$(o.target).is("a")&&$(this).collapse("hide")}),$("#navbarCollapse").scrollspy({offset:70}),$(window).on("scroll",function(){$(this).scrollTop()>100?$(".back_top").fadeIn():$(".back_top").fadeOut()}),$(".back_top").on("click",function(){return $("html, body").animate({scrollTop:0},1e3),!1});