function reCaptchaOnLoginFocus() {
    var head = document.getElementsByTagName('head')[0]
    var script = document.createElement('script')
    script.type = 'text/javascript';
    script.src = 'https://www.google.com/recaptcha/api.js'
    head.appendChild(script);
  };

jQuery(document).ready(function($) {

    const dappCoreStore = 'persist:dapp-core-store';
    const dappExpiresAt = 'dapp-core-login-expires-at';
    const walletConnect = 'walletconnect';

    jQuery('.logout-btn').click(function(e){
        localStorage.removeItem(dappCoreStore);
        localStorage.removeItem(dappExpiresAt);
        localStorage.removeItem(walletConnect);
    });

    function waitForDappAddress() {
        const address = JSON.parse(JSON.parse(localStorage.getItem(dappCoreStore)).account).account.address;
        if (address) {
            const baseurl = window.location.origin + '/login/wallet-login';
            const data = localStorage.getItem(dappCoreStore);
            $.ajax({
                method: 'POST',
                url: baseurl,
                data: { data: data },
                success: function success(data) {
                    localStorage.removeItem(dappCoreStore);
                    localStorage.removeItem(dappExpiresAt);
                    localStorage.removeItem(walletConnect);
                    const reloadUrl = window.location.origin + '/bet-of-the-day';
                    window.location.replace(reloadUrl);
                },
                error: function error(xhr, ajaxOptions, thrownError) {
                }
            });
        } else {
            setTimeout(waitForDappAddress, 250);
        }
    }

    if (window.location.pathname === '/bet-of-the-day' && window.location.search.includes('login=true')) {
        waitForDappAddress();
    }

    if (window.location.pathname === '/unlock') {
        $('#login-wallet').prependTo('#login-modal-wallet').css('display', 'block');
    }

    jQuery('.login-email-btn').click(function(e){
        e.preventDefault();
        $('.nt-form-footer').hide();
        $('.login-hidden-body').fadeIn();
    });

    jQuery('#login-modal-wallet').submit(function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    jQuery('.ledger-login_wrapper').submit(function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    $('#register-submit').on("click touchstart", function (event) {
        event.preventDefault();
        var baseurl = window.location.origin + '/login/signup';
        window.location.replace(baseurl);
    });

    //***************************
    // Get Bankers By Date
    //***************************
    jQuery(".date-button2").on("click", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        localStorage.setItem('lastDate', $(".date-button2.active").attr("data-value"));
        localStorage.setItem('currentDate', this.dataset.value);
        let baseurl = window.location.origin + '/bet-of-the-day/get-bankers';
        var data = {
            date: this.dataset.value,
            type: jQuery(".type-button2.active").attr("data-value"),
            page: 1
        };

        if (baseurl == window.location.origin + '/bet-of-the-day/get-bankers' && (this.dataset.value == "tommorow" || this.dataset.value == "tommorow1" || this.dataset.value == "tommorow2")) {
            $('.matches-tab-nav a[href="#bankers"]').tab('show');
            $('.matches-tab-nav').hide();

            $('.nt-bank-count').show();
            $('.nt-slip-count').hide();

            data = {
                date: this.dataset.value,
                type: "bankers",
                page: 1
            };
        } else {
            $('.matches-tab-nav').show();
            data = {
                date: this.dataset.value,
                type: jQuery(".type-button2.active").attr("data-value"),
                page: 1
            };
        }

        $(".date-button2").removeClass("active");
        this.classList.add('active');

        // Reset scroll position to the beginning
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
                $("#accordion2").empty();
                $(".main-fader2").show();
            },
            success: function (response) {
                if (response !== false && response !== '') {
                    $(".main-fader2").hide();
                    $("#accordion2").append(response);
                } else {
                    $(".main-fader2").hide();
                }
            }
        });

        baseurl = window.location.origin + '/bet-of-the-day/get-match-statistics-bet';
        $.ajax({
            method: "POST",
            url: baseurl,
            data: data,
            dataType: 'JSON',
            success: function (response) {
                if (response !== false && response !== '') {
                    $('#predicted_count').text(response.predicted);
                    $('#slip_predicted_count').text(response.slip_predicted);
                    $('#notstarted_count').text(response.not_started);
                    $('#slip_notstarted_count').text(response.slip_not_started);
                    $('#success_rate').text(response.success_rate);
                    $('#slip_success_rate').text(response.slip_success_rate);
                }
            }
        });
    });


    //***************************
    // Get Bankers By Type
    //***************************
    jQuery(".type-button2").on("click", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        var ntHref = $(e.target).attr('href');

        if(ntHref == '#value'){
            $('.nt-bank-count').hide();
            $('.nt-slip-count').show();
        }

        if(ntHref == '#bankers'){
            $('.nt-bank-count').show();
            $('.nt-slip-count').hide();
        }


        var baseurl = window.location.origin + '/bet-of-the-day/get-bankers';
        var data = {
            date: jQuery(".date-button2.active").attr("data-value"),
            type: this.dataset.value
        };

        $(".type-button2").removeClass("active");
        this.classList.add('active');
        $.xhrPool.abortAll();

        $.ajax({
            method: "POST",
            url: baseurl,
            data: data,
            beforeSend: function(jqXHR) {
                $.xhrPool.push(jqXHR);
                $( "#accordion2" ).empty();
                $(".main-fader2").show();
            },
            success: function success(response) {
                if (response !== false && response !== '') {
                    $(".main-fader2").hide();
                    $( "#accordion2" ).empty();
                    $( "#accordion2" ).append(response);
                    displayAllPages(data.date, data.type, 2);
                } else {
                    $(".main-fader2").hide();
                    $( "#accordion2" ).empty();
                }
            },
            error: function error(xhr, ajaxOptions, thrownError) {

            }
        });
    });

    //***************************
    // Get Bankers First time
    //***************************
    if($("#display-all2").length)
    {
        $("#display-all2").remove()
        //displayBankers('today', 'bankers');
    }

    function displayBankers(date, type) {
        var baseurl = window.location.origin + '/bet-of-the-day/get-bankers';
        var data = {
            date: date,
            type: type
        };

        $.ajax({
            method: "POST",
            url: baseurl,
            data: data,
            beforeSend: function(jqXHR) {
                $.xhrPool.push(jqXHR);
                $(".main-fader2").show();
            },
            success: function success(response) {
                if (response !== false && response !== '') {
                    $(".main-fader2").hide();
                    $( "#accordion2" ).append(response);
                    //displayBankers(date,type);
                } else {
                    $(".main-fader2").hide();
                }
            },
            error: function error(xhr, ajaxOptions, thrownError) {
            }
        });
    }

    $(".nt-point-item input").click(function(){



        var loggedIn = $(this).data('login');
        if(loggedIn == 'yes'){
            //$("#loginModal").modal()
            //reCaptchaOnLoginFocus()
            window.location.href = '/login';
            return false;
        }
        var values = {};
        $.each($('form.nt-vs-list').serializeArray(), function(i, field) {
            values[field.name] = field.value;
        });
        var size = Object.keys(values).length;
        if(size == 10){
            $('#matchSubmit').prop("disabled", false);
        }else{
            $('#matchSubmit').prop("disabled", true);
        }
        //console.log(size);
});


    $('#matchSubmit').on("click", function (e) {
        e.preventDefault();
        var baseurl = window.location.origin + '/hitandwin';
        var data = $('form.nt-vs-list').serialize();

        $.ajax({
            method: "POST",
            url: baseurl,
            data: data,
            dataType: 'JSON',
            beforeSend: function() {
                $('#preloader').show().css({'opacity' : '1', 'background': 'rgba(0,0,0,0.5)'});
                $('#matchSubmit').prop("disabled", true);

                console.log('I am sending data to backend...');
            },
            success: function success(response) {
                $('#preloader').hide().css({'opacity' : '0'});
                $('.nt-point-item input').prop('checked', false);
                $('#matchSubmit').prop("disabled", true);
             //   console.log(response);
                    if(response.error){
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: response.message,
                        })

                    }
                    if(response.success){
                        $('.nt-slip-wrap').html(response.slips)
                        Swal.fire({
                            icon: 'success',
                            title: 'Good Job',
                            text: response.message,
                        })


                    }

            },
            error: function error(xhr, ajaxOptions, thrownError) {
            }
        });

    });

    $('#updateTimezone').on("click", function (e) {
        e.preventDefault();
        var baseurl = window.location.origin + '/myaccount/change-timestamp'; // Make sure this URL is correct
        try {
            window.location.href = 'gonative://webview/clearCache';
        } catch (error) {
        }

        $.ajax({
            method: "POST",
            url: baseurl,
            dataType: 'JSON',
            beforeSend: function() {
                $('#preloader').show().css({'opacity' : '1', 'background': 'rgba(0,0,0,0.5)'});
            },
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

    $('#manual-update-timezone').on('submit', function (e) {
        e.preventDefault();
        var baseurl = window.location.origin + '/myaccount/manually-update-timezone';

        // Get the selected timezone and offset from the dropdown
        var selectedTimezone = $('#manualTimezoneSelect').val();
        var timezoneParts = selectedTimezone.split('|');
        var timezoneLocation = timezoneParts[0]; // e.g., "Europe/Bucharest"
        var timezoneOffset = timezoneParts[1];   // e.g., "120"

        // AJAX request to update the timezone on the server
        $.ajax({
            method: "POST",
            url: baseurl,
            data: {
                timezone: timezoneLocation,
                offset: timezoneOffset
            },
            dataType: 'JSON',
            success: function(response) {
                if(response.success){
                    Swal.fire({
                        icon: 'success',
                        title: 'Timezone Updated',
                        text: 'Your timezone has been successfully updated!',
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
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'There was an error updating your timezone.',
                });
            }
        });
    });


    $('#subscribeCheckbox').change(function() {
        if (!this.checked) {
            var baseurl = window.location.origin + '/myaccount/unsubscribe';

            $.ajax({
                method: "POST",
                url: baseurl,
                dataType: 'JSON',
                beforeSend: function () {
                    $('#preloader').show().css({'opacity': '1', 'background': 'rgba(0,0,0,0.5)'});
                },
                success: function (response) {
                    $('#preloader').hide().css({'opacity': '0'});
                    if (response.success) {
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
                error: function (xhr, ajaxOptions, thrownError) {
                    $('#preloader').hide().css({'opacity': '0'});
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'There was an error processing your request.',
                    });
                }
            });
        } else {
            var baseurl = window.location.origin + '/myaccount/subscribe';

            $.ajax({
                method: "POST",
                url: baseurl,
                dataType: 'JSON',
                beforeSend: function () {
                    $('#preloader').show().css({'opacity': '1', 'background': 'rgba(0,0,0,0.5)'});
                },
                success: function (response) {
                    $('#preloader').hide().css({'opacity': '0'});
                    if (response.success) {
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
                error: function (xhr, ajaxOptions, thrownError) {
                    $('#preloader').hide().css({'opacity': '0'});
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'There was an error processing your request.',
                    });
                }
            });
        }
    });


    $(".nt-match-details-tab-nav .nav-link").on("click", function (e) {
//     e.preventDefault();
//     e.stopImmediatePropagation();
  $(".nav-link").removeClass("active");
  $(".tab-pane").removeClass("active");
  $(".tab-pane").removeClass("show");
   $(this).addClass('active');
    var cId = $(this).attr('href');
    $(cId).addClass('active')
    $(cId).addClass('show')

    var myScrollPos = $('.scroller > .nav-item > a.active').offset().left + $('.scroller > .nav-item > a.active').outerWidth(true)/2 + $('.scroller').scrollLeft() - $('.scroller').width()/2 - 40;
    $('.scroller').scrollLeft(myScrollPos);
    $.xhrPool.abortAll();
});




    /*------------------------------
        hitandwin-pricing-carousel
    -------------------------------*/

    $('.hitandwin-pricing-carousel').slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev pull-left"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:#d4d8e3;fill-opacity:1;" d="M 13.25 4.328125 L 7.410156 10 L 13.246094 15.671875 L 12.929688 16 L 6.75 10 L 12.929688 4 Z M 13.25 4.328125 "></path></g></svg></button>',
        nextArrow: '<button type="button" class="slick-next pull-right"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 20 20" version="1.1"><g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:#d4d8e3;fill-opacity:1;" d="M 6.753906 15.671875 L 12.589844 10 L 6.75 4.328125 L 7.070312 4 L 13.246094 10 L 7.070312 16 Z M 6.753906 15.671875 "></path></g></svg></button>',
        dots: false,
        dotsClass: 'investment-section-dots',
        customPaging: function customPaging(slider, i) {
          var slideNumber = i + 1,
              totalSlides = slider.slideCount;
          return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
        },
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
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

      // var $adSticy = $('.nt-ad-sticky');
      // var adPos = $adSticy.offset().top;
      //
      // // on scroll
      // $(window).scroll(function() {
      //
      //     // get scroll position from top of the page
      //     var adScrollPos = $(this).scrollTop() + 150;
      //     if (adPos < adScrollPos && $(".nt-matches-list").height() + $(".nt-matches-list").offset().top - 190 > adScrollPos) {
      //         $adSticy.addClass('adFixed');
      //     } else {
      //         $adSticy.removeClass('adFixed');
      //     }
      //
      // });



      $('#sort_by').on('change', function () {
        if($('#search').val().length == 0){
            $('#apply-filter-subscribed').prop('disabled', !$(this).val());
        }

    }).trigger('change');

    $('#search').on('keyup', function () {
        $('#apply-filter-subscribed').prop('disabled', !$(this).val());
    }).trigger('change');

    //   var adStickyTop = $('.nt-ad-sticky').offset().top;
    //   jQuery(window).scroll(function() {
    //     var adWindowTop = $(window).scrollTop() + 150;
    //     var mListHeight = $(".nt-matches-list").height();
    //     if (adStickyTop < adWindowTop &&  mListHeight + $(".nt-matches-list").offset().top - $(".nt-ad-sticky").height() > adWindowTop) {
    //     $('.nt-ad-sticky').addClass('adFixed');
    //     } else {
    //     $('.nt-ad-sticky').removeClass('adFixed');
    //     }
    //   });

    var selectedTimeZoneId = $("#selectedTimezone").val();
    // Set the selected value of the dropdown based on the hidden input field
    $("#timezone option[data-time-zone-id='" + selectedTimeZoneId + "']").prop("selected", true);

    $('#timezone').on('change', function() {
        const timezoneName = $(this).find('option:selected').text().split(') ')[1];
        const timezoneOffset = $(this).val();
        const timeZoneId = $(this).find('option:selected').data('time-zone-id');

        // 30 days from now
        const date = new Date();
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
        const expires = "; expires=" + date.toUTCString();

        document.cookie = "timezone=" + timezoneName + expires + "; path=/";
        const offsetMinutes = timezoneOffset * 60;
        document.cookie = "timezone_offset=" + offsetMinutes + expires + "; path=/";

        $.ajax({
            url: "/login/change_timezone",// change this to your server-side endpoint
            method: 'POST',
            data: {
                timeZoneId: timeZoneId
            },
            success: function(response) {
                console.log('Timezone ID saved successfully:', response);
            },
            error: function(err) {
                console.error('Error saving Timezone ID:', err);
            }
        });

    });
});


// let inputPhone = document.querySelector("#phone");
// let country = document.querySelector("#country-code");
//
// var iti = window.intlTelInput(inputPhone, {
//     initialCountry: "auto",
//     // separateDialCode: true,
//     geoIpLookup: function(callback) {
//         $.get('https://ipinfo.io?token=aa5a67820a8fd2', function() {}, "jsonp").always(function(resp) {
//             let countryCode = (resp && resp.country) ? resp.country : "us";
//             callback(countryCode);
//         });
//     },
//     utilsScript: "/public/js/lib/utils.js"
// });
//
// inputPhone.addEventListener('countrychange', function(e) {
//     country.value = iti.getSelectedCountryData().dialCode;
// });
