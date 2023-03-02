// WEB303 Assignment 2

$("document").ready(function{
    let prospect = $("#prospect");
    let convert = $("#convert");
    let retain = $("#retain");

    let content = $("#content");

    function getContent(e){
      content.slideUp(700, ()=>{
          let fileName = `${e.target.id}.html`;

          let xhr = new XMLHttpRequest();
          xhr.open('GET',fileName, true);

          xhr.onload = function(){

            content.html(this.responseText);
            content.slideDown();
          }

          xhr.send();
      });
    }

    prospect.click(getContent);
    convert.click(getContent);
    retain.click(getContent);
});
