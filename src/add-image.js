import SoloLeveling from "./solo-leveling.jpg";
import SoloLevelingAltText from "./solo-leveling-alt.txt";


export function addImage() {
    const img = document.createElement("img");
    img.src = SoloLeveling;
    img.alt = SoloLevelingAltText;
    img.width = 300;
    img.height = 450;
    
    document.body.appendChild(img);
}