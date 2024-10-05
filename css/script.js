const menuicon = document.querySelector(".menu");
const links = document.querySelector(".links"); // Use querySelector for a single element

menuicon.addEventListener("click", () => {
  if (links.style.display == "none") links.style.display = "flex"; 
  else
  links.style.display = "none"
});
