import { MouseEvent } from "react";

export function handleClick(event: MouseEvent<HTMLButtonElement>) {
  event.preventDefault();
  
  const { search, input } = getSearchElements();

  console.log(window.getComputedStyle(input).width)
  
  activateSearchElements(search);
  
  input.focus();

}

export function getSearchElements() {
  const search = document.querySelector(".search")! as HTMLDivElement;
  
  const input = document.getElementsByTagName("input")[0]! as HTMLInputElement;
  
  return { search, input };
}

export function activateSearchElements(search: HTMLDivElement) {
  search.classList.toggle("active");
}
