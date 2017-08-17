$(document).ready(function () {
    //$("#DynamicHTML").append(buildMyProduct(MyCatalogData));
    GetAllProducts();
});

//function buildMyProduct(obj) {
//    var html = "";
//    $.each(obj, function (element, object) {
//        html += "<div class='Catalog ProductItem'>";
//        html += "<div><img class='Catalog' src='" + object.imgUrl + "' /></div>"
//        html += "<div><a href='Details.html?id=" + object.id + "'>" + object.title + "</a></div>";
//        html += "<div>" + object.description + "</div></div>";
//    });
//    return html;
//}

function GetAllProducts() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:50858/api/product',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var html = "";
            $.each(data, function (element, data) {
                html += "<div class='Catalog ProductItem'>";
                html += "<div><img class='Catalog' src='" + data.imgUrl + "' /></div>"
                html += "<div><a href='Details.html?id=" + data.ProductID + "'>" + data.ProductName + "</a></div>";
                html += "<div>" + data.ProductDescription + "</div></div>";
            });
            return $("#DynamicHTML").append(html);
        },
        error: function (a, b, c) {

        }
    });
}