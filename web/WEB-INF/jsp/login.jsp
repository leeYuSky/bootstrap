<%--
  Created by IntelliJ IDEA.
  User: liyuze
  Date: 16/5/29
  Time: 下午4:50
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<% String path = request.getContextPath();%>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <%--<link rel="shortcut icon" href="../../assets/ico/favicon.ico">--%>

    <title>Signin Template for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="<%=path%>/CSS/login.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>

<div class="container">

    <form id="loginForm" action="/checkLogin" class="form-signin" role="form" method="post">
        <div class="form-group">
            <h2 class="form-signin-heading">Please sign in</h2>
        </div>
        <div>
            <%-- form-control 将width设置为100% --%>
            <input id="login-email" name="userName" type="text" class="form-control" placeholder="Email" required autofocus>
        </div>
        <%-- form-group 获得更好的排版,下外边距设置为15px --%>
        <div class="form-group">
            <input id="login-password" name="password" type="password" class="form-control" placeholder="Password" required>
        </div>

        <div class="checkbox">
            <label class="checkbox">
                <input id="saveUserName" type="checkbox" value="remember-me"> Remember me
            </label>
        </div>

        <button id="submit-login" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
    <div class="row">
        <div class="text-center">
            <img id="qrcode" style="width: auto">
         </div>
    </div>
</div> <!-- /container -->



<!-- jQuery -->
<script src="../bower_components/jquery/dist/jquery.min.js"></script>
<script src="/js/cookie.jquery-1.4.1/jquery.cookie.js"></script>
<script src="/js/login-cookie.js"></script>
<script>
    $("#qrcode").attr("src","image?imageUrl=http://www.cnblogs.com/yisheng163/p/4472687.html")
</script>

<%--<script>--%>
    <%--$(document).ready(function () {--%>
        <%--$("#submit-login").click(function () {--%>
            <%--var $email = $("#login-email").val();--%>
            <%--var $password = $("#login-password").val();--%>
            <%--console.log($email);--%>
            <%--console.log($password);--%>
            <%--$.ajax({--%>
                <%--type: "POST",--%>
                <%--contentType: "application/x-www-form-urlencoded; charset=utf-8",--%>
                <%--url: "http://localhost:8080/checkLogin",--%>
                <%--data: {--%>
                    <%--userName : $email,--%>
                    <%--password : $password--%>
                <%--},--%>
                <%--dataType: "html",--%>
                <%--success:function (msg) {--%>
                    <%--alert(msg);--%>
                    <%--//JSON.stringify(jsonObject);将json转换为字符串--%>
                    <%--//JSON.parse(jsonString);将json格式的字符串转换成json对象--%>
<%--//                    alert(JSON.stringify(msg));--%>
<%--//                    var status = msg.status;--%>
<%--//                    var data = msg["data"];--%>
<%--//                    var s = "状态为:" + status +" ";--%>
<%--//                    alert(s);--%>
<%--//                    for(var i = 0;i < data.length;i++){--%>
<%--//                        alert(data[i].sex);--%>
<%--//                    }--%>
<%--//                    if(msg === "yes"){--%>
<%--//                        location.href = "/WEB-INF/jsp/admin.jsp";--%>
<%--//                    }else{--%>
<%--//                        location.href = "/admin.jsp";--%>
<%--//                    }--%>

                <%--},--%>
                <%--error:function (msg) {--%>
                    <%--alert("error!!!!!!");--%>
                <%--}--%>

            <%--});--%>
        <%--});--%>
    <%--});--%>
<%--</script>--%>

<%--<div class="container">--%>
    <%--<form role="form">--%>
        <%--<div class="form-group">--%>
            <%--<label for="exampleInputEmail1">Email address</label>--%>
            <%--<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">--%>
        <%--</div>--%>
        <%--<div class="form-group">--%>
            <%--<label for="exampleInputPassword1">Password</label>--%>
            <%--<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">--%>
        <%--</div>--%>
        <%--<div class="form-group">--%>
            <%--<label for="exampleInputFile">File input</label>--%>
            <%--<input type="file" id="exampleInputFile">--%>
            <%--<p class="help-block">Example block-level help text here.</p>--%>
        <%--</div>--%>
        <%--<div class="checkbox">--%>
            <%--<label>--%>
                <%--<input type="checkbox"> Check me out--%>
            <%--</label>--%>
        <%--</div>--%>
        <%--<button type="submit" class="btn btn-success">Submit</button>--%>
    <%--</form>--%>
<%--</div>--%>
<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
</body>
</html>


