const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
let numberOfClicks = 0;
let yesButtonFontSize = 12;
let yesButtonSize = 48;

function noClick() {
  let noButtonMessage;
  switch (numberOfClicks) {
    case 0:
      noButtonMessage = "Are you sure?";
      yesButtonFontSize += 12;
      yesButton.style.fontSize = `${yesButtonFontSize}px`;
      numberOfClicks++;
      break;
    case 1:
      noButtonMessage = "Really sure?";
      yesButtonFontSize += 12;
      yesButton.style.fontSize = `${yesButtonFontSize}px`;
      numberOfClicks++;
      break;
    case 2:
      noButtonMessage = "Think again!";
      yesButtonFontSize += 12;
      yesButton.style.fontSize = `${yesButtonFontSize}px`;
      numberOfClicks++;
      break;
    case 3:
      noButtonMessage = "Last chance!";
      yesButtonFontSize += 12;
      yesButton.style.fontSize = `${yesButtonFontSize}px`;
      numberOfClicks++;
      break;
    case 4:
      noButtonMessage = "Surely not?";
      yesButtonFontSize += 12;
      yesButton.style.fontSize = `${yesButtonFontSize}px`;
      numberOfClicks++;
      break;
    case 5:
      noButtonMessage = "You might regret this!";
      yesButtonFontSize += 12;
      yesButton.style.fontSize = `${yesButtonFontSize}px`;
      numberOfClicks++;
      break;
    case 6:
      noButtonMessage = "Give it another thought!";
      yesButtonFontSize += 12;
      yesButton.style.fontSize = `${yesButtonFontSize}px`;
      numberOfClicks++;
      break;
    case 7:
      noButtonMessage = "Are you absolutely certain?";
      yesButtonFontSize += 12;
      yesButton.style.fontSize = `${yesButtonFontSize}px`;
      numberOfClicks++;
      break;
    case 8:
      noButtonMessage = "This could be a mistake!";
      yesButtonFontSize += 12;
      yesButton.style.fontSize = `${yesButtonFontSize}px`;
      numberOfClicks++;
      break;
    case 9:
      noButtonMessage = "Have a heart!";
      yesButtonFontSize += 12;
      yesButton.style.fontSize = `${yesButtonFontSize}px`;
      numberOfClicks++;
      break;
    case 10:
      noButtonMessage = "Don't be so cold!";
      yesButtonFontSize += 12;
      yesButton.style.fontSize = `${yesButtonFontSize}px`;
      numberOfClicks++;
      break;
    case 11:
      noButtonMessage = "Change of heart?";
      yesButtonFontSize += 12;
      yesButton.style.fontSize = `${yesButtonFontSize}px`;
      numberOfClicks++;
      break;
    case 12:
      noButtonMessage = "Wouldn't you reconsider?";
      yesButtonSize += 24;
      yesButton.style.fontSize = `${yesButtonFontSize}px`;
      yesButtonFontSize += 12;
      numberOfClicks++;
      break;
    case 13:
      noButtonMessage = "Is that your final answer?";
      yesButtonFontSize += 12;
      yesButton.style.fontSize = `${yesButtonFontSize}px`;
      numberOfClicks++;
      break;
    case 14:
      noButtonMessage = "You're breaking my heart :(";
      yesButtonFontSize += 12;
      yesButton.style.fontSize = `${yesButtonFontSize}px`;
      numberOfClicks++;
      break;
    default:
      noButton.style.visibility = "hidden";
      yesButton.style.width = "362px";
      yesButton.style.height = "385px";
      yesButton.style.fontSize = "24px";
      yesButton.style.color = "red";
      yesButton.textContent =
        "Are you sure about that?              Say yes or else!";
      yesButton.style.backgroundImage = "url(../images/wingman.webp)";
      yesButton.style.backgroundSize = "cover";
      yesButton.style.backgroundRepeat = "no-repeat";
      yesButton.style.backgroundPosition = "center";
      break;
  }
  noButton.textContent = noButtonMessage;
  yesButton.style.textAlign = `center`;
}

function yesClick() {
  window.location.href = "../pages/yes-page.html";
  window.location.replace("../pages/yes-page.html");
}
