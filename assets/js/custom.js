const typedElement = document.querySelector(".typed");
const typedItems = typedElement.getAttribute("data-typed-items").split(",");
let itemIndex = 0;
let charIndex = 0;
let isTyping = true;

function typeText() {
  if (itemIndex < typedItems.length) {
    const currentText = typedItems[itemIndex].trim();
    if (charIndex < currentText.length) {
      typedElement.textContent += currentText.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 100);
    } else {
      isTyping = false;
      setTimeout(eraseText, 500);
    }
  }
}

function eraseText() {
  if (!isTyping && typedElement.textContent.length > 0) {
    typedElement.textContent = typedElement.textContent.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    isTyping = true;
    itemIndex = (itemIndex + 1) % typedItems.length;
    charIndex = 0;
    setTimeout(typeText, 100);
  }
}

// Start typing animation
typeText();
