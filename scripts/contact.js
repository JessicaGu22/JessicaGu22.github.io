document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const contactForm = document.getElementById("contactForm");
    const toast = document.getElementById("toast");
    const colorPicker = document.getElementById("colorPicker");
    const chatIcon = document.getElementById("chat-icon");
    const chatbox = document.getElementById("chatbox");
    const chatToggle = document.getElementById("chat-toggle");
    const chatLog = document.getElementById("chat-log");
    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");
    const fileUpload = document.getElementById("file-upload");

    // Load saved theme color or default
    const savedColor = localStorage.getItem("themeColor") || "#4D96FF";
    document.documentElement.style.setProperty("--theme-color", savedColor);
    colorPicker.value = savedColor;

    // Theme color picker listener
    colorPicker.addEventListener("input", (e) => {
        const color = e.target.value;
        document.documentElement.style.setProperty("--theme-color", color);
        localStorage.setItem("themeColor", color);
    });

    // Show toast and confetti on form submit
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Show toast
        toast.style.display = "block";

        // Hide toast after 3 seconds
        setTimeout(() => {
            toast.style.display = "none";
        }, 3000);

        // Trigger confetti if library loaded
        if (window.confetti) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }

        // Optionally reset form
        contactForm.reset();
    });

    // Chatbox open/close toggles
    chatIcon.addEventListener("click", () => {
        chatbox.style.display = "flex";
        chatIcon.style.display = "none";
        chatInput.focus();
    });

    chatToggle.addEventListener("click", () => {
        chatbox.style.display = "none";
        chatIcon.style.display = "flex";
    });

    // Typed message animation for bot replies
    function typeMessage(target, message, callback) {
        let i = 0;
        target.textContent = "";
        const interval = setInterval(() => {
            target.textContent += message.charAt(i);
            i++;
            if (i >= message.length) {
                clearInterval(interval);
                if (callback) callback();
            }
        }, 30);
    }

    // Speech synthesis helper
    function speak(text) {
        if (!("speechSynthesis" in window)) return;
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    }

    // Add message to chat log
    function addMessage(sender, text, className) {
        const msg = document.createElement("div");
        msg.className = className;
        msg.textContent = text;
        chatLog.appendChild(msg);
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    // Add bot reply with typing and speech
    function addBotReply(reply) {
        const botMsg = document.createElement("div");
        botMsg.className = "bot-msg";
        chatLog.appendChild(botMsg);

        typeMessage(botMsg, reply, () => {
            speak(reply);
        });

        chatLog.scrollTop = chatLog.scrollHeight;
    }

    // Simple name recognition: "我叫XXX" or "我的名字是XXX"
    let userName = localStorage.getItem("userName") || "";

    if (userName) {
        addMessage("Bot", `Welcome back, ${userName}! 🎉`, "bot-msg");
        speak(`Welcome back, ${userName}!`);
    }

    function checkForName(input) {
        const nameRegex = /(?:我的名字是|我叫)\s*([^\s!,.?]+)/i;
        const match = input.match(nameRegex);
        if (match && match[1]) {
            userName = match[1];
            localStorage.setItem("userName", userName);
            return true;
        }
        return false;
    }

    // Respond logic (very simple)
    function respondTo(input) {
        const lower = input.toLowerCase();
        let reply = "I'm just a cheerful bot! 😊";

        if (lower.includes("hello") || lower.includes("hi")) {
            reply = "Hi there! I'm JessiBot. What can I help with?";
        } else if (lower.includes("joke")) {
            reply = "Why do programmers hate nature? It has too many bugs!";
        } else if (lower.includes("weather")) {
            reply = "I can't feel weather... but you look radiant today! ☀️";
        } else if (lower.includes("name")) {
            reply = userName
                ? `Your name is ${userName}. Nice to chat with you!`
                : "I don't know your name yet. You can tell me by saying '我叫 [your name]'.";
        }

        setTimeout(() => addBotReply(reply), 500);
    }

    // Send button click
    sendBtn.addEventListener("click", () => {
        const userText = chatInput.value.trim();
        if (!userText) return;

        addMessage("You", userText, "user-msg");

        if (checkForName(userText)) {
            addBotReply(`Got it! I'll remember your name is ${userName}. Welcome!`);
        } else {
            respondTo(userText);
        }

        chatInput.value = "";
        chatInput.focus();
    });

    // Press Enter key in input sends message
    chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendBtn.click();
        }
    });

    // File upload handling
    fileUpload.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;

        addMessage("You", `Uploaded file: ${file.name}`, "user-msg");
        addBotReply(`You uploaded a ${file.type || "file"} named ${file.name}`);

        fileUpload.value = ""; // Reset to allow re-uploading same file
    });
});
