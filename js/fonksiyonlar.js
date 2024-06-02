import { modlar } from "./veri.js";

const kokEtiket = document.querySelector("#kok-etiket");

function UIGoster() {
  modlar.forEach((deger, index) => {
    const yeniDiv = document.createElement("div");
    yeniDiv.textContent = deger.tr;

    const yeniImg = document.createElement("img");
    yeniImg.src = "../img/" + deger.mod + ".jpg";

    const yeniAudio = document.createElement("audio");
    yeniAudio.src = "../audio/" + deger.mod + "-sound.mp3";
    yeniAudio.loop = true;

    yeniDiv.append(yeniImg);
    yeniDiv.append(yeniAudio);
    kokEtiket.append(yeniDiv);

    yeniDiv.addEventListener("click", () => {
      if (yeniAudio.paused) {
        yeniDiv.classList.add("aktif");
        yeniAudio.play();
      } else {
        yeniAudio.pause();
        yeniDiv.classList.remove("aktif");
      }
    });
  });
}

export { UIGoster };
