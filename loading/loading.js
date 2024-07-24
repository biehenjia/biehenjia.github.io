



function loader() {
    let loaderItem = document.querySelectorAll(".loader__item");

    console.log(loaderItem)
    const tl = gsap.timeline();
    gsap.set(loaderItem, {
        transformOrigin: "100% 100%",
        scaleX: 1
    }),

        tl.to(loaderItem, .5, {
            scaleX: 0,
            transformOrigin: "0% 0%",
            stagger: .02,
            ease: "power3.out"
        })
            

}

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {

        loader();
    }, 1000);
});