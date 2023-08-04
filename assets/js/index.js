const strings = [
    "من ادمین این سایت هستم",
    "من پشتیبان این سایت هست",
    "من مشترک این سایت هستم"
]

const typeing = function () {
    var typed = new Typed(
        "#typed", {
        strings,
        typeSpeed: 50,
        startDelay: 400,
        backSpeed: 40,
        backDelay: 700,
        loop: true
    }
    )
}
typeing()


$("#menu-hum").on(
    "click",
    () => {
        const classNames = document.querySelector(".sidebar")
            .classList

        classNames.toggle("sidebarChangeWidth")
        if (classNames.contains("sidebarChangeWidth")) {
            $("#typing").append('<p id="typed"></p>')
            typeing()
        } else {
            $("#typed").remove()
            $(".typed-cursor").remove()
        }

    }
)


const media = matchMedia("(max-width: 760px)")
const isCurrectMedia = () => {
    if (media.matches) {
        $(".sidebar").addClass("sidebarChangeWidth")
    } else {
        $(".sidebar").removeClass("sidebarChangeWidth")
        $(".typed-cursor").remove()
        
        $("#typed").remove()
        $("#typing").append('<p id="typed"></p>')
        typeing()
    }
}

media.addEventListener("change", isCurrectMedia)
