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
    if($(".join_wrap").hasClass('join_wrap_event')){
        var $sort = $('.join_top_wrap'),
            $header = $('#header'),
            _sortPos = Math.round($sort.offset().top),
            _sortHeight = Math.round($sort.outerHeight()),
            _headerHeight = Math.round($header.outerHeight()),
            _fixcalulator = _sortPos - _sortHeight - _headerHeight;

        $(window).scroll(function(){
            var $st = $(this).scrollTop();
            if($st > _fixcalulator){
                $('.list_rounding_wrap').addClass('sort_fix');
            }else{
                $('.list_rounding_wrap').removeClass('sort_fix');
            }
        });
    }
    var swiper_celeb_event = new Swiper(".celeb_event_slide", {
        resistance: true,
        resistanceRatio : 0,
        slidesPerView: "auto",
        pagination: {
            el: ".swiper-pagination"
        },
    });

    // 정렬하기
    var $alignBtn = $(".btn_align"),
        $alignWrap = $(".align_wrap"),
        $alignWrapbg = $(".align_wrap .dimmed")

    $alignBtn.on("click", function(){
        $alignWrap.addClass("active");
    });
    $alignWrapbg.on("click", function(){
        $alignWrap.removeClass("active");
    });

   // 필터
   var $filterBtn = $(".btn_filter"),
       $filterWrap = $(".filter_wrap"),
       $filterWrapBg = $(".filter_wrap .dimmed"),
       $filterCloseBtn = $(".filter_wrap .btn_close");

    $filterBtn.on("click", function(){
        $("body,html").css({"overflow":"hidden"});
        $filterWrap.addClass("active");
    });
    $filterCloseBtn.on("click", function(){
        $("body,html").css({"overflow":"auto"});
        $filterWrap.removeClass("active");
    });
    $filterWrapBg.on("click", function(){
        $("body,html").css({"overflow":"auto"});
        $filterWrap.removeClass("active");
    });

    // 매칭 요청 팝업
    var $matchPopup = $(".popup_match_wrap");
    $(".match_btn").on("click", function(){
        $("body,html").css({"overflow":"hidden"});
        $matchPopup.addClass("match_active");
    });
    $(".popup_match_wrap .dimmed, .popup_match_wrap .btn_popup_close").on("click", function(){
        $("body,html").css({"overflow":"auto"});
        $matchPopup.removeClass("match_active");
    });

    // 매칭 안내 페이지 팝업
    var $matchInfoPopup = $(".popup_match_info_wrap");
    $(".match_info_btn").on("click", function(){
        $("body,html").css({"overflow":"hidden"});
        $matchInfoPopup.addClass("match_active");
    });
    $(".popup_match_info_wrap .dimmed, .popup_match_info_wrap .btn_popup_close").on("click", function(){
        $("body,html").css({"overflow":"auto"});
        $matchInfoPopup.removeClass("match_active");
    });

    // 조인 매칭 이용수칙 안내 팝업
    var $matchGuidePopup = $(".popup_match_guide_wrap");
    $(".match_guide_btn").on("click", function(){
        $("body,html").css({"overflow":"hidden"});
        $matchGuidePopup.addClass("match_active");
    });
    $(".popup_match_guide_wrap .dimmed, .popup_match_guide_wrap .btn_popup_close").on("click", function(){
        $("body,html").css({"overflow":"auto"});
        $matchGuidePopup.removeClass("match_active");
    });

    // 조인 매칭 이용수칙 안내 팝업 (셀럽)
    var $matchCelebGuidePopup = $(".popup_celeb_match_guide_wrap");
    $(".match_celeb_guide_btn").on("click", function(){
        $("body,html").css({"overflow":"hidden"});
        $matchCelebGuidePopup.addClass("match_active");
    });
    $(".popup_celeb_match_guide_wrap .dimmed, .popup_celeb_match_guide_wrap .btn_popup_close").on("click", function(){
        $("body,html").css({"overflow":"auto"});
        $matchCelebGuidePopup.removeClass("match_active");
    });

    // 날짜선택
    $(".datepicker").datepicker({
        dateFormat: 'yy.mm.dd (D)',
        showMonthAfterYear:true,  //년도-월 순서
        yearSuffix: ".",
        minDate: "-0D",
        monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showOn: "both",
        buttonText: "날짜선택",
        beforeShow : function(){
            $("#ui-datepicker-div").after(' <p class="datepicker_dimmed"></p>');
        },
        onClose : function (dateText, inst) {
            $(".datepicker_dimmed").remove();
        },
    });

    //이미지 업로드 슬라이드
    var swiper = new Swiper(".silde_photo_wrap", {
        // slidesPerView: 4,
        // spaceBetween: 10,
        slidesPerView: "auto",
        loop: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //후기 별점
    var $starWrap = $(".comments_star div"),
        $star = $(".comments_star div button");
    $star.on("click", function(){
        $starWrap.removeAttr("class");
        $star.removeClass('active');
        $(this).addClass('active').prevAll('button').addClass('active');

        var _idx = 0;
        $(".comments_star button.active").each(function(i){
            return _idx = i + 1;
        });
        $starWrap.addClass("star_active_"+_idx);
    });

    //댓글 부분
    var $fieldReply = $(".field_reply"),
        $replyWriteWrap = $(".reply_write_wrap"),
        $replyWriteBtn = $(".reply_write_btn_wrap");

    $(".reply_write_btn_wrap button, .reply_btn_wrap .btn_comments").click(function(){
        $replyWriteWrap.addClass("active");
    });
    $(".reply_write_wrap .btn_close").click(function(){
        $replyWriteWrap.removeClass("active");
    });

    if($fieldReply.length > 0) {
        commentsWriteBtnShow();
        $(window).scroll(function () {
            commentsWriteBtnShow();
        });
    }

    function commentsWriteBtnShow(){
        var _replySectionPos = $fieldReply.offset().top;
        if (winSc > ((_replySectionPos - winH) * 1.2) && $(".reply_items").length > 0){
            $replyWriteBtn.addClass("fix");
        }else {
            $replyWriteBtn.removeClass("fix");
        }
    }

    //셀럽 동반 라운딩 이벤트
    var swiper_celeb_event = new Swiper(".celeb_event_slide", {
        resistance: true,
        resistanceRatio : 0,
        slidesPerView: "auto",
        loop: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}