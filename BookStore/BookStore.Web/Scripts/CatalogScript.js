$(document).ready(function () {
    $("#DynamicHTML").append(buildMyProduct(MyCatalogData));
});

function buildMyProduct(obj) {
    var html = "";
    $.each(obj, function (element, object) {
        html += "<div class='Catalog ProductItem'>";
        html += "<div><img class='Catalog' src='" + object.imgUrl + "' /></div>"
        html += "<div><a href='Details.html?id=" + object.id + "'>" + object.title + "</a></div>";
        html += "<div>" + object.description + "</div></div>";
    });
    return html;
}