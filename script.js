$(document).ready(function() {
    $("#hidden").hover(function() {
        $(this).css("color", "black");
    },
    function() {
        $(this).hide();
    });

    $("#alertButton").click(function() {
        alert("This is an alert!");
    });    

});


function revealMessage () {
    document.getElementById("hiddenMessage").style.display= 'block';
}

function countDown() {
    var newVal=10;
    var currentVal= document.getElementById("countDownButton").innerHTML;
    if(currentVal>0) {
        newVal= currentVal-1;
    }
    document.getElementById("countDownButton").innerHTML=newVal;//countdown restarts! haha infinite cruises!
}

function revealContactInfo() {
    if(document.getElementById("hiddenContactInfo").style.display=='none') {
        document.getElementById("hiddenContactInfo").style.display= 'block';
    }
    else if(document.getElementById("hiddenContactInfo").style.display=='block') {
        document.getElementById("hiddenContactInfo").style.display= 'none';

    }
}
