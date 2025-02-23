(function () {
    const link = document.querySelectorAll("nav > .hover-this");
    const cursor = document.querySelector(".cursor");

    const animateIt = function (e) {
        const span = this.querySelector('span');
        const { offsetX: x, offsetY: y } = e;
        const { offsetWidth: width, offsetHeight: height } = this;

        const move = 25;
        const xMove = x / width * (move * 2) - move;
        const yMove = y / height * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') {
            span.style.transform = '';
        }
    };

    const editCursor = (e) => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    };

    link.forEach(el => el.addEventListener('mousemove', animateIt));
    link.forEach(el => el.addEventListener('mouseleave', animateIt));

    window.addEventListener('mousemove', editCursor);
})();
















