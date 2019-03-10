var ans = 0;
$(function() {
  $("#question").click(function() {
      console.log("AC");
      $("#q1").show();
  });
  $("#btn1").click(function() {

    const chk1 = $('input[name="q1"]:checked').val();
    if(chk1 == "Yes"){
        ans -= 10;
    }else{
        ans += 20;
    }
    console.log(ans);

    $("#q1").hide();
    $("#q2").show();
    });
    $("#btn2").click(function() {
        const chk2 = $('input[name="q2"]:checked').val();
        if(chk2 == "Yes"){
            ans -= 10;
        }else{
            ans += 20;
        }
        console.log(ans);
        $("#q2").hide();
        $("#q3").show();
    });
    $("#btn3").click(function() {
        const chk3 = $('input[name="q3"]:checked').val();
        if(chk3 == "Yes"){
            ans -= 20;
        }else{
            ans += 20;
        }
        console.log(ans);
        $("#q3").hide();
        $("#q4").show();
    });
    $("#btn4").click(function() {
        const chk4 = $('input[name="q4"]:checked').val();
        if(chk4 == "Yes"){
            ans += 20;
        }else{
            ans -= 20;
        }
        console.log(ans);
        $("#q4").hide();
        $("#q5").show();
    });
    $("#btn5").click(function() {
        const chk5 = $('input[name="q5"]:checked').val();
        if(chk5 == "Yes"){
            ans -= 40;
        }else{
            ans += 20;
        }
        console.log(ans);
        $("#q5").hide();
    });
});
