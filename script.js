document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabs li');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(item => item.classList.remove('active'));
            tab.classList.add('active');

            const tabContent = document.querySelector(`#${tab.dataset.tab}`);
            contents.forEach(content => content.classList.remove('active'));
            tabContent.classList.add('active');
        });
    });
});
