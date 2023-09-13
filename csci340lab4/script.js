$(document).ready(function() {
    $("p").attr("color", "red");
    console.log("load");
    $("#cont2").attr("color", "red")
    $("#button1").click(function() {
        $.ajax({
            dataType: "json",
            url: "https://cataas.com/cat?json=true",
            success: function(results) {
                $('#cat').attr("src", "https://cataas.com/" + results["url"])
                .attr("height", "200px");
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        })
    })
    $("#button2").click(function() {
        console.log("click2");
        $.ajax({
            dataType: "json",
            url: "https://api.chucknorris.io/jokes/random",
            success: function(results) {
                console.log("success");
                $('#button-2-content').text(results["value"]);
                console.log(results["value"]);
            },
            error: function(xhr, status, error) {
                console.log("failure");
                console.log(results[value]);
            }
        })
    })
})