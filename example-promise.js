// function takes location and returns the temperature
// callback
function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

// invoke the callback function
getTempCallback('Brisbane', function (err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

// Promise example instead of using a callback
function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

// invoke the promise function and pass two functions as args to handle
// success and error cases
getTempPromise('Brisbane').then(function (temp) { console.log('promise success', temp); }, 
                                function (err) { console.log('promise error', err); }
                                )


// Challenge area
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Both args should be numbers');
    }
  });
}

addPromise(1, 2).then(function (result) { console.log('promise success', result); }, 
                      function (err) { console.log('promise error should not appear'); }
                      );

addPromise(1, 'hello').then(function (result) { console.log('promise success should not appear'); }, 
                      function (err) { console.log('promise error', err); }
                      );