$(document).ready(function(){


    $("#username").blur(function(){
        console.log("dejó el input")
        if($(this).val() ==""){
            console.log("por favor escribe algo");
        }
    });

    $("#nombre").change(function(){
        console.log("CHANGE");
    });

    $("#apellido").focus(function(){
        console.log("ON FOCUS");
        $(this).css("background-color", "blue");
    });

    $("#apellido").blur(function(){
        console.log("ON FOCUS");
        $(this).css("background-color", "white");
    });


    $("#otro").select(function(){
        console.log("select")
        
    })


})