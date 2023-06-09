  $(".side-bar-item").on("click", function() {
    $(".side-bar-item").css("border", "none");
    $(".side-bar-item").css("background-color", "#f5f7f9");
    $(this).css("background-color", "white");
    $(this).css("border", "1px solid #d4dadf");
  });