function formValid(){
     // 숫자인지 판별하는 정규 표현식
     var re =new RegExp("[0-9]{4}");
     var test2 = f.id_test2;
     var isValid = false;
     if(re.exec(test2.value) !=null){
        isValid = true;
    }
      
 
 if(!isValid){
    
     test2.value ="";
     test2.setAttribute("placeholder", "4자리 숫자로입력!");
    
 }
return isValid;
}