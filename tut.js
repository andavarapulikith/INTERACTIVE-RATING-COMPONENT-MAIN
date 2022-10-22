let ele=document.getElementsByClassName('h');
let val = 0;
for (let index = 0; index < ele.length; index++) 
{

    ele[index].onclick=function()
    {
        ele[index].style.backgroundColor=" hsl(217, 12%, 63%)";
        ele[index].style.color = "white";
        val = parseInt(ele[index].innerHTML);
        
    }

    let btn=document.getElementById('next');
    btn.addEventListener('click',func1);
    var ele2 = document.querySelector(".score");
    var ele3 = document.querySelector(".thank");
    function func1(e)
    {
        ele2.innerHTML = "You selected " + val + " out of 5";
        ele3.style.zIndex = 1;
    }
    
}