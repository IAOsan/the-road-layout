const tours = {
   container: document.querySelector('.popular-tours__grid'),
   click: function () {
      this.container.addEventListener('click', e => {
         if (
            e.target.classList.contains('tour-card__btn--price') ||
            e.target.classList.contains('tour-card__btn--back')
         ) {
            const card = e.target.parentNode.parentNode;
            card.classList.toggle('tour-card--change');
         }
      });
   },
};

const navigation = {
   button: document.querySelector('.navigation__iconBox'),
   container: document.querySelector('.navigation'),
   toggle: function () {
      this.button.addEventListener('click', () => {
         this.container.classList.toggle('navigation--change');
      });
   },
};

navigation.toggle();
tours.click();
