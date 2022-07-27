function formValid(){
     // 숫자인지 판별하는 정규 표현식
     var re =new RegExp("[0-9]{4}");
     var test2 = document.getElementById("id_test2");
     var isValid = false;
     if(test2.value.match(re) !=null &&
         test2.value.split(re).length ==1) {
             isValid = true;
         }
     
 
 if(!isValid){
     //기본 이벤트 작업이 정상적으로 수행되지 않아야 함을 알림
     test2.value ="";
     test2.setAttribute("placeholder", "4자리 숫자로입력!");
     return false;
 }
return true;
}