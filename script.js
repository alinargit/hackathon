const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});
async function queryAI(userInput) {
    const response = await fetch('/api/ai', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: userInput }),
    });

    const data = await response.json();
    console.log('AI response:', data.result);
}
//ChatBot

function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  const chatBox = document.getElementById('chat-box');

  if (userInput.trim() === "") return; // Don't send empty messages

  // Display user message
  const userMessageDiv = document.createElement('div');
  userMessageDiv.classList.add('message', 'user-message');
  const userMessageText = document.createElement('p');
  userMessageText.textContent = userInput;
  userMessageDiv.appendChild(userMessageText);
  chatBox.appendChild(userMessageDiv);

  // Scroll to the bottom of the chat box
  chatBox.scrollTop = chatBox.scrollHeight;

  // Clear the input field
  document.getElementById('user-input').value = "";

  // Bot response (simple predefined response)
  setTimeout(function() {
      const botMessageDiv = document.createElement('div');
      botMessageDiv.classList.add('message', 'bot-message');
      const botMessageText = document.createElement('p');
      botMessageText.textContent = "I'm here to help!";
      botMessageDiv.appendChild(botMessageText);
      chatBox.appendChild(botMessageDiv);

      // Scroll to the bottom of the chat box
      chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000); // Bot response delay (1 second)
}

function initMap() {
  // Coordinates for the map's center (Eiffel Tower, Paris)
  const location = { lat: 48.8588443, lng: 2.2943506 };

  // Create the map
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,                    // Adjust zoom for 3D view
      center: location,            // Set center location
      mapTypeId: "satellite",      // Use satellite map type
      tilt: 45                     // Enable 3D tilt
  });

  // Add a marker
  const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "Eiffel Tower"
  });
}