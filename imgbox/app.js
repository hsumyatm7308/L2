const getimageboxs = document.querySelectorAll(".imgbox")
// console.log(getimagebox) notelist 
getimageboxs.forEach(function(getimagebox,idx){
//   console.log(idx)
//   console.log(getimagebox)

getimagebox.addEventListener("click",function(){
    // console.log(idx)
    showbox(idx)
});

});


function showbox(idx) {
//    console.log(idx)
getimageboxs.forEach(function(imagebox,currentidx){
    console.log('from current idx =' ,currentidx)
    console.log('from parameter =',idx)

    if(idx === currentidx){
        imagebox.classList.add('shows');

        imagebox.addEventListener("click",function(e){
            console.log(e.target);
            console.log(e.target.className)

            if(e.target.className === 'btn-close'){
                imagebox.classList.remove("shows")
            }

            if(e.target.className === 'btn'){
                const getsubbtn = document.querySelector('.btn');
                getsubbtn.textContent = "Subscribed"
            }
        })

    }else{
        imagebox.classList.remove("shows");
    }
})
}