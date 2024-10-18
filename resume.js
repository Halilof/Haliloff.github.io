document.addEventListener('DOMContentLoaded', function () {
    let lastScrollY = window.scrollY;
    let isScrollingToSection = false; // Флаг для отслеживания перехода по якорю

    // Скрытие и отображение меню при ручной прокрутке
    window.addEventListener('scroll', function () {
        if (!isScrollingToSection) { // Проверяем, не идет ли прокрутка через якорь
            const header = document.getElementById('header');
            if (window.scrollY > lastScrollY) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
        }
        lastScrollY = window.scrollY;
    });

    // Коррекция прокрутки для якорей
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Отключаем стандартное поведение якоря
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetPosition = targetSection.offsetTop - 80; // Коррекция на 50px выше

                isScrollingToSection = true; // Включаем флаг, чтобы не скрывать меню
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // После завершения прокрутки отключаем флаг через небольшую задержку
                setTimeout(() => {
                    isScrollingToSection = false;
                }, 1000); // Устанавливаем задержку, которая примерно равна времени прокрутки
            }
        });
    });
});
function openLink(link) {
    if (link === 'vkme') {
        window.open('https://vk.com/catgold', '_blank');
    } else if (link === 'tgme') {
        window.open('https://t.me/ivetscat', '_blank');
    }
}
