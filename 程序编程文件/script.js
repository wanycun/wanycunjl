document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-container');
    const images = carousel.querySelectorAll('img');
    const description = document.querySelector('.image-description');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    function showImage(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        description.textContent = images[index].alt;
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    setInterval(showNextImage, 5000); // 每5秒自动切换一次图片
});

// 聊天窗口功能
document.addEventListener('DOMContentLoaded', function() {
    const chatWidget = document.getElementById('chat-widget');
    const openChatButton = document.getElementById('open-chat');
    const closeChatButton = document.getElementById('close-chat');
    const sendMessageButton = document.getElementById('send-message');
    const userInput = document.getElementById('user-input');
    const chatMessages = document.getElementById('chat-messages');

    openChatButton.addEventListener('click', () => {
        chatWidget.classList.add('open');
        openChatButton.style.display = 'none'; // 隐藏打开按钮
    });

    closeChatButton.addEventListener('click', () => {
        chatWidget.classList.remove('open');
        openChatButton.style.display = 'block'; // 显示打开按钮
    });

    sendMessageButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage('user', message);
            userInput.value = '';
            // 这里应该调用AI服务来获取回复
            setTimeout(() => {
                addMessage('ai', '这是一个模拟的AI回复。实际应用中,这里应该是通过API调用AI服务获得的回复。');
            }, 1000);
        }
    }

    function addMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'ai-message');
        messageElement.textContent = text;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
