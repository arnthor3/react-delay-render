'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DelayChild = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DelayChild = exports.DelayChild = function (_Component) {
  _inherits(DelayChild, _Component);

  function DelayChild() {
    _classCallCheck(this, DelayChild);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DelayChild).call(this));

    _this.state = { ready: false };
    return _this;
  }

  _createClass(DelayChild, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      if (this.props.delay) {
        this.timeout = setTimeout(function () {
          _this2.setState({ ready: true });
        }, this.props.delay);
      } else {
        this.setState({ ready: true });
      }
    }
    // if a component did not have a delay prop then it will not trigger
    // componentDidUpdate

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.delay && this.props.onDone) {
        this.props.onDone();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.onDone) {
        this.props.onDone();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.ready) {
        if (this.props.delay) {
          // fix: Remove unknown prop from the element
          var props = Object.assign({}, this.props);
          delete props.delay;
          delete props.onDone;
          return _react2.default.createElement(this.props.children.type, props, this.props.children.props.children);
        }
        return this.props.children;
      }
      return null;
    }
  }]);

  return DelayChild;
}(_react.Component);

DelayChild.propTypes = {
  delay: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  children: _react2.default.PropTypes.node,
  onDone: _react2.default.PropTypes.func
};

exports.default = DelayChild;