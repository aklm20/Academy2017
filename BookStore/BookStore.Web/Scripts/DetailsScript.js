$(document).ready(function () {
    loadProduct();
});

function loadProduct() {
    var myProduct = FindMyProduct(getJsonFromUrl())
    buildMyProduct(myProduct);
}

function FindMyProduct(id) {
    var ProductDetails = "";
    $.each(MyCatalogData, function (element, object) {
        if (object.id == id)
            ProductDetails = object;
    });
    return ProductDetails;
}

function buildMyProduct(myProduct) {
    var html = "";
    html += "<div class='Catalog ProductItem'>";
    html += "<div>" + myProduct.title + "</a></div>";
    html += "<div><img class='Catalog' src='" + myProduct.imgUrl + "' /></div>";
    html += "<div>" + myProduct.model + "</div>";
    html += "<div>" + myProduct.price + "</div>";
    html += "<div>" + myProduct.description + "</div>";
    for(i in myProduct.imgsUrl){
        html += "<div><img class='Catalog' src='" + myProduct.imgsUrl[i] + "'v/></div>";
    }
    html += "</div>";
    $("#MyDynamicProductDetail").append(html);
}

function getJsonFromUrl() {
    var query = location.search.substr(1);
    var result = {};
    query.split("&").forEach(function (part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
    });
    return result.id;
}