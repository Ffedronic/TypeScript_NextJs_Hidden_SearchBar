import {MouseEvent} from "react"

export function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const { search, input} = getSearchElements()
    activateSearchElements(search)
    input.focus()
  }
  function getSearchElements(){
    const search = document.querySelector(".search") as HTMLDivElement;
    const input = document.getElementsByTagName("input")[0] as HTMLInputElement;
    return { search, input}
  }
  function activateSearchElements(search:HTMLDivElement){
    search.classList.toggle("active")
  }