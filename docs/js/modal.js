'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = function () {
    function Modal(element) {
        var _this = this;

        _classCallCheck(this, Modal);

        this.element = element;
        this.name = element.dataset.modalName;
        this.triggers = document.querySelectorAll('[data-modal=' + this.name + ']');

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = this.triggers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var trigger = _step.value;

                trigger.onclick = function () {
                    return _this.open();
                };
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        if (!element.querySelector('.modal-close-button')) {
            var closeButton = document.createElement('button');
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

    _createClass(Modal, [{
        key: 'open',
        value: function open() {
            this.element.dispatchEvent(OnModalOpen);
            Modal.close();
            Modal.open(this.element);
        }
    }, {
        key: 'close',
        value: function close() {
            this.element.dispatchEvent(OnModalClose);
            this.element.classList.remove('modal-open');
        }
    }], [{
        key: 'init',
        value: function init() {
            if (!document.querySelector('.modal-mask')) {
                var mask = document.createElement('div');
                mask.className = 'modal-mask modal-close-trigger';
                document.body.appendChild(mask);
            }

            var closeTriggers = document.querySelectorAll('.modal-close-trigger');

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = closeTriggers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var closeTrigger = _step2.value;

                    closeTrigger.onclick = Modal.close;
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    }, {
        key: 'createAll',
        value: function createAll() {
            var modals = document.querySelectorAll('[data-modal-name]');
            var modalsArray = [];
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = modals[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var modal = _step3.value;

                    modalsArray.push(new Modal(modal));
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return modalsArray;
        }
    }, {
        key: 'open',
        value: function open(element) {
            element.classList.add('modal-open');
            document.body.classList.add('has-modal-open');
            window.addEventListener('keydown', Modal.keyListener);
        }
    }, {
        key: 'close',
        value: function close() {
            var openModal = document.querySelector('.modal-open');
            if (openModal) {
                openModal.dispatchEvent(OnModalClose);
                openModal.classList.remove('modal-open');
                document.body.classList.remove('has-modal-open');
            }
            window.removeEventListener('keydown', Modal.keyListener);
        }
    }, {
        key: 'keyListener',
        value: function keyListener(e) {
            switch (e.keyCode) {
                case 27:
                    // escape
                    Modal.close();
                    break;
            }
        }
    }]);

    return Modal;
}();

;

var OnModalOpen = document.createEvent('Event');
OnModalOpen.initEvent('modal-open', true, true);
var OnModalClose = document.createEvent('Event');
OnModalClose.initEvent('modal-close', true, true);

var Modals = Modal.createAll();