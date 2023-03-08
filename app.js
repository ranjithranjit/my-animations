gsap.registerPlugin(Flip);
 const tl = gsap.timeline({defaults:{ease:"power1.out"}})


const links = document.querySelectorAll("a");
const activeNav = document.querySelector(".line");

links.forEach((link) => {
    link.addEventListener("click", ()=>{
        gsap.to(links, {color: 'white'});

        // alert("Clicked")
        if(document.activeElement === link){
            gsap.to(link, {color: "#b7dddd"});
        }
        // wanna move the line \
        const state = Flip.getState(activeNav);
        link.appendChild(activeNav);
        Flip.from(state,{
            duration: 1.25,
            absolute: false,
            ease: "elastic(1, 0.5)"
        }
        )
    });
});
tl.to(".text",{y:"0%",duration: 2, stagger: .025, delay:2});
tl.to(".page", {y:"-100%", duration: 1.2, delay: .5, delay:1});
tl.to(".loader", {y:"-100%", duration: 1} ,"-=1"); 
function myfunction(){
gsap.to(".box-1",{duration:1, y:"0%", ease:"bounce"});
gsap.to(".box-2",{duration:1, y:"0%", ease:"bounce.out",delay:1})
gsap.to(".box-3",{duration:1, y:"0%", ease:"bounce", delay: 1.5})
gsap.to(".box-4",{duration:1, y:"0%", ease:"bounce", delay: 2 })
}
gsap.from(".underLine2", {duration: 1, x:"-1000%", ease:"power2.out"});

gsap.from(".underLine1", {duration: 1, x:"1000%", ease:"power2.out"});
gsap.to(".kindof",{duration: 3, y: "-100%", delay:1.5, ease:"ease.out"})

function text(){
    gsap.to(".content-display", {duration: 1, y:"0%",ease:"sine"});
}
function textBack(){
    gsap.to(".content-display", {duration: 1, y:"-1000%",ease:"sine"});

}


function fun(){
 gsap.to(".alert", {opacity: 0,y:"300%", duration: 1});
 
}
