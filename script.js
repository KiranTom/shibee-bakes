const modal = document.getElementById("cake-modal");
const closeBtn = document.querySelector(".close-button");

const cakes = document.querySelectorAll(".cake-card");

cakes.forEach((cake) => {
  cake.addEventListener("click", () => {
    const title = cake.querySelector("h2").textContent;
    const imageSrc = cake.querySelector("img").src;
    const description = cake.querySelector("p").textContent + " More details about the cake here...";

    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-image").src = imageSrc;
    document.getElementById("modal-description").textContent = description;

    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

