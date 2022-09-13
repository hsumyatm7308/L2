const getmap = document.querySelector(".map-container");

var getsmallcolor = document.getElementById('smallcolor'),
    getmediumcolor = document.getElementById('mediumcolor'),
    getlargecolor = document.getElementById("largcolor");

    var circleidx = 0 ;

getmap.addEventListener('click',function(e){
    circleidx++;

    // console.log(e.target)
    if(e.target.classList.contains('map-container')){


    const cx = e.clientX;
    const cy = e.clientY;
    // console.log(cx,cy) 


    const mapleft = e.target.offsetLeft;
    const maptop = e.target.offsetTop;
    // console.log(mapleft,maptop)

    const curx = cx - mapleft;
    const cury = cy - maptop;
    // console.log(curx,cury);

    const circle = document.createElement('span');
    circle.id = circleidx
    circle.classList.add("circle");
    // console.log(circle); 

    circle.style.left = `${curx}px` ;
    circle.style.top = `${cury}px`;


    console.log(getsmallcolor.value)
    console.log(getsmallcolor.selectedIndex);
                // setProperty = pyan htar tar 
    if(getsmallcolor.selectedIndex > 0 && getmediumcolor.selectedIndex > 0 && getlargecolor.selectedIndex){
        circle.style.setProperty('--small-color',getsmallcolor.value);
        circle.style.setProperty('--medium-color',getmediumcolor.value);
        circle.style.setProperty('--large-color',getlargecolor.value);
    }




    // e.target.appendChild(circle);
    this.appendChild(circle)

}

// span tag ko hti nay loh  outside mar  invode lote tar 
    removepointer(e);
});

function removepointer(e){
    // console.log(e.target);
    // console.log(circleidx);

    if(e.target.id > 0){
        e.target.remove();
    }
}

// နှုတ်ခမ်းမွေးတွေလည်း တပ်လုပ်ရတယ် 

// 13MP 