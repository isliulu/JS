/**
 * created by Administrator on 2019-5-16
 */

$(document).ready(function () {

    $("button").click(function (e) {
        alert(e);
        return false;
        let val = $('#input-text').val();
        $.ajax({
            type:'POST',
            url: "demo_test.txt",
            data: {
                name: val
            },
            success: function (result) {
                alert(val,'success');
            },
            error: function (error) {
                alert(val);
            }
        });
    });


});

// success:function(result){
//     $("#div1").html(result);
// },error:function () {
//     let val = $('input').val();
//     alert(val);
// }
