/*-----------------------------------------------------------------------------------
/* Styles Switcher
-----------------------------------------------------------------------------------*/
window.console=window.console||function(){var t={};return t.log=t.warn=t.debug=t.info=t.error=t.time=t.dir=t.profile=t.clear=t.exception=t.trace=t.assert=function(){},t}(),jQuery(document).ready(function(t){t("ul.pattern .color1").click(function(){return t("#option-color").attr("href","css/colors/green.css"),!1}),t("ul.pattern .color2").click(function(){return t("#option-color").attr("href","css/colors/dark.css"),!1}),t("ul.pattern .color3").click(function(){return t("#option-color").attr("href","css/colors/dark-blue.css"),!1}),t("ul.pattern .color4").click(function(){return t("#option-color").attr("href","css/colors/grandeur.css"),!1}),t("ul.pattern .color5").click(function(){return t("#option-color").attr("href","css/colors/sky.css"),!1}),t("ul.pattern .color6").click(function(){return t("#option-color").attr("href","css/colors/frost.css"),!1}),t("#color-switcher .bottom a.settings").click(function(r){r.preventDefault(),"-189px"===t("#color-switcher").css("left")?t("#color-switcher").animate({left:"0px"}):t("#color-switcher").animate({left:"-189px"})}),t("ul.pattern li a").click(function(r){r.preventDefault(),t(this).parent().parent().find("a").removeClass("active"),t(this).addClass("active")}),t("#color-switcher").animate({left:"-189px"})});


