function CustomStatusChanging() {
    const menu = document.getElementById('CustomStatus');
    const hamburger = document.getElementById('StatusText');
    const toggleMenu = () => {
        menu.classList.toggle('active');
    };
    toggleMenu();
    document.addEventListener('click', e => {
        const target = e.target
        const its_menu = target == menu || menu.contains(target);
        const its_hamburger = target == hamburger;
        const menu_is_active = menu.classList.contains('active');
        if (!its_menu && !its_hamburger && menu_is_active) {
            toggleMenu();
        };
    });
};
function ChangeActivStatus() {
    document.getElementById('StatusIcon').classList.toggle('offline');
    const Stat = document.getElementById('StatusText');
    if (Stat.textContent == 'online') {   
        Stat.textContent = 'offline';
    }
    else if(Stat.textContent == 'offline') {
        Stat.textContent = 'online';
    };
}