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
        const classNames = document.querySelector(".sidebar").classList

        classNames.toggle("sidebarChangeWidth")
        if (!classNames.contains("sidebarChangeWidth")) {
            if (window.innerWidth <= 720) {
                $("main").css("display", "none")
            } else {
                $("main").css("width", "")
            }
        } else {
            $("main").css({ display: "", width: "100%" })
        }
    }
)


const media = matchMedia("(max-width: 760px)")
const isCurrectMedia = () => {
    if (media.matches) {
        $(".sidebar").addClass("sidebarChangeWidth")
    } else {
        $(".sidebar").removeClass("sidebarChangeWidth")
        $("main").css({ display: "", width: "100%" })
    }
}

media.addEventListener("change", isCurrectMedia)

$(".sideBarLink").on(
    "click",
    () => {
        $("#usersSite").slideToggle()
    }
)
