$(document).ready(function () {

    $(".delete").each(function () {

        $(this).click(function () {
            // alert(this.name);
            // alert($(this).attr('name'));
            var name = $(this).attr('name');

            $.ajax({
                type : "POST",
                url : "http://localhost:8080/deleteUser",
                contentType : "application/json;charset=utf-8",
                // data : JSON.stringify([name]),
                data : JSON.stringify({name:name}),
                dataType : "json",
                success : function (msg) {
                    alert(JSON.stringify(msg));
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
                },
                error : function (msg) {
                    alert(msg);
                }
            });
        });

    });
    
    $('#mymodal-updatePassword').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        excluded: [':disabled'],
        fields : {
            newPassword1 : {
                trigger : "keyup",
                validators: {
                    message : 'The password is not valid',
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    stringLength : {
                        min : 6,
                        max : 30,
                        message : 'The password must be more than 6 and less than 30 characters long'
                    },
                    regexp : {
                        regexp : /^[a-zA-Z0-9_]+$/,
                        message : 'The password can only consist of alphabetical, number and underscore'
                    }
                }
            },
            newPassword2 : {
                trigger : "keyup",
                validators: {
                    message : 'The password is not valid',
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    stringLength : {
                        min : 6,
                        max : 30,
                        message : 'The password must be more than 6 and less than 30 characters long'
                    },
                    regexp : {
                        regexp : /^[a-zA-Z0-9_]+$/,
                        message : 'The password can only consist of alphabetical, number and underscore'
                    }
                }
            },
        }
    }).on('success.form.bv', function (e) {
// Prevent form submission
        e.preventDefault();
        var $newPassword1 = $('#newPassword1').val();
        var $newPassword2 = $('#newPassword2').val();
        if($newPassword1 != $newPassword2) {
            alert('两次密码输入不一致');
        }else{
            $('#mymodal').modal("hide");
            $('#mymodal').on('hidden.bs.modal', function (e) {
                //alert($newPassword1 + "   "+ $newPassword2);
                $.ajax({
                    type : "POST",
                    url : "http://localhost:8080/updatePwd",
                    contentType : "application/x-www-form-urlencoded; charset=utf-8",
                    data : {
                        userId : $('#mymodal #modal-submit').attr('name'),
                        password : $newPassword1
                    },
                    dataType : "json",
                    success : function (data1) {
                        alert(JSON.stringify(data1));
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
                    }

                })
            })

        }
    });

    $(".update").each(function () {

        $(this).click(function () {
            var id = $(this).attr('name');
            //console.log(id);
            $.ajax({
                type : "POST",
                url : "http://localhost:8080/getOneUser",
                contentType : "application/json;charset=utf-8",
                data : JSON.stringify([id]),
                dataType : "json",
                success : function (data) {
                    var userData = data["user"];
                    alert(JSON.stringify(userData));
                    //1. 触发reset按钮清空
                    // $('#modalReset').click();
                    //2. 一个一个的清空
                    $('#newPassword1').val('');
                    $('#newPassword2').val('');
                    $('#mymodal-updatePassword').data('bootstrapValidator').resetForm();
                    $('#mymodal #modal-submit').attr('name',id);
                    $('#mymodal').modal("show");

                },
                error : function (msg) {
                    alert(msg);
                }
            })
        })
    })

    // $('#mymodal #modal-submit').click(function () {
    //
    //     var $newPassword1 = $('#newPassword1').val();
    //     var $newPassword2 = $('#newPassword2').val();
    //     if($newPassword1 != $newPassword2) {
    //         alert('两次密码输入不一致');
    //     }else{
    //         $('#mymodal').modal("hide");
    //         $('#mymodal').on('hidden.bs.modal', function (e) {
    //             //alert($newPassword1 + "   "+ $newPassword2);
    //             $.ajax({
    //                 type : "POST",
    //                 url : "http://localhost:8080/updatePwd",
    //                 contentType : "application/x-www-form-urlencoded; charset=utf-8",
    //                 data : {
    //                     userId : $('#mymodal #modal-submit').attr('name'),
    //                     password : $newPassword1
    //                 },
    //                 dataType : "json",
    //                 success : function (data1) {
    //                     alert(JSON.stringify(data1));
    //                     $.ajax({
    //                         type: "GET",
    //                         url: "http://localhost:8080/getAllUsers",
    //                         contentType: "application/json;charset=utf-8",
    //                         data: JSON.stringify({}),
    //                         dataType: "json",
    //                         success: function (data) {
    //                             alert(JSON.stringify(data));
    //                             $("#mainBody").empty();
    //                             $("#mainBody").append(getAllUsersFun(data));
    //                             $('#table_id').DataTable({
    //                                 responsive: true
    //                             });
    //                         },
    //                         error: function (msg) {
    //                             alert(JSON.stringify(msg));
    //                         }
    //                     })
    //                 }
    //
    //             })
    //         })
    //
    //     }
    //
    // })

    
    $('.updateAuth').each(function () {

        $(this).click(function () {
            var id = $(this).attr('name');
            //console.log(id);
            $.ajax({
                type : "POST",
                url : "http://localhost:8080/getOneUser",
                contentType : "application/json;charset=utf-8",
                data : JSON.stringify([id]),
                dataType : "json",
                success : function (data) {
                    var userData = data["user"];
                    alert(JSON.stringify(userData));
                    var auth = userData['auth'];

                    //     $('#mymodal1 option[value=1]').removeAttr('selected');
                    //     $('#mymodal1 option[value=2]').removeAttr('selected');
                    //     $('#mymodal1 option[value=3]').removeAttr('selected');

                    //alert($('#newAuth').val());
                    if(auth == 3){
                        //alert("auth == 3:" + (auth == 3));
                        // $('#mymodal1 option[value=3]').attr('selected','selected');
                        $('#newAuth').val(3);
                    }else if(auth == 2){
                        //alert("auth == 2:" + (auth == 2));
                        // $('#mymodal1 option[value=2]').attr('selected','selected');
                        $('#newAuth').val(2);
                    }else if(auth == 1){
                        //alert("auth == 1:" + (auth == 1));
                        // $('#mymodal1 option[value=1]').attr('selected','selected');
                        $('#newAuth').val(1);
                    }
                    $('#mymodal1 #mymodal1-submit').attr('name',id);
                    $('#mymodal1').modal("show");

                },
                error : function (msg) {
                    alert(msg);
                }
            })
        })
    })
    
    
    $('#mymodal1-submit').click(function () {
        var newAuth = $('#newAuth').val();

            $('#mymodal1').modal('hide');
            $('#mymodal1').on('hidden.bs.modal',function () {
                $.ajax({
                    type : 'POST',
                    url : "http://localhost:8080/updateAuth",
                    contentType : "application/x-www-form-urlencoded; charset=utf-8",
                    data : {
                        userId : $('#mymodal1 #mymodal1-submit').attr('name'),
                        auth : newAuth
                    },
                    dataType : 'json',
                    success : function (data) {
                        alert(JSON.stringify(data));
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
                        
                    }
                })
            })
    })
    
    $('#insertUser').click(function () {
        $("#mainBody").empty();
        $("#mainBody").append(getInsertUserForm());
    })

});