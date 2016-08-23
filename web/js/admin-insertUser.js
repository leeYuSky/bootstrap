$(document).ready(function () {


    $('#insertForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            userName: {
                trigger : "keyup",
                validators: {
                    message : 'The username is not valid',
                    notEmpty: {
                        message: 'The username is required and cannot be empty'
                    },
                    stringLength : {
                        min : 6,
                        max : 30,
                        message : 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp : {
                        regexp : /^[a-zA-Z0-9_]+$/,
                        message : 'The username can only consist of alphabetical, number and underscore'
                    }
                }
            },
            password1: {
                trigger : "keyup",
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    stringLength : {
                        min : 6,
                        max : 18,
                        message : 'The password must be more than 6 and less than 30 characters long'
                    }
                }
            },
            password2: {
                trigger : "keyup",
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    stringLength : {
                        min : 6,
                        max : 18,
                        message : 'The password must be more than 6 and less than 30 characters long'
                    }
                }
            },
            insertAuth: {
                validators: {
                    notEmpty: {
                        message: 'The auth is required'
                    }
                }
            }
        },

    })
    .on('success.form.bv', function (e) {
// Prevent form submission
        e.preventDefault();

        var $insertUserName = $('#insertUserName');
        var $insertPassword1 = $('#insertPassword1');
        var $insertPassword2 = $('#insertPassword2');
        var $insertAuth = $("input[name='insertAuth']:checked");
        if($insertPassword1.val() == $insertPassword2.val()){

            $.ajax({
                type : 'POST',
                url : 'http://localhost:8080/insertUser',
                contentType : 'application/x-www-form-urlencoded; charset=utf-8',
                data : {
                    userName : $insertUserName.val(),
                    password : $insertPassword1.val(),
                    auth : $insertAuth.val()
                },
                dataType : 'json',
                success : function (data) {
                    alert(JSON.stringify(data));
                    $("#mainBody").empty();
                    $("#mainBody").append(getInsertUserForm());
                },
                error : function (msg) {
                    alert(msg);
                }
            })
        }else{
            alert("密码输入不一致");
        }
    });
    
    $("#submitOfReset").click(function () {
        $('#insertForm' ).data('bootstrapValidator').resetForm();
    })
    
    // $('#submitOfInsert').click(function () {
    //     var $insertUserName = $('#insertUserName');
    //     var $insertPassword1 = $('#insertPassword1');
    //     var $insertPassword2 = $('#insertPassword2');
    //     var $insertAuth = $('#insertAuth');
    //     if($insertPassword1.val() == $insertPassword2.val()){
    //
    //         $.ajax({
    //             type : 'POST',
    //             url : 'http://localhost:8080/insertUser',
    //             contentType : 'application/x-www-form-urlencoded; charset=utf-8',
    //             data : {
    //                 userName : $insertUserName.val(),
    //                 password : $insertPassword1.val(),
    //                 auth : $insertAuth.val()
    //             },
    //             dataType : 'json',
    //             success : function (data) {
    //                 alert(JSON.stringify(data));
    //                 $("#mainBody").empty();
    //                 $("#mainBody").append(getInsertUserForm());
    //             },
    //             error : function (msg) {
    //                 alert(msg);
    //             }
    //         })
    //     }else{
    //         alert("密码输入不一致");
    //     }
    // })
});