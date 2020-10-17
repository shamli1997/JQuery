$(document).ready(
    () => {
        $.getJSON("https://jsonplaceholder.typicode.com/photos",
            function (opData) {
                var data = opData;

                console.log(opData);

                for (var i = 0; i < opData.length; i++) {
                    $('<div class="product prod-' + i + '"><div class="image"><img id="imgT-' + i + '"><span id="spanT-' + i + '"></span><br><button value="Add to Cart">Add To Cart</button></div></div>').appendTo(".main-container");
                    $("#imgT-" + i).attr("src", data[i].thumbnailUrl);
                    $("#spanT-" + i).html(data[i].title)

                    $('<div class="prod-' + i + '"></div>').appendTo(".main-container");

                    // $('<div class="product"><div class="image"></div></div>').appendTo(".main-container");
                    //$("img").appendTo(".image");
                    /// $(".image").append("<img src=" + data[i].thumbnailUrl + "'>'");
                }


            }
        );

    },


)