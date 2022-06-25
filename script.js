mainModal = document.querySelector(".main__modal");
openModalButton = document.getElementById("openModal");
sendMessageButton = document.getElementById("sendMessage");
mainModal.addEventListener("click", function (event) {
    if(event.target === event.currentTarget){
        togglemainModal();
    }
});
openModalButton.addEventListener("click", togglemainModal);
sendMessageButton.addEventListener("click", function (event) {
    event.preventDefault();
    let inputs = document.querySelectorAll(".main__input");
    for(let i of inputs){
        if(i.value.length < 2) return;
    }

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    console.log(`Username: ${name.value}\nEmail: ${email.value}\nMessage: ${message.value}`)
    togglemainModal();
})
function togglemainModal() {
    mainModal.classList.toggle("open-modal");
    document.body.classList.toggle("body-overflow");
}

portfolioModal = document.querySelector(".portfolio__modal")
images = document.querySelectorAll(".portfolio__list");
modalImage = document.querySelector(".portfolio__modal-image");
closeModalButton = document.getElementById("closeModal")
for(let i of images){
    i.addEventListener("click", togglePortfolioModal);
}
closeModalButton.addEventListener("click", togglePortfolioModal);
portfolioModal.addEventListener("click", function (event) {
    if(event.target === event.currentTarget) togglePortfolioModal();
})
function togglePortfolioModal(event) {
    portfolioModal.classList.toggle("open-modal");
    document.body.classList.toggle("body-overflow");
    if(event.target !== closeModalButton && event.target !== document.querySelector(".portfolio__list")){
        modalImage.childNodes[0].setAttribute("src", event.target.childNodes[0].getAttribute("src"));
    }
}
