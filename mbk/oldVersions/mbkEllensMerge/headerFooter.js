var lastPositionAtTop = true;

$(window).scroll(function(){
    if(lastPositionAtTop){ 
        if($(window).scrollTop() > 20){ 
            lastPositionAtTop = false; 
            $("#navbar, #navpadding").stop(true).animate({ 
                opacity: 0.9,  
                height: "7vh",
                fontSize: "2vh",
                borderWidth: 0,
                lineHeight: "7vh",
            }, 500);

            $("#navlogo").stop(true).animate({
                height: "7vh",
                top: 0,
            }, 500);

            if($("#navIcon").is(":visible")){
                $("#navIcon").stop(true).animate({
                    height: "5vh",
                    marginTop: "1vh",
                }, 500);
            }
        }
    }else{ 
        if($(window).scrollTop() <= 20){ 
            lastPositionAtTop = true; 
            $("#navbar, #navpadding").stop(true).animate({ 
                opacity: 1,
                height: "15vh",
                borderBottomWidth: "1.25vh",
                borderTopWidth: "1.25vh",
                fontSize: "3.5vh",
                lineHeight: "12.5vh",
            }, 500);

            $("#navlogo").stop(true).animate({
                height: "14vh",
                top: "0.75vh",
            }, 500);

            if($("#navIcon").is(":visible")){
                $("#navIcon").stop(true).animate({
                    height: "8vh",
                    marginTop: "2.25vh",
                }, 500);
            }
        }
    }
});