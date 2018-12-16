$(document).ready(function() {

    $(".desc").hide();

    var hideStatus = true;

    $("#showbtn").click(function(){
        if(hideStatus == true){
            $(".desc").slideDown(300);
            hideStatus = false;
            $("#showbtn").html("Hide all");
        }
        else{
            $(".desc").slideUp(300);
            hideStatus = true;
            $("#showbtn").html("Show all");
        }
    });


    var i;
    var flavors = ["Chocolate", "White Chocolate", "Truffle", "Caramel", "Peanut Butter"];
    var text = "";
    brandArray = false;

    $("#brands").click(function(){
        if(brandArray == false){
            for (i = 0; i < flavors.length; i++) {
                text += flavors[i] + "<br>";
            };
            $("#flavors").html(text);
            $("#brands").html("Hide flavors");
            brandArray = true;

        }
        else{
            text = "";
            $("#flavors").html(text);
            $("#brands").html("Show flavors");
            brandArray = false;
        }
    });


    //list sliding (show/hide events)

    $(".item1").on({
        click: function(){
            $(".desc1").slideToggle(300);
        },
        mouseenter: function(){
            $(".item1").css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(".item1").css("background-color", "white");
        }
    });

    $(".item2").on({
        click: function(){
            $(".desc2").slideToggle(300);
        },
        mouseenter: function(){
            $(".item2").css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(".item2").css("background-color", "white");
        }
    });

    $(".item3").on({
        click: function(){
            $(".desc3").slideToggle(300);
        },
        mouseenter: function(){
            $(".item3").css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(".item3").css("background-color", "white");
        }
    });

    $(".item4").on({
        click: function(){
            $(".desc4").slideToggle(300);
        },
        mouseenter: function(){
            $(".item4").css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(".item4").css("background-color", "white");
        }
    });

    $(".item5").on({
        click: function(){
            $(".desc5").slideToggle(300);
        },
        mouseenter: function(){
            $(".item5").css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(".item5").css("background-color", "white");
        }
    });

});
