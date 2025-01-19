console.log('mission.js loaded');
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('theme');
    const root = document.documentElement;

    if (!themeSwitcher) {
        console.error('Theme switcher dropdown not found.');
        return;
    }

    themeSwitcher.addEventListener('change', (event) => {
        const theme = event.target.value;
        console.log('Theme changed to:', theme); 
        if (theme === 'dark') {
            console.log('Switching to dark mode...');
            root.style.setProperty('--bg-color', '#121212');
            root.style.setProperty('--text-color', '#ffffff'); 
        } else {
            console.log('Switching to light mode...');
            root.style.setProperty('--bg-color', '#ffffff'); 
            root.style.setProperty('--text-color', '#000000'); 
        }
    });
});

