// COUNTER APPLICATION 
document.title = "Interactive Counter"
const clickSound = new Audio('sounds/Click.mp3');
const resetSound = new Audio('sounds/Whoosh 2.mp3');

function setstyle(elem,style){
    Object.assign(elem.style, style)
}
let body = document.body
setstyle(body, {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #f0f7f9ff 0%, #e8f9f6ff 100%)",
    transition: "background 0.5s ease-in-out"
})

let container = document.createElement("div")
setstyle(container, {
    width: "auto",
    padding: "30px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
    background: "#FFFFFF",
    border: "none",
    borderRadius: "20px",
    margin: "30px",
    transition: "all 300ms ease-in-out"
})
body.append(container)

let themediv = document.createElement("div")
setstyle(themediv,{
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    border: "none",
    marginBottom: "15px"
})
container.append(themediv)

let themebtn = document.createElement("button")
themebtn.innerHTML = "🌙",
setstyle(themebtn,{
    width: "auto",
    border: "none",
    background: "#2D89EF",
    borderRadius: "10px",
    padding: "10px",
    transition: "all 300ms ease-in-out",
})
themediv.append(themebtn)
themebtn.addEventListener("mouseover", () => {
    themebtn.style.opacity = "0.8",
    themebtn.style.transform = "scale(0.95)"
})
themebtn.addEventListener("mouseleave", () => {
    themebtn.style.opacity = "1",
    themebtn.style.transform = "none"
})

let heading = document.createElement("h1")
heading.innerHTML = "🧮 Counter Application",
setstyle(heading, {
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: "30px",
    fontWeight: "700",
    textAlign: "center",
    transition: "all 300ms ease-in-out"
})
container.append(heading)

let display = document.createElement("input")
let number = 0;
display.value = 0,
display.readOnly = true,
setstyle(display, {
    width: "100%",
    marginTop: "15px",
    background: "transparent",
    fontSize: "30px",
    fontFamily: "Arial, Helvetica, sans-serif",
    textAlign: "center",
    border: "solid transparent",
    borderRadius: "20px",
    outline: "none",
    boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.5)",
    background: "transparent",
    backdropFilter: "blur(8px)"
})
container.append(display)
function shadowchange(){
    let zeroshadow;
    if (dark){
        zeroshadow = "inset 0 0 5px rgba(255, 255, 255, 0.5)"
    }else{
        zeroshadow = "inset 0 0 5px rgba(0, 0, 0, 0.5)"
    }

    if(number == 0){
        display.style.boxShadow = zeroshadow
    }else if(number > 0){
        display.style.boxShadow = "inset 0 0 5px rgba(0, 255, 0, 1)"
    }else if(number < 0){
        display.style.boxShadow = "inset 0 0 5px rgba(255, 0, 0, 1)"
    }
}

let buttondiv = document.createElement("div");
setstyle(buttondiv, {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: "30px",
    gap: "15px"
})
container.append(buttondiv)

let decreasebtn = document.createElement("button");
decreasebtn.innerHTML = "Decrease -"
setstyle(decreasebtn, {
    width: "auto",
    height: "auto",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
    textAlign: "center",
    padding: "10px 20px",
    border: "none",
    borderRadius: "30px",
    background: "#2a7aabff",
    color: "white",
    transition: "all 300ms ease-in-out"
})
buttondiv.appendChild(decreasebtn)
decreasebtn.addEventListener("mouseover", () => {
    decreasebtn.style.opacity = "0.8",
    decreasebtn.style.transform = "scale(0.95)"
})
decreasebtn.addEventListener("mouseleave", () => {
    decreasebtn.style.opacity = "1",
    decreasebtn.style.transform = "none"
})

function decreasenumber() {
    number--
    return number
}
decreasebtn.addEventListener("click", () => {
    clickSound.play()
    clickSound.currentTime = 0;
    let decrease = decreasenumber()
    display.value = decrease
    shadowchange()
})

let increasebtn = document.createElement("button");
increasebtn.innerHTML = "Increase +"
setstyle(increasebtn, {
    width: "auto",
    height: "auto",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
    textAlign: "center",
    padding: "10px 20px",
    border: "none",
    borderRadius: "30px",
    background: "#2a7aabff",
    color: "white",
    transition: "all 300ms ease-in-out"
})
buttondiv.appendChild(increasebtn)
increasebtn.addEventListener("mouseover", () => {
    increasebtn.style.opacity = "0.8",
    increasebtn.style.transform = "scale(0.95)"
})
increasebtn.addEventListener("mouseleave", () => {
    increasebtn.style.opacity = "1",
    increasebtn.style.transform = "none"
})

function increasenumber() {
    number++
    return number
}
increasebtn.addEventListener("click", () => {
    clickSound.play()
    clickSound.currentTime = 0;
    let increase = increasenumber()
    display.value = increase
    shadowchange()
})

let resetbtn = document.createElement("button")
resetbtn.innerHTML = "Reset Counter"
setstyle(resetbtn, {
    width: "100%",
    height: "auto",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
    textAlign: "center",
    padding: "10px 20px",
    border: "none",
    borderRadius: "30px",
    background: "#ab2a2cff",
    color: "white",
    transition: "all 300ms ease-in-out",
    marginTop: "15px"
})
container.append(resetbtn)
resetbtn.addEventListener("mouseover", () => {
    resetbtn.style.opacity = "0.8",
    resetbtn.style.transform = "scale(0.95)"
})
resetbtn.addEventListener("mouseleave", () => {
    resetbtn.style.opacity = "1",
    resetbtn.style.transform = "none"
})

function resetnumber() {
    number = 0
    return number
}
resetbtn.addEventListener("click", () => {
    resetSound.play()
    resetSound.currentTime = 0;
    let reset = resetnumber()
    display.value = reset
    shadowchange()
})


let footer = document.createElement("footer")
footer.innerHTML = "Made By Kabeer Hussain ❤️ || Mern Stack Learner"
setstyle(footer,{
    width: "100%",
    textAlign: "center",
    fontSize: "16px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "600",
    color: "#222",
    marginTop: "15px",
    marginBottom: "0",
    transition: "all 300ms ease-in-out"
})
container.append(footer)

let dark = false
themebtn.addEventListener('click', () => {
     dark = !dark
    if(dark){
        themebtn.innerHTML = "☀️"
        themebtn.style.transform = "rotate(180deg)"
        body.style.background = "linear-gradient(135deg, #0f172aff 0%, #1e293bff 100%)"
        container.style.background = "#1B253B"
        container.style.boxShadow = "0 0 15px rgba(254, 254, 254, 0.5)"
        heading.style.color = "white"
        display.style.color = "white"
        display.style.boxShadow = "inset 0 0 5px rgba(255, 255, 255, 0.5)",
        footer.style.color = "white"
    }else{
        themebtn.innerHTML = "🌙"
        themebtn.style.transform = "rotate(0deg)"
        body.style.background = "linear-gradient(135deg, #f0f7f9ff 0%, #e8f9f6ff 100%)"
        container.style.background = "#FFFFFF"
        container.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.5)"
        heading.style.color = "black"
        display.style.color = "black"
        display.style.boxShadow = "inset 0 0 5px rgba(0, 0, 0, 0.5)",
        footer.style.color = "black"
    }
})

function checkScreenSize(){
    if(innerWidth <= 500){
        buttondiv.style.flexDirection = "column"
        increasebtn.style.width = "100%"
        decreasebtn.style.width = "100%"
        increasebtn.addEventListener("touchstart", () => {
        increasebtn.style.opacity = "0.8",
        increasebtn.style.transform = "scale(0.95)"
        })
        increasebtn.addEventListener("touchend", () => {
        increasebtn.style.opacity = "1",
        increasebtn.style.transform = "none"
        })
        decreasebtn.addEventListener("touchstart", () => {
        decreasebtn.style.opacity = "0.8",
        decreasebtn.style.transform = "scale(0.95)"
        })
        decreasebtn.addEventListener("touchend", () => {
        decreasebtn.style.opacity = "1",
        decreasebtn.style.transform = "none"
        })
        resetbtn.addEventListener("touchstart", () => {
        resetbtn.style.opacity = "0.8",
        resetbtn.style.transform = "scale(0.95)"
        })
        resetbtn.addEventListener("touchend", () => {
        resetbtn.style.opacity = "1",
        resetbtn.style.transform = "none"
        })
        themebtn.addEventListener("touchstart", () => {
        themebtn.style.opacity = "0.8",
        themebtn.style.transform = "scale(0.95)"
        })
        themebtn.addEventListener("touchend", () => {
        themebtn.style.opacity = "1",
        themebtn.style.transform = "none"
        })
    }else{
        buttondiv.style.flexDirection = "row"
        increasebtn.style.width = "auto"
        decreasebtn.style.width = "auto"
        increasebtn.addEventListener("mouseover", () => {
        increasebtn.style.opacity = "0.8",
        increasebtn.style.transform = "scale(0.95)"
        })
        increasebtn.addEventListener("mouseleave", () => {
        increasebtn.style.opacity = "1",
        increasebtn.style.transform = "none"
        })
        decreasebtn.addEventListener("mouseover", () => {
        decreasebtn.style.opacity = "0.8",
        decreasebtn.style.transform = "scale(0.95)"
        })
        decreasebtn.addEventListener("mouseleave", () => {
        decreasebtn.style.opacity = "1",
        decreasebtn.style.transform = "none"
        })
        resetbtn.addEventListener("mouseover", () => {
        resetbtn.style.opacity = "0.8",
        resetbtn.style.transform = "scale(0.95)"
        })
        resetbtn.addEventListener("mouseleave", () => {
        resetbtn.style.opacity = "1",
        resetbtn.style.transform = "none"
        })
        themebtn.addEventListener("mouseover", () => {
        themebtn.style.opacity = "0.8",
        themebtn.style.transform = "scale(0.95)"
        })
        themebtn.addEventListener("mouseleave", () => {
        themebtn.style.opacity = "1",
        themebtn.style.transform = "none"
        })
    }
}

checkScreenSize()
window.addEventListener("resize", checkScreenSize)