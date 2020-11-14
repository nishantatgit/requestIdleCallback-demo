function domReady(callback){
  if(typeof callback !== 'function'){
    throw new Error('callback is not a function');
  }
  if(document.readyState === 'completed'){
    callback();
  } else {
    window.addEventListener('load', callback, false);
  }
}

export { domReady };