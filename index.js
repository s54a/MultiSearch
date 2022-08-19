const modal = document.querySelector("#modal");
const openModal = document.querySelector("#tips");
const closeModal = document.querySelector(".close-button");
openModal.addEventListener("click", () => {
modal.showModal();
document.body.classList.add("overflow");
});

closeModal.addEventListener("click", () => {
  modal.close();
document.body.classList.remove("overflow");
});

const body1 = document.querySelector("body");
body1.addEventListener("keyup", e =>{
  if(e.key === "/"){
    document.getElementById("TextField").focus();
  }
});
body1.addEventListener("keyup", e =>{
  if(e.key.toLowerCase() === "t" && e.shiftKey){
    modal.showModal()
    document.body.classList.add("overflow");
  };
});