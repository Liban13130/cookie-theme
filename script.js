const button     = document.querySelector("#mode")
const textButton = document.querySelector('span')
const body       = document.querySelector('body')

function modeSombre()
{
    body.classList.add("dark")
    textButton.textContent = "Thème clair"
    localStorage.setItem("theme", "sombre");
}

button.addEventListener('click' ,() => {
    if(body.classList.contains("dark"))
    {
        body.classList.remove("dark");
        textButton.textContent = "Thème sombre"
        localStorage.setItem("theme", "clair");
        console.log("coucou");
    }
    else
    {
        modeSombre()
        console.log("Je l'ai pas");
    }
})

if(localStorage.getItem("theme"))
{
    if(localStorage.getItem("theme") == "sombre")
    {
        modeSombre()
    }
}