$(document).ready(function () {


    if($.cookie("userName")){

        $("#login-email").val($.cookie("userName"));
    }

    $("#loginForm").submit(function () {
        if($("#saveUserName:checked").val()){


            $.cookie("userName",$("#login-email").val(),{
                path : "/",
                expires : 7
            })
        }else{


            $.removeCookie("userName",{
                path : "/"
            })
        }
        // return false;
    })
});