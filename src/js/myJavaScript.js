$(document).ready(function(){
    var myInt1=null;
    var myInt2=null;
    var myInt3=null;
    var w = window.innerWidth;
    
     $('.ourAdvantages').one('mouseenter',function(){
        var x1=1;
        myInt1= setInterval(myCounter1,8);
       function myCounter1(){   
           if(x1>72 ){
               clearInterval(myInt1);
           }else{
            x1+=1;    
            $('#rectangle1').text(x1);   
           }              
        };

       var x2=1;
       myInt2= setInterval(myCounter2,8);
      function myCounter2(){   
          if(x2>85 ){
              clearInterval(myInt2);
          }else{
           x2+=1;    
           $('#rectangle2').text(x2);   
          }              
      }  

      var x3=1;
      myInt3= setInterval(myCounter3,8);
     function myCounter3(){   
         if(x3>65 ){
             clearInterval(myInt3);
         }else{
          x3+=1;    
          $('#rectangle3').text(x3);   
         }              
     } 

     var x4=1;
     myInt4= setInterval(myCounter4,8);
    function myCounter4(){   
        if(x4>55 ){
            clearInterval(myInt4);
        }else{
         x4+=1;    
         $('#rectangle4').text(x4);   
        }              
    } 


     });

    //     var x1=1000;
    //      myInt1= setInterval(myCounter1,8);
    //     function myCounter1(){
    //         x1+=23;
    //         if(x1>7234 ){
    //             clearInterval(myInt1);
    //         }
    //         $('#broj1').text(x1);                          
    //     }

    //     var x2=1000;
    //     myInt2= setInterval(myCounter2,8);
    //    function myCounter2(){
    //        x2+=33;
    //        if(x2>4234 ){
    //            clearInterval(myInt2);
    //        }
    //        $('#broj2').text(x2);                          
    //    }

    //    var x3=1000;
    //    myInt3= setInterval(myCounter3,8);
    //   function myCounter3(){
    //       x3+=43;
    //       if(x3>5234 ){
    //           clearInterval(myInt3);
    //       }
    //       $('#broj3').text(x3);                          
    //   }
        
        // $('html, body').animate({scrollTop: $(this.hash).offset().top - 145}, 1000);
        // return false;     
  
//////////////////////NAVIGATION TOP BUTTON///////////////////////////////////////////////

    $(window).scroll(function(){
        var scroll=$(window).scrollTop();
           console.log(scroll);

            if(scroll > 400 ){
                $('.navigationArrow').addClass("showUp");
                $('.navigationArrow').removeClass("hideDown");
            }else if(scroll < 400){
                $('.navigationArrow').addClass("hideDown");
                $('.navigationArrow').removeClass("showUp");
            }
        
        });

        ///////////////////////////////////////////////////////////////

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
             $('#side-menu').toggleClass('active');
             $('.toogleIcon').toggleClass('active');
         });

         
         $('#iconsCont').click(function(){
            $('#user').toggleClass('active2');
            $('#close').toggleClass('active3');
            $('#logInBackGround').toggleClass('active');
            $('#logIn').toggleClass('active1');
         });

        
})


