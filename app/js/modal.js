'use strict';

class Modal {

    constructor(options) {
        this.modal = 0;
        this.ANIMATION_SPEED = 350;
        this.closing = false;
    }

    createModal() {
        this.modal = document.createElement('div');
        this.modal.classList.add('modal');
        this.modal.dataset.close = 'true';
        this.modal.insertAdjacentHTML('afterBegin', `<div class="modal-window">
                  <span class="modal_close" id="modal-close" data-close="true">&times;</span>
                  <div class="modal_body">
                    <p class="modal_caption">Чтобы заказать звонок, впишите Ваше имя и телефон:</p>
                    <form action="#" class="modal_form">
                      <div class="modal_input-wrap">
                        <input type="text" id="modal-name" name="name" class="modal_name modal_input" placeholder="Ваше имя:">
                        <label for="modal-name" class="modal_input-label">Ваше имя:</label>
                      </div>
                      <div class="modal_input-wrap">
                        <input type="text" name="phone" id="modal-phone" class="modal_phone modal_input" placeholder="Телефон:*">
                        <label for="modal-phone" class="modal_input-label">Телефон:*</label>
                      </div>
                      <div class="modal_submit-wrap">
                        <a href="#" class="callback-buttons_button button modal_btn">Заказать звонок</a>
                        <div class="modal_checkbox-wrap">
                          <label for="modal-checkbox" class="modal_checkbox-label">
                            <p>Даю согласие на обработку моих персональных данных и согласен(а) с политикой Конфиденциальности*.</p>
                            <input type="checkbox" name="modal-checkbox" id="modal-checkbox" class="modal_checkbox" >
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>`);
        document.body.appendChild(this.modal);
        return this.modal;
    }

    listeners() {
        const self = this;
        this.modal.addEventListener('click', (e) => {
            if( e.target.dataset.close ) {
                self.close();
            }
        });
    }

    open() {
        this.createModal();

        setTimeout( () => {
            if( !this.closing ) {
                this.modal.classList.add('open');
            }
        },10);

        this.listeners();
    }

    close() {
        this.closing = true;
        this.modal.classList.remove('open');
        this.modal.classList.add('modal-hide');
        setTimeout( () => {
            this.modal.classList.remove('modal-hide');
            this.destroy();
            this.closing = false;
        }, this.ANIMATION_SPEED);
    }

    destroy() {
        this.modal.parentNode.removeChild(this.modal);
        const self = this;
        this.modal.removeEventListener('click', (e) => {
            if( e.target.dataset.close ) {
                self.close();
            }
        });
    }

    init() {
        this.open();
    }
}

export { Modal };