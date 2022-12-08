"use strict";
var winW;
var winH;
var $window = $(window);
var winSc = $(window).scrollTop();

var $navBtn = $(".btn_nav"),
    $navWrap = $("#nav"),
    $navCloseBtn = $(".btn_nav_close");

var $bottomBar = $(".bottom_navi_wrap"),
    $requestBtn = $bottomBar.find(".btn_request");

$window.load(function () {
    var _this =  $(this);
    winW = _this.width();
    winH = _this.height();
    winSc = _this.scrollTop();
    $window.on("resize", function () {
        winW = _this.width();
        winH = _this.height();
    });
    _this.trigger("resize");
    $(window).scroll(function () {
        winSc = _this.scrollTop();
    });
    layout();
    main();
    member();
    join();
    mypage();
    customer();
});
function customer() {
    var $marketingWrap = $(".marketing_wrap div");
    $marketingWrap.on("click", function(){
        $marketingWrap.toggleClass("active");
    });

    /* 채팅 입력란 */
    var $chatWrite = $(".chat_write"),
        $chatBtn = $(".chat_write .btn_write"),
        $chatTextArea = $(".chat_write textarea"),
        $chatView = $(".chat_view");

    $chatTextArea.on({
        focus: function() {
            $chatWrite.addClass("keyup");
            $chatView.addClass("h_resize");
        },
        keyup: function() {
            $chatWrite.addClass("keyup");
            if($chatTextArea.val() !== ""){
                $chatBtn.removeAttr("disabled");
            }else{
                $chatWrite.removeClass("active");
                $chatBtn.attr("disabled","disabled")
            }
        },
        blur: function() {
            $chatWrite.removeClass("keyup");
            // $chatView.removeClass("keyup");

            if($chatTextArea.val() !== ""){
                $chatWrite.addClass("active");
                $chatView.addClass("h_resize");
            }else{
                $chatWrite.removeClass("active");
                $chatView.removeClass("h_resize");
            }
        }
    });
}
function join() {
    // 조인 메뉴 고정
    /*var $join = $(".join_wrap"),
        $joinList = $(".join_list_wrap");

    $(window).scroll(function(){
        var $scrolltop = $(this).scrollTop();
        var $headerH = $("#header").outerHeight(),
            $joinTitleH = $(".sub_title_wrap2").outerHeight(),
            $joinHeader = $(".join_top_wrap").outerHeight();

        var _totalHeight = $headerH+$joinTitleH;

        if($scrolltop < _totalHeight){
            if($join.hasClass("join_wrap_fix")){
                $join.removeClass("join_wrap_fix");
                $joinList.css({"margin-top":0})
            }
        }else{
            $join.addClass("join_wrap_fix");
            $joinList.css({"margin-top":$joinHeader})
        }
    });*/

    //셀럽 동반 라운딩 이벤트
    if ($(".join_wrap").hasClass('join_wrap_event')) {
        var $sort = $('.join_top_wrap'),
            $header = $('#header'),
            _sortPos = Math.round($sort.offset().top),
            _sortHeight = Math.round($sort.outerHeight()),
            _headerHeight = Math.round($header.outerHeight()),
            _fixcalulator = _sortPos - _sortHeight - _headerHeight;

        $(window).scroll(function () {
            var $st = $(this).scrollTop();
            if ($st > _fixcalulator) {
                $('.list_rounding_wrap').addClass('sort_fix');
            } else {
                $('.list_rounding_wrap').removeClass('sort_fix');
            }
        });
    }
    var swiper_celeb_event = new Swiper(".celeb_event_slide", {
        resistance: true,
        resistanceRatio: 0,
        slidesPerView: "auto",
        pagination: {
            el: ".swiper-pagination"
        },
    });

    // 정렬하기
    var $alignBtn = $(".btn_align"),
        $alignWrap = $(".align_wrap"),
        $alignWrapbg = $(".align_wrap .dimmed")

    $alignBtn.on("click", function () {
        $alignWrap.addClass("active");
    });
    $alignWrapbg.on("click", function () {
        $alignWrap.removeClass("active");
    });

    // 필터
    var $filterBtn = $(".btn_filter"),
        $filterWrap = $(".filter_wrap"),
        $filterWrapBg = $(".filter_wrap .dimmed"),
        $filterCloseBtn = $(".filter_wrap .btn_close");

    $filterBtn.on("click", function () {
        $("body,html").css({ "overflow": "hidden" });
        $filterWrap.addClass("active");
    });
    $filterCloseBtn.on("click", function () {
        $("body,html").css({ "overflow": "auto" });
        $filterWrap.removeClass("active");
    });
    $filterWrapBg.on("click", function () {
        $("body,html").css({ "overflow": "auto" });
        $filterWrap.removeClass("active");
    });

    // 매칭 요청 팝업
    var $matchPopup = $(".popup_match_wrap");
    $(".match_btn").on("click", function () {
        $("body,html").css({ "overflow": "hidden" });
        $matchPopup.addClass("match_active");
    });
    $(".popup_match_wrap .dimmed, .popup_match_wrap .btn_popup_close").on("click", function () {
        $("body,html").css({ "overflow": "auto" });
        $matchPopup.removeClass("match_active");
    });

    // 매칭 안내 페이지 팝업
    var $matchInfoPopup = $(".popup_match_info_wrap");
    $(".match_info_btn").on("click", function () {
        $("body,html").css({ "overflow": "hidden" });
        $matchInfoPopup.addClass("match_active");
    });
    $(".popup_match_info_wrap .dimmed, .popup_match_info_wrap .btn_popup_close").on("click", function () {
        $("body,html").css({ "overflow": "auto" });
        $matchInfoPopup.removeClass("match_active");
    });

    // 조인 매칭 이용수칙 안내 팝업
    var $matchGuidePopup = $(".popup_match_guide_wrap");
    $(".match_guide_btn").on("click", function () {
        $("body,html").css({ "overflow": "hidden" });
        $matchGuidePopup.addClass("match_active");
    });
    $(".popup_match_guide_wrap .dimmed, .popup_match_guide_wrap .btn_popup_close").on("click", function () {
        $("body,html").css({ "overflow": "auto" });
        $matchGuidePopup.removeClass("match_active");
    });

    // 조인 매칭 이용수칙 안내 팝업 (셀럽)
    var $matchCelebGuidePopup = $(".popup_celeb_match_guide_wrap");
    $(".match_celeb_guide_btn").on("click", function () {
        $("body,html").css({ "overflow": "hidden" });
        $matchCelebGuidePopup.addClass("match_active");
    });
    $(".popup_celeb_match_guide_wrap .dimmed, .popup_celeb_match_guide_wrap .btn_popup_close").on("click", function () {
        $("body,html").css({ "overflow": "auto" });
        $matchCelebGuidePopup.removeClass("match_active");
    });

    // 날짜선택
    $(".datepicker").datepicker({
        dateFormat: 'yy.mm.dd (D)',
        showMonthAfterYear: true,  //년도-월 순서
        yearSuffix: ".",
        minDate: "-0D",
        monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showOn: "both",
        buttonText: "날짜선택",
        beforeShow: function () {
            $("#ui-datepicker-div").after(' <p class="datepicker_dimmed"></p>');
        },
        onClose: function (dateText, inst) {
            $(".datepicker_dimmed").remove();
        },
    });

    /* 221206 start */
    //이미지 업로드 슬라이드
    var swiper = new Swiper(".silde_photo_wrap", {
        // slidesPerView: 4,
        // spaceBetween: 10,
        allowTouchMove: false,
        observer: true,
        observeParents: true,
        slidesPerView: "auto",
        loop: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //이미지 업로드 슬라이드
    var swiper = new Swiper(".silde_big_photo_wrap", {
        // slidesPerView: 4,
        // spaceBetween: 10,
        allowTouchMove: false,
        observer: true,
        observeParents: true,
        slidesPerView: "auto",
        loop: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    /* 221206 end */

    //후기 별점
    var $starWrap = $(".comments_star div"),
        $star = $(".comments_star div button");
    $star.on("click", function () {
        $starWrap.removeAttr("class");
        $star.removeClass('active');
        $(this).addClass('active').prevAll('button').addClass('active');

        var _idx = 0;
        $(".comments_star button.active").each(function (i) {
            return _idx = i + 1;
        });
        $starWrap.addClass("star_active_" + _idx);
    });

    //댓글 부분
    var $fieldReply = $(".field_reply"),
        $replyWriteWrap = $(".reply_write_wrap"),
        $replyWriteBtn = $(".reply_write_btn_wrap");

    $(".reply_write_btn_wrap button, .reply_btn_wrap .btn_comments").click(function () {
        $replyWriteWrap.addClass("active");
    });
    $(".reply_write_wrap .btn_close").click(function () {
        $replyWriteWrap.removeClass("active");
    });

    if ($fieldReply.length > 0) {
        commentsWriteBtnShow();
        $(window).scroll(function () {
            commentsWriteBtnShow();
        });
    }

    function commentsWriteBtnShow() {
        var _replySectionPos = $fieldReply.offset().top;
        if (winSc > ((_replySectionPos - winH) * 1.2) && $(".reply_items").length > 0) {
            $replyWriteBtn.addClass("fix");
        } else {
            $replyWriteBtn.removeClass("fix");
        }
    }

    //셀럽 동반 라운딩 이벤트
    var swiper_celeb_event = new Swiper(".celeb_event_slide", {
        resistance: true,
        resistanceRatio: 0,
        slidesPerView: "auto",
        loop: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}
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
function main() {
   var swiper_schedule = new Swiper(".schedule_slide", {
      pagination: {
         el: ".swiper-pagination"
      },
   });

   var swiper_recuit = new Swiper(".recruit_slide", {
      // spaceBetween: 10,
      pagination: {
         el: ".swiper-pagination"
      },
   });


   /* 221206 start */
   var swiper_review = new Swiper(".round_slide", {
      observer: true,
      observeParents: true,
      pagination: {
         el: ".swiper-pagination"
      },
   });

   // 리뷰 미니사이즈 포토 슬라이드
   var swiper_review_photo = new Swiper(".review_photo_slide", {
      // allowTouchMove: false,
      observer: true,
      observeParents: true,
      slidesPerView: "auto",
      loop: false,
      navigation: {
         nextEl: ".review_photo_slide .swiper-button-next",
         prevEl: ".review_photo_slide .swiper-button-prev",
      },
   });

   // 리뷰 빅사이즈 포토 슬라이드
   var review_big_photo_slide = new Swiper(".review_big_photo_slide", {
      allowTouchMove: false,
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: false,
      navigation: {
         nextEl: ".review_big_photo_slide .swiper-button-next",
         prevEl: ".review_big_photo_slide .swiper-button-prev",
      },
      pagination: {
         el: ".review_pagination",
         type: "fraction",
      },
   });

   // 이용정지 팝업
   var $suspensionPopup = $(".popup_suspension_wrap");
   $(".popup_suspension_wrap .dimmed, .popup_suspension_wrap .btn_popup_close").on("click", function () {
      $suspensionPopup.removeClass("active");
   });


   // 매칭 라운딩 & 이벤트 라운딩 탭 활성화 버튼
   // const $roundTab = $('.nav_tabs li'),
   //    $roundTabButton = $('.nav_tabs li button');

   // $roundTab.on('click', function () {
   //    let _tabIndex = $(this).index();
   //    $roundTabButton.removeClass('is_open');
   //    $(this).find('button').addClass('is_open');
   //    $('.round_wrap > div').removeClass('is_open').eq(_tabIndex).addClass('is_open');
   // });
   /* 221206 end */
}
function member() {
    // 서비스 이용수칙 안내 팝업
    var $serviePopup = $(".popup_service_info");
    /*$(".service_info_btn").on("click", function(){
        $("body,html").css({"overflow":"hidden"});
        $serviePopup.addClass("active");
    });*/
    $(".popup_service_info .dimmed, .popup_service_info .btn_popup_close").on("click", function(){
        $("body,html").css({"overflow":"auto"});
        $serviePopup.removeClass("active");
    });

    // 회원가입 팝업
    var $signupPopup = $(".popup_signup_wrap"),
        $signupBtn = $(".btn_signup");

    $signupBtn.on("click", function(){
        $("body,html").css({"overflow":"hidden"});
        $signupPopup.addClass("active");
    });
    $(".popup_signup_wrap .dimmed, .popup_signup_wrap .btn_popup_close").on("click", function(){
        $("body,html").css({"overflow":"auto"});
        $signupPopup.removeClass("active");
    });

    // 동반 라운딩 초청하기
    var $inviteBtn = $(".btn_invite"),
        $inviteWrap = $(".invitation_wrap"),
        $inviteWrapBg = $(".invitation_wrap .dimmed"),
        $inviteCloseBtn = $(".invitation_wrap .btn_close");

    $inviteBtn.on("click", function(){
        $("body,html").css({"overflow":"hidden"});
        $inviteWrap.addClass("active");
    });
    $inviteCloseBtn.on("click", function(){
        $("body,html").css({"overflow":"auto"});
        $inviteWrap.removeClass("active");
    });
    $inviteWrapBg.on("click", function(){
        $("body,html").css({"overflow":"auto"});
        $inviteWrap.removeClass("active");
    });
}
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