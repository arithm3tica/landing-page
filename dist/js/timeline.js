'use strict';

var TimeLine = function () {
    var years = document.querySelectorAll('.timeline .year');
    var monthMargin = 60;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = years[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var year = _step.value;

            var points = year.querySelectorAll('.point');

            var left = true;
            var lastPointMonth = -1;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = points[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var point = _step2.value;

                    var month = parseInt(point.dataset.month);
                    var margin = 0;
                    if (lastPointMonth > -1) {
                        margin = (month - lastPointMonth - 1) * monthMargin;
                        if (!left) {
                            margin += monthMargin;
                        }
                    }
                    lastPointMonth = month;
                    point.classList.add('content-' + (left ? 'left' : 'right'));
                    point.style.marginTop = margin + 'px';
                    left = !left;
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
}();