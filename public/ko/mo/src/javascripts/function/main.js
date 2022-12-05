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

    var swiper_review = new Swiper(".review_slide", {
        pagination: {
            el: ".swiper-pagination"
        },
    });

    var swiper_review_photo = new Swiper(".review_photo_slide", {
        resistance: true,
        resistanceRatio : 0,
        slidesPerView: "auto",
        loop: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // 이용정지 팝업
    var $suspensionPopup = $(".popup_suspension_wrap");
    $(".popup_suspension_wrap .dimmed, .popup_suspension_wrap .btn_popup_close").on("click", function(){
        $suspensionPopup.removeClass("active");
    });
}