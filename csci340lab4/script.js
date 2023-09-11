$(document).ready(function() {
    $("p").attr("color", "red");
    console.log("load");
    $("#cont2").attr("color", "red")
    $("#button1").click(function() {
        $.ajax({
            dataType: "json",
            url: "/swagger/v1/swagger.json",
            success: function(results) {
                console.log(results[title]);
                $('p').text(results[title])
            }
        })
    })
})