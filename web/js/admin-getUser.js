$(document).ready( function () {
    $('#table_id').DataTable({
//            responsive: true
    });

    //使用json(对象方式)需要在table里添加width='100%',达到自适应。
    $("#getAllUsers").click(function () {
        $.ajax({
            type:"GET",
            url:"http://localhost:8080/getAllUsers",
            contentType:"application/json; charset=utf-8",
            data:JSON.stringify({}),
            dataType:"json",
            success:function (data) {
                alert(JSON.stringify(data));
                $("#mainBody").empty();
                $("#mainBody").append(
                    "<div class='row'>\n"+
                    "<div class='col-lg-12'>\n"+
                    "<h1 class='page-header'>DataTables</h1>\n"+
                    "</div>\n"+
                    "<div class='col-lg-12'>\n"+
                    "<table id='table_id' class='display table table-striped table-bordered table-hover' width='100%'>\n"+
                    "<thead>\n"+
                    "<tr>\n"+
                    "<th>Id</th>\n"+
                    "<th>账号</th>\n"+
                    "<th>密码</th>\n"+
                    "<th>权限</th>\n"+
                    "</tr>\n"+
                    "</thead> \n"+
                    "</table> \n"+
                    "</div>\n"+
                    "</div>\n"
                );
                $('#table_id').DataTable({
                    responsive: true,
                    data:data["data"],
                    columns: [
                        { data: 'userId' },
                        { data: 'userName' },
                        { data: 'password' },
                        { data: 'auth' }
                    ]

                });
            },
            error:function(msg){
                alert(JSON.stringify(msg));
            }
        })
    })

    $("#getAllUsers1").click(function () {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/getAllUsers",
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify({}),
            dataType: "json",
            success: function (data) {
                alert(JSON.stringify(data));
                $("#mainBody").empty();
                $("#mainBody").append(getAllUsersFun(data));
                $('#table_id').DataTable({
                    responsive: true
                });
            },
            error: function (msg) {
                alert(JSON.stringify(msg));
            }
        })
    })

});

function getAllUsersFun(json){
    var userData = json["data"];
    var html= "<div class='row'>\n";
    html+=  "<div class='col-lg-12'>\n";
    html+=  "<h1 class='page-header'>用户表</h1>\n";
    html+=  "</div>\n";
    html+=  "<div class='col-lg-12'>\n";
    html+=  "<div class='panel panel-primary'>\n";
    html+=  "<div class='panel-heading'>liyuze<button id='insertUser' class='btn btn-default col-md-offset-10' >增加用户</button></div>\n";
    html+=  "<div class='panel-body'>\n";
    html+=  "<table id='table_id' class='display table table-striped table-bordered table-hover'>\n";
    html+=  "<thead>\n";
    html+=  "<tr>\n";
    html+=  "<th>Id</th>\n";
    html+=  "<th>账号</th>\n";
    html+=  "<th>密码</th>\n";
    html+=  "<th>权限</th>\n";
    html+=  "<th>操作</th>\n";
    html+=  "</tr>\n";
    html+=  "</thead> \n";
    html+=  "<tbody> \n";
    for(var i = 0;i < userData.length;i++){
        html += "<tr>\n";
        html += "<td>"+userData[i].userId+"</td>\n";
        html += "<td>"+userData[i].userName+"</td>\n";
        html += "<td>"+userData[i].password+"</td>\n";
        html += "<td>"+userData[i].auth+"</td>\n";
        html += "<td><button class='btn btn-danger btn-xs delete' name='"+ userData[i]["userId"]+  "'><i class='fa fa-trash-o fa-fw'></i>删除</button> &nbsp;" +
            "<button  class='btn btn-primary btn-xs update' name='"+ userData[i]["userId"]+  "' ><i class='fa fa-key fa-fw'></i>密码</button> " +
            "<button  class='btn btn-info btn-xs updateAuth' name='"+ userData[i]["userId"]+  "' ><i class='fa fa-user fa-fw'></i>权限</button></td>";
        html += "</tr>\n";
    }
    html+=  "</tbody> \n";
    html+=  "</table>\n";
    html+=  "</div>\n";
    html+=  "</div>\n";
    html+=  "</div>\n";
    html+=  "</div>\n";


    html+=  "<div id='mymodal' class='modal fade'>\n";
    html+=  "<div class='modal-dialog'>\n";
    html+=  " <div class='modal-content'>\n";
    html+=  " <div class='modal-header'>\n";
    html+=  "  <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>\n";
    html+=  " <h4 class='modal-title'>修改密码</h4>\n";
    html+=  " </div>\n";
    html+=  "<form id='mymodal-updatePassword' role='form' class='form-horizontal'>\n";
    html+=  " <div class='modal-body'>\n";
    html+=  "   <div class='form-group'>\n";
    html+=  "   <label for='newPassword1' class='col-sm-2 control-label'>新密码:</label>\n";
    html+=  "   <div class='col-sm-6'>\n";
    html+=  "   <input type='password' class='form-control' name='newPassword1' id='newPassword1'>\n";
    html+=  "   </div>\n";
    html+=  "   </div>\n";
    html+=  "   <div class='form-group'>\n";
    html+=  "   <label for='newPassword2' class='col-sm-2 control-label'>确认密码:</label>\n";
    html+=  "   <div class='col-sm-6'>\n";
    html+=  "   <input type='password' class='form-control' name='newPassword2' id='newPassword2'>\n";
    html+=  "   </div>\n";
    html+=  "   </div>\n";
    // html+=  "     <p>One fine body&hellip;</p>\n";
    html+=  "  </div>\n";
    html+=  "  <div class='modal-footer'>\n";
    html+=  "      <button  type='button' class='btn btn-default' data-dismiss='modal'>关闭</button>\n";
    html+=  "      <button id='modal-submit' type='submit' class='btn btn-primary'>确认提交</button>\n";
    html+=  "  </div>\n";
    html+=  "</form>\n";
    html+=  "  </div><!-- /.modal-content -->\n";
    html+=  "  </div><!-- /.modal-dialog -->\n";
    html+=  " </div><!-- /.modal -->\n";

    html+=  "<div id='mymodal1' class='modal fade'>\n";
    html+=  "<div class='modal-dialog'>\n";
    html+=  " <div class='modal-content'>\n";
    html+=  " <div class='modal-header'>\n";
    html+=  "  <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>\n";
    html+=  " <h4 class='modal-title'>修改权限</h4>\n";
    html+=  " </div>\n";
    html+=  " <div class='modal-body'>\n";
    html+=  "<form role='form' class='form-horizontal'>\n";
    html+=  "   <div class='form-group'>\n";
    html+=  "   <label for='newAuth' class='col-sm-3 control-label'>修改权限为:</label>\n";
    html+=  "   <div class='col-sm-5'>\n";
    html+=  "   <select id='newAuth' name='updateAuth' class='form-control'>\n";
    html+=  "       <option value='1'>超级管理员</option>\n";
    html+=  "       <option value='2'>管理员</option>\n";
    html+=  "       <option value='3'>用户</option>\n";
    html+=  "   </select>\n";
    html+=  "   </div>\n";
    html+=  "   </div>\n";
    // html+=  "     <p>One fine body&hellip;</p>\n";
    html+=  "  </div>\n";
    html+=  "  <div class='modal-footer'>\n";
    html+=  "      <button  type='button' class='btn btn-default' data-dismiss='modal'>关闭</button>\n";
    html+=  "      <button id='mymodal1-submit' type='button' class='btn btn-primary'>确认提交</button>\n";
    html+=  "  </div>\n";
    html+=  "</form>\n";
    html+=  "  </div><!-- /.modal-content -->\n";
    html+=  "  </div><!-- /.modal-dialog -->\n";
    html+=  " </div><!-- /.modal -->\n";
    html += "<script src='../bower_components/bootstrapvalidator/dist/js/bootstrapValidator.min.js'></script>";
    html+=  "<script src='js/admin-DU.js'></script>\n";
    return html;
}

function getInsertUserForm() {
    var html = "<div class='row'>\n";
    html += "   <div class='col-lg-12'>\n";
    html += "       <h1 class='page-header'>增加用户</h1>\n";
    html += "   </div>\n";
    html += "</div>\n";
    html += "<div class='row'>\n";
    html += "   <div class='panel panel-primary'>\n";
    html += "       <div class='panel-heading'>李煜泽</div>\n";
    html += "       <div class='panel-body'>\n";
    html += "           <form id='insertForm' class='form-horizontal' role='form'>";
    html += "               <div class='form-group'>";
    html += "                   <label for='insertUserName' class='col-lg-2 control-label'>用户名:</label>";
    html += "                   <div class='col-lg-4'>";
    html += "                       <input type='text' class='form-control' name='userName' id='insertUserName' placeholder='用户名'>";
    html += "                   </div>";
    html += "               </div>";
    html += "               <div class='form-group'>";
    html += "                   <label for='insertPassword1' class='col-lg-2 control-label'>密码:</label>";
    html += "                   <div class='col-lg-4'>";
    html += "                       <input type='password' class='form-control' name='password1' id='insertPassword1' placeholder='密码'>";
    html += "                   </div>";
    html += "               </div>";
    html += "               <div class='form-group'>";
    html += "                   <label for='insertPassword2' class='col-lg-2 control-label'>确认密码:</label>";
    html += "                   <div class='col-lg-4'>";
    html += "                       <input type='password' class='form-control' name='password2' id='insertPassword2' placeholder='确认密码'>";
    html += "                   </div>";
    html += "               </div>";
    // html += "               <div class='form-group'>";
    // html += "                   <label for='insertAuth' class='col-lg-2 control-label'>权限为:</label>";
    // html += "                   <div class='col-lg-4'>";
    // html += "                   <select id='insertAuth' name='insertAuth' class='form-control'>";
    // html += "                       <option value='1'>超级管理员</option>";
    // html += "                       <option value='2'>管理员</option>";
    // html += "                       <option value='3' selected='selected'>用户</option>";
    // html += "                   </select>";
    // html += "                   </div>";
    // html += "               </div>";
    html += "               <div class='form-group'>";
    html += "                   <label class='col-lg-2 control-label'>权限:</label>";
    html += "                   <div class='col-lg-4'>";
    html += "                       <div class='radio'>";
    html += "                           <label><input type='radio' name='insertAuth' value='1'> 超级管理员</label>";
    html += "                       </div>";
    html += "                       <div class='radio'>";
    html += "                           <label><input type='radio' name='insertAuth' value='2'> 管理员</label>";
    html += "                       </div>";
    html += "                       <div class='radio'>";
    html += "                           <label><input type='radio' name='insertAuth' value='3'> 用户</label>";
    html += "                       </div>";
    html += "                   </div>";
    html += "               </div>";
    html += "               <div class='form-group'>";
    html += "                   <button id='submitOfReset' type='reset' class='btn btn-default col-lg-offset-5'>重置</button>";
    html += "                   <button id='submitOfInsert' type='submit' class='btn btn-primary '>提交</button>"
    html += "               </div>"
    html += "           </form>";
    html += "       </div>\n";
    html += "   </div>\n";
    html += "</div>\n";
    html += "<script src='../bower_components/bootstrapvalidator/dist/js/bootstrapValidator.min.js'></script>";
    html += "<script src='js/admin-insertUser.js'></script>";
    
    return html;
}

$(document).ready(function () {
    $("#admin-insertUser").click(function () {
        $("#mainBody").empty();
        $("#mainBody").append(getInsertUserForm());
    })
})