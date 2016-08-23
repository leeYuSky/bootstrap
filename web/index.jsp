<%--
  Created by IntelliJ IDEA.
  User: liyuze
  Date: 16/5/29
  Time: 下午4:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<% String path = request.getContextPath();%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="../../assets/ico/favicon.ico">

    <title>Starter Template for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="<%=path%>/CSS/index.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>

<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <%--保证在窄屏时要显示的图标样式（固定写法）--%>
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/WEB-INF/jsp/login.jsp">李煜泽的个人网站</a>
        </div>
        <%--保证在窄屏时需要折叠的内容必须包裹在带一个div内，--%>
        <%--并且为这个div加入collapse、navbar-collapse两个类名。--%>
        <%--最后为这个div添加一个class类名或者id名--%>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li><a href="/index.jsp">首页</a></li>
                <li class="active"><a href="#">CSS</a></li>
                <%--添加二级菜单--%>
                <li class="dropdown">
                    <a href="#" data-toggle="dropdown" class="dropdown-toggle">
                        Java<span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Java基础 <span class="badge">3</span></a></li>
                        <li><a href="#">Java进阶</a></li>
                        <li><a href="#">设计模式</a></li>
                        <li class="divider"></li>
                        <li><a href="#">其他</a></li>
                    </ul>
                </li>
                <li ><a href="#">JQuery</a></li>

            </ul>
            <div class="navbar-right">
                <%--navbar-btn 保持垂直对齐--%>
                <%--<button class="btn btn-primary navbar-btn" data-toggle="modal" data-target="#mymodal-login">注册</button>--%>
                <a data-toggle="modal" href="#mymodal-login" class="btn btn-primary navbar-btn">注册(链接)</a>

            </div>
            <form action="##" class="navbar-form navbar-right" role="search">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="请输入关键词"/>
                </div>
                <button type="submit" class="btn btn-primary">搜索</button>
            </form>


        </div><!--/.nav-collapse -->

    </div>
</nav>
<%--模态弹出框--%>
<div class="modal fade" id="mymodal-login" tabindex="-1" role="dialog" aria-labelledby="mymodal-title"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;
                    </span><span class="sr-only">Close</span></button>
                <h4 class="modal-title" id="mymodal-title">登录</h4>
            </div>
            <div class="modal-body">

                <form class="form-signin" role="form">
                    <div class="form-group">
                        <h2 class="form-signin-heading">Please sign in</h2>
                    </div>
                    <div class="form-group">
                        <input id="login-email" type="email" class="form-control" placeholder="Email address" required autofocus>
                        <input id="login-password" type="password" class="form-control" placeholder="Password" required>
                    </div>
                    <div class="checkbox">
                        <label class="checkbox">
                            <input type="checkbox" value="remember-me"> Remember me
                        </label>
                    </div>
                    <button id="submit-login" class="btn btn-lg btn-primary btn-block" type="button">Sign in</button>
                </form>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <%--<button type="button" class="btn btn-primary">Save changes</button>--%>
            </div>
        </div>
    </div>

</div>
<%--大屏幕--%>
<div class="jumbotron">
    <div class="container">
        <h1>Hello,Java!</h1>
        <p>这是我的个人网页!</p>
        <p><a class="btn btn-primary btn-lg" role="button">Learn more »</a></p>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col-md-4">
            <h2>Java</h2>
            <p> Java语言是一种跨平台、适合于分布式计算的、面向对象的编程语言。
                Java 技术具有简单性、稳健性、平台移植性和安全性，广泛应用于桌上型应用程序、
                电子设备的嵌入式软件开发、建设大型的分布式企业级应用程序。
            </p>
            <br>
            <br>
            <p><a class="btn btn-primary" href="#">详情 »</a></p>
        </div>
        <div class="col-md-4">
            <h2>CSS</h2>
            <p> 层叠样式表是一种用来表现HTML（标准通用标记语言的一个应用）或
                XML（标准通用标记语言的一个子集）等文件样式的计算机语言。
            </p>
            <br>
            <br>
            <br>
            <p><a class="btn btn-primary" href="#">详情 »</a></p>
        </div>
        <div class="col-md-4">
            <h2>JQuery</h2>
            <p> jQuery是免费、开源的，使用MIT许可协议。jQuery的语法设计可以使开发更加便捷，
                例如操作文档对象、选择DOM元素、制作动画效果、事件处理、使用Ajax以及其他功能。
                除此以外，jQuery提供API让开发者编写插件。其模块化的使用方式使开发者可以很轻
                松的开发出功能强大的静态或动态网页。
            </p>
            <p><a class="btn btn-primary" href="#">详情 »</a></p>
        </div>
    </div>

    <hr>

    <footer style="text-align:center">
        <p>© liyuze 2016</p>
    </footer>
</div>




<%--<div class="container">--%>

    <%--<div class="starter-template">--%>
        <%--<h1>Bootstrap starter template</h1>--%>
        <%--<p class="lead">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>--%>
    <%--</div>--%>

<%--</div><!-- /.container -->--%>


<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="../bower_components/jquery/dist/jquery.min.js"></script>
<script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script>
    $(document).ready(function () {
        $("#submit-login").click(function () {
            var $email = $("#login-email").val();
            var $password = $("#login-password").val();
            console.log($email);
            console.log($password);
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/checkLogin",
                data: {
                    email : $email,
                    password : $password
                },
                dataType: "html",
                success:function (msg) {
                    alert(msg);
                    if(msg === "no"){
                        location.href = "/index.jsp";
                    }else{
                        location.href = "/WEB-INF/jsp/admin.jsp";
                    }

                },
                error:function (msg) {
                    alert("error!!!!!!");
                }

            });
        });
    });
</script>
</body>
</html>


