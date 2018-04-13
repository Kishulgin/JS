function modals () {

    let more = document.querySelector('.more');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.popup-close');
    document.body.addEventListener('click', event => {
     let target = event.target;
     if(target.classList.contains('description-btn')){
                target.classList.add('more-splash');
                overlay.style.display = "block";
                document.body.style.overflow ="hidden";

            }
            });

    more.addEventListener('click', function(){
        this.classList.add('more-splash');
        overlay.style.display = "block";
        document.body.style.overflow ="hidden";
    });

    close.addEventListener('click', () => {
        overlay.style.display = "none";
        document.body.style.overflow ="";
    });

}
    module.exports = modals;
