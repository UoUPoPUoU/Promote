$(document).ready(function () {
    // Carousel
    function move(moveX, prevX, nextX) {
        var divFather = $(moveX),
            divs = divFather.children(".imgFloat"),
            prev = divFather.children(prevX),
            next = divFather.children(nextX),
            divFir = divs.eq(0),
            divLat = divs.eq(5);
        prev.click(function () {
            if (divFir) {
                divFather.append($(moveX + ' div:nth-of-type(1)'));
            }
        });
        next.click(function () {
            if (divLat) {
                divFather.prepend($(moveX + ' div:nth-of-type(6)'));
            }
        });
    }

    move(".moveOne", ".prevOne", ".nextOne");
    move(".moveTwo", ".prevTwo", ".nextTwo");
    move(".moveThree", ".prevThree", ".nextThree");

    // changeColor
    var likeColor = $('.likeHead i'),
        likeFont = $('.likeHead > p'),
        clickNumber = 0;
    likeColor.click(function () {
        clickNumber = clickNumber + 1;
        if (clickNumber == 1) {
            likeColor.css('color', 'red');
            likeFont.html('我也喜欢你 ~ ');
        }
        if (clickNumber == 2) {
            likeFont.html('我已经感受到啦 ~');
        }

    });

    // like stop
    var like = $('.likeHead');
    like.mouseover(function () {
        like.css("animationPlayState", "paused");
    });
    like.mouseout(function () {
        like.css("animationPlayState", "running");
    });

    // 点击 返回顶部
    var backTop = $('.backTop');
    $(window).scroll(function () {
        // 获取滚动条位置
        var scrollBar = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        // 如果滚动条大于680的时候 猫往下滑动，其他情况就隐藏
        if (scrollBar >= 680) {
            backTop.stop().animate({top: '-270px'});
        } else {
            backTop.stop().animate({top: '-900px'});
        }
    });
    backTop.click(function () {
        $('body,html').animate({scrollTop: 0}, 2000);
    });

    // play music
    var moth;
    if (!moth) {
        moth = new Audio('LePapillon.mp3');
    }
    $('.music').click(function () {
        if (moth.ended) {
            moth.currentTime = 0;
        }
        if (moth.paused) {
            moth.play();
            cute.pause();
        }
        else {
            moth.pause();
        }
    });
    var cute;
    if (!cute) {
        cute = new Audio("cute.mp3");
        cute.loop = true
    }
    console.log(cute.loop);
    $('.img-circle').click(function () {
        if (cute.paused) {
            cute.play();
            moth.pause();
            $(this).addClass('rotate');
        } else {
            $(this).removeClass('rotate');
            cute.pause();
        }
    });


    // mouseover
    var QQ = $('.fa-qq');
    QQ.mouseover(function () {
        $('.footer div:nth-of-type(1)').stop().animate({bottom: '9px'}, 1000);
    });
    QQ.mouseout(function () {
        $('.footer div:nth-of-type(1)').stop().animate({bottom: '-139px'}, 1000);
    });
    var wx = $('.footer .fa-wechat ');
    wx.mouseover(function () {
        $('.footer div:nth-of-type(3)').stop().animate({bottom: '4px'}, 1000);
    });
    wx.mouseout(function () {
        $('.footer div:nth-of-type(3)').stop().animate({bottom: '-139px'}, 1000);
    });


});
