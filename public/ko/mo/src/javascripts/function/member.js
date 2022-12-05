function member() {
   // 서비스 이용수칙 안내 팝업
   var $serviePopup = $(".popup_service_info");
   /*$(".service_info_btn").on("click", function(){
       $("body,html").css({"overflow":"hidden"});
       $serviePopup.addClass("active");
   });*/
   $(".popup_service_info .dimmed, .popup_service_info .btn_popup_close").on("click", function () {
      $("body,html").css({ "overflow": "auto" });
      $serviePopup.removeClass("active");
   });

   // 회원가입 팝업
   var $signupPopup = $(".popup_signup_wrap"),
      $signupBtn = $(".btn_signup");

   $signupBtn.on("click", function () {
      $("body,html").css({ "overflow": "hidden" });
      $signupPopup.addClass("active");
   });
   $(".popup_signup_wrap .dimmed, .popup_signup_wrap .btn_popup_close").on("click", function () {
      $("body,html").css({ "overflow": "auto" });
      $signupPopup.removeClass("active");
   });

   // 동반 라운딩 초청하기
   var $inviteBtn = $(".btn_invite"),
      $inviteWrap = $(".invitation_wrap"),
      $inviteWrapBg = $(".invitation_wrap .dimmed"),
      $inviteCloseBtn = $(".invitation_wrap .btn_close");

   $inviteBtn.on("click", function () {
      $("body,html").css({ "overflow": "hidden" });
      $inviteWrap.addClass("active");
   });
   $inviteCloseBtn.on("click", function () {
      $("body,html").css({ "overflow": "auto" });
      $inviteWrap.removeClass("active");
   });
   $inviteWrapBg.on("click", function () {
      $("body,html").css({ "overflow": "auto" });
      $inviteWrap.removeClass("active");
   });
}