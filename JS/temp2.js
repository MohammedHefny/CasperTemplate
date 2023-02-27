/*start landing */
bullets = document.querySelectorAll(".landing ul li")
leftArrow = document.querySelector(".landing .left")
RightArrow = document.querySelector(".landing .right")
text1  = document.querySelector(".landing .text1 ")
text2 = document.querySelector(".landing .text2")
text3 = document.querySelector(".landing .text3")
let i = -1;
RightArrow.addEventListener("click",(e)=>{
    bullets.forEach((e)=>{
        e.classList.remove("active")
    })

i++ 

text1.classList.add("none")
if (i === 1){
    text2.classList.toggle("none")
    bullets[1].classList.add("active")
}
if (i === 2){
    text2.classList.toggle("none")
    text3.classList.toggle("none")
    bullets[2].classList.add("active")
}
if(i === 3){
    i = 0
    text1.classList.remove("none")
    text2.classList.add("none")
    text3.classList.add("none")
    bullets[0].classList.add("active")

}
})


let j = -1
leftArrow.addEventListener("click",(e)=>{
    console.log(bullets[1])

    j++ 
    
if (j === 0){
    bullets.forEach((e)=>{
        e.classList.remove("active")
    })
    text1.classList.remove("none")
    text2.classList.add("none")
    text3.classList.add("none")
    bullets[0].classList.add("active")
}



if (j === 1){
    bullets[0].classList.remove("active")
    bullets[2].classList.add("active")
    text1.classList.add("none")
    text3.classList.toggle("none")
}
if (j === 2){
    bullets[2].classList.remove("active")
    bullets[1].classList.add("active")
    text2.classList.toggle("none")
    text3.classList.toggle("none")
}
if(j === 3){
    bullets[1].classList.remove("active")
    bullets[0].classList.add("active")
    text1.classList.toggle("none")
    text2.classList.toggle("none")
    j = 0
    
}

})




// let j  = 0;
// // i = 0
// leftArrow.addEventListener("click",(e)=>{
//     if (j === 0){
//         text3.classList.add("none")
//         text2.classList.add("none")
//     }
//     text1.classList.add("none")
//     j++ 
// if (j === 1){
//     text2.classList.toggle("none")
//     // text3.classList.toggle("none")
// }
// if (j === 2){
//     text2.classList.toggle("none")
//     text3.classList.toggle("none")
// }
// if(j === 3){
//     j = 0
//     text1.classList.remove("none")
//     text2.classList.add("none")
//     text3.classList.add("none")

// }
// })
/*end landing */

// let imgs = ["pexels-steve-johnson-1266808.jpg","pexels-steve-johnson-1509534.jpg",]
// Random = Math.floor(Math.random()*imgs.length)
// landing.style.backgroundImage = 'url("Images/'+imgs[Random]+'")'