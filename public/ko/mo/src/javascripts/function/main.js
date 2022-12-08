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
   var review_photo_slide = new Swiper(".review_photo_slide", {
      allowTouchMove: false,
      observer: true,
      observeParents: true,
      slidesPerView: "auto",
      spaceBetween: 5,
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
         el: ".review_big_photo_slide .review_pagination",
         type: "fraction",
      },
   });

   // 이용정지 팝업
   var $suspensionPopup = $(".popup_suspension_wrap");
   $(".popup_suspension_wrap .dimmed, .popup_suspension_wrap .btn_popup_close").on("click", function () {
      $suspensionPopup.removeClass("active");
   });

   // // 매칭 라운딩 & 이벤트 라운딩 탭 활성화 버튼
   const $roundTab = $('.nav_tabs li'),
      $roundTabButton = $('.nav_tabs li button');

   $roundTab.on('click', function () {
      let _tabIndex = $(this).index();
      $roundTabButton.removeClass('is_open');
      $(this).find('button').addClass('is_open');
      $('.round_wrap > div').removeClass('is_open').eq(_tabIndex).addClass('is_open');
   });
}