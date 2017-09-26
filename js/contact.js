/**
 * Created by pc1 on 2017/8/24.
 */
function showName(){
    var names=document.getElementById("name");
    if(names.value==""){
        alert("User name cannot be empty！");
        return false;
    }
    return true;
}
function emailBlur(){
    var email=document.getElementById("email");
    var reg=/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
    if(email.value==""){
        alert("Mailbox format error");
        return false;
    }
    if(reg.test(email.value)==false){
        alert("Mailbox format error");
        return false;
    }
    return true;
}
function phone(){
    var phones=document.getElementById("phone");
    var reg=/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$/;
    if(phones.value==""){
        alert("Phone format error");
        return false;
    }
    if(reg.test(phones.value)==false){
        alert("Phone format error");
        return false;
    }
    return true;
}
function messages(){
    var mess=document.getElementById("foss");
    if(mess.value==""){
        alert("Message format error");
        return false;
    }
    return true;
}
function show(){
    showName();
    phone();
    emailBlur();
    messages();
    if(showName()&&phone()&&emailBlur()&&messages()){
        alert("Send to mailbox");
    }else{
        return false;

    }
}
