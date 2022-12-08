function layout() {
    // nav
    $navBtn.click(function(){
        // TweenMax.to($navWrap, .3, { opacity:1, visibility:"visible" });
        TweenMax.to($navWrap, .3, { left:0 });
        TweenMax.to("body,html", .3, { "overflow-y":"hidden" });
    });

    $navCloseBtn.click(function(){
        TweenMax.to($navWrap, .3, { left:"100vw" });
        TweenMax.to("body,html", .3, { "overflow-y":"auto" });
    });

    // bottomBar
    $requestBtn.on("click", function(){
        $bottomBar.toggleClass("navi_active");
    });

    // tabMenu
    var $tabMenu = $(".tab_menu li"),
        $tabCont = $(".tab_contents > div");

    $tabMenu.click(function(){
        var _idx = $(this).index();
        $tabMenu.removeClass("active");
        $tabCont.hide();

       $(this).addClass("active");
        $tabCont.eq(_idx).show();
    });
}