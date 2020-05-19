$(function(){
    $.get('/user/allorders',(data)=>{
        console.log(data)
        printingdetails(data);
    })
  });
