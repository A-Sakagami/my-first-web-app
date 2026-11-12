// ハンバーガーメニューの動作を追加
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.header-nav-links');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// メニュー外をクリックした時にメニューを閉じる
document.addEventListener('click', (e) => {
    if (!hamburgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
        hamburgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
    }
});      