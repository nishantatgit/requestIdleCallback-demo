let n = 1000;
let x = 0;
function loopThousand(){
  console.log('looping thousand times ....');
  for(let i = 0; i < 1000; i++){
    x = x + i;
  }
}
function loopTenThousand(){
  console.log('looping ten thousand times ....');
  for(let i = 0; i < 10000; i++){
    x = x  + i;
  }
}

function loopTwentyThousand(){
  console.log('looping twenty thousand times ....');
  for(let i = 0; i < 20000; i++){
    x = x  + i;
  }
}

function loopFiftyThousand(){
  console.log('looping fifty thousand times ....');
  for(let i = 0; i < 50000; i++){
    x = x  + i;
  }
}

function thisExecutesFor100ms(timeSliced = false){ 
  const newN = n * 10;
  var i = 0;
  if(timeSliced){
    window.requestIdleCallback(function idleCallback(){
      loopFiftyThousand();
      i += 1;
      if( i < n){
        window.requestIdleCallback(idleCallback)
      }
    });
  } else {
    for(var i = 0; i < n; i++){
      loopFiftyThousand();
    }
  }
}

function sleep(timeSliced = false){
  const startTime = Date.now();
  thisExecutesFor100ms(timeSliced);
  const duration = Date.now() - startTime;
  console.log('slept for ' + duration);
}

function attachEvents() {
  const btnAddInterval = document.querySelectorAll('.js-btn-add-interval')[0];
  const btnAddJSCodeTimeSliced = document.querySelectorAll('.js-btn-add-interval-sliced')[0];

  btnAddInterval.addEventListener('click', function addInterval(){
    sleep();
  });

  btnAddJSCodeTimeSliced.addEventListener('click', function addLogExecutingJSCodeTimeSliced(){
    sleep(true);
  })
}

export { sleep, thisExecutesFor100ms, attachEvents }