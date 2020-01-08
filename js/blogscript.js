let func1 = function() {
    while (!confirm("你好")) {}
    return;
}

$(document).ready(function() {
    $(".input-comment").change(function() {
        let comment = $(".input-comment").val();
        let p = '<div class="comment"><p>' + comment + "</p>";
        p = p.concat('<div class="triangle3"></div>');
        p = p.concat("</div>")
        $(".comments").append(p);
        $(".input-comment").val("");
    });
});