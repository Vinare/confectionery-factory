/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@splidejs/splide/dist/js/splide.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@splidejs/splide/dist/js/splide.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLASSES: () => (/* binding */ CLASSES),
/* harmony export */   CLASS_ACTIVE: () => (/* binding */ CLASS_ACTIVE),
/* harmony export */   CLASS_ARROW: () => (/* binding */ CLASS_ARROW),
/* harmony export */   CLASS_ARROWS: () => (/* binding */ CLASS_ARROWS),
/* harmony export */   CLASS_ARROW_NEXT: () => (/* binding */ CLASS_ARROW_NEXT),
/* harmony export */   CLASS_ARROW_PREV: () => (/* binding */ CLASS_ARROW_PREV),
/* harmony export */   CLASS_CLONE: () => (/* binding */ CLASS_CLONE),
/* harmony export */   CLASS_CONTAINER: () => (/* binding */ CLASS_CONTAINER),
/* harmony export */   CLASS_FOCUS_IN: () => (/* binding */ CLASS_FOCUS_IN),
/* harmony export */   CLASS_INITIALIZED: () => (/* binding */ CLASS_INITIALIZED),
/* harmony export */   CLASS_LIST: () => (/* binding */ CLASS_LIST),
/* harmony export */   CLASS_LOADING: () => (/* binding */ CLASS_LOADING),
/* harmony export */   CLASS_NEXT: () => (/* binding */ CLASS_NEXT),
/* harmony export */   CLASS_OVERFLOW: () => (/* binding */ CLASS_OVERFLOW),
/* harmony export */   CLASS_PAGINATION: () => (/* binding */ CLASS_PAGINATION),
/* harmony export */   CLASS_PAGINATION_PAGE: () => (/* binding */ CLASS_PAGINATION_PAGE),
/* harmony export */   CLASS_PREV: () => (/* binding */ CLASS_PREV),
/* harmony export */   CLASS_PROGRESS: () => (/* binding */ CLASS_PROGRESS),
/* harmony export */   CLASS_PROGRESS_BAR: () => (/* binding */ CLASS_PROGRESS_BAR),
/* harmony export */   CLASS_ROOT: () => (/* binding */ CLASS_ROOT),
/* harmony export */   CLASS_SLIDE: () => (/* binding */ CLASS_SLIDE),
/* harmony export */   CLASS_SPINNER: () => (/* binding */ CLASS_SPINNER),
/* harmony export */   CLASS_SR: () => (/* binding */ CLASS_SR),
/* harmony export */   CLASS_TOGGLE: () => (/* binding */ CLASS_TOGGLE),
/* harmony export */   CLASS_TOGGLE_PAUSE: () => (/* binding */ CLASS_TOGGLE_PAUSE),
/* harmony export */   CLASS_TOGGLE_PLAY: () => (/* binding */ CLASS_TOGGLE_PLAY),
/* harmony export */   CLASS_TRACK: () => (/* binding */ CLASS_TRACK),
/* harmony export */   CLASS_VISIBLE: () => (/* binding */ CLASS_VISIBLE),
/* harmony export */   DEFAULTS: () => (/* binding */ DEFAULTS),
/* harmony export */   EVENT_ACTIVE: () => (/* binding */ EVENT_ACTIVE),
/* harmony export */   EVENT_ARROWS_MOUNTED: () => (/* binding */ EVENT_ARROWS_MOUNTED),
/* harmony export */   EVENT_ARROWS_UPDATED: () => (/* binding */ EVENT_ARROWS_UPDATED),
/* harmony export */   EVENT_AUTOPLAY_PAUSE: () => (/* binding */ EVENT_AUTOPLAY_PAUSE),
/* harmony export */   EVENT_AUTOPLAY_PLAY: () => (/* binding */ EVENT_AUTOPLAY_PLAY),
/* harmony export */   EVENT_AUTOPLAY_PLAYING: () => (/* binding */ EVENT_AUTOPLAY_PLAYING),
/* harmony export */   EVENT_CLICK: () => (/* binding */ EVENT_CLICK),
/* harmony export */   EVENT_DESTROY: () => (/* binding */ EVENT_DESTROY),
/* harmony export */   EVENT_DRAG: () => (/* binding */ EVENT_DRAG),
/* harmony export */   EVENT_DRAGGED: () => (/* binding */ EVENT_DRAGGED),
/* harmony export */   EVENT_DRAGGING: () => (/* binding */ EVENT_DRAGGING),
/* harmony export */   EVENT_END_INDEX_CHANGED: () => (/* binding */ EVENT_END_INDEX_CHANGED),
/* harmony export */   EVENT_HIDDEN: () => (/* binding */ EVENT_HIDDEN),
/* harmony export */   EVENT_INACTIVE: () => (/* binding */ EVENT_INACTIVE),
/* harmony export */   EVENT_LAZYLOAD_LOADED: () => (/* binding */ EVENT_LAZYLOAD_LOADED),
/* harmony export */   EVENT_MOUNTED: () => (/* binding */ EVENT_MOUNTED),
/* harmony export */   EVENT_MOVE: () => (/* binding */ EVENT_MOVE),
/* harmony export */   EVENT_MOVED: () => (/* binding */ EVENT_MOVED),
/* harmony export */   EVENT_NAVIGATION_MOUNTED: () => (/* binding */ EVENT_NAVIGATION_MOUNTED),
/* harmony export */   EVENT_OVERFLOW: () => (/* binding */ EVENT_OVERFLOW),
/* harmony export */   EVENT_PAGINATION_MOUNTED: () => (/* binding */ EVENT_PAGINATION_MOUNTED),
/* harmony export */   EVENT_PAGINATION_UPDATED: () => (/* binding */ EVENT_PAGINATION_UPDATED),
/* harmony export */   EVENT_READY: () => (/* binding */ EVENT_READY),
/* harmony export */   EVENT_REFRESH: () => (/* binding */ EVENT_REFRESH),
/* harmony export */   EVENT_RESIZE: () => (/* binding */ EVENT_RESIZE),
/* harmony export */   EVENT_RESIZED: () => (/* binding */ EVENT_RESIZED),
/* harmony export */   EVENT_SCROLL: () => (/* binding */ EVENT_SCROLL),
/* harmony export */   EVENT_SCROLLED: () => (/* binding */ EVENT_SCROLLED),
/* harmony export */   EVENT_SHIFTED: () => (/* binding */ EVENT_SHIFTED),
/* harmony export */   EVENT_SLIDE_KEYDOWN: () => (/* binding */ EVENT_SLIDE_KEYDOWN),
/* harmony export */   EVENT_UPDATED: () => (/* binding */ EVENT_UPDATED),
/* harmony export */   EVENT_VISIBLE: () => (/* binding */ EVENT_VISIBLE),
/* harmony export */   EventBinder: () => (/* binding */ EventBinder),
/* harmony export */   EventInterface: () => (/* binding */ EventInterface),
/* harmony export */   FADE: () => (/* binding */ FADE),
/* harmony export */   LOOP: () => (/* binding */ LOOP),
/* harmony export */   LTR: () => (/* binding */ LTR),
/* harmony export */   RTL: () => (/* binding */ RTL),
/* harmony export */   RequestInterval: () => (/* binding */ RequestInterval),
/* harmony export */   SLIDE: () => (/* binding */ SLIDE),
/* harmony export */   STATUS_CLASSES: () => (/* binding */ STATUS_CLASSES),
/* harmony export */   Splide: () => (/* binding */ Splide),
/* harmony export */   SplideRenderer: () => (/* binding */ SplideRenderer),
/* harmony export */   State: () => (/* binding */ State),
/* harmony export */   TTB: () => (/* binding */ TTB),
/* harmony export */   Throttle: () => (/* binding */ Throttle),
/* harmony export */   "default": () => (/* binding */ Splide)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
var CREATED = 1;
var MOUNTED = 2;
var IDLE = 3;
var MOVING = 4;
var SCROLLING = 5;
var DRAGGING = 6;
var DESTROYED = 7;
var STATES = {
  CREATED: CREATED,
  MOUNTED: MOUNTED,
  IDLE: IDLE,
  MOVING: MOVING,
  SCROLLING: SCROLLING,
  DRAGGING: DRAGGING,
  DESTROYED: DESTROYED
};

function empty(array) {
  array.length = 0;
}

function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}

function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}

var nextTick = setTimeout;

var noop = function noop() {};

function raf(func) {
  return requestAnimationFrame(func);
}

function typeOf(type, subject) {
  return typeof subject === type;
}

function isObject(subject) {
  return !isNull(subject) && typeOf("object", subject);
}

var isArray = Array.isArray;
var isFunction = apply(typeOf, "function");
var isString = apply(typeOf, "string");
var isUndefined = apply(typeOf, "undefined");

function isNull(subject) {
  return subject === null;
}

function isHTMLElement(subject) {
  try {
    return subject instanceof (subject.ownerDocument.defaultView || window).HTMLElement;
  } catch (e) {
    return false;
  }
}

function toArray(value) {
  return isArray(value) ? value : [value];
}

function forEach(values, iteratee) {
  toArray(values).forEach(iteratee);
}

function includes(array, value) {
  return array.indexOf(value) > -1;
}

function push(array, items) {
  array.push.apply(array, toArray(items));
  return array;
}

function toggleClass(elm, classes, add) {
  if (elm) {
    forEach(classes, function (name) {
      if (name) {
        elm.classList[add ? "add" : "remove"](name);
      }
    });
  }
}

function addClass(elm, classes) {
  toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}

function append(parent, children) {
  forEach(children, parent.appendChild.bind(parent));
}

function before(nodes, ref) {
  forEach(nodes, function (node) {
    var parent = (ref || node).parentNode;

    if (parent) {
      parent.insertBefore(node, ref);
    }
  });
}

function matches(elm, selector) {
  return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}

function children(parent, selector) {
  var children2 = parent ? slice(parent.children) : [];
  return selector ? children2.filter(function (child) {
    return matches(child, selector);
  }) : children2;
}

function child(parent, selector) {
  return selector ? children(parent, selector)[0] : parent.firstElementChild;
}

var ownKeys = Object.keys;

function forOwn(object, iteratee, right) {
  if (object) {
    (right ? ownKeys(object).reverse() : ownKeys(object)).forEach(function (key) {
      key !== "__proto__" && iteratee(object[key], key);
    });
  }

  return object;
}

function assign(object) {
  slice(arguments, 1).forEach(function (source) {
    forOwn(source, function (value, key) {
      object[key] = source[key];
    });
  });
  return object;
}

function merge(object) {
  slice(arguments, 1).forEach(function (source) {
    forOwn(source, function (value, key) {
      if (isArray(value)) {
        object[key] = value.slice();
      } else if (isObject(value)) {
        object[key] = merge({}, isObject(object[key]) ? object[key] : {}, value);
      } else {
        object[key] = value;
      }
    });
  });
  return object;
}

function omit(object, keys) {
  forEach(keys || ownKeys(object), function (key) {
    delete object[key];
  });
}

function removeAttribute(elms, attrs) {
  forEach(elms, function (elm) {
    forEach(attrs, function (attr) {
      elm && elm.removeAttribute(attr);
    });
  });
}

function setAttribute(elms, attrs, value) {
  if (isObject(attrs)) {
    forOwn(attrs, function (value2, name) {
      setAttribute(elms, name, value2);
    });
  } else {
    forEach(elms, function (elm) {
      isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
    });
  }
}

function create(tag, attrs, parent) {
  var elm = document.createElement(tag);

  if (attrs) {
    isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
  }

  parent && append(parent, elm);
  return elm;
}

function style(elm, prop, value) {
  if (isUndefined(value)) {
    return getComputedStyle(elm)[prop];
  }

  if (!isNull(value)) {
    elm.style[prop] = "" + value;
  }
}

function display(elm, display2) {
  style(elm, "display", display2);
}

function focus(elm) {
  elm["setActive"] && elm["setActive"]() || elm.focus({
    preventScroll: true
  });
}

function getAttribute(elm, attr) {
  return elm.getAttribute(attr);
}

function hasClass(elm, className) {
  return elm && elm.classList.contains(className);
}

function rect(target) {
  return target.getBoundingClientRect();
}

function remove(nodes) {
  forEach(nodes, function (node) {
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
}

function parseHtml(html) {
  return child(new DOMParser().parseFromString(html, "text/html").body);
}

function prevent(e, stopPropagation) {
  e.preventDefault();

  if (stopPropagation) {
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
}

function query(parent, selector) {
  return parent && parent.querySelector(selector);
}

function queryAll(parent, selector) {
  return selector ? slice(parent.querySelectorAll(selector)) : [];
}

function removeClass(elm, classes) {
  toggleClass(elm, classes, false);
}

function timeOf(e) {
  return e.timeStamp;
}

function unit(value) {
  return isString(value) ? value : value ? value + "px" : "";
}

var PROJECT_CODE = "splide";
var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;

function assert(condition, message) {
  if (!condition) {
    throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
  }
}

var min = Math.min,
    max = Math.max,
    floor = Math.floor,
    ceil = Math.ceil,
    abs = Math.abs;

function approximatelyEqual(x, y, epsilon) {
  return abs(x - y) < epsilon;
}

function between(number, x, y, exclusive) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
}

function clamp(number, x, y) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return min(max(minimum, number), maximum);
}

function sign(x) {
  return +(x > 0) - +(x < 0);
}

function camelToKebab(string) {
  return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function format(string, replacements) {
  forEach(replacements, function (replacement) {
    string = string.replace("%s", "" + replacement);
  });
  return string;
}

function pad(number) {
  return number < 10 ? "0" + number : "" + number;
}

var ids = {};

function uniqueId(prefix) {
  return "" + prefix + pad(ids[prefix] = (ids[prefix] || 0) + 1);
}

function EventBinder() {
  var listeners = [];

  function bind(targets, events, callback, options) {
    forEachEvent(targets, events, function (target, event, namespace) {
      var isEventTarget = ("addEventListener" in target);
      var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
      isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
      listeners.push([target, event, namespace, callback, remover]);
    });
  }

  function unbind(targets, events, callback) {
    forEachEvent(targets, events, function (target, event, namespace) {
      listeners = listeners.filter(function (listener) {
        if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
          listener[4]();
          return false;
        }

        return true;
      });
    });
  }

  function dispatch(target, type, detail) {
    var e;
    var bubbles = true;

    if (typeof CustomEvent === "function") {
      e = new CustomEvent(type, {
        bubbles: bubbles,
        detail: detail
      });
    } else {
      e = document.createEvent("CustomEvent");
      e.initCustomEvent(type, bubbles, false, detail);
    }

    target.dispatchEvent(e);
    return e;
  }

  function forEachEvent(targets, events, iteratee) {
    forEach(targets, function (target) {
      target && forEach(events, function (events2) {
        events2.split(" ").forEach(function (eventNS) {
          var fragment = eventNS.split(".");
          iteratee(target, fragment[0], fragment[1]);
        });
      });
    });
  }

  function destroy() {
    listeners.forEach(function (data) {
      data[4]();
    });
    empty(listeners);
  }

  return {
    bind: bind,
    unbind: unbind,
    dispatch: dispatch,
    destroy: destroy
  };
}

var EVENT_MOUNTED = "mounted";
var EVENT_READY = "ready";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_CLICK = "click";
var EVENT_ACTIVE = "active";
var EVENT_INACTIVE = "inactive";
var EVENT_VISIBLE = "visible";
var EVENT_HIDDEN = "hidden";
var EVENT_REFRESH = "refresh";
var EVENT_UPDATED = "updated";
var EVENT_RESIZE = "resize";
var EVENT_RESIZED = "resized";
var EVENT_DRAG = "drag";
var EVENT_DRAGGING = "dragging";
var EVENT_DRAGGED = "dragged";
var EVENT_SCROLL = "scroll";
var EVENT_SCROLLED = "scrolled";
var EVENT_OVERFLOW = "overflow";
var EVENT_DESTROY = "destroy";
var EVENT_ARROWS_MOUNTED = "arrows:mounted";
var EVENT_ARROWS_UPDATED = "arrows:updated";
var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
var EVENT_PAGINATION_UPDATED = "pagination:updated";
var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
var EVENT_AUTOPLAY_PLAY = "autoplay:play";
var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";
var EVENT_SLIDE_KEYDOWN = "sk";
var EVENT_SHIFTED = "sh";
var EVENT_END_INDEX_CHANGED = "ei";

function EventInterface(Splide2) {
  var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
  var binder = EventBinder();

  function on(events, callback) {
    binder.bind(bus, toArray(events).join(" "), function (e) {
      callback.apply(callback, isArray(e.detail) ? e.detail : []);
    });
  }

  function emit(event) {
    binder.dispatch(bus, event, slice(arguments, 1));
  }

  if (Splide2) {
    Splide2.event.on(EVENT_DESTROY, binder.destroy);
  }

  return assign(binder, {
    bus: bus,
    on: on,
    off: apply(binder.unbind, bus),
    emit: emit
  });
}

function RequestInterval(interval, onInterval, onUpdate, limit) {
  var now = Date.now;
  var startTime;
  var rate = 0;
  var id;
  var paused = true;
  var count = 0;

  function update() {
    if (!paused) {
      rate = interval ? min((now() - startTime) / interval, 1) : 1;
      onUpdate && onUpdate(rate);

      if (rate >= 1) {
        onInterval();
        startTime = now();

        if (limit && ++count >= limit) {
          return pause();
        }
      }

      id = raf(update);
    }
  }

  function start(resume) {
    resume || cancel();
    startTime = now() - (resume ? rate * interval : 0);
    paused = false;
    id = raf(update);
  }

  function pause() {
    paused = true;
  }

  function rewind() {
    startTime = now();
    rate = 0;

    if (onUpdate) {
      onUpdate(rate);
    }
  }

  function cancel() {
    id && cancelAnimationFrame(id);
    rate = 0;
    id = 0;
    paused = true;
  }

  function set(time) {
    interval = time;
  }

  function isPaused() {
    return paused;
  }

  return {
    start: start,
    rewind: rewind,
    pause: pause,
    cancel: cancel,
    set: set,
    isPaused: isPaused
  };
}

function State(initialState) {
  var state = initialState;

  function set(value) {
    state = value;
  }

  function is(states) {
    return includes(toArray(states), state);
  }

  return {
    set: set,
    is: is
  };
}

function Throttle(func, duration) {
  var interval = RequestInterval(duration || 0, func, null, 1);
  return function () {
    interval.isPaused() && interval.start();
  };
}

function Media(Splide2, Components2, options) {
  var state = Splide2.state;
  var breakpoints = options.breakpoints || {};
  var reducedMotion = options.reducedMotion || {};
  var binder = EventBinder();
  var queries = [];

  function setup() {
    var isMin = options.mediaQuery === "min";
    ownKeys(breakpoints).sort(function (n, m) {
      return isMin ? +n - +m : +m - +n;
    }).forEach(function (key) {
      register(breakpoints[key], "(" + (isMin ? "min" : "max") + "-width:" + key + "px)");
    });
    register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
    update();
  }

  function destroy(completely) {
    if (completely) {
      binder.destroy();
    }
  }

  function register(options2, query) {
    var queryList = matchMedia(query);
    binder.bind(queryList, "change", update);
    queries.push([options2, queryList]);
  }

  function update() {
    var destroyed = state.is(DESTROYED);
    var direction = options.direction;
    var merged = queries.reduce(function (merged2, entry) {
      return merge(merged2, entry[1].matches ? entry[0] : {});
    }, {});
    omit(options);
    set(merged);

    if (options.destroy) {
      Splide2.destroy(options.destroy === "completely");
    } else if (destroyed) {
      destroy(true);
      Splide2.mount();
    } else {
      direction !== options.direction && Splide2.refresh();
    }
  }

  function reduce(enable) {
    if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) {
      enable ? merge(options, reducedMotion) : omit(options, ownKeys(reducedMotion));
    }
  }

  function set(opts, base, notify) {
    merge(options, opts);
    base && merge(Object.getPrototypeOf(options), opts);

    if (notify || !state.is(CREATED)) {
      Splide2.emit(EVENT_UPDATED, options);
    }
  }

  return {
    setup: setup,
    destroy: destroy,
    reduce: reduce,
    set: set
  };
}

var ARROW = "Arrow";
var ARROW_LEFT = ARROW + "Left";
var ARROW_RIGHT = ARROW + "Right";
var ARROW_UP = ARROW + "Up";
var ARROW_DOWN = ARROW + "Down";
var LTR = "ltr";
var RTL = "rtl";
var TTB = "ttb";
var ORIENTATION_MAP = {
  width: ["height"],
  left: ["top", "right"],
  right: ["bottom", "left"],
  x: ["y"],
  X: ["Y"],
  Y: ["X"],
  ArrowLeft: [ARROW_UP, ARROW_RIGHT],
  ArrowRight: [ARROW_DOWN, ARROW_LEFT]
};

function Direction(Splide2, Components2, options) {
  function resolve(prop, axisOnly, direction) {
    direction = direction || options.direction;
    var index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
    return ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index] || prop.replace(/width|left|right/i, function (match, offset) {
      var replacement = ORIENTATION_MAP[match.toLowerCase()][index] || match;
      return offset > 0 ? replacement.charAt(0).toUpperCase() + replacement.slice(1) : replacement;
    });
  }

  function orient(value) {
    return value * (options.direction === RTL ? 1 : -1);
  }

  return {
    resolve: resolve,
    orient: orient
  };
}

var ROLE = "role";
var TAB_INDEX = "tabindex";
var DISABLED = "disabled";
var ARIA_PREFIX = "aria-";
var ARIA_CONTROLS = ARIA_PREFIX + "controls";
var ARIA_CURRENT = ARIA_PREFIX + "current";
var ARIA_SELECTED = ARIA_PREFIX + "selected";
var ARIA_LABEL = ARIA_PREFIX + "label";
var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
var ARIA_LIVE = ARIA_PREFIX + "live";
var ARIA_BUSY = ARIA_PREFIX + "busy";
var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
var ALL_ATTRIBUTES = [ROLE, TAB_INDEX, DISABLED, ARIA_CONTROLS, ARIA_CURRENT, ARIA_LABEL, ARIA_LABELLEDBY, ARIA_HIDDEN, ARIA_ORIENTATION, ARIA_ROLEDESCRIPTION];
var CLASS_PREFIX = PROJECT_CODE + "__";
var STATUS_CLASS_PREFIX = "is-";
var CLASS_ROOT = PROJECT_CODE;
var CLASS_TRACK = CLASS_PREFIX + "track";
var CLASS_LIST = CLASS_PREFIX + "list";
var CLASS_SLIDE = CLASS_PREFIX + "slide";
var CLASS_CLONE = CLASS_SLIDE + "--clone";
var CLASS_CONTAINER = CLASS_SLIDE + "__container";
var CLASS_ARROWS = CLASS_PREFIX + "arrows";
var CLASS_ARROW = CLASS_PREFIX + "arrow";
var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
var CLASS_PAGINATION = CLASS_PREFIX + "pagination";
var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
var CLASS_PROGRESS = CLASS_PREFIX + "progress";
var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
var CLASS_TOGGLE = CLASS_PREFIX + "toggle";
var CLASS_TOGGLE_PLAY = CLASS_TOGGLE + "__play";
var CLASS_TOGGLE_PAUSE = CLASS_TOGGLE + "__pause";
var CLASS_SPINNER = CLASS_PREFIX + "spinner";
var CLASS_SR = CLASS_PREFIX + "sr";
var CLASS_INITIALIZED = STATUS_CLASS_PREFIX + "initialized";
var CLASS_ACTIVE = STATUS_CLASS_PREFIX + "active";
var CLASS_PREV = STATUS_CLASS_PREFIX + "prev";
var CLASS_NEXT = STATUS_CLASS_PREFIX + "next";
var CLASS_VISIBLE = STATUS_CLASS_PREFIX + "visible";
var CLASS_LOADING = STATUS_CLASS_PREFIX + "loading";
var CLASS_FOCUS_IN = STATUS_CLASS_PREFIX + "focus-in";
var CLASS_OVERFLOW = STATUS_CLASS_PREFIX + "overflow";
var STATUS_CLASSES = [CLASS_ACTIVE, CLASS_VISIBLE, CLASS_PREV, CLASS_NEXT, CLASS_LOADING, CLASS_FOCUS_IN, CLASS_OVERFLOW];
var CLASSES = {
  slide: CLASS_SLIDE,
  clone: CLASS_CLONE,
  arrows: CLASS_ARROWS,
  arrow: CLASS_ARROW,
  prev: CLASS_ARROW_PREV,
  next: CLASS_ARROW_NEXT,
  pagination: CLASS_PAGINATION,
  page: CLASS_PAGINATION_PAGE,
  spinner: CLASS_SPINNER
};

function closest(from, selector) {
  if (isFunction(from.closest)) {
    return from.closest(selector);
  }

  var elm = from;

  while (elm && elm.nodeType === 1) {
    if (matches(elm, selector)) {
      break;
    }

    elm = elm.parentElement;
  }

  return elm;
}

var FRICTION = 5;
var LOG_INTERVAL = 200;
var POINTER_DOWN_EVENTS = "touchstart mousedown";
var POINTER_MOVE_EVENTS = "touchmove mousemove";
var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";

function Elements(Splide2, Components2, options) {
  var _EventInterface = EventInterface(Splide2),
      on = _EventInterface.on,
      bind = _EventInterface.bind;

  var root = Splide2.root;
  var i18n = options.i18n;
  var elements = {};
  var slides = [];
  var rootClasses = [];
  var trackClasses = [];
  var track;
  var list;
  var isUsingKey;

  function setup() {
    collect();
    init();
    update();
  }

  function mount() {
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, setup);
    on(EVENT_UPDATED, update);
    bind(document, POINTER_DOWN_EVENTS + " keydown", function (e) {
      isUsingKey = e.type === "keydown";
    }, {
      capture: true
    });
    bind(root, "focusin", function () {
      toggleClass(root, CLASS_FOCUS_IN, !!isUsingKey);
    });
  }

  function destroy(completely) {
    var attrs = ALL_ATTRIBUTES.concat("style");
    empty(slides);
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    removeAttribute([track, list], attrs);
    removeAttribute(root, completely ? attrs : ["style", ARIA_ROLEDESCRIPTION]);
  }

  function update() {
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    rootClasses = getClasses(CLASS_ROOT);
    trackClasses = getClasses(CLASS_TRACK);
    addClass(root, rootClasses);
    addClass(track, trackClasses);
    setAttribute(root, ARIA_LABEL, options.label);
    setAttribute(root, ARIA_LABELLEDBY, options.labelledby);
  }

  function collect() {
    track = find("." + CLASS_TRACK);
    list = child(track, "." + CLASS_LIST);
    assert(track && list, "A track/list element is missing.");
    push(slides, children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")"));
    forOwn({
      arrows: CLASS_ARROWS,
      pagination: CLASS_PAGINATION,
      prev: CLASS_ARROW_PREV,
      next: CLASS_ARROW_NEXT,
      bar: CLASS_PROGRESS_BAR,
      toggle: CLASS_TOGGLE
    }, function (className, key) {
      elements[key] = find("." + className);
    });
    assign(elements, {
      root: root,
      track: track,
      list: list,
      slides: slides
    });
  }

  function init() {
    var id = root.id || uniqueId(PROJECT_CODE);
    var role = options.role;
    root.id = id;
    track.id = track.id || id + "-track";
    list.id = list.id || id + "-list";

    if (!getAttribute(root, ROLE) && root.tagName !== "SECTION" && role) {
      setAttribute(root, ROLE, role);
    }

    setAttribute(root, ARIA_ROLEDESCRIPTION, i18n.carousel);
    setAttribute(list, ROLE, "presentation");
  }

  function find(selector) {
    var elm = query(root, selector);
    return elm && closest(elm, "." + CLASS_ROOT) === root ? elm : void 0;
  }

  function getClasses(base) {
    return [base + "--" + options.type, base + "--" + options.direction, options.drag && base + "--draggable", options.isNavigation && base + "--nav", base === CLASS_ROOT && CLASS_ACTIVE];
  }

  return assign(elements, {
    setup: setup,
    mount: mount,
    destroy: destroy
  });
}

var SLIDE = "slide";
var LOOP = "loop";
var FADE = "fade";

function Slide$1(Splide2, index, slideIndex, slide) {
  var event = EventInterface(Splide2);
  var on = event.on,
      emit = event.emit,
      bind = event.bind;
  var Components = Splide2.Components,
      root = Splide2.root,
      options = Splide2.options;
  var isNavigation = options.isNavigation,
      updateOnMove = options.updateOnMove,
      i18n = options.i18n,
      pagination = options.pagination,
      slideFocus = options.slideFocus;
  var resolve = Components.Direction.resolve;
  var styles = getAttribute(slide, "style");
  var label = getAttribute(slide, ARIA_LABEL);
  var isClone = slideIndex > -1;
  var container = child(slide, "." + CLASS_CONTAINER);
  var destroyed;

  function mount() {
    if (!isClone) {
      slide.id = root.id + "-slide" + pad(index + 1);
      setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
      setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n.slide);
      setAttribute(slide, ARIA_LABEL, label || format(i18n.slideLabel, [index + 1, Splide2.length]));
    }

    listen();
  }

  function listen() {
    bind(slide, "click", apply(emit, EVENT_CLICK, self));
    bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self));
    on([EVENT_MOVED, EVENT_SHIFTED, EVENT_SCROLLED], update);
    on(EVENT_NAVIGATION_MOUNTED, initNavigation);

    if (updateOnMove) {
      on(EVENT_MOVE, onMove);
    }
  }

  function destroy() {
    destroyed = true;
    event.destroy();
    removeClass(slide, STATUS_CLASSES);
    removeAttribute(slide, ALL_ATTRIBUTES);
    setAttribute(slide, "style", styles);
    setAttribute(slide, ARIA_LABEL, label || "");
  }

  function initNavigation() {
    var controls = Splide2.splides.map(function (target) {
      var Slide2 = target.splide.Components.Slides.getAt(index);
      return Slide2 ? Slide2.slide.id : "";
    }).join(" ");
    setAttribute(slide, ARIA_LABEL, format(i18n.slideX, (isClone ? slideIndex : index) + 1));
    setAttribute(slide, ARIA_CONTROLS, controls);
    setAttribute(slide, ROLE, slideFocus ? "button" : "");
    slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
  }

  function onMove() {
    if (!destroyed) {
      update();
    }
  }

  function update() {
    if (!destroyed) {
      var curr = Splide2.index;
      updateActivity();
      updateVisibility();
      toggleClass(slide, CLASS_PREV, index === curr - 1);
      toggleClass(slide, CLASS_NEXT, index === curr + 1);
    }
  }

  function updateActivity() {
    var active = isActive();

    if (active !== hasClass(slide, CLASS_ACTIVE)) {
      toggleClass(slide, CLASS_ACTIVE, active);
      setAttribute(slide, ARIA_CURRENT, isNavigation && active || "");
      emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
    }
  }

  function updateVisibility() {
    var visible = isVisible();
    var hidden = !visible && (!isActive() || isClone);

    if (!Splide2.state.is([MOVING, SCROLLING])) {
      setAttribute(slide, ARIA_HIDDEN, hidden || "");
    }

    setAttribute(queryAll(slide, options.focusableNodes || ""), TAB_INDEX, hidden ? -1 : "");

    if (slideFocus) {
      setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
    }

    if (visible !== hasClass(slide, CLASS_VISIBLE)) {
      toggleClass(slide, CLASS_VISIBLE, visible);
      emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
    }

    if (!visible && document.activeElement === slide) {
      var Slide2 = Components.Slides.getAt(Splide2.index);
      Slide2 && focus(Slide2.slide);
    }
  }

  function style$1(prop, value, useContainer) {
    style(useContainer && container || slide, prop, value);
  }

  function isActive() {
    var curr = Splide2.index;
    return curr === index || options.cloneStatus && curr === slideIndex;
  }

  function isVisible() {
    if (Splide2.is(FADE)) {
      return isActive();
    }

    var trackRect = rect(Components.Elements.track);
    var slideRect = rect(slide);
    var left = resolve("left", true);
    var right = resolve("right", true);
    return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
  }

  function isWithin(from, distance) {
    var diff = abs(from - index);

    if (!isClone && (options.rewind || Splide2.is(LOOP))) {
      diff = min(diff, Splide2.length - diff);
    }

    return diff <= distance;
  }

  var self = {
    index: index,
    slideIndex: slideIndex,
    slide: slide,
    container: container,
    isClone: isClone,
    mount: mount,
    destroy: destroy,
    update: update,
    style: style$1,
    isWithin: isWithin
  };
  return self;
}

function Slides(Splide2, Components2, options) {
  var _EventInterface2 = EventInterface(Splide2),
      on = _EventInterface2.on,
      emit = _EventInterface2.emit,
      bind = _EventInterface2.bind;

  var _Components2$Elements = Components2.Elements,
      slides = _Components2$Elements.slides,
      list = _Components2$Elements.list;
  var Slides2 = [];

  function mount() {
    init();
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, init);
  }

  function init() {
    slides.forEach(function (slide, index) {
      register(slide, index, -1);
    });
  }

  function destroy() {
    forEach$1(function (Slide2) {
      Slide2.destroy();
    });
    empty(Slides2);
  }

  function update() {
    forEach$1(function (Slide2) {
      Slide2.update();
    });
  }

  function register(slide, index, slideIndex) {
    var object = Slide$1(Splide2, index, slideIndex, slide);
    object.mount();
    Slides2.push(object);
    Slides2.sort(function (Slide1, Slide2) {
      return Slide1.index - Slide2.index;
    });
  }

  function get(excludeClones) {
    return excludeClones ? filter(function (Slide2) {
      return !Slide2.isClone;
    }) : Slides2;
  }

  function getIn(page) {
    var Controller = Components2.Controller;
    var index = Controller.toIndex(page);
    var max = Controller.hasFocus() ? 1 : options.perPage;
    return filter(function (Slide2) {
      return between(Slide2.index, index, index + max - 1);
    });
  }

  function getAt(index) {
    return filter(index)[0];
  }

  function add(items, index) {
    forEach(items, function (slide) {
      if (isString(slide)) {
        slide = parseHtml(slide);
      }

      if (isHTMLElement(slide)) {
        var ref = slides[index];
        ref ? before(slide, ref) : append(list, slide);
        addClass(slide, options.classes.slide);
        observeImages(slide, apply(emit, EVENT_RESIZE));
      }
    });
    emit(EVENT_REFRESH);
  }

  function remove$1(matcher) {
    remove(filter(matcher).map(function (Slide2) {
      return Slide2.slide;
    }));
    emit(EVENT_REFRESH);
  }

  function forEach$1(iteratee, excludeClones) {
    get(excludeClones).forEach(iteratee);
  }

  function filter(matcher) {
    return Slides2.filter(isFunction(matcher) ? matcher : function (Slide2) {
      return isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index);
    });
  }

  function style(prop, value, useContainer) {
    forEach$1(function (Slide2) {
      Slide2.style(prop, value, useContainer);
    });
  }

  function observeImages(elm, callback) {
    var images = queryAll(elm, "img");
    var length = images.length;

    if (length) {
      images.forEach(function (img) {
        bind(img, "load error", function () {
          if (! --length) {
            callback();
          }
        });
      });
    } else {
      callback();
    }
  }

  function getLength(excludeClones) {
    return excludeClones ? slides.length : Slides2.length;
  }

  function isEnough() {
    return Slides2.length > options.perPage;
  }

  return {
    mount: mount,
    destroy: destroy,
    update: update,
    register: register,
    get: get,
    getIn: getIn,
    getAt: getAt,
    add: add,
    remove: remove$1,
    forEach: forEach$1,
    filter: filter,
    style: style,
    getLength: getLength,
    isEnough: isEnough
  };
}

function Layout(Splide2, Components2, options) {
  var _EventInterface3 = EventInterface(Splide2),
      on = _EventInterface3.on,
      bind = _EventInterface3.bind,
      emit = _EventInterface3.emit;

  var Slides = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var _Components2$Elements2 = Components2.Elements,
      root = _Components2$Elements2.root,
      track = _Components2$Elements2.track,
      list = _Components2$Elements2.list;
  var getAt = Slides.getAt,
      styleSlides = Slides.style;
  var vertical;
  var rootRect;
  var overflow;

  function mount() {
    init();
    bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
    on([EVENT_UPDATED, EVENT_REFRESH], init);
    on(EVENT_RESIZE, resize);
  }

  function init() {
    vertical = options.direction === TTB;
    style(root, "maxWidth", unit(options.width));
    style(track, resolve("paddingLeft"), cssPadding(false));
    style(track, resolve("paddingRight"), cssPadding(true));
    resize(true);
  }

  function resize(force) {
    var newRect = rect(root);

    if (force || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
      style(track, "height", cssTrackHeight());
      styleSlides(resolve("marginRight"), unit(options.gap));
      styleSlides("width", cssSlideWidth());
      styleSlides("height", cssSlideHeight(), true);
      rootRect = newRect;
      emit(EVENT_RESIZED);

      if (overflow !== (overflow = isOverflow())) {
        toggleClass(root, CLASS_OVERFLOW, overflow);
        emit(EVENT_OVERFLOW, overflow);
      }
    }
  }

  function cssPadding(right) {
    var padding = options.padding;
    var prop = resolve(right ? "right" : "left");
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  }

  function cssTrackHeight() {
    var height = "";

    if (vertical) {
      height = cssHeight();
      assert(height, "height or heightRatio is missing.");
      height = "calc(" + height + " - " + cssPadding(false) + " - " + cssPadding(true) + ")";
    }

    return height;
  }

  function cssHeight() {
    return unit(options.height || rect(list).width * options.heightRatio);
  }

  function cssSlideWidth() {
    return options.autoWidth ? null : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
  }

  function cssSlideHeight() {
    return unit(options.fixedHeight) || (vertical ? options.autoHeight ? null : cssSlideSize() : cssHeight());
  }

  function cssSlideSize() {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  }

  function listSize() {
    return rect(list)[resolve("width")];
  }

  function slideSize(index, withoutGap) {
    var Slide = getAt(index || 0);
    return Slide ? rect(Slide.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
  }

  function totalSize(index, withoutGap) {
    var Slide = getAt(index);

    if (Slide) {
      var right = rect(Slide.slide)[resolve("right")];
      var left = rect(list)[resolve("left")];
      return abs(right - left) + (withoutGap ? 0 : getGap());
    }

    return 0;
  }

  function sliderSize(withoutGap) {
    return totalSize(Splide2.length - 1) - totalSize(0) + slideSize(0, withoutGap);
  }

  function getGap() {
    var Slide = getAt(0);
    return Slide && parseFloat(style(Slide.slide, resolve("marginRight"))) || 0;
  }

  function getPadding(right) {
    return parseFloat(style(track, resolve("padding" + (right ? "Right" : "Left")))) || 0;
  }

  function isOverflow() {
    return Splide2.is(FADE) || sliderSize(true) > listSize();
  }

  return {
    mount: mount,
    resize: resize,
    listSize: listSize,
    slideSize: slideSize,
    sliderSize: sliderSize,
    totalSize: totalSize,
    getPadding: getPadding,
    isOverflow: isOverflow
  };
}

var MULTIPLIER = 2;

function Clones(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on;
  var Elements = Components2.Elements,
      Slides = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var clones = [];
  var cloneCount;

  function mount() {
    on(EVENT_REFRESH, remount);
    on([EVENT_UPDATED, EVENT_RESIZE], observe);

    if (cloneCount = computeCloneCount()) {
      generate(cloneCount);
      Components2.Layout.resize(true);
    }
  }

  function remount() {
    destroy();
    mount();
  }

  function destroy() {
    remove(clones);
    empty(clones);
    event.destroy();
  }

  function observe() {
    var count = computeCloneCount();

    if (cloneCount !== count) {
      if (cloneCount < count || !count) {
        event.emit(EVENT_REFRESH);
      }
    }
  }

  function generate(count) {
    var slides = Slides.get().slice();
    var length = slides.length;

    if (length) {
      while (slides.length < count) {
        push(slides, slides);
      }

      push(slides.slice(-count), slides.slice(0, count)).forEach(function (Slide, index) {
        var isHead = index < count;
        var clone = cloneDeep(Slide.slide, index);
        isHead ? before(clone, slides[0].slide) : append(Elements.list, clone);
        push(clones, clone);
        Slides.register(clone, index - count + (isHead ? 0 : length), Slide.index);
      });
    }
  }

  function cloneDeep(elm, index) {
    var clone = elm.cloneNode(true);
    addClass(clone, options.classes.clone);
    clone.id = Splide2.root.id + "-clone" + pad(index + 1);
    return clone;
  }

  function computeCloneCount() {
    var clones2 = options.clones;

    if (!Splide2.is(LOOP)) {
      clones2 = 0;
    } else if (isUndefined(clones2)) {
      var fixedSize = options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
      var fixedCount = fixedSize && ceil(rect(Elements.track)[resolve("width")] / fixedSize);
      clones2 = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage * MULTIPLIER;
    }

    return clones2;
  }

  return {
    mount: mount,
    destroy: destroy
  };
}

function Move(Splide2, Components2, options) {
  var _EventInterface4 = EventInterface(Splide2),
      on = _EventInterface4.on,
      emit = _EventInterface4.emit;

  var set = Splide2.state.set;
  var _Components2$Layout = Components2.Layout,
      slideSize = _Components2$Layout.slideSize,
      getPadding = _Components2$Layout.getPadding,
      totalSize = _Components2$Layout.totalSize,
      listSize = _Components2$Layout.listSize,
      sliderSize = _Components2$Layout.sliderSize;
  var _Components2$Directio = Components2.Direction,
      resolve = _Components2$Directio.resolve,
      orient = _Components2$Directio.orient;
  var _Components2$Elements3 = Components2.Elements,
      list = _Components2$Elements3.list,
      track = _Components2$Elements3.track;
  var Transition;

  function mount() {
    Transition = Components2.Transition;
    on([EVENT_MOUNTED, EVENT_RESIZED, EVENT_UPDATED, EVENT_REFRESH], reposition);
  }

  function reposition() {
    if (!Components2.Controller.isBusy()) {
      Components2.Scroll.cancel();
      jump(Splide2.index);
      Components2.Slides.update();
    }
  }

  function move(dest, index, prev, callback) {
    if (dest !== index && canShift(dest > prev)) {
      cancel();
      translate(shift(getPosition(), dest > prev), true);
    }

    set(MOVING);
    emit(EVENT_MOVE, index, prev, dest);
    Transition.start(index, function () {
      set(IDLE);
      emit(EVENT_MOVED, index, prev, dest);
      callback && callback();
    });
  }

  function jump(index) {
    translate(toPosition(index, true));
  }

  function translate(position, preventLoop) {
    if (!Splide2.is(FADE)) {
      var destination = preventLoop ? position : loop(position);
      style(list, "transform", "translate" + resolve("X") + "(" + destination + "px)");
      position !== destination && emit(EVENT_SHIFTED);
    }
  }

  function loop(position) {
    if (Splide2.is(LOOP)) {
      var index = toIndex(position);
      var exceededMax = index > Components2.Controller.getEnd();
      var exceededMin = index < 0;

      if (exceededMin || exceededMax) {
        position = shift(position, exceededMax);
      }
    }

    return position;
  }

  function shift(position, backwards) {
    var excess = position - getLimit(backwards);
    var size = sliderSize();
    position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
    return position;
  }

  function cancel() {
    translate(getPosition(), true);
    Transition.cancel();
  }

  function toIndex(position) {
    var Slides = Components2.Slides.get();
    var index = 0;
    var minDistance = Infinity;

    for (var i = 0; i < Slides.length; i++) {
      var slideIndex = Slides[i].index;
      var distance = abs(toPosition(slideIndex, true) - position);

      if (distance <= minDistance) {
        minDistance = distance;
        index = slideIndex;
      } else {
        break;
      }
    }

    return index;
  }

  function toPosition(index, trimming) {
    var position = orient(totalSize(index - 1) - offset(index));
    return trimming ? trim(position) : position;
  }

  function getPosition() {
    var left = resolve("left");
    return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
  }

  function trim(position) {
    if (options.trimSpace && Splide2.is(SLIDE)) {
      position = clamp(position, 0, orient(sliderSize(true) - listSize()));
    }

    return position;
  }

  function offset(index) {
    var focus = options.focus;
    return focus === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus * slideSize(index) || 0;
  }

  function getLimit(max) {
    return toPosition(max ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
  }

  function canShift(backwards) {
    var shifted = orient(shift(getPosition(), backwards));
    return backwards ? shifted >= 0 : shifted <= list[resolve("scrollWidth")] - rect(track)[resolve("width")];
  }

  function exceededLimit(max, position) {
    position = isUndefined(position) ? getPosition() : position;
    var exceededMin = max !== true && orient(position) < orient(getLimit(false));
    var exceededMax = max !== false && orient(position) > orient(getLimit(true));
    return exceededMin || exceededMax;
  }

  return {
    mount: mount,
    move: move,
    jump: jump,
    translate: translate,
    shift: shift,
    cancel: cancel,
    toIndex: toIndex,
    toPosition: toPosition,
    getPosition: getPosition,
    getLimit: getLimit,
    exceededLimit: exceededLimit,
    reposition: reposition
  };
}

function Controller(Splide2, Components2, options) {
  var _EventInterface5 = EventInterface(Splide2),
      on = _EventInterface5.on,
      emit = _EventInterface5.emit;

  var Move = Components2.Move;
  var getPosition = Move.getPosition,
      getLimit = Move.getLimit,
      toPosition = Move.toPosition;
  var _Components2$Slides = Components2.Slides,
      isEnough = _Components2$Slides.isEnough,
      getLength = _Components2$Slides.getLength;
  var omitEnd = options.omitEnd;
  var isLoop = Splide2.is(LOOP);
  var isSlide = Splide2.is(SLIDE);
  var getNext = apply(getAdjacent, false);
  var getPrev = apply(getAdjacent, true);
  var currIndex = options.start || 0;
  var endIndex;
  var prevIndex = currIndex;
  var slideCount;
  var perMove;
  var perPage;

  function mount() {
    init();
    on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], init);
    on(EVENT_RESIZED, onResized);
  }

  function init() {
    slideCount = getLength(true);
    perMove = options.perMove;
    perPage = options.perPage;
    endIndex = getEnd();
    var index = clamp(currIndex, 0, omitEnd ? endIndex : slideCount - 1);

    if (index !== currIndex) {
      currIndex = index;
      Move.reposition();
    }
  }

  function onResized() {
    if (endIndex !== getEnd()) {
      emit(EVENT_END_INDEX_CHANGED);
    }
  }

  function go(control, allowSameIndex, callback) {
    if (!isBusy()) {
      var dest = parse(control);
      var index = loop(dest);

      if (index > -1 && (allowSameIndex || index !== currIndex)) {
        setIndex(index);
        Move.move(dest, index, prevIndex, callback);
      }
    }
  }

  function scroll(destination, duration, snap, callback) {
    Components2.Scroll.scroll(destination, duration, snap, function () {
      var index = loop(Move.toIndex(getPosition()));
      setIndex(omitEnd ? min(index, endIndex) : index);
      callback && callback();
    });
  }

  function parse(control) {
    var index = currIndex;

    if (isString(control)) {
      var _ref = control.match(/([+\-<>])(\d+)?/) || [],
          indicator = _ref[1],
          number = _ref[2];

      if (indicator === "+" || indicator === "-") {
        index = computeDestIndex(currIndex + +("" + indicator + (+number || 1)), currIndex);
      } else if (indicator === ">") {
        index = number ? toIndex(+number) : getNext(true);
      } else if (indicator === "<") {
        index = getPrev(true);
      }
    } else {
      index = isLoop ? control : clamp(control, 0, endIndex);
    }

    return index;
  }

  function getAdjacent(prev, destination) {
    var number = perMove || (hasFocus() ? 1 : perPage);
    var dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex, !(perMove || hasFocus()));

    if (dest === -1 && isSlide) {
      if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) {
        return prev ? 0 : endIndex;
      }
    }

    return destination ? dest : loop(dest);
  }

  function computeDestIndex(dest, from, snapPage) {
    if (isEnough() || hasFocus()) {
      var index = computeMovableDestIndex(dest);

      if (index !== dest) {
        from = dest;
        dest = index;
        snapPage = false;
      }

      if (dest < 0 || dest > endIndex) {
        if (!perMove && (between(0, dest, from, true) || between(endIndex, from, dest, true))) {
          dest = toIndex(toPage(dest));
        } else {
          if (isLoop) {
            dest = snapPage ? dest < 0 ? -(slideCount % perPage || perPage) : slideCount : dest;
          } else if (options.rewind) {
            dest = dest < 0 ? endIndex : 0;
          } else {
            dest = -1;
          }
        }
      } else {
        if (snapPage && dest !== from) {
          dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
        }
      }
    } else {
      dest = -1;
    }

    return dest;
  }

  function computeMovableDestIndex(dest) {
    if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
      var position = getPosition();

      while (position === toPosition(dest, true) && between(dest, 0, Splide2.length - 1, !options.rewind)) {
        dest < currIndex ? --dest : ++dest;
      }
    }

    return dest;
  }

  function loop(index) {
    return isLoop ? (index + slideCount) % slideCount || 0 : index;
  }

  function getEnd() {
    var end = slideCount - (hasFocus() || isLoop && perMove ? 1 : perPage);

    while (omitEnd && end-- > 0) {
      if (toPosition(slideCount - 1, true) !== toPosition(end, true)) {
        end++;
        break;
      }
    }

    return clamp(end, 0, slideCount - 1);
  }

  function toIndex(page) {
    return clamp(hasFocus() ? page : perPage * page, 0, endIndex);
  }

  function toPage(index) {
    return hasFocus() ? min(index, endIndex) : floor((index >= endIndex ? slideCount - 1 : index) / perPage);
  }

  function toDest(destination) {
    var closest = Move.toIndex(destination);
    return isSlide ? clamp(closest, 0, endIndex) : closest;
  }

  function setIndex(index) {
    if (index !== currIndex) {
      prevIndex = currIndex;
      currIndex = index;
    }
  }

  function getIndex(prev) {
    return prev ? prevIndex : currIndex;
  }

  function hasFocus() {
    return !isUndefined(options.focus) || options.isNavigation;
  }

  function isBusy() {
    return Splide2.state.is([MOVING, SCROLLING]) && !!options.waitForTransition;
  }

  return {
    mount: mount,
    go: go,
    scroll: scroll,
    getNext: getNext,
    getPrev: getPrev,
    getAdjacent: getAdjacent,
    getEnd: getEnd,
    setIndex: setIndex,
    getIndex: getIndex,
    toIndex: toIndex,
    toPage: toPage,
    toDest: toDest,
    hasFocus: hasFocus,
    isBusy: isBusy
  };
}

var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
var PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
var SIZE = 40;

function Arrows(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on,
      bind = event.bind,
      emit = event.emit;
  var classes = options.classes,
      i18n = options.i18n;
  var Elements = Components2.Elements,
      Controller = Components2.Controller;
  var placeholder = Elements.arrows,
      track = Elements.track;
  var wrapper = placeholder;
  var prev = Elements.prev;
  var next = Elements.next;
  var created;
  var wrapperClasses;
  var arrows = {};

  function mount() {
    init();
    on(EVENT_UPDATED, remount);
  }

  function remount() {
    destroy();
    mount();
  }

  function init() {
    var enabled = options.arrows;

    if (enabled && !(prev && next)) {
      createArrows();
    }

    if (prev && next) {
      assign(arrows, {
        prev: prev,
        next: next
      });
      display(wrapper, enabled ? "" : "none");
      addClass(wrapper, wrapperClasses = CLASS_ARROWS + "--" + options.direction);

      if (enabled) {
        listen();
        update();
        setAttribute([prev, next], ARIA_CONTROLS, track.id);
        emit(EVENT_ARROWS_MOUNTED, prev, next);
      }
    }
  }

  function destroy() {
    event.destroy();
    removeClass(wrapper, wrapperClasses);

    if (created) {
      remove(placeholder ? [prev, next] : wrapper);
      prev = next = null;
    } else {
      removeAttribute([prev, next], ALL_ATTRIBUTES);
    }
  }

  function listen() {
    on([EVENT_MOUNTED, EVENT_MOVED, EVENT_REFRESH, EVENT_SCROLLED, EVENT_END_INDEX_CHANGED], update);
    bind(next, "click", apply(go, ">"));
    bind(prev, "click", apply(go, "<"));
  }

  function go(control) {
    Controller.go(control, true);
  }

  function createArrows() {
    wrapper = placeholder || create("div", classes.arrows);
    prev = createArrow(true);
    next = createArrow(false);
    created = true;
    append(wrapper, [prev, next]);
    !placeholder && before(wrapper, track);
  }

  function createArrow(prev2) {
    var arrow = "<button class=\"" + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + "\" type=\"button\"><svg xmlns=\"" + XML_NAME_SPACE + "\" viewBox=\"0 0 " + SIZE + " " + SIZE + "\" width=\"" + SIZE + "\" height=\"" + SIZE + "\" focusable=\"false\"><path d=\"" + (options.arrowPath || PATH) + "\" />";
    return parseHtml(arrow);
  }

  function update() {
    if (prev && next) {
      var index = Splide2.index;
      var prevIndex = Controller.getPrev();
      var nextIndex = Controller.getNext();
      var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
      var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
      prev.disabled = prevIndex < 0;
      next.disabled = nextIndex < 0;
      setAttribute(prev, ARIA_LABEL, prevLabel);
      setAttribute(next, ARIA_LABEL, nextLabel);
      emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
    }
  }

  return {
    arrows: arrows,
    mount: mount,
    destroy: destroy,
    update: update
  };
}

var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";

function Autoplay(Splide2, Components2, options) {
  var _EventInterface6 = EventInterface(Splide2),
      on = _EventInterface6.on,
      bind = _EventInterface6.bind,
      emit = _EventInterface6.emit;

  var interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), onAnimationFrame);
  var isPaused = interval.isPaused;
  var Elements = Components2.Elements,
      _Components2$Elements4 = Components2.Elements,
      root = _Components2$Elements4.root,
      toggle = _Components2$Elements4.toggle;
  var autoplay = options.autoplay;
  var hovered;
  var focused;
  var stopped = autoplay === "pause";

  function mount() {
    if (autoplay) {
      listen();
      toggle && setAttribute(toggle, ARIA_CONTROLS, Elements.track.id);
      stopped || play();
      update();
    }
  }

  function listen() {
    if (options.pauseOnHover) {
      bind(root, "mouseenter mouseleave", function (e) {
        hovered = e.type === "mouseenter";
        autoToggle();
      });
    }

    if (options.pauseOnFocus) {
      bind(root, "focusin focusout", function (e) {
        focused = e.type === "focusin";
        autoToggle();
      });
    }

    if (toggle) {
      bind(toggle, "click", function () {
        stopped ? play() : pause(true);
      });
    }

    on([EVENT_MOVE, EVENT_SCROLL, EVENT_REFRESH], interval.rewind);
    on(EVENT_MOVE, onMove);
  }

  function play() {
    if (isPaused() && Components2.Slides.isEnough()) {
      interval.start(!options.resetProgress);
      focused = hovered = stopped = false;
      update();
      emit(EVENT_AUTOPLAY_PLAY);
    }
  }

  function pause(stop) {
    if (stop === void 0) {
      stop = true;
    }

    stopped = !!stop;
    update();

    if (!isPaused()) {
      interval.pause();
      emit(EVENT_AUTOPLAY_PAUSE);
    }
  }

  function autoToggle() {
    if (!stopped) {
      hovered || focused ? pause(false) : play();
    }
  }

  function update() {
    if (toggle) {
      toggleClass(toggle, CLASS_ACTIVE, !stopped);
      setAttribute(toggle, ARIA_LABEL, options.i18n[stopped ? "play" : "pause"]);
    }
  }

  function onAnimationFrame(rate) {
    var bar = Elements.bar;
    bar && style(bar, "width", rate * 100 + "%");
    emit(EVENT_AUTOPLAY_PLAYING, rate);
  }

  function onMove(index) {
    var Slide = Components2.Slides.getAt(index);
    interval.set(Slide && +getAttribute(Slide.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
  }

  return {
    mount: mount,
    destroy: interval.cancel,
    play: play,
    pause: pause,
    isPaused: isPaused
  };
}

function Cover(Splide2, Components2, options) {
  var _EventInterface7 = EventInterface(Splide2),
      on = _EventInterface7.on;

  function mount() {
    if (options.cover) {
      on(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
      on([EVENT_MOUNTED, EVENT_UPDATED, EVENT_REFRESH], apply(cover, true));
    }
  }

  function cover(cover2) {
    Components2.Slides.forEach(function (Slide) {
      var img = child(Slide.container || Slide.slide, "img");

      if (img && img.src) {
        toggle(cover2, img, Slide);
      }
    });
  }

  function toggle(cover2, img, Slide) {
    Slide.style("background", cover2 ? "center/cover no-repeat url(\"" + img.src + "\")" : "", true);
    display(img, cover2 ? "none" : "");
  }

  return {
    mount: mount,
    destroy: apply(cover, false)
  };
}

var BOUNCE_DIFF_THRESHOLD = 10;
var BOUNCE_DURATION = 600;
var FRICTION_FACTOR = 0.6;
var BASE_VELOCITY = 1.5;
var MIN_DURATION = 800;

function Scroll(Splide2, Components2, options) {
  var _EventInterface8 = EventInterface(Splide2),
      on = _EventInterface8.on,
      emit = _EventInterface8.emit;

  var set = Splide2.state.set;
  var Move = Components2.Move;
  var getPosition = Move.getPosition,
      getLimit = Move.getLimit,
      exceededLimit = Move.exceededLimit,
      translate = Move.translate;
  var isSlide = Splide2.is(SLIDE);
  var interval;
  var callback;
  var friction = 1;

  function mount() {
    on(EVENT_MOVE, clear);
    on([EVENT_UPDATED, EVENT_REFRESH], cancel);
  }

  function scroll(destination, duration, snap, onScrolled, noConstrain) {
    var from = getPosition();
    clear();

    if (snap && (!isSlide || !exceededLimit())) {
      var size = Components2.Layout.sliderSize();
      var offset = sign(destination) * size * floor(abs(destination) / size) || 0;
      destination = Move.toPosition(Components2.Controller.toDest(destination % size)) + offset;
    }

    var noDistance = approximatelyEqual(from, destination, 1);
    friction = 1;
    duration = noDistance ? 0 : duration || max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
    callback = onScrolled;
    interval = RequestInterval(duration, onEnd, apply(update, from, destination, noConstrain), 1);
    set(SCROLLING);
    emit(EVENT_SCROLL);
    interval.start();
  }

  function onEnd() {
    set(IDLE);
    callback && callback();
    emit(EVENT_SCROLLED);
  }

  function update(from, to, noConstrain, rate) {
    var position = getPosition();
    var target = from + (to - from) * easing(rate);
    var diff = (target - position) * friction;
    translate(position + diff);

    if (isSlide && !noConstrain && exceededLimit()) {
      friction *= FRICTION_FACTOR;

      if (abs(diff) < BOUNCE_DIFF_THRESHOLD) {
        scroll(getLimit(exceededLimit(true)), BOUNCE_DURATION, false, callback, true);
      }
    }
  }

  function clear() {
    if (interval) {
      interval.cancel();
    }
  }

  function cancel() {
    if (interval && !interval.isPaused()) {
      clear();
      onEnd();
    }
  }

  function easing(t) {
    var easingFunc = options.easingFunc;
    return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
  }

  return {
    mount: mount,
    destroy: clear,
    scroll: scroll,
    cancel: cancel
  };
}

var SCROLL_LISTENER_OPTIONS = {
  passive: false,
  capture: true
};

function Drag(Splide2, Components2, options) {
  var _EventInterface9 = EventInterface(Splide2),
      on = _EventInterface9.on,
      emit = _EventInterface9.emit,
      bind = _EventInterface9.bind,
      unbind = _EventInterface9.unbind;

  var state = Splide2.state;
  var Move = Components2.Move,
      Scroll = Components2.Scroll,
      Controller = Components2.Controller,
      track = Components2.Elements.track,
      reduce = Components2.Media.reduce;
  var _Components2$Directio2 = Components2.Direction,
      resolve = _Components2$Directio2.resolve,
      orient = _Components2$Directio2.orient;
  var getPosition = Move.getPosition,
      exceededLimit = Move.exceededLimit;
  var basePosition;
  var baseEvent;
  var prevBaseEvent;
  var isFree;
  var dragging;
  var exceeded = false;
  var clickPrevented;
  var disabled;
  var target;

  function mount() {
    bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
    bind(track, "click", onClick, {
      capture: true
    });
    bind(track, "dragstart", prevent);
    on([EVENT_MOUNTED, EVENT_UPDATED], init);
  }

  function init() {
    var drag = options.drag;
    disable(!drag);
    isFree = drag === "free";
  }

  function onPointerDown(e) {
    clickPrevented = false;

    if (!disabled) {
      var isTouch = isTouchEvent(e);

      if (isDraggable(e.target) && (isTouch || !e.button)) {
        if (!Controller.isBusy()) {
          target = isTouch ? track : window;
          dragging = state.is([MOVING, SCROLLING]);
          prevBaseEvent = null;
          bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
          bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
          Move.cancel();
          Scroll.cancel();
          save(e);
        } else {
          prevent(e, true);
        }
      }
    }
  }

  function onPointerMove(e) {
    if (!state.is(DRAGGING)) {
      state.set(DRAGGING);
      emit(EVENT_DRAG);
    }

    if (e.cancelable) {
      if (dragging) {
        Move.translate(basePosition + constrain(diffCoord(e)));
        var expired = diffTime(e) > LOG_INTERVAL;
        var hasExceeded = exceeded !== (exceeded = exceededLimit());

        if (expired || hasExceeded) {
          save(e);
        }

        clickPrevented = true;
        emit(EVENT_DRAGGING);
        prevent(e);
      } else if (isSliderDirection(e)) {
        dragging = shouldStart(e);
        prevent(e);
      }
    }
  }

  function onPointerUp(e) {
    if (state.is(DRAGGING)) {
      state.set(IDLE);
      emit(EVENT_DRAGGED);
    }

    if (dragging) {
      move(e);
      prevent(e);
    }

    unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
    unbind(target, POINTER_UP_EVENTS, onPointerUp);
    dragging = false;
  }

  function onClick(e) {
    if (!disabled && clickPrevented) {
      prevent(e, true);
    }
  }

  function save(e) {
    prevBaseEvent = baseEvent;
    baseEvent = e;
    basePosition = getPosition();
  }

  function move(e) {
    var velocity = computeVelocity(e);
    var destination = computeDestination(velocity);
    var rewind = options.rewind && options.rewindByDrag;
    reduce(false);

    if (isFree) {
      Controller.scroll(destination, 0, options.snap);
    } else if (Splide2.is(FADE)) {
      Controller.go(orient(sign(velocity)) < 0 ? rewind ? "<" : "-" : rewind ? ">" : "+");
    } else if (Splide2.is(SLIDE) && exceeded && rewind) {
      Controller.go(exceededLimit(true) ? ">" : "<");
    } else {
      Controller.go(Controller.toDest(destination), true);
    }

    reduce(true);
  }

  function shouldStart(e) {
    var thresholds = options.dragMinThreshold;
    var isObj = isObject(thresholds);
    var mouse = isObj && thresholds.mouse || 0;
    var touch = (isObj ? thresholds.touch : +thresholds) || 10;
    return abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
  }

  function isSliderDirection(e) {
    return abs(diffCoord(e)) > abs(diffCoord(e, true));
  }

  function computeVelocity(e) {
    if (Splide2.is(LOOP) || !exceeded) {
      var time = diffTime(e);

      if (time && time < LOG_INTERVAL) {
        return diffCoord(e) / time;
      }
    }

    return 0;
  }

  function computeDestination(velocity) {
    return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
  }

  function diffCoord(e, orthogonal) {
    return coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal);
  }

  function diffTime(e) {
    return timeOf(e) - timeOf(getBaseEvent(e));
  }

  function getBaseEvent(e) {
    return baseEvent === e && prevBaseEvent || baseEvent;
  }

  function coordOf(e, orthogonal) {
    return (isTouchEvent(e) ? e.changedTouches[0] : e)["page" + resolve(orthogonal ? "Y" : "X")];
  }

  function constrain(diff) {
    return diff / (exceeded && Splide2.is(SLIDE) ? FRICTION : 1);
  }

  function isDraggable(target2) {
    var noDrag = options.noDrag;
    return !matches(target2, "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW) && (!noDrag || !matches(target2, noDrag));
  }

  function isTouchEvent(e) {
    return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
  }

  function isDragging() {
    return dragging;
  }

  function disable(value) {
    disabled = value;
  }

  return {
    mount: mount,
    disable: disable,
    isDragging: isDragging
  };
}

var NORMALIZATION_MAP = {
  Spacebar: " ",
  Right: ARROW_RIGHT,
  Left: ARROW_LEFT,
  Up: ARROW_UP,
  Down: ARROW_DOWN
};

function normalizeKey(key) {
  key = isString(key) ? key : key.key;
  return NORMALIZATION_MAP[key] || key;
}

var KEYBOARD_EVENT = "keydown";

function Keyboard(Splide2, Components2, options) {
  var _EventInterface10 = EventInterface(Splide2),
      on = _EventInterface10.on,
      bind = _EventInterface10.bind,
      unbind = _EventInterface10.unbind;

  var root = Splide2.root;
  var resolve = Components2.Direction.resolve;
  var target;
  var disabled;

  function mount() {
    init();
    on(EVENT_UPDATED, destroy);
    on(EVENT_UPDATED, init);
    on(EVENT_MOVE, onMove);
  }

  function init() {
    var keyboard = options.keyboard;

    if (keyboard) {
      target = keyboard === "global" ? window : root;
      bind(target, KEYBOARD_EVENT, onKeydown);
    }
  }

  function destroy() {
    unbind(target, KEYBOARD_EVENT);
  }

  function disable(value) {
    disabled = value;
  }

  function onMove() {
    var _disabled = disabled;
    disabled = true;
    nextTick(function () {
      disabled = _disabled;
    });
  }

  function onKeydown(e) {
    if (!disabled) {
      var key = normalizeKey(e);

      if (key === resolve(ARROW_LEFT)) {
        Splide2.go("<");
      } else if (key === resolve(ARROW_RIGHT)) {
        Splide2.go(">");
      }
    }
  }

  return {
    mount: mount,
    destroy: destroy,
    disable: disable
  };
}

var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
var IMAGE_SELECTOR = "[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";

function LazyLoad(Splide2, Components2, options) {
  var _EventInterface11 = EventInterface(Splide2),
      on = _EventInterface11.on,
      off = _EventInterface11.off,
      bind = _EventInterface11.bind,
      emit = _EventInterface11.emit;

  var isSequential = options.lazyLoad === "sequential";
  var events = [EVENT_MOVED, EVENT_SCROLLED];
  var entries = [];

  function mount() {
    if (options.lazyLoad) {
      init();
      on(EVENT_REFRESH, init);
    }
  }

  function init() {
    empty(entries);
    register();

    if (isSequential) {
      loadNext();
    } else {
      off(events);
      on(events, check);
      check();
    }
  }

  function register() {
    Components2.Slides.forEach(function (Slide) {
      queryAll(Slide.slide, IMAGE_SELECTOR).forEach(function (img) {
        var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
        var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);

        if (src !== img.src || srcset !== img.srcset) {
          var className = options.classes.spinner;
          var parent = img.parentElement;
          var spinner = child(parent, "." + className) || create("span", className, parent);
          entries.push([img, Slide, spinner]);
          img.src || display(img, "none");
        }
      });
    });
  }

  function check() {
    entries = entries.filter(function (data) {
      var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
      return data[1].isWithin(Splide2.index, distance) ? load(data) : true;
    });
    entries.length || off(events);
  }

  function load(data) {
    var img = data[0];
    addClass(data[1].slide, CLASS_LOADING);
    bind(img, "load error", apply(onLoad, data));
    setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
    setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_ATTRIBUTE));
    removeAttribute(img, SRC_DATA_ATTRIBUTE);
    removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
  }

  function onLoad(data, e) {
    var img = data[0],
        Slide = data[1];
    removeClass(Slide.slide, CLASS_LOADING);

    if (e.type !== "error") {
      remove(data[2]);
      display(img, "");
      emit(EVENT_LAZYLOAD_LOADED, img, Slide);
      emit(EVENT_RESIZE);
    }

    isSequential && loadNext();
  }

  function loadNext() {
    entries.length && load(entries.shift());
  }

  return {
    mount: mount,
    destroy: apply(empty, entries),
    check: check
  };
}

function Pagination(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on,
      emit = event.emit,
      bind = event.bind;
  var Slides = Components2.Slides,
      Elements = Components2.Elements,
      Controller = Components2.Controller;
  var hasFocus = Controller.hasFocus,
      getIndex = Controller.getIndex,
      go = Controller.go;
  var resolve = Components2.Direction.resolve;
  var placeholder = Elements.pagination;
  var items = [];
  var list;
  var paginationClasses;

  function mount() {
    destroy();
    on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], mount);
    var enabled = options.pagination;
    placeholder && display(placeholder, enabled ? "" : "none");

    if (enabled) {
      on([EVENT_MOVE, EVENT_SCROLL, EVENT_SCROLLED], update);
      createPagination();
      update();
      emit(EVENT_PAGINATION_MOUNTED, {
        list: list,
        items: items
      }, getAt(Splide2.index));
    }
  }

  function destroy() {
    if (list) {
      remove(placeholder ? slice(list.children) : list);
      removeClass(list, paginationClasses);
      empty(items);
      list = null;
    }

    event.destroy();
  }

  function createPagination() {
    var length = Splide2.length;
    var classes = options.classes,
        i18n = options.i18n,
        perPage = options.perPage;
    var max = hasFocus() ? Controller.getEnd() + 1 : ceil(length / perPage);
    list = placeholder || create("ul", classes.pagination, Elements.track.parentElement);
    addClass(list, paginationClasses = CLASS_PAGINATION + "--" + getDirection());
    setAttribute(list, ROLE, "tablist");
    setAttribute(list, ARIA_LABEL, i18n.select);
    setAttribute(list, ARIA_ORIENTATION, getDirection() === TTB ? "vertical" : "");

    for (var i = 0; i < max; i++) {
      var li = create("li", null, list);
      var button = create("button", {
        class: classes.page,
        type: "button"
      }, li);
      var controls = Slides.getIn(i).map(function (Slide) {
        return Slide.slide.id;
      });
      var text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
      bind(button, "click", apply(onClick, i));

      if (options.paginationKeyboard) {
        bind(button, "keydown", apply(onKeydown, i));
      }

      setAttribute(li, ROLE, "presentation");
      setAttribute(button, ROLE, "tab");
      setAttribute(button, ARIA_CONTROLS, controls.join(" "));
      setAttribute(button, ARIA_LABEL, format(text, i + 1));
      setAttribute(button, TAB_INDEX, -1);
      items.push({
        li: li,
        button: button,
        page: i
      });
    }
  }

  function onClick(page) {
    go(">" + page, true);
  }

  function onKeydown(page, e) {
    var length = items.length;
    var key = normalizeKey(e);
    var dir = getDirection();
    var nextPage = -1;

    if (key === resolve(ARROW_RIGHT, false, dir)) {
      nextPage = ++page % length;
    } else if (key === resolve(ARROW_LEFT, false, dir)) {
      nextPage = (--page + length) % length;
    } else if (key === "Home") {
      nextPage = 0;
    } else if (key === "End") {
      nextPage = length - 1;
    }

    var item = items[nextPage];

    if (item) {
      focus(item.button);
      go(">" + nextPage);
      prevent(e, true);
    }
  }

  function getDirection() {
    return options.paginationDirection || options.direction;
  }

  function getAt(index) {
    return items[Controller.toPage(index)];
  }

  function update() {
    var prev = getAt(getIndex(true));
    var curr = getAt(getIndex());

    if (prev) {
      var button = prev.button;
      removeClass(button, CLASS_ACTIVE);
      removeAttribute(button, ARIA_SELECTED);
      setAttribute(button, TAB_INDEX, -1);
    }

    if (curr) {
      var _button = curr.button;
      addClass(_button, CLASS_ACTIVE);
      setAttribute(_button, ARIA_SELECTED, true);
      setAttribute(_button, TAB_INDEX, "");
    }

    emit(EVENT_PAGINATION_UPDATED, {
      list: list,
      items: items
    }, prev, curr);
  }

  return {
    items: items,
    mount: mount,
    destroy: destroy,
    getAt: getAt,
    update: update
  };
}

var TRIGGER_KEYS = [" ", "Enter"];

function Sync(Splide2, Components2, options) {
  var isNavigation = options.isNavigation,
      slideFocus = options.slideFocus;
  var events = [];

  function mount() {
    Splide2.splides.forEach(function (target) {
      if (!target.isParent) {
        sync(Splide2, target.splide);
        sync(target.splide, Splide2);
      }
    });

    if (isNavigation) {
      navigate();
    }
  }

  function destroy() {
    events.forEach(function (event) {
      event.destroy();
    });
    empty(events);
  }

  function remount() {
    destroy();
    mount();
  }

  function sync(splide, target) {
    var event = EventInterface(splide);
    event.on(EVENT_MOVE, function (index, prev, dest) {
      target.go(target.is(LOOP) ? dest : index);
    });
    events.push(event);
  }

  function navigate() {
    var event = EventInterface(Splide2);
    var on = event.on;
    on(EVENT_CLICK, onClick);
    on(EVENT_SLIDE_KEYDOWN, onKeydown);
    on([EVENT_MOUNTED, EVENT_UPDATED], update);
    events.push(event);
    event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
  }

  function update() {
    setAttribute(Components2.Elements.list, ARIA_ORIENTATION, options.direction === TTB ? "vertical" : "");
  }

  function onClick(Slide) {
    Splide2.go(Slide.index);
  }

  function onKeydown(Slide, e) {
    if (includes(TRIGGER_KEYS, normalizeKey(e))) {
      onClick(Slide);
      prevent(e);
    }
  }

  return {
    setup: apply(Components2.Media.set, {
      slideFocus: isUndefined(slideFocus) ? isNavigation : slideFocus
    }, true),
    mount: mount,
    destroy: destroy,
    remount: remount
  };
}

function Wheel(Splide2, Components2, options) {
  var _EventInterface12 = EventInterface(Splide2),
      bind = _EventInterface12.bind;

  var lastTime = 0;

  function mount() {
    if (options.wheel) {
      bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
    }
  }

  function onWheel(e) {
    if (e.cancelable) {
      var deltaY = e.deltaY;
      var backwards = deltaY < 0;
      var timeStamp = timeOf(e);

      var _min = options.wheelMinThreshold || 0;

      var sleep = options.wheelSleep || 0;

      if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
        Splide2.go(backwards ? "<" : ">");
        lastTime = timeStamp;
      }

      shouldPrevent(backwards) && prevent(e);
    }
  }

  function shouldPrevent(backwards) {
    return !options.releaseWheel || Splide2.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
  }

  return {
    mount: mount
  };
}

var SR_REMOVAL_DELAY = 90;

function Live(Splide2, Components2, options) {
  var _EventInterface13 = EventInterface(Splide2),
      on = _EventInterface13.on;

  var track = Components2.Elements.track;
  var enabled = options.live && !options.isNavigation;
  var sr = create("span", CLASS_SR);
  var interval = RequestInterval(SR_REMOVAL_DELAY, apply(toggle, false));

  function mount() {
    if (enabled) {
      disable(!Components2.Autoplay.isPaused());
      setAttribute(track, ARIA_ATOMIC, true);
      sr.textContent = "\u2026";
      on(EVENT_AUTOPLAY_PLAY, apply(disable, true));
      on(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
      on([EVENT_MOVED, EVENT_SCROLLED], apply(toggle, true));
    }
  }

  function toggle(active) {
    setAttribute(track, ARIA_BUSY, active);

    if (active) {
      append(track, sr);
      interval.start();
    } else {
      remove(sr);
      interval.cancel();
    }
  }

  function destroy() {
    removeAttribute(track, [ARIA_LIVE, ARIA_ATOMIC, ARIA_BUSY]);
    remove(sr);
  }

  function disable(disabled) {
    if (enabled) {
      setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
    }
  }

  return {
    mount: mount,
    disable: disable,
    destroy: destroy
  };
}

var ComponentConstructors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Media: Media,
  Direction: Direction,
  Elements: Elements,
  Slides: Slides,
  Layout: Layout,
  Clones: Clones,
  Move: Move,
  Controller: Controller,
  Arrows: Arrows,
  Autoplay: Autoplay,
  Cover: Cover,
  Scroll: Scroll,
  Drag: Drag,
  Keyboard: Keyboard,
  LazyLoad: LazyLoad,
  Pagination: Pagination,
  Sync: Sync,
  Wheel: Wheel,
  Live: Live
});
var I18N = {
  prev: "Previous slide",
  next: "Next slide",
  first: "Go to first slide",
  last: "Go to last slide",
  slideX: "Go to slide %s",
  pageX: "Go to page %s",
  play: "Start autoplay",
  pause: "Pause autoplay",
  carousel: "carousel",
  slide: "slide",
  select: "Select a slide to show",
  slideLabel: "%s of %s"
};
var DEFAULTS = {
  type: "slide",
  role: "region",
  speed: 400,
  perPage: 1,
  cloneStatus: true,
  arrows: true,
  pagination: true,
  paginationKeyboard: true,
  interval: 5e3,
  pauseOnHover: true,
  pauseOnFocus: true,
  resetProgress: true,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  drag: true,
  direction: "ltr",
  trimSpace: true,
  focusableNodes: "a, button, textarea, input, select, iframe",
  live: true,
  classes: CLASSES,
  i18n: I18N,
  reducedMotion: {
    speed: 0,
    rewindSpeed: 0,
    autoplay: "pause"
  }
};

function Fade(Splide2, Components2, options) {
  var Slides = Components2.Slides;

  function mount() {
    EventInterface(Splide2).on([EVENT_MOUNTED, EVENT_REFRESH], init);
  }

  function init() {
    Slides.forEach(function (Slide) {
      Slide.style("transform", "translateX(-" + 100 * Slide.index + "%)");
    });
  }

  function start(index, done) {
    Slides.style("transition", "opacity " + options.speed + "ms " + options.easing);
    nextTick(done);
  }

  return {
    mount: mount,
    start: start,
    cancel: noop
  };
}

function Slide(Splide2, Components2, options) {
  var Move = Components2.Move,
      Controller = Components2.Controller,
      Scroll = Components2.Scroll;
  var list = Components2.Elements.list;
  var transition = apply(style, list, "transition");
  var endCallback;

  function mount() {
    EventInterface(Splide2).bind(list, "transitionend", function (e) {
      if (e.target === list && endCallback) {
        cancel();
        endCallback();
      }
    });
  }

  function start(index, done) {
    var destination = Move.toPosition(index, true);
    var position = Move.getPosition();
    var speed = getSpeed(index);

    if (abs(destination - position) >= 1 && speed >= 1) {
      if (options.useScroll) {
        Scroll.scroll(destination, speed, false, done);
      } else {
        transition("transform " + speed + "ms " + options.easing);
        Move.translate(destination, true);
        endCallback = done;
      }
    } else {
      Move.jump(index);
      done();
    }
  }

  function cancel() {
    transition("");
    Scroll.cancel();
  }

  function getSpeed(index) {
    var rewindSpeed = options.rewindSpeed;

    if (Splide2.is(SLIDE) && rewindSpeed) {
      var prev = Controller.getIndex(true);
      var end = Controller.getEnd();

      if (prev === 0 && index >= end || prev >= end && index === 0) {
        return rewindSpeed;
      }
    }

    return options.speed;
  }

  return {
    mount: mount,
    start: start,
    cancel: cancel
  };
}

var _Splide = /*#__PURE__*/function () {
  function _Splide(target, options) {
    this.event = EventInterface();
    this.Components = {};
    this.state = State(CREATED);
    this.splides = [];
    this._o = {};
    this._E = {};
    var root = isString(target) ? query(document, target) : target;
    assert(root, root + " is invalid.");
    this.root = root;
    options = merge({
      label: getAttribute(root, ARIA_LABEL) || "",
      labelledby: getAttribute(root, ARIA_LABELLEDBY) || ""
    }, DEFAULTS, _Splide.defaults, options || {});

    try {
      merge(options, JSON.parse(getAttribute(root, DATA_ATTRIBUTE)));
    } catch (e) {
      assert(false, "Invalid JSON");
    }

    this._o = Object.create(merge({}, options));
  }

  var _proto = _Splide.prototype;

  _proto.mount = function mount(Extensions, Transition) {
    var _this = this;

    var state = this.state,
        Components2 = this.Components;
    assert(state.is([CREATED, DESTROYED]), "Already mounted!");
    state.set(CREATED);
    this._C = Components2;
    this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
    this._E = Extensions || this._E;
    var Constructors = assign({}, ComponentConstructors, this._E, {
      Transition: this._T
    });
    forOwn(Constructors, function (Component, key) {
      var component = Component(_this, Components2, _this._o);
      Components2[key] = component;
      component.setup && component.setup();
    });
    forOwn(Components2, function (component) {
      component.mount && component.mount();
    });
    this.emit(EVENT_MOUNTED);
    addClass(this.root, CLASS_INITIALIZED);
    state.set(IDLE);
    this.emit(EVENT_READY);
    return this;
  };

  _proto.sync = function sync(splide) {
    this.splides.push({
      splide: splide
    });
    splide.splides.push({
      splide: this,
      isParent: true
    });

    if (this.state.is(IDLE)) {
      this._C.Sync.remount();

      splide.Components.Sync.remount();
    }

    return this;
  };

  _proto.go = function go(control) {
    this._C.Controller.go(control);

    return this;
  };

  _proto.on = function on(events, callback) {
    this.event.on(events, callback);
    return this;
  };

  _proto.off = function off(events) {
    this.event.off(events);
    return this;
  };

  _proto.emit = function emit(event) {
    var _this$event;

    (_this$event = this.event).emit.apply(_this$event, [event].concat(slice(arguments, 1)));

    return this;
  };

  _proto.add = function add(slides, index) {
    this._C.Slides.add(slides, index);

    return this;
  };

  _proto.remove = function remove(matcher) {
    this._C.Slides.remove(matcher);

    return this;
  };

  _proto.is = function is(type) {
    return this._o.type === type;
  };

  _proto.refresh = function refresh() {
    this.emit(EVENT_REFRESH);
    return this;
  };

  _proto.destroy = function destroy(completely) {
    if (completely === void 0) {
      completely = true;
    }

    var event = this.event,
        state = this.state;

    if (state.is(CREATED)) {
      EventInterface(this).on(EVENT_READY, this.destroy.bind(this, completely));
    } else {
      forOwn(this._C, function (component) {
        component.destroy && component.destroy(completely);
      }, true);
      event.emit(EVENT_DESTROY);
      event.destroy();
      completely && empty(this.splides);
      state.set(DESTROYED);
    }

    return this;
  };

  _createClass(_Splide, [{
    key: "options",
    get: function get() {
      return this._o;
    },
    set: function set(options) {
      this._C.Media.set(options, true, true);
    }
  }, {
    key: "length",
    get: function get() {
      return this._C.Slides.getLength(true);
    }
  }, {
    key: "index",
    get: function get() {
      return this._C.Controller.getIndex();
    }
  }]);

  return _Splide;
}();

var Splide = _Splide;
Splide.defaults = {};
Splide.STATES = STATES;
var CLASS_RENDERED = "is-rendered";
var RENDERER_DEFAULT_CONFIG = {
  listTag: "ul",
  slideTag: "li"
};

var Style = /*#__PURE__*/function () {
  function Style(id, options) {
    this.styles = {};
    this.id = id;
    this.options = options;
  }

  var _proto2 = Style.prototype;

  _proto2.rule = function rule(selector, prop, value, breakpoint) {
    breakpoint = breakpoint || "default";
    var selectors = this.styles[breakpoint] = this.styles[breakpoint] || {};
    var styles = selectors[selector] = selectors[selector] || {};
    styles[prop] = value;
  };

  _proto2.build = function build() {
    var _this2 = this;

    var css = "";

    if (this.styles.default) {
      css += this.buildSelectors(this.styles.default);
    }

    Object.keys(this.styles).sort(function (n, m) {
      return _this2.options.mediaQuery === "min" ? +n - +m : +m - +n;
    }).forEach(function (breakpoint) {
      if (breakpoint !== "default") {
        css += "@media screen and (max-width: " + breakpoint + "px) {";
        css += _this2.buildSelectors(_this2.styles[breakpoint]);
        css += "}";
      }
    });
    return css;
  };

  _proto2.buildSelectors = function buildSelectors(selectors) {
    var _this3 = this;

    var css = "";
    forOwn(selectors, function (styles, selector) {
      selector = ("#" + _this3.id + " " + selector).trim();
      css += selector + " {";
      forOwn(styles, function (value, prop) {
        if (value || value === 0) {
          css += prop + ": " + value + ";";
        }
      });
      css += "}";
    });
    return css;
  };

  return Style;
}();

var SplideRenderer = /*#__PURE__*/function () {
  function SplideRenderer(contents, options, config, defaults) {
    this.slides = [];
    this.options = {};
    this.breakpoints = [];
    merge(DEFAULTS, defaults || {});
    merge(merge(this.options, DEFAULTS), options || {});
    this.contents = contents;
    this.config = assign({}, RENDERER_DEFAULT_CONFIG, config || {});
    this.id = this.config.id || uniqueId("splide");
    this.Style = new Style(this.id, this.options);
    this.Direction = Direction(null, null, this.options);
    assert(this.contents.length, "Provide at least 1 content.");
    this.init();
  }

  SplideRenderer.clean = function clean(splide) {
    var _EventInterface14 = EventInterface(splide),
        on = _EventInterface14.on;

    var root = splide.root;
    var clones = queryAll(root, "." + CLASS_CLONE);
    on(EVENT_MOUNTED, function () {
      remove(child(root, "style"));
    });
    remove(clones);
  };

  var _proto3 = SplideRenderer.prototype;

  _proto3.init = function init() {
    this.parseBreakpoints();
    this.initSlides();
    this.registerRootStyles();
    this.registerTrackStyles();
    this.registerSlideStyles();
    this.registerListStyles();
  };

  _proto3.initSlides = function initSlides() {
    var _this4 = this;

    push(this.slides, this.contents.map(function (content, index) {
      content = isString(content) ? {
        html: content
      } : content;
      content.styles = content.styles || {};
      content.attrs = content.attrs || {};

      _this4.cover(content);

      var classes = _this4.options.classes.slide + " " + (index === 0 ? CLASS_ACTIVE : "");
      assign(content.attrs, {
        class: (classes + " " + (content.attrs.class || "")).trim(),
        style: _this4.buildStyles(content.styles)
      });
      return content;
    }));

    if (this.isLoop()) {
      this.generateClones(this.slides);
    }
  };

  _proto3.registerRootStyles = function registerRootStyles() {
    var _this5 = this;

    this.breakpoints.forEach(function (_ref2) {
      var width = _ref2[0],
          options = _ref2[1];

      _this5.Style.rule(" ", "max-width", unit(options.width), width);
    });
  };

  _proto3.registerTrackStyles = function registerTrackStyles() {
    var _this6 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_TRACK;
    this.breakpoints.forEach(function (_ref3) {
      var width = _ref3[0],
          options = _ref3[1];
      Style2.rule(selector, _this6.resolve("paddingLeft"), _this6.cssPadding(options, false), width);
      Style2.rule(selector, _this6.resolve("paddingRight"), _this6.cssPadding(options, true), width);
      Style2.rule(selector, "height", _this6.cssTrackHeight(options), width);
    });
  };

  _proto3.registerListStyles = function registerListStyles() {
    var _this7 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_LIST;
    this.breakpoints.forEach(function (_ref4) {
      var width = _ref4[0],
          options = _ref4[1];
      Style2.rule(selector, "transform", _this7.buildTranslate(options), width);

      if (!_this7.cssSlideHeight(options)) {
        Style2.rule(selector, "aspect-ratio", _this7.cssAspectRatio(options), width);
      }
    });
  };

  _proto3.registerSlideStyles = function registerSlideStyles() {
    var _this8 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_SLIDE;
    this.breakpoints.forEach(function (_ref5) {
      var width = _ref5[0],
          options = _ref5[1];
      Style2.rule(selector, "width", _this8.cssSlideWidth(options), width);
      Style2.rule(selector, "height", _this8.cssSlideHeight(options) || "100%", width);
      Style2.rule(selector, _this8.resolve("marginRight"), unit(options.gap) || "0px", width);
      Style2.rule(selector + " > img", "display", options.cover ? "none" : "inline", width);
    });
  };

  _proto3.buildTranslate = function buildTranslate(options) {
    var _this$Direction = this.Direction,
        resolve = _this$Direction.resolve,
        orient = _this$Direction.orient;
    var values = [];
    values.push(this.cssOffsetClones(options));
    values.push(this.cssOffsetGaps(options));

    if (this.isCenter(options)) {
      values.push(this.buildCssValue(orient(-50), "%"));
      values.push.apply(values, this.cssOffsetCenter(options));
    }

    return values.filter(Boolean).map(function (value) {
      return "translate" + resolve("X") + "(" + value + ")";
    }).join(" ");
  };

  _proto3.cssOffsetClones = function cssOffsetClones(options) {
    var _this$Direction2 = this.Direction,
        resolve = _this$Direction2.resolve,
        orient = _this$Direction2.orient;
    var cloneCount = this.getCloneCount();

    if (this.isFixedWidth(options)) {
      var _this$parseCssValue = this.parseCssValue(options[resolve("fixedWidth")]),
          value = _this$parseCssValue.value,
          unit2 = _this$parseCssValue.unit;

      return this.buildCssValue(orient(value) * cloneCount, unit2);
    }

    var percent = 100 * cloneCount / options.perPage;
    return orient(percent) + "%";
  };

  _proto3.cssOffsetCenter = function cssOffsetCenter(options) {
    var _this$Direction3 = this.Direction,
        resolve = _this$Direction3.resolve,
        orient = _this$Direction3.orient;

    if (this.isFixedWidth(options)) {
      var _this$parseCssValue2 = this.parseCssValue(options[resolve("fixedWidth")]),
          value = _this$parseCssValue2.value,
          unit2 = _this$parseCssValue2.unit;

      return [this.buildCssValue(orient(value / 2), unit2)];
    }

    var values = [];
    var perPage = options.perPage,
        gap = options.gap;
    values.push(orient(50 / perPage) + "%");

    if (gap) {
      var _this$parseCssValue3 = this.parseCssValue(gap),
          _value = _this$parseCssValue3.value,
          _unit = _this$parseCssValue3.unit;

      var gapOffset = (_value / perPage - _value) / 2;
      values.push(this.buildCssValue(orient(gapOffset), _unit));
    }

    return values;
  };

  _proto3.cssOffsetGaps = function cssOffsetGaps(options) {
    var cloneCount = this.getCloneCount();

    if (cloneCount && options.gap) {
      var orient = this.Direction.orient;

      var _this$parseCssValue4 = this.parseCssValue(options.gap),
          value = _this$parseCssValue4.value,
          unit2 = _this$parseCssValue4.unit;

      if (this.isFixedWidth(options)) {
        return this.buildCssValue(orient(value * cloneCount), unit2);
      }

      var perPage = options.perPage;
      var gaps = cloneCount / perPage;
      return this.buildCssValue(orient(gaps * value), unit2);
    }

    return "";
  };

  _proto3.resolve = function resolve(prop) {
    return camelToKebab(this.Direction.resolve(prop));
  };

  _proto3.cssPadding = function cssPadding(options, right) {
    var padding = options.padding;
    var prop = this.Direction.resolve(right ? "right" : "left", true);
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  };

  _proto3.cssTrackHeight = function cssTrackHeight(options) {
    var height = "";

    if (this.isVertical()) {
      height = this.cssHeight(options);
      assert(height, '"height" is missing.');
      height = "calc(" + height + " - " + this.cssPadding(options, false) + " - " + this.cssPadding(options, true) + ")";
    }

    return height;
  };

  _proto3.cssHeight = function cssHeight(options) {
    return unit(options.height);
  };

  _proto3.cssSlideWidth = function cssSlideWidth(options) {
    return options.autoWidth ? "" : unit(options.fixedWidth) || (this.isVertical() ? "" : this.cssSlideSize(options));
  };

  _proto3.cssSlideHeight = function cssSlideHeight(options) {
    return unit(options.fixedHeight) || (this.isVertical() ? options.autoHeight ? "" : this.cssSlideSize(options) : this.cssHeight(options));
  };

  _proto3.cssSlideSize = function cssSlideSize(options) {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  };

  _proto3.cssAspectRatio = function cssAspectRatio(options) {
    var heightRatio = options.heightRatio;
    return heightRatio ? "" + 1 / heightRatio : "";
  };

  _proto3.buildCssValue = function buildCssValue(value, unit2) {
    return "" + value + unit2;
  };

  _proto3.parseCssValue = function parseCssValue(value) {
    if (isString(value)) {
      var number = parseFloat(value) || 0;
      var unit2 = value.replace(/\d*(\.\d*)?/, "") || "px";
      return {
        value: number,
        unit: unit2
      };
    }

    return {
      value: value,
      unit: "px"
    };
  };

  _proto3.parseBreakpoints = function parseBreakpoints() {
    var _this9 = this;

    var breakpoints = this.options.breakpoints;
    this.breakpoints.push(["default", this.options]);

    if (breakpoints) {
      forOwn(breakpoints, function (options, width) {
        _this9.breakpoints.push([width, merge(merge({}, _this9.options), options)]);
      });
    }
  };

  _proto3.isFixedWidth = function isFixedWidth(options) {
    return !!options[this.Direction.resolve("fixedWidth")];
  };

  _proto3.isLoop = function isLoop() {
    return this.options.type === LOOP;
  };

  _proto3.isCenter = function isCenter(options) {
    if (options.focus === "center") {
      if (this.isLoop()) {
        return true;
      }

      if (this.options.type === SLIDE) {
        return !this.options.trimSpace;
      }
    }

    return false;
  };

  _proto3.isVertical = function isVertical() {
    return this.options.direction === TTB;
  };

  _proto3.buildClasses = function buildClasses() {
    var options = this.options;
    return [CLASS_ROOT, CLASS_ROOT + "--" + options.type, CLASS_ROOT + "--" + options.direction, options.drag && CLASS_ROOT + "--draggable", options.isNavigation && CLASS_ROOT + "--nav", CLASS_ACTIVE, !this.config.hidden && CLASS_RENDERED].filter(Boolean).join(" ");
  };

  _proto3.buildAttrs = function buildAttrs(attrs) {
    var attr = "";
    forOwn(attrs, function (value, key) {
      attr += value ? " " + camelToKebab(key) + "=\"" + value + "\"" : "";
    });
    return attr.trim();
  };

  _proto3.buildStyles = function buildStyles(styles) {
    var style = "";
    forOwn(styles, function (value, key) {
      style += " " + camelToKebab(key) + ":" + value + ";";
    });
    return style.trim();
  };

  _proto3.renderSlides = function renderSlides() {
    var _this10 = this;

    var tag = this.config.slideTag;
    return this.slides.map(function (content) {
      return "<" + tag + " " + _this10.buildAttrs(content.attrs) + ">" + (content.html || "") + "</" + tag + ">";
    }).join("");
  };

  _proto3.cover = function cover(content) {
    var styles = content.styles,
        _content$html = content.html,
        html = _content$html === void 0 ? "" : _content$html;

    if (this.options.cover && !this.options.lazyLoad) {
      var src = html.match(/<img.*?src\s*=\s*(['"])(.+?)\1.*?>/);

      if (src && src[2]) {
        styles.background = "center/cover no-repeat url('" + src[2] + "')";
      }
    }
  };

  _proto3.generateClones = function generateClones(contents) {
    var classes = this.options.classes;
    var count = this.getCloneCount();
    var slides = contents.slice();

    while (slides.length < count) {
      push(slides, slides);
    }

    push(slides.slice(-count).reverse(), slides.slice(0, count)).forEach(function (content, index) {
      var attrs = assign({}, content.attrs, {
        class: content.attrs.class + " " + classes.clone
      });
      var clone = assign({}, content, {
        attrs: attrs
      });
      index < count ? contents.unshift(clone) : contents.push(clone);
    });
  };

  _proto3.getCloneCount = function getCloneCount() {
    if (this.isLoop()) {
      var options = this.options;

      if (options.clones) {
        return options.clones;
      }

      var perPage = max.apply(void 0, this.breakpoints.map(function (_ref6) {
        var options2 = _ref6[1];
        return options2.perPage;
      }));
      return perPage * ((options.flickMaxPages || 1) + 1);
    }

    return 0;
  };

  _proto3.renderArrows = function renderArrows() {
    var html = "";
    html += "<div class=\"" + this.options.classes.arrows + "\">";
    html += this.renderArrow(true);
    html += this.renderArrow(false);
    html += "</div>";
    return html;
  };

  _proto3.renderArrow = function renderArrow(prev) {
    var _this$options = this.options,
        classes = _this$options.classes,
        i18n = _this$options.i18n;
    var attrs = {
      class: classes.arrow + " " + (prev ? classes.prev : classes.next),
      type: "button",
      ariaLabel: prev ? i18n.prev : i18n.next
    };
    return "<button " + this.buildAttrs(attrs) + "><svg xmlns=\"" + XML_NAME_SPACE + "\" viewBox=\"0 0 " + SIZE + " " + SIZE + "\" width=\"" + SIZE + "\" height=\"" + SIZE + "\"><path d=\"" + (this.options.arrowPath || PATH) + "\" /></svg></button>";
  };

  _proto3.html = function html() {
    var _this$config = this.config,
        rootClass = _this$config.rootClass,
        listTag = _this$config.listTag,
        arrows = _this$config.arrows,
        beforeTrack = _this$config.beforeTrack,
        afterTrack = _this$config.afterTrack,
        slider = _this$config.slider,
        beforeSlider = _this$config.beforeSlider,
        afterSlider = _this$config.afterSlider;
    var html = "";
    html += "<div id=\"" + this.id + "\" class=\"" + this.buildClasses() + " " + (rootClass || "") + "\">";
    html += "<style>" + this.Style.build() + "</style>";

    if (slider) {
      html += beforeSlider || "";
      html += "<div class=\"splide__slider\">";
    }

    html += beforeTrack || "";

    if (arrows) {
      html += this.renderArrows();
    }

    html += "<div class=\"splide__track\">";
    html += "<" + listTag + " class=\"splide__list\">";
    html += this.renderSlides();
    html += "</" + listTag + ">";
    html += "</div>";
    html += afterTrack || "";

    if (slider) {
      html += "</div>";
      html += afterSlider || "";
    }

    html += "</div>";
    return html;
  };

  return SplideRenderer;
}();




/***/ }),

/***/ "./src/helpers/decl-of-num.js":
/*!************************************!*\
  !*** ./src/helpers/decl-of-num.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   declOfNum: () => (/* binding */ declOfNum)
/* harmony export */ });
const declOfNum = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ]; 
}

/***/ }),

/***/ "./src/modules/button-catalog.js":
/*!***************************************!*\
  !*** ./src/modules/button-catalog.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buttonCatalog: () => (/* binding */ buttonCatalog)
/* harmony export */ });
const buttonCatalog = () => {
  const heroSection = document.querySelector(".hero");
  const buttonCatalog = document.querySelector(".btn-catalog");

  if (buttonCatalog) {
    let timeoutId;
    let isOpacity = false;

    const createObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              buttonCatalog.classList.remove("animate-opacity");
            } else {
              buttonCatalog.classList.add("animate-opacity");
            }
          });
        },
        {
          threshold: 0,
        }
      );

      observer.observe(heroSection);
    };

    createObserver();

    window.addEventListener("scroll", () => {
      clearTimeout(timeoutId);

      if (!isOpacity) {
        buttonCatalog.style.opacity = 0.5;
        isOpacity = true;
      }

      timeoutId = setTimeout(() => {
        buttonCatalog.style.opacity = 1;
        isOpacity = false;
      }, 500);
    });
  }
};


/***/ }),

/***/ "./src/modules/catalog-slider.js":
/*!***************************************!*\
  !*** ./src/modules/catalog-slider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   catalogSlider: () => (/* binding */ catalogSlider)
/* harmony export */ });
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @splidejs/splide */ "./node_modules/@splidejs/splide/dist/js/splide.esm.js");


const catalogSlider = () => {
    const tabWrapper = document.querySelector('.catalog__slider_tabs');
    const title = document.getElementById('catalog-category__title')
  
    if (tabWrapper) {
      let tabs = tabWrapper.querySelectorAll(".catalog-tab");
  
      let activeIndex = 0;
      let tabSlider;

      tabSlider = new _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__["default"](".catalog__slider_tabs--slider", {
        arrows: false,
        pagination: false,
        clones: 0,
        autoWidth: true,
        mediaQuery: "min",
        start: activeIndex,
        padding: {left: 12, right: 12},
        gap: 12,
        breakpoints: {
          992: { destroy: true },
        },
      }).mount();

      const changeSlide = (idx) => {
        tabs = tabWrapper.querySelectorAll(".catalog-tab");
    
        tabs.forEach((tab, tabIndex) => {
          const datasetIndex = Number(tab.dataset.slideIdx)

          tab.classList.remove("active");
    
          if (datasetIndex === idx) {
            const datasetTitle = tab.dataset.title
            
            tab.classList.add("active");

            if (tabSlider && !tabSlider.options.destroy) {
              tabSlider.go(datasetIndex)
            }

            if (title) {
              title.textContent = datasetTitle
            }
          }
        });
      };

      tabWrapper.addEventListener('click', (e) => {
        if (e.target.closest('.catalog-tab')) {
          const tab = e.target.closest('.catalog-tab')
          const tabIndex = Number(tab.dataset.slideIdx)
      
          activeIndex = tabIndex;
    
          changeSlide(tabIndex);
        }
      })

      changeSlide(activeIndex)
    }
}


/***/ }),

/***/ "./src/modules/hero-slider.js":
/*!************************************!*\
  !*** ./src/modules/hero-slider.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   heroSlider: () => (/* binding */ heroSlider)
/* harmony export */ });
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @splidejs/splide */ "./node_modules/@splidejs/splide/dist/js/splide.esm.js");


const heroSlider = (delay = 4000) => {
  const heroWrapper = document.querySelector(".hero-wrapper");
  const tabWrapper = document.querySelector('.hero__slider_tabs');

  if (heroWrapper) {
    const images = heroWrapper.querySelectorAll(".hero__image");
    let tabs = heroWrapper.querySelectorAll(".hero-tab");
  
    let activeIndex = 0;
    let interval;
    let tabSlider;
  
    tabSlider = new _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__["default"](".hero__slider_tabs--slider", {
      arrows: false,
      pagination: false,
      // clones: 0,
      type: "loop",
      focus: "center",
      autoWidth: true,
      mediaQuery: "min",
      gap: 12,
      breakpoints: {
        992: { destroy: true },
      },
    }).mount();
  
    const changeSlide = (idx) => {
      tabs = heroWrapper.querySelectorAll(".hero-tab");
  
      images.forEach((image, imageIndex) => {
        image.classList.remove("active");
  
        if (imageIndex === idx) {
          image.classList.add("active");
        }
      });
  
      tabs.forEach((tab, tabIndex) => {
        tab.classList.remove("active");
  
        if (Number(tab.dataset.slideIdx) === idx) {
          tab.classList.add("active");
        }
      });
  
      if (tabSlider && !tabSlider.options.destroy) {
          tabSlider.go(idx)
      }
    };
  
    const autoplay = () => {
      interval = setInterval(() => {
        if (activeIndex === 4) {
          activeIndex = 0;
        } else {
          activeIndex++;
        }
  
        changeSlide(activeIndex);
      }, delay);
    };
  
    const startAutoplay = () => {
      autoplay();
    };
  
    const stopAutoplay = () => {
      clearInterval(interval);
    };
  
    tabWrapper.addEventListener('click', (e) => {
      if (e.target.closest('.hero-tab')) {
        const tab = e.target.closest('.hero-tab')
        const tabIndex = Number(tab.dataset.slideIdx)
  
        activeIndex = tabIndex;
  
        changeSlide(tabIndex);
        stopAutoplay()
        startAutoplay()
      }
    })
  
    changeSlide(activeIndex);
    autoplay();
  }
};


/***/ }),

/***/ "./src/modules/language-select.js":
/*!****************************************!*\
  !*** ./src/modules/language-select.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   languageSelect: () => (/* binding */ languageSelect)
/* harmony export */ });
const languageSelect = () => {
  const select = document.querySelector(".header__navbar_select");
  const listItems = select.querySelectorAll("li");

  if (select) {
    select.addEventListener("click", () => {
      select.classList.toggle("open");
    });
  }

  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      const language = item.dataset.language;

      listItems.forEach((i) => {
        i.classList.remove("active");

        if (i.dataset.language === language) {
          i.classList.add("active");
        }
      });
    });
  });
};


/***/ }),

/***/ "./src/modules/our-time.js":
/*!*********************************!*\
  !*** ./src/modules/our-time.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ourTime: () => (/* binding */ ourTime)
/* harmony export */ });
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @splidejs/splide */ "./node_modules/@splidejs/splide/dist/js/splide.esm.js");


const ourTime = () => {
  const initSlider = () => {
    new _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__["default"](".our-time__slider", {
      arrows: false,
      pagination: false,
      clones: 0,
      type: "loop",
      focus: "center",
      gap: 24,
      breakpoints: {
        767: {
          destroy: true
        },
      },
    }).mount();
  };

  if (document.querySelector('.our-time__slider')) {
    initSlider();
  }
};


/***/ }),

/***/ "./src/modules/products-slider.js":
/*!****************************************!*\
  !*** ./src/modules/products-slider.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   productsSlider: () => (/* binding */ productsSlider)
/* harmony export */ });
/* harmony import */ var _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @splidejs/splide */ "./node_modules/@splidejs/splide/dist/js/splide.esm.js");


const productsSlider = (sliderSelector) => {
  const initSlider = () => {
    new _splidejs_splide__WEBPACK_IMPORTED_MODULE_0__["default"](sliderSelector, {
      arrows: false,
      pagination: false,
      type: "loop",
      focus: "center",
      fixedWidth: 140,
      fixedHeight: 260,
      mediaQuery: "min",
      gap: 12,
      breakpoints: {
        532: {
          fixedWidth: null,
          fixedHeight: null,
          perPage: 3,
          focus: 1,
        },
        768: {
          fixedWidth: null,
          perPage: 2,
          gap: 24,
          focus: 1,
        },
        992: {
          perPage: 3,
          gap: 24,
          focus: 1,
        },
        1400: {
          perPage: 4,
          gap: 24,
          focus: 1,
        },
      },
    }).mount();
  };

  if (document.querySelector(sliderSelector)) {
    initSlider();
  }
};


/***/ }),

/***/ "./src/modules/search-decl.js":
/*!************************************!*\
  !*** ./src/modules/search-decl.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   searchDecl: () => (/* binding */ searchDecl)
/* harmony export */ });
/* harmony import */ var _helpers_decl_of_num__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/decl-of-num */ "./src/helpers/decl-of-num.js");


const searchDecl = () => {
    const searchSection = document.querySelector('.search');
    
    if (searchSection) {
        const searchCards = searchSection.querySelectorAll('.product-card');
        const description = searchSection.querySelector('.search-description');
        const searchCount = Number(searchCards.length);

        const firstStr = (0,_helpers_decl_of_num__WEBPACK_IMPORTED_MODULE_0__.declOfNum)(searchCount, ['найден', 'найдено', 'найдены']);
        const secondStr = (0,_helpers_decl_of_num__WEBPACK_IMPORTED_MODULE_0__.declOfNum)(searchCount, ['результат', 'результата', 'результатов']);
        
        description.textContent = `${firstStr} ${searchCount} ${secondStr}`
    }
}

/***/ }),

/***/ "./src/modules/search-input.js":
/*!*************************************!*\
  !*** ./src/modules/search-input.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   searchInput: () => (/* binding */ searchInput)
/* harmony export */ });
const searchInput = () => {
    const searchWrapper = document.querySelector('.header__navbar_search-input--wrapper')
    const openButton = document.getElementById('header-search-button')
    const closeButton = document.getElementById('header-search-close');

    openButton.addEventListener('click', () => {
        searchWrapper.classList.add('-active')
    })
    
    closeButton.addEventListener('click', () => {
        searchWrapper.classList.remove('-active')
    })
}

/***/ }),

/***/ "./src/modules/smoothScroll.js":
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   smoothScroll: () => (/* binding */ smoothScroll)
/* harmony export */ });
/* harmony import */ var seamless_scroll_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! seamless-scroll-polyfill */ "./node_modules/seamless-scroll-polyfill/lib/scrollIntoView.js");


const smoothScroll = () => {
  const links = document.querySelectorAll(".header-menu__item a");

  links.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();

      const id = element.getAttribute("href").substring(1);

      const section = document.getElementById(id);

      if (section) {
        (0,seamless_scroll_polyfill__WEBPACK_IMPORTED_MODULE_0__.scrollIntoView)(section, {
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
};



/***/ }),

/***/ "./src/modules/timeline.js":
/*!*********************************!*\
  !*** ./src/modules/timeline.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeline: () => (/* binding */ timeline)
/* harmony export */ });
const timeline = () => {
  const timeline = document.querySelector(".timeline");

  if (timeline) {
    const timelineItems = timeline.querySelectorAll(".timeline-item");
    const title = document.querySelector(".our-time-title");
    const items = [...timelineItems, title];

    let docRect = document.body.getBoundingClientRect();
    let isDownx = true;
    let activeIndex = 0;

    const checkActive = () => {
      const docRectTemp = document.body.getBoundingClientRect();

      if (docRectTemp.y > docRect.y) {
        isDownx = false;
      } else {
        isDownx = true;
      }

      docRect = document.body.getBoundingClientRect();

      items.forEach((i, idx) => {
        const rect = i.getBoundingClientRect();

        if (
          rect &&
          rect.y > 0 &&
          rect.y < document.documentElement.clientHeight / 2
        ) {
          if (isDownx) {
            if (idx > activeIndex) {
              activeIndex = idx;
            }
            i.classList.remove("-active");
          } else {
            if (idx < activeIndex) {
              activeIndex = idx;
            }
            i.classList.remove("-active");
          }
          items[activeIndex].classList.add("-active");
        } else {
            i.classList.remove("-active");
        }
      });
    };

    document.addEventListener("scroll", checkActive);
    checkActive();
  }
};


/***/ }),

/***/ "./src/modules/to-top-button.js":
/*!**************************************!*\
  !*** ./src/modules/to-top-button.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toTopButton: () => (/* binding */ toTopButton)
/* harmony export */ });
const toTopButton = () => {
  // const backToTop = document.getElementById("back-to-top");

  // if (backToTop) {
  //   // Показать/скрыть кнопку при прокрутке страницы
  //   window.addEventListener("scroll", function () {
  //     if (window.scrollY > 400) {
  //       backToTop.style.display = "flex";
  //     } else {
  //       backToTop.style.display = "none";
  //     }
  //   });

  //   // Плавная прокрутка при клике на кнопку
  //   backToTop.addEventListener("click", function (event) {
  //     event.preventDefault();
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   });
  // }
};


/***/ }),

/***/ "./src/modules/yandex-map.js":
/*!***********************************!*\
  !*** ./src/modules/yandex-map.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   yandexMap: () => (/* binding */ yandexMap)
/* harmony export */ });
const yandexMap = () => {
  const mapElement = document.getElementById("map")
  if (!mapElement) {
    return
  }
  async function initMap() {
    let ymaps3 = window.ymaps3;
    let map;

    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3;

    map = new YMap(
      mapElement,
      {
        location: {
          center: [46.00891089556499, 51.57077959379591],
          zoom: 17,
        },
        behaviors: ["drag", "pinchZoom", "mouseTilt"],
      },
      [new YMapDefaultSchemeLayer({}), new YMapDefaultFeaturesLayer({})]
    );

    const markerElement = document.createElement('img');
    markerElement.className = 'contacts-map--icon-marker';
    markerElement.style.width = '89px'
    markerElement.style.height = '117px'
    markerElement.style.position = 'relative'
    markerElement.style.transform = 'translate(-50%, -50%)'
    markerElement.src = './images/icons/marker.png';
    map.addChild(new YMapMarker({coordinates: [
        46.00829728258972,
        51.57158353822383
    ]}, markerElement));
  }

  initMap();
};


/***/ }),

/***/ "./node_modules/seamless-scroll-polyfill/lib/common.js":
/*!*************************************************************!*\
  !*** ./node_modules/seamless-scroll-polyfill/lib/common.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   backupMethod: () => (/* binding */ backupMethod),
/* harmony export */   checkBehavior: () => (/* binding */ checkBehavior),
/* harmony export */   elementScrollXY: () => (/* binding */ elementScrollXY),
/* harmony export */   failedExecute: () => (/* binding */ failedExecute),
/* harmony export */   failedExecuteInvalidEnumValue: () => (/* binding */ failedExecuteInvalidEnumValue),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isScrollBehaviorSupported: () => (/* binding */ isScrollBehaviorSupported),
/* harmony export */   markPolyfill: () => (/* binding */ markPolyfill),
/* harmony export */   modifyPrototypes: () => (/* binding */ modifyPrototypes),
/* harmony export */   scrollingElement: () => (/* binding */ scrollingElement)
/* harmony export */ });
const checkBehavior = (behavior) => {
    return behavior === undefined || behavior === "auto" || behavior === "instant" || behavior === "smooth";
};
function elementScrollXY(x, y) {
    this.scrollLeft = x;
    this.scrollTop = y;
}
const failedExecute = (method, object, reason = "cannot convert to dictionary.") => `Failed to execute '${method}' on '${object}': ${reason}`;
const failedExecuteInvalidEnumValue = (method, object, value) => failedExecute(method, object, `The provided value '${value}' is not a valid enum value of type ScrollBehavior.`);
/* eslint-disable */
const backupMethod = (proto, method, fallback) => {
    var _a;
    const backup = `__SEAMLESS.BACKUP$${method}`;
    if (!proto[backup] && proto[method] && !((_a = proto[method]) === null || _a === void 0 ? void 0 : _a.__isPolyfill)) {
        proto[backup] = proto[method];
    }
    return proto[backup] || fallback;
};
/* eslint-enable */
const isObject = (value) => {
    const type = typeof value;
    return value !== null && (type === "object" || type === "function");
};
const isScrollBehaviorSupported = (config) => "scrollBehavior" in window.document.documentElement.style && (config === null || config === void 0 ? void 0 : config.forcePolyfill) !== true;
const markPolyfill = (method) => {
    Object.defineProperty(method, "__isPolyfill", { value: true });
};
const modifyPrototypes = (prop, func) => {
    markPolyfill(func);
    [HTMLElement.prototype, SVGElement.prototype, Element.prototype].forEach((prototype) => {
        backupMethod(prototype, prop);
        prototype[prop] = func;
    });
};
/**
 * - On Chrome and Firefox, document.scrollingElement will return the <html> element.
 * - Safari, document.scrollingElement will return the <body> element.
 * - On Edge, document.scrollingElement will return the <body> element.
 * - IE11 does not support document.scrollingElement, but you can assume its <html>.
 */
const scrollingElement = (element) => element.ownerDocument.scrollingElement || element.ownerDocument.documentElement;
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./node_modules/seamless-scroll-polyfill/lib/scroll-end-event.js":
/*!***********************************************************************!*\
  !*** ./node_modules/seamless-scroll-polyfill/lib/scroll-end-event.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrollEndEvent: () => (/* binding */ scrollEndEvent)
/* harmony export */ });
function scrollEndEvent(bubbles) {
    if (typeof Event === "function") {
        return new Event("scrollend", {
            bubbles,
            cancelable: false,
        });
    }
    const event = document.createEvent("Event");
    event.initEvent("scrollend", bubbles, false);
    return event;
}
//# sourceMappingURL=scroll-end-event.js.map

/***/ }),

/***/ "./node_modules/seamless-scroll-polyfill/lib/scroll-step.js":
/*!******************************************************************!*\
  !*** ./node_modules/seamless-scroll-polyfill/lib/scroll-step.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   now: () => (/* binding */ now),
/* harmony export */   step: () => (/* binding */ step)
/* harmony export */ });
const ease = (k) => {
    return 0.5 * (1 - Math.cos(Math.PI * k));
};
/* eslint-disable */
function now() {
    var _a;
    let fn;
    if ((_a = window.performance) === null || _a === void 0 ? void 0 : _a.now) {
        fn = () => window.performance.now();
    }
    else {
        fn = () => window.Date.now();
    }
    // @ts-ignore
    now = fn;
    return fn();
}
/* eslint-enable */
const DURATION = 500;
const step = (context) => {
    const currentTime = now();
    const elapsed = (currentTime - context.timeStamp) / (context.duration || DURATION);
    if (elapsed > 1) {
        context.method(context.targetX, context.targetY);
        context.callback();
        return;
    }
    const value = (context.timingFunc || ease)(elapsed);
    const currentX = context.startX + (context.targetX - context.startX) * value;
    const currentY = context.startY + (context.targetY - context.startY) * value;
    context.method(currentX, currentY);
    context.rafId = window.requestAnimationFrame(() => {
        step(context);
    });
};
//# sourceMappingURL=scroll-step.js.map

/***/ }),

/***/ "./node_modules/seamless-scroll-polyfill/lib/scroll.js":
/*!*************************************************************!*\
  !*** ./node_modules/seamless-scroll-polyfill/lib/scroll.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elementScroll: () => (/* binding */ elementScroll),
/* harmony export */   elementScrollBy: () => (/* binding */ elementScrollBy),
/* harmony export */   elementScrollTo: () => (/* binding */ elementScrollTo),
/* harmony export */   scroll: () => (/* binding */ scroll),
/* harmony export */   scrollBy: () => (/* binding */ scrollBy),
/* harmony export */   scrollTo: () => (/* binding */ scrollTo),
/* harmony export */   windowScroll: () => (/* binding */ windowScroll),
/* harmony export */   windowScrollBy: () => (/* binding */ windowScrollBy),
/* harmony export */   windowScrollTo: () => (/* binding */ windowScrollTo)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/seamless-scroll-polyfill/lib/common.js");
/* harmony import */ var _scroll_end_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll-end-event.js */ "./node_modules/seamless-scroll-polyfill/lib/scroll-end-event.js");
/* harmony import */ var _scroll_step_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scroll-step.js */ "./node_modules/seamless-scroll-polyfill/lib/scroll-step.js");



// https://drafts.csswg.org/cssom-view/#normalize-non-finite-values
const nonFinite = (value) => {
    if (!isFinite(value)) {
        return 0;
    }
    return Number(value);
};
const isConnected = (node) => {
    var _a;
    return ((_a = node.isConnected) !== null && _a !== void 0 ? _a : (!node.ownerDocument ||
        // eslint-disable-next-line no-bitwise
        !(node.ownerDocument.compareDocumentPosition(node) & /** DOCUMENT_POSITION_DISCONNECTED */ 1)));
};
const scrollWithOptions = (element, options, config) => {
    var _a, _b;
    if (!isConnected(element)) {
        return;
    }
    const startX = element.scrollLeft;
    const startY = element.scrollTop;
    const targetX = nonFinite((_a = options.left) !== null && _a !== void 0 ? _a : startX);
    const targetY = nonFinite((_b = options.top) !== null && _b !== void 0 ? _b : startY);
    if (targetX === startX && targetY === startY) {
        return;
    }
    const fallback = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.backupMethod)(HTMLElement.prototype, "scroll", _common_js__WEBPACK_IMPORTED_MODULE_0__.elementScrollXY);
    const method = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.backupMethod)(Object.getPrototypeOf(element), "scroll", fallback).bind(element);
    if (options.behavior !== "smooth") {
        method(targetX, targetY);
        return;
    }
    const removeEventListener = () => {
        window.removeEventListener("wheel", cancelScroll);
        window.removeEventListener("touchmove", cancelScroll);
    };
    const callback = () => {
        removeEventListener();
        const isDocument = element.nodeType === /** Node.DOCUMENT_NODE */ 9;
        element.dispatchEvent((0,_scroll_end_event_js__WEBPACK_IMPORTED_MODULE_1__.scrollEndEvent)(isDocument));
    };
    const context = Object.assign(Object.assign({}, config), { timeStamp: (0,_scroll_step_js__WEBPACK_IMPORTED_MODULE_2__.now)(), startX,
        startY,
        targetX,
        targetY, rafId: 0, method,
        callback });
    const cancelScroll = () => {
        window.cancelAnimationFrame(context.rafId);
        removeEventListener();
    };
    window.addEventListener("wheel", cancelScroll, {
        passive: true,
        once: true,
    });
    window.addEventListener("touchmove", cancelScroll, {
        passive: true,
        once: true,
    });
    (0,_scroll_step_js__WEBPACK_IMPORTED_MODULE_2__.step)(context);
};
const isWindow = (obj) => obj.window === obj;
const createScroll = (scrollName) => (target, scrollOptions, config) => {
    const [element, scrollType] = isWindow(target)
        ? [(0,_common_js__WEBPACK_IMPORTED_MODULE_0__.scrollingElement)(target.document.documentElement), "Window"]
        : [target, "Element"];
    const options = scrollOptions !== null && scrollOptions !== void 0 ? scrollOptions : {};
    if (!(0,_common_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(options)) {
        throw new TypeError((0,_common_js__WEBPACK_IMPORTED_MODULE_0__.failedExecute)(scrollName, scrollType));
    }
    if (!(0,_common_js__WEBPACK_IMPORTED_MODULE_0__.checkBehavior)(options.behavior)) {
        throw new TypeError((0,_common_js__WEBPACK_IMPORTED_MODULE_0__.failedExecuteInvalidEnumValue)(scrollName, scrollType, options.behavior));
    }
    if (scrollName === "scrollBy") {
        options.left = nonFinite(options.left) + element.scrollLeft;
        options.top = nonFinite(options.top) + element.scrollTop;
    }
    scrollWithOptions(element, options, config);
};
const scroll = /* #__PURE__ */ createScroll("scroll");
const scrollTo = /* #__PURE__ */ createScroll("scrollTo");
const scrollBy = /* #__PURE__ */ createScroll("scrollBy");
const elementScroll = scroll;
const elementScrollTo = scrollTo;
const elementScrollBy = scrollBy;
const windowScroll = scroll;
const windowScrollTo = scrollTo;
const windowScrollBy = scrollBy;
//# sourceMappingURL=scroll.js.map

/***/ }),

/***/ "./node_modules/seamless-scroll-polyfill/lib/scrollIntoView.js":
/*!*********************************************************************!*\
  !*** ./node_modules/seamless-scroll-polyfill/lib/scrollIntoView.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   elementScrollIntoView: () => (/* binding */ elementScrollIntoView),
/* harmony export */   scrollIntoView: () => (/* binding */ scrollIntoView)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/seamless-scroll-polyfill/lib/common.js");
/* harmony import */ var _scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll.js */ "./node_modules/seamless-scroll-polyfill/lib/scroll.js");
/* eslint-disable no-bitwise */


// https://drafts.csswg.org/css-writing-modes-4/#block-flow
const normalizeWritingMode = (writingMode) => {
    switch (writingMode) {
        case "horizontal-tb":
        case "lr":
        case "lr-tb":
        case "rl":
        case "rl-tb":
            return 0 /* WritingMode.HorizontalTb */;
        case "vertical-rl":
        case "tb":
        case "tb-rl":
            return 1 /* WritingMode.VerticalRl */;
        case "vertical-lr":
        case "tb-lr":
            return 2 /* WritingMode.VerticalLr */;
        case "sideways-rl":
            return 3 /* WritingMode.SidewaysRl */;
        case "sideways-lr":
            return 4 /* WritingMode.SidewaysLr */;
    }
    return 0 /* WritingMode.HorizontalTb */;
};
const calcPhysicalAxis = (writingMode, isLTR, hPos, vPos) => {
    /**  0b{vertical}{horizontal}  0: normal, 1: reverse */
    let layout = 0b00;
    /**
     * WritingMode.VerticalLr: ↓→
     * | 1 | 4 |   |
     * | 2 | 5 |   |
     * | 3 |   |   |
     *
     * RTL: ↑→
     * | 3 |   |   |
     * | 2 | 5 |   |
     * | 1 | 4 |   |
     */
    if (!isLTR) {
        layout ^= 2 /* OP.ReverseVertical */;
    }
    switch (writingMode) {
        /**
         * ↓→
         * | 1 | 2 | 3 |
         * | 4 | 5 |   |
         * |   |   |   |
         *
         * RTL: ↓←
         * | 3 | 2 | 1 |
         * |   | 5 | 4 |
         * |   |   |   |
         */
        case 0 /* WritingMode.HorizontalTb */:
            // swap horizontal and vertical
            layout = (layout >> 1) | ((layout & 1) << 1);
            [hPos, vPos] = [vPos, hPos];
            break;
        /**
         * ↓←
         * |   | 4 | 1 |
         * |   | 5 | 2 |
         * |   |   | 3 |
         *
         * RTL: ↑←
         * |   |   | 3 |
         * |   | 5 | 2 |
         * |   | 4 | 1 |
         */
        case 1 /* WritingMode.VerticalRl */:
        case 3 /* WritingMode.SidewaysRl */:
            //  reverse horizontal
            layout ^= 1 /* OP.ReverseHorizontal */;
            break;
        /**
         * ↑→
         * | 3 |   |   |
         * | 2 | 5 |   |
         * | 1 | 4 |   |
         *
         * RTL: ↓→
         * | 1 | 4 |   |
         * | 2 | 5 |   |
         * | 3 |   |   |
         */
        case 4 /* WritingMode.SidewaysLr */:
            // reverse vertical
            layout ^= 2 /* OP.ReverseVertical */;
            break;
    }
    return [layout, hPos, vPos];
};
const isXReversed = (computedStyle) => {
    const layout = calcPhysicalAxis(normalizeWritingMode(computedStyle.writingMode), computedStyle.direction !== "rtl", undefined, undefined)[0];
    return (layout & 1) === 1;
};
// https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/dom/element.cc;l=1097-1189;drc=6a7533d4a1e9f2372223a9d912a9e53a6fa35ae0
const toPhysicalAlignment = (options, writingMode, isLTR) => {
    const [layout, hPos, vPos] = calcPhysicalAxis(writingMode, isLTR, options.block || "start", options.inline || "nearest");
    return [hPos, vPos].map((value, index) => {
        switch (value) {
            case "center":
                return 1 /* ScrollAlignment.CenterAlways */;
            case "nearest":
                return 0 /* ScrollAlignment.ToEdgeIfNeeded */;
            default: {
                const reverse = (layout >> index) & 1;
                return (value === "start") === !reverse ? 2 /* ScrollAlignment.LeftOrTop */ : 3 /* ScrollAlignment.RightOrBottom */;
            }
        }
    });
};
// code from stipsan/compute-scroll-into-view
// https://github.com/stipsan/compute-scroll-into-view/blob/5396c6b78af5d0bbce11a7c4e93cc3146546fcd3/src/index.ts
/**
 * Find out which edge to align against when logical scroll position is "nearest"
 * Interesting fact: "nearest" works similarily to "if-needed", if the element is fully visible it will not scroll it
 *
 * Legends:
 * ┌────────┐ ┏ ━ ━ ━ ┓
 * │ target │   frame
 * └────────┘ ┗ ━ ━ ━ ┛
 */
const mapNearest = (align, scrollingEdgeStart, scrollingEdgeEnd, scrollingSize, elementEdgeStart, elementEdgeEnd, elementSize) => {
    if (align !== 0 /* ScrollAlignment.ToEdgeIfNeeded */) {
        return align;
    }
    /**
     * If element edge A and element edge B are both outside scrolling box edge A and scrolling box edge B
     *
     *          ┌──┐
     *        ┏━│━━│━┓
     *          │  │
     *        ┃ │  │ ┃        do nothing
     *          │  │
     *        ┗━│━━│━┛
     *          └──┘
     *
     *  If element edge C and element edge D are both outside scrolling box edge C and scrolling box edge D
     *
     *    ┏ ━ ━ ━ ━ ┓
     *   ┌───────────┐
     *   │┃         ┃│        do nothing
     *   └───────────┘
     *    ┗ ━ ━ ━ ━ ┛
     */
    if ((elementEdgeStart < scrollingEdgeStart && elementEdgeEnd > scrollingEdgeEnd) ||
        (elementEdgeStart > scrollingEdgeStart && elementEdgeEnd < scrollingEdgeEnd)) {
        return null;
    }
    /**
     * If element edge A is outside scrolling box edge A and element height is less than scrolling box height
     *
     *          ┌──┐
     *        ┏━│━━│━┓         ┏━┌━━┐━┓
     *          └──┘             │  │
     *  from  ┃      ┃     to  ┃ └──┘ ┃
     *
     *        ┗━ ━━ ━┛         ┗━ ━━ ━┛
     *
     * If element edge B is outside scrolling box edge B and element height is greater than scrolling box height
     *
     *        ┏━ ━━ ━┓         ┏━┌━━┐━┓
     *                           │  │
     *  from  ┃ ┌──┐ ┃     to  ┃ │  │ ┃
     *          │  │             │  │
     *        ┗━│━━│━┛         ┗━│━━│━┛
     *          │  │             └──┘
     *          │  │
     *          └──┘
     *
     * If element edge C is outside scrolling box edge C and element width is less than scrolling box width
     *
     *       from                 to
     *    ┏ ━ ━ ━ ━ ┓         ┏ ━ ━ ━ ━ ┓
     *  ┌───┐                 ┌───┐
     *  │ ┃ │       ┃         ┃   │     ┃
     *  └───┘                 └───┘
     *    ┗ ━ ━ ━ ━ ┛         ┗ ━ ━ ━ ━ ┛
     *
     * If element edge D is outside scrolling box edge D and element width is greater than scrolling box width
     *
     *       from                 to
     *    ┏ ━ ━ ━ ━ ┓         ┏ ━ ━ ━ ━ ┓
     *        ┌───────────┐   ┌───────────┐
     *    ┃   │     ┃     │   ┃         ┃ │
     *        └───────────┘   └───────────┘
     *    ┗ ━ ━ ━ ━ ┛         ┗ ━ ━ ━ ━ ┛
     */
    if ((elementEdgeStart <= scrollingEdgeStart && elementSize <= scrollingSize) ||
        (elementEdgeEnd >= scrollingEdgeEnd && elementSize >= scrollingSize)) {
        return 2 /* ScrollAlignment.LeftOrTop */;
    }
    /**
     * If element edge B is outside scrolling box edge B and element height is less than scrolling box height
     *
     *        ┏━ ━━ ━┓         ┏━ ━━ ━┓
     *
     *  from  ┃      ┃     to  ┃ ┌──┐ ┃
     *          ┌──┐             │  │
     *        ┗━│━━│━┛         ┗━└━━┘━┛
     *          └──┘
     *
     * If element edge A is outside scrolling box edge A and element height is greater than scrolling box height
     *
     *          ┌──┐
     *          │  │
     *          │  │             ┌──┐
     *        ┏━│━━│━┓         ┏━│━━│━┓
     *          │  │             │  │
     *  from  ┃ └──┘ ┃     to  ┃ │  │ ┃
     *                           │  │
     *        ┗━ ━━ ━┛         ┗━└━━┘━┛
     *
     * If element edge C is outside scrolling box edge C and element width is greater than scrolling box width
     *
     *           from                 to
     *        ┏ ━ ━ ━ ━ ┓         ┏ ━ ━ ━ ━ ┓
     *  ┌───────────┐           ┌───────────┐
     *  │     ┃     │   ┃       │ ┃         ┃
     *  └───────────┘           └───────────┘
     *        ┗ ━ ━ ━ ━ ┛         ┗ ━ ━ ━ ━ ┛
     *
     * If element edge D is outside scrolling box edge D and element width is less than scrolling box width
     *
     *           from                 to
     *        ┏ ━ ━ ━ ━ ┓         ┏ ━ ━ ━ ━ ┓
     *                ┌───┐             ┌───┐
     *        ┃       │ ┃ │       ┃     │   ┃
     *                └───┘             └───┘
     *        ┗ ━ ━ ━ ━ ┛         ┗ ━ ━ ━ ━ ┛
     *
     */
    if ((elementEdgeEnd > scrollingEdgeEnd && elementSize < scrollingSize) ||
        (elementEdgeStart < scrollingEdgeStart && elementSize > scrollingSize)) {
        return 3 /* ScrollAlignment.RightOrBottom */;
    }
    return null;
};
const canOverflow = (overflow) => {
    return overflow !== "visible" && overflow !== "clip";
};
const getFrameElement = (element) => {
    var _a;
    try {
        return ((_a = element.ownerDocument.defaultView) === null || _a === void 0 ? void 0 : _a.frameElement) || null;
    }
    catch (_b) {
        return null;
    }
};
const isScrollable = (element, computedStyle) => {
    if (element.clientHeight < element.scrollHeight || element.clientWidth < element.scrollWidth) {
        return (canOverflow(computedStyle.overflowY) ||
            canOverflow(computedStyle.overflowX) ||
            element === (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.scrollingElement)(element));
    }
    return false;
};
const parentElement = (element) => {
    const pNode = element.parentNode;
    const pElement = element.parentElement;
    if (pElement === null && pNode !== null) {
        if (pNode.nodeType === /** Node.DOCUMENT_FRAGMENT_NODE */ 11) {
            return pNode.host;
        }
        if (pNode.nodeType === /** Node.DOCUMENT_NODE */ 9) {
            return getFrameElement(element);
        }
    }
    return pElement;
};
const clamp = (value, min, max) => {
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
};
const getSupportedScrollMarginProperty = (ownerDocument) => {
    // Webkit uses "scroll-snap-margin" https://bugs.webkit.org/show_bug.cgi?id=189265.
    return ["scroll-margin", "scroll-snap-margin"].filter((property) => property in ownerDocument.documentElement.style)[0];
};
const getElementScrollSnapArea = (element, elementRect, computedStyle) => {
    const { top, right, bottom, left } = elementRect;
    const scrollProperty = getSupportedScrollMarginProperty(element.ownerDocument);
    if (!scrollProperty) {
        return [top, right, bottom, left];
    }
    const scrollMarginValue = (edge) => {
        const value = computedStyle.getPropertyValue(`${scrollProperty}-${edge}`);
        return parseInt(value, 10) || 0;
    };
    return [
        top - scrollMarginValue("top"),
        right + scrollMarginValue("right"),
        bottom + scrollMarginValue("bottom"),
        left - scrollMarginValue("left"),
    ];
};
const calcAlignEdge = (align, start, end) => {
    switch (align) {
        case 1 /* ScrollAlignment.CenterAlways */:
            return (start + end) / 2;
        case 3 /* ScrollAlignment.RightOrBottom */:
            return end;
        case 2 /* ScrollAlignment.LeftOrTop */:
        case 0 /* ScrollAlignment.ToEdgeIfNeeded */:
            return start;
    }
};
const getFrameViewport = (frame, frameRect) => {
    var _a, _b, _c;
    const visualViewport = (_a = frame.ownerDocument.defaultView) === null || _a === void 0 ? void 0 : _a.visualViewport;
    const [x, y, width, height] = frame === (0,_common_js__WEBPACK_IMPORTED_MODULE_0__.scrollingElement)(frame)
        ? [0, 0, (_b = visualViewport === null || visualViewport === void 0 ? void 0 : visualViewport.width) !== null && _b !== void 0 ? _b : frame.clientWidth, (_c = visualViewport === null || visualViewport === void 0 ? void 0 : visualViewport.height) !== null && _c !== void 0 ? _c : frame.clientHeight]
        : [frameRect.left, frameRect.top, frame.clientWidth, frame.clientHeight];
    const left = x + frame.clientLeft;
    const top = y + frame.clientTop;
    const right = left + width;
    const bottom = top + height;
    return [top, right, bottom, left];
};
const computeScrollIntoView = (element, options) => {
    // Collect all the scrolling boxes, as defined in the spec: https://drafts.csswg.org/cssom-view/#scrolling-box
    const actions = [];
    let ownerDocument = element.ownerDocument;
    let ownerWindow = ownerDocument.defaultView;
    if (!ownerWindow) {
        return actions;
    }
    const computedStyle = window.getComputedStyle(element);
    const isLTR = computedStyle.direction !== "rtl";
    const writingMode = normalizeWritingMode(computedStyle.writingMode ||
        computedStyle.getPropertyValue("-webkit-writing-mode") ||
        computedStyle.getPropertyValue("-ms-writing-mode"));
    const [alignH, alignV] = toPhysicalAlignment(options, writingMode, isLTR);
    let [top, right, bottom, left] = getElementScrollSnapArea(element, element.getBoundingClientRect(), computedStyle);
    for (let frame = parentElement(element); frame !== null; frame = parentElement(frame)) {
        if (ownerDocument !== frame.ownerDocument) {
            ownerDocument = frame.ownerDocument;
            ownerWindow = ownerDocument.defaultView;
            if (!ownerWindow) {
                break;
            }
            const { left: dX, top: dY } = frame.getBoundingClientRect();
            top += dY;
            right += dX;
            bottom += dY;
            left += dX;
        }
        const frameStyle = ownerWindow.getComputedStyle(frame);
        if (frameStyle.position === "fixed") {
            break;
        }
        if (!isScrollable(frame, frameStyle)) {
            continue;
        }
        const frameRect = frame.getBoundingClientRect();
        const [frameTop, frameRight, frameBottom, frameLeft] = getFrameViewport(frame, frameRect);
        const eAlignH = mapNearest(alignH, frameLeft, frameRight, frame.clientWidth, left, right, right - left);
        const eAlignV = mapNearest(alignV, frameTop, frameBottom, frame.clientHeight, top, bottom, bottom - top);
        const diffX = eAlignH === null ? 0 : calcAlignEdge(eAlignH, left, right) - calcAlignEdge(eAlignH, frameLeft, frameRight);
        const diffY = eAlignV === null ? 0 : calcAlignEdge(eAlignV, top, bottom) - calcAlignEdge(eAlignV, frameTop, frameBottom);
        const moveX = isXReversed(frameStyle)
            ? clamp(diffX, -frame.scrollWidth + frame.clientWidth - frame.scrollLeft, -frame.scrollLeft)
            : clamp(diffX, -frame.scrollLeft, frame.scrollWidth - frame.clientWidth - frame.scrollLeft);
        const moveY = clamp(diffY, -frame.scrollTop, frame.scrollHeight - frame.clientHeight - frame.scrollTop);
        actions.push([
            frame,
            { left: frame.scrollLeft + moveX, top: frame.scrollTop + moveY, behavior: options.behavior },
        ]);
        top = Math.max(top - moveY, frameTop);
        right = Math.min(right - moveX, frameRight);
        bottom = Math.min(bottom - moveY, frameBottom);
        left = Math.max(left - moveX, frameLeft);
    }
    return actions;
};
const scrollIntoView = (element, scrollIntoViewOptions, config) => {
    const options = scrollIntoViewOptions || {};
    if (!(0,_common_js__WEBPACK_IMPORTED_MODULE_0__.checkBehavior)(options.behavior)) {
        throw new TypeError((0,_common_js__WEBPACK_IMPORTED_MODULE_0__.failedExecuteInvalidEnumValue)("scrollIntoView", "Element", options.behavior));
    }
    const actions = computeScrollIntoView(element, options);
    actions.forEach(([frame, scrollToOptions]) => {
        (0,_scroll_js__WEBPACK_IMPORTED_MODULE_1__.elementScroll)(frame, scrollToOptions, config);
    });
};
const elementScrollIntoView = scrollIntoView;
//# sourceMappingURL=scrollIntoView.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_language_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/language-select */ "./src/modules/language-select.js");
/* harmony import */ var _modules_search_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/search-input */ "./src/modules/search-input.js");
/* harmony import */ var _modules_hero_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/hero-slider */ "./src/modules/hero-slider.js");
/* harmony import */ var _modules_products_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/products-slider */ "./src/modules/products-slider.js");
/* harmony import */ var _modules_our_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/our-time */ "./src/modules/our-time.js");
/* harmony import */ var _modules_button_catalog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/button-catalog */ "./src/modules/button-catalog.js");
/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/smoothScroll */ "./src/modules/smoothScroll.js");
/* harmony import */ var _modules_to_top_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/to-top-button */ "./src/modules/to-top-button.js");
/* harmony import */ var _modules_catalog_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/catalog-slider */ "./src/modules/catalog-slider.js");
/* harmony import */ var _modules_search_decl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/search-decl */ "./src/modules/search-decl.js");
/* harmony import */ var _modules_yandex_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/yandex-map */ "./src/modules/yandex-map.js");
/* harmony import */ var _modules_timeline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/timeline */ "./src/modules/timeline.js");













(0,_modules_language_select__WEBPACK_IMPORTED_MODULE_0__.languageSelect)();
(0,_modules_search_input__WEBPACK_IMPORTED_MODULE_1__.searchInput)();
(0,_modules_hero_slider__WEBPACK_IMPORTED_MODULE_2__.heroSlider)();
(0,_modules_products_slider__WEBPACK_IMPORTED_MODULE_3__.productsSlider)(".products-slider");
(0,_modules_products_slider__WEBPACK_IMPORTED_MODULE_3__.productsSlider)(".new-products-slider");
(0,_modules_our_time__WEBPACK_IMPORTED_MODULE_4__.ourTime)();
(0,_modules_button_catalog__WEBPACK_IMPORTED_MODULE_5__.buttonCatalog)();
(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_6__.smoothScroll)();
(0,_modules_to_top_button__WEBPACK_IMPORTED_MODULE_7__.toTopButton)();
(0,_modules_catalog_slider__WEBPACK_IMPORTED_MODULE_8__.catalogSlider)();
(0,_modules_search_decl__WEBPACK_IMPORTED_MODULE_9__.searchDecl)();
(0,_modules_yandex_map__WEBPACK_IMPORTED_MODULE_10__.yandexMap)();
(0,_modules_timeline__WEBPACK_IMPORTED_MODULE_11__.timeline)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUE0QyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVEOztBQUUvUCw4REFBOEQsc0VBQXNFLDhEQUE4RCxrREFBa0QsaUJBQWlCLEdBQUc7O0FBRXhRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLDhCQUE4QiwwQ0FBMEM7QUFDeEUsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQsS0FBSyxJQUFJO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDJDQUEyQzs7QUFFaEQ7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBLG9DQUFvQztBQUNwQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBLE9BQU87QUFDUCxlQUFlO0FBQ2YsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsc0RBQXNEO0FBQ3REO0FBQ0EsMkJBQTJCLHVDQUF1QztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3RELE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsT0FBTztBQUNQLDJCQUEyQjtBQUMzQjtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFMG9DOzs7Ozs7Ozs7Ozs7Ozs7QUMzbEhwb0M7QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ3NDO0FBQ3RDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0RBQU07QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBO0FBQ0EsaUJBQWlCLGVBQWU7QUFDaEMsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0RzQztBQUN0QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3REFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGVBQWU7QUFDOUIsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJzQztBQUN0QztBQUNPO0FBQ1A7QUFDQSxRQUFRLHdEQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJzQztBQUN0QztBQUNPO0FBQ1A7QUFDQSxRQUFRLHdEQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0NtRDtBQUNuRDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsK0RBQVM7QUFDbEMsMEJBQTBCLCtEQUFTO0FBQ25DO0FBQ0EscUNBQXFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsVUFBVTtBQUMxRTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7O0FDWjBEO0FBQzFEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBYztBQUN0QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwRE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDRCQUE0QjtBQUN2RCxRQUFRO0FBQ1I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFFQUFxRTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUCxvQ0FBb0Msa0NBQWtDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTywwR0FBMEcsT0FBTyxRQUFRLE9BQU8sS0FBSyxPQUFPO0FBQzVJLHNIQUFzSCxNQUFNO0FBQ25JO0FBQ087QUFDUDtBQUNBLHdDQUF3QyxPQUFPO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDQTtBQUNQLG9EQUFvRCxhQUFhO0FBQ2pFO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7Ozs7Ozs7Ozs7Ozs7O0FDekNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25Dc0o7QUFDL0Y7QUFDVjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3REFBWSxrQ0FBa0MsdURBQWU7QUFDbEYsbUJBQW1CLHdEQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsb0VBQWM7QUFDNUM7QUFDQSxrREFBa0QsYUFBYSxXQUFXLG9EQUFHO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxxREFBSTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0REFBZ0I7QUFDM0I7QUFDQTtBQUNBLFNBQVMsb0RBQVE7QUFDakIsNEJBQTRCLHlEQUFhO0FBQ3pDO0FBQ0EsU0FBUyx5REFBYTtBQUN0Qiw0QkFBNEIseUVBQTZCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekZBO0FBQzZGO0FBQ2pEO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVSxhQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkdBQTJHLFlBQVk7QUFDdkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDREQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJCQUEyQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGVBQWUsR0FBRyxLQUFLO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsNERBQWdCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsZ0JBQWdCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywwRkFBMEY7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxTQUFTLHlEQUFhO0FBQ3RCLDRCQUE0Qix5RUFBNkI7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBYTtBQUNyQixLQUFLO0FBQ0w7QUFDTztBQUNQOzs7Ozs7VUMxWUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjJEO0FBQ047QUFDRjtBQUNRO0FBQ2Q7QUFDWTtBQUNIO0FBQ0E7QUFDRztBQUNOO0FBQ0Y7QUFDSDtBQUM5QztBQUNBLHdFQUFjO0FBQ2Qsa0VBQVc7QUFDWCxnRUFBVTtBQUNWLHdFQUFjO0FBQ2Qsd0VBQWM7QUFDZCwwREFBTztBQUNQLHNFQUFhO0FBQ2IsbUVBQVk7QUFDWixtRUFBVztBQUNYLHNFQUFhO0FBQ2IsZ0VBQVU7QUFDViwrREFBUztBQUNULDREQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9Ac3BsaWRlanMvc3BsaWRlL2Rpc3QvanMvc3BsaWRlLmVzbS5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL2hlbHBlcnMvZGVjbC1vZi1udW0uanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL2J1dHRvbi1jYXRhbG9nLmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9zcmMvbW9kdWxlcy9jYXRhbG9nLXNsaWRlci5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL21vZHVsZXMvaGVyby1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL2xhbmd1YWdlLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL21vZHVsZXMvb3VyLXRpbWUuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzLXNsaWRlci5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL21vZHVsZXMvc2VhcmNoLWRlY2wuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL3NlYXJjaC1pbnB1dC5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL21vZHVsZXMvc21vb3RoU2Nyb2xsLmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9zcmMvbW9kdWxlcy90aW1lbGluZS5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL21vZHVsZXMvdG8tdG9wLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL21vZHVsZXMveWFuZGV4LW1hcC5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3NlYW1sZXNzLXNjcm9sbC1wb2x5ZmlsbC9saWIvY29tbW9uLmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc2VhbWxlc3Mtc2Nyb2xsLXBvbHlmaWxsL2xpYi9zY3JvbGwtZW5kLWV2ZW50LmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc2VhbWxlc3Mtc2Nyb2xsLXBvbHlmaWxsL2xpYi9zY3JvbGwtc3RlcC5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3NlYW1sZXNzLXNjcm9sbC1wb2x5ZmlsbC9saWIvc2Nyb2xsLmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc2VhbWxlc3Mtc2Nyb2xsLXBvbHlmaWxsL2xpYi9zY3JvbGxJbnRvVmlldy5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbi8qIVxuICogU3BsaWRlLmpzXG4gKiBWZXJzaW9uICA6IDQuMS40XG4gKiBMaWNlbnNlICA6IE1JVFxuICogQ29weXJpZ2h0OiAyMDIyIE5hb3Rvc2hpIEZ1aml0YVxuICovXG52YXIgTUVESUFfUFJFRkVSU19SRURVQ0VEX01PVElPTiA9IFwiKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSlcIjtcbnZhciBDUkVBVEVEID0gMTtcbnZhciBNT1VOVEVEID0gMjtcbnZhciBJRExFID0gMztcbnZhciBNT1ZJTkcgPSA0O1xudmFyIFNDUk9MTElORyA9IDU7XG52YXIgRFJBR0dJTkcgPSA2O1xudmFyIERFU1RST1lFRCA9IDc7XG52YXIgU1RBVEVTID0ge1xuICBDUkVBVEVEOiBDUkVBVEVELFxuICBNT1VOVEVEOiBNT1VOVEVELFxuICBJRExFOiBJRExFLFxuICBNT1ZJTkc6IE1PVklORyxcbiAgU0NST0xMSU5HOiBTQ1JPTExJTkcsXG4gIERSQUdHSU5HOiBEUkFHR0lORyxcbiAgREVTVFJPWUVEOiBERVNUUk9ZRURcbn07XG5cbmZ1bmN0aW9uIGVtcHR5KGFycmF5KSB7XG4gIGFycmF5Lmxlbmd0aCA9IDA7XG59XG5cbmZ1bmN0aW9uIHNsaWNlKGFycmF5TGlrZSwgc3RhcnQsIGVuZCkge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyYXlMaWtlLCBzdGFydCwgZW5kKTtcbn1cblxuZnVuY3Rpb24gYXBwbHkoZnVuYykge1xuICByZXR1cm4gZnVuYy5iaW5kLmFwcGx5KGZ1bmMsIFtudWxsXS5jb25jYXQoc2xpY2UoYXJndW1lbnRzLCAxKSkpO1xufVxuXG52YXIgbmV4dFRpY2sgPSBzZXRUaW1lb3V0O1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuZnVuY3Rpb24gcmFmKGZ1bmMpIHtcbiAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKHR5cGUsIHN1YmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdWJqZWN0ID09PSB0eXBlO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChzdWJqZWN0KSB7XG4gIHJldHVybiAhaXNOdWxsKHN1YmplY3QpICYmIHR5cGVPZihcIm9iamVjdFwiLCBzdWJqZWN0KTtcbn1cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xudmFyIGlzRnVuY3Rpb24gPSBhcHBseSh0eXBlT2YsIFwiZnVuY3Rpb25cIik7XG52YXIgaXNTdHJpbmcgPSBhcHBseSh0eXBlT2YsIFwic3RyaW5nXCIpO1xudmFyIGlzVW5kZWZpbmVkID0gYXBwbHkodHlwZU9mLCBcInVuZGVmaW5lZFwiKTtcblxuZnVuY3Rpb24gaXNOdWxsKHN1YmplY3QpIHtcbiAgcmV0dXJuIHN1YmplY3QgPT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQoc3ViamVjdCkge1xuICB0cnkge1xuICAgIHJldHVybiBzdWJqZWN0IGluc3RhbmNlb2YgKHN1YmplY3Qub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cpLkhUTUxFbGVtZW50O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoKHZhbHVlcywgaXRlcmF0ZWUpIHtcbiAgdG9BcnJheSh2YWx1ZXMpLmZvckVhY2goaXRlcmF0ZWUpO1xufVxuXG5mdW5jdGlvbiBpbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcbiAgcmV0dXJuIGFycmF5LmluZGV4T2YodmFsdWUpID4gLTE7XG59XG5cbmZ1bmN0aW9uIHB1c2goYXJyYXksIGl0ZW1zKSB7XG4gIGFycmF5LnB1c2guYXBwbHkoYXJyYXksIHRvQXJyYXkoaXRlbXMpKTtcbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhlbG0sIGNsYXNzZXMsIGFkZCkge1xuICBpZiAoZWxtKSB7XG4gICAgZm9yRWFjaChjbGFzc2VzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgZWxtLmNsYXNzTGlzdFthZGQgPyBcImFkZFwiIDogXCJyZW1vdmVcIl0obmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWxtLCBjbGFzc2VzKSB7XG4gIHRvZ2dsZUNsYXNzKGVsbSwgaXNTdHJpbmcoY2xhc3NlcykgPyBjbGFzc2VzLnNwbGl0KFwiIFwiKSA6IGNsYXNzZXMsIHRydWUpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmQocGFyZW50LCBjaGlsZHJlbikge1xuICBmb3JFYWNoKGNoaWxkcmVuLCBwYXJlbnQuYXBwZW5kQ2hpbGQuYmluZChwYXJlbnQpKTtcbn1cblxuZnVuY3Rpb24gYmVmb3JlKG5vZGVzLCByZWYpIHtcbiAgZm9yRWFjaChub2RlcywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2YXIgcGFyZW50ID0gKHJlZiB8fCBub2RlKS5wYXJlbnROb2RlO1xuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShub2RlLCByZWYpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoZXMoZWxtLCBzZWxlY3Rvcikge1xuICByZXR1cm4gaXNIVE1MRWxlbWVudChlbG0pICYmIChlbG1bXCJtc01hdGNoZXNTZWxlY3RvclwiXSB8fCBlbG0ubWF0Y2hlcykuY2FsbChlbG0sIHNlbGVjdG9yKTtcbn1cblxuZnVuY3Rpb24gY2hpbGRyZW4ocGFyZW50LCBzZWxlY3Rvcikge1xuICB2YXIgY2hpbGRyZW4yID0gcGFyZW50ID8gc2xpY2UocGFyZW50LmNoaWxkcmVuKSA6IFtdO1xuICByZXR1cm4gc2VsZWN0b3IgPyBjaGlsZHJlbjIuZmlsdGVyKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBtYXRjaGVzKGNoaWxkLCBzZWxlY3Rvcik7XG4gIH0pIDogY2hpbGRyZW4yO1xufVxuXG5mdW5jdGlvbiBjaGlsZChwYXJlbnQsIHNlbGVjdG9yKSB7XG4gIHJldHVybiBzZWxlY3RvciA/IGNoaWxkcmVuKHBhcmVudCwgc2VsZWN0b3IpWzBdIDogcGFyZW50LmZpcnN0RWxlbWVudENoaWxkO1xufVxuXG52YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzO1xuXG5mdW5jdGlvbiBmb3JPd24ob2JqZWN0LCBpdGVyYXRlZSwgcmlnaHQpIHtcbiAgaWYgKG9iamVjdCkge1xuICAgIChyaWdodCA/IG93bktleXMob2JqZWN0KS5yZXZlcnNlKCkgOiBvd25LZXlzKG9iamVjdCkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAga2V5ICE9PSBcIl9fcHJvdG9fX1wiICYmIGl0ZXJhdGVlKG9iamVjdFtrZXldLCBrZXkpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gYXNzaWduKG9iamVjdCkge1xuICBzbGljZShhcmd1bWVudHMsIDEpLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgIGZvck93bihzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICBvYmplY3Rba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gbWVyZ2Uob2JqZWN0KSB7XG4gIHNsaWNlKGFyZ3VtZW50cywgMSkuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgZm9yT3duKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBvYmplY3Rba2V5XSA9IHZhbHVlLnNsaWNlKCk7XG4gICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICBvYmplY3Rba2V5XSA9IG1lcmdlKHt9LCBpc09iamVjdChvYmplY3Rba2V5XSkgPyBvYmplY3Rba2V5XSA6IHt9LCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gb21pdChvYmplY3QsIGtleXMpIHtcbiAgZm9yRWFjaChrZXlzIHx8IG93bktleXMob2JqZWN0KSwgZnVuY3Rpb24gKGtleSkge1xuICAgIGRlbGV0ZSBvYmplY3Rba2V5XTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShlbG1zLCBhdHRycykge1xuICBmb3JFYWNoKGVsbXMsIGZ1bmN0aW9uIChlbG0pIHtcbiAgICBmb3JFYWNoKGF0dHJzLCBmdW5jdGlvbiAoYXR0cikge1xuICAgICAgZWxtICYmIGVsbS5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUoZWxtcywgYXR0cnMsIHZhbHVlKSB7XG4gIGlmIChpc09iamVjdChhdHRycykpIHtcbiAgICBmb3JPd24oYXR0cnMsIGZ1bmN0aW9uICh2YWx1ZTIsIG5hbWUpIHtcbiAgICAgIHNldEF0dHJpYnV0ZShlbG1zLCBuYW1lLCB2YWx1ZTIpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGZvckVhY2goZWxtcywgZnVuY3Rpb24gKGVsbSkge1xuICAgICAgaXNOdWxsKHZhbHVlKSB8fCB2YWx1ZSA9PT0gXCJcIiA/IHJlbW92ZUF0dHJpYnV0ZShlbG0sIGF0dHJzKSA6IGVsbS5zZXRBdHRyaWJ1dGUoYXR0cnMsIFN0cmluZyh2YWx1ZSkpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZSh0YWcsIGF0dHJzLCBwYXJlbnQpIHtcbiAgdmFyIGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblxuICBpZiAoYXR0cnMpIHtcbiAgICBpc1N0cmluZyhhdHRycykgPyBhZGRDbGFzcyhlbG0sIGF0dHJzKSA6IHNldEF0dHJpYnV0ZShlbG0sIGF0dHJzKTtcbiAgfVxuXG4gIHBhcmVudCAmJiBhcHBlbmQocGFyZW50LCBlbG0pO1xuICByZXR1cm4gZWxtO1xufVxuXG5mdW5jdGlvbiBzdHlsZShlbG0sIHByb3AsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShlbG0pW3Byb3BdO1xuICB9XG5cbiAgaWYgKCFpc051bGwodmFsdWUpKSB7XG4gICAgZWxtLnN0eWxlW3Byb3BdID0gXCJcIiArIHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXkoZWxtLCBkaXNwbGF5Mikge1xuICBzdHlsZShlbG0sIFwiZGlzcGxheVwiLCBkaXNwbGF5Mik7XG59XG5cbmZ1bmN0aW9uIGZvY3VzKGVsbSkge1xuICBlbG1bXCJzZXRBY3RpdmVcIl0gJiYgZWxtW1wic2V0QWN0aXZlXCJdKCkgfHwgZWxtLmZvY3VzKHtcbiAgICBwcmV2ZW50U2Nyb2xsOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUoZWxtLCBhdHRyKSB7XG4gIHJldHVybiBlbG0uZ2V0QXR0cmlidXRlKGF0dHIpO1xufVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhlbG0sIGNsYXNzTmFtZSkge1xuICByZXR1cm4gZWxtICYmIGVsbS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gcmVjdCh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKG5vZGVzKSB7XG4gIGZvckVhY2gobm9kZXMsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaWYgKG5vZGUgJiYgbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcGFyc2VIdG1sKGh0bWwpIHtcbiAgcmV0dXJuIGNoaWxkKG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIikuYm9keSk7XG59XG5cbmZ1bmN0aW9uIHByZXZlbnQoZSwgc3RvcFByb3BhZ2F0aW9uKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBpZiAoc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5KHBhcmVudCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHBhcmVudCAmJiBwYXJlbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5QWxsKHBhcmVudCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHNlbGVjdG9yID8gc2xpY2UocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKSA6IFtdO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbG0sIGNsYXNzZXMpIHtcbiAgdG9nZ2xlQ2xhc3MoZWxtLCBjbGFzc2VzLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIHRpbWVPZihlKSB7XG4gIHJldHVybiBlLnRpbWVTdGFtcDtcbn1cblxuZnVuY3Rpb24gdW5pdCh2YWx1ZSkge1xuICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUgOiB2YWx1ZSA/IHZhbHVlICsgXCJweFwiIDogXCJcIjtcbn1cblxudmFyIFBST0pFQ1RfQ09ERSA9IFwic3BsaWRlXCI7XG52YXIgREFUQV9BVFRSSUJVVEUgPSBcImRhdGEtXCIgKyBQUk9KRUNUX0NPREU7XG5cbmZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJbXCIgKyBQUk9KRUNUX0NPREUgKyBcIl0gXCIgKyAobWVzc2FnZSB8fCBcIlwiKSk7XG4gIH1cbn1cblxudmFyIG1pbiA9IE1hdGgubWluLFxuICAgIG1heCA9IE1hdGgubWF4LFxuICAgIGZsb29yID0gTWF0aC5mbG9vcixcbiAgICBjZWlsID0gTWF0aC5jZWlsLFxuICAgIGFicyA9IE1hdGguYWJzO1xuXG5mdW5jdGlvbiBhcHByb3hpbWF0ZWx5RXF1YWwoeCwgeSwgZXBzaWxvbikge1xuICByZXR1cm4gYWJzKHggLSB5KSA8IGVwc2lsb247XG59XG5cbmZ1bmN0aW9uIGJldHdlZW4obnVtYmVyLCB4LCB5LCBleGNsdXNpdmUpIHtcbiAgdmFyIG1pbmltdW0gPSBtaW4oeCwgeSk7XG4gIHZhciBtYXhpbXVtID0gbWF4KHgsIHkpO1xuICByZXR1cm4gZXhjbHVzaXZlID8gbWluaW11bSA8IG51bWJlciAmJiBudW1iZXIgPCBtYXhpbXVtIDogbWluaW11bSA8PSBudW1iZXIgJiYgbnVtYmVyIDw9IG1heGltdW07XG59XG5cbmZ1bmN0aW9uIGNsYW1wKG51bWJlciwgeCwgeSkge1xuICB2YXIgbWluaW11bSA9IG1pbih4LCB5KTtcbiAgdmFyIG1heGltdW0gPSBtYXgoeCwgeSk7XG4gIHJldHVybiBtaW4obWF4KG1pbmltdW0sIG51bWJlciksIG1heGltdW0pO1xufVxuXG5mdW5jdGlvbiBzaWduKHgpIHtcbiAgcmV0dXJuICsoeCA+IDApIC0gKyh4IDwgMCk7XG59XG5cbmZ1bmN0aW9uIGNhbWVsVG9LZWJhYihzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oW2EtejAtOV0pKFtBLVpdKS9nLCBcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdChzdHJpbmcsIHJlcGxhY2VtZW50cykge1xuICBmb3JFYWNoKHJlcGxhY2VtZW50cywgZnVuY3Rpb24gKHJlcGxhY2VtZW50KSB7XG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoXCIlc1wiLCBcIlwiICsgcmVwbGFjZW1lbnQpO1xuICB9KTtcbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gcGFkKG51bWJlcikge1xuICByZXR1cm4gbnVtYmVyIDwgMTAgPyBcIjBcIiArIG51bWJlciA6IFwiXCIgKyBudW1iZXI7XG59XG5cbnZhciBpZHMgPSB7fTtcblxuZnVuY3Rpb24gdW5pcXVlSWQocHJlZml4KSB7XG4gIHJldHVybiBcIlwiICsgcHJlZml4ICsgcGFkKGlkc1twcmVmaXhdID0gKGlkc1twcmVmaXhdIHx8IDApICsgMSk7XG59XG5cbmZ1bmN0aW9uIEV2ZW50QmluZGVyKCkge1xuICB2YXIgbGlzdGVuZXJzID0gW107XG5cbiAgZnVuY3Rpb24gYmluZCh0YXJnZXRzLCBldmVudHMsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgZm9yRWFjaEV2ZW50KHRhcmdldHMsIGV2ZW50cywgZnVuY3Rpb24gKHRhcmdldCwgZXZlbnQsIG5hbWVzcGFjZSkge1xuICAgICAgdmFyIGlzRXZlbnRUYXJnZXQgPSAoXCJhZGRFdmVudExpc3RlbmVyXCIgaW4gdGFyZ2V0KTtcbiAgICAgIHZhciByZW1vdmVyID0gaXNFdmVudFRhcmdldCA/IHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyLmJpbmQodGFyZ2V0LCBldmVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIDogdGFyZ2V0W1wicmVtb3ZlTGlzdGVuZXJcIl0uYmluZCh0YXJnZXQsIGNhbGxiYWNrKTtcbiAgICAgIGlzRXZlbnRUYXJnZXQgPyB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIDogdGFyZ2V0W1wiYWRkTGlzdGVuZXJcIl0oY2FsbGJhY2spO1xuICAgICAgbGlzdGVuZXJzLnB1c2goW3RhcmdldCwgZXZlbnQsIG5hbWVzcGFjZSwgY2FsbGJhY2ssIHJlbW92ZXJdKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuYmluZCh0YXJnZXRzLCBldmVudHMsIGNhbGxiYWNrKSB7XG4gICAgZm9yRWFjaEV2ZW50KHRhcmdldHMsIGV2ZW50cywgZnVuY3Rpb24gKHRhcmdldCwgZXZlbnQsIG5hbWVzcGFjZSkge1xuICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKGxpc3RlbmVyWzBdID09PSB0YXJnZXQgJiYgbGlzdGVuZXJbMV0gPT09IGV2ZW50ICYmIGxpc3RlbmVyWzJdID09PSBuYW1lc3BhY2UgJiYgKCFjYWxsYmFjayB8fCBsaXN0ZW5lclszXSA9PT0gY2FsbGJhY2spKSB7XG4gICAgICAgICAgbGlzdGVuZXJbNF0oKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGF0Y2godGFyZ2V0LCB0eXBlLCBkZXRhaWwpIHtcbiAgICB2YXIgZTtcbiAgICB2YXIgYnViYmxlcyA9IHRydWU7XG5cbiAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGUgPSBuZXcgQ3VzdG9tRXZlbnQodHlwZSwge1xuICAgICAgICBidWJibGVzOiBidWJibGVzLFxuICAgICAgICBkZXRhaWw6IGRldGFpbFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO1xuICAgICAgZS5pbml0Q3VzdG9tRXZlbnQodHlwZSwgYnViYmxlcywgZmFsc2UsIGRldGFpbCk7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgcmV0dXJuIGU7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JFYWNoRXZlbnQodGFyZ2V0cywgZXZlbnRzLCBpdGVyYXRlZSkge1xuICAgIGZvckVhY2godGFyZ2V0cywgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgdGFyZ2V0ICYmIGZvckVhY2goZXZlbnRzLCBmdW5jdGlvbiAoZXZlbnRzMikge1xuICAgICAgICBldmVudHMyLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5TKSB7XG4gICAgICAgICAgdmFyIGZyYWdtZW50ID0gZXZlbnROUy5zcGxpdChcIi5cIik7XG4gICAgICAgICAgaXRlcmF0ZWUodGFyZ2V0LCBmcmFnbWVudFswXSwgZnJhZ21lbnRbMV0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgZGF0YVs0XSgpO1xuICAgIH0pO1xuICAgIGVtcHR5KGxpc3RlbmVycyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJpbmQ6IGJpbmQsXG4gICAgdW5iaW5kOiB1bmJpbmQsXG4gICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3lcbiAgfTtcbn1cblxudmFyIEVWRU5UX01PVU5URUQgPSBcIm1vdW50ZWRcIjtcbnZhciBFVkVOVF9SRUFEWSA9IFwicmVhZHlcIjtcbnZhciBFVkVOVF9NT1ZFID0gXCJtb3ZlXCI7XG52YXIgRVZFTlRfTU9WRUQgPSBcIm1vdmVkXCI7XG52YXIgRVZFTlRfQ0xJQ0sgPSBcImNsaWNrXCI7XG52YXIgRVZFTlRfQUNUSVZFID0gXCJhY3RpdmVcIjtcbnZhciBFVkVOVF9JTkFDVElWRSA9IFwiaW5hY3RpdmVcIjtcbnZhciBFVkVOVF9WSVNJQkxFID0gXCJ2aXNpYmxlXCI7XG52YXIgRVZFTlRfSElEREVOID0gXCJoaWRkZW5cIjtcbnZhciBFVkVOVF9SRUZSRVNIID0gXCJyZWZyZXNoXCI7XG52YXIgRVZFTlRfVVBEQVRFRCA9IFwidXBkYXRlZFwiO1xudmFyIEVWRU5UX1JFU0laRSA9IFwicmVzaXplXCI7XG52YXIgRVZFTlRfUkVTSVpFRCA9IFwicmVzaXplZFwiO1xudmFyIEVWRU5UX0RSQUcgPSBcImRyYWdcIjtcbnZhciBFVkVOVF9EUkFHR0lORyA9IFwiZHJhZ2dpbmdcIjtcbnZhciBFVkVOVF9EUkFHR0VEID0gXCJkcmFnZ2VkXCI7XG52YXIgRVZFTlRfU0NST0xMID0gXCJzY3JvbGxcIjtcbnZhciBFVkVOVF9TQ1JPTExFRCA9IFwic2Nyb2xsZWRcIjtcbnZhciBFVkVOVF9PVkVSRkxPVyA9IFwib3ZlcmZsb3dcIjtcbnZhciBFVkVOVF9ERVNUUk9ZID0gXCJkZXN0cm95XCI7XG52YXIgRVZFTlRfQVJST1dTX01PVU5URUQgPSBcImFycm93czptb3VudGVkXCI7XG52YXIgRVZFTlRfQVJST1dTX1VQREFURUQgPSBcImFycm93czp1cGRhdGVkXCI7XG52YXIgRVZFTlRfUEFHSU5BVElPTl9NT1VOVEVEID0gXCJwYWdpbmF0aW9uOm1vdW50ZWRcIjtcbnZhciBFVkVOVF9QQUdJTkFUSU9OX1VQREFURUQgPSBcInBhZ2luYXRpb246dXBkYXRlZFwiO1xudmFyIEVWRU5UX05BVklHQVRJT05fTU9VTlRFRCA9IFwibmF2aWdhdGlvbjptb3VudGVkXCI7XG52YXIgRVZFTlRfQVVUT1BMQVlfUExBWSA9IFwiYXV0b3BsYXk6cGxheVwiO1xudmFyIEVWRU5UX0FVVE9QTEFZX1BMQVlJTkcgPSBcImF1dG9wbGF5OnBsYXlpbmdcIjtcbnZhciBFVkVOVF9BVVRPUExBWV9QQVVTRSA9IFwiYXV0b3BsYXk6cGF1c2VcIjtcbnZhciBFVkVOVF9MQVpZTE9BRF9MT0FERUQgPSBcImxhenlsb2FkOmxvYWRlZFwiO1xudmFyIEVWRU5UX1NMSURFX0tFWURPV04gPSBcInNrXCI7XG52YXIgRVZFTlRfU0hJRlRFRCA9IFwic2hcIjtcbnZhciBFVkVOVF9FTkRfSU5ERVhfQ0hBTkdFRCA9IFwiZWlcIjtcblxuZnVuY3Rpb24gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMikge1xuICB2YXIgYnVzID0gU3BsaWRlMiA/IFNwbGlkZTIuZXZlbnQuYnVzIDogZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICB2YXIgYmluZGVyID0gRXZlbnRCaW5kZXIoKTtcblxuICBmdW5jdGlvbiBvbihldmVudHMsIGNhbGxiYWNrKSB7XG4gICAgYmluZGVyLmJpbmQoYnVzLCB0b0FycmF5KGV2ZW50cykuam9pbihcIiBcIiksIGZ1bmN0aW9uIChlKSB7XG4gICAgICBjYWxsYmFjay5hcHBseShjYWxsYmFjaywgaXNBcnJheShlLmRldGFpbCkgPyBlLmRldGFpbCA6IFtdKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVtaXQoZXZlbnQpIHtcbiAgICBiaW5kZXIuZGlzcGF0Y2goYnVzLCBldmVudCwgc2xpY2UoYXJndW1lbnRzLCAxKSk7XG4gIH1cblxuICBpZiAoU3BsaWRlMikge1xuICAgIFNwbGlkZTIuZXZlbnQub24oRVZFTlRfREVTVFJPWSwgYmluZGVyLmRlc3Ryb3kpO1xuICB9XG5cbiAgcmV0dXJuIGFzc2lnbihiaW5kZXIsIHtcbiAgICBidXM6IGJ1cyxcbiAgICBvbjogb24sXG4gICAgb2ZmOiBhcHBseShiaW5kZXIudW5iaW5kLCBidXMpLFxuICAgIGVtaXQ6IGVtaXRcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIFJlcXVlc3RJbnRlcnZhbChpbnRlcnZhbCwgb25JbnRlcnZhbCwgb25VcGRhdGUsIGxpbWl0KSB7XG4gIHZhciBub3cgPSBEYXRlLm5vdztcbiAgdmFyIHN0YXJ0VGltZTtcbiAgdmFyIHJhdGUgPSAwO1xuICB2YXIgaWQ7XG4gIHZhciBwYXVzZWQgPSB0cnVlO1xuICB2YXIgY291bnQgPSAwO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBpZiAoIXBhdXNlZCkge1xuICAgICAgcmF0ZSA9IGludGVydmFsID8gbWluKChub3coKSAtIHN0YXJ0VGltZSkgLyBpbnRlcnZhbCwgMSkgOiAxO1xuICAgICAgb25VcGRhdGUgJiYgb25VcGRhdGUocmF0ZSk7XG5cbiAgICAgIGlmIChyYXRlID49IDEpIHtcbiAgICAgICAgb25JbnRlcnZhbCgpO1xuICAgICAgICBzdGFydFRpbWUgPSBub3coKTtcblxuICAgICAgICBpZiAobGltaXQgJiYgKytjb3VudCA+PSBsaW1pdCkge1xuICAgICAgICAgIHJldHVybiBwYXVzZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlkID0gcmFmKHVwZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnQocmVzdW1lKSB7XG4gICAgcmVzdW1lIHx8IGNhbmNlbCgpO1xuICAgIHN0YXJ0VGltZSA9IG5vdygpIC0gKHJlc3VtZSA/IHJhdGUgKiBpbnRlcnZhbCA6IDApO1xuICAgIHBhdXNlZCA9IGZhbHNlO1xuICAgIGlkID0gcmFmKHVwZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICBwYXVzZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gcmV3aW5kKCkge1xuICAgIHN0YXJ0VGltZSA9IG5vdygpO1xuICAgIHJhdGUgPSAwO1xuXG4gICAgaWYgKG9uVXBkYXRlKSB7XG4gICAgICBvblVwZGF0ZShyYXRlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWQgJiYgY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xuICAgIHJhdGUgPSAwO1xuICAgIGlkID0gMDtcbiAgICBwYXVzZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0KHRpbWUpIHtcbiAgICBpbnRlcnZhbCA9IHRpbWU7XG4gIH1cblxuICBmdW5jdGlvbiBpc1BhdXNlZCgpIHtcbiAgICByZXR1cm4gcGF1c2VkO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdGFydDogc3RhcnQsXG4gICAgcmV3aW5kOiByZXdpbmQsXG4gICAgcGF1c2U6IHBhdXNlLFxuICAgIGNhbmNlbDogY2FuY2VsLFxuICAgIHNldDogc2V0LFxuICAgIGlzUGF1c2VkOiBpc1BhdXNlZFxuICB9O1xufVxuXG5mdW5jdGlvbiBTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIHN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXG4gIGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgIHN0YXRlID0gdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBpcyhzdGF0ZXMpIHtcbiAgICByZXR1cm4gaW5jbHVkZXModG9BcnJheShzdGF0ZXMpLCBzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNldDogc2V0LFxuICAgIGlzOiBpc1xuICB9O1xufVxuXG5mdW5jdGlvbiBUaHJvdHRsZShmdW5jLCBkdXJhdGlvbikge1xuICB2YXIgaW50ZXJ2YWwgPSBSZXF1ZXN0SW50ZXJ2YWwoZHVyYXRpb24gfHwgMCwgZnVuYywgbnVsbCwgMSk7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaW50ZXJ2YWwuaXNQYXVzZWQoKSAmJiBpbnRlcnZhbC5zdGFydCgpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBNZWRpYShTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgc3RhdGUgPSBTcGxpZGUyLnN0YXRlO1xuICB2YXIgYnJlYWtwb2ludHMgPSBvcHRpb25zLmJyZWFrcG9pbnRzIHx8IHt9O1xuICB2YXIgcmVkdWNlZE1vdGlvbiA9IG9wdGlvbnMucmVkdWNlZE1vdGlvbiB8fCB7fTtcbiAgdmFyIGJpbmRlciA9IEV2ZW50QmluZGVyKCk7XG4gIHZhciBxdWVyaWVzID0gW107XG5cbiAgZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgdmFyIGlzTWluID0gb3B0aW9ucy5tZWRpYVF1ZXJ5ID09PSBcIm1pblwiO1xuICAgIG93bktleXMoYnJlYWtwb2ludHMpLnNvcnQoZnVuY3Rpb24gKG4sIG0pIHtcbiAgICAgIHJldHVybiBpc01pbiA/ICtuIC0gK20gOiArbSAtICtuO1xuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmVnaXN0ZXIoYnJlYWtwb2ludHNba2V5XSwgXCIoXCIgKyAoaXNNaW4gPyBcIm1pblwiIDogXCJtYXhcIikgKyBcIi13aWR0aDpcIiArIGtleSArIFwicHgpXCIpO1xuICAgIH0pO1xuICAgIHJlZ2lzdGVyKHJlZHVjZWRNb3Rpb24sIE1FRElBX1BSRUZFUlNfUkVEVUNFRF9NT1RJT04pO1xuICAgIHVwZGF0ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveShjb21wbGV0ZWx5KSB7XG4gICAgaWYgKGNvbXBsZXRlbHkpIHtcbiAgICAgIGJpbmRlci5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXIob3B0aW9uczIsIHF1ZXJ5KSB7XG4gICAgdmFyIHF1ZXJ5TGlzdCA9IG1hdGNoTWVkaWEocXVlcnkpO1xuICAgIGJpbmRlci5iaW5kKHF1ZXJ5TGlzdCwgXCJjaGFuZ2VcIiwgdXBkYXRlKTtcbiAgICBxdWVyaWVzLnB1c2goW29wdGlvbnMyLCBxdWVyeUxpc3RdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgZGVzdHJveWVkID0gc3RhdGUuaXMoREVTVFJPWUVEKTtcbiAgICB2YXIgZGlyZWN0aW9uID0gb3B0aW9ucy5kaXJlY3Rpb247XG4gICAgdmFyIG1lcmdlZCA9IHF1ZXJpZXMucmVkdWNlKGZ1bmN0aW9uIChtZXJnZWQyLCBlbnRyeSkge1xuICAgICAgcmV0dXJuIG1lcmdlKG1lcmdlZDIsIGVudHJ5WzFdLm1hdGNoZXMgPyBlbnRyeVswXSA6IHt9KTtcbiAgICB9LCB7fSk7XG4gICAgb21pdChvcHRpb25zKTtcbiAgICBzZXQobWVyZ2VkKTtcblxuICAgIGlmIChvcHRpb25zLmRlc3Ryb3kpIHtcbiAgICAgIFNwbGlkZTIuZGVzdHJveShvcHRpb25zLmRlc3Ryb3kgPT09IFwiY29tcGxldGVseVwiKTtcbiAgICB9IGVsc2UgaWYgKGRlc3Ryb3llZCkge1xuICAgICAgZGVzdHJveSh0cnVlKTtcbiAgICAgIFNwbGlkZTIubW91bnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlyZWN0aW9uICE9PSBvcHRpb25zLmRpcmVjdGlvbiAmJiBTcGxpZGUyLnJlZnJlc2goKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWR1Y2UoZW5hYmxlKSB7XG4gICAgaWYgKG1hdGNoTWVkaWEoTUVESUFfUFJFRkVSU19SRURVQ0VEX01PVElPTikubWF0Y2hlcykge1xuICAgICAgZW5hYmxlID8gbWVyZ2Uob3B0aW9ucywgcmVkdWNlZE1vdGlvbikgOiBvbWl0KG9wdGlvbnMsIG93bktleXMocmVkdWNlZE1vdGlvbikpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldChvcHRzLCBiYXNlLCBub3RpZnkpIHtcbiAgICBtZXJnZShvcHRpb25zLCBvcHRzKTtcbiAgICBiYXNlICYmIG1lcmdlKE9iamVjdC5nZXRQcm90b3R5cGVPZihvcHRpb25zKSwgb3B0cyk7XG5cbiAgICBpZiAobm90aWZ5IHx8ICFzdGF0ZS5pcyhDUkVBVEVEKSkge1xuICAgICAgU3BsaWRlMi5lbWl0KEVWRU5UX1VQREFURUQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2V0dXA6IHNldHVwLFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgcmVkdWNlOiByZWR1Y2UsXG4gICAgc2V0OiBzZXRcbiAgfTtcbn1cblxudmFyIEFSUk9XID0gXCJBcnJvd1wiO1xudmFyIEFSUk9XX0xFRlQgPSBBUlJPVyArIFwiTGVmdFwiO1xudmFyIEFSUk9XX1JJR0hUID0gQVJST1cgKyBcIlJpZ2h0XCI7XG52YXIgQVJST1dfVVAgPSBBUlJPVyArIFwiVXBcIjtcbnZhciBBUlJPV19ET1dOID0gQVJST1cgKyBcIkRvd25cIjtcbnZhciBMVFIgPSBcImx0clwiO1xudmFyIFJUTCA9IFwicnRsXCI7XG52YXIgVFRCID0gXCJ0dGJcIjtcbnZhciBPUklFTlRBVElPTl9NQVAgPSB7XG4gIHdpZHRoOiBbXCJoZWlnaHRcIl0sXG4gIGxlZnQ6IFtcInRvcFwiLCBcInJpZ2h0XCJdLFxuICByaWdodDogW1wiYm90dG9tXCIsIFwibGVmdFwiXSxcbiAgeDogW1wieVwiXSxcbiAgWDogW1wiWVwiXSxcbiAgWTogW1wiWFwiXSxcbiAgQXJyb3dMZWZ0OiBbQVJST1dfVVAsIEFSUk9XX1JJR0hUXSxcbiAgQXJyb3dSaWdodDogW0FSUk9XX0RPV04sIEFSUk9XX0xFRlRdXG59O1xuXG5mdW5jdGlvbiBEaXJlY3Rpb24oU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgZnVuY3Rpb24gcmVzb2x2ZShwcm9wLCBheGlzT25seSwgZGlyZWN0aW9uKSB7XG4gICAgZGlyZWN0aW9uID0gZGlyZWN0aW9uIHx8IG9wdGlvbnMuZGlyZWN0aW9uO1xuICAgIHZhciBpbmRleCA9IGRpcmVjdGlvbiA9PT0gUlRMICYmICFheGlzT25seSA/IDEgOiBkaXJlY3Rpb24gPT09IFRUQiA/IDAgOiAtMTtcbiAgICByZXR1cm4gT1JJRU5UQVRJT05fTUFQW3Byb3BdICYmIE9SSUVOVEFUSU9OX01BUFtwcm9wXVtpbmRleF0gfHwgcHJvcC5yZXBsYWNlKC93aWR0aHxsZWZ0fHJpZ2h0L2ksIGZ1bmN0aW9uIChtYXRjaCwgb2Zmc2V0KSB7XG4gICAgICB2YXIgcmVwbGFjZW1lbnQgPSBPUklFTlRBVElPTl9NQVBbbWF0Y2gudG9Mb3dlckNhc2UoKV1baW5kZXhdIHx8IG1hdGNoO1xuICAgICAgcmV0dXJuIG9mZnNldCA+IDAgPyByZXBsYWNlbWVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJlcGxhY2VtZW50LnNsaWNlKDEpIDogcmVwbGFjZW1lbnQ7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvcmllbnQodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgKiAob3B0aW9ucy5kaXJlY3Rpb24gPT09IFJUTCA/IDEgOiAtMSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgb3JpZW50OiBvcmllbnRcbiAgfTtcbn1cblxudmFyIFJPTEUgPSBcInJvbGVcIjtcbnZhciBUQUJfSU5ERVggPSBcInRhYmluZGV4XCI7XG52YXIgRElTQUJMRUQgPSBcImRpc2FibGVkXCI7XG52YXIgQVJJQV9QUkVGSVggPSBcImFyaWEtXCI7XG52YXIgQVJJQV9DT05UUk9MUyA9IEFSSUFfUFJFRklYICsgXCJjb250cm9sc1wiO1xudmFyIEFSSUFfQ1VSUkVOVCA9IEFSSUFfUFJFRklYICsgXCJjdXJyZW50XCI7XG52YXIgQVJJQV9TRUxFQ1RFRCA9IEFSSUFfUFJFRklYICsgXCJzZWxlY3RlZFwiO1xudmFyIEFSSUFfTEFCRUwgPSBBUklBX1BSRUZJWCArIFwibGFiZWxcIjtcbnZhciBBUklBX0xBQkVMTEVEQlkgPSBBUklBX1BSRUZJWCArIFwibGFiZWxsZWRieVwiO1xudmFyIEFSSUFfSElEREVOID0gQVJJQV9QUkVGSVggKyBcImhpZGRlblwiO1xudmFyIEFSSUFfT1JJRU5UQVRJT04gPSBBUklBX1BSRUZJWCArIFwib3JpZW50YXRpb25cIjtcbnZhciBBUklBX1JPTEVERVNDUklQVElPTiA9IEFSSUFfUFJFRklYICsgXCJyb2xlZGVzY3JpcHRpb25cIjtcbnZhciBBUklBX0xJVkUgPSBBUklBX1BSRUZJWCArIFwibGl2ZVwiO1xudmFyIEFSSUFfQlVTWSA9IEFSSUFfUFJFRklYICsgXCJidXN5XCI7XG52YXIgQVJJQV9BVE9NSUMgPSBBUklBX1BSRUZJWCArIFwiYXRvbWljXCI7XG52YXIgQUxMX0FUVFJJQlVURVMgPSBbUk9MRSwgVEFCX0lOREVYLCBESVNBQkxFRCwgQVJJQV9DT05UUk9MUywgQVJJQV9DVVJSRU5ULCBBUklBX0xBQkVMLCBBUklBX0xBQkVMTEVEQlksIEFSSUFfSElEREVOLCBBUklBX09SSUVOVEFUSU9OLCBBUklBX1JPTEVERVNDUklQVElPTl07XG52YXIgQ0xBU1NfUFJFRklYID0gUFJPSkVDVF9DT0RFICsgXCJfX1wiO1xudmFyIFNUQVRVU19DTEFTU19QUkVGSVggPSBcImlzLVwiO1xudmFyIENMQVNTX1JPT1QgPSBQUk9KRUNUX0NPREU7XG52YXIgQ0xBU1NfVFJBQ0sgPSBDTEFTU19QUkVGSVggKyBcInRyYWNrXCI7XG52YXIgQ0xBU1NfTElTVCA9IENMQVNTX1BSRUZJWCArIFwibGlzdFwiO1xudmFyIENMQVNTX1NMSURFID0gQ0xBU1NfUFJFRklYICsgXCJzbGlkZVwiO1xudmFyIENMQVNTX0NMT05FID0gQ0xBU1NfU0xJREUgKyBcIi0tY2xvbmVcIjtcbnZhciBDTEFTU19DT05UQUlORVIgPSBDTEFTU19TTElERSArIFwiX19jb250YWluZXJcIjtcbnZhciBDTEFTU19BUlJPV1MgPSBDTEFTU19QUkVGSVggKyBcImFycm93c1wiO1xudmFyIENMQVNTX0FSUk9XID0gQ0xBU1NfUFJFRklYICsgXCJhcnJvd1wiO1xudmFyIENMQVNTX0FSUk9XX1BSRVYgPSBDTEFTU19BUlJPVyArIFwiLS1wcmV2XCI7XG52YXIgQ0xBU1NfQVJST1dfTkVYVCA9IENMQVNTX0FSUk9XICsgXCItLW5leHRcIjtcbnZhciBDTEFTU19QQUdJTkFUSU9OID0gQ0xBU1NfUFJFRklYICsgXCJwYWdpbmF0aW9uXCI7XG52YXIgQ0xBU1NfUEFHSU5BVElPTl9QQUdFID0gQ0xBU1NfUEFHSU5BVElPTiArIFwiX19wYWdlXCI7XG52YXIgQ0xBU1NfUFJPR1JFU1MgPSBDTEFTU19QUkVGSVggKyBcInByb2dyZXNzXCI7XG52YXIgQ0xBU1NfUFJPR1JFU1NfQkFSID0gQ0xBU1NfUFJPR1JFU1MgKyBcIl9fYmFyXCI7XG52YXIgQ0xBU1NfVE9HR0xFID0gQ0xBU1NfUFJFRklYICsgXCJ0b2dnbGVcIjtcbnZhciBDTEFTU19UT0dHTEVfUExBWSA9IENMQVNTX1RPR0dMRSArIFwiX19wbGF5XCI7XG52YXIgQ0xBU1NfVE9HR0xFX1BBVVNFID0gQ0xBU1NfVE9HR0xFICsgXCJfX3BhdXNlXCI7XG52YXIgQ0xBU1NfU1BJTk5FUiA9IENMQVNTX1BSRUZJWCArIFwic3Bpbm5lclwiO1xudmFyIENMQVNTX1NSID0gQ0xBU1NfUFJFRklYICsgXCJzclwiO1xudmFyIENMQVNTX0lOSVRJQUxJWkVEID0gU1RBVFVTX0NMQVNTX1BSRUZJWCArIFwiaW5pdGlhbGl6ZWRcIjtcbnZhciBDTEFTU19BQ1RJVkUgPSBTVEFUVVNfQ0xBU1NfUFJFRklYICsgXCJhY3RpdmVcIjtcbnZhciBDTEFTU19QUkVWID0gU1RBVFVTX0NMQVNTX1BSRUZJWCArIFwicHJldlwiO1xudmFyIENMQVNTX05FWFQgPSBTVEFUVVNfQ0xBU1NfUFJFRklYICsgXCJuZXh0XCI7XG52YXIgQ0xBU1NfVklTSUJMRSA9IFNUQVRVU19DTEFTU19QUkVGSVggKyBcInZpc2libGVcIjtcbnZhciBDTEFTU19MT0FESU5HID0gU1RBVFVTX0NMQVNTX1BSRUZJWCArIFwibG9hZGluZ1wiO1xudmFyIENMQVNTX0ZPQ1VTX0lOID0gU1RBVFVTX0NMQVNTX1BSRUZJWCArIFwiZm9jdXMtaW5cIjtcbnZhciBDTEFTU19PVkVSRkxPVyA9IFNUQVRVU19DTEFTU19QUkVGSVggKyBcIm92ZXJmbG93XCI7XG52YXIgU1RBVFVTX0NMQVNTRVMgPSBbQ0xBU1NfQUNUSVZFLCBDTEFTU19WSVNJQkxFLCBDTEFTU19QUkVWLCBDTEFTU19ORVhULCBDTEFTU19MT0FESU5HLCBDTEFTU19GT0NVU19JTiwgQ0xBU1NfT1ZFUkZMT1ddO1xudmFyIENMQVNTRVMgPSB7XG4gIHNsaWRlOiBDTEFTU19TTElERSxcbiAgY2xvbmU6IENMQVNTX0NMT05FLFxuICBhcnJvd3M6IENMQVNTX0FSUk9XUyxcbiAgYXJyb3c6IENMQVNTX0FSUk9XLFxuICBwcmV2OiBDTEFTU19BUlJPV19QUkVWLFxuICBuZXh0OiBDTEFTU19BUlJPV19ORVhULFxuICBwYWdpbmF0aW9uOiBDTEFTU19QQUdJTkFUSU9OLFxuICBwYWdlOiBDTEFTU19QQUdJTkFUSU9OX1BBR0UsXG4gIHNwaW5uZXI6IENMQVNTX1NQSU5ORVJcbn07XG5cbmZ1bmN0aW9uIGNsb3Nlc3QoZnJvbSwgc2VsZWN0b3IpIHtcbiAgaWYgKGlzRnVuY3Rpb24oZnJvbS5jbG9zZXN0KSkge1xuICAgIHJldHVybiBmcm9tLmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICB9XG5cbiAgdmFyIGVsbSA9IGZyb207XG5cbiAgd2hpbGUgKGVsbSAmJiBlbG0ubm9kZVR5cGUgPT09IDEpIHtcbiAgICBpZiAobWF0Y2hlcyhlbG0sIHNlbGVjdG9yKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZWxtID0gZWxtLnBhcmVudEVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gZWxtO1xufVxuXG52YXIgRlJJQ1RJT04gPSA1O1xudmFyIExPR19JTlRFUlZBTCA9IDIwMDtcbnZhciBQT0lOVEVSX0RPV05fRVZFTlRTID0gXCJ0b3VjaHN0YXJ0IG1vdXNlZG93blwiO1xudmFyIFBPSU5URVJfTU9WRV9FVkVOVFMgPSBcInRvdWNobW92ZSBtb3VzZW1vdmVcIjtcbnZhciBQT0lOVEVSX1VQX0VWRU5UUyA9IFwidG91Y2hlbmQgdG91Y2hjYW5jZWwgbW91c2V1cCBjbGlja1wiO1xuXG5mdW5jdGlvbiBFbGVtZW50cyhTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBvbiA9IF9FdmVudEludGVyZmFjZS5vbixcbiAgICAgIGJpbmQgPSBfRXZlbnRJbnRlcmZhY2UuYmluZDtcblxuICB2YXIgcm9vdCA9IFNwbGlkZTIucm9vdDtcbiAgdmFyIGkxOG4gPSBvcHRpb25zLmkxOG47XG4gIHZhciBlbGVtZW50cyA9IHt9O1xuICB2YXIgc2xpZGVzID0gW107XG4gIHZhciByb290Q2xhc3NlcyA9IFtdO1xuICB2YXIgdHJhY2tDbGFzc2VzID0gW107XG4gIHZhciB0cmFjaztcbiAgdmFyIGxpc3Q7XG4gIHZhciBpc1VzaW5nS2V5O1xuXG4gIGZ1bmN0aW9uIHNldHVwKCkge1xuICAgIGNvbGxlY3QoKTtcbiAgICBpbml0KCk7XG4gICAgdXBkYXRlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBvbihFVkVOVF9SRUZSRVNILCBkZXN0cm95KTtcbiAgICBvbihFVkVOVF9SRUZSRVNILCBzZXR1cCk7XG4gICAgb24oRVZFTlRfVVBEQVRFRCwgdXBkYXRlKTtcbiAgICBiaW5kKGRvY3VtZW50LCBQT0lOVEVSX0RPV05fRVZFTlRTICsgXCIga2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaXNVc2luZ0tleSA9IGUudHlwZSA9PT0gXCJrZXlkb3duXCI7XG4gICAgfSwge1xuICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgIH0pO1xuICAgIGJpbmQocm9vdCwgXCJmb2N1c2luXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRvZ2dsZUNsYXNzKHJvb3QsIENMQVNTX0ZPQ1VTX0lOLCAhIWlzVXNpbmdLZXkpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveShjb21wbGV0ZWx5KSB7XG4gICAgdmFyIGF0dHJzID0gQUxMX0FUVFJJQlVURVMuY29uY2F0KFwic3R5bGVcIik7XG4gICAgZW1wdHkoc2xpZGVzKTtcbiAgICByZW1vdmVDbGFzcyhyb290LCByb290Q2xhc3Nlcyk7XG4gICAgcmVtb3ZlQ2xhc3ModHJhY2ssIHRyYWNrQ2xhc3Nlcyk7XG4gICAgcmVtb3ZlQXR0cmlidXRlKFt0cmFjaywgbGlzdF0sIGF0dHJzKTtcbiAgICByZW1vdmVBdHRyaWJ1dGUocm9vdCwgY29tcGxldGVseSA/IGF0dHJzIDogW1wic3R5bGVcIiwgQVJJQV9ST0xFREVTQ1JJUFRJT05dKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICByZW1vdmVDbGFzcyhyb290LCByb290Q2xhc3Nlcyk7XG4gICAgcmVtb3ZlQ2xhc3ModHJhY2ssIHRyYWNrQ2xhc3Nlcyk7XG4gICAgcm9vdENsYXNzZXMgPSBnZXRDbGFzc2VzKENMQVNTX1JPT1QpO1xuICAgIHRyYWNrQ2xhc3NlcyA9IGdldENsYXNzZXMoQ0xBU1NfVFJBQ0spO1xuICAgIGFkZENsYXNzKHJvb3QsIHJvb3RDbGFzc2VzKTtcbiAgICBhZGRDbGFzcyh0cmFjaywgdHJhY2tDbGFzc2VzKTtcbiAgICBzZXRBdHRyaWJ1dGUocm9vdCwgQVJJQV9MQUJFTCwgb3B0aW9ucy5sYWJlbCk7XG4gICAgc2V0QXR0cmlidXRlKHJvb3QsIEFSSUFfTEFCRUxMRURCWSwgb3B0aW9ucy5sYWJlbGxlZGJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbGxlY3QoKSB7XG4gICAgdHJhY2sgPSBmaW5kKFwiLlwiICsgQ0xBU1NfVFJBQ0spO1xuICAgIGxpc3QgPSBjaGlsZCh0cmFjaywgXCIuXCIgKyBDTEFTU19MSVNUKTtcbiAgICBhc3NlcnQodHJhY2sgJiYgbGlzdCwgXCJBIHRyYWNrL2xpc3QgZWxlbWVudCBpcyBtaXNzaW5nLlwiKTtcbiAgICBwdXNoKHNsaWRlcywgY2hpbGRyZW4obGlzdCwgXCIuXCIgKyBDTEFTU19TTElERSArIFwiOm5vdCguXCIgKyBDTEFTU19DTE9ORSArIFwiKVwiKSk7XG4gICAgZm9yT3duKHtcbiAgICAgIGFycm93czogQ0xBU1NfQVJST1dTLFxuICAgICAgcGFnaW5hdGlvbjogQ0xBU1NfUEFHSU5BVElPTixcbiAgICAgIHByZXY6IENMQVNTX0FSUk9XX1BSRVYsXG4gICAgICBuZXh0OiBDTEFTU19BUlJPV19ORVhULFxuICAgICAgYmFyOiBDTEFTU19QUk9HUkVTU19CQVIsXG4gICAgICB0b2dnbGU6IENMQVNTX1RPR0dMRVxuICAgIH0sIGZ1bmN0aW9uIChjbGFzc05hbWUsIGtleSkge1xuICAgICAgZWxlbWVudHNba2V5XSA9IGZpbmQoXCIuXCIgKyBjbGFzc05hbWUpO1xuICAgIH0pO1xuICAgIGFzc2lnbihlbGVtZW50cywge1xuICAgICAgcm9vdDogcm9vdCxcbiAgICAgIHRyYWNrOiB0cmFjayxcbiAgICAgIGxpc3Q6IGxpc3QsXG4gICAgICBzbGlkZXM6IHNsaWRlc1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgaWQgPSByb290LmlkIHx8IHVuaXF1ZUlkKFBST0pFQ1RfQ09ERSk7XG4gICAgdmFyIHJvbGUgPSBvcHRpb25zLnJvbGU7XG4gICAgcm9vdC5pZCA9IGlkO1xuICAgIHRyYWNrLmlkID0gdHJhY2suaWQgfHwgaWQgKyBcIi10cmFja1wiO1xuICAgIGxpc3QuaWQgPSBsaXN0LmlkIHx8IGlkICsgXCItbGlzdFwiO1xuXG4gICAgaWYgKCFnZXRBdHRyaWJ1dGUocm9vdCwgUk9MRSkgJiYgcm9vdC50YWdOYW1lICE9PSBcIlNFQ1RJT05cIiAmJiByb2xlKSB7XG4gICAgICBzZXRBdHRyaWJ1dGUocm9vdCwgUk9MRSwgcm9sZSk7XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlKHJvb3QsIEFSSUFfUk9MRURFU0NSSVBUSU9OLCBpMThuLmNhcm91c2VsKTtcbiAgICBzZXRBdHRyaWJ1dGUobGlzdCwgUk9MRSwgXCJwcmVzZW50YXRpb25cIik7XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kKHNlbGVjdG9yKSB7XG4gICAgdmFyIGVsbSA9IHF1ZXJ5KHJvb3QsIHNlbGVjdG9yKTtcbiAgICByZXR1cm4gZWxtICYmIGNsb3Nlc3QoZWxtLCBcIi5cIiArIENMQVNTX1JPT1QpID09PSByb290ID8gZWxtIDogdm9pZCAwO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NlcyhiYXNlKSB7XG4gICAgcmV0dXJuIFtiYXNlICsgXCItLVwiICsgb3B0aW9ucy50eXBlLCBiYXNlICsgXCItLVwiICsgb3B0aW9ucy5kaXJlY3Rpb24sIG9wdGlvbnMuZHJhZyAmJiBiYXNlICsgXCItLWRyYWdnYWJsZVwiLCBvcHRpb25zLmlzTmF2aWdhdGlvbiAmJiBiYXNlICsgXCItLW5hdlwiLCBiYXNlID09PSBDTEFTU19ST09UICYmIENMQVNTX0FDVElWRV07XG4gIH1cblxuICByZXR1cm4gYXNzaWduKGVsZW1lbnRzLCB7XG4gICAgc2V0dXA6IHNldHVwLFxuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBkZXN0cm95XG4gIH0pO1xufVxuXG52YXIgU0xJREUgPSBcInNsaWRlXCI7XG52YXIgTE9PUCA9IFwibG9vcFwiO1xudmFyIEZBREUgPSBcImZhZGVcIjtcblxuZnVuY3Rpb24gU2xpZGUkMShTcGxpZGUyLCBpbmRleCwgc2xpZGVJbmRleCwgc2xpZGUpIHtcbiAgdmFyIGV2ZW50ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMik7XG4gIHZhciBvbiA9IGV2ZW50Lm9uLFxuICAgICAgZW1pdCA9IGV2ZW50LmVtaXQsXG4gICAgICBiaW5kID0gZXZlbnQuYmluZDtcbiAgdmFyIENvbXBvbmVudHMgPSBTcGxpZGUyLkNvbXBvbmVudHMsXG4gICAgICByb290ID0gU3BsaWRlMi5yb290LFxuICAgICAgb3B0aW9ucyA9IFNwbGlkZTIub3B0aW9ucztcbiAgdmFyIGlzTmF2aWdhdGlvbiA9IG9wdGlvbnMuaXNOYXZpZ2F0aW9uLFxuICAgICAgdXBkYXRlT25Nb3ZlID0gb3B0aW9ucy51cGRhdGVPbk1vdmUsXG4gICAgICBpMThuID0gb3B0aW9ucy5pMThuLFxuICAgICAgcGFnaW5hdGlvbiA9IG9wdGlvbnMucGFnaW5hdGlvbixcbiAgICAgIHNsaWRlRm9jdXMgPSBvcHRpb25zLnNsaWRlRm9jdXM7XG4gIHZhciByZXNvbHZlID0gQ29tcG9uZW50cy5EaXJlY3Rpb24ucmVzb2x2ZTtcbiAgdmFyIHN0eWxlcyA9IGdldEF0dHJpYnV0ZShzbGlkZSwgXCJzdHlsZVwiKTtcbiAgdmFyIGxhYmVsID0gZ2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX0xBQkVMKTtcbiAgdmFyIGlzQ2xvbmUgPSBzbGlkZUluZGV4ID4gLTE7XG4gIHZhciBjb250YWluZXIgPSBjaGlsZChzbGlkZSwgXCIuXCIgKyBDTEFTU19DT05UQUlORVIpO1xuICB2YXIgZGVzdHJveWVkO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGlmICghaXNDbG9uZSkge1xuICAgICAgc2xpZGUuaWQgPSByb290LmlkICsgXCItc2xpZGVcIiArIHBhZChpbmRleCArIDEpO1xuICAgICAgc2V0QXR0cmlidXRlKHNsaWRlLCBST0xFLCBwYWdpbmF0aW9uID8gXCJ0YWJwYW5lbFwiIDogXCJncm91cFwiKTtcbiAgICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgQVJJQV9ST0xFREVTQ1JJUFRJT04sIGkxOG4uc2xpZGUpO1xuICAgICAgc2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX0xBQkVMLCBsYWJlbCB8fCBmb3JtYXQoaTE4bi5zbGlkZUxhYmVsLCBbaW5kZXggKyAxLCBTcGxpZGUyLmxlbmd0aF0pKTtcbiAgICB9XG5cbiAgICBsaXN0ZW4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbigpIHtcbiAgICBiaW5kKHNsaWRlLCBcImNsaWNrXCIsIGFwcGx5KGVtaXQsIEVWRU5UX0NMSUNLLCBzZWxmKSk7XG4gICAgYmluZChzbGlkZSwgXCJrZXlkb3duXCIsIGFwcGx5KGVtaXQsIEVWRU5UX1NMSURFX0tFWURPV04sIHNlbGYpKTtcbiAgICBvbihbRVZFTlRfTU9WRUQsIEVWRU5UX1NISUZURUQsIEVWRU5UX1NDUk9MTEVEXSwgdXBkYXRlKTtcbiAgICBvbihFVkVOVF9OQVZJR0FUSU9OX01PVU5URUQsIGluaXROYXZpZ2F0aW9uKTtcblxuICAgIGlmICh1cGRhdGVPbk1vdmUpIHtcbiAgICAgIG9uKEVWRU5UX01PVkUsIG9uTW92ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBkZXN0cm95ZWQgPSB0cnVlO1xuICAgIGV2ZW50LmRlc3Ryb3koKTtcbiAgICByZW1vdmVDbGFzcyhzbGlkZSwgU1RBVFVTX0NMQVNTRVMpO1xuICAgIHJlbW92ZUF0dHJpYnV0ZShzbGlkZSwgQUxMX0FUVFJJQlVURVMpO1xuICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgXCJzdHlsZVwiLCBzdHlsZXMpO1xuICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgQVJJQV9MQUJFTCwgbGFiZWwgfHwgXCJcIik7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0TmF2aWdhdGlvbigpIHtcbiAgICB2YXIgY29udHJvbHMgPSBTcGxpZGUyLnNwbGlkZXMubWFwKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIHZhciBTbGlkZTIgPSB0YXJnZXQuc3BsaWRlLkNvbXBvbmVudHMuU2xpZGVzLmdldEF0KGluZGV4KTtcbiAgICAgIHJldHVybiBTbGlkZTIgPyBTbGlkZTIuc2xpZGUuaWQgOiBcIlwiO1xuICAgIH0pLmpvaW4oXCIgXCIpO1xuICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgQVJJQV9MQUJFTCwgZm9ybWF0KGkxOG4uc2xpZGVYLCAoaXNDbG9uZSA/IHNsaWRlSW5kZXggOiBpbmRleCkgKyAxKSk7XG4gICAgc2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX0NPTlRST0xTLCBjb250cm9scyk7XG4gICAgc2V0QXR0cmlidXRlKHNsaWRlLCBST0xFLCBzbGlkZUZvY3VzID8gXCJidXR0b25cIiA6IFwiXCIpO1xuICAgIHNsaWRlRm9jdXMgJiYgcmVtb3ZlQXR0cmlidXRlKHNsaWRlLCBBUklBX1JPTEVERVNDUklQVElPTik7XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdmUoKSB7XG4gICAgaWYgKCFkZXN0cm95ZWQpIHtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBpZiAoIWRlc3Ryb3llZCkge1xuICAgICAgdmFyIGN1cnIgPSBTcGxpZGUyLmluZGV4O1xuICAgICAgdXBkYXRlQWN0aXZpdHkoKTtcbiAgICAgIHVwZGF0ZVZpc2liaWxpdHkoKTtcbiAgICAgIHRvZ2dsZUNsYXNzKHNsaWRlLCBDTEFTU19QUkVWLCBpbmRleCA9PT0gY3VyciAtIDEpO1xuICAgICAgdG9nZ2xlQ2xhc3Moc2xpZGUsIENMQVNTX05FWFQsIGluZGV4ID09PSBjdXJyICsgMSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQWN0aXZpdHkoKSB7XG4gICAgdmFyIGFjdGl2ZSA9IGlzQWN0aXZlKCk7XG5cbiAgICBpZiAoYWN0aXZlICE9PSBoYXNDbGFzcyhzbGlkZSwgQ0xBU1NfQUNUSVZFKSkge1xuICAgICAgdG9nZ2xlQ2xhc3Moc2xpZGUsIENMQVNTX0FDVElWRSwgYWN0aXZlKTtcbiAgICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgQVJJQV9DVVJSRU5ULCBpc05hdmlnYXRpb24gJiYgYWN0aXZlIHx8IFwiXCIpO1xuICAgICAgZW1pdChhY3RpdmUgPyBFVkVOVF9BQ1RJVkUgOiBFVkVOVF9JTkFDVElWRSwgc2VsZik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVmlzaWJpbGl0eSgpIHtcbiAgICB2YXIgdmlzaWJsZSA9IGlzVmlzaWJsZSgpO1xuICAgIHZhciBoaWRkZW4gPSAhdmlzaWJsZSAmJiAoIWlzQWN0aXZlKCkgfHwgaXNDbG9uZSk7XG5cbiAgICBpZiAoIVNwbGlkZTIuc3RhdGUuaXMoW01PVklORywgU0NST0xMSU5HXSkpIHtcbiAgICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgQVJJQV9ISURERU4sIGhpZGRlbiB8fCBcIlwiKTtcbiAgICB9XG5cbiAgICBzZXRBdHRyaWJ1dGUocXVlcnlBbGwoc2xpZGUsIG9wdGlvbnMuZm9jdXNhYmxlTm9kZXMgfHwgXCJcIiksIFRBQl9JTkRFWCwgaGlkZGVuID8gLTEgOiBcIlwiKTtcblxuICAgIGlmIChzbGlkZUZvY3VzKSB7XG4gICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIFRBQl9JTkRFWCwgaGlkZGVuID8gLTEgOiAwKTtcbiAgICB9XG5cbiAgICBpZiAodmlzaWJsZSAhPT0gaGFzQ2xhc3Moc2xpZGUsIENMQVNTX1ZJU0lCTEUpKSB7XG4gICAgICB0b2dnbGVDbGFzcyhzbGlkZSwgQ0xBU1NfVklTSUJMRSwgdmlzaWJsZSk7XG4gICAgICBlbWl0KHZpc2libGUgPyBFVkVOVF9WSVNJQkxFIDogRVZFTlRfSElEREVOLCBzZWxmKTtcbiAgICB9XG5cbiAgICBpZiAoIXZpc2libGUgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gc2xpZGUpIHtcbiAgICAgIHZhciBTbGlkZTIgPSBDb21wb25lbnRzLlNsaWRlcy5nZXRBdChTcGxpZGUyLmluZGV4KTtcbiAgICAgIFNsaWRlMiAmJiBmb2N1cyhTbGlkZTIuc2xpZGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0eWxlJDEocHJvcCwgdmFsdWUsIHVzZUNvbnRhaW5lcikge1xuICAgIHN0eWxlKHVzZUNvbnRhaW5lciAmJiBjb250YWluZXIgfHwgc2xpZGUsIHByb3AsIHZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQWN0aXZlKCkge1xuICAgIHZhciBjdXJyID0gU3BsaWRlMi5pbmRleDtcbiAgICByZXR1cm4gY3VyciA9PT0gaW5kZXggfHwgb3B0aW9ucy5jbG9uZVN0YXR1cyAmJiBjdXJyID09PSBzbGlkZUluZGV4O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNWaXNpYmxlKCkge1xuICAgIGlmIChTcGxpZGUyLmlzKEZBREUpKSB7XG4gICAgICByZXR1cm4gaXNBY3RpdmUoKTtcbiAgICB9XG5cbiAgICB2YXIgdHJhY2tSZWN0ID0gcmVjdChDb21wb25lbnRzLkVsZW1lbnRzLnRyYWNrKTtcbiAgICB2YXIgc2xpZGVSZWN0ID0gcmVjdChzbGlkZSk7XG4gICAgdmFyIGxlZnQgPSByZXNvbHZlKFwibGVmdFwiLCB0cnVlKTtcbiAgICB2YXIgcmlnaHQgPSByZXNvbHZlKFwicmlnaHRcIiwgdHJ1ZSk7XG4gICAgcmV0dXJuIGZsb29yKHRyYWNrUmVjdFtsZWZ0XSkgPD0gY2VpbChzbGlkZVJlY3RbbGVmdF0pICYmIGZsb29yKHNsaWRlUmVjdFtyaWdodF0pIDw9IGNlaWwodHJhY2tSZWN0W3JpZ2h0XSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1dpdGhpbihmcm9tLCBkaXN0YW5jZSkge1xuICAgIHZhciBkaWZmID0gYWJzKGZyb20gLSBpbmRleCk7XG5cbiAgICBpZiAoIWlzQ2xvbmUgJiYgKG9wdGlvbnMucmV3aW5kIHx8IFNwbGlkZTIuaXMoTE9PUCkpKSB7XG4gICAgICBkaWZmID0gbWluKGRpZmYsIFNwbGlkZTIubGVuZ3RoIC0gZGlmZik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpZmYgPD0gZGlzdGFuY2U7XG4gIH1cblxuICB2YXIgc2VsZiA9IHtcbiAgICBpbmRleDogaW5kZXgsXG4gICAgc2xpZGVJbmRleDogc2xpZGVJbmRleCxcbiAgICBzbGlkZTogc2xpZGUsXG4gICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgaXNDbG9uZTogaXNDbG9uZSxcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogZGVzdHJveSxcbiAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICBzdHlsZTogc3R5bGUkMSxcbiAgICBpc1dpdGhpbjogaXNXaXRoaW5cbiAgfTtcbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIFNsaWRlcyhTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlMiA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2UyLm9uLFxuICAgICAgZW1pdCA9IF9FdmVudEludGVyZmFjZTIuZW1pdCxcbiAgICAgIGJpbmQgPSBfRXZlbnRJbnRlcmZhY2UyLmJpbmQ7XG5cbiAgdmFyIF9Db21wb25lbnRzMiRFbGVtZW50cyA9IENvbXBvbmVudHMyLkVsZW1lbnRzLFxuICAgICAgc2xpZGVzID0gX0NvbXBvbmVudHMyJEVsZW1lbnRzLnNsaWRlcyxcbiAgICAgIGxpc3QgPSBfQ29tcG9uZW50czIkRWxlbWVudHMubGlzdDtcbiAgdmFyIFNsaWRlczIgPSBbXTtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpbml0KCk7XG4gICAgb24oRVZFTlRfUkVGUkVTSCwgZGVzdHJveSk7XG4gICAgb24oRVZFTlRfUkVGUkVTSCwgaW5pdCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChzbGlkZSwgaW5kZXgpIHtcbiAgICAgIHJlZ2lzdGVyKHNsaWRlLCBpbmRleCwgLTEpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBmb3JFYWNoJDEoZnVuY3Rpb24gKFNsaWRlMikge1xuICAgICAgU2xpZGUyLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgICBlbXB0eShTbGlkZXMyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBmb3JFYWNoJDEoZnVuY3Rpb24gKFNsaWRlMikge1xuICAgICAgU2xpZGUyLnVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXIoc2xpZGUsIGluZGV4LCBzbGlkZUluZGV4KSB7XG4gICAgdmFyIG9iamVjdCA9IFNsaWRlJDEoU3BsaWRlMiwgaW5kZXgsIHNsaWRlSW5kZXgsIHNsaWRlKTtcbiAgICBvYmplY3QubW91bnQoKTtcbiAgICBTbGlkZXMyLnB1c2gob2JqZWN0KTtcbiAgICBTbGlkZXMyLnNvcnQoZnVuY3Rpb24gKFNsaWRlMSwgU2xpZGUyKSB7XG4gICAgICByZXR1cm4gU2xpZGUxLmluZGV4IC0gU2xpZGUyLmluZGV4O1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0KGV4Y2x1ZGVDbG9uZXMpIHtcbiAgICByZXR1cm4gZXhjbHVkZUNsb25lcyA/IGZpbHRlcihmdW5jdGlvbiAoU2xpZGUyKSB7XG4gICAgICByZXR1cm4gIVNsaWRlMi5pc0Nsb25lO1xuICAgIH0pIDogU2xpZGVzMjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEluKHBhZ2UpIHtcbiAgICB2YXIgQ29udHJvbGxlciA9IENvbXBvbmVudHMyLkNvbnRyb2xsZXI7XG4gICAgdmFyIGluZGV4ID0gQ29udHJvbGxlci50b0luZGV4KHBhZ2UpO1xuICAgIHZhciBtYXggPSBDb250cm9sbGVyLmhhc0ZvY3VzKCkgPyAxIDogb3B0aW9ucy5wZXJQYWdlO1xuICAgIHJldHVybiBmaWx0ZXIoZnVuY3Rpb24gKFNsaWRlMikge1xuICAgICAgcmV0dXJuIGJldHdlZW4oU2xpZGUyLmluZGV4LCBpbmRleCwgaW5kZXggKyBtYXggLSAxKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEF0KGluZGV4KSB7XG4gICAgcmV0dXJuIGZpbHRlcihpbmRleClbMF07XG4gIH1cblxuICBmdW5jdGlvbiBhZGQoaXRlbXMsIGluZGV4KSB7XG4gICAgZm9yRWFjaChpdGVtcywgZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICBpZiAoaXNTdHJpbmcoc2xpZGUpKSB7XG4gICAgICAgIHNsaWRlID0gcGFyc2VIdG1sKHNsaWRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzSFRNTEVsZW1lbnQoc2xpZGUpKSB7XG4gICAgICAgIHZhciByZWYgPSBzbGlkZXNbaW5kZXhdO1xuICAgICAgICByZWYgPyBiZWZvcmUoc2xpZGUsIHJlZikgOiBhcHBlbmQobGlzdCwgc2xpZGUpO1xuICAgICAgICBhZGRDbGFzcyhzbGlkZSwgb3B0aW9ucy5jbGFzc2VzLnNsaWRlKTtcbiAgICAgICAgb2JzZXJ2ZUltYWdlcyhzbGlkZSwgYXBwbHkoZW1pdCwgRVZFTlRfUkVTSVpFKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZW1pdChFVkVOVF9SRUZSRVNIKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZSQxKG1hdGNoZXIpIHtcbiAgICByZW1vdmUoZmlsdGVyKG1hdGNoZXIpLm1hcChmdW5jdGlvbiAoU2xpZGUyKSB7XG4gICAgICByZXR1cm4gU2xpZGUyLnNsaWRlO1xuICAgIH0pKTtcbiAgICBlbWl0KEVWRU5UX1JFRlJFU0gpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9yRWFjaCQxKGl0ZXJhdGVlLCBleGNsdWRlQ2xvbmVzKSB7XG4gICAgZ2V0KGV4Y2x1ZGVDbG9uZXMpLmZvckVhY2goaXRlcmF0ZWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZmlsdGVyKG1hdGNoZXIpIHtcbiAgICByZXR1cm4gU2xpZGVzMi5maWx0ZXIoaXNGdW5jdGlvbihtYXRjaGVyKSA/IG1hdGNoZXIgOiBmdW5jdGlvbiAoU2xpZGUyKSB7XG4gICAgICByZXR1cm4gaXNTdHJpbmcobWF0Y2hlcikgPyBtYXRjaGVzKFNsaWRlMi5zbGlkZSwgbWF0Y2hlcikgOiBpbmNsdWRlcyh0b0FycmF5KG1hdGNoZXIpLCBTbGlkZTIuaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3R5bGUocHJvcCwgdmFsdWUsIHVzZUNvbnRhaW5lcikge1xuICAgIGZvckVhY2gkMShmdW5jdGlvbiAoU2xpZGUyKSB7XG4gICAgICBTbGlkZTIuc3R5bGUocHJvcCwgdmFsdWUsIHVzZUNvbnRhaW5lcik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvYnNlcnZlSW1hZ2VzKGVsbSwgY2FsbGJhY2spIHtcbiAgICB2YXIgaW1hZ2VzID0gcXVlcnlBbGwoZWxtLCBcImltZ1wiKTtcbiAgICB2YXIgbGVuZ3RoID0gaW1hZ2VzLmxlbmd0aDtcblxuICAgIGlmIChsZW5ndGgpIHtcbiAgICAgIGltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgYmluZChpbWcsIFwibG9hZCBlcnJvclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCEgLS1sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExlbmd0aChleGNsdWRlQ2xvbmVzKSB7XG4gICAgcmV0dXJuIGV4Y2x1ZGVDbG9uZXMgPyBzbGlkZXMubGVuZ3RoIDogU2xpZGVzMi5sZW5ndGg7XG4gIH1cblxuICBmdW5jdGlvbiBpc0Vub3VnaCgpIHtcbiAgICByZXR1cm4gU2xpZGVzMi5sZW5ndGggPiBvcHRpb25zLnBlclBhZ2U7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgIHVwZGF0ZTogdXBkYXRlLFxuICAgIHJlZ2lzdGVyOiByZWdpc3RlcixcbiAgICBnZXQ6IGdldCxcbiAgICBnZXRJbjogZ2V0SW4sXG4gICAgZ2V0QXQ6IGdldEF0LFxuICAgIGFkZDogYWRkLFxuICAgIHJlbW92ZTogcmVtb3ZlJDEsXG4gICAgZm9yRWFjaDogZm9yRWFjaCQxLFxuICAgIGZpbHRlcjogZmlsdGVyLFxuICAgIHN0eWxlOiBzdHlsZSxcbiAgICBnZXRMZW5ndGg6IGdldExlbmd0aCxcbiAgICBpc0Vub3VnaDogaXNFbm91Z2hcbiAgfTtcbn1cblxuZnVuY3Rpb24gTGF5b3V0KFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2UzID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBvbiA9IF9FdmVudEludGVyZmFjZTMub24sXG4gICAgICBiaW5kID0gX0V2ZW50SW50ZXJmYWNlMy5iaW5kLFxuICAgICAgZW1pdCA9IF9FdmVudEludGVyZmFjZTMuZW1pdDtcblxuICB2YXIgU2xpZGVzID0gQ29tcG9uZW50czIuU2xpZGVzO1xuICB2YXIgcmVzb2x2ZSA9IENvbXBvbmVudHMyLkRpcmVjdGlvbi5yZXNvbHZlO1xuICB2YXIgX0NvbXBvbmVudHMyJEVsZW1lbnRzMiA9IENvbXBvbmVudHMyLkVsZW1lbnRzLFxuICAgICAgcm9vdCA9IF9Db21wb25lbnRzMiRFbGVtZW50czIucm9vdCxcbiAgICAgIHRyYWNrID0gX0NvbXBvbmVudHMyJEVsZW1lbnRzMi50cmFjayxcbiAgICAgIGxpc3QgPSBfQ29tcG9uZW50czIkRWxlbWVudHMyLmxpc3Q7XG4gIHZhciBnZXRBdCA9IFNsaWRlcy5nZXRBdCxcbiAgICAgIHN0eWxlU2xpZGVzID0gU2xpZGVzLnN0eWxlO1xuICB2YXIgdmVydGljYWw7XG4gIHZhciByb290UmVjdDtcbiAgdmFyIG92ZXJmbG93O1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGluaXQoKTtcbiAgICBiaW5kKHdpbmRvdywgXCJyZXNpemUgbG9hZFwiLCBUaHJvdHRsZShhcHBseShlbWl0LCBFVkVOVF9SRVNJWkUpKSk7XG4gICAgb24oW0VWRU5UX1VQREFURUQsIEVWRU5UX1JFRlJFU0hdLCBpbml0KTtcbiAgICBvbihFVkVOVF9SRVNJWkUsIHJlc2l6ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZlcnRpY2FsID0gb3B0aW9ucy5kaXJlY3Rpb24gPT09IFRUQjtcbiAgICBzdHlsZShyb290LCBcIm1heFdpZHRoXCIsIHVuaXQob3B0aW9ucy53aWR0aCkpO1xuICAgIHN0eWxlKHRyYWNrLCByZXNvbHZlKFwicGFkZGluZ0xlZnRcIiksIGNzc1BhZGRpbmcoZmFsc2UpKTtcbiAgICBzdHlsZSh0cmFjaywgcmVzb2x2ZShcInBhZGRpbmdSaWdodFwiKSwgY3NzUGFkZGluZyh0cnVlKSk7XG4gICAgcmVzaXplKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzaXplKGZvcmNlKSB7XG4gICAgdmFyIG5ld1JlY3QgPSByZWN0KHJvb3QpO1xuXG4gICAgaWYgKGZvcmNlIHx8IHJvb3RSZWN0LndpZHRoICE9PSBuZXdSZWN0LndpZHRoIHx8IHJvb3RSZWN0LmhlaWdodCAhPT0gbmV3UmVjdC5oZWlnaHQpIHtcbiAgICAgIHN0eWxlKHRyYWNrLCBcImhlaWdodFwiLCBjc3NUcmFja0hlaWdodCgpKTtcbiAgICAgIHN0eWxlU2xpZGVzKHJlc29sdmUoXCJtYXJnaW5SaWdodFwiKSwgdW5pdChvcHRpb25zLmdhcCkpO1xuICAgICAgc3R5bGVTbGlkZXMoXCJ3aWR0aFwiLCBjc3NTbGlkZVdpZHRoKCkpO1xuICAgICAgc3R5bGVTbGlkZXMoXCJoZWlnaHRcIiwgY3NzU2xpZGVIZWlnaHQoKSwgdHJ1ZSk7XG4gICAgICByb290UmVjdCA9IG5ld1JlY3Q7XG4gICAgICBlbWl0KEVWRU5UX1JFU0laRUQpO1xuXG4gICAgICBpZiAob3ZlcmZsb3cgIT09IChvdmVyZmxvdyA9IGlzT3ZlcmZsb3coKSkpIHtcbiAgICAgICAgdG9nZ2xlQ2xhc3Mocm9vdCwgQ0xBU1NfT1ZFUkZMT1csIG92ZXJmbG93KTtcbiAgICAgICAgZW1pdChFVkVOVF9PVkVSRkxPVywgb3ZlcmZsb3cpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNzc1BhZGRpbmcocmlnaHQpIHtcbiAgICB2YXIgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZztcbiAgICB2YXIgcHJvcCA9IHJlc29sdmUocmlnaHQgPyBcInJpZ2h0XCIgOiBcImxlZnRcIik7XG4gICAgcmV0dXJuIHBhZGRpbmcgJiYgdW5pdChwYWRkaW5nW3Byb3BdIHx8IChpc09iamVjdChwYWRkaW5nKSA/IDAgOiBwYWRkaW5nKSkgfHwgXCIwcHhcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNzc1RyYWNrSGVpZ2h0KCkge1xuICAgIHZhciBoZWlnaHQgPSBcIlwiO1xuXG4gICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICBoZWlnaHQgPSBjc3NIZWlnaHQoKTtcbiAgICAgIGFzc2VydChoZWlnaHQsIFwiaGVpZ2h0IG9yIGhlaWdodFJhdGlvIGlzIG1pc3NpbmcuXCIpO1xuICAgICAgaGVpZ2h0ID0gXCJjYWxjKFwiICsgaGVpZ2h0ICsgXCIgLSBcIiArIGNzc1BhZGRpbmcoZmFsc2UpICsgXCIgLSBcIiArIGNzc1BhZGRpbmcodHJ1ZSkgKyBcIilcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgZnVuY3Rpb24gY3NzSGVpZ2h0KCkge1xuICAgIHJldHVybiB1bml0KG9wdGlvbnMuaGVpZ2h0IHx8IHJlY3QobGlzdCkud2lkdGggKiBvcHRpb25zLmhlaWdodFJhdGlvKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNzc1NsaWRlV2lkdGgoKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuYXV0b1dpZHRoID8gbnVsbCA6IHVuaXQob3B0aW9ucy5maXhlZFdpZHRoKSB8fCAodmVydGljYWwgPyBcIlwiIDogY3NzU2xpZGVTaXplKCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3NzU2xpZGVIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHVuaXQob3B0aW9ucy5maXhlZEhlaWdodCkgfHwgKHZlcnRpY2FsID8gb3B0aW9ucy5hdXRvSGVpZ2h0ID8gbnVsbCA6IGNzc1NsaWRlU2l6ZSgpIDogY3NzSGVpZ2h0KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3NzU2xpZGVTaXplKCkge1xuICAgIHZhciBnYXAgPSB1bml0KG9wdGlvbnMuZ2FwKTtcbiAgICByZXR1cm4gXCJjYWxjKCgxMDAlXCIgKyAoZ2FwICYmIFwiICsgXCIgKyBnYXApICsgXCIpL1wiICsgKG9wdGlvbnMucGVyUGFnZSB8fCAxKSArIChnYXAgJiYgXCIgLSBcIiArIGdhcCkgKyBcIilcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RTaXplKCkge1xuICAgIHJldHVybiByZWN0KGxpc3QpW3Jlc29sdmUoXCJ3aWR0aFwiKV07XG4gIH1cblxuICBmdW5jdGlvbiBzbGlkZVNpemUoaW5kZXgsIHdpdGhvdXRHYXApIHtcbiAgICB2YXIgU2xpZGUgPSBnZXRBdChpbmRleCB8fCAwKTtcbiAgICByZXR1cm4gU2xpZGUgPyByZWN0KFNsaWRlLnNsaWRlKVtyZXNvbHZlKFwid2lkdGhcIildICsgKHdpdGhvdXRHYXAgPyAwIDogZ2V0R2FwKCkpIDogMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvdGFsU2l6ZShpbmRleCwgd2l0aG91dEdhcCkge1xuICAgIHZhciBTbGlkZSA9IGdldEF0KGluZGV4KTtcblxuICAgIGlmIChTbGlkZSkge1xuICAgICAgdmFyIHJpZ2h0ID0gcmVjdChTbGlkZS5zbGlkZSlbcmVzb2x2ZShcInJpZ2h0XCIpXTtcbiAgICAgIHZhciBsZWZ0ID0gcmVjdChsaXN0KVtyZXNvbHZlKFwibGVmdFwiKV07XG4gICAgICByZXR1cm4gYWJzKHJpZ2h0IC0gbGVmdCkgKyAod2l0aG91dEdhcCA/IDAgOiBnZXRHYXAoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBmdW5jdGlvbiBzbGlkZXJTaXplKHdpdGhvdXRHYXApIHtcbiAgICByZXR1cm4gdG90YWxTaXplKFNwbGlkZTIubGVuZ3RoIC0gMSkgLSB0b3RhbFNpemUoMCkgKyBzbGlkZVNpemUoMCwgd2l0aG91dEdhcCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRHYXAoKSB7XG4gICAgdmFyIFNsaWRlID0gZ2V0QXQoMCk7XG4gICAgcmV0dXJuIFNsaWRlICYmIHBhcnNlRmxvYXQoc3R5bGUoU2xpZGUuc2xpZGUsIHJlc29sdmUoXCJtYXJnaW5SaWdodFwiKSkpIHx8IDA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQYWRkaW5nKHJpZ2h0KSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoc3R5bGUodHJhY2ssIHJlc29sdmUoXCJwYWRkaW5nXCIgKyAocmlnaHQgPyBcIlJpZ2h0XCIgOiBcIkxlZnRcIikpKSkgfHwgMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzT3ZlcmZsb3coKSB7XG4gICAgcmV0dXJuIFNwbGlkZTIuaXMoRkFERSkgfHwgc2xpZGVyU2l6ZSh0cnVlKSA+IGxpc3RTaXplKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICByZXNpemU6IHJlc2l6ZSxcbiAgICBsaXN0U2l6ZTogbGlzdFNpemUsXG4gICAgc2xpZGVTaXplOiBzbGlkZVNpemUsXG4gICAgc2xpZGVyU2l6ZTogc2xpZGVyU2l6ZSxcbiAgICB0b3RhbFNpemU6IHRvdGFsU2l6ZSxcbiAgICBnZXRQYWRkaW5nOiBnZXRQYWRkaW5nLFxuICAgIGlzT3ZlcmZsb3c6IGlzT3ZlcmZsb3dcbiAgfTtcbn1cblxudmFyIE1VTFRJUExJRVIgPSAyO1xuXG5mdW5jdGlvbiBDbG9uZXMoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIGV2ZW50ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMik7XG4gIHZhciBvbiA9IGV2ZW50Lm9uO1xuICB2YXIgRWxlbWVudHMgPSBDb21wb25lbnRzMi5FbGVtZW50cyxcbiAgICAgIFNsaWRlcyA9IENvbXBvbmVudHMyLlNsaWRlcztcbiAgdmFyIHJlc29sdmUgPSBDb21wb25lbnRzMi5EaXJlY3Rpb24ucmVzb2x2ZTtcbiAgdmFyIGNsb25lcyA9IFtdO1xuICB2YXIgY2xvbmVDb3VudDtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBvbihFVkVOVF9SRUZSRVNILCByZW1vdW50KTtcbiAgICBvbihbRVZFTlRfVVBEQVRFRCwgRVZFTlRfUkVTSVpFXSwgb2JzZXJ2ZSk7XG5cbiAgICBpZiAoY2xvbmVDb3VudCA9IGNvbXB1dGVDbG9uZUNvdW50KCkpIHtcbiAgICAgIGdlbmVyYXRlKGNsb25lQ291bnQpO1xuICAgICAgQ29tcG9uZW50czIuTGF5b3V0LnJlc2l6ZSh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdW50KCkge1xuICAgIGRlc3Ryb3koKTtcbiAgICBtb3VudCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICByZW1vdmUoY2xvbmVzKTtcbiAgICBlbXB0eShjbG9uZXMpO1xuICAgIGV2ZW50LmRlc3Ryb3koKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9ic2VydmUoKSB7XG4gICAgdmFyIGNvdW50ID0gY29tcHV0ZUNsb25lQ291bnQoKTtcblxuICAgIGlmIChjbG9uZUNvdW50ICE9PSBjb3VudCkge1xuICAgICAgaWYgKGNsb25lQ291bnQgPCBjb3VudCB8fCAhY291bnQpIHtcbiAgICAgICAgZXZlbnQuZW1pdChFVkVOVF9SRUZSRVNIKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZShjb3VudCkge1xuICAgIHZhciBzbGlkZXMgPSBTbGlkZXMuZ2V0KCkuc2xpY2UoKTtcbiAgICB2YXIgbGVuZ3RoID0gc2xpZGVzLmxlbmd0aDtcblxuICAgIGlmIChsZW5ndGgpIHtcbiAgICAgIHdoaWxlIChzbGlkZXMubGVuZ3RoIDwgY291bnQpIHtcbiAgICAgICAgcHVzaChzbGlkZXMsIHNsaWRlcyk7XG4gICAgICB9XG5cbiAgICAgIHB1c2goc2xpZGVzLnNsaWNlKC1jb3VudCksIHNsaWRlcy5zbGljZSgwLCBjb3VudCkpLmZvckVhY2goZnVuY3Rpb24gKFNsaWRlLCBpbmRleCkge1xuICAgICAgICB2YXIgaXNIZWFkID0gaW5kZXggPCBjb3VudDtcbiAgICAgICAgdmFyIGNsb25lID0gY2xvbmVEZWVwKFNsaWRlLnNsaWRlLCBpbmRleCk7XG4gICAgICAgIGlzSGVhZCA/IGJlZm9yZShjbG9uZSwgc2xpZGVzWzBdLnNsaWRlKSA6IGFwcGVuZChFbGVtZW50cy5saXN0LCBjbG9uZSk7XG4gICAgICAgIHB1c2goY2xvbmVzLCBjbG9uZSk7XG4gICAgICAgIFNsaWRlcy5yZWdpc3RlcihjbG9uZSwgaW5kZXggLSBjb3VudCArIChpc0hlYWQgPyAwIDogbGVuZ3RoKSwgU2xpZGUuaW5kZXgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvbmVEZWVwKGVsbSwgaW5kZXgpIHtcbiAgICB2YXIgY2xvbmUgPSBlbG0uY2xvbmVOb2RlKHRydWUpO1xuICAgIGFkZENsYXNzKGNsb25lLCBvcHRpb25zLmNsYXNzZXMuY2xvbmUpO1xuICAgIGNsb25lLmlkID0gU3BsaWRlMi5yb290LmlkICsgXCItY2xvbmVcIiArIHBhZChpbmRleCArIDEpO1xuICAgIHJldHVybiBjbG9uZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVDbG9uZUNvdW50KCkge1xuICAgIHZhciBjbG9uZXMyID0gb3B0aW9ucy5jbG9uZXM7XG5cbiAgICBpZiAoIVNwbGlkZTIuaXMoTE9PUCkpIHtcbiAgICAgIGNsb25lczIgPSAwO1xuICAgIH0gZWxzZSBpZiAoaXNVbmRlZmluZWQoY2xvbmVzMikpIHtcbiAgICAgIHZhciBmaXhlZFNpemUgPSBvcHRpb25zW3Jlc29sdmUoXCJmaXhlZFdpZHRoXCIpXSAmJiBDb21wb25lbnRzMi5MYXlvdXQuc2xpZGVTaXplKDApO1xuICAgICAgdmFyIGZpeGVkQ291bnQgPSBmaXhlZFNpemUgJiYgY2VpbChyZWN0KEVsZW1lbnRzLnRyYWNrKVtyZXNvbHZlKFwid2lkdGhcIildIC8gZml4ZWRTaXplKTtcbiAgICAgIGNsb25lczIgPSBmaXhlZENvdW50IHx8IG9wdGlvbnNbcmVzb2x2ZShcImF1dG9XaWR0aFwiKV0gJiYgU3BsaWRlMi5sZW5ndGggfHwgb3B0aW9ucy5wZXJQYWdlICogTVVMVElQTElFUjtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVzMjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3lcbiAgfTtcbn1cblxuZnVuY3Rpb24gTW92ZShTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlNCA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2U0Lm9uLFxuICAgICAgZW1pdCA9IF9FdmVudEludGVyZmFjZTQuZW1pdDtcblxuICB2YXIgc2V0ID0gU3BsaWRlMi5zdGF0ZS5zZXQ7XG4gIHZhciBfQ29tcG9uZW50czIkTGF5b3V0ID0gQ29tcG9uZW50czIuTGF5b3V0LFxuICAgICAgc2xpZGVTaXplID0gX0NvbXBvbmVudHMyJExheW91dC5zbGlkZVNpemUsXG4gICAgICBnZXRQYWRkaW5nID0gX0NvbXBvbmVudHMyJExheW91dC5nZXRQYWRkaW5nLFxuICAgICAgdG90YWxTaXplID0gX0NvbXBvbmVudHMyJExheW91dC50b3RhbFNpemUsXG4gICAgICBsaXN0U2l6ZSA9IF9Db21wb25lbnRzMiRMYXlvdXQubGlzdFNpemUsXG4gICAgICBzbGlkZXJTaXplID0gX0NvbXBvbmVudHMyJExheW91dC5zbGlkZXJTaXplO1xuICB2YXIgX0NvbXBvbmVudHMyJERpcmVjdGlvID0gQ29tcG9uZW50czIuRGlyZWN0aW9uLFxuICAgICAgcmVzb2x2ZSA9IF9Db21wb25lbnRzMiREaXJlY3Rpby5yZXNvbHZlLFxuICAgICAgb3JpZW50ID0gX0NvbXBvbmVudHMyJERpcmVjdGlvLm9yaWVudDtcbiAgdmFyIF9Db21wb25lbnRzMiRFbGVtZW50czMgPSBDb21wb25lbnRzMi5FbGVtZW50cyxcbiAgICAgIGxpc3QgPSBfQ29tcG9uZW50czIkRWxlbWVudHMzLmxpc3QsXG4gICAgICB0cmFjayA9IF9Db21wb25lbnRzMiRFbGVtZW50czMudHJhY2s7XG4gIHZhciBUcmFuc2l0aW9uO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIFRyYW5zaXRpb24gPSBDb21wb25lbnRzMi5UcmFuc2l0aW9uO1xuICAgIG9uKFtFVkVOVF9NT1VOVEVELCBFVkVOVF9SRVNJWkVELCBFVkVOVF9VUERBVEVELCBFVkVOVF9SRUZSRVNIXSwgcmVwb3NpdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiByZXBvc2l0aW9uKCkge1xuICAgIGlmICghQ29tcG9uZW50czIuQ29udHJvbGxlci5pc0J1c3koKSkge1xuICAgICAgQ29tcG9uZW50czIuU2Nyb2xsLmNhbmNlbCgpO1xuICAgICAganVtcChTcGxpZGUyLmluZGV4KTtcbiAgICAgIENvbXBvbmVudHMyLlNsaWRlcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtb3ZlKGRlc3QsIGluZGV4LCBwcmV2LCBjYWxsYmFjaykge1xuICAgIGlmIChkZXN0ICE9PSBpbmRleCAmJiBjYW5TaGlmdChkZXN0ID4gcHJldikpIHtcbiAgICAgIGNhbmNlbCgpO1xuICAgICAgdHJhbnNsYXRlKHNoaWZ0KGdldFBvc2l0aW9uKCksIGRlc3QgPiBwcmV2KSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgc2V0KE1PVklORyk7XG4gICAgZW1pdChFVkVOVF9NT1ZFLCBpbmRleCwgcHJldiwgZGVzdCk7XG4gICAgVHJhbnNpdGlvbi5zdGFydChpbmRleCwgZnVuY3Rpb24gKCkge1xuICAgICAgc2V0KElETEUpO1xuICAgICAgZW1pdChFVkVOVF9NT1ZFRCwgaW5kZXgsIHByZXYsIGRlc3QpO1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGp1bXAoaW5kZXgpIHtcbiAgICB0cmFuc2xhdGUodG9Qb3NpdGlvbihpbmRleCwgdHJ1ZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNsYXRlKHBvc2l0aW9uLCBwcmV2ZW50TG9vcCkge1xuICAgIGlmICghU3BsaWRlMi5pcyhGQURFKSkge1xuICAgICAgdmFyIGRlc3RpbmF0aW9uID0gcHJldmVudExvb3AgPyBwb3NpdGlvbiA6IGxvb3AocG9zaXRpb24pO1xuICAgICAgc3R5bGUobGlzdCwgXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGVcIiArIHJlc29sdmUoXCJYXCIpICsgXCIoXCIgKyBkZXN0aW5hdGlvbiArIFwicHgpXCIpO1xuICAgICAgcG9zaXRpb24gIT09IGRlc3RpbmF0aW9uICYmIGVtaXQoRVZFTlRfU0hJRlRFRCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbG9vcChwb3NpdGlvbikge1xuICAgIGlmIChTcGxpZGUyLmlzKExPT1ApKSB7XG4gICAgICB2YXIgaW5kZXggPSB0b0luZGV4KHBvc2l0aW9uKTtcbiAgICAgIHZhciBleGNlZWRlZE1heCA9IGluZGV4ID4gQ29tcG9uZW50czIuQ29udHJvbGxlci5nZXRFbmQoKTtcbiAgICAgIHZhciBleGNlZWRlZE1pbiA9IGluZGV4IDwgMDtcblxuICAgICAgaWYgKGV4Y2VlZGVkTWluIHx8IGV4Y2VlZGVkTWF4KSB7XG4gICAgICAgIHBvc2l0aW9uID0gc2hpZnQocG9zaXRpb24sIGV4Y2VlZGVkTWF4KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBzaGlmdChwb3NpdGlvbiwgYmFja3dhcmRzKSB7XG4gICAgdmFyIGV4Y2VzcyA9IHBvc2l0aW9uIC0gZ2V0TGltaXQoYmFja3dhcmRzKTtcbiAgICB2YXIgc2l6ZSA9IHNsaWRlclNpemUoKTtcbiAgICBwb3NpdGlvbiAtPSBvcmllbnQoc2l6ZSAqIChjZWlsKGFicyhleGNlc3MpIC8gc2l6ZSkgfHwgMSkpICogKGJhY2t3YXJkcyA/IDEgOiAtMSk7XG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIHRyYW5zbGF0ZShnZXRQb3NpdGlvbigpLCB0cnVlKTtcbiAgICBUcmFuc2l0aW9uLmNhbmNlbCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9JbmRleChwb3NpdGlvbikge1xuICAgIHZhciBTbGlkZXMgPSBDb21wb25lbnRzMi5TbGlkZXMuZ2V0KCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgbWluRGlzdGFuY2UgPSBJbmZpbml0eTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgU2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc2xpZGVJbmRleCA9IFNsaWRlc1tpXS5pbmRleDtcbiAgICAgIHZhciBkaXN0YW5jZSA9IGFicyh0b1Bvc2l0aW9uKHNsaWRlSW5kZXgsIHRydWUpIC0gcG9zaXRpb24pO1xuXG4gICAgICBpZiAoZGlzdGFuY2UgPD0gbWluRGlzdGFuY2UpIHtcbiAgICAgICAgbWluRGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgICAgaW5kZXggPSBzbGlkZUluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgZnVuY3Rpb24gdG9Qb3NpdGlvbihpbmRleCwgdHJpbW1pbmcpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBvcmllbnQodG90YWxTaXplKGluZGV4IC0gMSkgLSBvZmZzZXQoaW5kZXgpKTtcbiAgICByZXR1cm4gdHJpbW1pbmcgPyB0cmltKHBvc2l0aW9uKSA6IHBvc2l0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UG9zaXRpb24oKSB7XG4gICAgdmFyIGxlZnQgPSByZXNvbHZlKFwibGVmdFwiKTtcbiAgICByZXR1cm4gcmVjdChsaXN0KVtsZWZ0XSAtIHJlY3QodHJhY2spW2xlZnRdICsgb3JpZW50KGdldFBhZGRpbmcoZmFsc2UpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaW0ocG9zaXRpb24pIHtcbiAgICBpZiAob3B0aW9ucy50cmltU3BhY2UgJiYgU3BsaWRlMi5pcyhTTElERSkpIHtcbiAgICAgIHBvc2l0aW9uID0gY2xhbXAocG9zaXRpb24sIDAsIG9yaWVudChzbGlkZXJTaXplKHRydWUpIC0gbGlzdFNpemUoKSkpO1xuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9mZnNldChpbmRleCkge1xuICAgIHZhciBmb2N1cyA9IG9wdGlvbnMuZm9jdXM7XG4gICAgcmV0dXJuIGZvY3VzID09PSBcImNlbnRlclwiID8gKGxpc3RTaXplKCkgLSBzbGlkZVNpemUoaW5kZXgsIHRydWUpKSAvIDIgOiArZm9jdXMgKiBzbGlkZVNpemUoaW5kZXgpIHx8IDA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMaW1pdChtYXgpIHtcbiAgICByZXR1cm4gdG9Qb3NpdGlvbihtYXggPyBDb21wb25lbnRzMi5Db250cm9sbGVyLmdldEVuZCgpIDogMCwgISFvcHRpb25zLnRyaW1TcGFjZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5TaGlmdChiYWNrd2FyZHMpIHtcbiAgICB2YXIgc2hpZnRlZCA9IG9yaWVudChzaGlmdChnZXRQb3NpdGlvbigpLCBiYWNrd2FyZHMpKTtcbiAgICByZXR1cm4gYmFja3dhcmRzID8gc2hpZnRlZCA+PSAwIDogc2hpZnRlZCA8PSBsaXN0W3Jlc29sdmUoXCJzY3JvbGxXaWR0aFwiKV0gLSByZWN0KHRyYWNrKVtyZXNvbHZlKFwid2lkdGhcIildO1xuICB9XG5cbiAgZnVuY3Rpb24gZXhjZWVkZWRMaW1pdChtYXgsIHBvc2l0aW9uKSB7XG4gICAgcG9zaXRpb24gPSBpc1VuZGVmaW5lZChwb3NpdGlvbikgPyBnZXRQb3NpdGlvbigpIDogcG9zaXRpb247XG4gICAgdmFyIGV4Y2VlZGVkTWluID0gbWF4ICE9PSB0cnVlICYmIG9yaWVudChwb3NpdGlvbikgPCBvcmllbnQoZ2V0TGltaXQoZmFsc2UpKTtcbiAgICB2YXIgZXhjZWVkZWRNYXggPSBtYXggIT09IGZhbHNlICYmIG9yaWVudChwb3NpdGlvbikgPiBvcmllbnQoZ2V0TGltaXQodHJ1ZSkpO1xuICAgIHJldHVybiBleGNlZWRlZE1pbiB8fCBleGNlZWRlZE1heDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIG1vdmU6IG1vdmUsXG4gICAganVtcDoganVtcCxcbiAgICB0cmFuc2xhdGU6IHRyYW5zbGF0ZSxcbiAgICBzaGlmdDogc2hpZnQsXG4gICAgY2FuY2VsOiBjYW5jZWwsXG4gICAgdG9JbmRleDogdG9JbmRleCxcbiAgICB0b1Bvc2l0aW9uOiB0b1Bvc2l0aW9uLFxuICAgIGdldFBvc2l0aW9uOiBnZXRQb3NpdGlvbixcbiAgICBnZXRMaW1pdDogZ2V0TGltaXQsXG4gICAgZXhjZWVkZWRMaW1pdDogZXhjZWVkZWRMaW1pdCxcbiAgICByZXBvc2l0aW9uOiByZXBvc2l0aW9uXG4gIH07XG59XG5cbmZ1bmN0aW9uIENvbnRyb2xsZXIoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTUgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlNS5vbixcbiAgICAgIGVtaXQgPSBfRXZlbnRJbnRlcmZhY2U1LmVtaXQ7XG5cbiAgdmFyIE1vdmUgPSBDb21wb25lbnRzMi5Nb3ZlO1xuICB2YXIgZ2V0UG9zaXRpb24gPSBNb3ZlLmdldFBvc2l0aW9uLFxuICAgICAgZ2V0TGltaXQgPSBNb3ZlLmdldExpbWl0LFxuICAgICAgdG9Qb3NpdGlvbiA9IE1vdmUudG9Qb3NpdGlvbjtcbiAgdmFyIF9Db21wb25lbnRzMiRTbGlkZXMgPSBDb21wb25lbnRzMi5TbGlkZXMsXG4gICAgICBpc0Vub3VnaCA9IF9Db21wb25lbnRzMiRTbGlkZXMuaXNFbm91Z2gsXG4gICAgICBnZXRMZW5ndGggPSBfQ29tcG9uZW50czIkU2xpZGVzLmdldExlbmd0aDtcbiAgdmFyIG9taXRFbmQgPSBvcHRpb25zLm9taXRFbmQ7XG4gIHZhciBpc0xvb3AgPSBTcGxpZGUyLmlzKExPT1ApO1xuICB2YXIgaXNTbGlkZSA9IFNwbGlkZTIuaXMoU0xJREUpO1xuICB2YXIgZ2V0TmV4dCA9IGFwcGx5KGdldEFkamFjZW50LCBmYWxzZSk7XG4gIHZhciBnZXRQcmV2ID0gYXBwbHkoZ2V0QWRqYWNlbnQsIHRydWUpO1xuICB2YXIgY3VyckluZGV4ID0gb3B0aW9ucy5zdGFydCB8fCAwO1xuICB2YXIgZW5kSW5kZXg7XG4gIHZhciBwcmV2SW5kZXggPSBjdXJySW5kZXg7XG4gIHZhciBzbGlkZUNvdW50O1xuICB2YXIgcGVyTW92ZTtcbiAgdmFyIHBlclBhZ2U7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaW5pdCgpO1xuICAgIG9uKFtFVkVOVF9VUERBVEVELCBFVkVOVF9SRUZSRVNILCBFVkVOVF9FTkRfSU5ERVhfQ0hBTkdFRF0sIGluaXQpO1xuICAgIG9uKEVWRU5UX1JFU0laRUQsIG9uUmVzaXplZCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHNsaWRlQ291bnQgPSBnZXRMZW5ndGgodHJ1ZSk7XG4gICAgcGVyTW92ZSA9IG9wdGlvbnMucGVyTW92ZTtcbiAgICBwZXJQYWdlID0gb3B0aW9ucy5wZXJQYWdlO1xuICAgIGVuZEluZGV4ID0gZ2V0RW5kKCk7XG4gICAgdmFyIGluZGV4ID0gY2xhbXAoY3VyckluZGV4LCAwLCBvbWl0RW5kID8gZW5kSW5kZXggOiBzbGlkZUNvdW50IC0gMSk7XG5cbiAgICBpZiAoaW5kZXggIT09IGN1cnJJbmRleCkge1xuICAgICAgY3VyckluZGV4ID0gaW5kZXg7XG4gICAgICBNb3ZlLnJlcG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblJlc2l6ZWQoKSB7XG4gICAgaWYgKGVuZEluZGV4ICE9PSBnZXRFbmQoKSkge1xuICAgICAgZW1pdChFVkVOVF9FTkRfSU5ERVhfQ0hBTkdFRCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ28oY29udHJvbCwgYWxsb3dTYW1lSW5kZXgsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFpc0J1c3koKSkge1xuICAgICAgdmFyIGRlc3QgPSBwYXJzZShjb250cm9sKTtcbiAgICAgIHZhciBpbmRleCA9IGxvb3AoZGVzdCk7XG5cbiAgICAgIGlmIChpbmRleCA+IC0xICYmIChhbGxvd1NhbWVJbmRleCB8fCBpbmRleCAhPT0gY3VyckluZGV4KSkge1xuICAgICAgICBzZXRJbmRleChpbmRleCk7XG4gICAgICAgIE1vdmUubW92ZShkZXN0LCBpbmRleCwgcHJldkluZGV4LCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2Nyb2xsKGRlc3RpbmF0aW9uLCBkdXJhdGlvbiwgc25hcCwgY2FsbGJhY2spIHtcbiAgICBDb21wb25lbnRzMi5TY3JvbGwuc2Nyb2xsKGRlc3RpbmF0aW9uLCBkdXJhdGlvbiwgc25hcCwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGluZGV4ID0gbG9vcChNb3ZlLnRvSW5kZXgoZ2V0UG9zaXRpb24oKSkpO1xuICAgICAgc2V0SW5kZXgob21pdEVuZCA/IG1pbihpbmRleCwgZW5kSW5kZXgpIDogaW5kZXgpO1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlKGNvbnRyb2wpIHtcbiAgICB2YXIgaW5kZXggPSBjdXJySW5kZXg7XG5cbiAgICBpZiAoaXNTdHJpbmcoY29udHJvbCkpIHtcbiAgICAgIHZhciBfcmVmID0gY29udHJvbC5tYXRjaCgvKFsrXFwtPD5dKShcXGQrKT8vKSB8fCBbXSxcbiAgICAgICAgICBpbmRpY2F0b3IgPSBfcmVmWzFdLFxuICAgICAgICAgIG51bWJlciA9IF9yZWZbMl07XG5cbiAgICAgIGlmIChpbmRpY2F0b3IgPT09IFwiK1wiIHx8IGluZGljYXRvciA9PT0gXCItXCIpIHtcbiAgICAgICAgaW5kZXggPSBjb21wdXRlRGVzdEluZGV4KGN1cnJJbmRleCArICsoXCJcIiArIGluZGljYXRvciArICgrbnVtYmVyIHx8IDEpKSwgY3VyckluZGV4KTtcbiAgICAgIH0gZWxzZSBpZiAoaW5kaWNhdG9yID09PSBcIj5cIikge1xuICAgICAgICBpbmRleCA9IG51bWJlciA/IHRvSW5kZXgoK251bWJlcikgOiBnZXROZXh0KHRydWUpO1xuICAgICAgfSBlbHNlIGlmIChpbmRpY2F0b3IgPT09IFwiPFwiKSB7XG4gICAgICAgIGluZGV4ID0gZ2V0UHJldih0cnVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZXggPSBpc0xvb3AgPyBjb250cm9sIDogY2xhbXAoY29udHJvbCwgMCwgZW5kSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFkamFjZW50KHByZXYsIGRlc3RpbmF0aW9uKSB7XG4gICAgdmFyIG51bWJlciA9IHBlck1vdmUgfHwgKGhhc0ZvY3VzKCkgPyAxIDogcGVyUGFnZSk7XG4gICAgdmFyIGRlc3QgPSBjb21wdXRlRGVzdEluZGV4KGN1cnJJbmRleCArIG51bWJlciAqIChwcmV2ID8gLTEgOiAxKSwgY3VyckluZGV4LCAhKHBlck1vdmUgfHwgaGFzRm9jdXMoKSkpO1xuXG4gICAgaWYgKGRlc3QgPT09IC0xICYmIGlzU2xpZGUpIHtcbiAgICAgIGlmICghYXBwcm94aW1hdGVseUVxdWFsKGdldFBvc2l0aW9uKCksIGdldExpbWl0KCFwcmV2KSwgMSkpIHtcbiAgICAgICAgcmV0dXJuIHByZXYgPyAwIDogZW5kSW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uID8gZGVzdCA6IGxvb3AoZGVzdCk7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlRGVzdEluZGV4KGRlc3QsIGZyb20sIHNuYXBQYWdlKSB7XG4gICAgaWYgKGlzRW5vdWdoKCkgfHwgaGFzRm9jdXMoKSkge1xuICAgICAgdmFyIGluZGV4ID0gY29tcHV0ZU1vdmFibGVEZXN0SW5kZXgoZGVzdCk7XG5cbiAgICAgIGlmIChpbmRleCAhPT0gZGVzdCkge1xuICAgICAgICBmcm9tID0gZGVzdDtcbiAgICAgICAgZGVzdCA9IGluZGV4O1xuICAgICAgICBzbmFwUGFnZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGVzdCA8IDAgfHwgZGVzdCA+IGVuZEluZGV4KSB7XG4gICAgICAgIGlmICghcGVyTW92ZSAmJiAoYmV0d2VlbigwLCBkZXN0LCBmcm9tLCB0cnVlKSB8fCBiZXR3ZWVuKGVuZEluZGV4LCBmcm9tLCBkZXN0LCB0cnVlKSkpIHtcbiAgICAgICAgICBkZXN0ID0gdG9JbmRleCh0b1BhZ2UoZGVzdCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChpc0xvb3ApIHtcbiAgICAgICAgICAgIGRlc3QgPSBzbmFwUGFnZSA/IGRlc3QgPCAwID8gLShzbGlkZUNvdW50ICUgcGVyUGFnZSB8fCBwZXJQYWdlKSA6IHNsaWRlQ291bnQgOiBkZXN0O1xuICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5yZXdpbmQpIHtcbiAgICAgICAgICAgIGRlc3QgPSBkZXN0IDwgMCA/IGVuZEluZGV4IDogMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVzdCA9IC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNuYXBQYWdlICYmIGRlc3QgIT09IGZyb20pIHtcbiAgICAgICAgICBkZXN0ID0gdG9JbmRleCh0b1BhZ2UoZnJvbSkgKyAoZGVzdCA8IGZyb20gPyAtMSA6IDEpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkZXN0ID0gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc3Q7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlTW92YWJsZURlc3RJbmRleChkZXN0KSB7XG4gICAgaWYgKGlzU2xpZGUgJiYgb3B0aW9ucy50cmltU3BhY2UgPT09IFwibW92ZVwiICYmIGRlc3QgIT09IGN1cnJJbmRleCkge1xuICAgICAgdmFyIHBvc2l0aW9uID0gZ2V0UG9zaXRpb24oKTtcblxuICAgICAgd2hpbGUgKHBvc2l0aW9uID09PSB0b1Bvc2l0aW9uKGRlc3QsIHRydWUpICYmIGJldHdlZW4oZGVzdCwgMCwgU3BsaWRlMi5sZW5ndGggLSAxLCAhb3B0aW9ucy5yZXdpbmQpKSB7XG4gICAgICAgIGRlc3QgPCBjdXJySW5kZXggPyAtLWRlc3QgOiArK2Rlc3Q7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc3Q7XG4gIH1cblxuICBmdW5jdGlvbiBsb29wKGluZGV4KSB7XG4gICAgcmV0dXJuIGlzTG9vcCA/IChpbmRleCArIHNsaWRlQ291bnQpICUgc2xpZGVDb3VudCB8fCAwIDogaW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRFbmQoKSB7XG4gICAgdmFyIGVuZCA9IHNsaWRlQ291bnQgLSAoaGFzRm9jdXMoKSB8fCBpc0xvb3AgJiYgcGVyTW92ZSA/IDEgOiBwZXJQYWdlKTtcblxuICAgIHdoaWxlIChvbWl0RW5kICYmIGVuZC0tID4gMCkge1xuICAgICAgaWYgKHRvUG9zaXRpb24oc2xpZGVDb3VudCAtIDEsIHRydWUpICE9PSB0b1Bvc2l0aW9uKGVuZCwgdHJ1ZSkpIHtcbiAgICAgICAgZW5kKys7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjbGFtcChlbmQsIDAsIHNsaWRlQ291bnQgLSAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvSW5kZXgocGFnZSkge1xuICAgIHJldHVybiBjbGFtcChoYXNGb2N1cygpID8gcGFnZSA6IHBlclBhZ2UgKiBwYWdlLCAwLCBlbmRJbmRleCk7XG4gIH1cblxuICBmdW5jdGlvbiB0b1BhZ2UoaW5kZXgpIHtcbiAgICByZXR1cm4gaGFzRm9jdXMoKSA/IG1pbihpbmRleCwgZW5kSW5kZXgpIDogZmxvb3IoKGluZGV4ID49IGVuZEluZGV4ID8gc2xpZGVDb3VudCAtIDEgOiBpbmRleCkgLyBwZXJQYWdlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvRGVzdChkZXN0aW5hdGlvbikge1xuICAgIHZhciBjbG9zZXN0ID0gTW92ZS50b0luZGV4KGRlc3RpbmF0aW9uKTtcbiAgICByZXR1cm4gaXNTbGlkZSA/IGNsYW1wKGNsb3Nlc3QsIDAsIGVuZEluZGV4KSA6IGNsb3Nlc3Q7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRJbmRleChpbmRleCkge1xuICAgIGlmIChpbmRleCAhPT0gY3VyckluZGV4KSB7XG4gICAgICBwcmV2SW5kZXggPSBjdXJySW5kZXg7XG4gICAgICBjdXJySW5kZXggPSBpbmRleDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbmRleChwcmV2KSB7XG4gICAgcmV0dXJuIHByZXYgPyBwcmV2SW5kZXggOiBjdXJySW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiBoYXNGb2N1cygpIHtcbiAgICByZXR1cm4gIWlzVW5kZWZpbmVkKG9wdGlvbnMuZm9jdXMpIHx8IG9wdGlvbnMuaXNOYXZpZ2F0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNCdXN5KCkge1xuICAgIHJldHVybiBTcGxpZGUyLnN0YXRlLmlzKFtNT1ZJTkcsIFNDUk9MTElOR10pICYmICEhb3B0aW9ucy53YWl0Rm9yVHJhbnNpdGlvbjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGdvOiBnbyxcbiAgICBzY3JvbGw6IHNjcm9sbCxcbiAgICBnZXROZXh0OiBnZXROZXh0LFxuICAgIGdldFByZXY6IGdldFByZXYsXG4gICAgZ2V0QWRqYWNlbnQ6IGdldEFkamFjZW50LFxuICAgIGdldEVuZDogZ2V0RW5kLFxuICAgIHNldEluZGV4OiBzZXRJbmRleCxcbiAgICBnZXRJbmRleDogZ2V0SW5kZXgsXG4gICAgdG9JbmRleDogdG9JbmRleCxcbiAgICB0b1BhZ2U6IHRvUGFnZSxcbiAgICB0b0Rlc3Q6IHRvRGVzdCxcbiAgICBoYXNGb2N1czogaGFzRm9jdXMsXG4gICAgaXNCdXN5OiBpc0J1c3lcbiAgfTtcbn1cblxudmFyIFhNTF9OQU1FX1NQQUNFID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xudmFyIFBBVEggPSBcIm0xNS41IDAuOTMyLTQuMyA0LjM4IDE0LjUgMTQuNi0xNC41IDE0LjUgNC4zIDQuNCAxNC42LTE0LjYgNC40LTQuMy00LjQtNC40LTE0LjYtMTQuNnpcIjtcbnZhciBTSVpFID0gNDA7XG5cbmZ1bmN0aW9uIEFycm93cyhTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgZXZlbnQgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKTtcbiAgdmFyIG9uID0gZXZlbnQub24sXG4gICAgICBiaW5kID0gZXZlbnQuYmluZCxcbiAgICAgIGVtaXQgPSBldmVudC5lbWl0O1xuICB2YXIgY2xhc3NlcyA9IG9wdGlvbnMuY2xhc3NlcyxcbiAgICAgIGkxOG4gPSBvcHRpb25zLmkxOG47XG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMyLkVsZW1lbnRzLFxuICAgICAgQ29udHJvbGxlciA9IENvbXBvbmVudHMyLkNvbnRyb2xsZXI7XG4gIHZhciBwbGFjZWhvbGRlciA9IEVsZW1lbnRzLmFycm93cyxcbiAgICAgIHRyYWNrID0gRWxlbWVudHMudHJhY2s7XG4gIHZhciB3cmFwcGVyID0gcGxhY2Vob2xkZXI7XG4gIHZhciBwcmV2ID0gRWxlbWVudHMucHJldjtcbiAgdmFyIG5leHQgPSBFbGVtZW50cy5uZXh0O1xuICB2YXIgY3JlYXRlZDtcbiAgdmFyIHdyYXBwZXJDbGFzc2VzO1xuICB2YXIgYXJyb3dzID0ge307XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaW5pdCgpO1xuICAgIG9uKEVWRU5UX1VQREFURUQsIHJlbW91bnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3VudCgpIHtcbiAgICBkZXN0cm95KCk7XG4gICAgbW91bnQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIGVuYWJsZWQgPSBvcHRpb25zLmFycm93cztcblxuICAgIGlmIChlbmFibGVkICYmICEocHJldiAmJiBuZXh0KSkge1xuICAgICAgY3JlYXRlQXJyb3dzKCk7XG4gICAgfVxuXG4gICAgaWYgKHByZXYgJiYgbmV4dCkge1xuICAgICAgYXNzaWduKGFycm93cywge1xuICAgICAgICBwcmV2OiBwcmV2LFxuICAgICAgICBuZXh0OiBuZXh0XG4gICAgICB9KTtcbiAgICAgIGRpc3BsYXkod3JhcHBlciwgZW5hYmxlZCA/IFwiXCIgOiBcIm5vbmVcIik7XG4gICAgICBhZGRDbGFzcyh3cmFwcGVyLCB3cmFwcGVyQ2xhc3NlcyA9IENMQVNTX0FSUk9XUyArIFwiLS1cIiArIG9wdGlvbnMuZGlyZWN0aW9uKTtcblxuICAgICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgICAgbGlzdGVuKCk7XG4gICAgICAgIHVwZGF0ZSgpO1xuICAgICAgICBzZXRBdHRyaWJ1dGUoW3ByZXYsIG5leHRdLCBBUklBX0NPTlRST0xTLCB0cmFjay5pZCk7XG4gICAgICAgIGVtaXQoRVZFTlRfQVJST1dTX01PVU5URUQsIHByZXYsIG5leHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgZXZlbnQuZGVzdHJveSgpO1xuICAgIHJlbW92ZUNsYXNzKHdyYXBwZXIsIHdyYXBwZXJDbGFzc2VzKTtcblxuICAgIGlmIChjcmVhdGVkKSB7XG4gICAgICByZW1vdmUocGxhY2Vob2xkZXIgPyBbcHJldiwgbmV4dF0gOiB3cmFwcGVyKTtcbiAgICAgIHByZXYgPSBuZXh0ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlQXR0cmlidXRlKFtwcmV2LCBuZXh0XSwgQUxMX0FUVFJJQlVURVMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbigpIHtcbiAgICBvbihbRVZFTlRfTU9VTlRFRCwgRVZFTlRfTU9WRUQsIEVWRU5UX1JFRlJFU0gsIEVWRU5UX1NDUk9MTEVELCBFVkVOVF9FTkRfSU5ERVhfQ0hBTkdFRF0sIHVwZGF0ZSk7XG4gICAgYmluZChuZXh0LCBcImNsaWNrXCIsIGFwcGx5KGdvLCBcIj5cIikpO1xuICAgIGJpbmQocHJldiwgXCJjbGlja1wiLCBhcHBseShnbywgXCI8XCIpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvKGNvbnRyb2wpIHtcbiAgICBDb250cm9sbGVyLmdvKGNvbnRyb2wsIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyb3dzKCkge1xuICAgIHdyYXBwZXIgPSBwbGFjZWhvbGRlciB8fCBjcmVhdGUoXCJkaXZcIiwgY2xhc3Nlcy5hcnJvd3MpO1xuICAgIHByZXYgPSBjcmVhdGVBcnJvdyh0cnVlKTtcbiAgICBuZXh0ID0gY3JlYXRlQXJyb3coZmFsc2UpO1xuICAgIGNyZWF0ZWQgPSB0cnVlO1xuICAgIGFwcGVuZCh3cmFwcGVyLCBbcHJldiwgbmV4dF0pO1xuICAgICFwbGFjZWhvbGRlciAmJiBiZWZvcmUod3JhcHBlciwgdHJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyb3cocHJldjIpIHtcbiAgICB2YXIgYXJyb3cgPSBcIjxidXR0b24gY2xhc3M9XFxcIlwiICsgY2xhc3Nlcy5hcnJvdyArIFwiIFwiICsgKHByZXYyID8gY2xhc3Nlcy5wcmV2IDogY2xhc3Nlcy5uZXh0KSArIFwiXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPjxzdmcgeG1sbnM9XFxcIlwiICsgWE1MX05BTUVfU1BBQ0UgKyBcIlxcXCIgdmlld0JveD1cXFwiMCAwIFwiICsgU0laRSArIFwiIFwiICsgU0laRSArIFwiXFxcIiB3aWR0aD1cXFwiXCIgKyBTSVpFICsgXCJcXFwiIGhlaWdodD1cXFwiXCIgKyBTSVpFICsgXCJcXFwiIGZvY3VzYWJsZT1cXFwiZmFsc2VcXFwiPjxwYXRoIGQ9XFxcIlwiICsgKG9wdGlvbnMuYXJyb3dQYXRoIHx8IFBBVEgpICsgXCJcXFwiIC8+XCI7XG4gICAgcmV0dXJuIHBhcnNlSHRtbChhcnJvdyk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgaWYgKHByZXYgJiYgbmV4dCkge1xuICAgICAgdmFyIGluZGV4ID0gU3BsaWRlMi5pbmRleDtcbiAgICAgIHZhciBwcmV2SW5kZXggPSBDb250cm9sbGVyLmdldFByZXYoKTtcbiAgICAgIHZhciBuZXh0SW5kZXggPSBDb250cm9sbGVyLmdldE5leHQoKTtcbiAgICAgIHZhciBwcmV2TGFiZWwgPSBwcmV2SW5kZXggPiAtMSAmJiBpbmRleCA8IHByZXZJbmRleCA/IGkxOG4ubGFzdCA6IGkxOG4ucHJldjtcbiAgICAgIHZhciBuZXh0TGFiZWwgPSBuZXh0SW5kZXggPiAtMSAmJiBpbmRleCA+IG5leHRJbmRleCA/IGkxOG4uZmlyc3QgOiBpMThuLm5leHQ7XG4gICAgICBwcmV2LmRpc2FibGVkID0gcHJldkluZGV4IDwgMDtcbiAgICAgIG5leHQuZGlzYWJsZWQgPSBuZXh0SW5kZXggPCAwO1xuICAgICAgc2V0QXR0cmlidXRlKHByZXYsIEFSSUFfTEFCRUwsIHByZXZMYWJlbCk7XG4gICAgICBzZXRBdHRyaWJ1dGUobmV4dCwgQVJJQV9MQUJFTCwgbmV4dExhYmVsKTtcbiAgICAgIGVtaXQoRVZFTlRfQVJST1dTX1VQREFURUQsIHByZXYsIG5leHQsIHByZXZJbmRleCwgbmV4dEluZGV4KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFycm93czogYXJyb3dzLFxuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgIHVwZGF0ZTogdXBkYXRlXG4gIH07XG59XG5cbnZhciBJTlRFUlZBTF9EQVRBX0FUVFJJQlVURSA9IERBVEFfQVRUUklCVVRFICsgXCItaW50ZXJ2YWxcIjtcblxuZnVuY3Rpb24gQXV0b3BsYXkoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTYgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlNi5vbixcbiAgICAgIGJpbmQgPSBfRXZlbnRJbnRlcmZhY2U2LmJpbmQsXG4gICAgICBlbWl0ID0gX0V2ZW50SW50ZXJmYWNlNi5lbWl0O1xuXG4gIHZhciBpbnRlcnZhbCA9IFJlcXVlc3RJbnRlcnZhbChvcHRpb25zLmludGVydmFsLCBTcGxpZGUyLmdvLmJpbmQoU3BsaWRlMiwgXCI+XCIpLCBvbkFuaW1hdGlvbkZyYW1lKTtcbiAgdmFyIGlzUGF1c2VkID0gaW50ZXJ2YWwuaXNQYXVzZWQ7XG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMyLkVsZW1lbnRzLFxuICAgICAgX0NvbXBvbmVudHMyJEVsZW1lbnRzNCA9IENvbXBvbmVudHMyLkVsZW1lbnRzLFxuICAgICAgcm9vdCA9IF9Db21wb25lbnRzMiRFbGVtZW50czQucm9vdCxcbiAgICAgIHRvZ2dsZSA9IF9Db21wb25lbnRzMiRFbGVtZW50czQudG9nZ2xlO1xuICB2YXIgYXV0b3BsYXkgPSBvcHRpb25zLmF1dG9wbGF5O1xuICB2YXIgaG92ZXJlZDtcbiAgdmFyIGZvY3VzZWQ7XG4gIHZhciBzdG9wcGVkID0gYXV0b3BsYXkgPT09IFwicGF1c2VcIjtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpZiAoYXV0b3BsYXkpIHtcbiAgICAgIGxpc3RlbigpO1xuICAgICAgdG9nZ2xlICYmIHNldEF0dHJpYnV0ZSh0b2dnbGUsIEFSSUFfQ09OVFJPTFMsIEVsZW1lbnRzLnRyYWNrLmlkKTtcbiAgICAgIHN0b3BwZWQgfHwgcGxheSgpO1xuICAgICAgdXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuKCkge1xuICAgIGlmIChvcHRpb25zLnBhdXNlT25Ib3Zlcikge1xuICAgICAgYmluZChyb290LCBcIm1vdXNlZW50ZXIgbW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBob3ZlcmVkID0gZS50eXBlID09PSBcIm1vdXNlZW50ZXJcIjtcbiAgICAgICAgYXV0b1RvZ2dsZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMucGF1c2VPbkZvY3VzKSB7XG4gICAgICBiaW5kKHJvb3QsIFwiZm9jdXNpbiBmb2N1c291dFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBmb2N1c2VkID0gZS50eXBlID09PSBcImZvY3VzaW5cIjtcbiAgICAgICAgYXV0b1RvZ2dsZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRvZ2dsZSkge1xuICAgICAgYmluZCh0b2dnbGUsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBzdG9wcGVkID8gcGxheSgpIDogcGF1c2UodHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBvbihbRVZFTlRfTU9WRSwgRVZFTlRfU0NST0xMLCBFVkVOVF9SRUZSRVNIXSwgaW50ZXJ2YWwucmV3aW5kKTtcbiAgICBvbihFVkVOVF9NT1ZFLCBvbk1vdmUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheSgpIHtcbiAgICBpZiAoaXNQYXVzZWQoKSAmJiBDb21wb25lbnRzMi5TbGlkZXMuaXNFbm91Z2goKSkge1xuICAgICAgaW50ZXJ2YWwuc3RhcnQoIW9wdGlvbnMucmVzZXRQcm9ncmVzcyk7XG4gICAgICBmb2N1c2VkID0gaG92ZXJlZCA9IHN0b3BwZWQgPSBmYWxzZTtcbiAgICAgIHVwZGF0ZSgpO1xuICAgICAgZW1pdChFVkVOVF9BVVRPUExBWV9QTEFZKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwYXVzZShzdG9wKSB7XG4gICAgaWYgKHN0b3AgPT09IHZvaWQgMCkge1xuICAgICAgc3RvcCA9IHRydWU7XG4gICAgfVxuXG4gICAgc3RvcHBlZCA9ICEhc3RvcDtcbiAgICB1cGRhdGUoKTtcblxuICAgIGlmICghaXNQYXVzZWQoKSkge1xuICAgICAgaW50ZXJ2YWwucGF1c2UoKTtcbiAgICAgIGVtaXQoRVZFTlRfQVVUT1BMQVlfUEFVU0UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGF1dG9Ub2dnbGUoKSB7XG4gICAgaWYgKCFzdG9wcGVkKSB7XG4gICAgICBob3ZlcmVkIHx8IGZvY3VzZWQgPyBwYXVzZShmYWxzZSkgOiBwbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGlmICh0b2dnbGUpIHtcbiAgICAgIHRvZ2dsZUNsYXNzKHRvZ2dsZSwgQ0xBU1NfQUNUSVZFLCAhc3RvcHBlZCk7XG4gICAgICBzZXRBdHRyaWJ1dGUodG9nZ2xlLCBBUklBX0xBQkVMLCBvcHRpb25zLmkxOG5bc3RvcHBlZCA/IFwicGxheVwiIDogXCJwYXVzZVwiXSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25BbmltYXRpb25GcmFtZShyYXRlKSB7XG4gICAgdmFyIGJhciA9IEVsZW1lbnRzLmJhcjtcbiAgICBiYXIgJiYgc3R5bGUoYmFyLCBcIndpZHRoXCIsIHJhdGUgKiAxMDAgKyBcIiVcIik7XG4gICAgZW1pdChFVkVOVF9BVVRPUExBWV9QTEFZSU5HLCByYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW92ZShpbmRleCkge1xuICAgIHZhciBTbGlkZSA9IENvbXBvbmVudHMyLlNsaWRlcy5nZXRBdChpbmRleCk7XG4gICAgaW50ZXJ2YWwuc2V0KFNsaWRlICYmICtnZXRBdHRyaWJ1dGUoU2xpZGUuc2xpZGUsIElOVEVSVkFMX0RBVEFfQVRUUklCVVRFKSB8fCBvcHRpb25zLmludGVydmFsKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGludGVydmFsLmNhbmNlbCxcbiAgICBwbGF5OiBwbGF5LFxuICAgIHBhdXNlOiBwYXVzZSxcbiAgICBpc1BhdXNlZDogaXNQYXVzZWRcbiAgfTtcbn1cblxuZnVuY3Rpb24gQ292ZXIoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTcgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlNy5vbjtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpZiAob3B0aW9ucy5jb3Zlcikge1xuICAgICAgb24oRVZFTlRfTEFaWUxPQURfTE9BREVELCBhcHBseSh0b2dnbGUsIHRydWUpKTtcbiAgICAgIG9uKFtFVkVOVF9NT1VOVEVELCBFVkVOVF9VUERBVEVELCBFVkVOVF9SRUZSRVNIXSwgYXBwbHkoY292ZXIsIHRydWUpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb3Zlcihjb3ZlcjIpIHtcbiAgICBDb21wb25lbnRzMi5TbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgIHZhciBpbWcgPSBjaGlsZChTbGlkZS5jb250YWluZXIgfHwgU2xpZGUuc2xpZGUsIFwiaW1nXCIpO1xuXG4gICAgICBpZiAoaW1nICYmIGltZy5zcmMpIHtcbiAgICAgICAgdG9nZ2xlKGNvdmVyMiwgaW1nLCBTbGlkZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGUoY292ZXIyLCBpbWcsIFNsaWRlKSB7XG4gICAgU2xpZGUuc3R5bGUoXCJiYWNrZ3JvdW5kXCIsIGNvdmVyMiA/IFwiY2VudGVyL2NvdmVyIG5vLXJlcGVhdCB1cmwoXFxcIlwiICsgaW1nLnNyYyArIFwiXFxcIilcIiA6IFwiXCIsIHRydWUpO1xuICAgIGRpc3BsYXkoaW1nLCBjb3ZlcjIgPyBcIm5vbmVcIiA6IFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogYXBwbHkoY292ZXIsIGZhbHNlKVxuICB9O1xufVxuXG52YXIgQk9VTkNFX0RJRkZfVEhSRVNIT0xEID0gMTA7XG52YXIgQk9VTkNFX0RVUkFUSU9OID0gNjAwO1xudmFyIEZSSUNUSU9OX0ZBQ1RPUiA9IDAuNjtcbnZhciBCQVNFX1ZFTE9DSVRZID0gMS41O1xudmFyIE1JTl9EVVJBVElPTiA9IDgwMDtcblxuZnVuY3Rpb24gU2Nyb2xsKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2U4ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBvbiA9IF9FdmVudEludGVyZmFjZTgub24sXG4gICAgICBlbWl0ID0gX0V2ZW50SW50ZXJmYWNlOC5lbWl0O1xuXG4gIHZhciBzZXQgPSBTcGxpZGUyLnN0YXRlLnNldDtcbiAgdmFyIE1vdmUgPSBDb21wb25lbnRzMi5Nb3ZlO1xuICB2YXIgZ2V0UG9zaXRpb24gPSBNb3ZlLmdldFBvc2l0aW9uLFxuICAgICAgZ2V0TGltaXQgPSBNb3ZlLmdldExpbWl0LFxuICAgICAgZXhjZWVkZWRMaW1pdCA9IE1vdmUuZXhjZWVkZWRMaW1pdCxcbiAgICAgIHRyYW5zbGF0ZSA9IE1vdmUudHJhbnNsYXRlO1xuICB2YXIgaXNTbGlkZSA9IFNwbGlkZTIuaXMoU0xJREUpO1xuICB2YXIgaW50ZXJ2YWw7XG4gIHZhciBjYWxsYmFjaztcbiAgdmFyIGZyaWN0aW9uID0gMTtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBvbihFVkVOVF9NT1ZFLCBjbGVhcik7XG4gICAgb24oW0VWRU5UX1VQREFURUQsIEVWRU5UX1JFRlJFU0hdLCBjYW5jZWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2Nyb2xsKGRlc3RpbmF0aW9uLCBkdXJhdGlvbiwgc25hcCwgb25TY3JvbGxlZCwgbm9Db25zdHJhaW4pIHtcbiAgICB2YXIgZnJvbSA9IGdldFBvc2l0aW9uKCk7XG4gICAgY2xlYXIoKTtcblxuICAgIGlmIChzbmFwICYmICghaXNTbGlkZSB8fCAhZXhjZWVkZWRMaW1pdCgpKSkge1xuICAgICAgdmFyIHNpemUgPSBDb21wb25lbnRzMi5MYXlvdXQuc2xpZGVyU2l6ZSgpO1xuICAgICAgdmFyIG9mZnNldCA9IHNpZ24oZGVzdGluYXRpb24pICogc2l6ZSAqIGZsb29yKGFicyhkZXN0aW5hdGlvbikgLyBzaXplKSB8fCAwO1xuICAgICAgZGVzdGluYXRpb24gPSBNb3ZlLnRvUG9zaXRpb24oQ29tcG9uZW50czIuQ29udHJvbGxlci50b0Rlc3QoZGVzdGluYXRpb24gJSBzaXplKSkgKyBvZmZzZXQ7XG4gICAgfVxuXG4gICAgdmFyIG5vRGlzdGFuY2UgPSBhcHByb3hpbWF0ZWx5RXF1YWwoZnJvbSwgZGVzdGluYXRpb24sIDEpO1xuICAgIGZyaWN0aW9uID0gMTtcbiAgICBkdXJhdGlvbiA9IG5vRGlzdGFuY2UgPyAwIDogZHVyYXRpb24gfHwgbWF4KGFicyhkZXN0aW5hdGlvbiAtIGZyb20pIC8gQkFTRV9WRUxPQ0lUWSwgTUlOX0RVUkFUSU9OKTtcbiAgICBjYWxsYmFjayA9IG9uU2Nyb2xsZWQ7XG4gICAgaW50ZXJ2YWwgPSBSZXF1ZXN0SW50ZXJ2YWwoZHVyYXRpb24sIG9uRW5kLCBhcHBseSh1cGRhdGUsIGZyb20sIGRlc3RpbmF0aW9uLCBub0NvbnN0cmFpbiksIDEpO1xuICAgIHNldChTQ1JPTExJTkcpO1xuICAgIGVtaXQoRVZFTlRfU0NST0xMKTtcbiAgICBpbnRlcnZhbC5zdGFydCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25FbmQoKSB7XG4gICAgc2V0KElETEUpO1xuICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG4gICAgZW1pdChFVkVOVF9TQ1JPTExFRCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoZnJvbSwgdG8sIG5vQ29uc3RyYWluLCByYXRlKSB7XG4gICAgdmFyIHBvc2l0aW9uID0gZ2V0UG9zaXRpb24oKTtcbiAgICB2YXIgdGFyZ2V0ID0gZnJvbSArICh0byAtIGZyb20pICogZWFzaW5nKHJhdGUpO1xuICAgIHZhciBkaWZmID0gKHRhcmdldCAtIHBvc2l0aW9uKSAqIGZyaWN0aW9uO1xuICAgIHRyYW5zbGF0ZShwb3NpdGlvbiArIGRpZmYpO1xuXG4gICAgaWYgKGlzU2xpZGUgJiYgIW5vQ29uc3RyYWluICYmIGV4Y2VlZGVkTGltaXQoKSkge1xuICAgICAgZnJpY3Rpb24gKj0gRlJJQ1RJT05fRkFDVE9SO1xuXG4gICAgICBpZiAoYWJzKGRpZmYpIDwgQk9VTkNFX0RJRkZfVEhSRVNIT0xEKSB7XG4gICAgICAgIHNjcm9sbChnZXRMaW1pdChleGNlZWRlZExpbWl0KHRydWUpKSwgQk9VTkNFX0RVUkFUSU9OLCBmYWxzZSwgY2FsbGJhY2ssIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIGlmIChpbnRlcnZhbCkge1xuICAgICAgaW50ZXJ2YWwuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmIChpbnRlcnZhbCAmJiAhaW50ZXJ2YWwuaXNQYXVzZWQoKSkge1xuICAgICAgY2xlYXIoKTtcbiAgICAgIG9uRW5kKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZWFzaW5nKHQpIHtcbiAgICB2YXIgZWFzaW5nRnVuYyA9IG9wdGlvbnMuZWFzaW5nRnVuYztcbiAgICByZXR1cm4gZWFzaW5nRnVuYyA/IGVhc2luZ0Z1bmModCkgOiAxIC0gTWF0aC5wb3coMSAtIHQsIDQpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogY2xlYXIsXG4gICAgc2Nyb2xsOiBzY3JvbGwsXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn1cblxudmFyIFNDUk9MTF9MSVNURU5FUl9PUFRJT05TID0ge1xuICBwYXNzaXZlOiBmYWxzZSxcbiAgY2FwdHVyZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gRHJhZyhTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlOSA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2U5Lm9uLFxuICAgICAgZW1pdCA9IF9FdmVudEludGVyZmFjZTkuZW1pdCxcbiAgICAgIGJpbmQgPSBfRXZlbnRJbnRlcmZhY2U5LmJpbmQsXG4gICAgICB1bmJpbmQgPSBfRXZlbnRJbnRlcmZhY2U5LnVuYmluZDtcblxuICB2YXIgc3RhdGUgPSBTcGxpZGUyLnN0YXRlO1xuICB2YXIgTW92ZSA9IENvbXBvbmVudHMyLk1vdmUsXG4gICAgICBTY3JvbGwgPSBDb21wb25lbnRzMi5TY3JvbGwsXG4gICAgICBDb250cm9sbGVyID0gQ29tcG9uZW50czIuQ29udHJvbGxlcixcbiAgICAgIHRyYWNrID0gQ29tcG9uZW50czIuRWxlbWVudHMudHJhY2ssXG4gICAgICByZWR1Y2UgPSBDb21wb25lbnRzMi5NZWRpYS5yZWR1Y2U7XG4gIHZhciBfQ29tcG9uZW50czIkRGlyZWN0aW8yID0gQ29tcG9uZW50czIuRGlyZWN0aW9uLFxuICAgICAgcmVzb2x2ZSA9IF9Db21wb25lbnRzMiREaXJlY3RpbzIucmVzb2x2ZSxcbiAgICAgIG9yaWVudCA9IF9Db21wb25lbnRzMiREaXJlY3RpbzIub3JpZW50O1xuICB2YXIgZ2V0UG9zaXRpb24gPSBNb3ZlLmdldFBvc2l0aW9uLFxuICAgICAgZXhjZWVkZWRMaW1pdCA9IE1vdmUuZXhjZWVkZWRMaW1pdDtcbiAgdmFyIGJhc2VQb3NpdGlvbjtcbiAgdmFyIGJhc2VFdmVudDtcbiAgdmFyIHByZXZCYXNlRXZlbnQ7XG4gIHZhciBpc0ZyZWU7XG4gIHZhciBkcmFnZ2luZztcbiAgdmFyIGV4Y2VlZGVkID0gZmFsc2U7XG4gIHZhciBjbGlja1ByZXZlbnRlZDtcbiAgdmFyIGRpc2FibGVkO1xuICB2YXIgdGFyZ2V0O1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGJpbmQodHJhY2ssIFBPSU5URVJfTU9WRV9FVkVOVFMsIG5vb3AsIFNDUk9MTF9MSVNURU5FUl9PUFRJT05TKTtcbiAgICBiaW5kKHRyYWNrLCBQT0lOVEVSX1VQX0VWRU5UUywgbm9vcCwgU0NST0xMX0xJU1RFTkVSX09QVElPTlMpO1xuICAgIGJpbmQodHJhY2ssIFBPSU5URVJfRE9XTl9FVkVOVFMsIG9uUG9pbnRlckRvd24sIFNDUk9MTF9MSVNURU5FUl9PUFRJT05TKTtcbiAgICBiaW5kKHRyYWNrLCBcImNsaWNrXCIsIG9uQ2xpY2ssIHtcbiAgICAgIGNhcHR1cmU6IHRydWVcbiAgICB9KTtcbiAgICBiaW5kKHRyYWNrLCBcImRyYWdzdGFydFwiLCBwcmV2ZW50KTtcbiAgICBvbihbRVZFTlRfTU9VTlRFRCwgRVZFTlRfVVBEQVRFRF0sIGluaXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgZHJhZyA9IG9wdGlvbnMuZHJhZztcbiAgICBkaXNhYmxlKCFkcmFnKTtcbiAgICBpc0ZyZWUgPSBkcmFnID09PSBcImZyZWVcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZSkge1xuICAgIGNsaWNrUHJldmVudGVkID0gZmFsc2U7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICB2YXIgaXNUb3VjaCA9IGlzVG91Y2hFdmVudChlKTtcblxuICAgICAgaWYgKGlzRHJhZ2dhYmxlKGUudGFyZ2V0KSAmJiAoaXNUb3VjaCB8fCAhZS5idXR0b24pKSB7XG4gICAgICAgIGlmICghQ29udHJvbGxlci5pc0J1c3koKSkge1xuICAgICAgICAgIHRhcmdldCA9IGlzVG91Y2ggPyB0cmFjayA6IHdpbmRvdztcbiAgICAgICAgICBkcmFnZ2luZyA9IHN0YXRlLmlzKFtNT1ZJTkcsIFNDUk9MTElOR10pO1xuICAgICAgICAgIHByZXZCYXNlRXZlbnQgPSBudWxsO1xuICAgICAgICAgIGJpbmQodGFyZ2V0LCBQT0lOVEVSX01PVkVfRVZFTlRTLCBvblBvaW50ZXJNb3ZlLCBTQ1JPTExfTElTVEVORVJfT1BUSU9OUyk7XG4gICAgICAgICAgYmluZCh0YXJnZXQsIFBPSU5URVJfVVBfRVZFTlRTLCBvblBvaW50ZXJVcCwgU0NST0xMX0xJU1RFTkVSX09QVElPTlMpO1xuICAgICAgICAgIE1vdmUuY2FuY2VsKCk7XG4gICAgICAgICAgU2Nyb2xsLmNhbmNlbCgpO1xuICAgICAgICAgIHNhdmUoZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJldmVudChlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUG9pbnRlck1vdmUoZSkge1xuICAgIGlmICghc3RhdGUuaXMoRFJBR0dJTkcpKSB7XG4gICAgICBzdGF0ZS5zZXQoRFJBR0dJTkcpO1xuICAgICAgZW1pdChFVkVOVF9EUkFHKTtcbiAgICB9XG5cbiAgICBpZiAoZS5jYW5jZWxhYmxlKSB7XG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgTW92ZS50cmFuc2xhdGUoYmFzZVBvc2l0aW9uICsgY29uc3RyYWluKGRpZmZDb29yZChlKSkpO1xuICAgICAgICB2YXIgZXhwaXJlZCA9IGRpZmZUaW1lKGUpID4gTE9HX0lOVEVSVkFMO1xuICAgICAgICB2YXIgaGFzRXhjZWVkZWQgPSBleGNlZWRlZCAhPT0gKGV4Y2VlZGVkID0gZXhjZWVkZWRMaW1pdCgpKTtcblxuICAgICAgICBpZiAoZXhwaXJlZCB8fCBoYXNFeGNlZWRlZCkge1xuICAgICAgICAgIHNhdmUoZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjbGlja1ByZXZlbnRlZCA9IHRydWU7XG4gICAgICAgIGVtaXQoRVZFTlRfRFJBR0dJTkcpO1xuICAgICAgICBwcmV2ZW50KGUpO1xuICAgICAgfSBlbHNlIGlmIChpc1NsaWRlckRpcmVjdGlvbihlKSkge1xuICAgICAgICBkcmFnZ2luZyA9IHNob3VsZFN0YXJ0KGUpO1xuICAgICAgICBwcmV2ZW50KGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUG9pbnRlclVwKGUpIHtcbiAgICBpZiAoc3RhdGUuaXMoRFJBR0dJTkcpKSB7XG4gICAgICBzdGF0ZS5zZXQoSURMRSk7XG4gICAgICBlbWl0KEVWRU5UX0RSQUdHRUQpO1xuICAgIH1cblxuICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgbW92ZShlKTtcbiAgICAgIHByZXZlbnQoZSk7XG4gICAgfVxuXG4gICAgdW5iaW5kKHRhcmdldCwgUE9JTlRFUl9NT1ZFX0VWRU5UUywgb25Qb2ludGVyTW92ZSk7XG4gICAgdW5iaW5kKHRhcmdldCwgUE9JTlRFUl9VUF9FVkVOVFMsIG9uUG9pbnRlclVwKTtcbiAgICBkcmFnZ2luZyA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgaWYgKCFkaXNhYmxlZCAmJiBjbGlja1ByZXZlbnRlZCkge1xuICAgICAgcHJldmVudChlLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzYXZlKGUpIHtcbiAgICBwcmV2QmFzZUV2ZW50ID0gYmFzZUV2ZW50O1xuICAgIGJhc2VFdmVudCA9IGU7XG4gICAgYmFzZVBvc2l0aW9uID0gZ2V0UG9zaXRpb24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdmUoZSkge1xuICAgIHZhciB2ZWxvY2l0eSA9IGNvbXB1dGVWZWxvY2l0eShlKTtcbiAgICB2YXIgZGVzdGluYXRpb24gPSBjb21wdXRlRGVzdGluYXRpb24odmVsb2NpdHkpO1xuICAgIHZhciByZXdpbmQgPSBvcHRpb25zLnJld2luZCAmJiBvcHRpb25zLnJld2luZEJ5RHJhZztcbiAgICByZWR1Y2UoZmFsc2UpO1xuXG4gICAgaWYgKGlzRnJlZSkge1xuICAgICAgQ29udHJvbGxlci5zY3JvbGwoZGVzdGluYXRpb24sIDAsIG9wdGlvbnMuc25hcCk7XG4gICAgfSBlbHNlIGlmIChTcGxpZGUyLmlzKEZBREUpKSB7XG4gICAgICBDb250cm9sbGVyLmdvKG9yaWVudChzaWduKHZlbG9jaXR5KSkgPCAwID8gcmV3aW5kID8gXCI8XCIgOiBcIi1cIiA6IHJld2luZCA/IFwiPlwiIDogXCIrXCIpO1xuICAgIH0gZWxzZSBpZiAoU3BsaWRlMi5pcyhTTElERSkgJiYgZXhjZWVkZWQgJiYgcmV3aW5kKSB7XG4gICAgICBDb250cm9sbGVyLmdvKGV4Y2VlZGVkTGltaXQodHJ1ZSkgPyBcIj5cIiA6IFwiPFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgQ29udHJvbGxlci5nbyhDb250cm9sbGVyLnRvRGVzdChkZXN0aW5hdGlvbiksIHRydWUpO1xuICAgIH1cblxuICAgIHJlZHVjZSh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZFN0YXJ0KGUpIHtcbiAgICB2YXIgdGhyZXNob2xkcyA9IG9wdGlvbnMuZHJhZ01pblRocmVzaG9sZDtcbiAgICB2YXIgaXNPYmogPSBpc09iamVjdCh0aHJlc2hvbGRzKTtcbiAgICB2YXIgbW91c2UgPSBpc09iaiAmJiB0aHJlc2hvbGRzLm1vdXNlIHx8IDA7XG4gICAgdmFyIHRvdWNoID0gKGlzT2JqID8gdGhyZXNob2xkcy50b3VjaCA6ICt0aHJlc2hvbGRzKSB8fCAxMDtcbiAgICByZXR1cm4gYWJzKGRpZmZDb29yZChlKSkgPiAoaXNUb3VjaEV2ZW50KGUpID8gdG91Y2ggOiBtb3VzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1NsaWRlckRpcmVjdGlvbihlKSB7XG4gICAgcmV0dXJuIGFicyhkaWZmQ29vcmQoZSkpID4gYWJzKGRpZmZDb29yZChlLCB0cnVlKSk7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlVmVsb2NpdHkoZSkge1xuICAgIGlmIChTcGxpZGUyLmlzKExPT1ApIHx8ICFleGNlZWRlZCkge1xuICAgICAgdmFyIHRpbWUgPSBkaWZmVGltZShlKTtcblxuICAgICAgaWYgKHRpbWUgJiYgdGltZSA8IExPR19JTlRFUlZBTCkge1xuICAgICAgICByZXR1cm4gZGlmZkNvb3JkKGUpIC8gdGltZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVEZXN0aW5hdGlvbih2ZWxvY2l0eSkge1xuICAgIHJldHVybiBnZXRQb3NpdGlvbigpICsgc2lnbih2ZWxvY2l0eSkgKiBtaW4oYWJzKHZlbG9jaXR5KSAqIChvcHRpb25zLmZsaWNrUG93ZXIgfHwgNjAwKSwgaXNGcmVlID8gSW5maW5pdHkgOiBDb21wb25lbnRzMi5MYXlvdXQubGlzdFNpemUoKSAqIChvcHRpb25zLmZsaWNrTWF4UGFnZXMgfHwgMSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlmZkNvb3JkKGUsIG9ydGhvZ29uYWwpIHtcbiAgICByZXR1cm4gY29vcmRPZihlLCBvcnRob2dvbmFsKSAtIGNvb3JkT2YoZ2V0QmFzZUV2ZW50KGUpLCBvcnRob2dvbmFsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpZmZUaW1lKGUpIHtcbiAgICByZXR1cm4gdGltZU9mKGUpIC0gdGltZU9mKGdldEJhc2VFdmVudChlKSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRCYXNlRXZlbnQoZSkge1xuICAgIHJldHVybiBiYXNlRXZlbnQgPT09IGUgJiYgcHJldkJhc2VFdmVudCB8fCBiYXNlRXZlbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBjb29yZE9mKGUsIG9ydGhvZ29uYWwpIHtcbiAgICByZXR1cm4gKGlzVG91Y2hFdmVudChlKSA/IGUuY2hhbmdlZFRvdWNoZXNbMF0gOiBlKVtcInBhZ2VcIiArIHJlc29sdmUob3J0aG9nb25hbCA/IFwiWVwiIDogXCJYXCIpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN0cmFpbihkaWZmKSB7XG4gICAgcmV0dXJuIGRpZmYgLyAoZXhjZWVkZWQgJiYgU3BsaWRlMi5pcyhTTElERSkgPyBGUklDVElPTiA6IDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNEcmFnZ2FibGUodGFyZ2V0Mikge1xuICAgIHZhciBub0RyYWcgPSBvcHRpb25zLm5vRHJhZztcbiAgICByZXR1cm4gIW1hdGNoZXModGFyZ2V0MiwgXCIuXCIgKyBDTEFTU19QQUdJTkFUSU9OX1BBR0UgKyBcIiwgLlwiICsgQ0xBU1NfQVJST1cpICYmICghbm9EcmFnIHx8ICFtYXRjaGVzKHRhcmdldDIsIG5vRHJhZykpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNUb3VjaEV2ZW50KGUpIHtcbiAgICByZXR1cm4gdHlwZW9mIFRvdWNoRXZlbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgZSBpbnN0YW5jZW9mIFRvdWNoRXZlbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBpc0RyYWdnaW5nKCkge1xuICAgIHJldHVybiBkcmFnZ2luZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc2FibGUodmFsdWUpIHtcbiAgICBkaXNhYmxlZCA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGlzYWJsZTogZGlzYWJsZSxcbiAgICBpc0RyYWdnaW5nOiBpc0RyYWdnaW5nXG4gIH07XG59XG5cbnZhciBOT1JNQUxJWkFUSU9OX01BUCA9IHtcbiAgU3BhY2ViYXI6IFwiIFwiLFxuICBSaWdodDogQVJST1dfUklHSFQsXG4gIExlZnQ6IEFSUk9XX0xFRlQsXG4gIFVwOiBBUlJPV19VUCxcbiAgRG93bjogQVJST1dfRE9XTlxufTtcblxuZnVuY3Rpb24gbm9ybWFsaXplS2V5KGtleSkge1xuICBrZXkgPSBpc1N0cmluZyhrZXkpID8ga2V5IDoga2V5LmtleTtcbiAgcmV0dXJuIE5PUk1BTElaQVRJT05fTUFQW2tleV0gfHwga2V5O1xufVxuXG52YXIgS0VZQk9BUkRfRVZFTlQgPSBcImtleWRvd25cIjtcblxuZnVuY3Rpb24gS2V5Ym9hcmQoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTEwID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBvbiA9IF9FdmVudEludGVyZmFjZTEwLm9uLFxuICAgICAgYmluZCA9IF9FdmVudEludGVyZmFjZTEwLmJpbmQsXG4gICAgICB1bmJpbmQgPSBfRXZlbnRJbnRlcmZhY2UxMC51bmJpbmQ7XG5cbiAgdmFyIHJvb3QgPSBTcGxpZGUyLnJvb3Q7XG4gIHZhciByZXNvbHZlID0gQ29tcG9uZW50czIuRGlyZWN0aW9uLnJlc29sdmU7XG4gIHZhciB0YXJnZXQ7XG4gIHZhciBkaXNhYmxlZDtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpbml0KCk7XG4gICAgb24oRVZFTlRfVVBEQVRFRCwgZGVzdHJveSk7XG4gICAgb24oRVZFTlRfVVBEQVRFRCwgaW5pdCk7XG4gICAgb24oRVZFTlRfTU9WRSwgb25Nb3ZlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIGtleWJvYXJkID0gb3B0aW9ucy5rZXlib2FyZDtcblxuICAgIGlmIChrZXlib2FyZCkge1xuICAgICAgdGFyZ2V0ID0ga2V5Ym9hcmQgPT09IFwiZ2xvYmFsXCIgPyB3aW5kb3cgOiByb290O1xuICAgICAgYmluZCh0YXJnZXQsIEtFWUJPQVJEX0VWRU5ULCBvbktleWRvd24pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdW5iaW5kKHRhcmdldCwgS0VZQk9BUkRfRVZFTlQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzYWJsZSh2YWx1ZSkge1xuICAgIGRpc2FibGVkID0gdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdmUoKSB7XG4gICAgdmFyIF9kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICBuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBkaXNhYmxlZCA9IF9kaXNhYmxlZDtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5ZG93bihlKSB7XG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgdmFyIGtleSA9IG5vcm1hbGl6ZUtleShlKTtcblxuICAgICAgaWYgKGtleSA9PT0gcmVzb2x2ZShBUlJPV19MRUZUKSkge1xuICAgICAgICBTcGxpZGUyLmdvKFwiPFwiKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSByZXNvbHZlKEFSUk9XX1JJR0hUKSkge1xuICAgICAgICBTcGxpZGUyLmdvKFwiPlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgIGRpc2FibGU6IGRpc2FibGVcbiAgfTtcbn1cblxudmFyIFNSQ19EQVRBX0FUVFJJQlVURSA9IERBVEFfQVRUUklCVVRFICsgXCItbGF6eVwiO1xudmFyIFNSQ1NFVF9EQVRBX0FUVFJJQlVURSA9IFNSQ19EQVRBX0FUVFJJQlVURSArIFwiLXNyY3NldFwiO1xudmFyIElNQUdFX1NFTEVDVE9SID0gXCJbXCIgKyBTUkNfREFUQV9BVFRSSUJVVEUgKyBcIl0sIFtcIiArIFNSQ1NFVF9EQVRBX0FUVFJJQlVURSArIFwiXVwiO1xuXG5mdW5jdGlvbiBMYXp5TG9hZChTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlMTEgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlMTEub24sXG4gICAgICBvZmYgPSBfRXZlbnRJbnRlcmZhY2UxMS5vZmYsXG4gICAgICBiaW5kID0gX0V2ZW50SW50ZXJmYWNlMTEuYmluZCxcbiAgICAgIGVtaXQgPSBfRXZlbnRJbnRlcmZhY2UxMS5lbWl0O1xuXG4gIHZhciBpc1NlcXVlbnRpYWwgPSBvcHRpb25zLmxhenlMb2FkID09PSBcInNlcXVlbnRpYWxcIjtcbiAgdmFyIGV2ZW50cyA9IFtFVkVOVF9NT1ZFRCwgRVZFTlRfU0NST0xMRURdO1xuICB2YXIgZW50cmllcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGlmIChvcHRpb25zLmxhenlMb2FkKSB7XG4gICAgICBpbml0KCk7XG4gICAgICBvbihFVkVOVF9SRUZSRVNILCBpbml0KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGVtcHR5KGVudHJpZXMpO1xuICAgIHJlZ2lzdGVyKCk7XG5cbiAgICBpZiAoaXNTZXF1ZW50aWFsKSB7XG4gICAgICBsb2FkTmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvZmYoZXZlbnRzKTtcbiAgICAgIG9uKGV2ZW50cywgY2hlY2spO1xuICAgICAgY2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlcigpIHtcbiAgICBDb21wb25lbnRzMi5TbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgIHF1ZXJ5QWxsKFNsaWRlLnNsaWRlLCBJTUFHRV9TRUxFQ1RPUikuZm9yRWFjaChmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgIHZhciBzcmMgPSBnZXRBdHRyaWJ1dGUoaW1nLCBTUkNfREFUQV9BVFRSSUJVVEUpO1xuICAgICAgICB2YXIgc3Jjc2V0ID0gZ2V0QXR0cmlidXRlKGltZywgU1JDU0VUX0RBVEFfQVRUUklCVVRFKTtcblxuICAgICAgICBpZiAoc3JjICE9PSBpbWcuc3JjIHx8IHNyY3NldCAhPT0gaW1nLnNyY3NldCkge1xuICAgICAgICAgIHZhciBjbGFzc05hbWUgPSBvcHRpb25zLmNsYXNzZXMuc3Bpbm5lcjtcbiAgICAgICAgICB2YXIgcGFyZW50ID0gaW1nLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgdmFyIHNwaW5uZXIgPSBjaGlsZChwYXJlbnQsIFwiLlwiICsgY2xhc3NOYW1lKSB8fCBjcmVhdGUoXCJzcGFuXCIsIGNsYXNzTmFtZSwgcGFyZW50KTtcbiAgICAgICAgICBlbnRyaWVzLnB1c2goW2ltZywgU2xpZGUsIHNwaW5uZXJdKTtcbiAgICAgICAgICBpbWcuc3JjIHx8IGRpc3BsYXkoaW1nLCBcIm5vbmVcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2soKSB7XG4gICAgZW50cmllcyA9IGVudHJpZXMuZmlsdGVyKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB2YXIgZGlzdGFuY2UgPSBvcHRpb25zLnBlclBhZ2UgKiAoKG9wdGlvbnMucHJlbG9hZFBhZ2VzIHx8IDEpICsgMSkgLSAxO1xuICAgICAgcmV0dXJuIGRhdGFbMV0uaXNXaXRoaW4oU3BsaWRlMi5pbmRleCwgZGlzdGFuY2UpID8gbG9hZChkYXRhKSA6IHRydWU7XG4gICAgfSk7XG4gICAgZW50cmllcy5sZW5ndGggfHwgb2ZmKGV2ZW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiBsb2FkKGRhdGEpIHtcbiAgICB2YXIgaW1nID0gZGF0YVswXTtcbiAgICBhZGRDbGFzcyhkYXRhWzFdLnNsaWRlLCBDTEFTU19MT0FESU5HKTtcbiAgICBiaW5kKGltZywgXCJsb2FkIGVycm9yXCIsIGFwcGx5KG9uTG9hZCwgZGF0YSkpO1xuICAgIHNldEF0dHJpYnV0ZShpbWcsIFwic3JjXCIsIGdldEF0dHJpYnV0ZShpbWcsIFNSQ19EQVRBX0FUVFJJQlVURSkpO1xuICAgIHNldEF0dHJpYnV0ZShpbWcsIFwic3Jjc2V0XCIsIGdldEF0dHJpYnV0ZShpbWcsIFNSQ1NFVF9EQVRBX0FUVFJJQlVURSkpO1xuICAgIHJlbW92ZUF0dHJpYnV0ZShpbWcsIFNSQ19EQVRBX0FUVFJJQlVURSk7XG4gICAgcmVtb3ZlQXR0cmlidXRlKGltZywgU1JDU0VUX0RBVEFfQVRUUklCVVRFKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTG9hZChkYXRhLCBlKSB7XG4gICAgdmFyIGltZyA9IGRhdGFbMF0sXG4gICAgICAgIFNsaWRlID0gZGF0YVsxXTtcbiAgICByZW1vdmVDbGFzcyhTbGlkZS5zbGlkZSwgQ0xBU1NfTE9BRElORyk7XG5cbiAgICBpZiAoZS50eXBlICE9PSBcImVycm9yXCIpIHtcbiAgICAgIHJlbW92ZShkYXRhWzJdKTtcbiAgICAgIGRpc3BsYXkoaW1nLCBcIlwiKTtcbiAgICAgIGVtaXQoRVZFTlRfTEFaWUxPQURfTE9BREVELCBpbWcsIFNsaWRlKTtcbiAgICAgIGVtaXQoRVZFTlRfUkVTSVpFKTtcbiAgICB9XG5cbiAgICBpc1NlcXVlbnRpYWwgJiYgbG9hZE5leHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWROZXh0KCkge1xuICAgIGVudHJpZXMubGVuZ3RoICYmIGxvYWQoZW50cmllcy5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGFwcGx5KGVtcHR5LCBlbnRyaWVzKSxcbiAgICBjaGVjazogY2hlY2tcbiAgfTtcbn1cblxuZnVuY3Rpb24gUGFnaW5hdGlvbihTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgZXZlbnQgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKTtcbiAgdmFyIG9uID0gZXZlbnQub24sXG4gICAgICBlbWl0ID0gZXZlbnQuZW1pdCxcbiAgICAgIGJpbmQgPSBldmVudC5iaW5kO1xuICB2YXIgU2xpZGVzID0gQ29tcG9uZW50czIuU2xpZGVzLFxuICAgICAgRWxlbWVudHMgPSBDb21wb25lbnRzMi5FbGVtZW50cyxcbiAgICAgIENvbnRyb2xsZXIgPSBDb21wb25lbnRzMi5Db250cm9sbGVyO1xuICB2YXIgaGFzRm9jdXMgPSBDb250cm9sbGVyLmhhc0ZvY3VzLFxuICAgICAgZ2V0SW5kZXggPSBDb250cm9sbGVyLmdldEluZGV4LFxuICAgICAgZ28gPSBDb250cm9sbGVyLmdvO1xuICB2YXIgcmVzb2x2ZSA9IENvbXBvbmVudHMyLkRpcmVjdGlvbi5yZXNvbHZlO1xuICB2YXIgcGxhY2Vob2xkZXIgPSBFbGVtZW50cy5wYWdpbmF0aW9uO1xuICB2YXIgaXRlbXMgPSBbXTtcbiAgdmFyIGxpc3Q7XG4gIHZhciBwYWdpbmF0aW9uQ2xhc3NlcztcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBkZXN0cm95KCk7XG4gICAgb24oW0VWRU5UX1VQREFURUQsIEVWRU5UX1JFRlJFU0gsIEVWRU5UX0VORF9JTkRFWF9DSEFOR0VEXSwgbW91bnQpO1xuICAgIHZhciBlbmFibGVkID0gb3B0aW9ucy5wYWdpbmF0aW9uO1xuICAgIHBsYWNlaG9sZGVyICYmIGRpc3BsYXkocGxhY2Vob2xkZXIsIGVuYWJsZWQgPyBcIlwiIDogXCJub25lXCIpO1xuXG4gICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgIG9uKFtFVkVOVF9NT1ZFLCBFVkVOVF9TQ1JPTEwsIEVWRU5UX1NDUk9MTEVEXSwgdXBkYXRlKTtcbiAgICAgIGNyZWF0ZVBhZ2luYXRpb24oKTtcbiAgICAgIHVwZGF0ZSgpO1xuICAgICAgZW1pdChFVkVOVF9QQUdJTkFUSU9OX01PVU5URUQsIHtcbiAgICAgICAgbGlzdDogbGlzdCxcbiAgICAgICAgaXRlbXM6IGl0ZW1zXG4gICAgICB9LCBnZXRBdChTcGxpZGUyLmluZGV4KSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBpZiAobGlzdCkge1xuICAgICAgcmVtb3ZlKHBsYWNlaG9sZGVyID8gc2xpY2UobGlzdC5jaGlsZHJlbikgOiBsaXN0KTtcbiAgICAgIHJlbW92ZUNsYXNzKGxpc3QsIHBhZ2luYXRpb25DbGFzc2VzKTtcbiAgICAgIGVtcHR5KGl0ZW1zKTtcbiAgICAgIGxpc3QgPSBudWxsO1xuICAgIH1cblxuICAgIGV2ZW50LmRlc3Ryb3koKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBhZ2luYXRpb24oKSB7XG4gICAgdmFyIGxlbmd0aCA9IFNwbGlkZTIubGVuZ3RoO1xuICAgIHZhciBjbGFzc2VzID0gb3B0aW9ucy5jbGFzc2VzLFxuICAgICAgICBpMThuID0gb3B0aW9ucy5pMThuLFxuICAgICAgICBwZXJQYWdlID0gb3B0aW9ucy5wZXJQYWdlO1xuICAgIHZhciBtYXggPSBoYXNGb2N1cygpID8gQ29udHJvbGxlci5nZXRFbmQoKSArIDEgOiBjZWlsKGxlbmd0aCAvIHBlclBhZ2UpO1xuICAgIGxpc3QgPSBwbGFjZWhvbGRlciB8fCBjcmVhdGUoXCJ1bFwiLCBjbGFzc2VzLnBhZ2luYXRpb24sIEVsZW1lbnRzLnRyYWNrLnBhcmVudEVsZW1lbnQpO1xuICAgIGFkZENsYXNzKGxpc3QsIHBhZ2luYXRpb25DbGFzc2VzID0gQ0xBU1NfUEFHSU5BVElPTiArIFwiLS1cIiArIGdldERpcmVjdGlvbigpKTtcbiAgICBzZXRBdHRyaWJ1dGUobGlzdCwgUk9MRSwgXCJ0YWJsaXN0XCIpO1xuICAgIHNldEF0dHJpYnV0ZShsaXN0LCBBUklBX0xBQkVMLCBpMThuLnNlbGVjdCk7XG4gICAgc2V0QXR0cmlidXRlKGxpc3QsIEFSSUFfT1JJRU5UQVRJT04sIGdldERpcmVjdGlvbigpID09PSBUVEIgPyBcInZlcnRpY2FsXCIgOiBcIlwiKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgIHZhciBsaSA9IGNyZWF0ZShcImxpXCIsIG51bGwsIGxpc3QpO1xuICAgICAgdmFyIGJ1dHRvbiA9IGNyZWF0ZShcImJ1dHRvblwiLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnBhZ2UsXG4gICAgICAgIHR5cGU6IFwiYnV0dG9uXCJcbiAgICAgIH0sIGxpKTtcbiAgICAgIHZhciBjb250cm9scyA9IFNsaWRlcy5nZXRJbihpKS5tYXAoZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICAgIHJldHVybiBTbGlkZS5zbGlkZS5pZDtcbiAgICAgIH0pO1xuICAgICAgdmFyIHRleHQgPSAhaGFzRm9jdXMoKSAmJiBwZXJQYWdlID4gMSA/IGkxOG4ucGFnZVggOiBpMThuLnNsaWRlWDtcbiAgICAgIGJpbmQoYnV0dG9uLCBcImNsaWNrXCIsIGFwcGx5KG9uQ2xpY2ssIGkpKTtcblxuICAgICAgaWYgKG9wdGlvbnMucGFnaW5hdGlvbktleWJvYXJkKSB7XG4gICAgICAgIGJpbmQoYnV0dG9uLCBcImtleWRvd25cIiwgYXBwbHkob25LZXlkb3duLCBpKSk7XG4gICAgICB9XG5cbiAgICAgIHNldEF0dHJpYnV0ZShsaSwgUk9MRSwgXCJwcmVzZW50YXRpb25cIik7XG4gICAgICBzZXRBdHRyaWJ1dGUoYnV0dG9uLCBST0xFLCBcInRhYlwiKTtcbiAgICAgIHNldEF0dHJpYnV0ZShidXR0b24sIEFSSUFfQ09OVFJPTFMsIGNvbnRyb2xzLmpvaW4oXCIgXCIpKTtcbiAgICAgIHNldEF0dHJpYnV0ZShidXR0b24sIEFSSUFfTEFCRUwsIGZvcm1hdCh0ZXh0LCBpICsgMSkpO1xuICAgICAgc2V0QXR0cmlidXRlKGJ1dHRvbiwgVEFCX0lOREVYLCAtMSk7XG4gICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgbGk6IGxpLFxuICAgICAgICBidXR0b246IGJ1dHRvbixcbiAgICAgICAgcGFnZTogaVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25DbGljayhwYWdlKSB7XG4gICAgZ28oXCI+XCIgKyBwYWdlLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5ZG93bihwYWdlLCBlKSB7XG4gICAgdmFyIGxlbmd0aCA9IGl0ZW1zLmxlbmd0aDtcbiAgICB2YXIga2V5ID0gbm9ybWFsaXplS2V5KGUpO1xuICAgIHZhciBkaXIgPSBnZXREaXJlY3Rpb24oKTtcbiAgICB2YXIgbmV4dFBhZ2UgPSAtMTtcblxuICAgIGlmIChrZXkgPT09IHJlc29sdmUoQVJST1dfUklHSFQsIGZhbHNlLCBkaXIpKSB7XG4gICAgICBuZXh0UGFnZSA9ICsrcGFnZSAlIGxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gcmVzb2x2ZShBUlJPV19MRUZULCBmYWxzZSwgZGlyKSkge1xuICAgICAgbmV4dFBhZ2UgPSAoLS1wYWdlICsgbGVuZ3RoKSAlIGxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJIb21lXCIpIHtcbiAgICAgIG5leHRQYWdlID0gMDtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJFbmRcIikge1xuICAgICAgbmV4dFBhZ2UgPSBsZW5ndGggLSAxO1xuICAgIH1cblxuICAgIHZhciBpdGVtID0gaXRlbXNbbmV4dFBhZ2VdO1xuXG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGZvY3VzKGl0ZW0uYnV0dG9uKTtcbiAgICAgIGdvKFwiPlwiICsgbmV4dFBhZ2UpO1xuICAgICAgcHJldmVudChlLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXREaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMucGFnaW5hdGlvbkRpcmVjdGlvbiB8fCBvcHRpb25zLmRpcmVjdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEF0KGluZGV4KSB7XG4gICAgcmV0dXJuIGl0ZW1zW0NvbnRyb2xsZXIudG9QYWdlKGluZGV4KV07XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIHByZXYgPSBnZXRBdChnZXRJbmRleCh0cnVlKSk7XG4gICAgdmFyIGN1cnIgPSBnZXRBdChnZXRJbmRleCgpKTtcblxuICAgIGlmIChwcmV2KSB7XG4gICAgICB2YXIgYnV0dG9uID0gcHJldi5idXR0b247XG4gICAgICByZW1vdmVDbGFzcyhidXR0b24sIENMQVNTX0FDVElWRSk7XG4gICAgICByZW1vdmVBdHRyaWJ1dGUoYnV0dG9uLCBBUklBX1NFTEVDVEVEKTtcbiAgICAgIHNldEF0dHJpYnV0ZShidXR0b24sIFRBQl9JTkRFWCwgLTEpO1xuICAgIH1cblxuICAgIGlmIChjdXJyKSB7XG4gICAgICB2YXIgX2J1dHRvbiA9IGN1cnIuYnV0dG9uO1xuICAgICAgYWRkQ2xhc3MoX2J1dHRvbiwgQ0xBU1NfQUNUSVZFKTtcbiAgICAgIHNldEF0dHJpYnV0ZShfYnV0dG9uLCBBUklBX1NFTEVDVEVELCB0cnVlKTtcbiAgICAgIHNldEF0dHJpYnV0ZShfYnV0dG9uLCBUQUJfSU5ERVgsIFwiXCIpO1xuICAgIH1cblxuICAgIGVtaXQoRVZFTlRfUEFHSU5BVElPTl9VUERBVEVELCB7XG4gICAgICBsaXN0OiBsaXN0LFxuICAgICAgaXRlbXM6IGl0ZW1zXG4gICAgfSwgcHJldiwgY3Vycik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGl0ZW1zOiBpdGVtcyxcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogZGVzdHJveSxcbiAgICBnZXRBdDogZ2V0QXQsXG4gICAgdXBkYXRlOiB1cGRhdGVcbiAgfTtcbn1cblxudmFyIFRSSUdHRVJfS0VZUyA9IFtcIiBcIiwgXCJFbnRlclwiXTtcblxuZnVuY3Rpb24gU3luYyhTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgaXNOYXZpZ2F0aW9uID0gb3B0aW9ucy5pc05hdmlnYXRpb24sXG4gICAgICBzbGlkZUZvY3VzID0gb3B0aW9ucy5zbGlkZUZvY3VzO1xuICB2YXIgZXZlbnRzID0gW107XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgU3BsaWRlMi5zcGxpZGVzLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgaWYgKCF0YXJnZXQuaXNQYXJlbnQpIHtcbiAgICAgICAgc3luYyhTcGxpZGUyLCB0YXJnZXQuc3BsaWRlKTtcbiAgICAgICAgc3luYyh0YXJnZXQuc3BsaWRlLCBTcGxpZGUyKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChpc05hdmlnYXRpb24pIHtcbiAgICAgIG5hdmlnYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgICBlbXB0eShldmVudHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3VudCgpIHtcbiAgICBkZXN0cm95KCk7XG4gICAgbW91bnQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN5bmMoc3BsaWRlLCB0YXJnZXQpIHtcbiAgICB2YXIgZXZlbnQgPSBFdmVudEludGVyZmFjZShzcGxpZGUpO1xuICAgIGV2ZW50Lm9uKEVWRU5UX01PVkUsIGZ1bmN0aW9uIChpbmRleCwgcHJldiwgZGVzdCkge1xuICAgICAgdGFyZ2V0LmdvKHRhcmdldC5pcyhMT09QKSA/IGRlc3QgOiBpbmRleCk7XG4gICAgfSk7XG4gICAgZXZlbnRzLnB1c2goZXZlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gbmF2aWdhdGUoKSB7XG4gICAgdmFyIGV2ZW50ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMik7XG4gICAgdmFyIG9uID0gZXZlbnQub247XG4gICAgb24oRVZFTlRfQ0xJQ0ssIG9uQ2xpY2spO1xuICAgIG9uKEVWRU5UX1NMSURFX0tFWURPV04sIG9uS2V5ZG93bik7XG4gICAgb24oW0VWRU5UX01PVU5URUQsIEVWRU5UX1VQREFURURdLCB1cGRhdGUpO1xuICAgIGV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICBldmVudC5lbWl0KEVWRU5UX05BVklHQVRJT05fTU9VTlRFRCwgU3BsaWRlMi5zcGxpZGVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBzZXRBdHRyaWJ1dGUoQ29tcG9uZW50czIuRWxlbWVudHMubGlzdCwgQVJJQV9PUklFTlRBVElPTiwgb3B0aW9ucy5kaXJlY3Rpb24gPT09IFRUQiA/IFwidmVydGljYWxcIiA6IFwiXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DbGljayhTbGlkZSkge1xuICAgIFNwbGlkZTIuZ28oU2xpZGUuaW5kZXgpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25LZXlkb3duKFNsaWRlLCBlKSB7XG4gICAgaWYgKGluY2x1ZGVzKFRSSUdHRVJfS0VZUywgbm9ybWFsaXplS2V5KGUpKSkge1xuICAgICAgb25DbGljayhTbGlkZSk7XG4gICAgICBwcmV2ZW50KGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2V0dXA6IGFwcGx5KENvbXBvbmVudHMyLk1lZGlhLnNldCwge1xuICAgICAgc2xpZGVGb2N1czogaXNVbmRlZmluZWQoc2xpZGVGb2N1cykgPyBpc05hdmlnYXRpb24gOiBzbGlkZUZvY3VzXG4gICAgfSwgdHJ1ZSksXG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgcmVtb3VudDogcmVtb3VudFxuICB9O1xufVxuXG5mdW5jdGlvbiBXaGVlbChTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlMTIgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIGJpbmQgPSBfRXZlbnRJbnRlcmZhY2UxMi5iaW5kO1xuXG4gIHZhciBsYXN0VGltZSA9IDA7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaWYgKG9wdGlvbnMud2hlZWwpIHtcbiAgICAgIGJpbmQoQ29tcG9uZW50czIuRWxlbWVudHMudHJhY2ssIFwid2hlZWxcIiwgb25XaGVlbCwgU0NST0xMX0xJU1RFTkVSX09QVElPTlMpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uV2hlZWwoZSkge1xuICAgIGlmIChlLmNhbmNlbGFibGUpIHtcbiAgICAgIHZhciBkZWx0YVkgPSBlLmRlbHRhWTtcbiAgICAgIHZhciBiYWNrd2FyZHMgPSBkZWx0YVkgPCAwO1xuICAgICAgdmFyIHRpbWVTdGFtcCA9IHRpbWVPZihlKTtcblxuICAgICAgdmFyIF9taW4gPSBvcHRpb25zLndoZWVsTWluVGhyZXNob2xkIHx8IDA7XG5cbiAgICAgIHZhciBzbGVlcCA9IG9wdGlvbnMud2hlZWxTbGVlcCB8fCAwO1xuXG4gICAgICBpZiAoYWJzKGRlbHRhWSkgPiBfbWluICYmIHRpbWVTdGFtcCAtIGxhc3RUaW1lID4gc2xlZXApIHtcbiAgICAgICAgU3BsaWRlMi5nbyhiYWNrd2FyZHMgPyBcIjxcIiA6IFwiPlwiKTtcbiAgICAgICAgbGFzdFRpbWUgPSB0aW1lU3RhbXA7XG4gICAgICB9XG5cbiAgICAgIHNob3VsZFByZXZlbnQoYmFja3dhcmRzKSAmJiBwcmV2ZW50KGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZFByZXZlbnQoYmFja3dhcmRzKSB7XG4gICAgcmV0dXJuICFvcHRpb25zLnJlbGVhc2VXaGVlbCB8fCBTcGxpZGUyLnN0YXRlLmlzKE1PVklORykgfHwgQ29tcG9uZW50czIuQ29udHJvbGxlci5nZXRBZGphY2VudChiYWNrd2FyZHMpICE9PSAtMTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50XG4gIH07XG59XG5cbnZhciBTUl9SRU1PVkFMX0RFTEFZID0gOTA7XG5cbmZ1bmN0aW9uIExpdmUoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTEzID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBvbiA9IF9FdmVudEludGVyZmFjZTEzLm9uO1xuXG4gIHZhciB0cmFjayA9IENvbXBvbmVudHMyLkVsZW1lbnRzLnRyYWNrO1xuICB2YXIgZW5hYmxlZCA9IG9wdGlvbnMubGl2ZSAmJiAhb3B0aW9ucy5pc05hdmlnYXRpb247XG4gIHZhciBzciA9IGNyZWF0ZShcInNwYW5cIiwgQ0xBU1NfU1IpO1xuICB2YXIgaW50ZXJ2YWwgPSBSZXF1ZXN0SW50ZXJ2YWwoU1JfUkVNT1ZBTF9ERUxBWSwgYXBwbHkodG9nZ2xlLCBmYWxzZSkpO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGlmIChlbmFibGVkKSB7XG4gICAgICBkaXNhYmxlKCFDb21wb25lbnRzMi5BdXRvcGxheS5pc1BhdXNlZCgpKTtcbiAgICAgIHNldEF0dHJpYnV0ZSh0cmFjaywgQVJJQV9BVE9NSUMsIHRydWUpO1xuICAgICAgc3IudGV4dENvbnRlbnQgPSBcIlxcdTIwMjZcIjtcbiAgICAgIG9uKEVWRU5UX0FVVE9QTEFZX1BMQVksIGFwcGx5KGRpc2FibGUsIHRydWUpKTtcbiAgICAgIG9uKEVWRU5UX0FVVE9QTEFZX1BBVVNFLCBhcHBseShkaXNhYmxlLCBmYWxzZSkpO1xuICAgICAgb24oW0VWRU5UX01PVkVELCBFVkVOVF9TQ1JPTExFRF0sIGFwcGx5KHRvZ2dsZSwgdHJ1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZShhY3RpdmUpIHtcbiAgICBzZXRBdHRyaWJ1dGUodHJhY2ssIEFSSUFfQlVTWSwgYWN0aXZlKTtcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGFwcGVuZCh0cmFjaywgc3IpO1xuICAgICAgaW50ZXJ2YWwuc3RhcnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKHNyKTtcbiAgICAgIGludGVydmFsLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgcmVtb3ZlQXR0cmlidXRlKHRyYWNrLCBbQVJJQV9MSVZFLCBBUklBX0FUT01JQywgQVJJQV9CVVNZXSk7XG4gICAgcmVtb3ZlKHNyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc2FibGUoZGlzYWJsZWQpIHtcbiAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgc2V0QXR0cmlidXRlKHRyYWNrLCBBUklBX0xJVkUsIGRpc2FibGVkID8gXCJvZmZcIiA6IFwicG9saXRlXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRpc2FibGU6IGRpc2FibGUsXG4gICAgZGVzdHJveTogZGVzdHJveVxuICB9O1xufVxuXG52YXIgQ29tcG9uZW50Q29uc3RydWN0b3JzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIE1lZGlhOiBNZWRpYSxcbiAgRGlyZWN0aW9uOiBEaXJlY3Rpb24sXG4gIEVsZW1lbnRzOiBFbGVtZW50cyxcbiAgU2xpZGVzOiBTbGlkZXMsXG4gIExheW91dDogTGF5b3V0LFxuICBDbG9uZXM6IENsb25lcyxcbiAgTW92ZTogTW92ZSxcbiAgQ29udHJvbGxlcjogQ29udHJvbGxlcixcbiAgQXJyb3dzOiBBcnJvd3MsXG4gIEF1dG9wbGF5OiBBdXRvcGxheSxcbiAgQ292ZXI6IENvdmVyLFxuICBTY3JvbGw6IFNjcm9sbCxcbiAgRHJhZzogRHJhZyxcbiAgS2V5Ym9hcmQ6IEtleWJvYXJkLFxuICBMYXp5TG9hZDogTGF6eUxvYWQsXG4gIFBhZ2luYXRpb246IFBhZ2luYXRpb24sXG4gIFN5bmM6IFN5bmMsXG4gIFdoZWVsOiBXaGVlbCxcbiAgTGl2ZTogTGl2ZVxufSk7XG52YXIgSTE4TiA9IHtcbiAgcHJldjogXCJQcmV2aW91cyBzbGlkZVwiLFxuICBuZXh0OiBcIk5leHQgc2xpZGVcIixcbiAgZmlyc3Q6IFwiR28gdG8gZmlyc3Qgc2xpZGVcIixcbiAgbGFzdDogXCJHbyB0byBsYXN0IHNsaWRlXCIsXG4gIHNsaWRlWDogXCJHbyB0byBzbGlkZSAlc1wiLFxuICBwYWdlWDogXCJHbyB0byBwYWdlICVzXCIsXG4gIHBsYXk6IFwiU3RhcnQgYXV0b3BsYXlcIixcbiAgcGF1c2U6IFwiUGF1c2UgYXV0b3BsYXlcIixcbiAgY2Fyb3VzZWw6IFwiY2Fyb3VzZWxcIixcbiAgc2xpZGU6IFwic2xpZGVcIixcbiAgc2VsZWN0OiBcIlNlbGVjdCBhIHNsaWRlIHRvIHNob3dcIixcbiAgc2xpZGVMYWJlbDogXCIlcyBvZiAlc1wiXG59O1xudmFyIERFRkFVTFRTID0ge1xuICB0eXBlOiBcInNsaWRlXCIsXG4gIHJvbGU6IFwicmVnaW9uXCIsXG4gIHNwZWVkOiA0MDAsXG4gIHBlclBhZ2U6IDEsXG4gIGNsb25lU3RhdHVzOiB0cnVlLFxuICBhcnJvd3M6IHRydWUsXG4gIHBhZ2luYXRpb246IHRydWUsXG4gIHBhZ2luYXRpb25LZXlib2FyZDogdHJ1ZSxcbiAgaW50ZXJ2YWw6IDVlMyxcbiAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICBwYXVzZU9uRm9jdXM6IHRydWUsXG4gIHJlc2V0UHJvZ3Jlc3M6IHRydWUsXG4gIGVhc2luZzogXCJjdWJpYy1iZXppZXIoMC4yNSwgMSwgMC41LCAxKVwiLFxuICBkcmFnOiB0cnVlLFxuICBkaXJlY3Rpb246IFwibHRyXCIsXG4gIHRyaW1TcGFjZTogdHJ1ZSxcbiAgZm9jdXNhYmxlTm9kZXM6IFwiYSwgYnV0dG9uLCB0ZXh0YXJlYSwgaW5wdXQsIHNlbGVjdCwgaWZyYW1lXCIsXG4gIGxpdmU6IHRydWUsXG4gIGNsYXNzZXM6IENMQVNTRVMsXG4gIGkxOG46IEkxOE4sXG4gIHJlZHVjZWRNb3Rpb246IHtcbiAgICBzcGVlZDogMCxcbiAgICByZXdpbmRTcGVlZDogMCxcbiAgICBhdXRvcGxheTogXCJwYXVzZVwiXG4gIH1cbn07XG5cbmZ1bmN0aW9uIEZhZGUoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIFNsaWRlcyA9IENvbXBvbmVudHMyLlNsaWRlcztcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBFdmVudEludGVyZmFjZShTcGxpZGUyKS5vbihbRVZFTlRfTU9VTlRFRCwgRVZFTlRfUkVGUkVTSF0sIGluaXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBTbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgIFNsaWRlLnN0eWxlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlWCgtXCIgKyAxMDAgKiBTbGlkZS5pbmRleCArIFwiJSlcIik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydChpbmRleCwgZG9uZSkge1xuICAgIFNsaWRlcy5zdHlsZShcInRyYW5zaXRpb25cIiwgXCJvcGFjaXR5IFwiICsgb3B0aW9ucy5zcGVlZCArIFwibXMgXCIgKyBvcHRpb25zLmVhc2luZyk7XG4gICAgbmV4dFRpY2soZG9uZSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBzdGFydDogc3RhcnQsXG4gICAgY2FuY2VsOiBub29wXG4gIH07XG59XG5cbmZ1bmN0aW9uIFNsaWRlKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBNb3ZlID0gQ29tcG9uZW50czIuTW92ZSxcbiAgICAgIENvbnRyb2xsZXIgPSBDb21wb25lbnRzMi5Db250cm9sbGVyLFxuICAgICAgU2Nyb2xsID0gQ29tcG9uZW50czIuU2Nyb2xsO1xuICB2YXIgbGlzdCA9IENvbXBvbmVudHMyLkVsZW1lbnRzLmxpc3Q7XG4gIHZhciB0cmFuc2l0aW9uID0gYXBwbHkoc3R5bGUsIGxpc3QsIFwidHJhbnNpdGlvblwiKTtcbiAgdmFyIGVuZENhbGxiYWNrO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLmJpbmQobGlzdCwgXCJ0cmFuc2l0aW9uZW5kXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS50YXJnZXQgPT09IGxpc3QgJiYgZW5kQ2FsbGJhY2spIHtcbiAgICAgICAgY2FuY2VsKCk7XG4gICAgICAgIGVuZENhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydChpbmRleCwgZG9uZSkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IE1vdmUudG9Qb3NpdGlvbihpbmRleCwgdHJ1ZSk7XG4gICAgdmFyIHBvc2l0aW9uID0gTW92ZS5nZXRQb3NpdGlvbigpO1xuICAgIHZhciBzcGVlZCA9IGdldFNwZWVkKGluZGV4KTtcblxuICAgIGlmIChhYnMoZGVzdGluYXRpb24gLSBwb3NpdGlvbikgPj0gMSAmJiBzcGVlZCA+PSAxKSB7XG4gICAgICBpZiAob3B0aW9ucy51c2VTY3JvbGwpIHtcbiAgICAgICAgU2Nyb2xsLnNjcm9sbChkZXN0aW5hdGlvbiwgc3BlZWQsIGZhbHNlLCBkb25lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb24oXCJ0cmFuc2Zvcm0gXCIgKyBzcGVlZCArIFwibXMgXCIgKyBvcHRpb25zLmVhc2luZyk7XG4gICAgICAgIE1vdmUudHJhbnNsYXRlKGRlc3RpbmF0aW9uLCB0cnVlKTtcbiAgICAgICAgZW5kQ2FsbGJhY2sgPSBkb25lO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBNb3ZlLmp1bXAoaW5kZXgpO1xuICAgICAgZG9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICB0cmFuc2l0aW9uKFwiXCIpO1xuICAgIFNjcm9sbC5jYW5jZWwoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNwZWVkKGluZGV4KSB7XG4gICAgdmFyIHJld2luZFNwZWVkID0gb3B0aW9ucy5yZXdpbmRTcGVlZDtcblxuICAgIGlmIChTcGxpZGUyLmlzKFNMSURFKSAmJiByZXdpbmRTcGVlZCkge1xuICAgICAgdmFyIHByZXYgPSBDb250cm9sbGVyLmdldEluZGV4KHRydWUpO1xuICAgICAgdmFyIGVuZCA9IENvbnRyb2xsZXIuZ2V0RW5kKCk7XG5cbiAgICAgIGlmIChwcmV2ID09PSAwICYmIGluZGV4ID49IGVuZCB8fCBwcmV2ID49IGVuZCAmJiBpbmRleCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gcmV3aW5kU3BlZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnMuc3BlZWQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBzdGFydDogc3RhcnQsXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn1cblxudmFyIF9TcGxpZGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBfU3BsaWRlKHRhcmdldCwgb3B0aW9ucykge1xuICAgIHRoaXMuZXZlbnQgPSBFdmVudEludGVyZmFjZSgpO1xuICAgIHRoaXMuQ29tcG9uZW50cyA9IHt9O1xuICAgIHRoaXMuc3RhdGUgPSBTdGF0ZShDUkVBVEVEKTtcbiAgICB0aGlzLnNwbGlkZXMgPSBbXTtcbiAgICB0aGlzLl9vID0ge307XG4gICAgdGhpcy5fRSA9IHt9O1xuICAgIHZhciByb290ID0gaXNTdHJpbmcodGFyZ2V0KSA/IHF1ZXJ5KGRvY3VtZW50LCB0YXJnZXQpIDogdGFyZ2V0O1xuICAgIGFzc2VydChyb290LCByb290ICsgXCIgaXMgaW52YWxpZC5cIik7XG4gICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICBvcHRpb25zID0gbWVyZ2Uoe1xuICAgICAgbGFiZWw6IGdldEF0dHJpYnV0ZShyb290LCBBUklBX0xBQkVMKSB8fCBcIlwiLFxuICAgICAgbGFiZWxsZWRieTogZ2V0QXR0cmlidXRlKHJvb3QsIEFSSUFfTEFCRUxMRURCWSkgfHwgXCJcIlxuICAgIH0sIERFRkFVTFRTLCBfU3BsaWRlLmRlZmF1bHRzLCBvcHRpb25zIHx8IHt9KTtcblxuICAgIHRyeSB7XG4gICAgICBtZXJnZShvcHRpb25zLCBKU09OLnBhcnNlKGdldEF0dHJpYnV0ZShyb290LCBEQVRBX0FUVFJJQlVURSkpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBhc3NlcnQoZmFsc2UsIFwiSW52YWxpZCBKU09OXCIpO1xuICAgIH1cblxuICAgIHRoaXMuX28gPSBPYmplY3QuY3JlYXRlKG1lcmdlKHt9LCBvcHRpb25zKSk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gX1NwbGlkZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLm1vdW50ID0gZnVuY3Rpb24gbW91bnQoRXh0ZW5zaW9ucywgVHJhbnNpdGlvbikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICBDb21wb25lbnRzMiA9IHRoaXMuQ29tcG9uZW50cztcbiAgICBhc3NlcnQoc3RhdGUuaXMoW0NSRUFURUQsIERFU1RST1lFRF0pLCBcIkFscmVhZHkgbW91bnRlZCFcIik7XG4gICAgc3RhdGUuc2V0KENSRUFURUQpO1xuICAgIHRoaXMuX0MgPSBDb21wb25lbnRzMjtcbiAgICB0aGlzLl9UID0gVHJhbnNpdGlvbiB8fCB0aGlzLl9UIHx8ICh0aGlzLmlzKEZBREUpID8gRmFkZSA6IFNsaWRlKTtcbiAgICB0aGlzLl9FID0gRXh0ZW5zaW9ucyB8fCB0aGlzLl9FO1xuICAgIHZhciBDb25zdHJ1Y3RvcnMgPSBhc3NpZ24oe30sIENvbXBvbmVudENvbnN0cnVjdG9ycywgdGhpcy5fRSwge1xuICAgICAgVHJhbnNpdGlvbjogdGhpcy5fVFxuICAgIH0pO1xuICAgIGZvck93bihDb25zdHJ1Y3RvcnMsIGZ1bmN0aW9uIChDb21wb25lbnQsIGtleSkge1xuICAgICAgdmFyIGNvbXBvbmVudCA9IENvbXBvbmVudChfdGhpcywgQ29tcG9uZW50czIsIF90aGlzLl9vKTtcbiAgICAgIENvbXBvbmVudHMyW2tleV0gPSBjb21wb25lbnQ7XG4gICAgICBjb21wb25lbnQuc2V0dXAgJiYgY29tcG9uZW50LnNldHVwKCk7XG4gICAgfSk7XG4gICAgZm9yT3duKENvbXBvbmVudHMyLCBmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gICAgICBjb21wb25lbnQubW91bnQgJiYgY29tcG9uZW50Lm1vdW50KCk7XG4gICAgfSk7XG4gICAgdGhpcy5lbWl0KEVWRU5UX01PVU5URUQpO1xuICAgIGFkZENsYXNzKHRoaXMucm9vdCwgQ0xBU1NfSU5JVElBTElaRUQpO1xuICAgIHN0YXRlLnNldChJRExFKTtcbiAgICB0aGlzLmVtaXQoRVZFTlRfUkVBRFkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5zeW5jID0gZnVuY3Rpb24gc3luYyhzcGxpZGUpIHtcbiAgICB0aGlzLnNwbGlkZXMucHVzaCh7XG4gICAgICBzcGxpZGU6IHNwbGlkZVxuICAgIH0pO1xuICAgIHNwbGlkZS5zcGxpZGVzLnB1c2goe1xuICAgICAgc3BsaWRlOiB0aGlzLFxuICAgICAgaXNQYXJlbnQ6IHRydWVcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnN0YXRlLmlzKElETEUpKSB7XG4gICAgICB0aGlzLl9DLlN5bmMucmVtb3VudCgpO1xuXG4gICAgICBzcGxpZGUuQ29tcG9uZW50cy5TeW5jLnJlbW91bnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uZ28gPSBmdW5jdGlvbiBnbyhjb250cm9sKSB7XG4gICAgdGhpcy5fQy5Db250cm9sbGVyLmdvKGNvbnRyb2wpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLm9uID0gZnVuY3Rpb24gb24oZXZlbnRzLCBjYWxsYmFjaykge1xuICAgIHRoaXMuZXZlbnQub24oZXZlbnRzLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLm9mZiA9IGZ1bmN0aW9uIG9mZihldmVudHMpIHtcbiAgICB0aGlzLmV2ZW50Lm9mZihldmVudHMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5lbWl0ID0gZnVuY3Rpb24gZW1pdChldmVudCkge1xuICAgIHZhciBfdGhpcyRldmVudDtcblxuICAgIChfdGhpcyRldmVudCA9IHRoaXMuZXZlbnQpLmVtaXQuYXBwbHkoX3RoaXMkZXZlbnQsIFtldmVudF0uY29uY2F0KHNsaWNlKGFyZ3VtZW50cywgMSkpKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5hZGQgPSBmdW5jdGlvbiBhZGQoc2xpZGVzLCBpbmRleCkge1xuICAgIHRoaXMuX0MuU2xpZGVzLmFkZChzbGlkZXMsIGluZGV4KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUobWF0Y2hlcikge1xuICAgIHRoaXMuX0MuU2xpZGVzLnJlbW92ZShtYXRjaGVyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5pcyA9IGZ1bmN0aW9uIGlzKHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5fby50eXBlID09PSB0eXBlO1xuICB9O1xuXG4gIF9wcm90by5yZWZyZXNoID0gZnVuY3Rpb24gcmVmcmVzaCgpIHtcbiAgICB0aGlzLmVtaXQoRVZFTlRfUkVGUkVTSCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KGNvbXBsZXRlbHkpIHtcbiAgICBpZiAoY29tcGxldGVseSA9PT0gdm9pZCAwKSB7XG4gICAgICBjb21wbGV0ZWx5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgZXZlbnQgPSB0aGlzLmV2ZW50LFxuICAgICAgICBzdGF0ZSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoc3RhdGUuaXMoQ1JFQVRFRCkpIHtcbiAgICAgIEV2ZW50SW50ZXJmYWNlKHRoaXMpLm9uKEVWRU5UX1JFQURZLCB0aGlzLmRlc3Ryb3kuYmluZCh0aGlzLCBjb21wbGV0ZWx5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvck93bih0aGlzLl9DLCBmdW5jdGlvbiAoY29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudC5kZXN0cm95ICYmIGNvbXBvbmVudC5kZXN0cm95KGNvbXBsZXRlbHkpO1xuICAgICAgfSwgdHJ1ZSk7XG4gICAgICBldmVudC5lbWl0KEVWRU5UX0RFU1RST1kpO1xuICAgICAgZXZlbnQuZGVzdHJveSgpO1xuICAgICAgY29tcGxldGVseSAmJiBlbXB0eSh0aGlzLnNwbGlkZXMpO1xuICAgICAgc3RhdGUuc2V0KERFU1RST1lFRCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKF9TcGxpZGUsIFt7XG4gICAga2V5OiBcIm9wdGlvbnNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQob3B0aW9ucykge1xuICAgICAgdGhpcy5fQy5NZWRpYS5zZXQob3B0aW9ucywgdHJ1ZSwgdHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxlbmd0aFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX0MuU2xpZGVzLmdldExlbmd0aCh0cnVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaW5kZXhcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9DLkNvbnRyb2xsZXIuZ2V0SW5kZXgoKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gX1NwbGlkZTtcbn0oKTtcblxudmFyIFNwbGlkZSA9IF9TcGxpZGU7XG5TcGxpZGUuZGVmYXVsdHMgPSB7fTtcblNwbGlkZS5TVEFURVMgPSBTVEFURVM7XG52YXIgQ0xBU1NfUkVOREVSRUQgPSBcImlzLXJlbmRlcmVkXCI7XG52YXIgUkVOREVSRVJfREVGQVVMVF9DT05GSUcgPSB7XG4gIGxpc3RUYWc6IFwidWxcIixcbiAgc2xpZGVUYWc6IFwibGlcIlxufTtcblxudmFyIFN0eWxlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3R5bGUoaWQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnN0eWxlcyA9IHt9O1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgdmFyIF9wcm90bzIgPSBTdHlsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvMi5ydWxlID0gZnVuY3Rpb24gcnVsZShzZWxlY3RvciwgcHJvcCwgdmFsdWUsIGJyZWFrcG9pbnQpIHtcbiAgICBicmVha3BvaW50ID0gYnJlYWtwb2ludCB8fCBcImRlZmF1bHRcIjtcbiAgICB2YXIgc2VsZWN0b3JzID0gdGhpcy5zdHlsZXNbYnJlYWtwb2ludF0gPSB0aGlzLnN0eWxlc1ticmVha3BvaW50XSB8fCB7fTtcbiAgICB2YXIgc3R5bGVzID0gc2VsZWN0b3JzW3NlbGVjdG9yXSA9IHNlbGVjdG9yc1tzZWxlY3Rvcl0gfHwge307XG4gICAgc3R5bGVzW3Byb3BdID0gdmFsdWU7XG4gIH07XG5cbiAgX3Byb3RvMi5idWlsZCA9IGZ1bmN0aW9uIGJ1aWxkKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgICBpZiAodGhpcy5zdHlsZXMuZGVmYXVsdCkge1xuICAgICAgY3NzICs9IHRoaXMuYnVpbGRTZWxlY3RvcnModGhpcy5zdHlsZXMuZGVmYXVsdCk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5zdHlsZXMpLnNvcnQoZnVuY3Rpb24gKG4sIG0pIHtcbiAgICAgIHJldHVybiBfdGhpczIub3B0aW9ucy5tZWRpYVF1ZXJ5ID09PSBcIm1pblwiID8gK24gLSArbSA6ICttIC0gK247XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoYnJlYWtwb2ludCkge1xuICAgICAgaWYgKGJyZWFrcG9pbnQgIT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAgIGNzcyArPSBcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IFwiICsgYnJlYWtwb2ludCArIFwicHgpIHtcIjtcbiAgICAgICAgY3NzICs9IF90aGlzMi5idWlsZFNlbGVjdG9ycyhfdGhpczIuc3R5bGVzW2JyZWFrcG9pbnRdKTtcbiAgICAgICAgY3NzICs9IFwifVwiO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjc3M7XG4gIH07XG5cbiAgX3Byb3RvMi5idWlsZFNlbGVjdG9ycyA9IGZ1bmN0aW9uIGJ1aWxkU2VsZWN0b3JzKHNlbGVjdG9ycykge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGNzcyA9IFwiXCI7XG4gICAgZm9yT3duKHNlbGVjdG9ycywgZnVuY3Rpb24gKHN0eWxlcywgc2VsZWN0b3IpIHtcbiAgICAgIHNlbGVjdG9yID0gKFwiI1wiICsgX3RoaXMzLmlkICsgXCIgXCIgKyBzZWxlY3RvcikudHJpbSgpO1xuICAgICAgY3NzICs9IHNlbGVjdG9yICsgXCIge1wiO1xuICAgICAgZm9yT3duKHN0eWxlcywgZnVuY3Rpb24gKHZhbHVlLCBwcm9wKSB7XG4gICAgICAgIGlmICh2YWx1ZSB8fCB2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgIGNzcyArPSBwcm9wICsgXCI6IFwiICsgdmFsdWUgKyBcIjtcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjc3MgKz0gXCJ9XCI7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNzcztcbiAgfTtcblxuICByZXR1cm4gU3R5bGU7XG59KCk7XG5cbnZhciBTcGxpZGVSZW5kZXJlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNwbGlkZVJlbmRlcmVyKGNvbnRlbnRzLCBvcHRpb25zLCBjb25maWcsIGRlZmF1bHRzKSB7XG4gICAgdGhpcy5zbGlkZXMgPSBbXTtcbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgICB0aGlzLmJyZWFrcG9pbnRzID0gW107XG4gICAgbWVyZ2UoREVGQVVMVFMsIGRlZmF1bHRzIHx8IHt9KTtcbiAgICBtZXJnZShtZXJnZSh0aGlzLm9wdGlvbnMsIERFRkFVTFRTKSwgb3B0aW9ucyB8fCB7fSk7XG4gICAgdGhpcy5jb250ZW50cyA9IGNvbnRlbnRzO1xuICAgIHRoaXMuY29uZmlnID0gYXNzaWduKHt9LCBSRU5ERVJFUl9ERUZBVUxUX0NPTkZJRywgY29uZmlnIHx8IHt9KTtcbiAgICB0aGlzLmlkID0gdGhpcy5jb25maWcuaWQgfHwgdW5pcXVlSWQoXCJzcGxpZGVcIik7XG4gICAgdGhpcy5TdHlsZSA9IG5ldyBTdHlsZSh0aGlzLmlkLCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuRGlyZWN0aW9uID0gRGlyZWN0aW9uKG51bGwsIG51bGwsIHRoaXMub3B0aW9ucyk7XG4gICAgYXNzZXJ0KHRoaXMuY29udGVudHMubGVuZ3RoLCBcIlByb3ZpZGUgYXQgbGVhc3QgMSBjb250ZW50LlwiKTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIFNwbGlkZVJlbmRlcmVyLmNsZWFuID0gZnVuY3Rpb24gY2xlYW4oc3BsaWRlKSB7XG4gICAgdmFyIF9FdmVudEludGVyZmFjZTE0ID0gRXZlbnRJbnRlcmZhY2Uoc3BsaWRlKSxcbiAgICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2UxNC5vbjtcblxuICAgIHZhciByb290ID0gc3BsaWRlLnJvb3Q7XG4gICAgdmFyIGNsb25lcyA9IHF1ZXJ5QWxsKHJvb3QsIFwiLlwiICsgQ0xBU1NfQ0xPTkUpO1xuICAgIG9uKEVWRU5UX01PVU5URUQsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlbW92ZShjaGlsZChyb290LCBcInN0eWxlXCIpKTtcbiAgICB9KTtcbiAgICByZW1vdmUoY2xvbmVzKTtcbiAgfTtcblxuICB2YXIgX3Byb3RvMyA9IFNwbGlkZVJlbmRlcmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8zLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuICAgIHRoaXMucGFyc2VCcmVha3BvaW50cygpO1xuICAgIHRoaXMuaW5pdFNsaWRlcygpO1xuICAgIHRoaXMucmVnaXN0ZXJSb290U3R5bGVzKCk7XG4gICAgdGhpcy5yZWdpc3RlclRyYWNrU3R5bGVzKCk7XG4gICAgdGhpcy5yZWdpc3RlclNsaWRlU3R5bGVzKCk7XG4gICAgdGhpcy5yZWdpc3Rlckxpc3RTdHlsZXMoKTtcbiAgfTtcblxuICBfcHJvdG8zLmluaXRTbGlkZXMgPSBmdW5jdGlvbiBpbml0U2xpZGVzKCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgcHVzaCh0aGlzLnNsaWRlcywgdGhpcy5jb250ZW50cy5tYXAoZnVuY3Rpb24gKGNvbnRlbnQsIGluZGV4KSB7XG4gICAgICBjb250ZW50ID0gaXNTdHJpbmcoY29udGVudCkgPyB7XG4gICAgICAgIGh0bWw6IGNvbnRlbnRcbiAgICAgIH0gOiBjb250ZW50O1xuICAgICAgY29udGVudC5zdHlsZXMgPSBjb250ZW50LnN0eWxlcyB8fCB7fTtcbiAgICAgIGNvbnRlbnQuYXR0cnMgPSBjb250ZW50LmF0dHJzIHx8IHt9O1xuXG4gICAgICBfdGhpczQuY292ZXIoY29udGVudCk7XG5cbiAgICAgIHZhciBjbGFzc2VzID0gX3RoaXM0Lm9wdGlvbnMuY2xhc3Nlcy5zbGlkZSArIFwiIFwiICsgKGluZGV4ID09PSAwID8gQ0xBU1NfQUNUSVZFIDogXCJcIik7XG4gICAgICBhc3NpZ24oY29udGVudC5hdHRycywge1xuICAgICAgICBjbGFzczogKGNsYXNzZXMgKyBcIiBcIiArIChjb250ZW50LmF0dHJzLmNsYXNzIHx8IFwiXCIpKS50cmltKCksXG4gICAgICAgIHN0eWxlOiBfdGhpczQuYnVpbGRTdHlsZXMoY29udGVudC5zdHlsZXMpXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pKTtcblxuICAgIGlmICh0aGlzLmlzTG9vcCgpKSB7XG4gICAgICB0aGlzLmdlbmVyYXRlQ2xvbmVzKHRoaXMuc2xpZGVzKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvMy5yZWdpc3RlclJvb3RTdHlsZXMgPSBmdW5jdGlvbiByZWdpc3RlclJvb3RTdHlsZXMoKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICB0aGlzLmJyZWFrcG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgd2lkdGggPSBfcmVmMlswXSxcbiAgICAgICAgICBvcHRpb25zID0gX3JlZjJbMV07XG5cbiAgICAgIF90aGlzNS5TdHlsZS5ydWxlKFwiIFwiLCBcIm1heC13aWR0aFwiLCB1bml0KG9wdGlvbnMud2lkdGgpLCB3aWR0aCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvMy5yZWdpc3RlclRyYWNrU3R5bGVzID0gZnVuY3Rpb24gcmVnaXN0ZXJUcmFja1N0eWxlcygpIHtcbiAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgIHZhciBTdHlsZTIgPSB0aGlzLlN0eWxlO1xuICAgIHZhciBzZWxlY3RvciA9IFwiLlwiICsgQ0xBU1NfVFJBQ0s7XG4gICAgdGhpcy5icmVha3BvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgdmFyIHdpZHRoID0gX3JlZjNbMF0sXG4gICAgICAgICAgb3B0aW9ucyA9IF9yZWYzWzFdO1xuICAgICAgU3R5bGUyLnJ1bGUoc2VsZWN0b3IsIF90aGlzNi5yZXNvbHZlKFwicGFkZGluZ0xlZnRcIiksIF90aGlzNi5jc3NQYWRkaW5nKG9wdGlvbnMsIGZhbHNlKSwgd2lkdGgpO1xuICAgICAgU3R5bGUyLnJ1bGUoc2VsZWN0b3IsIF90aGlzNi5yZXNvbHZlKFwicGFkZGluZ1JpZ2h0XCIpLCBfdGhpczYuY3NzUGFkZGluZyhvcHRpb25zLCB0cnVlKSwgd2lkdGgpO1xuICAgICAgU3R5bGUyLnJ1bGUoc2VsZWN0b3IsIFwiaGVpZ2h0XCIsIF90aGlzNi5jc3NUcmFja0hlaWdodChvcHRpb25zKSwgd2lkdGgpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90bzMucmVnaXN0ZXJMaXN0U3R5bGVzID0gZnVuY3Rpb24gcmVnaXN0ZXJMaXN0U3R5bGVzKCkge1xuICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgdmFyIFN0eWxlMiA9IHRoaXMuU3R5bGU7XG4gICAgdmFyIHNlbGVjdG9yID0gXCIuXCIgKyBDTEFTU19MSVNUO1xuICAgIHRoaXMuYnJlYWtwb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjQpIHtcbiAgICAgIHZhciB3aWR0aCA9IF9yZWY0WzBdLFxuICAgICAgICAgIG9wdGlvbnMgPSBfcmVmNFsxXTtcbiAgICAgIFN0eWxlMi5ydWxlKHNlbGVjdG9yLCBcInRyYW5zZm9ybVwiLCBfdGhpczcuYnVpbGRUcmFuc2xhdGUob3B0aW9ucyksIHdpZHRoKTtcblxuICAgICAgaWYgKCFfdGhpczcuY3NzU2xpZGVIZWlnaHQob3B0aW9ucykpIHtcbiAgICAgICAgU3R5bGUyLnJ1bGUoc2VsZWN0b3IsIFwiYXNwZWN0LXJhdGlvXCIsIF90aGlzNy5jc3NBc3BlY3RSYXRpbyhvcHRpb25zKSwgd2lkdGgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90bzMucmVnaXN0ZXJTbGlkZVN0eWxlcyA9IGZ1bmN0aW9uIHJlZ2lzdGVyU2xpZGVTdHlsZXMoKSB7XG4gICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICB2YXIgU3R5bGUyID0gdGhpcy5TdHlsZTtcbiAgICB2YXIgc2VsZWN0b3IgPSBcIi5cIiArIENMQVNTX1NMSURFO1xuICAgIHRoaXMuYnJlYWtwb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjUpIHtcbiAgICAgIHZhciB3aWR0aCA9IF9yZWY1WzBdLFxuICAgICAgICAgIG9wdGlvbnMgPSBfcmVmNVsxXTtcbiAgICAgIFN0eWxlMi5ydWxlKHNlbGVjdG9yLCBcIndpZHRoXCIsIF90aGlzOC5jc3NTbGlkZVdpZHRoKG9wdGlvbnMpLCB3aWR0aCk7XG4gICAgICBTdHlsZTIucnVsZShzZWxlY3RvciwgXCJoZWlnaHRcIiwgX3RoaXM4LmNzc1NsaWRlSGVpZ2h0KG9wdGlvbnMpIHx8IFwiMTAwJVwiLCB3aWR0aCk7XG4gICAgICBTdHlsZTIucnVsZShzZWxlY3RvciwgX3RoaXM4LnJlc29sdmUoXCJtYXJnaW5SaWdodFwiKSwgdW5pdChvcHRpb25zLmdhcCkgfHwgXCIwcHhcIiwgd2lkdGgpO1xuICAgICAgU3R5bGUyLnJ1bGUoc2VsZWN0b3IgKyBcIiA+IGltZ1wiLCBcImRpc3BsYXlcIiwgb3B0aW9ucy5jb3ZlciA/IFwibm9uZVwiIDogXCJpbmxpbmVcIiwgd2lkdGgpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90bzMuYnVpbGRUcmFuc2xhdGUgPSBmdW5jdGlvbiBidWlsZFRyYW5zbGF0ZShvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzJERpcmVjdGlvbiA9IHRoaXMuRGlyZWN0aW9uLFxuICAgICAgICByZXNvbHZlID0gX3RoaXMkRGlyZWN0aW9uLnJlc29sdmUsXG4gICAgICAgIG9yaWVudCA9IF90aGlzJERpcmVjdGlvbi5vcmllbnQ7XG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgIHZhbHVlcy5wdXNoKHRoaXMuY3NzT2Zmc2V0Q2xvbmVzKG9wdGlvbnMpKTtcbiAgICB2YWx1ZXMucHVzaCh0aGlzLmNzc09mZnNldEdhcHMob3B0aW9ucykpO1xuXG4gICAgaWYgKHRoaXMuaXNDZW50ZXIob3B0aW9ucykpIHtcbiAgICAgIHZhbHVlcy5wdXNoKHRoaXMuYnVpbGRDc3NWYWx1ZShvcmllbnQoLTUwKSwgXCIlXCIpKTtcbiAgICAgIHZhbHVlcy5wdXNoLmFwcGx5KHZhbHVlcywgdGhpcy5jc3NPZmZzZXRDZW50ZXIob3B0aW9ucykpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXMuZmlsdGVyKEJvb2xlYW4pLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBcInRyYW5zbGF0ZVwiICsgcmVzb2x2ZShcIlhcIikgKyBcIihcIiArIHZhbHVlICsgXCIpXCI7XG4gICAgfSkuam9pbihcIiBcIik7XG4gIH07XG5cbiAgX3Byb3RvMy5jc3NPZmZzZXRDbG9uZXMgPSBmdW5jdGlvbiBjc3NPZmZzZXRDbG9uZXMob3B0aW9ucykge1xuICAgIHZhciBfdGhpcyREaXJlY3Rpb24yID0gdGhpcy5EaXJlY3Rpb24sXG4gICAgICAgIHJlc29sdmUgPSBfdGhpcyREaXJlY3Rpb24yLnJlc29sdmUsXG4gICAgICAgIG9yaWVudCA9IF90aGlzJERpcmVjdGlvbjIub3JpZW50O1xuICAgIHZhciBjbG9uZUNvdW50ID0gdGhpcy5nZXRDbG9uZUNvdW50KCk7XG5cbiAgICBpZiAodGhpcy5pc0ZpeGVkV2lkdGgob3B0aW9ucykpIHtcbiAgICAgIHZhciBfdGhpcyRwYXJzZUNzc1ZhbHVlID0gdGhpcy5wYXJzZUNzc1ZhbHVlKG9wdGlvbnNbcmVzb2x2ZShcImZpeGVkV2lkdGhcIildKSxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHBhcnNlQ3NzVmFsdWUudmFsdWUsXG4gICAgICAgICAgdW5pdDIgPSBfdGhpcyRwYXJzZUNzc1ZhbHVlLnVuaXQ7XG5cbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkQ3NzVmFsdWUob3JpZW50KHZhbHVlKSAqIGNsb25lQ291bnQsIHVuaXQyKTtcbiAgICB9XG5cbiAgICB2YXIgcGVyY2VudCA9IDEwMCAqIGNsb25lQ291bnQgLyBvcHRpb25zLnBlclBhZ2U7XG4gICAgcmV0dXJuIG9yaWVudChwZXJjZW50KSArIFwiJVwiO1xuICB9O1xuXG4gIF9wcm90bzMuY3NzT2Zmc2V0Q2VudGVyID0gZnVuY3Rpb24gY3NzT2Zmc2V0Q2VudGVyKG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMkRGlyZWN0aW9uMyA9IHRoaXMuRGlyZWN0aW9uLFxuICAgICAgICByZXNvbHZlID0gX3RoaXMkRGlyZWN0aW9uMy5yZXNvbHZlLFxuICAgICAgICBvcmllbnQgPSBfdGhpcyREaXJlY3Rpb24zLm9yaWVudDtcblxuICAgIGlmICh0aGlzLmlzRml4ZWRXaWR0aChvcHRpb25zKSkge1xuICAgICAgdmFyIF90aGlzJHBhcnNlQ3NzVmFsdWUyID0gdGhpcy5wYXJzZUNzc1ZhbHVlKG9wdGlvbnNbcmVzb2x2ZShcImZpeGVkV2lkdGhcIildKSxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHBhcnNlQ3NzVmFsdWUyLnZhbHVlLFxuICAgICAgICAgIHVuaXQyID0gX3RoaXMkcGFyc2VDc3NWYWx1ZTIudW5pdDtcblxuICAgICAgcmV0dXJuIFt0aGlzLmJ1aWxkQ3NzVmFsdWUob3JpZW50KHZhbHVlIC8gMiksIHVuaXQyKV07XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgIHZhciBwZXJQYWdlID0gb3B0aW9ucy5wZXJQYWdlLFxuICAgICAgICBnYXAgPSBvcHRpb25zLmdhcDtcbiAgICB2YWx1ZXMucHVzaChvcmllbnQoNTAgLyBwZXJQYWdlKSArIFwiJVwiKTtcblxuICAgIGlmIChnYXApIHtcbiAgICAgIHZhciBfdGhpcyRwYXJzZUNzc1ZhbHVlMyA9IHRoaXMucGFyc2VDc3NWYWx1ZShnYXApLFxuICAgICAgICAgIF92YWx1ZSA9IF90aGlzJHBhcnNlQ3NzVmFsdWUzLnZhbHVlLFxuICAgICAgICAgIF91bml0ID0gX3RoaXMkcGFyc2VDc3NWYWx1ZTMudW5pdDtcblxuICAgICAgdmFyIGdhcE9mZnNldCA9IChfdmFsdWUgLyBwZXJQYWdlIC0gX3ZhbHVlKSAvIDI7XG4gICAgICB2YWx1ZXMucHVzaCh0aGlzLmJ1aWxkQ3NzVmFsdWUob3JpZW50KGdhcE9mZnNldCksIF91bml0KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfTtcblxuICBfcHJvdG8zLmNzc09mZnNldEdhcHMgPSBmdW5jdGlvbiBjc3NPZmZzZXRHYXBzKG9wdGlvbnMpIHtcbiAgICB2YXIgY2xvbmVDb3VudCA9IHRoaXMuZ2V0Q2xvbmVDb3VudCgpO1xuXG4gICAgaWYgKGNsb25lQ291bnQgJiYgb3B0aW9ucy5nYXApIHtcbiAgICAgIHZhciBvcmllbnQgPSB0aGlzLkRpcmVjdGlvbi5vcmllbnQ7XG5cbiAgICAgIHZhciBfdGhpcyRwYXJzZUNzc1ZhbHVlNCA9IHRoaXMucGFyc2VDc3NWYWx1ZShvcHRpb25zLmdhcCksXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRwYXJzZUNzc1ZhbHVlNC52YWx1ZSxcbiAgICAgICAgICB1bml0MiA9IF90aGlzJHBhcnNlQ3NzVmFsdWU0LnVuaXQ7XG5cbiAgICAgIGlmICh0aGlzLmlzRml4ZWRXaWR0aChvcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZENzc1ZhbHVlKG9yaWVudCh2YWx1ZSAqIGNsb25lQ291bnQpLCB1bml0Mik7XG4gICAgICB9XG5cbiAgICAgIHZhciBwZXJQYWdlID0gb3B0aW9ucy5wZXJQYWdlO1xuICAgICAgdmFyIGdhcHMgPSBjbG9uZUNvdW50IC8gcGVyUGFnZTtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkQ3NzVmFsdWUob3JpZW50KGdhcHMgKiB2YWx1ZSksIHVuaXQyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJcIjtcbiAgfTtcblxuICBfcHJvdG8zLnJlc29sdmUgPSBmdW5jdGlvbiByZXNvbHZlKHByb3ApIHtcbiAgICByZXR1cm4gY2FtZWxUb0tlYmFiKHRoaXMuRGlyZWN0aW9uLnJlc29sdmUocHJvcCkpO1xuICB9O1xuXG4gIF9wcm90bzMuY3NzUGFkZGluZyA9IGZ1bmN0aW9uIGNzc1BhZGRpbmcob3B0aW9ucywgcmlnaHQpIHtcbiAgICB2YXIgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZztcbiAgICB2YXIgcHJvcCA9IHRoaXMuRGlyZWN0aW9uLnJlc29sdmUocmlnaHQgPyBcInJpZ2h0XCIgOiBcImxlZnRcIiwgdHJ1ZSk7XG4gICAgcmV0dXJuIHBhZGRpbmcgJiYgdW5pdChwYWRkaW5nW3Byb3BdIHx8IChpc09iamVjdChwYWRkaW5nKSA/IDAgOiBwYWRkaW5nKSkgfHwgXCIwcHhcIjtcbiAgfTtcblxuICBfcHJvdG8zLmNzc1RyYWNrSGVpZ2h0ID0gZnVuY3Rpb24gY3NzVHJhY2tIZWlnaHQob3B0aW9ucykge1xuICAgIHZhciBoZWlnaHQgPSBcIlwiO1xuXG4gICAgaWYgKHRoaXMuaXNWZXJ0aWNhbCgpKSB7XG4gICAgICBoZWlnaHQgPSB0aGlzLmNzc0hlaWdodChvcHRpb25zKTtcbiAgICAgIGFzc2VydChoZWlnaHQsICdcImhlaWdodFwiIGlzIG1pc3NpbmcuJyk7XG4gICAgICBoZWlnaHQgPSBcImNhbGMoXCIgKyBoZWlnaHQgKyBcIiAtIFwiICsgdGhpcy5jc3NQYWRkaW5nKG9wdGlvbnMsIGZhbHNlKSArIFwiIC0gXCIgKyB0aGlzLmNzc1BhZGRpbmcob3B0aW9ucywgdHJ1ZSkgKyBcIilcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9O1xuXG4gIF9wcm90bzMuY3NzSGVpZ2h0ID0gZnVuY3Rpb24gY3NzSGVpZ2h0KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdW5pdChvcHRpb25zLmhlaWdodCk7XG4gIH07XG5cbiAgX3Byb3RvMy5jc3NTbGlkZVdpZHRoID0gZnVuY3Rpb24gY3NzU2xpZGVXaWR0aChvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuYXV0b1dpZHRoID8gXCJcIiA6IHVuaXQob3B0aW9ucy5maXhlZFdpZHRoKSB8fCAodGhpcy5pc1ZlcnRpY2FsKCkgPyBcIlwiIDogdGhpcy5jc3NTbGlkZVNpemUob3B0aW9ucykpO1xuICB9O1xuXG4gIF9wcm90bzMuY3NzU2xpZGVIZWlnaHQgPSBmdW5jdGlvbiBjc3NTbGlkZUhlaWdodChvcHRpb25zKSB7XG4gICAgcmV0dXJuIHVuaXQob3B0aW9ucy5maXhlZEhlaWdodCkgfHwgKHRoaXMuaXNWZXJ0aWNhbCgpID8gb3B0aW9ucy5hdXRvSGVpZ2h0ID8gXCJcIiA6IHRoaXMuY3NzU2xpZGVTaXplKG9wdGlvbnMpIDogdGhpcy5jc3NIZWlnaHQob3B0aW9ucykpO1xuICB9O1xuXG4gIF9wcm90bzMuY3NzU2xpZGVTaXplID0gZnVuY3Rpb24gY3NzU2xpZGVTaXplKG9wdGlvbnMpIHtcbiAgICB2YXIgZ2FwID0gdW5pdChvcHRpb25zLmdhcCk7XG4gICAgcmV0dXJuIFwiY2FsYygoMTAwJVwiICsgKGdhcCAmJiBcIiArIFwiICsgZ2FwKSArIFwiKS9cIiArIChvcHRpb25zLnBlclBhZ2UgfHwgMSkgKyAoZ2FwICYmIFwiIC0gXCIgKyBnYXApICsgXCIpXCI7XG4gIH07XG5cbiAgX3Byb3RvMy5jc3NBc3BlY3RSYXRpbyA9IGZ1bmN0aW9uIGNzc0FzcGVjdFJhdGlvKG9wdGlvbnMpIHtcbiAgICB2YXIgaGVpZ2h0UmF0aW8gPSBvcHRpb25zLmhlaWdodFJhdGlvO1xuICAgIHJldHVybiBoZWlnaHRSYXRpbyA/IFwiXCIgKyAxIC8gaGVpZ2h0UmF0aW8gOiBcIlwiO1xuICB9O1xuXG4gIF9wcm90bzMuYnVpbGRDc3NWYWx1ZSA9IGZ1bmN0aW9uIGJ1aWxkQ3NzVmFsdWUodmFsdWUsIHVuaXQyKSB7XG4gICAgcmV0dXJuIFwiXCIgKyB2YWx1ZSArIHVuaXQyO1xuICB9O1xuXG4gIF9wcm90bzMucGFyc2VDc3NWYWx1ZSA9IGZ1bmN0aW9uIHBhcnNlQ3NzVmFsdWUodmFsdWUpIHtcbiAgICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICB2YXIgbnVtYmVyID0gcGFyc2VGbG9hdCh2YWx1ZSkgfHwgMDtcbiAgICAgIHZhciB1bml0MiA9IHZhbHVlLnJlcGxhY2UoL1xcZCooXFwuXFxkKik/LywgXCJcIikgfHwgXCJweFwiO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IG51bWJlcixcbiAgICAgICAgdW5pdDogdW5pdDJcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHVuaXQ6IFwicHhcIlxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvMy5wYXJzZUJyZWFrcG9pbnRzID0gZnVuY3Rpb24gcGFyc2VCcmVha3BvaW50cygpIHtcbiAgICB2YXIgX3RoaXM5ID0gdGhpcztcblxuICAgIHZhciBicmVha3BvaW50cyA9IHRoaXMub3B0aW9ucy5icmVha3BvaW50cztcbiAgICB0aGlzLmJyZWFrcG9pbnRzLnB1c2goW1wiZGVmYXVsdFwiLCB0aGlzLm9wdGlvbnNdKTtcblxuICAgIGlmIChicmVha3BvaW50cykge1xuICAgICAgZm9yT3duKGJyZWFrcG9pbnRzLCBmdW5jdGlvbiAob3B0aW9ucywgd2lkdGgpIHtcbiAgICAgICAgX3RoaXM5LmJyZWFrcG9pbnRzLnB1c2goW3dpZHRoLCBtZXJnZShtZXJnZSh7fSwgX3RoaXM5Lm9wdGlvbnMpLCBvcHRpb25zKV0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzMuaXNGaXhlZFdpZHRoID0gZnVuY3Rpb24gaXNGaXhlZFdpZHRoKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gISFvcHRpb25zW3RoaXMuRGlyZWN0aW9uLnJlc29sdmUoXCJmaXhlZFdpZHRoXCIpXTtcbiAgfTtcblxuICBfcHJvdG8zLmlzTG9vcCA9IGZ1bmN0aW9uIGlzTG9vcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnR5cGUgPT09IExPT1A7XG4gIH07XG5cbiAgX3Byb3RvMy5pc0NlbnRlciA9IGZ1bmN0aW9uIGlzQ2VudGVyKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5mb2N1cyA9PT0gXCJjZW50ZXJcIikge1xuICAgICAgaWYgKHRoaXMuaXNMb29wKCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudHlwZSA9PT0gU0xJREUpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLm9wdGlvbnMudHJpbVNwYWNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBfcHJvdG8zLmlzVmVydGljYWwgPSBmdW5jdGlvbiBpc1ZlcnRpY2FsKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uID09PSBUVEI7XG4gIH07XG5cbiAgX3Byb3RvMy5idWlsZENsYXNzZXMgPSBmdW5jdGlvbiBidWlsZENsYXNzZXMoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgcmV0dXJuIFtDTEFTU19ST09ULCBDTEFTU19ST09UICsgXCItLVwiICsgb3B0aW9ucy50eXBlLCBDTEFTU19ST09UICsgXCItLVwiICsgb3B0aW9ucy5kaXJlY3Rpb24sIG9wdGlvbnMuZHJhZyAmJiBDTEFTU19ST09UICsgXCItLWRyYWdnYWJsZVwiLCBvcHRpb25zLmlzTmF2aWdhdGlvbiAmJiBDTEFTU19ST09UICsgXCItLW5hdlwiLCBDTEFTU19BQ1RJVkUsICF0aGlzLmNvbmZpZy5oaWRkZW4gJiYgQ0xBU1NfUkVOREVSRURdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFwiKTtcbiAgfTtcblxuICBfcHJvdG8zLmJ1aWxkQXR0cnMgPSBmdW5jdGlvbiBidWlsZEF0dHJzKGF0dHJzKSB7XG4gICAgdmFyIGF0dHIgPSBcIlwiO1xuICAgIGZvck93bihhdHRycywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgIGF0dHIgKz0gdmFsdWUgPyBcIiBcIiArIGNhbWVsVG9LZWJhYihrZXkpICsgXCI9XFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIiA6IFwiXCI7XG4gICAgfSk7XG4gICAgcmV0dXJuIGF0dHIudHJpbSgpO1xuICB9O1xuXG4gIF9wcm90bzMuYnVpbGRTdHlsZXMgPSBmdW5jdGlvbiBidWlsZFN0eWxlcyhzdHlsZXMpIHtcbiAgICB2YXIgc3R5bGUgPSBcIlwiO1xuICAgIGZvck93bihzdHlsZXMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICBzdHlsZSArPSBcIiBcIiArIGNhbWVsVG9LZWJhYihrZXkpICsgXCI6XCIgKyB2YWx1ZSArIFwiO1wiO1xuICAgIH0pO1xuICAgIHJldHVybiBzdHlsZS50cmltKCk7XG4gIH07XG5cbiAgX3Byb3RvMy5yZW5kZXJTbGlkZXMgPSBmdW5jdGlvbiByZW5kZXJTbGlkZXMoKSB7XG4gICAgdmFyIF90aGlzMTAgPSB0aGlzO1xuXG4gICAgdmFyIHRhZyA9IHRoaXMuY29uZmlnLnNsaWRlVGFnO1xuICAgIHJldHVybiB0aGlzLnNsaWRlcy5tYXAoZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgIHJldHVybiBcIjxcIiArIHRhZyArIFwiIFwiICsgX3RoaXMxMC5idWlsZEF0dHJzKGNvbnRlbnQuYXR0cnMpICsgXCI+XCIgKyAoY29udGVudC5odG1sIHx8IFwiXCIpICsgXCI8L1wiICsgdGFnICsgXCI+XCI7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICBfcHJvdG8zLmNvdmVyID0gZnVuY3Rpb24gY292ZXIoY29udGVudCkge1xuICAgIHZhciBzdHlsZXMgPSBjb250ZW50LnN0eWxlcyxcbiAgICAgICAgX2NvbnRlbnQkaHRtbCA9IGNvbnRlbnQuaHRtbCxcbiAgICAgICAgaHRtbCA9IF9jb250ZW50JGh0bWwgPT09IHZvaWQgMCA/IFwiXCIgOiBfY29udGVudCRodG1sO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb3ZlciAmJiAhdGhpcy5vcHRpb25zLmxhenlMb2FkKSB7XG4gICAgICB2YXIgc3JjID0gaHRtbC5tYXRjaCgvPGltZy4qP3NyY1xccyo9XFxzKihbJ1wiXSkoLis/KVxcMS4qPz4vKTtcblxuICAgICAgaWYgKHNyYyAmJiBzcmNbMl0pIHtcbiAgICAgICAgc3R5bGVzLmJhY2tncm91bmQgPSBcImNlbnRlci9jb3ZlciBuby1yZXBlYXQgdXJsKCdcIiArIHNyY1syXSArIFwiJylcIjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvMy5nZW5lcmF0ZUNsb25lcyA9IGZ1bmN0aW9uIGdlbmVyYXRlQ2xvbmVzKGNvbnRlbnRzKSB7XG4gICAgdmFyIGNsYXNzZXMgPSB0aGlzLm9wdGlvbnMuY2xhc3NlcztcbiAgICB2YXIgY291bnQgPSB0aGlzLmdldENsb25lQ291bnQoKTtcbiAgICB2YXIgc2xpZGVzID0gY29udGVudHMuc2xpY2UoKTtcblxuICAgIHdoaWxlIChzbGlkZXMubGVuZ3RoIDwgY291bnQpIHtcbiAgICAgIHB1c2goc2xpZGVzLCBzbGlkZXMpO1xuICAgIH1cblxuICAgIHB1c2goc2xpZGVzLnNsaWNlKC1jb3VudCkucmV2ZXJzZSgpLCBzbGlkZXMuc2xpY2UoMCwgY291bnQpKS5mb3JFYWNoKGZ1bmN0aW9uIChjb250ZW50LCBpbmRleCkge1xuICAgICAgdmFyIGF0dHJzID0gYXNzaWduKHt9LCBjb250ZW50LmF0dHJzLCB7XG4gICAgICAgIGNsYXNzOiBjb250ZW50LmF0dHJzLmNsYXNzICsgXCIgXCIgKyBjbGFzc2VzLmNsb25lXG4gICAgICB9KTtcbiAgICAgIHZhciBjbG9uZSA9IGFzc2lnbih7fSwgY29udGVudCwge1xuICAgICAgICBhdHRyczogYXR0cnNcbiAgICAgIH0pO1xuICAgICAgaW5kZXggPCBjb3VudCA/IGNvbnRlbnRzLnVuc2hpZnQoY2xvbmUpIDogY29udGVudHMucHVzaChjbG9uZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvMy5nZXRDbG9uZUNvdW50ID0gZnVuY3Rpb24gZ2V0Q2xvbmVDb3VudCgpIHtcbiAgICBpZiAodGhpcy5pc0xvb3AoKSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgIGlmIChvcHRpb25zLmNsb25lcykge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5jbG9uZXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBwZXJQYWdlID0gbWF4LmFwcGx5KHZvaWQgMCwgdGhpcy5icmVha3BvaW50cy5tYXAoZnVuY3Rpb24gKF9yZWY2KSB7XG4gICAgICAgIHZhciBvcHRpb25zMiA9IF9yZWY2WzFdO1xuICAgICAgICByZXR1cm4gb3B0aW9uczIucGVyUGFnZTtcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybiBwZXJQYWdlICogKChvcHRpb25zLmZsaWNrTWF4UGFnZXMgfHwgMSkgKyAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfTtcblxuICBfcHJvdG8zLnJlbmRlckFycm93cyA9IGZ1bmN0aW9uIHJlbmRlckFycm93cygpIHtcbiAgICB2YXIgaHRtbCA9IFwiXCI7XG4gICAgaHRtbCArPSBcIjxkaXYgY2xhc3M9XFxcIlwiICsgdGhpcy5vcHRpb25zLmNsYXNzZXMuYXJyb3dzICsgXCJcXFwiPlwiO1xuICAgIGh0bWwgKz0gdGhpcy5yZW5kZXJBcnJvdyh0cnVlKTtcbiAgICBodG1sICs9IHRoaXMucmVuZGVyQXJyb3coZmFsc2UpO1xuICAgIGh0bWwgKz0gXCI8L2Rpdj5cIjtcbiAgICByZXR1cm4gaHRtbDtcbiAgfTtcblxuICBfcHJvdG8zLnJlbmRlckFycm93ID0gZnVuY3Rpb24gcmVuZGVyQXJyb3cocHJldikge1xuICAgIHZhciBfdGhpcyRvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBjbGFzc2VzID0gX3RoaXMkb3B0aW9ucy5jbGFzc2VzLFxuICAgICAgICBpMThuID0gX3RoaXMkb3B0aW9ucy5pMThuO1xuICAgIHZhciBhdHRycyA9IHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzLmFycm93ICsgXCIgXCIgKyAocHJldiA/IGNsYXNzZXMucHJldiA6IGNsYXNzZXMubmV4dCksXG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgYXJpYUxhYmVsOiBwcmV2ID8gaTE4bi5wcmV2IDogaTE4bi5uZXh0XG4gICAgfTtcbiAgICByZXR1cm4gXCI8YnV0dG9uIFwiICsgdGhpcy5idWlsZEF0dHJzKGF0dHJzKSArIFwiPjxzdmcgeG1sbnM9XFxcIlwiICsgWE1MX05BTUVfU1BBQ0UgKyBcIlxcXCIgdmlld0JveD1cXFwiMCAwIFwiICsgU0laRSArIFwiIFwiICsgU0laRSArIFwiXFxcIiB3aWR0aD1cXFwiXCIgKyBTSVpFICsgXCJcXFwiIGhlaWdodD1cXFwiXCIgKyBTSVpFICsgXCJcXFwiPjxwYXRoIGQ9XFxcIlwiICsgKHRoaXMub3B0aW9ucy5hcnJvd1BhdGggfHwgUEFUSCkgKyBcIlxcXCIgLz48L3N2Zz48L2J1dHRvbj5cIjtcbiAgfTtcblxuICBfcHJvdG8zLmh0bWwgPSBmdW5jdGlvbiBodG1sKCkge1xuICAgIHZhciBfdGhpcyRjb25maWcgPSB0aGlzLmNvbmZpZyxcbiAgICAgICAgcm9vdENsYXNzID0gX3RoaXMkY29uZmlnLnJvb3RDbGFzcyxcbiAgICAgICAgbGlzdFRhZyA9IF90aGlzJGNvbmZpZy5saXN0VGFnLFxuICAgICAgICBhcnJvd3MgPSBfdGhpcyRjb25maWcuYXJyb3dzLFxuICAgICAgICBiZWZvcmVUcmFjayA9IF90aGlzJGNvbmZpZy5iZWZvcmVUcmFjayxcbiAgICAgICAgYWZ0ZXJUcmFjayA9IF90aGlzJGNvbmZpZy5hZnRlclRyYWNrLFxuICAgICAgICBzbGlkZXIgPSBfdGhpcyRjb25maWcuc2xpZGVyLFxuICAgICAgICBiZWZvcmVTbGlkZXIgPSBfdGhpcyRjb25maWcuYmVmb3JlU2xpZGVyLFxuICAgICAgICBhZnRlclNsaWRlciA9IF90aGlzJGNvbmZpZy5hZnRlclNsaWRlcjtcbiAgICB2YXIgaHRtbCA9IFwiXCI7XG4gICAgaHRtbCArPSBcIjxkaXYgaWQ9XFxcIlwiICsgdGhpcy5pZCArIFwiXFxcIiBjbGFzcz1cXFwiXCIgKyB0aGlzLmJ1aWxkQ2xhc3NlcygpICsgXCIgXCIgKyAocm9vdENsYXNzIHx8IFwiXCIpICsgXCJcXFwiPlwiO1xuICAgIGh0bWwgKz0gXCI8c3R5bGU+XCIgKyB0aGlzLlN0eWxlLmJ1aWxkKCkgKyBcIjwvc3R5bGU+XCI7XG5cbiAgICBpZiAoc2xpZGVyKSB7XG4gICAgICBodG1sICs9IGJlZm9yZVNsaWRlciB8fCBcIlwiO1xuICAgICAgaHRtbCArPSBcIjxkaXYgY2xhc3M9XFxcInNwbGlkZV9fc2xpZGVyXFxcIj5cIjtcbiAgICB9XG5cbiAgICBodG1sICs9IGJlZm9yZVRyYWNrIHx8IFwiXCI7XG5cbiAgICBpZiAoYXJyb3dzKSB7XG4gICAgICBodG1sICs9IHRoaXMucmVuZGVyQXJyb3dzKCk7XG4gICAgfVxuXG4gICAgaHRtbCArPSBcIjxkaXYgY2xhc3M9XFxcInNwbGlkZV9fdHJhY2tcXFwiPlwiO1xuICAgIGh0bWwgKz0gXCI8XCIgKyBsaXN0VGFnICsgXCIgY2xhc3M9XFxcInNwbGlkZV9fbGlzdFxcXCI+XCI7XG4gICAgaHRtbCArPSB0aGlzLnJlbmRlclNsaWRlcygpO1xuICAgIGh0bWwgKz0gXCI8L1wiICsgbGlzdFRhZyArIFwiPlwiO1xuICAgIGh0bWwgKz0gXCI8L2Rpdj5cIjtcbiAgICBodG1sICs9IGFmdGVyVHJhY2sgfHwgXCJcIjtcblxuICAgIGlmIChzbGlkZXIpIHtcbiAgICAgIGh0bWwgKz0gXCI8L2Rpdj5cIjtcbiAgICAgIGh0bWwgKz0gYWZ0ZXJTbGlkZXIgfHwgXCJcIjtcbiAgICB9XG5cbiAgICBodG1sICs9IFwiPC9kaXY+XCI7XG4gICAgcmV0dXJuIGh0bWw7XG4gIH07XG5cbiAgcmV0dXJuIFNwbGlkZVJlbmRlcmVyO1xufSgpO1xuXG5leHBvcnQgeyBDTEFTU0VTLCBDTEFTU19BQ1RJVkUsIENMQVNTX0FSUk9XLCBDTEFTU19BUlJPV1MsIENMQVNTX0FSUk9XX05FWFQsIENMQVNTX0FSUk9XX1BSRVYsIENMQVNTX0NMT05FLCBDTEFTU19DT05UQUlORVIsIENMQVNTX0ZPQ1VTX0lOLCBDTEFTU19JTklUSUFMSVpFRCwgQ0xBU1NfTElTVCwgQ0xBU1NfTE9BRElORywgQ0xBU1NfTkVYVCwgQ0xBU1NfT1ZFUkZMT1csIENMQVNTX1BBR0lOQVRJT04sIENMQVNTX1BBR0lOQVRJT05fUEFHRSwgQ0xBU1NfUFJFViwgQ0xBU1NfUFJPR1JFU1MsIENMQVNTX1BST0dSRVNTX0JBUiwgQ0xBU1NfUk9PVCwgQ0xBU1NfU0xJREUsIENMQVNTX1NQSU5ORVIsIENMQVNTX1NSLCBDTEFTU19UT0dHTEUsIENMQVNTX1RPR0dMRV9QQVVTRSwgQ0xBU1NfVE9HR0xFX1BMQVksIENMQVNTX1RSQUNLLCBDTEFTU19WSVNJQkxFLCBERUZBVUxUUywgRVZFTlRfQUNUSVZFLCBFVkVOVF9BUlJPV1NfTU9VTlRFRCwgRVZFTlRfQVJST1dTX1VQREFURUQsIEVWRU5UX0FVVE9QTEFZX1BBVVNFLCBFVkVOVF9BVVRPUExBWV9QTEFZLCBFVkVOVF9BVVRPUExBWV9QTEFZSU5HLCBFVkVOVF9DTElDSywgRVZFTlRfREVTVFJPWSwgRVZFTlRfRFJBRywgRVZFTlRfRFJBR0dFRCwgRVZFTlRfRFJBR0dJTkcsIEVWRU5UX0VORF9JTkRFWF9DSEFOR0VELCBFVkVOVF9ISURERU4sIEVWRU5UX0lOQUNUSVZFLCBFVkVOVF9MQVpZTE9BRF9MT0FERUQsIEVWRU5UX01PVU5URUQsIEVWRU5UX01PVkUsIEVWRU5UX01PVkVELCBFVkVOVF9OQVZJR0FUSU9OX01PVU5URUQsIEVWRU5UX09WRVJGTE9XLCBFVkVOVF9QQUdJTkFUSU9OX01PVU5URUQsIEVWRU5UX1BBR0lOQVRJT05fVVBEQVRFRCwgRVZFTlRfUkVBRFksIEVWRU5UX1JFRlJFU0gsIEVWRU5UX1JFU0laRSwgRVZFTlRfUkVTSVpFRCwgRVZFTlRfU0NST0xMLCBFVkVOVF9TQ1JPTExFRCwgRVZFTlRfU0hJRlRFRCwgRVZFTlRfU0xJREVfS0VZRE9XTiwgRVZFTlRfVVBEQVRFRCwgRVZFTlRfVklTSUJMRSwgRXZlbnRCaW5kZXIsIEV2ZW50SW50ZXJmYWNlLCBGQURFLCBMT09QLCBMVFIsIFJUTCwgUmVxdWVzdEludGVydmFsLCBTTElERSwgU1RBVFVTX0NMQVNTRVMsIFNwbGlkZSwgU3BsaWRlUmVuZGVyZXIsIFN0YXRlLCBUVEIsIFRocm90dGxlLCBTcGxpZGUgYXMgZGVmYXVsdCB9O1xuIiwiZXhwb3J0IGNvbnN0IGRlY2xPZk51bSA9IChudW1iZXIsIHRpdGxlcykgPT4ge1xyXG4gICAgY29uc3QgY2FzZXMgPSBbMiwgMCwgMSwgMSwgMSwgMl07ICBcclxuICAgIHJldHVybiB0aXRsZXNbIChudW1iZXIlMTAwPjQgJiYgbnVtYmVyJTEwMDwyMCk/IDIgOiBjYXNlc1sobnVtYmVyJTEwPDUpP251bWJlciUxMDo1XSBdOyBcclxufSIsImV4cG9ydCBjb25zdCBidXR0b25DYXRhbG9nID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhlcm9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvXCIpO1xyXG4gIGNvbnN0IGJ1dHRvbkNhdGFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jYXRhbG9nXCIpO1xyXG5cclxuICBpZiAoYnV0dG9uQ2F0YWxvZykge1xyXG4gICAgbGV0IHRpbWVvdXRJZDtcclxuICAgIGxldCBpc09wYWNpdHkgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBjcmVhdGVPYnNlcnZlciA9ICgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXHJcbiAgICAgICAgKGVudHJpZXMpID0+IHtcclxuICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgICAgICAgYnV0dG9uQ2F0YWxvZy5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZS1vcGFjaXR5XCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGJ1dHRvbkNhdGFsb2cuY2xhc3NMaXN0LmFkZChcImFuaW1hdGUtb3BhY2l0eVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aHJlc2hvbGQ6IDAsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShoZXJvU2VjdGlvbik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNyZWF0ZU9ic2VydmVyKCk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuXHJcbiAgICAgIGlmICghaXNPcGFjaXR5KSB7XHJcbiAgICAgICAgYnV0dG9uQ2F0YWxvZy5zdHlsZS5vcGFjaXR5ID0gMC41O1xyXG4gICAgICAgIGlzT3BhY2l0eSA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGJ1dHRvbkNhdGFsb2cuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgaXNPcGFjaXR5ID0gZmFsc2U7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCBTcGxpZGUgZnJvbSBcIkBzcGxpZGVqcy9zcGxpZGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjYXRhbG9nU2xpZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGFiV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nX19zbGlkZXJfdGFicycpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0YWxvZy1jYXRlZ29yeV9fdGl0bGUnKVxyXG4gIFxyXG4gICAgaWYgKHRhYldyYXBwZXIpIHtcclxuICAgICAgbGV0IHRhYnMgPSB0YWJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0YWxvZy10YWJcIik7XHJcbiAgXHJcbiAgICAgIGxldCBhY3RpdmVJbmRleCA9IDA7XHJcbiAgICAgIGxldCB0YWJTbGlkZXI7XHJcblxyXG4gICAgICB0YWJTbGlkZXIgPSBuZXcgU3BsaWRlKFwiLmNhdGFsb2dfX3NsaWRlcl90YWJzLS1zbGlkZXJcIiwge1xyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgcGFnaW5hdGlvbjogZmFsc2UsXHJcbiAgICAgICAgY2xvbmVzOiAwLFxyXG4gICAgICAgIGF1dG9XaWR0aDogdHJ1ZSxcclxuICAgICAgICBtZWRpYVF1ZXJ5OiBcIm1pblwiLFxyXG4gICAgICAgIHN0YXJ0OiBhY3RpdmVJbmRleCxcclxuICAgICAgICBwYWRkaW5nOiB7bGVmdDogMTIsIHJpZ2h0OiAxMn0sXHJcbiAgICAgICAgZ2FwOiAxMixcclxuICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgOTkyOiB7IGRlc3Ryb3k6IHRydWUgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KS5tb3VudCgpO1xyXG5cclxuICAgICAgY29uc3QgY2hhbmdlU2xpZGUgPSAoaWR4KSA9PiB7XHJcbiAgICAgICAgdGFicyA9IHRhYldyYXBwZXIucXVlcnlTZWxlY3RvckFsbChcIi5jYXRhbG9nLXRhYlwiKTtcclxuICAgIFxyXG4gICAgICAgIHRhYnMuZm9yRWFjaCgodGFiLCB0YWJJbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZGF0YXNldEluZGV4ID0gTnVtYmVyKHRhYi5kYXRhc2V0LnNsaWRlSWR4KVxyXG5cclxuICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgXHJcbiAgICAgICAgICBpZiAoZGF0YXNldEluZGV4ID09PSBpZHgpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YXNldFRpdGxlID0gdGFiLmRhdGFzZXQudGl0bGVcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhYlNsaWRlciAmJiAhdGFiU2xpZGVyLm9wdGlvbnMuZGVzdHJveSkge1xyXG4gICAgICAgICAgICAgIHRhYlNsaWRlci5nbyhkYXRhc2V0SW5kZXgpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aXRsZSkge1xyXG4gICAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gZGF0YXNldFRpdGxlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRhYldyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuY2F0YWxvZy10YWInKSkge1xyXG4gICAgICAgICAgY29uc3QgdGFiID0gZS50YXJnZXQuY2xvc2VzdCgnLmNhdGFsb2ctdGFiJylcclxuICAgICAgICAgIGNvbnN0IHRhYkluZGV4ID0gTnVtYmVyKHRhYi5kYXRhc2V0LnNsaWRlSWR4KVxyXG4gICAgICBcclxuICAgICAgICAgIGFjdGl2ZUluZGV4ID0gdGFiSW5kZXg7XHJcbiAgICBcclxuICAgICAgICAgIGNoYW5nZVNsaWRlKHRhYkluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBjaGFuZ2VTbGlkZShhY3RpdmVJbmRleClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgU3BsaWRlIGZyb20gXCJAc3BsaWRlanMvc3BsaWRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaGVyb1NsaWRlciA9IChkZWxheSA9IDQwMDApID0+IHtcclxuICBjb25zdCBoZXJvV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVyby13cmFwcGVyXCIpO1xyXG4gIGNvbnN0IHRhYldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fc2xpZGVyX3RhYnMnKTtcclxuXHJcbiAgaWYgKGhlcm9XcmFwcGVyKSB7XHJcbiAgICBjb25zdCBpbWFnZXMgPSBoZXJvV3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlcm9fX2ltYWdlXCIpO1xyXG4gICAgbGV0IHRhYnMgPSBoZXJvV3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlcm8tdGFiXCIpO1xyXG4gIFxyXG4gICAgbGV0IGFjdGl2ZUluZGV4ID0gMDtcclxuICAgIGxldCBpbnRlcnZhbDtcclxuICAgIGxldCB0YWJTbGlkZXI7XHJcbiAgXHJcbiAgICB0YWJTbGlkZXIgPSBuZXcgU3BsaWRlKFwiLmhlcm9fX3NsaWRlcl90YWJzLS1zbGlkZXJcIiwge1xyXG4gICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICBwYWdpbmF0aW9uOiBmYWxzZSxcclxuICAgICAgLy8gY2xvbmVzOiAwLFxyXG4gICAgICB0eXBlOiBcImxvb3BcIixcclxuICAgICAgZm9jdXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIGF1dG9XaWR0aDogdHJ1ZSxcclxuICAgICAgbWVkaWFRdWVyeTogXCJtaW5cIixcclxuICAgICAgZ2FwOiAxMixcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICA5OTI6IHsgZGVzdHJveTogdHJ1ZSB9LFxyXG4gICAgICB9LFxyXG4gICAgfSkubW91bnQoKTtcclxuICBcclxuICAgIGNvbnN0IGNoYW5nZVNsaWRlID0gKGlkeCkgPT4ge1xyXG4gICAgICB0YWJzID0gaGVyb1dyYXBwZXIucXVlcnlTZWxlY3RvckFsbChcIi5oZXJvLXRhYlwiKTtcclxuICBcclxuICAgICAgaW1hZ2VzLmZvckVhY2goKGltYWdlLCBpbWFnZUluZGV4KSA9PiB7XHJcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBcclxuICAgICAgICBpZiAoaW1hZ2VJbmRleCA9PT0gaWR4KSB7XHJcbiAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIHRhYnMuZm9yRWFjaCgodGFiLCB0YWJJbmRleCkgPT4ge1xyXG4gICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIFxyXG4gICAgICAgIGlmIChOdW1iZXIodGFiLmRhdGFzZXQuc2xpZGVJZHgpID09PSBpZHgpIHtcclxuICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIGlmICh0YWJTbGlkZXIgJiYgIXRhYlNsaWRlci5vcHRpb25zLmRlc3Ryb3kpIHtcclxuICAgICAgICAgIHRhYlNsaWRlci5nbyhpZHgpXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBhdXRvcGxheSA9ICgpID0+IHtcclxuICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID09PSA0KSB7XHJcbiAgICAgICAgICBhY3RpdmVJbmRleCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFjdGl2ZUluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGNoYW5nZVNsaWRlKGFjdGl2ZUluZGV4KTtcclxuICAgICAgfSwgZGVsYXkpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IHN0YXJ0QXV0b3BsYXkgPSAoKSA9PiB7XHJcbiAgICAgIGF1dG9wbGF5KCk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3Qgc3RvcEF1dG9wbGF5ID0gKCkgPT4ge1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICB0YWJXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5oZXJvLXRhYicpKSB7XHJcbiAgICAgICAgY29uc3QgdGFiID0gZS50YXJnZXQuY2xvc2VzdCgnLmhlcm8tdGFiJylcclxuICAgICAgICBjb25zdCB0YWJJbmRleCA9IE51bWJlcih0YWIuZGF0YXNldC5zbGlkZUlkeClcclxuICBcclxuICAgICAgICBhY3RpdmVJbmRleCA9IHRhYkluZGV4O1xyXG4gIFxyXG4gICAgICAgIGNoYW5nZVNsaWRlKHRhYkluZGV4KTtcclxuICAgICAgICBzdG9wQXV0b3BsYXkoKVxyXG4gICAgICAgIHN0YXJ0QXV0b3BsYXkoKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIFxyXG4gICAgY2hhbmdlU2xpZGUoYWN0aXZlSW5kZXgpO1xyXG4gICAgYXV0b3BsYXkoKTtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBsYW5ndWFnZVNlbGVjdCA9ICgpID0+IHtcclxuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbmF2YmFyX3NlbGVjdFwiKTtcclxuICBjb25zdCBsaXN0SXRlbXMgPSBzZWxlY3QucXVlcnlTZWxlY3RvckFsbChcImxpXCIpO1xyXG5cclxuICBpZiAoc2VsZWN0KSB7XHJcbiAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgc2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsaXN0SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zdCBsYW5ndWFnZSA9IGl0ZW0uZGF0YXNldC5sYW5ndWFnZTtcclxuXHJcbiAgICAgIGxpc3RJdGVtcy5mb3JFYWNoKChpKSA9PiB7XHJcbiAgICAgICAgaS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICBpZiAoaS5kYXRhc2V0Lmxhbmd1YWdlID09PSBsYW5ndWFnZSkge1xyXG4gICAgICAgICAgaS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuIiwiaW1wb3J0IFNwbGlkZSBmcm9tIFwiQHNwbGlkZWpzL3NwbGlkZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG91clRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgaW5pdFNsaWRlciA9ICgpID0+IHtcclxuICAgIG5ldyBTcGxpZGUoXCIub3VyLXRpbWVfX3NsaWRlclwiLCB7XHJcbiAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxyXG4gICAgICBjbG9uZXM6IDAsXHJcbiAgICAgIHR5cGU6IFwibG9vcFwiLFxyXG4gICAgICBmb2N1czogXCJjZW50ZXJcIixcclxuICAgICAgZ2FwOiAyNCxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICA3Njc6IHtcclxuICAgICAgICAgIGRlc3Ryb3k6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSkubW91bnQoKTtcclxuICB9O1xyXG5cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm91ci10aW1lX19zbGlkZXInKSkge1xyXG4gICAgaW5pdFNsaWRlcigpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IFNwbGlkZSBmcm9tIFwiQHNwbGlkZWpzL3NwbGlkZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzU2xpZGVyID0gKHNsaWRlclNlbGVjdG9yKSA9PiB7XHJcbiAgY29uc3QgaW5pdFNsaWRlciA9ICgpID0+IHtcclxuICAgIG5ldyBTcGxpZGUoc2xpZGVyU2VsZWN0b3IsIHtcclxuICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgcGFnaW5hdGlvbjogZmFsc2UsXHJcbiAgICAgIHR5cGU6IFwibG9vcFwiLFxyXG4gICAgICBmb2N1czogXCJjZW50ZXJcIixcclxuICAgICAgZml4ZWRXaWR0aDogMTQwLFxyXG4gICAgICBmaXhlZEhlaWdodDogMjYwLFxyXG4gICAgICBtZWRpYVF1ZXJ5OiBcIm1pblwiLFxyXG4gICAgICBnYXA6IDEyLFxyXG4gICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDUzMjoge1xyXG4gICAgICAgICAgZml4ZWRXaWR0aDogbnVsbCxcclxuICAgICAgICAgIGZpeGVkSGVpZ2h0OiBudWxsLFxyXG4gICAgICAgICAgcGVyUGFnZTogMyxcclxuICAgICAgICAgIGZvY3VzOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICBmaXhlZFdpZHRoOiBudWxsLFxyXG4gICAgICAgICAgcGVyUGFnZTogMixcclxuICAgICAgICAgIGdhcDogMjQsXHJcbiAgICAgICAgICBmb2N1czogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgcGVyUGFnZTogMyxcclxuICAgICAgICAgIGdhcDogMjQsXHJcbiAgICAgICAgICBmb2N1czogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDE0MDA6IHtcclxuICAgICAgICAgIHBlclBhZ2U6IDQsXHJcbiAgICAgICAgICBnYXA6IDI0LFxyXG4gICAgICAgICAgZm9jdXM6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pLm1vdW50KCk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2xpZGVyU2VsZWN0b3IpKSB7XHJcbiAgICBpbml0U2xpZGVyKCk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBkZWNsT2ZOdW0gfSBmcm9tICcuLi9oZWxwZXJzL2RlY2wtb2YtbnVtJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZWFyY2hEZWNsID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VhcmNoU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gnKTtcclxuICAgIFxyXG4gICAgaWYgKHNlYXJjaFNlY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBzZWFyY2hDYXJkcyA9IHNlYXJjaFNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtY2FyZCcpO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gc2VhcmNoU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWRlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoQ291bnQgPSBOdW1iZXIoc2VhcmNoQ2FyZHMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZmlyc3RTdHIgPSBkZWNsT2ZOdW0oc2VhcmNoQ291bnQsIFsn0L3QsNC50LTQtdC9JywgJ9C90LDQudC00LXQvdC+JywgJ9C90LDQudC00LXQvdGLJ10pO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZFN0ciA9IGRlY2xPZk51bShzZWFyY2hDb3VudCwgWyfRgNC10LfRg9C70YzRgtCw0YInLCAn0YDQtdC30YPQu9GM0YLQsNGC0LAnLCAn0YDQtdC30YPQu9GM0YLQsNGC0L7QsiddKTtcclxuICAgICAgICBcclxuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke2ZpcnN0U3RyfSAke3NlYXJjaENvdW50fSAke3NlY29uZFN0cn1gXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY29uc3Qgc2VhcmNoSW5wdXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWFyY2hXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2YmFyX3NlYXJjaC1pbnB1dC0td3JhcHBlcicpXHJcbiAgICBjb25zdCBvcGVuQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1zZWFyY2gtYnV0dG9uJylcclxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1zZWFyY2gtY2xvc2UnKTtcclxuXHJcbiAgICBvcGVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHNlYXJjaFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnLWFjdGl2ZScpXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBzZWFyY2hXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJy1hY3RpdmUnKVxyXG4gICAgfSlcclxufSIsImltcG9ydCB7IHNjcm9sbEludG9WaWV3IH0gZnJvbSBcInNlYW1sZXNzLXNjcm9sbC1wb2x5ZmlsbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNtb290aFNjcm9sbCA9ICgpID0+IHtcclxuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyLW1lbnVfX2l0ZW0gYVwiKTtcclxuXHJcbiAgbGlua3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBjb25zdCBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKS5zdWJzdHJpbmcoMSk7XHJcblxyXG4gICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG5cclxuICAgICAgaWYgKHNlY3Rpb24pIHtcclxuICAgICAgICBzY3JvbGxJbnRvVmlldyhzZWN0aW9uLCB7XHJcbiAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICAgIGJsb2NrOiBcInN0YXJ0XCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuIiwiZXhwb3J0IGNvbnN0IHRpbWVsaW5lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lbGluZVwiKTtcclxuXHJcbiAgaWYgKHRpbWVsaW5lKSB7XHJcbiAgICBjb25zdCB0aW1lbGluZUl0ZW1zID0gdGltZWxpbmUucXVlcnlTZWxlY3RvckFsbChcIi50aW1lbGluZS1pdGVtXCIpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91ci10aW1lLXRpdGxlXCIpO1xyXG4gICAgY29uc3QgaXRlbXMgPSBbLi4udGltZWxpbmVJdGVtcywgdGl0bGVdO1xyXG5cclxuICAgIGxldCBkb2NSZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGxldCBpc0Rvd254ID0gdHJ1ZTtcclxuICAgIGxldCBhY3RpdmVJbmRleCA9IDA7XHJcblxyXG4gICAgY29uc3QgY2hlY2tBY3RpdmUgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRvY1JlY3RUZW1wID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgIGlmIChkb2NSZWN0VGVtcC55ID4gZG9jUmVjdC55KSB7XHJcbiAgICAgICAgaXNEb3dueCA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlzRG93bnggPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkb2NSZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgIGl0ZW1zLmZvckVhY2goKGksIGlkeCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlY3QgPSBpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICByZWN0ICYmXHJcbiAgICAgICAgICByZWN0LnkgPiAwICYmXHJcbiAgICAgICAgICByZWN0LnkgPCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IC8gMlxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaWYgKGlzRG93bngpIHtcclxuICAgICAgICAgICAgaWYgKGlkeCA+IGFjdGl2ZUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgYWN0aXZlSW5kZXggPSBpZHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaS5jbGFzc0xpc3QucmVtb3ZlKFwiLWFjdGl2ZVwiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpZHggPCBhY3RpdmVJbmRleCkge1xyXG4gICAgICAgICAgICAgIGFjdGl2ZUluZGV4ID0gaWR4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkuY2xhc3NMaXN0LnJlbW92ZShcIi1hY3RpdmVcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpdGVtc1thY3RpdmVJbmRleF0uY2xhc3NMaXN0LmFkZChcIi1hY3RpdmVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaS5jbGFzc0xpc3QucmVtb3ZlKFwiLWFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoZWNrQWN0aXZlKTtcclxuICAgIGNoZWNrQWN0aXZlKCk7XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgdG9Ub3BCdXR0b24gPSAoKSA9PiB7XHJcbiAgLy8gY29uc3QgYmFja1RvVG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrLXRvLXRvcFwiKTtcclxuXHJcbiAgLy8gaWYgKGJhY2tUb1RvcCkge1xyXG4gIC8vICAgLy8g0J/QvtC60LDQt9Cw0YLRjC/RgdC60YDRi9GC0Ywg0LrQvdC+0L/QutGDINC/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUg0YHRgtGA0LDQvdC40YbRi1xyXG4gIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xyXG4gIC8vICAgICBpZiAod2luZG93LnNjcm9sbFkgPiA0MDApIHtcclxuICAvLyAgICAgICBiYWNrVG9Ub3Auc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gIC8vICAgICB9IGVsc2Uge1xyXG4gIC8vICAgICAgIGJhY2tUb1RvcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0pO1xyXG5cclxuICAvLyAgIC8vINCf0LvQsNCy0L3QsNGPINC/0YDQvtC60YDRg9GC0LrQsCDQv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC60L3QvtC/0LrRg1xyXG4gIC8vICAgYmFja1RvVG9wLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAvLyAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICAvLyAgIH0pO1xyXG4gIC8vIH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHlhbmRleE1hcCA9ICgpID0+IHtcclxuICBjb25zdCBtYXBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIilcclxuICBpZiAoIW1hcEVsZW1lbnQpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBhc3luYyBmdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gICAgbGV0IHltYXBzMyA9IHdpbmRvdy55bWFwczM7XHJcbiAgICBsZXQgbWFwO1xyXG5cclxuICAgIGF3YWl0IHltYXBzMy5yZWFkeTtcclxuXHJcbiAgICBjb25zdCB7IFlNYXAsIFlNYXBEZWZhdWx0U2NoZW1lTGF5ZXIsIFlNYXBEZWZhdWx0RmVhdHVyZXNMYXllciwgWU1hcE1hcmtlciB9ID0geW1hcHMzO1xyXG5cclxuICAgIG1hcCA9IG5ldyBZTWFwKFxyXG4gICAgICBtYXBFbGVtZW50LFxyXG4gICAgICB7XHJcbiAgICAgICAgbG9jYXRpb246IHtcclxuICAgICAgICAgIGNlbnRlcjogWzQ2LjAwODkxMDg5NTU2NDk5LCA1MS41NzA3Nzk1OTM3OTU5MV0sXHJcbiAgICAgICAgICB6b29tOiAxNyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJlaGF2aW9yczogW1wiZHJhZ1wiLCBcInBpbmNoWm9vbVwiLCBcIm1vdXNlVGlsdFwiXSxcclxuICAgICAgfSxcclxuICAgICAgW25ldyBZTWFwRGVmYXVsdFNjaGVtZUxheWVyKHt9KSwgbmV3IFlNYXBEZWZhdWx0RmVhdHVyZXNMYXllcih7fSldXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IG1hcmtlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIG1hcmtlckVsZW1lbnQuY2xhc3NOYW1lID0gJ2NvbnRhY3RzLW1hcC0taWNvbi1tYXJrZXInO1xyXG4gICAgbWFya2VyRWxlbWVudC5zdHlsZS53aWR0aCA9ICc4OXB4J1xyXG4gICAgbWFya2VyRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMTE3cHgnXHJcbiAgICBtYXJrZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xyXG4gICAgbWFya2VyRWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKC01MCUsIC01MCUpJ1xyXG4gICAgbWFya2VyRWxlbWVudC5zcmMgPSAnLi9pbWFnZXMvaWNvbnMvbWFya2VyLnBuZyc7XHJcbiAgICBtYXAuYWRkQ2hpbGQobmV3IFlNYXBNYXJrZXIoe2Nvb3JkaW5hdGVzOiBbXHJcbiAgICAgICAgNDYuMDA4Mjk3MjgyNTg5NzIsXHJcbiAgICAgICAgNTEuNTcxNTgzNTM4MjIzODNcclxuICAgIF19LCBtYXJrZXJFbGVtZW50KSk7XHJcbiAgfVxyXG5cclxuICBpbml0TWFwKCk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBjaGVja0JlaGF2aW9yID0gKGJlaGF2aW9yKSA9PiB7XG4gICAgcmV0dXJuIGJlaGF2aW9yID09PSB1bmRlZmluZWQgfHwgYmVoYXZpb3IgPT09IFwiYXV0b1wiIHx8IGJlaGF2aW9yID09PSBcImluc3RhbnRcIiB8fCBiZWhhdmlvciA9PT0gXCJzbW9vdGhcIjtcbn07XG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudFNjcm9sbFhZKHgsIHkpIHtcbiAgICB0aGlzLnNjcm9sbExlZnQgPSB4O1xuICAgIHRoaXMuc2Nyb2xsVG9wID0geTtcbn1cbmV4cG9ydCBjb25zdCBmYWlsZWRFeGVjdXRlID0gKG1ldGhvZCwgb2JqZWN0LCByZWFzb24gPSBcImNhbm5vdCBjb252ZXJ0IHRvIGRpY3Rpb25hcnkuXCIpID0+IGBGYWlsZWQgdG8gZXhlY3V0ZSAnJHttZXRob2R9JyBvbiAnJHtvYmplY3R9JzogJHtyZWFzb259YDtcbmV4cG9ydCBjb25zdCBmYWlsZWRFeGVjdXRlSW52YWxpZEVudW1WYWx1ZSA9IChtZXRob2QsIG9iamVjdCwgdmFsdWUpID0+IGZhaWxlZEV4ZWN1dGUobWV0aG9kLCBvYmplY3QsIGBUaGUgcHJvdmlkZWQgdmFsdWUgJyR7dmFsdWV9JyBpcyBub3QgYSB2YWxpZCBlbnVtIHZhbHVlIG9mIHR5cGUgU2Nyb2xsQmVoYXZpb3IuYCk7XG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IGNvbnN0IGJhY2t1cE1ldGhvZCA9IChwcm90bywgbWV0aG9kLCBmYWxsYmFjaykgPT4ge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBiYWNrdXAgPSBgX19TRUFNTEVTUy5CQUNLVVAkJHttZXRob2R9YDtcbiAgICBpZiAoIXByb3RvW2JhY2t1cF0gJiYgcHJvdG9bbWV0aG9kXSAmJiAhKChfYSA9IHByb3RvW21ldGhvZF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5fX2lzUG9seWZpbGwpKSB7XG4gICAgICAgIHByb3RvW2JhY2t1cF0gPSBwcm90b1ttZXRob2RdO1xuICAgIH1cbiAgICByZXR1cm4gcHJvdG9bYmFja3VwXSB8fCBmYWxsYmFjaztcbn07XG4vKiBlc2xpbnQtZW5hYmxlICovXG5leHBvcnQgY29uc3QgaXNPYmplY3QgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiAodHlwZSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlID09PSBcImZ1bmN0aW9uXCIpO1xufTtcbmV4cG9ydCBjb25zdCBpc1Njcm9sbEJlaGF2aW9yU3VwcG9ydGVkID0gKGNvbmZpZykgPT4gXCJzY3JvbGxCZWhhdmlvclwiIGluIHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgKGNvbmZpZyA9PT0gbnVsbCB8fCBjb25maWcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbmZpZy5mb3JjZVBvbHlmaWxsKSAhPT0gdHJ1ZTtcbmV4cG9ydCBjb25zdCBtYXJrUG9seWZpbGwgPSAobWV0aG9kKSA9PiB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1ldGhvZCwgXCJfX2lzUG9seWZpbGxcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07XG5leHBvcnQgY29uc3QgbW9kaWZ5UHJvdG90eXBlcyA9IChwcm9wLCBmdW5jKSA9PiB7XG4gICAgbWFya1BvbHlmaWxsKGZ1bmMpO1xuICAgIFtIVE1MRWxlbWVudC5wcm90b3R5cGUsIFNWR0VsZW1lbnQucHJvdG90eXBlLCBFbGVtZW50LnByb3RvdHlwZV0uZm9yRWFjaCgocHJvdG90eXBlKSA9PiB7XG4gICAgICAgIGJhY2t1cE1ldGhvZChwcm90b3R5cGUsIHByb3ApO1xuICAgICAgICBwcm90b3R5cGVbcHJvcF0gPSBmdW5jO1xuICAgIH0pO1xufTtcbi8qKlxuICogLSBPbiBDaHJvbWUgYW5kIEZpcmVmb3gsIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgd2lsbCByZXR1cm4gdGhlIDxodG1sPiBlbGVtZW50LlxuICogLSBTYWZhcmksIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgd2lsbCByZXR1cm4gdGhlIDxib2R5PiBlbGVtZW50LlxuICogLSBPbiBFZGdlLCBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IHdpbGwgcmV0dXJuIHRoZSA8Ym9keT4gZWxlbWVudC5cbiAqIC0gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQsIGJ1dCB5b3UgY2FuIGFzc3VtZSBpdHMgPGh0bWw+LlxuICovXG5leHBvcnQgY29uc3Qgc2Nyb2xsaW5nRWxlbWVudCA9IChlbGVtZW50KSA9PiBlbGVtZW50Lm93bmVyRG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tbW9uLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBzY3JvbGxFbmRFdmVudChidWJibGVzKSB7XG4gICAgaWYgKHR5cGVvZiBFdmVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXZlbnQoXCJzY3JvbGxlbmRcIiwge1xuICAgICAgICAgICAgYnViYmxlcyxcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO1xuICAgIGV2ZW50LmluaXRFdmVudChcInNjcm9sbGVuZFwiLCBidWJibGVzLCBmYWxzZSk7XG4gICAgcmV0dXJuIGV2ZW50O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2Nyb2xsLWVuZC1ldmVudC5qcy5tYXAiLCJjb25zdCBlYXNlID0gKGspID0+IHtcbiAgICByZXR1cm4gMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogaykpO1xufTtcbi8qIGVzbGludC1kaXNhYmxlICovXG5leHBvcnQgZnVuY3Rpb24gbm93KCkge1xuICAgIHZhciBfYTtcbiAgICBsZXQgZm47XG4gICAgaWYgKChfYSA9IHdpbmRvdy5wZXJmb3JtYW5jZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5vdykge1xuICAgICAgICBmbiA9ICgpID0+IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZuID0gKCkgPT4gd2luZG93LkRhdGUubm93KCk7XG4gICAgfVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBub3cgPSBmbjtcbiAgICByZXR1cm4gZm4oKTtcbn1cbi8qIGVzbGludC1lbmFibGUgKi9cbmNvbnN0IERVUkFUSU9OID0gNTAwO1xuZXhwb3J0IGNvbnN0IHN0ZXAgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbm93KCk7XG4gICAgY29uc3QgZWxhcHNlZCA9IChjdXJyZW50VGltZSAtIGNvbnRleHQudGltZVN0YW1wKSAvIChjb250ZXh0LmR1cmF0aW9uIHx8IERVUkFUSU9OKTtcbiAgICBpZiAoZWxhcHNlZCA+IDEpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QoY29udGV4dC50YXJnZXRYLCBjb250ZXh0LnRhcmdldFkpO1xuICAgICAgICBjb250ZXh0LmNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSAoY29udGV4dC50aW1pbmdGdW5jIHx8IGVhc2UpKGVsYXBzZWQpO1xuICAgIGNvbnN0IGN1cnJlbnRYID0gY29udGV4dC5zdGFydFggKyAoY29udGV4dC50YXJnZXRYIC0gY29udGV4dC5zdGFydFgpICogdmFsdWU7XG4gICAgY29uc3QgY3VycmVudFkgPSBjb250ZXh0LnN0YXJ0WSArIChjb250ZXh0LnRhcmdldFkgLSBjb250ZXh0LnN0YXJ0WSkgKiB2YWx1ZTtcbiAgICBjb250ZXh0Lm1ldGhvZChjdXJyZW50WCwgY3VycmVudFkpO1xuICAgIGNvbnRleHQucmFmSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgc3RlcChjb250ZXh0KTtcbiAgICB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY3JvbGwtc3RlcC5qcy5tYXAiLCJpbXBvcnQgeyBiYWNrdXBNZXRob2QsIGNoZWNrQmVoYXZpb3IsIGVsZW1lbnRTY3JvbGxYWSwgZmFpbGVkRXhlY3V0ZSwgZmFpbGVkRXhlY3V0ZUludmFsaWRFbnVtVmFsdWUsIGlzT2JqZWN0LCBzY3JvbGxpbmdFbGVtZW50LCB9IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xuaW1wb3J0IHsgc2Nyb2xsRW5kRXZlbnQgfSBmcm9tIFwiLi9zY3JvbGwtZW5kLWV2ZW50LmpzXCI7XG5pbXBvcnQgeyBub3csIHN0ZXAgfSBmcm9tIFwiLi9zY3JvbGwtc3RlcC5qc1wiO1xuLy8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzc29tLXZpZXcvI25vcm1hbGl6ZS1ub24tZmluaXRlLXZhbHVlc1xuY29uc3Qgbm9uRmluaXRlID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKCFpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiBOdW1iZXIodmFsdWUpO1xufTtcbmNvbnN0IGlzQ29ubmVjdGVkID0gKG5vZGUpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgcmV0dXJuICgoX2EgPSBub2RlLmlzQ29ubmVjdGVkKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoIW5vZGUub3duZXJEb2N1bWVudCB8fFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgICAhKG5vZGUub3duZXJEb2N1bWVudC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihub2RlKSAmIC8qKiBET0NVTUVOVF9QT1NJVElPTl9ESVNDT05ORUNURUQgKi8gMSkpKTtcbn07XG5jb25zdCBzY3JvbGxXaXRoT3B0aW9ucyA9IChlbGVtZW50LCBvcHRpb25zLCBjb25maWcpID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGlmICghaXNDb25uZWN0ZWQoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzdGFydFggPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgY29uc3Qgc3RhcnRZID0gZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgY29uc3QgdGFyZ2V0WCA9IG5vbkZpbml0ZSgoX2EgPSBvcHRpb25zLmxlZnQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHN0YXJ0WCk7XG4gICAgY29uc3QgdGFyZ2V0WSA9IG5vbkZpbml0ZSgoX2IgPSBvcHRpb25zLnRvcCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogc3RhcnRZKTtcbiAgICBpZiAodGFyZ2V0WCA9PT0gc3RhcnRYICYmIHRhcmdldFkgPT09IHN0YXJ0WSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZhbGxiYWNrID0gYmFja3VwTWV0aG9kKEhUTUxFbGVtZW50LnByb3RvdHlwZSwgXCJzY3JvbGxcIiwgZWxlbWVudFNjcm9sbFhZKTtcbiAgICBjb25zdCBtZXRob2QgPSBiYWNrdXBNZXRob2QoT2JqZWN0LmdldFByb3RvdHlwZU9mKGVsZW1lbnQpLCBcInNjcm9sbFwiLCBmYWxsYmFjaykuYmluZChlbGVtZW50KTtcbiAgICBpZiAob3B0aW9ucy5iZWhhdmlvciAhPT0gXCJzbW9vdGhcIikge1xuICAgICAgICBtZXRob2QodGFyZ2V0WCwgdGFyZ2V0WSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBjYW5jZWxTY3JvbGwpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBjYW5jZWxTY3JvbGwpO1xuICAgIH07XG4gICAgY29uc3QgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcbiAgICAgICAgY29uc3QgaXNEb2N1bWVudCA9IGVsZW1lbnQubm9kZVR5cGUgPT09IC8qKiBOb2RlLkRPQ1VNRU5UX05PREUgKi8gOTtcbiAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KHNjcm9sbEVuZEV2ZW50KGlzRG9jdW1lbnQpKTtcbiAgICB9O1xuICAgIGNvbnN0IGNvbnRleHQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZyksIHsgdGltZVN0YW1wOiBub3coKSwgc3RhcnRYLFxuICAgICAgICBzdGFydFksXG4gICAgICAgIHRhcmdldFgsXG4gICAgICAgIHRhcmdldFksIHJhZklkOiAwLCBtZXRob2QsXG4gICAgICAgIGNhbGxiYWNrIH0pO1xuICAgIGNvbnN0IGNhbmNlbFNjcm9sbCA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGNvbnRleHQucmFmSWQpO1xuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCk7XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGNhbmNlbFNjcm9sbCwge1xuICAgICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgICBvbmNlOiB0cnVlLFxuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGNhbmNlbFNjcm9sbCwge1xuICAgICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgICBvbmNlOiB0cnVlLFxuICAgIH0pO1xuICAgIHN0ZXAoY29udGV4dCk7XG59O1xuY29uc3QgaXNXaW5kb3cgPSAob2JqKSA9PiBvYmoud2luZG93ID09PSBvYmo7XG5jb25zdCBjcmVhdGVTY3JvbGwgPSAoc2Nyb2xsTmFtZSkgPT4gKHRhcmdldCwgc2Nyb2xsT3B0aW9ucywgY29uZmlnKSA9PiB7XG4gICAgY29uc3QgW2VsZW1lbnQsIHNjcm9sbFR5cGVdID0gaXNXaW5kb3codGFyZ2V0KVxuICAgICAgICA/IFtzY3JvbGxpbmdFbGVtZW50KHRhcmdldC5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLCBcIldpbmRvd1wiXVxuICAgICAgICA6IFt0YXJnZXQsIFwiRWxlbWVudFwiXTtcbiAgICBjb25zdCBvcHRpb25zID0gc2Nyb2xsT3B0aW9ucyAhPT0gbnVsbCAmJiBzY3JvbGxPcHRpb25zICE9PSB2b2lkIDAgPyBzY3JvbGxPcHRpb25zIDoge307XG4gICAgaWYgKCFpc09iamVjdChvcHRpb25zKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGZhaWxlZEV4ZWN1dGUoc2Nyb2xsTmFtZSwgc2Nyb2xsVHlwZSkpO1xuICAgIH1cbiAgICBpZiAoIWNoZWNrQmVoYXZpb3Iob3B0aW9ucy5iZWhhdmlvcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihmYWlsZWRFeGVjdXRlSW52YWxpZEVudW1WYWx1ZShzY3JvbGxOYW1lLCBzY3JvbGxUeXBlLCBvcHRpb25zLmJlaGF2aW9yKSk7XG4gICAgfVxuICAgIGlmIChzY3JvbGxOYW1lID09PSBcInNjcm9sbEJ5XCIpIHtcbiAgICAgICAgb3B0aW9ucy5sZWZ0ID0gbm9uRmluaXRlKG9wdGlvbnMubGVmdCkgKyBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIG9wdGlvbnMudG9wID0gbm9uRmluaXRlKG9wdGlvbnMudG9wKSArIGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIH1cbiAgICBzY3JvbGxXaXRoT3B0aW9ucyhlbGVtZW50LCBvcHRpb25zLCBjb25maWcpO1xufTtcbmV4cG9ydCBjb25zdCBzY3JvbGwgPSAvKiAjX19QVVJFX18gKi8gY3JlYXRlU2Nyb2xsKFwic2Nyb2xsXCIpO1xuZXhwb3J0IGNvbnN0IHNjcm9sbFRvID0gLyogI19fUFVSRV9fICovIGNyZWF0ZVNjcm9sbChcInNjcm9sbFRvXCIpO1xuZXhwb3J0IGNvbnN0IHNjcm9sbEJ5ID0gLyogI19fUFVSRV9fICovIGNyZWF0ZVNjcm9sbChcInNjcm9sbEJ5XCIpO1xuZXhwb3J0IGNvbnN0IGVsZW1lbnRTY3JvbGwgPSBzY3JvbGw7XG5leHBvcnQgY29uc3QgZWxlbWVudFNjcm9sbFRvID0gc2Nyb2xsVG87XG5leHBvcnQgY29uc3QgZWxlbWVudFNjcm9sbEJ5ID0gc2Nyb2xsQnk7XG5leHBvcnQgY29uc3Qgd2luZG93U2Nyb2xsID0gc2Nyb2xsO1xuZXhwb3J0IGNvbnN0IHdpbmRvd1Njcm9sbFRvID0gc2Nyb2xsVG87XG5leHBvcnQgY29uc3Qgd2luZG93U2Nyb2xsQnkgPSBzY3JvbGxCeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjcm9sbC5qcy5tYXAiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlICovXG5pbXBvcnQgeyBjaGVja0JlaGF2aW9yLCBmYWlsZWRFeGVjdXRlSW52YWxpZEVudW1WYWx1ZSwgc2Nyb2xsaW5nRWxlbWVudCB9IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xuaW1wb3J0IHsgZWxlbWVudFNjcm9sbCB9IGZyb20gXCIuL3Njcm9sbC5qc1wiO1xuLy8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy13cml0aW5nLW1vZGVzLTQvI2Jsb2NrLWZsb3dcbmNvbnN0IG5vcm1hbGl6ZVdyaXRpbmdNb2RlID0gKHdyaXRpbmdNb2RlKSA9PiB7XG4gICAgc3dpdGNoICh3cml0aW5nTW9kZSkge1xuICAgICAgICBjYXNlIFwiaG9yaXpvbnRhbC10YlwiOlxuICAgICAgICBjYXNlIFwibHJcIjpcbiAgICAgICAgY2FzZSBcImxyLXRiXCI6XG4gICAgICAgIGNhc2UgXCJybFwiOlxuICAgICAgICBjYXNlIFwicmwtdGJcIjpcbiAgICAgICAgICAgIHJldHVybiAwIC8qIFdyaXRpbmdNb2RlLkhvcml6b250YWxUYiAqLztcbiAgICAgICAgY2FzZSBcInZlcnRpY2FsLXJsXCI6XG4gICAgICAgIGNhc2UgXCJ0YlwiOlxuICAgICAgICBjYXNlIFwidGItcmxcIjpcbiAgICAgICAgICAgIHJldHVybiAxIC8qIFdyaXRpbmdNb2RlLlZlcnRpY2FsUmwgKi87XG4gICAgICAgIGNhc2UgXCJ2ZXJ0aWNhbC1sclwiOlxuICAgICAgICBjYXNlIFwidGItbHJcIjpcbiAgICAgICAgICAgIHJldHVybiAyIC8qIFdyaXRpbmdNb2RlLlZlcnRpY2FsTHIgKi87XG4gICAgICAgIGNhc2UgXCJzaWRld2F5cy1ybFwiOlxuICAgICAgICAgICAgcmV0dXJuIDMgLyogV3JpdGluZ01vZGUuU2lkZXdheXNSbCAqLztcbiAgICAgICAgY2FzZSBcInNpZGV3YXlzLWxyXCI6XG4gICAgICAgICAgICByZXR1cm4gNCAvKiBXcml0aW5nTW9kZS5TaWRld2F5c0xyICovO1xuICAgIH1cbiAgICByZXR1cm4gMCAvKiBXcml0aW5nTW9kZS5Ib3Jpem9udGFsVGIgKi87XG59O1xuY29uc3QgY2FsY1BoeXNpY2FsQXhpcyA9ICh3cml0aW5nTW9kZSwgaXNMVFIsIGhQb3MsIHZQb3MpID0+IHtcbiAgICAvKiogIDBie3ZlcnRpY2FsfXtob3Jpem9udGFsfSAgMDogbm9ybWFsLCAxOiByZXZlcnNlICovXG4gICAgbGV0IGxheW91dCA9IDBiMDA7XG4gICAgLyoqXG4gICAgICogV3JpdGluZ01vZGUuVmVydGljYWxMcjog4oaT4oaSXG4gICAgICogfCAxIHwgNCB8ICAgfFxuICAgICAqIHwgMiB8IDUgfCAgIHxcbiAgICAgKiB8IDMgfCAgIHwgICB8XG4gICAgICpcbiAgICAgKiBSVEw6IOKGkeKGklxuICAgICAqIHwgMyB8ICAgfCAgIHxcbiAgICAgKiB8IDIgfCA1IHwgICB8XG4gICAgICogfCAxIHwgNCB8ICAgfFxuICAgICAqL1xuICAgIGlmICghaXNMVFIpIHtcbiAgICAgICAgbGF5b3V0IF49IDIgLyogT1AuUmV2ZXJzZVZlcnRpY2FsICovO1xuICAgIH1cbiAgICBzd2l0Y2ggKHdyaXRpbmdNb2RlKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDihpPihpJcbiAgICAgICAgICogfCAxIHwgMiB8IDMgfFxuICAgICAgICAgKiB8IDQgfCA1IHwgICB8XG4gICAgICAgICAqIHwgICB8ICAgfCAgIHxcbiAgICAgICAgICpcbiAgICAgICAgICogUlRMOiDihpPihpBcbiAgICAgICAgICogfCAzIHwgMiB8IDEgfFxuICAgICAgICAgKiB8ICAgfCA1IHwgNCB8XG4gICAgICAgICAqIHwgICB8ICAgfCAgIHxcbiAgICAgICAgICovXG4gICAgICAgIGNhc2UgMCAvKiBXcml0aW5nTW9kZS5Ib3Jpem9udGFsVGIgKi86XG4gICAgICAgICAgICAvLyBzd2FwIGhvcml6b250YWwgYW5kIHZlcnRpY2FsXG4gICAgICAgICAgICBsYXlvdXQgPSAobGF5b3V0ID4+IDEpIHwgKChsYXlvdXQgJiAxKSA8PCAxKTtcbiAgICAgICAgICAgIFtoUG9zLCB2UG9zXSA9IFt2UG9zLCBoUG9zXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvKipcbiAgICAgICAgICog4oaT4oaQXG4gICAgICAgICAqIHwgICB8IDQgfCAxIHxcbiAgICAgICAgICogfCAgIHwgNSB8IDIgfFxuICAgICAgICAgKiB8ICAgfCAgIHwgMyB8XG4gICAgICAgICAqXG4gICAgICAgICAqIFJUTDog4oaR4oaQXG4gICAgICAgICAqIHwgICB8ICAgfCAzIHxcbiAgICAgICAgICogfCAgIHwgNSB8IDIgfFxuICAgICAgICAgKiB8ICAgfCA0IHwgMSB8XG4gICAgICAgICAqL1xuICAgICAgICBjYXNlIDEgLyogV3JpdGluZ01vZGUuVmVydGljYWxSbCAqLzpcbiAgICAgICAgY2FzZSAzIC8qIFdyaXRpbmdNb2RlLlNpZGV3YXlzUmwgKi86XG4gICAgICAgICAgICAvLyAgcmV2ZXJzZSBob3Jpem9udGFsXG4gICAgICAgICAgICBsYXlvdXQgXj0gMSAvKiBPUC5SZXZlcnNlSG9yaXpvbnRhbCAqLztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAvKipcbiAgICAgICAgICog4oaR4oaSXG4gICAgICAgICAqIHwgMyB8ICAgfCAgIHxcbiAgICAgICAgICogfCAyIHwgNSB8ICAgfFxuICAgICAgICAgKiB8IDEgfCA0IHwgICB8XG4gICAgICAgICAqXG4gICAgICAgICAqIFJUTDog4oaT4oaSXG4gICAgICAgICAqIHwgMSB8IDQgfCAgIHxcbiAgICAgICAgICogfCAyIHwgNSB8ICAgfFxuICAgICAgICAgKiB8IDMgfCAgIHwgICB8XG4gICAgICAgICAqL1xuICAgICAgICBjYXNlIDQgLyogV3JpdGluZ01vZGUuU2lkZXdheXNMciAqLzpcbiAgICAgICAgICAgIC8vIHJldmVyc2UgdmVydGljYWxcbiAgICAgICAgICAgIGxheW91dCBePSAyIC8qIE9QLlJldmVyc2VWZXJ0aWNhbCAqLztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gW2xheW91dCwgaFBvcywgdlBvc107XG59O1xuY29uc3QgaXNYUmV2ZXJzZWQgPSAoY29tcHV0ZWRTdHlsZSkgPT4ge1xuICAgIGNvbnN0IGxheW91dCA9IGNhbGNQaHlzaWNhbEF4aXMobm9ybWFsaXplV3JpdGluZ01vZGUoY29tcHV0ZWRTdHlsZS53cml0aW5nTW9kZSksIGNvbXB1dGVkU3R5bGUuZGlyZWN0aW9uICE9PSBcInJ0bFwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZClbMF07XG4gICAgcmV0dXJuIChsYXlvdXQgJiAxKSA9PT0gMTtcbn07XG4vLyBodHRwczovL3NvdXJjZS5jaHJvbWl1bS5vcmcvY2hyb21pdW0vY2hyb21pdW0vc3JjLysvbWFpbjp0aGlyZF9wYXJ0eS9ibGluay9yZW5kZXJlci9jb3JlL2RvbS9lbGVtZW50LmNjO2w9MTA5Ny0xMTg5O2RyYz02YTc1MzNkNGExZTlmMjM3MjIyM2E5ZDkxMmE5ZTUzYTZmYTM1YWUwXG5jb25zdCB0b1BoeXNpY2FsQWxpZ25tZW50ID0gKG9wdGlvbnMsIHdyaXRpbmdNb2RlLCBpc0xUUikgPT4ge1xuICAgIGNvbnN0IFtsYXlvdXQsIGhQb3MsIHZQb3NdID0gY2FsY1BoeXNpY2FsQXhpcyh3cml0aW5nTW9kZSwgaXNMVFIsIG9wdGlvbnMuYmxvY2sgfHwgXCJzdGFydFwiLCBvcHRpb25zLmlubGluZSB8fCBcIm5lYXJlc3RcIik7XG4gICAgcmV0dXJuIFtoUG9zLCB2UG9zXS5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIFwiY2VudGVyXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDEgLyogU2Nyb2xsQWxpZ25tZW50LkNlbnRlckFsd2F5cyAqLztcbiAgICAgICAgICAgIGNhc2UgXCJuZWFyZXN0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDAgLyogU2Nyb2xsQWxpZ25tZW50LlRvRWRnZUlmTmVlZGVkICovO1xuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJldmVyc2UgPSAobGF5b3V0ID4+IGluZGV4KSAmIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuICh2YWx1ZSA9PT0gXCJzdGFydFwiKSA9PT0gIXJldmVyc2UgPyAyIC8qIFNjcm9sbEFsaWdubWVudC5MZWZ0T3JUb3AgKi8gOiAzIC8qIFNjcm9sbEFsaWdubWVudC5SaWdodE9yQm90dG9tICovO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuLy8gY29kZSBmcm9tIHN0aXBzYW4vY29tcHV0ZS1zY3JvbGwtaW50by12aWV3XG4vLyBodHRwczovL2dpdGh1Yi5jb20vc3RpcHNhbi9jb21wdXRlLXNjcm9sbC1pbnRvLXZpZXcvYmxvYi81Mzk2YzZiNzhhZjVkMGJiY2UxMWE3YzRlOTNjYzMxNDY1NDZmY2QzL3NyYy9pbmRleC50c1xuLyoqXG4gKiBGaW5kIG91dCB3aGljaCBlZGdlIHRvIGFsaWduIGFnYWluc3Qgd2hlbiBsb2dpY2FsIHNjcm9sbCBwb3NpdGlvbiBpcyBcIm5lYXJlc3RcIlxuICogSW50ZXJlc3RpbmcgZmFjdDogXCJuZWFyZXN0XCIgd29ya3Mgc2ltaWxhcmlseSB0byBcImlmLW5lZWRlZFwiLCBpZiB0aGUgZWxlbWVudCBpcyBmdWxseSB2aXNpYmxlIGl0IHdpbGwgbm90IHNjcm9sbCBpdFxuICpcbiAqIExlZ2VuZHM6XG4gKiDilIzilIDilIDilIDilIDilIDilIDilIDilIDilJAg4pSPIOKUgSDilIEg4pSBIOKUk1xuICog4pSCIHRhcmdldCDilIIgICBmcmFtZVxuICog4pSU4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSYIOKUlyDilIEg4pSBIOKUgSDilJtcbiAqL1xuY29uc3QgbWFwTmVhcmVzdCA9IChhbGlnbiwgc2Nyb2xsaW5nRWRnZVN0YXJ0LCBzY3JvbGxpbmdFZGdlRW5kLCBzY3JvbGxpbmdTaXplLCBlbGVtZW50RWRnZVN0YXJ0LCBlbGVtZW50RWRnZUVuZCwgZWxlbWVudFNpemUpID0+IHtcbiAgICBpZiAoYWxpZ24gIT09IDAgLyogU2Nyb2xsQWxpZ25tZW50LlRvRWRnZUlmTmVlZGVkICovKSB7XG4gICAgICAgIHJldHVybiBhbGlnbjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWYgZWxlbWVudCBlZGdlIEEgYW5kIGVsZW1lbnQgZWRnZSBCIGFyZSBib3RoIG91dHNpZGUgc2Nyb2xsaW5nIGJveCBlZGdlIEEgYW5kIHNjcm9sbGluZyBib3ggZWRnZSBCXG4gICAgICpcbiAgICAgKiAgICAgICAgICDilIzilIDilIDilJBcbiAgICAgKiAgICAgICAg4pSP4pSB4pSC4pSB4pSB4pSC4pSB4pSTXG4gICAgICogICAgICAgICAg4pSCICDilIJcbiAgICAgKiAgICAgICAg4pSDIOKUgiAg4pSCIOKUgyAgICAgICAgZG8gbm90aGluZ1xuICAgICAqICAgICAgICAgIOKUgiAg4pSCXG4gICAgICogICAgICAgIOKUl+KUgeKUguKUgeKUgeKUguKUgeKUm1xuICAgICAqICAgICAgICAgIOKUlOKUgOKUgOKUmFxuICAgICAqXG4gICAgICogIElmIGVsZW1lbnQgZWRnZSBDIGFuZCBlbGVtZW50IGVkZ2UgRCBhcmUgYm90aCBvdXRzaWRlIHNjcm9sbGluZyBib3ggZWRnZSBDIGFuZCBzY3JvbGxpbmcgYm94IGVkZ2UgRFxuICAgICAqXG4gICAgICogICAg4pSPIOKUgSDilIEg4pSBIOKUgSDilJNcbiAgICAgKiAgIOKUjOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUkFxuICAgICAqICAg4pSC4pSDICAgICAgICAg4pSD4pSCICAgICAgICBkbyBub3RoaW5nXG4gICAgICogICDilJTilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJhcbiAgICAgKiAgICDilJcg4pSBIOKUgSDilIEg4pSBIOKUm1xuICAgICAqL1xuICAgIGlmICgoZWxlbWVudEVkZ2VTdGFydCA8IHNjcm9sbGluZ0VkZ2VTdGFydCAmJiBlbGVtZW50RWRnZUVuZCA+IHNjcm9sbGluZ0VkZ2VFbmQpIHx8XG4gICAgICAgIChlbGVtZW50RWRnZVN0YXJ0ID4gc2Nyb2xsaW5nRWRnZVN0YXJ0ICYmIGVsZW1lbnRFZGdlRW5kIDwgc2Nyb2xsaW5nRWRnZUVuZCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIGVsZW1lbnQgZWRnZSBBIGlzIG91dHNpZGUgc2Nyb2xsaW5nIGJveCBlZGdlIEEgYW5kIGVsZW1lbnQgaGVpZ2h0IGlzIGxlc3MgdGhhbiBzY3JvbGxpbmcgYm94IGhlaWdodFxuICAgICAqXG4gICAgICogICAgICAgICAg4pSM4pSA4pSA4pSQXG4gICAgICogICAgICAgIOKUj+KUgeKUguKUgeKUgeKUguKUgeKUkyAgICAgICAgIOKUj+KUgeKUjOKUgeKUgeKUkOKUgeKUk1xuICAgICAqICAgICAgICAgIOKUlOKUgOKUgOKUmCAgICAgICAgICAgICDilIIgIOKUglxuICAgICAqICBmcm9tICDilIMgICAgICDilIMgICAgIHRvICDilIMg4pSU4pSA4pSA4pSYIOKUg1xuICAgICAqXG4gICAgICogICAgICAgIOKUl+KUgSDilIHilIEg4pSB4pSbICAgICAgICAg4pSX4pSBIOKUgeKUgSDilIHilJtcbiAgICAgKlxuICAgICAqIElmIGVsZW1lbnQgZWRnZSBCIGlzIG91dHNpZGUgc2Nyb2xsaW5nIGJveCBlZGdlIEIgYW5kIGVsZW1lbnQgaGVpZ2h0IGlzIGdyZWF0ZXIgdGhhbiBzY3JvbGxpbmcgYm94IGhlaWdodFxuICAgICAqXG4gICAgICogICAgICAgIOKUj+KUgSDilIHilIEg4pSB4pSTICAgICAgICAg4pSP4pSB4pSM4pSB4pSB4pSQ4pSB4pSTXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICDilIIgIOKUglxuICAgICAqICBmcm9tICDilIMg4pSM4pSA4pSA4pSQIOKUgyAgICAgdG8gIOKUgyDilIIgIOKUgiDilINcbiAgICAgKiAgICAgICAgICDilIIgIOKUgiAgICAgICAgICAgICDilIIgIOKUglxuICAgICAqICAgICAgICDilJfilIHilILilIHilIHilILilIHilJsgICAgICAgICDilJfilIHilILilIHilIHilILilIHilJtcbiAgICAgKiAgICAgICAgICDilIIgIOKUgiAgICAgICAgICAgICDilJTilIDilIDilJhcbiAgICAgKiAgICAgICAgICDilIIgIOKUglxuICAgICAqICAgICAgICAgIOKUlOKUgOKUgOKUmFxuICAgICAqXG4gICAgICogSWYgZWxlbWVudCBlZGdlIEMgaXMgb3V0c2lkZSBzY3JvbGxpbmcgYm94IGVkZ2UgQyBhbmQgZWxlbWVudCB3aWR0aCBpcyBsZXNzIHRoYW4gc2Nyb2xsaW5nIGJveCB3aWR0aFxuICAgICAqXG4gICAgICogICAgICAgZnJvbSAgICAgICAgICAgICAgICAgdG9cbiAgICAgKiAgICDilI8g4pSBIOKUgSDilIEg4pSBIOKUkyAgICAgICAgIOKUjyDilIEg4pSBIOKUgSDilIEg4pSTXG4gICAgICogIOKUjOKUgOKUgOKUgOKUkCAgICAgICAgICAgICAgICAg4pSM4pSA4pSA4pSA4pSQXG4gICAgICogIOKUgiDilIMg4pSCICAgICAgIOKUgyAgICAgICAgIOKUgyAgIOKUgiAgICAg4pSDXG4gICAgICogIOKUlOKUgOKUgOKUgOKUmCAgICAgICAgICAgICAgICAg4pSU4pSA4pSA4pSA4pSYXG4gICAgICogICAg4pSXIOKUgSDilIEg4pSBIOKUgSDilJsgICAgICAgICDilJcg4pSBIOKUgSDilIEg4pSBIOKUm1xuICAgICAqXG4gICAgICogSWYgZWxlbWVudCBlZGdlIEQgaXMgb3V0c2lkZSBzY3JvbGxpbmcgYm94IGVkZ2UgRCBhbmQgZWxlbWVudCB3aWR0aCBpcyBncmVhdGVyIHRoYW4gc2Nyb2xsaW5nIGJveCB3aWR0aFxuICAgICAqXG4gICAgICogICAgICAgZnJvbSAgICAgICAgICAgICAgICAgdG9cbiAgICAgKiAgICDilI8g4pSBIOKUgSDilIEg4pSBIOKUkyAgICAgICAgIOKUjyDilIEg4pSBIOKUgSDilIEg4pSTXG4gICAgICogICAgICAgIOKUjOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUkCAgIOKUjOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUkFxuICAgICAqICAgIOKUgyAgIOKUgiAgICAg4pSDICAgICDilIIgICDilIMgICAgICAgICDilIMg4pSCXG4gICAgICogICAgICAgIOKUlOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUmCAgIOKUlOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUmFxuICAgICAqICAgIOKUlyDilIEg4pSBIOKUgSDilIEg4pSbICAgICAgICAg4pSXIOKUgSDilIEg4pSBIOKUgSDilJtcbiAgICAgKi9cbiAgICBpZiAoKGVsZW1lbnRFZGdlU3RhcnQgPD0gc2Nyb2xsaW5nRWRnZVN0YXJ0ICYmIGVsZW1lbnRTaXplIDw9IHNjcm9sbGluZ1NpemUpIHx8XG4gICAgICAgIChlbGVtZW50RWRnZUVuZCA+PSBzY3JvbGxpbmdFZGdlRW5kICYmIGVsZW1lbnRTaXplID49IHNjcm9sbGluZ1NpemUpKSB7XG4gICAgICAgIHJldHVybiAyIC8qIFNjcm9sbEFsaWdubWVudC5MZWZ0T3JUb3AgKi87XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIGVsZW1lbnQgZWRnZSBCIGlzIG91dHNpZGUgc2Nyb2xsaW5nIGJveCBlZGdlIEIgYW5kIGVsZW1lbnQgaGVpZ2h0IGlzIGxlc3MgdGhhbiBzY3JvbGxpbmcgYm94IGhlaWdodFxuICAgICAqXG4gICAgICogICAgICAgIOKUj+KUgSDilIHilIEg4pSB4pSTICAgICAgICAg4pSP4pSBIOKUgeKUgSDilIHilJNcbiAgICAgKlxuICAgICAqICBmcm9tICDilIMgICAgICDilIMgICAgIHRvICDilIMg4pSM4pSA4pSA4pSQIOKUg1xuICAgICAqICAgICAgICAgIOKUjOKUgOKUgOKUkCAgICAgICAgICAgICDilIIgIOKUglxuICAgICAqICAgICAgICDilJfilIHilILilIHilIHilILilIHilJsgICAgICAgICDilJfilIHilJTilIHilIHilJjilIHilJtcbiAgICAgKiAgICAgICAgICDilJTilIDilIDilJhcbiAgICAgKlxuICAgICAqIElmIGVsZW1lbnQgZWRnZSBBIGlzIG91dHNpZGUgc2Nyb2xsaW5nIGJveCBlZGdlIEEgYW5kIGVsZW1lbnQgaGVpZ2h0IGlzIGdyZWF0ZXIgdGhhbiBzY3JvbGxpbmcgYm94IGhlaWdodFxuICAgICAqXG4gICAgICogICAgICAgICAg4pSM4pSA4pSA4pSQXG4gICAgICogICAgICAgICAg4pSCICDilIJcbiAgICAgKiAgICAgICAgICDilIIgIOKUgiAgICAgICAgICAgICDilIzilIDilIDilJBcbiAgICAgKiAgICAgICAg4pSP4pSB4pSC4pSB4pSB4pSC4pSB4pSTICAgICAgICAg4pSP4pSB4pSC4pSB4pSB4pSC4pSB4pSTXG4gICAgICogICAgICAgICAg4pSCICDilIIgICAgICAgICAgICAg4pSCICDilIJcbiAgICAgKiAgZnJvbSAg4pSDIOKUlOKUgOKUgOKUmCDilIMgICAgIHRvICDilIMg4pSCICDilIIg4pSDXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICDilIIgIOKUglxuICAgICAqICAgICAgICDilJfilIEg4pSB4pSBIOKUgeKUmyAgICAgICAgIOKUl+KUgeKUlOKUgeKUgeKUmOKUgeKUm1xuICAgICAqXG4gICAgICogSWYgZWxlbWVudCBlZGdlIEMgaXMgb3V0c2lkZSBzY3JvbGxpbmcgYm94IGVkZ2UgQyBhbmQgZWxlbWVudCB3aWR0aCBpcyBncmVhdGVyIHRoYW4gc2Nyb2xsaW5nIGJveCB3aWR0aFxuICAgICAqXG4gICAgICogICAgICAgICAgIGZyb20gICAgICAgICAgICAgICAgIHRvXG4gICAgICogICAgICAgIOKUjyDilIEg4pSBIOKUgSDilIEg4pSTICAgICAgICAg4pSPIOKUgSDilIEg4pSBIOKUgSDilJNcbiAgICAgKiAg4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQICAgICAgICAgICDilIzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJBcbiAgICAgKiAg4pSCICAgICDilIMgICAgIOKUgiAgIOKUgyAgICAgICDilIIg4pSDICAgICAgICAg4pSDXG4gICAgICogIOKUlOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUmCAgICAgICAgICAg4pSU4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSYXG4gICAgICogICAgICAgIOKUlyDilIEg4pSBIOKUgSDilIEg4pSbICAgICAgICAg4pSXIOKUgSDilIEg4pSBIOKUgSDilJtcbiAgICAgKlxuICAgICAqIElmIGVsZW1lbnQgZWRnZSBEIGlzIG91dHNpZGUgc2Nyb2xsaW5nIGJveCBlZGdlIEQgYW5kIGVsZW1lbnQgd2lkdGggaXMgbGVzcyB0aGFuIHNjcm9sbGluZyBib3ggd2lkdGhcbiAgICAgKlxuICAgICAqICAgICAgICAgICBmcm9tICAgICAgICAgICAgICAgICB0b1xuICAgICAqICAgICAgICDilI8g4pSBIOKUgSDilIEg4pSBIOKUkyAgICAgICAgIOKUjyDilIEg4pSBIOKUgSDilIEg4pSTXG4gICAgICogICAgICAgICAgICAgICAg4pSM4pSA4pSA4pSA4pSQICAgICAgICAgICAgIOKUjOKUgOKUgOKUgOKUkFxuICAgICAqICAgICAgICDilIMgICAgICAg4pSCIOKUgyDilIIgICAgICAg4pSDICAgICDilIIgICDilINcbiAgICAgKiAgICAgICAgICAgICAgICDilJTilIDilIDilIDilJggICAgICAgICAgICAg4pSU4pSA4pSA4pSA4pSYXG4gICAgICogICAgICAgIOKUlyDilIEg4pSBIOKUgSDilIEg4pSbICAgICAgICAg4pSXIOKUgSDilIEg4pSBIOKUgSDilJtcbiAgICAgKlxuICAgICAqL1xuICAgIGlmICgoZWxlbWVudEVkZ2VFbmQgPiBzY3JvbGxpbmdFZGdlRW5kICYmIGVsZW1lbnRTaXplIDwgc2Nyb2xsaW5nU2l6ZSkgfHxcbiAgICAgICAgKGVsZW1lbnRFZGdlU3RhcnQgPCBzY3JvbGxpbmdFZGdlU3RhcnQgJiYgZWxlbWVudFNpemUgPiBzY3JvbGxpbmdTaXplKSkge1xuICAgICAgICByZXR1cm4gMyAvKiBTY3JvbGxBbGlnbm1lbnQuUmlnaHRPckJvdHRvbSAqLztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuY29uc3QgY2FuT3ZlcmZsb3cgPSAob3ZlcmZsb3cpID0+IHtcbiAgICByZXR1cm4gb3ZlcmZsb3cgIT09IFwidmlzaWJsZVwiICYmIG92ZXJmbG93ICE9PSBcImNsaXBcIjtcbn07XG5jb25zdCBnZXRGcmFtZUVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xuICAgIHZhciBfYTtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gKChfYSA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZyYW1lRWxlbWVudCkgfHwgbnVsbDtcbiAgICB9XG4gICAgY2F0Y2ggKF9iKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn07XG5jb25zdCBpc1Njcm9sbGFibGUgPSAoZWxlbWVudCwgY29tcHV0ZWRTdHlsZSkgPT4ge1xuICAgIGlmIChlbGVtZW50LmNsaWVudEhlaWdodCA8IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IHx8IGVsZW1lbnQuY2xpZW50V2lkdGggPCBlbGVtZW50LnNjcm9sbFdpZHRoKSB7XG4gICAgICAgIHJldHVybiAoY2FuT3ZlcmZsb3coY29tcHV0ZWRTdHlsZS5vdmVyZmxvd1kpIHx8XG4gICAgICAgICAgICBjYW5PdmVyZmxvdyhjb21wdXRlZFN0eWxlLm92ZXJmbG93WCkgfHxcbiAgICAgICAgICAgIGVsZW1lbnQgPT09IHNjcm9sbGluZ0VsZW1lbnQoZWxlbWVudCkpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuY29uc3QgcGFyZW50RWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgcE5vZGUgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgY29uc3QgcEVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgaWYgKHBFbGVtZW50ID09PSBudWxsICYmIHBOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChwTm9kZS5ub2RlVHlwZSA9PT0gLyoqIE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSAqLyAxMSkge1xuICAgICAgICAgICAgcmV0dXJuIHBOb2RlLmhvc3Q7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBOb2RlLm5vZGVUeXBlID09PSAvKiogTm9kZS5ET0NVTUVOVF9OT0RFICovIDkpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRGcmFtZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBFbGVtZW50O1xufTtcbmNvbnN0IGNsYW1wID0gKHZhbHVlLCBtaW4sIG1heCkgPT4ge1xuICAgIGlmICh2YWx1ZSA8IG1pbikge1xuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPiBtYXgpIHtcbiAgICAgICAgcmV0dXJuIG1heDtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufTtcbmNvbnN0IGdldFN1cHBvcnRlZFNjcm9sbE1hcmdpblByb3BlcnR5ID0gKG93bmVyRG9jdW1lbnQpID0+IHtcbiAgICAvLyBXZWJraXQgdXNlcyBcInNjcm9sbC1zbmFwLW1hcmdpblwiIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xODkyNjUuXG4gICAgcmV0dXJuIFtcInNjcm9sbC1tYXJnaW5cIiwgXCJzY3JvbGwtc25hcC1tYXJnaW5cIl0uZmlsdGVyKChwcm9wZXJ0eSkgPT4gcHJvcGVydHkgaW4gb3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUpWzBdO1xufTtcbmNvbnN0IGdldEVsZW1lbnRTY3JvbGxTbmFwQXJlYSA9IChlbGVtZW50LCBlbGVtZW50UmVjdCwgY29tcHV0ZWRTdHlsZSkgPT4ge1xuICAgIGNvbnN0IHsgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0IH0gPSBlbGVtZW50UmVjdDtcbiAgICBjb25zdCBzY3JvbGxQcm9wZXJ0eSA9IGdldFN1cHBvcnRlZFNjcm9sbE1hcmdpblByb3BlcnR5KGVsZW1lbnQub3duZXJEb2N1bWVudCk7XG4gICAgaWYgKCFzY3JvbGxQcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF07XG4gICAgfVxuICAgIGNvbnN0IHNjcm9sbE1hcmdpblZhbHVlID0gKGVkZ2UpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoYCR7c2Nyb2xsUHJvcGVydHl9LSR7ZWRnZX1gKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCkgfHwgMDtcbiAgICB9O1xuICAgIHJldHVybiBbXG4gICAgICAgIHRvcCAtIHNjcm9sbE1hcmdpblZhbHVlKFwidG9wXCIpLFxuICAgICAgICByaWdodCArIHNjcm9sbE1hcmdpblZhbHVlKFwicmlnaHRcIiksXG4gICAgICAgIGJvdHRvbSArIHNjcm9sbE1hcmdpblZhbHVlKFwiYm90dG9tXCIpLFxuICAgICAgICBsZWZ0IC0gc2Nyb2xsTWFyZ2luVmFsdWUoXCJsZWZ0XCIpLFxuICAgIF07XG59O1xuY29uc3QgY2FsY0FsaWduRWRnZSA9IChhbGlnbiwgc3RhcnQsIGVuZCkgPT4ge1xuICAgIHN3aXRjaCAoYWxpZ24pIHtcbiAgICAgICAgY2FzZSAxIC8qIFNjcm9sbEFsaWdubWVudC5DZW50ZXJBbHdheXMgKi86XG4gICAgICAgICAgICByZXR1cm4gKHN0YXJ0ICsgZW5kKSAvIDI7XG4gICAgICAgIGNhc2UgMyAvKiBTY3JvbGxBbGlnbm1lbnQuUmlnaHRPckJvdHRvbSAqLzpcbiAgICAgICAgICAgIHJldHVybiBlbmQ7XG4gICAgICAgIGNhc2UgMiAvKiBTY3JvbGxBbGlnbm1lbnQuTGVmdE9yVG9wICovOlxuICAgICAgICBjYXNlIDAgLyogU2Nyb2xsQWxpZ25tZW50LlRvRWRnZUlmTmVlZGVkICovOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXJ0O1xuICAgIH1cbn07XG5jb25zdCBnZXRGcmFtZVZpZXdwb3J0ID0gKGZyYW1lLCBmcmFtZVJlY3QpID0+IHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICBjb25zdCB2aXN1YWxWaWV3cG9ydCA9IChfYSA9IGZyYW1lLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS52aXN1YWxWaWV3cG9ydDtcbiAgICBjb25zdCBbeCwgeSwgd2lkdGgsIGhlaWdodF0gPSBmcmFtZSA9PT0gc2Nyb2xsaW5nRWxlbWVudChmcmFtZSlcbiAgICAgICAgPyBbMCwgMCwgKF9iID0gdmlzdWFsVmlld3BvcnQgPT09IG51bGwgfHwgdmlzdWFsVmlld3BvcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZpc3VhbFZpZXdwb3J0LndpZHRoKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBmcmFtZS5jbGllbnRXaWR0aCwgKF9jID0gdmlzdWFsVmlld3BvcnQgPT09IG51bGwgfHwgdmlzdWFsVmlld3BvcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZpc3VhbFZpZXdwb3J0LmhlaWdodCkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogZnJhbWUuY2xpZW50SGVpZ2h0XVxuICAgICAgICA6IFtmcmFtZVJlY3QubGVmdCwgZnJhbWVSZWN0LnRvcCwgZnJhbWUuY2xpZW50V2lkdGgsIGZyYW1lLmNsaWVudEhlaWdodF07XG4gICAgY29uc3QgbGVmdCA9IHggKyBmcmFtZS5jbGllbnRMZWZ0O1xuICAgIGNvbnN0IHRvcCA9IHkgKyBmcmFtZS5jbGllbnRUb3A7XG4gICAgY29uc3QgcmlnaHQgPSBsZWZ0ICsgd2lkdGg7XG4gICAgY29uc3QgYm90dG9tID0gdG9wICsgaGVpZ2h0O1xuICAgIHJldHVybiBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XTtcbn07XG5jb25zdCBjb21wdXRlU2Nyb2xsSW50b1ZpZXcgPSAoZWxlbWVudCwgb3B0aW9ucykgPT4ge1xuICAgIC8vIENvbGxlY3QgYWxsIHRoZSBzY3JvbGxpbmcgYm94ZXMsIGFzIGRlZmluZWQgaW4gdGhlIHNwZWM6IGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3NvbS12aWV3LyNzY3JvbGxpbmctYm94XG4gICAgY29uc3QgYWN0aW9ucyA9IFtdO1xuICAgIGxldCBvd25lckRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICAgIGxldCBvd25lcldpbmRvdyA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgaWYgKCFvd25lcldpbmRvdykge1xuICAgICAgICByZXR1cm4gYWN0aW9ucztcbiAgICB9XG4gICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIGNvbnN0IGlzTFRSID0gY29tcHV0ZWRTdHlsZS5kaXJlY3Rpb24gIT09IFwicnRsXCI7XG4gICAgY29uc3Qgd3JpdGluZ01vZGUgPSBub3JtYWxpemVXcml0aW5nTW9kZShjb21wdXRlZFN0eWxlLndyaXRpbmdNb2RlIHx8XG4gICAgICAgIGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi13ZWJraXQtd3JpdGluZy1tb2RlXCIpIHx8XG4gICAgICAgIGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi1tcy13cml0aW5nLW1vZGVcIikpO1xuICAgIGNvbnN0IFthbGlnbkgsIGFsaWduVl0gPSB0b1BoeXNpY2FsQWxpZ25tZW50KG9wdGlvbnMsIHdyaXRpbmdNb2RlLCBpc0xUUik7XG4gICAgbGV0IFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdID0gZ2V0RWxlbWVudFNjcm9sbFNuYXBBcmVhKGVsZW1lbnQsIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIGNvbXB1dGVkU3R5bGUpO1xuICAgIGZvciAobGV0IGZyYW1lID0gcGFyZW50RWxlbWVudChlbGVtZW50KTsgZnJhbWUgIT09IG51bGw7IGZyYW1lID0gcGFyZW50RWxlbWVudChmcmFtZSkpIHtcbiAgICAgICAgaWYgKG93bmVyRG9jdW1lbnQgIT09IGZyYW1lLm93bmVyRG9jdW1lbnQpIHtcbiAgICAgICAgICAgIG93bmVyRG9jdW1lbnQgPSBmcmFtZS5vd25lckRvY3VtZW50O1xuICAgICAgICAgICAgb3duZXJXaW5kb3cgPSBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICAgICAgaWYgKCFvd25lcldpbmRvdykge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBsZWZ0OiBkWCwgdG9wOiBkWSB9ID0gZnJhbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB0b3AgKz0gZFk7XG4gICAgICAgICAgICByaWdodCArPSBkWDtcbiAgICAgICAgICAgIGJvdHRvbSArPSBkWTtcbiAgICAgICAgICAgIGxlZnQgKz0gZFg7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZnJhbWVTdHlsZSA9IG93bmVyV2luZG93LmdldENvbXB1dGVkU3R5bGUoZnJhbWUpO1xuICAgICAgICBpZiAoZnJhbWVTdHlsZS5wb3NpdGlvbiA9PT0gXCJmaXhlZFwiKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzU2Nyb2xsYWJsZShmcmFtZSwgZnJhbWVTdHlsZSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZyYW1lUmVjdCA9IGZyYW1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBbZnJhbWVUb3AsIGZyYW1lUmlnaHQsIGZyYW1lQm90dG9tLCBmcmFtZUxlZnRdID0gZ2V0RnJhbWVWaWV3cG9ydChmcmFtZSwgZnJhbWVSZWN0KTtcbiAgICAgICAgY29uc3QgZUFsaWduSCA9IG1hcE5lYXJlc3QoYWxpZ25ILCBmcmFtZUxlZnQsIGZyYW1lUmlnaHQsIGZyYW1lLmNsaWVudFdpZHRoLCBsZWZ0LCByaWdodCwgcmlnaHQgLSBsZWZ0KTtcbiAgICAgICAgY29uc3QgZUFsaWduViA9IG1hcE5lYXJlc3QoYWxpZ25WLCBmcmFtZVRvcCwgZnJhbWVCb3R0b20sIGZyYW1lLmNsaWVudEhlaWdodCwgdG9wLCBib3R0b20sIGJvdHRvbSAtIHRvcCk7XG4gICAgICAgIGNvbnN0IGRpZmZYID0gZUFsaWduSCA9PT0gbnVsbCA/IDAgOiBjYWxjQWxpZ25FZGdlKGVBbGlnbkgsIGxlZnQsIHJpZ2h0KSAtIGNhbGNBbGlnbkVkZ2UoZUFsaWduSCwgZnJhbWVMZWZ0LCBmcmFtZVJpZ2h0KTtcbiAgICAgICAgY29uc3QgZGlmZlkgPSBlQWxpZ25WID09PSBudWxsID8gMCA6IGNhbGNBbGlnbkVkZ2UoZUFsaWduViwgdG9wLCBib3R0b20pIC0gY2FsY0FsaWduRWRnZShlQWxpZ25WLCBmcmFtZVRvcCwgZnJhbWVCb3R0b20pO1xuICAgICAgICBjb25zdCBtb3ZlWCA9IGlzWFJldmVyc2VkKGZyYW1lU3R5bGUpXG4gICAgICAgICAgICA/IGNsYW1wKGRpZmZYLCAtZnJhbWUuc2Nyb2xsV2lkdGggKyBmcmFtZS5jbGllbnRXaWR0aCAtIGZyYW1lLnNjcm9sbExlZnQsIC1mcmFtZS5zY3JvbGxMZWZ0KVxuICAgICAgICAgICAgOiBjbGFtcChkaWZmWCwgLWZyYW1lLnNjcm9sbExlZnQsIGZyYW1lLnNjcm9sbFdpZHRoIC0gZnJhbWUuY2xpZW50V2lkdGggLSBmcmFtZS5zY3JvbGxMZWZ0KTtcbiAgICAgICAgY29uc3QgbW92ZVkgPSBjbGFtcChkaWZmWSwgLWZyYW1lLnNjcm9sbFRvcCwgZnJhbWUuc2Nyb2xsSGVpZ2h0IC0gZnJhbWUuY2xpZW50SGVpZ2h0IC0gZnJhbWUuc2Nyb2xsVG9wKTtcbiAgICAgICAgYWN0aW9ucy5wdXNoKFtcbiAgICAgICAgICAgIGZyYW1lLFxuICAgICAgICAgICAgeyBsZWZ0OiBmcmFtZS5zY3JvbGxMZWZ0ICsgbW92ZVgsIHRvcDogZnJhbWUuc2Nyb2xsVG9wICsgbW92ZVksIGJlaGF2aW9yOiBvcHRpb25zLmJlaGF2aW9yIH0sXG4gICAgICAgIF0pO1xuICAgICAgICB0b3AgPSBNYXRoLm1heCh0b3AgLSBtb3ZlWSwgZnJhbWVUb3ApO1xuICAgICAgICByaWdodCA9IE1hdGgubWluKHJpZ2h0IC0gbW92ZVgsIGZyYW1lUmlnaHQpO1xuICAgICAgICBib3R0b20gPSBNYXRoLm1pbihib3R0b20gLSBtb3ZlWSwgZnJhbWVCb3R0b20pO1xuICAgICAgICBsZWZ0ID0gTWF0aC5tYXgobGVmdCAtIG1vdmVYLCBmcmFtZUxlZnQpO1xuICAgIH1cbiAgICByZXR1cm4gYWN0aW9ucztcbn07XG5leHBvcnQgY29uc3Qgc2Nyb2xsSW50b1ZpZXcgPSAoZWxlbWVudCwgc2Nyb2xsSW50b1ZpZXdPcHRpb25zLCBjb25maWcpID0+IHtcbiAgICBjb25zdCBvcHRpb25zID0gc2Nyb2xsSW50b1ZpZXdPcHRpb25zIHx8IHt9O1xuICAgIGlmICghY2hlY2tCZWhhdmlvcihvcHRpb25zLmJlaGF2aW9yKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGZhaWxlZEV4ZWN1dGVJbnZhbGlkRW51bVZhbHVlKFwic2Nyb2xsSW50b1ZpZXdcIiwgXCJFbGVtZW50XCIsIG9wdGlvbnMuYmVoYXZpb3IpKTtcbiAgICB9XG4gICAgY29uc3QgYWN0aW9ucyA9IGNvbXB1dGVTY3JvbGxJbnRvVmlldyhlbGVtZW50LCBvcHRpb25zKTtcbiAgICBhY3Rpb25zLmZvckVhY2goKFtmcmFtZSwgc2Nyb2xsVG9PcHRpb25zXSkgPT4ge1xuICAgICAgICBlbGVtZW50U2Nyb2xsKGZyYW1lLCBzY3JvbGxUb09wdGlvbnMsIGNvbmZpZyk7XG4gICAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IGVsZW1lbnRTY3JvbGxJbnRvVmlldyA9IHNjcm9sbEludG9WaWV3O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2Nyb2xsSW50b1ZpZXcuanMubWFwIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBsYW5ndWFnZVNlbGVjdCB9IGZyb20gXCIuL21vZHVsZXMvbGFuZ3VhZ2Utc2VsZWN0XCI7XHJcbmltcG9ydCB7IHNlYXJjaElucHV0IH0gZnJvbSBcIi4vbW9kdWxlcy9zZWFyY2gtaW5wdXRcIjtcclxuaW1wb3J0IHsgaGVyb1NsaWRlciB9IGZyb20gXCIuL21vZHVsZXMvaGVyby1zbGlkZXJcIjtcclxuaW1wb3J0IHsgcHJvZHVjdHNTbGlkZXIgfSBmcm9tIFwiLi9tb2R1bGVzL3Byb2R1Y3RzLXNsaWRlclwiO1xyXG5pbXBvcnQgeyBvdXJUaW1lIH0gZnJvbSBcIi4vbW9kdWxlcy9vdXItdGltZVwiO1xyXG5pbXBvcnQgeyBidXR0b25DYXRhbG9nIH0gZnJvbSBcIi4vbW9kdWxlcy9idXR0b24tY2F0YWxvZ1wiO1xyXG5pbXBvcnQgeyBzbW9vdGhTY3JvbGwgfSBmcm9tIFwiLi9tb2R1bGVzL3Ntb290aFNjcm9sbFwiO1xyXG5pbXBvcnQgeyB0b1RvcEJ1dHRvbiB9IGZyb20gXCIuL21vZHVsZXMvdG8tdG9wLWJ1dHRvblwiO1xyXG5pbXBvcnQgeyBjYXRhbG9nU2xpZGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9jYXRhbG9nLXNsaWRlclwiO1xyXG5pbXBvcnQgeyBzZWFyY2hEZWNsIH0gZnJvbSBcIi4vbW9kdWxlcy9zZWFyY2gtZGVjbFwiO1xyXG5pbXBvcnQgeyB5YW5kZXhNYXAgfSBmcm9tIFwiLi9tb2R1bGVzL3lhbmRleC1tYXBcIjtcclxuaW1wb3J0IHsgdGltZWxpbmUgfSBmcm9tIFwiLi9tb2R1bGVzL3RpbWVsaW5lXCI7XHJcblxyXG5sYW5ndWFnZVNlbGVjdCgpO1xyXG5zZWFyY2hJbnB1dCgpO1xyXG5oZXJvU2xpZGVyKCk7XHJcbnByb2R1Y3RzU2xpZGVyKFwiLnByb2R1Y3RzLXNsaWRlclwiKTtcclxucHJvZHVjdHNTbGlkZXIoXCIubmV3LXByb2R1Y3RzLXNsaWRlclwiKTtcclxub3VyVGltZSgpO1xyXG5idXR0b25DYXRhbG9nKCk7XHJcbnNtb290aFNjcm9sbCgpO1xyXG50b1RvcEJ1dHRvbigpO1xyXG5jYXRhbG9nU2xpZGVyKCk7XHJcbnNlYXJjaERlY2woKTtcclxueWFuZGV4TWFwKCk7XHJcbnRpbWVsaW5lKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==