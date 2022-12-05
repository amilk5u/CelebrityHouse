function mypage() {
    /*var $termsWrap = $(".payment_agree_wrap"),
        $termsAllBtn = $(".payment_agree_all button"),
        $termsContent = $(".payment_agree_singly");

    $termsAllBtn.click(function(){
        if ($termsWrap.hasClass("active")) {
            $termsWrap.removeClass("active");
            TweenMax.to($termsContent, .3, {height: "auto"});
        } else {
            $termsWrap.addClass("active");
            TweenMax.to($termsContent, .3, {height: 0});
        }
    });*/

    // 클립보드
    var $copyBtn = new ClipboardJS('.btn_copy'),
        $copyInfoTxt = $(".copied_txt");

    $copyBtn.on('success', function() {
        TweenMax.to($copyInfoTxt, .5, { opacity:1, visibility:"visible", y:0, onComplete:function(){
            TweenMax.to($copyInfoTxt, .5, { opacity:0, visibility:"hidden", y:"150%", delay:2 });
        }});
    });

    // 추천링크
    var $copyLinkBtn = new ClipboardJS('.btn_copy_link'),
        $copyLInkInfoTxt = $(".copied_link_txt");

    $copyLinkBtn.on('success', function() {
        TweenMax.to($copyLInkInfoTxt, .5, { opacity:1, visibility:"visible", y:0, onComplete:function(){
            TweenMax.to($copyLInkInfoTxt, .5, { opacity:0, visibility:"hidden", y:"150%", delay:2 });
        }});
    });
}