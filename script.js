let container= document.querySelector('.container');
let sahe= document.querySelector('.sahe');
let sekil= document.querySelector('.sekil');
let netice= document.querySelector('.netice');

let containerRect=container.getBoundingClientRect()
let saheRect=sahe.getBoundingClientRect()
let sekilRect=sekil.getBoundingClientRect()
let neticeRect=netice.getBoundingClientRect()


container.addEventListener('mousemove',zoomImage)
netice.style.backgroundImage=`url(${sekil.src})`






function zoomImage(e){
    // console.log('zoom Image',e.clientX,e.clientY);
let {x,y}=getMousePos(e)
    sahe.style.left=x+'px';
    sahe.style.top=y+'px';
    


    let fx=neticeRect.width/saheRect.width
    let fy=neticeRect.height/saheRect.height
   

netice.style.backgroundSize=`${sekilRect.width * fx}px ${sekilRect.height*fy}px`

    netice.style.backgroundPosition=`-${x*fx}px -${y*fy}px`
}






function getMousePos(e){
  let x=e.clientX-containerRect.left-saheRect.width/2;
    let y=e.clientY-containerRect.top-saheRect.height/2;

    let minX=0;
    let minY=0;
    let maxX=containerRect.width-saheRect.width;
    let maxY=containerRect.height-saheRect.height;
if(x<=minX){
    x=minX
}
else if(x>=maxX){
x=maxX
}
if(y<=minY){
    y=minY
    }
    else if(y>=maxY){
        y=maxY
        }
        return{x,y}
}