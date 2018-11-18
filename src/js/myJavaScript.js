$(document).ready(function(){
    var myInt1=null;
    var myInt2=null;
    var myInt3=null;
    var w = window.innerWidth;
    $('.scroll').on('click', function() { 
        var x1=1000;
         myInt1= setInterval(myCounter1,8);
        function myCounter1(){
            x1+=23;
            if(x1>7234 ){
                clearInterval(myInt1);
            }
            $('#broj1').text(x1);                          
        }

        var x2=1000;
        myInt2= setInterval(myCounter2,8);
       function myCounter2(){
           x2+=33;
           if(x2>4234 ){
               clearInterval(myInt2);
           }
           $('#broj2').text(x2);                          
       }

       var x3=1000;
       myInt3= setInterval(myCounter3,8);
      function myCounter3(){
          x3+=43;
          if(x3>5234 ){
              clearInterval(myInt3);
          }
          $('#broj3').text(x3);                          
      }
        
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 145}, 1000);
        return false;     
    });



    $(window).scroll(function(){
        var scroll=$(window).scrollTop();
           console.log(scroll);

            if(scroll >= 1299 ){
                $('#rollRed').addClass("rollRed");
                $('#rollGray').addClass("rollGrayAnim");
                $('#rollRed').removeClass("rollGray");
            }
        
            if(scroll >= 3000){
                $('#redBox2').addClass("redBox2");
                $('#rollGray2').addClass("rollGrayAnim2");
                $('#rollGray2').removeClass("rollGray2");

            }

            if(scroll >= 3000){
                if(w>576){
                    $('.wraper3').css('display','block');
                    $('#wraper3').addClass("wraper3");
                }
              
            }

            if(scroll >= 3800){
                if(w>767){
                $('#sec6-col1').addClass('apear');
                setTimeout(function() {
                 $('#sec6-col2').addClass('apear');
             }, 300);
             setTimeout(function() {
                 $('#sec6-col3').addClass('apear');
             }, 600);
               
             }
            }
         
        });

        $("#pisiteNam").click(function(){
            $("#myForm2").slideDown("slow");
        });

        $("#closeForm").click(function(){
            event.preventDefault();
            $("#myForm2").slideUp("slow");
        });

        $('#emailQuestion').click(function(){
            $('#movingLabelemail').removeClass('movingLabel');
            $('#movingLabelemail').addClass('emailQuestion');
        })

        $('#pitanjeQuestion').click(function(){
            $('#movingLabelpitanje').removeClass('movingLabel');
            $('#movingLabelpitanje').addClass('pitanje');
        })


        $(window).resize(function(){
            var wWidth=window.innerWidth;
            if(wWidth<576){
                $('.bdtInform').text(" ");
                }else{
                    $('.bdtInform').text("PRIJAVI SE");
                }
                this.console.log(wWidth + "siriiiiina");
        });
        
        $("#toggleBtn").click(function(){ 
             $(".menuBtnText").addClass("d-none");
             if($(this).hasClass("open")){
               $(this).removeClass("open");
               $("#menuClose").removeClass("d-none");
             }else{
                $(this).addClass("open");
                $("#menuOpen").removeClass("d-none");
             }
             
            })

         /////////////NAVBAR ################33
         $('#open').click(function(){
             $('#side-menu').addClass('active');
         })

         $('#close').click(function(){
            $('#side-menu').removeClass('active');
        })
})


