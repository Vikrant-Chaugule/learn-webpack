import SoloLeveling from "./solo-leveling.jpg";

export function addImage() {
    const img = document.createElement("img");
    img.src = SoloLeveling;
    img.alt = "Solo Leveling Cover";
    img.width = 300;
    img.height = 450;
    
    document.body.appendChild(img);
}