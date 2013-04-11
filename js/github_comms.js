var repos = [
    "xen-api",
    "xen-api-libs"
]

function handle_results(obj) {
    $("div#debug").html(JSON.stringify(obj.meta));
    $("div#results").html(JSON.stringify(obj.data));
}

function go() {
    $("div#debug").html("Loading...");
    $("div#results").html("Loading...");
    var username = $("input#user").val();
    var password = $("input#pass").val();
    $.ajax({
        url: "https://api.github.com/repos/xen-org/xen-api/pulls?state=open&callback=?",
        dataType: "jsonp",
        beforeSend: function(xhr) {xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password))},
        success: handle_results
    });
}

$(document).ready(function() {
    $("#go").click(go);
})
