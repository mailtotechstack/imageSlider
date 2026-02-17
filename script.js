 const imgContainer = document.querySelectorAll(".imgContainer");
 const points = document.querySelectorAll(".point");
 const imageName = document.querySelectorAll(".img-name");
imgContainer.forEach((image, idx) => {
    image.addEventListener("click", ()=>{
        image.classList.toggle("wfull");
        points[idx].classList.toggle("bg-white");
        imageName[idx].classList.toggle("opacity");
        imgContainer.forEach((i, idx)=>{
            if(i!=image){
                if(i.classList.contains("wfull")){
                    i.classList.remove("wfull");
                    points[idx].classList.remove("bg-white");
                    imageName[idx].classList.toggle("opacity");
                };
            };
        })
    });
});