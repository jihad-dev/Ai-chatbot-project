document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Chat demo functionality
  const chatInput = document.querySelector(".chat-input input");
  const chatMessages = document.querySelector(".chat-messages");
  const sendButton = document.querySelector(".chat-input button");

  function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
      // Add user message
      const userMessage = document.createElement("div");
      userMessage.className = "message user";
      userMessage.textContent = message;
      chatMessages.appendChild(userMessage);

      // Simulate bot response
      setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.className = "message bot";
        botMessage.textContent =
          "Thanks for your message! Our AI is processing your request...";
        chatMessages.appendChild(botMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 1000);

      chatInput.value = "";
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }

  sendButton.addEventListener("click", sendMessage);
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });
});

// faq js
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    item.classList.toggle("open");
  });
});



