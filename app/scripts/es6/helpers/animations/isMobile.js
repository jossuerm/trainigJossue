export function Android() {
  return navigator.userAgent.match(/Android/i);
}

export function BlackBerry() {
  return navigator.userAgent.match(/BlackBerry/i);
}

export function iOS() {
  return navigator.userAgent.match(/iPhone|iPad|iPod/i);
}

export function Opera() {
  return navigator.userAgent.match(/Opera Mini/i);
}

export function Windows() {
  return navigator.userAgent.match(/IEMobile/i);
}

export function isAnyMobile() {
  return Android() || BlackBerry() || iOS() || Opera() || Windows();
}
