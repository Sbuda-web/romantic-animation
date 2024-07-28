document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const flower = document.getElementById('flower');
    const content = document.getElementById('content');
    const poemContainer = document.getElementById('poemContainer');
    const showMessageButton = document.getElementById('showMessageButton');
    const credits = document.getElementById('credits');
    const triggerButton = document.getElementById('triggerButton');

    triggerButton.addEventListener('click', () => {
        envelope.style.display = 'none';
        triggerButton.style.display = 'none';
        content.style.opacity = '1';
        showMessageButton.style.display = 'block';
    });

    showMessageButton.addEventListener('click', () => {
        flower.style.opacity = '1';
        poemContainer.style.opacity = '1';
        showMessageButton.style.display = 'none';
        credits.style.opacity = '1';
    });
});
