 $(document).ready(function(){
        var t1,audio1=$("#mysoundclip1")[0];
        var t2,audio2=$("#mysoundclip2")[0];
        var t3,audio3=$("#mysoundclip3")[0];
        var t4,audio4=$("#mysoundclip4")[0];
        var t5,audio5=$("#mysoundclip5")[0];
        var t6,audio6=$("#mysoundclip6")[0];
        var t7,audio7=$("#mysoundclip7")[0];
        var t8,audio8=$("#mysoundclip8")[0];
        var t9,audio9=$("#mysoundclip9")[0];
        var t10,audio10=$("#mysoundclip10")[0];
        var t11,audio11=$("#mysoundclip11")[0];
        var t12,audio12=$("#mysoundclip12")[0];
        var t13,audio13=$("#mysoundclip13")[0];
        var t14,audio14=$("#mysoundclip14")[0];
        var t15,audio15=$("#mysoundclip15")[0];
        var t16,audio16=$("#mysoundclip16")[0];
        var t17,audio17=$("#mysoundclip17")[0];
        var t18,audio18=$("#mysoundclip18")[0];

        $("#key1").mousedown(function(){

            clearTimeout(t1);
            audio1.play();
            t1 = setTimeout(function() {
                audio1.pause();
            }, 400);

        });
        $("#key2").mousedown(function(){
            clearTimeout(t2);
            audio2.play();
            t2 = setTimeout(function() {
                audio2.pause();
            }, 400);
        });
        $("#key3").mousedown(function(){
            clearTimeout(t3);
            audio3.play();
            t3 = setTimeout(function() {
                audio3.pause();
            }, 400);
        });
        $("#key4").mousedown(function(){
            clearTimeout(t4);
            audio4.play();
            t4 = setTimeout(function() {
                audio4.pause();
            }, 400);
        });
        $("#key5").mousedown(function(){
            clearTimeout(t5);
            audio5.play();
            t5 = setTimeout(function() {
                audio5.pause();
            }, 400);
        });
        $("#key6").mousedown(function(){
            clearTimeout(t6);
            audio6.play();
            t6 = setTimeout(function() {
                audio6.pause();
            }, 400);
        });

        $("#key7").click(function(){
            clearTimeout(t7);
            audio1.play();
            t7 = setTimeout(function() {
                audio7.pause();
            }, 400);
        });
        $("#key8").mousedown(function(){
            clearTimeout(t8);
            audio8.play();
            t8 = setTimeout(function() {
                audio8.pause();
            }, 400);
        });
        $("#key9").mousedown(function(){
            clearTimeout(t9);
            audio9.play();
            t9 = setTimeout(function() {
                audio9.pause();
            }, 400);
        });
        $("#key10").mousedown(function(){
            clearTimeout(t10);
            audio10.play();
            t10 = setTimeout(function() {
                audio10.pause();
            }, 400);
        });
        $("#key11").mousedown(function(){
            clearTimeout(t11);
            audio11.play();
            t11 = setTimeout(function() {
                audio11.pause();
            }, 400);
        });
        $("#key12").mousedown(function(){
            clearTimeout(t12);
            audio12.play();
            t12 = setTimeout(function() {
                audio12.pause();
            }, 400);
        });
        $("#key13").mousedown(function(){
            clearTimeout(t13);
            audio13.play();
            t13 = setTimeout(function() {
                audio13.pause();
            }, 400);
        });
        $("#key14").mousedown(function(){
            clearTimeout(t14);
            audio14.play();
            t14 = setTimeout(function() {
                audio14.pause();
            }, 400);
        });
        $("#key15").mousedown(function(){
            clearTimeout(t15);
            audio5.play();
            t15 = setTimeout(function() {
                audio15.pause();
            }, 10);
        });
        $("#key16").mousedown(function(){
            clearTimeout(t16);
            audio16.play();
            t16 = setTimeout(function() {
                audio16.pause();
            }, 400);
        });

        $("#key17").click(function(){
            clearTimeout(t17);
            audio17.play();
            t17 = setTimeout(function() {
                audio17.pause();
            }, 400);
        });
        $("#key18").mousedown(function(){
            clearTimeout(t18);
            audio18.play();
            t18 = setTimeout(function() {
                audio18.pause();
            }, 400);
        });


        $(document).keyup(function(e){
            if(e.keyCode==81){
                $("#key1").removeClass("key_white1");
                $("#key1").addClass("key_white");
            }
            if(e.keyCode==87){
                $("#key2").removeClass("key_white1");
                $("#key2").addClass("key_white");
            }
            if(e.keyCode==69){
                $("#key3").removeClass("key_white1");
                $("#key3").addClass("key_white");
            }
            if(e.keyCode==82){
                $("#key4").removeClass("key_white1");
                $("#key4").addClass("key_white");
            }
            if(e.keyCode==84){
                $("#key5").removeClass("key_white1");
                $("#key5").addClass("key_white");
            }
            if(e.keyCode==89){
                $("#key6").removeClass("key_white1");
                $("#key6").addClass("key_white");
            }
            if(e.keyCode==85){
                $("#key7").removeClass("key_white1");
                $("#key7").addClass("key_white");
            }
            if(e.keyCode==73){
                $("#key8").removeClass("key_white1");
                $("#key8").addClass("key_white");
            }
            if(e.keyCode==79){
                $("#key9").removeClass("key_white1");
                $("#key9").addClass("key_white");
            }
            if(e.keyCode==80){
                $("#key10").removeClass("key_white1");
                $("#key10").addClass("key_white");
            }
            if(e.keyCode==219){
                $("#key11").removeClass("key_white1");
                $("#key11").addClass("key_white");
            }
            if(e.keyCode==221){
                $("#key12").removeClass("key_white1");
                $("#key12").addClass("key_white");
            }

            if(e.keyCode==51){
                $("#key13").removeClass("key_black1");
                $("#key13").addClass("key_black");
            }
            if(e.keyCode==52){
                $("#key14").removeClass("key_black1");
                $("#key14").addClass("key_black");
            }
            if(e.keyCode==53){
                $("#key15").removeClass("key_black1");
                $("#key15").addClass("key_black");
            }
            if(e.keyCode==54){
                $("#key16").removeClass("key_black1");
                $("#key16").addClass("key_black");
            }
            if(e.keyCode==55){
                $("#key17").removeClass("key_black1");
                $("#key17").addClass("key_black");
            }
            if(e.keyCode==56){
                $("#key18").removeClass("key_black1");
                $("#key18").addClass("key_black");
            }
            
        });
$(document).keydown(function(e){
    if(e.keyCode==81){clearTimeout(t1);
        audio1.play();
        t1 = setTimeout(function() {
            audio1.pause();
        }, 400);
        $("#key1").removeClass("key_white");
        $("#key1").addClass("key_white1");
    }
    if(e.keyCode==87){clearTimeout(t2);
        audio2.play();
        t2 = setTimeout(function() {
            audio2.pause();
        }, 400);
        $("#key2").removeClass("key_white");
        $("#key2").addClass("key_white1");
    }


    if(e.keyCode==69){clearTimeout(t3);
        audio3.play();
        t3 = setTimeout(function() {
            audio3.pause();
        }, 400);
        $("#key3").removeClass("key_white");
        $("#key3").addClass("key_white1");

    }

    if(e.keyCode==82){clearTimeout(t4);
        audio4.play();
        t4 = setTimeout(function() {
            audio4.pause();
        }, 400);
        $("#key4").removeClass("key_white");
        $("#key4").addClass("key_white1");
    }

    if(e.keyCode==84){ clearTimeout(t5);
        audio5.play();
        t5 = setTimeout(function() {
            audio5.pause();
        },400);
        $("#key5").removeClass("key_white");
        $("#key5").addClass("key_white1");
    }
    if(e.keyCode==89){ clearTimeout(t6);
        audio6.play();
        t6 = setTimeout(function() {
            audio6.pause();
        }, 400);
        $("#key6").removeClass("key_white");
        $("#key6").addClass("key_white1");
    }
    if(e.keyCode==85){clearTimeout(t7);
        audio7.play();
        t7 = setTimeout(function() {
            audio7.pause();
        },400);
        $("#key7").removeClass("key_white");
        $("#key7").addClass("key_white1");
    }
    if(e.keyCode==73){clearTimeout(t8);
        audio8.play();
        t8 = setTimeout(function() {
            audio8.pause();
        }, 400);
        $("#key8").removeClass("key_white");
        $("#key8").addClass("key_white1");
    }
    if(e.keyCode==79){clearTimeout(t9);
        audio9.play();
        t9 = setTimeout(function() {
            audio9.pause();
        }, 400);
        $("#key9").removeClass("key_white");
        $("#key9").addClass("key_white1");
    }
    if(e.keyCode==80){ clearTimeout(t10);
        audio10.play();
        t10 = setTimeout(function() {
            audio10.pause();
        }, 400);
        $("#key10").removeClass("key_white");
        $("#key10").addClass("key_white1");
    }
    if(e.keyCode==219){clearTimeout(t11);
        audio11.play();
        t11 = setTimeout(function() {
            audio11.pause();
        },400);
        $("#key11").removeClass("key_white");
        $("#key11").addClass("key_white1");
    }
    if(e.keyCode==221){clearTimeout(t12);
        audio12.play();
        t12 = setTimeout(function() {
            audio12.pause();
        }, 400);
        $("#key12").removeClass("key_white");
        $("#key12").addClass("key_white1");
    }
    if(e.keyCode==51){clearTimeout(t13);
        audio13.play();
        t13 = setTimeout(function() {
            audio13.pause();
        }, 400);
        $("#key13").removeClass("key_black");
        $("#key13").addClass("key_black1");
    }



    if(e.keyCode==52){clearTimeout(t14);
        audio14.play();
        t14 = setTimeout(function() {
            audio4.pause();
        }, 400);
        $("#key14").removeClass("key_black");
        $("#key14").addClass("key_black1");
    }

    if(e.keyCode==53){ clearTimeout(t15);
        audio15.play();
        t15 = setTimeout(function() {
            audio15.pause();
        },400);
        $("#key15").removeClass("key_black");
        $("#key15").addClass("key_black1");
    }
    if(e.keyCode==54){ clearTimeout(t16);
        audio16.play();
        t16 = setTimeout(function() {
            audio16.pause();
        }, 400);
        $("#key16").removeClass("key_black");
        $("#key16").addClass("key_black1");
    }
    if(e.keyCode==55){clearTimeout(t17);
        audio17.play();
        t17 = setTimeout(function() {
            audio17.pause();
        },400);
        $("#key17").removeClass("key_black");
        $("#key17").addClass("key_black1");
    }
    if(e.keyCode==56){clearTimeout(t8);
        audio18.play();
        t18 = setTimeout(function() {
            audio18.pause();
        }, 400);
        $("#key18").removeClass("key_black");
        $("#key18").addClass("key_black1");
    }
});
$(".key_black2").mousedown(function() {
    $(this).removeClass("key_black");
    $(this).addClass("key_black1");

});
$(".key_black2").mouseup(function() {
    $(this).removeClass("key_black1");
    $(this).addClass("key_black");

});

$(".key_white2").mousedown(function() {
    $(this).removeClass("key_white");
    $(this).addClass("key_white1");

});
$(".key_white2").mouseup(function() {
    $(this).removeClass("key_white1");
    $(this).addClass("key_white");

});
}); 
