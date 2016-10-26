var _start = function(){
    var workNumber = localStorage.getItem("workNumber");
    var password = localStorage.getItem("password");
    var form = $("#form");
    var choice = $("#choice");
    if(workNumber == null || workNumber.length != 5) {
        form.show();
        choice.css("display","none");
    }else{
        _doLogin();
    }

    $("#doSubmit").click(function(){
        workNumber = $("#workNumber").val();
        password = $("#password").val();
        localStorage.setItem("workNumber",workNumber);
        localStorage.setItem("password",password);
        form.css("display","none");
        choice.css("display","block");
        _doLogin();
    });

    $("#eat").click(function(){
        _submit(1);
    });
    $("#cancel").click(function(){
        _submit(0);
    });

    function _doLogin() {
        var form1 = $('<form method="POST"></form>');
        form1.attr("target","iframeForm");//
        form1.attr("action","http://172.16.10.127:7777/ifan/login");//
        $("<input name='workNumber' value='"+workNumber+"'>").appendTo(form1);
        $("<input name='password' value='"+password+"'>").appendTo(form1);
        $('body').append(form1);
        form1.submit();
        form1.css("display","none");
    }

    function _submit(eatFlag){
        $.ajax({
            url:"http://172.16.10.127:7777/ifan/submitOrder",
            type:"get",
            dataType:"json",
            data:{
                'eatFlag':eatFlag
            },
            success:function(data){
                //alert(data.message);
                var options={
                    dir: "ltr",  //控制方向，据说目前浏览器还不支持
                    lang: "utf-8",
                    icon: "icon.png",
                    body: data.message
                };
                var n = new Notification("加班小分队", options);
            }
        });
    }
}();
//setTimeout(_start,5000);
