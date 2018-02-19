/*

Plugin: slideNav
Created by: http://www.team8digital.uk/
Version: 1.0

*/

(function($) {
    //"use strict";

    $.fn.slideNav = function( options ) {

        // Establish our default settings
        var settings = $.extend({
            burgerBtn        : ".js__slideNav_open_btn",
            prependBtnTo     : null,
            slideOutLeft     : false,
            slideNavSpeed    : 500,
            bgColor          : null,
            navItemColor     : null
        }, options);

        var slideNavMenu = this;

        return this.each(function(t) {

            if (settings.slideNavSpeed) {

                var slideSpeed = settings.slideNavSpeed;

                $(this).find(".js__slideNav_menu").css("transition-duration", slideSpeed + "ms");

            }

            if (settings.bgColor) {

                var slideNavbgColor = settings.bgColor;

                $(this).find(".js__slideNav_menu").css("background", slideNavbgColor);

            }

            if (settings.navItemColor) {

                var slideNavnavItemColor = settings.navItemColor;

                $(this).find(".js__slideNav_menu .js__slideNav_ul a").css("color", slideNavnavItemColor);

            }

            if (settings.slideOutLeft == true) {

                $(slideNavMenu).find(".js__slideNav_menu").addClass("from__left");

                if (settings.burgerBtn) {

                    $(this).find(settings.burgerBtn).click(function() {

                        $(this).next().toggleClass("js__slideNav_menu_open__left");

                    });

                }

                if (settings.prependBtnTo) {

                    $(this).find(settings.burgerBtn).appendTo(settings.prependBtnTo);

                    $(settings.prependBtnTo).find(settings.burgerBtn).click(function() {

                        $(slideNavMenu).find(".js__slideNav_menu").toggleClass("js__slideNav_menu_open__left");

                    });

                    $(document).click(function() {
                        $(settings.prependBtnTo).parents().find(".js__slideNav_menu").removeClass("js__slideNav_menu_open__left");
                    });

                    $(settings.prependBtnTo).click(function(event){
                        event.stopPropagation();
                    });
                    $(".js__slideNav_menu").click(function(event){
                        event.stopPropagation();
                    });

                } else {

                    $(document).click(function() {
                    //Hide the menus if visible
                    $(slideNavMenu).find(".js__slideNav_menu").removeClass("js__slideNav_menu_open__left");
                    });

                    $(".js__slideNav_menu").parent().click(function(event){
                        event.stopPropagation();
                    });

                }

                $(this).find(".js__slideNav_close_btn").click(function() {

                    $(this).parent().parent().removeClass("js__slideNav_menu_open__left");

                });

            } else {

                if (settings.burgerBtn) {

                    $(this).find(settings.burgerBtn).click(function() {

                        $(this).next().toggleClass("js__slideNav_menu_open");

                    });

                }

                if (settings.prependBtnTo) {

                    $(this).find(settings.burgerBtn).appendTo(settings.prependBtnTo);

                    $(settings.prependBtnTo).find(settings.burgerBtn).click(function() {

                        $(slideNavMenu).find(".js__slideNav_menu").toggleClass("js__slideNav_menu_open");

                    });

                    $(document).click(function() {
                        $(settings.prependBtnTo).parents().find(".js__slideNav_menu").removeClass("js__slideNav_menu_open");
                    });

                    $(settings.prependBtnTo).click(function(event){
                        event.stopPropagation();
                    });
                    $(".js__slideNav_menu").click(function(event){
                        event.stopPropagation();
                    });

                } else {

                    $(document).click(function() {
                        $(slideNavMenu).find(".js__slideNav_menu").removeClass("js__slideNav_menu_open");
                    });

                    $(".js__slideNav_menu").parent().click(function(event){
                        event.stopPropagation();
                    });

                }

                $(this).find(".js__slideNav_close_btn").click(function() {

                    $(this).parent().parent().removeClass("js__slideNav_menu_open");

                });

            }

            $(this).find(".js__slideNav_dropdown_switch").click(function() {

                $(this).next().slideToggle();

                if ( $(".material-icons.js__slideNav_dropdown_icon, .fa-chevron-right.js__slideNav_dropdown_icon").length ) {

                    $(this).find(".material-icons").toggleClass("slideNav_up_icon");
                    $(this).find(".fas, .fa").toggleClass("fa-chevron-right fa-chevron-up");

                }

            });


        });


    };

}(jQuery));
