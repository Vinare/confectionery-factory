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
const mobileMenu = () => {
  const btn = document.querySelector(".header__navbar_button");
  const mobileMenu = document.querySelector(".header-menu .-mobile");

  if (mobileMenu) {
    const close = mobileMenu.querySelector(".header-menu__close");

    btn.addEventListener("click", () => {
      mobileMenu.style.display = "block";
      setTimeout(() => mobileMenu.classList.add("-active"));
    });

    close.addEventListener("click", () => {
      mobileMenu.classList.remove("-active");
      setTimeout(() => (mobileMenu.style.display = null), 200);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUE0QyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVEOztBQUUvUCw4REFBOEQsc0VBQXNFLDhEQUE4RCxrREFBa0QsaUJBQWlCLEdBQUc7O0FBRXhRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLDhCQUE4QiwwQ0FBMEM7QUFDeEUsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQsS0FBSyxJQUFJO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDJDQUEyQzs7QUFFaEQ7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBLG9DQUFvQztBQUNwQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBLE9BQU87QUFDUCxlQUFlO0FBQ2YsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsc0RBQXNEO0FBQ3REO0FBQ0EsMkJBQTJCLHVDQUF1QztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3RELE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsT0FBTztBQUNQLDJCQUEyQjtBQUMzQjtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFMG9DOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNsSDNvQyxtQ0FBbUMsMEJBQTBCLDBDQUEwQyxnQkFBZ0IsT0FBTyxvQkFBb0IsZUFBZSxPQUFPOztBQUV4Szs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdGQUFnRixnQkFBZ0I7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtGQUFrRixpQkFBaUI7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLHFGQUFxRixpQkFBaUI7QUFDdEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFGQUFxRixpQkFBaUI7QUFDdEc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcFJPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0hPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0NzQztBQUN0QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHdEQUFNO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBLGlCQUFpQixlQUFlO0FBQ2hDLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0RPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7O0FDdENzQztBQUN0QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3REFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGVBQWU7QUFDOUIsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUN2Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEI4RTtBQUM5RTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG9FQUFpQjtBQUMzQixPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwRUFBdUI7QUFDN0IsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnNDO0FBQ3RDO0FBQ087QUFDUDtBQUNBLFFBQVEsd0RBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFCc0M7QUFDdEM7QUFDTztBQUNQO0FBQ0EsUUFBUSx3REFBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0NPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7OztBQ1JtRDtBQUNuRDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsK0RBQVM7QUFDbEMsMEJBQTBCLCtEQUFTO0FBQ25DO0FBQ0EscUNBQXFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsVUFBVTtBQUMxRTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2ZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7O0FDWjBEO0FBQzFEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBYztBQUN0QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BETztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNEJBQTRCO0FBQ3ZELFFBQVE7QUFDUjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscUVBQXFFO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQLG9DQUFvQyxrQ0FBa0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPLDBHQUEwRyxPQUFPLFFBQVEsT0FBTyxLQUFLLE9BQU87QUFDNUksc0hBQXNILE1BQU07QUFDbkk7QUFDTztBQUNQO0FBQ0Esd0NBQXdDLE9BQU87QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNBO0FBQ1Asb0RBQW9ELGFBQWE7QUFDakU7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDs7Ozs7Ozs7Ozs7Ozs7QUN6Q087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNzSjtBQUMvRjtBQUNWO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdEQUFZLGtDQUFrQyx1REFBZTtBQUNsRixtQkFBbUIsd0RBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixvRUFBYztBQUM1QztBQUNBLGtEQUFrRCxhQUFhLFdBQVcsb0RBQUc7QUFDN0U7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLHFEQUFJO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDREQUFnQjtBQUMzQjtBQUNBO0FBQ0EsU0FBUyxvREFBUTtBQUNqQiw0QkFBNEIseURBQWE7QUFDekM7QUFDQSxTQUFTLHlEQUFhO0FBQ3RCLDRCQUE0Qix5RUFBNkI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RkE7QUFDNkY7QUFDakQ7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVLGFBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyR0FBMkcsWUFBWTtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNERBQWdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkJBQTJCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsZUFBZSxHQUFHLEtBQUs7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyw0REFBZ0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxnQkFBZ0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDBGQUEwRjtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLFNBQVMseURBQWE7QUFDdEIsNEJBQTRCLHlFQUE2QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFhO0FBQ3JCLEtBQUs7QUFDTDtBQUNPO0FBQ1A7Ozs7OztVQzFZQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04yRDtBQUNOO0FBQ0Y7QUFDUTtBQUNkO0FBQ1k7QUFDSDtBQUNBO0FBQ0c7QUFDTjtBQUNGO0FBQ0g7QUFDTjtBQUNpQjtBQUNOO0FBQ0U7QUFDRjtBQUNuRDtBQUNBLHdFQUFjO0FBQ2Qsa0VBQVc7QUFDWCxnRUFBVTtBQUNWLHdFQUFjO0FBQ2Qsd0VBQWM7QUFDZCwwREFBTztBQUNQLHNFQUFhO0FBQ2IsbUVBQVk7QUFDWixtRUFBVztBQUNYLHNFQUFhO0FBQ2IsZ0VBQVU7QUFDViwrREFBUztBQUNULDREQUFRO0FBQ1Isc0RBQUs7QUFDTCx1RUFBYTtBQUNiLGlFQUFVO0FBQ1YsbUVBQVc7QUFDWCxpRUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvQHNwbGlkZWpzL3NwbGlkZS9kaXN0L2pzL3NwbGlkZS5lc20uanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9ib2R5LXNjcm9sbC1sb2NrL2xpYi9ib2R5U2Nyb2xsTG9jay5lc20uanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL3NyYy9oZWxwZXJzL2RlY2wtb2YtbnVtLmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9zcmMvbW9kdWxlcy9idXR0b24tY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL21vZHVsZXMvY2F0YWxvZy1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL2Zvcm0tdmFsaWRhdG9yLmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9zcmMvbW9kdWxlcy9oZXJvLXNsaWRlci5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL21vZHVsZXMvbGFuZ3VhZ2Utc2VsZWN0LmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9zcmMvbW9kdWxlcy9tb2JpbGUtbWVudS5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL21vZHVsZXMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL291ci10aW1lLmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL3NjYWxlLWltYWdlcy5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL21vZHVsZXMvc2VhcmNoLWRlY2wuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL3NlYXJjaC1pbnB1dC5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL21vZHVsZXMvc21vb3RoU2Nyb2xsLmpzIiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9zcmMvbW9kdWxlcy90YWItY29udGVudC5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vc3JjL21vZHVsZXMvdGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL3RvLXRvcC1idXR0b24uanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL3NyYy9tb2R1bGVzL3lhbmRleC1tYXAuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zZWFtbGVzcy1zY3JvbGwtcG9seWZpbGwvbGliL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3NlYW1sZXNzLXNjcm9sbC1wb2x5ZmlsbC9saWIvc2Nyb2xsLWVuZC1ldmVudC5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3NlYW1sZXNzLXNjcm9sbC1wb2x5ZmlsbC9saWIvc2Nyb2xsLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zZWFtbGVzcy1zY3JvbGwtcG9seWZpbGwvbGliL3Njcm9sbC5qcyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3NlYW1sZXNzLXNjcm9sbC1wb2x5ZmlsbC9saWIvc2Nyb2xsSW50b1ZpZXcuanMiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nbG8tYWNhZGVteS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2xvLWFjYWRlbXktd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dsby1hY2FkZW15LXdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4vKiFcbiAqIFNwbGlkZS5qc1xuICogVmVyc2lvbiAgOiA0LjEuNFxuICogTGljZW5zZSAgOiBNSVRcbiAqIENvcHlyaWdodDogMjAyMiBOYW90b3NoaSBGdWppdGFcbiAqL1xudmFyIE1FRElBX1BSRUZFUlNfUkVEVUNFRF9NT1RJT04gPSBcIihwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpXCI7XG52YXIgQ1JFQVRFRCA9IDE7XG52YXIgTU9VTlRFRCA9IDI7XG52YXIgSURMRSA9IDM7XG52YXIgTU9WSU5HID0gNDtcbnZhciBTQ1JPTExJTkcgPSA1O1xudmFyIERSQUdHSU5HID0gNjtcbnZhciBERVNUUk9ZRUQgPSA3O1xudmFyIFNUQVRFUyA9IHtcbiAgQ1JFQVRFRDogQ1JFQVRFRCxcbiAgTU9VTlRFRDogTU9VTlRFRCxcbiAgSURMRTogSURMRSxcbiAgTU9WSU5HOiBNT1ZJTkcsXG4gIFNDUk9MTElORzogU0NST0xMSU5HLFxuICBEUkFHR0lORzogRFJBR0dJTkcsXG4gIERFU1RST1lFRDogREVTVFJPWUVEXG59O1xuXG5mdW5jdGlvbiBlbXB0eShhcnJheSkge1xuICBhcnJheS5sZW5ndGggPSAwO1xufVxuXG5mdW5jdGlvbiBzbGljZShhcnJheUxpa2UsIHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycmF5TGlrZSwgc3RhcnQsIGVuZCk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmMuYmluZC5hcHBseShmdW5jLCBbbnVsbF0uY29uY2F0KHNsaWNlKGFyZ3VtZW50cywgMSkpKTtcbn1cblxudmFyIG5leHRUaWNrID0gc2V0VGltZW91dDtcblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbmZ1bmN0aW9uIHJhZihmdW5jKSB7XG4gIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuYyk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZih0eXBlLCBzdWJqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygc3ViamVjdCA9PT0gdHlwZTtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3Qoc3ViamVjdCkge1xuICByZXR1cm4gIWlzTnVsbChzdWJqZWN0KSAmJiB0eXBlT2YoXCJvYmplY3RcIiwgc3ViamVjdCk7XG59XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbnZhciBpc0Z1bmN0aW9uID0gYXBwbHkodHlwZU9mLCBcImZ1bmN0aW9uXCIpO1xudmFyIGlzU3RyaW5nID0gYXBwbHkodHlwZU9mLCBcInN0cmluZ1wiKTtcbnZhciBpc1VuZGVmaW5lZCA9IGFwcGx5KHR5cGVPZiwgXCJ1bmRlZmluZWRcIik7XG5cbmZ1bmN0aW9uIGlzTnVsbChzdWJqZWN0KSB7XG4gIHJldHVybiBzdWJqZWN0ID09PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50KHN1YmplY3QpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gc3ViamVjdCBpbnN0YW5jZW9mIChzdWJqZWN0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93KS5IVE1MRWxlbWVudDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b0FycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaCh2YWx1ZXMsIGl0ZXJhdGVlKSB7XG4gIHRvQXJyYXkodmFsdWVzKS5mb3JFYWNoKGl0ZXJhdGVlKTtcbn1cblxuZnVuY3Rpb24gaW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XG4gIHJldHVybiBhcnJheS5pbmRleE9mKHZhbHVlKSA+IC0xO1xufVxuXG5mdW5jdGlvbiBwdXNoKGFycmF5LCBpdGVtcykge1xuICBhcnJheS5wdXNoLmFwcGx5KGFycmF5LCB0b0FycmF5KGl0ZW1zKSk7XG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWxtLCBjbGFzc2VzLCBhZGQpIHtcbiAgaWYgKGVsbSkge1xuICAgIGZvckVhY2goY2xhc3NlcywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIGVsbS5jbGFzc0xpc3RbYWRkID8gXCJhZGRcIiA6IFwicmVtb3ZlXCJdKG5hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsbSwgY2xhc3Nlcykge1xuICB0b2dnbGVDbGFzcyhlbG0sIGlzU3RyaW5nKGNsYXNzZXMpID8gY2xhc3Nlcy5zcGxpdChcIiBcIikgOiBjbGFzc2VzLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kKHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgZm9yRWFjaChjaGlsZHJlbiwgcGFyZW50LmFwcGVuZENoaWxkLmJpbmQocGFyZW50KSk7XG59XG5cbmZ1bmN0aW9uIGJlZm9yZShub2RlcywgcmVmKSB7XG4gIGZvckVhY2gobm9kZXMsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdmFyIHBhcmVudCA9IChyZWYgfHwgbm9kZSkucGFyZW50Tm9kZTtcblxuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUobm9kZSwgcmVmKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtYXRjaGVzKGVsbSwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGlzSFRNTEVsZW1lbnQoZWxtKSAmJiAoZWxtW1wibXNNYXRjaGVzU2VsZWN0b3JcIl0gfHwgZWxtLm1hdGNoZXMpLmNhbGwoZWxtLCBzZWxlY3Rvcik7XG59XG5cbmZ1bmN0aW9uIGNoaWxkcmVuKHBhcmVudCwgc2VsZWN0b3IpIHtcbiAgdmFyIGNoaWxkcmVuMiA9IHBhcmVudCA/IHNsaWNlKHBhcmVudC5jaGlsZHJlbikgOiBbXTtcbiAgcmV0dXJuIHNlbGVjdG9yID8gY2hpbGRyZW4yLmZpbHRlcihmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gbWF0Y2hlcyhjaGlsZCwgc2VsZWN0b3IpO1xuICB9KSA6IGNoaWxkcmVuMjtcbn1cblxuZnVuY3Rpb24gY2hpbGQocGFyZW50LCBzZWxlY3Rvcikge1xuICByZXR1cm4gc2VsZWN0b3IgPyBjaGlsZHJlbihwYXJlbnQsIHNlbGVjdG9yKVswXSA6IHBhcmVudC5maXJzdEVsZW1lbnRDaGlsZDtcbn1cblxudmFyIG93bktleXMgPSBPYmplY3Qua2V5cztcblxuZnVuY3Rpb24gZm9yT3duKG9iamVjdCwgaXRlcmF0ZWUsIHJpZ2h0KSB7XG4gIGlmIChvYmplY3QpIHtcbiAgICAocmlnaHQgPyBvd25LZXlzKG9iamVjdCkucmV2ZXJzZSgpIDogb3duS2V5cyhvYmplY3QpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGtleSAhPT0gXCJfX3Byb3RvX19cIiAmJiBpdGVyYXRlZShvYmplY3Rba2V5XSwga2V5KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbihvYmplY3QpIHtcbiAgc2xpY2UoYXJndW1lbnRzLCAxKS5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICBmb3JPd24oc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgb2JqZWN0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIG1lcmdlKG9iamVjdCkge1xuICBzbGljZShhcmd1bWVudHMsIDEpLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgIGZvck93bihzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgb2JqZWN0W2tleV0gPSB2YWx1ZS5zbGljZSgpO1xuICAgICAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgb2JqZWN0W2tleV0gPSBtZXJnZSh7fSwgaXNPYmplY3Qob2JqZWN0W2tleV0pID8gb2JqZWN0W2tleV0gOiB7fSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIG9taXQob2JqZWN0LCBrZXlzKSB7XG4gIGZvckVhY2goa2V5cyB8fCBvd25LZXlzKG9iamVjdCksIGZ1bmN0aW9uIChrZXkpIHtcbiAgICBkZWxldGUgb2JqZWN0W2tleV07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUoZWxtcywgYXR0cnMpIHtcbiAgZm9yRWFjaChlbG1zLCBmdW5jdGlvbiAoZWxtKSB7XG4gICAgZm9yRWFjaChhdHRycywgZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgIGVsbSAmJiBlbG0ucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlKGVsbXMsIGF0dHJzLCB2YWx1ZSkge1xuICBpZiAoaXNPYmplY3QoYXR0cnMpKSB7XG4gICAgZm9yT3duKGF0dHJzLCBmdW5jdGlvbiAodmFsdWUyLCBuYW1lKSB7XG4gICAgICBzZXRBdHRyaWJ1dGUoZWxtcywgbmFtZSwgdmFsdWUyKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmb3JFYWNoKGVsbXMsIGZ1bmN0aW9uIChlbG0pIHtcbiAgICAgIGlzTnVsbCh2YWx1ZSkgfHwgdmFsdWUgPT09IFwiXCIgPyByZW1vdmVBdHRyaWJ1dGUoZWxtLCBhdHRycykgOiBlbG0uc2V0QXR0cmlidXRlKGF0dHJzLCBTdHJpbmcodmFsdWUpKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGUodGFnLCBhdHRycywgcGFyZW50KSB7XG4gIHZhciBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cbiAgaWYgKGF0dHJzKSB7XG4gICAgaXNTdHJpbmcoYXR0cnMpID8gYWRkQ2xhc3MoZWxtLCBhdHRycykgOiBzZXRBdHRyaWJ1dGUoZWxtLCBhdHRycyk7XG4gIH1cblxuICBwYXJlbnQgJiYgYXBwZW5kKHBhcmVudCwgZWxtKTtcbiAgcmV0dXJuIGVsbTtcbn1cblxuZnVuY3Rpb24gc3R5bGUoZWxtLCBwcm9wLCB2YWx1ZSkge1xuICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZWxtKVtwcm9wXTtcbiAgfVxuXG4gIGlmICghaXNOdWxsKHZhbHVlKSkge1xuICAgIGVsbS5zdHlsZVtwcm9wXSA9IFwiXCIgKyB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5KGVsbSwgZGlzcGxheTIpIHtcbiAgc3R5bGUoZWxtLCBcImRpc3BsYXlcIiwgZGlzcGxheTIpO1xufVxuXG5mdW5jdGlvbiBmb2N1cyhlbG0pIHtcbiAgZWxtW1wic2V0QWN0aXZlXCJdICYmIGVsbVtcInNldEFjdGl2ZVwiXSgpIHx8IGVsbS5mb2N1cyh7XG4gICAgcHJldmVudFNjcm9sbDogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKGVsbSwgYXR0cikge1xuICByZXR1cm4gZWxtLmdldEF0dHJpYnV0ZShhdHRyKTtcbn1cblxuZnVuY3Rpb24gaGFzQ2xhc3MoZWxtLCBjbGFzc05hbWUpIHtcbiAgcmV0dXJuIGVsbSAmJiBlbG0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHJlY3QodGFyZ2V0KSB7XG4gIHJldHVybiB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShub2Rlcykge1xuICBmb3JFYWNoKG5vZGVzLCBmdW5jdGlvbiAobm9kZSkge1xuICAgIGlmIChub2RlICYmIG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSHRtbChodG1sKSB7XG4gIHJldHVybiBjaGlsZChuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpLmJvZHkpO1xufVxuXG5mdW5jdGlvbiBwcmV2ZW50KGUsIHN0b3BQcm9wYWdhdGlvbikge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgaWYgKHN0b3BQcm9wYWdhdGlvbikge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBxdWVyeShwYXJlbnQsIHNlbGVjdG9yKSB7XG4gIHJldHVybiBwYXJlbnQgJiYgcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xufVxuXG5mdW5jdGlvbiBxdWVyeUFsbChwYXJlbnQsIHNlbGVjdG9yKSB7XG4gIHJldHVybiBzZWxlY3RvciA/IHNsaWNlKHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkgOiBbXTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxtLCBjbGFzc2VzKSB7XG4gIHRvZ2dsZUNsYXNzKGVsbSwgY2xhc3NlcywgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiB0aW1lT2YoZSkge1xuICByZXR1cm4gZS50aW1lU3RhbXA7XG59XG5cbmZ1bmN0aW9uIHVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlIDogdmFsdWUgPyB2YWx1ZSArIFwicHhcIiA6IFwiXCI7XG59XG5cbnZhciBQUk9KRUNUX0NPREUgPSBcInNwbGlkZVwiO1xudmFyIERBVEFfQVRUUklCVVRFID0gXCJkYXRhLVwiICsgUFJPSkVDVF9DT0RFO1xuXG5mdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiW1wiICsgUFJPSkVDVF9DT0RFICsgXCJdIFwiICsgKG1lc3NhZ2UgfHwgXCJcIikpO1xuICB9XG59XG5cbnZhciBtaW4gPSBNYXRoLm1pbixcbiAgICBtYXggPSBNYXRoLm1heCxcbiAgICBmbG9vciA9IE1hdGguZmxvb3IsXG4gICAgY2VpbCA9IE1hdGguY2VpbCxcbiAgICBhYnMgPSBNYXRoLmFicztcblxuZnVuY3Rpb24gYXBwcm94aW1hdGVseUVxdWFsKHgsIHksIGVwc2lsb24pIHtcbiAgcmV0dXJuIGFicyh4IC0geSkgPCBlcHNpbG9uO1xufVxuXG5mdW5jdGlvbiBiZXR3ZWVuKG51bWJlciwgeCwgeSwgZXhjbHVzaXZlKSB7XG4gIHZhciBtaW5pbXVtID0gbWluKHgsIHkpO1xuICB2YXIgbWF4aW11bSA9IG1heCh4LCB5KTtcbiAgcmV0dXJuIGV4Y2x1c2l2ZSA/IG1pbmltdW0gPCBudW1iZXIgJiYgbnVtYmVyIDwgbWF4aW11bSA6IG1pbmltdW0gPD0gbnVtYmVyICYmIG51bWJlciA8PSBtYXhpbXVtO1xufVxuXG5mdW5jdGlvbiBjbGFtcChudW1iZXIsIHgsIHkpIHtcbiAgdmFyIG1pbmltdW0gPSBtaW4oeCwgeSk7XG4gIHZhciBtYXhpbXVtID0gbWF4KHgsIHkpO1xuICByZXR1cm4gbWluKG1heChtaW5pbXVtLCBudW1iZXIpLCBtYXhpbXVtKTtcbn1cblxuZnVuY3Rpb24gc2lnbih4KSB7XG4gIHJldHVybiArKHggPiAwKSAtICsoeCA8IDApO1xufVxuXG5mdW5jdGlvbiBjYW1lbFRvS2ViYWIoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKFthLXowLTldKShbQS1aXSkvZywgXCIkMS0kMlwiKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXQoc3RyaW5nLCByZXBsYWNlbWVudHMpIHtcbiAgZm9yRWFjaChyZXBsYWNlbWVudHMsIGZ1bmN0aW9uIChyZXBsYWNlbWVudCkge1xuICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKFwiJXNcIiwgXCJcIiArIHJlcGxhY2VtZW50KTtcbiAgfSk7XG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHBhZChudW1iZXIpIHtcbiAgcmV0dXJuIG51bWJlciA8IDEwID8gXCIwXCIgKyBudW1iZXIgOiBcIlwiICsgbnVtYmVyO1xufVxuXG52YXIgaWRzID0ge307XG5cbmZ1bmN0aW9uIHVuaXF1ZUlkKHByZWZpeCkge1xuICByZXR1cm4gXCJcIiArIHByZWZpeCArIHBhZChpZHNbcHJlZml4XSA9IChpZHNbcHJlZml4XSB8fCAwKSArIDEpO1xufVxuXG5mdW5jdGlvbiBFdmVudEJpbmRlcigpIHtcbiAgdmFyIGxpc3RlbmVycyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGJpbmQodGFyZ2V0cywgZXZlbnRzLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGZvckVhY2hFdmVudCh0YXJnZXRzLCBldmVudHMsIGZ1bmN0aW9uICh0YXJnZXQsIGV2ZW50LCBuYW1lc3BhY2UpIHtcbiAgICAgIHZhciBpc0V2ZW50VGFyZ2V0ID0gKFwiYWRkRXZlbnRMaXN0ZW5lclwiIGluIHRhcmdldCk7XG4gICAgICB2YXIgcmVtb3ZlciA9IGlzRXZlbnRUYXJnZXQgPyB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKHRhcmdldCwgZXZlbnQsIGNhbGxiYWNrLCBvcHRpb25zKSA6IHRhcmdldFtcInJlbW92ZUxpc3RlbmVyXCJdLmJpbmQodGFyZ2V0LCBjYWxsYmFjayk7XG4gICAgICBpc0V2ZW50VGFyZ2V0ID8gdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrLCBvcHRpb25zKSA6IHRhcmdldFtcImFkZExpc3RlbmVyXCJdKGNhbGxiYWNrKTtcbiAgICAgIGxpc3RlbmVycy5wdXNoKFt0YXJnZXQsIGV2ZW50LCBuYW1lc3BhY2UsIGNhbGxiYWNrLCByZW1vdmVyXSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB1bmJpbmQodGFyZ2V0cywgZXZlbnRzLCBjYWxsYmFjaykge1xuICAgIGZvckVhY2hFdmVudCh0YXJnZXRzLCBldmVudHMsIGZ1bmN0aW9uICh0YXJnZXQsIGV2ZW50LCBuYW1lc3BhY2UpIHtcbiAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIGlmIChsaXN0ZW5lclswXSA9PT0gdGFyZ2V0ICYmIGxpc3RlbmVyWzFdID09PSBldmVudCAmJiBsaXN0ZW5lclsyXSA9PT0gbmFtZXNwYWNlICYmICghY2FsbGJhY2sgfHwgbGlzdGVuZXJbM10gPT09IGNhbGxiYWNrKSkge1xuICAgICAgICAgIGxpc3RlbmVyWzRdKCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BhdGNoKHRhcmdldCwgdHlwZSwgZGV0YWlsKSB7XG4gICAgdmFyIGU7XG4gICAgdmFyIGJ1YmJsZXMgPSB0cnVlO1xuXG4gICAgaWYgKHR5cGVvZiBDdXN0b21FdmVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBlID0gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIHtcbiAgICAgICAgYnViYmxlczogYnViYmxlcyxcbiAgICAgICAgZGV0YWlsOiBkZXRhaWxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcbiAgICAgIGUuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIGJ1YmJsZXMsIGZhbHNlLCBkZXRhaWwpO1xuICAgIH1cblxuICAgIHRhcmdldC5kaXNwYXRjaEV2ZW50KGUpO1xuICAgIHJldHVybiBlO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9yRWFjaEV2ZW50KHRhcmdldHMsIGV2ZW50cywgaXRlcmF0ZWUpIHtcbiAgICBmb3JFYWNoKHRhcmdldHMsIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIHRhcmdldCAmJiBmb3JFYWNoKGV2ZW50cywgZnVuY3Rpb24gKGV2ZW50czIpIHtcbiAgICAgICAgZXZlbnRzMi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROUykge1xuICAgICAgICAgIHZhciBmcmFnbWVudCA9IGV2ZW50TlMuc3BsaXQoXCIuXCIpO1xuICAgICAgICAgIGl0ZXJhdGVlKHRhcmdldCwgZnJhZ21lbnRbMF0sIGZyYWdtZW50WzFdKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGRhdGFbNF0oKTtcbiAgICB9KTtcbiAgICBlbXB0eShsaXN0ZW5lcnMpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBiaW5kOiBiaW5kLFxuICAgIHVuYmluZDogdW5iaW5kLFxuICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICBkZXN0cm95OiBkZXN0cm95XG4gIH07XG59XG5cbnZhciBFVkVOVF9NT1VOVEVEID0gXCJtb3VudGVkXCI7XG52YXIgRVZFTlRfUkVBRFkgPSBcInJlYWR5XCI7XG52YXIgRVZFTlRfTU9WRSA9IFwibW92ZVwiO1xudmFyIEVWRU5UX01PVkVEID0gXCJtb3ZlZFwiO1xudmFyIEVWRU5UX0NMSUNLID0gXCJjbGlja1wiO1xudmFyIEVWRU5UX0FDVElWRSA9IFwiYWN0aXZlXCI7XG52YXIgRVZFTlRfSU5BQ1RJVkUgPSBcImluYWN0aXZlXCI7XG52YXIgRVZFTlRfVklTSUJMRSA9IFwidmlzaWJsZVwiO1xudmFyIEVWRU5UX0hJRERFTiA9IFwiaGlkZGVuXCI7XG52YXIgRVZFTlRfUkVGUkVTSCA9IFwicmVmcmVzaFwiO1xudmFyIEVWRU5UX1VQREFURUQgPSBcInVwZGF0ZWRcIjtcbnZhciBFVkVOVF9SRVNJWkUgPSBcInJlc2l6ZVwiO1xudmFyIEVWRU5UX1JFU0laRUQgPSBcInJlc2l6ZWRcIjtcbnZhciBFVkVOVF9EUkFHID0gXCJkcmFnXCI7XG52YXIgRVZFTlRfRFJBR0dJTkcgPSBcImRyYWdnaW5nXCI7XG52YXIgRVZFTlRfRFJBR0dFRCA9IFwiZHJhZ2dlZFwiO1xudmFyIEVWRU5UX1NDUk9MTCA9IFwic2Nyb2xsXCI7XG52YXIgRVZFTlRfU0NST0xMRUQgPSBcInNjcm9sbGVkXCI7XG52YXIgRVZFTlRfT1ZFUkZMT1cgPSBcIm92ZXJmbG93XCI7XG52YXIgRVZFTlRfREVTVFJPWSA9IFwiZGVzdHJveVwiO1xudmFyIEVWRU5UX0FSUk9XU19NT1VOVEVEID0gXCJhcnJvd3M6bW91bnRlZFwiO1xudmFyIEVWRU5UX0FSUk9XU19VUERBVEVEID0gXCJhcnJvd3M6dXBkYXRlZFwiO1xudmFyIEVWRU5UX1BBR0lOQVRJT05fTU9VTlRFRCA9IFwicGFnaW5hdGlvbjptb3VudGVkXCI7XG52YXIgRVZFTlRfUEFHSU5BVElPTl9VUERBVEVEID0gXCJwYWdpbmF0aW9uOnVwZGF0ZWRcIjtcbnZhciBFVkVOVF9OQVZJR0FUSU9OX01PVU5URUQgPSBcIm5hdmlnYXRpb246bW91bnRlZFwiO1xudmFyIEVWRU5UX0FVVE9QTEFZX1BMQVkgPSBcImF1dG9wbGF5OnBsYXlcIjtcbnZhciBFVkVOVF9BVVRPUExBWV9QTEFZSU5HID0gXCJhdXRvcGxheTpwbGF5aW5nXCI7XG52YXIgRVZFTlRfQVVUT1BMQVlfUEFVU0UgPSBcImF1dG9wbGF5OnBhdXNlXCI7XG52YXIgRVZFTlRfTEFaWUxPQURfTE9BREVEID0gXCJsYXp5bG9hZDpsb2FkZWRcIjtcbnZhciBFVkVOVF9TTElERV9LRVlET1dOID0gXCJza1wiO1xudmFyIEVWRU5UX1NISUZURUQgPSBcInNoXCI7XG52YXIgRVZFTlRfRU5EX0lOREVYX0NIQU5HRUQgPSBcImVpXCI7XG5cbmZ1bmN0aW9uIEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpIHtcbiAgdmFyIGJ1cyA9IFNwbGlkZTIgPyBTcGxpZGUyLmV2ZW50LmJ1cyA6IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgdmFyIGJpbmRlciA9IEV2ZW50QmluZGVyKCk7XG5cbiAgZnVuY3Rpb24gb24oZXZlbnRzLCBjYWxsYmFjaykge1xuICAgIGJpbmRlci5iaW5kKGJ1cywgdG9BcnJheShldmVudHMpLmpvaW4oXCIgXCIpLCBmdW5jdGlvbiAoZSkge1xuICAgICAgY2FsbGJhY2suYXBwbHkoY2FsbGJhY2ssIGlzQXJyYXkoZS5kZXRhaWwpID8gZS5kZXRhaWwgOiBbXSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBlbWl0KGV2ZW50KSB7XG4gICAgYmluZGVyLmRpc3BhdGNoKGJ1cywgZXZlbnQsIHNsaWNlKGFyZ3VtZW50cywgMSkpO1xuICB9XG5cbiAgaWYgKFNwbGlkZTIpIHtcbiAgICBTcGxpZGUyLmV2ZW50Lm9uKEVWRU5UX0RFU1RST1ksIGJpbmRlci5kZXN0cm95KTtcbiAgfVxuXG4gIHJldHVybiBhc3NpZ24oYmluZGVyLCB7XG4gICAgYnVzOiBidXMsXG4gICAgb246IG9uLFxuICAgIG9mZjogYXBwbHkoYmluZGVyLnVuYmluZCwgYnVzKSxcbiAgICBlbWl0OiBlbWl0XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBSZXF1ZXN0SW50ZXJ2YWwoaW50ZXJ2YWwsIG9uSW50ZXJ2YWwsIG9uVXBkYXRlLCBsaW1pdCkge1xuICB2YXIgbm93ID0gRGF0ZS5ub3c7XG4gIHZhciBzdGFydFRpbWU7XG4gIHZhciByYXRlID0gMDtcbiAgdmFyIGlkO1xuICB2YXIgcGF1c2VkID0gdHJ1ZTtcbiAgdmFyIGNvdW50ID0gMDtcblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgaWYgKCFwYXVzZWQpIHtcbiAgICAgIHJhdGUgPSBpbnRlcnZhbCA/IG1pbigobm93KCkgLSBzdGFydFRpbWUpIC8gaW50ZXJ2YWwsIDEpIDogMTtcbiAgICAgIG9uVXBkYXRlICYmIG9uVXBkYXRlKHJhdGUpO1xuXG4gICAgICBpZiAocmF0ZSA+PSAxKSB7XG4gICAgICAgIG9uSW50ZXJ2YWwoKTtcbiAgICAgICAgc3RhcnRUaW1lID0gbm93KCk7XG5cbiAgICAgICAgaWYgKGxpbWl0ICYmICsrY291bnQgPj0gbGltaXQpIHtcbiAgICAgICAgICByZXR1cm4gcGF1c2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZCA9IHJhZih1cGRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0KHJlc3VtZSkge1xuICAgIHJlc3VtZSB8fCBjYW5jZWwoKTtcbiAgICBzdGFydFRpbWUgPSBub3coKSAtIChyZXN1bWUgPyByYXRlICogaW50ZXJ2YWwgOiAwKTtcbiAgICBwYXVzZWQgPSBmYWxzZTtcbiAgICBpZCA9IHJhZih1cGRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgcGF1c2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJld2luZCgpIHtcbiAgICBzdGFydFRpbWUgPSBub3coKTtcbiAgICByYXRlID0gMDtcblxuICAgIGlmIChvblVwZGF0ZSkge1xuICAgICAgb25VcGRhdGUocmF0ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlkICYmIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKTtcbiAgICByYXRlID0gMDtcbiAgICBpZCA9IDA7XG4gICAgcGF1c2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldCh0aW1lKSB7XG4gICAgaW50ZXJ2YWwgPSB0aW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNQYXVzZWQoKSB7XG4gICAgcmV0dXJuIHBhdXNlZDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhcnQ6IHN0YXJ0LFxuICAgIHJld2luZDogcmV3aW5kLFxuICAgIHBhdXNlOiBwYXVzZSxcbiAgICBjYW5jZWw6IGNhbmNlbCxcbiAgICBzZXQ6IHNldCxcbiAgICBpc1BhdXNlZDogaXNQYXVzZWRcbiAgfTtcbn1cblxuZnVuY3Rpb24gU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblxuICBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICBzdGF0ZSA9IHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gaXMoc3RhdGVzKSB7XG4gICAgcmV0dXJuIGluY2x1ZGVzKHRvQXJyYXkoc3RhdGVzKSwgc3RhdGUpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZXQ6IHNldCxcbiAgICBpczogaXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gVGhyb3R0bGUoZnVuYywgZHVyYXRpb24pIHtcbiAgdmFyIGludGVydmFsID0gUmVxdWVzdEludGVydmFsKGR1cmF0aW9uIHx8IDAsIGZ1bmMsIG51bGwsIDEpO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGludGVydmFsLmlzUGF1c2VkKCkgJiYgaW50ZXJ2YWwuc3RhcnQoKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gTWVkaWEoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIHN0YXRlID0gU3BsaWRlMi5zdGF0ZTtcbiAgdmFyIGJyZWFrcG9pbnRzID0gb3B0aW9ucy5icmVha3BvaW50cyB8fCB7fTtcbiAgdmFyIHJlZHVjZWRNb3Rpb24gPSBvcHRpb25zLnJlZHVjZWRNb3Rpb24gfHwge307XG4gIHZhciBiaW5kZXIgPSBFdmVudEJpbmRlcigpO1xuICB2YXIgcXVlcmllcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIHNldHVwKCkge1xuICAgIHZhciBpc01pbiA9IG9wdGlvbnMubWVkaWFRdWVyeSA9PT0gXCJtaW5cIjtcbiAgICBvd25LZXlzKGJyZWFrcG9pbnRzKS5zb3J0KGZ1bmN0aW9uIChuLCBtKSB7XG4gICAgICByZXR1cm4gaXNNaW4gPyArbiAtICttIDogK20gLSArbjtcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJlZ2lzdGVyKGJyZWFrcG9pbnRzW2tleV0sIFwiKFwiICsgKGlzTWluID8gXCJtaW5cIiA6IFwibWF4XCIpICsgXCItd2lkdGg6XCIgKyBrZXkgKyBcInB4KVwiKTtcbiAgICB9KTtcbiAgICByZWdpc3RlcihyZWR1Y2VkTW90aW9uLCBNRURJQV9QUkVGRVJTX1JFRFVDRURfTU9USU9OKTtcbiAgICB1cGRhdGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koY29tcGxldGVseSkge1xuICAgIGlmIChjb21wbGV0ZWx5KSB7XG4gICAgICBiaW5kZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyKG9wdGlvbnMyLCBxdWVyeSkge1xuICAgIHZhciBxdWVyeUxpc3QgPSBtYXRjaE1lZGlhKHF1ZXJ5KTtcbiAgICBiaW5kZXIuYmluZChxdWVyeUxpc3QsIFwiY2hhbmdlXCIsIHVwZGF0ZSk7XG4gICAgcXVlcmllcy5wdXNoKFtvcHRpb25zMiwgcXVlcnlMaXN0XSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIGRlc3Ryb3llZCA9IHN0YXRlLmlzKERFU1RST1lFRCk7XG4gICAgdmFyIGRpcmVjdGlvbiA9IG9wdGlvbnMuZGlyZWN0aW9uO1xuICAgIHZhciBtZXJnZWQgPSBxdWVyaWVzLnJlZHVjZShmdW5jdGlvbiAobWVyZ2VkMiwgZW50cnkpIHtcbiAgICAgIHJldHVybiBtZXJnZShtZXJnZWQyLCBlbnRyeVsxXS5tYXRjaGVzID8gZW50cnlbMF0gOiB7fSk7XG4gICAgfSwge30pO1xuICAgIG9taXQob3B0aW9ucyk7XG4gICAgc2V0KG1lcmdlZCk7XG5cbiAgICBpZiAob3B0aW9ucy5kZXN0cm95KSB7XG4gICAgICBTcGxpZGUyLmRlc3Ryb3kob3B0aW9ucy5kZXN0cm95ID09PSBcImNvbXBsZXRlbHlcIik7XG4gICAgfSBlbHNlIGlmIChkZXN0cm95ZWQpIHtcbiAgICAgIGRlc3Ryb3kodHJ1ZSk7XG4gICAgICBTcGxpZGUyLm1vdW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpcmVjdGlvbiAhPT0gb3B0aW9ucy5kaXJlY3Rpb24gJiYgU3BsaWRlMi5yZWZyZXNoKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVkdWNlKGVuYWJsZSkge1xuICAgIGlmIChtYXRjaE1lZGlhKE1FRElBX1BSRUZFUlNfUkVEVUNFRF9NT1RJT04pLm1hdGNoZXMpIHtcbiAgICAgIGVuYWJsZSA/IG1lcmdlKG9wdGlvbnMsIHJlZHVjZWRNb3Rpb24pIDogb21pdChvcHRpb25zLCBvd25LZXlzKHJlZHVjZWRNb3Rpb24pKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXQob3B0cywgYmFzZSwgbm90aWZ5KSB7XG4gICAgbWVyZ2Uob3B0aW9ucywgb3B0cyk7XG4gICAgYmFzZSAmJiBtZXJnZShPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3B0aW9ucyksIG9wdHMpO1xuXG4gICAgaWYgKG5vdGlmeSB8fCAhc3RhdGUuaXMoQ1JFQVRFRCkpIHtcbiAgICAgIFNwbGlkZTIuZW1pdChFVkVOVF9VUERBVEVELCBvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNldHVwOiBzZXR1cCxcbiAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgIHJlZHVjZTogcmVkdWNlLFxuICAgIHNldDogc2V0XG4gIH07XG59XG5cbnZhciBBUlJPVyA9IFwiQXJyb3dcIjtcbnZhciBBUlJPV19MRUZUID0gQVJST1cgKyBcIkxlZnRcIjtcbnZhciBBUlJPV19SSUdIVCA9IEFSUk9XICsgXCJSaWdodFwiO1xudmFyIEFSUk9XX1VQID0gQVJST1cgKyBcIlVwXCI7XG52YXIgQVJST1dfRE9XTiA9IEFSUk9XICsgXCJEb3duXCI7XG52YXIgTFRSID0gXCJsdHJcIjtcbnZhciBSVEwgPSBcInJ0bFwiO1xudmFyIFRUQiA9IFwidHRiXCI7XG52YXIgT1JJRU5UQVRJT05fTUFQID0ge1xuICB3aWR0aDogW1wiaGVpZ2h0XCJdLFxuICBsZWZ0OiBbXCJ0b3BcIiwgXCJyaWdodFwiXSxcbiAgcmlnaHQ6IFtcImJvdHRvbVwiLCBcImxlZnRcIl0sXG4gIHg6IFtcInlcIl0sXG4gIFg6IFtcIllcIl0sXG4gIFk6IFtcIlhcIl0sXG4gIEFycm93TGVmdDogW0FSUk9XX1VQLCBBUlJPV19SSUdIVF0sXG4gIEFycm93UmlnaHQ6IFtBUlJPV19ET1dOLCBBUlJPV19MRUZUXVxufTtcblxuZnVuY3Rpb24gRGlyZWN0aW9uKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIGZ1bmN0aW9uIHJlc29sdmUocHJvcCwgYXhpc09ubHksIGRpcmVjdGlvbikge1xuICAgIGRpcmVjdGlvbiA9IGRpcmVjdGlvbiB8fCBvcHRpb25zLmRpcmVjdGlvbjtcbiAgICB2YXIgaW5kZXggPSBkaXJlY3Rpb24gPT09IFJUTCAmJiAhYXhpc09ubHkgPyAxIDogZGlyZWN0aW9uID09PSBUVEIgPyAwIDogLTE7XG4gICAgcmV0dXJuIE9SSUVOVEFUSU9OX01BUFtwcm9wXSAmJiBPUklFTlRBVElPTl9NQVBbcHJvcF1baW5kZXhdIHx8IHByb3AucmVwbGFjZSgvd2lkdGh8bGVmdHxyaWdodC9pLCBmdW5jdGlvbiAobWF0Y2gsIG9mZnNldCkge1xuICAgICAgdmFyIHJlcGxhY2VtZW50ID0gT1JJRU5UQVRJT05fTUFQW21hdGNoLnRvTG93ZXJDYXNlKCldW2luZGV4XSB8fCBtYXRjaDtcbiAgICAgIHJldHVybiBvZmZzZXQgPiAwID8gcmVwbGFjZW1lbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByZXBsYWNlbWVudC5zbGljZSgxKSA6IHJlcGxhY2VtZW50O1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb3JpZW50KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICogKG9wdGlvbnMuZGlyZWN0aW9uID09PSBSVEwgPyAxIDogLTEpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgIG9yaWVudDogb3JpZW50XG4gIH07XG59XG5cbnZhciBST0xFID0gXCJyb2xlXCI7XG52YXIgVEFCX0lOREVYID0gXCJ0YWJpbmRleFwiO1xudmFyIERJU0FCTEVEID0gXCJkaXNhYmxlZFwiO1xudmFyIEFSSUFfUFJFRklYID0gXCJhcmlhLVwiO1xudmFyIEFSSUFfQ09OVFJPTFMgPSBBUklBX1BSRUZJWCArIFwiY29udHJvbHNcIjtcbnZhciBBUklBX0NVUlJFTlQgPSBBUklBX1BSRUZJWCArIFwiY3VycmVudFwiO1xudmFyIEFSSUFfU0VMRUNURUQgPSBBUklBX1BSRUZJWCArIFwic2VsZWN0ZWRcIjtcbnZhciBBUklBX0xBQkVMID0gQVJJQV9QUkVGSVggKyBcImxhYmVsXCI7XG52YXIgQVJJQV9MQUJFTExFREJZID0gQVJJQV9QUkVGSVggKyBcImxhYmVsbGVkYnlcIjtcbnZhciBBUklBX0hJRERFTiA9IEFSSUFfUFJFRklYICsgXCJoaWRkZW5cIjtcbnZhciBBUklBX09SSUVOVEFUSU9OID0gQVJJQV9QUkVGSVggKyBcIm9yaWVudGF0aW9uXCI7XG52YXIgQVJJQV9ST0xFREVTQ1JJUFRJT04gPSBBUklBX1BSRUZJWCArIFwicm9sZWRlc2NyaXB0aW9uXCI7XG52YXIgQVJJQV9MSVZFID0gQVJJQV9QUkVGSVggKyBcImxpdmVcIjtcbnZhciBBUklBX0JVU1kgPSBBUklBX1BSRUZJWCArIFwiYnVzeVwiO1xudmFyIEFSSUFfQVRPTUlDID0gQVJJQV9QUkVGSVggKyBcImF0b21pY1wiO1xudmFyIEFMTF9BVFRSSUJVVEVTID0gW1JPTEUsIFRBQl9JTkRFWCwgRElTQUJMRUQsIEFSSUFfQ09OVFJPTFMsIEFSSUFfQ1VSUkVOVCwgQVJJQV9MQUJFTCwgQVJJQV9MQUJFTExFREJZLCBBUklBX0hJRERFTiwgQVJJQV9PUklFTlRBVElPTiwgQVJJQV9ST0xFREVTQ1JJUFRJT05dO1xudmFyIENMQVNTX1BSRUZJWCA9IFBST0pFQ1RfQ09ERSArIFwiX19cIjtcbnZhciBTVEFUVVNfQ0xBU1NfUFJFRklYID0gXCJpcy1cIjtcbnZhciBDTEFTU19ST09UID0gUFJPSkVDVF9DT0RFO1xudmFyIENMQVNTX1RSQUNLID0gQ0xBU1NfUFJFRklYICsgXCJ0cmFja1wiO1xudmFyIENMQVNTX0xJU1QgPSBDTEFTU19QUkVGSVggKyBcImxpc3RcIjtcbnZhciBDTEFTU19TTElERSA9IENMQVNTX1BSRUZJWCArIFwic2xpZGVcIjtcbnZhciBDTEFTU19DTE9ORSA9IENMQVNTX1NMSURFICsgXCItLWNsb25lXCI7XG52YXIgQ0xBU1NfQ09OVEFJTkVSID0gQ0xBU1NfU0xJREUgKyBcIl9fY29udGFpbmVyXCI7XG52YXIgQ0xBU1NfQVJST1dTID0gQ0xBU1NfUFJFRklYICsgXCJhcnJvd3NcIjtcbnZhciBDTEFTU19BUlJPVyA9IENMQVNTX1BSRUZJWCArIFwiYXJyb3dcIjtcbnZhciBDTEFTU19BUlJPV19QUkVWID0gQ0xBU1NfQVJST1cgKyBcIi0tcHJldlwiO1xudmFyIENMQVNTX0FSUk9XX05FWFQgPSBDTEFTU19BUlJPVyArIFwiLS1uZXh0XCI7XG52YXIgQ0xBU1NfUEFHSU5BVElPTiA9IENMQVNTX1BSRUZJWCArIFwicGFnaW5hdGlvblwiO1xudmFyIENMQVNTX1BBR0lOQVRJT05fUEFHRSA9IENMQVNTX1BBR0lOQVRJT04gKyBcIl9fcGFnZVwiO1xudmFyIENMQVNTX1BST0dSRVNTID0gQ0xBU1NfUFJFRklYICsgXCJwcm9ncmVzc1wiO1xudmFyIENMQVNTX1BST0dSRVNTX0JBUiA9IENMQVNTX1BST0dSRVNTICsgXCJfX2JhclwiO1xudmFyIENMQVNTX1RPR0dMRSA9IENMQVNTX1BSRUZJWCArIFwidG9nZ2xlXCI7XG52YXIgQ0xBU1NfVE9HR0xFX1BMQVkgPSBDTEFTU19UT0dHTEUgKyBcIl9fcGxheVwiO1xudmFyIENMQVNTX1RPR0dMRV9QQVVTRSA9IENMQVNTX1RPR0dMRSArIFwiX19wYXVzZVwiO1xudmFyIENMQVNTX1NQSU5ORVIgPSBDTEFTU19QUkVGSVggKyBcInNwaW5uZXJcIjtcbnZhciBDTEFTU19TUiA9IENMQVNTX1BSRUZJWCArIFwic3JcIjtcbnZhciBDTEFTU19JTklUSUFMSVpFRCA9IFNUQVRVU19DTEFTU19QUkVGSVggKyBcImluaXRpYWxpemVkXCI7XG52YXIgQ0xBU1NfQUNUSVZFID0gU1RBVFVTX0NMQVNTX1BSRUZJWCArIFwiYWN0aXZlXCI7XG52YXIgQ0xBU1NfUFJFViA9IFNUQVRVU19DTEFTU19QUkVGSVggKyBcInByZXZcIjtcbnZhciBDTEFTU19ORVhUID0gU1RBVFVTX0NMQVNTX1BSRUZJWCArIFwibmV4dFwiO1xudmFyIENMQVNTX1ZJU0lCTEUgPSBTVEFUVVNfQ0xBU1NfUFJFRklYICsgXCJ2aXNpYmxlXCI7XG52YXIgQ0xBU1NfTE9BRElORyA9IFNUQVRVU19DTEFTU19QUkVGSVggKyBcImxvYWRpbmdcIjtcbnZhciBDTEFTU19GT0NVU19JTiA9IFNUQVRVU19DTEFTU19QUkVGSVggKyBcImZvY3VzLWluXCI7XG52YXIgQ0xBU1NfT1ZFUkZMT1cgPSBTVEFUVVNfQ0xBU1NfUFJFRklYICsgXCJvdmVyZmxvd1wiO1xudmFyIFNUQVRVU19DTEFTU0VTID0gW0NMQVNTX0FDVElWRSwgQ0xBU1NfVklTSUJMRSwgQ0xBU1NfUFJFViwgQ0xBU1NfTkVYVCwgQ0xBU1NfTE9BRElORywgQ0xBU1NfRk9DVVNfSU4sIENMQVNTX09WRVJGTE9XXTtcbnZhciBDTEFTU0VTID0ge1xuICBzbGlkZTogQ0xBU1NfU0xJREUsXG4gIGNsb25lOiBDTEFTU19DTE9ORSxcbiAgYXJyb3dzOiBDTEFTU19BUlJPV1MsXG4gIGFycm93OiBDTEFTU19BUlJPVyxcbiAgcHJldjogQ0xBU1NfQVJST1dfUFJFVixcbiAgbmV4dDogQ0xBU1NfQVJST1dfTkVYVCxcbiAgcGFnaW5hdGlvbjogQ0xBU1NfUEFHSU5BVElPTixcbiAgcGFnZTogQ0xBU1NfUEFHSU5BVElPTl9QQUdFLFxuICBzcGlubmVyOiBDTEFTU19TUElOTkVSXG59O1xuXG5mdW5jdGlvbiBjbG9zZXN0KGZyb20sIHNlbGVjdG9yKSB7XG4gIGlmIChpc0Z1bmN0aW9uKGZyb20uY2xvc2VzdCkpIHtcbiAgICByZXR1cm4gZnJvbS5jbG9zZXN0KHNlbGVjdG9yKTtcbiAgfVxuXG4gIHZhciBlbG0gPSBmcm9tO1xuXG4gIHdoaWxlIChlbG0gJiYgZWxtLm5vZGVUeXBlID09PSAxKSB7XG4gICAgaWYgKG1hdGNoZXMoZWxtLCBzZWxlY3RvcikpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGVsbSA9IGVsbS5wYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIGVsbTtcbn1cblxudmFyIEZSSUNUSU9OID0gNTtcbnZhciBMT0dfSU5URVJWQUwgPSAyMDA7XG52YXIgUE9JTlRFUl9ET1dOX0VWRU5UUyA9IFwidG91Y2hzdGFydCBtb3VzZWRvd25cIjtcbnZhciBQT0lOVEVSX01PVkVfRVZFTlRTID0gXCJ0b3VjaG1vdmUgbW91c2Vtb3ZlXCI7XG52YXIgUE9JTlRFUl9VUF9FVkVOVFMgPSBcInRvdWNoZW5kIHRvdWNoY2FuY2VsIG1vdXNldXAgY2xpY2tcIjtcblxuZnVuY3Rpb24gRWxlbWVudHMoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZSA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2Uub24sXG4gICAgICBiaW5kID0gX0V2ZW50SW50ZXJmYWNlLmJpbmQ7XG5cbiAgdmFyIHJvb3QgPSBTcGxpZGUyLnJvb3Q7XG4gIHZhciBpMThuID0gb3B0aW9ucy5pMThuO1xuICB2YXIgZWxlbWVudHMgPSB7fTtcbiAgdmFyIHNsaWRlcyA9IFtdO1xuICB2YXIgcm9vdENsYXNzZXMgPSBbXTtcbiAgdmFyIHRyYWNrQ2xhc3NlcyA9IFtdO1xuICB2YXIgdHJhY2s7XG4gIHZhciBsaXN0O1xuICB2YXIgaXNVc2luZ0tleTtcblxuICBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICBjb2xsZWN0KCk7XG4gICAgaW5pdCgpO1xuICAgIHVwZGF0ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgb24oRVZFTlRfUkVGUkVTSCwgZGVzdHJveSk7XG4gICAgb24oRVZFTlRfUkVGUkVTSCwgc2V0dXApO1xuICAgIG9uKEVWRU5UX1VQREFURUQsIHVwZGF0ZSk7XG4gICAgYmluZChkb2N1bWVudCwgUE9JTlRFUl9ET1dOX0VWRU5UUyArIFwiIGtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlzVXNpbmdLZXkgPSBlLnR5cGUgPT09IFwia2V5ZG93blwiO1xuICAgIH0sIHtcbiAgICAgIGNhcHR1cmU6IHRydWVcbiAgICB9KTtcbiAgICBiaW5kKHJvb3QsIFwiZm9jdXNpblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0b2dnbGVDbGFzcyhyb290LCBDTEFTU19GT0NVU19JTiwgISFpc1VzaW5nS2V5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koY29tcGxldGVseSkge1xuICAgIHZhciBhdHRycyA9IEFMTF9BVFRSSUJVVEVTLmNvbmNhdChcInN0eWxlXCIpO1xuICAgIGVtcHR5KHNsaWRlcyk7XG4gICAgcmVtb3ZlQ2xhc3Mocm9vdCwgcm9vdENsYXNzZXMpO1xuICAgIHJlbW92ZUNsYXNzKHRyYWNrLCB0cmFja0NsYXNzZXMpO1xuICAgIHJlbW92ZUF0dHJpYnV0ZShbdHJhY2ssIGxpc3RdLCBhdHRycyk7XG4gICAgcmVtb3ZlQXR0cmlidXRlKHJvb3QsIGNvbXBsZXRlbHkgPyBhdHRycyA6IFtcInN0eWxlXCIsIEFSSUFfUk9MRURFU0NSSVBUSU9OXSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgcmVtb3ZlQ2xhc3Mocm9vdCwgcm9vdENsYXNzZXMpO1xuICAgIHJlbW92ZUNsYXNzKHRyYWNrLCB0cmFja0NsYXNzZXMpO1xuICAgIHJvb3RDbGFzc2VzID0gZ2V0Q2xhc3NlcyhDTEFTU19ST09UKTtcbiAgICB0cmFja0NsYXNzZXMgPSBnZXRDbGFzc2VzKENMQVNTX1RSQUNLKTtcbiAgICBhZGRDbGFzcyhyb290LCByb290Q2xhc3Nlcyk7XG4gICAgYWRkQ2xhc3ModHJhY2ssIHRyYWNrQ2xhc3Nlcyk7XG4gICAgc2V0QXR0cmlidXRlKHJvb3QsIEFSSUFfTEFCRUwsIG9wdGlvbnMubGFiZWwpO1xuICAgIHNldEF0dHJpYnV0ZShyb290LCBBUklBX0xBQkVMTEVEQlksIG9wdGlvbnMubGFiZWxsZWRieSk7XG4gIH1cblxuICBmdW5jdGlvbiBjb2xsZWN0KCkge1xuICAgIHRyYWNrID0gZmluZChcIi5cIiArIENMQVNTX1RSQUNLKTtcbiAgICBsaXN0ID0gY2hpbGQodHJhY2ssIFwiLlwiICsgQ0xBU1NfTElTVCk7XG4gICAgYXNzZXJ0KHRyYWNrICYmIGxpc3QsIFwiQSB0cmFjay9saXN0IGVsZW1lbnQgaXMgbWlzc2luZy5cIik7XG4gICAgcHVzaChzbGlkZXMsIGNoaWxkcmVuKGxpc3QsIFwiLlwiICsgQ0xBU1NfU0xJREUgKyBcIjpub3QoLlwiICsgQ0xBU1NfQ0xPTkUgKyBcIilcIikpO1xuICAgIGZvck93bih7XG4gICAgICBhcnJvd3M6IENMQVNTX0FSUk9XUyxcbiAgICAgIHBhZ2luYXRpb246IENMQVNTX1BBR0lOQVRJT04sXG4gICAgICBwcmV2OiBDTEFTU19BUlJPV19QUkVWLFxuICAgICAgbmV4dDogQ0xBU1NfQVJST1dfTkVYVCxcbiAgICAgIGJhcjogQ0xBU1NfUFJPR1JFU1NfQkFSLFxuICAgICAgdG9nZ2xlOiBDTEFTU19UT0dHTEVcbiAgICB9LCBmdW5jdGlvbiAoY2xhc3NOYW1lLCBrZXkpIHtcbiAgICAgIGVsZW1lbnRzW2tleV0gPSBmaW5kKFwiLlwiICsgY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgICBhc3NpZ24oZWxlbWVudHMsIHtcbiAgICAgIHJvb3Q6IHJvb3QsXG4gICAgICB0cmFjazogdHJhY2ssXG4gICAgICBsaXN0OiBsaXN0LFxuICAgICAgc2xpZGVzOiBzbGlkZXNcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIGlkID0gcm9vdC5pZCB8fCB1bmlxdWVJZChQUk9KRUNUX0NPREUpO1xuICAgIHZhciByb2xlID0gb3B0aW9ucy5yb2xlO1xuICAgIHJvb3QuaWQgPSBpZDtcbiAgICB0cmFjay5pZCA9IHRyYWNrLmlkIHx8IGlkICsgXCItdHJhY2tcIjtcbiAgICBsaXN0LmlkID0gbGlzdC5pZCB8fCBpZCArIFwiLWxpc3RcIjtcblxuICAgIGlmICghZ2V0QXR0cmlidXRlKHJvb3QsIFJPTEUpICYmIHJvb3QudGFnTmFtZSAhPT0gXCJTRUNUSU9OXCIgJiYgcm9sZSkge1xuICAgICAgc2V0QXR0cmlidXRlKHJvb3QsIFJPTEUsIHJvbGUpO1xuICAgIH1cblxuICAgIHNldEF0dHJpYnV0ZShyb290LCBBUklBX1JPTEVERVNDUklQVElPTiwgaTE4bi5jYXJvdXNlbCk7XG4gICAgc2V0QXR0cmlidXRlKGxpc3QsIFJPTEUsIFwicHJlc2VudGF0aW9uXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZmluZChzZWxlY3Rvcikge1xuICAgIHZhciBlbG0gPSBxdWVyeShyb290LCBzZWxlY3Rvcik7XG4gICAgcmV0dXJuIGVsbSAmJiBjbG9zZXN0KGVsbSwgXCIuXCIgKyBDTEFTU19ST09UKSA9PT0gcm9vdCA/IGVsbSA6IHZvaWQgMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENsYXNzZXMoYmFzZSkge1xuICAgIHJldHVybiBbYmFzZSArIFwiLS1cIiArIG9wdGlvbnMudHlwZSwgYmFzZSArIFwiLS1cIiArIG9wdGlvbnMuZGlyZWN0aW9uLCBvcHRpb25zLmRyYWcgJiYgYmFzZSArIFwiLS1kcmFnZ2FibGVcIiwgb3B0aW9ucy5pc05hdmlnYXRpb24gJiYgYmFzZSArIFwiLS1uYXZcIiwgYmFzZSA9PT0gQ0xBU1NfUk9PVCAmJiBDTEFTU19BQ1RJVkVdO1xuICB9XG5cbiAgcmV0dXJuIGFzc2lnbihlbGVtZW50cywge1xuICAgIHNldHVwOiBzZXR1cCxcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogZGVzdHJveVxuICB9KTtcbn1cblxudmFyIFNMSURFID0gXCJzbGlkZVwiO1xudmFyIExPT1AgPSBcImxvb3BcIjtcbnZhciBGQURFID0gXCJmYWRlXCI7XG5cbmZ1bmN0aW9uIFNsaWRlJDEoU3BsaWRlMiwgaW5kZXgsIHNsaWRlSW5kZXgsIHNsaWRlKSB7XG4gIHZhciBldmVudCA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpO1xuICB2YXIgb24gPSBldmVudC5vbixcbiAgICAgIGVtaXQgPSBldmVudC5lbWl0LFxuICAgICAgYmluZCA9IGV2ZW50LmJpbmQ7XG4gIHZhciBDb21wb25lbnRzID0gU3BsaWRlMi5Db21wb25lbnRzLFxuICAgICAgcm9vdCA9IFNwbGlkZTIucm9vdCxcbiAgICAgIG9wdGlvbnMgPSBTcGxpZGUyLm9wdGlvbnM7XG4gIHZhciBpc05hdmlnYXRpb24gPSBvcHRpb25zLmlzTmF2aWdhdGlvbixcbiAgICAgIHVwZGF0ZU9uTW92ZSA9IG9wdGlvbnMudXBkYXRlT25Nb3ZlLFxuICAgICAgaTE4biA9IG9wdGlvbnMuaTE4bixcbiAgICAgIHBhZ2luYXRpb24gPSBvcHRpb25zLnBhZ2luYXRpb24sXG4gICAgICBzbGlkZUZvY3VzID0gb3B0aW9ucy5zbGlkZUZvY3VzO1xuICB2YXIgcmVzb2x2ZSA9IENvbXBvbmVudHMuRGlyZWN0aW9uLnJlc29sdmU7XG4gIHZhciBzdHlsZXMgPSBnZXRBdHRyaWJ1dGUoc2xpZGUsIFwic3R5bGVcIik7XG4gIHZhciBsYWJlbCA9IGdldEF0dHJpYnV0ZShzbGlkZSwgQVJJQV9MQUJFTCk7XG4gIHZhciBpc0Nsb25lID0gc2xpZGVJbmRleCA+IC0xO1xuICB2YXIgY29udGFpbmVyID0gY2hpbGQoc2xpZGUsIFwiLlwiICsgQ0xBU1NfQ09OVEFJTkVSKTtcbiAgdmFyIGRlc3Ryb3llZDtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpZiAoIWlzQ2xvbmUpIHtcbiAgICAgIHNsaWRlLmlkID0gcm9vdC5pZCArIFwiLXNsaWRlXCIgKyBwYWQoaW5kZXggKyAxKTtcbiAgICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgUk9MRSwgcGFnaW5hdGlvbiA/IFwidGFicGFuZWxcIiA6IFwiZ3JvdXBcIik7XG4gICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfUk9MRURFU0NSSVBUSU9OLCBpMThuLnNsaWRlKTtcbiAgICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgQVJJQV9MQUJFTCwgbGFiZWwgfHwgZm9ybWF0KGkxOG4uc2xpZGVMYWJlbCwgW2luZGV4ICsgMSwgU3BsaWRlMi5sZW5ndGhdKSk7XG4gICAgfVxuXG4gICAgbGlzdGVuKCk7XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4oKSB7XG4gICAgYmluZChzbGlkZSwgXCJjbGlja1wiLCBhcHBseShlbWl0LCBFVkVOVF9DTElDSywgc2VsZikpO1xuICAgIGJpbmQoc2xpZGUsIFwia2V5ZG93blwiLCBhcHBseShlbWl0LCBFVkVOVF9TTElERV9LRVlET1dOLCBzZWxmKSk7XG4gICAgb24oW0VWRU5UX01PVkVELCBFVkVOVF9TSElGVEVELCBFVkVOVF9TQ1JPTExFRF0sIHVwZGF0ZSk7XG4gICAgb24oRVZFTlRfTkFWSUdBVElPTl9NT1VOVEVELCBpbml0TmF2aWdhdGlvbik7XG5cbiAgICBpZiAodXBkYXRlT25Nb3ZlKSB7XG4gICAgICBvbihFVkVOVF9NT1ZFLCBvbk1vdmUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgZGVzdHJveWVkID0gdHJ1ZTtcbiAgICBldmVudC5kZXN0cm95KCk7XG4gICAgcmVtb3ZlQ2xhc3Moc2xpZGUsIFNUQVRVU19DTEFTU0VTKTtcbiAgICByZW1vdmVBdHRyaWJ1dGUoc2xpZGUsIEFMTF9BVFRSSUJVVEVTKTtcbiAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIFwic3R5bGVcIiwgc3R5bGVzKTtcbiAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfTEFCRUwsIGxhYmVsIHx8IFwiXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdE5hdmlnYXRpb24oKSB7XG4gICAgdmFyIGNvbnRyb2xzID0gU3BsaWRlMi5zcGxpZGVzLm1hcChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICB2YXIgU2xpZGUyID0gdGFyZ2V0LnNwbGlkZS5Db21wb25lbnRzLlNsaWRlcy5nZXRBdChpbmRleCk7XG4gICAgICByZXR1cm4gU2xpZGUyID8gU2xpZGUyLnNsaWRlLmlkIDogXCJcIjtcbiAgICB9KS5qb2luKFwiIFwiKTtcbiAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfTEFCRUwsIGZvcm1hdChpMThuLnNsaWRlWCwgKGlzQ2xvbmUgPyBzbGlkZUluZGV4IDogaW5kZXgpICsgMSkpO1xuICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgQVJJQV9DT05UUk9MUywgY29udHJvbHMpO1xuICAgIHNldEF0dHJpYnV0ZShzbGlkZSwgUk9MRSwgc2xpZGVGb2N1cyA/IFwiYnV0dG9uXCIgOiBcIlwiKTtcbiAgICBzbGlkZUZvY3VzICYmIHJlbW92ZUF0dHJpYnV0ZShzbGlkZSwgQVJJQV9ST0xFREVTQ1JJUFRJT04pO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3ZlKCkge1xuICAgIGlmICghZGVzdHJveWVkKSB7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgaWYgKCFkZXN0cm95ZWQpIHtcbiAgICAgIHZhciBjdXJyID0gU3BsaWRlMi5pbmRleDtcbiAgICAgIHVwZGF0ZUFjdGl2aXR5KCk7XG4gICAgICB1cGRhdGVWaXNpYmlsaXR5KCk7XG4gICAgICB0b2dnbGVDbGFzcyhzbGlkZSwgQ0xBU1NfUFJFViwgaW5kZXggPT09IGN1cnIgLSAxKTtcbiAgICAgIHRvZ2dsZUNsYXNzKHNsaWRlLCBDTEFTU19ORVhULCBpbmRleCA9PT0gY3VyciArIDEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUFjdGl2aXR5KCkge1xuICAgIHZhciBhY3RpdmUgPSBpc0FjdGl2ZSgpO1xuXG4gICAgaWYgKGFjdGl2ZSAhPT0gaGFzQ2xhc3Moc2xpZGUsIENMQVNTX0FDVElWRSkpIHtcbiAgICAgIHRvZ2dsZUNsYXNzKHNsaWRlLCBDTEFTU19BQ1RJVkUsIGFjdGl2ZSk7XG4gICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfQ1VSUkVOVCwgaXNOYXZpZ2F0aW9uICYmIGFjdGl2ZSB8fCBcIlwiKTtcbiAgICAgIGVtaXQoYWN0aXZlID8gRVZFTlRfQUNUSVZFIDogRVZFTlRfSU5BQ1RJVkUsIHNlbGYpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVZpc2liaWxpdHkoKSB7XG4gICAgdmFyIHZpc2libGUgPSBpc1Zpc2libGUoKTtcbiAgICB2YXIgaGlkZGVuID0gIXZpc2libGUgJiYgKCFpc0FjdGl2ZSgpIHx8IGlzQ2xvbmUpO1xuXG4gICAgaWYgKCFTcGxpZGUyLnN0YXRlLmlzKFtNT1ZJTkcsIFNDUk9MTElOR10pKSB7XG4gICAgICBzZXRBdHRyaWJ1dGUoc2xpZGUsIEFSSUFfSElEREVOLCBoaWRkZW4gfHwgXCJcIik7XG4gICAgfVxuXG4gICAgc2V0QXR0cmlidXRlKHF1ZXJ5QWxsKHNsaWRlLCBvcHRpb25zLmZvY3VzYWJsZU5vZGVzIHx8IFwiXCIpLCBUQUJfSU5ERVgsIGhpZGRlbiA/IC0xIDogXCJcIik7XG5cbiAgICBpZiAoc2xpZGVGb2N1cykge1xuICAgICAgc2V0QXR0cmlidXRlKHNsaWRlLCBUQUJfSU5ERVgsIGhpZGRlbiA/IC0xIDogMCk7XG4gICAgfVxuXG4gICAgaWYgKHZpc2libGUgIT09IGhhc0NsYXNzKHNsaWRlLCBDTEFTU19WSVNJQkxFKSkge1xuICAgICAgdG9nZ2xlQ2xhc3Moc2xpZGUsIENMQVNTX1ZJU0lCTEUsIHZpc2libGUpO1xuICAgICAgZW1pdCh2aXNpYmxlID8gRVZFTlRfVklTSUJMRSA6IEVWRU5UX0hJRERFTiwgc2VsZik7XG4gICAgfVxuXG4gICAgaWYgKCF2aXNpYmxlICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHNsaWRlKSB7XG4gICAgICB2YXIgU2xpZGUyID0gQ29tcG9uZW50cy5TbGlkZXMuZ2V0QXQoU3BsaWRlMi5pbmRleCk7XG4gICAgICBTbGlkZTIgJiYgZm9jdXMoU2xpZGUyLnNsaWRlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdHlsZSQxKHByb3AsIHZhbHVlLCB1c2VDb250YWluZXIpIHtcbiAgICBzdHlsZSh1c2VDb250YWluZXIgJiYgY29udGFpbmVyIHx8IHNsaWRlLCBwcm9wLCB2YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0FjdGl2ZSgpIHtcbiAgICB2YXIgY3VyciA9IFNwbGlkZTIuaW5kZXg7XG4gICAgcmV0dXJuIGN1cnIgPT09IGluZGV4IHx8IG9wdGlvbnMuY2xvbmVTdGF0dXMgJiYgY3VyciA9PT0gc2xpZGVJbmRleDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVmlzaWJsZSgpIHtcbiAgICBpZiAoU3BsaWRlMi5pcyhGQURFKSkge1xuICAgICAgcmV0dXJuIGlzQWN0aXZlKCk7XG4gICAgfVxuXG4gICAgdmFyIHRyYWNrUmVjdCA9IHJlY3QoQ29tcG9uZW50cy5FbGVtZW50cy50cmFjayk7XG4gICAgdmFyIHNsaWRlUmVjdCA9IHJlY3Qoc2xpZGUpO1xuICAgIHZhciBsZWZ0ID0gcmVzb2x2ZShcImxlZnRcIiwgdHJ1ZSk7XG4gICAgdmFyIHJpZ2h0ID0gcmVzb2x2ZShcInJpZ2h0XCIsIHRydWUpO1xuICAgIHJldHVybiBmbG9vcih0cmFja1JlY3RbbGVmdF0pIDw9IGNlaWwoc2xpZGVSZWN0W2xlZnRdKSAmJiBmbG9vcihzbGlkZVJlY3RbcmlnaHRdKSA8PSBjZWlsKHRyYWNrUmVjdFtyaWdodF0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNXaXRoaW4oZnJvbSwgZGlzdGFuY2UpIHtcbiAgICB2YXIgZGlmZiA9IGFicyhmcm9tIC0gaW5kZXgpO1xuXG4gICAgaWYgKCFpc0Nsb25lICYmIChvcHRpb25zLnJld2luZCB8fCBTcGxpZGUyLmlzKExPT1ApKSkge1xuICAgICAgZGlmZiA9IG1pbihkaWZmLCBTcGxpZGUyLmxlbmd0aCAtIGRpZmYpO1xuICAgIH1cblxuICAgIHJldHVybiBkaWZmIDw9IGRpc3RhbmNlO1xuICB9XG5cbiAgdmFyIHNlbGYgPSB7XG4gICAgaW5kZXg6IGluZGV4LFxuICAgIHNsaWRlSW5kZXg6IHNsaWRlSW5kZXgsXG4gICAgc2xpZGU6IHNsaWRlLFxuICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgIGlzQ2xvbmU6IGlzQ2xvbmUsXG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgc3R5bGU6IHN0eWxlJDEsXG4gICAgaXNXaXRoaW46IGlzV2l0aGluXG4gIH07XG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBTbGlkZXMoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTIgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlMi5vbixcbiAgICAgIGVtaXQgPSBfRXZlbnRJbnRlcmZhY2UyLmVtaXQsXG4gICAgICBiaW5kID0gX0V2ZW50SW50ZXJmYWNlMi5iaW5kO1xuXG4gIHZhciBfQ29tcG9uZW50czIkRWxlbWVudHMgPSBDb21wb25lbnRzMi5FbGVtZW50cyxcbiAgICAgIHNsaWRlcyA9IF9Db21wb25lbnRzMiRFbGVtZW50cy5zbGlkZXMsXG4gICAgICBsaXN0ID0gX0NvbXBvbmVudHMyJEVsZW1lbnRzLmxpc3Q7XG4gIHZhciBTbGlkZXMyID0gW107XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaW5pdCgpO1xuICAgIG9uKEVWRU5UX1JFRlJFU0gsIGRlc3Ryb3kpO1xuICAgIG9uKEVWRU5UX1JFRlJFU0gsIGluaXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBzbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAoc2xpZGUsIGluZGV4KSB7XG4gICAgICByZWdpc3RlcihzbGlkZSwgaW5kZXgsIC0xKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgZm9yRWFjaCQxKGZ1bmN0aW9uIChTbGlkZTIpIHtcbiAgICAgIFNsaWRlMi5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgZW1wdHkoU2xpZGVzMik7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgZm9yRWFjaCQxKGZ1bmN0aW9uIChTbGlkZTIpIHtcbiAgICAgIFNsaWRlMi51cGRhdGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyKHNsaWRlLCBpbmRleCwgc2xpZGVJbmRleCkge1xuICAgIHZhciBvYmplY3QgPSBTbGlkZSQxKFNwbGlkZTIsIGluZGV4LCBzbGlkZUluZGV4LCBzbGlkZSk7XG4gICAgb2JqZWN0Lm1vdW50KCk7XG4gICAgU2xpZGVzMi5wdXNoKG9iamVjdCk7XG4gICAgU2xpZGVzMi5zb3J0KGZ1bmN0aW9uIChTbGlkZTEsIFNsaWRlMikge1xuICAgICAgcmV0dXJuIFNsaWRlMS5pbmRleCAtIFNsaWRlMi5pbmRleDtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldChleGNsdWRlQ2xvbmVzKSB7XG4gICAgcmV0dXJuIGV4Y2x1ZGVDbG9uZXMgPyBmaWx0ZXIoZnVuY3Rpb24gKFNsaWRlMikge1xuICAgICAgcmV0dXJuICFTbGlkZTIuaXNDbG9uZTtcbiAgICB9KSA6IFNsaWRlczI7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbihwYWdlKSB7XG4gICAgdmFyIENvbnRyb2xsZXIgPSBDb21wb25lbnRzMi5Db250cm9sbGVyO1xuICAgIHZhciBpbmRleCA9IENvbnRyb2xsZXIudG9JbmRleChwYWdlKTtcbiAgICB2YXIgbWF4ID0gQ29udHJvbGxlci5oYXNGb2N1cygpID8gMSA6IG9wdGlvbnMucGVyUGFnZTtcbiAgICByZXR1cm4gZmlsdGVyKGZ1bmN0aW9uIChTbGlkZTIpIHtcbiAgICAgIHJldHVybiBiZXR3ZWVuKFNsaWRlMi5pbmRleCwgaW5kZXgsIGluZGV4ICsgbWF4IC0gMSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBdChpbmRleCkge1xuICAgIHJldHVybiBmaWx0ZXIoaW5kZXgpWzBdO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKGl0ZW1zLCBpbmRleCkge1xuICAgIGZvckVhY2goaXRlbXMsIGZ1bmN0aW9uIChzbGlkZSkge1xuICAgICAgaWYgKGlzU3RyaW5nKHNsaWRlKSkge1xuICAgICAgICBzbGlkZSA9IHBhcnNlSHRtbChzbGlkZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0hUTUxFbGVtZW50KHNsaWRlKSkge1xuICAgICAgICB2YXIgcmVmID0gc2xpZGVzW2luZGV4XTtcbiAgICAgICAgcmVmID8gYmVmb3JlKHNsaWRlLCByZWYpIDogYXBwZW5kKGxpc3QsIHNsaWRlKTtcbiAgICAgICAgYWRkQ2xhc3Moc2xpZGUsIG9wdGlvbnMuY2xhc3Nlcy5zbGlkZSk7XG4gICAgICAgIG9ic2VydmVJbWFnZXMoc2xpZGUsIGFwcGx5KGVtaXQsIEVWRU5UX1JFU0laRSkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGVtaXQoRVZFTlRfUkVGUkVTSCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmUkMShtYXRjaGVyKSB7XG4gICAgcmVtb3ZlKGZpbHRlcihtYXRjaGVyKS5tYXAoZnVuY3Rpb24gKFNsaWRlMikge1xuICAgICAgcmV0dXJuIFNsaWRlMi5zbGlkZTtcbiAgICB9KSk7XG4gICAgZW1pdChFVkVOVF9SRUZSRVNIKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvckVhY2gkMShpdGVyYXRlZSwgZXhjbHVkZUNsb25lcykge1xuICAgIGdldChleGNsdWRlQ2xvbmVzKS5mb3JFYWNoKGl0ZXJhdGVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbHRlcihtYXRjaGVyKSB7XG4gICAgcmV0dXJuIFNsaWRlczIuZmlsdGVyKGlzRnVuY3Rpb24obWF0Y2hlcikgPyBtYXRjaGVyIDogZnVuY3Rpb24gKFNsaWRlMikge1xuICAgICAgcmV0dXJuIGlzU3RyaW5nKG1hdGNoZXIpID8gbWF0Y2hlcyhTbGlkZTIuc2xpZGUsIG1hdGNoZXIpIDogaW5jbHVkZXModG9BcnJheShtYXRjaGVyKSwgU2xpZGUyLmluZGV4KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0eWxlKHByb3AsIHZhbHVlLCB1c2VDb250YWluZXIpIHtcbiAgICBmb3JFYWNoJDEoZnVuY3Rpb24gKFNsaWRlMikge1xuICAgICAgU2xpZGUyLnN0eWxlKHByb3AsIHZhbHVlLCB1c2VDb250YWluZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gb2JzZXJ2ZUltYWdlcyhlbG0sIGNhbGxiYWNrKSB7XG4gICAgdmFyIGltYWdlcyA9IHF1ZXJ5QWxsKGVsbSwgXCJpbWdcIik7XG4gICAgdmFyIGxlbmd0aCA9IGltYWdlcy5sZW5ndGg7XG5cbiAgICBpZiAobGVuZ3RoKSB7XG4gICAgICBpbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgIGJpbmQoaW1nLCBcImxvYWQgZXJyb3JcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghIC0tbGVuZ3RoKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMZW5ndGgoZXhjbHVkZUNsb25lcykge1xuICAgIHJldHVybiBleGNsdWRlQ2xvbmVzID8gc2xpZGVzLmxlbmd0aCA6IFNsaWRlczIubGVuZ3RoO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNFbm91Z2goKSB7XG4gICAgcmV0dXJuIFNsaWRlczIubGVuZ3RoID4gb3B0aW9ucy5wZXJQYWdlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogZGVzdHJveSxcbiAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICByZWdpc3RlcjogcmVnaXN0ZXIsXG4gICAgZ2V0OiBnZXQsXG4gICAgZ2V0SW46IGdldEluLFxuICAgIGdldEF0OiBnZXRBdCxcbiAgICBhZGQ6IGFkZCxcbiAgICByZW1vdmU6IHJlbW92ZSQxLFxuICAgIGZvckVhY2g6IGZvckVhY2gkMSxcbiAgICBmaWx0ZXI6IGZpbHRlcixcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgZ2V0TGVuZ3RoOiBnZXRMZW5ndGgsXG4gICAgaXNFbm91Z2g6IGlzRW5vdWdoXG4gIH07XG59XG5cbmZ1bmN0aW9uIExheW91dChTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlMyA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2UzLm9uLFxuICAgICAgYmluZCA9IF9FdmVudEludGVyZmFjZTMuYmluZCxcbiAgICAgIGVtaXQgPSBfRXZlbnRJbnRlcmZhY2UzLmVtaXQ7XG5cbiAgdmFyIFNsaWRlcyA9IENvbXBvbmVudHMyLlNsaWRlcztcbiAgdmFyIHJlc29sdmUgPSBDb21wb25lbnRzMi5EaXJlY3Rpb24ucmVzb2x2ZTtcbiAgdmFyIF9Db21wb25lbnRzMiRFbGVtZW50czIgPSBDb21wb25lbnRzMi5FbGVtZW50cyxcbiAgICAgIHJvb3QgPSBfQ29tcG9uZW50czIkRWxlbWVudHMyLnJvb3QsXG4gICAgICB0cmFjayA9IF9Db21wb25lbnRzMiRFbGVtZW50czIudHJhY2ssXG4gICAgICBsaXN0ID0gX0NvbXBvbmVudHMyJEVsZW1lbnRzMi5saXN0O1xuICB2YXIgZ2V0QXQgPSBTbGlkZXMuZ2V0QXQsXG4gICAgICBzdHlsZVNsaWRlcyA9IFNsaWRlcy5zdHlsZTtcbiAgdmFyIHZlcnRpY2FsO1xuICB2YXIgcm9vdFJlY3Q7XG4gIHZhciBvdmVyZmxvdztcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpbml0KCk7XG4gICAgYmluZCh3aW5kb3csIFwicmVzaXplIGxvYWRcIiwgVGhyb3R0bGUoYXBwbHkoZW1pdCwgRVZFTlRfUkVTSVpFKSkpO1xuICAgIG9uKFtFVkVOVF9VUERBVEVELCBFVkVOVF9SRUZSRVNIXSwgaW5pdCk7XG4gICAgb24oRVZFTlRfUkVTSVpFLCByZXNpemUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2ZXJ0aWNhbCA9IG9wdGlvbnMuZGlyZWN0aW9uID09PSBUVEI7XG4gICAgc3R5bGUocm9vdCwgXCJtYXhXaWR0aFwiLCB1bml0KG9wdGlvbnMud2lkdGgpKTtcbiAgICBzdHlsZSh0cmFjaywgcmVzb2x2ZShcInBhZGRpbmdMZWZ0XCIpLCBjc3NQYWRkaW5nKGZhbHNlKSk7XG4gICAgc3R5bGUodHJhY2ssIHJlc29sdmUoXCJwYWRkaW5nUmlnaHRcIiksIGNzc1BhZGRpbmcodHJ1ZSkpO1xuICAgIHJlc2l6ZSh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2l6ZShmb3JjZSkge1xuICAgIHZhciBuZXdSZWN0ID0gcmVjdChyb290KTtcblxuICAgIGlmIChmb3JjZSB8fCByb290UmVjdC53aWR0aCAhPT0gbmV3UmVjdC53aWR0aCB8fCByb290UmVjdC5oZWlnaHQgIT09IG5ld1JlY3QuaGVpZ2h0KSB7XG4gICAgICBzdHlsZSh0cmFjaywgXCJoZWlnaHRcIiwgY3NzVHJhY2tIZWlnaHQoKSk7XG4gICAgICBzdHlsZVNsaWRlcyhyZXNvbHZlKFwibWFyZ2luUmlnaHRcIiksIHVuaXQob3B0aW9ucy5nYXApKTtcbiAgICAgIHN0eWxlU2xpZGVzKFwid2lkdGhcIiwgY3NzU2xpZGVXaWR0aCgpKTtcbiAgICAgIHN0eWxlU2xpZGVzKFwiaGVpZ2h0XCIsIGNzc1NsaWRlSGVpZ2h0KCksIHRydWUpO1xuICAgICAgcm9vdFJlY3QgPSBuZXdSZWN0O1xuICAgICAgZW1pdChFVkVOVF9SRVNJWkVEKTtcblxuICAgICAgaWYgKG92ZXJmbG93ICE9PSAob3ZlcmZsb3cgPSBpc092ZXJmbG93KCkpKSB7XG4gICAgICAgIHRvZ2dsZUNsYXNzKHJvb3QsIENMQVNTX09WRVJGTE9XLCBvdmVyZmxvdyk7XG4gICAgICAgIGVtaXQoRVZFTlRfT1ZFUkZMT1csIG92ZXJmbG93KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjc3NQYWRkaW5nKHJpZ2h0KSB7XG4gICAgdmFyIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmc7XG4gICAgdmFyIHByb3AgPSByZXNvbHZlKHJpZ2h0ID8gXCJyaWdodFwiIDogXCJsZWZ0XCIpO1xuICAgIHJldHVybiBwYWRkaW5nICYmIHVuaXQocGFkZGluZ1twcm9wXSB8fCAoaXNPYmplY3QocGFkZGluZykgPyAwIDogcGFkZGluZykpIHx8IFwiMHB4XCI7XG4gIH1cblxuICBmdW5jdGlvbiBjc3NUcmFja0hlaWdodCgpIHtcbiAgICB2YXIgaGVpZ2h0ID0gXCJcIjtcblxuICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgaGVpZ2h0ID0gY3NzSGVpZ2h0KCk7XG4gICAgICBhc3NlcnQoaGVpZ2h0LCBcImhlaWdodCBvciBoZWlnaHRSYXRpbyBpcyBtaXNzaW5nLlwiKTtcbiAgICAgIGhlaWdodCA9IFwiY2FsYyhcIiArIGhlaWdodCArIFwiIC0gXCIgKyBjc3NQYWRkaW5nKGZhbHNlKSArIFwiIC0gXCIgKyBjc3NQYWRkaW5nKHRydWUpICsgXCIpXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNzc0hlaWdodCgpIHtcbiAgICByZXR1cm4gdW5pdChvcHRpb25zLmhlaWdodCB8fCByZWN0KGxpc3QpLndpZHRoICogb3B0aW9ucy5oZWlnaHRSYXRpbyk7XG4gIH1cblxuICBmdW5jdGlvbiBjc3NTbGlkZVdpZHRoKCkge1xuICAgIHJldHVybiBvcHRpb25zLmF1dG9XaWR0aCA/IG51bGwgOiB1bml0KG9wdGlvbnMuZml4ZWRXaWR0aCkgfHwgKHZlcnRpY2FsID8gXCJcIiA6IGNzc1NsaWRlU2l6ZSgpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNzc1NsaWRlSGVpZ2h0KCkge1xuICAgIHJldHVybiB1bml0KG9wdGlvbnMuZml4ZWRIZWlnaHQpIHx8ICh2ZXJ0aWNhbCA/IG9wdGlvbnMuYXV0b0hlaWdodCA/IG51bGwgOiBjc3NTbGlkZVNpemUoKSA6IGNzc0hlaWdodCgpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNzc1NsaWRlU2l6ZSgpIHtcbiAgICB2YXIgZ2FwID0gdW5pdChvcHRpb25zLmdhcCk7XG4gICAgcmV0dXJuIFwiY2FsYygoMTAwJVwiICsgKGdhcCAmJiBcIiArIFwiICsgZ2FwKSArIFwiKS9cIiArIChvcHRpb25zLnBlclBhZ2UgfHwgMSkgKyAoZ2FwICYmIFwiIC0gXCIgKyBnYXApICsgXCIpXCI7XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0U2l6ZSgpIHtcbiAgICByZXR1cm4gcmVjdChsaXN0KVtyZXNvbHZlKFwid2lkdGhcIildO1xuICB9XG5cbiAgZnVuY3Rpb24gc2xpZGVTaXplKGluZGV4LCB3aXRob3V0R2FwKSB7XG4gICAgdmFyIFNsaWRlID0gZ2V0QXQoaW5kZXggfHwgMCk7XG4gICAgcmV0dXJuIFNsaWRlID8gcmVjdChTbGlkZS5zbGlkZSlbcmVzb2x2ZShcIndpZHRoXCIpXSArICh3aXRob3V0R2FwID8gMCA6IGdldEdhcCgpKSA6IDA7XG4gIH1cblxuICBmdW5jdGlvbiB0b3RhbFNpemUoaW5kZXgsIHdpdGhvdXRHYXApIHtcbiAgICB2YXIgU2xpZGUgPSBnZXRBdChpbmRleCk7XG5cbiAgICBpZiAoU2xpZGUpIHtcbiAgICAgIHZhciByaWdodCA9IHJlY3QoU2xpZGUuc2xpZGUpW3Jlc29sdmUoXCJyaWdodFwiKV07XG4gICAgICB2YXIgbGVmdCA9IHJlY3QobGlzdClbcmVzb2x2ZShcImxlZnRcIildO1xuICAgICAgcmV0dXJuIGFicyhyaWdodCAtIGxlZnQpICsgKHdpdGhvdXRHYXAgPyAwIDogZ2V0R2FwKCkpO1xuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgZnVuY3Rpb24gc2xpZGVyU2l6ZSh3aXRob3V0R2FwKSB7XG4gICAgcmV0dXJuIHRvdGFsU2l6ZShTcGxpZGUyLmxlbmd0aCAtIDEpIC0gdG90YWxTaXplKDApICsgc2xpZGVTaXplKDAsIHdpdGhvdXRHYXApO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0R2FwKCkge1xuICAgIHZhciBTbGlkZSA9IGdldEF0KDApO1xuICAgIHJldHVybiBTbGlkZSAmJiBwYXJzZUZsb2F0KHN0eWxlKFNsaWRlLnNsaWRlLCByZXNvbHZlKFwibWFyZ2luUmlnaHRcIikpKSB8fCAwO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFkZGluZyhyaWdodCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHN0eWxlKHRyYWNrLCByZXNvbHZlKFwicGFkZGluZ1wiICsgKHJpZ2h0ID8gXCJSaWdodFwiIDogXCJMZWZ0XCIpKSkpIHx8IDA7XG4gIH1cblxuICBmdW5jdGlvbiBpc092ZXJmbG93KCkge1xuICAgIHJldHVybiBTcGxpZGUyLmlzKEZBREUpIHx8IHNsaWRlclNpemUodHJ1ZSkgPiBsaXN0U2l6ZSgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgcmVzaXplOiByZXNpemUsXG4gICAgbGlzdFNpemU6IGxpc3RTaXplLFxuICAgIHNsaWRlU2l6ZTogc2xpZGVTaXplLFxuICAgIHNsaWRlclNpemU6IHNsaWRlclNpemUsXG4gICAgdG90YWxTaXplOiB0b3RhbFNpemUsXG4gICAgZ2V0UGFkZGluZzogZ2V0UGFkZGluZyxcbiAgICBpc092ZXJmbG93OiBpc092ZXJmbG93XG4gIH07XG59XG5cbnZhciBNVUxUSVBMSUVSID0gMjtcblxuZnVuY3Rpb24gQ2xvbmVzKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBldmVudCA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpO1xuICB2YXIgb24gPSBldmVudC5vbjtcbiAgdmFyIEVsZW1lbnRzID0gQ29tcG9uZW50czIuRWxlbWVudHMsXG4gICAgICBTbGlkZXMgPSBDb21wb25lbnRzMi5TbGlkZXM7XG4gIHZhciByZXNvbHZlID0gQ29tcG9uZW50czIuRGlyZWN0aW9uLnJlc29sdmU7XG4gIHZhciBjbG9uZXMgPSBbXTtcbiAgdmFyIGNsb25lQ291bnQ7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgb24oRVZFTlRfUkVGUkVTSCwgcmVtb3VudCk7XG4gICAgb24oW0VWRU5UX1VQREFURUQsIEVWRU5UX1JFU0laRV0sIG9ic2VydmUpO1xuXG4gICAgaWYgKGNsb25lQ291bnQgPSBjb21wdXRlQ2xvbmVDb3VudCgpKSB7XG4gICAgICBnZW5lcmF0ZShjbG9uZUNvdW50KTtcbiAgICAgIENvbXBvbmVudHMyLkxheW91dC5yZXNpemUodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3VudCgpIHtcbiAgICBkZXN0cm95KCk7XG4gICAgbW91bnQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgcmVtb3ZlKGNsb25lcyk7XG4gICAgZW1wdHkoY2xvbmVzKTtcbiAgICBldmVudC5kZXN0cm95KCk7XG4gIH1cblxuICBmdW5jdGlvbiBvYnNlcnZlKCkge1xuICAgIHZhciBjb3VudCA9IGNvbXB1dGVDbG9uZUNvdW50KCk7XG5cbiAgICBpZiAoY2xvbmVDb3VudCAhPT0gY291bnQpIHtcbiAgICAgIGlmIChjbG9uZUNvdW50IDwgY291bnQgfHwgIWNvdW50KSB7XG4gICAgICAgIGV2ZW50LmVtaXQoRVZFTlRfUkVGUkVTSCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGUoY291bnQpIHtcbiAgICB2YXIgc2xpZGVzID0gU2xpZGVzLmdldCgpLnNsaWNlKCk7XG4gICAgdmFyIGxlbmd0aCA9IHNsaWRlcy5sZW5ndGg7XG5cbiAgICBpZiAobGVuZ3RoKSB7XG4gICAgICB3aGlsZSAoc2xpZGVzLmxlbmd0aCA8IGNvdW50KSB7XG4gICAgICAgIHB1c2goc2xpZGVzLCBzbGlkZXMpO1xuICAgICAgfVxuXG4gICAgICBwdXNoKHNsaWRlcy5zbGljZSgtY291bnQpLCBzbGlkZXMuc2xpY2UoMCwgY291bnQpKS5mb3JFYWNoKGZ1bmN0aW9uIChTbGlkZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGlzSGVhZCA9IGluZGV4IDwgY291bnQ7XG4gICAgICAgIHZhciBjbG9uZSA9IGNsb25lRGVlcChTbGlkZS5zbGlkZSwgaW5kZXgpO1xuICAgICAgICBpc0hlYWQgPyBiZWZvcmUoY2xvbmUsIHNsaWRlc1swXS5zbGlkZSkgOiBhcHBlbmQoRWxlbWVudHMubGlzdCwgY2xvbmUpO1xuICAgICAgICBwdXNoKGNsb25lcywgY2xvbmUpO1xuICAgICAgICBTbGlkZXMucmVnaXN0ZXIoY2xvbmUsIGluZGV4IC0gY291bnQgKyAoaXNIZWFkID8gMCA6IGxlbmd0aCksIFNsaWRlLmluZGV4KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb25lRGVlcChlbG0sIGluZGV4KSB7XG4gICAgdmFyIGNsb25lID0gZWxtLmNsb25lTm9kZSh0cnVlKTtcbiAgICBhZGRDbGFzcyhjbG9uZSwgb3B0aW9ucy5jbGFzc2VzLmNsb25lKTtcbiAgICBjbG9uZS5pZCA9IFNwbGlkZTIucm9vdC5pZCArIFwiLWNsb25lXCIgKyBwYWQoaW5kZXggKyAxKTtcbiAgICByZXR1cm4gY2xvbmU7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlQ2xvbmVDb3VudCgpIHtcbiAgICB2YXIgY2xvbmVzMiA9IG9wdGlvbnMuY2xvbmVzO1xuXG4gICAgaWYgKCFTcGxpZGUyLmlzKExPT1ApKSB7XG4gICAgICBjbG9uZXMyID0gMDtcbiAgICB9IGVsc2UgaWYgKGlzVW5kZWZpbmVkKGNsb25lczIpKSB7XG4gICAgICB2YXIgZml4ZWRTaXplID0gb3B0aW9uc1tyZXNvbHZlKFwiZml4ZWRXaWR0aFwiKV0gJiYgQ29tcG9uZW50czIuTGF5b3V0LnNsaWRlU2l6ZSgwKTtcbiAgICAgIHZhciBmaXhlZENvdW50ID0gZml4ZWRTaXplICYmIGNlaWwocmVjdChFbGVtZW50cy50cmFjaylbcmVzb2x2ZShcIndpZHRoXCIpXSAvIGZpeGVkU2l6ZSk7XG4gICAgICBjbG9uZXMyID0gZml4ZWRDb3VudCB8fCBvcHRpb25zW3Jlc29sdmUoXCJhdXRvV2lkdGhcIildICYmIFNwbGlkZTIubGVuZ3RoIHx8IG9wdGlvbnMucGVyUGFnZSAqIE1VTFRJUExJRVI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lczI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBkZXN0cm95XG4gIH07XG59XG5cbmZ1bmN0aW9uIE1vdmUoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTQgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlNC5vbixcbiAgICAgIGVtaXQgPSBfRXZlbnRJbnRlcmZhY2U0LmVtaXQ7XG5cbiAgdmFyIHNldCA9IFNwbGlkZTIuc3RhdGUuc2V0O1xuICB2YXIgX0NvbXBvbmVudHMyJExheW91dCA9IENvbXBvbmVudHMyLkxheW91dCxcbiAgICAgIHNsaWRlU2l6ZSA9IF9Db21wb25lbnRzMiRMYXlvdXQuc2xpZGVTaXplLFxuICAgICAgZ2V0UGFkZGluZyA9IF9Db21wb25lbnRzMiRMYXlvdXQuZ2V0UGFkZGluZyxcbiAgICAgIHRvdGFsU2l6ZSA9IF9Db21wb25lbnRzMiRMYXlvdXQudG90YWxTaXplLFxuICAgICAgbGlzdFNpemUgPSBfQ29tcG9uZW50czIkTGF5b3V0Lmxpc3RTaXplLFxuICAgICAgc2xpZGVyU2l6ZSA9IF9Db21wb25lbnRzMiRMYXlvdXQuc2xpZGVyU2l6ZTtcbiAgdmFyIF9Db21wb25lbnRzMiREaXJlY3RpbyA9IENvbXBvbmVudHMyLkRpcmVjdGlvbixcbiAgICAgIHJlc29sdmUgPSBfQ29tcG9uZW50czIkRGlyZWN0aW8ucmVzb2x2ZSxcbiAgICAgIG9yaWVudCA9IF9Db21wb25lbnRzMiREaXJlY3Rpby5vcmllbnQ7XG4gIHZhciBfQ29tcG9uZW50czIkRWxlbWVudHMzID0gQ29tcG9uZW50czIuRWxlbWVudHMsXG4gICAgICBsaXN0ID0gX0NvbXBvbmVudHMyJEVsZW1lbnRzMy5saXN0LFxuICAgICAgdHJhY2sgPSBfQ29tcG9uZW50czIkRWxlbWVudHMzLnRyYWNrO1xuICB2YXIgVHJhbnNpdGlvbjtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBUcmFuc2l0aW9uID0gQ29tcG9uZW50czIuVHJhbnNpdGlvbjtcbiAgICBvbihbRVZFTlRfTU9VTlRFRCwgRVZFTlRfUkVTSVpFRCwgRVZFTlRfVVBEQVRFRCwgRVZFTlRfUkVGUkVTSF0sIHJlcG9zaXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwb3NpdGlvbigpIHtcbiAgICBpZiAoIUNvbXBvbmVudHMyLkNvbnRyb2xsZXIuaXNCdXN5KCkpIHtcbiAgICAgIENvbXBvbmVudHMyLlNjcm9sbC5jYW5jZWwoKTtcbiAgICAgIGp1bXAoU3BsaWRlMi5pbmRleCk7XG4gICAgICBDb21wb25lbnRzMi5TbGlkZXMudXBkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbW92ZShkZXN0LCBpbmRleCwgcHJldiwgY2FsbGJhY2spIHtcbiAgICBpZiAoZGVzdCAhPT0gaW5kZXggJiYgY2FuU2hpZnQoZGVzdCA+IHByZXYpKSB7XG4gICAgICBjYW5jZWwoKTtcbiAgICAgIHRyYW5zbGF0ZShzaGlmdChnZXRQb3NpdGlvbigpLCBkZXN0ID4gcHJldiksIHRydWUpO1xuICAgIH1cblxuICAgIHNldChNT1ZJTkcpO1xuICAgIGVtaXQoRVZFTlRfTU9WRSwgaW5kZXgsIHByZXYsIGRlc3QpO1xuICAgIFRyYW5zaXRpb24uc3RhcnQoaW5kZXgsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldChJRExFKTtcbiAgICAgIGVtaXQoRVZFTlRfTU9WRUQsIGluZGV4LCBwcmV2LCBkZXN0KTtcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBqdW1wKGluZGV4KSB7XG4gICAgdHJhbnNsYXRlKHRvUG9zaXRpb24oaW5kZXgsIHRydWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYW5zbGF0ZShwb3NpdGlvbiwgcHJldmVudExvb3ApIHtcbiAgICBpZiAoIVNwbGlkZTIuaXMoRkFERSkpIHtcbiAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHByZXZlbnRMb29wID8gcG9zaXRpb24gOiBsb29wKHBvc2l0aW9uKTtcbiAgICAgIHN0eWxlKGxpc3QsIFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlXCIgKyByZXNvbHZlKFwiWFwiKSArIFwiKFwiICsgZGVzdGluYXRpb24gKyBcInB4KVwiKTtcbiAgICAgIHBvc2l0aW9uICE9PSBkZXN0aW5hdGlvbiAmJiBlbWl0KEVWRU5UX1NISUZURUQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxvb3AocG9zaXRpb24pIHtcbiAgICBpZiAoU3BsaWRlMi5pcyhMT09QKSkge1xuICAgICAgdmFyIGluZGV4ID0gdG9JbmRleChwb3NpdGlvbik7XG4gICAgICB2YXIgZXhjZWVkZWRNYXggPSBpbmRleCA+IENvbXBvbmVudHMyLkNvbnRyb2xsZXIuZ2V0RW5kKCk7XG4gICAgICB2YXIgZXhjZWVkZWRNaW4gPSBpbmRleCA8IDA7XG5cbiAgICAgIGlmIChleGNlZWRlZE1pbiB8fCBleGNlZWRlZE1heCkge1xuICAgICAgICBwb3NpdGlvbiA9IHNoaWZ0KHBvc2l0aW9uLCBleGNlZWRlZE1heCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hpZnQocG9zaXRpb24sIGJhY2t3YXJkcykge1xuICAgIHZhciBleGNlc3MgPSBwb3NpdGlvbiAtIGdldExpbWl0KGJhY2t3YXJkcyk7XG4gICAgdmFyIHNpemUgPSBzbGlkZXJTaXplKCk7XG4gICAgcG9zaXRpb24gLT0gb3JpZW50KHNpemUgKiAoY2VpbChhYnMoZXhjZXNzKSAvIHNpemUpIHx8IDEpKSAqIChiYWNrd2FyZHMgPyAxIDogLTEpO1xuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICB0cmFuc2xhdGUoZ2V0UG9zaXRpb24oKSwgdHJ1ZSk7XG4gICAgVHJhbnNpdGlvbi5jYW5jZWwoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvSW5kZXgocG9zaXRpb24pIHtcbiAgICB2YXIgU2xpZGVzID0gQ29tcG9uZW50czIuU2xpZGVzLmdldCgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIG1pbkRpc3RhbmNlID0gSW5maW5pdHk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IFNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNsaWRlSW5kZXggPSBTbGlkZXNbaV0uaW5kZXg7XG4gICAgICB2YXIgZGlzdGFuY2UgPSBhYnModG9Qb3NpdGlvbihzbGlkZUluZGV4LCB0cnVlKSAtIHBvc2l0aW9uKTtcblxuICAgICAgaWYgKGRpc3RhbmNlIDw9IG1pbkRpc3RhbmNlKSB7XG4gICAgICAgIG1pbkRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgIGluZGV4ID0gc2xpZGVJbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvUG9zaXRpb24oaW5kZXgsIHRyaW1taW5nKSB7XG4gICAgdmFyIHBvc2l0aW9uID0gb3JpZW50KHRvdGFsU2l6ZShpbmRleCAtIDEpIC0gb2Zmc2V0KGluZGV4KSk7XG4gICAgcmV0dXJuIHRyaW1taW5nID8gdHJpbShwb3NpdGlvbikgOiBwb3NpdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBvc2l0aW9uKCkge1xuICAgIHZhciBsZWZ0ID0gcmVzb2x2ZShcImxlZnRcIik7XG4gICAgcmV0dXJuIHJlY3QobGlzdClbbGVmdF0gLSByZWN0KHRyYWNrKVtsZWZ0XSArIG9yaWVudChnZXRQYWRkaW5nKGZhbHNlKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmltKHBvc2l0aW9uKSB7XG4gICAgaWYgKG9wdGlvbnMudHJpbVNwYWNlICYmIFNwbGlkZTIuaXMoU0xJREUpKSB7XG4gICAgICBwb3NpdGlvbiA9IGNsYW1wKHBvc2l0aW9uLCAwLCBvcmllbnQoc2xpZGVyU2l6ZSh0cnVlKSAtIGxpc3RTaXplKCkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBvZmZzZXQoaW5kZXgpIHtcbiAgICB2YXIgZm9jdXMgPSBvcHRpb25zLmZvY3VzO1xuICAgIHJldHVybiBmb2N1cyA9PT0gXCJjZW50ZXJcIiA/IChsaXN0U2l6ZSgpIC0gc2xpZGVTaXplKGluZGV4LCB0cnVlKSkgLyAyIDogK2ZvY3VzICogc2xpZGVTaXplKGluZGV4KSB8fCAwO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TGltaXQobWF4KSB7XG4gICAgcmV0dXJuIHRvUG9zaXRpb24obWF4ID8gQ29tcG9uZW50czIuQ29udHJvbGxlci5nZXRFbmQoKSA6IDAsICEhb3B0aW9ucy50cmltU3BhY2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuU2hpZnQoYmFja3dhcmRzKSB7XG4gICAgdmFyIHNoaWZ0ZWQgPSBvcmllbnQoc2hpZnQoZ2V0UG9zaXRpb24oKSwgYmFja3dhcmRzKSk7XG4gICAgcmV0dXJuIGJhY2t3YXJkcyA/IHNoaWZ0ZWQgPj0gMCA6IHNoaWZ0ZWQgPD0gbGlzdFtyZXNvbHZlKFwic2Nyb2xsV2lkdGhcIildIC0gcmVjdCh0cmFjaylbcmVzb2x2ZShcIndpZHRoXCIpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4Y2VlZGVkTGltaXQobWF4LCBwb3NpdGlvbikge1xuICAgIHBvc2l0aW9uID0gaXNVbmRlZmluZWQocG9zaXRpb24pID8gZ2V0UG9zaXRpb24oKSA6IHBvc2l0aW9uO1xuICAgIHZhciBleGNlZWRlZE1pbiA9IG1heCAhPT0gdHJ1ZSAmJiBvcmllbnQocG9zaXRpb24pIDwgb3JpZW50KGdldExpbWl0KGZhbHNlKSk7XG4gICAgdmFyIGV4Y2VlZGVkTWF4ID0gbWF4ICE9PSBmYWxzZSAmJiBvcmllbnQocG9zaXRpb24pID4gb3JpZW50KGdldExpbWl0KHRydWUpKTtcbiAgICByZXR1cm4gZXhjZWVkZWRNaW4gfHwgZXhjZWVkZWRNYXg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBtb3ZlOiBtb3ZlLFxuICAgIGp1bXA6IGp1bXAsXG4gICAgdHJhbnNsYXRlOiB0cmFuc2xhdGUsXG4gICAgc2hpZnQ6IHNoaWZ0LFxuICAgIGNhbmNlbDogY2FuY2VsLFxuICAgIHRvSW5kZXg6IHRvSW5kZXgsXG4gICAgdG9Qb3NpdGlvbjogdG9Qb3NpdGlvbixcbiAgICBnZXRQb3NpdGlvbjogZ2V0UG9zaXRpb24sXG4gICAgZ2V0TGltaXQ6IGdldExpbWl0LFxuICAgIGV4Y2VlZGVkTGltaXQ6IGV4Y2VlZGVkTGltaXQsXG4gICAgcmVwb3NpdGlvbjogcmVwb3NpdGlvblxuICB9O1xufVxuXG5mdW5jdGlvbiBDb250cm9sbGVyKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2U1ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBvbiA9IF9FdmVudEludGVyZmFjZTUub24sXG4gICAgICBlbWl0ID0gX0V2ZW50SW50ZXJmYWNlNS5lbWl0O1xuXG4gIHZhciBNb3ZlID0gQ29tcG9uZW50czIuTW92ZTtcbiAgdmFyIGdldFBvc2l0aW9uID0gTW92ZS5nZXRQb3NpdGlvbixcbiAgICAgIGdldExpbWl0ID0gTW92ZS5nZXRMaW1pdCxcbiAgICAgIHRvUG9zaXRpb24gPSBNb3ZlLnRvUG9zaXRpb247XG4gIHZhciBfQ29tcG9uZW50czIkU2xpZGVzID0gQ29tcG9uZW50czIuU2xpZGVzLFxuICAgICAgaXNFbm91Z2ggPSBfQ29tcG9uZW50czIkU2xpZGVzLmlzRW5vdWdoLFxuICAgICAgZ2V0TGVuZ3RoID0gX0NvbXBvbmVudHMyJFNsaWRlcy5nZXRMZW5ndGg7XG4gIHZhciBvbWl0RW5kID0gb3B0aW9ucy5vbWl0RW5kO1xuICB2YXIgaXNMb29wID0gU3BsaWRlMi5pcyhMT09QKTtcbiAgdmFyIGlzU2xpZGUgPSBTcGxpZGUyLmlzKFNMSURFKTtcbiAgdmFyIGdldE5leHQgPSBhcHBseShnZXRBZGphY2VudCwgZmFsc2UpO1xuICB2YXIgZ2V0UHJldiA9IGFwcGx5KGdldEFkamFjZW50LCB0cnVlKTtcbiAgdmFyIGN1cnJJbmRleCA9IG9wdGlvbnMuc3RhcnQgfHwgMDtcbiAgdmFyIGVuZEluZGV4O1xuICB2YXIgcHJldkluZGV4ID0gY3VyckluZGV4O1xuICB2YXIgc2xpZGVDb3VudDtcbiAgdmFyIHBlck1vdmU7XG4gIHZhciBwZXJQYWdlO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGluaXQoKTtcbiAgICBvbihbRVZFTlRfVVBEQVRFRCwgRVZFTlRfUkVGUkVTSCwgRVZFTlRfRU5EX0lOREVYX0NIQU5HRURdLCBpbml0KTtcbiAgICBvbihFVkVOVF9SRVNJWkVELCBvblJlc2l6ZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBzbGlkZUNvdW50ID0gZ2V0TGVuZ3RoKHRydWUpO1xuICAgIHBlck1vdmUgPSBvcHRpb25zLnBlck1vdmU7XG4gICAgcGVyUGFnZSA9IG9wdGlvbnMucGVyUGFnZTtcbiAgICBlbmRJbmRleCA9IGdldEVuZCgpO1xuICAgIHZhciBpbmRleCA9IGNsYW1wKGN1cnJJbmRleCwgMCwgb21pdEVuZCA/IGVuZEluZGV4IDogc2xpZGVDb3VudCAtIDEpO1xuXG4gICAgaWYgKGluZGV4ICE9PSBjdXJySW5kZXgpIHtcbiAgICAgIGN1cnJJbmRleCA9IGluZGV4O1xuICAgICAgTW92ZS5yZXBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25SZXNpemVkKCkge1xuICAgIGlmIChlbmRJbmRleCAhPT0gZ2V0RW5kKCkpIHtcbiAgICAgIGVtaXQoRVZFTlRfRU5EX0lOREVYX0NIQU5HRUQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdvKGNvbnRyb2wsIGFsbG93U2FtZUluZGV4LCBjYWxsYmFjaykge1xuICAgIGlmICghaXNCdXN5KCkpIHtcbiAgICAgIHZhciBkZXN0ID0gcGFyc2UoY29udHJvbCk7XG4gICAgICB2YXIgaW5kZXggPSBsb29wKGRlc3QpO1xuXG4gICAgICBpZiAoaW5kZXggPiAtMSAmJiAoYWxsb3dTYW1lSW5kZXggfHwgaW5kZXggIT09IGN1cnJJbmRleCkpIHtcbiAgICAgICAgc2V0SW5kZXgoaW5kZXgpO1xuICAgICAgICBNb3ZlLm1vdmUoZGVzdCwgaW5kZXgsIHByZXZJbmRleCwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNjcm9sbChkZXN0aW5hdGlvbiwgZHVyYXRpb24sIHNuYXAsIGNhbGxiYWNrKSB7XG4gICAgQ29tcG9uZW50czIuU2Nyb2xsLnNjcm9sbChkZXN0aW5hdGlvbiwgZHVyYXRpb24sIHNuYXAsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbmRleCA9IGxvb3AoTW92ZS50b0luZGV4KGdldFBvc2l0aW9uKCkpKTtcbiAgICAgIHNldEluZGV4KG9taXRFbmQgPyBtaW4oaW5kZXgsIGVuZEluZGV4KSA6IGluZGV4KTtcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZShjb250cm9sKSB7XG4gICAgdmFyIGluZGV4ID0gY3VyckluZGV4O1xuXG4gICAgaWYgKGlzU3RyaW5nKGNvbnRyb2wpKSB7XG4gICAgICB2YXIgX3JlZiA9IGNvbnRyb2wubWF0Y2goLyhbK1xcLTw+XSkoXFxkKyk/LykgfHwgW10sXG4gICAgICAgICAgaW5kaWNhdG9yID0gX3JlZlsxXSxcbiAgICAgICAgICBudW1iZXIgPSBfcmVmWzJdO1xuXG4gICAgICBpZiAoaW5kaWNhdG9yID09PSBcIitcIiB8fCBpbmRpY2F0b3IgPT09IFwiLVwiKSB7XG4gICAgICAgIGluZGV4ID0gY29tcHV0ZURlc3RJbmRleChjdXJySW5kZXggKyArKFwiXCIgKyBpbmRpY2F0b3IgKyAoK251bWJlciB8fCAxKSksIGN1cnJJbmRleCk7XG4gICAgICB9IGVsc2UgaWYgKGluZGljYXRvciA9PT0gXCI+XCIpIHtcbiAgICAgICAgaW5kZXggPSBudW1iZXIgPyB0b0luZGV4KCtudW1iZXIpIDogZ2V0TmV4dCh0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAoaW5kaWNhdG9yID09PSBcIjxcIikge1xuICAgICAgICBpbmRleCA9IGdldFByZXYodHJ1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZGV4ID0gaXNMb29wID8gY29udHJvbCA6IGNsYW1wKGNvbnRyb2wsIDAsIGVuZEluZGV4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBZGphY2VudChwcmV2LCBkZXN0aW5hdGlvbikge1xuICAgIHZhciBudW1iZXIgPSBwZXJNb3ZlIHx8IChoYXNGb2N1cygpID8gMSA6IHBlclBhZ2UpO1xuICAgIHZhciBkZXN0ID0gY29tcHV0ZURlc3RJbmRleChjdXJySW5kZXggKyBudW1iZXIgKiAocHJldiA/IC0xIDogMSksIGN1cnJJbmRleCwgIShwZXJNb3ZlIHx8IGhhc0ZvY3VzKCkpKTtcblxuICAgIGlmIChkZXN0ID09PSAtMSAmJiBpc1NsaWRlKSB7XG4gICAgICBpZiAoIWFwcHJveGltYXRlbHlFcXVhbChnZXRQb3NpdGlvbigpLCBnZXRMaW1pdCghcHJldiksIDEpKSB7XG4gICAgICAgIHJldHVybiBwcmV2ID8gMCA6IGVuZEluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZXN0aW5hdGlvbiA/IGRlc3QgOiBsb29wKGRlc3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZURlc3RJbmRleChkZXN0LCBmcm9tLCBzbmFwUGFnZSkge1xuICAgIGlmIChpc0Vub3VnaCgpIHx8IGhhc0ZvY3VzKCkpIHtcbiAgICAgIHZhciBpbmRleCA9IGNvbXB1dGVNb3ZhYmxlRGVzdEluZGV4KGRlc3QpO1xuXG4gICAgICBpZiAoaW5kZXggIT09IGRlc3QpIHtcbiAgICAgICAgZnJvbSA9IGRlc3Q7XG4gICAgICAgIGRlc3QgPSBpbmRleDtcbiAgICAgICAgc25hcFBhZ2UgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRlc3QgPCAwIHx8IGRlc3QgPiBlbmRJbmRleCkge1xuICAgICAgICBpZiAoIXBlck1vdmUgJiYgKGJldHdlZW4oMCwgZGVzdCwgZnJvbSwgdHJ1ZSkgfHwgYmV0d2VlbihlbmRJbmRleCwgZnJvbSwgZGVzdCwgdHJ1ZSkpKSB7XG4gICAgICAgICAgZGVzdCA9IHRvSW5kZXgodG9QYWdlKGRlc3QpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaXNMb29wKSB7XG4gICAgICAgICAgICBkZXN0ID0gc25hcFBhZ2UgPyBkZXN0IDwgMCA/IC0oc2xpZGVDb3VudCAlIHBlclBhZ2UgfHwgcGVyUGFnZSkgOiBzbGlkZUNvdW50IDogZGVzdDtcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMucmV3aW5kKSB7XG4gICAgICAgICAgICBkZXN0ID0gZGVzdCA8IDAgPyBlbmRJbmRleCA6IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc3QgPSAtMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzbmFwUGFnZSAmJiBkZXN0ICE9PSBmcm9tKSB7XG4gICAgICAgICAgZGVzdCA9IHRvSW5kZXgodG9QYWdlKGZyb20pICsgKGRlc3QgPCBmcm9tID8gLTEgOiAxKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGVzdCA9IC0xO1xuICAgIH1cblxuICAgIHJldHVybiBkZXN0O1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZU1vdmFibGVEZXN0SW5kZXgoZGVzdCkge1xuICAgIGlmIChpc1NsaWRlICYmIG9wdGlvbnMudHJpbVNwYWNlID09PSBcIm1vdmVcIiAmJiBkZXN0ICE9PSBjdXJySW5kZXgpIHtcbiAgICAgIHZhciBwb3NpdGlvbiA9IGdldFBvc2l0aW9uKCk7XG5cbiAgICAgIHdoaWxlIChwb3NpdGlvbiA9PT0gdG9Qb3NpdGlvbihkZXN0LCB0cnVlKSAmJiBiZXR3ZWVuKGRlc3QsIDAsIFNwbGlkZTIubGVuZ3RoIC0gMSwgIW9wdGlvbnMucmV3aW5kKSkge1xuICAgICAgICBkZXN0IDwgY3VyckluZGV4ID8gLS1kZXN0IDogKytkZXN0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZXN0O1xuICB9XG5cbiAgZnVuY3Rpb24gbG9vcChpbmRleCkge1xuICAgIHJldHVybiBpc0xvb3AgPyAoaW5kZXggKyBzbGlkZUNvdW50KSAlIHNsaWRlQ291bnQgfHwgMCA6IGluZGV4O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RW5kKCkge1xuICAgIHZhciBlbmQgPSBzbGlkZUNvdW50IC0gKGhhc0ZvY3VzKCkgfHwgaXNMb29wICYmIHBlck1vdmUgPyAxIDogcGVyUGFnZSk7XG5cbiAgICB3aGlsZSAob21pdEVuZCAmJiBlbmQtLSA+IDApIHtcbiAgICAgIGlmICh0b1Bvc2l0aW9uKHNsaWRlQ291bnQgLSAxLCB0cnVlKSAhPT0gdG9Qb3NpdGlvbihlbmQsIHRydWUpKSB7XG4gICAgICAgIGVuZCsrO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2xhbXAoZW5kLCAwLCBzbGlkZUNvdW50IC0gMSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b0luZGV4KHBhZ2UpIHtcbiAgICByZXR1cm4gY2xhbXAoaGFzRm9jdXMoKSA/IHBhZ2UgOiBwZXJQYWdlICogcGFnZSwgMCwgZW5kSW5kZXgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9QYWdlKGluZGV4KSB7XG4gICAgcmV0dXJuIGhhc0ZvY3VzKCkgPyBtaW4oaW5kZXgsIGVuZEluZGV4KSA6IGZsb29yKChpbmRleCA+PSBlbmRJbmRleCA/IHNsaWRlQ291bnQgLSAxIDogaW5kZXgpIC8gcGVyUGFnZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b0Rlc3QoZGVzdGluYXRpb24pIHtcbiAgICB2YXIgY2xvc2VzdCA9IE1vdmUudG9JbmRleChkZXN0aW5hdGlvbik7XG4gICAgcmV0dXJuIGlzU2xpZGUgPyBjbGFtcChjbG9zZXN0LCAwLCBlbmRJbmRleCkgOiBjbG9zZXN0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0SW5kZXgoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggIT09IGN1cnJJbmRleCkge1xuICAgICAgcHJldkluZGV4ID0gY3VyckluZGV4O1xuICAgICAgY3VyckluZGV4ID0gaW5kZXg7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SW5kZXgocHJldikge1xuICAgIHJldHVybiBwcmV2ID8gcHJldkluZGV4IDogY3VyckluZGV4O1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzRm9jdXMoKSB7XG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZChvcHRpb25zLmZvY3VzKSB8fCBvcHRpb25zLmlzTmF2aWdhdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQnVzeSgpIHtcbiAgICByZXR1cm4gU3BsaWRlMi5zdGF0ZS5pcyhbTU9WSU5HLCBTQ1JPTExJTkddKSAmJiAhIW9wdGlvbnMud2FpdEZvclRyYW5zaXRpb247XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBnbzogZ28sXG4gICAgc2Nyb2xsOiBzY3JvbGwsXG4gICAgZ2V0TmV4dDogZ2V0TmV4dCxcbiAgICBnZXRQcmV2OiBnZXRQcmV2LFxuICAgIGdldEFkamFjZW50OiBnZXRBZGphY2VudCxcbiAgICBnZXRFbmQ6IGdldEVuZCxcbiAgICBzZXRJbmRleDogc2V0SW5kZXgsXG4gICAgZ2V0SW5kZXg6IGdldEluZGV4LFxuICAgIHRvSW5kZXg6IHRvSW5kZXgsXG4gICAgdG9QYWdlOiB0b1BhZ2UsXG4gICAgdG9EZXN0OiB0b0Rlc3QsXG4gICAgaGFzRm9jdXM6IGhhc0ZvY3VzLFxuICAgIGlzQnVzeTogaXNCdXN5XG4gIH07XG59XG5cbnZhciBYTUxfTkFNRV9TUEFDRSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbnZhciBQQVRIID0gXCJtMTUuNSAwLjkzMi00LjMgNC4zOCAxNC41IDE0LjYtMTQuNSAxNC41IDQuMyA0LjQgMTQuNi0xNC42IDQuNC00LjMtNC40LTQuNC0xNC42LTE0LjZ6XCI7XG52YXIgU0laRSA9IDQwO1xuXG5mdW5jdGlvbiBBcnJvd3MoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIGV2ZW50ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMik7XG4gIHZhciBvbiA9IGV2ZW50Lm9uLFxuICAgICAgYmluZCA9IGV2ZW50LmJpbmQsXG4gICAgICBlbWl0ID0gZXZlbnQuZW1pdDtcbiAgdmFyIGNsYXNzZXMgPSBvcHRpb25zLmNsYXNzZXMsXG4gICAgICBpMThuID0gb3B0aW9ucy5pMThuO1xuICB2YXIgRWxlbWVudHMgPSBDb21wb25lbnRzMi5FbGVtZW50cyxcbiAgICAgIENvbnRyb2xsZXIgPSBDb21wb25lbnRzMi5Db250cm9sbGVyO1xuICB2YXIgcGxhY2Vob2xkZXIgPSBFbGVtZW50cy5hcnJvd3MsXG4gICAgICB0cmFjayA9IEVsZW1lbnRzLnRyYWNrO1xuICB2YXIgd3JhcHBlciA9IHBsYWNlaG9sZGVyO1xuICB2YXIgcHJldiA9IEVsZW1lbnRzLnByZXY7XG4gIHZhciBuZXh0ID0gRWxlbWVudHMubmV4dDtcbiAgdmFyIGNyZWF0ZWQ7XG4gIHZhciB3cmFwcGVyQ2xhc3NlcztcbiAgdmFyIGFycm93cyA9IHt9O1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGluaXQoKTtcbiAgICBvbihFVkVOVF9VUERBVEVELCByZW1vdW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW91bnQoKSB7XG4gICAgZGVzdHJveSgpO1xuICAgIG1vdW50KCk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBlbmFibGVkID0gb3B0aW9ucy5hcnJvd3M7XG5cbiAgICBpZiAoZW5hYmxlZCAmJiAhKHByZXYgJiYgbmV4dCkpIHtcbiAgICAgIGNyZWF0ZUFycm93cygpO1xuICAgIH1cblxuICAgIGlmIChwcmV2ICYmIG5leHQpIHtcbiAgICAgIGFzc2lnbihhcnJvd3MsIHtcbiAgICAgICAgcHJldjogcHJldixcbiAgICAgICAgbmV4dDogbmV4dFxuICAgICAgfSk7XG4gICAgICBkaXNwbGF5KHdyYXBwZXIsIGVuYWJsZWQgPyBcIlwiIDogXCJub25lXCIpO1xuICAgICAgYWRkQ2xhc3Mod3JhcHBlciwgd3JhcHBlckNsYXNzZXMgPSBDTEFTU19BUlJPV1MgKyBcIi0tXCIgKyBvcHRpb25zLmRpcmVjdGlvbik7XG5cbiAgICAgIGlmIChlbmFibGVkKSB7XG4gICAgICAgIGxpc3RlbigpO1xuICAgICAgICB1cGRhdGUoKTtcbiAgICAgICAgc2V0QXR0cmlidXRlKFtwcmV2LCBuZXh0XSwgQVJJQV9DT05UUk9MUywgdHJhY2suaWQpO1xuICAgICAgICBlbWl0KEVWRU5UX0FSUk9XU19NT1VOVEVELCBwcmV2LCBuZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGV2ZW50LmRlc3Ryb3koKTtcbiAgICByZW1vdmVDbGFzcyh3cmFwcGVyLCB3cmFwcGVyQ2xhc3Nlcyk7XG5cbiAgICBpZiAoY3JlYXRlZCkge1xuICAgICAgcmVtb3ZlKHBsYWNlaG9sZGVyID8gW3ByZXYsIG5leHRdIDogd3JhcHBlcik7XG4gICAgICBwcmV2ID0gbmV4dCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZShbcHJldiwgbmV4dF0sIEFMTF9BVFRSSUJVVEVTKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4oKSB7XG4gICAgb24oW0VWRU5UX01PVU5URUQsIEVWRU5UX01PVkVELCBFVkVOVF9SRUZSRVNILCBFVkVOVF9TQ1JPTExFRCwgRVZFTlRfRU5EX0lOREVYX0NIQU5HRURdLCB1cGRhdGUpO1xuICAgIGJpbmQobmV4dCwgXCJjbGlja1wiLCBhcHBseShnbywgXCI+XCIpKTtcbiAgICBiaW5kKHByZXYsIFwiY2xpY2tcIiwgYXBwbHkoZ28sIFwiPFwiKSk7XG4gIH1cblxuICBmdW5jdGlvbiBnbyhjb250cm9sKSB7XG4gICAgQ29udHJvbGxlci5nbyhjb250cm9sLCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycm93cygpIHtcbiAgICB3cmFwcGVyID0gcGxhY2Vob2xkZXIgfHwgY3JlYXRlKFwiZGl2XCIsIGNsYXNzZXMuYXJyb3dzKTtcbiAgICBwcmV2ID0gY3JlYXRlQXJyb3codHJ1ZSk7XG4gICAgbmV4dCA9IGNyZWF0ZUFycm93KGZhbHNlKTtcbiAgICBjcmVhdGVkID0gdHJ1ZTtcbiAgICBhcHBlbmQod3JhcHBlciwgW3ByZXYsIG5leHRdKTtcbiAgICAhcGxhY2Vob2xkZXIgJiYgYmVmb3JlKHdyYXBwZXIsIHRyYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycm93KHByZXYyKSB7XG4gICAgdmFyIGFycm93ID0gXCI8YnV0dG9uIGNsYXNzPVxcXCJcIiArIGNsYXNzZXMuYXJyb3cgKyBcIiBcIiArIChwcmV2MiA/IGNsYXNzZXMucHJldiA6IGNsYXNzZXMubmV4dCkgKyBcIlxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj48c3ZnIHhtbG5zPVxcXCJcIiArIFhNTF9OQU1FX1NQQUNFICsgXCJcXFwiIHZpZXdCb3g9XFxcIjAgMCBcIiArIFNJWkUgKyBcIiBcIiArIFNJWkUgKyBcIlxcXCIgd2lkdGg9XFxcIlwiICsgU0laRSArIFwiXFxcIiBoZWlnaHQ9XFxcIlwiICsgU0laRSArIFwiXFxcIiBmb2N1c2FibGU9XFxcImZhbHNlXFxcIj48cGF0aCBkPVxcXCJcIiArIChvcHRpb25zLmFycm93UGF0aCB8fCBQQVRIKSArIFwiXFxcIiAvPlwiO1xuICAgIHJldHVybiBwYXJzZUh0bWwoYXJyb3cpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGlmIChwcmV2ICYmIG5leHQpIHtcbiAgICAgIHZhciBpbmRleCA9IFNwbGlkZTIuaW5kZXg7XG4gICAgICB2YXIgcHJldkluZGV4ID0gQ29udHJvbGxlci5nZXRQcmV2KCk7XG4gICAgICB2YXIgbmV4dEluZGV4ID0gQ29udHJvbGxlci5nZXROZXh0KCk7XG4gICAgICB2YXIgcHJldkxhYmVsID0gcHJldkluZGV4ID4gLTEgJiYgaW5kZXggPCBwcmV2SW5kZXggPyBpMThuLmxhc3QgOiBpMThuLnByZXY7XG4gICAgICB2YXIgbmV4dExhYmVsID0gbmV4dEluZGV4ID4gLTEgJiYgaW5kZXggPiBuZXh0SW5kZXggPyBpMThuLmZpcnN0IDogaTE4bi5uZXh0O1xuICAgICAgcHJldi5kaXNhYmxlZCA9IHByZXZJbmRleCA8IDA7XG4gICAgICBuZXh0LmRpc2FibGVkID0gbmV4dEluZGV4IDwgMDtcbiAgICAgIHNldEF0dHJpYnV0ZShwcmV2LCBBUklBX0xBQkVMLCBwcmV2TGFiZWwpO1xuICAgICAgc2V0QXR0cmlidXRlKG5leHQsIEFSSUFfTEFCRUwsIG5leHRMYWJlbCk7XG4gICAgICBlbWl0KEVWRU5UX0FSUk9XU19VUERBVEVELCBwcmV2LCBuZXh0LCBwcmV2SW5kZXgsIG5leHRJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhcnJvd3M6IGFycm93cyxcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogZGVzdHJveSxcbiAgICB1cGRhdGU6IHVwZGF0ZVxuICB9O1xufVxuXG52YXIgSU5URVJWQUxfREFUQV9BVFRSSUJVVEUgPSBEQVRBX0FUVFJJQlVURSArIFwiLWludGVydmFsXCI7XG5cbmZ1bmN0aW9uIEF1dG9wbGF5KFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2U2ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBvbiA9IF9FdmVudEludGVyZmFjZTYub24sXG4gICAgICBiaW5kID0gX0V2ZW50SW50ZXJmYWNlNi5iaW5kLFxuICAgICAgZW1pdCA9IF9FdmVudEludGVyZmFjZTYuZW1pdDtcblxuICB2YXIgaW50ZXJ2YWwgPSBSZXF1ZXN0SW50ZXJ2YWwob3B0aW9ucy5pbnRlcnZhbCwgU3BsaWRlMi5nby5iaW5kKFNwbGlkZTIsIFwiPlwiKSwgb25BbmltYXRpb25GcmFtZSk7XG4gIHZhciBpc1BhdXNlZCA9IGludGVydmFsLmlzUGF1c2VkO1xuICB2YXIgRWxlbWVudHMgPSBDb21wb25lbnRzMi5FbGVtZW50cyxcbiAgICAgIF9Db21wb25lbnRzMiRFbGVtZW50czQgPSBDb21wb25lbnRzMi5FbGVtZW50cyxcbiAgICAgIHJvb3QgPSBfQ29tcG9uZW50czIkRWxlbWVudHM0LnJvb3QsXG4gICAgICB0b2dnbGUgPSBfQ29tcG9uZW50czIkRWxlbWVudHM0LnRvZ2dsZTtcbiAgdmFyIGF1dG9wbGF5ID0gb3B0aW9ucy5hdXRvcGxheTtcbiAgdmFyIGhvdmVyZWQ7XG4gIHZhciBmb2N1c2VkO1xuICB2YXIgc3RvcHBlZCA9IGF1dG9wbGF5ID09PSBcInBhdXNlXCI7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaWYgKGF1dG9wbGF5KSB7XG4gICAgICBsaXN0ZW4oKTtcbiAgICAgIHRvZ2dsZSAmJiBzZXRBdHRyaWJ1dGUodG9nZ2xlLCBBUklBX0NPTlRST0xTLCBFbGVtZW50cy50cmFjay5pZCk7XG4gICAgICBzdG9wcGVkIHx8IHBsYXkoKTtcbiAgICAgIHVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbigpIHtcbiAgICBpZiAob3B0aW9ucy5wYXVzZU9uSG92ZXIpIHtcbiAgICAgIGJpbmQocm9vdCwgXCJtb3VzZWVudGVyIG1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaG92ZXJlZCA9IGUudHlwZSA9PT0gXCJtb3VzZWVudGVyXCI7XG4gICAgICAgIGF1dG9Ub2dnbGUoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnBhdXNlT25Gb2N1cykge1xuICAgICAgYmluZChyb290LCBcImZvY3VzaW4gZm9jdXNvdXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZm9jdXNlZCA9IGUudHlwZSA9PT0gXCJmb2N1c2luXCI7XG4gICAgICAgIGF1dG9Ub2dnbGUoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0b2dnbGUpIHtcbiAgICAgIGJpbmQodG9nZ2xlLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3RvcHBlZCA/IHBsYXkoKSA6IHBhdXNlKHRydWUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgb24oW0VWRU5UX01PVkUsIEVWRU5UX1NDUk9MTCwgRVZFTlRfUkVGUkVTSF0sIGludGVydmFsLnJld2luZCk7XG4gICAgb24oRVZFTlRfTU9WRSwgb25Nb3ZlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgaWYgKGlzUGF1c2VkKCkgJiYgQ29tcG9uZW50czIuU2xpZGVzLmlzRW5vdWdoKCkpIHtcbiAgICAgIGludGVydmFsLnN0YXJ0KCFvcHRpb25zLnJlc2V0UHJvZ3Jlc3MpO1xuICAgICAgZm9jdXNlZCA9IGhvdmVyZWQgPSBzdG9wcGVkID0gZmFsc2U7XG4gICAgICB1cGRhdGUoKTtcbiAgICAgIGVtaXQoRVZFTlRfQVVUT1BMQVlfUExBWSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGF1c2Uoc3RvcCkge1xuICAgIGlmIChzdG9wID09PSB2b2lkIDApIHtcbiAgICAgIHN0b3AgPSB0cnVlO1xuICAgIH1cblxuICAgIHN0b3BwZWQgPSAhIXN0b3A7XG4gICAgdXBkYXRlKCk7XG5cbiAgICBpZiAoIWlzUGF1c2VkKCkpIHtcbiAgICAgIGludGVydmFsLnBhdXNlKCk7XG4gICAgICBlbWl0KEVWRU5UX0FVVE9QTEFZX1BBVVNFKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhdXRvVG9nZ2xlKCkge1xuICAgIGlmICghc3RvcHBlZCkge1xuICAgICAgaG92ZXJlZCB8fCBmb2N1c2VkID8gcGF1c2UoZmFsc2UpIDogcGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICBpZiAodG9nZ2xlKSB7XG4gICAgICB0b2dnbGVDbGFzcyh0b2dnbGUsIENMQVNTX0FDVElWRSwgIXN0b3BwZWQpO1xuICAgICAgc2V0QXR0cmlidXRlKHRvZ2dsZSwgQVJJQV9MQUJFTCwgb3B0aW9ucy5pMThuW3N0b3BwZWQgPyBcInBsYXlcIiA6IFwicGF1c2VcIl0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQW5pbWF0aW9uRnJhbWUocmF0ZSkge1xuICAgIHZhciBiYXIgPSBFbGVtZW50cy5iYXI7XG4gICAgYmFyICYmIHN0eWxlKGJhciwgXCJ3aWR0aFwiLCByYXRlICogMTAwICsgXCIlXCIpO1xuICAgIGVtaXQoRVZFTlRfQVVUT1BMQVlfUExBWUlORywgcmF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdmUoaW5kZXgpIHtcbiAgICB2YXIgU2xpZGUgPSBDb21wb25lbnRzMi5TbGlkZXMuZ2V0QXQoaW5kZXgpO1xuICAgIGludGVydmFsLnNldChTbGlkZSAmJiArZ2V0QXR0cmlidXRlKFNsaWRlLnNsaWRlLCBJTlRFUlZBTF9EQVRBX0FUVFJJQlVURSkgfHwgb3B0aW9ucy5pbnRlcnZhbCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBpbnRlcnZhbC5jYW5jZWwsXG4gICAgcGxheTogcGxheSxcbiAgICBwYXVzZTogcGF1c2UsXG4gICAgaXNQYXVzZWQ6IGlzUGF1c2VkXG4gIH07XG59XG5cbmZ1bmN0aW9uIENvdmVyKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2U3ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBvbiA9IF9FdmVudEludGVyZmFjZTcub247XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaWYgKG9wdGlvbnMuY292ZXIpIHtcbiAgICAgIG9uKEVWRU5UX0xBWllMT0FEX0xPQURFRCwgYXBwbHkodG9nZ2xlLCB0cnVlKSk7XG4gICAgICBvbihbRVZFTlRfTU9VTlRFRCwgRVZFTlRfVVBEQVRFRCwgRVZFTlRfUkVGUkVTSF0sIGFwcGx5KGNvdmVyLCB0cnVlKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY292ZXIoY292ZXIyKSB7XG4gICAgQ29tcG9uZW50czIuU2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICB2YXIgaW1nID0gY2hpbGQoU2xpZGUuY29udGFpbmVyIHx8IFNsaWRlLnNsaWRlLCBcImltZ1wiKTtcblxuICAgICAgaWYgKGltZyAmJiBpbWcuc3JjKSB7XG4gICAgICAgIHRvZ2dsZShjb3ZlcjIsIGltZywgU2xpZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlKGNvdmVyMiwgaW1nLCBTbGlkZSkge1xuICAgIFNsaWRlLnN0eWxlKFwiYmFja2dyb3VuZFwiLCBjb3ZlcjIgPyBcImNlbnRlci9jb3ZlciBuby1yZXBlYXQgdXJsKFxcXCJcIiArIGltZy5zcmMgKyBcIlxcXCIpXCIgOiBcIlwiLCB0cnVlKTtcbiAgICBkaXNwbGF5KGltZywgY292ZXIyID8gXCJub25lXCIgOiBcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGFwcGx5KGNvdmVyLCBmYWxzZSlcbiAgfTtcbn1cblxudmFyIEJPVU5DRV9ESUZGX1RIUkVTSE9MRCA9IDEwO1xudmFyIEJPVU5DRV9EVVJBVElPTiA9IDYwMDtcbnZhciBGUklDVElPTl9GQUNUT1IgPSAwLjY7XG52YXIgQkFTRV9WRUxPQ0lUWSA9IDEuNTtcbnZhciBNSU5fRFVSQVRJT04gPSA4MDA7XG5cbmZ1bmN0aW9uIFNjcm9sbChTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgX0V2ZW50SW50ZXJmYWNlOCA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2U4Lm9uLFxuICAgICAgZW1pdCA9IF9FdmVudEludGVyZmFjZTguZW1pdDtcblxuICB2YXIgc2V0ID0gU3BsaWRlMi5zdGF0ZS5zZXQ7XG4gIHZhciBNb3ZlID0gQ29tcG9uZW50czIuTW92ZTtcbiAgdmFyIGdldFBvc2l0aW9uID0gTW92ZS5nZXRQb3NpdGlvbixcbiAgICAgIGdldExpbWl0ID0gTW92ZS5nZXRMaW1pdCxcbiAgICAgIGV4Y2VlZGVkTGltaXQgPSBNb3ZlLmV4Y2VlZGVkTGltaXQsXG4gICAgICB0cmFuc2xhdGUgPSBNb3ZlLnRyYW5zbGF0ZTtcbiAgdmFyIGlzU2xpZGUgPSBTcGxpZGUyLmlzKFNMSURFKTtcbiAgdmFyIGludGVydmFsO1xuICB2YXIgY2FsbGJhY2s7XG4gIHZhciBmcmljdGlvbiA9IDE7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgb24oRVZFTlRfTU9WRSwgY2xlYXIpO1xuICAgIG9uKFtFVkVOVF9VUERBVEVELCBFVkVOVF9SRUZSRVNIXSwgY2FuY2VsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjcm9sbChkZXN0aW5hdGlvbiwgZHVyYXRpb24sIHNuYXAsIG9uU2Nyb2xsZWQsIG5vQ29uc3RyYWluKSB7XG4gICAgdmFyIGZyb20gPSBnZXRQb3NpdGlvbigpO1xuICAgIGNsZWFyKCk7XG5cbiAgICBpZiAoc25hcCAmJiAoIWlzU2xpZGUgfHwgIWV4Y2VlZGVkTGltaXQoKSkpIHtcbiAgICAgIHZhciBzaXplID0gQ29tcG9uZW50czIuTGF5b3V0LnNsaWRlclNpemUoKTtcbiAgICAgIHZhciBvZmZzZXQgPSBzaWduKGRlc3RpbmF0aW9uKSAqIHNpemUgKiBmbG9vcihhYnMoZGVzdGluYXRpb24pIC8gc2l6ZSkgfHwgMDtcbiAgICAgIGRlc3RpbmF0aW9uID0gTW92ZS50b1Bvc2l0aW9uKENvbXBvbmVudHMyLkNvbnRyb2xsZXIudG9EZXN0KGRlc3RpbmF0aW9uICUgc2l6ZSkpICsgb2Zmc2V0O1xuICAgIH1cblxuICAgIHZhciBub0Rpc3RhbmNlID0gYXBwcm94aW1hdGVseUVxdWFsKGZyb20sIGRlc3RpbmF0aW9uLCAxKTtcbiAgICBmcmljdGlvbiA9IDE7XG4gICAgZHVyYXRpb24gPSBub0Rpc3RhbmNlID8gMCA6IGR1cmF0aW9uIHx8IG1heChhYnMoZGVzdGluYXRpb24gLSBmcm9tKSAvIEJBU0VfVkVMT0NJVFksIE1JTl9EVVJBVElPTik7XG4gICAgY2FsbGJhY2sgPSBvblNjcm9sbGVkO1xuICAgIGludGVydmFsID0gUmVxdWVzdEludGVydmFsKGR1cmF0aW9uLCBvbkVuZCwgYXBwbHkodXBkYXRlLCBmcm9tLCBkZXN0aW5hdGlvbiwgbm9Db25zdHJhaW4pLCAxKTtcbiAgICBzZXQoU0NST0xMSU5HKTtcbiAgICBlbWl0KEVWRU5UX1NDUk9MTCk7XG4gICAgaW50ZXJ2YWwuc3RhcnQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRW5kKCkge1xuICAgIHNldChJRExFKTtcbiAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgIGVtaXQoRVZFTlRfU0NST0xMRUQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKGZyb20sIHRvLCBub0NvbnN0cmFpbiwgcmF0ZSkge1xuICAgIHZhciBwb3NpdGlvbiA9IGdldFBvc2l0aW9uKCk7XG4gICAgdmFyIHRhcmdldCA9IGZyb20gKyAodG8gLSBmcm9tKSAqIGVhc2luZyhyYXRlKTtcbiAgICB2YXIgZGlmZiA9ICh0YXJnZXQgLSBwb3NpdGlvbikgKiBmcmljdGlvbjtcbiAgICB0cmFuc2xhdGUocG9zaXRpb24gKyBkaWZmKTtcblxuICAgIGlmIChpc1NsaWRlICYmICFub0NvbnN0cmFpbiAmJiBleGNlZWRlZExpbWl0KCkpIHtcbiAgICAgIGZyaWN0aW9uICo9IEZSSUNUSU9OX0ZBQ1RPUjtcblxuICAgICAgaWYgKGFicyhkaWZmKSA8IEJPVU5DRV9ESUZGX1RIUkVTSE9MRCkge1xuICAgICAgICBzY3JvbGwoZ2V0TGltaXQoZXhjZWVkZWRMaW1pdCh0cnVlKSksIEJPVU5DRV9EVVJBVElPTiwgZmFsc2UsIGNhbGxiYWNrLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBpZiAoaW50ZXJ2YWwpIHtcbiAgICAgIGludGVydmFsLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAoaW50ZXJ2YWwgJiYgIWludGVydmFsLmlzUGF1c2VkKCkpIHtcbiAgICAgIGNsZWFyKCk7XG4gICAgICBvbkVuZCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVhc2luZyh0KSB7XG4gICAgdmFyIGVhc2luZ0Z1bmMgPSBvcHRpb25zLmVhc2luZ0Z1bmM7XG4gICAgcmV0dXJuIGVhc2luZ0Z1bmMgPyBlYXNpbmdGdW5jKHQpIDogMSAtIE1hdGgucG93KDEgLSB0LCA0KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGNsZWFyLFxuICAgIHNjcm9sbDogc2Nyb2xsLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59XG5cbnZhciBTQ1JPTExfTElTVEVORVJfT1BUSU9OUyA9IHtcbiAgcGFzc2l2ZTogZmFsc2UsXG4gIGNhcHR1cmU6IHRydWVcbn07XG5cbmZ1bmN0aW9uIERyYWcoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTkgPSBFdmVudEludGVyZmFjZShTcGxpZGUyKSxcbiAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlOS5vbixcbiAgICAgIGVtaXQgPSBfRXZlbnRJbnRlcmZhY2U5LmVtaXQsXG4gICAgICBiaW5kID0gX0V2ZW50SW50ZXJmYWNlOS5iaW5kLFxuICAgICAgdW5iaW5kID0gX0V2ZW50SW50ZXJmYWNlOS51bmJpbmQ7XG5cbiAgdmFyIHN0YXRlID0gU3BsaWRlMi5zdGF0ZTtcbiAgdmFyIE1vdmUgPSBDb21wb25lbnRzMi5Nb3ZlLFxuICAgICAgU2Nyb2xsID0gQ29tcG9uZW50czIuU2Nyb2xsLFxuICAgICAgQ29udHJvbGxlciA9IENvbXBvbmVudHMyLkNvbnRyb2xsZXIsXG4gICAgICB0cmFjayA9IENvbXBvbmVudHMyLkVsZW1lbnRzLnRyYWNrLFxuICAgICAgcmVkdWNlID0gQ29tcG9uZW50czIuTWVkaWEucmVkdWNlO1xuICB2YXIgX0NvbXBvbmVudHMyJERpcmVjdGlvMiA9IENvbXBvbmVudHMyLkRpcmVjdGlvbixcbiAgICAgIHJlc29sdmUgPSBfQ29tcG9uZW50czIkRGlyZWN0aW8yLnJlc29sdmUsXG4gICAgICBvcmllbnQgPSBfQ29tcG9uZW50czIkRGlyZWN0aW8yLm9yaWVudDtcbiAgdmFyIGdldFBvc2l0aW9uID0gTW92ZS5nZXRQb3NpdGlvbixcbiAgICAgIGV4Y2VlZGVkTGltaXQgPSBNb3ZlLmV4Y2VlZGVkTGltaXQ7XG4gIHZhciBiYXNlUG9zaXRpb247XG4gIHZhciBiYXNlRXZlbnQ7XG4gIHZhciBwcmV2QmFzZUV2ZW50O1xuICB2YXIgaXNGcmVlO1xuICB2YXIgZHJhZ2dpbmc7XG4gIHZhciBleGNlZWRlZCA9IGZhbHNlO1xuICB2YXIgY2xpY2tQcmV2ZW50ZWQ7XG4gIHZhciBkaXNhYmxlZDtcbiAgdmFyIHRhcmdldDtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBiaW5kKHRyYWNrLCBQT0lOVEVSX01PVkVfRVZFTlRTLCBub29wLCBTQ1JPTExfTElTVEVORVJfT1BUSU9OUyk7XG4gICAgYmluZCh0cmFjaywgUE9JTlRFUl9VUF9FVkVOVFMsIG5vb3AsIFNDUk9MTF9MSVNURU5FUl9PUFRJT05TKTtcbiAgICBiaW5kKHRyYWNrLCBQT0lOVEVSX0RPV05fRVZFTlRTLCBvblBvaW50ZXJEb3duLCBTQ1JPTExfTElTVEVORVJfT1BUSU9OUyk7XG4gICAgYmluZCh0cmFjaywgXCJjbGlja1wiLCBvbkNsaWNrLCB7XG4gICAgICBjYXB0dXJlOiB0cnVlXG4gICAgfSk7XG4gICAgYmluZCh0cmFjaywgXCJkcmFnc3RhcnRcIiwgcHJldmVudCk7XG4gICAgb24oW0VWRU5UX01PVU5URUQsIEVWRU5UX1VQREFURURdLCBpbml0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdmFyIGRyYWcgPSBvcHRpb25zLmRyYWc7XG4gICAgZGlzYWJsZSghZHJhZyk7XG4gICAgaXNGcmVlID0gZHJhZyA9PT0gXCJmcmVlXCI7XG4gIH1cblxuICBmdW5jdGlvbiBvblBvaW50ZXJEb3duKGUpIHtcbiAgICBjbGlja1ByZXZlbnRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgdmFyIGlzVG91Y2ggPSBpc1RvdWNoRXZlbnQoZSk7XG5cbiAgICAgIGlmIChpc0RyYWdnYWJsZShlLnRhcmdldCkgJiYgKGlzVG91Y2ggfHwgIWUuYnV0dG9uKSkge1xuICAgICAgICBpZiAoIUNvbnRyb2xsZXIuaXNCdXN5KCkpIHtcbiAgICAgICAgICB0YXJnZXQgPSBpc1RvdWNoID8gdHJhY2sgOiB3aW5kb3c7XG4gICAgICAgICAgZHJhZ2dpbmcgPSBzdGF0ZS5pcyhbTU9WSU5HLCBTQ1JPTExJTkddKTtcbiAgICAgICAgICBwcmV2QmFzZUV2ZW50ID0gbnVsbDtcbiAgICAgICAgICBiaW5kKHRhcmdldCwgUE9JTlRFUl9NT1ZFX0VWRU5UUywgb25Qb2ludGVyTW92ZSwgU0NST0xMX0xJU1RFTkVSX09QVElPTlMpO1xuICAgICAgICAgIGJpbmQodGFyZ2V0LCBQT0lOVEVSX1VQX0VWRU5UUywgb25Qb2ludGVyVXAsIFNDUk9MTF9MSVNURU5FUl9PUFRJT05TKTtcbiAgICAgICAgICBNb3ZlLmNhbmNlbCgpO1xuICAgICAgICAgIFNjcm9sbC5jYW5jZWwoKTtcbiAgICAgICAgICBzYXZlKGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXZlbnQoZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblBvaW50ZXJNb3ZlKGUpIHtcbiAgICBpZiAoIXN0YXRlLmlzKERSQUdHSU5HKSkge1xuICAgICAgc3RhdGUuc2V0KERSQUdHSU5HKTtcbiAgICAgIGVtaXQoRVZFTlRfRFJBRyk7XG4gICAgfVxuXG4gICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIE1vdmUudHJhbnNsYXRlKGJhc2VQb3NpdGlvbiArIGNvbnN0cmFpbihkaWZmQ29vcmQoZSkpKTtcbiAgICAgICAgdmFyIGV4cGlyZWQgPSBkaWZmVGltZShlKSA+IExPR19JTlRFUlZBTDtcbiAgICAgICAgdmFyIGhhc0V4Y2VlZGVkID0gZXhjZWVkZWQgIT09IChleGNlZWRlZCA9IGV4Y2VlZGVkTGltaXQoKSk7XG5cbiAgICAgICAgaWYgKGV4cGlyZWQgfHwgaGFzRXhjZWVkZWQpIHtcbiAgICAgICAgICBzYXZlKGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2xpY2tQcmV2ZW50ZWQgPSB0cnVlO1xuICAgICAgICBlbWl0KEVWRU5UX0RSQUdHSU5HKTtcbiAgICAgICAgcHJldmVudChlKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNTbGlkZXJEaXJlY3Rpb24oZSkpIHtcbiAgICAgICAgZHJhZ2dpbmcgPSBzaG91bGRTdGFydChlKTtcbiAgICAgICAgcHJldmVudChlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblBvaW50ZXJVcChlKSB7XG4gICAgaWYgKHN0YXRlLmlzKERSQUdHSU5HKSkge1xuICAgICAgc3RhdGUuc2V0KElETEUpO1xuICAgICAgZW1pdChFVkVOVF9EUkFHR0VEKTtcbiAgICB9XG5cbiAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgIG1vdmUoZSk7XG4gICAgICBwcmV2ZW50KGUpO1xuICAgIH1cblxuICAgIHVuYmluZCh0YXJnZXQsIFBPSU5URVJfTU9WRV9FVkVOVFMsIG9uUG9pbnRlck1vdmUpO1xuICAgIHVuYmluZCh0YXJnZXQsIFBPSU5URVJfVVBfRVZFTlRTLCBvblBvaW50ZXJVcCk7XG4gICAgZHJhZ2dpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgIGlmICghZGlzYWJsZWQgJiYgY2xpY2tQcmV2ZW50ZWQpIHtcbiAgICAgIHByZXZlbnQoZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2F2ZShlKSB7XG4gICAgcHJldkJhc2VFdmVudCA9IGJhc2VFdmVudDtcbiAgICBiYXNlRXZlbnQgPSBlO1xuICAgIGJhc2VQb3NpdGlvbiA9IGdldFBvc2l0aW9uKCk7XG4gIH1cblxuICBmdW5jdGlvbiBtb3ZlKGUpIHtcbiAgICB2YXIgdmVsb2NpdHkgPSBjb21wdXRlVmVsb2NpdHkoZSk7XG4gICAgdmFyIGRlc3RpbmF0aW9uID0gY29tcHV0ZURlc3RpbmF0aW9uKHZlbG9jaXR5KTtcbiAgICB2YXIgcmV3aW5kID0gb3B0aW9ucy5yZXdpbmQgJiYgb3B0aW9ucy5yZXdpbmRCeURyYWc7XG4gICAgcmVkdWNlKGZhbHNlKTtcblxuICAgIGlmIChpc0ZyZWUpIHtcbiAgICAgIENvbnRyb2xsZXIuc2Nyb2xsKGRlc3RpbmF0aW9uLCAwLCBvcHRpb25zLnNuYXApO1xuICAgIH0gZWxzZSBpZiAoU3BsaWRlMi5pcyhGQURFKSkge1xuICAgICAgQ29udHJvbGxlci5nbyhvcmllbnQoc2lnbih2ZWxvY2l0eSkpIDwgMCA/IHJld2luZCA/IFwiPFwiIDogXCItXCIgOiByZXdpbmQgPyBcIj5cIiA6IFwiK1wiKTtcbiAgICB9IGVsc2UgaWYgKFNwbGlkZTIuaXMoU0xJREUpICYmIGV4Y2VlZGVkICYmIHJld2luZCkge1xuICAgICAgQ29udHJvbGxlci5nbyhleGNlZWRlZExpbWl0KHRydWUpID8gXCI+XCIgOiBcIjxcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIENvbnRyb2xsZXIuZ28oQ29udHJvbGxlci50b0Rlc3QoZGVzdGluYXRpb24pLCB0cnVlKTtcbiAgICB9XG5cbiAgICByZWR1Y2UodHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRTdGFydChlKSB7XG4gICAgdmFyIHRocmVzaG9sZHMgPSBvcHRpb25zLmRyYWdNaW5UaHJlc2hvbGQ7XG4gICAgdmFyIGlzT2JqID0gaXNPYmplY3QodGhyZXNob2xkcyk7XG4gICAgdmFyIG1vdXNlID0gaXNPYmogJiYgdGhyZXNob2xkcy5tb3VzZSB8fCAwO1xuICAgIHZhciB0b3VjaCA9IChpc09iaiA/IHRocmVzaG9sZHMudG91Y2ggOiArdGhyZXNob2xkcykgfHwgMTA7XG4gICAgcmV0dXJuIGFicyhkaWZmQ29vcmQoZSkpID4gKGlzVG91Y2hFdmVudChlKSA/IHRvdWNoIDogbW91c2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNTbGlkZXJEaXJlY3Rpb24oZSkge1xuICAgIHJldHVybiBhYnMoZGlmZkNvb3JkKGUpKSA+IGFicyhkaWZmQ29vcmQoZSwgdHJ1ZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcHV0ZVZlbG9jaXR5KGUpIHtcbiAgICBpZiAoU3BsaWRlMi5pcyhMT09QKSB8fCAhZXhjZWVkZWQpIHtcbiAgICAgIHZhciB0aW1lID0gZGlmZlRpbWUoZSk7XG5cbiAgICAgIGlmICh0aW1lICYmIHRpbWUgPCBMT0dfSU5URVJWQUwpIHtcbiAgICAgICAgcmV0dXJuIGRpZmZDb29yZChlKSAvIHRpbWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlRGVzdGluYXRpb24odmVsb2NpdHkpIHtcbiAgICByZXR1cm4gZ2V0UG9zaXRpb24oKSArIHNpZ24odmVsb2NpdHkpICogbWluKGFicyh2ZWxvY2l0eSkgKiAob3B0aW9ucy5mbGlja1Bvd2VyIHx8IDYwMCksIGlzRnJlZSA/IEluZmluaXR5IDogQ29tcG9uZW50czIuTGF5b3V0Lmxpc3RTaXplKCkgKiAob3B0aW9ucy5mbGlja01heFBhZ2VzIHx8IDEpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpZmZDb29yZChlLCBvcnRob2dvbmFsKSB7XG4gICAgcmV0dXJuIGNvb3JkT2YoZSwgb3J0aG9nb25hbCkgLSBjb29yZE9mKGdldEJhc2VFdmVudChlKSwgb3J0aG9nb25hbCk7XG4gIH1cblxuICBmdW5jdGlvbiBkaWZmVGltZShlKSB7XG4gICAgcmV0dXJuIHRpbWVPZihlKSAtIHRpbWVPZihnZXRCYXNlRXZlbnQoZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QmFzZUV2ZW50KGUpIHtcbiAgICByZXR1cm4gYmFzZUV2ZW50ID09PSBlICYmIHByZXZCYXNlRXZlbnQgfHwgYmFzZUV2ZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gY29vcmRPZihlLCBvcnRob2dvbmFsKSB7XG4gICAgcmV0dXJuIChpc1RvdWNoRXZlbnQoZSkgPyBlLmNoYW5nZWRUb3VjaGVzWzBdIDogZSlbXCJwYWdlXCIgKyByZXNvbHZlKG9ydGhvZ29uYWwgPyBcIllcIiA6IFwiWFwiKV07XG4gIH1cblxuICBmdW5jdGlvbiBjb25zdHJhaW4oZGlmZikge1xuICAgIHJldHVybiBkaWZmIC8gKGV4Y2VlZGVkICYmIFNwbGlkZTIuaXMoU0xJREUpID8gRlJJQ1RJT04gOiAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRHJhZ2dhYmxlKHRhcmdldDIpIHtcbiAgICB2YXIgbm9EcmFnID0gb3B0aW9ucy5ub0RyYWc7XG4gICAgcmV0dXJuICFtYXRjaGVzKHRhcmdldDIsIFwiLlwiICsgQ0xBU1NfUEFHSU5BVElPTl9QQUdFICsgXCIsIC5cIiArIENMQVNTX0FSUk9XKSAmJiAoIW5vRHJhZyB8fCAhbWF0Y2hlcyh0YXJnZXQyLCBub0RyYWcpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzVG91Y2hFdmVudChlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBUb3VjaEV2ZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGUgaW5zdGFuY2VvZiBUb3VjaEV2ZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNEcmFnZ2luZygpIHtcbiAgICByZXR1cm4gZHJhZ2dpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlKHZhbHVlKSB7XG4gICAgZGlzYWJsZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRpc2FibGU6IGRpc2FibGUsXG4gICAgaXNEcmFnZ2luZzogaXNEcmFnZ2luZ1xuICB9O1xufVxuXG52YXIgTk9STUFMSVpBVElPTl9NQVAgPSB7XG4gIFNwYWNlYmFyOiBcIiBcIixcbiAgUmlnaHQ6IEFSUk9XX1JJR0hULFxuICBMZWZ0OiBBUlJPV19MRUZULFxuICBVcDogQVJST1dfVVAsXG4gIERvd246IEFSUk9XX0RPV05cbn07XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUtleShrZXkpIHtcbiAga2V5ID0gaXNTdHJpbmcoa2V5KSA/IGtleSA6IGtleS5rZXk7XG4gIHJldHVybiBOT1JNQUxJWkFUSU9OX01BUFtrZXldIHx8IGtleTtcbn1cblxudmFyIEtFWUJPQVJEX0VWRU5UID0gXCJrZXlkb3duXCI7XG5cbmZ1bmN0aW9uIEtleWJvYXJkKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2UxMCA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2UxMC5vbixcbiAgICAgIGJpbmQgPSBfRXZlbnRJbnRlcmZhY2UxMC5iaW5kLFxuICAgICAgdW5iaW5kID0gX0V2ZW50SW50ZXJmYWNlMTAudW5iaW5kO1xuXG4gIHZhciByb290ID0gU3BsaWRlMi5yb290O1xuICB2YXIgcmVzb2x2ZSA9IENvbXBvbmVudHMyLkRpcmVjdGlvbi5yZXNvbHZlO1xuICB2YXIgdGFyZ2V0O1xuICB2YXIgZGlzYWJsZWQ7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgaW5pdCgpO1xuICAgIG9uKEVWRU5UX1VQREFURUQsIGRlc3Ryb3kpO1xuICAgIG9uKEVWRU5UX1VQREFURUQsIGluaXQpO1xuICAgIG9uKEVWRU5UX01PVkUsIG9uTW92ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHZhciBrZXlib2FyZCA9IG9wdGlvbnMua2V5Ym9hcmQ7XG5cbiAgICBpZiAoa2V5Ym9hcmQpIHtcbiAgICAgIHRhcmdldCA9IGtleWJvYXJkID09PSBcImdsb2JhbFwiID8gd2luZG93IDogcm9vdDtcbiAgICAgIGJpbmQodGFyZ2V0LCBLRVlCT0FSRF9FVkVOVCwgb25LZXlkb3duKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHVuYmluZCh0YXJnZXQsIEtFWUJPQVJEX0VWRU5UKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc2FibGUodmFsdWUpIHtcbiAgICBkaXNhYmxlZCA9IHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3ZlKCkge1xuICAgIHZhciBfZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgZGlzYWJsZWQgPSBfZGlzYWJsZWQ7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbktleWRvd24oZSkge1xuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHZhciBrZXkgPSBub3JtYWxpemVLZXkoZSk7XG5cbiAgICAgIGlmIChrZXkgPT09IHJlc29sdmUoQVJST1dfTEVGVCkpIHtcbiAgICAgICAgU3BsaWRlMi5nbyhcIjxcIik7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gcmVzb2x2ZShBUlJPV19SSUdIVCkpIHtcbiAgICAgICAgU3BsaWRlMi5nbyhcIj5cIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgZGVzdHJveTogZGVzdHJveSxcbiAgICBkaXNhYmxlOiBkaXNhYmxlXG4gIH07XG59XG5cbnZhciBTUkNfREFUQV9BVFRSSUJVVEUgPSBEQVRBX0FUVFJJQlVURSArIFwiLWxhenlcIjtcbnZhciBTUkNTRVRfREFUQV9BVFRSSUJVVEUgPSBTUkNfREFUQV9BVFRSSUJVVEUgKyBcIi1zcmNzZXRcIjtcbnZhciBJTUFHRV9TRUxFQ1RPUiA9IFwiW1wiICsgU1JDX0RBVEFfQVRUUklCVVRFICsgXCJdLCBbXCIgKyBTUkNTRVRfREFUQV9BVFRSSUJVVEUgKyBcIl1cIjtcblxuZnVuY3Rpb24gTGF6eUxvYWQoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTExID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBvbiA9IF9FdmVudEludGVyZmFjZTExLm9uLFxuICAgICAgb2ZmID0gX0V2ZW50SW50ZXJmYWNlMTEub2ZmLFxuICAgICAgYmluZCA9IF9FdmVudEludGVyZmFjZTExLmJpbmQsXG4gICAgICBlbWl0ID0gX0V2ZW50SW50ZXJmYWNlMTEuZW1pdDtcblxuICB2YXIgaXNTZXF1ZW50aWFsID0gb3B0aW9ucy5sYXp5TG9hZCA9PT0gXCJzZXF1ZW50aWFsXCI7XG4gIHZhciBldmVudHMgPSBbRVZFTlRfTU9WRUQsIEVWRU5UX1NDUk9MTEVEXTtcbiAgdmFyIGVudHJpZXMgPSBbXTtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpZiAob3B0aW9ucy5sYXp5TG9hZCkge1xuICAgICAgaW5pdCgpO1xuICAgICAgb24oRVZFTlRfUkVGUkVTSCwgaW5pdCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBlbXB0eShlbnRyaWVzKTtcbiAgICByZWdpc3RlcigpO1xuXG4gICAgaWYgKGlzU2VxdWVudGlhbCkge1xuICAgICAgbG9hZE5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2ZmKGV2ZW50cyk7XG4gICAgICBvbihldmVudHMsIGNoZWNrKTtcbiAgICAgIGNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXIoKSB7XG4gICAgQ29tcG9uZW50czIuU2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICBxdWVyeUFsbChTbGlkZS5zbGlkZSwgSU1BR0VfU0VMRUNUT1IpLmZvckVhY2goZnVuY3Rpb24gKGltZykge1xuICAgICAgICB2YXIgc3JjID0gZ2V0QXR0cmlidXRlKGltZywgU1JDX0RBVEFfQVRUUklCVVRFKTtcbiAgICAgICAgdmFyIHNyY3NldCA9IGdldEF0dHJpYnV0ZShpbWcsIFNSQ1NFVF9EQVRBX0FUVFJJQlVURSk7XG5cbiAgICAgICAgaWYgKHNyYyAhPT0gaW1nLnNyYyB8fCBzcmNzZXQgIT09IGltZy5zcmNzZXQpIHtcbiAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc2VzLnNwaW5uZXI7XG4gICAgICAgICAgdmFyIHBhcmVudCA9IGltZy5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgIHZhciBzcGlubmVyID0gY2hpbGQocGFyZW50LCBcIi5cIiArIGNsYXNzTmFtZSkgfHwgY3JlYXRlKFwic3BhblwiLCBjbGFzc05hbWUsIHBhcmVudCk7XG4gICAgICAgICAgZW50cmllcy5wdXNoKFtpbWcsIFNsaWRlLCBzcGlubmVyXSk7XG4gICAgICAgICAgaW1nLnNyYyB8fCBkaXNwbGF5KGltZywgXCJub25lXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrKCkge1xuICAgIGVudHJpZXMgPSBlbnRyaWVzLmZpbHRlcihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdmFyIGRpc3RhbmNlID0gb3B0aW9ucy5wZXJQYWdlICogKChvcHRpb25zLnByZWxvYWRQYWdlcyB8fCAxKSArIDEpIC0gMTtcbiAgICAgIHJldHVybiBkYXRhWzFdLmlzV2l0aGluKFNwbGlkZTIuaW5kZXgsIGRpc3RhbmNlKSA/IGxvYWQoZGF0YSkgOiB0cnVlO1xuICAgIH0pO1xuICAgIGVudHJpZXMubGVuZ3RoIHx8IG9mZihldmVudHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9hZChkYXRhKSB7XG4gICAgdmFyIGltZyA9IGRhdGFbMF07XG4gICAgYWRkQ2xhc3MoZGF0YVsxXS5zbGlkZSwgQ0xBU1NfTE9BRElORyk7XG4gICAgYmluZChpbWcsIFwibG9hZCBlcnJvclwiLCBhcHBseShvbkxvYWQsIGRhdGEpKTtcbiAgICBzZXRBdHRyaWJ1dGUoaW1nLCBcInNyY1wiLCBnZXRBdHRyaWJ1dGUoaW1nLCBTUkNfREFUQV9BVFRSSUJVVEUpKTtcbiAgICBzZXRBdHRyaWJ1dGUoaW1nLCBcInNyY3NldFwiLCBnZXRBdHRyaWJ1dGUoaW1nLCBTUkNTRVRfREFUQV9BVFRSSUJVVEUpKTtcbiAgICByZW1vdmVBdHRyaWJ1dGUoaW1nLCBTUkNfREFUQV9BVFRSSUJVVEUpO1xuICAgIHJlbW92ZUF0dHJpYnV0ZShpbWcsIFNSQ1NFVF9EQVRBX0FUVFJJQlVURSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkxvYWQoZGF0YSwgZSkge1xuICAgIHZhciBpbWcgPSBkYXRhWzBdLFxuICAgICAgICBTbGlkZSA9IGRhdGFbMV07XG4gICAgcmVtb3ZlQ2xhc3MoU2xpZGUuc2xpZGUsIENMQVNTX0xPQURJTkcpO1xuXG4gICAgaWYgKGUudHlwZSAhPT0gXCJlcnJvclwiKSB7XG4gICAgICByZW1vdmUoZGF0YVsyXSk7XG4gICAgICBkaXNwbGF5KGltZywgXCJcIik7XG4gICAgICBlbWl0KEVWRU5UX0xBWllMT0FEX0xPQURFRCwgaW1nLCBTbGlkZSk7XG4gICAgICBlbWl0KEVWRU5UX1JFU0laRSk7XG4gICAgfVxuXG4gICAgaXNTZXF1ZW50aWFsICYmIGxvYWROZXh0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBsb2FkTmV4dCgpIHtcbiAgICBlbnRyaWVzLmxlbmd0aCAmJiBsb2FkKGVudHJpZXMuc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBhcHBseShlbXB0eSwgZW50cmllcyksXG4gICAgY2hlY2s6IGNoZWNrXG4gIH07XG59XG5cbmZ1bmN0aW9uIFBhZ2luYXRpb24oU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIGV2ZW50ID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMik7XG4gIHZhciBvbiA9IGV2ZW50Lm9uLFxuICAgICAgZW1pdCA9IGV2ZW50LmVtaXQsXG4gICAgICBiaW5kID0gZXZlbnQuYmluZDtcbiAgdmFyIFNsaWRlcyA9IENvbXBvbmVudHMyLlNsaWRlcyxcbiAgICAgIEVsZW1lbnRzID0gQ29tcG9uZW50czIuRWxlbWVudHMsXG4gICAgICBDb250cm9sbGVyID0gQ29tcG9uZW50czIuQ29udHJvbGxlcjtcbiAgdmFyIGhhc0ZvY3VzID0gQ29udHJvbGxlci5oYXNGb2N1cyxcbiAgICAgIGdldEluZGV4ID0gQ29udHJvbGxlci5nZXRJbmRleCxcbiAgICAgIGdvID0gQ29udHJvbGxlci5nbztcbiAgdmFyIHJlc29sdmUgPSBDb21wb25lbnRzMi5EaXJlY3Rpb24ucmVzb2x2ZTtcbiAgdmFyIHBsYWNlaG9sZGVyID0gRWxlbWVudHMucGFnaW5hdGlvbjtcbiAgdmFyIGl0ZW1zID0gW107XG4gIHZhciBsaXN0O1xuICB2YXIgcGFnaW5hdGlvbkNsYXNzZXM7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgZGVzdHJveSgpO1xuICAgIG9uKFtFVkVOVF9VUERBVEVELCBFVkVOVF9SRUZSRVNILCBFVkVOVF9FTkRfSU5ERVhfQ0hBTkdFRF0sIG1vdW50KTtcbiAgICB2YXIgZW5hYmxlZCA9IG9wdGlvbnMucGFnaW5hdGlvbjtcbiAgICBwbGFjZWhvbGRlciAmJiBkaXNwbGF5KHBsYWNlaG9sZGVyLCBlbmFibGVkID8gXCJcIiA6IFwibm9uZVwiKTtcblxuICAgIGlmIChlbmFibGVkKSB7XG4gICAgICBvbihbRVZFTlRfTU9WRSwgRVZFTlRfU0NST0xMLCBFVkVOVF9TQ1JPTExFRF0sIHVwZGF0ZSk7XG4gICAgICBjcmVhdGVQYWdpbmF0aW9uKCk7XG4gICAgICB1cGRhdGUoKTtcbiAgICAgIGVtaXQoRVZFTlRfUEFHSU5BVElPTl9NT1VOVEVELCB7XG4gICAgICAgIGxpc3Q6IGxpc3QsXG4gICAgICAgIGl0ZW1zOiBpdGVtc1xuICAgICAgfSwgZ2V0QXQoU3BsaWRlMi5pbmRleCkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKGxpc3QpIHtcbiAgICAgIHJlbW92ZShwbGFjZWhvbGRlciA/IHNsaWNlKGxpc3QuY2hpbGRyZW4pIDogbGlzdCk7XG4gICAgICByZW1vdmVDbGFzcyhsaXN0LCBwYWdpbmF0aW9uQ2xhc3Nlcyk7XG4gICAgICBlbXB0eShpdGVtcyk7XG4gICAgICBsaXN0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBldmVudC5kZXN0cm95KCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQYWdpbmF0aW9uKCkge1xuICAgIHZhciBsZW5ndGggPSBTcGxpZGUyLmxlbmd0aDtcbiAgICB2YXIgY2xhc3NlcyA9IG9wdGlvbnMuY2xhc3NlcyxcbiAgICAgICAgaTE4biA9IG9wdGlvbnMuaTE4bixcbiAgICAgICAgcGVyUGFnZSA9IG9wdGlvbnMucGVyUGFnZTtcbiAgICB2YXIgbWF4ID0gaGFzRm9jdXMoKSA/IENvbnRyb2xsZXIuZ2V0RW5kKCkgKyAxIDogY2VpbChsZW5ndGggLyBwZXJQYWdlKTtcbiAgICBsaXN0ID0gcGxhY2Vob2xkZXIgfHwgY3JlYXRlKFwidWxcIiwgY2xhc3Nlcy5wYWdpbmF0aW9uLCBFbGVtZW50cy50cmFjay5wYXJlbnRFbGVtZW50KTtcbiAgICBhZGRDbGFzcyhsaXN0LCBwYWdpbmF0aW9uQ2xhc3NlcyA9IENMQVNTX1BBR0lOQVRJT04gKyBcIi0tXCIgKyBnZXREaXJlY3Rpb24oKSk7XG4gICAgc2V0QXR0cmlidXRlKGxpc3QsIFJPTEUsIFwidGFibGlzdFwiKTtcbiAgICBzZXRBdHRyaWJ1dGUobGlzdCwgQVJJQV9MQUJFTCwgaTE4bi5zZWxlY3QpO1xuICAgIHNldEF0dHJpYnV0ZShsaXN0LCBBUklBX09SSUVOVEFUSU9OLCBnZXREaXJlY3Rpb24oKSA9PT0gVFRCID8gXCJ2ZXJ0aWNhbFwiIDogXCJcIik7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heDsgaSsrKSB7XG4gICAgICB2YXIgbGkgPSBjcmVhdGUoXCJsaVwiLCBudWxsLCBsaXN0KTtcbiAgICAgIHZhciBidXR0b24gPSBjcmVhdGUoXCJidXR0b25cIiwge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy5wYWdlLFxuICAgICAgICB0eXBlOiBcImJ1dHRvblwiXG4gICAgICB9LCBsaSk7XG4gICAgICB2YXIgY29udHJvbHMgPSBTbGlkZXMuZ2V0SW4oaSkubWFwKGZ1bmN0aW9uIChTbGlkZSkge1xuICAgICAgICByZXR1cm4gU2xpZGUuc2xpZGUuaWQ7XG4gICAgICB9KTtcbiAgICAgIHZhciB0ZXh0ID0gIWhhc0ZvY3VzKCkgJiYgcGVyUGFnZSA+IDEgPyBpMThuLnBhZ2VYIDogaTE4bi5zbGlkZVg7XG4gICAgICBiaW5kKGJ1dHRvbiwgXCJjbGlja1wiLCBhcHBseShvbkNsaWNrLCBpKSk7XG5cbiAgICAgIGlmIChvcHRpb25zLnBhZ2luYXRpb25LZXlib2FyZCkge1xuICAgICAgICBiaW5kKGJ1dHRvbiwgXCJrZXlkb3duXCIsIGFwcGx5KG9uS2V5ZG93biwgaSkpO1xuICAgICAgfVxuXG4gICAgICBzZXRBdHRyaWJ1dGUobGksIFJPTEUsIFwicHJlc2VudGF0aW9uXCIpO1xuICAgICAgc2V0QXR0cmlidXRlKGJ1dHRvbiwgUk9MRSwgXCJ0YWJcIik7XG4gICAgICBzZXRBdHRyaWJ1dGUoYnV0dG9uLCBBUklBX0NPTlRST0xTLCBjb250cm9scy5qb2luKFwiIFwiKSk7XG4gICAgICBzZXRBdHRyaWJ1dGUoYnV0dG9uLCBBUklBX0xBQkVMLCBmb3JtYXQodGV4dCwgaSArIDEpKTtcbiAgICAgIHNldEF0dHJpYnV0ZShidXR0b24sIFRBQl9JTkRFWCwgLTEpO1xuICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgIGxpOiBsaSxcbiAgICAgICAgYnV0dG9uOiBidXR0b24sXG4gICAgICAgIHBhZ2U6IGlcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2xpY2socGFnZSkge1xuICAgIGdvKFwiPlwiICsgcGFnZSwgdHJ1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbktleWRvd24ocGFnZSwgZSkge1xuICAgIHZhciBsZW5ndGggPSBpdGVtcy5sZW5ndGg7XG4gICAgdmFyIGtleSA9IG5vcm1hbGl6ZUtleShlKTtcbiAgICB2YXIgZGlyID0gZ2V0RGlyZWN0aW9uKCk7XG4gICAgdmFyIG5leHRQYWdlID0gLTE7XG5cbiAgICBpZiAoa2V5ID09PSByZXNvbHZlKEFSUk9XX1JJR0hULCBmYWxzZSwgZGlyKSkge1xuICAgICAgbmV4dFBhZ2UgPSArK3BhZ2UgJSBsZW5ndGg7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IHJlc29sdmUoQVJST1dfTEVGVCwgZmFsc2UsIGRpcikpIHtcbiAgICAgIG5leHRQYWdlID0gKC0tcGFnZSArIGxlbmd0aCkgJSBsZW5ndGg7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiSG9tZVwiKSB7XG4gICAgICBuZXh0UGFnZSA9IDA7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFwiRW5kXCIpIHtcbiAgICAgIG5leHRQYWdlID0gbGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICB2YXIgaXRlbSA9IGl0ZW1zW25leHRQYWdlXTtcblxuICAgIGlmIChpdGVtKSB7XG4gICAgICBmb2N1cyhpdGVtLmJ1dHRvbik7XG4gICAgICBnbyhcIj5cIiArIG5leHRQYWdlKTtcbiAgICAgIHByZXZlbnQoZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGlyZWN0aW9uKCkge1xuICAgIHJldHVybiBvcHRpb25zLnBhZ2luYXRpb25EaXJlY3Rpb24gfHwgb3B0aW9ucy5kaXJlY3Rpb247XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBdChpbmRleCkge1xuICAgIHJldHVybiBpdGVtc1tDb250cm9sbGVyLnRvUGFnZShpbmRleCldO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBwcmV2ID0gZ2V0QXQoZ2V0SW5kZXgodHJ1ZSkpO1xuICAgIHZhciBjdXJyID0gZ2V0QXQoZ2V0SW5kZXgoKSk7XG5cbiAgICBpZiAocHJldikge1xuICAgICAgdmFyIGJ1dHRvbiA9IHByZXYuYnV0dG9uO1xuICAgICAgcmVtb3ZlQ2xhc3MoYnV0dG9uLCBDTEFTU19BQ1RJVkUpO1xuICAgICAgcmVtb3ZlQXR0cmlidXRlKGJ1dHRvbiwgQVJJQV9TRUxFQ1RFRCk7XG4gICAgICBzZXRBdHRyaWJ1dGUoYnV0dG9uLCBUQUJfSU5ERVgsIC0xKTtcbiAgICB9XG5cbiAgICBpZiAoY3Vycikge1xuICAgICAgdmFyIF9idXR0b24gPSBjdXJyLmJ1dHRvbjtcbiAgICAgIGFkZENsYXNzKF9idXR0b24sIENMQVNTX0FDVElWRSk7XG4gICAgICBzZXRBdHRyaWJ1dGUoX2J1dHRvbiwgQVJJQV9TRUxFQ1RFRCwgdHJ1ZSk7XG4gICAgICBzZXRBdHRyaWJ1dGUoX2J1dHRvbiwgVEFCX0lOREVYLCBcIlwiKTtcbiAgICB9XG5cbiAgICBlbWl0KEVWRU5UX1BBR0lOQVRJT05fVVBEQVRFRCwge1xuICAgICAgbGlzdDogbGlzdCxcbiAgICAgIGl0ZW1zOiBpdGVtc1xuICAgIH0sIHByZXYsIGN1cnIpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpdGVtczogaXRlbXMsXG4gICAgbW91bnQ6IG1vdW50LFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3ksXG4gICAgZ2V0QXQ6IGdldEF0LFxuICAgIHVwZGF0ZTogdXBkYXRlXG4gIH07XG59XG5cbnZhciBUUklHR0VSX0tFWVMgPSBbXCIgXCIsIFwiRW50ZXJcIl07XG5cbmZ1bmN0aW9uIFN5bmMoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIGlzTmF2aWdhdGlvbiA9IG9wdGlvbnMuaXNOYXZpZ2F0aW9uLFxuICAgICAgc2xpZGVGb2N1cyA9IG9wdGlvbnMuc2xpZGVGb2N1cztcbiAgdmFyIGV2ZW50cyA9IFtdO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIFNwbGlkZTIuc3BsaWRlcy5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIGlmICghdGFyZ2V0LmlzUGFyZW50KSB7XG4gICAgICAgIHN5bmMoU3BsaWRlMiwgdGFyZ2V0LnNwbGlkZSk7XG4gICAgICAgIHN5bmModGFyZ2V0LnNwbGlkZSwgU3BsaWRlMik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaXNOYXZpZ2F0aW9uKSB7XG4gICAgICBuYXZpZ2F0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBldmVudC5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgZW1wdHkoZXZlbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW91bnQoKSB7XG4gICAgZGVzdHJveSgpO1xuICAgIG1vdW50KCk7XG4gIH1cblxuICBmdW5jdGlvbiBzeW5jKHNwbGlkZSwgdGFyZ2V0KSB7XG4gICAgdmFyIGV2ZW50ID0gRXZlbnRJbnRlcmZhY2Uoc3BsaWRlKTtcbiAgICBldmVudC5vbihFVkVOVF9NT1ZFLCBmdW5jdGlvbiAoaW5kZXgsIHByZXYsIGRlc3QpIHtcbiAgICAgIHRhcmdldC5nbyh0YXJnZXQuaXMoTE9PUCkgPyBkZXN0IDogaW5kZXgpO1xuICAgIH0pO1xuICAgIGV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5hdmlnYXRlKCkge1xuICAgIHZhciBldmVudCA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpO1xuICAgIHZhciBvbiA9IGV2ZW50Lm9uO1xuICAgIG9uKEVWRU5UX0NMSUNLLCBvbkNsaWNrKTtcbiAgICBvbihFVkVOVF9TTElERV9LRVlET1dOLCBvbktleWRvd24pO1xuICAgIG9uKFtFVkVOVF9NT1VOVEVELCBFVkVOVF9VUERBVEVEXSwgdXBkYXRlKTtcbiAgICBldmVudHMucHVzaChldmVudCk7XG4gICAgZXZlbnQuZW1pdChFVkVOVF9OQVZJR0FUSU9OX01PVU5URUQsIFNwbGlkZTIuc3BsaWRlcyk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgc2V0QXR0cmlidXRlKENvbXBvbmVudHMyLkVsZW1lbnRzLmxpc3QsIEFSSUFfT1JJRU5UQVRJT04sIG9wdGlvbnMuZGlyZWN0aW9uID09PSBUVEIgPyBcInZlcnRpY2FsXCIgOiBcIlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2xpY2soU2xpZGUpIHtcbiAgICBTcGxpZGUyLmdvKFNsaWRlLmluZGV4KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5ZG93bihTbGlkZSwgZSkge1xuICAgIGlmIChpbmNsdWRlcyhUUklHR0VSX0tFWVMsIG5vcm1hbGl6ZUtleShlKSkpIHtcbiAgICAgIG9uQ2xpY2soU2xpZGUpO1xuICAgICAgcHJldmVudChlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNldHVwOiBhcHBseShDb21wb25lbnRzMi5NZWRpYS5zZXQsIHtcbiAgICAgIHNsaWRlRm9jdXM6IGlzVW5kZWZpbmVkKHNsaWRlRm9jdXMpID8gaXNOYXZpZ2F0aW9uIDogc2xpZGVGb2N1c1xuICAgIH0sIHRydWUpLFxuICAgIG1vdW50OiBtb3VudCxcbiAgICBkZXN0cm95OiBkZXN0cm95LFxuICAgIHJlbW91bnQ6IHJlbW91bnRcbiAgfTtcbn1cblxuZnVuY3Rpb24gV2hlZWwoU3BsaWRlMiwgQ29tcG9uZW50czIsIG9wdGlvbnMpIHtcbiAgdmFyIF9FdmVudEludGVyZmFjZTEyID0gRXZlbnRJbnRlcmZhY2UoU3BsaWRlMiksXG4gICAgICBiaW5kID0gX0V2ZW50SW50ZXJmYWNlMTIuYmluZDtcblxuICB2YXIgbGFzdFRpbWUgPSAwO1xuXG4gIGZ1bmN0aW9uIG1vdW50KCkge1xuICAgIGlmIChvcHRpb25zLndoZWVsKSB7XG4gICAgICBiaW5kKENvbXBvbmVudHMyLkVsZW1lbnRzLnRyYWNrLCBcIndoZWVsXCIsIG9uV2hlZWwsIFNDUk9MTF9MSVNURU5FUl9PUFRJT05TKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbldoZWVsKGUpIHtcbiAgICBpZiAoZS5jYW5jZWxhYmxlKSB7XG4gICAgICB2YXIgZGVsdGFZID0gZS5kZWx0YVk7XG4gICAgICB2YXIgYmFja3dhcmRzID0gZGVsdGFZIDwgMDtcbiAgICAgIHZhciB0aW1lU3RhbXAgPSB0aW1lT2YoZSk7XG5cbiAgICAgIHZhciBfbWluID0gb3B0aW9ucy53aGVlbE1pblRocmVzaG9sZCB8fCAwO1xuXG4gICAgICB2YXIgc2xlZXAgPSBvcHRpb25zLndoZWVsU2xlZXAgfHwgMDtcblxuICAgICAgaWYgKGFicyhkZWx0YVkpID4gX21pbiAmJiB0aW1lU3RhbXAgLSBsYXN0VGltZSA+IHNsZWVwKSB7XG4gICAgICAgIFNwbGlkZTIuZ28oYmFja3dhcmRzID8gXCI8XCIgOiBcIj5cIik7XG4gICAgICAgIGxhc3RUaW1lID0gdGltZVN0YW1wO1xuICAgICAgfVxuXG4gICAgICBzaG91bGRQcmV2ZW50KGJhY2t3YXJkcykgJiYgcHJldmVudChlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRQcmV2ZW50KGJhY2t3YXJkcykge1xuICAgIHJldHVybiAhb3B0aW9ucy5yZWxlYXNlV2hlZWwgfHwgU3BsaWRlMi5zdGF0ZS5pcyhNT1ZJTkcpIHx8IENvbXBvbmVudHMyLkNvbnRyb2xsZXIuZ2V0QWRqYWNlbnQoYmFja3dhcmRzKSAhPT0gLTE7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudFxuICB9O1xufVxuXG52YXIgU1JfUkVNT1ZBTF9ERUxBWSA9IDkwO1xuXG5mdW5jdGlvbiBMaXZlKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBfRXZlbnRJbnRlcmZhY2UxMyA9IEV2ZW50SW50ZXJmYWNlKFNwbGlkZTIpLFxuICAgICAgb24gPSBfRXZlbnRJbnRlcmZhY2UxMy5vbjtcblxuICB2YXIgdHJhY2sgPSBDb21wb25lbnRzMi5FbGVtZW50cy50cmFjaztcbiAgdmFyIGVuYWJsZWQgPSBvcHRpb25zLmxpdmUgJiYgIW9wdGlvbnMuaXNOYXZpZ2F0aW9uO1xuICB2YXIgc3IgPSBjcmVhdGUoXCJzcGFuXCIsIENMQVNTX1NSKTtcbiAgdmFyIGludGVydmFsID0gUmVxdWVzdEludGVydmFsKFNSX1JFTU9WQUxfREVMQVksIGFwcGx5KHRvZ2dsZSwgZmFsc2UpKTtcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgZGlzYWJsZSghQ29tcG9uZW50czIuQXV0b3BsYXkuaXNQYXVzZWQoKSk7XG4gICAgICBzZXRBdHRyaWJ1dGUodHJhY2ssIEFSSUFfQVRPTUlDLCB0cnVlKTtcbiAgICAgIHNyLnRleHRDb250ZW50ID0gXCJcXHUyMDI2XCI7XG4gICAgICBvbihFVkVOVF9BVVRPUExBWV9QTEFZLCBhcHBseShkaXNhYmxlLCB0cnVlKSk7XG4gICAgICBvbihFVkVOVF9BVVRPUExBWV9QQVVTRSwgYXBwbHkoZGlzYWJsZSwgZmFsc2UpKTtcbiAgICAgIG9uKFtFVkVOVF9NT1ZFRCwgRVZFTlRfU0NST0xMRURdLCBhcHBseSh0b2dnbGUsIHRydWUpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGUoYWN0aXZlKSB7XG4gICAgc2V0QXR0cmlidXRlKHRyYWNrLCBBUklBX0JVU1ksIGFjdGl2ZSk7XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBhcHBlbmQodHJhY2ssIHNyKTtcbiAgICAgIGludGVydmFsLnN0YXJ0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZShzcik7XG4gICAgICBpbnRlcnZhbC5jYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHJlbW92ZUF0dHJpYnV0ZSh0cmFjaywgW0FSSUFfTElWRSwgQVJJQV9BVE9NSUMsIEFSSUFfQlVTWV0pO1xuICAgIHJlbW92ZShzcik7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlKGRpc2FibGVkKSB7XG4gICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgIHNldEF0dHJpYnV0ZSh0cmFjaywgQVJJQV9MSVZFLCBkaXNhYmxlZCA/IFwib2ZmXCIgOiBcInBvbGl0ZVwiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1vdW50OiBtb3VudCxcbiAgICBkaXNhYmxlOiBkaXNhYmxlLFxuICAgIGRlc3Ryb3k6IGRlc3Ryb3lcbiAgfTtcbn1cblxudmFyIENvbXBvbmVudENvbnN0cnVjdG9ycyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBNZWRpYTogTWVkaWEsXG4gIERpcmVjdGlvbjogRGlyZWN0aW9uLFxuICBFbGVtZW50czogRWxlbWVudHMsXG4gIFNsaWRlczogU2xpZGVzLFxuICBMYXlvdXQ6IExheW91dCxcbiAgQ2xvbmVzOiBDbG9uZXMsXG4gIE1vdmU6IE1vdmUsXG4gIENvbnRyb2xsZXI6IENvbnRyb2xsZXIsXG4gIEFycm93czogQXJyb3dzLFxuICBBdXRvcGxheTogQXV0b3BsYXksXG4gIENvdmVyOiBDb3ZlcixcbiAgU2Nyb2xsOiBTY3JvbGwsXG4gIERyYWc6IERyYWcsXG4gIEtleWJvYXJkOiBLZXlib2FyZCxcbiAgTGF6eUxvYWQ6IExhenlMb2FkLFxuICBQYWdpbmF0aW9uOiBQYWdpbmF0aW9uLFxuICBTeW5jOiBTeW5jLFxuICBXaGVlbDogV2hlZWwsXG4gIExpdmU6IExpdmVcbn0pO1xudmFyIEkxOE4gPSB7XG4gIHByZXY6IFwiUHJldmlvdXMgc2xpZGVcIixcbiAgbmV4dDogXCJOZXh0IHNsaWRlXCIsXG4gIGZpcnN0OiBcIkdvIHRvIGZpcnN0IHNsaWRlXCIsXG4gIGxhc3Q6IFwiR28gdG8gbGFzdCBzbGlkZVwiLFxuICBzbGlkZVg6IFwiR28gdG8gc2xpZGUgJXNcIixcbiAgcGFnZVg6IFwiR28gdG8gcGFnZSAlc1wiLFxuICBwbGF5OiBcIlN0YXJ0IGF1dG9wbGF5XCIsXG4gIHBhdXNlOiBcIlBhdXNlIGF1dG9wbGF5XCIsXG4gIGNhcm91c2VsOiBcImNhcm91c2VsXCIsXG4gIHNsaWRlOiBcInNsaWRlXCIsXG4gIHNlbGVjdDogXCJTZWxlY3QgYSBzbGlkZSB0byBzaG93XCIsXG4gIHNsaWRlTGFiZWw6IFwiJXMgb2YgJXNcIlxufTtcbnZhciBERUZBVUxUUyA9IHtcbiAgdHlwZTogXCJzbGlkZVwiLFxuICByb2xlOiBcInJlZ2lvblwiLFxuICBzcGVlZDogNDAwLFxuICBwZXJQYWdlOiAxLFxuICBjbG9uZVN0YXR1czogdHJ1ZSxcbiAgYXJyb3dzOiB0cnVlLFxuICBwYWdpbmF0aW9uOiB0cnVlLFxuICBwYWdpbmF0aW9uS2V5Ym9hcmQ6IHRydWUsXG4gIGludGVydmFsOiA1ZTMsXG4gIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgcGF1c2VPbkZvY3VzOiB0cnVlLFxuICByZXNldFByb2dyZXNzOiB0cnVlLFxuICBlYXNpbmc6IFwiY3ViaWMtYmV6aWVyKDAuMjUsIDEsIDAuNSwgMSlcIixcbiAgZHJhZzogdHJ1ZSxcbiAgZGlyZWN0aW9uOiBcImx0clwiLFxuICB0cmltU3BhY2U6IHRydWUsXG4gIGZvY3VzYWJsZU5vZGVzOiBcImEsIGJ1dHRvbiwgdGV4dGFyZWEsIGlucHV0LCBzZWxlY3QsIGlmcmFtZVwiLFxuICBsaXZlOiB0cnVlLFxuICBjbGFzc2VzOiBDTEFTU0VTLFxuICBpMThuOiBJMThOLFxuICByZWR1Y2VkTW90aW9uOiB7XG4gICAgc3BlZWQ6IDAsXG4gICAgcmV3aW5kU3BlZWQ6IDAsXG4gICAgYXV0b3BsYXk6IFwicGF1c2VcIlxuICB9XG59O1xuXG5mdW5jdGlvbiBGYWRlKFNwbGlkZTIsIENvbXBvbmVudHMyLCBvcHRpb25zKSB7XG4gIHZhciBTbGlkZXMgPSBDb21wb25lbnRzMi5TbGlkZXM7XG5cbiAgZnVuY3Rpb24gbW91bnQoKSB7XG4gICAgRXZlbnRJbnRlcmZhY2UoU3BsaWRlMikub24oW0VWRU5UX01PVU5URUQsIEVWRU5UX1JFRlJFU0hdLCBpbml0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgU2xpZGVzLmZvckVhY2goZnVuY3Rpb24gKFNsaWRlKSB7XG4gICAgICBTbGlkZS5zdHlsZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZVgoLVwiICsgMTAwICogU2xpZGUuaW5kZXggKyBcIiUpXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnQoaW5kZXgsIGRvbmUpIHtcbiAgICBTbGlkZXMuc3R5bGUoXCJ0cmFuc2l0aW9uXCIsIFwib3BhY2l0eSBcIiArIG9wdGlvbnMuc3BlZWQgKyBcIm1zIFwiICsgb3B0aW9ucy5lYXNpbmcpO1xuICAgIG5leHRUaWNrKGRvbmUpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgc3RhcnQ6IHN0YXJ0LFxuICAgIGNhbmNlbDogbm9vcFxuICB9O1xufVxuXG5mdW5jdGlvbiBTbGlkZShTcGxpZGUyLCBDb21wb25lbnRzMiwgb3B0aW9ucykge1xuICB2YXIgTW92ZSA9IENvbXBvbmVudHMyLk1vdmUsXG4gICAgICBDb250cm9sbGVyID0gQ29tcG9uZW50czIuQ29udHJvbGxlcixcbiAgICAgIFNjcm9sbCA9IENvbXBvbmVudHMyLlNjcm9sbDtcbiAgdmFyIGxpc3QgPSBDb21wb25lbnRzMi5FbGVtZW50cy5saXN0O1xuICB2YXIgdHJhbnNpdGlvbiA9IGFwcGx5KHN0eWxlLCBsaXN0LCBcInRyYW5zaXRpb25cIik7XG4gIHZhciBlbmRDYWxsYmFjaztcblxuICBmdW5jdGlvbiBtb3VudCgpIHtcbiAgICBFdmVudEludGVyZmFjZShTcGxpZGUyKS5iaW5kKGxpc3QsIFwidHJhbnNpdGlvbmVuZFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBsaXN0ICYmIGVuZENhbGxiYWNrKSB7XG4gICAgICAgIGNhbmNlbCgpO1xuICAgICAgICBlbmRDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnQoaW5kZXgsIGRvbmUpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSBNb3ZlLnRvUG9zaXRpb24oaW5kZXgsIHRydWUpO1xuICAgIHZhciBwb3NpdGlvbiA9IE1vdmUuZ2V0UG9zaXRpb24oKTtcbiAgICB2YXIgc3BlZWQgPSBnZXRTcGVlZChpbmRleCk7XG5cbiAgICBpZiAoYWJzKGRlc3RpbmF0aW9uIC0gcG9zaXRpb24pID49IDEgJiYgc3BlZWQgPj0gMSkge1xuICAgICAgaWYgKG9wdGlvbnMudXNlU2Nyb2xsKSB7XG4gICAgICAgIFNjcm9sbC5zY3JvbGwoZGVzdGluYXRpb24sIHNwZWVkLCBmYWxzZSwgZG9uZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmFuc2l0aW9uKFwidHJhbnNmb3JtIFwiICsgc3BlZWQgKyBcIm1zIFwiICsgb3B0aW9ucy5lYXNpbmcpO1xuICAgICAgICBNb3ZlLnRyYW5zbGF0ZShkZXN0aW5hdGlvbiwgdHJ1ZSk7XG4gICAgICAgIGVuZENhbGxiYWNrID0gZG9uZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgTW92ZS5qdW1wKGluZGV4KTtcbiAgICAgIGRvbmUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgdHJhbnNpdGlvbihcIlwiKTtcbiAgICBTY3JvbGwuY2FuY2VsKCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTcGVlZChpbmRleCkge1xuICAgIHZhciByZXdpbmRTcGVlZCA9IG9wdGlvbnMucmV3aW5kU3BlZWQ7XG5cbiAgICBpZiAoU3BsaWRlMi5pcyhTTElERSkgJiYgcmV3aW5kU3BlZWQpIHtcbiAgICAgIHZhciBwcmV2ID0gQ29udHJvbGxlci5nZXRJbmRleCh0cnVlKTtcbiAgICAgIHZhciBlbmQgPSBDb250cm9sbGVyLmdldEVuZCgpO1xuXG4gICAgICBpZiAocHJldiA9PT0gMCAmJiBpbmRleCA+PSBlbmQgfHwgcHJldiA+PSBlbmQgJiYgaW5kZXggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJld2luZFNwZWVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zLnNwZWVkO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtb3VudDogbW91bnQsXG4gICAgc3RhcnQ6IHN0YXJ0LFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59XG5cbnZhciBfU3BsaWRlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gX1NwbGlkZSh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmV2ZW50ID0gRXZlbnRJbnRlcmZhY2UoKTtcbiAgICB0aGlzLkNvbXBvbmVudHMgPSB7fTtcbiAgICB0aGlzLnN0YXRlID0gU3RhdGUoQ1JFQVRFRCk7XG4gICAgdGhpcy5zcGxpZGVzID0gW107XG4gICAgdGhpcy5fbyA9IHt9O1xuICAgIHRoaXMuX0UgPSB7fTtcbiAgICB2YXIgcm9vdCA9IGlzU3RyaW5nKHRhcmdldCkgPyBxdWVyeShkb2N1bWVudCwgdGFyZ2V0KSA6IHRhcmdldDtcbiAgICBhc3NlcnQocm9vdCwgcm9vdCArIFwiIGlzIGludmFsaWQuXCIpO1xuICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgb3B0aW9ucyA9IG1lcmdlKHtcbiAgICAgIGxhYmVsOiBnZXRBdHRyaWJ1dGUocm9vdCwgQVJJQV9MQUJFTCkgfHwgXCJcIixcbiAgICAgIGxhYmVsbGVkYnk6IGdldEF0dHJpYnV0ZShyb290LCBBUklBX0xBQkVMTEVEQlkpIHx8IFwiXCJcbiAgICB9LCBERUZBVUxUUywgX1NwbGlkZS5kZWZhdWx0cywgb3B0aW9ucyB8fCB7fSk7XG5cbiAgICB0cnkge1xuICAgICAgbWVyZ2Uob3B0aW9ucywgSlNPTi5wYXJzZShnZXRBdHRyaWJ1dGUocm9vdCwgREFUQV9BVFRSSUJVVEUpKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYXNzZXJ0KGZhbHNlLCBcIkludmFsaWQgSlNPTlwiKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vID0gT2JqZWN0LmNyZWF0ZShtZXJnZSh7fSwgb3B0aW9ucykpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IF9TcGxpZGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5tb3VudCA9IGZ1bmN0aW9uIG1vdW50KEV4dGVuc2lvbnMsIFRyYW5zaXRpb24pIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgQ29tcG9uZW50czIgPSB0aGlzLkNvbXBvbmVudHM7XG4gICAgYXNzZXJ0KHN0YXRlLmlzKFtDUkVBVEVELCBERVNUUk9ZRURdKSwgXCJBbHJlYWR5IG1vdW50ZWQhXCIpO1xuICAgIHN0YXRlLnNldChDUkVBVEVEKTtcbiAgICB0aGlzLl9DID0gQ29tcG9uZW50czI7XG4gICAgdGhpcy5fVCA9IFRyYW5zaXRpb24gfHwgdGhpcy5fVCB8fCAodGhpcy5pcyhGQURFKSA/IEZhZGUgOiBTbGlkZSk7XG4gICAgdGhpcy5fRSA9IEV4dGVuc2lvbnMgfHwgdGhpcy5fRTtcbiAgICB2YXIgQ29uc3RydWN0b3JzID0gYXNzaWduKHt9LCBDb21wb25lbnRDb25zdHJ1Y3RvcnMsIHRoaXMuX0UsIHtcbiAgICAgIFRyYW5zaXRpb246IHRoaXMuX1RcbiAgICB9KTtcbiAgICBmb3JPd24oQ29uc3RydWN0b3JzLCBmdW5jdGlvbiAoQ29tcG9uZW50LCBrZXkpIHtcbiAgICAgIHZhciBjb21wb25lbnQgPSBDb21wb25lbnQoX3RoaXMsIENvbXBvbmVudHMyLCBfdGhpcy5fbyk7XG4gICAgICBDb21wb25lbnRzMltrZXldID0gY29tcG9uZW50O1xuICAgICAgY29tcG9uZW50LnNldHVwICYmIGNvbXBvbmVudC5zZXR1cCgpO1xuICAgIH0pO1xuICAgIGZvck93bihDb21wb25lbnRzMiwgZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgICAgY29tcG9uZW50Lm1vdW50ICYmIGNvbXBvbmVudC5tb3VudCgpO1xuICAgIH0pO1xuICAgIHRoaXMuZW1pdChFVkVOVF9NT1VOVEVEKTtcbiAgICBhZGRDbGFzcyh0aGlzLnJvb3QsIENMQVNTX0lOSVRJQUxJWkVEKTtcbiAgICBzdGF0ZS5zZXQoSURMRSk7XG4gICAgdGhpcy5lbWl0KEVWRU5UX1JFQURZKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uc3luYyA9IGZ1bmN0aW9uIHN5bmMoc3BsaWRlKSB7XG4gICAgdGhpcy5zcGxpZGVzLnB1c2goe1xuICAgICAgc3BsaWRlOiBzcGxpZGVcbiAgICB9KTtcbiAgICBzcGxpZGUuc3BsaWRlcy5wdXNoKHtcbiAgICAgIHNwbGlkZTogdGhpcyxcbiAgICAgIGlzUGFyZW50OiB0cnVlXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5pcyhJRExFKSkge1xuICAgICAgdGhpcy5fQy5TeW5jLnJlbW91bnQoKTtcblxuICAgICAgc3BsaWRlLkNvbXBvbmVudHMuU3luYy5yZW1vdW50KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmdvID0gZnVuY3Rpb24gZ28oY29udHJvbCkge1xuICAgIHRoaXMuX0MuQ29udHJvbGxlci5nbyhjb250cm9sKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50cywgY2FsbGJhY2spIHtcbiAgICB0aGlzLmV2ZW50Lm9uKGV2ZW50cywgY2FsbGJhY2spO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5vZmYgPSBmdW5jdGlvbiBvZmYoZXZlbnRzKSB7XG4gICAgdGhpcy5ldmVudC5vZmYoZXZlbnRzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uZW1pdCA9IGZ1bmN0aW9uIGVtaXQoZXZlbnQpIHtcbiAgICB2YXIgX3RoaXMkZXZlbnQ7XG5cbiAgICAoX3RoaXMkZXZlbnQgPSB0aGlzLmV2ZW50KS5lbWl0LmFwcGx5KF90aGlzJGV2ZW50LCBbZXZlbnRdLmNvbmNhdChzbGljZShhcmd1bWVudHMsIDEpKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKHNsaWRlcywgaW5kZXgpIHtcbiAgICB0aGlzLl9DLlNsaWRlcy5hZGQoc2xpZGVzLCBpbmRleCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKG1hdGNoZXIpIHtcbiAgICB0aGlzLl9DLlNsaWRlcy5yZW1vdmUobWF0Y2hlcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uaXMgPSBmdW5jdGlvbiBpcyh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMuX28udHlwZSA9PT0gdHlwZTtcbiAgfTtcblxuICBfcHJvdG8ucmVmcmVzaCA9IGZ1bmN0aW9uIHJlZnJlc2goKSB7XG4gICAgdGhpcy5lbWl0KEVWRU5UX1JFRlJFU0gpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveShjb21wbGV0ZWx5KSB7XG4gICAgaWYgKGNvbXBsZXRlbHkgPT09IHZvaWQgMCkge1xuICAgICAgY29tcGxldGVseSA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIGV2ZW50ID0gdGhpcy5ldmVudCxcbiAgICAgICAgc3RhdGUgPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKHN0YXRlLmlzKENSRUFURUQpKSB7XG4gICAgICBFdmVudEludGVyZmFjZSh0aGlzKS5vbihFVkVOVF9SRUFEWSwgdGhpcy5kZXN0cm95LmJpbmQodGhpcywgY29tcGxldGVseSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JPd24odGhpcy5fQywgZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQuZGVzdHJveSAmJiBjb21wb25lbnQuZGVzdHJveShjb21wbGV0ZWx5KTtcbiAgICAgIH0sIHRydWUpO1xuICAgICAgZXZlbnQuZW1pdChFVkVOVF9ERVNUUk9ZKTtcbiAgICAgIGV2ZW50LmRlc3Ryb3koKTtcbiAgICAgIGNvbXBsZXRlbHkgJiYgZW1wdHkodGhpcy5zcGxpZGVzKTtcbiAgICAgIHN0YXRlLnNldChERVNUUk9ZRUQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhfU3BsaWRlLCBbe1xuICAgIGtleTogXCJvcHRpb25zXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuX0MuTWVkaWEuc2V0KG9wdGlvbnMsIHRydWUsIHRydWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsZW5ndGhcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9DLlNsaWRlcy5nZXRMZW5ndGgodHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImluZGV4XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fQy5Db250cm9sbGVyLmdldEluZGV4KCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIF9TcGxpZGU7XG59KCk7XG5cbnZhciBTcGxpZGUgPSBfU3BsaWRlO1xuU3BsaWRlLmRlZmF1bHRzID0ge307XG5TcGxpZGUuU1RBVEVTID0gU1RBVEVTO1xudmFyIENMQVNTX1JFTkRFUkVEID0gXCJpcy1yZW5kZXJlZFwiO1xudmFyIFJFTkRFUkVSX0RFRkFVTFRfQ09ORklHID0ge1xuICBsaXN0VGFnOiBcInVsXCIsXG4gIHNsaWRlVGFnOiBcImxpXCJcbn07XG5cbnZhciBTdHlsZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0eWxlKGlkLCBvcHRpb25zKSB7XG4gICAgdGhpcy5zdHlsZXMgPSB7fTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHZhciBfcHJvdG8yID0gU3R5bGUucHJvdG90eXBlO1xuXG4gIF9wcm90bzIucnVsZSA9IGZ1bmN0aW9uIHJ1bGUoc2VsZWN0b3IsIHByb3AsIHZhbHVlLCBicmVha3BvaW50KSB7XG4gICAgYnJlYWtwb2ludCA9IGJyZWFrcG9pbnQgfHwgXCJkZWZhdWx0XCI7XG4gICAgdmFyIHNlbGVjdG9ycyA9IHRoaXMuc3R5bGVzW2JyZWFrcG9pbnRdID0gdGhpcy5zdHlsZXNbYnJlYWtwb2ludF0gfHwge307XG4gICAgdmFyIHN0eWxlcyA9IHNlbGVjdG9yc1tzZWxlY3Rvcl0gPSBzZWxlY3RvcnNbc2VsZWN0b3JdIHx8IHt9O1xuICAgIHN0eWxlc1twcm9wXSA9IHZhbHVlO1xuICB9O1xuXG4gIF9wcm90bzIuYnVpbGQgPSBmdW5jdGlvbiBidWlsZCgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBjc3MgPSBcIlwiO1xuXG4gICAgaWYgKHRoaXMuc3R5bGVzLmRlZmF1bHQpIHtcbiAgICAgIGNzcyArPSB0aGlzLmJ1aWxkU2VsZWN0b3JzKHRoaXMuc3R5bGVzLmRlZmF1bHQpO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRoaXMuc3R5bGVzKS5zb3J0KGZ1bmN0aW9uIChuLCBtKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLm9wdGlvbnMubWVkaWFRdWVyeSA9PT0gXCJtaW5cIiA/ICtuIC0gK20gOiArbSAtICtuO1xuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGJyZWFrcG9pbnQpIHtcbiAgICAgIGlmIChicmVha3BvaW50ICE9PSBcImRlZmF1bHRcIikge1xuICAgICAgICBjc3MgKz0gXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBcIiArIGJyZWFrcG9pbnQgKyBcInB4KSB7XCI7XG4gICAgICAgIGNzcyArPSBfdGhpczIuYnVpbGRTZWxlY3RvcnMoX3RoaXMyLnN0eWxlc1ticmVha3BvaW50XSk7XG4gICAgICAgIGNzcyArPSBcIn1cIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY3NzO1xuICB9O1xuXG4gIF9wcm90bzIuYnVpbGRTZWxlY3RvcnMgPSBmdW5jdGlvbiBidWlsZFNlbGVjdG9ycyhzZWxlY3RvcnMpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBjc3MgPSBcIlwiO1xuICAgIGZvck93bihzZWxlY3RvcnMsIGZ1bmN0aW9uIChzdHlsZXMsIHNlbGVjdG9yKSB7XG4gICAgICBzZWxlY3RvciA9IChcIiNcIiArIF90aGlzMy5pZCArIFwiIFwiICsgc2VsZWN0b3IpLnRyaW0oKTtcbiAgICAgIGNzcyArPSBzZWxlY3RvciArIFwiIHtcIjtcbiAgICAgIGZvck93bihzdHlsZXMsIGZ1bmN0aW9uICh2YWx1ZSwgcHJvcCkge1xuICAgICAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDApIHtcbiAgICAgICAgICBjc3MgKz0gcHJvcCArIFwiOiBcIiArIHZhbHVlICsgXCI7XCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY3NzICs9IFwifVwiO1xuICAgIH0pO1xuICAgIHJldHVybiBjc3M7XG4gIH07XG5cbiAgcmV0dXJuIFN0eWxlO1xufSgpO1xuXG52YXIgU3BsaWRlUmVuZGVyZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTcGxpZGVSZW5kZXJlcihjb250ZW50cywgb3B0aW9ucywgY29uZmlnLCBkZWZhdWx0cykge1xuICAgIHRoaXMuc2xpZGVzID0gW107XG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gICAgdGhpcy5icmVha3BvaW50cyA9IFtdO1xuICAgIG1lcmdlKERFRkFVTFRTLCBkZWZhdWx0cyB8fCB7fSk7XG4gICAgbWVyZ2UobWVyZ2UodGhpcy5vcHRpb25zLCBERUZBVUxUUyksIG9wdGlvbnMgfHwge30pO1xuICAgIHRoaXMuY29udGVudHMgPSBjb250ZW50cztcbiAgICB0aGlzLmNvbmZpZyA9IGFzc2lnbih7fSwgUkVOREVSRVJfREVGQVVMVF9DT05GSUcsIGNvbmZpZyB8fCB7fSk7XG4gICAgdGhpcy5pZCA9IHRoaXMuY29uZmlnLmlkIHx8IHVuaXF1ZUlkKFwic3BsaWRlXCIpO1xuICAgIHRoaXMuU3R5bGUgPSBuZXcgU3R5bGUodGhpcy5pZCwgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLkRpcmVjdGlvbiA9IERpcmVjdGlvbihudWxsLCBudWxsLCB0aGlzLm9wdGlvbnMpO1xuICAgIGFzc2VydCh0aGlzLmNvbnRlbnRzLmxlbmd0aCwgXCJQcm92aWRlIGF0IGxlYXN0IDEgY29udGVudC5cIik7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBTcGxpZGVSZW5kZXJlci5jbGVhbiA9IGZ1bmN0aW9uIGNsZWFuKHNwbGlkZSkge1xuICAgIHZhciBfRXZlbnRJbnRlcmZhY2UxNCA9IEV2ZW50SW50ZXJmYWNlKHNwbGlkZSksXG4gICAgICAgIG9uID0gX0V2ZW50SW50ZXJmYWNlMTQub247XG5cbiAgICB2YXIgcm9vdCA9IHNwbGlkZS5yb290O1xuICAgIHZhciBjbG9uZXMgPSBxdWVyeUFsbChyb290LCBcIi5cIiArIENMQVNTX0NMT05FKTtcbiAgICBvbihFVkVOVF9NT1VOVEVELCBmdW5jdGlvbiAoKSB7XG4gICAgICByZW1vdmUoY2hpbGQocm9vdCwgXCJzdHlsZVwiKSk7XG4gICAgfSk7XG4gICAgcmVtb3ZlKGNsb25lcyk7XG4gIH07XG5cbiAgdmFyIF9wcm90bzMgPSBTcGxpZGVSZW5kZXJlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvMy5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB0aGlzLnBhcnNlQnJlYWtwb2ludHMoKTtcbiAgICB0aGlzLmluaXRTbGlkZXMoKTtcbiAgICB0aGlzLnJlZ2lzdGVyUm9vdFN0eWxlcygpO1xuICAgIHRoaXMucmVnaXN0ZXJUcmFja1N0eWxlcygpO1xuICAgIHRoaXMucmVnaXN0ZXJTbGlkZVN0eWxlcygpO1xuICAgIHRoaXMucmVnaXN0ZXJMaXN0U3R5bGVzKCk7XG4gIH07XG5cbiAgX3Byb3RvMy5pbml0U2xpZGVzID0gZnVuY3Rpb24gaW5pdFNsaWRlcygpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHB1c2godGhpcy5zbGlkZXMsIHRoaXMuY29udGVudHMubWFwKGZ1bmN0aW9uIChjb250ZW50LCBpbmRleCkge1xuICAgICAgY29udGVudCA9IGlzU3RyaW5nKGNvbnRlbnQpID8ge1xuICAgICAgICBodG1sOiBjb250ZW50XG4gICAgICB9IDogY29udGVudDtcbiAgICAgIGNvbnRlbnQuc3R5bGVzID0gY29udGVudC5zdHlsZXMgfHwge307XG4gICAgICBjb250ZW50LmF0dHJzID0gY29udGVudC5hdHRycyB8fCB7fTtcblxuICAgICAgX3RoaXM0LmNvdmVyKGNvbnRlbnQpO1xuXG4gICAgICB2YXIgY2xhc3NlcyA9IF90aGlzNC5vcHRpb25zLmNsYXNzZXMuc2xpZGUgKyBcIiBcIiArIChpbmRleCA9PT0gMCA/IENMQVNTX0FDVElWRSA6IFwiXCIpO1xuICAgICAgYXNzaWduKGNvbnRlbnQuYXR0cnMsIHtcbiAgICAgICAgY2xhc3M6IChjbGFzc2VzICsgXCIgXCIgKyAoY29udGVudC5hdHRycy5jbGFzcyB8fCBcIlwiKSkudHJpbSgpLFxuICAgICAgICBzdHlsZTogX3RoaXM0LmJ1aWxkU3R5bGVzKGNvbnRlbnQuc3R5bGVzKVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KSk7XG5cbiAgICBpZiAodGhpcy5pc0xvb3AoKSkge1xuICAgICAgdGhpcy5nZW5lcmF0ZUNsb25lcyh0aGlzLnNsaWRlcyk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzMucmVnaXN0ZXJSb290U3R5bGVzID0gZnVuY3Rpb24gcmVnaXN0ZXJSb290U3R5bGVzKCkge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgdGhpcy5icmVha3BvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIHdpZHRoID0gX3JlZjJbMF0sXG4gICAgICAgICAgb3B0aW9ucyA9IF9yZWYyWzFdO1xuXG4gICAgICBfdGhpczUuU3R5bGUucnVsZShcIiBcIiwgXCJtYXgtd2lkdGhcIiwgdW5pdChvcHRpb25zLndpZHRoKSwgd2lkdGgpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90bzMucmVnaXN0ZXJUcmFja1N0eWxlcyA9IGZ1bmN0aW9uIHJlZ2lzdGVyVHJhY2tTdHlsZXMoKSB7XG4gICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICB2YXIgU3R5bGUyID0gdGhpcy5TdHlsZTtcbiAgICB2YXIgc2VsZWN0b3IgPSBcIi5cIiArIENMQVNTX1RSQUNLO1xuICAgIHRoaXMuYnJlYWtwb2ludHMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgIHZhciB3aWR0aCA9IF9yZWYzWzBdLFxuICAgICAgICAgIG9wdGlvbnMgPSBfcmVmM1sxXTtcbiAgICAgIFN0eWxlMi5ydWxlKHNlbGVjdG9yLCBfdGhpczYucmVzb2x2ZShcInBhZGRpbmdMZWZ0XCIpLCBfdGhpczYuY3NzUGFkZGluZyhvcHRpb25zLCBmYWxzZSksIHdpZHRoKTtcbiAgICAgIFN0eWxlMi5ydWxlKHNlbGVjdG9yLCBfdGhpczYucmVzb2x2ZShcInBhZGRpbmdSaWdodFwiKSwgX3RoaXM2LmNzc1BhZGRpbmcob3B0aW9ucywgdHJ1ZSksIHdpZHRoKTtcbiAgICAgIFN0eWxlMi5ydWxlKHNlbGVjdG9yLCBcImhlaWdodFwiLCBfdGhpczYuY3NzVHJhY2tIZWlnaHQob3B0aW9ucyksIHdpZHRoKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8zLnJlZ2lzdGVyTGlzdFN0eWxlcyA9IGZ1bmN0aW9uIHJlZ2lzdGVyTGlzdFN0eWxlcygpIHtcbiAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgIHZhciBTdHlsZTIgPSB0aGlzLlN0eWxlO1xuICAgIHZhciBzZWxlY3RvciA9IFwiLlwiICsgQ0xBU1NfTElTVDtcbiAgICB0aGlzLmJyZWFrcG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKF9yZWY0KSB7XG4gICAgICB2YXIgd2lkdGggPSBfcmVmNFswXSxcbiAgICAgICAgICBvcHRpb25zID0gX3JlZjRbMV07XG4gICAgICBTdHlsZTIucnVsZShzZWxlY3RvciwgXCJ0cmFuc2Zvcm1cIiwgX3RoaXM3LmJ1aWxkVHJhbnNsYXRlKG9wdGlvbnMpLCB3aWR0aCk7XG5cbiAgICAgIGlmICghX3RoaXM3LmNzc1NsaWRlSGVpZ2h0KG9wdGlvbnMpKSB7XG4gICAgICAgIFN0eWxlMi5ydWxlKHNlbGVjdG9yLCBcImFzcGVjdC1yYXRpb1wiLCBfdGhpczcuY3NzQXNwZWN0UmF0aW8ob3B0aW9ucyksIHdpZHRoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8zLnJlZ2lzdGVyU2xpZGVTdHlsZXMgPSBmdW5jdGlvbiByZWdpc3RlclNsaWRlU3R5bGVzKCkge1xuICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgdmFyIFN0eWxlMiA9IHRoaXMuU3R5bGU7XG4gICAgdmFyIHNlbGVjdG9yID0gXCIuXCIgKyBDTEFTU19TTElERTtcbiAgICB0aGlzLmJyZWFrcG9pbnRzLmZvckVhY2goZnVuY3Rpb24gKF9yZWY1KSB7XG4gICAgICB2YXIgd2lkdGggPSBfcmVmNVswXSxcbiAgICAgICAgICBvcHRpb25zID0gX3JlZjVbMV07XG4gICAgICBTdHlsZTIucnVsZShzZWxlY3RvciwgXCJ3aWR0aFwiLCBfdGhpczguY3NzU2xpZGVXaWR0aChvcHRpb25zKSwgd2lkdGgpO1xuICAgICAgU3R5bGUyLnJ1bGUoc2VsZWN0b3IsIFwiaGVpZ2h0XCIsIF90aGlzOC5jc3NTbGlkZUhlaWdodChvcHRpb25zKSB8fCBcIjEwMCVcIiwgd2lkdGgpO1xuICAgICAgU3R5bGUyLnJ1bGUoc2VsZWN0b3IsIF90aGlzOC5yZXNvbHZlKFwibWFyZ2luUmlnaHRcIiksIHVuaXQob3B0aW9ucy5nYXApIHx8IFwiMHB4XCIsIHdpZHRoKTtcbiAgICAgIFN0eWxlMi5ydWxlKHNlbGVjdG9yICsgXCIgPiBpbWdcIiwgXCJkaXNwbGF5XCIsIG9wdGlvbnMuY292ZXIgPyBcIm5vbmVcIiA6IFwiaW5saW5lXCIsIHdpZHRoKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8zLmJ1aWxkVHJhbnNsYXRlID0gZnVuY3Rpb24gYnVpbGRUcmFuc2xhdGUob3B0aW9ucykge1xuICAgIHZhciBfdGhpcyREaXJlY3Rpb24gPSB0aGlzLkRpcmVjdGlvbixcbiAgICAgICAgcmVzb2x2ZSA9IF90aGlzJERpcmVjdGlvbi5yZXNvbHZlLFxuICAgICAgICBvcmllbnQgPSBfdGhpcyREaXJlY3Rpb24ub3JpZW50O1xuICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICB2YWx1ZXMucHVzaCh0aGlzLmNzc09mZnNldENsb25lcyhvcHRpb25zKSk7XG4gICAgdmFsdWVzLnB1c2godGhpcy5jc3NPZmZzZXRHYXBzKG9wdGlvbnMpKTtcblxuICAgIGlmICh0aGlzLmlzQ2VudGVyKG9wdGlvbnMpKSB7XG4gICAgICB2YWx1ZXMucHVzaCh0aGlzLmJ1aWxkQ3NzVmFsdWUob3JpZW50KC01MCksIFwiJVwiKSk7XG4gICAgICB2YWx1ZXMucHVzaC5hcHBseSh2YWx1ZXMsIHRoaXMuY3NzT2Zmc2V0Q2VudGVyKG9wdGlvbnMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzLmZpbHRlcihCb29sZWFuKS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gXCJ0cmFuc2xhdGVcIiArIHJlc29sdmUoXCJYXCIpICsgXCIoXCIgKyB2YWx1ZSArIFwiKVwiO1xuICAgIH0pLmpvaW4oXCIgXCIpO1xuICB9O1xuXG4gIF9wcm90bzMuY3NzT2Zmc2V0Q2xvbmVzID0gZnVuY3Rpb24gY3NzT2Zmc2V0Q2xvbmVzKG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXMkRGlyZWN0aW9uMiA9IHRoaXMuRGlyZWN0aW9uLFxuICAgICAgICByZXNvbHZlID0gX3RoaXMkRGlyZWN0aW9uMi5yZXNvbHZlLFxuICAgICAgICBvcmllbnQgPSBfdGhpcyREaXJlY3Rpb24yLm9yaWVudDtcbiAgICB2YXIgY2xvbmVDb3VudCA9IHRoaXMuZ2V0Q2xvbmVDb3VudCgpO1xuXG4gICAgaWYgKHRoaXMuaXNGaXhlZFdpZHRoKG9wdGlvbnMpKSB7XG4gICAgICB2YXIgX3RoaXMkcGFyc2VDc3NWYWx1ZSA9IHRoaXMucGFyc2VDc3NWYWx1ZShvcHRpb25zW3Jlc29sdmUoXCJmaXhlZFdpZHRoXCIpXSksXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRwYXJzZUNzc1ZhbHVlLnZhbHVlLFxuICAgICAgICAgIHVuaXQyID0gX3RoaXMkcGFyc2VDc3NWYWx1ZS51bml0O1xuXG4gICAgICByZXR1cm4gdGhpcy5idWlsZENzc1ZhbHVlKG9yaWVudCh2YWx1ZSkgKiBjbG9uZUNvdW50LCB1bml0Mik7XG4gICAgfVxuXG4gICAgdmFyIHBlcmNlbnQgPSAxMDAgKiBjbG9uZUNvdW50IC8gb3B0aW9ucy5wZXJQYWdlO1xuICAgIHJldHVybiBvcmllbnQocGVyY2VudCkgKyBcIiVcIjtcbiAgfTtcblxuICBfcHJvdG8zLmNzc09mZnNldENlbnRlciA9IGZ1bmN0aW9uIGNzc09mZnNldENlbnRlcihvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzJERpcmVjdGlvbjMgPSB0aGlzLkRpcmVjdGlvbixcbiAgICAgICAgcmVzb2x2ZSA9IF90aGlzJERpcmVjdGlvbjMucmVzb2x2ZSxcbiAgICAgICAgb3JpZW50ID0gX3RoaXMkRGlyZWN0aW9uMy5vcmllbnQ7XG5cbiAgICBpZiAodGhpcy5pc0ZpeGVkV2lkdGgob3B0aW9ucykpIHtcbiAgICAgIHZhciBfdGhpcyRwYXJzZUNzc1ZhbHVlMiA9IHRoaXMucGFyc2VDc3NWYWx1ZShvcHRpb25zW3Jlc29sdmUoXCJmaXhlZFdpZHRoXCIpXSksXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRwYXJzZUNzc1ZhbHVlMi52YWx1ZSxcbiAgICAgICAgICB1bml0MiA9IF90aGlzJHBhcnNlQ3NzVmFsdWUyLnVuaXQ7XG5cbiAgICAgIHJldHVybiBbdGhpcy5idWlsZENzc1ZhbHVlKG9yaWVudCh2YWx1ZSAvIDIpLCB1bml0MildO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICB2YXIgcGVyUGFnZSA9IG9wdGlvbnMucGVyUGFnZSxcbiAgICAgICAgZ2FwID0gb3B0aW9ucy5nYXA7XG4gICAgdmFsdWVzLnB1c2gob3JpZW50KDUwIC8gcGVyUGFnZSkgKyBcIiVcIik7XG5cbiAgICBpZiAoZ2FwKSB7XG4gICAgICB2YXIgX3RoaXMkcGFyc2VDc3NWYWx1ZTMgPSB0aGlzLnBhcnNlQ3NzVmFsdWUoZ2FwKSxcbiAgICAgICAgICBfdmFsdWUgPSBfdGhpcyRwYXJzZUNzc1ZhbHVlMy52YWx1ZSxcbiAgICAgICAgICBfdW5pdCA9IF90aGlzJHBhcnNlQ3NzVmFsdWUzLnVuaXQ7XG5cbiAgICAgIHZhciBnYXBPZmZzZXQgPSAoX3ZhbHVlIC8gcGVyUGFnZSAtIF92YWx1ZSkgLyAyO1xuICAgICAgdmFsdWVzLnB1c2godGhpcy5idWlsZENzc1ZhbHVlKG9yaWVudChnYXBPZmZzZXQpLCBfdW5pdCkpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH07XG5cbiAgX3Byb3RvMy5jc3NPZmZzZXRHYXBzID0gZnVuY3Rpb24gY3NzT2Zmc2V0R2FwcyhvcHRpb25zKSB7XG4gICAgdmFyIGNsb25lQ291bnQgPSB0aGlzLmdldENsb25lQ291bnQoKTtcblxuICAgIGlmIChjbG9uZUNvdW50ICYmIG9wdGlvbnMuZ2FwKSB7XG4gICAgICB2YXIgb3JpZW50ID0gdGhpcy5EaXJlY3Rpb24ub3JpZW50O1xuXG4gICAgICB2YXIgX3RoaXMkcGFyc2VDc3NWYWx1ZTQgPSB0aGlzLnBhcnNlQ3NzVmFsdWUob3B0aW9ucy5nYXApLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkcGFyc2VDc3NWYWx1ZTQudmFsdWUsXG4gICAgICAgICAgdW5pdDIgPSBfdGhpcyRwYXJzZUNzc1ZhbHVlNC51bml0O1xuXG4gICAgICBpZiAodGhpcy5pc0ZpeGVkV2lkdGgob3B0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRDc3NWYWx1ZShvcmllbnQodmFsdWUgKiBjbG9uZUNvdW50KSwgdW5pdDIpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGVyUGFnZSA9IG9wdGlvbnMucGVyUGFnZTtcbiAgICAgIHZhciBnYXBzID0gY2xvbmVDb3VudCAvIHBlclBhZ2U7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZENzc1ZhbHVlKG9yaWVudChnYXBzICogdmFsdWUpLCB1bml0Mik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiXCI7XG4gIH07XG5cbiAgX3Byb3RvMy5yZXNvbHZlID0gZnVuY3Rpb24gcmVzb2x2ZShwcm9wKSB7XG4gICAgcmV0dXJuIGNhbWVsVG9LZWJhYih0aGlzLkRpcmVjdGlvbi5yZXNvbHZlKHByb3ApKTtcbiAgfTtcblxuICBfcHJvdG8zLmNzc1BhZGRpbmcgPSBmdW5jdGlvbiBjc3NQYWRkaW5nKG9wdGlvbnMsIHJpZ2h0KSB7XG4gICAgdmFyIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmc7XG4gICAgdmFyIHByb3AgPSB0aGlzLkRpcmVjdGlvbi5yZXNvbHZlKHJpZ2h0ID8gXCJyaWdodFwiIDogXCJsZWZ0XCIsIHRydWUpO1xuICAgIHJldHVybiBwYWRkaW5nICYmIHVuaXQocGFkZGluZ1twcm9wXSB8fCAoaXNPYmplY3QocGFkZGluZykgPyAwIDogcGFkZGluZykpIHx8IFwiMHB4XCI7XG4gIH07XG5cbiAgX3Byb3RvMy5jc3NUcmFja0hlaWdodCA9IGZ1bmN0aW9uIGNzc1RyYWNrSGVpZ2h0KG9wdGlvbnMpIHtcbiAgICB2YXIgaGVpZ2h0ID0gXCJcIjtcblxuICAgIGlmICh0aGlzLmlzVmVydGljYWwoKSkge1xuICAgICAgaGVpZ2h0ID0gdGhpcy5jc3NIZWlnaHQob3B0aW9ucyk7XG4gICAgICBhc3NlcnQoaGVpZ2h0LCAnXCJoZWlnaHRcIiBpcyBtaXNzaW5nLicpO1xuICAgICAgaGVpZ2h0ID0gXCJjYWxjKFwiICsgaGVpZ2h0ICsgXCIgLSBcIiArIHRoaXMuY3NzUGFkZGluZyhvcHRpb25zLCBmYWxzZSkgKyBcIiAtIFwiICsgdGhpcy5jc3NQYWRkaW5nKG9wdGlvbnMsIHRydWUpICsgXCIpXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfTtcblxuICBfcHJvdG8zLmNzc0hlaWdodCA9IGZ1bmN0aW9uIGNzc0hlaWdodChvcHRpb25zKSB7XG4gICAgcmV0dXJuIHVuaXQob3B0aW9ucy5oZWlnaHQpO1xuICB9O1xuXG4gIF9wcm90bzMuY3NzU2xpZGVXaWR0aCA9IGZ1bmN0aW9uIGNzc1NsaWRlV2lkdGgob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zLmF1dG9XaWR0aCA/IFwiXCIgOiB1bml0KG9wdGlvbnMuZml4ZWRXaWR0aCkgfHwgKHRoaXMuaXNWZXJ0aWNhbCgpID8gXCJcIiA6IHRoaXMuY3NzU2xpZGVTaXplKG9wdGlvbnMpKTtcbiAgfTtcblxuICBfcHJvdG8zLmNzc1NsaWRlSGVpZ2h0ID0gZnVuY3Rpb24gY3NzU2xpZGVIZWlnaHQob3B0aW9ucykge1xuICAgIHJldHVybiB1bml0KG9wdGlvbnMuZml4ZWRIZWlnaHQpIHx8ICh0aGlzLmlzVmVydGljYWwoKSA/IG9wdGlvbnMuYXV0b0hlaWdodCA/IFwiXCIgOiB0aGlzLmNzc1NsaWRlU2l6ZShvcHRpb25zKSA6IHRoaXMuY3NzSGVpZ2h0KG9wdGlvbnMpKTtcbiAgfTtcblxuICBfcHJvdG8zLmNzc1NsaWRlU2l6ZSA9IGZ1bmN0aW9uIGNzc1NsaWRlU2l6ZShvcHRpb25zKSB7XG4gICAgdmFyIGdhcCA9IHVuaXQob3B0aW9ucy5nYXApO1xuICAgIHJldHVybiBcImNhbGMoKDEwMCVcIiArIChnYXAgJiYgXCIgKyBcIiArIGdhcCkgKyBcIikvXCIgKyAob3B0aW9ucy5wZXJQYWdlIHx8IDEpICsgKGdhcCAmJiBcIiAtIFwiICsgZ2FwKSArIFwiKVwiO1xuICB9O1xuXG4gIF9wcm90bzMuY3NzQXNwZWN0UmF0aW8gPSBmdW5jdGlvbiBjc3NBc3BlY3RSYXRpbyhvcHRpb25zKSB7XG4gICAgdmFyIGhlaWdodFJhdGlvID0gb3B0aW9ucy5oZWlnaHRSYXRpbztcbiAgICByZXR1cm4gaGVpZ2h0UmF0aW8gPyBcIlwiICsgMSAvIGhlaWdodFJhdGlvIDogXCJcIjtcbiAgfTtcblxuICBfcHJvdG8zLmJ1aWxkQ3NzVmFsdWUgPSBmdW5jdGlvbiBidWlsZENzc1ZhbHVlKHZhbHVlLCB1bml0Mikge1xuICAgIHJldHVybiBcIlwiICsgdmFsdWUgKyB1bml0MjtcbiAgfTtcblxuICBfcHJvdG8zLnBhcnNlQ3NzVmFsdWUgPSBmdW5jdGlvbiBwYXJzZUNzc1ZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgdmFyIG51bWJlciA9IHBhcnNlRmxvYXQodmFsdWUpIHx8IDA7XG4gICAgICB2YXIgdW5pdDIgPSB2YWx1ZS5yZXBsYWNlKC9cXGQqKFxcLlxcZCopPy8sIFwiXCIpIHx8IFwicHhcIjtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBudW1iZXIsXG4gICAgICAgIHVuaXQ6IHVuaXQyXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICB1bml0OiBcInB4XCJcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90bzMucGFyc2VCcmVha3BvaW50cyA9IGZ1bmN0aW9uIHBhcnNlQnJlYWtwb2ludHMoKSB7XG4gICAgdmFyIF90aGlzOSA9IHRoaXM7XG5cbiAgICB2YXIgYnJlYWtwb2ludHMgPSB0aGlzLm9wdGlvbnMuYnJlYWtwb2ludHM7XG4gICAgdGhpcy5icmVha3BvaW50cy5wdXNoKFtcImRlZmF1bHRcIiwgdGhpcy5vcHRpb25zXSk7XG5cbiAgICBpZiAoYnJlYWtwb2ludHMpIHtcbiAgICAgIGZvck93bihicmVha3BvaW50cywgZnVuY3Rpb24gKG9wdGlvbnMsIHdpZHRoKSB7XG4gICAgICAgIF90aGlzOS5icmVha3BvaW50cy5wdXNoKFt3aWR0aCwgbWVyZ2UobWVyZ2Uoe30sIF90aGlzOS5vcHRpb25zKSwgb3B0aW9ucyldKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8zLmlzRml4ZWRXaWR0aCA9IGZ1bmN0aW9uIGlzRml4ZWRXaWR0aChvcHRpb25zKSB7XG4gICAgcmV0dXJuICEhb3B0aW9uc1t0aGlzLkRpcmVjdGlvbi5yZXNvbHZlKFwiZml4ZWRXaWR0aFwiKV07XG4gIH07XG5cbiAgX3Byb3RvMy5pc0xvb3AgPSBmdW5jdGlvbiBpc0xvb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy50eXBlID09PSBMT09QO1xuICB9O1xuXG4gIF9wcm90bzMuaXNDZW50ZXIgPSBmdW5jdGlvbiBpc0NlbnRlcihvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuZm9jdXMgPT09IFwiY2VudGVyXCIpIHtcbiAgICAgIGlmICh0aGlzLmlzTG9vcCgpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnR5cGUgPT09IFNMSURFKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5vcHRpb25zLnRyaW1TcGFjZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvMy5pc1ZlcnRpY2FsID0gZnVuY3Rpb24gaXNWZXJ0aWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRpcmVjdGlvbiA9PT0gVFRCO1xuICB9O1xuXG4gIF9wcm90bzMuYnVpbGRDbGFzc2VzID0gZnVuY3Rpb24gYnVpbGRDbGFzc2VzKCkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIHJldHVybiBbQ0xBU1NfUk9PVCwgQ0xBU1NfUk9PVCArIFwiLS1cIiArIG9wdGlvbnMudHlwZSwgQ0xBU1NfUk9PVCArIFwiLS1cIiArIG9wdGlvbnMuZGlyZWN0aW9uLCBvcHRpb25zLmRyYWcgJiYgQ0xBU1NfUk9PVCArIFwiLS1kcmFnZ2FibGVcIiwgb3B0aW9ucy5pc05hdmlnYXRpb24gJiYgQ0xBU1NfUk9PVCArIFwiLS1uYXZcIiwgQ0xBU1NfQUNUSVZFLCAhdGhpcy5jb25maWcuaGlkZGVuICYmIENMQVNTX1JFTkRFUkVEXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIik7XG4gIH07XG5cbiAgX3Byb3RvMy5idWlsZEF0dHJzID0gZnVuY3Rpb24gYnVpbGRBdHRycyhhdHRycykge1xuICAgIHZhciBhdHRyID0gXCJcIjtcbiAgICBmb3JPd24oYXR0cnMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICBhdHRyICs9IHZhbHVlID8gXCIgXCIgKyBjYW1lbFRvS2ViYWIoa2V5KSArIFwiPVxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIgOiBcIlwiO1xuICAgIH0pO1xuICAgIHJldHVybiBhdHRyLnRyaW0oKTtcbiAgfTtcblxuICBfcHJvdG8zLmJ1aWxkU3R5bGVzID0gZnVuY3Rpb24gYnVpbGRTdHlsZXMoc3R5bGVzKSB7XG4gICAgdmFyIHN0eWxlID0gXCJcIjtcbiAgICBmb3JPd24oc3R5bGVzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgc3R5bGUgKz0gXCIgXCIgKyBjYW1lbFRvS2ViYWIoa2V5KSArIFwiOlwiICsgdmFsdWUgKyBcIjtcIjtcbiAgICB9KTtcbiAgICByZXR1cm4gc3R5bGUudHJpbSgpO1xuICB9O1xuXG4gIF9wcm90bzMucmVuZGVyU2xpZGVzID0gZnVuY3Rpb24gcmVuZGVyU2xpZGVzKCkge1xuICAgIHZhciBfdGhpczEwID0gdGhpcztcblxuICAgIHZhciB0YWcgPSB0aGlzLmNvbmZpZy5zbGlkZVRhZztcbiAgICByZXR1cm4gdGhpcy5zbGlkZXMubWFwKGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICByZXR1cm4gXCI8XCIgKyB0YWcgKyBcIiBcIiArIF90aGlzMTAuYnVpbGRBdHRycyhjb250ZW50LmF0dHJzKSArIFwiPlwiICsgKGNvbnRlbnQuaHRtbCB8fCBcIlwiKSArIFwiPC9cIiArIHRhZyArIFwiPlwiO1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgX3Byb3RvMy5jb3ZlciA9IGZ1bmN0aW9uIGNvdmVyKGNvbnRlbnQpIHtcbiAgICB2YXIgc3R5bGVzID0gY29udGVudC5zdHlsZXMsXG4gICAgICAgIF9jb250ZW50JGh0bWwgPSBjb250ZW50Lmh0bWwsXG4gICAgICAgIGh0bWwgPSBfY29udGVudCRodG1sID09PSB2b2lkIDAgPyBcIlwiIDogX2NvbnRlbnQkaHRtbDtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuY292ZXIgJiYgIXRoaXMub3B0aW9ucy5sYXp5TG9hZCkge1xuICAgICAgdmFyIHNyYyA9IGh0bWwubWF0Y2goLzxpbWcuKj9zcmNcXHMqPVxccyooWydcIl0pKC4rPylcXDEuKj8+Lyk7XG5cbiAgICAgIGlmIChzcmMgJiYgc3JjWzJdKSB7XG4gICAgICAgIHN0eWxlcy5iYWNrZ3JvdW5kID0gXCJjZW50ZXIvY292ZXIgbm8tcmVwZWF0IHVybCgnXCIgKyBzcmNbMl0gKyBcIicpXCI7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzMuZ2VuZXJhdGVDbG9uZXMgPSBmdW5jdGlvbiBnZW5lcmF0ZUNsb25lcyhjb250ZW50cykge1xuICAgIHZhciBjbGFzc2VzID0gdGhpcy5vcHRpb25zLmNsYXNzZXM7XG4gICAgdmFyIGNvdW50ID0gdGhpcy5nZXRDbG9uZUNvdW50KCk7XG4gICAgdmFyIHNsaWRlcyA9IGNvbnRlbnRzLnNsaWNlKCk7XG5cbiAgICB3aGlsZSAoc2xpZGVzLmxlbmd0aCA8IGNvdW50KSB7XG4gICAgICBwdXNoKHNsaWRlcywgc2xpZGVzKTtcbiAgICB9XG5cbiAgICBwdXNoKHNsaWRlcy5zbGljZSgtY291bnQpLnJldmVyc2UoKSwgc2xpZGVzLnNsaWNlKDAsIGNvdW50KSkuZm9yRWFjaChmdW5jdGlvbiAoY29udGVudCwgaW5kZXgpIHtcbiAgICAgIHZhciBhdHRycyA9IGFzc2lnbih7fSwgY29udGVudC5hdHRycywge1xuICAgICAgICBjbGFzczogY29udGVudC5hdHRycy5jbGFzcyArIFwiIFwiICsgY2xhc3Nlcy5jbG9uZVxuICAgICAgfSk7XG4gICAgICB2YXIgY2xvbmUgPSBhc3NpZ24oe30sIGNvbnRlbnQsIHtcbiAgICAgICAgYXR0cnM6IGF0dHJzXG4gICAgICB9KTtcbiAgICAgIGluZGV4IDwgY291bnQgPyBjb250ZW50cy51bnNoaWZ0KGNsb25lKSA6IGNvbnRlbnRzLnB1c2goY2xvbmUpO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90bzMuZ2V0Q2xvbmVDb3VudCA9IGZ1bmN0aW9uIGdldENsb25lQ291bnQoKSB7XG4gICAgaWYgKHRoaXMuaXNMb29wKCkpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICBpZiAob3B0aW9ucy5jbG9uZXMpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuY2xvbmVzO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGVyUGFnZSA9IG1heC5hcHBseSh2b2lkIDAsIHRoaXMuYnJlYWtwb2ludHMubWFwKGZ1bmN0aW9uIChfcmVmNikge1xuICAgICAgICB2YXIgb3B0aW9uczIgPSBfcmVmNlsxXTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMyLnBlclBhZ2U7XG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gcGVyUGFnZSAqICgob3B0aW9ucy5mbGlja01heFBhZ2VzIHx8IDEpICsgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH07XG5cbiAgX3Byb3RvMy5yZW5kZXJBcnJvd3MgPSBmdW5jdGlvbiByZW5kZXJBcnJvd3MoKSB7XG4gICAgdmFyIGh0bWwgPSBcIlwiO1xuICAgIGh0bWwgKz0gXCI8ZGl2IGNsYXNzPVxcXCJcIiArIHRoaXMub3B0aW9ucy5jbGFzc2VzLmFycm93cyArIFwiXFxcIj5cIjtcbiAgICBodG1sICs9IHRoaXMucmVuZGVyQXJyb3codHJ1ZSk7XG4gICAgaHRtbCArPSB0aGlzLnJlbmRlckFycm93KGZhbHNlKTtcbiAgICBodG1sICs9IFwiPC9kaXY+XCI7XG4gICAgcmV0dXJuIGh0bWw7XG4gIH07XG5cbiAgX3Byb3RvMy5yZW5kZXJBcnJvdyA9IGZ1bmN0aW9uIHJlbmRlckFycm93KHByZXYpIHtcbiAgICB2YXIgX3RoaXMkb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgY2xhc3NlcyA9IF90aGlzJG9wdGlvbnMuY2xhc3NlcyxcbiAgICAgICAgaTE4biA9IF90aGlzJG9wdGlvbnMuaTE4bjtcbiAgICB2YXIgYXR0cnMgPSB7XG4gICAgICBjbGFzczogY2xhc3Nlcy5hcnJvdyArIFwiIFwiICsgKHByZXYgPyBjbGFzc2VzLnByZXYgOiBjbGFzc2VzLm5leHQpLFxuICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgIGFyaWFMYWJlbDogcHJldiA/IGkxOG4ucHJldiA6IGkxOG4ubmV4dFxuICAgIH07XG4gICAgcmV0dXJuIFwiPGJ1dHRvbiBcIiArIHRoaXMuYnVpbGRBdHRycyhhdHRycykgKyBcIj48c3ZnIHhtbG5zPVxcXCJcIiArIFhNTF9OQU1FX1NQQUNFICsgXCJcXFwiIHZpZXdCb3g9XFxcIjAgMCBcIiArIFNJWkUgKyBcIiBcIiArIFNJWkUgKyBcIlxcXCIgd2lkdGg9XFxcIlwiICsgU0laRSArIFwiXFxcIiBoZWlnaHQ9XFxcIlwiICsgU0laRSArIFwiXFxcIj48cGF0aCBkPVxcXCJcIiArICh0aGlzLm9wdGlvbnMuYXJyb3dQYXRoIHx8IFBBVEgpICsgXCJcXFwiIC8+PC9zdmc+PC9idXR0b24+XCI7XG4gIH07XG5cbiAgX3Byb3RvMy5odG1sID0gZnVuY3Rpb24gaHRtbCgpIHtcbiAgICB2YXIgX3RoaXMkY29uZmlnID0gdGhpcy5jb25maWcsXG4gICAgICAgIHJvb3RDbGFzcyA9IF90aGlzJGNvbmZpZy5yb290Q2xhc3MsXG4gICAgICAgIGxpc3RUYWcgPSBfdGhpcyRjb25maWcubGlzdFRhZyxcbiAgICAgICAgYXJyb3dzID0gX3RoaXMkY29uZmlnLmFycm93cyxcbiAgICAgICAgYmVmb3JlVHJhY2sgPSBfdGhpcyRjb25maWcuYmVmb3JlVHJhY2ssXG4gICAgICAgIGFmdGVyVHJhY2sgPSBfdGhpcyRjb25maWcuYWZ0ZXJUcmFjayxcbiAgICAgICAgc2xpZGVyID0gX3RoaXMkY29uZmlnLnNsaWRlcixcbiAgICAgICAgYmVmb3JlU2xpZGVyID0gX3RoaXMkY29uZmlnLmJlZm9yZVNsaWRlcixcbiAgICAgICAgYWZ0ZXJTbGlkZXIgPSBfdGhpcyRjb25maWcuYWZ0ZXJTbGlkZXI7XG4gICAgdmFyIGh0bWwgPSBcIlwiO1xuICAgIGh0bWwgKz0gXCI8ZGl2IGlkPVxcXCJcIiArIHRoaXMuaWQgKyBcIlxcXCIgY2xhc3M9XFxcIlwiICsgdGhpcy5idWlsZENsYXNzZXMoKSArIFwiIFwiICsgKHJvb3RDbGFzcyB8fCBcIlwiKSArIFwiXFxcIj5cIjtcbiAgICBodG1sICs9IFwiPHN0eWxlPlwiICsgdGhpcy5TdHlsZS5idWlsZCgpICsgXCI8L3N0eWxlPlwiO1xuXG4gICAgaWYgKHNsaWRlcikge1xuICAgICAgaHRtbCArPSBiZWZvcmVTbGlkZXIgfHwgXCJcIjtcbiAgICAgIGh0bWwgKz0gXCI8ZGl2IGNsYXNzPVxcXCJzcGxpZGVfX3NsaWRlclxcXCI+XCI7XG4gICAgfVxuXG4gICAgaHRtbCArPSBiZWZvcmVUcmFjayB8fCBcIlwiO1xuXG4gICAgaWYgKGFycm93cykge1xuICAgICAgaHRtbCArPSB0aGlzLnJlbmRlckFycm93cygpO1xuICAgIH1cblxuICAgIGh0bWwgKz0gXCI8ZGl2IGNsYXNzPVxcXCJzcGxpZGVfX3RyYWNrXFxcIj5cIjtcbiAgICBodG1sICs9IFwiPFwiICsgbGlzdFRhZyArIFwiIGNsYXNzPVxcXCJzcGxpZGVfX2xpc3RcXFwiPlwiO1xuICAgIGh0bWwgKz0gdGhpcy5yZW5kZXJTbGlkZXMoKTtcbiAgICBodG1sICs9IFwiPC9cIiArIGxpc3RUYWcgKyBcIj5cIjtcbiAgICBodG1sICs9IFwiPC9kaXY+XCI7XG4gICAgaHRtbCArPSBhZnRlclRyYWNrIHx8IFwiXCI7XG5cbiAgICBpZiAoc2xpZGVyKSB7XG4gICAgICBodG1sICs9IFwiPC9kaXY+XCI7XG4gICAgICBodG1sICs9IGFmdGVyU2xpZGVyIHx8IFwiXCI7XG4gICAgfVxuXG4gICAgaHRtbCArPSBcIjwvZGl2PlwiO1xuICAgIHJldHVybiBodG1sO1xuICB9O1xuXG4gIHJldHVybiBTcGxpZGVSZW5kZXJlcjtcbn0oKTtcblxuZXhwb3J0IHsgQ0xBU1NFUywgQ0xBU1NfQUNUSVZFLCBDTEFTU19BUlJPVywgQ0xBU1NfQVJST1dTLCBDTEFTU19BUlJPV19ORVhULCBDTEFTU19BUlJPV19QUkVWLCBDTEFTU19DTE9ORSwgQ0xBU1NfQ09OVEFJTkVSLCBDTEFTU19GT0NVU19JTiwgQ0xBU1NfSU5JVElBTElaRUQsIENMQVNTX0xJU1QsIENMQVNTX0xPQURJTkcsIENMQVNTX05FWFQsIENMQVNTX09WRVJGTE9XLCBDTEFTU19QQUdJTkFUSU9OLCBDTEFTU19QQUdJTkFUSU9OX1BBR0UsIENMQVNTX1BSRVYsIENMQVNTX1BST0dSRVNTLCBDTEFTU19QUk9HUkVTU19CQVIsIENMQVNTX1JPT1QsIENMQVNTX1NMSURFLCBDTEFTU19TUElOTkVSLCBDTEFTU19TUiwgQ0xBU1NfVE9HR0xFLCBDTEFTU19UT0dHTEVfUEFVU0UsIENMQVNTX1RPR0dMRV9QTEFZLCBDTEFTU19UUkFDSywgQ0xBU1NfVklTSUJMRSwgREVGQVVMVFMsIEVWRU5UX0FDVElWRSwgRVZFTlRfQVJST1dTX01PVU5URUQsIEVWRU5UX0FSUk9XU19VUERBVEVELCBFVkVOVF9BVVRPUExBWV9QQVVTRSwgRVZFTlRfQVVUT1BMQVlfUExBWSwgRVZFTlRfQVVUT1BMQVlfUExBWUlORywgRVZFTlRfQ0xJQ0ssIEVWRU5UX0RFU1RST1ksIEVWRU5UX0RSQUcsIEVWRU5UX0RSQUdHRUQsIEVWRU5UX0RSQUdHSU5HLCBFVkVOVF9FTkRfSU5ERVhfQ0hBTkdFRCwgRVZFTlRfSElEREVOLCBFVkVOVF9JTkFDVElWRSwgRVZFTlRfTEFaWUxPQURfTE9BREVELCBFVkVOVF9NT1VOVEVELCBFVkVOVF9NT1ZFLCBFVkVOVF9NT1ZFRCwgRVZFTlRfTkFWSUdBVElPTl9NT1VOVEVELCBFVkVOVF9PVkVSRkxPVywgRVZFTlRfUEFHSU5BVElPTl9NT1VOVEVELCBFVkVOVF9QQUdJTkFUSU9OX1VQREFURUQsIEVWRU5UX1JFQURZLCBFVkVOVF9SRUZSRVNILCBFVkVOVF9SRVNJWkUsIEVWRU5UX1JFU0laRUQsIEVWRU5UX1NDUk9MTCwgRVZFTlRfU0NST0xMRUQsIEVWRU5UX1NISUZURUQsIEVWRU5UX1NMSURFX0tFWURPV04sIEVWRU5UX1VQREFURUQsIEVWRU5UX1ZJU0lCTEUsIEV2ZW50QmluZGVyLCBFdmVudEludGVyZmFjZSwgRkFERSwgTE9PUCwgTFRSLCBSVEwsIFJlcXVlc3RJbnRlcnZhbCwgU0xJREUsIFNUQVRVU19DTEFTU0VTLCBTcGxpZGUsIFNwbGlkZVJlbmRlcmVyLCBTdGF0ZSwgVFRCLCBUaHJvdHRsZSwgU3BsaWRlIGFzIGRlZmF1bHQgfTtcbiIsImZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG4vLyBPbGRlciBicm93c2VycyBkb24ndCBzdXBwb3J0IGV2ZW50IG9wdGlvbnMsIGZlYXR1cmUgZGV0ZWN0IGl0LlxuXG4vLyBBZG9wdGVkIGFuZCBtb2RpZmllZCBzb2x1dGlvbiBmcm9tIEJvaGRhbiBEaWR1a2ggKDIwMTcpXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80MTU5NDk5Ny9pb3MtMTAtc2FmYXJpLXByZXZlbnQtc2Nyb2xsaW5nLWJlaGluZC1hLWZpeGVkLW92ZXJsYXktYW5kLW1haW50YWluLXNjcm9sbC1wb3NpXG5cbnZhciBoYXNQYXNzaXZlRXZlbnRzID0gZmFsc2U7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIHBhc3NpdmVUZXN0T3B0aW9ucyA9IHtcbiAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgIGhhc1Bhc3NpdmVFdmVudHMgPSB0cnVlO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIHBhc3NpdmVUZXN0T3B0aW9ucyk7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZScsIG51bGwsIHBhc3NpdmVUZXN0T3B0aW9ucyk7XG59XG5cbnZhciBpc0lvc0RldmljZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci5wbGF0Zm9ybSAmJiAoL2lQKGFkfGhvbmV8b2QpLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0pIHx8IHdpbmRvdy5uYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdNYWNJbnRlbCcgJiYgd2luZG93Lm5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDEpO1xuXG5cbnZhciBsb2NrcyA9IFtdO1xudmFyIGRvY3VtZW50TGlzdGVuZXJBZGRlZCA9IGZhbHNlO1xudmFyIGluaXRpYWxDbGllbnRZID0gLTE7XG52YXIgcHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nID0gdm9pZCAwO1xudmFyIHByZXZpb3VzQm9keVBvc2l0aW9uID0gdm9pZCAwO1xudmFyIHByZXZpb3VzQm9keVBhZGRpbmdSaWdodCA9IHZvaWQgMDtcblxuLy8gcmV0dXJucyB0cnVlIGlmIGBlbGAgc2hvdWxkIGJlIGFsbG93ZWQgdG8gcmVjZWl2ZSB0b3VjaG1vdmUgZXZlbnRzLlxudmFyIGFsbG93VG91Y2hNb3ZlID0gZnVuY3Rpb24gYWxsb3dUb3VjaE1vdmUoZWwpIHtcbiAgcmV0dXJuIGxvY2tzLnNvbWUoZnVuY3Rpb24gKGxvY2spIHtcbiAgICBpZiAobG9jay5vcHRpb25zLmFsbG93VG91Y2hNb3ZlICYmIGxvY2sub3B0aW9ucy5hbGxvd1RvdWNoTW92ZShlbCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59O1xuXG52YXIgcHJldmVudERlZmF1bHQgPSBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChyYXdFdmVudCkge1xuICB2YXIgZSA9IHJhd0V2ZW50IHx8IHdpbmRvdy5ldmVudDtcblxuICAvLyBGb3IgdGhlIGNhc2Ugd2hlcmVieSBjb25zdW1lcnMgYWRkcyBhIHRvdWNobW92ZSBldmVudCBsaXN0ZW5lciB0byBkb2N1bWVudC5cbiAgLy8gUmVjYWxsIHRoYXQgd2UgZG8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudERlZmF1bHQsIHsgcGFzc2l2ZTogZmFsc2UgfSlcbiAgLy8gaW4gZGlzYWJsZUJvZHlTY3JvbGwgLSBzbyBpZiB3ZSBwcm92aWRlIHRoaXMgb3Bwb3J0dW5pdHkgdG8gYWxsb3dUb3VjaE1vdmUsIHRoZW5cbiAgLy8gdGhlIHRvdWNobW92ZSBldmVudCBvbiBkb2N1bWVudCB3aWxsIGJyZWFrLlxuICBpZiAoYWxsb3dUb3VjaE1vdmUoZS50YXJnZXQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBEbyBub3QgcHJldmVudCBpZiB0aGUgZXZlbnQgaGFzIG1vcmUgdGhhbiBvbmUgdG91Y2ggKHVzdWFsbHkgbWVhbmluZyB0aGlzIGlzIGEgbXVsdGkgdG91Y2ggZ2VzdHVyZSBsaWtlIHBpbmNoIHRvIHpvb20pLlxuICBpZiAoZS50b3VjaGVzLmxlbmd0aCA+IDEpIHJldHVybiB0cnVlO1xuXG4gIGlmIChlLnByZXZlbnREZWZhdWx0KSBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIHNldE92ZXJmbG93SGlkZGVuID0gZnVuY3Rpb24gc2V0T3ZlcmZsb3dIaWRkZW4ob3B0aW9ucykge1xuICAvLyBJZiBwcmV2aW91c0JvZHlQYWRkaW5nUmlnaHQgaXMgYWxyZWFkeSBzZXQsIGRvbid0IHNldCBpdCBhZ2Fpbi5cbiAgaWYgKHByZXZpb3VzQm9keVBhZGRpbmdSaWdodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIF9yZXNlcnZlU2Nyb2xsQmFyR2FwID0gISFvcHRpb25zICYmIG9wdGlvbnMucmVzZXJ2ZVNjcm9sbEJhckdhcCA9PT0gdHJ1ZTtcbiAgICB2YXIgc2Nyb2xsQmFyR2FwID0gd2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICBpZiAoX3Jlc2VydmVTY3JvbGxCYXJHYXAgJiYgc2Nyb2xsQmFyR2FwID4gMCkge1xuICAgICAgdmFyIGNvbXB1dGVkQm9keVBhZGRpbmdSaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSwgMTApO1xuICAgICAgcHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0ID0gZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGNvbXB1dGVkQm9keVBhZGRpbmdSaWdodCArIHNjcm9sbEJhckdhcCArICdweCc7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgcHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nIGlzIGFscmVhZHkgc2V0LCBkb24ndCBzZXQgaXQgYWdhaW4uXG4gIGlmIChwcmV2aW91c0JvZHlPdmVyZmxvd1NldHRpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIHByZXZpb3VzQm9keU92ZXJmbG93U2V0dGluZyA9IGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3c7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICB9XG59O1xuXG52YXIgcmVzdG9yZU92ZXJmbG93U2V0dGluZyA9IGZ1bmN0aW9uIHJlc3RvcmVPdmVyZmxvd1NldHRpbmcoKSB7XG4gIGlmIChwcmV2aW91c0JvZHlQYWRkaW5nUmlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcHJldmlvdXNCb2R5UGFkZGluZ1JpZ2h0O1xuXG4gICAgLy8gUmVzdG9yZSBwcmV2aW91c0JvZHlQYWRkaW5nUmlnaHQgdG8gdW5kZWZpbmVkIHNvIHNldE92ZXJmbG93SGlkZGVuIGtub3dzIGl0XG4gICAgLy8gY2FuIGJlIHNldCBhZ2Fpbi5cbiAgICBwcmV2aW91c0JvZHlQYWRkaW5nUmlnaHQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAocHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gcHJldmlvdXNCb2R5T3ZlcmZsb3dTZXR0aW5nO1xuXG4gICAgLy8gUmVzdG9yZSBwcmV2aW91c0JvZHlPdmVyZmxvd1NldHRpbmcgdG8gdW5kZWZpbmVkXG4gICAgLy8gc28gc2V0T3ZlcmZsb3dIaWRkZW4ga25vd3MgaXQgY2FuIGJlIHNldCBhZ2Fpbi5cbiAgICBwcmV2aW91c0JvZHlPdmVyZmxvd1NldHRpbmcgPSB1bmRlZmluZWQ7XG4gIH1cbn07XG5cbnZhciBzZXRQb3NpdGlvbkZpeGVkID0gZnVuY3Rpb24gc2V0UG9zaXRpb25GaXhlZCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgIC8vIElmIHByZXZpb3VzQm9keVBvc2l0aW9uIGlzIGFscmVhZHkgc2V0LCBkb24ndCBzZXQgaXQgYWdhaW4uXG4gICAgaWYgKHByZXZpb3VzQm9keVBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByZXZpb3VzQm9keVBvc2l0aW9uID0ge1xuICAgICAgICBwb3NpdGlvbjogZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbixcbiAgICAgICAgdG9wOiBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCxcbiAgICAgICAgbGVmdDogZG9jdW1lbnQuYm9keS5zdHlsZS5sZWZ0XG4gICAgICB9O1xuXG4gICAgICAvLyBVcGRhdGUgdGhlIGRvbSBpbnNpZGUgYW4gYW5pbWF0aW9uIGZyYW1lIFxuICAgICAgdmFyIF93aW5kb3cgPSB3aW5kb3csXG4gICAgICAgICAgc2Nyb2xsWSA9IF93aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICBzY3JvbGxYID0gX3dpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgIGlubmVySGVpZ2h0ID0gX3dpbmRvdy5pbm5lckhlaWdodDtcblxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9IC1zY3JvbGxZO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5sZWZ0ID0gLXNjcm9sbFg7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gQXR0ZW1wdCB0byBjaGVjayBpZiB0aGUgYm90dG9tIGJhciBhcHBlYXJlZCBkdWUgdG8gdGhlIHBvc2l0aW9uIGNoYW5nZVxuICAgICAgICAgIHZhciBib3R0b21CYXJIZWlnaHQgPSBpbm5lckhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICBpZiAoYm90dG9tQmFySGVpZ2h0ICYmIHNjcm9sbFkgPj0gaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIC8vIE1vdmUgdGhlIGNvbnRlbnQgZnVydGhlciB1cCBzbyB0aGF0IHRoZSBib3R0b20gYmFyIGRvZXNuJ3QgaGlkZSBpdFxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSAtKHNjcm9sbFkgKyBib3R0b21CYXJIZWlnaHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LCAzMDApO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgcmVzdG9yZVBvc2l0aW9uU2V0dGluZyA9IGZ1bmN0aW9uIHJlc3RvcmVQb3NpdGlvblNldHRpbmcoKSB7XG4gIGlmIChwcmV2aW91c0JvZHlQb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gQ29udmVydCB0aGUgcG9zaXRpb24gZnJvbSBcInB4XCIgdG8gSW50XG4gICAgdmFyIHkgPSAtcGFyc2VJbnQoZG9jdW1lbnQuYm9keS5zdHlsZS50b3AsIDEwKTtcbiAgICB2YXIgeCA9IC1wYXJzZUludChkb2N1bWVudC5ib2R5LnN0eWxlLmxlZnQsIDEwKTtcblxuICAgIC8vIFJlc3RvcmUgc3R5bGVzXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9IHByZXZpb3VzQm9keVBvc2l0aW9uLnBvc2l0aW9uO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gcHJldmlvdXNCb2R5UG9zaXRpb24udG9wO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubGVmdCA9IHByZXZpb3VzQm9keVBvc2l0aW9uLmxlZnQ7XG5cbiAgICAvLyBSZXN0b3JlIHNjcm9sbFxuICAgIHdpbmRvdy5zY3JvbGxUbyh4LCB5KTtcblxuICAgIHByZXZpb3VzQm9keVBvc2l0aW9uID0gdW5kZWZpbmVkO1xuICB9XG59O1xuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9zY3JvbGxIZWlnaHQjUHJvYmxlbXNfYW5kX3NvbHV0aW9uc1xudmFyIGlzVGFyZ2V0RWxlbWVudFRvdGFsbHlTY3JvbGxlZCA9IGZ1bmN0aW9uIGlzVGFyZ2V0RWxlbWVudFRvdGFsbHlTY3JvbGxlZCh0YXJnZXRFbGVtZW50KSB7XG4gIHJldHVybiB0YXJnZXRFbGVtZW50ID8gdGFyZ2V0RWxlbWVudC5zY3JvbGxIZWlnaHQgLSB0YXJnZXRFbGVtZW50LnNjcm9sbFRvcCA8PSB0YXJnZXRFbGVtZW50LmNsaWVudEhlaWdodCA6IGZhbHNlO1xufTtcblxudmFyIGhhbmRsZVNjcm9sbCA9IGZ1bmN0aW9uIGhhbmRsZVNjcm9sbChldmVudCwgdGFyZ2V0RWxlbWVudCkge1xuICB2YXIgY2xpZW50WSA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSAtIGluaXRpYWxDbGllbnRZO1xuXG4gIGlmIChhbGxvd1RvdWNoTW92ZShldmVudC50YXJnZXQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRhcmdldEVsZW1lbnQgJiYgdGFyZ2V0RWxlbWVudC5zY3JvbGxUb3AgPT09IDAgJiYgY2xpZW50WSA+IDApIHtcbiAgICAvLyBlbGVtZW50IGlzIGF0IHRoZSB0b3Agb2YgaXRzIHNjcm9sbC5cbiAgICByZXR1cm4gcHJldmVudERlZmF1bHQoZXZlbnQpO1xuICB9XG5cbiAgaWYgKGlzVGFyZ2V0RWxlbWVudFRvdGFsbHlTY3JvbGxlZCh0YXJnZXRFbGVtZW50KSAmJiBjbGllbnRZIDwgMCkge1xuICAgIC8vIGVsZW1lbnQgaXMgYXQgdGhlIGJvdHRvbSBvZiBpdHMgc2Nyb2xsLlxuICAgIHJldHVybiBwcmV2ZW50RGVmYXVsdChldmVudCk7XG4gIH1cblxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgdmFyIGRpc2FibGVCb2R5U2Nyb2xsID0gZnVuY3Rpb24gZGlzYWJsZUJvZHlTY3JvbGwodGFyZ2V0RWxlbWVudCwgb3B0aW9ucykge1xuICAvLyB0YXJnZXRFbGVtZW50IG11c3QgYmUgcHJvdmlkZWRcbiAgaWYgKCF0YXJnZXRFbGVtZW50KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdkaXNhYmxlQm9keVNjcm9sbCB1bnN1Y2Nlc3NmdWwgLSB0YXJnZXRFbGVtZW50IG11c3QgYmUgcHJvdmlkZWQgd2hlbiBjYWxsaW5nIGRpc2FibGVCb2R5U2Nyb2xsIG9uIElPUyBkZXZpY2VzLicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGRpc2FibGVCb2R5U2Nyb2xsIG11c3Qgbm90IGhhdmUgYmVlbiBjYWxsZWQgb24gdGhpcyB0YXJnZXRFbGVtZW50IGJlZm9yZVxuICBpZiAobG9ja3Muc29tZShmdW5jdGlvbiAobG9jaykge1xuICAgIHJldHVybiBsb2NrLnRhcmdldEVsZW1lbnQgPT09IHRhcmdldEVsZW1lbnQ7XG4gIH0pKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGxvY2sgPSB7XG4gICAgdGFyZ2V0RWxlbWVudDogdGFyZ2V0RWxlbWVudCxcbiAgICBvcHRpb25zOiBvcHRpb25zIHx8IHt9XG4gIH07XG5cbiAgbG9ja3MgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGxvY2tzKSwgW2xvY2tdKTtcblxuICBpZiAoaXNJb3NEZXZpY2UpIHtcbiAgICBzZXRQb3NpdGlvbkZpeGVkKCk7XG4gIH0gZWxzZSB7XG4gICAgc2V0T3ZlcmZsb3dIaWRkZW4ob3B0aW9ucyk7XG4gIH1cblxuICBpZiAoaXNJb3NEZXZpY2UpIHtcbiAgICB0YXJnZXRFbGVtZW50Lm9udG91Y2hzdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldFRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIGRldGVjdCBzaW5nbGUgdG91Y2guXG4gICAgICAgIGluaXRpYWxDbGllbnRZID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgfVxuICAgIH07XG4gICAgdGFyZ2V0RWxlbWVudC5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldFRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIC8vIGRldGVjdCBzaW5nbGUgdG91Y2guXG4gICAgICAgIGhhbmRsZVNjcm9sbChldmVudCwgdGFyZ2V0RWxlbWVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICghZG9jdW1lbnRMaXN0ZW5lckFkZGVkKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBwcmV2ZW50RGVmYXVsdCwgaGFzUGFzc2l2ZUV2ZW50cyA/IHsgcGFzc2l2ZTogZmFsc2UgfSA6IHVuZGVmaW5lZCk7XG4gICAgICBkb2N1bWVudExpc3RlbmVyQWRkZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IHZhciBjbGVhckFsbEJvZHlTY3JvbGxMb2NrcyA9IGZ1bmN0aW9uIGNsZWFyQWxsQm9keVNjcm9sbExvY2tzKCkge1xuICBpZiAoaXNJb3NEZXZpY2UpIHtcbiAgICAvLyBDbGVhciBhbGwgbG9ja3Mgb250b3VjaHN0YXJ0L29udG91Y2htb3ZlIGhhbmRsZXJzLCBhbmQgdGhlIHJlZmVyZW5jZXMuXG4gICAgbG9ja3MuZm9yRWFjaChmdW5jdGlvbiAobG9jaykge1xuICAgICAgbG9jay50YXJnZXRFbGVtZW50Lm9udG91Y2hzdGFydCA9IG51bGw7XG4gICAgICBsb2NrLnRhcmdldEVsZW1lbnQub250b3VjaG1vdmUgPSBudWxsO1xuICAgIH0pO1xuXG4gICAgaWYgKGRvY3VtZW50TGlzdGVuZXJBZGRlZCkge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgcHJldmVudERlZmF1bHQsIGhhc1Bhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiB1bmRlZmluZWQpO1xuICAgICAgZG9jdW1lbnRMaXN0ZW5lckFkZGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgaW5pdGlhbCBjbGllbnRZLlxuICAgIGluaXRpYWxDbGllbnRZID0gLTE7XG4gIH1cblxuICBpZiAoaXNJb3NEZXZpY2UpIHtcbiAgICByZXN0b3JlUG9zaXRpb25TZXR0aW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdG9yZU92ZXJmbG93U2V0dGluZygpO1xuICB9XG5cbiAgbG9ja3MgPSBbXTtcbn07XG5cbmV4cG9ydCB2YXIgZW5hYmxlQm9keVNjcm9sbCA9IGZ1bmN0aW9uIGVuYWJsZUJvZHlTY3JvbGwodGFyZ2V0RWxlbWVudCkge1xuICBpZiAoIXRhcmdldEVsZW1lbnQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ2VuYWJsZUJvZHlTY3JvbGwgdW5zdWNjZXNzZnVsIC0gdGFyZ2V0RWxlbWVudCBtdXN0IGJlIHByb3ZpZGVkIHdoZW4gY2FsbGluZyBlbmFibGVCb2R5U2Nyb2xsIG9uIElPUyBkZXZpY2VzLicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxvY2tzID0gbG9ja3MuZmlsdGVyKGZ1bmN0aW9uIChsb2NrKSB7XG4gICAgcmV0dXJuIGxvY2sudGFyZ2V0RWxlbWVudCAhPT0gdGFyZ2V0RWxlbWVudDtcbiAgfSk7XG5cbiAgaWYgKGlzSW9zRGV2aWNlKSB7XG4gICAgdGFyZ2V0RWxlbWVudC5vbnRvdWNoc3RhcnQgPSBudWxsO1xuICAgIHRhcmdldEVsZW1lbnQub250b3VjaG1vdmUgPSBudWxsO1xuXG4gICAgaWYgKGRvY3VtZW50TGlzdGVuZXJBZGRlZCAmJiBsb2Nrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHByZXZlbnREZWZhdWx0LCBoYXNQYXNzaXZlRXZlbnRzID8geyBwYXNzaXZlOiBmYWxzZSB9IDogdW5kZWZpbmVkKTtcbiAgICAgIGRvY3VtZW50TGlzdGVuZXJBZGRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChpc0lvc0RldmljZSkge1xuICAgIHJlc3RvcmVQb3NpdGlvblNldHRpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICByZXN0b3JlT3ZlcmZsb3dTZXR0aW5nKCk7XG4gIH1cbn07XG5cbiIsImV4cG9ydCBjb25zdCBkZWNsT2ZOdW0gPSAobnVtYmVyLCB0aXRsZXMpID0+IHtcclxuICAgIGNvbnN0IGNhc2VzID0gWzIsIDAsIDEsIDEsIDEsIDJdOyAgXHJcbiAgICByZXR1cm4gdGl0bGVzWyAobnVtYmVyJTEwMD40ICYmIG51bWJlciUxMDA8MjApPyAyIDogY2FzZXNbKG51bWJlciUxMDw1KT9udW1iZXIlMTA6NV0gXTsgXHJcbn0iLCJleHBvcnQgY29uc3QgYnV0dG9uQ2F0YWxvZyA9ICgpID0+IHtcclxuICBjb25zdCBoZXJvU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVyb1wiKTtcclxuICBjb25zdCBidXR0b25DYXRhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tY2F0YWxvZ1wiKTtcclxuXHJcbiAgaWYgKGJ1dHRvbkNhdGFsb2cpIHtcclxuICAgIGxldCB0aW1lb3V0SWQ7XHJcbiAgICBsZXQgaXNPcGFjaXR5ID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgY3JlYXRlT2JzZXJ2ZXIgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxyXG4gICAgICAgIChlbnRyaWVzKSA9PiB7XHJcbiAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICAgIGJ1dHRvbkNhdGFsb2cuY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGUtb3BhY2l0eVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBidXR0b25DYXRhbG9nLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlLW9wYWNpdHlcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGhyZXNob2xkOiAwLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoaGVyb1NlY3Rpb24pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjcmVhdGVPYnNlcnZlcigpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XHJcblxyXG4gICAgICBpZiAoIWlzT3BhY2l0eSkge1xyXG4gICAgICAgIGJ1dHRvbkNhdGFsb2cuc3R5bGUub3BhY2l0eSA9IDAuNTtcclxuICAgICAgICBpc09wYWNpdHkgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBidXR0b25DYXRhbG9nLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIGlzT3BhY2l0eSA9IGZhbHNlO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgU3BsaWRlIGZyb20gXCJAc3BsaWRlanMvc3BsaWRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY2F0YWxvZ1NsaWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRhYldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZ19fc2xpZGVyX3RhYnMnKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGFsb2ctY2F0ZWdvcnlfX3RpdGxlJylcclxuICBcclxuICAgIGlmICh0YWJXcmFwcGVyKSB7XHJcbiAgICAgIGxldCB0YWJzID0gdGFiV3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdGFsb2ctdGFiXCIpO1xyXG4gIFxyXG4gICAgICBsZXQgYWN0aXZlSW5kZXggPSAwO1xyXG4gICAgICBsZXQgdGFiU2xpZGVyO1xyXG5cclxuICAgICAgdGFiU2xpZGVyID0gbmV3IFNwbGlkZShcIi5jYXRhbG9nX19zbGlkZXJfdGFicy0tc2xpZGVyXCIsIHtcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxyXG4gICAgICAgIGNsb25lczogMCxcclxuICAgICAgICBhdXRvV2lkdGg6IHRydWUsXHJcbiAgICAgICAgbWVkaWFRdWVyeTogXCJtaW5cIixcclxuICAgICAgICBzdGFydDogYWN0aXZlSW5kZXgsXHJcbiAgICAgICAgcGFkZGluZzoge2xlZnQ6IDEyLCByaWdodDogMTJ9LFxyXG4gICAgICAgIGdhcDogMTIsXHJcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgIDk5MjogeyBkZXN0cm95OiB0cnVlIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSkubW91bnQoKTtcclxuXHJcbiAgICAgIGNvbnN0IGNoYW5nZVNsaWRlID0gKGlkeCkgPT4ge1xyXG4gICAgICAgIHRhYnMgPSB0YWJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0YWxvZy10YWJcIik7XHJcbiAgICBcclxuICAgICAgICB0YWJzLmZvckVhY2goKHRhYiwgdGFiSW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGRhdGFzZXRJbmRleCA9IE51bWJlcih0YWIuZGF0YXNldC5zbGlkZUlkeClcclxuXHJcbiAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIFxyXG4gICAgICAgICAgaWYgKGRhdGFzZXRJbmRleCA9PT0gaWR4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFzZXRUaXRsZSA9IHRhYi5kYXRhc2V0LnRpdGxlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YWJTbGlkZXIgJiYgIXRhYlNsaWRlci5vcHRpb25zLmRlc3Ryb3kpIHtcclxuICAgICAgICAgICAgICB0YWJTbGlkZXIuZ28oZGF0YXNldEluZGV4KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGl0bGUpIHtcclxuICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGRhdGFzZXRUaXRsZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0YWJXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLmNhdGFsb2ctdGFiJykpIHtcclxuICAgICAgICAgIGNvbnN0IHRhYiA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5jYXRhbG9nLXRhYicpXHJcbiAgICAgICAgICBjb25zdCB0YWJJbmRleCA9IE51bWJlcih0YWIuZGF0YXNldC5zbGlkZUlkeClcclxuICAgICAgXHJcbiAgICAgICAgICBhY3RpdmVJbmRleCA9IHRhYkluZGV4O1xyXG4gICAgXHJcbiAgICAgICAgICBjaGFuZ2VTbGlkZSh0YWJJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgY2hhbmdlU2xpZGUoYWN0aXZlSW5kZXgpXHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGZvcm1WYWxpZGF0b3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Zvcm0nKVxyXG5cclxuICAgIGZvcm1zLmZvckVhY2goZm9ybSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT10ZWxdJyk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJylcclxuXHJcbiAgICAgICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJy1pbnZhbGlkJylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5yZW1vdmUoJy1pbnZhbGlkJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghaW5wdXQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnLWludmFsaWQnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYgKCFjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJy1pbnZhbGlkJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59IiwiaW1wb3J0IFNwbGlkZSBmcm9tIFwiQHNwbGlkZWpzL3NwbGlkZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhlcm9TbGlkZXIgPSAoZGVsYXkgPSA0MDAwKSA9PiB7XHJcbiAgY29uc3QgaGVyb1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlcm8td3JhcHBlclwiKTtcclxuICBjb25zdCB0YWJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX3NsaWRlcl90YWJzJyk7XHJcblxyXG4gIGlmIChoZXJvV3JhcHBlcikge1xyXG4gICAgY29uc3QgaW1hZ2VzID0gaGVyb1dyYXBwZXIucXVlcnlTZWxlY3RvckFsbChcIi5oZXJvX19pbWFnZVwiKTtcclxuICAgIGxldCB0YWJzID0gaGVyb1dyYXBwZXIucXVlcnlTZWxlY3RvckFsbChcIi5oZXJvLXRhYlwiKTtcclxuICBcclxuICAgIGxldCBhY3RpdmVJbmRleCA9IDA7XHJcbiAgICBsZXQgaW50ZXJ2YWw7XHJcbiAgICBsZXQgdGFiU2xpZGVyO1xyXG4gIFxyXG4gICAgdGFiU2xpZGVyID0gbmV3IFNwbGlkZShcIi5oZXJvX19zbGlkZXJfdGFicy0tc2xpZGVyXCIsIHtcclxuICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgcGFnaW5hdGlvbjogZmFsc2UsXHJcbiAgICAgIC8vIGNsb25lczogMCxcclxuICAgICAgdHlwZTogXCJsb29wXCIsXHJcbiAgICAgIGZvY3VzOiBcImNlbnRlclwiLFxyXG4gICAgICBhdXRvV2lkdGg6IHRydWUsXHJcbiAgICAgIG1lZGlhUXVlcnk6IFwibWluXCIsXHJcbiAgICAgIGdhcDogMTIsXHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgOTkyOiB7IGRlc3Ryb3k6IHRydWUgfSxcclxuICAgICAgfSxcclxuICAgIH0pLm1vdW50KCk7XHJcbiAgXHJcbiAgICBjb25zdCBjaGFuZ2VTbGlkZSA9IChpZHgpID0+IHtcclxuICAgICAgdGFicyA9IGhlcm9XcmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVyby10YWJcIik7XHJcbiAgXHJcbiAgICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSwgaW1hZ2VJbmRleCkgPT4ge1xyXG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgXHJcbiAgICAgICAgaWYgKGltYWdlSW5kZXggPT09IGlkeCkge1xyXG4gICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICB0YWJzLmZvckVhY2goKHRhYiwgdGFiSW5kZXgpID0+IHtcclxuICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBcclxuICAgICAgICBpZiAoTnVtYmVyKHRhYi5kYXRhc2V0LnNsaWRlSWR4KSA9PT0gaWR4KSB7XHJcbiAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBpZiAodGFiU2xpZGVyICYmICF0YWJTbGlkZXIub3B0aW9ucy5kZXN0cm95KSB7XHJcbiAgICAgICAgICB0YWJTbGlkZXIuZ28oaWR4KVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgYXV0b3BsYXkgPSAoKSA9PiB7XHJcbiAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIGlmIChhY3RpdmVJbmRleCA9PT0gNCkge1xyXG4gICAgICAgICAgYWN0aXZlSW5kZXggPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhY3RpdmVJbmRleCsrO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBjaGFuZ2VTbGlkZShhY3RpdmVJbmRleCk7XHJcbiAgICAgIH0sIGRlbGF5KTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBzdGFydEF1dG9wbGF5ID0gKCkgPT4ge1xyXG4gICAgICBhdXRvcGxheSgpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IHN0b3BBdXRvcGxheSA9ICgpID0+IHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgdGFiV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuaGVyby10YWInKSkge1xyXG4gICAgICAgIGNvbnN0IHRhYiA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5oZXJvLXRhYicpXHJcbiAgICAgICAgY29uc3QgdGFiSW5kZXggPSBOdW1iZXIodGFiLmRhdGFzZXQuc2xpZGVJZHgpXHJcbiAgXHJcbiAgICAgICAgYWN0aXZlSW5kZXggPSB0YWJJbmRleDtcclxuICBcclxuICAgICAgICBjaGFuZ2VTbGlkZSh0YWJJbmRleCk7XHJcbiAgICAgICAgc3RvcEF1dG9wbGF5KClcclxuICAgICAgICBzdGFydEF1dG9wbGF5KClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICBcclxuICAgIGNoYW5nZVNsaWRlKGFjdGl2ZUluZGV4KTtcclxuICAgIGF1dG9wbGF5KCk7XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgbGFuZ3VhZ2VTZWxlY3QgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX25hdmJhcl9zZWxlY3RcIik7XHJcbiAgY29uc3QgbGlzdEl0ZW1zID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKTtcclxuXHJcbiAgaWYgKHNlbGVjdCkge1xyXG4gICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbGlzdEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgbGFuZ3VhZ2UgPSBpdGVtLmRhdGFzZXQubGFuZ3VhZ2U7XHJcblxyXG4gICAgICBsaXN0SXRlbXMuZm9yRWFjaCgoaSkgPT4ge1xyXG4gICAgICAgIGkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgaWYgKGkuZGF0YXNldC5sYW5ndWFnZSA9PT0gbGFuZ3VhZ2UpIHtcclxuICAgICAgICAgIGkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBtb2JpbGVNZW51ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19uYXZiYXJfYnV0dG9uXCIpO1xyXG4gIGNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1tZW51IC4tbW9iaWxlXCIpO1xyXG5cclxuICBpZiAobW9iaWxlTWVudSkge1xyXG4gICAgY29uc3QgY2xvc2UgPSBtb2JpbGVNZW51LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLW1lbnVfX2Nsb3NlXCIpO1xyXG5cclxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBtb2JpbGVNZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKFwiLWFjdGl2ZVwiKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCItYWN0aXZlXCIpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IChtb2JpbGVNZW51LnN0eWxlLmRpc3BsYXkgPSBudWxsKSwgMjAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxufTtcclxuIiwiaW1wb3J0IHsgZGlzYWJsZUJvZHlTY3JvbGwsIGNsZWFyQWxsQm9keVNjcm9sbExvY2tzIH0gZnJvbSAnYm9keS1zY3JvbGwtbG9jayc7XHJcblxyXG5leHBvcnQgY29uc3QgbW9kYWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmVlZGJhY2stYnRuXCIpO1xyXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrLW1vZGFsLW92ZXJsYXknKVxyXG5cclxuICBpZiAobW9kYWwpIHtcclxuICAgIGNvbnN0IGNsb3NlID0gbW9kYWwucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrLW1vZGFsX19jbG9zZScpXHJcblxyXG4gICAgYnRucy5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1vZGFsLmNsYXNzTGlzdC5hZGQoJy1hY3RpdmUnKSlcclxuICAgICAgICAgIGRpc2FibGVCb2R5U2Nyb2xsKGRvY3VtZW50LmJvZHkpXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnLWFjdGl2ZScpXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gbW9kYWwuc3R5bGUuZGlzcGxheSA9IG51bGwsIDIwMClcclxuICAgICAgY2xlYXJBbGxCb2R5U2Nyb2xsTG9ja3MoZG9jdW1lbnQuYm9keSlcclxuICAgIH0pXHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgU3BsaWRlIGZyb20gXCJAc3BsaWRlanMvc3BsaWRlXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgb3VyVGltZSA9ICgpID0+IHtcclxuICBjb25zdCBpbml0U2xpZGVyID0gKCkgPT4ge1xyXG4gICAgbmV3IFNwbGlkZShcIi5vdXItdGltZV9fc2xpZGVyXCIsIHtcclxuICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgcGFnaW5hdGlvbjogZmFsc2UsXHJcbiAgICAgIGNsb25lczogMCxcclxuICAgICAgdHlwZTogXCJzbGlkZVwiLFxyXG4gICAgICB3aGVlbDogdHJ1ZSxcclxuICAgICAgcmVsZWFzZVdoZWVsOiB0cnVlLFxyXG4gICAgICB3YWl0Rm9yVHJhbnNpdGlvbjogdHJ1ZSxcclxuICAgICAgdHJpbVNwYWNlOiBmYWxzZSxcclxuICAgICAgZm9jdXM6IFwiY2VudGVyXCIsXHJcbiAgICAgIGdhcDogMjQsXHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgNzY3OiB7XHJcbiAgICAgICAgICBkZXN0cm95OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KS5tb3VudCgpO1xyXG4gIH07XHJcblxyXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3VyLXRpbWVfX3NsaWRlcicpKSB7XHJcbiAgICBpbml0U2xpZGVyKCk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgU3BsaWRlIGZyb20gXCJAc3BsaWRlanMvc3BsaWRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHNTbGlkZXIgPSAoc2xpZGVyU2VsZWN0b3IpID0+IHtcclxuICBjb25zdCBpbml0U2xpZGVyID0gKCkgPT4ge1xyXG4gICAgbmV3IFNwbGlkZShzbGlkZXJTZWxlY3Rvciwge1xyXG4gICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICBwYWdpbmF0aW9uOiBmYWxzZSxcclxuICAgICAgdHlwZTogXCJsb29wXCIsXHJcbiAgICAgIGZvY3VzOiBcImNlbnRlclwiLFxyXG4gICAgICBmaXhlZFdpZHRoOiAxNDAsXHJcbiAgICAgIGZpeGVkSGVpZ2h0OiAyNjAsXHJcbiAgICAgIG1lZGlhUXVlcnk6IFwibWluXCIsXHJcbiAgICAgIGdhcDogMTIsXHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgNTMyOiB7XHJcbiAgICAgICAgICBmaXhlZFdpZHRoOiBudWxsLFxyXG4gICAgICAgICAgZml4ZWRIZWlnaHQ6IG51bGwsXHJcbiAgICAgICAgICBwZXJQYWdlOiAzLFxyXG4gICAgICAgICAgZm9jdXM6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgIGZpeGVkV2lkdGg6IG51bGwsXHJcbiAgICAgICAgICBwZXJQYWdlOiAyLFxyXG4gICAgICAgICAgZ2FwOiAyNCxcclxuICAgICAgICAgIGZvY3VzOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICBwZXJQYWdlOiAzLFxyXG4gICAgICAgICAgZ2FwOiAyNCxcclxuICAgICAgICAgIGZvY3VzOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTQwMDoge1xyXG4gICAgICAgICAgcGVyUGFnZTogNCxcclxuICAgICAgICAgIGdhcDogMjQsXHJcbiAgICAgICAgICBmb2N1czogMSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSkubW91bnQoKTtcclxuICB9O1xyXG5cclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzbGlkZXJTZWxlY3RvcikpIHtcclxuICAgIGluaXRTbGlkZXIoKTtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBzY2FsZUltYWdlcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5zY2FsaW5nLWltYWdlJyk7XHJcblxyXG4gICAgaW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xyXG4gICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QudG9nZ2xlKCctc2NhbGUnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59IiwiaW1wb3J0IHsgZGVjbE9mTnVtIH0gZnJvbSAnLi4vaGVscGVycy9kZWNsLW9mLW51bSc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VhcmNoRGVjbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNlYXJjaFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoJyk7XHJcbiAgICBcclxuICAgIGlmIChzZWFyY2hTZWN0aW9uKSB7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoQ2FyZHMgPSBzZWFyY2hTZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWNhcmQnKTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHNlYXJjaFNlY3Rpb24ucXVlcnlTZWxlY3RvcignLnNlYXJjaC1kZXNjcmlwdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaENvdW50ID0gTnVtYmVyKHNlYXJjaENhcmRzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZpcnN0U3RyID0gZGVjbE9mTnVtKHNlYXJjaENvdW50LCBbJ9C90LDQudC00LXQvScsICfQvdCw0LnQtNC10L3QvicsICfQvdCw0LnQtNC10L3RiyddKTtcclxuICAgICAgICBjb25zdCBzZWNvbmRTdHIgPSBkZWNsT2ZOdW0oc2VhcmNoQ291bnQsIFsn0YDQtdC30YPQu9GM0YLQsNGCJywgJ9GA0LXQt9GD0LvRjNGC0LDRgtCwJywgJ9GA0LXQt9GD0LvRjNGC0LDRgtC+0LInXSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtmaXJzdFN0cn0gJHtzZWFyY2hDb3VudH0gJHtzZWNvbmRTdHJ9YFxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IHNlYXJjaElucHV0ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VhcmNoV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdmJhcl9zZWFyY2gtaW5wdXQtLXdyYXBwZXInKVxyXG4gICAgY29uc3Qgb3BlbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItc2VhcmNoLWJ1dHRvbicpXHJcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItc2VhcmNoLWNsb3NlJyk7XHJcblxyXG4gICAgb3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBzZWFyY2hXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJy1hY3RpdmUnKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgc2VhcmNoV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCctYWN0aXZlJylcclxuICAgIH0pXHJcbn0iLCJpbXBvcnQgeyBzY3JvbGxJbnRvVmlldyB9IGZyb20gXCJzZWFtbGVzcy1zY3JvbGwtcG9seWZpbGxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzbW9vdGhTY3JvbGwgPSAoKSA9PiB7XHJcbiAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlci1tZW51X19pdGVtIGFcIik7XHJcblxyXG4gIGxpbmtzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgY29uc3QgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImhyZWZcIikuc3Vic3RyaW5nKDEpO1xyXG5cclxuICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuXHJcbiAgICAgIGlmIChzZWN0aW9uKSB7XHJcbiAgICAgICAgc2Nyb2xsSW50b1ZpZXcoc2VjdGlvbiwge1xyXG4gICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgICAgICBibG9jazogXCJzdGFydFwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbiIsImV4cG9ydCBjb25zdCB0YWJDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbltkYXRhLXRhYi1idG5dJylcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VUYWIgPSAoYWN0aXZlSW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtdGFiLWNvbnRlbnRdYClcclxuICBcclxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhY3RpdmVJbmRleCA9PT0gaWR4KSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29udGVudC5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICBpZiAoK2MuZGF0YXNldC50YWJDb250ZW50ID09PSBhY3RpdmVJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgYy5jbGFzc0xpc3QucmVtb3ZlKCctaGlkZScpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjLmNsYXNzTGlzdC5hZGQoJy1oaWRlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9ICtidXR0b24uZGF0YXNldC50YWJCdG5cclxuICAgICAgICAgICAgY2hhbmdlVGFiKGluZGV4KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGNoYW5nZVRhYigwKVxyXG5cclxuICAgIC8vINC00LvRjyDQvtGC0LzQtdGC0LrQuCDQutC90L7Qv9C+0Log0YLQsNCx0L7QsiDRg9GB0YLQsNC90LDQstC70LjQstCw0LXQvCBkYXRhINCw0YLRgtGA0LjQsdGD0YLRiyDRgSDQuNC90LTQtdC60YHQvtC8INC/0L4g0L/QvtGA0Y/QtNC60YMg0L7RgiDQvdGD0LvRjyBcclxuICAgIC8vIGRhdGEtdGFiLWJ0bj1cIjBcIlxyXG4gICAgLy8gZGF0YS10YWItYnRuPVwiMVwiXHJcblxyXG4gICAgLy8g0LTQu9GPINC+0YLQvNC10YLQutC4INGB0LzQtdC90Y/QtdC80L7Qs9C+INC60L7QvdGC0LXQvdGC0LAg0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10LwgZGF0YSDQsNGC0YLRgNC40LHRg9GC0Ysg0YEg0LjQvdC00LXQutGB0L7QvCDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RidC10LPQviDRgtCw0LHQsFxyXG4gICAgLy8gZGF0YS10YWItY29udGVudD1cIjBcIlxyXG4gICAgLy8gZGF0YS10YWItY29udGVudD1cIjFcIlxyXG5cclxuICAgIC8vINC00LvRjyDRgdC60YDRi9GC0LjRjyDQu9C40YjQvdC10LPQviDQutC+0L3RgtC10L3RgtCwINC00LDQtdC8INC60LvQsNGB0YEgLWhpZGVcclxufSIsImV4cG9ydCBjb25zdCB0aW1lbGluZSA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZWxpbmVcIik7XHJcblxyXG4gIGlmICh0aW1lbGluZSkge1xyXG4gICAgY29uc3QgdGltZWxpbmVJdGVtcyA9IHRpbWVsaW5lLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGltZWxpbmUtaXRlbVwiKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXItdGltZS10aXRsZVwiKTtcclxuICAgIGNvbnN0IGl0ZW1zID0gWy4uLnRpbWVsaW5lSXRlbXMsIHRpdGxlXTtcclxuXHJcbiAgICBsZXQgZG9jUmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBsZXQgaXNEb3dueCA9IHRydWU7XHJcbiAgICBsZXQgYWN0aXZlSW5kZXggPSAwO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrQWN0aXZlID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBkb2NSZWN0VGVtcCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICBpZiAoZG9jUmVjdFRlbXAueSA+IGRvY1JlY3QueSkge1xyXG4gICAgICAgIGlzRG93bnggPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpc0Rvd254ID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZG9jUmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICBpdGVtcy5mb3JFYWNoKChpLCBpZHgpID0+IHtcclxuICAgICAgICBjb25zdCByZWN0ID0gaS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgcmVjdCAmJlxyXG4gICAgICAgICAgcmVjdC55ID4gMCAmJlxyXG4gICAgICAgICAgcmVjdC55IDwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCAvIDJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGlmIChpc0Rvd254KSB7XHJcbiAgICAgICAgICAgIGlmIChpZHggPiBhY3RpdmVJbmRleCkge1xyXG4gICAgICAgICAgICAgIGFjdGl2ZUluZGV4ID0gaWR4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkuY2xhc3NMaXN0LnJlbW92ZShcIi1hY3RpdmVcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaWR4IDwgYWN0aXZlSW5kZXgpIHtcclxuICAgICAgICAgICAgICBhY3RpdmVJbmRleCA9IGlkeDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpLmNsYXNzTGlzdC5yZW1vdmUoXCItYWN0aXZlXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaXRlbXNbYWN0aXZlSW5kZXhdLmNsYXNzTGlzdC5hZGQoXCItYWN0aXZlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGkuY2xhc3NMaXN0LnJlbW92ZShcIi1hY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGVja0FjdGl2ZSk7XHJcbiAgICBjaGVja0FjdGl2ZSgpO1xyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHRvVG9wQnV0dG9uID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IGJhY2tUb1RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFjay10by10b3BcIik7XHJcblxyXG4gIC8vIGlmIChiYWNrVG9Ub3ApIHtcclxuICAvLyAgIC8vINCf0L7QutCw0LfQsNGC0Ywv0YHQutGA0YvRgtGMINC60L3QvtC/0LrRgyDQv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1INGB0YLRgNCw0L3QuNGG0YtcclxuICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAvLyAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gNDAwKSB7XHJcbiAgLy8gICAgICAgYmFja1RvVG9wLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAvLyAgICAgfSBlbHNlIHtcclxuICAvLyAgICAgICBiYWNrVG9Ub3Auc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KTtcclxuXHJcbiAgLy8gICAvLyDQn9C70LDQstC90LDRjyDQv9GA0L7QutGA0YPRgtC60LAg0L/RgNC4INC60LvQuNC60LUg0L3QsCDQutC90L7Qv9C60YNcclxuICAvLyAgIGJhY2tUb1RvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgLy8gICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCB5YW5kZXhNYXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgbWFwRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpXHJcbiAgaWYgKCFtYXBFbGVtZW50KSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgYXN5bmMgZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuICAgIGxldCB5bWFwczMgPSB3aW5kb3cueW1hcHMzO1xyXG4gICAgbGV0IG1hcDtcclxuXHJcbiAgICBhd2FpdCB5bWFwczMucmVhZHk7XHJcblxyXG4gICAgY29uc3QgeyBZTWFwLCBZTWFwRGVmYXVsdFNjaGVtZUxheWVyLCBZTWFwRGVmYXVsdEZlYXR1cmVzTGF5ZXIsIFlNYXBNYXJrZXIgfSA9IHltYXBzMztcclxuXHJcbiAgICBtYXAgPSBuZXcgWU1hcChcclxuICAgICAgbWFwRWxlbWVudCxcclxuICAgICAge1xyXG4gICAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgICBjZW50ZXI6IFs0Ni4wMDg5MTA4OTU1NjQ5OSwgNTEuNTcwNzc5NTkzNzk1OTFdLFxyXG4gICAgICAgICAgem9vbTogMTcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiZWhhdmlvcnM6IFtcImRyYWdcIiwgXCJwaW5jaFpvb21cIiwgXCJtb3VzZVRpbHRcIl0sXHJcbiAgICAgIH0sXHJcbiAgICAgIFtuZXcgWU1hcERlZmF1bHRTY2hlbWVMYXllcih7fSksIG5ldyBZTWFwRGVmYXVsdEZlYXR1cmVzTGF5ZXIoe30pXVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBtYXJrZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBtYXJrZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdjb250YWN0cy1tYXAtLWljb24tbWFya2VyJztcclxuICAgIG1hcmtlckVsZW1lbnQuc3R5bGUud2lkdGggPSAnODlweCdcclxuICAgIG1hcmtlckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzExN3B4J1xyXG4gICAgbWFya2VyRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSdcclxuICAgIG1hcmtlckVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSdcclxuICAgIG1hcmtlckVsZW1lbnQuc3JjID0gJy4vaW1hZ2VzL2ljb25zL21hcmtlci5wbmcnO1xyXG4gICAgbWFwLmFkZENoaWxkKG5ldyBZTWFwTWFya2VyKHtjb29yZGluYXRlczogW1xyXG4gICAgICAgIDQ2LjAwODI5NzI4MjU4OTcyLFxyXG4gICAgICAgIDUxLjU3MTU4MzUzODIyMzgzXHJcbiAgICBdfSwgbWFya2VyRWxlbWVudCkpO1xyXG4gIH1cclxuXHJcbiAgaW5pdE1hcCgpO1xyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgY2hlY2tCZWhhdmlvciA9IChiZWhhdmlvcikgPT4ge1xuICAgIHJldHVybiBiZWhhdmlvciA9PT0gdW5kZWZpbmVkIHx8IGJlaGF2aW9yID09PSBcImF1dG9cIiB8fCBiZWhhdmlvciA9PT0gXCJpbnN0YW50XCIgfHwgYmVoYXZpb3IgPT09IFwic21vb3RoXCI7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRTY3JvbGxYWSh4LCB5KSB7XG4gICAgdGhpcy5zY3JvbGxMZWZ0ID0geDtcbiAgICB0aGlzLnNjcm9sbFRvcCA9IHk7XG59XG5leHBvcnQgY29uc3QgZmFpbGVkRXhlY3V0ZSA9IChtZXRob2QsIG9iamVjdCwgcmVhc29uID0gXCJjYW5ub3QgY29udmVydCB0byBkaWN0aW9uYXJ5LlwiKSA9PiBgRmFpbGVkIHRvIGV4ZWN1dGUgJyR7bWV0aG9kfScgb24gJyR7b2JqZWN0fSc6ICR7cmVhc29ufWA7XG5leHBvcnQgY29uc3QgZmFpbGVkRXhlY3V0ZUludmFsaWRFbnVtVmFsdWUgPSAobWV0aG9kLCBvYmplY3QsIHZhbHVlKSA9PiBmYWlsZWRFeGVjdXRlKG1ldGhvZCwgb2JqZWN0LCBgVGhlIHByb3ZpZGVkIHZhbHVlICcke3ZhbHVlfScgaXMgbm90IGEgdmFsaWQgZW51bSB2YWx1ZSBvZiB0eXBlIFNjcm9sbEJlaGF2aW9yLmApO1xuLyogZXNsaW50LWRpc2FibGUgKi9cbmV4cG9ydCBjb25zdCBiYWNrdXBNZXRob2QgPSAocHJvdG8sIG1ldGhvZCwgZmFsbGJhY2spID0+IHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgYmFja3VwID0gYF9fU0VBTUxFU1MuQkFDS1VQJCR7bWV0aG9kfWA7XG4gICAgaWYgKCFwcm90b1tiYWNrdXBdICYmIHByb3RvW21ldGhvZF0gJiYgISgoX2EgPSBwcm90b1ttZXRob2RdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuX19pc1BvbHlmaWxsKSkge1xuICAgICAgICBwcm90b1tiYWNrdXBdID0gcHJvdG9bbWV0aG9kXTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3RvW2JhY2t1cF0gfHwgZmFsbGJhY2s7XG59O1xuLyogZXNsaW50LWVuYWJsZSAqL1xuZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgKHR5cGUgPT09IFwib2JqZWN0XCIgfHwgdHlwZSA9PT0gXCJmdW5jdGlvblwiKTtcbn07XG5leHBvcnQgY29uc3QgaXNTY3JvbGxCZWhhdmlvclN1cHBvcnRlZCA9IChjb25maWcpID0+IFwic2Nyb2xsQmVoYXZpb3JcIiBpbiB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIChjb25maWcgPT09IG51bGwgfHwgY29uZmlnID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb25maWcuZm9yY2VQb2x5ZmlsbCkgIT09IHRydWU7XG5leHBvcnQgY29uc3QgbWFya1BvbHlmaWxsID0gKG1ldGhvZCkgPT4ge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtZXRob2QsIFwiX19pc1BvbHlmaWxsXCIsIHsgdmFsdWU6IHRydWUgfSk7XG59O1xuZXhwb3J0IGNvbnN0IG1vZGlmeVByb3RvdHlwZXMgPSAocHJvcCwgZnVuYykgPT4ge1xuICAgIG1hcmtQb2x5ZmlsbChmdW5jKTtcbiAgICBbSFRNTEVsZW1lbnQucHJvdG90eXBlLCBTVkdFbGVtZW50LnByb3RvdHlwZSwgRWxlbWVudC5wcm90b3R5cGVdLmZvckVhY2goKHByb3RvdHlwZSkgPT4ge1xuICAgICAgICBiYWNrdXBNZXRob2QocHJvdG90eXBlLCBwcm9wKTtcbiAgICAgICAgcHJvdG90eXBlW3Byb3BdID0gZnVuYztcbiAgICB9KTtcbn07XG4vKipcbiAqIC0gT24gQ2hyb21lIGFuZCBGaXJlZm94LCBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IHdpbGwgcmV0dXJuIHRoZSA8aHRtbD4gZWxlbWVudC5cbiAqIC0gU2FmYXJpLCBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IHdpbGwgcmV0dXJuIHRoZSA8Ym9keT4gZWxlbWVudC5cbiAqIC0gT24gRWRnZSwgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB3aWxsIHJldHVybiB0aGUgPGJvZHk+IGVsZW1lbnQuXG4gKiAtIElFMTEgZG9lcyBub3Qgc3VwcG9ydCBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LCBidXQgeW91IGNhbiBhc3N1bWUgaXRzIDxodG1sPi5cbiAqL1xuZXhwb3J0IGNvbnN0IHNjcm9sbGluZ0VsZW1lbnQgPSAoZWxlbWVudCkgPT4gZWxlbWVudC5vd25lckRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbW1vbi5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gc2Nyb2xsRW5kRXZlbnQoYnViYmxlcykge1xuICAgIGlmICh0eXBlb2YgRXZlbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbmV3IEV2ZW50KFwic2Nyb2xsZW5kXCIsIHtcbiAgICAgICAgICAgIGJ1YmJsZXMsXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcbiAgICBldmVudC5pbml0RXZlbnQoXCJzY3JvbGxlbmRcIiwgYnViYmxlcywgZmFsc2UpO1xuICAgIHJldHVybiBldmVudDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjcm9sbC1lbmQtZXZlbnQuanMubWFwIiwiY29uc3QgZWFzZSA9IChrKSA9PiB7XG4gICAgcmV0dXJuIDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIGspKTtcbn07XG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vdygpIHtcbiAgICB2YXIgX2E7XG4gICAgbGV0IGZuO1xuICAgIGlmICgoX2EgPSB3aW5kb3cucGVyZm9ybWFuY2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ub3cpIHtcbiAgICAgICAgZm4gPSAoKSA9PiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmbiA9ICgpID0+IHdpbmRvdy5EYXRlLm5vdygpO1xuICAgIH1cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgbm93ID0gZm47XG4gICAgcmV0dXJuIGZuKCk7XG59XG4vKiBlc2xpbnQtZW5hYmxlICovXG5jb25zdCBEVVJBVElPTiA9IDUwMDtcbmV4cG9ydCBjb25zdCBzdGVwID0gKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IG5vdygpO1xuICAgIGNvbnN0IGVsYXBzZWQgPSAoY3VycmVudFRpbWUgLSBjb250ZXh0LnRpbWVTdGFtcCkgLyAoY29udGV4dC5kdXJhdGlvbiB8fCBEVVJBVElPTik7XG4gICAgaWYgKGVsYXBzZWQgPiAxKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kKGNvbnRleHQudGFyZ2V0WCwgY29udGV4dC50YXJnZXRZKTtcbiAgICAgICAgY29udGV4dC5jYWxsYmFjaygpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gKGNvbnRleHQudGltaW5nRnVuYyB8fCBlYXNlKShlbGFwc2VkKTtcbiAgICBjb25zdCBjdXJyZW50WCA9IGNvbnRleHQuc3RhcnRYICsgKGNvbnRleHQudGFyZ2V0WCAtIGNvbnRleHQuc3RhcnRYKSAqIHZhbHVlO1xuICAgIGNvbnN0IGN1cnJlbnRZID0gY29udGV4dC5zdGFydFkgKyAoY29udGV4dC50YXJnZXRZIC0gY29udGV4dC5zdGFydFkpICogdmFsdWU7XG4gICAgY29udGV4dC5tZXRob2QoY3VycmVudFgsIGN1cnJlbnRZKTtcbiAgICBjb250ZXh0LnJhZklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHN0ZXAoY29udGV4dCk7XG4gICAgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2Nyb2xsLXN0ZXAuanMubWFwIiwiaW1wb3J0IHsgYmFja3VwTWV0aG9kLCBjaGVja0JlaGF2aW9yLCBlbGVtZW50U2Nyb2xsWFksIGZhaWxlZEV4ZWN1dGUsIGZhaWxlZEV4ZWN1dGVJbnZhbGlkRW51bVZhbHVlLCBpc09iamVjdCwgc2Nyb2xsaW5nRWxlbWVudCwgfSBmcm9tIFwiLi9jb21tb24uanNcIjtcbmltcG9ydCB7IHNjcm9sbEVuZEV2ZW50IH0gZnJvbSBcIi4vc2Nyb2xsLWVuZC1ldmVudC5qc1wiO1xuaW1wb3J0IHsgbm93LCBzdGVwIH0gZnJvbSBcIi4vc2Nyb2xsLXN0ZXAuanNcIjtcbi8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3NvbS12aWV3LyNub3JtYWxpemUtbm9uLWZpbml0ZS12YWx1ZXNcbmNvbnN0IG5vbkZpbml0ZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICghaXNGaW5pdGUodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gTnVtYmVyKHZhbHVlKTtcbn07XG5jb25zdCBpc0Nvbm5lY3RlZCA9IChub2RlKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoKF9hID0gbm9kZS5pc0Nvbm5lY3RlZCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogKCFub2RlLm93bmVyRG9jdW1lbnQgfHxcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICAgICAgIShub2RlLm93bmVyRG9jdW1lbnQuY29tcGFyZURvY3VtZW50UG9zaXRpb24obm9kZSkgJiAvKiogRE9DVU1FTlRfUE9TSVRJT05fRElTQ09OTkVDVEVEICovIDEpKSk7XG59O1xuY29uc3Qgc2Nyb2xsV2l0aE9wdGlvbnMgPSAoZWxlbWVudCwgb3B0aW9ucywgY29uZmlnKSA9PiB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBpZiAoIWlzQ29ubmVjdGVkKGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3RhcnRYID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIGNvbnN0IHN0YXJ0WSA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IHRhcmdldFggPSBub25GaW5pdGUoKF9hID0gb3B0aW9ucy5sZWZ0KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBzdGFydFgpO1xuICAgIGNvbnN0IHRhcmdldFkgPSBub25GaW5pdGUoKF9iID0gb3B0aW9ucy50b3ApICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IHN0YXJ0WSk7XG4gICAgaWYgKHRhcmdldFggPT09IHN0YXJ0WCAmJiB0YXJnZXRZID09PSBzdGFydFkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmYWxsYmFjayA9IGJhY2t1cE1ldGhvZChIVE1MRWxlbWVudC5wcm90b3R5cGUsIFwic2Nyb2xsXCIsIGVsZW1lbnRTY3JvbGxYWSk7XG4gICAgY29uc3QgbWV0aG9kID0gYmFja3VwTWV0aG9kKE9iamVjdC5nZXRQcm90b3R5cGVPZihlbGVtZW50KSwgXCJzY3JvbGxcIiwgZmFsbGJhY2spLmJpbmQoZWxlbWVudCk7XG4gICAgaWYgKG9wdGlvbnMuYmVoYXZpb3IgIT09IFwic21vb3RoXCIpIHtcbiAgICAgICAgbWV0aG9kKHRhcmdldFgsIHRhcmdldFkpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZUV2ZW50TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgY2FuY2VsU2Nyb2xsKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgY2FuY2VsU2Nyb2xsKTtcbiAgICB9O1xuICAgIGNvbnN0IGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCk7XG4gICAgICAgIGNvbnN0IGlzRG9jdW1lbnQgPSBlbGVtZW50Lm5vZGVUeXBlID09PSAvKiogTm9kZS5ET0NVTUVOVF9OT0RFICovIDk7XG4gICAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChzY3JvbGxFbmRFdmVudChpc0RvY3VtZW50KSk7XG4gICAgfTtcbiAgICBjb25zdCBjb250ZXh0ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb25maWcpLCB7IHRpbWVTdGFtcDogbm93KCksIHN0YXJ0WCxcbiAgICAgICAgc3RhcnRZLFxuICAgICAgICB0YXJnZXRYLFxuICAgICAgICB0YXJnZXRZLCByYWZJZDogMCwgbWV0aG9kLFxuICAgICAgICBjYWxsYmFjayB9KTtcbiAgICBjb25zdCBjYW5jZWxTY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShjb250ZXh0LnJhZklkKTtcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBjYW5jZWxTY3JvbGwsIHtcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgICAgb25jZTogdHJ1ZSxcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBjYW5jZWxTY3JvbGwsIHtcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgICAgb25jZTogdHJ1ZSxcbiAgICB9KTtcbiAgICBzdGVwKGNvbnRleHQpO1xufTtcbmNvbnN0IGlzV2luZG93ID0gKG9iaikgPT4gb2JqLndpbmRvdyA9PT0gb2JqO1xuY29uc3QgY3JlYXRlU2Nyb2xsID0gKHNjcm9sbE5hbWUpID0+ICh0YXJnZXQsIHNjcm9sbE9wdGlvbnMsIGNvbmZpZykgPT4ge1xuICAgIGNvbnN0IFtlbGVtZW50LCBzY3JvbGxUeXBlXSA9IGlzV2luZG93KHRhcmdldClcbiAgICAgICAgPyBbc2Nyb2xsaW5nRWxlbWVudCh0YXJnZXQuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSwgXCJXaW5kb3dcIl1cbiAgICAgICAgOiBbdGFyZ2V0LCBcIkVsZW1lbnRcIl07XG4gICAgY29uc3Qgb3B0aW9ucyA9IHNjcm9sbE9wdGlvbnMgIT09IG51bGwgJiYgc2Nyb2xsT3B0aW9ucyAhPT0gdm9pZCAwID8gc2Nyb2xsT3B0aW9ucyA6IHt9O1xuICAgIGlmICghaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihmYWlsZWRFeGVjdXRlKHNjcm9sbE5hbWUsIHNjcm9sbFR5cGUpKTtcbiAgICB9XG4gICAgaWYgKCFjaGVja0JlaGF2aW9yKG9wdGlvbnMuYmVoYXZpb3IpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoZmFpbGVkRXhlY3V0ZUludmFsaWRFbnVtVmFsdWUoc2Nyb2xsTmFtZSwgc2Nyb2xsVHlwZSwgb3B0aW9ucy5iZWhhdmlvcikpO1xuICAgIH1cbiAgICBpZiAoc2Nyb2xsTmFtZSA9PT0gXCJzY3JvbGxCeVwiKSB7XG4gICAgICAgIG9wdGlvbnMubGVmdCA9IG5vbkZpbml0ZShvcHRpb25zLmxlZnQpICsgZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICBvcHRpb25zLnRvcCA9IG5vbkZpbml0ZShvcHRpb25zLnRvcCkgKyBlbGVtZW50LnNjcm9sbFRvcDtcbiAgICB9XG4gICAgc2Nyb2xsV2l0aE9wdGlvbnMoZWxlbWVudCwgb3B0aW9ucywgY29uZmlnKTtcbn07XG5leHBvcnQgY29uc3Qgc2Nyb2xsID0gLyogI19fUFVSRV9fICovIGNyZWF0ZVNjcm9sbChcInNjcm9sbFwiKTtcbmV4cG9ydCBjb25zdCBzY3JvbGxUbyA9IC8qICNfX1BVUkVfXyAqLyBjcmVhdGVTY3JvbGwoXCJzY3JvbGxUb1wiKTtcbmV4cG9ydCBjb25zdCBzY3JvbGxCeSA9IC8qICNfX1BVUkVfXyAqLyBjcmVhdGVTY3JvbGwoXCJzY3JvbGxCeVwiKTtcbmV4cG9ydCBjb25zdCBlbGVtZW50U2Nyb2xsID0gc2Nyb2xsO1xuZXhwb3J0IGNvbnN0IGVsZW1lbnRTY3JvbGxUbyA9IHNjcm9sbFRvO1xuZXhwb3J0IGNvbnN0IGVsZW1lbnRTY3JvbGxCeSA9IHNjcm9sbEJ5O1xuZXhwb3J0IGNvbnN0IHdpbmRvd1Njcm9sbCA9IHNjcm9sbDtcbmV4cG9ydCBjb25zdCB3aW5kb3dTY3JvbGxUbyA9IHNjcm9sbFRvO1xuZXhwb3J0IGNvbnN0IHdpbmRvd1Njcm9sbEJ5ID0gc2Nyb2xsQnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY3JvbGwuanMubWFwIiwiLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSAqL1xuaW1wb3J0IHsgY2hlY2tCZWhhdmlvciwgZmFpbGVkRXhlY3V0ZUludmFsaWRFbnVtVmFsdWUsIHNjcm9sbGluZ0VsZW1lbnQgfSBmcm9tIFwiLi9jb21tb24uanNcIjtcbmltcG9ydCB7IGVsZW1lbnRTY3JvbGwgfSBmcm9tIFwiLi9zY3JvbGwuanNcIjtcbi8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3Mtd3JpdGluZy1tb2Rlcy00LyNibG9jay1mbG93XG5jb25zdCBub3JtYWxpemVXcml0aW5nTW9kZSA9ICh3cml0aW5nTW9kZSkgPT4ge1xuICAgIHN3aXRjaCAod3JpdGluZ01vZGUpIHtcbiAgICAgICAgY2FzZSBcImhvcml6b250YWwtdGJcIjpcbiAgICAgICAgY2FzZSBcImxyXCI6XG4gICAgICAgIGNhc2UgXCJsci10YlwiOlxuICAgICAgICBjYXNlIFwicmxcIjpcbiAgICAgICAgY2FzZSBcInJsLXRiXCI6XG4gICAgICAgICAgICByZXR1cm4gMCAvKiBXcml0aW5nTW9kZS5Ib3Jpem9udGFsVGIgKi87XG4gICAgICAgIGNhc2UgXCJ2ZXJ0aWNhbC1ybFwiOlxuICAgICAgICBjYXNlIFwidGJcIjpcbiAgICAgICAgY2FzZSBcInRiLXJsXCI6XG4gICAgICAgICAgICByZXR1cm4gMSAvKiBXcml0aW5nTW9kZS5WZXJ0aWNhbFJsICovO1xuICAgICAgICBjYXNlIFwidmVydGljYWwtbHJcIjpcbiAgICAgICAgY2FzZSBcInRiLWxyXCI6XG4gICAgICAgICAgICByZXR1cm4gMiAvKiBXcml0aW5nTW9kZS5WZXJ0aWNhbExyICovO1xuICAgICAgICBjYXNlIFwic2lkZXdheXMtcmxcIjpcbiAgICAgICAgICAgIHJldHVybiAzIC8qIFdyaXRpbmdNb2RlLlNpZGV3YXlzUmwgKi87XG4gICAgICAgIGNhc2UgXCJzaWRld2F5cy1sclwiOlxuICAgICAgICAgICAgcmV0dXJuIDQgLyogV3JpdGluZ01vZGUuU2lkZXdheXNMciAqLztcbiAgICB9XG4gICAgcmV0dXJuIDAgLyogV3JpdGluZ01vZGUuSG9yaXpvbnRhbFRiICovO1xufTtcbmNvbnN0IGNhbGNQaHlzaWNhbEF4aXMgPSAod3JpdGluZ01vZGUsIGlzTFRSLCBoUG9zLCB2UG9zKSA9PiB7XG4gICAgLyoqICAwYnt2ZXJ0aWNhbH17aG9yaXpvbnRhbH0gIDA6IG5vcm1hbCwgMTogcmV2ZXJzZSAqL1xuICAgIGxldCBsYXlvdXQgPSAwYjAwO1xuICAgIC8qKlxuICAgICAqIFdyaXRpbmdNb2RlLlZlcnRpY2FsTHI6IOKGk+KGklxuICAgICAqIHwgMSB8IDQgfCAgIHxcbiAgICAgKiB8IDIgfCA1IHwgICB8XG4gICAgICogfCAzIHwgICB8ICAgfFxuICAgICAqXG4gICAgICogUlRMOiDihpHihpJcbiAgICAgKiB8IDMgfCAgIHwgICB8XG4gICAgICogfCAyIHwgNSB8ICAgfFxuICAgICAqIHwgMSB8IDQgfCAgIHxcbiAgICAgKi9cbiAgICBpZiAoIWlzTFRSKSB7XG4gICAgICAgIGxheW91dCBePSAyIC8qIE9QLlJldmVyc2VWZXJ0aWNhbCAqLztcbiAgICB9XG4gICAgc3dpdGNoICh3cml0aW5nTW9kZSkge1xuICAgICAgICAvKipcbiAgICAgICAgICog4oaT4oaSXG4gICAgICAgICAqIHwgMSB8IDIgfCAzIHxcbiAgICAgICAgICogfCA0IHwgNSB8ICAgfFxuICAgICAgICAgKiB8ICAgfCAgIHwgICB8XG4gICAgICAgICAqXG4gICAgICAgICAqIFJUTDog4oaT4oaQXG4gICAgICAgICAqIHwgMyB8IDIgfCAxIHxcbiAgICAgICAgICogfCAgIHwgNSB8IDQgfFxuICAgICAgICAgKiB8ICAgfCAgIHwgICB8XG4gICAgICAgICAqL1xuICAgICAgICBjYXNlIDAgLyogV3JpdGluZ01vZGUuSG9yaXpvbnRhbFRiICovOlxuICAgICAgICAgICAgLy8gc3dhcCBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbFxuICAgICAgICAgICAgbGF5b3V0ID0gKGxheW91dCA+PiAxKSB8ICgobGF5b3V0ICYgMSkgPDwgMSk7XG4gICAgICAgICAgICBbaFBvcywgdlBvc10gPSBbdlBvcywgaFBvc107XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOKGk+KGkFxuICAgICAgICAgKiB8ICAgfCA0IHwgMSB8XG4gICAgICAgICAqIHwgICB8IDUgfCAyIHxcbiAgICAgICAgICogfCAgIHwgICB8IDMgfFxuICAgICAgICAgKlxuICAgICAgICAgKiBSVEw6IOKGkeKGkFxuICAgICAgICAgKiB8ICAgfCAgIHwgMyB8XG4gICAgICAgICAqIHwgICB8IDUgfCAyIHxcbiAgICAgICAgICogfCAgIHwgNCB8IDEgfFxuICAgICAgICAgKi9cbiAgICAgICAgY2FzZSAxIC8qIFdyaXRpbmdNb2RlLlZlcnRpY2FsUmwgKi86XG4gICAgICAgIGNhc2UgMyAvKiBXcml0aW5nTW9kZS5TaWRld2F5c1JsICovOlxuICAgICAgICAgICAgLy8gIHJldmVyc2UgaG9yaXpvbnRhbFxuICAgICAgICAgICAgbGF5b3V0IF49IDEgLyogT1AuUmV2ZXJzZUhvcml6b250YWwgKi87XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOKGkeKGklxuICAgICAgICAgKiB8IDMgfCAgIHwgICB8XG4gICAgICAgICAqIHwgMiB8IDUgfCAgIHxcbiAgICAgICAgICogfCAxIHwgNCB8ICAgfFxuICAgICAgICAgKlxuICAgICAgICAgKiBSVEw6IOKGk+KGklxuICAgICAgICAgKiB8IDEgfCA0IHwgICB8XG4gICAgICAgICAqIHwgMiB8IDUgfCAgIHxcbiAgICAgICAgICogfCAzIHwgICB8ICAgfFxuICAgICAgICAgKi9cbiAgICAgICAgY2FzZSA0IC8qIFdyaXRpbmdNb2RlLlNpZGV3YXlzTHIgKi86XG4gICAgICAgICAgICAvLyByZXZlcnNlIHZlcnRpY2FsXG4gICAgICAgICAgICBsYXlvdXQgXj0gMiAvKiBPUC5SZXZlcnNlVmVydGljYWwgKi87XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIFtsYXlvdXQsIGhQb3MsIHZQb3NdO1xufTtcbmNvbnN0IGlzWFJldmVyc2VkID0gKGNvbXB1dGVkU3R5bGUpID0+IHtcbiAgICBjb25zdCBsYXlvdXQgPSBjYWxjUGh5c2ljYWxBeGlzKG5vcm1hbGl6ZVdyaXRpbmdNb2RlKGNvbXB1dGVkU3R5bGUud3JpdGluZ01vZGUpLCBjb21wdXRlZFN0eWxlLmRpcmVjdGlvbiAhPT0gXCJydGxcIiwgdW5kZWZpbmVkLCB1bmRlZmluZWQpWzBdO1xuICAgIHJldHVybiAobGF5b3V0ICYgMSkgPT09IDE7XG59O1xuLy8gaHR0cHM6Ly9zb3VyY2UuY2hyb21pdW0ub3JnL2Nocm9taXVtL2Nocm9taXVtL3NyYy8rL21haW46dGhpcmRfcGFydHkvYmxpbmsvcmVuZGVyZXIvY29yZS9kb20vZWxlbWVudC5jYztsPTEwOTctMTE4OTtkcmM9NmE3NTMzZDRhMWU5ZjIzNzIyMjNhOWQ5MTJhOWU1M2E2ZmEzNWFlMFxuY29uc3QgdG9QaHlzaWNhbEFsaWdubWVudCA9IChvcHRpb25zLCB3cml0aW5nTW9kZSwgaXNMVFIpID0+IHtcbiAgICBjb25zdCBbbGF5b3V0LCBoUG9zLCB2UG9zXSA9IGNhbGNQaHlzaWNhbEF4aXMod3JpdGluZ01vZGUsIGlzTFRSLCBvcHRpb25zLmJsb2NrIHx8IFwic3RhcnRcIiwgb3B0aW9ucy5pbmxpbmUgfHwgXCJuZWFyZXN0XCIpO1xuICAgIHJldHVybiBbaFBvcywgdlBvc10ubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSBcImNlbnRlclwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAxIC8qIFNjcm9sbEFsaWdubWVudC5DZW50ZXJBbHdheXMgKi87XG4gICAgICAgICAgICBjYXNlIFwibmVhcmVzdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAwIC8qIFNjcm9sbEFsaWdubWVudC5Ub0VkZ2VJZk5lZWRlZCAqLztcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXZlcnNlID0gKGxheW91dCA+PiBpbmRleCkgJiAxO1xuICAgICAgICAgICAgICAgIHJldHVybiAodmFsdWUgPT09IFwic3RhcnRcIikgPT09ICFyZXZlcnNlID8gMiAvKiBTY3JvbGxBbGlnbm1lbnQuTGVmdE9yVG9wICovIDogMyAvKiBTY3JvbGxBbGlnbm1lbnQuUmlnaHRPckJvdHRvbSAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcbi8vIGNvZGUgZnJvbSBzdGlwc2FuL2NvbXB1dGUtc2Nyb2xsLWludG8tdmlld1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3N0aXBzYW4vY29tcHV0ZS1zY3JvbGwtaW50by12aWV3L2Jsb2IvNTM5NmM2Yjc4YWY1ZDBiYmNlMTFhN2M0ZTkzY2MzMTQ2NTQ2ZmNkMy9zcmMvaW5kZXgudHNcbi8qKlxuICogRmluZCBvdXQgd2hpY2ggZWRnZSB0byBhbGlnbiBhZ2FpbnN0IHdoZW4gbG9naWNhbCBzY3JvbGwgcG9zaXRpb24gaXMgXCJuZWFyZXN0XCJcbiAqIEludGVyZXN0aW5nIGZhY3Q6IFwibmVhcmVzdFwiIHdvcmtzIHNpbWlsYXJpbHkgdG8gXCJpZi1uZWVkZWRcIiwgaWYgdGhlIGVsZW1lbnQgaXMgZnVsbHkgdmlzaWJsZSBpdCB3aWxsIG5vdCBzY3JvbGwgaXRcbiAqXG4gKiBMZWdlbmRzOlxuICog4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQIOKUjyDilIEg4pSBIOKUgSDilJNcbiAqIOKUgiB0YXJnZXQg4pSCICAgZnJhbWVcbiAqIOKUlOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUmCDilJcg4pSBIOKUgSDilIEg4pSbXG4gKi9cbmNvbnN0IG1hcE5lYXJlc3QgPSAoYWxpZ24sIHNjcm9sbGluZ0VkZ2VTdGFydCwgc2Nyb2xsaW5nRWRnZUVuZCwgc2Nyb2xsaW5nU2l6ZSwgZWxlbWVudEVkZ2VTdGFydCwgZWxlbWVudEVkZ2VFbmQsIGVsZW1lbnRTaXplKSA9PiB7XG4gICAgaWYgKGFsaWduICE9PSAwIC8qIFNjcm9sbEFsaWdubWVudC5Ub0VkZ2VJZk5lZWRlZCAqLykge1xuICAgICAgICByZXR1cm4gYWxpZ247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIGVsZW1lbnQgZWRnZSBBIGFuZCBlbGVtZW50IGVkZ2UgQiBhcmUgYm90aCBvdXRzaWRlIHNjcm9sbGluZyBib3ggZWRnZSBBIGFuZCBzY3JvbGxpbmcgYm94IGVkZ2UgQlxuICAgICAqXG4gICAgICogICAgICAgICAg4pSM4pSA4pSA4pSQXG4gICAgICogICAgICAgIOKUj+KUgeKUguKUgeKUgeKUguKUgeKUk1xuICAgICAqICAgICAgICAgIOKUgiAg4pSCXG4gICAgICogICAgICAgIOKUgyDilIIgIOKUgiDilIMgICAgICAgIGRvIG5vdGhpbmdcbiAgICAgKiAgICAgICAgICDilIIgIOKUglxuICAgICAqICAgICAgICDilJfilIHilILilIHilIHilILilIHilJtcbiAgICAgKiAgICAgICAgICDilJTilIDilIDilJhcbiAgICAgKlxuICAgICAqICBJZiBlbGVtZW50IGVkZ2UgQyBhbmQgZWxlbWVudCBlZGdlIEQgYXJlIGJvdGggb3V0c2lkZSBzY3JvbGxpbmcgYm94IGVkZ2UgQyBhbmQgc2Nyb2xsaW5nIGJveCBlZGdlIERcbiAgICAgKlxuICAgICAqICAgIOKUjyDilIEg4pSBIOKUgSDilIEg4pSTXG4gICAgICogICDilIzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJBcbiAgICAgKiAgIOKUguKUgyAgICAgICAgIOKUg+KUgiAgICAgICAgZG8gbm90aGluZ1xuICAgICAqICAg4pSU4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSYXG4gICAgICogICAg4pSXIOKUgSDilIEg4pSBIOKUgSDilJtcbiAgICAgKi9cbiAgICBpZiAoKGVsZW1lbnRFZGdlU3RhcnQgPCBzY3JvbGxpbmdFZGdlU3RhcnQgJiYgZWxlbWVudEVkZ2VFbmQgPiBzY3JvbGxpbmdFZGdlRW5kKSB8fFxuICAgICAgICAoZWxlbWVudEVkZ2VTdGFydCA+IHNjcm9sbGluZ0VkZ2VTdGFydCAmJiBlbGVtZW50RWRnZUVuZCA8IHNjcm9sbGluZ0VkZ2VFbmQpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiBlbGVtZW50IGVkZ2UgQSBpcyBvdXRzaWRlIHNjcm9sbGluZyBib3ggZWRnZSBBIGFuZCBlbGVtZW50IGhlaWdodCBpcyBsZXNzIHRoYW4gc2Nyb2xsaW5nIGJveCBoZWlnaHRcbiAgICAgKlxuICAgICAqICAgICAgICAgIOKUjOKUgOKUgOKUkFxuICAgICAqICAgICAgICDilI/ilIHilILilIHilIHilILilIHilJMgICAgICAgICDilI/ilIHilIzilIHilIHilJDilIHilJNcbiAgICAgKiAgICAgICAgICDilJTilIDilIDilJggICAgICAgICAgICAg4pSCICDilIJcbiAgICAgKiAgZnJvbSAg4pSDICAgICAg4pSDICAgICB0byAg4pSDIOKUlOKUgOKUgOKUmCDilINcbiAgICAgKlxuICAgICAqICAgICAgICDilJfilIEg4pSB4pSBIOKUgeKUmyAgICAgICAgIOKUl+KUgSDilIHilIEg4pSB4pSbXG4gICAgICpcbiAgICAgKiBJZiBlbGVtZW50IGVkZ2UgQiBpcyBvdXRzaWRlIHNjcm9sbGluZyBib3ggZWRnZSBCIGFuZCBlbGVtZW50IGhlaWdodCBpcyBncmVhdGVyIHRoYW4gc2Nyb2xsaW5nIGJveCBoZWlnaHRcbiAgICAgKlxuICAgICAqICAgICAgICDilI/ilIEg4pSB4pSBIOKUgeKUkyAgICAgICAgIOKUj+KUgeKUjOKUgeKUgeKUkOKUgeKUk1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCICDilIJcbiAgICAgKiAgZnJvbSAg4pSDIOKUjOKUgOKUgOKUkCDilIMgICAgIHRvICDilIMg4pSCICDilIIg4pSDXG4gICAgICogICAgICAgICAg4pSCICDilIIgICAgICAgICAgICAg4pSCICDilIJcbiAgICAgKiAgICAgICAg4pSX4pSB4pSC4pSB4pSB4pSC4pSB4pSbICAgICAgICAg4pSX4pSB4pSC4pSB4pSB4pSC4pSB4pSbXG4gICAgICogICAgICAgICAg4pSCICDilIIgICAgICAgICAgICAg4pSU4pSA4pSA4pSYXG4gICAgICogICAgICAgICAg4pSCICDilIJcbiAgICAgKiAgICAgICAgICDilJTilIDilIDilJhcbiAgICAgKlxuICAgICAqIElmIGVsZW1lbnQgZWRnZSBDIGlzIG91dHNpZGUgc2Nyb2xsaW5nIGJveCBlZGdlIEMgYW5kIGVsZW1lbnQgd2lkdGggaXMgbGVzcyB0aGFuIHNjcm9sbGluZyBib3ggd2lkdGhcbiAgICAgKlxuICAgICAqICAgICAgIGZyb20gICAgICAgICAgICAgICAgIHRvXG4gICAgICogICAg4pSPIOKUgSDilIEg4pSBIOKUgSDilJMgICAgICAgICDilI8g4pSBIOKUgSDilIEg4pSBIOKUk1xuICAgICAqICDilIzilIDilIDilIDilJAgICAgICAgICAgICAgICAgIOKUjOKUgOKUgOKUgOKUkFxuICAgICAqICDilIIg4pSDIOKUgiAgICAgICDilIMgICAgICAgICDilIMgICDilIIgICAgIOKUg1xuICAgICAqICDilJTilIDilIDilIDilJggICAgICAgICAgICAgICAgIOKUlOKUgOKUgOKUgOKUmFxuICAgICAqICAgIOKUlyDilIEg4pSBIOKUgSDilIEg4pSbICAgICAgICAg4pSXIOKUgSDilIEg4pSBIOKUgSDilJtcbiAgICAgKlxuICAgICAqIElmIGVsZW1lbnQgZWRnZSBEIGlzIG91dHNpZGUgc2Nyb2xsaW5nIGJveCBlZGdlIEQgYW5kIGVsZW1lbnQgd2lkdGggaXMgZ3JlYXRlciB0aGFuIHNjcm9sbGluZyBib3ggd2lkdGhcbiAgICAgKlxuICAgICAqICAgICAgIGZyb20gICAgICAgICAgICAgICAgIHRvXG4gICAgICogICAg4pSPIOKUgSDilIEg4pSBIOKUgSDilJMgICAgICAgICDilI8g4pSBIOKUgSDilIEg4pSBIOKUk1xuICAgICAqICAgICAgICDilIzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJAgICDilIzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJBcbiAgICAgKiAgICDilIMgICDilIIgICAgIOKUgyAgICAg4pSCICAg4pSDICAgICAgICAg4pSDIOKUglxuICAgICAqICAgICAgICDilJTilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJggICDilJTilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJhcbiAgICAgKiAgICDilJcg4pSBIOKUgSDilIEg4pSBIOKUmyAgICAgICAgIOKUlyDilIEg4pSBIOKUgSDilIEg4pSbXG4gICAgICovXG4gICAgaWYgKChlbGVtZW50RWRnZVN0YXJ0IDw9IHNjcm9sbGluZ0VkZ2VTdGFydCAmJiBlbGVtZW50U2l6ZSA8PSBzY3JvbGxpbmdTaXplKSB8fFxuICAgICAgICAoZWxlbWVudEVkZ2VFbmQgPj0gc2Nyb2xsaW5nRWRnZUVuZCAmJiBlbGVtZW50U2l6ZSA+PSBzY3JvbGxpbmdTaXplKSkge1xuICAgICAgICByZXR1cm4gMiAvKiBTY3JvbGxBbGlnbm1lbnQuTGVmdE9yVG9wICovO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiBlbGVtZW50IGVkZ2UgQiBpcyBvdXRzaWRlIHNjcm9sbGluZyBib3ggZWRnZSBCIGFuZCBlbGVtZW50IGhlaWdodCBpcyBsZXNzIHRoYW4gc2Nyb2xsaW5nIGJveCBoZWlnaHRcbiAgICAgKlxuICAgICAqICAgICAgICDilI/ilIEg4pSB4pSBIOKUgeKUkyAgICAgICAgIOKUj+KUgSDilIHilIEg4pSB4pSTXG4gICAgICpcbiAgICAgKiAgZnJvbSAg4pSDICAgICAg4pSDICAgICB0byAg4pSDIOKUjOKUgOKUgOKUkCDilINcbiAgICAgKiAgICAgICAgICDilIzilIDilIDilJAgICAgICAgICAgICAg4pSCICDilIJcbiAgICAgKiAgICAgICAg4pSX4pSB4pSC4pSB4pSB4pSC4pSB4pSbICAgICAgICAg4pSX4pSB4pSU4pSB4pSB4pSY4pSB4pSbXG4gICAgICogICAgICAgICAg4pSU4pSA4pSA4pSYXG4gICAgICpcbiAgICAgKiBJZiBlbGVtZW50IGVkZ2UgQSBpcyBvdXRzaWRlIHNjcm9sbGluZyBib3ggZWRnZSBBIGFuZCBlbGVtZW50IGhlaWdodCBpcyBncmVhdGVyIHRoYW4gc2Nyb2xsaW5nIGJveCBoZWlnaHRcbiAgICAgKlxuICAgICAqICAgICAgICAgIOKUjOKUgOKUgOKUkFxuICAgICAqICAgICAgICAgIOKUgiAg4pSCXG4gICAgICogICAgICAgICAg4pSCICDilIIgICAgICAgICAgICAg4pSM4pSA4pSA4pSQXG4gICAgICogICAgICAgIOKUj+KUgeKUguKUgeKUgeKUguKUgeKUkyAgICAgICAgIOKUj+KUgeKUguKUgeKUgeKUguKUgeKUk1xuICAgICAqICAgICAgICAgIOKUgiAg4pSCICAgICAgICAgICAgIOKUgiAg4pSCXG4gICAgICogIGZyb20gIOKUgyDilJTilIDilIDilJgg4pSDICAgICB0byAg4pSDIOKUgiAg4pSCIOKUg1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCICDilIJcbiAgICAgKiAgICAgICAg4pSX4pSBIOKUgeKUgSDilIHilJsgICAgICAgICDilJfilIHilJTilIHilIHilJjilIHilJtcbiAgICAgKlxuICAgICAqIElmIGVsZW1lbnQgZWRnZSBDIGlzIG91dHNpZGUgc2Nyb2xsaW5nIGJveCBlZGdlIEMgYW5kIGVsZW1lbnQgd2lkdGggaXMgZ3JlYXRlciB0aGFuIHNjcm9sbGluZyBib3ggd2lkdGhcbiAgICAgKlxuICAgICAqICAgICAgICAgICBmcm9tICAgICAgICAgICAgICAgICB0b1xuICAgICAqICAgICAgICDilI8g4pSBIOKUgSDilIEg4pSBIOKUkyAgICAgICAgIOKUjyDilIEg4pSBIOKUgSDilIEg4pSTXG4gICAgICogIOKUjOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUkCAgICAgICAgICAg4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQXG4gICAgICogIOKUgiAgICAg4pSDICAgICDilIIgICDilIMgICAgICAg4pSCIOKUgyAgICAgICAgIOKUg1xuICAgICAqICDilJTilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJggICAgICAgICAgIOKUlOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUmFxuICAgICAqICAgICAgICDilJcg4pSBIOKUgSDilIEg4pSBIOKUmyAgICAgICAgIOKUlyDilIEg4pSBIOKUgSDilIEg4pSbXG4gICAgICpcbiAgICAgKiBJZiBlbGVtZW50IGVkZ2UgRCBpcyBvdXRzaWRlIHNjcm9sbGluZyBib3ggZWRnZSBEIGFuZCBlbGVtZW50IHdpZHRoIGlzIGxlc3MgdGhhbiBzY3JvbGxpbmcgYm94IHdpZHRoXG4gICAgICpcbiAgICAgKiAgICAgICAgICAgZnJvbSAgICAgICAgICAgICAgICAgdG9cbiAgICAgKiAgICAgICAg4pSPIOKUgSDilIEg4pSBIOKUgSDilJMgICAgICAgICDilI8g4pSBIOKUgSDilIEg4pSBIOKUk1xuICAgICAqICAgICAgICAgICAgICAgIOKUjOKUgOKUgOKUgOKUkCAgICAgICAgICAgICDilIzilIDilIDilIDilJBcbiAgICAgKiAgICAgICAg4pSDICAgICAgIOKUgiDilIMg4pSCICAgICAgIOKUgyAgICAg4pSCICAg4pSDXG4gICAgICogICAgICAgICAgICAgICAg4pSU4pSA4pSA4pSA4pSYICAgICAgICAgICAgIOKUlOKUgOKUgOKUgOKUmFxuICAgICAqICAgICAgICDilJcg4pSBIOKUgSDilIEg4pSBIOKUmyAgICAgICAgIOKUlyDilIEg4pSBIOKUgSDilIEg4pSbXG4gICAgICpcbiAgICAgKi9cbiAgICBpZiAoKGVsZW1lbnRFZGdlRW5kID4gc2Nyb2xsaW5nRWRnZUVuZCAmJiBlbGVtZW50U2l6ZSA8IHNjcm9sbGluZ1NpemUpIHx8XG4gICAgICAgIChlbGVtZW50RWRnZVN0YXJ0IDwgc2Nyb2xsaW5nRWRnZVN0YXJ0ICYmIGVsZW1lbnRTaXplID4gc2Nyb2xsaW5nU2l6ZSkpIHtcbiAgICAgICAgcmV0dXJuIDMgLyogU2Nyb2xsQWxpZ25tZW50LlJpZ2h0T3JCb3R0b20gKi87XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcbmNvbnN0IGNhbk92ZXJmbG93ID0gKG92ZXJmbG93KSA9PiB7XG4gICAgcmV0dXJuIG92ZXJmbG93ICE9PSBcInZpc2libGVcIiAmJiBvdmVyZmxvdyAhPT0gXCJjbGlwXCI7XG59O1xuY29uc3QgZ2V0RnJhbWVFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuICgoX2EgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mcmFtZUVsZW1lbnQpIHx8IG51bGw7XG4gICAgfVxuICAgIGNhdGNoIChfYikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59O1xuY29uc3QgaXNTY3JvbGxhYmxlID0gKGVsZW1lbnQsIGNvbXB1dGVkU3R5bGUpID0+IHtcbiAgICBpZiAoZWxlbWVudC5jbGllbnRIZWlnaHQgPCBlbGVtZW50LnNjcm9sbEhlaWdodCB8fCBlbGVtZW50LmNsaWVudFdpZHRoIDwgZWxlbWVudC5zY3JvbGxXaWR0aCkge1xuICAgICAgICByZXR1cm4gKGNhbk92ZXJmbG93KGNvbXB1dGVkU3R5bGUub3ZlcmZsb3dZKSB8fFxuICAgICAgICAgICAgY2FuT3ZlcmZsb3coY29tcHV0ZWRTdHlsZS5vdmVyZmxvd1gpIHx8XG4gICAgICAgICAgICBlbGVtZW50ID09PSBzY3JvbGxpbmdFbGVtZW50KGVsZW1lbnQpKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmNvbnN0IHBhcmVudEVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHBOb2RlID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIGNvbnN0IHBFbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGlmIChwRWxlbWVudCA9PT0gbnVsbCAmJiBwTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAocE5vZGUubm9kZVR5cGUgPT09IC8qKiBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgKi8gMTEpIHtcbiAgICAgICAgICAgIHJldHVybiBwTm9kZS5ob3N0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwTm9kZS5ub2RlVHlwZSA9PT0gLyoqIE5vZGUuRE9DVU1FTlRfTk9ERSAqLyA5KSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RnJhbWVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwRWxlbWVudDtcbn07XG5jb25zdCBjbGFtcCA9ICh2YWx1ZSwgbWluLCBtYXgpID0+IHtcbiAgICBpZiAodmFsdWUgPCBtaW4pIHtcbiAgICAgICAgcmV0dXJuIG1pbjtcbiAgICB9XG4gICAgaWYgKHZhbHVlID4gbWF4KSB7XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn07XG5jb25zdCBnZXRTdXBwb3J0ZWRTY3JvbGxNYXJnaW5Qcm9wZXJ0eSA9IChvd25lckRvY3VtZW50KSA9PiB7XG4gICAgLy8gV2Via2l0IHVzZXMgXCJzY3JvbGwtc25hcC1tYXJnaW5cIiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTg5MjY1LlxuICAgIHJldHVybiBbXCJzY3JvbGwtbWFyZ2luXCIsIFwic2Nyb2xsLXNuYXAtbWFyZ2luXCJdLmZpbHRlcigocHJvcGVydHkpID0+IHByb3BlcnR5IGluIG93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlKVswXTtcbn07XG5jb25zdCBnZXRFbGVtZW50U2Nyb2xsU25hcEFyZWEgPSAoZWxlbWVudCwgZWxlbWVudFJlY3QsIGNvbXB1dGVkU3R5bGUpID0+IHtcbiAgICBjb25zdCB7IHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCB9ID0gZWxlbWVudFJlY3Q7XG4gICAgY29uc3Qgc2Nyb2xsUHJvcGVydHkgPSBnZXRTdXBwb3J0ZWRTY3JvbGxNYXJnaW5Qcm9wZXJ0eShlbGVtZW50Lm93bmVyRG9jdW1lbnQpO1xuICAgIGlmICghc2Nyb2xsUHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuIFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdO1xuICAgIH1cbiAgICBjb25zdCBzY3JvbGxNYXJnaW5WYWx1ZSA9IChlZGdlKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGAke3Njcm9sbFByb3BlcnR5fS0ke2VkZ2V9YCk7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApIHx8IDA7XG4gICAgfTtcbiAgICByZXR1cm4gW1xuICAgICAgICB0b3AgLSBzY3JvbGxNYXJnaW5WYWx1ZShcInRvcFwiKSxcbiAgICAgICAgcmlnaHQgKyBzY3JvbGxNYXJnaW5WYWx1ZShcInJpZ2h0XCIpLFxuICAgICAgICBib3R0b20gKyBzY3JvbGxNYXJnaW5WYWx1ZShcImJvdHRvbVwiKSxcbiAgICAgICAgbGVmdCAtIHNjcm9sbE1hcmdpblZhbHVlKFwibGVmdFwiKSxcbiAgICBdO1xufTtcbmNvbnN0IGNhbGNBbGlnbkVkZ2UgPSAoYWxpZ24sIHN0YXJ0LCBlbmQpID0+IHtcbiAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICAgIGNhc2UgMSAvKiBTY3JvbGxBbGlnbm1lbnQuQ2VudGVyQWx3YXlzICovOlxuICAgICAgICAgICAgcmV0dXJuIChzdGFydCArIGVuZCkgLyAyO1xuICAgICAgICBjYXNlIDMgLyogU2Nyb2xsQWxpZ25tZW50LlJpZ2h0T3JCb3R0b20gKi86XG4gICAgICAgICAgICByZXR1cm4gZW5kO1xuICAgICAgICBjYXNlIDIgLyogU2Nyb2xsQWxpZ25tZW50LkxlZnRPclRvcCAqLzpcbiAgICAgICAgY2FzZSAwIC8qIFNjcm9sbEFsaWdubWVudC5Ub0VkZ2VJZk5lZWRlZCAqLzpcbiAgICAgICAgICAgIHJldHVybiBzdGFydDtcbiAgICB9XG59O1xuY29uc3QgZ2V0RnJhbWVWaWV3cG9ydCA9IChmcmFtZSwgZnJhbWVSZWN0KSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgY29uc3QgdmlzdWFsVmlld3BvcnQgPSAoX2EgPSBmcmFtZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmlzdWFsVmlld3BvcnQ7XG4gICAgY29uc3QgW3gsIHksIHdpZHRoLCBoZWlnaHRdID0gZnJhbWUgPT09IHNjcm9sbGluZ0VsZW1lbnQoZnJhbWUpXG4gICAgICAgID8gWzAsIDAsIChfYiA9IHZpc3VhbFZpZXdwb3J0ID09PSBudWxsIHx8IHZpc3VhbFZpZXdwb3J0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2aXN1YWxWaWV3cG9ydC53aWR0aCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogZnJhbWUuY2xpZW50V2lkdGgsIChfYyA9IHZpc3VhbFZpZXdwb3J0ID09PSBudWxsIHx8IHZpc3VhbFZpZXdwb3J0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2aXN1YWxWaWV3cG9ydC5oZWlnaHQpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IGZyYW1lLmNsaWVudEhlaWdodF1cbiAgICAgICAgOiBbZnJhbWVSZWN0LmxlZnQsIGZyYW1lUmVjdC50b3AsIGZyYW1lLmNsaWVudFdpZHRoLCBmcmFtZS5jbGllbnRIZWlnaHRdO1xuICAgIGNvbnN0IGxlZnQgPSB4ICsgZnJhbWUuY2xpZW50TGVmdDtcbiAgICBjb25zdCB0b3AgPSB5ICsgZnJhbWUuY2xpZW50VG9wO1xuICAgIGNvbnN0IHJpZ2h0ID0gbGVmdCArIHdpZHRoO1xuICAgIGNvbnN0IGJvdHRvbSA9IHRvcCArIGhlaWdodDtcbiAgICByZXR1cm4gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF07XG59O1xuY29uc3QgY29tcHV0ZVNjcm9sbEludG9WaWV3ID0gKGVsZW1lbnQsIG9wdGlvbnMpID0+IHtcbiAgICAvLyBDb2xsZWN0IGFsbCB0aGUgc2Nyb2xsaW5nIGJveGVzLCBhcyBkZWZpbmVkIGluIHRoZSBzcGVjOiBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3Nzb20tdmlldy8jc2Nyb2xsaW5nLWJveFxuICAgIGNvbnN0IGFjdGlvbnMgPSBbXTtcbiAgICBsZXQgb3duZXJEb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgICBsZXQgb3duZXJXaW5kb3cgPSBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgIGlmICghb3duZXJXaW5kb3cpIHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbnM7XG4gICAgfVxuICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICBjb25zdCBpc0xUUiA9IGNvbXB1dGVkU3R5bGUuZGlyZWN0aW9uICE9PSBcInJ0bFwiO1xuICAgIGNvbnN0IHdyaXRpbmdNb2RlID0gbm9ybWFsaXplV3JpdGluZ01vZGUoY29tcHV0ZWRTdHlsZS53cml0aW5nTW9kZSB8fFxuICAgICAgICBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCItd2Via2l0LXdyaXRpbmctbW9kZVwiKSB8fFxuICAgICAgICBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCItbXMtd3JpdGluZy1tb2RlXCIpKTtcbiAgICBjb25zdCBbYWxpZ25ILCBhbGlnblZdID0gdG9QaHlzaWNhbEFsaWdubWVudChvcHRpb25zLCB3cml0aW5nTW9kZSwgaXNMVFIpO1xuICAgIGxldCBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XSA9IGdldEVsZW1lbnRTY3JvbGxTbmFwQXJlYShlbGVtZW50LCBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBjb21wdXRlZFN0eWxlKTtcbiAgICBmb3IgKGxldCBmcmFtZSA9IHBhcmVudEVsZW1lbnQoZWxlbWVudCk7IGZyYW1lICE9PSBudWxsOyBmcmFtZSA9IHBhcmVudEVsZW1lbnQoZnJhbWUpKSB7XG4gICAgICAgIGlmIChvd25lckRvY3VtZW50ICE9PSBmcmFtZS5vd25lckRvY3VtZW50KSB7XG4gICAgICAgICAgICBvd25lckRvY3VtZW50ID0gZnJhbWUub3duZXJEb2N1bWVudDtcbiAgICAgICAgICAgIG93bmVyV2luZG93ID0gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICAgICAgICAgIGlmICghb3duZXJXaW5kb3cpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgbGVmdDogZFgsIHRvcDogZFkgfSA9IGZyYW1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgdG9wICs9IGRZO1xuICAgICAgICAgICAgcmlnaHQgKz0gZFg7XG4gICAgICAgICAgICBib3R0b20gKz0gZFk7XG4gICAgICAgICAgICBsZWZ0ICs9IGRYO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZyYW1lU3R5bGUgPSBvd25lcldpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGZyYW1lKTtcbiAgICAgICAgaWYgKGZyYW1lU3R5bGUucG9zaXRpb24gPT09IFwiZml4ZWRcIikge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1Njcm9sbGFibGUoZnJhbWUsIGZyYW1lU3R5bGUpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmcmFtZVJlY3QgPSBmcmFtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgW2ZyYW1lVG9wLCBmcmFtZVJpZ2h0LCBmcmFtZUJvdHRvbSwgZnJhbWVMZWZ0XSA9IGdldEZyYW1lVmlld3BvcnQoZnJhbWUsIGZyYW1lUmVjdCk7XG4gICAgICAgIGNvbnN0IGVBbGlnbkggPSBtYXBOZWFyZXN0KGFsaWduSCwgZnJhbWVMZWZ0LCBmcmFtZVJpZ2h0LCBmcmFtZS5jbGllbnRXaWR0aCwgbGVmdCwgcmlnaHQsIHJpZ2h0IC0gbGVmdCk7XG4gICAgICAgIGNvbnN0IGVBbGlnblYgPSBtYXBOZWFyZXN0KGFsaWduViwgZnJhbWVUb3AsIGZyYW1lQm90dG9tLCBmcmFtZS5jbGllbnRIZWlnaHQsIHRvcCwgYm90dG9tLCBib3R0b20gLSB0b3ApO1xuICAgICAgICBjb25zdCBkaWZmWCA9IGVBbGlnbkggPT09IG51bGwgPyAwIDogY2FsY0FsaWduRWRnZShlQWxpZ25ILCBsZWZ0LCByaWdodCkgLSBjYWxjQWxpZ25FZGdlKGVBbGlnbkgsIGZyYW1lTGVmdCwgZnJhbWVSaWdodCk7XG4gICAgICAgIGNvbnN0IGRpZmZZID0gZUFsaWduViA9PT0gbnVsbCA/IDAgOiBjYWxjQWxpZ25FZGdlKGVBbGlnblYsIHRvcCwgYm90dG9tKSAtIGNhbGNBbGlnbkVkZ2UoZUFsaWduViwgZnJhbWVUb3AsIGZyYW1lQm90dG9tKTtcbiAgICAgICAgY29uc3QgbW92ZVggPSBpc1hSZXZlcnNlZChmcmFtZVN0eWxlKVxuICAgICAgICAgICAgPyBjbGFtcChkaWZmWCwgLWZyYW1lLnNjcm9sbFdpZHRoICsgZnJhbWUuY2xpZW50V2lkdGggLSBmcmFtZS5zY3JvbGxMZWZ0LCAtZnJhbWUuc2Nyb2xsTGVmdClcbiAgICAgICAgICAgIDogY2xhbXAoZGlmZlgsIC1mcmFtZS5zY3JvbGxMZWZ0LCBmcmFtZS5zY3JvbGxXaWR0aCAtIGZyYW1lLmNsaWVudFdpZHRoIC0gZnJhbWUuc2Nyb2xsTGVmdCk7XG4gICAgICAgIGNvbnN0IG1vdmVZID0gY2xhbXAoZGlmZlksIC1mcmFtZS5zY3JvbGxUb3AsIGZyYW1lLnNjcm9sbEhlaWdodCAtIGZyYW1lLmNsaWVudEhlaWdodCAtIGZyYW1lLnNjcm9sbFRvcCk7XG4gICAgICAgIGFjdGlvbnMucHVzaChbXG4gICAgICAgICAgICBmcmFtZSxcbiAgICAgICAgICAgIHsgbGVmdDogZnJhbWUuc2Nyb2xsTGVmdCArIG1vdmVYLCB0b3A6IGZyYW1lLnNjcm9sbFRvcCArIG1vdmVZLCBiZWhhdmlvcjogb3B0aW9ucy5iZWhhdmlvciB9LFxuICAgICAgICBdKTtcbiAgICAgICAgdG9wID0gTWF0aC5tYXgodG9wIC0gbW92ZVksIGZyYW1lVG9wKTtcbiAgICAgICAgcmlnaHQgPSBNYXRoLm1pbihyaWdodCAtIG1vdmVYLCBmcmFtZVJpZ2h0KTtcbiAgICAgICAgYm90dG9tID0gTWF0aC5taW4oYm90dG9tIC0gbW92ZVksIGZyYW1lQm90dG9tKTtcbiAgICAgICAgbGVmdCA9IE1hdGgubWF4KGxlZnQgLSBtb3ZlWCwgZnJhbWVMZWZ0KTtcbiAgICB9XG4gICAgcmV0dXJuIGFjdGlvbnM7XG59O1xuZXhwb3J0IGNvbnN0IHNjcm9sbEludG9WaWV3ID0gKGVsZW1lbnQsIHNjcm9sbEludG9WaWV3T3B0aW9ucywgY29uZmlnKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHNjcm9sbEludG9WaWV3T3B0aW9ucyB8fCB7fTtcbiAgICBpZiAoIWNoZWNrQmVoYXZpb3Iob3B0aW9ucy5iZWhhdmlvcikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihmYWlsZWRFeGVjdXRlSW52YWxpZEVudW1WYWx1ZShcInNjcm9sbEludG9WaWV3XCIsIFwiRWxlbWVudFwiLCBvcHRpb25zLmJlaGF2aW9yKSk7XG4gICAgfVxuICAgIGNvbnN0IGFjdGlvbnMgPSBjb21wdXRlU2Nyb2xsSW50b1ZpZXcoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgYWN0aW9ucy5mb3JFYWNoKChbZnJhbWUsIHNjcm9sbFRvT3B0aW9uc10pID0+IHtcbiAgICAgICAgZWxlbWVudFNjcm9sbChmcmFtZSwgc2Nyb2xsVG9PcHRpb25zLCBjb25maWcpO1xuICAgIH0pO1xufTtcbmV4cG9ydCBjb25zdCBlbGVtZW50U2Nyb2xsSW50b1ZpZXcgPSBzY3JvbGxJbnRvVmlldztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjcm9sbEludG9WaWV3LmpzLm1hcCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbGFuZ3VhZ2VTZWxlY3QgfSBmcm9tIFwiLi9tb2R1bGVzL2xhbmd1YWdlLXNlbGVjdFwiO1xyXG5pbXBvcnQgeyBzZWFyY2hJbnB1dCB9IGZyb20gXCIuL21vZHVsZXMvc2VhcmNoLWlucHV0XCI7XHJcbmltcG9ydCB7IGhlcm9TbGlkZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2hlcm8tc2xpZGVyXCI7XHJcbmltcG9ydCB7IHByb2R1Y3RzU2xpZGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9wcm9kdWN0cy1zbGlkZXJcIjtcclxuaW1wb3J0IHsgb3VyVGltZSB9IGZyb20gXCIuL21vZHVsZXMvb3VyLXRpbWVcIjtcclxuaW1wb3J0IHsgYnV0dG9uQ2F0YWxvZyB9IGZyb20gXCIuL21vZHVsZXMvYnV0dG9uLWNhdGFsb2dcIjtcclxuaW1wb3J0IHsgc21vb3RoU2Nyb2xsIH0gZnJvbSBcIi4vbW9kdWxlcy9zbW9vdGhTY3JvbGxcIjtcclxuaW1wb3J0IHsgdG9Ub3BCdXR0b24gfSBmcm9tIFwiLi9tb2R1bGVzL3RvLXRvcC1idXR0b25cIjtcclxuaW1wb3J0IHsgY2F0YWxvZ1NsaWRlciB9IGZyb20gXCIuL21vZHVsZXMvY2F0YWxvZy1zbGlkZXJcIjtcclxuaW1wb3J0IHsgc2VhcmNoRGVjbCB9IGZyb20gXCIuL21vZHVsZXMvc2VhcmNoLWRlY2xcIjtcclxuaW1wb3J0IHsgeWFuZGV4TWFwIH0gZnJvbSBcIi4vbW9kdWxlcy95YW5kZXgtbWFwXCI7XHJcbmltcG9ydCB7IHRpbWVsaW5lIH0gZnJvbSBcIi4vbW9kdWxlcy90aW1lbGluZVwiO1xyXG5pbXBvcnQgeyBtb2RhbCB9IGZyb20gXCIuL21vZHVsZXMvbW9kYWxcIjtcclxuaW1wb3J0IHsgZm9ybVZhbGlkYXRvciB9IGZyb20gXCIuL21vZHVsZXMvZm9ybS12YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgdGFiQ29udGVudCB9IGZyb20gXCIuL21vZHVsZXMvdGFiLWNvbnRlbnRcIjtcclxuaW1wb3J0IHsgc2NhbGVJbWFnZXMgfSBmcm9tIFwiLi9tb2R1bGVzL3NjYWxlLWltYWdlc1wiO1xyXG5pbXBvcnQgeyBtb2JpbGVNZW51IH0gZnJvbSBcIi4vbW9kdWxlcy9tb2JpbGUtbWVudVwiO1xyXG5cclxubGFuZ3VhZ2VTZWxlY3QoKTtcclxuc2VhcmNoSW5wdXQoKTtcclxuaGVyb1NsaWRlcigpO1xyXG5wcm9kdWN0c1NsaWRlcihcIi5wcm9kdWN0cy1zbGlkZXJcIik7XHJcbnByb2R1Y3RzU2xpZGVyKFwiLm5ldy1wcm9kdWN0cy1zbGlkZXJcIik7XHJcbm91clRpbWUoKTtcclxuYnV0dG9uQ2F0YWxvZygpO1xyXG5zbW9vdGhTY3JvbGwoKTtcclxudG9Ub3BCdXR0b24oKTtcclxuY2F0YWxvZ1NsaWRlcigpO1xyXG5zZWFyY2hEZWNsKCk7XHJcbnlhbmRleE1hcCgpO1xyXG50aW1lbGluZSgpO1xyXG5tb2RhbCgpO1xyXG5mb3JtVmFsaWRhdG9yKCk7XHJcbnRhYkNvbnRlbnQoKTtcclxuc2NhbGVJbWFnZXMoKTtcclxubW9iaWxlTWVudSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=