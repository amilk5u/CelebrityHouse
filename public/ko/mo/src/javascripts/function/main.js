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

   var swiper_review = new Swiper(".round_slide", {
      observer: true,
      observeParents: true,
      pagination: {
         el: ".swiper-pagination"
      },
   });

   // 리뷰 미니사이즈 포토 슬라이드
   var swiper_review_photo = new Swiper(".review_photo_slide", {
      allowTouchMove: false,
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
}