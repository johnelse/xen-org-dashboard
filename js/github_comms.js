var repos = [
    "xen-org"
]

function handle_results(obj) {
    alert(JSON.stringify(obj.meta));
    $("div#results").html(JSON.stringify(obj.data));
}

function go() {
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
