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

/***/ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearAllBodyScrollLocks: () => (/* binding */ clearAllBodyScrollLocks),
/* harmony export */   disableBodyScroll: () => (/* binding */ disableBodyScroll),
/* harmony export */   enableBodyScroll: () => (/* binding */ enableBodyScroll)
/* harmony export */ });
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Older browsers don't support event options, feature detect it.

// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

var hasPassiveEvents = false;
if (typeof window !== 'undefined') {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return undefined;
    }
  };
  window.addEventListener('testPassive', null, passiveTestOptions);
  window.removeEventListener('testPassive', null, passiveTestOptions);
}

var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);


var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPosition = void 0;
var previousBodyPaddingRight = void 0;

// returns true if `el` should be allowed to receive touchmove events.
var allowTouchMove = function allowTouchMove(el) {
  return locks.some(function (lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }

    return false;
  });
};

var preventDefault = function preventDefault(rawEvent) {
  var e = rawEvent || window.event;

  // For the case whereby consumers adds a touchmove event listener to document.
  // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
  // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
  // the touchmove event on document will break.
  if (allowTouchMove(e.target)) {
    return true;
  }

  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
  if (e.touches.length > 1) return true;

  if (e.preventDefault) e.preventDefault();

  return false;
};

var setOverflowHidden = function setOverflowHidden(options) {
  // If previousBodyPaddingRight is already set, don't set it again.
  if (previousBodyPaddingRight === undefined) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

    if (_reserveScrollBarGap && scrollBarGap > 0) {
      var computedBodyPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'), 10);
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = computedBodyPaddingRight + scrollBarGap + 'px';
    }
  }

  // If previousBodyOverflowSetting is already set, don't set it again.
  if (previousBodyOverflowSetting === undefined) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
};

var restoreOverflowSetting = function restoreOverflowSetting() {
  if (previousBodyPaddingRight !== undefined) {
    document.body.style.paddingRight = previousBodyPaddingRight;

    // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
    // can be set again.
    previousBodyPaddingRight = undefined;
  }

  if (previousBodyOverflowSetting !== undefined) {
    document.body.style.overflow = previousBodyOverflowSetting;

    // Restore previousBodyOverflowSetting to undefined
    // so setOverflowHidden knows it can be set again.
    previousBodyOverflowSetting = undefined;
  }
};

var setPositionFixed = function setPositionFixed() {
  return window.requestAnimationFrame(function () {
    // If previousBodyPosition is already set, don't set it again.
    if (previousBodyPosition === undefined) {
      previousBodyPosition = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left
      };

      // Update the dom inside an animation frame 
      var _window = window,
          scrollY = _window.scrollY,
          scrollX = _window.scrollX,
          innerHeight = _window.innerHeight;

      document.body.style.position = 'fixed';
      document.body.style.top = -scrollY;
      document.body.style.left = -scrollX;

      setTimeout(function () {
        return window.requestAnimationFrame(function () {
          // Attempt to check if the bottom bar appeared due to the position change
          var bottomBarHeight = innerHeight - window.innerHeight;
          if (bottomBarHeight && scrollY >= innerHeight) {
            // Move the content further up so that the bottom bar doesn't hide it
            document.body.style.top = -(scrollY + bottomBarHeight);
          }
        });
      }, 300);
    }
  });
};

var restorePositionSetting = function restorePositionSetting() {
  if (previousBodyPosition !== undefined) {
    // Convert the position from "px" to Int
    var y = -parseInt(document.body.style.top, 10);
    var x = -parseInt(document.body.style.left, 10);

    // Restore styles
    document.body.style.position = previousBodyPosition.position;
    document.body.style.top = previousBodyPosition.top;
    document.body.style.left = previousBodyPosition.left;

    // Restore scroll
    window.scrollTo(x, y);

    previousBodyPosition = undefined;
  }
};

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};

var handleScroll = function handleScroll(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;

  if (allowTouchMove(event.target)) {
    return false;
  }

  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    // element is at the top of its scroll.
    return preventDefault(event);
  }

  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    // element is at the bottom of its scroll.
    return preventDefault(event);
  }

  event.stopPropagation();
  return true;
};

var disableBodyScroll = function disableBodyScroll(targetElement, options) {
  // targetElement must be provided
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
    return;
  }

  // disableBodyScroll must not have been called on this targetElement before
  if (locks.some(function (lock) {
    return lock.targetElement === targetElement;
  })) {
    return;
  }

  var lock = {
    targetElement: targetElement,
    options: options || {}
  };

  locks = [].concat(_toConsumableArray(locks), [lock]);

  if (isIosDevice) {
    setPositionFixed();
  } else {
    setOverflowHidden(options);
  }

  if (isIosDevice) {
    targetElement.ontouchstart = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        handleScroll(event, targetElement);
      }
    };

    if (!documentListenerAdded) {
      document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = true;
    }
  }
};

var clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
  if (isIosDevice) {
    // Clear all locks ontouchstart/ontouchmove handlers, and the references.
    locks.forEach(function (lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });

    if (documentListenerAdded) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }

    // Reset initial clientY.
    initialClientY = -1;
  }

  if (isIosDevice) {
    restorePositionSetting();
  } else {
    restoreOverflowSetting();
  }

  locks = [];
};

var enableBodyScroll = function enableBodyScroll(targetElement) {
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
    return;
  }

  locks = locks.filter(function (lock) {
    return lock.targetElement !== targetElement;
  });

  if (isIosDevice) {
    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;

    if (documentListenerAdded && locks.length === 0) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }
  }

  if (isIosDevice) {
    restorePositionSetting();
  } else {
    restoreOverflowSetting();
  }
};



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

/***/ "./src/modules/form-validator.js":
/*!***************************************!*\
  !*** ./src/modules/form-validator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formValidator: () => (/* binding */ formValidator)
/* harmony export */ });
const formValidator = () => {
    const forms = document.querySelectorAll('form')

    forms.forEach(form => {
        const inputs = form.querySelectorAll('input[type=text], input[type=email], input[type=tel]');
        const checkbox = form.querySelector('input[type=checkbox]')

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                input.classList.remove('-invalid')
            })
        })

        checkbox.addEventListener('change', () => {
            checkbox.classList.remove('-invalid')
        })

        form.addEventListener('submit', (e) => {
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value) {
                    isValid = false

                    input.classList.add('-invalid')
                }
            })

            if (!checkbox.checked) {
                isValid = false
                checkbox.classList.add('-invalid')
            }
            
            if (!isValid) {
                e.preventDefault()
            }
        })
    })
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

/***/ "./src/modules/mobile-menu.js":
/*!************************************!*\
  !*** ./src/modules/mobile-menu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mobileMenu: () => (/* binding */ mobileMenu)
/* harmony export */ });
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");


const mobileMenu = () => {
  const btn = document.querySelector(".header__navbar_button");
  const mobileMenu = document.querySelector(".header-menu .-mobile");

  if (mobileMenu) {
    const close = mobileMenu.querySelector(".header-menu__close");

    btn.addEventListener("click", () => {
      mobileMenu.style.display = "block";
      setTimeout(() => mobileMenu.classList.add("-active"));
      (0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__.disableBodyScroll)(document.body);
    });

    close.addEventListener("click", () => {
      mobileMenu.classList.remove("-active");
      setTimeout(() => (mobileMenu.style.display = null), 200);
      (0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__.clearAllBodyScrollLocks)(document.body);
    });
  }
  
};


/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   modal: () => (/* binding */ modal)
/* harmony export */ });
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");


const modal = () => {
  const btns = document.querySelectorAll(".feedback-btn");
  const modal = document.querySelector('.feedback-modal-overlay')

  if (modal) {
    const close = modal.querySelector('.feedback-modal__close')

    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
          modal.style.display = 'flex'
          setTimeout(() => modal.classList.add('-active'))
          ;(0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__.disableBodyScroll)(document.body)
      });
    });
  
    close.addEventListener('click', () => {
      modal.classList.remove('-active')
      setTimeout(() => modal.style.display = null, 200)
      ;(0,body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__.clearAllBodyScrollLocks)(document.body)
    })
  }
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
      type: "slide",
      wheel: true,
      releaseWheel: true,
      waitForTransition: true,
      trimSpace: false,
      focus: "center",
      gap: 24,
      breakpoints: {
        767: {
          destroy: true,
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

/***/ "./src/modules/scale-images.js":
/*!*************************************!*\
  !*** ./src/modules/scale-images.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scaleImages: () => (/* binding */ scaleImages)
/* harmony export */ });
const scaleImages = () => {
    const images = document.querySelectorAll('img.scaling-image');

    images.forEach(image => {
        image.addEventListener('click', () => {
            image.classList.toggle('-scale')
        })
    })
}

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

/***/ "./src/modules/tab-content.js":
/*!************************************!*\
  !*** ./src/modules/tab-content.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tabContent: () => (/* binding */ tabContent)
/* harmony export */ });
const tabContent = () => {
    const buttons = document.querySelectorAll('button[data-tab-btn]')

    const changeTab = (activeIndex) => {
        const content = document.querySelectorAll(`[data-tab-content]`)
  
        buttons.forEach((button, idx) => {
            if (activeIndex === idx) {
                button.classList.add('active')
            } else {
                button.classList.remove('active')
            }
        })

        content.forEach(c => {
            if (+c.dataset.tabContent === activeIndex) {
                c.classList.remove('-hide')
            } else {
                c.classList.add('-hide')
            }
        })
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const index = +button.dataset.tabBtn
            changeTab(index)
        })
    })

    changeTab(0)

    // для отметки кнопок табов устанавливаем data аттрибуты с индексом по порядку от нуля 
    // data-tab-btn="0"
    // data-tab-btn="1"

    // для отметки сменяемого контента устанавливаем data аттрибуты с индексом соответствующего таба
    // data-tab-content="0"
    // data-tab-content="1"

    // для скрытия лишнего контента даем класс -hide
}

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
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/modal */ "./src/modules/modal.js");
/* harmony import */ var _modules_form_validator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/form-validator */ "./src/modules/form-validator.js");
/* harmony import */ var _modules_tab_content__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/tab-content */ "./src/modules/tab-content.js");
/* harmony import */ var _modules_scale_images__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/scale-images */ "./src/modules/scale-images.js");
/* harmony import */ var _modules_mobile_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/mobile-menu */ "./src/modules/mobile-menu.js");


















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
(0,_modules_modal__WEBPACK_IMPORTED_MODULE_12__.modal)();
(0,_modules_form_validator__WEBPACK_IMPORTED_MODULE_13__.formValidator)();
(0,_modules_tab_content__WEBPACK_IMPORTED_MODULE_14__.tabContent)();
(0,_modules_scale_images__WEBPACK_IMPORTED_MODULE_15__.scaleImages)();
(0,_modules_mobile_menu__WEBPACK_IMPORTED_MODULE_16__.mobileMenu)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUE0QyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVEOztBQUUvUCw4REFBOEQsc0VBQXNFLDhEQUE4RCxrREFBa0QsaUJBQWlCLEdBQUc7O0FBRXhRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLDhCQUE4QiwwQ0FBMEM7QUFDeEUsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQsS0FBSyxJQUFJO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDJDQUEyQzs7QUFFaEQ7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBLG9DQUFvQztBQUNwQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBLE9BQU87QUFDUCxlQUFlO0FBQ2YsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsc0RBQXNEO0FBQ3REO0FBQ0EsMkJBQTJCLHVDQUF1QztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3RELE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsT0FBTztBQUNQLDJCQUEyQjtBQUMzQjtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFMG9DOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNsSDNvQyxtQ0FBbUMsMEJBQTBCLDBDQUEwQyxnQkFBZ0IsT0FBTyxvQkFBb0IsZUFBZSxPQUFPOztBQUV4Szs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdGQUFnRixnQkFBZ0I7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtGQUFrRixpQkFBaUI7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLHFGQUFxRixpQkFBaUI7QUFDdEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFGQUFxRixpQkFBaUI7QUFDdEc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcFJPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0NzQztBQUN0QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdEQUFNO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBLGlCQUFpQixlQUFlO0FBQ2hDLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0RPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7O0FDdENzQztBQUN0QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3REFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGVBQWU7QUFDOUIsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkI4RTtBQUM5RTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtRUFBaUI7QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5RUFBdUI7QUFDN0IsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCOEU7QUFDOUU7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxvRUFBaUI7QUFDM0IsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMEVBQXVCO0FBQzdCLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJzQztBQUN0QztBQUNPO0FBQ1A7QUFDQSxRQUFRLHdEQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQnNDO0FBQ3RDO0FBQ087QUFDUDtBQUNBLFFBQVEsd0RBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7QUNSbUQ7QUFDbkQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLCtEQUFTO0FBQ2xDLDBCQUEwQiwrREFBUztBQUNuQztBQUNBLHFDQUFxQyxVQUFVLEVBQUUsYUFBYSxFQUFFLFVBQVU7QUFDMUU7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNmTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7OztBQ1owRDtBQUMxRDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0VBQWM7QUFDdEI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6Q087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwRE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDRCQUE0QjtBQUN2RCxRQUFRO0FBQ1I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFFQUFxRTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUCxvQ0FBb0Msa0NBQWtDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTywwR0FBMEcsT0FBTyxRQUFRLE9BQU8sS0FBSyxPQUFPO0FBQzVJLHNIQUFzSCxNQUFNO0FBQ25JO0FBQ087QUFDUDtBQUNBLHdDQUF3QyxPQUFPO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDQTtBQUNQLG9EQUFvRCxhQUFhO0FBQ2pFO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7Ozs7Ozs7Ozs7Ozs7O0FDekNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25Dc0o7QUFDL0Y7QUFDVjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3REFBWSxrQ0FBa0MsdURBQWU7QUFDbEYsbUJBQW1CLHdEQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsb0VBQWM7QUFDNUM7QUFDQSxrREFBa0QsYUFBYSxXQUFXLG9EQUFHO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxxREFBSTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0REFBZ0I7QUFDM0I7QUFDQTtBQUNBLFNBQVMsb0RBQVE7QUFDakIsNEJBQTRCLHlEQUFhO0FBQ3pDO0FBQ0EsU0FBUyx5REFBYTtBQUN0Qiw0QkFBNEIseUVBQTZCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekZBO0FBQzZGO0FBQ2pEO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVSxhQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkdBQTJHLFlBQVk7QUFDdkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDREQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJCQUEyQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGVBQWUsR0FBRyxLQUFLO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsNERBQWdCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsZ0JBQWdCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYywwRkFBMEY7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxTQUFTLHlEQUFhO0FBQ3RCLDRCQUE0Qix5RUFBNkI7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsUUFBUSx5REFBYTtBQUNyQixLQUFLO0FBQ0w7QUFDTztBQUNQOzs7Ozs7VUMxWUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMkQ7QUFDTjtBQUNGO0FBQ1E7QUFDZDtBQUNZO0FBQ0g7QUFDQTtBQUNHO0FBQ047QUFDRjtBQUNIO0FBQ047QUFDaUI7QUFDTjtBQUNFO0FBQ0Y7QUFDbkQ7QUFDQSx3RUFBYztBQUNkLGtFQUFXO0FBQ1gsZ0VBQVU7QUFDVix3RUFBYztBQUNkLHdFQUFjO0FBQ2QsMERBQU87QUFDUCxzRUFBYTtBQUNiLG1FQUFZO0FBQ1osbUVBQVc7QUFDWCxzRUFBYTtBQUNiLGdFQUFVO0FBQ1YsK0RBQVM7QUFDVCw0REFBUTtBQUNSLHNEQUFLO0FBQ0wsdUVBQWE7QUFDYixpRUFBVTtBQUNWLG1FQUFXO0FBQ1gsaUVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BzcGxpZGVqcy9zcGxpZGUvZGlzdC9qcy9zcGxpZGUuZXNtLmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvYm9keS1zY3JvbGwtbG9jay9saWIvYm9keVNjcm9sbExvY2suZXNtLmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9zcmMvaGVscGVycy9kZWNsLW9mLW51bS5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL21vZHVsZXMvYnV0dG9uLWNhdGFsb2cuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL2NhdGFsb2ctc2xpZGVyLmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9zcmMvbW9kdWxlcy9mb3JtLXZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL21vZHVsZXMvaGVyby1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL2xhbmd1YWdlLXNlbGVjdC5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL21vZHVsZXMvbW9iaWxlLW1lbnUuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL21vZGFsLmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9zcmMvbW9kdWxlcy9vdXItdGltZS5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL21vZHVsZXMvcHJvZHVjdHMtc2xpZGVyLmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9zcmMvbW9kdWxlcy9zY2FsZS1pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL3NlYXJjaC1kZWNsLmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9zcmMvbW9kdWxlcy9zZWFyY2gtaW5wdXQuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL3Ntb290aFNjcm9sbC5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL21vZHVsZXMvdGFiLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL3RpbWVsaW5lLmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9zcmMvbW9kdWxlcy90by10b3AtYnV0dG9uLmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9zcmMvbW9kdWxlcy95YW5kZXgtbWFwLmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc2VhbWxlc3Mtc2Nyb2xsLXBvbHlmaWxsL2xpYi9jb21tb24uanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zZWFtbGVzcy1zY3JvbGwtcG9seWZpbGwvbGliL3Njcm9sbC1lbmQtZXZlbnQuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zZWFtbGVzcy1zY3JvbGwtcG9seWZpbGwvbGliL3Njcm9sbC1zdGVwLmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc2VhbWxlc3Mtc2Nyb2xsLXBvbHlmaWxsL2xpYi9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zZWFtbGVzcy1zY3JvbGwtcG9seWZpbGwvbGliL3Njcm9sbEludG9WaWV3LmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6IGZhbHNlIH0pOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuLyohXG4gKiBTcGxpZGUuanNcbiAqIFZlcnNpb24gIDogNC4xLjRcbiAqIExpY2Vuc2UgIDogTUlUXG4gKiBDb3B5cmlnaHQ6IDIwMjIgTmFvdG9zaGkgRnVqaXRhXG4gKi9cbnZhciBNRURJQV9QUkVGRVJTX1JFRFVDRURfTU9USU9OID0gXCIocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKVwiO1xudmFyIENSRUFURUQgPSAxO1xudmFyIE1PVU5URUQgPSAyO1xudmFyIElETEUgPSAzO1xudmFyIE1PVklORyA9IDQ7XG52YXIgU0NST0xMSU5HID0gNTtcbnZhciBEUkFHR0lORyA9IDY7XG52YXIgREVTVFJPWUVEID0gNztcbnZhciBTVEFURVMgPSB7XG4gIENSRUFURUQ6IENSRUFURUQsXG4gIE1PVU5URUQ6IE1PVU5URUQsXG4gIElETEU6IElETEUsXG4gIE1PVklORzogTU9WSU5HLFxuICBTQ1JPTExJTkc6IFNDUk9MTElORyxcbiAgRFJBR0dJTkc6IERSQUdHSU5HLFxuICBERVNUUk9ZRUQ6IERFU1RST1lFRFxufTtcblxuZnVuY3Rpb24gZW1wdHkoYXJyYXkpIHtcbiAgYXJyYXkubGVuZ3RoID0gMDtcbn1cblxuZnVuY3Rpb24gc2xpY2UoYXJyYXlMaWtlLCBzdGFydCwgZW5kKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnJheUxpa2UsIHN0YXJ0LCBlbmQpO1xufVxuXG5mdW5jdGlvbiBhcHBseShmdW5jKSB7XG4gIHJldHVybiBmdW5jLmJpbmQuYXBwbHkoZnVuYywgW251bGxdLmNvbmNhdChzbGljZShhcmd1bWVudHMsIDEpKSk7XG59XG5cbnZhciBuZXh0VGljayA9IHNldFRpbWVvdXQ7XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG5mdW5jdGlvbiByYWYoZnVuYykge1xuICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmMpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2YodHlwZSwgc3ViamVjdCkge1xuICByZXR1cm4gdHlwZW9mIHN1YmplY3QgPT09IHR5cGU7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHN1YmplY3QpIHtcbiAgcmV0dXJuICFpc051bGwoc3ViamVjdCkgJiYgdHlwZU9mKFwib2JqZWN0XCIsIHN1YmplY3QpO1xufVxuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIgaXNGdW5jdGlvbiA9IGFwcGx5KHR5cGVPZiwgXCJmdW5jdGlvblwiKTtcbnZhciBpc1N0cmluZyA9IGFwcGx5KHR5cGVPZiwgXCJzdHJpbmdcIik7XG52YXIgaXNVbmRlZmluZWQgPSBhcHBseSh0eXBlT2YsIFwidW5kZWZpbmVkXCIpO1xuXG5mdW5jdGlvbiBpc051bGwoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdCA9PT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudChzdWJqZWN0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHN1YmplY3QgaW5zdGFuY2VvZiAoc3ViamVjdC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdykuSFRNTEVsZW1lbnQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XG59XG5cbmZ1bmN0aW9uIGZvckVhY2godmFsdWVzLCBpdGVyYXRlZSkge1xuICB0b0FycmF5KHZhbHVlcykuZm9yRWFjaChpdGVyYXRlZSk7XG59XG5cbmZ1bmN0aW9uIGluY2x1ZGVzKGFycmF5LCB2YWx1ZSkge1xuICByZXR1cm4gYXJyYXkuaW5kZXhPZih2YWx1ZSkgPiAtMTtcbn1cblxuZnVuY3Rpb24gcHVzaChhcnJheSwgaXRlbXMpIHtcbiAgYXJyYXkucHVzaC5hcHBseShhcnJheSwgdG9BcnJheShpdGVtcykpO1xuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsbSwgY2xhc3NlcywgYWRkKSB7XG4gIGlmIChlbG0pIHtcbiAgICBmb3JFYWNoKGNsYXNzZXMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICBlbG0uY2xhc3NMaXN0W2FkZCA/IFwiYWRkXCIgOiBcInJlbW92ZVwiXShuYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhlbG0sIGNsYXNzZXMpIHtcbiAgdG9nZ2xlQ2xhc3MoZWxtLCBpc1N0cmluZyhjbGFzc2VzKSA/IGNsYXNzZXMuc3BsaXQoXCIgXCIpIDogY2xhc3NlcywgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZChwYXJlbnQsIGNoaWxkcmVuKSB7XG4gIGZvckVhY2goY2hpbGRyZW4sIHBhcmVudC5hcHBlbmRDaGlsZC5iaW5kKHBhcmVudCkpO1xufVxuXG5mdW5jdGlvbiBiZWZvcmUobm9kZXMsIHJlZikge1xuICBmb3JFYWNoKG5vZGVzLCBmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciBwYXJlbnQgPSAocmVmIHx8IG5vZGUpLnBhcmVudE5vZGU7XG5cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIHJlZik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hlcyhlbG0sIHNlbGVjdG9yKSB7XG4gIHJldHVybiBpc0hUTUxFbGVtZW50KGVsbSkgJiYgKGVsbVtcIm1zTWF0Y2hlc1NlbGVjdG9yXCJdIHx8IGVsbS5tYXRjaGVzKS5jYWxsKGVsbSwgc2VsZWN0b3IpO1xufVxuXG5mdW5jdGlvbiBjaGlsZHJlbihwYXJlbnQsIHNlbGVjdG9yKSB7XG4gIHZhciBjaGlsZHJlbjIgPSBwYXJlbnQgPyBzbGljZShwYXJlbnQuY2hpbGRyZW4pIDogW107XG4gIHJldHVybiBzZWxlY3RvciA/IGNoaWxkcmVuMi5maWx0ZXIoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIG1hdGNoZXMoY2hpbGQsIHNlbGVjdG9yKTtcbiAgfSkgOiBjaGlsZHJlbjI7XG59XG5cbmZ1bmN0aW9uIGNoaWxkKHBhcmVudCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHNlbGVjdG9yID8gY2hpbGRyZW4ocGFyZW50LCBzZWxlY3RvcilbMF0gOiBwYXJlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG59XG5cbnZhciBvd25LZXlzID0gT2JqZWN0LmtleXM7XG5cbmZ1bmN0aW9uIGZvck93bihvYmplY3QsIGl0ZXJhdGVlLCByaWdodCkge1xuICBpZiAob2JqZWN0KSB7XG4gICAgKHJpZ2h0ID8gb3duS2V5cyhvYmplY3QpLnJldmVyc2UoKSA6IG93bktleXMob2JqZWN0KSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBrZXkgIT09IFwiX19wcm90b19fXCIgJiYgaXRlcmF0ZWUob2JqZWN0W2tleV0sIGtleSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBhc3NpZ24ob2JqZWN0KSB7XG4gIHNsaWNlKGFyZ3VtZW50cywgMSkuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgZm9yT3duKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgIG9iamVjdFtrZXldID0gc291cmNlW2tleV07XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBtZXJnZShvYmplY3QpIHtcbiAgc2xpY2UoYXJndW1lbnRzLCAxKS5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICBmb3JPd24oc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIG9iamVjdFtrZXldID0gdmFsdWUuc2xpY2UoKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIG9iamVjdFtrZXldID0gbWVyZ2Uoe30sIGlzT2JqZWN0KG9iamVjdFtrZXldKSA/IG9iamVjdFtrZXldIDoge30sIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBvbWl0KG9iamVjdCwga2V5cykge1xuICBmb3JFYWNoKGtleXMgfHwgb3duS2V5cyhvYmplY3QpLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgZGVsZXRlIG9iamVjdFtrZXldO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKGVsbXMsIGF0dHJzKSB7XG4gIGZvckVhY2goZWxtcywgZnVuY3Rpb24gKGVsbSkge1xuICAgIGZvckVhY2goYXR0cnMsIGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICBlbG0gJiYgZWxtLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShlbG1zLCBhdHRycywgdmFsdWUpIHtcbiAgaWYgKGlzT2JqZWN0KGF0dHJzKSkge1xuICAgIGZvck93bihhdHRycywgZnVuY3Rpb24gKHZhbHVlMiwgbmFtZSkge1xuICAgICAgc2V0QXR0cmlidXRlKGVsbXMsIG5hbWUsIHZhbHVlMik7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgZm9yRWFjaChlbG1zLCBmdW5jdGlvbiAoZWxtKSB7XG4gICAgICBpc051bGwodmFsdWUpIHx8IHZhbHVlID09PSBcIlwiID8gcmVtb3ZlQXR0cmlidXRlKGVsbSwgYXR0cnMpIDogZWxtLnNldEF0dHJpYnV0ZShhdHRycywgU3RyaW5nKHZhbHVlKSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlKHRhZywgYXR0cnMsIHBhcmVudCkge1xuICB2YXIgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG4gIGlmIChhdHRycykge1xuICAgIGlzU3RyaW5nKGF0dHJzKSA/IGFkZENsYXNzKGVsbSwgYXR0cnMpIDogc2V0QXR0cmlidXRlKGVsbSwgYXR0cnMpO1xuICB9XG5cbiAgcGFyZW50ICYmIGFwcGVuZChwYXJlbnQsIGVsbSk7XG4gIHJldHVybiBlbG07XG59XG5cbmZ1bmN0aW9uIHN0eWxlKGVsbSwgcHJvcCwgdmFsdWUpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSkge1xuICAgIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGVsbSlbcHJvcF07XG4gIH1cblxuICBpZiAoIWlzTnVsbCh2YWx1ZSkpIHtcbiAgICBlbG0uc3R5bGVbcHJvcF0gPSBcIlwiICsgdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheShlbG0sIGRpc3BsYXkyKSB7XG4gIHN0eWxlKGVsbSwgXCJkaXNwbGF5XCIsIGRpc3BsYXkyKTtcbn1cblxuZnVuY3Rpb24gZm9jdXMoZWxtKSB7XG4gIGVsbVtcInNldEFjdGl2ZVwiXSAmJiBlbG1bXCJzZXRBY3RpdmVcIl0oKSB8fCBlbG0uZm9jdXMoe1xuICAgIHByZXZlbnRTY3JvbGw6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShlbG0sIGF0dHIpIHtcbiAgcmV0dXJuIGVsbS5nZXRBdHRyaWJ1dGUoYXR0cik7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGVsbSwgY2xhc3NOYW1lKSB7XG4gIHJldHVybiBlbG0gJiYgZWxtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiByZWN0KHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xufVxuXG5mdW5jdGlvbiByZW1vdmUobm9kZXMpIHtcbiAgZm9yRWFjaChub2RlcywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBpZiAobm9kZSAmJiBub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwYXJzZUh0bWwoaHRtbCkge1xuICByZXR1cm4gY2hpbGQobmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKS5ib2R5KTtcbn1cblxuZnVuY3Rpb24gcHJldmVudChlLCBzdG9wUHJvcGFnYXRpb24pIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGlmIChzdG9wUHJvcGFnYXRpb24pIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcXVlcnkocGFyZW50LCBzZWxlY3Rvcikge1xuICByZXR1cm4gcGFyZW50ICYmIHBhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuZnVuY3Rpb24gcXVlcnlBbGwocGFyZW50LCBzZWxlY3Rvcikge1xuICByZXR1cm4gc2VsZWN0b3IgPyBzbGljZShwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpIDogW107XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsbSwgY2xhc3Nlcykge1xuICB0b2dnbGVDbGFzcyhlbG0sIGNsYXNzZXMsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gdGltZU9mKGUpIHtcbiAgcmV0dXJuIGUudGltZVN0YW1wO1xufVxuXG5mdW5jdGlvbiB1bml0KHZhbHVlKSB7XG4gIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZSA6IHZhbHVlID8gdmFsdWUgKyBcInB4XCIgOiBcIlwiO1xufVxuXG52YXIgUFJPSkVDVF9DT0RFID0gXCJzcGxpZGVcIjtcbnZhciBEQVRBX0FUVFJJQlVURSA9IFwiZGF0YS1cIiArIFBST0pFQ1RfQ09ERTtcblxuZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIltcIiArIFBST0pFQ1RfQ09ERSArIFwiXSBcIiArIChtZXNzYWdlIHx8IFwiXCIpKTtcbiAgfVxufVxuXG52YXIgbWluID0gTWF0aC5taW4sXG4gICAgbWF4ID0gTWF0aC5tYXgsXG4gICAgZmxvb3IgPSBNYXRoLmZsb29yLFxuICAgIGNlaWwgPSBNYXRoLmNlaWwsXG4gICAgYWJzID0gTWF0aC5hYnM7XG5cbmZ1bmN0aW9uIGFwcHJveGltYXRlbHlFcXVhbCh4LCB5LCBlcHNpbG9uKSB7XG4gIHJldHVybiBhYnMoeCAtIHkpIDwgZXBzaWxvbjtcbn1cblxuZnVuY3Rpb24gYmV0d2VlbihudW1iZXIsIHgsIHksIGV4Y2x1c2l2ZSkge1xuICB2YXIgbWluaW11bSA9IG1pbih4LCB5KTtcbiAgdmFyIG1heGltdW0gPSBtYXgoeCwgeSk7XG4gIHJldHVybiBleGNsdXNpdmUgPyBtaW5pbXVtIDwgbnVtYmVyICYmIG51bWJlciA8IG1heGltdW0gOiBtaW5pbXVtIDw9IG51bWJlciAmJiBudW1iZXIgPD0gbWF4aW11bTtcbn1cblxuZnVuY3Rpb24gY2xhbXAobnVtYmVyLCB4LCB5KSB7XG4gIHZhciBtaW5pbXVtID0gbWluKHgsIHkpO1xuICB2YXIgbWF4aW11bSA9IG1heCh4LCB5KTtcbiAgcmV0dXJuIG1pbihtYXgobWluaW11bSwgbnVtYmVyKSwgbWF4aW11bSk7XG59XG5cbmZ1bmN0aW9uIHNpZ24oeCkge1xuICByZXR1cm4gKyh4ID4gMCkgLSArKHggPCAwKTtcbn1cblxuZnVuY3Rpb24gY2FtZWxUb0tlYmFiKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhbYS16MC05XSkoW0EtWl0pL2csIFwiJDEtJDJcIikudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0KHN0cmluZywgcmVwbGFjZW1lbnRzKSB7XG4gIGZvckVhY2gocmVwbGFjZW1lbnRzLCBmdW5jdGlvbiAocmVwbGFjZW1lbnQpIHtcbiAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShcIiVzXCIsIFwiXCIgKyByZXBsYWNlbWVudCk7XG4gIH0pO1xuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBwYWQobnVtYmVyKSB7XG4gIHJldHVybiBudW1iZXIgPCAxMCA/IFwiMFwiICsgbnVtYmVyIDogXCJcIiArIG51bWJlcjtcbn1cblxudmFyIGlkcyA9IHt9O1xuXG5mdW5jdGlvbiB1bmlxdWVJZChwcmVmaXgpIHtcbiAgcmV0dXJuIFwiXCIgKyBwcmVmaXggKyBwYWQoaWRzW3ByZWZpeF0gPSAoaWRzW3ByZWZpeF0gfHwgMCkgKyAxKTtcbn1cblxuZnVuY3Rpb24gRXZlbnRCaW5kZXIoKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSBbXTtcblxuICBmdW5jdGlvbiBiaW5kKHRhcmdldHMsIGV2ZW50cywgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBmb3JFYWNoRXZlbnQodGFyZ2V0cywgZXZlbnRzLCBmdW5jdGlvbiAodGFyZ2V0LCBldmVudCwgbmFtZXNwYWNlKSB7XG4gICAgICB2YXIgaXNFdmVudFRhcmdldCA9IChcImFkZEV2ZW50TGlzdGVuZXJcIiBpbiB0YXJnZXQpO1xuICAgICAgdmFyIHJlbW92ZXIgPSBpc0V2ZW50VGFyZ2V0ID8gdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIuYmluZCh0YXJnZXQsIGV2ZW50LCBjYWxsYmFjaywgb3B0aW9ucykgOiB0YXJnZXRbXCJyZW1vdmVMaXN0ZW5lclwiXS5iaW5kKHRhcmdldCwgY2FsbGJhY2spO1xuICAgICAgaXNFdmVudFRhcmdldCA/IHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgb3B0aW9ucykgOiB0YXJnZXRbXCJhZGRMaXN0ZW5lclwiXShjYWxsYmFjayk7XG4gICAgICBsaXN0ZW5lcnMucHVzaChbdGFyZ2V0LCBldmVudCwgbmFtZXNwYWNlLCBjYWxsYmFjaywgcmVtb3Zlcl0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5iaW5kKHRhcmdldHMsIGV2ZW50cywgY2FsbGJhY2spIHtcbiAgICBmb3JFYWNoRXZlbnQodGFyZ2V0cywgZXZlbnRzLCBmdW5jdGlvbiAodGFyZ2V0LCBldmVudCwgbmFtZXNwYWNlKSB7XG4gICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBpZiAobGlzdGVuZXJbMF0gPT09IHRhcmdldCAmJiBsaXN0ZW5lclsxXSA9PT0gZXZlbnQgJiYgbGlzdGVuZXJbMl0gPT09IG5hbWVzcGFjZSAmJiAoIWNhbGxiYWNrIHx8IGxpc3RlbmVyWzNdID09PSBjYWxsYmFjaykpIHtcbiAgICAgICAgICBsaXN0ZW5lcls0XSgpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwYXRjaCh0YXJnZXQsIHR5cGUsIGRldGFpbCkge1xuICAgIHZhciBlO1xuICAgIHZhciBidWJibGVzID0gdHJ1ZTtcblxuICAgIGlmICh0eXBlb2YgQ3VzdG9tRXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgZSA9IG5ldyBDdXN0b21FdmVudCh0eXBlLCB7XG4gICAgICAgIGJ1YmJsZXM6IGJ1YmJsZXMsXG4gICAgICAgIGRldGFpbDogZGV0YWlsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7XG4gICAgICBlLmluaXRDdXN0b21FdmVudCh0eXBlLCBidWJibGVzLCBmYWxzZSwgZGV0YWlsKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChlKTtcbiAgICByZXR1cm4gZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvckVhY2hFdmVudCh0YXJnZXRzLCBldmVudHMsIGl0ZXJhdGVlKSB7XG4gICAgZm9yRWFjaCh0YXJnZXRzLCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICB0YXJnZXQgJiYgZm9yRWFjaChldmVudHMsIGZ1bmN0aW9uIChldmVudHMyKSB7XG4gICAgICAgIGV2ZW50czIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TlMpIHtcbiAgICAgICAgICB2YXIgZnJhZ21lbnQgPSBldmVudE5TLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgICBpdGVyYXRlZSh0YXJnZXQsIGZyYWdtZW50WzBdLCBmcmFnbWVudFsxXSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBkYXRhWzRdKCk7XG4gICAgfSk7XG4gICAgZW1wdHkobGlzdGVuZXJzKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYmluZDogYmluZCxcbiAgICB1bmJpbmQ6IHVuYmluZCxcbiAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgZGVzdHJveTogZGVzdHJveVxuICB9O1xufVxuXG52YXIgRVZFTlRfTU9VTlRFRCA9IFwibW91bnRlZFwiO1xudmFyIEVWRU5UX1JFQURZID0gXCJyZWFkeVwiO1xudmFyIEVWRU5UX01PVkUgPSBcIm1vdmVcIjtcbnZhciBFVkVOVF9NT1ZFRCA9IFwibW92ZWRcIjtcbnZhciBFVkVOVF9DTElDSyA9IFwiY2xpY2tcIjtcbnZhciBFVkVOVF9BQ1RJVkUgPSBcImFjdGl2ZVwiO1xudmFyIEVWRU5UX0lOQUNUSVZFID0gXCJpbmFjdGl2ZVwiO1xudmFyIEVWRU5UX1ZJU0lCTEUgPSBcInZpc2libGVcIjtcbnZhciBFVkVOVF9ISURERU4gPSBcImhpZGRlblwiO1xudmFyIEVWRU5UX1JFRlJFU0ggPSBcInJlZnJlc2hcIjtcbnZhciBFVkVOVF9VUERBVEVEID0gXCJ1cGRhdGVkXCI7XG52YXIgRVZFTlRfUkVTSVpFID0gXCJyZXNpemVcIjtcbnZhciBFVkVOVF9SRVNJWkVEID0gXCJyZXNpemVkXCI7XG52YXIgRVZFTlRfRFJBRyA9IFwiZHJhZ1wiO1xudmFyIEVWRU5UX0RSQUdHSU5HID0gXCJkcmFnZ2luZ1wiO1xudmFyIEVWRU5UX0RSQUdHRUQgPSBcImRyYWdnZWRcIjtcbnZhciBFVkVOVF9TQ1JPTEwgPSBcInNjcm9sbFwiO1xudmFyIEVWRU5UX1NDUk9MTEVEID0gXCJzY3JvbGxlZFwiO1xudmFyIEVWRU5UX09WRVJGTE9XID0gXCJvdmVyZmxvd1wiO1xudmFyIEVWRU5UX0RFU1RST1kgPSBcImRlc3Ryb3lcIjtcbnZhciBFVkVOVF9BUlJPV1NfTU9VTlRFRCA9IFwiYXJyb3dzOm1vdW50ZWRcIjtcbnZhciBFVkVOVF9BUlJPV1NfVVBEQVRFRCA9IFwiYXJyb3dzOnVwZGF0ZWRcIjtcbnZhciBFVkVOVF9QQUdJTkFUSU9OX01PVU5URUQgPSBcInBhZ2luYXRpb246bW91bnRlZFwiO1xudmFyIEVWRU5UX1BBR0lOQVRJT05fVVBEQVRFRCA9IFwicGFnaW5hdGlvbjp1cGRhdGVkXCI7XG52YXIgRVZFTlRfTkFWSUdBVElPTl9NT1VOVEVEID0gXCJuYXZpZ2F0aW9uOm1vdW50ZWRcIjtcbnZhciBFVkVOVF9BVVRPUExBWV9QTEFZID0gXCJhdXRvcGxheTpwbGF5XCI7XG52YXIgRVZFTlRfQVVUT1BMQVlfUExBWUlORyA9IFwiYXV0b3BsYXk6cGxheWluZ1wiO1xudmFyIEVWRU5UX0FVVE9QTEFZX1BBVVNFID0gXCJhdXRvcGxheTpwYXVzZVwiO1xudmFyIEVWRU5UX0xBWllMT0FEX0xPQURFRCA9IFwibGF6eWxvYWQ6bG9hZGVkXCI7XG52YXIgRVZFTlRfU0xJREVfS0VZRE9XTiA9IFwic2tcIjtcbnZhciBFVkVOVF9TSElGVEVEID0gXCJzaFwiO1xudmFyIEVWRU5UX0VORF9JTkRFWF9DSEFOR0VEID0gXCJlaVwiO1xuXG5mdW5jdGlvbiBFdmVudEludGVyZmFjZShTcGxpZGUyKSB7XG4gIHZhciBidXMgPSBTcGxpZGUyID8gU3BsaWRlMi5ldmVudC5idXMgOiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIHZhciBiaW5kZXIgPSBFdmVudEJpbmRlcigpO1xuXG4gIGZ1bmN0aW9uIG9uKGV2ZW50cywgY2FsbGJhY2spIHtcbiAgICBiaW5kZXIuYmluZChidXMsIHRvQXJyYXkoZXZlbnRzKS5qb2luKFwiIFwiKSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrLCBpc0FycmF5KGUuZGV0YWlsKSA/IGUuZGV0YWlsIDogW10pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZW1pdChldmVudCkge1xuICAgIGJpbmRlci5kaXNwYXRjaChidXMsIGV2ZW50LCBzbGljZShhcmd1bWVudHMsIDEpKTtcbiAgfVxuXG4gIGlmIChTcGxpZGUyKSB7XG4gICAgU3BsaWRlMi5ldmVudC5vbihFVkVOVF9ERVNUUk9ZLCBiaW5kZXIuZGVzdHJveSk7XG4gIH1cblxuICByZXR1cm4gYXNzaWduKGJpbmRlciwge1xuICAgIGJ1czogYnVzLFxuICAgIG9uOiBvbixcbiAgICBvZmY6IGFwcGx5KGJpbmRlci51bmJpbmQsIGJ1cyksXG4gICAgZW1pdDogZW1pdFxuICB9KTtcbn1cblxuZnVuY3Rpb24gUmVxdWVzdEludGVydmFsKGludGVydmFsLCBvbkludGVydmFsLCBvblVwZGF0ZSwgbGltaXQpIHtcbiAgdmFyIG5vdyA9IERhdGUubm93O1xuICB2YXIgc3RhcnRUaW1lO1xuICB2YXIgcmF0ZSA9IDA7XG4gIHZhciBpZDtcbiAgdmFyIHBhdXNlZCA9IHRydWU7XG4gIHZhciBjb3VudCA9IDA7XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGlmICghcGF1c2VkKSB7XG4gICAgICByYXRlID0gaW50ZXJ2YWwgPyBtaW4oKG5vdygpIC0gc3RhcnRUaW1lKSAvIGludGVydmFsLCAxKSA6IDE7XG4gICAgICBvblVwZGF0ZSAmJiBvblVwZGF0ZShyYXRlKTtcblxuICAgICAgaWYgKHJhdGUgPj0gMSkge1xuICAgICAgICBvbkludGVydmFsKCk7XG4gICAgICAgIHN0YXJ0VGltZSA9IG5vdygpO1xuXG4gICAgICAgIGlmIChsaW1pdCAmJiArK2NvdW50ID49IGxpbWl0KSB7XG4gICAgICAgICAgcmV0dXJuIHBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWQgPSByYWYodXBkYXRlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydChyZXN1bWUpIHtcbiAgICByZXN1bWUgfHwgY2FuY2VsKCk7XG4gICAgc3RhcnRUaW1lID0gbm93KCkgLSAocmVzdW1lID8gcmF0ZSAqIGludGVydmFsIDogMCk7XG4gICAgcGF1c2VkID0gZmFsc2U7XG4gICAgaWQgPSByYWYodXBkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgIHBhdXNlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiByZXdpbmQoKSB7XG4gICAgc3RhcnRUaW1lID0gbm93KCk7XG4gICAgcmF0ZSA9IDA7XG5cbiAgICBpZiAob25VcGRhdGUpIHtcbiAgICAgIG9uVXBkYXRlKHJhdGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZCAmJiBjYW5jZWxBbmltYXRpb25GcmFtZShpZCk7XG4gICAgcmF0ZSA9IDA7XG4gICAgaWQgPSAwO1xuICAgIHBhdXNlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBzZXQodGltZSkge1xuICAgIGludGVydmFsID0gdGltZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzUGF1c2VkKCkge1xuICAgIHJldHVybiBwYXVzZWQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXJ0OiBzdGFydCxcbiAgICByZXdpbmQ6IHJld2luZCxcbiAgICBwYXVzZTogcGF1c2UsXG4gICAgY2FuY2VsOiBjYW5jZWwsXG4gICAgc2V0OiBzZXQsXG4gICAgaXNQYXVzZWQ6IGlzUGF1c2VkXG4gIH07XG59XG5cbmZ1bmN0aW9uIFN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICB2YXIgc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cbiAgZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgc3RhdGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzKHN0YXRlcykge1xuICAgIHJldHVybiBpbmNsdWRlcyh0b0FycmF5KHN0YXRlcyksIHN0YXRlKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2V0OiBzZXQsXG4gICAgaXM6IGlzXG4gIH07XG59XG5cbmZ1bmN0aW9uIFRocm90dGxlKGZ1bmMsIGR1cmF0aW9uKSB7XG4gIHZhciBpbnRlcnZhbCA9IFJlcXVlc3RJbnRlcnZhbChkdXJhdGlvbiB8fCAwLCBmdW5jLCBudWxsLCAxKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpbnRlcnZhbC5pc1BhdXNlZCgpICYmIGludGVydmFsLnN0YXJ0KCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIE1lZGlhKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBzdGF0ZSA9IFNwbGlkZTIuc3RhdGU7XG4gIHZhciBicmVha3BvaW50cyA9IG9wdGlvbnMuYnJlYWtwb2ludHMgfHwge307XG4gIHZhciByZWR1Y2VkTW90aW9uID0gb3B0aW9ucy5yZWR1Y2VkTW90aW9uIHx8IHt9O1xuICB2YXIgYmluZGVyID0gRXZlbnRCaW5kZXIoKTtcbiAgdmFyIHF1ZXJpZXMgPSBbXTtcblxuICBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICB2YXIgaXNNaW4gPSBvcHRpb25zLm1lZGlhUXVlcnkgPT09IFwibWluXCI7XG4gICAgb3duS2V5cyhicmVha3BvaW50cykuc29ydChmdW5jdGlvbiAobiwgbSkge1xuICAgICAgcmV0dXJuIGlzTWluID8gK24gLSArbSA6ICttIC0gK247XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZWdpc3RlcihicmVha3BvaW50c1trZXldLCBcIihcIiArIChpc01pbiA/IFwibWluXCIgOiBcIm1heFwiKSArIFwiLXdpZHRoOlwiICsga2V5ICsgXCJweClcIik7XG4gICAgfSk7XG4gICAgcmVnaXN0ZXIocmVkdWNlZE1vdGlvbiwgTUVESUFfUFJFRkVSU19SRURVQ0VEX01PVElPTik7XG4gICAgdXBkYXRlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KGNvbXBsZXRlbHkpIHtcbiAgICBpZiAoY29tcGxldGVseSkge1xuICAgICAgYmluZGVyLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlcihvcHRpb25zMiwgcXVlcnkpIHtcbiAgICB2YXIgcXVlcnlMaXN0ID0gbWF0Y2hNZWRpYShxdWVyeSk7XG4gICAgYmluZGVyLmJpbmQocXVlcnlMaXN0LCBcImNoYW5nZVwiLCB1cGRhdGUpO1xuICAgIHF1ZXJpZXMucHVzaChbb3B0aW9uczIsIHF1ZXJ5TGlzdF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBkZXN0cm95ZWQgPSBzdGF0ZS5pcyhERVNUUk9ZRUQpO1xuICAgIHZhciBkaXJlY3Rpb24gPSBvcHRpb25zLmRpcmVjdGlvbjtcbiAgICB2YXIgbWVyZ2VkID0gcXVlcmllcy5yZWR1Y2UoZnVuY3Rpb24gKG1lcmdlZDIsIGVudHJ5KSB7XG4gICAgICByZXR1cm4gbWVyZ2UobWVyZ2VkMiwgZW50cnlbMV0ubWF0Y2hlcyA/IGVudHJ5WzBdIDoge30pO1xuICAgIH0sIHt9KTtcbiAgICBvbWl0KG9wdGlvbnMpO1xuICAgIHNldChtZXJnZWQpO1xuXG4gICAgaWYgKG9wdGlvbnMuZGVzdHJveSkge1xuICAgICAgU3BsaWRlMi5kZXN0cm95KG9wdGlvbnMuZGVzdHJveSA9PT0gXCJjb21wbGV0ZWx5XCIpO1xuICAgIH0gZWxzZSBpZiAoZGVzdHJveWVkKSB7XG4gICAgICBkZXN0cm95KHRydWUpO1xuICAgICAgU3BsaWRlMi5tb3VudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXJlY3Rpb24gIT09IG9wdGlvbnMuZGlyZWN0aW9uICYmIFNwbGlkZTIucmVmcmVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZHVjZShlbmFibGUpIHtcbiAgICBpZiAobWF0Y2hNZWRpYShNRURJQV9QUkVGRVJTX1JFRFVDRURfTU9USU9OKS5tYXRjaGVzKSB7XG4gICAgICBlbmFibGUgPyBtZXJnZShvcHRpb25zLCByZWR1Y2VkTW90aW9uKSA6IG9taXQob3B0aW9ucywgb3duS2V5cyhyZWR1Y2VkTW90aW9uKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0KG9wdHMsIGJhc2UsIG5vdGlmeSkge1xuICAgIG1lcmdlKG9wdGlvbnMsIG9wdHMpO1xuICAgIGJhc2UgJiYgbWVyZ2UoT2JqZWN0LmdldFByb3RvdHlwZU9mKG9wdGlvbnMpLCBvcHRzKTtcblxuICAgIGlmIChub3RpZnkgfHwgIXN0YXRlLmlzKENSRUFURUQpKSB7XG4gICAgICBTcGxpZGUyLmVtaXQoRVZFTlRfVVBEQVRFRCwgb3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZXR1cDogc2V0dXAsXG4gICAgZGVzdHJveTogZGVzdHJveSxcbiAgICByZWR1Y2U6IHJlZHVjZSxcbiAgICBzZXQ6IHNldFxuICB9O1xufVxuXG52YXIgQVJST1cgPSBcIkFycm93XCI7XG52YXIgQVJST1dfTEVGVCA9IEFSUk9XICsgXCJMZWZ0XCI7XG52YXIgQVJST1dfUklHSFQgPSBBUlJPVyArIFwiUmlnaHRcIjtcbnZhciBBUlJPV19VUCA9IEFSUk9XICsgXCJVcFwiO1xudmFyIEFSUk9XX0RPV04gPSBBUlJPVyArIFwiRG93blwiO1xudmFyIExUUiA9IFwibHRyXCI7XG52YXIgUlRMID0gXCJydGxcIjtcbnZhciBUVEIgPSBcInR0YlwiO1xudmFyIE9SSUVOVEFUSU9OX01BUCA9IHtcbiAgd2lkdGg6IFtcImhlaWdodFwiXSxcbiAgbGVmdDogW1widG9wXCIsIFwicmlnaHRcIl0sXG4gIHJpZ2h0OiBbXCJib3R0b21cIiwgXCJsZWZ0XCJdLFxuICB4OiBbXCJ5XCJdLFxuICBYOiBbXCJZXCJdLFxuICBZOiBbXCJYXCJdLFxuICBBcnJvd0xlZnQ6IFtBUlJPV19VUCwgQVJST1dfUklHSFRdLFxuICBBcnJvd1JpZ2h0OiBbQVJST1dfRE9XTiwgQVJST1dfTEVGVF1cbn07XG5cbmZ1bmN0aW9uIERpcmVjdGlvbihTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICBmdW5jdGlvbiByZXNvbHZlKHByb3AsIGF4aXNPbmx5LCBkaXJlY3Rpb24pIHtcbiAgICBkaXJlY3Rpb24gPSBkaXJlY3Rpb24gfHwgb3B0aW9ucy5kaXJlY3Rpb247XG4gICAgdmFyIGluZGV4ID0gZGlyZWN0aW9uID09PSBSVEwgJiYgIWF4aXNPbmx5ID8gMSA6IGRpcmVjdGlvbiA9PT0gVFRCID8gMCA6IC0xO1xuICAgIHJldHVybiBPUklFTlRBVElPTl9NQVBbcHJvcF0gJiYgT1JJRU5UQVRJT05fTUFQW3Byb3BdW2luZGV4XSB8fCBwcm9wLnJlcGxhY2UoL3dpZHRofGxlZnR8cmlnaHQvaSwgZnVuY3Rpb24gKG1hdGNoLCBvZmZzZXQpIHtcbiAgICAgIHZhciByZXBsYWNlbWVudCA9IE9SSUVOVEFUSU9OX01BUFttYXRjaC50b0xvd2VyQ2FzZSgpXVtpbmRleF0gfHwgbWF0Y2g7XG4gICAgICByZXR1cm4gb2Zmc2V0ID4gMCA/IHJlcGxhY2VtZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcmVwbGFjZW1lbnQuc2xpY2UoMSkgOiByZXBsYWNlbWVudDtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9yaWVudCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAqIChvcHRpb25zLmRpcmVjdGlvbiA9PT0gUlRMID8gMSA6IC0xKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICBvcmllbnQ6IG9yaWVudFxuICB9O1xufVxuXG52YXIgUk9MRSA9IFwicm9sZVwiO1xudmFyIFRBQl9JTkRFWCA9IFwidGFiaW5kZXhcIjtcbnZhciBESVNBQkxFRCA9IFwiZGlzYWJsZWRcIjtcbnZhciBBUklBX1BSRUZJWCA9IFwiYXJpYS1cIjtcbnZhciBBUklBX0NPTlRST0xTID0gQVJJQV9QUkVGSVggKyBcImNvbnRyb2xzXCI7XG52YXIgQVJJQV9DVVJSRU5UID0gQVJJQV9QUkVGSVggKyBcImN1cnJlbnRcIjtcbnZhciBBUklBX1NFTEVDVEVEID0gQVJJQV9QUkVGSVggKyBcInNlbGVjdGVkXCI7XG52YXIgQVJJQV9MQUJFTCA9IEFSSUFfUFJFRklYICsgXCJsYWJlbFwiO1xudmFyIEFSSUFfTEFCRUxMRURCWSA9IEFSSUFfUFJFRklYICsgXCJsYWJlbGxlZGJ5XCI7XG52YXIgQVJJQV9ISURERU4gPSBBUklBX1BSRUZJWCArIFwiaGlkZGVuXCI7XG52YXIgQVJJQV9PUklFTlRBVElPTiA9IEFSSUFfUFJFRklYICsgXCJvcmllbnRhdGlvblwiO1xudmFyIEFSSUFfUk9MRURFU0NSSVBUSU9OID0gQVJJQV9QUkVGSVggKyBcInJvbGVkZXNjcmlwdGlvblwiO1xudmFyIEFSSUFfTElWRSA9IEFSSUFfUFJFRklYICsgXCJsaXZlXCI7XG52YXIgQVJJQV9CVVNZID0gQVJJQV9QUkVGSVggKyBcImJ1c3lcIjtcbnZhciBBUklBX0FUT01JQyA9IEFSSUFfUFJFRklYICsgXCJhdG9taWNcIjtcbnZhciBBTExfQVRUUklCVVRFUyA9IFtST0xFLCBUQUJfSU5ERVgsIERJU0FCTEVELCBBUklBX0NPTlRST0xTLCBBUklBX0NVUlJFTlQsIEFSSUFfTEFCRUwsIEFSSUFfTEFCRUxMRURCWSwgQVJJQV9ISURERU4sIEFSSUFfT1JJRU5UQVRJT04sIEFSSUFfUk9MRURFU0NSSVBUSU9OXTtcbnZhciBDTEFTU19QUkVGSVggPSBQUk9KRUNUX0NPREUgKyBcIl9fXCI7XG52YXIgU1RBVFVTX0NMQVNTX1BSRUZJWCA9IFwiaXMtXCI7XG52YXIgQ0xBU1NfUk9PVCA9IFBST0pFQ1RfQ09ERTtcbnZhciBDTEFTU19UUkFDSyA9IENMQVNTX1BSRUZJWCArIFwidHJhY2tcIjtcbnZhciBDTEFTU19MSVNUID0gQ0xBU1NfUFJFRklYICsgXCJsaXN0XCI7XG52YXIgQ0xBU1NfU0xJREUgPSBDTEFTU19QUkVGSVggKyBcInNsaWRlXCI7XG52YXIgQ0xBU1NfQ0xPTkUgPSBDTEFTU19TTElERSArIFwiLS1jbG9uZVwiO1xudmFyIENMQVNTX0NPTlRBSU5FUiA9IENMQVNTX1NMSURFICsgXCJfX2NvbnRhaW5lclwiO1xudmFyIENMQVNTX0FSUk9XUyA9IENMQVNTX1BSRUZJWCArIFwiYXJyb3dzXCI7XG52YXIgQ0xBU1NfQVJST1cgPSBDTEFTU19QUkVGSVggKyBcImFycm93XCI7XG52YXIgQ0xBU1NfQVJST1dfUFJFViA9IENMQVNTX0FSUk9XICsgXCItLXByZXZcIjtcbnZhciBDTEFTU19BUlJPV19ORVhUID0gQ0xBU1NfQVJST1cgKyBcIi0tbmV4dFwiO1xudmFyIENMQVNTX1BBR0lOQVRJT04gPSBDTEFTU19QUkVGSVggKyBcInBhZ2luYXRpb25cIjtcbnZhciBDTEFTU19QQUdJTkFUSU9OX1BBR0UgPSBDTEFTU19QQUdJTkFUSU9OICsgXCJfX3BhZ2VcIjtcbnZhciBDTEFTU19QUk9HUkVTUyA9IENMQVNTX1BSRUZJWCArIFwicHJvZ3Jlc3NcIjtcbnZhciBDTEFTU19QUk9HUkVTU19CQVIgPSBDTEFTU19QUk9HUkVTUyArIFwiX19iYXJcIjtcbnZhciBDTEFTU19UT0dHTEUgPSBDTEFTU19QUkVGSVggKyBcInRvZ2dsZVwiO1xudmFyIENMQVNTX1RPR0dMRV9QTEFZID0gQ0xBU1NfVE9HR0xFICsgXCJfX3BsYXlcIjtcbnZhciBDTEFTU19UT0dHTEVfUEFVU0UgPSBDTEFTU19UT0dHTEUgKyBcIl9fcGF1c2VcIjtcbnZhciBDTEFTU19TUElOTkVSID0gQ0xBU1NfUFJFRklYICsgXCJzcGlubmVyXCI7XG52YXIgQ0xBU1NfU1IgPSBDTEFTU19QUkVGSVggKyBcInNyXCI7XG52YXIgQ0xBU1NfSU5JVElBTElaRUQgPSBTVEFUVVNfQ0xBU1NfUFJFRklYICsgXCJpbml0aWFsaXplZFwiO1xudmFyIENMQVNTX0FDVElWRSA9IFNUQVRVU19DTEFTU19QUkVGSVggKyBcImFjdGl2ZVwiO1xudmFyIENMQVNTX1BSRVYgPSBTVEFUVVNfQ0xBU1NfUFJFRklYICsgXCJwcmV2XCI7XG52YXIgQ0xBU1NfTkVYVCA9IFNUQVRVU19DTEFTU19QUkVGSVggKyBcIm5leHRcIjtcbnZhciBDTEFTU19WSVNJQkxFID0gU1RBVFVTX0NMQVNTX1BSRUZJWCArIFwidmlzaWJsZVwiO1xudmFyIENMQVNTX0xPQURJTkcgPSBTVEFUVVNfQ0xBU1NfUFJFRklYICsgXCJsb2FkaW5nXCI7XG52YXIgQ0xBU1NfRk9DVVNfSU4gPSBTVEFUVVNfQ0xBU1NfUFJFRklYICsgXCJmb2N1cy1pblwiO1xudmFyIENMQVNTX09WRVJGTE9XID0gU1RBVFVTX0NMQVNTX1BSRUZJWCArIFwib3ZlcmZsb3dcIjtcbnZhciBTVEFUVVNfQ0xBU1NFUyA9IFtDTEFTU19BQ1RJVkUsIENMQVNTX1ZJU0lCTEUsIENMQVNTX1BSRVYsIENMQVNTX05FWFQsIENMQVNTX0xPQURJTkcsIENMQVNTX0ZPQ1VTX0lOLCBDTEFTU19PVkVSRkxPV107XG52YXIgQ0xBU1NFUyA9IHtcbiAgc2xpZGU6IENMQVNTX1NMSURFLFxuICBjbG9uZTogQ0xBU1NfQ0xPTkUsXG4gIGFycm93czogQ0xBU1NfQVJST1dTLFxuICBhcnJvdzogQ0xBU1NfQVJST1csXG4gIHByZXY6IENMQVNTX0FSUk9XX1BSRVYsXG4gIG5leHQ6IENMQVNTX0FSUk9XX05FWFQsXG4gIHBhZ2luYXRpb246IENMQVNTX1BBR0lOQVRJT04sXG4gIHBhZ2U6IENMQVNTX1BBR0lOQVRJT05fUEFHRSxcbiAgc3Bpbm5lcjogQ0xBU1NfU1BJTk5FUlxufTtcblxuZnVuY3Rpb24gY2xvc2VzdChmcm9tLCBzZWxlY3Rvcikge1xuICBpZiAoaXNGdW5jdGlvbihmcm9tLmNsb3Nlc3QpKSB7XG4gICAgcmV0dXJuIGZyb20uY2xvc2VzdChzZWxlY3Rvcik7XG4gIH1cblxuICB2YXIgZWxtID0gZnJvbTtcblxuICB3aGlsZSAoZWxtICYmIGVsbS5ub2RlVHlwZSA9PT0gMSkge1xuICAgIGlmIChtYXRjaGVzKGVsbSwgc2VsZWN0b3IpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBlbG0gPSBlbG0ucGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBlbG07XG59XG5cbnZhciBGUklDVElPTiA9IDU7XG52YXIgTE9HX0lOVEVSVkFMID0gMjAwO1xudmFyIFBPSU5URVJfRE9XTl9FVkVOVFMgPSBcInRvdWNoc3RhcnQgbW91c2Vkb3duXCI7XG52YXIgUE9JTlRFUl9NT1ZFX0VWRU5UUyA9IFwidG91Y2htb3ZlIG1vdXNlbW92ZVwiO1xudmFyIFBPSU5URVJfVVBfRVZFTlRTID0gXCJ0b3VjaGVuZCB0b3VjaGNhbmNlbCBtb3VzZXVwIGNsaWNrXCI7XG5cbmZ1bmN0aW9uIEVsZW1lbnRzKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2UgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlLm9uLFxuICAgICAgYmluZCA9IF9FdmVudEludGVyZmFjZS5iaW5kO1xuXG4gIHZhciByb290ID0gU3BsaWRlMi5yb290O1xuICB2YXIgaTE4biA9IG9wdGlvbnMuaTE4bjtcbiAgdmFyIGVsZW1lbnRzID0ge307XG4gIHZhciBzbGlkZXMgPSBbXTtcbiAgdmFyIHJvb3RDbGFzc2VzID0gW107XG4gIHZhciB0cmFja0NsYXNzZXMgPSBbXTtcbiAgdmFyIHRyYWNrO1xuICB2YXIgbGlzdDtcbiAgdmFyIGlzVXNpbmdLZXk7XG5cbiAgZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgY29sbGVjdCgpO1xuICAgIGluaXQoKTtcbiAgICB1cGRhdGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIG9uKEVWRU5UX1JFRlJFU0gsIGRlc3Ryb3kpO1xuICAgIG9uKEVWRU5UX1JFRlJFU0gsIHNldHVwKTtcbiAgICBvbihFVkVOVF9VUERBVEVELCB1cGRhdGUpO1xuICAgIGJpbmQoZG9jdW1lbnQsIFBPSU5URVJfRE9XTl9FVkVOVFMgKyBcIiBrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpc1VzaW5nS2V5ID0gZS50eXBlID09PSBcImtleWRvd25cIjtcbiAgICB9LCB7XG4gICAgICBjYXB0dXJlOiB0cnVlXG4gICAgfSk7XG4gICAgYmluZChyb290LCBcImZvY3VzaW5cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdG9nZ2xlQ2xhc3Mocm9vdCwgQ0xBU1NfRk9DVVNfSU4sICEhaXNVc2luZ0tleSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KGNvbXBsZXRlbHkpIHtcbiAgICB2YXIgYXR0cnMgPSBBTExfQVRUUklCVVRFUy5jb25jYXQoXCJzdHlsZVwiKTtcbiAgICBlbXB0eShzbGlkZXMpO1xuICAgIHJlbW92ZUNsYXNzKHJvb3QsIHJvb3RDbGFzc2VzKTtcbiAgICByZW1vdmVDbGFzcyh0cmFjaywgdHJhY2tDbGFzc2VzKTtcbiAgICByZW1vdmVBdHRyaWJ1dGUoW3RyYWNrLCBsaXN0XSwgYXR0cnMpO1xuICAgIHJlbW92ZUF0dHJpYnV0ZShyb290LCBjb21wbGV0ZWx5ID8gYXR0cnMgOiBbXCJzdHlsZVwiLCBBUklBX1JPTEVERVNDUklQVElPTl0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHJlbW92ZUNsYXNzKHJvb3QsIHJvb3RDbGFzc2VzKTtcbiAgICByZW1vdmVDbGFzcyh0cmFjaywgdHJhY2tDbGFzc2VzKTtcbiAgICByb290Q2xhc3NlcyA9IGdldENsYXNzZXMoQ0xBU1NfUk9PVCk7XG4gICAgdHJhY2tDbGFzc2VzID0gZ2V0Q2xhc3NlcyhDTEFTU19UUkFDSyk7XG4gICAgYWRkQ2xhc3Mocm9vdCwgcm9vdENsYXNzZXMpO1xuICAgIGFkZENsYXNzKHRyYWNrLCB0cmFja0NsYXNzZXMpO1xuICAgIHNldEF0dHJpYnV0ZShyb290LCBBUklBX0xBQkVMLCBvcHRpb25zLmxhYmVsKTtcbiAgICBzZXRBdHRyaWJ1dGUocm9vdCwgQVJJQV9MQUJFTExFREJZLCBvcHRpb25zLmxhYmVsbGVkYnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29sbGVjdCgpIHtcbiAgICB0cmFjayA9IGZpbmQoXCIuXCIgKyBDTEFTU19UUkFDSyk7XG4gICAgbGlzdCA9IGNoaWxkKHRyYWNrLCBcIi5cIiArIENMQVNTX0xJU1QpO1xuICAgIGFzc2VydCh0cmFjayAmJiBsaXN0LCBcIkEgdHJhY2svbGlzdCBlbGVtZW50IGlzIG1pc3NpbmcuXCIpO1xuICAgIHB1c2goc2xpZGVzLCBjaGlsZHJlbihsaXN0LCBcIi5cIiArIENMQVNTX1NMSURFICsgXCI6bm90KC5cIiArIENMQVNTX0NMT05FICsgXCIpXCIpKTtcbiAgICBmb3JPd24oe1xuICAgICAgYXJyb3dzOiBDTEFTU19BUlJPV1MsXG4gICAgICBwYWdpbmF0aW9uOiBDTEFTU19QQUdJTkFUSU9OLFxuICAgICAgcHJldjogQ0xBU1NfQVJST1dfUFJFVixcbiAgICAgIG5leHQ6IENMQVNTX0FSUk9XX05FWFQsXG4gICAgICBiYXI6IENMQVNTX1BST0dSRVNTX0JBUixcbiAgICAgIHRvZ2dsZTogQ0xBU1NfVE9HR0xFXG4gICAgfSwgZnVuY3Rpb24gKGNsYXNzTmFtZSwga2V5KSB7XG4gICAgICBlbGVtZW50c1trZXldID0gZmluZChcIi5cIiArIGNsYXNzTmFtZSk7XG4gICAgfSk7XG4gICAgYXNzaWduKGVsZW1lbnRzLCB7XG4gICAgICByb290OiByb290LFxuICAgICAgdHJhY2s6IHRyYWNrLFxuICAgICAgbGlzdDogbGlzdCxcbiAgICAgIHNsaWRlczogc2xpZGVzXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBpZCA9IHJvb3QuaWQgfHwgdW5pcXVlSWQoUFJPSkVDVF9DT0RFKTtcbiAgICB2YXIgcm9sZSA9IG9wdGlvbnMucm9sZTtcbiAgICByb290LmlkID0gaWQ7XG4gICAgdHJhY2suaWQgPSB0cmFjay5pZCB8fCBpZCArIFwiLXRyYWNrXCI7XG4gICAgbGlzdC5pZCA9IGxpc3QuaWQgfHwgaWQgKyBcIi1saXN0XCI7XG5cbiAgICBpZiAoIWdldEF0dHJpYnV0ZShyb290LCBST0xFKSAmJiByb290LnRhZ05hbWUgIT09IFwiU0VDVElPTlwiICYmIHJvbGUpIHtcbiAgICAgIHNldEF0dHJpYnV0ZShyb290LCBST0xFLCByb2xlKTtcbiAgICB9XG5cbiAgICBzZXRBdHRyaWJ1dGUocm9vdCwgQVJJQV9ST0xFREVTQ1JJUFRJT04sIGkxOG4uY2Fyb3VzZWwpO1xuICAgIHNldEF0dHJpYnV0ZShsaXN0LCBST0xFLCBcInByZXNlbnRhdGlvblwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmQoc2VsZWN0b3IpIHtcbiAgICB2YXIgZWxtID0gcXVlcnkocm9vdCwgc2VsZWN0b3IpO1xuICAgIHJldHVybiBlbG0gJiYgY2xvc2VzdChlbG0sIFwiLlwiICsgQ0xBU1NfUk9PVCkgPT09IHJvb3QgPyBlbG0gOiB2b2lkIDA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDbGFzc2VzKGJhc2UpIHtcbiAgICByZXR1cm4gW2Jhc2UgKyBcIi0tXCIgKyBvcHRpb25zLnR5cGUsIGJhc2UgKyBcIi0tXCIgKyBvcHRpb25zLmRpcmVjdGlvbiwgb3B0aW9ucy5kcmFnICYmIGJhc2UgKyBcIi0tZHJhZ2dhYmxlXCIsIG9wdGlvbnMuaXNOYXZpZ2F0aW9uICYmIGJhc2UgKyBcIi0tbmF2XCIsIGJhc2UgPT09IENMQVNTX1JPT1QgJiYgQ0xBU1NfQUNUSVZFXTtcbiAgfVxuXG4gIHJldHVybiBhc3NpZ24oZWxlbWVudHMsIHtcbiAgICBzZXR1cDogc2V0dXAsXG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3lcbiAgfSk7XG59XG5cbnZhciBTTElERSA9IFwic2xpZGVcIjtcbnZhciBMT09QID0gXCJsb29wXCI7XG52YXIgRkFERSA9IFwiZmFkZVwiO1xuXG5mdW5jdGlvbiBTbGlkZSQxKFNwbGlkZTIsIGluZGV4LCBzbGlkZUluZGV4LCBzbGlkZSkge1xuICB2YXIgZXZlbnQgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKTtcbiAgdmFyIG9uID0gZXZlbnQub24sXG4gICAgICBlbWl0ID0gZXZlbnQuZW1pdCxcbiAgICAgIGJpbmQgPSBldmVudC5iaW5kO1xuICB2YXIgQ29tcG9uZW50cyA9IFNwbGlkZTIuQ29tcG9uZW50cyxcbiAgICAgIHJvb3QgPSBTcGxpZGUyLnJvb3QsXG4gICAgICBvcHRpb25zID0gU3BsaWRlMi5vcHRpb25zO1xuICB2YXIgaXNOYXZpZ2F0aW9uID0gb3B0aW9ucy5pc05hdmlnYXRpb24sXG4gICAgICB1cGRhdGVPbk1vdmUgPSBvcHRpb25zLnVwZGF0ZU9uTW92ZSxcbiAgICAgIGkxOG4gPSBvcHRpb25zLmkxOG4sXG4gICAgICBwYWdpbmF0aW9uID0gb3B0aW9ucy5wYWdpbmF0aW9uLFxuICAgICAgc2xpZGVGb2N1cyA9IG9wdGlvbnMuc2xpZGVGb2N1cztcbiAgdmFyIHJlc29sdmUgPSBDb21wb25lbnRzLkRpcmVjdGlvbi5yZXNvbHZlO1xuICB2YXIgc3R5bGVzID0gZ2V0QXR0cmlidXRlKHNsaWRlLCBcInN0eWxlXCIpO1xuICB2YXIgbGFiZWwgPSBnZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfTEFCRUwpO1xuICB2YXIgaXNDbG9uZSA9IHNsaWRlSW5kZXggPiAtMTtcbiAgdmFyIGNvbnRhaW5lciA9IGNoaWxkKHNsaWRlLCBcIi5cIiArIENMQVNTX0NPTlRBSU5FUik7XG4gIHZhciBkZXN0cm95ZWQ7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaWYgKCFpc0Nsb25lKSB7XG4gICAgICBzbGlkZS5pZCA9IHJvb3QuaWQgKyBcIi1zbGlkZVwiICsgcGFkKGluZGV4ICsgMSk7XG4gICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIFJPTEUsIHBhZ2luYXRpb24gPyBcInRhYnBhbmVsXCIgOiBcImdyb3VwXCIpO1xuICAgICAgc2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX1JPTEVERVNDUklQVElPTiwgaTE4bi5zbGlkZSk7XG4gICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfTEFCRUwsIGxhYmVsIHx8IGZvcm1hdChpMThuLnNsaWRlTGFiZWwsIFtpbmRleCArIDEsIFNwbGlkZTIubGVuZ3RoXSkpO1xuICAgIH1cblxuICAgIGxpc3RlbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuKCkge1xuICAgIGJpbmQoc2xpZGUsIFwiY2xpY2tcIiwgYXBwbHkoZW1pdCwgRVZFTlRfQ0xJQ0ssIHNlbGYpKTtcbiAgICBiaW5kKHNsaWRlLCBcImtleWRvd25cIiwgYXBwbHkoZW1pdCwgRVZFTlRfU0xJREVfS0VZRE9XTiwgc2VsZikpO1xuICAgIG9uKFtFVkVOVF9NT1ZFRCwgRVZFTlRfU0hJRlRFRCwgRVZFTlRfU0NST0xMRURdLCB1cGRhdGUpO1xuICAgIG9uKEVWRU5UX05BVklHQVRJT05fTU9VTlRFRCwgaW5pdE5hdmlnYXRpb24pO1xuXG4gICAgaWYgKHVwZGF0ZU9uTW92ZSkge1xuICAgICAgb24oRVZFTlRfTU9WRSwgb25Nb3ZlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGRlc3Ryb3llZCA9IHRydWU7XG4gICAgZXZlbnQuZGVzdHJveSgpO1xuICAgIHJlbW92ZUNsYXNzKHNsaWRlLCBTVEFUVVNfQ0xBU1NFUyk7XG4gICAgcmVtb3ZlQXR0cmlidXRlKHNsaWRlLCBBTExfQVRUUklCVVRFUyk7XG4gICAgc2V0QXR0cmlidXRlKHNsaWRlLCBcInN0eWxlXCIsIHN0eWxlcyk7XG4gICAgc2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX0xBQkVMLCBsYWJlbCB8fCBcIlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXROYXZpZ2F0aW9uKCkge1xuICAgIHZhciBjb250cm9scyA9IFNwbGlkZTIuc3BsaWRlcy5tYXAoZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgdmFyIFNsaWRlMiA9IHRhcmdldC5zcGxpZGUuQ29tcG9uZW50cy5TbGlkZXMuZ2V0QXQoaW5kZXgpO1xuICAgICAgcmV0dXJuIFNsaWRlMiA/IFNsaWRlMi5zbGlkZS5pZCA6IFwiXCI7XG4gICAgfSkuam9pbihcIiBcIik7XG4gICAgc2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX0xBQkVMLCBmb3JtYXQoaTE4bi5zbGlkZVgsIChpc0Nsb25lID8gc2xpZGVJbmRleCA6IGluZGV4KSArIDEpKTtcbiAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfQ09OVFJPTFMsIGNvbnRyb2xzKTtcbiAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIFJPTEUsIHNsaWRlRm9jdXMgPyBcImJ1dHRvblwiIDogXCJcIik7XG4gICAgc2xpZGVGb2N1cyAmJiByZW1vdmVBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfUk9MRURFU0NSSVBUSU9OKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW92ZSgpIHtcbiAgICBpZiAoIWRlc3Ryb3llZCkge1xuICAgICAgdXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGlmICghZGVzdHJveWVkKSB7XG4gICAgICB2YXIgY3VyciA9IFNwbGlkZTIuaW5kZXg7XG4gICAgICB1cGRhdGVBY3Rpdml0eSgpO1xuICAgICAgdXBkYXRlVmlzaWJpbGl0eSgpO1xuICAgICAgdG9nZ2xlQ2xhc3Moc2xpZGUsIENMQVNTX1BSRVYsIGluZGV4ID09PSBjdXJyIC0gMSk7XG4gICAgICB0b2dnbGVDbGFzcyhzbGlkZSwgQ0xBU1NfTkVYVCwgaW5kZXggPT09IGN1cnIgKyAxKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVBY3Rpdml0eSgpIHtcbiAgICB2YXIgYWN0aXZlID0gaXNBY3RpdmUoKTtcblxuICAgIGlmIChhY3RpdmUgIT09IGhhc0NsYXNzKHNsaWRlLCBDTEFTU19BQ1RJVkUpKSB7XG4gICAgICB0b2dnbGVDbGFzcyhzbGlkZSwgQ0xBU1NfQUNUSVZFLCBhY3RpdmUpO1xuICAgICAgc2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX0NVUlJFTlQsIGlzTmF2aWdhdGlvbiAmJiBhY3RpdmUgfHwgXCJcIik7XG4gICAgICBlbWl0KGFjdGl2ZSA/IEVWRU5UX0FDVElWRSA6IEVWRU5UX0lOQUNUSVZFLCBzZWxmKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVWaXNpYmlsaXR5KCkge1xuICAgIHZhciB2aXNpYmxlID0gaXNWaXNpYmxlKCk7XG4gICAgdmFyIGhpZGRlbiA9ICF2aXNpYmxlICYmICghaXNBY3RpdmUoKSB8fCBpc0Nsb25lKTtcblxuICAgIGlmICghU3BsaWRlMi5zdGF0ZS5pcyhbTU9WSU5HLCBTQ1JPTExJTkddKSkge1xuICAgICAgc2V0QXR0cmlidXRlKHNsaWRlLCBBUklBX0hJRERFTiwgaGlkZGVuIHx8IFwiXCIpO1xuICAgIH1cblxuICAgIHNldEF0dHJpYnV0ZShxdWVyeUFsbChzbGlkZSwgb3B0aW9ucy5mb2N1c2FibGVOb2RlcyB8fCBcIlwiKSwgVEFCX0lOREVYLCBoaWRkZW4gPyAtMSA6IFwiXCIpO1xuXG4gICAgaWYgKHNsaWRlRm9jdXMpIHtcbiAgICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgVEFCX0lOREVYLCBoaWRkZW4gPyAtMSA6IDApO1xuICAgIH1cblxuICAgIGlmICh2aXNpYmxlICE9PSBoYXNDbGFzcyhzbGlkZSwgQ0xBU1NfVklTSUJMRSkpIHtcbiAgICAgIHRvZ2dsZUNsYXNzKHNsaWRlLCBDTEFTU19WSVNJQkxFLCB2aXNpYmxlKTtcbiAgICAgIGVtaXQodmlzaWJsZSA/IEVWRU5UX1ZJU0lCTEUgOiBFVkVOVF9ISURERU4sIHNlbGYpO1xuICAgIH1cblxuICAgIGlmICghdmlzaWJsZSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBzbGlkZSkge1xuICAgICAgdmFyIFNsaWRlMiA9IENvbXBvbmVudHMuU2xpZGVzLmdldEF0KFNwbGlkZTIuaW5kZXgpO1xuICAgICAgU2xpZGUyICYmIGZvY3VzKFNsaWRlMi5zbGlkZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3R5bGUkMShwcm9wLCB2YWx1ZSwgdXNlQ29udGFpbmVyKSB7XG4gICAgc3R5bGUodXNlQ29udGFpbmVyICYmIGNvbnRhaW5lciB8fCBzbGlkZSwgcHJvcCwgdmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNBY3RpdmUoKSB7XG4gICAgdmFyIGN1cnIgPSBTcGxpZGUyLmluZGV4O1xuICAgIHJldHVybiBjdXJyID09PSBpbmRleCB8fCBvcHRpb25zLmNsb25lU3RhdHVzICYmIGN1cnIgPT09IHNsaWRlSW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiBpc1Zpc2libGUoKSB7XG4gICAgaWYgKFNwbGlkZTIuaXMoRkFERSkpIHtcbiAgICAgIHJldHVybiBpc0FjdGl2ZSgpO1xuICAgIH1cblxuICAgIHZhciB0cmFja1JlY3QgPSByZWN0KENvbXBvbmVudHMuRWxlbWVudHMudHJhY2spO1xuICAgIHZhciBzbGlkZVJlY3QgPSByZWN0KHNsaWRlKTtcbiAgICB2YXIgbGVmdCA9IHJlc29sdmUoXCJsZWZ0XCIsIHRydWUpO1xuICAgIHZhciByaWdodCA9IHJlc29sdmUoXCJyaWdodFwiLCB0cnVlKTtcbiAgICByZXR1cm4gZmxvb3IodHJhY2tSZWN0W2xlZnRdKSA8PSBjZWlsKHNsaWRlUmVjdFtsZWZ0XSkgJiYgZmxvb3Ioc2xpZGVSZWN0W3JpZ2h0XSkgPD0gY2VpbCh0cmFja1JlY3RbcmlnaHRdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzV2l0aGluKGZyb20sIGRpc3RhbmNlKSB7XG4gICAgdmFyIGRpZmYgPSBhYnMoZnJvbSAtIGluZGV4KTtcblxuICAgIGlmICghaXNDbG9uZSAmJiAob3B0aW9ucy5yZXdpbmQgfHwgU3BsaWRlMi5pcyhMT09QKSkpIHtcbiAgICAgIGRpZmYgPSBtaW4oZGlmZiwgU3BsaWRlMi5sZW5ndGggLSBkaWZmKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlmZiA8PSBkaXN0YW5jZTtcbiAgfVxuXG4gIHZhciBzZWxmID0ge1xuICAgIGluZGV4OiBpbmRleCxcbiAgICBzbGlkZUluZGV4OiBzbGlkZUluZGV4LFxuICAgIHNsaWRlOiBzbGlkZSxcbiAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICBpc0Nsb25lOiBpc0Nsb25lLFxuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgIHVwZGF0ZTogdXBkYXRlLFxuICAgIHN0eWxlOiBzdHlsZSQxLFxuICAgIGlzV2l0aGluOiBpc1dpdGhpblxuICB9O1xuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gU2xpZGVzKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2UyID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBvbiA9IF9FdmVudEludGVyZmFjZTIub24sXG4gICAgICBlbWl0ID0gX0V2ZW50SW50ZXJmYWNlMi5lbWl0LFxuICAgICAgYmluZCA9IF9FdmVudEludGVyZmFjZTIuYmluZDtcblxuICB2YXIgX0NvbXBvbmVudHMyJEVsZW1lbnRzID0gQ29tcG9uZW50czIuRWxlbWVudHMsXG4gICAgICBzbGlkZXMgPSBfQ29tcG9uZW50czIkRWxlbWVudHMuc2xpZGVzLFxuICAgICAgbGlzdCA9IF9Db21wb25lbnRzMiRFbGVtZW50cy5saXN0O1xuICB2YXIgU2xpZGVzMiA9IFtdO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGluaXQoKTtcbiAgICBvbihFVkVOVF9SRUZSRVNILCBkZXN0cm95KTtcbiAgICBvbihFVkVOVF9SRUZSRVNILCBpbml0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKHNsaWRlLCBpbmRleCkge1xuICAgICAgcmVnaXN0ZXIoc2xpZGUsIGluZGV4LCAtMSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGZvckVhY2gkMShmdW5jdGlvbiAoU2xpZGUyKSB7XG4gICAgICBTbGlkZTIuZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIGVtcHR5KFNsaWRlczIpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGZvckVhY2gkMShmdW5jdGlvbiAoU2xpZGUyKSB7XG4gICAgICBTbGlkZTIudXBkYXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWdpc3RlcihzbGlkZSwgaW5kZXgsIHNsaWRlSW5kZXgpIHtcbiAgICB2YXIgb2JqZWN0ID0gU2xpZGUkMShTcGxpZGUyLCBpbmRleCwgc2xpZGVJbmRleCwgc2xpZGUpO1xuICAgIG9iamVjdC5tb3VudCgpO1xuICAgIFNsaWRlczIucHVzaChvYmplY3QpO1xuICAgIFNsaWRlczIuc29ydChmdW5jdGlvbiAoU2xpZGUxLCBTbGlkZTIpIHtcbiAgICAgIHJldHVybiBTbGlkZTEuaW5kZXggLSBTbGlkZTIuaW5kZXg7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXQoZXhjbHVkZUNsb25lcykge1xuICAgIHJldHVybiBleGNsdWRlQ2xvbmVzID8gZmlsdGVyKGZ1bmN0aW9uIChTbGlkZTIpIHtcbiAgICAgIHJldHVybiAhU2xpZGUyLmlzQ2xvbmU7XG4gICAgfSkgOiBTbGlkZXMyO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW4ocGFnZSkge1xuICAgIHZhciBDb250cm9sbGVyID0gQ29tcG9uZW50czIuQ29udHJvbGxlcjtcbiAgICB2YXIgaW5kZXggPSBDb250cm9sbGVyLnRvSW5kZXgocGFnZSk7XG4gICAgdmFyIG1heCA9IENvbnRyb2xsZXIuaGFzRm9jdXMoKSA/IDEgOiBvcHRpb25zLnBlclBhZ2U7XG4gICAgcmV0dXJuIGZpbHRlcihmdW5jdGlvbiAoU2xpZGUyKSB7XG4gICAgICByZXR1cm4gYmV0d2VlbihTbGlkZTIuaW5kZXgsIGluZGV4LCBpbmRleCArIG1heCAtIDEpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXQoaW5kZXgpIHtcbiAgICByZXR1cm4gZmlsdGVyKGluZGV4KVswXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZChpdGVtcywgaW5kZXgpIHtcbiAgICBmb3JFYWNoKGl0ZW1zLCBmdW5jdGlvbiAoc2xpZGUpIHtcbiAgICAgIGlmIChpc1N0cmluZyhzbGlkZSkpIHtcbiAgICAgICAgc2xpZGUgPSBwYXJzZUh0bWwoc2xpZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNIVE1MRWxlbWVudChzbGlkZSkpIHtcbiAgICAgICAgdmFyIHJlZiA9IHNsaWRlc1tpbmRleF07XG4gICAgICAgIHJlZiA/IGJlZm9yZShzbGlkZSwgcmVmKSA6IGFwcGVuZChsaXN0LCBzbGlkZSk7XG4gICAgICAgIGFkZENsYXNzKHNsaWRlLCBvcHRpb25zLmNsYXNzZXMuc2xpZGUpO1xuICAgICAgICBvYnNlcnZlSW1hZ2VzKHNsaWRlLCBhcHBseShlbWl0LCBFVkVOVF9SRVNJWkUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBlbWl0KEVWRU5UX1JFRlJFU0gpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlJDEobWF0Y2hlcikge1xuICAgIHJlbW92ZShmaWx0ZXIobWF0Y2hlcikubWFwKGZ1bmN0aW9uIChTbGlkZTIpIHtcbiAgICAgIHJldHVybiBTbGlkZTIuc2xpZGU7XG4gICAgfSkpO1xuICAgIGVtaXQoRVZFTlRfUkVGUkVTSCk7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JFYWNoJDEoaXRlcmF0ZWUsIGV4Y2x1ZGVDbG9uZXMpIHtcbiAgICBnZXQoZXhjbHVkZUNsb25lcykuZm9yRWFjaChpdGVyYXRlZSk7XG4gIH1cblxuICBmdW5jdGlvbiBmaWx0ZXIobWF0Y2hlcikge1xuICAgIHJldHVybiBTbGlkZXMyLmZpbHRlcihpc0Z1bmN0aW9uKG1hdGNoZXIpID8gbWF0Y2hlciA6IGZ1bmN0aW9uIChTbGlkZTIpIHtcbiAgICAgIHJldHVybiBpc1N0cmluZyhtYXRjaGVyKSA/IG1hdGNoZXMoU2xpZGUyLnNsaWRlLCBtYXRjaGVyKSA6IGluY2x1ZGVzKHRvQXJyYXkobWF0Y2hlciksIFNsaWRlMi5pbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdHlsZShwcm9wLCB2YWx1ZSwgdXNlQ29udGFpbmVyKSB7XG4gICAgZm9yRWFjaCQxKGZ1bmN0aW9uIChTbGlkZTIpIHtcbiAgICAgIFNsaWRlMi5zdHlsZShwcm9wLCB2YWx1ZSwgdXNlQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9ic2VydmVJbWFnZXMoZWxtLCBjYWxsYmFjaykge1xuICAgIHZhciBpbWFnZXMgPSBxdWVyeUFsbChlbG0sIFwiaW1nXCIpO1xuICAgIHZhciBsZW5ndGggPSBpbWFnZXMubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCkge1xuICAgICAgaW1hZ2VzLmZvckVhY2goZnVuY3Rpb24gKGltZykge1xuICAgICAgICBiaW5kKGltZywgXCJsb2FkIGVycm9yXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoISAtLWxlbmd0aCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TGVuZ3RoKGV4Y2x1ZGVDbG9uZXMpIHtcbiAgICByZXR1cm4gZXhjbHVkZUNsb25lcyA/IHNsaWRlcy5sZW5ndGggOiBTbGlkZXMyLmxlbmd0aDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRW5vdWdoKCkge1xuICAgIHJldHVybiBTbGlkZXMyLmxlbmd0aCA+IG9wdGlvbnMucGVyUGFnZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgcmVnaXN0ZXI6IHJlZ2lzdGVyLFxuICAgIGdldDogZ2V0LFxuICAgIGdldEluOiBnZXRJbixcbiAgICBnZXRBdDogZ2V0QXQsXG4gICAgYWRkOiBhZGQsXG4gICAgcmVtb3ZlOiByZW1vdmUkMSxcbiAgICBmb3JFYWNoOiBmb3JFYWNoJDEsXG4gICAgZmlsdGVyOiBmaWx0ZXIsXG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIGdldExlbmd0aDogZ2V0TGVuZ3RoLFxuICAgIGlzRW5vdWdoOiBpc0Vub3VnaFxuICB9O1xufVxuXG5mdW5jdGlvbiBMYXlvdXQoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTMgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlMy5vbixcbiAgICAgIGJpbmQgPSBfRXZlbnRJbnRlcmZhY2UzLmJpbmQsXG4gICAgICBlbWl0ID0gX0V2ZW50SW50ZXJmYWNlMy5lbWl0O1xuXG4gIHZhciBTbGlkZXMgPSBDb21wb25lbnRzMi5TbGlkZXM7XG4gIHZhciByZXNvbHZlID0gQ29tcG9uZW50czIuRGlyZWN0aW9uLnJlc29sdmU7XG4gIHZhciBfQ29tcG9uZW50czIkRWxlbWVudHMyID0gQ29tcG9uZW50czIuRWxlbWVudHMsXG4gICAgICByb290ID0gX0NvbXBvbmVudHMyJEVsZW1lbnRzMi5yb290LFxuICAgICAgdHJhY2sgPSBfQ29tcG9uZW50czIkRWxlbWVudHMyLnRyYWNrLFxuICAgICAgbGlzdCA9IF9Db21wb25lbnRzMiRFbGVtZW50czIubGlzdDtcbiAgdmFyIGdldEF0ID0gU2xpZGVzLmdldEF0LFxuICAgICAgc3R5bGVTbGlkZXMgPSBTbGlkZXMuc3R5bGU7XG4gIHZhciB2ZXJ0aWNhbDtcbiAgdmFyIHJvb3RSZWN0O1xuICB2YXIgb3ZlcmZsb3c7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaW5pdCgpO1xuICAgIGJpbmQod2luZG93LCBcInJlc2l6ZSBsb2FkXCIsIFRocm90dGxlKGFwcGx5KGVtaXQsIEVWRU5UX1JFU0laRSkpKTtcbiAgICBvbihbRVZFTlRfVVBEQVRFRCwgRVZFTlRfUkVGUkVTSF0sIGluaXQpO1xuICAgIG9uKEVWRU5UX1JFU0laRSwgcmVzaXplKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmVydGljYWwgPSBvcHRpb25zLmRpcmVjdGlvbiA9PT0gVFRCO1xuICAgIHN0eWxlKHJvb3QsIFwibWF4V2lkdGhcIiwgdW5pdChvcHRpb25zLndpZHRoKSk7XG4gICAgc3R5bGUodHJhY2ssIHJlc29sdmUoXCJwYWRkaW5nTGVmdFwiKSwgY3NzUGFkZGluZyhmYWxzZSkpO1xuICAgIHN0eWxlKHRyYWNrLCByZXNvbHZlKFwicGFkZGluZ1JpZ2h0XCIpLCBjc3NQYWRkaW5nKHRydWUpKTtcbiAgICByZXNpemUodHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNpemUoZm9yY2UpIHtcbiAgICB2YXIgbmV3UmVjdCA9IHJlY3Qocm9vdCk7XG5cbiAgICBpZiAoZm9yY2UgfHwgcm9vdFJlY3Qud2lkdGggIT09IG5ld1JlY3Qud2lkdGggfHwgcm9vdFJlY3QuaGVpZ2h0ICE9PSBuZXdSZWN0LmhlaWdodCkge1xuICAgICAgc3R5bGUodHJhY2ssIFwiaGVpZ2h0XCIsIGNzc1RyYWNrSGVpZ2h0KCkpO1xuICAgICAgc3R5bGVTbGlkZXMocmVzb2x2ZShcIm1hcmdpblJpZ2h0XCIpLCB1bml0KG9wdGlvbnMuZ2FwKSk7XG4gICAgICBzdHlsZVNsaWRlcyhcIndpZHRoXCIsIGNzc1NsaWRlV2lkdGgoKSk7XG4gICAgICBzdHlsZVNsaWRlcyhcImhlaWdodFwiLCBjc3NTbGlkZUhlaWdodCgpLCB0cnVlKTtcbiAgICAgIHJvb3RSZWN0ID0gbmV3UmVjdDtcbiAgICAgIGVtaXQoRVZFTlRfUkVTSVpFRCk7XG5cbiAgICAgIGlmIChvdmVyZmxvdyAhPT0gKG92ZXJmbG93ID0gaXNPdmVyZmxvdygpKSkge1xuICAgICAgICB0b2dnbGVDbGFzcyhyb290LCBDTEFTU19PVkVSRkxPVywgb3ZlcmZsb3cpO1xuICAgICAgICBlbWl0KEVWRU5UX09WRVJGTE9XLCBvdmVyZmxvdyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3NzUGFkZGluZyhyaWdodCkge1xuICAgIHZhciBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nO1xuICAgIHZhciBwcm9wID0gcmVzb2x2ZShyaWdodCA/IFwicmlnaHRcIiA6IFwibGVmdFwiKTtcbiAgICByZXR1cm4gcGFkZGluZyAmJiB1bml0KHBhZGRpbmdbcHJvcF0gfHwgKGlzT2JqZWN0KHBhZGRpbmcpID8gMCA6IHBhZGRpbmcpKSB8fCBcIjBweFwiO1xuICB9XG5cbiAgZnVuY3Rpb24gY3NzVHJhY2tIZWlnaHQoKSB7XG4gICAgdmFyIGhlaWdodCA9IFwiXCI7XG5cbiAgICBpZiAodmVydGljYWwpIHtcbiAgICAgIGhlaWdodCA9IGNzc0hlaWdodCgpO1xuICAgICAgYXNzZXJ0KGhlaWdodCwgXCJoZWlnaHQgb3IgaGVpZ2h0UmF0aW8gaXMgbWlzc2luZy5cIik7XG4gICAgICBoZWlnaHQgPSBcImNhbGMoXCIgKyBoZWlnaHQgKyBcIiAtIFwiICsgY3NzUGFkZGluZyhmYWxzZSkgKyBcIiAtIFwiICsgY3NzUGFkZGluZyh0cnVlKSArIFwiKVwiO1xuICAgIH1cblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjc3NIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHVuaXQob3B0aW9ucy5oZWlnaHQgfHwgcmVjdChsaXN0KS53aWR0aCAqIG9wdGlvbnMuaGVpZ2h0UmF0aW8pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3NzU2xpZGVXaWR0aCgpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5hdXRvV2lkdGggPyBudWxsIDogdW5pdChvcHRpb25zLmZpeGVkV2lkdGgpIHx8ICh2ZXJ0aWNhbCA/IFwiXCIgOiBjc3NTbGlkZVNpemUoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBjc3NTbGlkZUhlaWdodCgpIHtcbiAgICByZXR1cm4gdW5pdChvcHRpb25zLmZpeGVkSGVpZ2h0KSB8fCAodmVydGljYWwgPyBvcHRpb25zLmF1dG9IZWlnaHQgPyBudWxsIDogY3NzU2xpZGVTaXplKCkgOiBjc3NIZWlnaHQoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBjc3NTbGlkZVNpemUoKSB7XG4gICAgdmFyIGdhcCA9IHVuaXQob3B0aW9ucy5nYXApO1xuICAgIHJldHVybiBcImNhbGMoKDEwMCVcIiArIChnYXAgJiYgXCIgKyBcIiArIGdhcCkgKyBcIikvXCIgKyAob3B0aW9ucy5wZXJQYWdlIHx8IDEpICsgKGdhcCAmJiBcIiAtIFwiICsgZ2FwKSArIFwiKVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdFNpemUoKSB7XG4gICAgcmV0dXJuIHJlY3QobGlzdClbcmVzb2x2ZShcIndpZHRoXCIpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNsaWRlU2l6ZShpbmRleCwgd2l0aG91dEdhcCkge1xuICAgIHZhciBTbGlkZSA9IGdldEF0KGluZGV4IHx8IDApO1xuICAgIHJldHVybiBTbGlkZSA/IHJlY3QoU2xpZGUuc2xpZGUpW3Jlc29sdmUoXCJ3aWR0aFwiKV0gKyAod2l0aG91dEdhcCA/IDAgOiBnZXRHYXAoKSkgOiAwO1xuICB9XG5cbiAgZnVuY3Rpb24gdG90YWxTaXplKGluZGV4LCB3aXRob3V0R2FwKSB7XG4gICAgdmFyIFNsaWRlID0gZ2V0QXQoaW5kZXgpO1xuXG4gICAgaWYgKFNsaWRlKSB7XG4gICAgICB2YXIgcmlnaHQgPSByZWN0KFNsaWRlLnNsaWRlKVtyZXNvbHZlKFwicmlnaHRcIildO1xuICAgICAgdmFyIGxlZnQgPSByZWN0KGxpc3QpW3Jlc29sdmUoXCJsZWZ0XCIpXTtcbiAgICAgIHJldHVybiBhYnMocmlnaHQgLSBsZWZ0KSArICh3aXRob3V0R2FwID8gMCA6IGdldEdhcCgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNsaWRlclNpemUod2l0aG91dEdhcCkge1xuICAgIHJldHVybiB0b3RhbFNpemUoU3BsaWRlMi5sZW5ndGggLSAxKSAtIHRvdGFsU2l6ZSgwKSArIHNsaWRlU2l6ZSgwLCB3aXRob3V0R2FwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEdhcCgpIHtcbiAgICB2YXIgU2xpZGUgPSBnZXRBdCgwKTtcbiAgICByZXR1cm4gU2xpZGUgJiYgcGFyc2VGbG9hdChzdHlsZShTbGlkZS5zbGlkZSwgcmVzb2x2ZShcIm1hcmdpblJpZ2h0XCIpKSkgfHwgMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBhZGRpbmcocmlnaHQpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChzdHlsZSh0cmFjaywgcmVzb2x2ZShcInBhZGRpbmdcIiArIChyaWdodCA/IFwiUmlnaHRcIiA6IFwiTGVmdFwiKSkpKSB8fCAwO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNPdmVyZmxvdygpIHtcbiAgICByZXR1cm4gU3BsaWRlMi5pcyhGQURFKSB8fCBzbGlkZXJTaXplKHRydWUpID4gbGlzdFNpemUoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIHJlc2l6ZTogcmVzaXplLFxuICAgIGxpc3RTaXplOiBsaXN0U2l6ZSxcbiAgICBzbGlkZVNpemU6IHNsaWRlU2l6ZSxcbiAgICBzbGlkZXJTaXplOiBzbGlkZXJTaXplLFxuICAgIHRvdGFsU2l6ZTogdG90YWxTaXplLFxuICAgIGdldFBhZGRpbmc6IGdldFBhZGRpbmcsXG4gICAgaXNPdmVyZmxvdzogaXNPdmVyZmxvd1xuICB9O1xufVxuXG52YXIgTVVMVElQTElFUiA9IDI7XG5cbmZ1bmN0aW9uIENsb25lcyhTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgZXZlbnQgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKTtcbiAgdmFyIG9uID0gZXZlbnQub247XG4gIHZhciBFbGVtZW50cyA9IENvbXBvbmVudHMyLkVsZW1lbnRzLFxuICAgICAgU2xpZGVzID0gQ29tcG9uZW50czIuU2xpZGVzO1xuICB2YXIgcmVzb2x2ZSA9IENvbXBvbmVudHMyLkRpcmVjdGlvbi5yZXNvbHZlO1xuICB2YXIgY2xvbmVzID0gW107XG4gIHZhciBjbG9uZUNvdW50O1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIG9uKEVWRU5UX1JFRlJFU0gsIHJlbW91bnQpO1xuICAgIG9uKFtFVkVOVF9VUERBVEVELCBFVkVOVF9SRVNJWkVdLCBvYnNlcnZlKTtcblxuICAgIGlmIChjbG9uZUNvdW50ID0gY29tcHV0ZUNsb25lQ291bnQoKSkge1xuICAgICAgZ2VuZXJhdGUoY2xvbmVDb3VudCk7XG4gICAgICBDb21wb25lbnRzMi5MYXlvdXQucmVzaXplKHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW91bnQoKSB7XG4gICAgZGVzdHJveSgpO1xuICAgIG1vdW50KCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHJlbW92ZShjbG9uZXMpO1xuICAgIGVtcHR5KGNsb25lcyk7XG4gICAgZXZlbnQuZGVzdHJveSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gb2JzZXJ2ZSgpIHtcbiAgICB2YXIgY291bnQgPSBjb21wdXRlQ2xvbmVDb3VudCgpO1xuXG4gICAgaWYgKGNsb25lQ291bnQgIT09IGNvdW50KSB7XG4gICAgICBpZiAoY2xvbmVDb3VudCA8IGNvdW50IHx8ICFjb3VudCkge1xuICAgICAgICBldmVudC5lbWl0KEVWRU5UX1JFRlJFU0gpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlKGNvdW50KSB7XG4gICAgdmFyIHNsaWRlcyA9IFNsaWRlcy5nZXQoKS5zbGljZSgpO1xuICAgIHZhciBsZW5ndGggPSBzbGlkZXMubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCkge1xuICAgICAgd2hpbGUgKHNsaWRlcy5sZW5ndGggPCBjb3VudCkge1xuICAgICAgICBwdXNoKHNsaWRlcywgc2xpZGVzKTtcbiAgICAgIH1cblxuICAgICAgcHVzaChzbGlkZXMuc2xpY2UoLWNvdW50KSwgc2xpZGVzLnNsaWNlKDAsIGNvdW50KSkuZm9yRWFjaChmdW5jdGlvbiAoU2xpZGUsIGluZGV4KSB7XG4gICAgICAgIHZhciBpc0hlYWQgPSBpbmRleCA8IGNvdW50O1xuICAgICAgICB2YXIgY2xvbmUgPSBjbG9uZURlZXAoU2xpZGUuc2xpZGUsIGluZGV4KTtcbiAgICAgICAgaXNIZWFkID8gYmVmb3JlKGNsb25lLCBzbGlkZXNbMF0uc2xpZGUpIDogYXBwZW5kKEVsZW1lbnRzLmxpc3QsIGNsb25lKTtcbiAgICAgICAgcHVzaChjbG9uZXMsIGNsb25lKTtcbiAgICAgICAgU2xpZGVzLnJlZ2lzdGVyKGNsb25lLCBpbmRleCAtIGNvdW50ICsgKGlzSGVhZCA/IDAgOiBsZW5ndGgpLCBTbGlkZS5pbmRleCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbG9uZURlZXAoZWxtLCBpbmRleCkge1xuICAgIHZhciBjbG9uZSA9IGVsbS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgYWRkQ2xhc3MoY2xvbmUsIG9wdGlvbnMuY2xhc3Nlcy5jbG9uZSk7XG4gICAgY2xvbmUuaWQgPSBTcGxpZGUyLnJvb3QuaWQgKyBcIi1jbG9uZVwiICsgcGFkKGluZGV4ICsgMSk7XG4gICAgcmV0dXJuIGNsb25lO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZUNsb25lQ291bnQoKSB7XG4gICAgdmFyIGNsb25lczIgPSBvcHRpb25zLmNsb25lcztcblxuICAgIGlmICghU3BsaWRlMi5pcyhMT09QKSkge1xuICAgICAgY2xvbmVzMiA9IDA7XG4gICAgfSBlbHNlIGlmIChpc1VuZGVmaW5lZChjbG9uZXMyKSkge1xuICAgICAgdmFyIGZpeGVkU2l6ZSA9IG9wdGlvbnNbcmVzb2x2ZShcImZpeGVkV2lkdGhcIildICYmIENvbXBvbmVudHMyLkxheW91dC5zbGlkZVNpemUoMCk7XG4gICAgICB2YXIgZml4ZWRDb3VudCA9IGZpeGVkU2l6ZSAmJiBjZWlsKHJlY3QoRWxlbWVudHMudHJhY2spW3Jlc29sdmUoXCJ3aWR0aFwiKV0gLyBmaXhlZFNpemUpO1xuICAgICAgY2xvbmVzMiA9IGZpeGVkQ291bnQgfHwgb3B0aW9uc1tyZXNvbHZlKFwiYXV0b1dpZHRoXCIpXSAmJiBTcGxpZGUyLmxlbmd0aCB8fCBvcHRpb25zLnBlclBhZ2UgKiBNVUxUSVBMSUVSO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZXMyO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogZGVzdHJveVxuICB9O1xufVxuXG5mdW5jdGlvbiBNb3ZlKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2U0ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBvbiA9IF9FdmVudEludGVyZmFjZTQub24sXG4gICAgICBlbWl0ID0gX0V2ZW50SW50ZXJmYWNlNC5lbWl0O1xuXG4gIHZhciBzZXQgPSBTcGxpZGUyLnN0YXRlLnNldDtcbiAgdmFyIF9Db21wb25lbnRzMiRMYXlvdXQgPSBDb21wb25lbnRzMi5MYXlvdXQsXG4gICAgICBzbGlkZVNpemUgPSBfQ29tcG9uZW50czIkTGF5b3V0LnNsaWRlU2l6ZSxcbiAgICAgIGdldFBhZGRpbmcgPSBfQ29tcG9uZW50czIkTGF5b3V0LmdldFBhZGRpbmcsXG4gICAgICB0b3RhbFNpemUgPSBfQ29tcG9uZW50czIkTGF5b3V0LnRvdGFsU2l6ZSxcbiAgICAgIGxpc3RTaXplID0gX0NvbXBvbmVudHMyJExheW91dC5saXN0U2l6ZSxcbiAgICAgIHNsaWRlclNpemUgPSBfQ29tcG9uZW50czIkTGF5b3V0LnNsaWRlclNpemU7XG4gIHZhciBfQ29tcG9uZW50czIkRGlyZWN0aW8gPSBDb21wb25lbnRzMi5EaXJlY3Rpb24sXG4gICAgICByZXNvbHZlID0gX0NvbXBvbmVudHMyJERpcmVjdGlvLnJlc29sdmUsXG4gICAgICBvcmllbnQgPSBfQ29tcG9uZW50czIkRGlyZWN0aW8ub3JpZW50O1xuICB2YXIgX0NvbXBvbmVudHMyJEVsZW1lbnRzMyA9IENvbXBvbmVudHMyLkVsZW1lbnRzLFxuICAgICAgbGlzdCA9IF9Db21wb25lbnRzMiRFbGVtZW50czMubGlzdCxcbiAgICAgIHRyYWNrID0gX0NvbXBvbmVudHMyJEVsZW1lbnRzMy50cmFjaztcbiAgdmFyIFRyYW5zaXRpb247XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgVHJhbnNpdGlvbiA9IENvbXBvbmVudHMyLlRyYW5zaXRpb247XG4gICAgb24oW0VWRU5UX01PVU5URUQsIEVWRU5UX1JFU0laRUQsIEVWRU5UX1VQREFURUQsIEVWRU5UX1JFRlJFU0hdLCByZXBvc2l0aW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcG9zaXRpb24oKSB7XG4gICAgaWYgKCFDb21wb25lbnRzMi5Db250cm9sbGVyLmlzQnVzeSgpKSB7XG4gICAgICBDb21wb25lbnRzMi5TY3JvbGwuY2FuY2VsKCk7XG4gICAgICBqdW1wKFNwbGlkZTIuaW5kZXgpO1xuICAgICAgQ29tcG9uZW50czIuU2xpZGVzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdmUoZGVzdCwgaW5kZXgsIHByZXYsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGRlc3QgIT09IGluZGV4ICYmIGNhblNoaWZ0KGRlc3QgPiBwcmV2KSkge1xuICAgICAgY2FuY2VsKCk7XG4gICAgICB0cmFuc2xhdGUoc2hpZnQoZ2V0UG9zaXRpb24oKSwgZGVzdCA+IHByZXYpLCB0cnVlKTtcbiAgICB9XG5cbiAgICBzZXQoTU9WSU5HKTtcbiAgICBlbWl0KEVWRU5UX01PVkUsIGluZGV4LCBwcmV2LCBkZXN0KTtcbiAgICBUcmFuc2l0aW9uLnN0YXJ0KGluZGV4LCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXQoSURMRSk7XG4gICAgICBlbWl0KEVWRU5UX01PVkVELCBpbmRleCwgcHJldiwgZGVzdCk7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24ganVtcChpbmRleCkge1xuICAgIHRyYW5zbGF0ZSh0b1Bvc2l0aW9uKGluZGV4LCB0cnVlKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2xhdGUocG9zaXRpb24sIHByZXZlbnRMb29wKSB7XG4gICAgaWYgKCFTcGxpZGUyLmlzKEZBREUpKSB7XG4gICAgICB2YXIgZGVzdGluYXRpb24gPSBwcmV2ZW50TG9vcCA/IHBvc2l0aW9uIDogbG9vcChwb3NpdGlvbik7XG4gICAgICBzdHlsZShsaXN0LCBcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZVwiICsgcmVzb2x2ZShcIlhcIikgKyBcIihcIiArIGRlc3RpbmF0aW9uICsgXCJweClcIik7XG4gICAgICBwb3NpdGlvbiAhPT0gZGVzdGluYXRpb24gJiYgZW1pdChFVkVOVF9TSElGVEVEKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsb29wKHBvc2l0aW9uKSB7XG4gICAgaWYgKFNwbGlkZTIuaXMoTE9PUCkpIHtcbiAgICAgIHZhciBpbmRleCA9IHRvSW5kZXgocG9zaXRpb24pO1xuICAgICAgdmFyIGV4Y2VlZGVkTWF4ID0gaW5kZXggPiBDb21wb25lbnRzMi5Db250cm9sbGVyLmdldEVuZCgpO1xuICAgICAgdmFyIGV4Y2VlZGVkTWluID0gaW5kZXggPCAwO1xuXG4gICAgICBpZiAoZXhjZWVkZWRNaW4gfHwgZXhjZWVkZWRNYXgpIHtcbiAgICAgICAgcG9zaXRpb24gPSBzaGlmdChwb3NpdGlvbiwgZXhjZWVkZWRNYXgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNoaWZ0KHBvc2l0aW9uLCBiYWNrd2FyZHMpIHtcbiAgICB2YXIgZXhjZXNzID0gcG9zaXRpb24gLSBnZXRMaW1pdChiYWNrd2FyZHMpO1xuICAgIHZhciBzaXplID0gc2xpZGVyU2l6ZSgpO1xuICAgIHBvc2l0aW9uIC09IG9yaWVudChzaXplICogKGNlaWwoYWJzKGV4Y2VzcykgLyBzaXplKSB8fCAxKSkgKiAoYmFja3dhcmRzID8gMSA6IC0xKTtcbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgdHJhbnNsYXRlKGdldFBvc2l0aW9uKCksIHRydWUpO1xuICAgIFRyYW5zaXRpb24uY2FuY2VsKCk7XG4gIH1cblxuICBmdW5jdGlvbiB0b0luZGV4KHBvc2l0aW9uKSB7XG4gICAgdmFyIFNsaWRlcyA9IENvbXBvbmVudHMyLlNsaWRlcy5nZXQoKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBtaW5EaXN0YW5jZSA9IEluZmluaXR5O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBTbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzbGlkZUluZGV4ID0gU2xpZGVzW2ldLmluZGV4O1xuICAgICAgdmFyIGRpc3RhbmNlID0gYWJzKHRvUG9zaXRpb24oc2xpZGVJbmRleCwgdHJ1ZSkgLSBwb3NpdGlvbik7XG5cbiAgICAgIGlmIChkaXN0YW5jZSA8PSBtaW5EaXN0YW5jZSkge1xuICAgICAgICBtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICBpbmRleCA9IHNsaWRlSW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiB0b1Bvc2l0aW9uKGluZGV4LCB0cmltbWluZykge1xuICAgIHZhciBwb3NpdGlvbiA9IG9yaWVudCh0b3RhbFNpemUoaW5kZXggLSAxKSAtIG9mZnNldChpbmRleCkpO1xuICAgIHJldHVybiB0cmltbWluZyA/IHRyaW0ocG9zaXRpb24pIDogcG9zaXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQb3NpdGlvbigpIHtcbiAgICB2YXIgbGVmdCA9IHJlc29sdmUoXCJsZWZ0XCIpO1xuICAgIHJldHVybiByZWN0KGxpc3QpW2xlZnRdIC0gcmVjdCh0cmFjaylbbGVmdF0gKyBvcmllbnQoZ2V0UGFkZGluZyhmYWxzZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJpbShwb3NpdGlvbikge1xuICAgIGlmIChvcHRpb25zLnRyaW1TcGFjZSAmJiBTcGxpZGUyLmlzKFNMSURFKSkge1xuICAgICAgcG9zaXRpb24gPSBjbGFtcChwb3NpdGlvbiwgMCwgb3JpZW50KHNsaWRlclNpemUodHJ1ZSkgLSBsaXN0U2l6ZSgpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gb2Zmc2V0KGluZGV4KSB7XG4gICAgdmFyIGZvY3VzID0gb3B0aW9ucy5mb2N1cztcbiAgICByZXR1cm4gZm9jdXMgPT09IFwiY2VudGVyXCIgPyAobGlzdFNpemUoKSAtIHNsaWRlU2l6ZShpbmRleCwgdHJ1ZSkpIC8gMiA6ICtmb2N1cyAqIHNsaWRlU2l6ZShpbmRleCkgfHwgMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExpbWl0KG1heCkge1xuICAgIHJldHVybiB0b1Bvc2l0aW9uKG1heCA/IENvbXBvbmVudHMyLkNvbnRyb2xsZXIuZ2V0RW5kKCkgOiAwLCAhIW9wdGlvbnMudHJpbVNwYWNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhblNoaWZ0KGJhY2t3YXJkcykge1xuICAgIHZhciBzaGlmdGVkID0gb3JpZW50KHNoaWZ0KGdldFBvc2l0aW9uKCksIGJhY2t3YXJkcykpO1xuICAgIHJldHVybiBiYWNrd2FyZHMgPyBzaGlmdGVkID49IDAgOiBzaGlmdGVkIDw9IGxpc3RbcmVzb2x2ZShcInNjcm9sbFdpZHRoXCIpXSAtIHJlY3QodHJhY2spW3Jlc29sdmUoXCJ3aWR0aFwiKV07XG4gIH1cblxuICBmdW5jdGlvbiBleGNlZWRlZExpbWl0KG1heCwgcG9zaXRpb24pIHtcbiAgICBwb3NpdGlvbiA9IGlzVW5kZWZpbmVkKHBvc2l0aW9uKSA/IGdldFBvc2l0aW9uKCkgOiBwb3NpdGlvbjtcbiAgICB2YXIgZXhjZWVkZWRNaW4gPSBtYXggIT09IHRydWUgJiYgb3JpZW50KHBvc2l0aW9uKSA8IG9yaWVudChnZXRMaW1pdChmYWxzZSkpO1xuICAgIHZhciBleGNlZWRlZE1heCA9IG1heCAhPT0gZmFsc2UgJiYgb3JpZW50KHBvc2l0aW9uKSA+IG9yaWVudChnZXRMaW1pdCh0cnVlKSk7XG4gICAgcmV0dXJuIGV4Y2VlZGVkTWluIHx8IGV4Y2VlZGVkTWF4O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgbW92ZTogbW92ZSxcbiAgICBqdW1wOiBqdW1wLFxuICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlLFxuICAgIHNoaWZ0OiBzaGlmdCxcbiAgICBjYW5jZWw6IGNhbmNlbCxcbiAgICB0b0luZGV4OiB0b0luZGV4LFxuICAgIHRvUG9zaXRpb246IHRvUG9zaXRpb24sXG4gICAgZ2V0UG9zaXRpb246IGdldFBvc2l0aW9uLFxuICAgIGdldExpbWl0OiBnZXRMaW1pdCxcbiAgICBleGNlZWRlZExpbWl0OiBleGNlZWRlZExpbWl0LFxuICAgIHJlcG9zaXRpb246IHJlcG9zaXRpb25cbiAgfTtcbn1cblxuZnVuY3Rpb24gQ29udHJvbGxlcihTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlNSA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2U1Lm9uLFxuICAgICAgZW1pdCA9IF9FdmVudEludGVyZmFjZTUuZW1pdDtcblxuICB2YXIgTW92ZSA9IENvbXBvbmVudHMyLk1vdmU7XG4gIHZhciBnZXRQb3NpdGlvbiA9IE1vdmUuZ2V0UG9zaXRpb24sXG4gICAgICBnZXRMaW1pdCA9IE1vdmUuZ2V0TGltaXQsXG4gICAgICB0b1Bvc2l0aW9uID0gTW92ZS50b1Bvc2l0aW9uO1xuICB2YXIgX0NvbXBvbmVudHMyJFNsaWRlcyA9IENvbXBvbmVudHMyLlNsaWRlcyxcbiAgICAgIGlzRW5vdWdoID0gX0NvbXBvbmVudHMyJFNsaWRlcy5pc0Vub3VnaCxcbiAgICAgIGdldExlbmd0aCA9IF9Db21wb25lbnRzMiRTbGlkZXMuZ2V0TGVuZ3RoO1xuICB2YXIgb21pdEVuZCA9IG9wdGlvbnMub21pdEVuZDtcbiAgdmFyIGlzTG9vcCA9IFNwbGlkZTIuaXMoTE9PUCk7XG4gIHZhciBpc1NsaWRlID0gU3BsaWRlMi5pcyhTTElERSk7XG4gIHZhciBnZXROZXh0ID0gYXBwbHkoZ2V0QWRqYWNlbnQsIGZhbHNlKTtcbiAgdmFyIGdldFByZXYgPSBhcHBseShnZXRBZGphY2VudCwgdHJ1ZSk7XG4gIHZhciBjdXJySW5kZXggPSBvcHRpb25zLnN0YXJ0IHx8IDA7XG4gIHZhciBlbmRJbmRleDtcbiAgdmFyIHByZXZJbmRleCA9IGN1cnJJbmRleDtcbiAgdmFyIHNsaWRlQ291bnQ7XG4gIHZhciBwZXJNb3ZlO1xuICB2YXIgcGVyUGFnZTtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpbml0KCk7XG4gICAgb24oW0VWRU5UX1VQREFURUQsIEVWRU5UX1JFRlJFU0gsIEVWRU5UX0VORF9JTkRFWF9DSEFOR0VEXSwgaW5pdCk7XG4gICAgb24oRVZFTlRfUkVTSVpFRCwgb25SZXNpemVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc2xpZGVDb3VudCA9IGdldExlbmd0aCh0cnVlKTtcbiAgICBwZXJNb3ZlID0gb3B0aW9ucy5wZXJNb3ZlO1xuICAgIHBlclBhZ2UgPSBvcHRpb25zLnBlclBhZ2U7XG4gICAgZW5kSW5kZXggPSBnZXRFbmQoKTtcbiAgICB2YXIgaW5kZXggPSBjbGFtcChjdXJySW5kZXgsIDAsIG9taXRFbmQgPyBlbmRJbmRleCA6IHNsaWRlQ291bnQgLSAxKTtcblxuICAgIGlmIChpbmRleCAhPT0gY3VyckluZGV4KSB7XG4gICAgICBjdXJySW5kZXggPSBpbmRleDtcbiAgICAgIE1vdmUucmVwb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUmVzaXplZCgpIHtcbiAgICBpZiAoZW5kSW5kZXggIT09IGdldEVuZCgpKSB7XG4gICAgICBlbWl0KEVWRU5UX0VORF9JTkRFWF9DSEFOR0VEKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnbyhjb250cm9sLCBhbGxvd1NhbWVJbmRleCwgY2FsbGJhY2spIHtcbiAgICBpZiAoIWlzQnVzeSgpKSB7XG4gICAgICB2YXIgZGVzdCA9IHBhcnNlKGNvbnRyb2wpO1xuICAgICAgdmFyIGluZGV4ID0gbG9vcChkZXN0KTtcblxuICAgICAgaWYgKGluZGV4ID4gLTEgJiYgKGFsbG93U2FtZUluZGV4IHx8IGluZGV4ICE9PSBjdXJySW5kZXgpKSB7XG4gICAgICAgIHNldEluZGV4KGluZGV4KTtcbiAgICAgICAgTW92ZS5tb3ZlKGRlc3QsIGluZGV4LCBwcmV2SW5kZXgsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGwoZGVzdGluYXRpb24sIGR1cmF0aW9uLCBzbmFwLCBjYWxsYmFjaykge1xuICAgIENvbXBvbmVudHMyLlNjcm9sbC5zY3JvbGwoZGVzdGluYXRpb24sIGR1cmF0aW9uLCBzbmFwLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW5kZXggPSBsb29wKE1vdmUudG9JbmRleChnZXRQb3NpdGlvbigpKSk7XG4gICAgICBzZXRJbmRleChvbWl0RW5kID8gbWluKGluZGV4LCBlbmRJbmRleCkgOiBpbmRleCk7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2UoY29udHJvbCkge1xuICAgIHZhciBpbmRleCA9IGN1cnJJbmRleDtcblxuICAgIGlmIChpc1N0cmluZyhjb250cm9sKSkge1xuICAgICAgdmFyIF9yZWYgPSBjb250cm9sLm1hdGNoKC8oWytcXC08Pl0pKFxcZCspPy8pIHx8IFtdLFxuICAgICAgICAgIGluZGljYXRvciA9IF9yZWZbMV0sXG4gICAgICAgICAgbnVtYmVyID0gX3JlZlsyXTtcblxuICAgICAgaWYgKGluZGljYXRvciA9PT0gXCIrXCIgfHwgaW5kaWNhdG9yID09PSBcIi1cIikge1xuICAgICAgICBpbmRleCA9IGNvbXB1dGVEZXN0SW5kZXgoY3VyckluZGV4ICsgKyhcIlwiICsgaW5kaWNhdG9yICsgKCtudW1iZXIgfHwgMSkpLCBjdXJySW5kZXgpO1xuICAgICAgfSBlbHNlIGlmIChpbmRpY2F0b3IgPT09IFwiPlwiKSB7XG4gICAgICAgIGluZGV4ID0gbnVtYmVyID8gdG9JbmRleCgrbnVtYmVyKSA6IGdldE5leHQodHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGluZGljYXRvciA9PT0gXCI8XCIpIHtcbiAgICAgICAgaW5kZXggPSBnZXRQcmV2KHRydWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbmRleCA9IGlzTG9vcCA/IGNvbnRyb2wgOiBjbGFtcChjb250cm9sLCAwLCBlbmRJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QWRqYWNlbnQocHJldiwgZGVzdGluYXRpb24pIHtcbiAgICB2YXIgbnVtYmVyID0gcGVyTW92ZSB8fCAoaGFzRm9jdXMoKSA/IDEgOiBwZXJQYWdlKTtcbiAgICB2YXIgZGVzdCA9IGNvbXB1dGVEZXN0SW5kZXgoY3VyckluZGV4ICsgbnVtYmVyICogKHByZXYgPyAtMSA6IDEpLCBjdXJySW5kZXgsICEocGVyTW92ZSB8fCBoYXNGb2N1cygpKSk7XG5cbiAgICBpZiAoZGVzdCA9PT0gLTEgJiYgaXNTbGlkZSkge1xuICAgICAgaWYgKCFhcHByb3hpbWF0ZWx5RXF1YWwoZ2V0UG9zaXRpb24oKSwgZ2V0TGltaXQoIXByZXYpLCAxKSkge1xuICAgICAgICByZXR1cm4gcHJldiA/IDAgOiBlbmRJbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVzdGluYXRpb24gPyBkZXN0IDogbG9vcChkZXN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVEZXN0SW5kZXgoZGVzdCwgZnJvbSwgc25hcFBhZ2UpIHtcbiAgICBpZiAoaXNFbm91Z2goKSB8fCBoYXNGb2N1cygpKSB7XG4gICAgICB2YXIgaW5kZXggPSBjb21wdXRlTW92YWJsZURlc3RJbmRleChkZXN0KTtcblxuICAgICAgaWYgKGluZGV4ICE9PSBkZXN0KSB7XG4gICAgICAgIGZyb20gPSBkZXN0O1xuICAgICAgICBkZXN0ID0gaW5kZXg7XG4gICAgICAgIHNuYXBQYWdlID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChkZXN0IDwgMCB8fCBkZXN0ID4gZW5kSW5kZXgpIHtcbiAgICAgICAgaWYgKCFwZXJNb3ZlICYmIChiZXR3ZWVuKDAsIGRlc3QsIGZyb20sIHRydWUpIHx8IGJldHdlZW4oZW5kSW5kZXgsIGZyb20sIGRlc3QsIHRydWUpKSkge1xuICAgICAgICAgIGRlc3QgPSB0b0luZGV4KHRvUGFnZShkZXN0KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGlzTG9vcCkge1xuICAgICAgICAgICAgZGVzdCA9IHNuYXBQYWdlID8gZGVzdCA8IDAgPyAtKHNsaWRlQ291bnQgJSBwZXJQYWdlIHx8IHBlclBhZ2UpIDogc2xpZGVDb3VudCA6IGRlc3Q7XG4gICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnJld2luZCkge1xuICAgICAgICAgICAgZGVzdCA9IGRlc3QgPCAwID8gZW5kSW5kZXggOiAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXN0ID0gLTE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc25hcFBhZ2UgJiYgZGVzdCAhPT0gZnJvbSkge1xuICAgICAgICAgIGRlc3QgPSB0b0luZGV4KHRvUGFnZShmcm9tKSArIChkZXN0IDwgZnJvbSA/IC0xIDogMSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc3QgPSAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVNb3ZhYmxlRGVzdEluZGV4KGRlc3QpIHtcbiAgICBpZiAoaXNTbGlkZSAmJiBvcHRpb25zLnRyaW1TcGFjZSA9PT0gXCJtb3ZlXCIgJiYgZGVzdCAhPT0gY3VyckluZGV4KSB7XG4gICAgICB2YXIgcG9zaXRpb24gPSBnZXRQb3NpdGlvbigpO1xuXG4gICAgICB3aGlsZSAocG9zaXRpb24gPT09IHRvUG9zaXRpb24oZGVzdCwgdHJ1ZSkgJiYgYmV0d2VlbihkZXN0LCAwLCBTcGxpZGUyLmxlbmd0aCAtIDEsICFvcHRpb25zLnJld2luZCkpIHtcbiAgICAgICAgZGVzdCA8IGN1cnJJbmRleCA/IC0tZGVzdCA6ICsrZGVzdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVzdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvb3AoaW5kZXgpIHtcbiAgICByZXR1cm4gaXNMb29wID8gKGluZGV4ICsgc2xpZGVDb3VudCkgJSBzbGlkZUNvdW50IHx8IDAgOiBpbmRleDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEVuZCgpIHtcbiAgICB2YXIgZW5kID0gc2xpZGVDb3VudCAtIChoYXNGb2N1cygpIHx8IGlzTG9vcCAmJiBwZXJNb3ZlID8gMSA6IHBlclBhZ2UpO1xuXG4gICAgd2hpbGUgKG9taXRFbmQgJiYgZW5kLS0gPiAwKSB7XG4gICAgICBpZiAodG9Qb3NpdGlvbihzbGlkZUNvdW50IC0gMSwgdHJ1ZSkgIT09IHRvUG9zaXRpb24oZW5kLCB0cnVlKSkge1xuICAgICAgICBlbmQrKztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYW1wKGVuZCwgMCwgc2xpZGVDb3VudCAtIDEpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9JbmRleChwYWdlKSB7XG4gICAgcmV0dXJuIGNsYW1wKGhhc0ZvY3VzKCkgPyBwYWdlIDogcGVyUGFnZSAqIHBhZ2UsIDAsIGVuZEluZGV4KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvUGFnZShpbmRleCkge1xuICAgIHJldHVybiBoYXNGb2N1cygpID8gbWluKGluZGV4LCBlbmRJbmRleCkgOiBmbG9vcigoaW5kZXggPj0gZW5kSW5kZXggPyBzbGlkZUNvdW50IC0gMSA6IGluZGV4KSAvIHBlclBhZ2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9EZXN0KGRlc3RpbmF0aW9uKSB7XG4gICAgdmFyIGNsb3Nlc3QgPSBNb3ZlLnRvSW5kZXgoZGVzdGluYXRpb24pO1xuICAgIHJldHVybiBpc1NsaWRlID8gY2xhbXAoY2xvc2VzdCwgMCwgZW5kSW5kZXgpIDogY2xvc2VzdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEluZGV4KGluZGV4KSB7XG4gICAgaWYgKGluZGV4ICE9PSBjdXJySW5kZXgpIHtcbiAgICAgIHByZXZJbmRleCA9IGN1cnJJbmRleDtcbiAgICAgIGN1cnJJbmRleCA9IGluZGV4O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEluZGV4KHByZXYpIHtcbiAgICByZXR1cm4gcHJldiA/IHByZXZJbmRleCA6IGN1cnJJbmRleDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc0ZvY3VzKCkge1xuICAgIHJldHVybiAhaXNVbmRlZmluZWQob3B0aW9ucy5mb2N1cykgfHwgb3B0aW9ucy5pc05hdmlnYXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBpc0J1c3koKSB7XG4gICAgcmV0dXJuIFNwbGlkZTIuc3RhdGUuaXMoW01PVklORywgU0NST0xMSU5HXSkgJiYgISFvcHRpb25zLndhaXRGb3JUcmFuc2l0aW9uO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgZ286IGdvLFxuICAgIHNjcm9sbDogc2Nyb2xsLFxuICAgIGdldE5leHQ6IGdldE5leHQsXG4gICAgZ2V0UHJldjogZ2V0UHJldixcbiAgICBnZXRBZGphY2VudDogZ2V0QWRqYWNlbnQsXG4gICAgZ2V0RW5kOiBnZXRFbmQsXG4gICAgc2V0SW5kZXg6IHNldEluZGV4LFxuICAgIGdldEluZGV4OiBnZXRJbmRleCxcbiAgICB0b0luZGV4OiB0b0luZGV4LFxuICAgIHRvUGFnZTogdG9QYWdlLFxuICAgIHRvRGVzdDogdG9EZXN0LFxuICAgIGhhc0ZvY3VzOiBoYXNGb2N1cyxcbiAgICBpc0J1c3k6IGlzQnVzeVxuICB9O1xufVxuXG52YXIgWE1MX05BTUVfU1BBQ0UgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG52YXIgUEFUSCA9IFwibTE1LjUgMC45MzItNC4zIDQuMzggMTQuNSAxNC42LTE0LjUgMTQuNSA0LjMgNC40IDE0LjYtMTQuNiA0LjQtNC4zLTQuNC00LjQtMTQuNi0xNC42elwiO1xudmFyIFNJWkUgPSA0MDtcblxuZnVuY3Rpb24gQXJyb3dzKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBldmVudCA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpO1xuICB2YXIgb24gPSBldmVudC5vbixcbiAgICAgIGJpbmQgPSBldmVudC5iaW5kLFxuICAgICAgZW1pdCA9IGV2ZW50LmVtaXQ7XG4gIHZhciBjbGFzc2VzID0gb3B0aW9ucy5jbGFzc2VzLFxuICAgICAgaTE4biA9IG9wdGlvbnMuaTE4bjtcbiAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50czIuRWxlbWVudHMsXG4gICAgICBDb250cm9sbGVyID0gQ29tcG9uZW50czIuQ29udHJvbGxlcjtcbiAgdmFyIHBsYWNlaG9sZGVyID0gRWxlbWVudHMuYXJyb3dzLFxuICAgICAgdHJhY2sgPSBFbGVtZW50cy50cmFjaztcbiAgdmFyIHdyYXBwZXIgPSBwbGFjZWhvbGRlcjtcbiAgdmFyIHByZXYgPSBFbGVtZW50cy5wcmV2O1xuICB2YXIgbmV4dCA9IEVsZW1lbnRzLm5leHQ7XG4gIHZhciBjcmVhdGVkO1xuICB2YXIgd3JhcHBlckNsYXNzZXM7XG4gIHZhciBhcnJvd3MgPSB7fTtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpbml0KCk7XG4gICAgb24oRVZFTlRfVVBEQVRFRCwgcmVtb3VudCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdW50KCkge1xuICAgIGRlc3Ryb3koKTtcbiAgICBtb3VudCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgZW5hYmxlZCA9IG9wdGlvbnMuYXJyb3dzO1xuXG4gICAgaWYgKGVuYWJsZWQgJiYgIShwcmV2ICYmIG5leHQpKSB7XG4gICAgICBjcmVhdGVBcnJvd3MoKTtcbiAgICB9XG5cbiAgICBpZiAocHJldiAmJiBuZXh0KSB7XG4gICAgICBhc3NpZ24oYXJyb3dzLCB7XG4gICAgICAgIHByZXY6IHByZXYsXG4gICAgICAgIG5leHQ6IG5leHRcbiAgICAgIH0pO1xuICAgICAgZGlzcGxheSh3cmFwcGVyLCBlbmFibGVkID8gXCJcIiA6IFwibm9uZVwiKTtcbiAgICAgIGFkZENsYXNzKHdyYXBwZXIsIHdyYXBwZXJDbGFzc2VzID0gQ0xBU1NfQVJST1dTICsgXCItLVwiICsgb3B0aW9ucy5kaXJlY3Rpb24pO1xuXG4gICAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgICBsaXN0ZW4oKTtcbiAgICAgICAgdXBkYXRlKCk7XG4gICAgICAgIHNldEF0dHJpYnV0ZShbcHJldiwgbmV4dF0sIEFSSUFfQ09OVFJPTFMsIHRyYWNrLmlkKTtcbiAgICAgICAgZW1pdChFVkVOVF9BUlJPV1NfTU9VTlRFRCwgcHJldiwgbmV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBldmVudC5kZXN0cm95KCk7XG4gICAgcmVtb3ZlQ2xhc3Mod3JhcHBlciwgd3JhcHBlckNsYXNzZXMpO1xuXG4gICAgaWYgKGNyZWF0ZWQpIHtcbiAgICAgIHJlbW92ZShwbGFjZWhvbGRlciA/IFtwcmV2LCBuZXh0XSA6IHdyYXBwZXIpO1xuICAgICAgcHJldiA9IG5leHQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmVBdHRyaWJ1dGUoW3ByZXYsIG5leHRdLCBBTExfQVRUUklCVVRFUyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuKCkge1xuICAgIG9uKFtFVkVOVF9NT1VOVEVELCBFVkVOVF9NT1ZFRCwgRVZFTlRfUkVGUkVTSCwgRVZFTlRfU0NST0xMRUQsIEVWRU5UX0VORF9JTkRFWF9DSEFOR0VEXSwgdXBkYXRlKTtcbiAgICBiaW5kKG5leHQsIFwiY2xpY2tcIiwgYXBwbHkoZ28sIFwiPlwiKSk7XG4gICAgYmluZChwcmV2LCBcImNsaWNrXCIsIGFwcGx5KGdvLCBcIjxcIikpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ28oY29udHJvbCkge1xuICAgIENvbnRyb2xsZXIuZ28oY29udHJvbCwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJvd3MoKSB7XG4gICAgd3JhcHBlciA9IHBsYWNlaG9sZGVyIHx8IGNyZWF0ZShcImRpdlwiLCBjbGFzc2VzLmFycm93cyk7XG4gICAgcHJldiA9IGNyZWF0ZUFycm93KHRydWUpO1xuICAgIG5leHQgPSBjcmVhdGVBcnJvdyhmYWxzZSk7XG4gICAgY3JlYXRlZCA9IHRydWU7XG4gICAgYXBwZW5kKHdyYXBwZXIsIFtwcmV2LCBuZXh0XSk7XG4gICAgIXBsYWNlaG9sZGVyICYmIGJlZm9yZSh3cmFwcGVyLCB0cmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJvdyhwcmV2Mikge1xuICAgIHZhciBhcnJvdyA9IFwiPGJ1dHRvbiBjbGFzcz1cXFwiXCIgKyBjbGFzc2VzLmFycm93ICsgXCIgXCIgKyAocHJldjIgPyBjbGFzc2VzLnByZXYgOiBjbGFzc2VzLm5leHQpICsgXCJcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+PHN2ZyB4bWxucz1cXFwiXCIgKyBYTUxfTkFNRV9TUEFDRSArIFwiXFxcIiB2aWV3Qm94PVxcXCIwIDAgXCIgKyBTSVpFICsgXCIgXCIgKyBTSVpFICsgXCJcXFwiIHdpZHRoPVxcXCJcIiArIFNJWkUgKyBcIlxcXCIgaGVpZ2h0PVxcXCJcIiArIFNJWkUgKyBcIlxcXCIgZm9jdXNhYmxlPVxcXCJmYWxzZVxcXCI+PHBhdGggZD1cXFwiXCIgKyAob3B0aW9ucy5hcnJvd1BhdGggfHwgUEFUSCkgKyBcIlxcXCIgLz5cIjtcbiAgICByZXR1cm4gcGFyc2VIdG1sKGFycm93KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBpZiAocHJldiAmJiBuZXh0KSB7XG4gICAgICB2YXIgaW5kZXggPSBTcGxpZGUyLmluZGV4O1xuICAgICAgdmFyIHByZXZJbmRleCA9IENvbnRyb2xsZXIuZ2V0UHJldigpO1xuICAgICAgdmFyIG5leHRJbmRleCA9IENvbnRyb2xsZXIuZ2V0TmV4dCgpO1xuICAgICAgdmFyIHByZXZMYWJlbCA9IHByZXZJbmRleCA+IC0xICYmIGluZGV4IDwgcHJldkluZGV4ID8gaTE4bi5sYXN0IDogaTE4bi5wcmV2O1xuICAgICAgdmFyIG5leHRMYWJlbCA9IG5leHRJbmRleCA+IC0xICYmIGluZGV4ID4gbmV4dEluZGV4ID8gaTE4bi5maXJzdCA6IGkxOG4ubmV4dDtcbiAgICAgIHByZXYuZGlzYWJsZWQgPSBwcmV2SW5kZXggPCAwO1xuICAgICAgbmV4dC5kaXNhYmxlZCA9IG5leHRJbmRleCA8IDA7XG4gICAgICBzZXRBdHRyaWJ1dGUocHJldiwgQVJJQV9MQUJFTCwgcHJldkxhYmVsKTtcbiAgICAgIHNldEF0dHJpYnV0ZShuZXh0LCBBUklBX0xBQkVMLCBuZXh0TGFiZWwpO1xuICAgICAgZW1pdChFVkVOVF9BUlJPV1NfVVBEQVRFRCwgcHJldiwgbmV4dCwgcHJldkluZGV4LCBuZXh0SW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYXJyb3dzOiBhcnJvd3MsXG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgdXBkYXRlOiB1cGRhdGVcbiAgfTtcbn1cblxudmFyIElOVEVSVkFMX0RBVEFfQVRUUklCVVRFID0gREFUQV9BVFRSSUJVVEUgKyBcIi1pbnRlcnZhbFwiO1xuXG5mdW5jdGlvbiBBdXRvcGxheShTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlNiA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2U2Lm9uLFxuICAgICAgYmluZCA9IF9FdmVudEludGVyZmFjZTYuYmluZCxcbiAgICAgIGVtaXQgPSBfRXZlbnRJbnRlcmZhY2U2LmVtaXQ7XG5cbiAgdmFyIGludGVydmFsID0gUmVxdWVzdEludGVydmFsKG9wdGlvbnMuaW50ZXJ2YWwsIFNwbGlkZTIuZ28uYmluZChTcGxpZGUyLCBcIj5cIiksIG9uQW5pbWF0aW9uRnJhbWUpO1xuICB2YXIgaXNQYXVzZWQgPSBpbnRlcnZhbC5pc1BhdXNlZDtcbiAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50czIuRWxlbWVudHMsXG4gICAgICBfQ29tcG9uZW50czIkRWxlbWVudHM0ID0gQ29tcG9uZW50czIuRWxlbWVudHMsXG4gICAgICByb290ID0gX0NvbXBvbmVudHMyJEVsZW1lbnRzNC5yb290LFxuICAgICAgdG9nZ2xlID0gX0NvbXBvbmVudHMyJEVsZW1lbnRzNC50b2dnbGU7XG4gIHZhciBhdXRvcGxheSA9IG9wdGlvbnMuYXV0b3BsYXk7XG4gIHZhciBob3ZlcmVkO1xuICB2YXIgZm9jdXNlZDtcbiAgdmFyIHN0b3BwZWQgPSBhdXRvcGxheSA9PT0gXCJwYXVzZVwiO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGlmIChhdXRvcGxheSkge1xuICAgICAgbGlzdGVuKCk7XG4gICAgICB0b2dnbGUgJiYgc2V0QXR0cmlidXRlKHRvZ2dsZSwgQVJJQV9DT05UUk9MUywgRWxlbWVudHMudHJhY2suaWQpO1xuICAgICAgc3RvcHBlZCB8fCBwbGF5KCk7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4oKSB7XG4gICAgaWYgKG9wdGlvbnMucGF1c2VPbkhvdmVyKSB7XG4gICAgICBiaW5kKHJvb3QsIFwibW91c2VlbnRlciBtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGhvdmVyZWQgPSBlLnR5cGUgPT09IFwibW91c2VlbnRlclwiO1xuICAgICAgICBhdXRvVG9nZ2xlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5wYXVzZU9uRm9jdXMpIHtcbiAgICAgIGJpbmQocm9vdCwgXCJmb2N1c2luIGZvY3Vzb3V0XCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGZvY3VzZWQgPSBlLnR5cGUgPT09IFwiZm9jdXNpblwiO1xuICAgICAgICBhdXRvVG9nZ2xlKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodG9nZ2xlKSB7XG4gICAgICBiaW5kKHRvZ2dsZSwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0b3BwZWQgPyBwbGF5KCkgOiBwYXVzZSh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uKFtFVkVOVF9NT1ZFLCBFVkVOVF9TQ1JPTEwsIEVWRU5UX1JFRlJFU0hdLCBpbnRlcnZhbC5yZXdpbmQpO1xuICAgIG9uKEVWRU5UX01PVkUsIG9uTW92ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5KCkge1xuICAgIGlmIChpc1BhdXNlZCgpICYmIENvbXBvbmVudHMyLlNsaWRlcy5pc0Vub3VnaCgpKSB7XG4gICAgICBpbnRlcnZhbC5zdGFydCghb3B0aW9ucy5yZXNldFByb2dyZXNzKTtcbiAgICAgIGZvY3VzZWQgPSBob3ZlcmVkID0gc3RvcHBlZCA9IGZhbHNlO1xuICAgICAgdXBkYXRlKCk7XG4gICAgICBlbWl0KEVWRU5UX0FVVE9QTEFZX1BMQVkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdXNlKHN0b3ApIHtcbiAgICBpZiAoc3RvcCA9PT0gdm9pZCAwKSB7XG4gICAgICBzdG9wID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdG9wcGVkID0gISFzdG9wO1xuICAgIHVwZGF0ZSgpO1xuXG4gICAgaWYgKCFpc1BhdXNlZCgpKSB7XG4gICAgICBpbnRlcnZhbC5wYXVzZSgpO1xuICAgICAgZW1pdChFVkVOVF9BVVRPUExBWV9QQVVTRSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYXV0b1RvZ2dsZSgpIHtcbiAgICBpZiAoIXN0b3BwZWQpIHtcbiAgICAgIGhvdmVyZWQgfHwgZm9jdXNlZCA/IHBhdXNlKGZhbHNlKSA6IHBsYXkoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgaWYgKHRvZ2dsZSkge1xuICAgICAgdG9nZ2xlQ2xhc3ModG9nZ2xlLCBDTEFTU19BQ1RJVkUsICFzdG9wcGVkKTtcbiAgICAgIHNldEF0dHJpYnV0ZSh0b2dnbGUsIEFSSUFfTEFCRUwsIG9wdGlvbnMuaTE4bltzdG9wcGVkID8gXCJwbGF5XCIgOiBcInBhdXNlXCJdKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkFuaW1hdGlvbkZyYW1lKHJhdGUpIHtcbiAgICB2YXIgYmFyID0gRWxlbWVudHMuYmFyO1xuICAgIGJhciAmJiBzdHlsZShiYXIsIFwid2lkdGhcIiwgcmF0ZSAqIDEwMCArIFwiJVwiKTtcbiAgICBlbWl0KEVWRU5UX0FVVE9QTEFZX1BMQVlJTkcsIHJhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3ZlKGluZGV4KSB7XG4gICAgdmFyIFNsaWRlID0gQ29tcG9uZW50czIuU2xpZGVzLmdldEF0KGluZGV4KTtcbiAgICBpbnRlcnZhbC5zZXQoU2xpZGUgJiYgK2dldEF0dHJpYnV0ZShTbGlkZS5zbGlkZSwgSU5URVJWQUxfREFUQV9BVFRSSUJVVEUpIHx8IG9wdGlvbnMuaW50ZXJ2YWwpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogaW50ZXJ2YWwuY2FuY2VsLFxuICAgIHBsYXk6IHBsYXksXG4gICAgcGF1c2U6IHBhdXNlLFxuICAgIGlzUGF1c2VkOiBpc1BhdXNlZFxuICB9O1xufVxuXG5mdW5jdGlvbiBDb3ZlcihTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlNyA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2U3Lm9uO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGlmIChvcHRpb25zLmNvdmVyKSB7XG4gICAgICBvbihFVkVOVF9MQVpZTE9BRF9MT0FERUQsIGFwcGx5KHRvZ2dsZSwgdHJ1ZSkpO1xuICAgICAgb24oW0VWRU5UX01PVU5URUQsIEVWRU5UX1VQREFURUQsIEVWRU5UX1JFRlJFU0hdLCBhcHBseShjb3ZlciwgdHJ1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvdmVyKGNvdmVyMikge1xuICAgIENvbXBvbmVudHMyLlNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgdmFyIGltZyA9IGNoaWxkKFNsaWRlLmNvbnRhaW5lciB8fCBTbGlkZS5zbGlkZSwgXCJpbWdcIik7XG5cbiAgICAgIGlmIChpbWcgJiYgaW1nLnNyYykge1xuICAgICAgICB0b2dnbGUoY292ZXIyLCBpbWcsIFNsaWRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZShjb3ZlcjIsIGltZywgU2xpZGUpIHtcbiAgICBTbGlkZS5zdHlsZShcImJhY2tncm91bmRcIiwgY292ZXIyID8gXCJjZW50ZXIvY292ZXIgbm8tcmVwZWF0IHVybChcXFwiXCIgKyBpbWcuc3JjICsgXCJcXFwiKVwiIDogXCJcIiwgdHJ1ZSk7XG4gICAgZGlzcGxheShpbWcsIGNvdmVyMiA/IFwibm9uZVwiIDogXCJcIik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBhcHBseShjb3ZlciwgZmFsc2UpXG4gIH07XG59XG5cbnZhciBCT1VOQ0VfRElGRl9USFJFU0hPTEQgPSAxMDtcbnZhciBCT1VOQ0VfRFVSQVRJT04gPSA2MDA7XG52YXIgRlJJQ1RJT05fRkFDVE9SID0gMC42O1xudmFyIEJBU0VfVkVMT0NJVFkgPSAxLjU7XG52YXIgTUlOX0RVUkFUSU9OID0gODAwO1xuXG5mdW5jdGlvbiBTY3JvbGwoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTggPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlOC5vbixcbiAgICAgIGVtaXQgPSBfRXZlbnRJbnRlcmZhY2U4LmVtaXQ7XG5cbiAgdmFyIHNldCA9IFNwbGlkZTIuc3RhdGUuc2V0O1xuICB2YXIgTW92ZSA9IENvbXBvbmVudHMyLk1vdmU7XG4gIHZhciBnZXRQb3NpdGlvbiA9IE1vdmUuZ2V0UG9zaXRpb24sXG4gICAgICBnZXRMaW1pdCA9IE1vdmUuZ2V0TGltaXQsXG4gICAgICBleGNlZWRlZExpbWl0ID0gTW92ZS5leGNlZWRlZExpbWl0LFxuICAgICAgdHJhbnNsYXRlID0gTW92ZS50cmFuc2xhdGU7XG4gIHZhciBpc1NsaWRlID0gU3BsaWRlMi5pcyhTTElERSk7XG4gIHZhciBpbnRlcnZhbDtcbiAgdmFyIGNhbGxiYWNrO1xuICB2YXIgZnJpY3Rpb24gPSAxO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIG9uKEVWRU5UX01PVkUsIGNsZWFyKTtcbiAgICBvbihbRVZFTlRfVVBEQVRFRCwgRVZFTlRfUkVGUkVTSF0sIGNhbmNlbCk7XG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGwoZGVzdGluYXRpb24sIGR1cmF0aW9uLCBzbmFwLCBvblNjcm9sbGVkLCBub0NvbnN0cmFpbikge1xuICAgIHZhciBmcm9tID0gZ2V0UG9zaXRpb24oKTtcbiAgICBjbGVhcigpO1xuXG4gICAgaWYgKHNuYXAgJiYgKCFpc1NsaWRlIHx8ICFleGNlZWRlZExpbWl0KCkpKSB7XG4gICAgICB2YXIgc2l6ZSA9IENvbXBvbmVudHMyLkxheW91dC5zbGlkZXJTaXplKCk7XG4gICAgICB2YXIgb2Zmc2V0ID0gc2lnbihkZXN0aW5hdGlvbikgKiBzaXplICogZmxvb3IoYWJzKGRlc3RpbmF0aW9uKSAvIHNpemUpIHx8IDA7XG4gICAgICBkZXN0aW5hdGlvbiA9IE1vdmUudG9Qb3NpdGlvbihDb21wb25lbnRzMi5Db250cm9sbGVyLnRvRGVzdChkZXN0aW5hdGlvbiAlIHNpemUpKSArIG9mZnNldDtcbiAgICB9XG5cbiAgICB2YXIgbm9EaXN0YW5jZSA9IGFwcHJveGltYXRlbHlFcXVhbChmcm9tLCBkZXN0aW5hdGlvbiwgMSk7XG4gICAgZnJpY3Rpb24gPSAxO1xuICAgIGR1cmF0aW9uID0gbm9EaXN0YW5jZSA/IDAgOiBkdXJhdGlvbiB8fCBtYXgoYWJzKGRlc3RpbmF0aW9uIC0gZnJvbSkgLyBCQVNFX1ZFTE9DSVRZLCBNSU5fRFVSQVRJT04pO1xuICAgIGNhbGxiYWNrID0gb25TY3JvbGxlZDtcbiAgICBpbnRlcnZhbCA9IFJlcXVlc3RJbnRlcnZhbChkdXJhdGlvbiwgb25FbmQsIGFwcGx5KHVwZGF0ZSwgZnJvbSwgZGVzdGluYXRpb24sIG5vQ29uc3RyYWluKSwgMSk7XG4gICAgc2V0KFNDUk9MTElORyk7XG4gICAgZW1pdChFVkVOVF9TQ1JPTEwpO1xuICAgIGludGVydmFsLnN0YXJ0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkVuZCgpIHtcbiAgICBzZXQoSURMRSk7XG4gICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcbiAgICBlbWl0KEVWRU5UX1NDUk9MTEVEKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZShmcm9tLCB0bywgbm9Db25zdHJhaW4sIHJhdGUpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBnZXRQb3NpdGlvbigpO1xuICAgIHZhciB0YXJnZXQgPSBmcm9tICsgKHRvIC0gZnJvbSkgKiBlYXNpbmcocmF0ZSk7XG4gICAgdmFyIGRpZmYgPSAodGFyZ2V0IC0gcG9zaXRpb24pICogZnJpY3Rpb247XG4gICAgdHJhbnNsYXRlKHBvc2l0aW9uICsgZGlmZik7XG5cbiAgICBpZiAoaXNTbGlkZSAmJiAhbm9Db25zdHJhaW4gJiYgZXhjZWVkZWRMaW1pdCgpKSB7XG4gICAgICBmcmljdGlvbiAqPSBGUklDVElPTl9GQUNUT1I7XG5cbiAgICAgIGlmIChhYnMoZGlmZikgPCBCT1VOQ0VfRElGRl9USFJFU0hPTEQpIHtcbiAgICAgICAgc2Nyb2xsKGdldExpbWl0KGV4Y2VlZGVkTGltaXQodHJ1ZSkpLCBCT1VOQ0VfRFVSQVRJT04sIGZhbHNlLCBjYWxsYmFjaywgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgaWYgKGludGVydmFsKSB7XG4gICAgICBpbnRlcnZhbC5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKGludGVydmFsICYmICFpbnRlcnZhbC5pc1BhdXNlZCgpKSB7XG4gICAgICBjbGVhcigpO1xuICAgICAgb25FbmQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlYXNpbmcodCkge1xuICAgIHZhciBlYXNpbmdGdW5jID0gb3B0aW9ucy5lYXNpbmdGdW5jO1xuICAgIHJldHVybiBlYXNpbmdGdW5jID8gZWFzaW5nRnVuYyh0KSA6IDEgLSBNYXRoLnBvdygxIC0gdCwgNCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBjbGVhcixcbiAgICBzY3JvbGw6IHNjcm9sbCxcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufVxuXG52YXIgU0NST0xMX0xJU1RFTkVSX09QVElPTlMgPSB7XG4gIHBhc3NpdmU6IGZhbHNlLFxuICBjYXB0dXJlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBEcmFnKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2U5ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBvbiA9IF9FdmVudEludGVyZmFjZTkub24sXG4gICAgICBlbWl0ID0gX0V2ZW50SW50ZXJmYWNlOS5lbWl0LFxuICAgICAgYmluZCA9IF9FdmVudEludGVyZmFjZTkuYmluZCxcbiAgICAgIHVuYmluZCA9IF9FdmVudEludGVyZmFjZTkudW5iaW5kO1xuXG4gIHZhciBzdGF0ZSA9IFNwbGlkZTIuc3RhdGU7XG4gIHZhciBNb3ZlID0gQ29tcG9uZW50czIuTW92ZSxcbiAgICAgIFNjcm9sbCA9IENvbXBvbmVudHMyLlNjcm9sbCxcbiAgICAgIENvbnRyb2xsZXIgPSBDb21wb25lbnRzMi5Db250cm9sbGVyLFxuICAgICAgdHJhY2sgPSBDb21wb25lbnRzMi5FbGVtZW50cy50cmFjayxcbiAgICAgIHJlZHVjZSA9IENvbXBvbmVudHMyLk1lZGlhLnJlZHVjZTtcbiAgdmFyIF9Db21wb25lbnRzMiREaXJlY3RpbzIgPSBDb21wb25lbnRzMi5EaXJlY3Rpb24sXG4gICAgICByZXNvbHZlID0gX0NvbXBvbmVudHMyJERpcmVjdGlvMi5yZXNvbHZlLFxuICAgICAgb3JpZW50ID0gX0NvbXBvbmVudHMyJERpcmVjdGlvMi5vcmllbnQ7XG4gIHZhciBnZXRQb3NpdGlvbiA9IE1vdmUuZ2V0UG9zaXRpb24sXG4gICAgICBleGNlZWRlZExpbWl0ID0gTW92ZS5leGNlZWRlZExpbWl0O1xuICB2YXIgYmFzZVBvc2l0aW9uO1xuICB2YXIgYmFzZUV2ZW50O1xuICB2YXIgcHJldkJhc2VFdmVudDtcbiAgdmFyIGlzRnJlZTtcbiAgdmFyIGRyYWdnaW5nO1xuICB2YXIgZXhjZWVkZWQgPSBmYWxzZTtcbiAgdmFyIGNsaWNrUHJldmVudGVkO1xuICB2YXIgZGlzYWJsZWQ7XG4gIHZhciB0YXJnZXQ7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgYmluZCh0cmFjaywgUE9JTlRFUl9NT1ZFX0VWRU5UUywgbm9vcCwgU0NST0xMX0xJU1RFTkVSX09QVElPTlMpO1xuICAgIGJpbmQodHJhY2ssIFBPSU5URVJfVVBfRVZFTlRTLCBub29wLCBTQ1JPTExfTElTVEVORVJfT1BUSU9OUyk7XG4gICAgYmluZCh0cmFjaywgUE9JTlRFUl9ET1dOX0VWRU5UUywgb25Qb2ludGVyRG93biwgU0NST0xMX0xJU1RFTkVSX09QVElPTlMpO1xuICAgIGJpbmQodHJhY2ssIFwiY2xpY2tcIiwgb25DbGljaywge1xuICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgIH0pO1xuICAgIGJpbmQodHJhY2ssIFwiZHJhZ3N0YXJ0XCIsIHByZXZlbnQpO1xuICAgIG9uKFtFVkVOVF9NT1VOVEVELCBFVkVOVF9VUERBVEVEXSwgaW5pdCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBkcmFnID0gb3B0aW9ucy5kcmFnO1xuICAgIGRpc2FibGUoIWRyYWcpO1xuICAgIGlzRnJlZSA9IGRyYWcgPT09IFwiZnJlZVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Qb2ludGVyRG93bihlKSB7XG4gICAgY2xpY2tQcmV2ZW50ZWQgPSBmYWxzZTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHZhciBpc1RvdWNoID0gaXNUb3VjaEV2ZW50KGUpO1xuXG4gICAgICBpZiAoaXNEcmFnZ2FibGUoZS50YXJnZXQpICYmIChpc1RvdWNoIHx8ICFlLmJ1dHRvbikpIHtcbiAgICAgICAgaWYgKCFDb250cm9sbGVyLmlzQnVzeSgpKSB7XG4gICAgICAgICAgdGFyZ2V0ID0gaXNUb3VjaCA/IHRyYWNrIDogd2luZG93O1xuICAgICAgICAgIGRyYWdnaW5nID0gc3RhdGUuaXMoW01PVklORywgU0NST0xMSU5HXSk7XG4gICAgICAgICAgcHJldkJhc2VFdmVudCA9IG51bGw7XG4gICAgICAgICAgYmluZCh0YXJnZXQsIFBPSU5URVJfTU9WRV9FVkVOVFMsIG9uUG9pbnRlck1vdmUsIFNDUk9MTF9MSVNURU5FUl9PUFRJT05TKTtcbiAgICAgICAgICBiaW5kKHRhcmdldCwgUE9JTlRFUl9VUF9FVkVOVFMsIG9uUG9pbnRlclVwLCBTQ1JPTExfTElTVEVORVJfT1BUSU9OUyk7XG4gICAgICAgICAgTW92ZS5jYW5jZWwoKTtcbiAgICAgICAgICBTY3JvbGwuY2FuY2VsKCk7XG4gICAgICAgICAgc2F2ZShlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2ZW50KGUsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Qb2ludGVyTW92ZShlKSB7XG4gICAgaWYgKCFzdGF0ZS5pcyhEUkFHR0lORykpIHtcbiAgICAgIHN0YXRlLnNldChEUkFHR0lORyk7XG4gICAgICBlbWl0KEVWRU5UX0RSQUcpO1xuICAgIH1cblxuICAgIGlmIChlLmNhbmNlbGFibGUpIHtcbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICBNb3ZlLnRyYW5zbGF0ZShiYXNlUG9zaXRpb24gKyBjb25zdHJhaW4oZGlmZkNvb3JkKGUpKSk7XG4gICAgICAgIHZhciBleHBpcmVkID0gZGlmZlRpbWUoZSkgPiBMT0dfSU5URVJWQUw7XG4gICAgICAgIHZhciBoYXNFeGNlZWRlZCA9IGV4Y2VlZGVkICE9PSAoZXhjZWVkZWQgPSBleGNlZWRlZExpbWl0KCkpO1xuXG4gICAgICAgIGlmIChleHBpcmVkIHx8IGhhc0V4Y2VlZGVkKSB7XG4gICAgICAgICAgc2F2ZShlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsaWNrUHJldmVudGVkID0gdHJ1ZTtcbiAgICAgICAgZW1pdChFVkVOVF9EUkFHR0lORyk7XG4gICAgICAgIHByZXZlbnQoZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzU2xpZGVyRGlyZWN0aW9uKGUpKSB7XG4gICAgICAgIGRyYWdnaW5nID0gc2hvdWxkU3RhcnQoZSk7XG4gICAgICAgIHByZXZlbnQoZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Qb2ludGVyVXAoZSkge1xuICAgIGlmIChzdGF0ZS5pcyhEUkFHR0lORykpIHtcbiAgICAgIHN0YXRlLnNldChJRExFKTtcbiAgICAgIGVtaXQoRVZFTlRfRFJBR0dFRCk7XG4gICAgfVxuXG4gICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICBtb3ZlKGUpO1xuICAgICAgcHJldmVudChlKTtcbiAgICB9XG5cbiAgICB1bmJpbmQodGFyZ2V0LCBQT0lOVEVSX01PVkVfRVZFTlRTLCBvblBvaW50ZXJNb3ZlKTtcbiAgICB1bmJpbmQodGFyZ2V0LCBQT0lOVEVSX1VQX0VWRU5UUywgb25Qb2ludGVyVXApO1xuICAgIGRyYWdnaW5nID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICBpZiAoIWRpc2FibGVkICYmIGNsaWNrUHJldmVudGVkKSB7XG4gICAgICBwcmV2ZW50KGUsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNhdmUoZSkge1xuICAgIHByZXZCYXNlRXZlbnQgPSBiYXNlRXZlbnQ7XG4gICAgYmFzZUV2ZW50ID0gZTtcbiAgICBiYXNlUG9zaXRpb24gPSBnZXRQb3NpdGlvbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gbW92ZShlKSB7XG4gICAgdmFyIHZlbG9jaXR5ID0gY29tcHV0ZVZlbG9jaXR5KGUpO1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IGNvbXB1dGVEZXN0aW5hdGlvbih2ZWxvY2l0eSk7XG4gICAgdmFyIHJld2luZCA9IG9wdGlvbnMucmV3aW5kICYmIG9wdGlvbnMucmV3aW5kQnlEcmFnO1xuICAgIHJlZHVjZShmYWxzZSk7XG5cbiAgICBpZiAoaXNGcmVlKSB7XG4gICAgICBDb250cm9sbGVyLnNjcm9sbChkZXN0aW5hdGlvbiwgMCwgb3B0aW9ucy5zbmFwKTtcbiAgICB9IGVsc2UgaWYgKFNwbGlkZTIuaXMoRkFERSkpIHtcbiAgICAgIENvbnRyb2xsZXIuZ28ob3JpZW50KHNpZ24odmVsb2NpdHkpKSA8IDAgPyByZXdpbmQgPyBcIjxcIiA6IFwiLVwiIDogcmV3aW5kID8gXCI+XCIgOiBcIitcIik7XG4gICAgfSBlbHNlIGlmIChTcGxpZGUyLmlzKFNMSURFKSAmJiBleGNlZWRlZCAmJiByZXdpbmQpIHtcbiAgICAgIENvbnRyb2xsZXIuZ28oZXhjZWVkZWRMaW1pdCh0cnVlKSA/IFwiPlwiIDogXCI8XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBDb250cm9sbGVyLmdvKENvbnRyb2xsZXIudG9EZXN0KGRlc3RpbmF0aW9uKSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmVkdWNlKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkU3RhcnQoZSkge1xuICAgIHZhciB0aHJlc2hvbGRzID0gb3B0aW9ucy5kcmFnTWluVGhyZXNob2xkO1xuICAgIHZhciBpc09iaiA9IGlzT2JqZWN0KHRocmVzaG9sZHMpO1xuICAgIHZhciBtb3VzZSA9IGlzT2JqICYmIHRocmVzaG9sZHMubW91c2UgfHwgMDtcbiAgICB2YXIgdG91Y2ggPSAoaXNPYmogPyB0aHJlc2hvbGRzLnRvdWNoIDogK3RocmVzaG9sZHMpIHx8IDEwO1xuICAgIHJldHVybiBhYnMoZGlmZkNvb3JkKGUpKSA+IChpc1RvdWNoRXZlbnQoZSkgPyB0b3VjaCA6IG1vdXNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU2xpZGVyRGlyZWN0aW9uKGUpIHtcbiAgICByZXR1cm4gYWJzKGRpZmZDb29yZChlKSkgPiBhYnMoZGlmZkNvb3JkKGUsIHRydWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbXB1dGVWZWxvY2l0eShlKSB7XG4gICAgaWYgKFNwbGlkZTIuaXMoTE9PUCkgfHwgIWV4Y2VlZGVkKSB7XG4gICAgICB2YXIgdGltZSA9IGRpZmZUaW1lKGUpO1xuXG4gICAgICBpZiAodGltZSAmJiB0aW1lIDwgTE9HX0lOVEVSVkFMKSB7XG4gICAgICAgIHJldHVybiBkaWZmQ29vcmQoZSkgLyB0aW1lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZURlc3RpbmF0aW9uKHZlbG9jaXR5KSB7XG4gICAgcmV0dXJuIGdldFBvc2l0aW9uKCkgKyBzaWduKHZlbG9jaXR5KSAqIG1pbihhYnModmVsb2NpdHkpICogKG9wdGlvbnMuZmxpY2tQb3dlciB8fCA2MDApLCBpc0ZyZWUgPyBJbmZpbml0eSA6IENvbXBvbmVudHMyLkxheW91dC5saXN0U2l6ZSgpICogKG9wdGlvbnMuZmxpY2tNYXhQYWdlcyB8fCAxKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkaWZmQ29vcmQoZSwgb3J0aG9nb25hbCkge1xuICAgIHJldHVybiBjb29yZE9mKGUsIG9ydGhvZ29uYWwpIC0gY29vcmRPZihnZXRCYXNlRXZlbnQoZSksIG9ydGhvZ29uYWwpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlmZlRpbWUoZSkge1xuICAgIHJldHVybiB0aW1lT2YoZSkgLSB0aW1lT2YoZ2V0QmFzZUV2ZW50KGUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEJhc2VFdmVudChlKSB7XG4gICAgcmV0dXJuIGJhc2VFdmVudCA9PT0gZSAmJiBwcmV2QmFzZUV2ZW50IHx8IGJhc2VFdmVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvb3JkT2YoZSwgb3J0aG9nb25hbCkge1xuICAgIHJldHVybiAoaXNUb3VjaEV2ZW50KGUpID8gZS5jaGFuZ2VkVG91Y2hlc1swXSA6IGUpW1wicGFnZVwiICsgcmVzb2x2ZShvcnRob2dvbmFsID8gXCJZXCIgOiBcIlhcIildO1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3RyYWluKGRpZmYpIHtcbiAgICByZXR1cm4gZGlmZiAvIChleGNlZWRlZCAmJiBTcGxpZGUyLmlzKFNMSURFKSA/IEZSSUNUSU9OIDogMSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0RyYWdnYWJsZSh0YXJnZXQyKSB7XG4gICAgdmFyIG5vRHJhZyA9IG9wdGlvbnMubm9EcmFnO1xuICAgIHJldHVybiAhbWF0Y2hlcyh0YXJnZXQyLCBcIi5cIiArIENMQVNTX1BBR0lOQVRJT05fUEFHRSArIFwiLCAuXCIgKyBDTEFTU19BUlJPVykgJiYgKCFub0RyYWcgfHwgIW1hdGNoZXModGFyZ2V0Miwgbm9EcmFnKSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1RvdWNoRXZlbnQoZSkge1xuICAgIHJldHVybiB0eXBlb2YgVG91Y2hFdmVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBlIGluc3RhbmNlb2YgVG91Y2hFdmVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRHJhZ2dpbmcoKSB7XG4gICAgcmV0dXJuIGRyYWdnaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzYWJsZSh2YWx1ZSkge1xuICAgIGRpc2FibGVkID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBkaXNhYmxlOiBkaXNhYmxlLFxuICAgIGlzRHJhZ2dpbmc6IGlzRHJhZ2dpbmdcbiAgfTtcbn1cblxudmFyIE5PUk1BTElaQVRJT05fTUFQID0ge1xuICBTcGFjZWJhcjogXCIgXCIsXG4gIFJpZ2h0OiBBUlJPV19SSUdIVCxcbiAgTGVmdDogQVJST1dfTEVGVCxcbiAgVXA6IEFSUk9XX1VQLFxuICBEb3duOiBBUlJPV19ET1dOXG59O1xuXG5mdW5jdGlvbiBub3JtYWxpemVLZXkoa2V5KSB7XG4gIGtleSA9IGlzU3RyaW5nKGtleSkgPyBrZXkgOiBrZXkua2V5O1xuICByZXR1cm4gTk9STUFMSVpBVElPTl9NQVBba2V5XSB8fCBrZXk7XG59XG5cbnZhciBLRVlCT0FSRF9FVkVOVCA9IFwia2V5ZG93blwiO1xuXG5mdW5jdGlvbiBLZXlib2FyZChTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlMTAgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlMTAub24sXG4gICAgICBiaW5kID0gX0V2ZW50SW50ZXJmYWNlMTAuYmluZCxcbiAgICAgIHVuYmluZCA9IF9FdmVudEludGVyZmFjZTEwLnVuYmluZDtcblxuICB2YXIgcm9vdCA9IFNwbGlkZTIucm9vdDtcbiAgdmFyIHJlc29sdmUgPSBDb21wb25lbnRzMi5EaXJlY3Rpb24ucmVzb2x2ZTtcbiAgdmFyIHRhcmdldDtcbiAgdmFyIGRpc2FibGVkO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGluaXQoKTtcbiAgICBvbihFVkVOVF9VUERBVEVELCBkZXN0cm95KTtcbiAgICBvbihFVkVOVF9VUERBVEVELCBpbml0KTtcbiAgICBvbihFVkVOVF9NT1ZFLCBvbk1vdmUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIga2V5Ym9hcmQgPSBvcHRpb25zLmtleWJvYXJkO1xuXG4gICAgaWYgKGtleWJvYXJkKSB7XG4gICAgICB0YXJnZXQgPSBrZXlib2FyZCA9PT0gXCJnbG9iYWxcIiA/IHdpbmRvdyA6IHJvb3Q7XG4gICAgICBiaW5kKHRhcmdldCwgS0VZQk9BUkRfRVZFTlQsIG9uS2V5ZG93bik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB1bmJpbmQodGFyZ2V0LCBLRVlCT0FSRF9FVkVOVCk7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlKHZhbHVlKSB7XG4gICAgZGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW92ZSgpIHtcbiAgICB2YXIgX2Rpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgIG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGRpc2FibGVkID0gX2Rpc2FibGVkO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb25LZXlkb3duKGUpIHtcbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICB2YXIga2V5ID0gbm9ybWFsaXplS2V5KGUpO1xuXG4gICAgICBpZiAoa2V5ID09PSByZXNvbHZlKEFSUk9XX0xFRlQpKSB7XG4gICAgICAgIFNwbGlkZTIuZ28oXCI8XCIpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09IHJlc29sdmUoQVJST1dfUklHSFQpKSB7XG4gICAgICAgIFNwbGlkZTIuZ28oXCI+XCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgZGlzYWJsZTogZGlzYWJsZVxuICB9O1xufVxuXG52YXIgU1JDX0RBVEFfQVRUUklCVVRFID0gREFUQV9BVFRSSUJVVEUgKyBcIi1sYXp5XCI7XG52YXIgU1JDU0VUX0RBVEFfQVRUUklCVVRFID0gU1JDX0RBVEFfQVRUUklCVVRFICsgXCItc3Jjc2V0XCI7XG52YXIgSU1BR0VfU0VMRUNUT1IgPSBcIltcIiArIFNSQ19EQVRBX0FUVFJJQlVURSArIFwiXSwgW1wiICsgU1JDU0VUX0RBVEFfQVRUUklCVVRFICsgXCJdXCI7XG5cbmZ1bmN0aW9uIExhenlMb2FkKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2UxMSA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2UxMS5vbixcbiAgICAgIG9mZiA9IF9FdmVudEludGVyZmFjZTExLm9mZixcbiAgICAgIGJpbmQgPSBfRXZlbnRJbnRlcmZhY2UxMS5iaW5kLFxuICAgICAgZW1pdCA9IF9FdmVudEludGVyZmFjZTExLmVtaXQ7XG5cbiAgdmFyIGlzU2VxdWVudGlhbCA9IG9wdGlvbnMubGF6eUxvYWQgPT09IFwic2VxdWVudGlhbFwiO1xuICB2YXIgZXZlbnRzID0gW0VWRU5UX01PVkVELCBFVkVOVF9TQ1JPTExFRF07XG4gIHZhciBlbnRyaWVzID0gW107XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaWYgKG9wdGlvbnMubGF6eUxvYWQpIHtcbiAgICAgIGluaXQoKTtcbiAgICAgIG9uKEVWRU5UX1JFRlJFU0gsIGluaXQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgZW1wdHkoZW50cmllcyk7XG4gICAgcmVnaXN0ZXIoKTtcblxuICAgIGlmIChpc1NlcXVlbnRpYWwpIHtcbiAgICAgIGxvYWROZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZihldmVudHMpO1xuICAgICAgb24oZXZlbnRzLCBjaGVjayk7XG4gICAgICBjaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyKCkge1xuICAgIENvbXBvbmVudHMyLlNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgcXVlcnlBbGwoU2xpZGUuc2xpZGUsIElNQUdFX1NFTEVDVE9SKS5mb3JFYWNoKGZ1bmN0aW9uIChpbWcpIHtcbiAgICAgICAgdmFyIHNyYyA9IGdldEF0dHJpYnV0ZShpbWcsIFNSQ19EQVRBX0FUVFJJQlVURSk7XG4gICAgICAgIHZhciBzcmNzZXQgPSBnZXRBdHRyaWJ1dGUoaW1nLCBTUkNTRVRfREFUQV9BVFRSSUJVVEUpO1xuXG4gICAgICAgIGlmIChzcmMgIT09IGltZy5zcmMgfHwgc3Jjc2V0ICE9PSBpbWcuc3Jjc2V0KSB7XG4gICAgICAgICAgdmFyIGNsYXNzTmFtZSA9IG9wdGlvbnMuY2xhc3Nlcy5zcGlubmVyO1xuICAgICAgICAgIHZhciBwYXJlbnQgPSBpbWcucGFyZW50RWxlbWVudDtcbiAgICAgICAgICB2YXIgc3Bpbm5lciA9IGNoaWxkKHBhcmVudCwgXCIuXCIgKyBjbGFzc05hbWUpIHx8IGNyZWF0ZShcInNwYW5cIiwgY2xhc3NOYW1lLCBwYXJlbnQpO1xuICAgICAgICAgIGVudHJpZXMucHVzaChbaW1nLCBTbGlkZSwgc3Bpbm5lcl0pO1xuICAgICAgICAgIGltZy5zcmMgfHwgZGlzcGxheShpbWcsIFwibm9uZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjaGVjaygpIHtcbiAgICBlbnRyaWVzID0gZW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHZhciBkaXN0YW5jZSA9IG9wdGlvbnMucGVyUGFnZSAqICgob3B0aW9ucy5wcmVsb2FkUGFnZXMgfHwgMSkgKyAxKSAtIDE7XG4gICAgICByZXR1cm4gZGF0YVsxXS5pc1dpdGhpbihTcGxpZGUyLmluZGV4LCBkaXN0YW5jZSkgPyBsb2FkKGRhdGEpIDogdHJ1ZTtcbiAgICB9KTtcbiAgICBlbnRyaWVzLmxlbmd0aCB8fCBvZmYoZXZlbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvYWQoZGF0YSkge1xuICAgIHZhciBpbWcgPSBkYXRhWzBdO1xuICAgIGFkZENsYXNzKGRhdGFbMV0uc2xpZGUsIENMQVNTX0xPQURJTkcpO1xuICAgIGJpbmQoaW1nLCBcImxvYWQgZXJyb3JcIiwgYXBwbHkob25Mb2FkLCBkYXRhKSk7XG4gICAgc2V0QXR0cmlidXRlKGltZywgXCJzcmNcIiwgZ2V0QXR0cmlidXRlKGltZywgU1JDX0RBVEFfQVRUUklCVVRFKSk7XG4gICAgc2V0QXR0cmlidXRlKGltZywgXCJzcmNzZXRcIiwgZ2V0QXR0cmlidXRlKGltZywgU1JDU0VUX0RBVEFfQVRUUklCVVRFKSk7XG4gICAgcmVtb3ZlQXR0cmlidXRlKGltZywgU1JDX0RBVEFfQVRUUklCVVRFKTtcbiAgICByZW1vdmVBdHRyaWJ1dGUoaW1nLCBTUkNTRVRfREFUQV9BVFRSSUJVVEUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Mb2FkKGRhdGEsIGUpIHtcbiAgICB2YXIgaW1nID0gZGF0YVswXSxcbiAgICAgICAgU2xpZGUgPSBkYXRhWzFdO1xuICAgIHJlbW92ZUNsYXNzKFNsaWRlLnNsaWRlLCBDTEFTU19MT0FESU5HKTtcblxuICAgIGlmIChlLnR5cGUgIT09IFwiZXJyb3JcIikge1xuICAgICAgcmVtb3ZlKGRhdGFbMl0pO1xuICAgICAgZGlzcGxheShpbWcsIFwiXCIpO1xuICAgICAgZW1pdChFVkVOVF9MQVpZTE9BRF9MT0FERUQsIGltZywgU2xpZGUpO1xuICAgICAgZW1pdChFVkVOVF9SRVNJWkUpO1xuICAgIH1cblxuICAgIGlzU2VxdWVudGlhbCAmJiBsb2FkTmV4dCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9hZE5leHQoKSB7XG4gICAgZW50cmllcy5sZW5ndGggJiYgbG9hZChlbnRyaWVzLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogYXBwbHkoZW1wdHksIGVudHJpZXMpLFxuICAgIGNoZWNrOiBjaGVja1xuICB9O1xufVxuXG5mdW5jdGlvbiBQYWdpbmF0aW9uKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBldmVudCA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpO1xuICB2YXIgb24gPSBldmVudC5vbixcbiAgICAgIGVtaXQgPSBldmVudC5lbWl0LFxuICAgICAgYmluZCA9IGV2ZW50LmJpbmQ7XG4gIHZhciBTbGlkZXMgPSBDb21wb25lbnRzMi5TbGlkZXMsXG4gICAgICBFbGVtZW50cyA9IENvbXBvbmVudHMyLkVsZW1lbnRzLFxuICAgICAgQ29udHJvbGxlciA9IENvbXBvbmVudHMyLkNvbnRyb2xsZXI7XG4gIHZhciBoYXNGb2N1cyA9IENvbnRyb2xsZXIuaGFzRm9jdXMsXG4gICAgICBnZXRJbmRleCA9IENvbnRyb2xsZXIuZ2V0SW5kZXgsXG4gICAgICBnbyA9IENvbnRyb2xsZXIuZ287XG4gIHZhciByZXNvbHZlID0gQ29tcG9uZW50czIuRGlyZWN0aW9uLnJlc29sdmU7XG4gIHZhciBwbGFjZWhvbGRlciA9IEVsZW1lbnRzLnBhZ2luYXRpb247XG4gIHZhciBpdGVtcyA9IFtdO1xuICB2YXIgbGlzdDtcbiAgdmFyIHBhZ2luYXRpb25DbGFzc2VzO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGRlc3Ryb3koKTtcbiAgICBvbihbRVZFTlRfVVBEQVRFRCwgRVZFTlRfUkVGUkVTSCwgRVZFTlRfRU5EX0lOREVYX0NIQU5HRURdLCBtb3VudCk7XG4gICAgdmFyIGVuYWJsZWQgPSBvcHRpb25zLnBhZ2luYXRpb247XG4gICAgcGxhY2Vob2xkZXIgJiYgZGlzcGxheShwbGFjZWhvbGRlciwgZW5hYmxlZCA/IFwiXCIgOiBcIm5vbmVcIik7XG5cbiAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgb24oW0VWRU5UX01PVkUsIEVWRU5UX1NDUk9MTCwgRVZFTlRfU0NST0xMRURdLCB1cGRhdGUpO1xuICAgICAgY3JlYXRlUGFnaW5hdGlvbigpO1xuICAgICAgdXBkYXRlKCk7XG4gICAgICBlbWl0KEVWRU5UX1BBR0lOQVRJT05fTU9VTlRFRCwge1xuICAgICAgICBsaXN0OiBsaXN0LFxuICAgICAgICBpdGVtczogaXRlbXNcbiAgICAgIH0sIGdldEF0KFNwbGlkZTIuaW5kZXgpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGlmIChsaXN0KSB7XG4gICAgICByZW1vdmUocGxhY2Vob2xkZXIgPyBzbGljZShsaXN0LmNoaWxkcmVuKSA6IGxpc3QpO1xuICAgICAgcmVtb3ZlQ2xhc3MobGlzdCwgcGFnaW5hdGlvbkNsYXNzZXMpO1xuICAgICAgZW1wdHkoaXRlbXMpO1xuICAgICAgbGlzdCA9IG51bGw7XG4gICAgfVxuXG4gICAgZXZlbnQuZGVzdHJveSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUGFnaW5hdGlvbigpIHtcbiAgICB2YXIgbGVuZ3RoID0gU3BsaWRlMi5sZW5ndGg7XG4gICAgdmFyIGNsYXNzZXMgPSBvcHRpb25zLmNsYXNzZXMsXG4gICAgICAgIGkxOG4gPSBvcHRpb25zLmkxOG4sXG4gICAgICAgIHBlclBhZ2UgPSBvcHRpb25zLnBlclBhZ2U7XG4gICAgdmFyIG1heCA9IGhhc0ZvY3VzKCkgPyBDb250cm9sbGVyLmdldEVuZCgpICsgMSA6IGNlaWwobGVuZ3RoIC8gcGVyUGFnZSk7XG4gICAgbGlzdCA9IHBsYWNlaG9sZGVyIHx8IGNyZWF0ZShcInVsXCIsIGNsYXNzZXMucGFnaW5hdGlvbiwgRWxlbWVudHMudHJhY2sucGFyZW50RWxlbWVudCk7XG4gICAgYWRkQ2xhc3MobGlzdCwgcGFnaW5hdGlvbkNsYXNzZXMgPSBDTEFTU19QQUdJTkFUSU9OICsgXCItLVwiICsgZ2V0RGlyZWN0aW9uKCkpO1xuICAgIHNldEF0dHJpYnV0ZShsaXN0LCBST0xFLCBcInRhYmxpc3RcIik7XG4gICAgc2V0QXR0cmlidXRlKGxpc3QsIEFSSUFfTEFCRUwsIGkxOG4uc2VsZWN0KTtcbiAgICBzZXRBdHRyaWJ1dGUobGlzdCwgQVJJQV9PUklFTlRBVElPTiwgZ2V0RGlyZWN0aW9uKCkgPT09IFRUQiA/IFwidmVydGljYWxcIiA6IFwiXCIpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXg7IGkrKykge1xuICAgICAgdmFyIGxpID0gY3JlYXRlKFwibGlcIiwgbnVsbCwgbGlzdCk7XG4gICAgICB2YXIgYnV0dG9uID0gY3JlYXRlKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMucGFnZSxcbiAgICAgICAgdHlwZTogXCJidXR0b25cIlxuICAgICAgfSwgbGkpO1xuICAgICAgdmFyIGNvbnRyb2xzID0gU2xpZGVzLmdldEluKGkpLm1hcChmdW5jdGlvbiAoU2xpZGUpIHtcbiAgICAgICAgcmV0dXJuIFNsaWRlLnNsaWRlLmlkO1xuICAgICAgfSk7XG4gICAgICB2YXIgdGV4dCA9ICFoYXNGb2N1cygpICYmIHBlclBhZ2UgPiAxID8gaTE4bi5wYWdlWCA6IGkxOG4uc2xpZGVYO1xuICAgICAgYmluZChidXR0b24sIFwiY2xpY2tcIiwgYXBwbHkob25DbGljaywgaSkpO1xuXG4gICAgICBpZiAob3B0aW9ucy5wYWdpbmF0aW9uS2V5Ym9hcmQpIHtcbiAgICAgICAgYmluZChidXR0b24sIFwia2V5ZG93blwiLCBhcHBseShvbktleWRvd24sIGkpKTtcbiAgICAgIH1cblxuICAgICAgc2V0QXR0cmlidXRlKGxpLCBST0xFLCBcInByZXNlbnRhdGlvblwiKTtcbiAgICAgIHNldEF0dHJpYnV0ZShidXR0b24sIFJPTEUsIFwidGFiXCIpO1xuICAgICAgc2V0QXR0cmlidXRlKGJ1dHRvbiwgQVJJQV9DT05UUk9MUywgY29udHJvbHMuam9pbihcIiBcIikpO1xuICAgICAgc2V0QXR0cmlidXRlKGJ1dHRvbiwgQVJJQV9MQUJFTCwgZm9ybWF0KHRleHQsIGkgKyAxKSk7XG4gICAgICBzZXRBdHRyaWJ1dGUoYnV0dG9uLCBUQUJfSU5ERVgsIC0xKTtcbiAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICBsaTogbGksXG4gICAgICAgIGJ1dHRvbjogYnV0dG9uLFxuICAgICAgICBwYWdlOiBpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkNsaWNrKHBhZ2UpIHtcbiAgICBnbyhcIj5cIiArIHBhZ2UsIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25LZXlkb3duKHBhZ2UsIGUpIHtcbiAgICB2YXIgbGVuZ3RoID0gaXRlbXMubGVuZ3RoO1xuICAgIHZhciBrZXkgPSBub3JtYWxpemVLZXkoZSk7XG4gICAgdmFyIGRpciA9IGdldERpcmVjdGlvbigpO1xuICAgIHZhciBuZXh0UGFnZSA9IC0xO1xuXG4gICAgaWYgKGtleSA9PT0gcmVzb2x2ZShBUlJPV19SSUdIVCwgZmFsc2UsIGRpcikpIHtcbiAgICAgIG5leHRQYWdlID0gKytwYWdlICUgbGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSByZXNvbHZlKEFSUk9XX0xFRlQsIGZhbHNlLCBkaXIpKSB7XG4gICAgICBuZXh0UGFnZSA9ICgtLXBhZ2UgKyBsZW5ndGgpICUgbGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIkhvbWVcIikge1xuICAgICAgbmV4dFBhZ2UgPSAwO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIkVuZFwiKSB7XG4gICAgICBuZXh0UGFnZSA9IGxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgdmFyIGl0ZW0gPSBpdGVtc1tuZXh0UGFnZV07XG5cbiAgICBpZiAoaXRlbSkge1xuICAgICAgZm9jdXMoaXRlbS5idXR0b24pO1xuICAgICAgZ28oXCI+XCIgKyBuZXh0UGFnZSk7XG4gICAgICBwcmV2ZW50KGUsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERpcmVjdGlvbigpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5wYWdpbmF0aW9uRGlyZWN0aW9uIHx8IG9wdGlvbnMuZGlyZWN0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXQoaW5kZXgpIHtcbiAgICByZXR1cm4gaXRlbXNbQ29udHJvbGxlci50b1BhZ2UoaW5kZXgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgcHJldiA9IGdldEF0KGdldEluZGV4KHRydWUpKTtcbiAgICB2YXIgY3VyciA9IGdldEF0KGdldEluZGV4KCkpO1xuXG4gICAgaWYgKHByZXYpIHtcbiAgICAgIHZhciBidXR0b24gPSBwcmV2LmJ1dHRvbjtcbiAgICAgIHJlbW92ZUNsYXNzKGJ1dHRvbiwgQ0xBU1NfQUNUSVZFKTtcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZShidXR0b24sIEFSSUFfU0VMRUNURUQpO1xuICAgICAgc2V0QXR0cmlidXRlKGJ1dHRvbiwgVEFCX0lOREVYLCAtMSk7XG4gICAgfVxuXG4gICAgaWYgKGN1cnIpIHtcbiAgICAgIHZhciBfYnV0dG9uID0gY3Vyci5idXR0b247XG4gICAgICBhZGRDbGFzcyhfYnV0dG9uLCBDTEFTU19BQ1RJVkUpO1xuICAgICAgc2V0QXR0cmlidXRlKF9idXR0b24sIEFSSUFfU0VMRUNURUQsIHRydWUpO1xuICAgICAgc2V0QXR0cmlidXRlKF9idXR0b24sIFRBQl9JTkRFWCwgXCJcIik7XG4gICAgfVxuXG4gICAgZW1pdChFVkVOVF9QQUdJTkFUSU9OX1VQREFURUQsIHtcbiAgICAgIGxpc3Q6IGxpc3QsXG4gICAgICBpdGVtczogaXRlbXNcbiAgICB9LCBwcmV2LCBjdXJyKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaXRlbXM6IGl0ZW1zLFxuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgIGdldEF0OiBnZXRBdCxcbiAgICB1cGRhdGU6IHVwZGF0ZVxuICB9O1xufVxuXG52YXIgVFJJR0dFUl9LRVlTID0gW1wiIFwiLCBcIkVudGVyXCJdO1xuXG5mdW5jdGlvbiBTeW5jKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBpc05hdmlnYXRpb24gPSBvcHRpb25zLmlzTmF2aWdhdGlvbixcbiAgICAgIHNsaWRlRm9jdXMgPSBvcHRpb25zLnNsaWRlRm9jdXM7XG4gIHZhciBldmVudHMgPSBbXTtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBTcGxpZGUyLnNwbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICBpZiAoIXRhcmdldC5pc1BhcmVudCkge1xuICAgICAgICBzeW5jKFNwbGlkZTIsIHRhcmdldC5zcGxpZGUpO1xuICAgICAgICBzeW5jKHRhcmdldC5zcGxpZGUsIFNwbGlkZTIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGlzTmF2aWdhdGlvbikge1xuICAgICAgbmF2aWdhdGUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQuZGVzdHJveSgpO1xuICAgIH0pO1xuICAgIGVtcHR5KGV2ZW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdW50KCkge1xuICAgIGRlc3Ryb3koKTtcbiAgICBtb3VudCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3luYyhzcGxpZGUsIHRhcmdldCkge1xuICAgIHZhciBldmVudCA9IEV2ZW50SW50ZXJmYWNlKHNwbGlkZSk7XG4gICAgZXZlbnQub24oRVZFTlRfTU9WRSwgZnVuY3Rpb24gKGluZGV4LCBwcmV2LCBkZXN0KSB7XG4gICAgICB0YXJnZXQuZ28odGFyZ2V0LmlzKExPT1ApID8gZGVzdCA6IGluZGV4KTtcbiAgICB9KTtcbiAgICBldmVudHMucHVzaChldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBuYXZpZ2F0ZSgpIHtcbiAgICB2YXIgZXZlbnQgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKTtcbiAgICB2YXIgb24gPSBldmVudC5vbjtcbiAgICBvbihFVkVOVF9DTElDSywgb25DbGljayk7XG4gICAgb24oRVZFTlRfU0xJREVfS0VZRE9XTiwgb25LZXlkb3duKTtcbiAgICBvbihbRVZFTlRfTU9VTlRFRCwgRVZFTlRfVVBEQVRFRF0sIHVwZGF0ZSk7XG4gICAgZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgIGV2ZW50LmVtaXQoRVZFTlRfTkFWSUdBVElPTl9NT1VOVEVELCBTcGxpZGUyLnNwbGlkZXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHNldEF0dHJpYnV0ZShDb21wb25lbnRzMi5FbGVtZW50cy5saXN0LCBBUklBX09SSUVOVEFUSU9OLCBvcHRpb25zLmRpcmVjdGlvbiA9PT0gVFRCID8gXCJ2ZXJ0aWNhbFwiIDogXCJcIik7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNsaWNrKFNsaWRlKSB7XG4gICAgU3BsaWRlMi5nbyhTbGlkZS5pbmRleCk7XG4gIH1cblxuICBmdW5jdGlvbiBvbktleWRvd24oU2xpZGUsIGUpIHtcbiAgICBpZiAoaW5jbHVkZXMoVFJJR0dFUl9LRVlTLCBub3JtYWxpemVLZXkoZSkpKSB7XG4gICAgICBvbkNsaWNrKFNsaWRlKTtcbiAgICAgIHByZXZlbnQoZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZXR1cDogYXBwbHkoQ29tcG9uZW50czIuTWVkaWEuc2V0LCB7XG4gICAgICBzbGlkZUZvY3VzOiBpc1VuZGVmaW5lZChzbGlkZUZvY3VzKSA/IGlzTmF2aWdhdGlvbiA6IHNsaWRlRm9jdXNcbiAgICB9LCB0cnVlKSxcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogZGVzdHJveSxcbiAgICByZW1vdW50OiByZW1vdW50XG4gIH07XG59XG5cbmZ1bmN0aW9uIFdoZWVsKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2UxMiA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgYmluZCA9IF9FdmVudEludGVyZmFjZTEyLmJpbmQ7XG5cbiAgdmFyIGxhc3RUaW1lID0gMDtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpZiAob3B0aW9ucy53aGVlbCkge1xuICAgICAgYmluZChDb21wb25lbnRzMi5FbGVtZW50cy50cmFjaywgXCJ3aGVlbFwiLCBvbldoZWVsLCBTQ1JPTExfTElTVEVORVJfT1BUSU9OUyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25XaGVlbChlKSB7XG4gICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgdmFyIGRlbHRhWSA9IGUuZGVsdGFZO1xuICAgICAgdmFyIGJhY2t3YXJkcyA9IGRlbHRhWSA8IDA7XG4gICAgICB2YXIgdGltZVN0YW1wID0gdGltZU9mKGUpO1xuXG4gICAgICB2YXIgX21pbiA9IG9wdGlvbnMud2hlZWxNaW5UaHJlc2hvbGQgfHwgMDtcblxuICAgICAgdmFyIHNsZWVwID0gb3B0aW9ucy53aGVlbFNsZWVwIHx8IDA7XG5cbiAgICAgIGlmIChhYnMoZGVsdGFZKSA+IF9taW4gJiYgdGltZVN0YW1wIC0gbGFzdFRpbWUgPiBzbGVlcCkge1xuICAgICAgICBTcGxpZGUyLmdvKGJhY2t3YXJkcyA/IFwiPFwiIDogXCI+XCIpO1xuICAgICAgICBsYXN0VGltZSA9IHRpbWVTdGFtcDtcbiAgICAgIH1cblxuICAgICAgc2hvdWxkUHJldmVudChiYWNrd2FyZHMpICYmIHByZXZlbnQoZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkUHJldmVudChiYWNrd2FyZHMpIHtcbiAgICByZXR1cm4gIW9wdGlvbnMucmVsZWFzZVdoZWVsIHx8IFNwbGlkZTIuc3RhdGUuaXMoTU9WSU5HKSB8fCBDb21wb25lbnRzMi5Db250cm9sbGVyLmdldEFkamFjZW50KGJhY2t3YXJkcykgIT09IC0xO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnRcbiAgfTtcbn1cblxudmFyIFNSX1JFTU9WQUxfREVMQVkgPSA5MDtcblxuZnVuY3Rpb24gTGl2ZShTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlMTMgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlMTMub247XG5cbiAgdmFyIHRyYWNrID0gQ29tcG9uZW50czIuRWxlbWVudHMudHJhY2s7XG4gIHZhciBlbmFibGVkID0gb3B0aW9ucy5saXZlICYmICFvcHRpb25zLmlzTmF2aWdhdGlvbjtcbiAgdmFyIHNyID0gY3JlYXRlKFwic3BhblwiLCBDTEFTU19TUik7XG4gIHZhciBpbnRlcnZhbCA9IFJlcXVlc3RJbnRlcnZhbChTUl9SRU1PVkFMX0RFTEFZLCBhcHBseSh0b2dnbGUsIGZhbHNlKSk7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgIGRpc2FibGUoIUNvbXBvbmVudHMyLkF1dG9wbGF5LmlzUGF1c2VkKCkpO1xuICAgICAgc2V0QXR0cmlidXRlKHRyYWNrLCBBUklBX0FUT01JQywgdHJ1ZSk7XG4gICAgICBzci50ZXh0Q29udGVudCA9IFwiXFx1MjAyNlwiO1xuICAgICAgb24oRVZFTlRfQVVUT1BMQVlfUExBWSwgYXBwbHkoZGlzYWJsZSwgdHJ1ZSkpO1xuICAgICAgb24oRVZFTlRfQVVUT1BMQVlfUEFVU0UsIGFwcGx5KGRpc2FibGUsIGZhbHNlKSk7XG4gICAgICBvbihbRVZFTlRfTU9WRUQsIEVWRU5UX1NDUk9MTEVEXSwgYXBwbHkodG9nZ2xlLCB0cnVlKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlKGFjdGl2ZSkge1xuICAgIHNldEF0dHJpYnV0ZSh0cmFjaywgQVJJQV9CVVNZLCBhY3RpdmUpO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgYXBwZW5kKHRyYWNrLCBzcik7XG4gICAgICBpbnRlcnZhbC5zdGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoc3IpO1xuICAgICAgaW50ZXJ2YWwuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICByZW1vdmVBdHRyaWJ1dGUodHJhY2ssIFtBUklBX0xJVkUsIEFSSUFfQVRPTUlDLCBBUklBX0JVU1ldKTtcbiAgICByZW1vdmUoc3IpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzYWJsZShkaXNhYmxlZCkge1xuICAgIGlmIChlbmFibGVkKSB7XG4gICAgICBzZXRBdHRyaWJ1dGUodHJhY2ssIEFSSUFfTElWRSwgZGlzYWJsZWQgPyBcIm9mZlwiIDogXCJwb2xpdGVcIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGlzYWJsZTogZGlzYWJsZSxcbiAgICBkZXN0cm95OiBkZXN0cm95XG4gIH07XG59XG5cbnZhciBDb21wb25lbnRDb25zdHJ1Y3RvcnMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgTWVkaWE6IE1lZGlhLFxuICBEaXJlY3Rpb246IERpcmVjdGlvbixcbiAgRWxlbWVudHM6IEVsZW1lbnRzLFxuICBTbGlkZXM6IFNsaWRlcyxcbiAgTGF5b3V0OiBMYXlvdXQsXG4gIENsb25lczogQ2xvbmVzLFxuICBNb3ZlOiBNb3ZlLFxuICBDb250cm9sbGVyOiBDb250cm9sbGVyLFxuICBBcnJvd3M6IEFycm93cyxcbiAgQXV0b3BsYXk6IEF1dG9wbGF5LFxuICBDb3ZlcjogQ292ZXIsXG4gIFNjcm9sbDogU2Nyb2xsLFxuICBEcmFnOiBEcmFnLFxuICBLZXlib2FyZDogS2V5Ym9hcmQsXG4gIExhenlMb2FkOiBMYXp5TG9hZCxcbiAgUGFnaW5hdGlvbjogUGFnaW5hdGlvbixcbiAgU3luYzogU3luYyxcbiAgV2hlZWw6IFdoZWVsLFxuICBMaXZlOiBMaXZlXG59KTtcbnZhciBJMThOID0ge1xuICBwcmV2OiBcIlByZXZpb3VzIHNsaWRlXCIsXG4gIG5leHQ6IFwiTmV4dCBzbGlkZVwiLFxuICBmaXJzdDogXCJHbyB0byBmaXJzdCBzbGlkZVwiLFxuICBsYXN0OiBcIkdvIHRvIGxhc3Qgc2xpZGVcIixcbiAgc2xpZGVYOiBcIkdvIHRvIHNsaWRlICVzXCIsXG4gIHBhZ2VYOiBcIkdvIHRvIHBhZ2UgJXNcIixcbiAgcGxheTogXCJTdGFydCBhdXRvcGxheVwiLFxuICBwYXVzZTogXCJQYXVzZSBhdXRvcGxheVwiLFxuICBjYXJvdXNlbDogXCJjYXJvdXNlbFwiLFxuICBzbGlkZTogXCJzbGlkZVwiLFxuICBzZWxlY3Q6IFwiU2VsZWN0IGEgc2xpZGUgdG8gc2hvd1wiLFxuICBzbGlkZUxhYmVsOiBcIiVzIG9mICVzXCJcbn07XG52YXIgREVGQVVMVFMgPSB7XG4gIHR5cGU6IFwic2xpZGVcIixcbiAgcm9sZTogXCJyZWdpb25cIixcbiAgc3BlZWQ6IDQwMCxcbiAgcGVyUGFnZTogMSxcbiAgY2xvbmVTdGF0dXM6IHRydWUsXG4gIGFycm93czogdHJ1ZSxcbiAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgcGFnaW5hdGlvbktleWJvYXJkOiB0cnVlLFxuICBpbnRlcnZhbDogNWUzLFxuICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gIHBhdXNlT25Gb2N1czogdHJ1ZSxcbiAgcmVzZXRQcm9ncmVzczogdHJ1ZSxcbiAgZWFzaW5nOiBcImN1YmljLWJlemllcigwLjI1LCAxLCAwLjUsIDEpXCIsXG4gIGRyYWc6IHRydWUsXG4gIGRpcmVjdGlvbjogXCJsdHJcIixcbiAgdHJpbVNwYWNlOiB0cnVlLFxuICBmb2N1c2FibGVOb2RlczogXCJhLCBidXR0b24sIHRleHRhcmVhLCBpbnB1dCwgc2VsZWN0LCBpZnJhbWVcIixcbiAgbGl2ZTogdHJ1ZSxcbiAgY2xhc3NlczogQ0xBU1NFUyxcbiAgaTE4bjogSTE4TixcbiAgcmVkdWNlZE1vdGlvbjoge1xuICAgIHNwZWVkOiAwLFxuICAgIHJld2luZFNwZWVkOiAwLFxuICAgIGF1dG9wbGF5OiBcInBhdXNlXCJcbiAgfVxufTtcblxuZnVuY3Rpb24gRmFkZShTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgU2xpZGVzID0gQ29tcG9uZW50czIuU2xpZGVzO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLm9uKFtFVkVOVF9NT1VOVEVELCBFVkVOVF9SRUZSRVNIXSwgaW5pdCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIFNsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgU2xpZGUuc3R5bGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGVYKC1cIiArIDEwMCAqIFNsaWRlLmluZGV4ICsgXCIlKVwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGluZGV4LCBkb25lKSB7XG4gICAgU2xpZGVzLnN0eWxlKFwidHJhbnNpdGlvblwiLCBcIm9wYWNpdHkgXCIgKyBvcHRpb25zLnNwZWVkICsgXCJtcyBcIiArIG9wdGlvbnMuZWFzaW5nKTtcbiAgICBuZXh0VGljayhkb25lKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIHN0YXJ0OiBzdGFydCxcbiAgICBjYW5jZWw6IG5vb3BcbiAgfTtcbn1cblxuZnVuY3Rpb24gU2xpZGUoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIE1vdmUgPSBDb21wb25lbnRzMi5Nb3ZlLFxuICAgICAgQ29udHJvbGxlciA9IENvbXBvbmVudHMyLkNvbnRyb2xsZXIsXG4gICAgICBTY3JvbGwgPSBDb21wb25lbnRzMi5TY3JvbGw7XG4gIHZhciBsaXN0ID0gQ29tcG9uZW50czIuRWxlbWVudHMubGlzdDtcbiAgdmFyIHRyYW5zaXRpb24gPSBhcHBseShzdHlsZSwgbGlzdCwgXCJ0cmFuc2l0aW9uXCIpO1xuICB2YXIgZW5kQ2FsbGJhY2s7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgRXZlbnRJbnRlcmZhY2UoU3BsaWRlMikuYmluZChsaXN0LCBcInRyYW5zaXRpb25lbmRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gbGlzdCAmJiBlbmRDYWxsYmFjaykge1xuICAgICAgICBjYW5jZWwoKTtcbiAgICAgICAgZW5kQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGluZGV4LCBkb25lKSB7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0gTW92ZS50b1Bvc2l0aW9uKGluZGV4LCB0cnVlKTtcbiAgICB2YXIgcG9zaXRpb24gPSBNb3ZlLmdldFBvc2l0aW9uKCk7XG4gICAgdmFyIHNwZWVkID0gZ2V0U3BlZWQoaW5kZXgpO1xuXG4gICAgaWYgKGFicyhkZXN0aW5hdGlvbiAtIHBvc2l0aW9uKSA+PSAxICYmIHNwZWVkID49IDEpIHtcbiAgICAgIGlmIChvcHRpb25zLnVzZVNjcm9sbCkge1xuICAgICAgICBTY3JvbGwuc2Nyb2xsKGRlc3RpbmF0aW9uLCBzcGVlZCwgZmFsc2UsIGRvbmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNpdGlvbihcInRyYW5zZm9ybSBcIiArIHNwZWVkICsgXCJtcyBcIiArIG9wdGlvbnMuZWFzaW5nKTtcbiAgICAgICAgTW92ZS50cmFuc2xhdGUoZGVzdGluYXRpb24sIHRydWUpO1xuICAgICAgICBlbmRDYWxsYmFjayA9IGRvbmU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIE1vdmUuanVtcChpbmRleCk7XG4gICAgICBkb25lKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIHRyYW5zaXRpb24oXCJcIik7XG4gICAgU2Nyb2xsLmNhbmNlbCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U3BlZWQoaW5kZXgpIHtcbiAgICB2YXIgcmV3aW5kU3BlZWQgPSBvcHRpb25zLnJld2luZFNwZWVkO1xuXG4gICAgaWYgKFNwbGlkZTIuaXMoU0xJREUpICYmIHJld2luZFNwZWVkKSB7XG4gICAgICB2YXIgcHJldiA9IENvbnRyb2xsZXIuZ2V0SW5kZXgodHJ1ZSk7XG4gICAgICB2YXIgZW5kID0gQ29udHJvbGxlci5nZXRFbmQoKTtcblxuICAgICAgaWYgKHByZXYgPT09IDAgJiYgaW5kZXggPj0gZW5kIHx8IHByZXYgPj0gZW5kICYmIGluZGV4ID09PSAwKSB7XG4gICAgICAgIHJldHVybiByZXdpbmRTcGVlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucy5zcGVlZDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIHN0YXJ0OiBzdGFydCxcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufVxuXG52YXIgX1NwbGlkZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIF9TcGxpZGUodGFyZ2V0LCBvcHRpb25zKSB7XG4gICAgdGhpcy5ldmVudCA9IEV2ZW50SW50ZXJmYWNlKCk7XG4gICAgdGhpcy5Db21wb25lbnRzID0ge307XG4gICAgdGhpcy5zdGF0ZSA9IFN0YXRlKENSRUFURUQpO1xuICAgIHRoaXMuc3BsaWRlcyA9IFtdO1xuICAgIHRoaXMuX28gPSB7fTtcbiAgICB0aGlzLl9FID0ge307XG4gICAgdmFyIHJvb3QgPSBpc1N0cmluZyh0YXJnZXQpID8gcXVlcnkoZG9jdW1lbnQsIHRhcmdldCkgOiB0YXJnZXQ7XG4gICAgYXNzZXJ0KHJvb3QsIHJvb3QgKyBcIiBpcyBpbnZhbGlkLlwiKTtcbiAgICB0aGlzLnJvb3QgPSByb290O1xuICAgIG9wdGlvbnMgPSBtZXJnZSh7XG4gICAgICBsYWJlbDogZ2V0QXR0cmlidXRlKHJvb3QsIEFSSUFfTEFCRUwpIHx8IFwiXCIsXG4gICAgICBsYWJlbGxlZGJ5OiBnZXRBdHRyaWJ1dGUocm9vdCwgQVJJQV9MQUJFTExFREJZKSB8fCBcIlwiXG4gICAgfSwgREVGQVVMVFMsIF9TcGxpZGUuZGVmYXVsdHMsIG9wdGlvbnMgfHwge30pO1xuXG4gICAgdHJ5IHtcbiAgICAgIG1lcmdlKG9wdGlvbnMsIEpTT04ucGFyc2UoZ2V0QXR0cmlidXRlKHJvb3QsIERBVEFfQVRUUklCVVRFKSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGFzc2VydChmYWxzZSwgXCJJbnZhbGlkIEpTT05cIik7XG4gICAgfVxuXG4gICAgdGhpcy5fbyA9IE9iamVjdC5jcmVhdGUobWVyZ2Uoe30sIG9wdGlvbnMpKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBfU3BsaWRlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ubW91bnQgPSBmdW5jdGlvbiBtb3VudChFeHRlbnNpb25zLCBUcmFuc2l0aW9uKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgIENvbXBvbmVudHMyID0gdGhpcy5Db21wb25lbnRzO1xuICAgIGFzc2VydChzdGF0ZS5pcyhbQ1JFQVRFRCwgREVTVFJPWUVEXSksIFwiQWxyZWFkeSBtb3VudGVkIVwiKTtcbiAgICBzdGF0ZS5zZXQoQ1JFQVRFRCk7XG4gICAgdGhpcy5fQyA9IENvbXBvbmVudHMyO1xuICAgIHRoaXMuX1QgPSBUcmFuc2l0aW9uIHx8IHRoaXMuX1QgfHwgKHRoaXMuaXMoRkFERSkgPyBGYWRlIDogU2xpZGUpO1xuICAgIHRoaXMuX0UgPSBFeHRlbnNpb25zIHx8IHRoaXMuX0U7XG4gICAgdmFyIENvbnN0cnVjdG9ycyA9IGFzc2lnbih7fSwgQ29tcG9uZW50Q29uc3RydWN0b3JzLCB0aGlzLl9FLCB7XG4gICAgICBUcmFuc2l0aW9uOiB0aGlzLl9UXG4gICAgfSk7XG4gICAgZm9yT3duKENvbnN0cnVjdG9ycywgZnVuY3Rpb24gKENvbXBvbmVudCwga2V5KSB7XG4gICAgICB2YXIgY29tcG9uZW50ID0gQ29tcG9uZW50KF90aGlzLCBDb21wb25lbnRzMiwgX3RoaXMuX28pO1xuICAgICAgQ29tcG9uZW50czJba2V5XSA9IGNvbXBvbmVudDtcbiAgICAgIGNvbXBvbmVudC5zZXR1cCAmJiBjb21wb25lbnQuc2V0dXAoKTtcbiAgICB9KTtcbiAgICBmb3JPd24oQ29tcG9uZW50czIsIGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICAgIGNvbXBvbmVudC5tb3VudCAmJiBjb21wb25lbnQubW91bnQoKTtcbiAgICB9KTtcbiAgICB0aGlzLmVtaXQoRVZFTlRfTU9VTlRFRCk7XG4gICAgYWRkQ2xhc3ModGhpcy5yb290LCBDTEFTU19JTklUSUFMSVpFRCk7XG4gICAgc3RhdGUuc2V0KElETEUpO1xuICAgIHRoaXMuZW1pdChFVkVOVF9SRUFEWSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnN5bmMgPSBmdW5jdGlvbiBzeW5jKHNwbGlkZSkge1xuICAgIHRoaXMuc3BsaWRlcy5wdXNoKHtcbiAgICAgIHNwbGlkZTogc3BsaWRlXG4gICAgfSk7XG4gICAgc3BsaWRlLnNwbGlkZXMucHVzaCh7XG4gICAgICBzcGxpZGU6IHRoaXMsXG4gICAgICBpc1BhcmVudDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuaXMoSURMRSkpIHtcbiAgICAgIHRoaXMuX0MuU3luYy5yZW1vdW50KCk7XG5cbiAgICAgIHNwbGlkZS5Db21wb25lbnRzLlN5bmMucmVtb3VudCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5nbyA9IGZ1bmN0aW9uIGdvKGNvbnRyb2wpIHtcbiAgICB0aGlzLl9DLkNvbnRyb2xsZXIuZ28oY29udHJvbCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8ub24gPSBmdW5jdGlvbiBvbihldmVudHMsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5ldmVudC5vbihldmVudHMsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8ub2ZmID0gZnVuY3Rpb24gb2ZmKGV2ZW50cykge1xuICAgIHRoaXMuZXZlbnQub2ZmKGV2ZW50cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50KSB7XG4gICAgdmFyIF90aGlzJGV2ZW50O1xuXG4gICAgKF90aGlzJGV2ZW50ID0gdGhpcy5ldmVudCkuZW1pdC5hcHBseShfdGhpcyRldmVudCwgW2V2ZW50XS5jb25jYXQoc2xpY2UoYXJndW1lbnRzLCAxKSkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmFkZCA9IGZ1bmN0aW9uIGFkZChzbGlkZXMsIGluZGV4KSB7XG4gICAgdGhpcy5fQy5TbGlkZXMuYWRkKHNsaWRlcywgaW5kZXgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShtYXRjaGVyKSB7XG4gICAgdGhpcy5fQy5TbGlkZXMucmVtb3ZlKG1hdGNoZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmlzID0gZnVuY3Rpb24gaXModHlwZSkge1xuICAgIHJldHVybiB0aGlzLl9vLnR5cGUgPT09IHR5cGU7XG4gIH07XG5cbiAgX3Byb3RvLnJlZnJlc2ggPSBmdW5jdGlvbiByZWZyZXNoKCkge1xuICAgIHRoaXMuZW1pdChFVkVOVF9SRUZSRVNIKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koY29tcGxldGVseSkge1xuICAgIGlmIChjb21wbGV0ZWx5ID09PSB2b2lkIDApIHtcbiAgICAgIGNvbXBsZXRlbHkgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBldmVudCA9IHRoaXMuZXZlbnQsXG4gICAgICAgIHN0YXRlID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChzdGF0ZS5pcyhDUkVBVEVEKSkge1xuICAgICAgRXZlbnRJbnRlcmZhY2UodGhpcykub24oRVZFTlRfUkVBRFksIHRoaXMuZGVzdHJveS5iaW5kKHRoaXMsIGNvbXBsZXRlbHkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yT3duKHRoaXMuX0MsIGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50LmRlc3Ryb3kgJiYgY29tcG9uZW50LmRlc3Ryb3koY29tcGxldGVseSk7XG4gICAgICB9LCB0cnVlKTtcbiAgICAgIGV2ZW50LmVtaXQoRVZFTlRfREVTVFJPWSk7XG4gICAgICBldmVudC5kZXN0cm95KCk7XG4gICAgICBjb21wbGV0ZWx5ICYmIGVtcHR5KHRoaXMuc3BsaWRlcyk7XG4gICAgICBzdGF0ZS5zZXQoREVTVFJPWUVEKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoX1NwbGlkZSwgW3tcbiAgICBrZXk6IFwib3B0aW9uc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX287XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChvcHRpb25zKSB7XG4gICAgICB0aGlzLl9DLk1lZGlhLnNldChvcHRpb25zLCB0cnVlLCB0cnVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibGVuZ3RoXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fQy5TbGlkZXMuZ2V0TGVuZ3RoKHRydWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbmRleFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX0MuQ29udHJvbGxlci5nZXRJbmRleCgpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBfU3BsaWRlO1xufSgpO1xuXG52YXIgU3BsaWRlID0gX1NwbGlkZTtcblNwbGlkZS5kZWZhdWx0cyA9IHt9O1xuU3BsaWRlLlNUQVRFUyA9IFNUQVRFUztcbnZhciBDTEFTU19SRU5ERVJFRCA9IFwiaXMtcmVuZGVyZWRcIjtcbnZhciBSRU5ERVJFUl9ERUZBVUxUX0NPTkZJRyA9IHtcbiAgbGlzdFRhZzogXCJ1bFwiLFxuICBzbGlkZVRhZzogXCJsaVwiXG59O1xuXG52YXIgU3R5bGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZShpZCwgb3B0aW9ucykge1xuICAgIHRoaXMuc3R5bGVzID0ge307XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICB2YXIgX3Byb3RvMiA9IFN0eWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8yLnJ1bGUgPSBmdW5jdGlvbiBydWxlKHNlbGVjdG9yLCBwcm9wLCB2YWx1ZSwgYnJlYWtwb2ludCkge1xuICAgIGJyZWFrcG9pbnQgPSBicmVha3BvaW50IHx8IFwiZGVmYXVsdFwiO1xuICAgIHZhciBzZWxlY3RvcnMgPSB0aGlzLnN0eWxlc1ticmVha3BvaW50XSA9IHRoaXMuc3R5bGVzW2JyZWFrcG9pbnRdIHx8IHt9O1xuICAgIHZhciBzdHlsZXMgPSBzZWxlY3RvcnNbc2VsZWN0b3JdID0gc2VsZWN0b3JzW3NlbGVjdG9yXSB8fCB7fTtcbiAgICBzdHlsZXNbcHJvcF0gPSB2YWx1ZTtcbiAgfTtcblxuICBfcHJvdG8yLmJ1aWxkID0gZnVuY3Rpb24gYnVpbGQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgY3NzID0gXCJcIjtcblxuICAgIGlmICh0aGlzLnN0eWxlcy5kZWZhdWx0KSB7XG4gICAgICBjc3MgKz0gdGhpcy5idWlsZFNlbGVjdG9ycyh0aGlzLnN0eWxlcy5kZWZhdWx0KTtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLnN0eWxlcykuc29ydChmdW5jdGlvbiAobiwgbSkge1xuICAgICAgcmV0dXJuIF90aGlzMi5vcHRpb25zLm1lZGlhUXVlcnkgPT09IFwibWluXCIgPyArbiAtICttIDogK20gLSArbjtcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChicmVha3BvaW50KSB7XG4gICAgICBpZiAoYnJlYWtwb2ludCAhPT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgICAgY3NzICs9IFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogXCIgKyBicmVha3BvaW50ICsgXCJweCkge1wiO1xuICAgICAgICBjc3MgKz0gX3RoaXMyLmJ1aWxkU2VsZWN0b3JzKF90aGlzMi5zdHlsZXNbYnJlYWtwb2ludF0pO1xuICAgICAgICBjc3MgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNzcztcbiAgfTtcblxuICBfcHJvdG8yLmJ1aWxkU2VsZWN0b3JzID0gZnVuY3Rpb24gYnVpbGRTZWxlY3RvcnMoc2VsZWN0b3JzKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgY3NzID0gXCJcIjtcbiAgICBmb3JPd24oc2VsZWN0b3JzLCBmdW5jdGlvbiAoc3R5bGVzLCBzZWxlY3Rvcikge1xuICAgICAgc2VsZWN0b3IgPSAoXCIjXCIgKyBfdGhpczMuaWQgKyBcIiBcIiArIHNlbGVjdG9yKS50cmltKCk7XG4gICAgICBjc3MgKz0gc2VsZWN0b3IgKyBcIiB7XCI7XG4gICAgICBmb3JPd24oc3R5bGVzLCBmdW5jdGlvbiAodmFsdWUsIHByb3ApIHtcbiAgICAgICAgaWYgKHZhbHVlIHx8IHZhbHVlID09PSAwKSB7XG4gICAgICAgICAgY3NzICs9IHByb3AgKyBcIjogXCIgKyB2YWx1ZSArIFwiO1wiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNzcyArPSBcIn1cIjtcbiAgICB9KTtcbiAgICByZXR1cm4gY3NzO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZTtcbn0oKTtcblxudmFyIFNwbGlkZVJlbmRlcmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3BsaWRlUmVuZGVyZXIoY29udGVudHMsIG9wdGlvbnMsIGNvbmZpZywgZGVmYXVsdHMpIHtcbiAgICB0aGlzLnNsaWRlcyA9IFtdO1xuICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgIHRoaXMuYnJlYWtwb2ludHMgPSBbXTtcbiAgICBtZXJnZShERUZBVUxUUywgZGVmYXVsdHMgfHwge30pO1xuICAgIG1lcmdlKG1lcmdlKHRoaXMub3B0aW9ucywgREVGQVVMVFMpLCBvcHRpb25zIHx8IHt9KTtcbiAgICB0aGlzLmNvbnRlbnRzID0gY29udGVudHM7XG4gICAgdGhpcy5jb25maWcgPSBhc3NpZ24oe30sIFJFTkRFUkVSX0RFRkFVTFRfQ09ORklHLCBjb25maWcgfHwge30pO1xuICAgIHRoaXMuaWQgPSB0aGlzLmNvbmZpZy5pZCB8fCB1bmlxdWVJZChcInNwbGlkZVwiKTtcbiAgICB0aGlzLlN0eWxlID0gbmV3IFN0eWxlKHRoaXMuaWQsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5EaXJlY3Rpb24gPSBEaXJlY3Rpb24obnVsbCwgbnVsbCwgdGhpcy5vcHRpb25zKTtcbiAgICBhc3NlcnQodGhpcy5jb250ZW50cy5sZW5ndGgsIFwiUHJvdmlkZSBhdCBsZWFzdCAxIGNvbnRlbnQuXCIpO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgU3BsaWRlUmVuZGVyZXIuY2xlYW4gPSBmdW5jdGlvbiBjbGVhbihzcGxpZGUpIHtcbiAgICB2YXIgX0V2ZW50SW50ZXJmYWNlMTQgPSBFdmVudEludGVyZmFjZShzcGxpZGUpLFxuICAgICAgICBvbiA9IF9FdmVudEludGVyZmFjZTE0Lm9uO1xuXG4gICAgdmFyIHJvb3QgPSBzcGxpZGUucm9vdDtcbiAgICB2YXIgY2xvbmVzID0gcXVlcnlBbGwocm9vdCwgXCIuXCIgKyBDTEFTU19DTE9ORSk7XG4gICAgb24oRVZFTlRfTU9VTlRFRCwgZnVuY3Rpb24gKCkge1xuICAgICAgcmVtb3ZlKGNoaWxkKHJvb3QsIFwic3R5bGVcIikpO1xuICAgIH0pO1xuICAgIHJlbW92ZShjbG9uZXMpO1xuICB9O1xuXG4gIHZhciBfcHJvdG8zID0gU3BsaWRlUmVuZGVyZXIucHJvdG90eXBlO1xuXG4gIF9wcm90bzMuaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdGhpcy5wYXJzZUJyZWFrcG9pbnRzKCk7XG4gICAgdGhpcy5pbml0U2xpZGVzKCk7XG4gICAgdGhpcy5yZWdpc3RlclJvb3RTdHlsZXMoKTtcbiAgICB0aGlzLnJlZ2lzdGVyVHJhY2tTdHlsZXMoKTtcbiAgICB0aGlzLnJlZ2lzdGVyU2xpZGVTdHlsZXMoKTtcbiAgICB0aGlzLnJlZ2lzdGVyTGlzdFN0eWxlcygpO1xuICB9O1xuXG4gIF9wcm90bzMuaW5pdFNsaWRlcyA9IGZ1bmN0aW9uIGluaXRTbGlkZXMoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBwdXNoKHRoaXMuc2xpZGVzLCB0aGlzLmNvbnRlbnRzLm1hcChmdW5jdGlvbiAoY29udGVudCwgaW5kZXgpIHtcbiAgICAgIGNvbnRlbnQgPSBpc1N0cmluZyhjb250ZW50KSA/IHtcbiAgICAgICAgaHRtbDogY29udGVudFxuICAgICAgfSA6IGNvbnRlbnQ7XG4gICAgICBjb250ZW50LnN0eWxlcyA9IGNvbnRlbnQuc3R5bGVzIHx8IHt9O1xuICAgICAgY29udGVudC5hdHRycyA9IGNvbnRlbnQuYXR0cnMgfHwge307XG5cbiAgICAgIF90aGlzNC5jb3Zlcihjb250ZW50KTtcblxuICAgICAgdmFyIGNsYXNzZXMgPSBfdGhpczQub3B0aW9ucy5jbGFzc2VzLnNsaWRlICsgXCIgXCIgKyAoaW5kZXggPT09IDAgPyBDTEFTU19BQ1RJVkUgOiBcIlwiKTtcbiAgICAgIGFzc2lnbihjb250ZW50LmF0dHJzLCB7XG4gICAgICAgIGNsYXNzOiAoY2xhc3NlcyArIFwiIFwiICsgKGNvbnRlbnQuYXR0cnMuY2xhc3MgfHwgXCJcIikpLnRyaW0oKSxcbiAgICAgICAgc3R5bGU6IF90aGlzNC5idWlsZFN0eWxlcyhjb250ZW50LnN0eWxlcylcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkpO1xuXG4gICAgaWYgKHRoaXMuaXNMb29wKCkpIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVDbG9uZXModGhpcy5zbGlkZXMpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8zLnJlZ2lzdGVyUm9vdFN0eWxlcyA9IGZ1bmN0aW9uIHJlZ2lzdGVyUm9vdFN0eWxlcygpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHRoaXMuYnJlYWtwb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgIHZhciB3aWR0aCA9IF9yZWYyWzBdLFxuICAgICAgICAgIG9wdGlvbnMgPSBfcmVmMlsxXTtcblxuICAgICAgX3RoaXM1LlN0eWxlLnJ1bGUoXCIgXCIsIFwibWF4LXdpZHRoXCIsIHVuaXQob3B0aW9ucy53aWR0aCksIHdpZHRoKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8zLnJlZ2lzdGVyVHJhY2tTdHlsZXMgPSBmdW5jdGlvbiByZWdpc3RlclRyYWNrU3R5bGVzKCkge1xuICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgdmFyIFN0eWxlMiA9IHRoaXMuU3R5bGU7XG4gICAgdmFyIHNlbGVjdG9yID0gXCIuXCIgKyBDTEFTU19UUkFDSztcbiAgICB0aGlzLmJyZWFrcG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICB2YXIgd2lkdGggPSBfcmVmM1swXSxcbiAgICAgICAgICBvcHRpb25zID0gX3JlZjNbMV07XG4gICAgICBTdHlsZTIucnVsZShzZWxlY3RvciwgX3RoaXM2LnJlc29sdmUoXCJwYWRkaW5nTGVmdFwiKSwgX3RoaXM2LmNzc1BhZGRpbmcob3B0aW9ucywgZmFsc2UpLCB3aWR0aCk7XG4gICAgICBTdHlsZTIucnVsZShzZWxlY3RvciwgX3RoaXM2LnJlc29sdmUoXCJwYWRkaW5nUmlnaHRcIiksIF90aGlzNi5jc3NQYWRkaW5nKG9wdGlvbnMsIHRydWUpLCB3aWR0aCk7XG4gICAgICBTdHlsZTIucnVsZShzZWxlY3RvciwgXCJoZWlnaHRcIiwgX3RoaXM2LmNzc1RyYWNrSGVpZ2h0KG9wdGlvbnMpLCB3aWR0aCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvMy5yZWdpc3Rlckxpc3RTdHlsZXMgPSBmdW5jdGlvbiByZWdpc3Rlckxpc3RTdHlsZXMoKSB7XG4gICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICB2YXIgU3R5bGUyID0gdGhpcy5TdHlsZTtcbiAgICB2YXIgc2VsZWN0b3IgPSBcIi5cIiArIENMQVNTX0xJU1Q7XG4gICAgdGhpcy5icmVha3BvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmNCkge1xuICAgICAgdmFyIHdpZHRoID0gX3JlZjRbMF0sXG4gICAgICAgICAgb3B0aW9ucyA9IF9yZWY0WzFdO1xuICAgICAgU3R5bGUyLnJ1bGUoc2VsZWN0b3IsIFwidHJhbnNmb3JtXCIsIF90aGlzNy5idWlsZFRyYW5zbGF0ZShvcHRpb25zKSwgd2lkdGgpO1xuXG4gICAgICBpZiAoIV90aGlzNy5jc3NTbGlkZUhlaWdodChvcHRpb25zKSkge1xuICAgICAgICBTdHlsZTIucnVsZShzZWxlY3RvciwgXCJhc3BlY3QtcmF0aW9cIiwgX3RoaXM3LmNzc0FzcGVjdFJhdGlvKG9wdGlvbnMpLCB3aWR0aCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvMy5yZWdpc3RlclNsaWRlU3R5bGVzID0gZnVuY3Rpb24gcmVnaXN0ZXJTbGlkZVN0eWxlcygpIHtcbiAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgIHZhciBTdHlsZTIgPSB0aGlzLlN0eWxlO1xuICAgIHZhciBzZWxlY3RvciA9IFwiLlwiICsgQ0xBU1NfU0xJREU7XG4gICAgdGhpcy5icmVha3BvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmNSkge1xuICAgICAgdmFyIHdpZHRoID0gX3JlZjVbMF0sXG4gICAgICAgICAgb3B0aW9ucyA9IF9yZWY1WzFdO1xuICAgICAgU3R5bGUyLnJ1bGUoc2VsZWN0b3IsIFwid2lkdGhcIiwgX3RoaXM4LmNzc1NsaWRlV2lkdGgob3B0aW9ucyksIHdpZHRoKTtcbiAgICAgIFN0eWxlMi5ydWxlKHNlbGVjdG9yLCBcImhlaWdodFwiLCBfdGhpczguY3NzU2xpZGVIZWlnaHQob3B0aW9ucykgfHwgXCIxMDAlXCIsIHdpZHRoKTtcbiAgICAgIFN0eWxlMi5ydWxlKHNlbGVjdG9yLCBfdGhpczgucmVzb2x2ZShcIm1hcmdpblJpZ2h0XCIpLCB1bml0KG9wdGlvbnMuZ2FwKSB8fCBcIjBweFwiLCB3aWR0aCk7XG4gICAgICBTdHlsZTIucnVsZShzZWxlY3RvciArIFwiID4gaW1nXCIsIFwiZGlzcGxheVwiLCBvcHRpb25zLmNvdmVyID8gXCJub25lXCIgOiBcImlubGluZVwiLCB3aWR0aCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvMy5idWlsZFRyYW5zbGF0ZSA9IGZ1bmN0aW9uIGJ1aWxkVHJhbnNsYXRlKG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMkRGlyZWN0aW9uID0gdGhpcy5EaXJlY3Rpb24sXG4gICAgICAgIHJlc29sdmUgPSBfdGhpcyREaXJlY3Rpb24ucmVzb2x2ZSxcbiAgICAgICAgb3JpZW50ID0gX3RoaXMkRGlyZWN0aW9uLm9yaWVudDtcbiAgICB2YXIgdmFsdWVzID0gW107XG4gICAgdmFsdWVzLnB1c2godGhpcy5jc3NPZmZzZXRDbG9uZXMob3B0aW9ucykpO1xuICAgIHZhbHVlcy5wdXNoKHRoaXMuY3NzT2Zmc2V0R2FwcyhvcHRpb25zKSk7XG5cbiAgICBpZiAodGhpcy5pc0NlbnRlcihvcHRpb25zKSkge1xuICAgICAgdmFsdWVzLnB1c2godGhpcy5idWlsZENzc1ZhbHVlKG9yaWVudCgtNTApLCBcIiVcIikpO1xuICAgICAgdmFsdWVzLnB1c2guYXBwbHkodmFsdWVzLCB0aGlzLmNzc09mZnNldENlbnRlcihvcHRpb25zKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcy5maWx0ZXIoQm9vbGVhbikubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIFwidHJhbnNsYXRlXCIgKyByZXNvbHZlKFwiWFwiKSArIFwiKFwiICsgdmFsdWUgKyBcIilcIjtcbiAgICB9KS5qb2luKFwiIFwiKTtcbiAgfTtcblxuICBfcHJvdG8zLmNzc09mZnNldENsb25lcyA9IGZ1bmN0aW9uIGNzc09mZnNldENsb25lcyhvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzJERpcmVjdGlvbjIgPSB0aGlzLkRpcmVjdGlvbixcbiAgICAgICAgcmVzb2x2ZSA9IF90aGlzJERpcmVjdGlvbjIucmVzb2x2ZSxcbiAgICAgICAgb3JpZW50ID0gX3RoaXMkRGlyZWN0aW9uMi5vcmllbnQ7XG4gICAgdmFyIGNsb25lQ291bnQgPSB0aGlzLmdldENsb25lQ291bnQoKTtcblxuICAgIGlmICh0aGlzLmlzRml4ZWRXaWR0aChvcHRpb25zKSkge1xuICAgICAgdmFyIF90aGlzJHBhcnNlQ3NzVmFsdWUgPSB0aGlzLnBhcnNlQ3NzVmFsdWUob3B0aW9uc1tyZXNvbHZlKFwiZml4ZWRXaWR0aFwiKV0pLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkcGFyc2VDc3NWYWx1ZS52YWx1ZSxcbiAgICAgICAgICB1bml0MiA9IF90aGlzJHBhcnNlQ3NzVmFsdWUudW5pdDtcblxuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRDc3NWYWx1ZShvcmllbnQodmFsdWUpICogY2xvbmVDb3VudCwgdW5pdDIpO1xuICAgIH1cblxuICAgIHZhciBwZXJjZW50ID0gMTAwICogY2xvbmVDb3VudCAvIG9wdGlvbnMucGVyUGFnZTtcbiAgICByZXR1cm4gb3JpZW50KHBlcmNlbnQpICsgXCIlXCI7XG4gIH07XG5cbiAgX3Byb3RvMy5jc3NPZmZzZXRDZW50ZXIgPSBmdW5jdGlvbiBjc3NPZmZzZXRDZW50ZXIob3B0aW9ucykge1xuICAgIHZhciBfdGhpcyREaXJlY3Rpb24zID0gdGhpcy5EaXJlY3Rpb24sXG4gICAgICAgIHJlc29sdmUgPSBfdGhpcyREaXJlY3Rpb24zLnJlc29sdmUsXG4gICAgICAgIG9yaWVudCA9IF90aGlzJERpcmVjdGlvbjMub3JpZW50O1xuXG4gICAgaWYgKHRoaXMuaXNGaXhlZFdpZHRoKG9wdGlvbnMpKSB7XG4gICAgICB2YXIgX3RoaXMkcGFyc2VDc3NWYWx1ZTIgPSB0aGlzLnBhcnNlQ3NzVmFsdWUob3B0aW9uc1tyZXNvbHZlKFwiZml4ZWRXaWR0aFwiKV0pLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkcGFyc2VDc3NWYWx1ZTIudmFsdWUsXG4gICAgICAgICAgdW5pdDIgPSBfdGhpcyRwYXJzZUNzc1ZhbHVlMi51bml0O1xuXG4gICAgICByZXR1cm4gW3RoaXMuYnVpbGRDc3NWYWx1ZShvcmllbnQodmFsdWUgLyAyKSwgdW5pdDIpXTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWVzID0gW107XG4gICAgdmFyIHBlclBhZ2UgPSBvcHRpb25zLnBlclBhZ2UsXG4gICAgICAgIGdhcCA9IG9wdGlvbnMuZ2FwO1xuICAgIHZhbHVlcy5wdXNoKG9yaWVudCg1MCAvIHBlclBhZ2UpICsgXCIlXCIpO1xuXG4gICAgaWYgKGdhcCkge1xuICAgICAgdmFyIF90aGlzJHBhcnNlQ3NzVmFsdWUzID0gdGhpcy5wYXJzZUNzc1ZhbHVlKGdhcCksXG4gICAgICAgICAgX3ZhbHVlID0gX3RoaXMkcGFyc2VDc3NWYWx1ZTMudmFsdWUsXG4gICAgICAgICAgX3VuaXQgPSBfdGhpcyRwYXJzZUNzc1ZhbHVlMy51bml0O1xuXG4gICAgICB2YXIgZ2FwT2Zmc2V0ID0gKF92YWx1ZSAvIHBlclBhZ2UgLSBfdmFsdWUpIC8gMjtcbiAgICAgIHZhbHVlcy5wdXNoKHRoaXMuYnVpbGRDc3NWYWx1ZShvcmllbnQoZ2FwT2Zmc2V0KSwgX3VuaXQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xuXG4gIF9wcm90bzMuY3NzT2Zmc2V0R2FwcyA9IGZ1bmN0aW9uIGNzc09mZnNldEdhcHMob3B0aW9ucykge1xuICAgIHZhciBjbG9uZUNvdW50ID0gdGhpcy5nZXRDbG9uZUNvdW50KCk7XG5cbiAgICBpZiAoY2xvbmVDb3VudCAmJiBvcHRpb25zLmdhcCkge1xuICAgICAgdmFyIG9yaWVudCA9IHRoaXMuRGlyZWN0aW9uLm9yaWVudDtcblxuICAgICAgdmFyIF90aGlzJHBhcnNlQ3NzVmFsdWU0ID0gdGhpcy5wYXJzZUNzc1ZhbHVlKG9wdGlvbnMuZ2FwKSxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHBhcnNlQ3NzVmFsdWU0LnZhbHVlLFxuICAgICAgICAgIHVuaXQyID0gX3RoaXMkcGFyc2VDc3NWYWx1ZTQudW5pdDtcblxuICAgICAgaWYgKHRoaXMuaXNGaXhlZFdpZHRoKG9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkQ3NzVmFsdWUob3JpZW50KHZhbHVlICogY2xvbmVDb3VudCksIHVuaXQyKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBlclBhZ2UgPSBvcHRpb25zLnBlclBhZ2U7XG4gICAgICB2YXIgZ2FwcyA9IGNsb25lQ291bnQgLyBwZXJQYWdlO1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRDc3NWYWx1ZShvcmllbnQoZ2FwcyAqIHZhbHVlKSwgdW5pdDIpO1xuICAgIH1cblxuICAgIHJldHVybiBcIlwiO1xuICB9O1xuXG4gIF9wcm90bzMucmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc29sdmUocHJvcCkge1xuICAgIHJldHVybiBjYW1lbFRvS2ViYWIodGhpcy5EaXJlY3Rpb24ucmVzb2x2ZShwcm9wKSk7XG4gIH07XG5cbiAgX3Byb3RvMy5jc3NQYWRkaW5nID0gZnVuY3Rpb24gY3NzUGFkZGluZyhvcHRpb25zLCByaWdodCkge1xuICAgIHZhciBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nO1xuICAgIHZhciBwcm9wID0gdGhpcy5EaXJlY3Rpb24ucmVzb2x2ZShyaWdodCA/IFwicmlnaHRcIiA6IFwibGVmdFwiLCB0cnVlKTtcbiAgICByZXR1cm4gcGFkZGluZyAmJiB1bml0KHBhZGRpbmdbcHJvcF0gfHwgKGlzT2JqZWN0KHBhZGRpbmcpID8gMCA6IHBhZGRpbmcpKSB8fCBcIjBweFwiO1xuICB9O1xuXG4gIF9wcm90bzMuY3NzVHJhY2tIZWlnaHQgPSBmdW5jdGlvbiBjc3NUcmFja0hlaWdodChvcHRpb25zKSB7XG4gICAgdmFyIGhlaWdodCA9IFwiXCI7XG5cbiAgICBpZiAodGhpcy5pc1ZlcnRpY2FsKCkpIHtcbiAgICAgIGhlaWdodCA9IHRoaXMuY3NzSGVpZ2h0KG9wdGlvbnMpO1xuICAgICAgYXNzZXJ0KGhlaWdodCwgJ1wiaGVpZ2h0XCIgaXMgbWlzc2luZy4nKTtcbiAgICAgIGhlaWdodCA9IFwiY2FsYyhcIiArIGhlaWdodCArIFwiIC0gXCIgKyB0aGlzLmNzc1BhZGRpbmcob3B0aW9ucywgZmFsc2UpICsgXCIgLSBcIiArIHRoaXMuY3NzUGFkZGluZyhvcHRpb25zLCB0cnVlKSArIFwiKVwiO1xuICAgIH1cblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH07XG5cbiAgX3Byb3RvMy5jc3NIZWlnaHQgPSBmdW5jdGlvbiBjc3NIZWlnaHQob3B0aW9ucykge1xuICAgIHJldHVybiB1bml0KG9wdGlvbnMuaGVpZ2h0KTtcbiAgfTtcblxuICBfcHJvdG8zLmNzc1NsaWRlV2lkdGggPSBmdW5jdGlvbiBjc3NTbGlkZVdpZHRoKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5hdXRvV2lkdGggPyBcIlwiIDogdW5pdChvcHRpb25zLmZpeGVkV2lkdGgpIHx8ICh0aGlzLmlzVmVydGljYWwoKSA/IFwiXCIgOiB0aGlzLmNzc1NsaWRlU2l6ZShvcHRpb25zKSk7XG4gIH07XG5cbiAgX3Byb3RvMy5jc3NTbGlkZUhlaWdodCA9IGZ1bmN0aW9uIGNzc1NsaWRlSGVpZ2h0KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdW5pdChvcHRpb25zLmZpeGVkSGVpZ2h0KSB8fCAodGhpcy5pc1ZlcnRpY2FsKCkgPyBvcHRpb25zLmF1dG9IZWlnaHQgPyBcIlwiIDogdGhpcy5jc3NTbGlkZVNpemUob3B0aW9ucykgOiB0aGlzLmNzc0hlaWdodChvcHRpb25zKSk7XG4gIH07XG5cbiAgX3Byb3RvMy5jc3NTbGlkZVNpemUgPSBmdW5jdGlvbiBjc3NTbGlkZVNpemUob3B0aW9ucykge1xuICAgIHZhciBnYXAgPSB1bml0KG9wdGlvbnMuZ2FwKTtcbiAgICByZXR1cm4gXCJjYWxjKCgxMDAlXCIgKyAoZ2FwICYmIFwiICsgXCIgKyBnYXApICsgXCIpL1wiICsgKG9wdGlvbnMucGVyUGFnZSB8fCAxKSArIChnYXAgJiYgXCIgLSBcIiArIGdhcCkgKyBcIilcIjtcbiAgfTtcblxuICBfcHJvdG8zLmNzc0FzcGVjdFJhdGlvID0gZnVuY3Rpb24gY3NzQXNwZWN0UmF0aW8ob3B0aW9ucykge1xuICAgIHZhciBoZWlnaHRSYXRpbyA9IG9wdGlvbnMuaGVpZ2h0UmF0aW87XG4gICAgcmV0dXJuIGhlaWdodFJhdGlvID8gXCJcIiArIDEgLyBoZWlnaHRSYXRpbyA6IFwiXCI7XG4gIH07XG5cbiAgX3Byb3RvMy5idWlsZENzc1ZhbHVlID0gZnVuY3Rpb24gYnVpbGRDc3NWYWx1ZSh2YWx1ZSwgdW5pdDIpIHtcbiAgICByZXR1cm4gXCJcIiArIHZhbHVlICsgdW5pdDI7XG4gIH07XG5cbiAgX3Byb3RvMy5wYXJzZUNzc1ZhbHVlID0gZnVuY3Rpb24gcGFyc2VDc3NWYWx1ZSh2YWx1ZSkge1xuICAgIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgIHZhciBudW1iZXIgPSBwYXJzZUZsb2F0KHZhbHVlKSB8fCAwO1xuICAgICAgdmFyIHVuaXQyID0gdmFsdWUucmVwbGFjZSgvXFxkKihcXC5cXGQqKT8vLCBcIlwiKSB8fCBcInB4XCI7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogbnVtYmVyLFxuICAgICAgICB1bml0OiB1bml0MlxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgdW5pdDogXCJweFwiXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8zLnBhcnNlQnJlYWtwb2ludHMgPSBmdW5jdGlvbiBwYXJzZUJyZWFrcG9pbnRzKCkge1xuICAgIHZhciBfdGhpczkgPSB0aGlzO1xuXG4gICAgdmFyIGJyZWFrcG9pbnRzID0gdGhpcy5vcHRpb25zLmJyZWFrcG9pbnRzO1xuICAgIHRoaXMuYnJlYWtwb2ludHMucHVzaChbXCJkZWZhdWx0XCIsIHRoaXMub3B0aW9uc10pO1xuXG4gICAgaWYgKGJyZWFrcG9pbnRzKSB7XG4gICAgICBmb3JPd24oYnJlYWtwb2ludHMsIGZ1bmN0aW9uIChvcHRpb25zLCB3aWR0aCkge1xuICAgICAgICBfdGhpczkuYnJlYWtwb2ludHMucHVzaChbd2lkdGgsIG1lcmdlKG1lcmdlKHt9LCBfdGhpczkub3B0aW9ucyksIG9wdGlvbnMpXSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvMy5pc0ZpeGVkV2lkdGggPSBmdW5jdGlvbiBpc0ZpeGVkV2lkdGgob3B0aW9ucykge1xuICAgIHJldHVybiAhIW9wdGlvbnNbdGhpcy5EaXJlY3Rpb24ucmVzb2x2ZShcImZpeGVkV2lkdGhcIildO1xuICB9O1xuXG4gIF9wcm90bzMuaXNMb29wID0gZnVuY3Rpb24gaXNMb29wKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMudHlwZSA9PT0gTE9PUDtcbiAgfTtcblxuICBfcHJvdG8zLmlzQ2VudGVyID0gZnVuY3Rpb24gaXNDZW50ZXIob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmZvY3VzID09PSBcImNlbnRlclwiKSB7XG4gICAgICBpZiAodGhpcy5pc0xvb3AoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50eXBlID09PSBTTElERSkge1xuICAgICAgICByZXR1cm4gIXRoaXMub3B0aW9ucy50cmltU3BhY2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIF9wcm90bzMuaXNWZXJ0aWNhbCA9IGZ1bmN0aW9uIGlzVmVydGljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09IFRUQjtcbiAgfTtcblxuICBfcHJvdG8zLmJ1aWxkQ2xhc3NlcyA9IGZ1bmN0aW9uIGJ1aWxkQ2xhc3NlcygpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICByZXR1cm4gW0NMQVNTX1JPT1QsIENMQVNTX1JPT1QgKyBcIi0tXCIgKyBvcHRpb25zLnR5cGUsIENMQVNTX1JPT1QgKyBcIi0tXCIgKyBvcHRpb25zLmRpcmVjdGlvbiwgb3B0aW9ucy5kcmFnICYmIENMQVNTX1JPT1QgKyBcIi0tZHJhZ2dhYmxlXCIsIG9wdGlvbnMuaXNOYXZpZ2F0aW9uICYmIENMQVNTX1JPT1QgKyBcIi0tbmF2XCIsIENMQVNTX0FDVElWRSwgIXRoaXMuY29uZmlnLmhpZGRlbiAmJiBDTEFTU19SRU5ERVJFRF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpO1xuICB9O1xuXG4gIF9wcm90bzMuYnVpbGRBdHRycyA9IGZ1bmN0aW9uIGJ1aWxkQXR0cnMoYXR0cnMpIHtcbiAgICB2YXIgYXR0ciA9IFwiXCI7XG4gICAgZm9yT3duKGF0dHJzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgYXR0ciArPSB2YWx1ZSA/IFwiIFwiICsgY2FtZWxUb0tlYmFiKGtleSkgKyBcIj1cXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiIDogXCJcIjtcbiAgICB9KTtcbiAgICByZXR1cm4gYXR0ci50cmltKCk7XG4gIH07XG5cbiAgX3Byb3RvMy5idWlsZFN0eWxlcyA9IGZ1bmN0aW9uIGJ1aWxkU3R5bGVzKHN0eWxlcykge1xuICAgIHZhciBzdHlsZSA9IFwiXCI7XG4gICAgZm9yT3duKHN0eWxlcywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgIHN0eWxlICs9IFwiIFwiICsgY2FtZWxUb0tlYmFiKGtleSkgKyBcIjpcIiArIHZhbHVlICsgXCI7XCI7XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0eWxlLnRyaW0oKTtcbiAgfTtcblxuICBfcHJvdG8zLnJlbmRlclNsaWRlcyA9IGZ1bmN0aW9uIHJlbmRlclNsaWRlcygpIHtcbiAgICB2YXIgX3RoaXMxMCA9IHRoaXM7XG5cbiAgICB2YXIgdGFnID0gdGhpcy5jb25maWcuc2xpZGVUYWc7XG4gICAgcmV0dXJuIHRoaXMuc2xpZGVzLm1hcChmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgcmV0dXJuIFwiPFwiICsgdGFnICsgXCIgXCIgKyBfdGhpczEwLmJ1aWxkQXR0cnMoY29udGVudC5hdHRycykgKyBcIj5cIiArIChjb250ZW50Lmh0bWwgfHwgXCJcIikgKyBcIjwvXCIgKyB0YWcgKyBcIj5cIjtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIF9wcm90bzMuY292ZXIgPSBmdW5jdGlvbiBjb3Zlcihjb250ZW50KSB7XG4gICAgdmFyIHN0eWxlcyA9IGNvbnRlbnQuc3R5bGVzLFxuICAgICAgICBfY29udGVudCRodG1sID0gY29udGVudC5odG1sLFxuICAgICAgICBodG1sID0gX2NvbnRlbnQkaHRtbCA9PT0gdm9pZCAwID8gXCJcIiA6IF9jb250ZW50JGh0bWw7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmNvdmVyICYmICF0aGlzLm9wdGlvbnMubGF6eUxvYWQpIHtcbiAgICAgIHZhciBzcmMgPSBodG1sLm1hdGNoKC88aW1nLio/c3JjXFxzKj1cXHMqKFsnXCJdKSguKz8pXFwxLio/Pi8pO1xuXG4gICAgICBpZiAoc3JjICYmIHNyY1syXSkge1xuICAgICAgICBzdHlsZXMuYmFja2dyb3VuZCA9IFwiY2VudGVyL2NvdmVyIG5vLXJlcGVhdCB1cmwoJ1wiICsgc3JjWzJdICsgXCInKVwiO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8zLmdlbmVyYXRlQ2xvbmVzID0gZnVuY3Rpb24gZ2VuZXJhdGVDbG9uZXMoY29udGVudHMpIHtcbiAgICB2YXIgY2xhc3NlcyA9IHRoaXMub3B0aW9ucy5jbGFzc2VzO1xuICAgIHZhciBjb3VudCA9IHRoaXMuZ2V0Q2xvbmVDb3VudCgpO1xuICAgIHZhciBzbGlkZXMgPSBjb250ZW50cy5zbGljZSgpO1xuXG4gICAgd2hpbGUgKHNsaWRlcy5sZW5ndGggPCBjb3VudCkge1xuICAgICAgcHVzaChzbGlkZXMsIHNsaWRlcyk7XG4gICAgfVxuXG4gICAgcHVzaChzbGlkZXMuc2xpY2UoLWNvdW50KS5yZXZlcnNlKCksIHNsaWRlcy5zbGljZSgwLCBjb3VudCkpLmZvckVhY2goZnVuY3Rpb24gKGNvbnRlbnQsIGluZGV4KSB7XG4gICAgICB2YXIgYXR0cnMgPSBhc3NpZ24oe30sIGNvbnRlbnQuYXR0cnMsIHtcbiAgICAgICAgY2xhc3M6IGNvbnRlbnQuYXR0cnMuY2xhc3MgKyBcIiBcIiArIGNsYXNzZXMuY2xvbmVcbiAgICAgIH0pO1xuICAgICAgdmFyIGNsb25lID0gYXNzaWduKHt9LCBjb250ZW50LCB7XG4gICAgICAgIGF0dHJzOiBhdHRyc1xuICAgICAgfSk7XG4gICAgICBpbmRleCA8IGNvdW50ID8gY29udGVudHMudW5zaGlmdChjbG9uZSkgOiBjb250ZW50cy5wdXNoKGNsb25lKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8zLmdldENsb25lQ291bnQgPSBmdW5jdGlvbiBnZXRDbG9uZUNvdW50KCkge1xuICAgIGlmICh0aGlzLmlzTG9vcCgpKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgaWYgKG9wdGlvbnMuY2xvbmVzKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmNsb25lcztcbiAgICAgIH1cblxuICAgICAgdmFyIHBlclBhZ2UgPSBtYXguYXBwbHkodm9pZCAwLCB0aGlzLmJyZWFrcG9pbnRzLm1hcChmdW5jdGlvbiAoX3JlZjYpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMyID0gX3JlZjZbMV07XG4gICAgICAgIHJldHVybiBvcHRpb25zMi5wZXJQYWdlO1xuICAgICAgfSkpO1xuICAgICAgcmV0dXJuIHBlclBhZ2UgKiAoKG9wdGlvbnMuZmxpY2tNYXhQYWdlcyB8fCAxKSArIDEpO1xuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9O1xuXG4gIF9wcm90bzMucmVuZGVyQXJyb3dzID0gZnVuY3Rpb24gcmVuZGVyQXJyb3dzKCkge1xuICAgIHZhciBodG1sID0gXCJcIjtcbiAgICBodG1sICs9IFwiPGRpdiBjbGFzcz1cXFwiXCIgKyB0aGlzLm9wdGlvbnMuY2xhc3Nlcy5hcnJvd3MgKyBcIlxcXCI+XCI7XG4gICAgaHRtbCArPSB0aGlzLnJlbmRlckFycm93KHRydWUpO1xuICAgIGh0bWwgKz0gdGhpcy5yZW5kZXJBcnJvdyhmYWxzZSk7XG4gICAgaHRtbCArPSBcIjwvZGl2PlwiO1xuICAgIHJldHVybiBodG1sO1xuICB9O1xuXG4gIF9wcm90bzMucmVuZGVyQXJyb3cgPSBmdW5jdGlvbiByZW5kZXJBcnJvdyhwcmV2KSB7XG4gICAgdmFyIF90aGlzJG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGNsYXNzZXMgPSBfdGhpcyRvcHRpb25zLmNsYXNzZXMsXG4gICAgICAgIGkxOG4gPSBfdGhpcyRvcHRpb25zLmkxOG47XG4gICAgdmFyIGF0dHJzID0ge1xuICAgICAgY2xhc3M6IGNsYXNzZXMuYXJyb3cgKyBcIiBcIiArIChwcmV2ID8gY2xhc3Nlcy5wcmV2IDogY2xhc3Nlcy5uZXh0KSxcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBhcmlhTGFiZWw6IHByZXYgPyBpMThuLnByZXYgOiBpMThuLm5leHRcbiAgICB9O1xuICAgIHJldHVybiBcIjxidXR0b24gXCIgKyB0aGlzLmJ1aWxkQXR0cnMoYXR0cnMpICsgXCI+PHN2ZyB4bWxucz1cXFwiXCIgKyBYTUxfTkFNRV9TUEFDRSArIFwiXFxcIiB2aWV3Qm94PVxcXCIwIDAgXCIgKyBTSVpFICsgXCIgXCIgKyBTSVpFICsgXCJcXFwiIHdpZHRoPVxcXCJcIiArIFNJWkUgKyBcIlxcXCIgaGVpZ2h0PVxcXCJcIiArIFNJWkUgKyBcIlxcXCI+PHBhdGggZD1cXFwiXCIgKyAodGhpcy5vcHRpb25zLmFycm93UGF0aCB8fCBQQVRIKSArIFwiXFxcIiAvPjwvc3ZnPjwvYnV0dG9uPlwiO1xuICB9O1xuXG4gIF9wcm90bzMuaHRtbCA9IGZ1bmN0aW9uIGh0bWwoKSB7XG4gICAgdmFyIF90aGlzJGNvbmZpZyA9IHRoaXMuY29uZmlnLFxuICAgICAgICByb290Q2xhc3MgPSBfdGhpcyRjb25maWcucm9vdENsYXNzLFxuICAgICAgICBsaXN0VGFnID0gX3RoaXMkY29uZmlnLmxpc3RUYWcsXG4gICAgICAgIGFycm93cyA9IF90aGlzJGNvbmZpZy5hcnJvd3MsXG4gICAgICAgIGJlZm9yZVRyYWNrID0gX3RoaXMkY29uZmlnLmJlZm9yZVRyYWNrLFxuICAgICAgICBhZnRlclRyYWNrID0gX3RoaXMkY29uZmlnLmFmdGVyVHJhY2ssXG4gICAgICAgIHNsaWRlciA9IF90aGlzJGNvbmZpZy5zbGlkZXIsXG4gICAgICAgIGJlZm9yZVNsaWRlciA9IF90aGlzJGNvbmZpZy5iZWZvcmVTbGlkZXIsXG4gICAgICAgIGFmdGVyU2xpZGVyID0gX3RoaXMkY29uZmlnLmFmdGVyU2xpZGVyO1xuICAgIHZhciBodG1sID0gXCJcIjtcbiAgICBodG1sICs9IFwiPGRpdiBpZD1cXFwiXCIgKyB0aGlzLmlkICsgXCJcXFwiIGNsYXNzPVxcXCJcIiArIHRoaXMuYnVpbGRDbGFzc2VzKCkgKyBcIiBcIiArIChyb290Q2xhc3MgfHwgXCJcIikgKyBcIlxcXCI+XCI7XG4gICAgaHRtbCArPSBcIjxzdHlsZT5cIiArIHRoaXMuU3R5bGUuYnVpbGQoKSArIFwiPC9zdHlsZT5cIjtcblxuICAgIGlmIChzbGlkZXIpIHtcbiAgICAgIGh0bWwgKz0gYmVmb3JlU2xpZGVyIHx8IFwiXCI7XG4gICAgICBodG1sICs9IFwiPGRpdiBjbGFzcz1cXFwic3BsaWRlX19zbGlkZXJcXFwiPlwiO1xuICAgIH1cblxuICAgIGh0bWwgKz0gYmVmb3JlVHJhY2sgfHwgXCJcIjtcblxuICAgIGlmIChhcnJvd3MpIHtcbiAgICAgIGh0bWwgKz0gdGhpcy5yZW5kZXJBcnJvd3MoKTtcbiAgICB9XG5cbiAgICBodG1sICs9IFwiPGRpdiBjbGFzcz1cXFwic3BsaWRlX190cmFja1xcXCI+XCI7XG4gICAgaHRtbCArPSBcIjxcIiArIGxpc3RUYWcgKyBcIiBjbGFzcz1cXFwic3BsaWRlX19saXN0XFxcIj5cIjtcbiAgICBodG1sICs9IHRoaXMucmVuZGVyU2xpZGVzKCk7XG4gICAgaHRtbCArPSBcIjwvXCIgKyBsaXN0VGFnICsgXCI+XCI7XG4gICAgaHRtbCArPSBcIjwvZGl2PlwiO1xuICAgIGh0bWwgKz0gYWZ0ZXJUcmFjayB8fCBcIlwiO1xuXG4gICAgaWYgKHNsaWRlcikge1xuICAgICAgaHRtbCArPSBcIjwvZGl2PlwiO1xuICAgICAgaHRtbCArPSBhZnRlclNsaWRlciB8fCBcIlwiO1xuICAgIH1cblxuICAgIGh0bWwgKz0gXCI8L2Rpdj5cIjtcbiAgICByZXR1cm4gaHRtbDtcbiAgfTtcblxuICByZXR1cm4gU3BsaWRlUmVuZGVyZXI7XG59KCk7XG5cbmV4cG9ydCB7IENMQVNTRVMsIENMQVNTX0FDVElWRSwgQ0xBU1NfQVJST1csIENMQVNTX0FSUk9XUywgQ0xBU1NfQVJST1dfTkVYVCwgQ0xBU1NfQVJST1dfUFJFViwgQ0xBU1NfQ0xPTkUsIENMQVNTX0NPTlRBSU5FUiwgQ0xBU1NfRk9DVVNfSU4sIENMQVNTX0lOSVRJQUxJWkVELCBDTEFTU19MSVNULCBDTEFTU19MT0FESU5HLCBDTEFTU19ORVhULCBDTEFTU19PVkVSRkxPVywgQ0xBU1NfUEFHSU5BVElPTiwgQ0xBU1NfUEFHSU5BVElPTl9QQUdFLCBDTEFTU19QUkVWLCBDTEFTU19QUk9HUkVTUywgQ0xBU1NfUFJPR1JFU1NfQkFSLCBDTEFTU19ST09ULCBDTEFTU19TTElERSwgQ0xBU1NfU1BJTk5FUiwgQ0xBU1NfU1IsIENMQVNTX1RPR0dMRSwgQ0xBU1NfVE9HR0xFX1BBVVNFLCBDTEFTU19UT0dHTEVfUExBWSwgQ0xBU1NfVFJBQ0ssIENMQVNTX1ZJU0lCTEUsIERFRkFVTFRTLCBFVkVOVF9BQ1RJVkUsIEVWRU5UX0FSUk9XU19NT1VOVEVELCBFVkVOVF9BUlJPV1NfVVBEQVRFRCwgRVZFTlRfQVVUT1BMQVlfUEFVU0UsIEVWRU5UX0FVVE9QTEFZX1BMQVksIEVWRU5UX0FVVE9QTEFZX1BMQVlJTkcsIEVWRU5UX0NMSUNLLCBFVkVOVF9ERVNUUk9ZLCBFVkVOVF9EUkFHLCBFVkVOVF9EUkFHR0VELCBFVkVOVF9EUkFHR0lORywgRVZFTlRfRU5EX0lOREVYX0NIQU5HRUQsIEVWRU5UX0hJRERFTiwgRVZFTlRfSU5BQ1RJVkUsIEVWRU5UX0xBWllMT0FEX0xPQURFRCwgRVZFTlRfTU9VTlRFRCwgRVZFTlRfTU9WRSwgRVZFTlRfTU9WRUQsIEVWRU5UX05BVklHQVRJT05fTU9VTlRFRCwgRVZFTlRfT1ZFUkZMT1csIEVWRU5UX1BBR0lOQVRJT05fTU9VTlRFRCwgRVZFTlRfUEFHSU5BVElPTl9VUERBVEVELCBFVkVOVF9SRUFEWSwgRVZFTlRfUkVGUkVTSCwgRVZFTlRfUkVTSVpFLCBFVkVOVF9SRVNJWkVELCBFVkVOVF9TQ1JPTEwsIEVWRU5UX1NDUk9MTEVELCBFVkVOVF9TSElGVEVELCBFVkVOVF9TTElERV9LRVlET1dOLCBFVkVOVF9VUERBVEVELCBFVkVOVF9WSVNJQkxFLCBFdmVudEJpbmRlciwgRXZlbnRJbnRlcmZhY2UsIEZBREUsIExPT1AsIExUUiwgUlRMLCBSZXF1ZXN0SW50ZXJ2YWwsIFNMSURFLCBTVEFUVVNfQ0xBU1NFUywgU3BsaWRlLCBTcGxpZGVSZW5kZXJlciwgU3RhdGUsIFRUQiwgVGhyb3R0bGUsIFNwbGlkZSBhcyBkZWZhdWx0IH07XG4iLCJmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuLy8gT2xkZXIgYnJvd3NlcnMgZG9uJ3Qgc3VwcG9ydCBldmVudCBvcHRpb25zLCBmZWF0dXJlIGRldGVjdCBpdC5cblxuLy8gQWRvcHRlZCBhbmQgbW9kaWZpZWQgc29sdXRpb24gZnJvbSBCb2hkYW4gRGlkdWtoICgyMDE3KVxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDE1OTQ5OTcvaW9zLTEwLXNhZmFyaS1wcmV2ZW50LXNjcm9sbGluZy1iZWhpbmQtYS1maXhlZC1vdmVybGF5LWFuZC1tYWludGFpbi1zY3JvbGwtcG9zaVxuXG52YXIgaGFzUGFzc2l2ZUV2ZW50cyA9IGZhbHNlO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBwYXNzaXZlVGVzdE9wdGlvbnMgPSB7XG4gICAgZ2V0IHBhc3NpdmUoKSB7XG4gICAgICBoYXNQYXNzaXZlRXZlbnRzID0gdHJ1ZTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9O1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBwYXNzaXZlVGVzdE9wdGlvbnMpO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdFBhc3NpdmUnLCBudWxsLCBwYXNzaXZlVGVzdE9wdGlvbnMpO1xufVxuXG52YXIgaXNJb3NEZXZpY2UgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0gJiYgKC9pUChhZHxob25lfG9kKS8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtKSB8fCB3aW5kb3cubmF2aWdhdG9yLnBsYXRmb3JtID09PSAnTWFjSW50ZWwnICYmIHdpbmRvdy5uYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAxKTtcblxuXG52YXIgbG9ja3MgPSBbXTtcbnZhciBkb2N1bWVudExpc3RlbmVyQWRkZWQgPSBmYWxzZTtcbnZhciBpbml0aWFsQ2xpZW50WSA9IC0xO1xudmFyIHByZXZpb3VzQm9keU92ZXJmbG93U2V0dGluZyA9IHZvaWQgMDtcbnZhciBwcmV2aW91c0JvZHlQb3NpdGlvbiA9IHZvaWQgMDtcbnZhciBwcmV2aW91c0JvZHlQYWRkaW5nUmlnaHQgPSB2b2lkIDA7XG5cbi8vIHJldHVybnMgdHJ1ZSBpZiBgZWxgIHNob3VsZCBiZSBhbGxvd2VkIHRvIHJlY2VpdmUgdG91Y2htb3ZlIGV2ZW50cy5cbnZhciBhbGxvd1RvdWNoTW92ZSA9IGZ1bmN0aW9uIGFsbG93VG91Y2hNb3ZlKGVsKSB7XG4gIHJldHVybiBsb2Nrcy5zb21lKGZ1bmN0aW9uIChsb2NrKSB7XG4gICAgaWYgKGxvY2sub3B0aW9ucy5hbGxvd1RvdWNoTW92ZSAmJiBsb2NrLm9wdGlvbnMuYWxsb3dUb3VjaE1vdmUoZWwpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufTtcblxudmFyIHByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gcHJldmVudERlZmF1bHQocmF3RXZlbnQpIHtcbiAgdmFyIGUgPSByYXdFdmVudCB8fCB3aW5kb3cuZXZlbnQ7XG5cbiAgLy8gRm9yIHRoZSBjYXNlIHdoZXJlYnkgY29uc3VtZXJzIGFkZHMgYSB0b3VjaG1vdmUgZXZlbnQgbGlzdGVuZXIgdG8gZG9jdW1lbnQuXG4gIC8vIFJlY2FsbCB0aGF0IHdlIGRvIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnREZWZhdWx0LCB7IHBhc3NpdmU6IGZhbHNlIH0pXG4gIC8vIGluIGRpc2FibGVCb2R5U2Nyb2xsIC0gc28gaWYgd2UgcHJvdmlkZSB0aGlzIG9wcG9ydHVuaXR5IHRvIGFsbG93VG91Y2hNb3ZlLCB0aGVuXG4gIC8vIHRoZSB0b3VjaG1vdmUgZXZlbnQgb24gZG9jdW1lbnQgd2lsbCBicmVhay5cbiAgaWYgKGFsbG93VG91Y2hNb3ZlKGUudGFyZ2V0KSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gRG8gbm90IHByZXZlbnQgaWYgdGhlIGV2ZW50IGhhcyBtb3JlIHRoYW4gb25lIHRvdWNoICh1c3VhbGx5IG1lYW5pbmcgdGhpcyBpcyBhIG11bHRpIHRvdWNoIGdlc3R1cmUgbGlrZSBwaW5jaCB0byB6b29tKS5cbiAgaWYgKGUudG91Y2hlcy5sZW5ndGggPiAxKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBzZXRPdmVyZmxvd0hpZGRlbiA9IGZ1bmN0aW9uIHNldE92ZXJmbG93SGlkZGVuKG9wdGlvbnMpIHtcbiAgLy8gSWYgcHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0IGlzIGFscmVhZHkgc2V0LCBkb24ndCBzZXQgaXQgYWdhaW4uXG4gIGlmIChwcmV2aW91c0JvZHlQYWRkaW5nUmlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBfcmVzZXJ2ZVNjcm9sbEJhckdhcCA9ICEhb3B0aW9ucyAmJiBvcHRpb25zLnJlc2VydmVTY3JvbGxCYXJHYXAgPT09IHRydWU7XG4gICAgdmFyIHNjcm9sbEJhckdhcCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgaWYgKF9yZXNlcnZlU2Nyb2xsQmFyR2FwICYmIHNjcm9sbEJhckdhcCA+IDApIHtcbiAgICAgIHZhciBjb21wdXRlZEJvZHlQYWRkaW5nUmlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JyksIDEwKTtcbiAgICAgIHByZXZpb3VzQm9keVBhZGRpbmdSaWdodCA9IGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0O1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBjb21wdXRlZEJvZHlQYWRkaW5nUmlnaHQgKyBzY3JvbGxCYXJHYXAgKyAncHgnO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIHByZXZpb3VzQm9keU92ZXJmbG93U2V0dGluZyBpcyBhbHJlYWR5IHNldCwgZG9uJ3Qgc2V0IGl0IGFnYWluLlxuICBpZiAocHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICBwcmV2aW91c0JvZHlPdmVyZmxvd1NldHRpbmcgPSBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93O1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgfVxufTtcblxudmFyIHJlc3RvcmVPdmVyZmxvd1NldHRpbmcgPSBmdW5jdGlvbiByZXN0b3JlT3ZlcmZsb3dTZXR0aW5nKCkge1xuICBpZiAocHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHByZXZpb3VzQm9keVBhZGRpbmdSaWdodDtcblxuICAgIC8vIFJlc3RvcmUgcHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0IHRvIHVuZGVmaW5lZCBzbyBzZXRPdmVyZmxvd0hpZGRlbiBrbm93cyBpdFxuICAgIC8vIGNhbiBiZSBzZXQgYWdhaW4uXG4gICAgcHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHByZXZpb3VzQm9keU92ZXJmbG93U2V0dGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IHByZXZpb3VzQm9keU92ZXJmbG93U2V0dGluZztcblxuICAgIC8vIFJlc3RvcmUgcHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nIHRvIHVuZGVmaW5lZFxuICAgIC8vIHNvIHNldE92ZXJmbG93SGlkZGVuIGtub3dzIGl0IGNhbiBiZSBzZXQgYWdhaW4uXG4gICAgcHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nID0gdW5kZWZpbmVkO1xuICB9XG59O1xuXG52YXIgc2V0UG9zaXRpb25GaXhlZCA9IGZ1bmN0aW9uIHNldFBvc2l0aW9uRml4ZWQoKSB7XG4gIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBJZiBwcmV2aW91c0JvZHlQb3NpdGlvbiBpcyBhbHJlYWR5IHNldCwgZG9uJ3Qgc2V0IGl0IGFnYWluLlxuICAgIGlmIChwcmV2aW91c0JvZHlQb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcmV2aW91c0JvZHlQb3NpdGlvbiA9IHtcbiAgICAgICAgcG9zaXRpb246IGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24sXG4gICAgICAgIHRvcDogZG9jdW1lbnQuYm9keS5zdHlsZS50b3AsXG4gICAgICAgIGxlZnQ6IGRvY3VtZW50LmJvZHkuc3R5bGUubGVmdFxuICAgICAgfTtcblxuICAgICAgLy8gVXBkYXRlIHRoZSBkb20gaW5zaWRlIGFuIGFuaW1hdGlvbiBmcmFtZSBcbiAgICAgIHZhciBfd2luZG93ID0gd2luZG93LFxuICAgICAgICAgIHNjcm9sbFkgPSBfd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgc2Nyb2xsWCA9IF93aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICBpbm5lckhlaWdodCA9IF93aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSAtc2Nyb2xsWTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubGVmdCA9IC1zY3JvbGxYO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIEF0dGVtcHQgdG8gY2hlY2sgaWYgdGhlIGJvdHRvbSBiYXIgYXBwZWFyZWQgZHVlIHRvIHRoZSBwb3NpdGlvbiBjaGFuZ2VcbiAgICAgICAgICB2YXIgYm90dG9tQmFySGVpZ2h0ID0gaW5uZXJIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgaWYgKGJvdHRvbUJhckhlaWdodCAmJiBzY3JvbGxZID49IGlubmVySGVpZ2h0KSB7XG4gICAgICAgICAgICAvLyBNb3ZlIHRoZSBjb250ZW50IGZ1cnRoZXIgdXAgc28gdGhhdCB0aGUgYm90dG9tIGJhciBkb2Vzbid0IGhpZGUgaXRcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gLShzY3JvbGxZICsgYm90dG9tQmFySGVpZ2h0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIHJlc3RvcmVQb3NpdGlvblNldHRpbmcgPSBmdW5jdGlvbiByZXN0b3JlUG9zaXRpb25TZXR0aW5nKCkge1xuICBpZiAocHJldmlvdXNCb2R5UG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIENvbnZlcnQgdGhlIHBvc2l0aW9uIGZyb20gXCJweFwiIHRvIEludFxuICAgIHZhciB5ID0gLXBhcnNlSW50KGRvY3VtZW50LmJvZHkuc3R5bGUudG9wLCAxMCk7XG4gICAgdmFyIHggPSAtcGFyc2VJbnQoZG9jdW1lbnQuYm9keS5zdHlsZS5sZWZ0LCAxMCk7XG5cbiAgICAvLyBSZXN0b3JlIHN0eWxlc1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSBwcmV2aW91c0JvZHlQb3NpdGlvbi5wb3NpdGlvbjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9IHByZXZpb3VzQm9keVBvc2l0aW9uLnRvcDtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmxlZnQgPSBwcmV2aW91c0JvZHlQb3NpdGlvbi5sZWZ0O1xuXG4gICAgLy8gUmVzdG9yZSBzY3JvbGxcbiAgICB3aW5kb3cuc2Nyb2xsVG8oeCwgeSk7XG5cbiAgICBwcmV2aW91c0JvZHlQb3NpdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvc2Nyb2xsSGVpZ2h0I1Byb2JsZW1zX2FuZF9zb2x1dGlvbnNcbnZhciBpc1RhcmdldEVsZW1lbnRUb3RhbGx5U2Nyb2xsZWQgPSBmdW5jdGlvbiBpc1RhcmdldEVsZW1lbnRUb3RhbGx5U2Nyb2xsZWQodGFyZ2V0RWxlbWVudCkge1xuICByZXR1cm4gdGFyZ2V0RWxlbWVudCA/IHRhcmdldEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gdGFyZ2V0RWxlbWVudC5zY3JvbGxUb3AgPD0gdGFyZ2V0RWxlbWVudC5jbGllbnRIZWlnaHQgOiBmYWxzZTtcbn07XG5cbnZhciBoYW5kbGVTY3JvbGwgPSBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoZXZlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgdmFyIGNsaWVudFkgPSBldmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFkgLSBpbml0aWFsQ2xpZW50WTtcblxuICBpZiAoYWxsb3dUb3VjaE1vdmUoZXZlbnQudGFyZ2V0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0YXJnZXRFbGVtZW50ICYmIHRhcmdldEVsZW1lbnQuc2Nyb2xsVG9wID09PSAwICYmIGNsaWVudFkgPiAwKSB7XG4gICAgLy8gZWxlbWVudCBpcyBhdCB0aGUgdG9wIG9mIGl0cyBzY3JvbGwuXG4gICAgcmV0dXJuIHByZXZlbnREZWZhdWx0KGV2ZW50KTtcbiAgfVxuXG4gIGlmIChpc1RhcmdldEVsZW1lbnRUb3RhbGx5U2Nyb2xsZWQodGFyZ2V0RWxlbWVudCkgJiYgY2xpZW50WSA8IDApIHtcbiAgICAvLyBlbGVtZW50IGlzIGF0IHRoZSBib3R0b20gb2YgaXRzIHNjcm9sbC5cbiAgICByZXR1cm4gcHJldmVudERlZmF1bHQoZXZlbnQpO1xuICB9XG5cbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIHJldHVybiB0cnVlO1xufTtcblxuZXhwb3J0IHZhciBkaXNhYmxlQm9keVNjcm9sbCA9IGZ1bmN0aW9uIGRpc2FibGVCb2R5U2Nyb2xsKHRhcmdldEVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgLy8gdGFyZ2V0RWxlbWVudCBtdXN0IGJlIHByb3ZpZGVkXG4gIGlmICghdGFyZ2V0RWxlbWVudCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignZGlzYWJsZUJvZHlTY3JvbGwgdW5zdWNjZXNzZnVsIC0gdGFyZ2V0RWxlbWVudCBtdXN0IGJlIHByb3ZpZGVkIHdoZW4gY2FsbGluZyBkaXNhYmxlQm9keVNjcm9sbCBvbiBJT1MgZGV2aWNlcy4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBkaXNhYmxlQm9keVNjcm9sbCBtdXN0IG5vdCBoYXZlIGJlZW4gY2FsbGVkIG9uIHRoaXMgdGFyZ2V0RWxlbWVudCBiZWZvcmVcbiAgaWYgKGxvY2tzLnNvbWUoZnVuY3Rpb24gKGxvY2spIHtcbiAgICByZXR1cm4gbG9jay50YXJnZXRFbGVtZW50ID09PSB0YXJnZXRFbGVtZW50O1xuICB9KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBsb2NrID0ge1xuICAgIHRhcmdldEVsZW1lbnQ6IHRhcmdldEVsZW1lbnQsXG4gICAgb3B0aW9uczogb3B0aW9ucyB8fCB7fVxuICB9O1xuXG4gIGxvY2tzID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShsb2NrcyksIFtsb2NrXSk7XG5cbiAgaWYgKGlzSW9zRGV2aWNlKSB7XG4gICAgc2V0UG9zaXRpb25GaXhlZCgpO1xuICB9IGVsc2Uge1xuICAgIHNldE92ZXJmbG93SGlkZGVuKG9wdGlvbnMpO1xuICB9XG5cbiAgaWYgKGlzSW9zRGV2aWNlKSB7XG4gICAgdGFyZ2V0RWxlbWVudC5vbnRvdWNoc3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXRUb3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAvLyBkZXRlY3Qgc2luZ2xlIHRvdWNoLlxuICAgICAgICBpbml0aWFsQ2xpZW50WSA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRhcmdldEVsZW1lbnQub250b3VjaG1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50YXJnZXRUb3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAvLyBkZXRlY3Qgc2luZ2xlIHRvdWNoLlxuICAgICAgICBoYW5kbGVTY3JvbGwoZXZlbnQsIHRhcmdldEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIWRvY3VtZW50TGlzdGVuZXJBZGRlZCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudERlZmF1bHQsIGhhc1Bhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiB1bmRlZmluZWQpO1xuICAgICAgZG9jdW1lbnRMaXN0ZW5lckFkZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCB2YXIgY2xlYXJBbGxCb2R5U2Nyb2xsTG9ja3MgPSBmdW5jdGlvbiBjbGVhckFsbEJvZHlTY3JvbGxMb2NrcygpIHtcbiAgaWYgKGlzSW9zRGV2aWNlKSB7XG4gICAgLy8gQ2xlYXIgYWxsIGxvY2tzIG9udG91Y2hzdGFydC9vbnRvdWNobW92ZSBoYW5kbGVycywgYW5kIHRoZSByZWZlcmVuY2VzLlxuICAgIGxvY2tzLmZvckVhY2goZnVuY3Rpb24gKGxvY2spIHtcbiAgICAgIGxvY2sudGFyZ2V0RWxlbWVudC5vbnRvdWNoc3RhcnQgPSBudWxsO1xuICAgICAgbG9jay50YXJnZXRFbGVtZW50Lm9udG91Y2htb3ZlID0gbnVsbDtcbiAgICB9KTtcblxuICAgIGlmIChkb2N1bWVudExpc3RlbmVyQWRkZWQpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnREZWZhdWx0LCBoYXNQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogdW5kZWZpbmVkKTtcbiAgICAgIGRvY3VtZW50TGlzdGVuZXJBZGRlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IGluaXRpYWwgY2xpZW50WS5cbiAgICBpbml0aWFsQ2xpZW50WSA9IC0xO1xuICB9XG5cbiAgaWYgKGlzSW9zRGV2aWNlKSB7XG4gICAgcmVzdG9yZVBvc2l0aW9uU2V0dGluZygpO1xuICB9IGVsc2Uge1xuICAgIHJlc3RvcmVPdmVyZmxvd1NldHRpbmcoKTtcbiAgfVxuXG4gIGxvY2tzID0gW107XG59O1xuXG5leHBvcnQgdmFyIGVuYWJsZUJvZHlTY3JvbGwgPSBmdW5jdGlvbiBlbmFibGVCb2R5U2Nyb2xsKHRhcmdldEVsZW1lbnQpIHtcbiAgaWYgKCF0YXJnZXRFbGVtZW50KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdlbmFibGVCb2R5U2Nyb2xsIHVuc3VjY2Vzc2Z1bCAtIHRhcmdldEVsZW1lbnQgbXVzdCBiZSBwcm92aWRlZCB3aGVuIGNhbGxpbmcgZW5hYmxlQm9keVNjcm9sbCBvbiBJT1MgZGV2aWNlcy4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBsb2NrcyA9IGxvY2tzLmZpbHRlcihmdW5jdGlvbiAobG9jaykge1xuICAgIHJldHVybiBsb2NrLnRhcmdldEVsZW1lbnQgIT09IHRhcmdldEVsZW1lbnQ7XG4gIH0pO1xuXG4gIGlmIChpc0lvc0RldmljZSkge1xuICAgIHRhcmdldEVsZW1lbnQub250b3VjaHN0YXJ0ID0gbnVsbDtcbiAgICB0YXJnZXRFbGVtZW50Lm9udG91Y2htb3ZlID0gbnVsbDtcblxuICAgIGlmIChkb2N1bWVudExpc3RlbmVyQWRkZWQgJiYgbG9ja3MubGVuZ3RoID09PSAwKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50RGVmYXVsdCwgaGFzUGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IHVuZGVmaW5lZCk7XG4gICAgICBkb2N1bWVudExpc3RlbmVyQWRkZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoaXNJb3NEZXZpY2UpIHtcbiAgICByZXN0b3JlUG9zaXRpb25TZXR0aW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdG9yZU92ZXJmbG93U2V0dGluZygpO1xuICB9XG59O1xuXG4iLCJleHBvcnQgY29uc3QgZGVjbE9mTnVtID0gKG51bWJlciwgdGl0bGVzKSA9PiB7XHJcbiAgICBjb25zdCBjYXNlcyA9IFsyLCAwLCAxLCAxLCAxLCAyXTsgIFxyXG4gICAgcmV0dXJuIHRpdGxlc1sgKG51bWJlciUxMDA+NCAmJiBudW1iZXIlMTAwPDIwKT8gMiA6IGNhc2VzWyhudW1iZXIlMTA8NSk/bnVtYmVyJTEwOjVdIF07IFxyXG59IiwiZXhwb3J0IGNvbnN0IGJ1dHRvbkNhdGFsb2cgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGVyb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm9cIik7XHJcbiAgY29uc3QgYnV0dG9uQ2F0YWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNhdGFsb2dcIik7XHJcblxyXG4gIGlmIChidXR0b25DYXRhbG9nKSB7XHJcbiAgICBsZXQgdGltZW91dElkO1xyXG4gICAgbGV0IGlzT3BhY2l0eSA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZU9ic2VydmVyID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcclxuICAgICAgICAoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcclxuICAgICAgICAgICAgICBidXR0b25DYXRhbG9nLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlLW9wYWNpdHlcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgYnV0dG9uQ2F0YWxvZy5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZS1vcGFjaXR5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRocmVzaG9sZDogMCxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGhlcm9TZWN0aW9uKTtcclxuICAgIH07XHJcblxyXG4gICAgY3JlYXRlT2JzZXJ2ZXIoKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG5cclxuICAgICAgaWYgKCFpc09wYWNpdHkpIHtcclxuICAgICAgICBidXR0b25DYXRhbG9nLnN0eWxlLm9wYWNpdHkgPSAwLjU7XHJcbiAgICAgICAgaXNPcGFjaXR5ID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgYnV0dG9uQ2F0YWxvZy5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICBpc09wYWNpdHkgPSBmYWxzZTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IFNwbGlkZSBmcm9tIFwiQHNwbGlkZWpzL3NwbGlkZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhdGFsb2dTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0YWJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGFsb2dfX3NsaWRlcl90YWJzJyk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRhbG9nLWNhdGVnb3J5X190aXRsZScpXHJcbiAgXHJcbiAgICBpZiAodGFiV3JhcHBlcikge1xyXG4gICAgICBsZXQgdGFicyA9IHRhYldyYXBwZXIucXVlcnlTZWxlY3RvckFsbChcIi5jYXRhbG9nLXRhYlwiKTtcclxuICBcclxuICAgICAgbGV0IGFjdGl2ZUluZGV4ID0gMDtcclxuICAgICAgbGV0IHRhYlNsaWRlcjtcclxuXHJcbiAgICAgIHRhYlNsaWRlciA9IG5ldyBTcGxpZGUoXCIuY2F0YWxvZ19fc2xpZGVyX3RhYnMtLXNsaWRlclwiLCB7XHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBwYWdpbmF0aW9uOiBmYWxzZSxcclxuICAgICAgICBjbG9uZXM6IDAsXHJcbiAgICAgICAgYXV0b1dpZHRoOiB0cnVlLFxyXG4gICAgICAgIG1lZGlhUXVlcnk6IFwibWluXCIsXHJcbiAgICAgICAgc3RhcnQ6IGFjdGl2ZUluZGV4LFxyXG4gICAgICAgIHBhZGRpbmc6IHtsZWZ0OiAxMiwgcmlnaHQ6IDEyfSxcclxuICAgICAgICBnYXA6IDEyLFxyXG4gICAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgICA5OTI6IHsgZGVzdHJveTogdHJ1ZSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLm1vdW50KCk7XHJcblxyXG4gICAgICBjb25zdCBjaGFuZ2VTbGlkZSA9IChpZHgpID0+IHtcclxuICAgICAgICB0YWJzID0gdGFiV3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGFsb2ctdGFiXCIpO1xyXG4gICAgXHJcbiAgICAgICAgdGFicy5mb3JFYWNoKCh0YWIsIHRhYkluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhc2V0SW5kZXggPSBOdW1iZXIodGFiLmRhdGFzZXQuc2xpZGVJZHgpXHJcblxyXG4gICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICBcclxuICAgICAgICAgIGlmIChkYXRhc2V0SW5kZXggPT09IGlkeCkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhc2V0VGl0bGUgPSB0YWIuZGF0YXNldC50aXRsZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFiU2xpZGVyICYmICF0YWJTbGlkZXIub3B0aW9ucy5kZXN0cm95KSB7XHJcbiAgICAgICAgICAgICAgdGFiU2xpZGVyLmdvKGRhdGFzZXRJbmRleClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBkYXRhc2V0VGl0bGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGFiV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5jYXRhbG9nLXRhYicpKSB7XHJcbiAgICAgICAgICBjb25zdCB0YWIgPSBlLnRhcmdldC5jbG9zZXN0KCcuY2F0YWxvZy10YWInKVxyXG4gICAgICAgICAgY29uc3QgdGFiSW5kZXggPSBOdW1iZXIodGFiLmRhdGFzZXQuc2xpZGVJZHgpXHJcbiAgICAgIFxyXG4gICAgICAgICAgYWN0aXZlSW5kZXggPSB0YWJJbmRleDtcclxuICAgIFxyXG4gICAgICAgICAgY2hhbmdlU2xpZGUodGFiSW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGNoYW5nZVNsaWRlKGFjdGl2ZUluZGV4KVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBmb3JtVmFsaWRhdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJylcclxuXHJcbiAgICBmb3Jtcy5mb3JFYWNoKGZvcm0gPT4ge1xyXG4gICAgICAgIGNvbnN0IGlucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1lbWFpbF0sIGlucHV0W3R5cGU9dGVsXScpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpXHJcblxyXG4gICAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCctaW52YWxpZCcpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QucmVtb3ZlKCctaW52YWxpZCcpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJy1pbnZhbGlkJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGlmICghY2hlY2tib3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCctaW52YWxpZCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufSIsImltcG9ydCBTcGxpZGUgZnJvbSBcIkBzcGxpZGVqcy9zcGxpZGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBoZXJvU2xpZGVyID0gKGRlbGF5ID0gNDAwMCkgPT4ge1xyXG4gIGNvbnN0IGhlcm9XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZXJvLXdyYXBwZXJcIik7XHJcbiAgY29uc3QgdGFiV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19zbGlkZXJfdGFicycpO1xyXG5cclxuICBpZiAoaGVyb1dyYXBwZXIpIHtcclxuICAgIGNvbnN0IGltYWdlcyA9IGhlcm9XcmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVyb19faW1hZ2VcIik7XHJcbiAgICBsZXQgdGFicyA9IGhlcm9XcmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVyby10YWJcIik7XHJcbiAgXHJcbiAgICBsZXQgYWN0aXZlSW5kZXggPSAwO1xyXG4gICAgbGV0IGludGVydmFsO1xyXG4gICAgbGV0IHRhYlNsaWRlcjtcclxuICBcclxuICAgIHRhYlNsaWRlciA9IG5ldyBTcGxpZGUoXCIuaGVyb19fc2xpZGVyX3RhYnMtLXNsaWRlclwiLCB7XHJcbiAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxyXG4gICAgICAvLyBjbG9uZXM6IDAsXHJcbiAgICAgIHR5cGU6IFwibG9vcFwiLFxyXG4gICAgICBmb2N1czogXCJjZW50ZXJcIixcclxuICAgICAgYXV0b1dpZHRoOiB0cnVlLFxyXG4gICAgICBtZWRpYVF1ZXJ5OiBcIm1pblwiLFxyXG4gICAgICBnYXA6IDEyLFxyXG4gICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDk5MjogeyBkZXN0cm95OiB0cnVlIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KS5tb3VudCgpO1xyXG4gIFxyXG4gICAgY29uc3QgY2hhbmdlU2xpZGUgPSAoaWR4KSA9PiB7XHJcbiAgICAgIHRhYnMgPSBoZXJvV3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlcm8tdGFiXCIpO1xyXG4gIFxyXG4gICAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGltYWdlSW5kZXgpID0+IHtcclxuICAgICAgICBpbWFnZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIFxyXG4gICAgICAgIGlmIChpbWFnZUluZGV4ID09PSBpZHgpIHtcclxuICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgdGFicy5mb3JFYWNoKCh0YWIsIHRhYkluZGV4KSA9PiB7XHJcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgXHJcbiAgICAgICAgaWYgKE51bWJlcih0YWIuZGF0YXNldC5zbGlkZUlkeCkgPT09IGlkeCkge1xyXG4gICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgaWYgKHRhYlNsaWRlciAmJiAhdGFiU2xpZGVyLm9wdGlvbnMuZGVzdHJveSkge1xyXG4gICAgICAgICAgdGFiU2xpZGVyLmdvKGlkeClcclxuICAgICAgfVxyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGF1dG9wbGF5ID0gKCkgPT4ge1xyXG4gICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBpZiAoYWN0aXZlSW5kZXggPT09IDQpIHtcclxuICAgICAgICAgIGFjdGl2ZUluZGV4ID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWN0aXZlSW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgY2hhbmdlU2xpZGUoYWN0aXZlSW5kZXgpO1xyXG4gICAgICB9LCBkZWxheSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3Qgc3RhcnRBdXRvcGxheSA9ICgpID0+IHtcclxuICAgICAgYXV0b3BsYXkoKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBzdG9wQXV0b3BsYXkgPSAoKSA9PiB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfTtcclxuICBcclxuICAgIHRhYldyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLmhlcm8tdGFiJykpIHtcclxuICAgICAgICBjb25zdCB0YWIgPSBlLnRhcmdldC5jbG9zZXN0KCcuaGVyby10YWInKVxyXG4gICAgICAgIGNvbnN0IHRhYkluZGV4ID0gTnVtYmVyKHRhYi5kYXRhc2V0LnNsaWRlSWR4KVxyXG4gIFxyXG4gICAgICAgIGFjdGl2ZUluZGV4ID0gdGFiSW5kZXg7XHJcbiAgXHJcbiAgICAgICAgY2hhbmdlU2xpZGUodGFiSW5kZXgpO1xyXG4gICAgICAgIHN0b3BBdXRvcGxheSgpXHJcbiAgICAgICAgc3RhcnRBdXRvcGxheSgpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgXHJcbiAgICBjaGFuZ2VTbGlkZShhY3RpdmVJbmRleCk7XHJcbiAgICBhdXRvcGxheSgpO1xyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGxhbmd1YWdlU2VsZWN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19uYXZiYXJfc2VsZWN0XCIpO1xyXG4gIGNvbnN0IGxpc3RJdGVtcyA9IHNlbGVjdC5xdWVyeVNlbGVjdG9yQWxsKFwibGlcIik7XHJcblxyXG4gIGlmIChzZWxlY3QpIHtcclxuICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBzZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxpc3RJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxhbmd1YWdlID0gaXRlbS5kYXRhc2V0Lmxhbmd1YWdlO1xyXG5cclxuICAgICAgbGlzdEl0ZW1zLmZvckVhY2goKGkpID0+IHtcclxuICAgICAgICBpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAgIGlmIChpLmRhdGFzZXQubGFuZ3VhZ2UgPT09IGxhbmd1YWdlKSB7XHJcbiAgICAgICAgICBpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBkaXNhYmxlQm9keVNjcm9sbCwgY2xlYXJBbGxCb2R5U2Nyb2xsTG9ja3MgfSBmcm9tIFwiYm9keS1zY3JvbGwtbG9ja1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vYmlsZU1lbnUgPSAoKSA9PiB7XHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX25hdmJhcl9idXR0b25cIik7XHJcbiAgY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLW1lbnUgLi1tb2JpbGVcIik7XHJcblxyXG4gIGlmIChtb2JpbGVNZW51KSB7XHJcbiAgICBjb25zdCBjbG9zZSA9IG1vYmlsZU1lbnUucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItbWVudV9fY2xvc2VcIik7XHJcblxyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIG1vYmlsZU1lbnUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoXCItYWN0aXZlXCIpKTtcclxuICAgICAgZGlzYWJsZUJvZHlTY3JvbGwoZG9jdW1lbnQuYm9keSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCItYWN0aXZlXCIpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IChtb2JpbGVNZW51LnN0eWxlLmRpc3BsYXkgPSBudWxsKSwgMjAwKTtcclxuICAgICAgY2xlYXJBbGxCb2R5U2Nyb2xsTG9ja3MoZG9jdW1lbnQuYm9keSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbn07XHJcbiIsImltcG9ydCB7IGRpc2FibGVCb2R5U2Nyb2xsLCBjbGVhckFsbEJvZHlTY3JvbGxMb2NrcyB9IGZyb20gJ2JvZHktc2Nyb2xsLWxvY2snO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vZGFsID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZlZWRiYWNrLWJ0blwiKTtcclxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFjay1tb2RhbC1vdmVybGF5JylcclxuXHJcbiAgaWYgKG1vZGFsKSB7XHJcbiAgICBjb25zdCBjbG9zZSA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFjay1tb2RhbF9fY2xvc2UnKVxyXG5cclxuICAgIGJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtb2RhbC5jbGFzc0xpc3QuYWRkKCctYWN0aXZlJykpXHJcbiAgICAgICAgICBkaXNhYmxlQm9keVNjcm9sbChkb2N1bWVudC5ib2R5KVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJy1hY3RpdmUnKVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBudWxsLCAyMDApXHJcbiAgICAgIGNsZWFyQWxsQm9keVNjcm9sbExvY2tzKGRvY3VtZW50LmJvZHkpXHJcbiAgICB9KVxyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IFNwbGlkZSBmcm9tIFwiQHNwbGlkZWpzL3NwbGlkZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG91clRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgaW5pdFNsaWRlciA9ICgpID0+IHtcclxuICAgIG5ldyBTcGxpZGUoXCIub3VyLXRpbWVfX3NsaWRlclwiLCB7XHJcbiAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxyXG4gICAgICBjbG9uZXM6IDAsXHJcbiAgICAgIHR5cGU6IFwic2xpZGVcIixcclxuICAgICAgd2hlZWw6IHRydWUsXHJcbiAgICAgIHJlbGVhc2VXaGVlbDogdHJ1ZSxcclxuICAgICAgd2FpdEZvclRyYW5zaXRpb246IHRydWUsXHJcbiAgICAgIHRyaW1TcGFjZTogZmFsc2UsXHJcbiAgICAgIGZvY3VzOiBcImNlbnRlclwiLFxyXG4gICAgICBnYXA6IDI0LFxyXG4gICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDc2Nzoge1xyXG4gICAgICAgICAgZGVzdHJveTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSkubW91bnQoKTtcclxuICB9O1xyXG5cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm91ci10aW1lX19zbGlkZXInKSkge1xyXG4gICAgaW5pdFNsaWRlcigpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IFNwbGlkZSBmcm9tIFwiQHNwbGlkZWpzL3NwbGlkZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzU2xpZGVyID0gKHNsaWRlclNlbGVjdG9yKSA9PiB7XHJcbiAgY29uc3QgaW5pdFNsaWRlciA9ICgpID0+IHtcclxuICAgIG5ldyBTcGxpZGUoc2xpZGVyU2VsZWN0b3IsIHtcclxuICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgcGFnaW5hdGlvbjogZmFsc2UsXHJcbiAgICAgIHR5cGU6IFwibG9vcFwiLFxyXG4gICAgICBmb2N1czogXCJjZW50ZXJcIixcclxuICAgICAgZml4ZWRXaWR0aDogMTQwLFxyXG4gICAgICBmaXhlZEhlaWdodDogMjYwLFxyXG4gICAgICBtZWRpYVF1ZXJ5OiBcIm1pblwiLFxyXG4gICAgICBnYXA6IDEyLFxyXG4gICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDUzMjoge1xyXG4gICAgICAgICAgZml4ZWRXaWR0aDogbnVsbCxcclxuICAgICAgICAgIGZpeGVkSGVpZ2h0OiBudWxsLFxyXG4gICAgICAgICAgcGVyUGFnZTogMyxcclxuICAgICAgICAgIGZvY3VzOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICBmaXhlZFdpZHRoOiBudWxsLFxyXG4gICAgICAgICAgcGVyUGFnZTogMixcclxuICAgICAgICAgIGdhcDogMjQsXHJcbiAgICAgICAgICBmb2N1czogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgcGVyUGFnZTogMyxcclxuICAgICAgICAgIGdhcDogMjQsXHJcbiAgICAgICAgICBmb2N1czogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDE0MDA6IHtcclxuICAgICAgICAgIHBlclBhZ2U6IDQsXHJcbiAgICAgICAgICBnYXA6IDI0LFxyXG4gICAgICAgICAgZm9jdXM6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pLm1vdW50KCk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2xpZGVyU2VsZWN0b3IpKSB7XHJcbiAgICBpbml0U2xpZGVyKCk7XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3Qgc2NhbGVJbWFnZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcuc2NhbGluZy1pbWFnZScpO1xyXG5cclxuICAgIGltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcclxuICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnLXNjYWxlJylcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufSIsImltcG9ydCB7IGRlY2xPZk51bSB9IGZyb20gJy4uL2hlbHBlcnMvZGVjbC1vZi1udW0nO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaERlY2wgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWFyY2hTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaCcpO1xyXG4gICAgXHJcbiAgICBpZiAoc2VhcmNoU2VjdGlvbikge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaENhcmRzID0gc2VhcmNoU2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1jYXJkJyk7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBzZWFyY2hTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtZGVzY3JpcHRpb24nKTtcclxuICAgICAgICBjb25zdCBzZWFyY2hDb3VudCA9IE51bWJlcihzZWFyY2hDYXJkcy5sZW5ndGgpO1xyXG5cclxuICAgICAgICBjb25zdCBmaXJzdFN0ciA9IGRlY2xPZk51bShzZWFyY2hDb3VudCwgWyfQvdCw0LnQtNC10L0nLCAn0L3QsNC50LTQtdC90L4nLCAn0L3QsNC50LTQtdC90YsnXSk7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kU3RyID0gZGVjbE9mTnVtKHNlYXJjaENvdW50LCBbJ9GA0LXQt9GD0LvRjNGC0LDRgicsICfRgNC10LfRg9C70YzRgtCw0YLQsCcsICfRgNC10LfRg9C70YzRgtCw0YLQvtCyJ10pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7Zmlyc3RTdHJ9ICR7c2VhcmNoQ291bnR9ICR7c2Vjb25kU3RyfWBcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBzZWFyY2hJbnB1dCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNlYXJjaFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXZiYXJfc2VhcmNoLWlucHV0LS13cmFwcGVyJylcclxuICAgIGNvbnN0IG9wZW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLXNlYXJjaC1idXR0b24nKVxyXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLXNlYXJjaC1jbG9zZScpO1xyXG5cclxuICAgIG9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgc2VhcmNoV3JhcHBlci5jbGFzc0xpc3QuYWRkKCctYWN0aXZlJylcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHNlYXJjaFdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnLWFjdGl2ZScpXHJcbiAgICB9KVxyXG59IiwiaW1wb3J0IHsgc2Nyb2xsSW50b1ZpZXcgfSBmcm9tIFwic2VhbWxlc3Mtc2Nyb2xsLXBvbHlmaWxsXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc21vb3RoU2Nyb2xsID0gKCkgPT4ge1xyXG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXItbWVudV9faXRlbSBhXCIpO1xyXG5cclxuICBsaW5rcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnN1YnN0cmluZygxKTtcclxuXHJcbiAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblxyXG4gICAgICBpZiAoc2VjdGlvbikge1xyXG4gICAgICAgIHNjcm9sbEludG9WaWV3KHNlY3Rpb24sIHtcclxuICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICAgICAgYmxvY2s6IFwic3RhcnRcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG4iLCJleHBvcnQgY29uc3QgdGFiQ29udGVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b25bZGF0YS10YWItYnRuXScpXHJcblxyXG4gICAgY29uc3QgY2hhbmdlVGFiID0gKGFjdGl2ZUluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXRhYi1jb250ZW50XWApXHJcbiAgXHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24sIGlkeCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYWN0aXZlSW5kZXggPT09IGlkeCkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnRlbnQuZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgaWYgKCtjLmRhdGFzZXQudGFiQ29udGVudCA9PT0gYWN0aXZlSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGMuY2xhc3NMaXN0LnJlbW92ZSgnLWhpZGUnKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYy5jbGFzc0xpc3QuYWRkKCctaGlkZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSArYnV0dG9uLmRhdGFzZXQudGFiQnRuXHJcbiAgICAgICAgICAgIGNoYW5nZVRhYihpbmRleClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBjaGFuZ2VUYWIoMClcclxuXHJcbiAgICAvLyDQtNC70Y8g0L7RgtC80LXRgtC60Lgg0LrQvdC+0L/QvtC6INGC0LDQsdC+0LIg0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10LwgZGF0YSDQsNGC0YLRgNC40LHRg9GC0Ysg0YEg0LjQvdC00LXQutGB0L7QvCDQv9C+INC/0L7RgNGP0LTQutGDINC+0YIg0L3Rg9C70Y8gXHJcbiAgICAvLyBkYXRhLXRhYi1idG49XCIwXCJcclxuICAgIC8vIGRhdGEtdGFiLWJ0bj1cIjFcIlxyXG5cclxuICAgIC8vINC00LvRjyDQvtGC0LzQtdGC0LrQuCDRgdC80LXQvdGP0LXQvNC+0LPQviDQutC+0L3RgtC10L3RgtCwINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8IGRhdGEg0LDRgtGC0YDQuNCx0YPRgtGLINGBINC40L3QtNC10LrRgdC+0Lwg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQtdCz0L4g0YLQsNCx0LBcclxuICAgIC8vIGRhdGEtdGFiLWNvbnRlbnQ9XCIwXCJcclxuICAgIC8vIGRhdGEtdGFiLWNvbnRlbnQ9XCIxXCJcclxuXHJcbiAgICAvLyDQtNC70Y8g0YHQutGA0YvRgtC40Y8g0LvQuNGI0L3QtdCz0L4g0LrQvtC90YLQtdC90YLQsCDQtNCw0LXQvCDQutC70LDRgdGBIC1oaWRlXHJcbn0iLCJleHBvcnQgY29uc3QgdGltZWxpbmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZWxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVsaW5lXCIpO1xyXG5cclxuICBpZiAodGltZWxpbmUpIHtcclxuICAgIGNvbnN0IHRpbWVsaW5lSXRlbXMgPSB0aW1lbGluZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRpbWVsaW5lLWl0ZW1cIik7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3VyLXRpbWUtdGl0bGVcIik7XHJcbiAgICBjb25zdCBpdGVtcyA9IFsuLi50aW1lbGluZUl0ZW1zLCB0aXRsZV07XHJcblxyXG4gICAgbGV0IGRvY1JlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IGlzRG93bnggPSB0cnVlO1xyXG4gICAgbGV0IGFjdGl2ZUluZGV4ID0gMDtcclxuXHJcbiAgICBjb25zdCBjaGVja0FjdGl2ZSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgZG9jUmVjdFRlbXAgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgaWYgKGRvY1JlY3RUZW1wLnkgPiBkb2NSZWN0LnkpIHtcclxuICAgICAgICBpc0Rvd254ID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXNEb3dueCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRvY1JlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgaXRlbXMuZm9yRWFjaCgoaSwgaWR4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVjdCA9IGkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHJlY3QgJiZcclxuICAgICAgICAgIHJlY3QueSA+IDAgJiZcclxuICAgICAgICAgIHJlY3QueSA8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgLyAyXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpZiAoaXNEb3dueCkge1xyXG4gICAgICAgICAgICBpZiAoaWR4ID4gYWN0aXZlSW5kZXgpIHtcclxuICAgICAgICAgICAgICBhY3RpdmVJbmRleCA9IGlkeDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpLmNsYXNzTGlzdC5yZW1vdmUoXCItYWN0aXZlXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGlkeCA8IGFjdGl2ZUluZGV4KSB7XHJcbiAgICAgICAgICAgICAgYWN0aXZlSW5kZXggPSBpZHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaS5jbGFzc0xpc3QucmVtb3ZlKFwiLWFjdGl2ZVwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGl0ZW1zW2FjdGl2ZUluZGV4XS5jbGFzc0xpc3QuYWRkKFwiLWFjdGl2ZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpLmNsYXNzTGlzdC5yZW1vdmUoXCItYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY2hlY2tBY3RpdmUpO1xyXG4gICAgY2hlY2tBY3RpdmUoKTtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCB0b1RvcEJ1dHRvbiA9ICgpID0+IHtcclxuICAvLyBjb25zdCBiYWNrVG9Ub3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2stdG8tdG9wXCIpO1xyXG5cclxuICAvLyBpZiAoYmFja1RvVG9wKSB7XHJcbiAgLy8gICAvLyDQn9C+0LrQsNC30LDRgtGML9GB0LrRgNGL0YLRjCDQutC90L7Qv9C60YMg0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDRgdGC0YDQsNC90LjRhtGLXHJcbiAgLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDQwMCkge1xyXG4gIC8vICAgICAgIGJhY2tUb1RvcC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgLy8gICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgYmFja1RvVG9wLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSk7XHJcblxyXG4gIC8vICAgLy8g0J/Qu9Cw0LLQvdCw0Y8g0L/RgNC+0LrRgNGD0YLQutCwINC/0YDQuCDQutC70LjQutC1INC90LAg0LrQvdC+0L/QutGDXHJcbiAgLy8gICBiYWNrVG9Ub3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIC8vICAgICB3aW5kb3cuc2Nyb2xsVG8oeyB0b3A6IDAsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgeWFuZGV4TWFwID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1hcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKVxyXG4gIGlmICghbWFwRWxlbWVudCkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGFzeW5jIGZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcbiAgICBsZXQgeW1hcHMzID0gd2luZG93LnltYXBzMztcclxuICAgIGxldCBtYXA7XHJcblxyXG4gICAgYXdhaXQgeW1hcHMzLnJlYWR5O1xyXG5cclxuICAgIGNvbnN0IHsgWU1hcCwgWU1hcERlZmF1bHRTY2hlbWVMYXllciwgWU1hcERlZmF1bHRGZWF0dXJlc0xheWVyLCBZTWFwTWFya2VyIH0gPSB5bWFwczM7XHJcblxyXG4gICAgbWFwID0gbmV3IFlNYXAoXHJcbiAgICAgIG1hcEVsZW1lbnQsXHJcbiAgICAgIHtcclxuICAgICAgICBsb2NhdGlvbjoge1xyXG4gICAgICAgICAgY2VudGVyOiBbNDYuMDA4OTEwODk1NTY0OTksIDUxLjU3MDc3OTU5Mzc5NTkxXSxcclxuICAgICAgICAgIHpvb206IDE3LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmVoYXZpb3JzOiBbXCJkcmFnXCIsIFwicGluY2hab29tXCIsIFwibW91c2VUaWx0XCJdLFxyXG4gICAgICB9LFxyXG4gICAgICBbbmV3IFlNYXBEZWZhdWx0U2NoZW1lTGF5ZXIoe30pLCBuZXcgWU1hcERlZmF1bHRGZWF0dXJlc0xheWVyKHt9KV1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgbWFya2VyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbWFya2VyRWxlbWVudC5jbGFzc05hbWUgPSAnY29udGFjdHMtbWFwLS1pY29uLW1hcmtlcic7XHJcbiAgICBtYXJrZXJFbGVtZW50LnN0eWxlLndpZHRoID0gJzg5cHgnXHJcbiAgICBtYXJrZXJFbGVtZW50LnN0eWxlLmhlaWdodCA9ICcxMTdweCdcclxuICAgIG1hcmtlckVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnXHJcbiAgICBtYXJrZXJFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknXHJcbiAgICBtYXJrZXJFbGVtZW50LnNyYyA9ICcuL2ltYWdlcy9pY29ucy9tYXJrZXIucG5nJztcclxuICAgIG1hcC5hZGRDaGlsZChuZXcgWU1hcE1hcmtlcih7Y29vcmRpbmF0ZXM6IFtcclxuICAgICAgICA0Ni4wMDgyOTcyODI1ODk3MixcclxuICAgICAgICA1MS41NzE1ODM1MzgyMjM4M1xyXG4gICAgXX0sIG1hcmtlckVsZW1lbnQpKTtcclxuICB9XHJcblxyXG4gIGluaXRNYXAoKTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IGNoZWNrQmVoYXZpb3IgPSAoYmVoYXZpb3IpID0+IHtcbiAgICByZXR1cm4gYmVoYXZpb3IgPT09IHVuZGVmaW5lZCB8fCBiZWhhdmlvciA9PT0gXCJhdXRvXCIgfHwgYmVoYXZpb3IgPT09IFwiaW5zdGFudFwiIHx8IGJlaGF2aW9yID09PSBcInNtb290aFwiO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50U2Nyb2xsWFkoeCwgeSkge1xuICAgIHRoaXMuc2Nyb2xsTGVmdCA9IHg7XG4gICAgdGhpcy5zY3JvbGxUb3AgPSB5O1xufVxuZXhwb3J0IGNvbnN0IGZhaWxlZEV4ZWN1dGUgPSAobWV0aG9kLCBvYmplY3QsIHJlYXNvbiA9IFwiY2Fubm90IGNvbnZlcnQgdG8gZGljdGlvbmFyeS5cIikgPT4gYEZhaWxlZCB0byBleGVjdXRlICcke21ldGhvZH0nIG9uICcke29iamVjdH0nOiAke3JlYXNvbn1gO1xuZXhwb3J0IGNvbnN0IGZhaWxlZEV4ZWN1dGVJbnZhbGlkRW51bVZhbHVlID0gKG1ldGhvZCwgb2JqZWN0LCB2YWx1ZSkgPT4gZmFpbGVkRXhlY3V0ZShtZXRob2QsIG9iamVjdCwgYFRoZSBwcm92aWRlZCB2YWx1ZSAnJHt2YWx1ZX0nIGlzIG5vdCBhIHZhbGlkIGVudW0gdmFsdWUgb2YgdHlwZSBTY3JvbGxCZWhhdmlvci5gKTtcbi8qIGVzbGludC1kaXNhYmxlICovXG5leHBvcnQgY29uc3QgYmFja3VwTWV0aG9kID0gKHByb3RvLCBtZXRob2QsIGZhbGxiYWNrKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGJhY2t1cCA9IGBfX1NFQU1MRVNTLkJBQ0tVUCQke21ldGhvZH1gO1xuICAgIGlmICghcHJvdG9bYmFja3VwXSAmJiBwcm90b1ttZXRob2RdICYmICEoKF9hID0gcHJvdG9bbWV0aG9kXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLl9faXNQb2x5ZmlsbCkpIHtcbiAgICAgICAgcHJvdG9bYmFja3VwXSA9IHByb3RvW21ldGhvZF07XG4gICAgfVxuICAgIHJldHVybiBwcm90b1tiYWNrdXBdIHx8IGZhbGxiYWNrO1xufTtcbi8qIGVzbGludC1lbmFibGUgKi9cbmV4cG9ydCBjb25zdCBpc09iamVjdCA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmICh0eXBlID09PSBcIm9iamVjdFwiIHx8IHR5cGUgPT09IFwiZnVuY3Rpb25cIik7XG59O1xuZXhwb3J0IGNvbnN0IGlzU2Nyb2xsQmVoYXZpb3JTdXBwb3J0ZWQgPSAoY29uZmlnKSA9PiBcInNjcm9sbEJlaGF2aW9yXCIgaW4gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiAoY29uZmlnID09PSBudWxsIHx8IGNvbmZpZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29uZmlnLmZvcmNlUG9seWZpbGwpICE9PSB0cnVlO1xuZXhwb3J0IGNvbnN0IG1hcmtQb2x5ZmlsbCA9IChtZXRob2QpID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWV0aG9kLCBcIl9faXNQb2x5ZmlsbFwiLCB7IHZhbHVlOiB0cnVlIH0pO1xufTtcbmV4cG9ydCBjb25zdCBtb2RpZnlQcm90b3R5cGVzID0gKHByb3AsIGZ1bmMpID0+IHtcbiAgICBtYXJrUG9seWZpbGwoZnVuYyk7XG4gICAgW0hUTUxFbGVtZW50LnByb3RvdHlwZSwgU1ZHRWxlbWVudC5wcm90b3R5cGUsIEVsZW1lbnQucHJvdG90eXBlXS5mb3JFYWNoKChwcm90b3R5cGUpID0+IHtcbiAgICAgICAgYmFja3VwTWV0aG9kKHByb3RvdHlwZSwgcHJvcCk7XG4gICAgICAgIHByb3RvdHlwZVtwcm9wXSA9IGZ1bmM7XG4gICAgfSk7XG59O1xuLyoqXG4gKiAtIE9uIENocm9tZSBhbmQgRmlyZWZveCwgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB3aWxsIHJldHVybiB0aGUgPGh0bWw+IGVsZW1lbnQuXG4gKiAtIFNhZmFyaSwgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB3aWxsIHJldHVybiB0aGUgPGJvZHk+IGVsZW1lbnQuXG4gKiAtIE9uIEVkZ2UsIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgd2lsbCByZXR1cm4gdGhlIDxib2R5PiBlbGVtZW50LlxuICogLSBJRTExIGRvZXMgbm90IHN1cHBvcnQgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCwgYnV0IHlvdSBjYW4gYXNzdW1lIGl0cyA8aHRtbD4uXG4gKi9cbmV4cG9ydCBjb25zdCBzY3JvbGxpbmdFbGVtZW50ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQub3duZXJEb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IHx8IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21tb24uanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbEVuZEV2ZW50KGJ1YmJsZXMpIHtcbiAgICBpZiAodHlwZW9mIEV2ZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFdmVudChcInNjcm9sbGVuZFwiLCB7XG4gICAgICAgICAgICBidWJibGVzLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7XG4gICAgZXZlbnQuaW5pdEV2ZW50KFwic2Nyb2xsZW5kXCIsIGJ1YmJsZXMsIGZhbHNlKTtcbiAgICByZXR1cm4gZXZlbnQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY3JvbGwtZW5kLWV2ZW50LmpzLm1hcCIsImNvbnN0IGVhc2UgPSAoaykgPT4ge1xuICAgIHJldHVybiAwLjUgKiAoMSAtIE1hdGguY29zKE1hdGguUEkgKiBrKSk7XG59O1xuLyogZXNsaW50LWRpc2FibGUgKi9cbmV4cG9ydCBmdW5jdGlvbiBub3coKSB7XG4gICAgdmFyIF9hO1xuICAgIGxldCBmbjtcbiAgICBpZiAoKF9hID0gd2luZG93LnBlcmZvcm1hbmNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eubm93KSB7XG4gICAgICAgIGZuID0gKCkgPT4gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm4gPSAoKSA9PiB3aW5kb3cuRGF0ZS5ub3coKTtcbiAgICB9XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIG5vdyA9IGZuO1xuICAgIHJldHVybiBmbigpO1xufVxuLyogZXNsaW50LWVuYWJsZSAqL1xuY29uc3QgRFVSQVRJT04gPSA1MDA7XG5leHBvcnQgY29uc3Qgc3RlcCA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBub3coKTtcbiAgICBjb25zdCBlbGFwc2VkID0gKGN1cnJlbnRUaW1lIC0gY29udGV4dC50aW1lU3RhbXApIC8gKGNvbnRleHQuZHVyYXRpb24gfHwgRFVSQVRJT04pO1xuICAgIGlmIChlbGFwc2VkID4gMSkge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZChjb250ZXh0LnRhcmdldFgsIGNvbnRleHQudGFyZ2V0WSk7XG4gICAgICAgIGNvbnRleHQuY2FsbGJhY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IChjb250ZXh0LnRpbWluZ0Z1bmMgfHwgZWFzZSkoZWxhcHNlZCk7XG4gICAgY29uc3QgY3VycmVudFggPSBjb250ZXh0LnN0YXJ0WCArIChjb250ZXh0LnRhcmdldFggLSBjb250ZXh0LnN0YXJ0WCkgKiB2YWx1ZTtcbiAgICBjb25zdCBjdXJyZW50WSA9IGNvbnRleHQuc3RhcnRZICsgKGNvbnRleHQudGFyZ2V0WSAtIGNvbnRleHQuc3RhcnRZKSAqIHZhbHVlO1xuICAgIGNvbnRleHQubWV0aG9kKGN1cnJlbnRYLCBjdXJyZW50WSk7XG4gICAgY29udGV4dC5yYWZJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBzdGVwKGNvbnRleHQpO1xuICAgIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjcm9sbC1zdGVwLmpzLm1hcCIsImltcG9ydCB7IGJhY2t1cE1ldGhvZCwgY2hlY2tCZWhhdmlvciwgZWxlbWVudFNjcm9sbFhZLCBmYWlsZWRFeGVjdXRlLCBmYWlsZWRFeGVjdXRlSW52YWxpZEVudW1WYWx1ZSwgaXNPYmplY3QsIHNjcm9sbGluZ0VsZW1lbnQsIH0gZnJvbSBcIi4vY29tbW9uLmpzXCI7XG5pbXBvcnQgeyBzY3JvbGxFbmRFdmVudCB9IGZyb20gXCIuL3Njcm9sbC1lbmQtZXZlbnQuanNcIjtcbmltcG9ydCB7IG5vdywgc3RlcCB9IGZyb20gXCIuL3Njcm9sbC1zdGVwLmpzXCI7XG4vLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3Nzb20tdmlldy8jbm9ybWFsaXplLW5vbi1maW5pdGUtdmFsdWVzXG5jb25zdCBub25GaW5pdGUgPSAodmFsdWUpID0+IHtcbiAgICBpZiAoIWlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIE51bWJlcih2YWx1ZSk7XG59O1xuY29uc3QgaXNDb25uZWN0ZWQgPSAobm9kZSkgPT4ge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKChfYSA9IG5vZGUuaXNDb25uZWN0ZWQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICghbm9kZS5vd25lckRvY3VtZW50IHx8XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICAgICEobm9kZS5vd25lckRvY3VtZW50LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG5vZGUpICYgLyoqIERPQ1VNRU5UX1BPU0lUSU9OX0RJU0NPTk5FQ1RFRCAqLyAxKSkpO1xufTtcbmNvbnN0IHNjcm9sbFdpdGhPcHRpb25zID0gKGVsZW1lbnQsIG9wdGlvbnMsIGNvbmZpZykgPT4ge1xuICAgIHZhciBfYSwgX2I7XG4gICAgaWYgKCFpc0Nvbm5lY3RlZChlbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0YXJ0WCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICBjb25zdCBzdGFydFkgPSBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICBjb25zdCB0YXJnZXRYID0gbm9uRmluaXRlKChfYSA9IG9wdGlvbnMubGVmdCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogc3RhcnRYKTtcbiAgICBjb25zdCB0YXJnZXRZID0gbm9uRmluaXRlKChfYiA9IG9wdGlvbnMudG9wKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBzdGFydFkpO1xuICAgIGlmICh0YXJnZXRYID09PSBzdGFydFggJiYgdGFyZ2V0WSA9PT0gc3RhcnRZKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZmFsbGJhY2sgPSBiYWNrdXBNZXRob2QoSFRNTEVsZW1lbnQucHJvdG90eXBlLCBcInNjcm9sbFwiLCBlbGVtZW50U2Nyb2xsWFkpO1xuICAgIGNvbnN0IG1ldGhvZCA9IGJhY2t1cE1ldGhvZChPYmplY3QuZ2V0UHJvdG90eXBlT2YoZWxlbWVudCksIFwic2Nyb2xsXCIsIGZhbGxiYWNrKS5iaW5kKGVsZW1lbnQpO1xuICAgIGlmIChvcHRpb25zLmJlaGF2aW9yICE9PSBcInNtb290aFwiKSB7XG4gICAgICAgIG1ldGhvZCh0YXJnZXRYLCB0YXJnZXRZKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZW1vdmVFdmVudExpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGNhbmNlbFNjcm9sbCk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGNhbmNlbFNjcm9sbCk7XG4gICAgfTtcbiAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICBjb25zdCBpc0RvY3VtZW50ID0gZWxlbWVudC5ub2RlVHlwZSA9PT0gLyoqIE5vZGUuRE9DVU1FTlRfTk9ERSAqLyA5O1xuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoc2Nyb2xsRW5kRXZlbnQoaXNEb2N1bWVudCkpO1xuICAgIH07XG4gICAgY29uc3QgY29udGV4dCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnKSwgeyB0aW1lU3RhbXA6IG5vdygpLCBzdGFydFgsXG4gICAgICAgIHN0YXJ0WSxcbiAgICAgICAgdGFyZ2V0WCxcbiAgICAgICAgdGFyZ2V0WSwgcmFmSWQ6IDAsIG1ldGhvZCxcbiAgICAgICAgY2FsbGJhY2sgfSk7XG4gICAgY29uc3QgY2FuY2VsU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoY29udGV4dC5yYWZJZCk7XG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgY2FuY2VsU2Nyb2xsLCB7XG4gICAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICAgIG9uY2U6IHRydWUsXG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgY2FuY2VsU2Nyb2xsLCB7XG4gICAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICAgIG9uY2U6IHRydWUsXG4gICAgfSk7XG4gICAgc3RlcChjb250ZXh0KTtcbn07XG5jb25zdCBpc1dpbmRvdyA9IChvYmopID0+IG9iai53aW5kb3cgPT09IG9iajtcbmNvbnN0IGNyZWF0ZVNjcm9sbCA9IChzY3JvbGxOYW1lKSA9PiAodGFyZ2V0LCBzY3JvbGxPcHRpb25zLCBjb25maWcpID0+IHtcbiAgICBjb25zdCBbZWxlbWVudCwgc2Nyb2xsVHlwZV0gPSBpc1dpbmRvdyh0YXJnZXQpXG4gICAgICAgID8gW3Njcm9sbGluZ0VsZW1lbnQodGFyZ2V0LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCksIFwiV2luZG93XCJdXG4gICAgICAgIDogW3RhcmdldCwgXCJFbGVtZW50XCJdO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBzY3JvbGxPcHRpb25zICE9PSBudWxsICYmIHNjcm9sbE9wdGlvbnMgIT09IHZvaWQgMCA/IHNjcm9sbE9wdGlvbnMgOiB7fTtcbiAgICBpZiAoIWlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoZmFpbGVkRXhlY3V0ZShzY3JvbGxOYW1lLCBzY3JvbGxUeXBlKSk7XG4gICAgfVxuICAgIGlmICghY2hlY2tCZWhhdmlvcihvcHRpb25zLmJlaGF2aW9yKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGZhaWxlZEV4ZWN1dGVJbnZhbGlkRW51bVZhbHVlKHNjcm9sbE5hbWUsIHNjcm9sbFR5cGUsIG9wdGlvbnMuYmVoYXZpb3IpKTtcbiAgICB9XG4gICAgaWYgKHNjcm9sbE5hbWUgPT09IFwic2Nyb2xsQnlcIikge1xuICAgICAgICBvcHRpb25zLmxlZnQgPSBub25GaW5pdGUob3B0aW9ucy5sZWZ0KSArIGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgb3B0aW9ucy50b3AgPSBub25GaW5pdGUob3B0aW9ucy50b3ApICsgZWxlbWVudC5zY3JvbGxUb3A7XG4gICAgfVxuICAgIHNjcm9sbFdpdGhPcHRpb25zKGVsZW1lbnQsIG9wdGlvbnMsIGNvbmZpZyk7XG59O1xuZXhwb3J0IGNvbnN0IHNjcm9sbCA9IC8qICNfX1BVUkVfXyAqLyBjcmVhdGVTY3JvbGwoXCJzY3JvbGxcIik7XG5leHBvcnQgY29uc3Qgc2Nyb2xsVG8gPSAvKiAjX19QVVJFX18gKi8gY3JlYXRlU2Nyb2xsKFwic2Nyb2xsVG9cIik7XG5leHBvcnQgY29uc3Qgc2Nyb2xsQnkgPSAvKiAjX19QVVJFX18gKi8gY3JlYXRlU2Nyb2xsKFwic2Nyb2xsQnlcIik7XG5leHBvcnQgY29uc3QgZWxlbWVudFNjcm9sbCA9IHNjcm9sbDtcbmV4cG9ydCBjb25zdCBlbGVtZW50U2Nyb2xsVG8gPSBzY3JvbGxUbztcbmV4cG9ydCBjb25zdCBlbGVtZW50U2Nyb2xsQnkgPSBzY3JvbGxCeTtcbmV4cG9ydCBjb25zdCB3aW5kb3dTY3JvbGwgPSBzY3JvbGw7XG5leHBvcnQgY29uc3Qgd2luZG93U2Nyb2xsVG8gPSBzY3JvbGxUbztcbmV4cG9ydCBjb25zdCB3aW5kb3dTY3JvbGxCeSA9IHNjcm9sbEJ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2Nyb2xsLmpzLm1hcCIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cbmltcG9ydCB7IGNoZWNrQmVoYXZpb3IsIGZhaWxlZEV4ZWN1dGVJbnZhbGlkRW51bVZhbHVlLCBzY3JvbGxpbmdFbGVtZW50IH0gZnJvbSBcIi4vY29tbW9uLmpzXCI7XG5pbXBvcnQgeyBlbGVtZW50U2Nyb2xsIH0gZnJvbSBcIi4vc2Nyb2xsLmpzXCI7XG4vLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXdyaXRpbmctbW9kZXMtNC8jYmxvY2stZmxvd1xuY29uc3Qgbm9ybWFsaXplV3JpdGluZ01vZGUgPSAod3JpdGluZ01vZGUpID0+IHtcbiAgICBzd2l0Y2ggKHdyaXRpbmdNb2RlKSB7XG4gICAgICAgIGNhc2UgXCJob3Jpem9udGFsLXRiXCI6XG4gICAgICAgIGNhc2UgXCJsclwiOlxuICAgICAgICBjYXNlIFwibHItdGJcIjpcbiAgICAgICAgY2FzZSBcInJsXCI6XG4gICAgICAgIGNhc2UgXCJybC10YlwiOlxuICAgICAgICAgICAgcmV0dXJuIDAgLyogV3JpdGluZ01vZGUuSG9yaXpvbnRhbFRiICovO1xuICAgICAgICBjYXNlIFwidmVydGljYWwtcmxcIjpcbiAgICAgICAgY2FzZSBcInRiXCI6XG4gICAgICAgIGNhc2UgXCJ0Yi1ybFwiOlxuICAgICAgICAgICAgcmV0dXJuIDEgLyogV3JpdGluZ01vZGUuVmVydGljYWxSbCAqLztcbiAgICAgICAgY2FzZSBcInZlcnRpY2FsLWxyXCI6XG4gICAgICAgIGNhc2UgXCJ0Yi1sclwiOlxuICAgICAgICAgICAgcmV0dXJuIDIgLyogV3JpdGluZ01vZGUuVmVydGljYWxMciAqLztcbiAgICAgICAgY2FzZSBcInNpZGV3YXlzLXJsXCI6XG4gICAgICAgICAgICByZXR1cm4gMyAvKiBXcml0aW5nTW9kZS5TaWRld2F5c1JsICovO1xuICAgICAgICBjYXNlIFwic2lkZXdheXMtbHJcIjpcbiAgICAgICAgICAgIHJldHVybiA0IC8qIFdyaXRpbmdNb2RlLlNpZGV3YXlzTHIgKi87XG4gICAgfVxuICAgIHJldHVybiAwIC8qIFdyaXRpbmdNb2RlLkhvcml6b250YWxUYiAqLztcbn07XG5jb25zdCBjYWxjUGh5c2ljYWxBeGlzID0gKHdyaXRpbmdNb2RlLCBpc0xUUiwgaFBvcywgdlBvcykgPT4ge1xuICAgIC8qKiAgMGJ7dmVydGljYWx9e2hvcml6b250YWx9ICAwOiBub3JtYWwsIDE6IHJldmVyc2UgKi9cbiAgICBsZXQgbGF5b3V0ID0gMGIwMDtcbiAgICAvKipcbiAgICAgKiBXcml0aW5nTW9kZS5WZXJ0aWNhbExyOiDihpPihpJcbiAgICAgKiB8IDEgfCA0IHwgICB8XG4gICAgICogfCAyIHwgNSB8ICAgfFxuICAgICAqIHwgMyB8ICAgfCAgIHxcbiAgICAgKlxuICAgICAqIFJUTDog4oaR4oaSXG4gICAgICogfCAzIHwgICB8ICAgfFxuICAgICAqIHwgMiB8IDUgfCAgIHxcbiAgICAgKiB8IDEgfCA0IHwgICB8XG4gICAgICovXG4gICAgaWYgKCFpc0xUUikge1xuICAgICAgICBsYXlvdXQgXj0gMiAvKiBPUC5SZXZlcnNlVmVydGljYWwgKi87XG4gICAgfVxuICAgIHN3aXRjaCAod3JpdGluZ01vZGUpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOKGk+KGklxuICAgICAgICAgKiB8IDEgfCAyIHwgMyB8XG4gICAgICAgICAqIHwgNCB8IDUgfCAgIHxcbiAgICAgICAgICogfCAgIHwgICB8ICAgfFxuICAgICAgICAgKlxuICAgICAgICAgKiBSVEw6IOKGk+KGkFxuICAgICAgICAgKiB8IDMgfCAyIHwgMSB8XG4gICAgICAgICAqIHwgICB8IDUgfCA0IHxcbiAgICAgICAgICogfCAgIHwgICB8ICAgfFxuICAgICAgICAgKi9cbiAgICAgICAgY2FzZSAwIC8qIFdyaXRpbmdNb2RlLkhvcml6b250YWxUYiAqLzpcbiAgICAgICAgICAgIC8vIHN3YXAgaG9yaXpvbnRhbCBhbmQgdmVydGljYWxcbiAgICAgICAgICAgIGxheW91dCA9IChsYXlvdXQgPj4gMSkgfCAoKGxheW91dCAmIDEpIDw8IDEpO1xuICAgICAgICAgICAgW2hQb3MsIHZQb3NdID0gW3ZQb3MsIGhQb3NdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDihpPihpBcbiAgICAgICAgICogfCAgIHwgNCB8IDEgfFxuICAgICAgICAgKiB8ICAgfCA1IHwgMiB8XG4gICAgICAgICAqIHwgICB8ICAgfCAzIHxcbiAgICAgICAgICpcbiAgICAgICAgICogUlRMOiDihpHihpBcbiAgICAgICAgICogfCAgIHwgICB8IDMgfFxuICAgICAgICAgKiB8ICAgfCA1IHwgMiB8XG4gICAgICAgICAqIHwgICB8IDQgfCAxIHxcbiAgICAgICAgICovXG4gICAgICAgIGNhc2UgMSAvKiBXcml0aW5nTW9kZS5WZXJ0aWNhbFJsICovOlxuICAgICAgICBjYXNlIDMgLyogV3JpdGluZ01vZGUuU2lkZXdheXNSbCAqLzpcbiAgICAgICAgICAgIC8vICByZXZlcnNlIGhvcml6b250YWxcbiAgICAgICAgICAgIGxheW91dCBePSAxIC8qIE9QLlJldmVyc2VIb3Jpem9udGFsICovO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDihpHihpJcbiAgICAgICAgICogfCAzIHwgICB8ICAgfFxuICAgICAgICAgKiB8IDIgfCA1IHwgICB8XG4gICAgICAgICAqIHwgMSB8IDQgfCAgIHxcbiAgICAgICAgICpcbiAgICAgICAgICogUlRMOiDihpPihpJcbiAgICAgICAgICogfCAxIHwgNCB8ICAgfFxuICAgICAgICAgKiB8IDIgfCA1IHwgICB8XG4gICAgICAgICAqIHwgMyB8ICAgfCAgIHxcbiAgICAgICAgICovXG4gICAgICAgIGNhc2UgNCAvKiBXcml0aW5nTW9kZS5TaWRld2F5c0xyICovOlxuICAgICAgICAgICAgLy8gcmV2ZXJzZSB2ZXJ0aWNhbFxuICAgICAgICAgICAgbGF5b3V0IF49IDIgLyogT1AuUmV2ZXJzZVZlcnRpY2FsICovO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBbbGF5b3V0LCBoUG9zLCB2UG9zXTtcbn07XG5jb25zdCBpc1hSZXZlcnNlZCA9IChjb21wdXRlZFN0eWxlKSA9PiB7XG4gICAgY29uc3QgbGF5b3V0ID0gY2FsY1BoeXNpY2FsQXhpcyhub3JtYWxpemVXcml0aW5nTW9kZShjb21wdXRlZFN0eWxlLndyaXRpbmdNb2RlKSwgY29tcHV0ZWRTdHlsZS5kaXJlY3Rpb24gIT09IFwicnRsXCIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKVswXTtcbiAgICByZXR1cm4gKGxheW91dCAmIDEpID09PSAxO1xufTtcbi8vIGh0dHBzOi8vc291cmNlLmNocm9taXVtLm9yZy9jaHJvbWl1bS9jaHJvbWl1bS9zcmMvKy9tYWluOnRoaXJkX3BhcnR5L2JsaW5rL3JlbmRlcmVyL2NvcmUvZG9tL2VsZW1lbnQuY2M7bD0xMDk3LTExODk7ZHJjPTZhNzUzM2Q0YTFlOWYyMzcyMjIzYTlkOTEyYTllNTNhNmZhMzVhZTBcbmNvbnN0IHRvUGh5c2ljYWxBbGlnbm1lbnQgPSAob3B0aW9ucywgd3JpdGluZ01vZGUsIGlzTFRSKSA9PiB7XG4gICAgY29uc3QgW2xheW91dCwgaFBvcywgdlBvc10gPSBjYWxjUGh5c2ljYWxBeGlzKHdyaXRpbmdNb2RlLCBpc0xUUiwgb3B0aW9ucy5ibG9jayB8fCBcInN0YXJ0XCIsIG9wdGlvbnMuaW5saW5lIHx8IFwibmVhcmVzdFwiKTtcbiAgICByZXR1cm4gW2hQb3MsIHZQb3NdLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJjZW50ZXJcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gMSAvKiBTY3JvbGxBbGlnbm1lbnQuQ2VudGVyQWx3YXlzICovO1xuICAgICAgICAgICAgY2FzZSBcIm5lYXJlc3RcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gMCAvKiBTY3JvbGxBbGlnbm1lbnQuVG9FZGdlSWZOZWVkZWQgKi87XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV2ZXJzZSA9IChsYXlvdXQgPj4gaW5kZXgpICYgMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHZhbHVlID09PSBcInN0YXJ0XCIpID09PSAhcmV2ZXJzZSA/IDIgLyogU2Nyb2xsQWxpZ25tZW50LkxlZnRPclRvcCAqLyA6IDMgLyogU2Nyb2xsQWxpZ25tZW50LlJpZ2h0T3JCb3R0b20gKi87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG4vLyBjb2RlIGZyb20gc3RpcHNhbi9jb21wdXRlLXNjcm9sbC1pbnRvLXZpZXdcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zdGlwc2FuL2NvbXB1dGUtc2Nyb2xsLWludG8tdmlldy9ibG9iLzUzOTZjNmI3OGFmNWQwYmJjZTExYTdjNGU5M2NjMzE0NjU0NmZjZDMvc3JjL2luZGV4LnRzXG4vKipcbiAqIEZpbmQgb3V0IHdoaWNoIGVkZ2UgdG8gYWxpZ24gYWdhaW5zdCB3aGVuIGxvZ2ljYWwgc2Nyb2xsIHBvc2l0aW9uIGlzIFwibmVhcmVzdFwiXG4gKiBJbnRlcmVzdGluZyBmYWN0OiBcIm5lYXJlc3RcIiB3b3JrcyBzaW1pbGFyaWx5IHRvIFwiaWYtbmVlZGVkXCIsIGlmIHRoZSBlbGVtZW50IGlzIGZ1bGx5IHZpc2libGUgaXQgd2lsbCBub3Qgc2Nyb2xsIGl0XG4gKlxuICogTGVnZW5kczpcbiAqIOKUjOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUkCDilI8g4pSBIOKUgSDilIEg4pSTXG4gKiDilIIgdGFyZ2V0IOKUgiAgIGZyYW1lXG4gKiDilJTilIDilIDilIDilIDilIDilIDilIDilIDilJgg4pSXIOKUgSDilIEg4pSBIOKUm1xuICovXG5jb25zdCBtYXBOZWFyZXN0ID0gKGFsaWduLCBzY3JvbGxpbmdFZGdlU3RhcnQsIHNjcm9sbGluZ0VkZ2VFbmQsIHNjcm9sbGluZ1NpemUsIGVsZW1lbnRFZGdlU3RhcnQsIGVsZW1lbnRFZGdlRW5kLCBlbGVtZW50U2l6ZSkgPT4ge1xuICAgIGlmIChhbGlnbiAhPT0gMCAvKiBTY3JvbGxBbGlnbm1lbnQuVG9FZGdlSWZOZWVkZWQgKi8pIHtcbiAgICAgICAgcmV0dXJuIGFsaWduO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiBlbGVtZW50IGVkZ2UgQSBhbmQgZWxlbWVudCBlZGdlIEIgYXJlIGJvdGggb3V0c2lkZSBzY3JvbGxpbmcgYm94IGVkZ2UgQSBhbmQgc2Nyb2xsaW5nIGJveCBlZGdlIEJcbiAgICAgKlxuICAgICAqICAgICAgICAgIOKUjOKUgOKUgOKUkFxuICAgICAqICAgICAgICDilI/ilIHilILilIHilIHilILilIHilJNcbiAgICAgKiAgICAgICAgICDilIIgIOKUglxuICAgICAqICAgICAgICDilIMg4pSCICDilIIg4pSDICAgICAgICBkbyBub3RoaW5nXG4gICAgICogICAgICAgICAg4pSCICDilIJcbiAgICAgKiAgICAgICAg4pSX4pSB4pSC4pSB4pSB4pSC4pSB4pSbXG4gICAgICogICAgICAgICAg4pSU4pSA4pSA4pSYXG4gICAgICpcbiAgICAgKiAgSWYgZWxlbWVudCBlZGdlIEMgYW5kIGVsZW1lbnQgZWRnZSBEIGFyZSBib3RoIG91dHNpZGUgc2Nyb2xsaW5nIGJveCBlZGdlIEMgYW5kIHNjcm9sbGluZyBib3ggZWRnZSBEXG4gICAgICpcbiAgICAgKiAgICDilI8g4pSBIOKUgSDilIEg4pSBIOKUk1xuICAgICAqICAg4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQXG4gICAgICogICDilILilIMgICAgICAgICDilIPilIIgICAgICAgIGRvIG5vdGhpbmdcbiAgICAgKiAgIOKUlOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUmFxuICAgICAqICAgIOKUlyDilIEg4pSBIOKUgSDilIEg4pSbXG4gICAgICovXG4gICAgaWYgKChlbGVtZW50RWRnZVN0YXJ0IDwgc2Nyb2xsaW5nRWRnZVN0YXJ0ICYmIGVsZW1lbnRFZGdlRW5kID4gc2Nyb2xsaW5nRWRnZUVuZCkgfHxcbiAgICAgICAgKGVsZW1lbnRFZGdlU3RhcnQgPiBzY3JvbGxpbmdFZGdlU3RhcnQgJiYgZWxlbWVudEVkZ2VFbmQgPCBzY3JvbGxpbmdFZGdlRW5kKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWYgZWxlbWVudCBlZGdlIEEgaXMgb3V0c2lkZSBzY3JvbGxpbmcgYm94IGVkZ2UgQSBhbmQgZWxlbWVudCBoZWlnaHQgaXMgbGVzcyB0aGFuIHNjcm9sbGluZyBib3ggaGVpZ2h0XG4gICAgICpcbiAgICAgKiAgICAgICAgICDilIzilIDilIDilJBcbiAgICAgKiAgICAgICAg4pSP4pSB4pSC4pSB4pSB4pSC4pSB4pSTICAgICAgICAg4pSP4pSB4pSM4pSB4pSB4pSQ4pSB4pSTXG4gICAgICogICAgICAgICAg4pSU4pSA4pSA4pSYICAgICAgICAgICAgIOKUgiAg4pSCXG4gICAgICogIGZyb20gIOKUgyAgICAgIOKUgyAgICAgdG8gIOKUgyDilJTilIDilIDilJgg4pSDXG4gICAgICpcbiAgICAgKiAgICAgICAg4pSX4pSBIOKUgeKUgSDilIHilJsgICAgICAgICDilJfilIEg4pSB4pSBIOKUgeKUm1xuICAgICAqXG4gICAgICogSWYgZWxlbWVudCBlZGdlIEIgaXMgb3V0c2lkZSBzY3JvbGxpbmcgYm94IGVkZ2UgQiBhbmQgZWxlbWVudCBoZWlnaHQgaXMgZ3JlYXRlciB0aGFuIHNjcm9sbGluZyBib3ggaGVpZ2h0XG4gICAgICpcbiAgICAgKiAgICAgICAg4pSP4pSBIOKUgeKUgSDilIHilJMgICAgICAgICDilI/ilIHilIzilIHilIHilJDilIHilJNcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAg4pSCXG4gICAgICogIGZyb20gIOKUgyDilIzilIDilIDilJAg4pSDICAgICB0byAg4pSDIOKUgiAg4pSCIOKUg1xuICAgICAqICAgICAgICAgIOKUgiAg4pSCICAgICAgICAgICAgIOKUgiAg4pSCXG4gICAgICogICAgICAgIOKUl+KUgeKUguKUgeKUgeKUguKUgeKUmyAgICAgICAgIOKUl+KUgeKUguKUgeKUgeKUguKUgeKUm1xuICAgICAqICAgICAgICAgIOKUgiAg4pSCICAgICAgICAgICAgIOKUlOKUgOKUgOKUmFxuICAgICAqICAgICAgICAgIOKUgiAg4pSCXG4gICAgICogICAgICAgICAg4pSU4pSA4pSA4pSYXG4gICAgICpcbiAgICAgKiBJZiBlbGVtZW50IGVkZ2UgQyBpcyBvdXRzaWRlIHNjcm9sbGluZyBib3ggZWRnZSBDIGFuZCBlbGVtZW50IHdpZHRoIGlzIGxlc3MgdGhhbiBzY3JvbGxpbmcgYm94IHdpZHRoXG4gICAgICpcbiAgICAgKiAgICAgICBmcm9tICAgICAgICAgICAgICAgICB0b1xuICAgICAqICAgIOKUjyDilIEg4pSBIOKUgSDilIEg4pSTICAgICAgICAg4pSPIOKUgSDilIEg4pSBIOKUgSDilJNcbiAgICAgKiAg4pSM4pSA4pSA4pSA4pSQICAgICAgICAgICAgICAgICDilIzilIDilIDilIDilJBcbiAgICAgKiAg4pSCIOKUgyDilIIgICAgICAg4pSDICAgICAgICAg4pSDICAg4pSCICAgICDilINcbiAgICAgKiAg4pSU4pSA4pSA4pSA4pSYICAgICAgICAgICAgICAgICDilJTilIDilIDilIDilJhcbiAgICAgKiAgICDilJcg4pSBIOKUgSDilIEg4pSBIOKUmyAgICAgICAgIOKUlyDilIEg4pSBIOKUgSDilIEg4pSbXG4gICAgICpcbiAgICAgKiBJZiBlbGVtZW50IGVkZ2UgRCBpcyBvdXRzaWRlIHNjcm9sbGluZyBib3ggZWRnZSBEIGFuZCBlbGVtZW50IHdpZHRoIGlzIGdyZWF0ZXIgdGhhbiBzY3JvbGxpbmcgYm94IHdpZHRoXG4gICAgICpcbiAgICAgKiAgICAgICBmcm9tICAgICAgICAgICAgICAgICB0b1xuICAgICAqICAgIOKUjyDilIEg4pSBIOKUgSDilIEg4pSTICAgICAgICAg4pSPIOKUgSDilIEg4pSBIOKUgSDilJNcbiAgICAgKiAgICAgICAg4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQICAg4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQXG4gICAgICogICAg4pSDICAg4pSCICAgICDilIMgICAgIOKUgiAgIOKUgyAgICAgICAgIOKUgyDilIJcbiAgICAgKiAgICAgICAg4pSU4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSYICAg4pSU4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSYXG4gICAgICogICAg4pSXIOKUgSDilIEg4pSBIOKUgSDilJsgICAgICAgICDilJcg4pSBIOKUgSDilIEg4pSBIOKUm1xuICAgICAqL1xuICAgIGlmICgoZWxlbWVudEVkZ2VTdGFydCA8PSBzY3JvbGxpbmdFZGdlU3RhcnQgJiYgZWxlbWVudFNpemUgPD0gc2Nyb2xsaW5nU2l6ZSkgfHxcbiAgICAgICAgKGVsZW1lbnRFZGdlRW5kID49IHNjcm9sbGluZ0VkZ2VFbmQgJiYgZWxlbWVudFNpemUgPj0gc2Nyb2xsaW5nU2l6ZSkpIHtcbiAgICAgICAgcmV0dXJuIDIgLyogU2Nyb2xsQWxpZ25tZW50LkxlZnRPclRvcCAqLztcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWYgZWxlbWVudCBlZGdlIEIgaXMgb3V0c2lkZSBzY3JvbGxpbmcgYm94IGVkZ2UgQiBhbmQgZWxlbWVudCBoZWlnaHQgaXMgbGVzcyB0aGFuIHNjcm9sbGluZyBib3ggaGVpZ2h0XG4gICAgICpcbiAgICAgKiAgICAgICAg4pSP4pSBIOKUgeKUgSDilIHilJMgICAgICAgICDilI/ilIEg4pSB4pSBIOKUgeKUk1xuICAgICAqXG4gICAgICogIGZyb20gIOKUgyAgICAgIOKUgyAgICAgdG8gIOKUgyDilIzilIDilIDilJAg4pSDXG4gICAgICogICAgICAgICAg4pSM4pSA4pSA4pSQICAgICAgICAgICAgIOKUgiAg4pSCXG4gICAgICogICAgICAgIOKUl+KUgeKUguKUgeKUgeKUguKUgeKUmyAgICAgICAgIOKUl+KUgeKUlOKUgeKUgeKUmOKUgeKUm1xuICAgICAqICAgICAgICAgIOKUlOKUgOKUgOKUmFxuICAgICAqXG4gICAgICogSWYgZWxlbWVudCBlZGdlIEEgaXMgb3V0c2lkZSBzY3JvbGxpbmcgYm94IGVkZ2UgQSBhbmQgZWxlbWVudCBoZWlnaHQgaXMgZ3JlYXRlciB0aGFuIHNjcm9sbGluZyBib3ggaGVpZ2h0XG4gICAgICpcbiAgICAgKiAgICAgICAgICDilIzilIDilIDilJBcbiAgICAgKiAgICAgICAgICDilIIgIOKUglxuICAgICAqICAgICAgICAgIOKUgiAg4pSCICAgICAgICAgICAgIOKUjOKUgOKUgOKUkFxuICAgICAqICAgICAgICDilI/ilIHilILilIHilIHilILilIHilJMgICAgICAgICDilI/ilIHilILilIHilIHilILilIHilJNcbiAgICAgKiAgICAgICAgICDilIIgIOKUgiAgICAgICAgICAgICDilIIgIOKUglxuICAgICAqICBmcm9tICDilIMg4pSU4pSA4pSA4pSYIOKUgyAgICAgdG8gIOKUgyDilIIgIOKUgiDilINcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgiAg4pSCXG4gICAgICogICAgICAgIOKUl+KUgSDilIHilIEg4pSB4pSbICAgICAgICAg4pSX4pSB4pSU4pSB4pSB4pSY4pSB4pSbXG4gICAgICpcbiAgICAgKiBJZiBlbGVtZW50IGVkZ2UgQyBpcyBvdXRzaWRlIHNjcm9sbGluZyBib3ggZWRnZSBDIGFuZCBlbGVtZW50IHdpZHRoIGlzIGdyZWF0ZXIgdGhhbiBzY3JvbGxpbmcgYm94IHdpZHRoXG4gICAgICpcbiAgICAgKiAgICAgICAgICAgZnJvbSAgICAgICAgICAgICAgICAgdG9cbiAgICAgKiAgICAgICAg4pSPIOKUgSDilIEg4pSBIOKUgSDilJMgICAgICAgICDilI8g4pSBIOKUgSDilIEg4pSBIOKUk1xuICAgICAqICDilIzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJAgICAgICAgICAgIOKUjOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUkFxuICAgICAqICDilIIgICAgIOKUgyAgICAg4pSCICAg4pSDICAgICAgIOKUgiDilIMgICAgICAgICDilINcbiAgICAgKiAg4pSU4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSYICAgICAgICAgICDilJTilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJhcbiAgICAgKiAgICAgICAg4pSXIOKUgSDilIEg4pSBIOKUgSDilJsgICAgICAgICDilJcg4pSBIOKUgSDilIEg4pSBIOKUm1xuICAgICAqXG4gICAgICogSWYgZWxlbWVudCBlZGdlIEQgaXMgb3V0c2lkZSBzY3JvbGxpbmcgYm94IGVkZ2UgRCBhbmQgZWxlbWVudCB3aWR0aCBpcyBsZXNzIHRoYW4gc2Nyb2xsaW5nIGJveCB3aWR0aFxuICAgICAqXG4gICAgICogICAgICAgICAgIGZyb20gICAgICAgICAgICAgICAgIHRvXG4gICAgICogICAgICAgIOKUjyDilIEg4pSBIOKUgSDilIEg4pSTICAgICAgICAg4pSPIOKUgSDilIEg4pSBIOKUgSDilJNcbiAgICAgKiAgICAgICAgICAgICAgICDilIzilIDilIDilIDilJAgICAgICAgICAgICAg4pSM4pSA4pSA4pSA4pSQXG4gICAgICogICAgICAgIOKUgyAgICAgICDilIIg4pSDIOKUgiAgICAgICDilIMgICAgIOKUgiAgIOKUg1xuICAgICAqICAgICAgICAgICAgICAgIOKUlOKUgOKUgOKUgOKUmCAgICAgICAgICAgICDilJTilIDilIDilIDilJhcbiAgICAgKiAgICAgICAg4pSXIOKUgSDilIEg4pSBIOKUgSDilJsgICAgICAgICDilJcg4pSBIOKUgSDilIEg4pSBIOKUm1xuICAgICAqXG4gICAgICovXG4gICAgaWYgKChlbGVtZW50RWRnZUVuZCA+IHNjcm9sbGluZ0VkZ2VFbmQgJiYgZWxlbWVudFNpemUgPCBzY3JvbGxpbmdTaXplKSB8fFxuICAgICAgICAoZWxlbWVudEVkZ2VTdGFydCA8IHNjcm9sbGluZ0VkZ2VTdGFydCAmJiBlbGVtZW50U2l6ZSA+IHNjcm9sbGluZ1NpemUpKSB7XG4gICAgICAgIHJldHVybiAzIC8qIFNjcm9sbEFsaWdubWVudC5SaWdodE9yQm90dG9tICovO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5jb25zdCBjYW5PdmVyZmxvdyA9IChvdmVyZmxvdykgPT4ge1xuICAgIHJldHVybiBvdmVyZmxvdyAhPT0gXCJ2aXNpYmxlXCIgJiYgb3ZlcmZsb3cgIT09IFwiY2xpcFwiO1xufTtcbmNvbnN0IGdldEZyYW1lRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAoKF9hID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZnJhbWVFbGVtZW50KSB8fCBudWxsO1xuICAgIH1cbiAgICBjYXRjaCAoX2IpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufTtcbmNvbnN0IGlzU2Nyb2xsYWJsZSA9IChlbGVtZW50LCBjb21wdXRlZFN0eWxlKSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuY2xpZW50SGVpZ2h0IDwgZWxlbWVudC5zY3JvbGxIZWlnaHQgfHwgZWxlbWVudC5jbGllbnRXaWR0aCA8IGVsZW1lbnQuc2Nyb2xsV2lkdGgpIHtcbiAgICAgICAgcmV0dXJuIChjYW5PdmVyZmxvdyhjb21wdXRlZFN0eWxlLm92ZXJmbG93WSkgfHxcbiAgICAgICAgICAgIGNhbk92ZXJmbG93KGNvbXB1dGVkU3R5bGUub3ZlcmZsb3dYKSB8fFxuICAgICAgICAgICAgZWxlbWVudCA9PT0gc2Nyb2xsaW5nRWxlbWVudChlbGVtZW50KSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5jb25zdCBwYXJlbnRFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBwTm9kZSA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICBjb25zdCBwRWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBpZiAocEVsZW1lbnQgPT09IG51bGwgJiYgcE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKHBOb2RlLm5vZGVUeXBlID09PSAvKiogTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFICovIDExKSB7XG4gICAgICAgICAgICByZXR1cm4gcE5vZGUuaG9zdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocE5vZGUubm9kZVR5cGUgPT09IC8qKiBOb2RlLkRPQ1VNRU5UX05PREUgKi8gOSkge1xuICAgICAgICAgICAgcmV0dXJuIGdldEZyYW1lRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcEVsZW1lbnQ7XG59O1xuY29uc3QgY2xhbXAgPSAodmFsdWUsIG1pbiwgbWF4KSA9PiB7XG4gICAgaWYgKHZhbHVlIDwgbWluKSB7XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxuICAgIGlmICh2YWx1ZSA+IG1heCkge1xuICAgICAgICByZXR1cm4gbWF4O1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59O1xuY29uc3QgZ2V0U3VwcG9ydGVkU2Nyb2xsTWFyZ2luUHJvcGVydHkgPSAob3duZXJEb2N1bWVudCkgPT4ge1xuICAgIC8vIFdlYmtpdCB1c2VzIFwic2Nyb2xsLXNuYXAtbWFyZ2luXCIgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE4OTI2NS5cbiAgICByZXR1cm4gW1wic2Nyb2xsLW1hcmdpblwiLCBcInNjcm9sbC1zbmFwLW1hcmdpblwiXS5maWx0ZXIoKHByb3BlcnR5KSA9PiBwcm9wZXJ0eSBpbiBvd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSlbMF07XG59O1xuY29uc3QgZ2V0RWxlbWVudFNjcm9sbFNuYXBBcmVhID0gKGVsZW1lbnQsIGVsZW1lbnRSZWN0LCBjb21wdXRlZFN0eWxlKSA9PiB7XG4gICAgY29uc3QgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQgfSA9IGVsZW1lbnRSZWN0O1xuICAgIGNvbnN0IHNjcm9sbFByb3BlcnR5ID0gZ2V0U3VwcG9ydGVkU2Nyb2xsTWFyZ2luUHJvcGVydHkoZWxlbWVudC5vd25lckRvY3VtZW50KTtcbiAgICBpZiAoIXNjcm9sbFByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XTtcbiAgICB9XG4gICAgY29uc3Qgc2Nyb2xsTWFyZ2luVmFsdWUgPSAoZWRnZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShgJHtzY3JvbGxQcm9wZXJ0eX0tJHtlZGdlfWApO1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKSB8fCAwO1xuICAgIH07XG4gICAgcmV0dXJuIFtcbiAgICAgICAgdG9wIC0gc2Nyb2xsTWFyZ2luVmFsdWUoXCJ0b3BcIiksXG4gICAgICAgIHJpZ2h0ICsgc2Nyb2xsTWFyZ2luVmFsdWUoXCJyaWdodFwiKSxcbiAgICAgICAgYm90dG9tICsgc2Nyb2xsTWFyZ2luVmFsdWUoXCJib3R0b21cIiksXG4gICAgICAgIGxlZnQgLSBzY3JvbGxNYXJnaW5WYWx1ZShcImxlZnRcIiksXG4gICAgXTtcbn07XG5jb25zdCBjYWxjQWxpZ25FZGdlID0gKGFsaWduLCBzdGFydCwgZW5kKSA9PiB7XG4gICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgICBjYXNlIDEgLyogU2Nyb2xsQWxpZ25tZW50LkNlbnRlckFsd2F5cyAqLzpcbiAgICAgICAgICAgIHJldHVybiAoc3RhcnQgKyBlbmQpIC8gMjtcbiAgICAgICAgY2FzZSAzIC8qIFNjcm9sbEFsaWdubWVudC5SaWdodE9yQm90dG9tICovOlxuICAgICAgICAgICAgcmV0dXJuIGVuZDtcbiAgICAgICAgY2FzZSAyIC8qIFNjcm9sbEFsaWdubWVudC5MZWZ0T3JUb3AgKi86XG4gICAgICAgIGNhc2UgMCAvKiBTY3JvbGxBbGlnbm1lbnQuVG9FZGdlSWZOZWVkZWQgKi86XG4gICAgICAgICAgICByZXR1cm4gc3RhcnQ7XG4gICAgfVxufTtcbmNvbnN0IGdldEZyYW1lVmlld3BvcnQgPSAoZnJhbWUsIGZyYW1lUmVjdCkgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIGNvbnN0IHZpc3VhbFZpZXdwb3J0ID0gKF9hID0gZnJhbWUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZpc3VhbFZpZXdwb3J0O1xuICAgIGNvbnN0IFt4LCB5LCB3aWR0aCwgaGVpZ2h0XSA9IGZyYW1lID09PSBzY3JvbGxpbmdFbGVtZW50KGZyYW1lKVxuICAgICAgICA/IFswLCAwLCAoX2IgPSB2aXN1YWxWaWV3cG9ydCA9PT0gbnVsbCB8fCB2aXN1YWxWaWV3cG9ydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmlzdWFsVmlld3BvcnQud2lkdGgpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGZyYW1lLmNsaWVudFdpZHRoLCAoX2MgPSB2aXN1YWxWaWV3cG9ydCA9PT0gbnVsbCB8fCB2aXN1YWxWaWV3cG9ydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmlzdWFsVmlld3BvcnQuaGVpZ2h0KSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiBmcmFtZS5jbGllbnRIZWlnaHRdXG4gICAgICAgIDogW2ZyYW1lUmVjdC5sZWZ0LCBmcmFtZVJlY3QudG9wLCBmcmFtZS5jbGllbnRXaWR0aCwgZnJhbWUuY2xpZW50SGVpZ2h0XTtcbiAgICBjb25zdCBsZWZ0ID0geCArIGZyYW1lLmNsaWVudExlZnQ7XG4gICAgY29uc3QgdG9wID0geSArIGZyYW1lLmNsaWVudFRvcDtcbiAgICBjb25zdCByaWdodCA9IGxlZnQgKyB3aWR0aDtcbiAgICBjb25zdCBib3R0b20gPSB0b3AgKyBoZWlnaHQ7XG4gICAgcmV0dXJuIFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdO1xufTtcbmNvbnN0IGNvbXB1dGVTY3JvbGxJbnRvVmlldyA9IChlbGVtZW50LCBvcHRpb25zKSA9PiB7XG4gICAgLy8gQ29sbGVjdCBhbGwgdGhlIHNjcm9sbGluZyBib3hlcywgYXMgZGVmaW5lZCBpbiB0aGUgc3BlYzogaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzc29tLXZpZXcvI3Njcm9sbGluZy1ib3hcbiAgICBjb25zdCBhY3Rpb25zID0gW107XG4gICAgbGV0IG93bmVyRG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgbGV0IG93bmVyV2luZG93ID0gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICBpZiAoIW93bmVyV2luZG93KSB7XG4gICAgICAgIHJldHVybiBhY3Rpb25zO1xuICAgIH1cbiAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgY29uc3QgaXNMVFIgPSBjb21wdXRlZFN0eWxlLmRpcmVjdGlvbiAhPT0gXCJydGxcIjtcbiAgICBjb25zdCB3cml0aW5nTW9kZSA9IG5vcm1hbGl6ZVdyaXRpbmdNb2RlKGNvbXB1dGVkU3R5bGUud3JpdGluZ01vZGUgfHxcbiAgICAgICAgY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLXdlYmtpdC13cml0aW5nLW1vZGVcIikgfHxcbiAgICAgICAgY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLW1zLXdyaXRpbmctbW9kZVwiKSk7XG4gICAgY29uc3QgW2FsaWduSCwgYWxpZ25WXSA9IHRvUGh5c2ljYWxBbGlnbm1lbnQob3B0aW9ucywgd3JpdGluZ01vZGUsIGlzTFRSKTtcbiAgICBsZXQgW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0gPSBnZXRFbGVtZW50U2Nyb2xsU25hcEFyZWEoZWxlbWVudCwgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgY29tcHV0ZWRTdHlsZSk7XG4gICAgZm9yIChsZXQgZnJhbWUgPSBwYXJlbnRFbGVtZW50KGVsZW1lbnQpOyBmcmFtZSAhPT0gbnVsbDsgZnJhbWUgPSBwYXJlbnRFbGVtZW50KGZyYW1lKSkge1xuICAgICAgICBpZiAob3duZXJEb2N1bWVudCAhPT0gZnJhbWUub3duZXJEb2N1bWVudCkge1xuICAgICAgICAgICAgb3duZXJEb2N1bWVudCA9IGZyYW1lLm93bmVyRG9jdW1lbnQ7XG4gICAgICAgICAgICBvd25lcldpbmRvdyA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgICAgICBpZiAoIW93bmVyV2luZG93KSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IGxlZnQ6IGRYLCB0b3A6IGRZIH0gPSBmcmFtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHRvcCArPSBkWTtcbiAgICAgICAgICAgIHJpZ2h0ICs9IGRYO1xuICAgICAgICAgICAgYm90dG9tICs9IGRZO1xuICAgICAgICAgICAgbGVmdCArPSBkWDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmcmFtZVN0eWxlID0gb3duZXJXaW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShmcmFtZSk7XG4gICAgICAgIGlmIChmcmFtZVN0eWxlLnBvc2l0aW9uID09PSBcImZpeGVkXCIpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNTY3JvbGxhYmxlKGZyYW1lLCBmcmFtZVN0eWxlKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZnJhbWVSZWN0ID0gZnJhbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IFtmcmFtZVRvcCwgZnJhbWVSaWdodCwgZnJhbWVCb3R0b20sIGZyYW1lTGVmdF0gPSBnZXRGcmFtZVZpZXdwb3J0KGZyYW1lLCBmcmFtZVJlY3QpO1xuICAgICAgICBjb25zdCBlQWxpZ25IID0gbWFwTmVhcmVzdChhbGlnbkgsIGZyYW1lTGVmdCwgZnJhbWVSaWdodCwgZnJhbWUuY2xpZW50V2lkdGgsIGxlZnQsIHJpZ2h0LCByaWdodCAtIGxlZnQpO1xuICAgICAgICBjb25zdCBlQWxpZ25WID0gbWFwTmVhcmVzdChhbGlnblYsIGZyYW1lVG9wLCBmcmFtZUJvdHRvbSwgZnJhbWUuY2xpZW50SGVpZ2h0LCB0b3AsIGJvdHRvbSwgYm90dG9tIC0gdG9wKTtcbiAgICAgICAgY29uc3QgZGlmZlggPSBlQWxpZ25IID09PSBudWxsID8gMCA6IGNhbGNBbGlnbkVkZ2UoZUFsaWduSCwgbGVmdCwgcmlnaHQpIC0gY2FsY0FsaWduRWRnZShlQWxpZ25ILCBmcmFtZUxlZnQsIGZyYW1lUmlnaHQpO1xuICAgICAgICBjb25zdCBkaWZmWSA9IGVBbGlnblYgPT09IG51bGwgPyAwIDogY2FsY0FsaWduRWRnZShlQWxpZ25WLCB0b3AsIGJvdHRvbSkgLSBjYWxjQWxpZ25FZGdlKGVBbGlnblYsIGZyYW1lVG9wLCBmcmFtZUJvdHRvbSk7XG4gICAgICAgIGNvbnN0IG1vdmVYID0gaXNYUmV2ZXJzZWQoZnJhbWVTdHlsZSlcbiAgICAgICAgICAgID8gY2xhbXAoZGlmZlgsIC1mcmFtZS5zY3JvbGxXaWR0aCArIGZyYW1lLmNsaWVudFdpZHRoIC0gZnJhbWUuc2Nyb2xsTGVmdCwgLWZyYW1lLnNjcm9sbExlZnQpXG4gICAgICAgICAgICA6IGNsYW1wKGRpZmZYLCAtZnJhbWUuc2Nyb2xsTGVmdCwgZnJhbWUuc2Nyb2xsV2lkdGggLSBmcmFtZS5jbGllbnRXaWR0aCAtIGZyYW1lLnNjcm9sbExlZnQpO1xuICAgICAgICBjb25zdCBtb3ZlWSA9IGNsYW1wKGRpZmZZLCAtZnJhbWUuc2Nyb2xsVG9wLCBmcmFtZS5zY3JvbGxIZWlnaHQgLSBmcmFtZS5jbGllbnRIZWlnaHQgLSBmcmFtZS5zY3JvbGxUb3ApO1xuICAgICAgICBhY3Rpb25zLnB1c2goW1xuICAgICAgICAgICAgZnJhbWUsXG4gICAgICAgICAgICB7IGxlZnQ6IGZyYW1lLnNjcm9sbExlZnQgKyBtb3ZlWCwgdG9wOiBmcmFtZS5zY3JvbGxUb3AgKyBtb3ZlWSwgYmVoYXZpb3I6IG9wdGlvbnMuYmVoYXZpb3IgfSxcbiAgICAgICAgXSk7XG4gICAgICAgIHRvcCA9IE1hdGgubWF4KHRvcCAtIG1vdmVZLCBmcmFtZVRvcCk7XG4gICAgICAgIHJpZ2h0ID0gTWF0aC5taW4ocmlnaHQgLSBtb3ZlWCwgZnJhbWVSaWdodCk7XG4gICAgICAgIGJvdHRvbSA9IE1hdGgubWluKGJvdHRvbSAtIG1vdmVZLCBmcmFtZUJvdHRvbSk7XG4gICAgICAgIGxlZnQgPSBNYXRoLm1heChsZWZ0IC0gbW92ZVgsIGZyYW1lTGVmdCk7XG4gICAgfVxuICAgIHJldHVybiBhY3Rpb25zO1xufTtcbmV4cG9ydCBjb25zdCBzY3JvbGxJbnRvVmlldyA9IChlbGVtZW50LCBzY3JvbGxJbnRvVmlld09wdGlvbnMsIGNvbmZpZykgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBzY3JvbGxJbnRvVmlld09wdGlvbnMgfHwge307XG4gICAgaWYgKCFjaGVja0JlaGF2aW9yKG9wdGlvbnMuYmVoYXZpb3IpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoZmFpbGVkRXhlY3V0ZUludmFsaWRFbnVtVmFsdWUoXCJzY3JvbGxJbnRvVmlld1wiLCBcIkVsZW1lbnRcIiwgb3B0aW9ucy5iZWhhdmlvcikpO1xuICAgIH1cbiAgICBjb25zdCBhY3Rpb25zID0gY29tcHV0ZVNjcm9sbEludG9WaWV3KGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgIGFjdGlvbnMuZm9yRWFjaCgoW2ZyYW1lLCBzY3JvbGxUb09wdGlvbnNdKSA9PiB7XG4gICAgICAgIGVsZW1lbnRTY3JvbGwoZnJhbWUsIHNjcm9sbFRvT3B0aW9ucywgY29uZmlnKTtcbiAgICB9KTtcbn07XG5leHBvcnQgY29uc3QgZWxlbWVudFNjcm9sbEludG9WaWV3ID0gc2Nyb2xsSW50b1ZpZXc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY3JvbGxJbnRvVmlldy5qcy5tYXAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxhbmd1YWdlU2VsZWN0IH0gZnJvbSBcIi4vbW9kdWxlcy9sYW5ndWFnZS1zZWxlY3RcIjtcclxuaW1wb3J0IHsgc2VhcmNoSW5wdXQgfSBmcm9tIFwiLi9tb2R1bGVzL3NlYXJjaC1pbnB1dFwiO1xyXG5pbXBvcnQgeyBoZXJvU2xpZGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9oZXJvLXNsaWRlclwiO1xyXG5pbXBvcnQgeyBwcm9kdWN0c1NsaWRlciB9IGZyb20gXCIuL21vZHVsZXMvcHJvZHVjdHMtc2xpZGVyXCI7XHJcbmltcG9ydCB7IG91clRpbWUgfSBmcm9tIFwiLi9tb2R1bGVzL291ci10aW1lXCI7XHJcbmltcG9ydCB7IGJ1dHRvbkNhdGFsb2cgfSBmcm9tIFwiLi9tb2R1bGVzL2J1dHRvbi1jYXRhbG9nXCI7XHJcbmltcG9ydCB7IHNtb290aFNjcm9sbCB9IGZyb20gXCIuL21vZHVsZXMvc21vb3RoU2Nyb2xsXCI7XHJcbmltcG9ydCB7IHRvVG9wQnV0dG9uIH0gZnJvbSBcIi4vbW9kdWxlcy90by10b3AtYnV0dG9uXCI7XHJcbmltcG9ydCB7IGNhdGFsb2dTbGlkZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2NhdGFsb2ctc2xpZGVyXCI7XHJcbmltcG9ydCB7IHNlYXJjaERlY2wgfSBmcm9tIFwiLi9tb2R1bGVzL3NlYXJjaC1kZWNsXCI7XHJcbmltcG9ydCB7IHlhbmRleE1hcCB9IGZyb20gXCIuL21vZHVsZXMveWFuZGV4LW1hcFwiO1xyXG5pbXBvcnQgeyB0aW1lbGluZSB9IGZyb20gXCIuL21vZHVsZXMvdGltZWxpbmVcIjtcclxuaW1wb3J0IHsgbW9kYWwgfSBmcm9tIFwiLi9tb2R1bGVzL21vZGFsXCI7XHJcbmltcG9ydCB7IGZvcm1WYWxpZGF0b3IgfSBmcm9tIFwiLi9tb2R1bGVzL2Zvcm0tdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IHRhYkNvbnRlbnQgfSBmcm9tIFwiLi9tb2R1bGVzL3RhYi1jb250ZW50XCI7XHJcbmltcG9ydCB7IHNjYWxlSW1hZ2VzIH0gZnJvbSBcIi4vbW9kdWxlcy9zY2FsZS1pbWFnZXNcIjtcclxuaW1wb3J0IHsgbW9iaWxlTWVudSB9IGZyb20gXCIuL21vZHVsZXMvbW9iaWxlLW1lbnVcIjtcclxuXHJcbmxhbmd1YWdlU2VsZWN0KCk7XHJcbnNlYXJjaElucHV0KCk7XHJcbmhlcm9TbGlkZXIoKTtcclxucHJvZHVjdHNTbGlkZXIoXCIucHJvZHVjdHMtc2xpZGVyXCIpO1xyXG5wcm9kdWN0c1NsaWRlcihcIi5uZXctcHJvZHVjdHMtc2xpZGVyXCIpO1xyXG5vdXJUaW1lKCk7XHJcbmJ1dHRvbkNhdGFsb2coKTtcclxuc21vb3RoU2Nyb2xsKCk7XHJcbnRvVG9wQnV0dG9uKCk7XHJcbmNhdGFsb2dTbGlkZXIoKTtcclxuc2VhcmNoRGVjbCgpO1xyXG55YW5kZXhNYXAoKTtcclxudGltZWxpbmUoKTtcclxubW9kYWwoKTtcclxuZm9ybVZhbGlkYXRvcigpO1xyXG50YWJDb250ZW50KCk7XHJcbnNjYWxlSW1hZ2VzKCk7XHJcbm1vYmlsZU1lbnUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9