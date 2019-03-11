let ans = -1;
let claered = false;

const  questionStart = function() {
    console.log("AC");
    $("#q1").show();
    if(ans==-1)ans++;
    else {
        claered = true;
    }
};

const question1 = function() {
    const chk1 = $('input[name="q1"]:checked').val();
    if(chk1 == "Yes"){
        ans -= 10;
    }else{
        ans += 20;
    }
    console.log(ans);

    $("#q1").hide();
    $("#q2").show();
}

const question2 = function() {
    const chk2 = $('input[name="q2"]:checked').val();
    if(chk2 == "Yes"){
        ans -= 10;
    }else{
        ans += 20;
    }
    console.log(ans);
    $("#q2").hide();
    $("#q3").show();
}

const question3 = function() {
    const chk3 = $('input[name="q3"]:checked').val();
    if(chk3 == "Yes"){
        ans -= 20;
    }else{
        ans += 20;
    }
    console.log(ans);
    $("#q3").hide();
    $("#q4").show();
}

const question4 = function() {
    const chk4 = $('input[name="q4"]:checked').val();
    if(chk4 == "Yes"){
        ans += 20;
    }else{
        ans -= 20;
    }
    console.log(ans);
    $("#q4").hide();
    $("#q5").show();
}

const question5 = function() {
    const chk5 = $('input[name="q5"]:checked').val();
    if(chk5 == "Yes"){
        ans -= 40;
    }else{
        ans += 20;
    }
    if(claered)ans /= 2;
    console.log(ans);
    if(ans<=10)$('#question').attr('src', 'images/level1.png');
    else if(ans<=30)$('#question').attr('src', 'images/level2.png');
    else if(ans<=70)$('#question').attr('src', 'images/level3.png');
    else if(ans<=90)$('#question').attr('src', 'images/level4.png');
    else $('#question').attr('src', 'images/level5.png');
    $("#q5").hide();
}
$(function() {
    $("#question").click(function(){questionStart();});
    $("#btn1").click(function(){question1()});
    $("#btn2").click(function(){question2()});
    $("#btn3").click(function(){question3()});
    $("#btn4").click(function(){question4()});
    $("#btn5").click(function(){question5()});
});