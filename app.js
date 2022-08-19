// Python Cards tabs

//selecting all tbas with data-attributte (specified insode tag in html)
const tabs = Array.from(document.querySelectorAll("[data-tabs]"))
console.log(tabs)

//selecting all single projects content
const contents = Array.from(document.querySelectorAll("[data-content]"))
console.log(contents)

//looping through eacg rtab and listentning for click event
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    //with everyclick first default all the class settings (remove all selcted classes)
    contents.forEach((content) => {
      content.classList.remove("selected")
    })
    tabs.forEach((tab) => {
      tab.classList.remove("selected")
    })

    //adding the active class for current project and tab
    contents[index].classList.add("selected")
    tabs[index].classList.add("selected")
  })
})
