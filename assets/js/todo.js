$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
})

$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
})

$("input[type='text']").keypress(function(e) {
    if(event.which === 13) {
        let todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li>" + todoText + " <span><i class='fa fa-trash'> </i></span></li>");
    }
})

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
})