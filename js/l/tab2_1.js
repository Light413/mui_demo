//设置各块面板的初始宽高
$(".all_list").focus();
var width = $("body").width();
width = parseInt(width) * 0.73 - 1 + "px";
$(".all_list").css("width", width);
$(".bottom_nav").css("width", $("body").width());
$(".menus").css("height", $(window).height() * 1);
$(".menus").css("max-height", $(window).height() * 0.9);

$(".all_list").css("max-height", $(window).height() * 0.9);
$(".pa_bo").css("height", $(window).height() * 1)


//防止在手机端时菜单栏下拉与主屏下拉冲突
$("body").css({"height": "100%", "overflow": "hidden"});
$("html").css({"height": "100%", "overflow": "hidden"});

//商品栏各个栏目的ID
var type =  MENU_IDs; //["tuijian", "taocan", "liangcai"];
//判断是否在滚动中
var ff = 0;
var timeId, timeId2;

//解决iPhone5 transform:不生效
if ($(window).width() > 321) {
    $(".pic img").css("transform", "translate(-50%,-50%)");

} else {
    $(".pic img").css("margin", "-50%");
}

//判断当前所在的位置为合适的栏目加上样式
timeId = window.setTimeout("skipHref()", 200);
function skipHref() {
    if (ff == 1) {
    } else {
        $.each(type, function (i) {
            if ($("#" + type[i]).offset().top < $(window).height() * 0.1) {
                $(".menus li").removeClass("active");
                $(".menus a").removeClass("active");
                $("a[href=#" + type[i] + "]").parent().addClass("active");
                $("a[href=#" + type[i] + "]").addClass("active");

                var text = $("a[href=#" + type[i] + "]").text();
				//....
                $(".title").removeClass("active");
                $("p:contains(" + text + ")").addClass("active");
            }

        });
        timeId = window.setTimeout("skipHref()", 200);
    }

    $(".all_list").focus();

}
/* 锚点跳转 */
var j = 0, posL = [], posO = {};
function aSkip(o) {
    clearTimeout(timeId);
    ff = 1;
    timeId2 = window.setTimeout("isStop()", 200);
    $(".menus li").removeClass("active");
    $(".menus a").removeClass("active");
    var text = $(o).text();
	//....
    $(".title").removeClass("active");
    $("p:contains(" + text + ")").addClass("active");
    $(o).addClass("active");
    $(o).parent().addClass("active");

    //平滑跳转
    if (j == 0) {
        $.each(type, function (i, item) {
            posO.id = "#" + type[i];
            posO.top = $("#" + type[i]).offset().top + $(".all_list").scrollTop();
            posL[i] = posO;
            posO = {};
        });
        $.each(posL, function (i, item) {
            if ($(o).attr("href") == item.id) {
                $(".all_list").animate({scrollTop: item.top}, 100);
            }
        });
        j++;

    } else {
        $(".all_list").stop();
        $.each(posL, function (i, item) {
            if ($(o).attr("href") == item.id) {
                $(".all_list").animate({scrollTop: item.top}, 100);
            }
        });
    }


};


//锚点连接后判断动画是否完成
function isStop() {
    //alert($(".all_list").is(":animated"))
    if ($(".all_list").is(":animated")) {
        ff = 1;
        timeId2 = window.setTimeout("isStop()", 200);
    } else {
        ff = 0;
        clearTimeout(timeId2);

    }
}

//左右联动
$(".all_list").on("scrollstop", function () {
    if (ff == 0) {
        console.log("?");
        timeId = window.setTimeout("skipHref()", 100);
    } else {
        clearTimeout(timeId);
    }


});

