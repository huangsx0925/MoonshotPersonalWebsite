window.onload = function() {
    $(function() {
        $(".to-top").hide();
        $(".menu-bar").hide();
        $(".menu-bar").css("top", 77);
        $(window).scroll(function() {
            var scrolltop = $(window).scrollTop();
            if (scrolltop > 0) {
                $(".to-top").show();
            } else {
                $(".to-top").hide();
            }
            if (scrolltop <= 20) {
                $(".title").css("height", 70 - scrolltop);
                $(".title").css("padding", 20 - 0.5 * scrolltop);
                $(".menu-bar").css("top", 77 - 0.5 * scrolltop);
            } else {
                $(".title").css("height", "50");
                $(".title").css("padding", "10");
                $(".menu-bar").css("top", 67);
            }
        });
        $(".to-top").click(function() {
            $("html,body").animate({ scrollTop: 0 }, 500);
        });

        $(".menu").mouseover(function() {
            $(".menu-bar").show();
        });
        $(".menu").mouseout(function() {
            $(".menu-bar").hide();
        });
        $(".menu-bar").mouseover(function() {
            $(".menu-bar").show();
        });
        $(".menu-bar").mouseout(function() {
            $(".menu-bar").hide();
        });
    });

    // $(function() {
    //     var scroll_offset = $(".note").offset(); //目标位置的ID
    //     $(window).scroll(function() {
    //         var scrolltop = $(window).scrollTop(); //获取当前页面顶部的坐标
    //         if (scrolltop >= scroll_offset.top) { //将当前页面顶部top值与 目标位置的top值做比较
    //             $(".to-top").show(); //当当前窗口顶部坐标大于目标位置时，按钮显示   否则隐藏按钮
    //         } else {
    //             $(".to-top").hide();
    //         }
    //     });
    //     $(".to-top").click(function() {
    //         $("html,body").animate({ scrollTop: scroll_offset.top }, 500); //	利用scrollTop将页面顶部位置指定到某坐标
    //     });
    // });
}