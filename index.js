function load() {
    var dt = new Date();
    var time = dt.getSeconds();
    var test1 = document.getElementById("test1");
    var test2 = document.getElementById("test2");
    console.log(test1, test2, time)
    if(10-time%10 > 5){
        test1.style.visibility = "visible";
        test2.style.visibility = "hidden";
    }
    else{
        test1.style.visibility = "hidden";
        test2.style.visibility = "visible";
    }
}


function check() {
    var account = document.getElementById("account");
    var password = document.getElementById("password");
    var tips = document.getElementById("tips");
    
    if(account.value == "admin" && password.value == "admin"){
        tips.text = "login success";
    }
    else{
        tips.text = "login failed";
    }
}

function test(){
    console.log(123)
}

setInterval(load,1000);