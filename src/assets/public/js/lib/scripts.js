(function ($) {
    "use strict";

    $(document).ready(function () {

        if (!window.location.pathname.includes('match-details') && !window.location.pathname.includes('all-matches') && !window.location.pathname.includes('bet-of-the-day')) {
            localStorage.removeItem('search');
            localStorage.removeItem('sort_by');
            localStorage.removeItem('sort_by_date');
            localStorage.removeItem('currentDate');
        }

        if (window.location.pathname.includes('all-matches') || window.location.pathname.includes('bet-of-the-day')) {
            let currentDate = localStorage.getItem('currentDate');
            let sort_by_date = localStorage.getItem('sort_by_date');

            if (currentDate != null && currentDate.length) {
                setTimeout(function () {
                    $('a[data-value="' + currentDate + '"]').trigger('click');
                }, 100)
            }
        }

        localStorage.removeItem('lastDate');
        localStorage.removeItem('backFromMatchDetails');

        $('.go-back').click(function (event) {
            event.preventDefault();
            if (window.location.pathname.includes('match-details')) {
                localStorage.setItem('backFromMatchDetails', '1');
            }
            let lastDate = localStorage.getItem('lastDate');
            if (lastDate != null && lastDate.length && !window.location.pathname.includes('match-details')) {
                $('a[data-value="' + lastDate + '"]').trigger('click');
            } else {
                window.history.back();
            }
        });
        $('.nt-plan-td').click(function () {
            var activeplan = $(this).data('plan');
            $(".active").removeClass("active");
            $('.nts-plan').find('.' + activeplan).addClass('active');
        });
        if (window.innerWidth >= 992) { // Bootstrap 'lg' breakpoint
            $('[data-toggle="tooltip"]').tooltip();
        }


        /*------------------------------
        Circle Progress
        -------------------------------*/

        $('.nt-prediction-progress, .nt-match-stats-progress-left').circleProgress({
            value: $(this).data('value'),
            size: 40, // Consistent size for uniformity
            thickness: 2.8, // Moderately thick for optimal visibility
            startAngle: -Math.PI / 2, // Starts from the top
            emptyFill: 'rgba(72, 81, 100, 0.3)', // Slightly darker empty fill for better contrast
            fill: {
                gradient: ['#f80069', '#f3ca41' ], // Transition from yellow to vibrant green
                gradientAngle: Math.PI / 4,
                gradientType: 'radial' // Radial gradient for a smooth color transition
            },
            animation: { duration: 700, easing: 'circleProgressEasing' }, // Smooth and quick animation
            shadowBlur: 5,
            shadowColor: 'rgba(255, 255, 255, 0.8)' // Brighter, more noticeable shadow for a subtle depth effect
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(parseInt($(this).data('innertext') * progress) + '<i>' + $(this).data('subtext') + '</i>');
        });

        $('.nt-match-stats-progress-right').circleProgress({
            value: $(this).data('value'),
            size: 50, // Slightly larger for distinction
            thickness: 2.8, // Uniform thickness with the left gauge
            startAngle: -Math.PI / 2,
            emptyFill: 'rgba(72, 81, 100, 0.3)', // Consistent empty fill with the left gauge
            fill: {
                gradient: ['#f80069', '#f3ca41' ], // Consistent gradient with the left gauge
                gradientAngle: Math.PI / 4,
                gradientType: 'radial' // Ensures a smooth gradient transition
            },
            animation: { duration: 700, easing: 'circleProgressEasing' }, // Consistent animation settings
            shadowBlur: 5,
            shadowColor: 'rgba(255, 255, 255, 0.8)' // Consistent shadow settings for a cohesive look
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(parseInt($(this).data('innertext') * progress) + '<i>' + $(this).data('subtext') + '</i>');
        });


        /*------------------------------
        smooth-scrolling
        -------------------------------*/

        $('#primary-menu li a[href*="#"]') // Remove links that don't actually link to anything
            .not('[href="#"]').not('[href="#0"]').on('click', function (event) {
            // On-page links
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']'); // Does a scroll target exist?

                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();

                        if ($target.is(":focus")) {
                            // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable

                            $target.focus(); // Set focus again
                        }

                        ;
                    });
                }
            }
        });
        /*------------------------------
            fixed-nav
        -------------------------------*/

        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();

            if (scroll < 100) {
                $("#navbar").removeClass("sticky");
            } else {
                $("#navbar").addClass("sticky");
            }
        });
        /*------------------------------
            calculate
        -------------------------------*/

        $(document).on('change', '.calculator-profit', function (e) {
            calculateProfit();
        });
        $(document).on('keyup', '.calculator-invest', function (e) {
            calculateProfit();
        });
        $(document).on('keyup', '.calculator-invest-second', function (e) {
            calculateProfitSecond();
        });
        $(document).on('change', '.calculator-invest-second', function (e) {
            calculateProfitSecond();
        });
        $(document).on('change', '.calculator-invest', function (e) {
            calculateProfit();
        });

        $('.counter').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function step(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

        function calculateProfit() {
            var invest = $('.calculator-invest').val();

            if (!isNaN(invest)) {
                var calculated = invest * 0.05;
                $('.calculator-result-daily').text(calculated);
                $('.calculator-result-weekly').text(calculated * 7);
                $('.calculator-result-monthly').text(calculated * 30);
            }
        }

        function calculateProfitSecond() {
            var invest = $('.calculator-invest-second').val();

            if (!isNaN(invest)) {
                var calculated = invest * 0.05;
                $('.calculator-result-daily').text(calculated);
                $('.calculator-result-weekly').text(calculated * 7);
                $('.calculator-result-monthly').text(calculated * 30);
            }
        }

        /*------------------------------
            popup-videos
        -------------------------------*/


        $('.popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
        /*------------------------------
            choose-section-carousel
        -------------------------------*/

        $('.choose-section-carousel').slick({
            infinite: true,
            autoplay: true,
            focusOnSelect: true,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 5,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class=\"icofont-thin-left\"  aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class=\"icofont-thin-right\"  aria-hidden='true'></i></button>",
            dots: true,
            dotsClass: 'choose-section-dots',
            customPaging: function customPaging(slider, i) {
                var slideNumber = i + 1,
                    totalSlides = slider.slideCount;
                return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
            },
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }]
        });
        /*------------------------------
            investment-section-carousel
        -------------------------------*/

        $('.investment-section-carousel').slick({
            infinite: true,
            autoplay: true,
            focusOnSelect: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev pull-left"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:#d4d8e3;fill-opacity:1;" d="M 13.25 4.328125 L 7.410156 10 L 13.246094 15.671875 L 12.929688 16 L 6.75 10 L 12.929688 4 Z M 13.25 4.328125 "/></g></svg></button>',
            nextArrow: '<button type="button" class="slick-next pull-right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:#d4d8e3;fill-opacity:1;" d="M 6.753906 15.671875 L 12.589844 10 L 6.75 4.328125 L 7.070312 4 L 13.246094 10 L 7.070312 16 Z M 6.753906 15.671875 "/></g></svg></button>',
            dots: true,
            dotsClass: 'investment-section-dots',
            customPaging: function customPaging(slider, i) {
                var slideNumber = i + 1,
                    totalSlides = slider.slideCount;
                return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
            },
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }]
        });
        /*------------------------------
            calculate-area
        -------------------------------*/

        $(document).on('change', '.calculator-area-profit', function (e) {
            calculateAreaProfit();
        });
        $(document).on('keyup', '.calculator-area-invest', function (e) {
            calculateAreaProfit();
        });
        $(document).on('change', '.calculator-area-invest', function (e) {
            calculateAreaProfit();
        });
        $('.counter').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function step(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

        function calculateAreaProfit() {
            var invest = $('.calculator-area-invest').val();
            var profit = $('.calculator-area-profit').val();

            if (!isNaN(invest) && !isNaN(profit)) {
                var calculated = invest * (profit / 100);
                $('.calculator-result-area-daily').text(calculated);
                $('.calculator-result-area-weekly').text(calculated * 7);
                $('.calculator-result-area-monthly').text(calculated * 30);
            }
        }

        /*------------------------------
            testimonial-carousel
        -------------------------------*/


        $('.testimonial-carousel').slick({
            infinite: true,
            autoplay: true,
            centerMode: true,
            focusOnSelect: true,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class=\"icofont-thin-double-left\"  aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class=\"icofont-thin-double-right\"  aria-hidden='true'></i></button>",
            responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
        /*------------------------------
            home-section-slider
        -------------------------------*/

        $('.home-slider').slick({
            infinite: true,
            autoplay: true,
            focusOnSelect: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class=\"icofont-thin-left\"  aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class=\"icofont-thin-right\"  aria-hidden='true'></i></button>"
        });
        /*------------------------------
            preloader
        -------------------------------*/

        if (!(window.location.pathname === '/bet-of-the-day' && window.location.search.includes('login=true'))) {
            $("#preloader").delay(300).animate({
                "opacity": "0"
            }, 500, function () {
                $("#preloader").css("display", "none");
            });
        }
        /*------------------------------
            JParticles
        -------------------------------

        function bind(id, run) {
          var effect = run();
        }

        bind('#particles', function () {
          return new JParticles.particle('#particles .particles', {
            num: 100
          });
        });
  */

        /*------------------------------
            ripple
        -------------------------------*/
        /*
              try {
                $('.ripple-container').ripples({
                  resolution: 512,
                  dropRadius: 20,
                  perturbance: 0.04
                });
              } catch (error) {
                console.error(error);
              }

              */

        //***************************
        // Login
        //***************************

        $("#login-modal").submit(function (e) {
            alert('submit intercepted');
            e.preventDefault();
            e.stopPropagation();
            return false;
        });

        // document.getElementById("login-modal-submit").addEventListener("click", function(){ alert("Hello World!"); });

        $('#login-modal-submit').on("click touchstart", function (event) {
            event.preventDefault();
            var baseurl = window.location.origin + '/login';
            var data = {
                username: jQuery("#login-modal input[name=\'username\']").val(),
                password: jQuery("#login-modal input[name=\'password\']").val(),
                login: jQuery("#login-modal input[name=\'login\']").val(),
                checkbox: jQuery("#login-modal input[name=\'inlineCheckboxLogin\']").prop('checked'),
                captcha: grecaptcha.getResponse()
            };

            var errorMessages = validateLogin(data);

            if (errorMessages.error === true) {
                showErrorMessages(errorMessages.errorMessages);
                return false;
            }

            $.ajax({
                method: "POST",
                url: baseurl,
                data: data,
                dataType: 'JSON',
                success: function success(response) {
                    if (response.error === false) {
                        let url = window.location.href.split("#")[0];
                        if (response.redirectUrl !== '') {
                            url = response.redirectUrl;
                        }
                        if (window.location.href === 'https://nerdytips.com/login') {
                            url = window.location.origin + '/all-matches';
                        }
                        window.location.replace(url);
                        localStorage.setItem('loginAttempts', 0);
                        if (isCaptchaModalVisible()) {
                            grecaptcha.reset();
                        }
                    } else {
                        showErrorMessages(response.error);
                        incrementLoginAttempts();
                        if (isCaptchaModalVisible()) {
                            grecaptcha.reset();
                        }
                    }
                },
                error: function error(xhr, ajaxOptions, thrownError) {
                }
            });
        }); //***************************
        // Register
        //***************************

        jQuery('#sign-up').on("click", function () {
            var baseurl = window.location.origin + '/login/registration';
            var data = {
                username: jQuery("#registration-form input[name=\'username\']").val(),
                password: jQuery("#registration-form input[name=\'password\']").val(),
                confirm_password: jQuery("#registration-form input[name=\'confirm_password\']").val(),
                name: jQuery("#registration-form input[name=\'name\']").val(),
                email: jQuery("#registration-form input[name=\'email\']").val(),
                submit: jQuery("#registration-form input[name=\'submit\']").val()
            };
            var errorMessages = validateRegistration(data);

            if (errorMessages.error === true) {
                showErrorMessages(errorMessages.errorMessages);
                return false;
            }

            $.ajax({
                method: "POST",
                url: baseurl,
                data: data,
                dataType: 'JSON',
                success: function success(response) {
                    if (response.error === false) {
                        let url = window.location.href.split("#")[0];
                        if (response.redirectUrl !== '') {
                            url = response.redirectUrl;
                        } else {
                            url = window.location.origin + '/all-matches';
                        }
                        window.location.replace(url);
                    } else {
                        showErrorMessages(response.error);
                    }
                },
                error: function error(xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                }
            });
        }); //***************************
        // Remove Device
        //***************************

        jQuery('.close-device').on('click', function (e) {
            e.preventDefault();
            var baseurl = window.location.origin + '/login/remove-device';
            var data = {
                device: this.previousElementSibling.textContent
            };
            $.ajax({
                method: "POST",
                url: baseurl,
                data: data,
                dataType: 'JSON',
                success: function success(response) {
                    if (response.error === false) {
                        if (response.success) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Good Job',
                                text: response.success,
                            });
                            $(".close-message").click(function () {
                                $(this).parent().slideUp("slow");
                            });
                            setTimeout(function () {
                                jQuery(".notification").slideUp("slow");
                            }, 4000);
                        }
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: response.error,
                        });
                        $(".close-message").click(function () {
                            $(this).parent().slideUp("slow");
                        });
                        setTimeout(function () {
                            jQuery(".notification").slideUp("slow");
                        }, 4000);
                    }
                },
                error: function error(xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                }
            });
        });
        //***************************
        // Edit My Account
        //***************************

        jQuery('#edit-myaccount-submit').on("click", function () {
            var editUrl = window.location.origin + '/login/edit';
            var data = {
                old_password: jQuery("#edit-myaccount input[name=\'old_password\']").val(),
                new_password: jQuery("#edit-myaccount input[name=\'new_password\']").val()
            };
            var errorMessages = validateEdit(data);

            if (errorMessages.error === true) {
                showErrorMessages(errorMessages.errorMessages);
                return false;
            }

            $.ajax({
                method: "POST",
                url: editUrl,
                data: data,
                dataType: 'JSON',
                success: function success(response) {
                    if (response.error === false) {
                        if (response.success.main) {
                            $("<div class=\"notification notification-warning\">\n" + "    <span class=\"title\">!&nbsp;&nbsp;&nbsp;&nbsp;Warning</span> Nothing was changed!<span class=\"close-message\">X</span>\n" + "</div>").insertAfter(".header-space");
                            $(".close-message").click(function () {
                                $(this).parent().slideUp("slow");
                            });
                            setTimeout(function () {
                                jQuery(".notification").slideUp("slow");
                            }, 4000);
                        }

                        if (response.success.password) {
                            $("<div class=\"notification notification-success\">\n" + "    <span class=\"title\">&nbsp;&nbsp;&nbsp;&nbsp;Success</span> Password was changed!<span class=\"close-message\">X</span>\n" + "</div>").insertAfter(".header-space");
                            $(".close-message").click(function () {
                                $(this).parent().slideUp("slow");
                            });
                            setTimeout(function () {
                                jQuery(".notification").slideUp("slow");
                            }, 4000);
                        }


                    } else {
                        showErrorMessages(response.error);
                    }
                },
                error: function error(xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                }
            });
        });
        //***************************
        // Change Odds Format
        //***************************

        jQuery('#edit-odds-format-submit').on("click", function (e) {
            e.preventDefault(); // Prevent the default form submission

            var editUrl = window.location.origin + '/myaccount/update-odds';
            var selectedOddsFormat = jQuery("#oddsFormatSelect").val();

            var data = {
                odds_format: selectedOddsFormat
            };

            $.ajax({
                method: "POST",
                url: editUrl,
                data: data,
                dataType: 'JSON',
                success: function(response) {
                    $('#preloader').hide().css({'opacity' : '0'});
                    if(response.success){
                        Swal.fire({
                            icon: 'success',
                            title: 'Good Job',
                            text: response.message,
                            customClass: {
                                content: 'swal2-popup'
                            }
                        });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: response.message,
                        });
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    $('#preloader').hide().css({'opacity' : '0'});
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'There was an error processing your request.',
                    });
                }
            });
        });


        //***************************
        // Subscribe Plan Subscription
        //***************************
        // jQuery('.subscribe-btn').on("click", function () {
        //     let baseurl = window.location.origin + '/paypal';
        //     let data = {
        //         plan_name: this.value
        //     };
        //
        //     $.ajax({
        //         method: "POST",
        //         url: baseurl,
        //         data: data,
        //         dataType: 'JSON',
        //         success: function (response) {
        //             if(response.error === false) {
        //                 window.location.replace(response.url);
        //             } else {
        //                 let errorUrl = window.location.href + '?error=' + response.error;
        //                 window.location.replace(errorUrl);
        //             }
        //
        //         },
        //         error: function (xhr, ajaxOptions, thrownError) {
        //             alert(xhr.status);
        //             alert(thrownError);
        //         }
        //     })
        // });
        //***************************
        // Subscribe Plan Checkout
        //***************************

        jQuery('.subscribe-btn').on("click", function () {
            var valueOption = this.dataset.plan;
            valueOption = valueOption.charAt(0).toUpperCase() + valueOption.slice(1);

            if (document.getElementById('item-options')[0].value === 'Basic') {
                if (valueOption === 'Basic') {
                    document.getElementById('item-options').selectedIndex = 0;
                } else if (valueOption === 'Standard') {
                    document.getElementById('item-options').selectedIndex = 1;
                } else {
                    document.getElementById('item-options').selectedIndex = 2;
                }
            } else if (document.getElementById('item-options')[0].value === 'Standard') {
                if (valueOption === 'Standard') {
                    document.getElementById('item-options').selectedIndex = 0;
                } else if (valueOption === 'Premium') {
                    document.getElementById('item-options').selectedIndex = 1;
                } else {
                    document.getElementById('item-options').selectedIndex = 2;
                }
            }
        }); //***************************
        // Reset Password send Link
        //***************************

        jQuery("#reset-password-submit").on("click", function () {
            var baseurl = window.location.origin + '/login/send-reset-password';
            var data = {
                email: jQuery("#reset-password-email input[name=\'email\']").val()
            };
            var error;
            var errorMessages = {}; // Validate Email

            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (data.email === "" || data.email === "Type Your Email") {
                errorMessages.email_err = "Please enter your email.";
                error = true;
            } else if (!data.email.match(mailformat)) {
                errorMessages.email_err = 'Email format is invalid.';
                error = true;
            }

            errorMessages = {
                error: error,
                errorMessages: errorMessages
            };

            if (errorMessages.error === true) {
                showErrorMessages(errorMessages.errorMessages);
                return false;
            }

            $.ajax({
                method: "POST",
                url: baseurl,
                data: data,
                dataType: 'JSON',
                success: function success(response) {
                    if (response.error === false) {
                        window.location.replace(window.location.origin);
                    } else {
                        showErrorMessages(response.error);
                    }
                },
                error: function error(xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                }
            });
        });

        //***************************
        // Reset Password
        //***************************
        jQuery("#reset-password").on("click", function () {
            var baseurl = window.location.origin + '/reset-password';
            var data = {
                password: jQuery("#reset-passord-form input[name=\'password\']").val(),
                confirm_password: jQuery("#reset-passord-form input[name=\'confirm_password\']").val(),
                token: jQuery("#reset-passord-form input[name=\'token\']").val()
            };
            var errorMessages = validateResetPassword(data);

            if (errorMessages.error === true) {
                showErrorMessages(errorMessages.errorMessages);
                return false;
            }

            $.ajax({
                method: "POST",
                url: baseurl,
                data: data,
                dataType: 'JSON',
                success: function success(response) {
                    if (response.error === false) {
                        window.location.replace(window.location.origin + '/login');
                    } else {
                        showErrorMessages(response.error);
                    }
                },
                error: function error(xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                }
            });
        });

        //***************************
        // Get Matches By Date
        //***************************
        jQuery(".date-button").on("click", function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();

            localStorage.setItem('lastDate', $(".date-button.active").attr("data-value"));
            localStorage.setItem('currentDate', this.dataset.value);
            let baseurl = window.location.origin + '/all-matches/get-matches';
            var data = {
                date: this.dataset.value,
                type: jQuery(".type-button.active").attr("data-value"),
                page: 1
            };

            $(".date-button").removeClass("active");
            this.classList.add('active');

            $('.scroller').scrollLeft(0);
            $('html, body').scrollTop(0);

            setTimeout(function () {
                var myScrollPos = $('.scroller > .nav-item > a.active').offset().left + $('.scroller > .nav-item > a.active').outerWidth(true) / 2 + $('.scroller').scrollLeft() - $('.scroller').width() / 2 - 20;
                $('.scroller').scrollLeft(myScrollPos);
            }, 10);

            $.xhrPool.abortAll();

            $.ajax({
                method: "POST",
                url: baseurl,
                data: data,
                beforeSend: function (jqXHR) {
                    $.xhrPool.push(jqXHR);
                    $("#accordion").empty();
                    $(".main-fader").show();
                },
                success: function (response) {
                    if (response !== false && response !== '') {
                        $(".main-fader").hide();
                        $("#accordion").append(response);
                        displayAllPages(data.date, data.type, 2);
                        adjustElementsVisibility();
                    } else {
                        $(".main-fader").hide();
                    }
                }
            });

            baseurl = window.location.origin + '/all-matches/get-match-statistics';
            $.ajax({
                method: "POST",
                url: baseurl,
                data: data,
                dataType: 'JSON',
                success: function (response) {
                    if (response !== false && response !== '') {
                        $('#predicted_count').text(response.predicted);
                        $('#notstarted_count').text(response.not_started);
                        $('#success_rate').text(response.success_rate);
                    }
                }
            });
        });





        //***************************
        // Get Matches By Type
        //***************************
        jQuery(".type-button").on("click", function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            var baseurl = window.location.origin + '/all-matches/get-matches';
            var data = {
                date: jQuery(".date-button.active").attr("data-value"),
                type: this.dataset.value,
                page: 1
            };

            $(".type-button").removeClass("active");
            this.classList.add('active');
            $.xhrPool.abortAll();

            $.ajax({
                method: "POST",
                url: baseurl,
                data: data,
                beforeSend: function (jqXHR) {
                    $.xhrPool.push(jqXHR);
                    $("#accordion").empty();
                    $(".main-fader").show();
                },
                success: function success(response) {
                    if (response !== false && response !== '') {
                        $(".main-fader").hide();
                        $("#accordion").empty();
                        $("#accordion").append(response);
                        displayAllPages(data.date, data.type, 2);
                    } else {
                        $(".main-fader").hide();
                        $("#accordion").empty();
                    }
                },
                error: function error(xhr, ajaxOptions, thrownError) {

                }
            });
        });

        //***************************
        // Get Matches First time
        //***************************
        if ($("#display-all").length) {
            $("#display-all").remove()
            displayAllPages('today', 'all', 2);
        }

        //***************************
        // Get Matches By Filters
        //***************************
        jQuery("#filters").submit(function (event) {
            event.preventDefault();
            var baseurl = window.location.origin + '/all-matches/search-matches';
            var data = {
                date: jQuery(".date-button.active").attr("data-value"),
                type: jQuery(".type-button.active").attr("data-value"),
                search: document.getElementById('search').value,
                sort_by: document.getElementById('sort_by').value,
                sort_by_date: document.getElementById('sort_by_date').value
            };

            localStorage.setItem('search', data.search);
            localStorage.setItem('sort_by', data.sort_by);
            localStorage.setItem('sort_by_date', data.sort_by_date);

            $.xhrPool.abortAll();

            $.ajax({
                method: "POST",
                url: baseurl,
                data: data,
                beforeSend: function (jqXHR) {
                    $.xhrPool.push(jqXHR);
                    $("#accordion").empty();
                    $(".main-fader").show();
                },
                success: function success(response) {
                    if (response !== false && response !== '') {
                        $(".main-fader").hide();
                        $("#accordion").empty();
                        $("#accordion").append(response);
                        setTimeout(function () {
                            jQuery(".notification").slideUp("slow");
                        }, 7000);
                    } else {
                        $(".main-fader").hide();
                        $("#accordion").empty();
                        setTimeout(function () {
                            jQuery(".notification").slideUp("slow");
                        }, 7000);
                    }
                }
            });
        });


        //***************************
        // Load Google Recaptcha
        //***************************

        jQuery('.join-btn').click(function () {
            var head = document.getElementsByTagName('head')[0]
            var script = document.createElement('script')
            script.type = 'text/javascript';
            script.src = 'https://www.google.com/recaptcha/api.js'
            head.appendChild(script);
        });

        //***************************
        // Fix Tooltips issue
        //***************************
        if (window.innerWidth >= 992) {
            jQuery('body').tooltip({selector: '[data-toggle="tooltip"]'});
        }

        //***************************
        // Stripe Check
        //***************************

        jQuery('.subscribe-stripe').click(function () {
            var baseurl = window.location.origin + '/subscriptions/create-subscription-stripe';
            var itemOptions = document.querySelector("#smart-button-container #item-options");
            var data = {
                plan: itemOptions.options[itemOptions.selectedIndex].value
            };

            $.ajax({
                method: "POST",
                url: baseurl,
                data: data,
                dataType: 'JSON',
                success: function success(response) {
                    // Handle regular success response here
                },
                error: function error(xhr, ajaxOptions, thrownError) {
                    if (xhr.status !== 303) {
                        // Handle other errors here, but not the 303
                        console.error("Error occurred:", thrownError);
                    }
                },
                statusCode: {
                    303: function (xhr) {
                        // Handle the 303 "See Other" status here
                        let redirectUrl = xhr.responseJSON && xhr.responseJSON.redirectUrl;
                        if (redirectUrl) {
                            window.location.replace(redirectUrl);
                        } else {
                            console.error("303 received but no Location header found.");
                        }
                    }
                }
            });
        }); //***************************
        //***************************
        // Stripe Check IOS
        //***************************

        jQuery('.subscribe-stripe-ios').click(function () {
            const params = new URLSearchParams(window.location.search);
            const userId = params.get('user_id');
            var baseurl = window.location.origin + '/purchase/create-subscription-stripe';
            var itemOptions = document.querySelector("#smart-button-container #item-options");
            var data = {
                plan: itemOptions.options[itemOptions.selectedIndex].value,
                user_id: userId
            };

            $.ajax({
                method: "POST",
                url: baseurl,
                data: data,
                dataType: 'JSON',
                success: function success(response) {
                    // Handle regular success response here
                },
                error: function error(xhr, ajaxOptions, thrownError) {
                    if (xhr.status !== 303) {
                        // Handle other errors here, but not the 303
                        console.error("Error occurred:", thrownError);
                    }
                },
                statusCode: {
                    303: function (xhr) {
                        // Handle the 303 "See Other" status here
                        let redirectUrl = xhr.responseJSON && xhr.responseJSON.redirectUrl;
                        if (redirectUrl) {
                            window.location.replace(redirectUrl);
                        } else {
                            console.error("303 received but no Location header found.");
                        }
                    }
                }
            });
        }); //***************************

        //***************************
        // Filter Button
        //***************************

        jQuery('.filter-button').click(function () {
            $('.filter-button i').toggleClass('icofont-arrow-up');
            $('.nt-filter-content').slideToggle();
        });


        jQuery('.input').keypress(function (e) {
            if (e.which == 13) {
                $('form#filters').submit();
                return false;
            }
        });


        if (window.location.href === window.location.origin + '/all-matches') {

            //  var stickyTop = $('#filters').offset().top;
            //  var stickyWidth = $('#filters').width();
            //  jQuery(window).scroll(function() {
            //    var windowTop = $(window).scrollTop()  + 100;
            //    if (stickyTop < windowTop && $(".nt-lists").height() + $(".nt-lists").offset().top - $("#filters").height() > windowTop) {
            //    $('#filters').addClass('sidebarFixed');
            //    $('#filters').css('width', stickyWidth+'px');
            //    } else {
            //    $('#filters').removeClass('sidebarFixed');
            //    }
            //  });


// cache the element
            var $filters = $('#filters');
            var stickyWidth = $filters.width();
// find original navigation bar position
            var filtersPos = $filters.offset().top;

// on scroll
            $(window).scroll(function () {

                // get scroll position from top of the page
                var scrollPos = $(this).scrollTop();
                if (filtersPos < scrollPos && $(".nt-lists").height() + $(".nt-lists").offset().top - $("#filters").height() > scrollPos) {
                    $filters.addClass('sidebarFixed');
                    $filters.css('width', stickyWidth + 'px');
                } else {
                    $filters.removeClass('sidebarFixed');
                }

            });


        }


    });
})(jQuery);

document.addEventListener('DOMContentLoaded', function () {
    var selectElement = document.getElementById('change_tip');

    if (selectElement) {
        selectElement.addEventListener('change', function () {
            adjustElementsVisibility();
        });
    }

    // Initial adjustment in case the select element's default value should trigger visibility changes
    adjustElementsVisibility();
});

document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle row details
    function toggleDetails(rowSelector, dataAttr, detailsIdPrefix) {
        document.querySelectorAll(rowSelector).forEach(function(row) {
            row.addEventListener('click', function() {
                var matchId = this.getAttribute(dataAttr);
                var detailsRow = document.getElementById(detailsIdPrefix + matchId);

                // Set the animation duration (in milliseconds)
                var animationDuration = 200;  // Faster effect, e.g., 200ms

                // Check if the details row is visible
                if ($(detailsRow).is(':visible')) {
                    // Slide up the content and hide the entire row after sliding up
                    $(detailsRow).find('.content-wrapper').slideUp(animationDuration, function() {
                        $(detailsRow).css('display', 'none');  // Fully hide the row after animation
                    });
                } else {
                    // Make the row visible before sliding down
                    $(detailsRow).css('display', 'table-row');  // Ensure it's treated as a table row
                    $(detailsRow).find('.content-wrapper').hide().slideDown(animationDuration);  // Apply faster slideDown to the inner content
                }
            });
        });
    }

    // Toggle home match details
    toggleDetails('.match-row', 'data-match', 'details-');

    // Toggle away match details
    toggleDetails('.match-row-away', 'data-match-away', 'details-away-');
});








// Helper functions to show and hide elements
function showElements(elements) {
    Array.from(elements).forEach(function (element) {
        if (element) element.style.display = ''; // Use '' to revert to the default display style
    });
}

function hideElements(elements) {
    // Convert elements to an array to ensure the forEach method is available
    Array.from(elements).forEach(function (element) {
        if (element) element.style.display = 'none'; // Hide each element
    });
}

function adjustElementsVisibility() {
    var element = document.getElementById('change_tip');
    if (element) {
        var value = element.value;
    } else {
        var value = '';
    }
    var lockTipsTop = document.getElementsByClassName("top-best");
    var lockTipsBottom = document.getElementsByClassName("bottom-best");
    var lockTipsTrust = document.getElementsByClassName("mltcenter-best");

    var lockTipsTopPickscore = document.getElementsByClassName("top-pick");
    var lockTipsBottomPickscore = document.getElementsByClassName("bottom-pick");
    var lockTipsTrustPickscore = document.getElementsByClassName("mltcenter-pick");

    var lockTipsTopGoals = document.getElementsByClassName("top-goals");
    var lockTipsBottomGoals = document.getElementsByClassName("bottom-goals");
    var lockTipsTrustGoals = document.getElementsByClassName("mltcenter-goals");

    // Initially hide all specific lock tips elements
    hideElements(lockTipsTopPickscore);
    hideElements(lockTipsBottomPickscore);
    hideElements(lockTipsTrustPickscore);
    hideElements(lockTipsTopGoals);
    hideElements(lockTipsBottomGoals);
    hideElements(lockTipsTrustGoals);

    // Show/hide elements based on the selected value
    if (value === 'pickscore') {
        hideElements(lockTipsTop);
        hideElements(lockTipsBottom);
        hideElements(lockTipsTrust);
        hideElements(lockTipsTopGoals);
        hideElements(lockTipsBottomGoals);
        hideElements(lockTipsTrustGoals);

        showElements(lockTipsTopPickscore);
        showElements(lockTipsBottomPickscore);
        showElements(lockTipsTrustPickscore);
    } else if (value === 'goals') {
        showElements(lockTipsTopGoals);
        showElements(lockTipsBottomGoals);
        showElements(lockTipsTrustGoals);

        hideElements(lockTipsTop);
        hideElements(lockTipsBottom);
        hideElements(lockTipsTrust);
        hideElements(lockTipsTopPickscore);
        hideElements(lockTipsBottomPickscore);
        hideElements(lockTipsTrustPickscore);
    } else {
        hideElements(lockTipsTopPickscore);
        hideElements(lockTipsBottomPickscore);
        hideElements(lockTipsTrustPickscore);
        hideElements(lockTipsTopGoals);
        hideElements(lockTipsBottomGoals);
        hideElements(lockTipsTrustGoals);

        showElements(lockTipsTop);
        showElements(lockTipsBottom);
        showElements(lockTipsTrust);
    }
}

//***************************
// Lazy Load
//***************************


// Set the options globally
// to make LazyLoad self-initialize
window.lazyLoadOptions = {
    // Your custom settings go here
};

// Listen to the initialization event
// and get the instance of LazyLoad
window.addEventListener("LazyLoad::Initialized", function (event) {
    window.lazyLoadInstance = event.detail.instance;
}, false);


(function (window, document, undefined) {
    'use strict'; // Select nav items that have submenus

    var hasSubmenu = document.querySelectorAll('[data-id]');
    var visible = 'visible';
    var i = 0; // Show the submenu by toggling the relevant class names

    function showSubmenu(event) {
        // We lose reference of this when filtering the nav items
        var self = this; // Select the relevant submenu, by the data-id attribute

        var submenu = document.getElementById(self.dataset.id); // Probably best to prevent clicks through

        event.preventDefault();

        if (!$(submenu).hasClass(visible)) {
            $('.nav-link').removeClass(visible);
            $('.submenu').removeClass(visible);
        }

        self.classList.toggle(visible);
        submenu.classList.toggle(visible);
    } // Remove the active class


    function removeChildClass(el) {
        // Check if it exists, then remove
        if (el.classList.contains(visible)) {
            el.classList.remove(visible);
        }
    } // On clicks show submenus


    for (i = 0; i < hasSubmenu.length; i++) {
        hasSubmenu[i].addEventListener('click', showSubmenu);
    }
})(window, document);
/*---------- DRAGGER ----------*/


$(document).ready(function () {
    $('.dragger').mousedown(function (event) {
        $(this).data('down', true).data('x', event.clientX).data('scrollLeft', this.scrollLeft).addClass("dragging");
        return false;
    }).mouseup(function (event) {
        $(this).data('down', false).removeClass("dragging");
    }).mousemove(function (event) {
        if ($(this).data('down') == true) {
            this.scrollLeft = $(this).data('scrollLeft') + $(this).data('x') - event.clientX;
        }
    });
    $(window).mouseout(function (event) {
        if ($('.team-form-data').data('down')) {
            try {
                if (event.originalTarget.nodeName == 'BODY' || event.originalTarget.nodeName == 'HTML') {
                    $('.team-form-data').data('down', false);
                }
            } catch (e) {
            }
        }
    });
});
/*---------- SCROLLER ----------*/

jQuery(function ($) {
    $.fn.hScroll = function (amount) {
        amount = amount || 120;
        $(this).bind("DOMMouseScroll mousewheel", function (event) {
            var oEvent = event.originalEvent,
                direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
                position = $(this).scrollLeft();
            position += direction > 0 ? -amount : amount;
            $(this).scrollLeft(position);
            event.preventDefault();
        });
    };
});
// $(document).ready(function () {
//   $('.scroller').hScroll(); // You can pass (optionally) scrolling amount
// });

$(document).ready(function () {
    // var element = document.querySelector(".scroller > .nav-item > a.active");
    // element.scrollIntoView({inline: "center"});
    if ($('.scroller > .nav-item > a.active').length) {
        var myScrollPos = $('.scroller > .nav-item > a.active').offset().left + $('.scroller > .nav-item > a.active').outerWidth(true) / 2 + $('.scroller').scrollLeft() - $('.scroller').width() / 2 - 20;
        $('.scroller').scrollLeft(myScrollPos);
    }
});

function validateRegistration(data) {
    var error = false;
    var errorMessages = {};
    var alphanumeric = /^[0-9a-zA-Z\.\-_]+$/;

    if (data.username === "" || data.username === "Enter User Name") {
        errorMessages.username_err = "Please enter your name.";
        error = true;
    } else if (!data.username.match(alphanumeric)) {
        errorMessages.username_err = "Username can contain just characters and numbers.";
        error = true;
    } // Validate password


    var passwordValidation = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;

    if (data.password === "") {
        errorMessages.password_err = "Please enter a password.";
        error = true;
    } else if (!data.password.match(passwordValidation)) {
        errorMessages.password_err = "Your password must be at least 6 characters long and contain both at least one letter and one number.";
        error = true;
    } // Validate confirm password


    if (data.confirm_password === "") {
        errorMessages.confirm_password_err = "Please confirm password.";
        error = true;
    } else if (data.confirm_password !== data.password) {
        errorMessages.confirm_password_err = "Passwords do not match.";
        error = true;
    } // Validate Name


    var letters = /^[A-Za-z \-\']+$/;

    if (data.name === "" || data.name === "Type Your Name") {
        errorMessages.name_err = "Please enter your name.";
        error = true;
    } else if (!data.name.match(letters)) {
        errorMessages.name_err = "Name can contain only letters, spaces, hyphens, and apostrophes.";
        error = true;
    } // Validate Email


    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (data.email === "" || data.email === "Type Your Email") {
        errorMessages.email_err = "Please enter your email.";
        error = true;
    } else if (!data.email.match(mailformat)) {
        errorMessages.email_err = 'Email format is invalid.';
        error = true;
    }

    var checkBox = document.getElementById("inlineCheckbox1");
    if (checkBox.checked !== true) {
        error = true;
        errorMessages.terms_conditions_err = 'You should accept terms and conditions.';
    }

    var checkBox2 = document.getElementById("inlineCheckbox2");
    if (checkBox2.checked !== true) {
        error = true;
        errorMessages.age_validation_err = 'You should be over 18 years old in order to register.';
    }

    return {
        error: error,
        errorMessages: errorMessages
    };
}

function validateLogin(data) {
    var error = false;
    var errorMessages = {};
    var alphanumeric = /^[0-9a-zA-Z\.\-_]+$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (typeof data.username === 'undefined' || data.username === "" || data.username === "Enter User Name") {
        errorMessages.username_err = "Please enter your username.";
        error = true;
    } else if (data.username.includes("@") && !data.username.match(mailformat)) {
        errorMessages.username_err = 'Email format is invalid.';
        error = true;
    }

    var passwordValidation = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;

    if (typeof data.password === 'undefined' || data.password === "") {
        errorMessages.password_err = "Please enter a password.";
        error = true;
    }

    if (isCaptchaModalVisible()) {
        if (typeof data.captcha === 'undefined' || data.captcha === "") {
            errorMessages.captcha_err = "Please check the captcha.";
            error = true;
        }
    }

    return {
        error: error,
        errorMessages: errorMessages
    };
}

function validateEdit(data) {
    var error = false;
    var errorMessages = {}; // Validate password

    var passwordValidation = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;

    if (data.new_password !== "") {
        if (data.old_password === "") {
            errorMessages.confirm_password_err = "Please complete your password.";
            error = true;
        }

        if (!data.new_password.match(passwordValidation)) {
            errorMessages.confirm_password_err = "Your password must be at least 6 characters long and contain both at least one letter and one number.";
            error = true;
        }
    }

    return {
        error: error,
        errorMessages: errorMessages
    };
}

function validateResetPassword(data) {
    var error = false;
    var errorMessages = {}; // Validate password

    var passwordValidation = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;

    if (data.password === "") {
        errorMessages.password_err = "Please enter a password.";
        error = true;
    } else if (!data.password.match(passwordValidation)) {
        errorMessages.password_err = "Your password must be at least 6 characters long and contain both at least one letter and one number.";
        error = true;
    } // Validate confirm password


    if (data.confirm_password === "") {
        errorMessages.confirm_password_err = "Please confirm password.";
        error = true;
    } else if (data.confirm_password !== data.password) {
        errorMessages.confirm_password_err = "Passwords do not match.";
        error = true;
    } // Validate token


    if (data.token === "") {
        errorMessages.token_err = "Token doesn't exist.";
        error = true;
    }

    return {
        error: error,
        errorMessages: errorMessages
    };
}

//
$.xhrPool = [];
$.xhrPool.abortAll = function () {
    $(this).each(function (idx, jqXHR) {
        jqXHR.abort();
    });
    let abortAllFunction = $.xhrPool.abortAll;
    $.xhrPool = [];
    $.xhrPool.abortAll = abortAllFunction;
};

$.ajaxSetup({
    beforeSend: function (jqXHR) {
        $.xhrPool.push(jqXHR);
    },
    complete: function (jqXHR) {
        var index = $.xhrPool.indexOf(jqXHR);
        if (index > -1) {
            $.xhrPool.splice(index, 1);
        }
    }
});


function showErrorMessages(errorMessages) {
    if (errorMessages !== null) {
        if (typeof (errorMessages) === 'object') {
            errorMessages = Object.keys(errorMessages).map(function (key) {
                return [key, errorMessages[key]];
            });
        }

        if (Array.isArray(errorMessages)) {
            errorMessages.forEach(function (errorMessage) {
                var element = jQuery('.' + errorMessage[0]);

                // Adding error icon
                element.html('<i class="fas fa-exclamation-circle"></i> ' + errorMessage[1]);

                if (errorMessage[0] === 'main_err') {
                    jQuery(".error-validation-main").fadeIn(300);
                } else {
                    element.fadeIn(300); // Smooth fade-in effect
                }
            });
        }

        jQuery(".error-validation").fadeIn(300);
        setTimeout(hideError, 5000);
    }
}

let timerId;
let firstActivity = true;

function updateActivityTimestamp() {
    // Clear the timer if it's already set
    if (timerId) {
        clearTimeout(timerId);
    }

    const fiveMinutesAgo = Date.now() - (5 * 60 * 1000);
    const lastActivityTimestamp = parseInt(localStorage.getItem('lastActivityTimestamp'), 10);

    // If no activity in the last 5 minutes, set firstActivity to true
    if (!lastActivityTimestamp || lastActivityTimestamp < fiveMinutesAgo) {
        firstActivity = true;
    }

    // Update the timestamp after a delay, reducing the frequency of updates
    timerId = setTimeout(function () {
        localStorage.setItem('lastActivityTimestamp', Date.now().toString());
    }, 5000); // Update every 5 seconds as an example

    if (localStorage.getItem('dateUpdateMatches')) {
        updateMatchesContent(
            localStorage.getItem('dateUpdateMatches'),
            localStorage.getItem('typeUpdateMatches')
        );
        localStorage.removeItem('dateUpdateMatches');
        localStorage.removeItem('typeUpdateMatches');
        firstActivity = false;
    }
}

// Set up your event listeners as before


// List of events to listen for, indicating user activity
const activityEvents = ['click', 'keypress', 'scroll', 'touchstart'];

// Add event listeners for each activity event
activityEvents.forEach(function (eventName) {
    window.addEventListener(eventName, updateActivityTimestamp, {passive: true});
});

function updateMatchesContent(date, type) {
    // Calculate the timestamp for 5 minutes ago
    const fiveMinutesAgo = Date.now() - (5 * 60 * 1000);

    // Retrieve the last activity timestamp from localStorage
    const lastActivityTimestamp = parseInt(localStorage.getItem('lastActivityTimestamp'), 10);

    // If there hasn't been any activity in the last 5 minutes, and it's not the first activity, store updates and return
    if ((!lastActivityTimestamp || lastActivityTimestamp < fiveMinutesAgo) && !firstActivity) {
        localStorage.setItem('dateUpdateMatches', date);
        localStorage.setItem('typeUpdateMatches', type);
        return;
    }

    const baseurl = window.location.origin + '/all-matches/get-automatic-matches';
    const data = {
        date: date,
        type: type
    };

    if ($.active && $.xhrPool.length) {
        $.xhrPool.forEach((xhr) => xhr.abort());
        $.xhrPool = []; // Clear the request pool
    }

    const cacheMatchesString = localStorage.getItem('cacheMatches');
    const cacheMatches = JSON.parse(cacheMatchesString || '{}');

    // Only make a new AJAX request if the previous one has completed
    if (!$.active) {
        $.ajax({
            method: "POST",
            url: baseurl,
            data: data,
            dataType: 'json',
            beforeSend: function (jqXHR) {
                $.xhrPool.push(jqXHR);
            },
            success: function (response) {
                if (response) {
                    if (response !== false && response !== '') {
                        window.requestAnimationFrame(function () {
                            processMatches(response, cacheMatches);
                        });
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error("AJAX request failed:", textStatus, errorThrown);
            }
        });
    }

    // Reset firstActivity after processing the matches
    firstActivity = false;
}

function updateMatchDetails(matchId) {
    const fiveMinutesAgo = Date.now() - (5 * 60 * 1000);
    const lastActivityTimestamp = parseInt(localStorage.getItem('lastActivityTimestamp'), 10);

    // Check for activity in the last 5 minutes
    if (!lastActivityTimestamp || lastActivityTimestamp < fiveMinutesAgo) {
        localStorage.setItem('matchIdUpdateDetails', matchId);
        return;
    }

    const baseUrl = `${window.location.origin}/match-details/get-automatic-match-detail/${matchId}`;

    // Fetch API request
    fetch(baseUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); // Parse JSON data from the response
        })
        .then(data => {
            if (data && data !== false) {
                window.requestAnimationFrame(() => {
                    processMatchDetails(data);
                });
            } else {
                console.log("No match details found or an error occurred.");
            }
        })
        .catch(error => {
            console.error("Fetch request failed:", error);
        });
}

function processMatchDetails(matchDetails) {
    const timeLapsedDiv = document.querySelector('.match-time-lapsed');
    if (timeLapsedDiv) {
        const elapsed = matchDetails.elapsed;

        if (parseInt(elapsed) <= 0 || (typeof elapsed === 'string' && elapsed.trim() === '')) {
            timeLapsedDiv.textContent = '';
            timeLapsedDiv.style.height = '15px';
            timeLapsedDiv.style.color = 'initial';
        } else {
            timeLapsedDiv.textContent = elapsed;
            timeLapsedDiv.style.color = '#f80069';
            timeLapsedDiv.style.height = 'auto';
        }
    }

    const statusDiv = document.querySelector('.match-status-class');
    if (statusDiv) {
        statusDiv.className = 'match-status-class ' + matchDetails.status_class;
        statusDiv.textContent = matchDetails.status;
    }

    const goalsHomeSpan = document.querySelector('.match-score-number.goals_home');
    const goalsAwaySpan = document.querySelector('.match-score-number.goals_away');
    const scoreDivider = document.querySelector('.match-score-divider');

    if (goalsHomeSpan) {
        goalsHomeSpan.textContent = matchDetails.goals_home;
    }

    if (goalsAwaySpan) {
        goalsAwaySpan.textContent = matchDetails.goals_away;
    }

    if (matchDetails.status === "Finished") {
        if (goalsHomeSpan) goalsHomeSpan.style.color = '';
        if (scoreDivider) scoreDivider.style.color = '';
        if (goalsAwaySpan) goalsAwaySpan.style.color = '';
    }

    console.log(matchDetails);
}


function processMatches(response, cacheMatches) {
    let updatesMade = false;

    for (let matchId in response) {
        let match = response[matchId];
        if (response.hasOwnProperty(match.id)) {
            let cachedHash = cacheMatches[matchId];
            if (cachedHash !== match.hash) {
                if (match.env === 'd') {
                    updateMatchContentDesktop(match, false);
                }

                updateMatchContentMobile(match, false);

                cacheMatches[matchId] = match.hash;
                updatesMade = true;
            }
        }
    }

    if (updatesMade) {
        localStorage.setItem('cacheMatches', JSON.stringify(cacheMatches));
    }
}

function updateMatchContentDesktop(match, shouldBlurTeamNames) {

    const container = document.querySelector(`#d${match.id}`);

    function updateTimeColumnMatchDesktop(container, match) {
        container.className = `align-middle text-center td-data bod-group-1`;

        const timeElement = container.querySelector('.score-time');

        const badgeElement = container.querySelector('.badge');
        if (match.status === 'In Progress') {
            if (timeElement) timeElement.remove();
            const liveDotSvg = `<svg width="6" height="6" viewBox="0 0 8 8" style="margin-right: 3px; vertical-align: sub;">
                                <circle fill="currentColor" cx="4" cy="4" r="4"></circle>
                            </svg>`;

            badgeElement.innerHTML = `${liveDotSvg}${match.elapsed === '0' ? 'Live' : `Live ${match.elapsed}`}`;
            badgeElement.className = 'badge badge-danger';
        } else if (match.status === 'Not Started') {
            if (timeElement) timeElement.textContent = match.adjustedDate;
            badgeElement.textContent = 'Upcoming';
            badgeElement.className = 'badge badge-upcoming';
        } else if (match.status === 'Match Finished') {
            if (timeElement) timeElement.textContent = match.adjustedDate;
            badgeElement.textContent = 'Finished';
            badgeElement.className = 'badge badge-success';
        }
    }

    function updateScoreColumnMatchDesktop(container, match) {
        const blur = match.subscribed !== 'subscribed' && match.status !== 'Match Finished' ? ' blur-element' : '';
        container.className = `align-middle text-center td-match bod-group-2`;

        const teamLeftName = container.querySelector('.score-left span');
        teamLeftName.textContent = match.home_short_name;
        if (shouldBlurTeamNames) {
            teamLeftName.className = blur;
        }

        const teamRightName = container.querySelector('.score-right span');
        teamRightName.textContent = match.away_short_name;
        if (shouldBlurTeamNames) {
            teamRightName.className = blur;
        }

        updateRedCards(container.querySelector('.score-left'), match.red_card_home, match.cdnUrl);
        updateRedCards(container.querySelector('.score-right'), match.red_card_away, match.cdnUrl);

        const scoreResult = container.querySelector('.score-result');
        if (match.status === 'Not Started') {
            scoreResult.innerHTML = '<span style="opacity: 0.8;">vs</span>';
        } else {
            const scoreClass = match.status === 'In Progress' ? 'text-danger' : '';
            const homeScore = `<span class="${scoreClass}"> ${match.goals_home} </span>`;
            const awayScore = `<span class="${scoreClass}"> ${match.goals_away} </span>`;
            scoreResult.innerHTML = `${homeScore}<span class="${scoreClass}">:</span>${awayScore}`;
        }
    }

    function updateRedCards(parentElement, redCards, cdnUrl) {
        const existingCards = parentElement.querySelectorAll('img[alt="red card"]');
        const redCardImageSrc = `${cdnUrl}/public/img/redcard.png`;

        if (existingCards.length === redCards) {
            return;
        }

        while (existingCards.length > redCards) {
            existingCards[existingCards.length - 1].remove();
        }

        for (let i = existingCards.length; i < redCards; i++) {
            const img = document.createElement('img');
            img.src = redCardImageSrc;
            img.style.cssText = 'width: 10px; height: 15px;';
            img.alt = 'red card';
            img.className = 'red-card';
            parentElement.insertBefore(img, parentElement.firstChild);
        }
    }

    updateTimeColumnMatchDesktop(container, match);
    updateScoreColumnMatchDesktop(container, match);
}


function updateMatchContentMobile(match, shouldBlurTeamNames) {

    const container = document.querySelector(`#m${match.id}`);

    function updateTimeColumnMatchMobile(container, match) {
        const timeContainer = container.querySelector('.min-league-date');
        const cssClass = match.status === 'Match Finished' ? 'low-opacity' : '';

        if (match.status === 'In Progress') {
            const elapsedTime = match.elapsed === '0' ? 'Live' : `${match.elapsed}`;
            timeContainer.innerHTML = `<div class="top ${cssClass}" style="color:#e1223c;">${elapsedTime}</div>`;
        } else {
            const [hour, minute] = match.adjustedDate.split(':');
            timeContainer.innerHTML = `
            <div class="top ${cssClass}" style="opacity:0.925">${hour}</div>
            <div class="bottom ${cssClass}" style="opacity:0.925">${minute}</div>
        `;
        }
    }

    function updateTeamsColumnMatchMobile(container, match) {
        const blur = match.blur_mobile ? ' blur-element' : '';
        const topTeamContainer = container.querySelector('.min-league-item .top');
        const bottomTeamContainer = container.querySelector('.min-league-item .bottom');

        if (shouldBlurTeamNames) {
            topTeamContainer.className = `top ${blur}`;
            bottomTeamContainer.className = `bottom ${blur}`;
        } else {
            topTeamContainer.className = `top`;
            bottomTeamContainer.className = `bottom`;
        }

        updateRedCardsForMobile(topTeamContainer, match.red_card_home, match.cdnUrl);
        updateRedCardsForMobile(bottomTeamContainer, match.red_card_away, match.cdnUrl);
    }

    function updateScoreColumnMatchMobile(container, match) {
        const scoreContainer = container.querySelector('.min-league-score');
        const cssClass = match.status === 'Match Finished' ? 'low-opacity' : '';
        const homeScore = match.status === 'Not Started' ? '' : (match.status === 'In Progress' ? `<span class="text-danger">${match.goals_home}</span>` : `<span>${match.goals_home}</span>`);
        const awayScore = match.status === 'Not Started' ? '' : (match.status === 'In Progress' ? `<span class="text-danger">${match.goals_away}</span>` : `<span>${match.goals_away}</span>`);
        scoreContainer.innerHTML = `
        <div class="top ${cssClass}">${homeScore}</div>
        <div class="bottom ${cssClass}">${awayScore}</div>
    `;
    }

    function updateRedCardsForMobile(parentElement, redCards, cdnUrl) {
        const existingRedCards = parentElement.querySelectorAll('img[alt="red card"]');
        const redCardImageSrc = `${cdnUrl}/public/img/redcard.png`;

        if (existingRedCards.length === redCards) {
            return;
        }

        while (existingRedCards.length > redCards) {
            const card = existingRedCards[existingRedCards.length - 1];
            if (card) card.remove();
        }

        for (let i = existingRedCards.length; i < redCards; i++) {
            const img = document.createElement('img');
            img.src = redCardImageSrc;
            img.alt = 'red card';
            img.className = 'red-card';
            img.style.cssText = 'width: 10px; height: 15px; margin-left: 2.5px;';

            parentElement.appendChild(img);
        }
    }

    updateTimeColumnMatchMobile(container, match);
    updateTeamsColumnMatchMobile(container, match);
    updateScoreColumnMatchMobile(container, match);
}

var updateIntervalId;

function displayAllPages(date, type, page) {
    var baseurl = window.location.origin + '/all-matches/get-matches';
    var data = {
        date: date,
        type: type,
        page: page
    };

    $.ajax({
        method: "POST",
        url: baseurl,
        data: data,
        beforeSend: function (jqXHR) {
            $.xhrPool.push(jqXHR);
            $(".main-fader").show();
        },
        success: function success(response) {
            if (response !== false && response !== '') {
                $(".main-fader").hide();
                $("#accordion").append(response);
                page = page + 1;
                displayAllPages(date, type, page);
            } else {
                $(".main-fader").hide();
                if (updateIntervalId) {
                    clearInterval(updateIntervalId);
                }
                updateIntervalId = setInterval(function () {
                    updateMatchesContent(date, type);
                }, 20000);
            }
        },
        error: function error(xhr, ajaxOptions, thrownError) {
        }
    });
}

var hideError = function hideError() {
    jQuery(".error-validation").hide("slow");
    jQuery(".error-validation").text("");
    jQuery(".error-validation-main").hide("slow");
    jQuery(".error-validation-main").text("");
};

$(".close-message").click(function () {
    $(this).parent().slideUp("slow");
});
setTimeout(function () {
    jQuery(".notification").slideUp("slow");
}, 7000);

// Check login attempts on page load
document.addEventListener('DOMContentLoaded', checkLoginAttempts);

// Function to check login attempts
function checkLoginAttempts() {
    let loginAttempts = parseInt(localStorage.getItem('loginAttempts')) || 0;

    if (loginAttempts >= 3) {
        showCaptchaModal();
    }
}


// Function to show the captcha modal
function showCaptchaModal() {
    const captchaModal = document.getElementById('captchaModal');
    captchaModal.style.display = 'block';
}

// Function to hide the captcha modal
function hideCaptchaModal() {
    const captchaModal = document.getElementById('captchaModal');
    captchaModal.style.display = 'none';
}

// Function to increment login attempts and show captcha if needed
function incrementLoginAttempts() {
    let loginAttempts = parseInt(localStorage.getItem('loginAttempts')) || 0;
    loginAttempts++;

    localStorage.setItem('loginAttempts', loginAttempts);

    if (loginAttempts >= 3) {
        showCaptchaModal();
    }
}

function isCaptchaModalVisible() {
    const captchaModal = document.getElementById('captchaModal');
    const displayStyle = window.getComputedStyle(captchaModal).getPropertyValue('display');

    return displayStyle === 'block';
}


// Drop Down Function 
// Function to toggle dropdown visibility
function toggleDropdown() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    const arrow = document.getElementById("arrow");

    dropdownMenu.classList.toggle("show");
    arrow.innerHTML = dropdownMenu.classList.contains("show") ? "&#9650;" : "&#9660;";
  }

  // Close the dropdown if clicked outside
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      const arrow = document.getElementById("arrow");

      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          arrow.innerHTML = "&#9660;";
        }
      }
    }
  }

  // User-based actions
  function uploadFile() {
    alert("Upload File clicked.");
    // Add functionality to open file upload dialog
  }

  function viewFiles() {
    alert("View Files clicked.");
    // Add functionality to view user files
  }

  function deleteFile() {
    alert("Delete File clicked.");
    // Add functionality to delete a file
  }

  function downloadFile() {
    alert("Download File clicked.");
    // Add functionality to download a file
  }

  function settings() {
    alert("Settings clicked.");
    // Add functionality to open user settings
  }