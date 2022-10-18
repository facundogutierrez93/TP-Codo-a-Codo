const ACC_BTNS = document.querySelectorAll('.accordion-header');
const ACC_CONTENTS = document.querySelectorAll('.accordion-body');
const LAST_ACC = document.querySelector('.last-accordion-header')

ACC_BTNS.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        ACC_CONTENTS.forEach(acc => {
            if (e.target.nextElementSibling !== acc && acc.classList.contains('active')) {
                acc.classList.remove('active');
                ACC_BTNS.forEach((btn) => btn.classList.remove('active'))
            }
        });
        const PANEL = btn.nextElementSibling;
        PANEL.classList.toggle('active');
        btn.classList.toggle('active');
        if (btn == LAST_ACC) {
            btn.classList.toggle('last-accordion-header')
        }
        if (LAST_ACC.classList.contains('active') == false) {
            LAST_ACC.classList.add('last-accordion-header')
        };
    });

});

window.onclick = (e) => {
    if (!e.target.matches('.accordion-header')) {
        ACC_BTNS.forEach((btn) => btn.classList.remove('active'))
        ACC_CONTENTS.forEach((acc) => acc.classList.remove('active'))
        LAST_ACC.classList.add('last-accordion-header')
    }
};