(self["webpackChunkmy_website"] = self["webpackChunkmy_website"] || []).push([[677],{

/***/ 81474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ card)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/SizeContext.js
var SizeContext = __webpack_require__(97647);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Element.js




var Element = function Element(props) {
  var _classNames, _classNames2;
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    size = props.size,
    shape = props.shape;
  var sizeCls = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _classNames));
  var shapeCls = classnames_default()((_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-circle"), shape === 'circle'), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-square"), shape === 'square'), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-round"), shape === 'round'), _classNames2));
  var sizeStyle = react.useMemo(function () {
    return typeof size === 'number' ? {
      width: size,
      height: size,
      lineHeight: "".concat(size, "px")
    } : {};
  }, [size]);
  return /*#__PURE__*/react.createElement("span", {
    className: classnames_default()(prefixCls, sizeCls, shapeCls, className),
    style: (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, sizeStyle), style)
  });
};
/* harmony default export */ const skeleton_Element = (Element);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Avatar.js







var SkeletonAvatar = function SkeletonAvatar(props) {
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    active = props.active,
    _props$shape = props.shape,
    shape = _props$shape === void 0 ? 'circle' : _props$shape,
    _props$size = props.size,
    size = _props$size === void 0 ? 'default' : _props$size;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  var otherProps = (0,omit/* default */.Z)(props, ['prefixCls', 'className']);
  var cls = classnames_default()(prefixCls, "".concat(prefixCls, "-element"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-active"), active), className);
  return /*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement(skeleton_Element, (0,esm_extends/* default */.Z)({
    prefixCls: "".concat(prefixCls, "-avatar"),
    shape: shape,
    size: size
  }, otherProps)));
};
/* harmony default export */ const Avatar = (SkeletonAvatar);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Button.js







var SkeletonButton = function SkeletonButton(props) {
  var _classNames;
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    active = props.active,
    _props$block = props.block,
    block = _props$block === void 0 ? false : _props$block,
    _props$size = props.size,
    size = _props$size === void 0 ? 'default' : _props$size;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  var otherProps = (0,omit/* default */.Z)(props, ['prefixCls']);
  var cls = classnames_default()(prefixCls, "".concat(prefixCls, "-element"), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-active"), active), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-block"), block), _classNames), className);
  return /*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement(skeleton_Element, (0,esm_extends/* default */.Z)({
    prefixCls: "".concat(prefixCls, "-button"),
    size: size
  }, otherProps)));
};
/* harmony default export */ const Button = (SkeletonButton);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/DotChartOutlined.js
// This icon file is generated automatically.
var DotChartOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "dot-chart", "theme": "outlined" };
/* harmony default export */ const asn_DotChartOutlined = (DotChartOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(42135);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/DotChartOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var DotChartOutlined_DotChartOutlined = function DotChartOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_DotChartOutlined
  }));
};
DotChartOutlined_DotChartOutlined.displayName = 'DotChartOutlined';
/* harmony default export */ const icons_DotChartOutlined = (/*#__PURE__*/react.forwardRef(DotChartOutlined_DotChartOutlined));
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Node.js





var SkeletonNode = function SkeletonNode(props) {
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    active = props.active,
    children = props.children;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  var cls = classnames_default()(prefixCls, "".concat(prefixCls, "-element"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-active"), active), className);
  var content = children !== null && children !== void 0 ? children : /*#__PURE__*/react.createElement(icons_DotChartOutlined, null);
  return /*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-image"), className),
    style: style
  }, content));
};
/* harmony default export */ const Node = (SkeletonNode);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Image.js




var path = 'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z';
var SkeletonImage = function SkeletonImage(props) {
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    active = props.active;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  var cls = classnames_default()(prefixCls, "".concat(prefixCls, "-element"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-active"), active), className);
  return /*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("".concat(prefixCls, "-image"), className),
    style: style
  }, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: "".concat(prefixCls, "-image-svg")
  }, /*#__PURE__*/react.createElement("path", {
    d: path,
    className: "".concat(prefixCls, "-image-path")
  }))));
};
/* harmony default export */ const Image = (SkeletonImage);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Input.js







var SkeletonInput = function SkeletonInput(props) {
  var _classNames;
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    active = props.active,
    block = props.block,
    _props$size = props.size,
    size = _props$size === void 0 ? 'default' : _props$size;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  var otherProps = (0,omit/* default */.Z)(props, ['prefixCls']);
  var cls = classnames_default()(prefixCls, "".concat(prefixCls, "-element"), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-active"), active), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-block"), block), _classNames), className);
  return /*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement(skeleton_Element, (0,esm_extends/* default */.Z)({
    prefixCls: "".concat(prefixCls, "-input"),
    size: size
  }, otherProps)));
};
/* harmony default export */ const Input = (SkeletonInput);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Paragraph.js



var Paragraph = function Paragraph(props) {
  var getWidth = function getWidth(index) {
    var width = props.width,
      _props$rows = props.rows,
      rows = _props$rows === void 0 ? 2 : _props$rows;
    if (Array.isArray(width)) {
      return width[index];
    }
    // last paragraph
    if (rows - 1 === index) {
      return width;
    }
    return undefined;
  };
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    rows = props.rows;
  var rowList = (0,toConsumableArray/* default */.Z)(Array(rows)).map(function (_, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      react.createElement("li", {
        key: index,
        style: {
          width: getWidth(index)
        }
      })
    );
  });
  return /*#__PURE__*/react.createElement("ul", {
    className: classnames_default()(prefixCls, className),
    style: style
  }, rowList);
};
/* harmony default export */ const skeleton_Paragraph = (Paragraph);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Title.js

/* eslint-disable jsx-a11y/heading-has-content */


var Title = function Title(_ref) {
  var prefixCls = _ref.prefixCls,
    className = _ref.className,
    width = _ref.width,
    style = _ref.style;
  return /*#__PURE__*/react.createElement("h3", {
    className: classnames_default()(prefixCls, className),
    style: (0,esm_extends/* default */.Z)({
      width: width
    }, style)
  });
};
/* harmony default export */ const skeleton_Title = (Title);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Skeleton.js














function getComponentProps(prop) {
  if (prop && (0,esm_typeof/* default */.Z)(prop) === 'object') {
    return prop;
  }
  return {};
}
function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    // Square avatar
    return {
      size: 'large',
      shape: 'square'
    };
  }
  return {
    size: 'large',
    shape: 'circle'
  };
}
function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return {
      width: '38%'
    };
  }
  if (hasAvatar && hasParagraph) {
    return {
      width: '50%'
    };
  }
  return {};
}
function getParagraphBasicProps(hasAvatar, hasTitle) {
  var basicProps = {};
  // Width
  if (!hasAvatar || !hasTitle) {
    basicProps.width = '61%';
  }
  // Rows
  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }
  return basicProps;
}
var Skeleton = function Skeleton(props) {
  var customizePrefixCls = props.prefixCls,
    loading = props.loading,
    className = props.className,
    style = props.style,
    children = props.children,
    _props$avatar = props.avatar,
    avatar = _props$avatar === void 0 ? false : _props$avatar,
    _props$title = props.title,
    title = _props$title === void 0 ? true : _props$title,
    _props$paragraph = props.paragraph,
    paragraph = _props$paragraph === void 0 ? true : _props$paragraph,
    active = props.active,
    round = props.round;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  if (loading || !('loading' in props)) {
    var _classNames;
    var hasAvatar = !!avatar;
    var hasTitle = !!title;
    var hasParagraph = !!paragraph;
    // Avatar
    var avatarNode;
    if (hasAvatar) {
      var avatarProps = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
        prefixCls: "".concat(prefixCls, "-avatar")
      }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar));
      // We direct use SkeletonElement as avatar in skeleton internal.
      avatarNode = /*#__PURE__*/react.createElement("div", {
        className: "".concat(prefixCls, "-header")
      }, /*#__PURE__*/react.createElement(skeleton_Element, (0,esm_extends/* default */.Z)({}, avatarProps)));
    }
    var contentNode;
    if (hasTitle || hasParagraph) {
      // Title
      var $title;
      if (hasTitle) {
        var titleProps = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
          prefixCls: "".concat(prefixCls, "-title")
        }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));
        $title = /*#__PURE__*/react.createElement(skeleton_Title, (0,esm_extends/* default */.Z)({}, titleProps));
      }
      // Paragraph
      var paragraphNode;
      if (hasParagraph) {
        var paragraphProps = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
          prefixCls: "".concat(prefixCls, "-paragraph")
        }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));
        paragraphNode = /*#__PURE__*/react.createElement(skeleton_Paragraph, (0,esm_extends/* default */.Z)({}, paragraphProps));
      }
      contentNode = /*#__PURE__*/react.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, $title, paragraphNode);
    }
    var cls = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-with-avatar"), hasAvatar), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-active"), active), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-round"), round), _classNames), className);
    return /*#__PURE__*/react.createElement("div", {
      className: cls,
      style: style
    }, avatarNode, contentNode);
  }
  return typeof children !== 'undefined' ? children : null;
};
Skeleton.Button = Button;
Skeleton.Avatar = Avatar;
Skeleton.Input = Input;
Skeleton.Image = Image;
Skeleton.Node = Node;
/* harmony default export */ const skeleton_Skeleton = (Skeleton);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/index.js

/* harmony default export */ const skeleton = (skeleton_Skeleton);
// EXTERNAL MODULE: ./node_modules/antd/es/tabs/index.js + 56 modules
var es_tabs = __webpack_require__(57774);
;// CONCATENATED MODULE: ./node_modules/antd/es/card/Grid.js


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



var Grid = function Grid(_a) {
  var prefixCls = _a.prefixCls,
    className = _a.className,
    _a$hoverable = _a.hoverable,
    hoverable = _a$hoverable === void 0 ? true : _a$hoverable,
    props = __rest(_a, ["prefixCls", "className", "hoverable"]);
  return /*#__PURE__*/react.createElement(context/* ConfigConsumer */.C, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var prefix = getPrefixCls('card', prefixCls);
    var classString = classnames_default()("".concat(prefix, "-grid"), className, (0,defineProperty/* default */.Z)({}, "".concat(prefix, "-grid-hoverable"), hoverable));
    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, props, {
      className: classString
    }));
  });
};
/* harmony default export */ const card_Grid = (Grid);
;// CONCATENATED MODULE: ./node_modules/antd/es/card/Card.js


var Card_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};








function getAction(actions) {
  var actionList = actions.map(function (action, index) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      react.createElement("li", {
        style: {
          width: "".concat(100 / actions.length, "%")
        },
        key: "action-".concat(index)
      }, /*#__PURE__*/react.createElement("span", null, action))
    );
  });
  return actionList;
}
var Card = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _extends2, _classNames;
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var size = react.useContext(SizeContext/* default */.Z);
  var onTabChange = function onTabChange(key) {
    var _a;
    (_a = props.onTabChange) === null || _a === void 0 ? void 0 : _a.call(props, key);
  };
  var isContainGrid = function isContainGrid() {
    var containGrid;
    react.Children.forEach(props.children, function (element) {
      if (element && element.type && element.type === card_Grid) {
        containGrid = true;
      }
    });
    return containGrid;
  };
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    extra = props.extra,
    _props$headStyle = props.headStyle,
    headStyle = _props$headStyle === void 0 ? {} : _props$headStyle,
    _props$bodyStyle = props.bodyStyle,
    bodyStyle = _props$bodyStyle === void 0 ? {} : _props$bodyStyle,
    title = props.title,
    loading = props.loading,
    _props$bordered = props.bordered,
    bordered = _props$bordered === void 0 ? true : _props$bordered,
    customizeSize = props.size,
    type = props.type,
    cover = props.cover,
    actions = props.actions,
    tabList = props.tabList,
    children = props.children,
    activeTabKey = props.activeTabKey,
    defaultActiveTabKey = props.defaultActiveTabKey,
    tabBarExtraContent = props.tabBarExtraContent,
    hoverable = props.hoverable,
    _props$tabProps = props.tabProps,
    tabProps = _props$tabProps === void 0 ? {} : _props$tabProps,
    others = Card_rest(props, ["prefixCls", "className", "extra", "headStyle", "bodyStyle", "title", "loading", "bordered", "size", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey", "tabBarExtraContent", "hoverable", "tabProps"]);
  var prefixCls = getPrefixCls('card', customizePrefixCls);
  var loadingBlock = /*#__PURE__*/react.createElement(skeleton, {
    loading: true,
    active: true,
    paragraph: {
      rows: 4
    },
    title: false
  }, children);
  var hasActiveTabKey = activeTabKey !== undefined;
  var extraProps = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, tabProps), (_extends2 = {}, (0,defineProperty/* default */.Z)(_extends2, hasActiveTabKey ? 'activeKey' : 'defaultActiveKey', hasActiveTabKey ? activeTabKey : defaultActiveTabKey), (0,defineProperty/* default */.Z)(_extends2, "tabBarExtraContent", tabBarExtraContent), _extends2));
  var head;
  var tabs = tabList && tabList.length ? /*#__PURE__*/react.createElement(es_tabs/* default */.Z, (0,esm_extends/* default */.Z)({
    size: "large"
  }, extraProps, {
    className: "".concat(prefixCls, "-head-tabs"),
    onChange: onTabChange,
    items: tabList.map(function (item) {
      var _a;
      return {
        label: item.tab,
        key: item.key,
        disabled: (_a = item.disabled) !== null && _a !== void 0 ? _a : false
      };
    })
  })) : null;
  if (title || extra || tabs) {
    head = /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-head"),
      style: headStyle
    }, /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-head-wrapper")
    }, title && /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-head-title")
    }, title), extra && /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-extra")
    }, extra)), tabs);
  }
  var coverDom = cover ? /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-cover")
  }, cover) : null;
  var body = /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-body"),
    style: bodyStyle
  }, loading ? loadingBlock : children);
  var actionDom = actions && actions.length ? /*#__PURE__*/react.createElement("ul", {
    className: "".concat(prefixCls, "-actions")
  }, getAction(actions)) : null;
  var divProps = (0,omit/* default */.Z)(others, ['onTabChange']);
  var mergedSize = customizeSize || size;
  var classString = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-loading"), loading), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-bordered"), bordered), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-hoverable"), hoverable), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-contain-grid"), isContainGrid()), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-contain-tabs"), tabList && tabList.length), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(mergedSize), mergedSize), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-type-").concat(type), !!type), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    ref: ref
  }, divProps, {
    className: classString
  }), head, coverDom, body, actionDom);
});
/* harmony default export */ const card_Card = (Card);
;// CONCATENATED MODULE: ./node_modules/antd/es/card/Meta.js

var Meta_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



var Meta = function Meta(props) {
  return /*#__PURE__*/react.createElement(context/* ConfigConsumer */.C, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var customizePrefixCls = props.prefixCls,
      className = props.className,
      avatar = props.avatar,
      title = props.title,
      description = props.description,
      others = Meta_rest(props, ["prefixCls", "className", "avatar", "title", "description"]);
    var prefixCls = getPrefixCls('card', customizePrefixCls);
    var classString = classnames_default()("".concat(prefixCls, "-meta"), className);
    var avatarDom = avatar ? /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-meta-avatar")
    }, avatar) : null;
    var titleDom = title ? /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-meta-title")
    }, title) : null;
    var descriptionDom = description ? /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-meta-description")
    }, description) : null;
    var MetaDetail = titleDom || descriptionDom ? /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-meta-detail")
    }, titleDom, descriptionDom) : null;
    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, others, {
      className: classString
    }), avatarDom, MetaDetail);
  });
};
/* harmony default export */ const card_Meta = (Meta);
;// CONCATENATED MODULE: ./node_modules/antd/es/card/index.js



var es_card_Card = card_Card;
es_card_Card.Grid = card_Grid;
es_card_Card.Meta = card_Meta;
/* harmony default export */ const card = (es_card_Card);

/***/ }),

/***/ 56075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ typography)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CheckOutlined.js + 1 modules
var CheckOutlined = __webpack_require__(63606);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/CopyOutlined.js
// This icon file is generated automatically.
var CopyOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, "name": "copy", "theme": "outlined" };
/* harmony default export */ const asn_CopyOutlined = (CopyOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 3 modules
var AntdIcon = __webpack_require__(42135);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/CopyOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var CopyOutlined_CopyOutlined = function CopyOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_CopyOutlined
  }));
};
CopyOutlined_CopyOutlined.displayName = 'CopyOutlined';
/* harmony default export */ const icons_CopyOutlined = (/*#__PURE__*/react.forwardRef(CopyOutlined_CopyOutlined));
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/EditOutlined.js
// This icon file is generated automatically.
var EditOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, "name": "edit", "theme": "outlined" };
/* harmony default export */ const asn_EditOutlined = (EditOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/EditOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var EditOutlined_EditOutlined = function EditOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_EditOutlined
  }));
};
EditOutlined_EditOutlined.displayName = 'EditOutlined';
/* harmony default export */ const icons_EditOutlined = (/*#__PURE__*/react.forwardRef(EditOutlined_EditOutlined));
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/copy-to-clipboard/index.js
var copy_to_clipboard = __webpack_require__(20640);
var copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard);
// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js + 4 modules
var es = __webpack_require__(48555);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(50344);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(8410);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js + 1 modules
var useMergedState = __webpack_require__(3129);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42550);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js + 1 modules
var LocaleReceiver = __webpack_require__(23715);
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(15105);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/transButton.js

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * Wrap of sub component which need use as Button capacity (like Icon component).
 *
 * This helps accessibility reader to tread as a interactive button to operation.
 */


var inlineStyle = {
  border: 0,
  background: 'transparent',
  padding: 0,
  lineHeight: 'inherit',
  display: 'inline-block'
};
var TransButton = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var onKeyDown = function onKeyDown(event) {
    var keyCode = event.keyCode;
    if (keyCode === KeyCode/* default.ENTER */.Z.ENTER) {
      event.preventDefault();
    }
  };
  var onKeyUp = function onKeyUp(event) {
    var keyCode = event.keyCode;
    var onClick = props.onClick;
    if (keyCode === KeyCode/* default.ENTER */.Z.ENTER && onClick) {
      onClick();
    }
  };
  var style = props.style,
    noStyle = props.noStyle,
    disabled = props.disabled,
    restProps = __rest(props, ["style", "noStyle", "disabled"]);
  var mergedStyle = {};
  if (!noStyle) {
    mergedStyle = (0,esm_extends/* default */.Z)({}, inlineStyle);
  }
  if (disabled) {
    mergedStyle.pointerEvents = 'none';
  }
  mergedStyle = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, mergedStyle), style);
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    role: "button",
    tabIndex: 0,
    ref: ref
  }, restProps, {
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    style: mergedStyle
  }));
});
/* harmony default export */ const transButton = (TransButton);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(98924);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/styleChecker.js

var isStyleNameSupport = function isStyleNameSupport(styleName) {
  if ((0,canUseDom/* default */.Z)() && window.document.documentElement) {
    var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
    var documentElement = window.document.documentElement;
    return styleNameList.some(function (name) {
      return name in documentElement.style;
    });
  }
  return false;
};
var isStyleValueSupport = function isStyleValueSupport(styleName, value) {
  if (!isStyleNameSupport(styleName)) {
    return false;
  }
  var ele = document.createElement('div');
  var origin = ele.style[styleName];
  ele.style[styleName] = value;
  return ele.style[styleName] !== origin;
};
function isStyleSupport(styleName, styleValue) {
  if (!Array.isArray(styleName) && styleValue !== undefined) {
    return isStyleValueSupport(styleName, styleValue);
  }
  return isStyleNameSupport(styleName);
}
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 5 modules
var es_tooltip = __webpack_require__(93583);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/EnterOutlined.js
// This icon file is generated automatically.
var EnterOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" } }] }, "name": "enter", "theme": "outlined" };
/* harmony default export */ const asn_EnterOutlined = (EnterOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/EnterOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var EnterOutlined_EnterOutlined = function EnterOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_EnterOutlined
  }));
};
EnterOutlined_EnterOutlined.displayName = 'EnterOutlined';
/* harmony default export */ const icons_EnterOutlined = (/*#__PURE__*/react.forwardRef(EnterOutlined_EnterOutlined));
// EXTERNAL MODULE: ./node_modules/antd/es/input/TextArea.js + 4 modules
var TextArea = __webpack_require__(56994);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(96159);
;// CONCATENATED MODULE: ./node_modules/antd/es/typography/Editable.js








var Editable = function Editable(_ref) {
  var prefixCls = _ref.prefixCls,
    ariaLabel = _ref['aria-label'],
    className = _ref.className,
    style = _ref.style,
    direction = _ref.direction,
    maxLength = _ref.maxLength,
    _ref$autoSize = _ref.autoSize,
    autoSize = _ref$autoSize === void 0 ? true : _ref$autoSize,
    value = _ref.value,
    onSave = _ref.onSave,
    onCancel = _ref.onCancel,
    onEnd = _ref.onEnd,
    component = _ref.component,
    _ref$enterIcon = _ref.enterIcon,
    enterIcon = _ref$enterIcon === void 0 ? /*#__PURE__*/react.createElement(icons_EnterOutlined, null) : _ref$enterIcon;
  var ref = react.useRef(null);
  var inComposition = react.useRef(false);
  var lastKeyCode = react.useRef();
  var _React$useState = react.useState(value),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    current = _React$useState2[0],
    setCurrent = _React$useState2[1];
  react.useEffect(function () {
    setCurrent(value);
  }, [value]);
  react.useEffect(function () {
    if (ref.current && ref.current.resizableTextArea) {
      var textArea = ref.current.resizableTextArea.textArea;
      textArea.focus();
      var length = textArea.value.length;
      textArea.setSelectionRange(length, length);
    }
  }, []);
  var onChange = function onChange(_ref2) {
    var target = _ref2.target;
    setCurrent(target.value.replace(/[\n\r]/g, ''));
  };
  var onCompositionStart = function onCompositionStart() {
    inComposition.current = true;
  };
  var onCompositionEnd = function onCompositionEnd() {
    inComposition.current = false;
  };
  var onKeyDown = function onKeyDown(_ref3) {
    var keyCode = _ref3.keyCode;
    // We don't record keyCode when IME is using
    if (inComposition.current) return;
    lastKeyCode.current = keyCode;
  };
  var confirmChange = function confirmChange() {
    onSave(current.trim());
  };
  var onKeyUp = function onKeyUp(_ref4) {
    var keyCode = _ref4.keyCode,
      ctrlKey = _ref4.ctrlKey,
      altKey = _ref4.altKey,
      metaKey = _ref4.metaKey,
      shiftKey = _ref4.shiftKey;
    // Check if it's a real key
    if (lastKeyCode.current === keyCode && !inComposition.current && !ctrlKey && !altKey && !metaKey && !shiftKey) {
      if (keyCode === KeyCode/* default.ENTER */.Z.ENTER) {
        confirmChange();
        onEnd === null || onEnd === void 0 ? void 0 : onEnd();
      } else if (keyCode === KeyCode/* default.ESC */.Z.ESC) {
        onCancel();
      }
    }
  };
  var onBlur = function onBlur() {
    confirmChange();
  };
  var textClassName = component ? "".concat(prefixCls, "-").concat(component) : '';
  var textAreaClassName = classnames_default()(prefixCls, "".concat(prefixCls, "-edit-content"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className, textClassName);
  return /*#__PURE__*/react.createElement("div", {
    className: textAreaClassName,
    style: style
  }, /*#__PURE__*/react.createElement(TextArea/* default */.Z, {
    ref: ref,
    maxLength: maxLength,
    value: current,
    onChange: onChange,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    onCompositionStart: onCompositionStart,
    onCompositionEnd: onCompositionEnd,
    onBlur: onBlur,
    "aria-label": ariaLabel,
    rows: 1,
    autoSize: autoSize
  }), enterIcon !== null ? (0,reactNode/* cloneElement */.Tm)(enterIcon, {
    className: "".concat(prefixCls, "-edit-content-confirm")
  }) : null);
};
/* harmony default export */ const typography_Editable = (Editable);
;// CONCATENATED MODULE: ./node_modules/antd/es/typography/hooks/useMergedConfig.js



function useMergedConfig(propConfig, templateConfig) {
  return react.useMemo(function () {
    var support = !!propConfig;
    return [support, (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, templateConfig), support && (0,esm_typeof/* default */.Z)(propConfig) === 'object' ? propConfig : null)];
  }, [propConfig]);
}
;// CONCATENATED MODULE: ./node_modules/antd/es/typography/hooks/useUpdatedEffect.js

/** Similar with `useEffect` but only trigger after mounted */
var useUpdatedEffect = function useUpdatedEffect(callback, conditions) {
  var mountRef = react.useRef(false);
  react.useEffect(function () {
    if (mountRef.current) {
      callback();
    } else {
      mountRef.current = true;
    }
  }, conditions);
};
/* harmony default export */ const hooks_useUpdatedEffect = (useUpdatedEffect);
;// CONCATENATED MODULE: ./node_modules/antd/es/typography/Typography.js


var Typography_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var Typography = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var customizePrefixCls = _a.prefixCls,
    _a$component = _a.component,
    Component = _a$component === void 0 ? 'article' : _a$component,
    className = _a.className,
    setContentRef = _a.setContentRef,
    children = _a.children,
    typographyDirection = _a.direction,
    restProps = Typography_rest(_a, ["prefixCls", "component", "className", "setContentRef", "children", "direction"]);
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    contextDirection = _React$useContext.direction;
  var direction = typographyDirection !== null && typographyDirection !== void 0 ? typographyDirection : contextDirection;
  var mergedRef = ref;
  if (setContentRef) {
     false ? 0 : void 0;
    mergedRef = (0,es_ref/* composeRef */.sQ)(ref, setContentRef);
  }
  var prefixCls = getPrefixCls('typography', customizePrefixCls);
  var componentClassName = classnames_default()(prefixCls, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
  return (
    /*#__PURE__*/
    // @ts-expect-error: Expression produces a union type that is too complex to represent.
    react.createElement(Component, (0,esm_extends/* default */.Z)({
      className: componentClassName,
      ref: mergedRef
    }, restProps), children)
  );
});
if (false) {}
// es default export should use const instead of let
/* harmony default export */ const typography_Typography = (Typography);
;// CONCATENATED MODULE: ./node_modules/antd/es/typography/Base/Ellipsis.js






function cuttable(node) {
  var type = (0,esm_typeof/* default */.Z)(node);
  return type === 'string' || type === 'number';
}
function getNodesLen(nodeList) {
  var totalLen = 0;
  nodeList.forEach(function (node) {
    if (cuttable(node)) {
      totalLen += String(node).length;
    } else {
      totalLen += 1;
    }
  });
  return totalLen;
}
function sliceNodes(nodeList, len) {
  var currLen = 0;
  var currentNodeList = [];
  for (var i = 0; i < nodeList.length; i += 1) {
    // Match to return
    if (currLen === len) {
      return currentNodeList;
    }
    var node = nodeList[i];
    var canCut = cuttable(node);
    var nodeLen = canCut ? String(node).length : 1;
    var nextLen = currLen + nodeLen;
    // Exceed but current not which means we need cut this
    // This will not happen on validate ReactElement
    if (nextLen > len) {
      var restLen = len - currLen;
      currentNodeList.push(String(node).slice(0, restLen));
      return currentNodeList;
    }
    currentNodeList.push(node);
    currLen = nextLen;
  }
  return nodeList;
}
var NONE = 0;
var PREPARE = 1;
var WALKING = 2;
var DONE_WITH_ELLIPSIS = 3;
var DONE_WITHOUT_ELLIPSIS = 4;
var Ellipsis = function Ellipsis(_ref) {
  var enabledMeasure = _ref.enabledMeasure,
    children = _ref.children,
    text = _ref.text,
    width = _ref.width,
    fontSize = _ref.fontSize,
    rows = _ref.rows,
    onEllipsis = _ref.onEllipsis;
  var _React$useState = react.useState([0, 0, 0]),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    _React$useState2$ = (0,slicedToArray/* default */.Z)(_React$useState2[0], 3),
    startLen = _React$useState2$[0],
    midLen = _React$useState2$[1],
    endLen = _React$useState2$[2],
    setCutLength = _React$useState2[1];
  var _React$useState3 = react.useState(NONE),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    walkingState = _React$useState4[0],
    setWalkingState = _React$useState4[1];
  var _React$useState5 = react.useState(0),
    _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
    singleRowHeight = _React$useState6[0],
    setSingleRowHeight = _React$useState6[1];
  var singleRowRef = react.useRef(null);
  var midRowRef = react.useRef(null);
  var nodeList = react.useMemo(function () {
    return (0,toArray/* default */.Z)(text);
  }, [text]);
  var totalLen = react.useMemo(function () {
    return getNodesLen(nodeList);
  }, [nodeList]);
  var mergedChildren = react.useMemo(function () {
    if (!enabledMeasure || walkingState !== DONE_WITH_ELLIPSIS) {
      return children(nodeList, false);
    }
    return children(sliceNodes(nodeList, midLen), midLen < totalLen);
  }, [enabledMeasure, walkingState, children, nodeList, midLen, totalLen]);
  // ======================== Walk ========================
  (0,useLayoutEffect/* default */.Z)(function () {
    if (enabledMeasure && width && fontSize && totalLen) {
      setWalkingState(PREPARE);
      setCutLength([0, Math.ceil(totalLen / 2), totalLen]);
    }
  }, [enabledMeasure, width, fontSize, text, totalLen, rows]);
  (0,useLayoutEffect/* default */.Z)(function () {
    var _a;
    if (walkingState === PREPARE) {
      setSingleRowHeight(((_a = singleRowRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0);
    }
  }, [walkingState]);
  (0,useLayoutEffect/* default */.Z)(function () {
    var _a, _b;
    if (singleRowHeight) {
      if (walkingState === PREPARE) {
        // Ignore if position is enough
        var midHeight = ((_a = midRowRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
        var maxHeight = rows * singleRowHeight;
        if (midHeight <= maxHeight) {
          setWalkingState(DONE_WITHOUT_ELLIPSIS);
          onEllipsis(false);
        } else {
          setWalkingState(WALKING);
        }
      } else if (walkingState === WALKING) {
        if (startLen !== endLen) {
          var _midHeight = ((_b = midRowRef.current) === null || _b === void 0 ? void 0 : _b.offsetHeight) || 0;
          var _maxHeight = rows * singleRowHeight;
          var nextStartLen = startLen;
          var nextEndLen = endLen;
          // We reach the last round
          if (startLen === endLen - 1) {
            nextEndLen = startLen;
          } else if (_midHeight <= _maxHeight) {
            nextStartLen = midLen;
          } else {
            nextEndLen = midLen;
          }
          var nextMidLen = Math.ceil((nextStartLen + nextEndLen) / 2);
          setCutLength([nextStartLen, nextMidLen, nextEndLen]);
        } else {
          setWalkingState(DONE_WITH_ELLIPSIS);
          onEllipsis(true);
        }
      }
    }
  }, [walkingState, startLen, endLen, rows, singleRowHeight]);
  // ======================= Render =======================
  var measureStyle = {
    width: width,
    whiteSpace: 'normal',
    margin: 0,
    padding: 0
  };
  var renderMeasure = function renderMeasure(content, ref, style) {
    return /*#__PURE__*/react.createElement("span", {
      "aria-hidden": true,
      ref: ref,
      style: (0,esm_extends/* default */.Z)({
        position: 'fixed',
        display: 'block',
        left: 0,
        top: 0,
        zIndex: -9999,
        visibility: 'hidden',
        pointerEvents: 'none',
        fontSize: Math.floor(fontSize / 2) * 2
      }, style)
    }, content);
  };
  var renderMeasureSlice = function renderMeasureSlice(len, ref) {
    var sliceNodeList = sliceNodes(nodeList, len);
    return renderMeasure(children(sliceNodeList, true), ref, measureStyle);
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, mergedChildren, enabledMeasure && walkingState !== DONE_WITH_ELLIPSIS && walkingState !== DONE_WITHOUT_ELLIPSIS && /*#__PURE__*/react.createElement(react.Fragment, null, renderMeasure('lg', singleRowRef, {
    wordBreak: 'keep-all',
    whiteSpace: 'nowrap'
  }), walkingState === PREPARE ? renderMeasure(children(nodeList, false), midRowRef, measureStyle) : renderMeasureSlice(midLen, midRowRef)));
};
if (false) {}
/* harmony default export */ const Base_Ellipsis = (Ellipsis);
;// CONCATENATED MODULE: ./node_modules/antd/es/typography/Base/EllipsisTooltip.js



var EllipsisTooltip = function EllipsisTooltip(_ref) {
  var enabledEllipsis = _ref.enabledEllipsis,
    isEllipsis = _ref.isEllipsis,
    children = _ref.children,
    tooltipProps = _ref.tooltipProps;
  if (!(tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.title) || !enabledEllipsis) {
    return children;
  }
  return /*#__PURE__*/react.createElement(es_tooltip/* default */.Z, (0,esm_extends/* default */.Z)({
    open: isEllipsis ? undefined : false
  }, tooltipProps), children);
};
if (false) {}
/* harmony default export */ const Base_EllipsisTooltip = (EllipsisTooltip);
;// CONCATENATED MODULE: ./node_modules/antd/es/typography/Base/index.js




var Base_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};























function wrapperDecorations(_ref, content) {
  var mark = _ref.mark,
    code = _ref.code,
    underline = _ref.underline,
    del = _ref["delete"],
    strong = _ref.strong,
    keyboard = _ref.keyboard,
    italic = _ref.italic;
  var currentContent = content;
  function wrap(needed, tag) {
    if (!needed) return;
    currentContent = /*#__PURE__*/react.createElement(tag, {}, currentContent);
  }
  wrap(strong, 'strong');
  wrap(underline, 'u');
  wrap(del, 'del');
  wrap(code, 'code');
  wrap(mark, 'mark');
  wrap(keyboard, 'kbd');
  wrap(italic, 'i');
  return currentContent;
}
function getNode(dom, defaultNode, needDom) {
  if (dom === true || dom === undefined) {
    return defaultNode;
  }
  return dom || needDom && defaultNode;
}
function toList(val) {
  if (val === false) {
    return [false, false];
  }
  return Array.isArray(val) ? val : [val];
}
var ELLIPSIS_STR = '...';
var Base = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _a, _b, _c;
  var customizePrefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    type = props.type,
    disabled = props.disabled,
    children = props.children,
    ellipsis = props.ellipsis,
    editable = props.editable,
    copyable = props.copyable,
    component = props.component,
    title = props.title,
    restProps = Base_rest(props, ["prefixCls", "className", "style", "type", "disabled", "children", "ellipsis", "editable", "copyable", "component", "title"]);
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction;
  var textLocale = (0,LocaleReceiver/* useLocaleReceiver */.E)('Text')[0]; // Force TS get this
  var typographyRef = react.useRef(null);
  var editIconRef = react.useRef(null);
  // ============================ MISC ============================
  var prefixCls = getPrefixCls('typography', customizePrefixCls);
  var textProps = (0,omit/* default */.Z)(restProps, ['mark', 'code', 'delete', 'underline', 'strong', 'keyboard', 'italic']);
  // ========================== Editable ==========================
  var _useMergedConfig = useMergedConfig(editable),
    _useMergedConfig2 = (0,slicedToArray/* default */.Z)(_useMergedConfig, 2),
    enableEdit = _useMergedConfig2[0],
    editConfig = _useMergedConfig2[1];
  var _useMergedState = (0,useMergedState/* default */.Z)(false, {
      value: editConfig.editing
    }),
    _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
    editing = _useMergedState2[0],
    setEditing = _useMergedState2[1];
  var _editConfig$triggerTy = editConfig.triggerType,
    triggerType = _editConfig$triggerTy === void 0 ? ['icon'] : _editConfig$triggerTy;
  var triggerEdit = function triggerEdit(edit) {
    var _a;
    if (edit) {
      (_a = editConfig.onStart) === null || _a === void 0 ? void 0 : _a.call(editConfig);
    }
    setEditing(edit);
  };
  // Focus edit icon when back
  hooks_useUpdatedEffect(function () {
    var _a;
    if (!editing) {
      (_a = editIconRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }
  }, [editing]);
  var onEditClick = function onEditClick(e) {
    e === null || e === void 0 ? void 0 : e.preventDefault();
    triggerEdit(true);
  };
  var onEditChange = function onEditChange(value) {
    var _a;
    (_a = editConfig.onChange) === null || _a === void 0 ? void 0 : _a.call(editConfig, value);
    triggerEdit(false);
  };
  var onEditCancel = function onEditCancel() {
    var _a;
    (_a = editConfig.onCancel) === null || _a === void 0 ? void 0 : _a.call(editConfig);
    triggerEdit(false);
  };
  // ========================== Copyable ==========================
  var _useMergedConfig3 = useMergedConfig(copyable),
    _useMergedConfig4 = (0,slicedToArray/* default */.Z)(_useMergedConfig3, 2),
    enableCopy = _useMergedConfig4[0],
    copyConfig = _useMergedConfig4[1];
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    copied = _React$useState2[0],
    setCopied = _React$useState2[1];
  var copyIdRef = react.useRef();
  var copyOptions = {};
  if (copyConfig.format) {
    copyOptions.format = copyConfig.format;
  }
  var cleanCopyId = function cleanCopyId() {
    window.clearTimeout(copyIdRef.current);
  };
  var onCopyClick = function onCopyClick(e) {
    var _a;
    e === null || e === void 0 ? void 0 : e.preventDefault();
    e === null || e === void 0 ? void 0 : e.stopPropagation();
    copy_to_clipboard_default()(copyConfig.text || String(children) || '', copyOptions);
    setCopied(true);
    // Trigger tips update
    cleanCopyId();
    copyIdRef.current = window.setTimeout(function () {
      setCopied(false);
    }, 3000);
    (_a = copyConfig.onCopy) === null || _a === void 0 ? void 0 : _a.call(copyConfig, e);
  };
  react.useEffect(function () {
    return cleanCopyId;
  }, []);
  // ========================== Ellipsis ==========================
  var _React$useState3 = react.useState(false),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    isLineClampSupport = _React$useState4[0],
    setIsLineClampSupport = _React$useState4[1];
  var _React$useState5 = react.useState(false),
    _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
    isTextOverflowSupport = _React$useState6[0],
    setIsTextOverflowSupport = _React$useState6[1];
  var _React$useState7 = react.useState(false),
    _React$useState8 = (0,slicedToArray/* default */.Z)(_React$useState7, 2),
    expanded = _React$useState8[0],
    setExpanded = _React$useState8[1];
  var _React$useState9 = react.useState(false),
    _React$useState10 = (0,slicedToArray/* default */.Z)(_React$useState9, 2),
    isJsEllipsis = _React$useState10[0],
    setIsJsEllipsis = _React$useState10[1];
  var _React$useState11 = react.useState(false),
    _React$useState12 = (0,slicedToArray/* default */.Z)(_React$useState11, 2),
    isNativeEllipsis = _React$useState12[0],
    setIsNativeEllipsis = _React$useState12[1];
  var _React$useState13 = react.useState(true),
    _React$useState14 = (0,slicedToArray/* default */.Z)(_React$useState13, 2),
    isNativeVisible = _React$useState14[0],
    setIsNativeVisible = _React$useState14[1];
  var _useMergedConfig5 = useMergedConfig(ellipsis, {
      expandable: false
    }),
    _useMergedConfig6 = (0,slicedToArray/* default */.Z)(_useMergedConfig5, 2),
    enableEllipsis = _useMergedConfig6[0],
    ellipsisConfig = _useMergedConfig6[1];
  var mergedEnableEllipsis = enableEllipsis && !expanded;
  // Shared prop to reduce bundle size
  var _ellipsisConfig$rows = ellipsisConfig.rows,
    rows = _ellipsisConfig$rows === void 0 ? 1 : _ellipsisConfig$rows;
  var needMeasureEllipsis = react.useMemo(function () {
    return (
      // Disable ellipsis
      !mergedEnableEllipsis ||
      // Provide suffix
      ellipsisConfig.suffix !== undefined || ellipsisConfig.onEllipsis ||
      // Can't use css ellipsis since we need to provide the place for button
      ellipsisConfig.expandable || enableEdit || enableCopy
    );
  }, [mergedEnableEllipsis, ellipsisConfig, enableEdit, enableCopy]);
  (0,useLayoutEffect/* default */.Z)(function () {
    if (enableEllipsis && !needMeasureEllipsis) {
      setIsLineClampSupport(isStyleSupport('webkitLineClamp'));
      setIsTextOverflowSupport(isStyleSupport('textOverflow'));
    }
  }, [needMeasureEllipsis, enableEllipsis]);
  var cssEllipsis = react.useMemo(function () {
    if (needMeasureEllipsis) {
      return false;
    }
    if (rows === 1) {
      return isTextOverflowSupport;
    }
    return isLineClampSupport;
  }, [needMeasureEllipsis, isTextOverflowSupport, isLineClampSupport]);
  var isMergedEllipsis = mergedEnableEllipsis && (cssEllipsis ? isNativeEllipsis : isJsEllipsis);
  var cssTextOverflow = mergedEnableEllipsis && rows === 1 && cssEllipsis;
  var cssLineClamp = mergedEnableEllipsis && rows > 1 && cssEllipsis;
  // >>>>> Expand
  var onExpandClick = function onExpandClick(e) {
    var _a;
    setExpanded(true);
    (_a = ellipsisConfig.onExpand) === null || _a === void 0 ? void 0 : _a.call(ellipsisConfig, e);
  };
  var _React$useState15 = react.useState(0),
    _React$useState16 = (0,slicedToArray/* default */.Z)(_React$useState15, 2),
    ellipsisWidth = _React$useState16[0],
    setEllipsisWidth = _React$useState16[1];
  var _React$useState17 = react.useState(0),
    _React$useState18 = (0,slicedToArray/* default */.Z)(_React$useState17, 2),
    ellipsisFontSize = _React$useState18[0],
    setEllipsisFontSize = _React$useState18[1];
  var onResize = function onResize(_ref2, element) {
    var offsetWidth = _ref2.offsetWidth;
    var _a;
    setEllipsisWidth(offsetWidth);
    setEllipsisFontSize(parseInt((_a = window.getComputedStyle) === null || _a === void 0 ? void 0 : _a.call(window, element).fontSize, 10) || 0);
  };
  // >>>>> JS Ellipsis
  var onJsEllipsis = function onJsEllipsis(jsEllipsis) {
    var _a;
    setIsJsEllipsis(jsEllipsis);
    // Trigger if changed
    if (isJsEllipsis !== jsEllipsis) {
      (_a = ellipsisConfig.onEllipsis) === null || _a === void 0 ? void 0 : _a.call(ellipsisConfig, jsEllipsis);
    }
  };
  // >>>>> Native ellipsis
  react.useEffect(function () {
    var textEle = typographyRef.current;
    if (enableEllipsis && cssEllipsis && textEle) {
      var currentEllipsis = cssLineClamp ? textEle.offsetHeight < textEle.scrollHeight : textEle.offsetWidth < textEle.scrollWidth;
      if (isNativeEllipsis !== currentEllipsis) {
        setIsNativeEllipsis(currentEllipsis);
      }
    }
  }, [enableEllipsis, cssEllipsis, children, cssLineClamp, isNativeVisible]);
  // https://github.com/ant-design/ant-design/issues/36786
  // Use IntersectionObserver to check if element is invisible
  react.useEffect(function () {
    var textEle = typographyRef.current;
    if (typeof IntersectionObserver === 'undefined' || !textEle || !cssEllipsis || !mergedEnableEllipsis) {
      return;
    }
    /* eslint-disable-next-line compat/compat */
    var observer = new IntersectionObserver(function () {
      setIsNativeVisible(!!textEle.offsetParent);
    });
    observer.observe(textEle);
    return function () {
      observer.disconnect();
    };
  }, [cssEllipsis, mergedEnableEllipsis]);
  // ========================== Tooltip ===========================
  var tooltipProps = {};
  if (ellipsisConfig.tooltip === true) {
    tooltipProps = {
      title: (_a = editConfig.text) !== null && _a !== void 0 ? _a : children
    };
  } else if ( /*#__PURE__*/react.isValidElement(ellipsisConfig.tooltip)) {
    tooltipProps = {
      title: ellipsisConfig.tooltip
    };
  } else if ((0,esm_typeof/* default */.Z)(ellipsisConfig.tooltip) === 'object') {
    tooltipProps = (0,esm_extends/* default */.Z)({
      title: (_b = editConfig.text) !== null && _b !== void 0 ? _b : children
    }, ellipsisConfig.tooltip);
  } else {
    tooltipProps = {
      title: ellipsisConfig.tooltip
    };
  }
  var topAriaLabel = react.useMemo(function () {
    var isValid = function isValid(val) {
      return ['string', 'number'].includes((0,esm_typeof/* default */.Z)(val));
    };
    if (!enableEllipsis || cssEllipsis) {
      return undefined;
    }
    if (isValid(editConfig.text)) {
      return editConfig.text;
    }
    if (isValid(children)) {
      return children;
    }
    if (isValid(title)) {
      return title;
    }
    if (isValid(tooltipProps.title)) {
      return tooltipProps.title;
    }
    return undefined;
  }, [enableEllipsis, cssEllipsis, title, tooltipProps.title, isMergedEllipsis]);
  // =========================== Render ===========================
  // >>>>>>>>>>> Editing input
  if (editing) {
    return /*#__PURE__*/react.createElement(typography_Editable, {
      value: (_c = editConfig.text) !== null && _c !== void 0 ? _c : typeof children === 'string' ? children : '',
      onSave: onEditChange,
      onCancel: onEditCancel,
      onEnd: editConfig.onEnd,
      prefixCls: prefixCls,
      className: className,
      style: style,
      direction: direction,
      component: component,
      maxLength: editConfig.maxLength,
      autoSize: editConfig.autoSize,
      enterIcon: editConfig.enterIcon
    });
  }
  // >>>>>>>>>>> Typography
  // Expand
  var renderExpand = function renderExpand() {
    var expandable = ellipsisConfig.expandable,
      symbol = ellipsisConfig.symbol;
    if (!expandable) return null;
    var expandContent;
    if (symbol) {
      expandContent = symbol;
    } else {
      expandContent = textLocale.expand;
    }
    return /*#__PURE__*/react.createElement("a", {
      key: "expand",
      className: "".concat(prefixCls, "-expand"),
      onClick: onExpandClick,
      "aria-label": textLocale.expand
    }, expandContent);
  };
  // Edit
  var renderEdit = function renderEdit() {
    if (!enableEdit) return;
    var icon = editConfig.icon,
      tooltip = editConfig.tooltip;
    var editTitle = (0,toArray/* default */.Z)(tooltip)[0] || textLocale.edit;
    var ariaLabel = typeof editTitle === 'string' ? editTitle : '';
    return triggerType.includes('icon') ? /*#__PURE__*/react.createElement(es_tooltip/* default */.Z, {
      key: "edit",
      title: tooltip === false ? '' : editTitle
    }, /*#__PURE__*/react.createElement(transButton, {
      ref: editIconRef,
      className: "".concat(prefixCls, "-edit"),
      onClick: onEditClick,
      "aria-label": ariaLabel
    }, icon || /*#__PURE__*/react.createElement(icons_EditOutlined, {
      role: "button"
    }))) : null;
  };
  // Copy
  var renderCopy = function renderCopy() {
    if (!enableCopy) return;
    var tooltips = copyConfig.tooltips,
      icon = copyConfig.icon;
    var tooltipNodes = toList(tooltips);
    var iconNodes = toList(icon);
    var copyTitle = copied ? getNode(tooltipNodes[1], textLocale.copied) : getNode(tooltipNodes[0], textLocale.copy);
    var systemStr = copied ? textLocale.copied : textLocale.copy;
    var ariaLabel = typeof copyTitle === 'string' ? copyTitle : systemStr;
    return /*#__PURE__*/react.createElement(es_tooltip/* default */.Z, {
      key: "copy",
      title: copyTitle
    }, /*#__PURE__*/react.createElement(transButton, {
      className: classnames_default()("".concat(prefixCls, "-copy"), copied && "".concat(prefixCls, "-copy-success")),
      onClick: onCopyClick,
      "aria-label": ariaLabel
    }, copied ? getNode(iconNodes[1], /*#__PURE__*/react.createElement(CheckOutlined/* default */.Z, null), true) : getNode(iconNodes[0], /*#__PURE__*/react.createElement(icons_CopyOutlined, null), true)));
  };
  var renderOperations = function renderOperations(renderExpanded) {
    return [renderExpanded && renderExpand(), renderEdit(), renderCopy()];
  };
  var renderEllipsis = function renderEllipsis(needEllipsis) {
    return [needEllipsis && /*#__PURE__*/react.createElement("span", {
      "aria-hidden": true,
      key: "ellipsis"
    }, ELLIPSIS_STR), ellipsisConfig.suffix, renderOperations(needEllipsis)];
  };
  return /*#__PURE__*/react.createElement(es/* default */.Z, {
    onResize: onResize,
    disabled: !mergedEnableEllipsis || cssEllipsis
  }, function (resizeRef) {
    var _classNames;
    return /*#__PURE__*/react.createElement(Base_EllipsisTooltip, {
      tooltipProps: tooltipProps,
      enabledEllipsis: mergedEnableEllipsis,
      isEllipsis: isMergedEllipsis
    }, /*#__PURE__*/react.createElement(typography_Typography, (0,esm_extends/* default */.Z)({
      className: classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(type), type), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-ellipsis"), enableEllipsis), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-single-line"), mergedEnableEllipsis && rows === 1), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-ellipsis-single-line"), cssTextOverflow), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-ellipsis-multiple-line"), cssLineClamp), _classNames), className),
      prefixCls: customizePrefixCls,
      style: (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, style), {
        WebkitLineClamp: cssLineClamp ? rows : undefined
      }),
      component: component,
      ref: (0,es_ref/* composeRef */.sQ)(resizeRef, typographyRef, ref),
      direction: direction,
      onClick: triggerType.includes('text') ? onEditClick : undefined,
      "aria-label": topAriaLabel === null || topAriaLabel === void 0 ? void 0 : topAriaLabel.toString(),
      title: title
    }, textProps), /*#__PURE__*/react.createElement(Base_Ellipsis, {
      enabledMeasure: mergedEnableEllipsis && !cssEllipsis,
      text: children,
      rows: rows,
      width: ellipsisWidth,
      fontSize: ellipsisFontSize,
      onEllipsis: onJsEllipsis
    }, function (node, needEllipsis) {
      var renderNode = node;
      if (node.length && needEllipsis && topAriaLabel) {
        renderNode = /*#__PURE__*/react.createElement("span", {
          key: "show-content",
          "aria-hidden": true
        }, renderNode);
      }
      var wrappedContext = wrapperDecorations(props, /*#__PURE__*/react.createElement(react.Fragment, null, renderNode, renderEllipsis(needEllipsis)));
      return wrappedContext;
    })));
  });
});
/* harmony default export */ const typography_Base = (Base);
;// CONCATENATED MODULE: ./node_modules/antd/es/typography/Link.js


var Link_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



var Link = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var ellipsis = _a.ellipsis,
    rel = _a.rel,
    restProps = Link_rest(_a, ["ellipsis", "rel"]);
   false ? 0 : void 0;
  var mergedProps = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, restProps), {
    rel: rel === undefined && restProps.target === '_blank' ? 'noopener noreferrer' : rel
  });
  // @ts-expect-error: https://github.com/ant-design/ant-design/issues/26622
  delete mergedProps.navigate;
  return /*#__PURE__*/react.createElement(typography_Base, (0,esm_extends/* default */.Z)({}, mergedProps, {
    ref: ref,
    ellipsis: !!ellipsis,
    component: "a"
  }));
});
/* harmony default export */ const typography_Link = (Link);
;// CONCATENATED MODULE: ./node_modules/antd/es/typography/Paragraph.js



var Paragraph = /*#__PURE__*/react.forwardRef(function (props, ref) {
  return /*#__PURE__*/react.createElement(typography_Base, (0,esm_extends/* default */.Z)({
    ref: ref
  }, props, {
    component: "div"
  }));
});
/* harmony default export */ const typography_Paragraph = (Paragraph);
;// CONCATENATED MODULE: ./node_modules/antd/es/typography/Text.js


var Text_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




var Text = function Text(_a, ref) {
  var ellipsis = _a.ellipsis,
    restProps = Text_rest(_a, ["ellipsis"]);
  var mergedEllipsis = react.useMemo(function () {
    if (ellipsis && (0,esm_typeof/* default */.Z)(ellipsis) === 'object') {
      return (0,omit/* default */.Z)(ellipsis, ['expandable', 'rows']);
    }
    return ellipsis;
  }, [ellipsis]);
   false ? 0 : void 0;
  return /*#__PURE__*/react.createElement(typography_Base, (0,esm_extends/* default */.Z)({
    ref: ref
  }, restProps, {
    ellipsis: mergedEllipsis,
    component: "span"
  }));
};
/* harmony default export */ const typography_Text = (/*#__PURE__*/react.forwardRef(Text));
// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var type = __webpack_require__(93355);
;// CONCATENATED MODULE: ./node_modules/antd/es/typography/Title.js

var Title_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




var TITLE_ELE_LIST = (0,type/* tupleNum */.a)(1, 2, 3, 4, 5);
var Title = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _props$level = props.level,
    level = _props$level === void 0 ? 1 : _props$level,
    restProps = Title_rest(props, ["level"]);
  var component;
  if (TITLE_ELE_LIST.includes(level)) {
    component = "h".concat(level);
  } else {
     false ? 0 : void 0;
    component = 'h1';
  }
  return /*#__PURE__*/react.createElement(typography_Base, (0,esm_extends/* default */.Z)({
    ref: ref
  }, restProps, {
    component: component
  }));
});
/* harmony default export */ const typography_Title = (Title);
;// CONCATENATED MODULE: ./node_modules/antd/es/typography/index.js





var es_typography_Typography = typography_Typography;
es_typography_Typography.Text = typography_Text;
es_typography_Typography.Link = typography_Link;
es_typography_Typography.Title = typography_Title;
es_typography_Typography.Paragraph = typography_Paragraph;
/* harmony default export */ const typography = (es_typography_Typography);

/***/ }),

/***/ 20640:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(11742);

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // avoid screen readers from reading out loud the text
    mark.ariaHidden = "true"
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ 17772:
/***/ (() => {

"use strict";
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 11742:
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ })

}]);