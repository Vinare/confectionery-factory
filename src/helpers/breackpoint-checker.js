const breakpoint = window.matchMedia("(min-width: 992px)");

export const breakpointChecker = function (slider, call) {
  if (breakpoint.matches === true) {
    if (slider !== undefined)
    slider.destroy(true, true);
    return;
  } else if (breakpoint.matches === false) {
    return call();
  }
};
