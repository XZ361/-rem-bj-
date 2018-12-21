$(function () {
//手势切换的轮播图
    /*1.自动轮播切换 无缝*/


    var $banner = $('.sn_banner');
    var width = $banner.width();
    var $imageBox = $banner.find('ul:first');
    var $pointBox = $banner.find('ul:last');
    var $points = $pointBox.find('li');
    var animationFuc=function () {
        /*动画*/
        $imageBox.animate({transform: 'translate(' + (-index * width) + 'px)'}, 200, function () {
            /*动画执行完成的回调*/
            if (index >= 9) {
                /*瞬间*/
                index = 1;
                $imageBox.css({transform: 'translate(' + (-index * width) + 'px)'});
            } else if (index <= 0) {
                index = 8;
                $imageBox.css({transform: 'translate(' + (-index * width) + 'px)'});
            }
            /*2.点随着变换*/
            /*index范围1-8*/
            $points.removeClass('now').eq(index - 1).addClass('now');
        });
    };

    /*自动轮播功能 无缝*/
    var index = 1;
    var timer = setInterval(function () {
        index++;
        animationFuc();
    }, 5000);
    /*3. 完成手势切换*/
    /*左滑 ，下一张*/
    $banner.on('swipeLeft',function () {
        index++;
        animationFuc();
    });
    /*右滑 ，上一张*/
    $banner.on('swipeRight',function () {
        index--;
        animationFuc();
    });
});