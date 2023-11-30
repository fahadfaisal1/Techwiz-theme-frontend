
var theme = document.getElementById("theme");
var css = document.getElementsByTagName("link");
console.log(css);

if(sessionStorage.getItem('darkmode') == 'true'){
  css[1].href = "./bootstrap/css/style2.css";
  theme.checked = true
}


theme.addEventListener("click",function(){
   if(theme.checked == true)
   {
     css[1].href = "./bootstrap/css/style2.css";
      sessionStorage.setItem('darkmode', 'true')
     
   }
   else
   {
     
       css[1].href = "./bootstrap/css/style.css";
       sessionStorage.removeItem('darkmode')
     
   }
})
