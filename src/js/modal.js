class Modal {

    constructor(element) {
        this.element = element;
        this.name = element.dataset.modalName;
        this.triggers = document.querySelectorAll('[data-modal=' + this.name + ']');

        for (const trigger of this.triggers) {
            trigger.onclick = () => this.open();
        }

        if (!element.querySelector('.modal-close-button')) {
            const closeButton = document.createElement('button');
            closeButton.className = 'modal-close-button modal-close-trigger';
            closeButton.type = 'button';
            closeButton.innerHTML = 'close';
            element.insertBefore(closeButton, element.children[0]);
        }

        if (element.hasAttribute('data-width')) {
            element.style.maxWidth = element.dataset.width + 'px';
        }

        Modal.init();
    }

    static init() {
        if (!document.querySelector('.modal-mask')) {
            const mask = document.createElement('div');
            mask.className = 'modal-mask modal-close-trigger';
            document.body.appendChild(mask);
        }

        const closeTriggers = document.querySelectorAll('.modal-close-trigger');

        for (const closeTrigger of closeTriggers) {
            closeTrigger.onclick = Modal.close;
        }
    }

    static createAll() {
        const modals = document.querySelectorAll('[data-modal-name]');
        const modalsArray = [];
        for (const modal of modals) {
            modalsArray.push(new Modal(modal));
        }
        return modalsArray;
    }

    static open(element) {
        element.classList.add('modal-open');
        document.body.classList.add('has-modal-open');
        window.addEventListener('keydown', Modal.keyListener);
    }

    static close() {
        const openModal = document.querySelector('.modal-open');
        if (openModal) {
            openModal.dispatchEvent(OnModalClose);
            openModal.classList.remove('modal-open');
            document.body.classList.remove('has-modal-open');
        }
        window.removeEventListener('keydown', Modal.keyListener);
    }

    static keyListener(e) {
        switch (e.keyCode) {
            case 27: // escape
                Modal.close();
                break;
        }
    }

    open() {
        this.element.dispatchEvent(OnModalOpen);
        Modal.close();
        Modal.open(this.element);
    }

    close() {
        this.element.dispatchEvent(OnModalClose);
        this.element.classList.remove('modal-open');
    }
};

const OnModalOpen = document.createEvent('Event');
OnModalOpen.initEvent('modal-open', true, true);
const OnModalClose = document.createEvent('Event');
OnModalClose.initEvent('modal-close', true, true);

let Modals = Modal.createAll();