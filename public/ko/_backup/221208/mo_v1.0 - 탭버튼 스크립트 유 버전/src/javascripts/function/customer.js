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