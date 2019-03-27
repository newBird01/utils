console.log('global');

setTimeout(function () {
    console.log('setTimeout1');
    new Promise(function (resolve) {
        console.log('setTimeout1_promise');
        resolve();
    }).then(function () {
        console.log('setTimeout1_promiseThen')
    })
    process.nextTick(function () {
        console.log('setTimeout1_nextTick');
    })
}, 0) 
new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promiseThen1')
})

setImmediate(function () {
    console.log('setImmediate');
})

process.nextTick(function () {
    console.log('nextTick');
}) 
new Promise(function (resolve) {
    console.log('promise2');
    resolve();
}).then(function () {
    console.log('promiseThen2')
})
console.log('global');

setTimeout(function () {
    console.log('setTimeout2');
}, 0)













// demo02
console.log('golb1');

setTimeout(function() {
    console.log('timeout1');
    process.nextTick(function() {
        console.log('timeout1_nextTick');
    })
    setTimeout(function(){
        console.log('结束1');
        new Promise(function(resolve) {
            resolve();
        }).then(function() {
            console.log('我在哪里？')
        }) 
    })
    setImmediate(function() {
        console.log('我要执行拉');
    })
    new Promise(function(resolve) {
        console.log('timeout1_promise');
        resolve();
    }).then(function() {
        console.log('timeout1_then')
    }) 
}) 

setImmediate(function() {
    console.log('immediate1');
    process.nextTick(function() {
        console.log('immediate1_nextTick');
    })
    new Promise(function(resolve) {
        console.log('immediate1_promise');
        resolve();
    }).then(function() {
        console.log('immediate1_then')
    })
}) 

process.nextTick(function() {
    console.log('glob1_nextTick');
}) 
new Promise(function(resolve) {
    console.log('glob1_promise');
    resolve();
}).then(function() {
    console.log('glob1_then')
}) 

setTimeout(function() {
    console.log('timeout2');
    process.nextTick(function() {
        console.log('timeout2_nextTick');
    })
    setTimeout(function(){
        console.log('结束2');
        new Promise(function(resolve) {
            resolve();
        }).then(function() {
            console.log('我又在哪里？')
        }) 
    })
    setImmediate(function() {
        console.log('我也要执行拉');
    })
    new Promise(function(resolve) {
        console.log('timeout2_promise');
        resolve();
    }).then(function() {
        console.log('timeout2_then')
    })
}) 

process.nextTick(function() {
    console.log('glob2_nextTick');
})
new Promise(function(resolve) {
    console.log('glob2_promise');
    resolve();
}).then(function() {
    console.log('glob2_then')
})

setImmediate(function() {
    console.log('immediate2');
    process.nextTick(function() {
        console.log('immediate2_nextTick');
    })
    new Promise(function(resolve) {
        console.log('immediate2_promise');
        resolve();
    }).then(function() {
        console.log('immediate2_then')
    })
}) 

























// demo03 node环境
console.log(1);

setTimeout(function() {
    console.log('8');
    process.nextTick(function() {
        console.log('12');
    })
    setTimeout(function(){
        console.log('26');
        new Promise(function(resolve) {
            resolve();
        }).then(function() {
            console.log('28')
        }) 
    })
    setImmediate(function() {
        console.log('20');
    })
    new Promise(function(resolve) {
        console.log('9');
        resolve();
    }).then(function() {
        console.log('14')
    }) 
}) 

setImmediate(function() {
    console.log('16');
    process.nextTick(function() {
        console.log('22');
    })
    new Promise(function(resolve) {
        console.log('17');
        resolve();
    }).then(function() {
        console.log('25')
    })
}) 

process.nextTick(function() {
    console.log('4');
}) 
new Promise(function(resolve) {
    console.log(2);
    resolve();
}).then(function() {
    console.log('6');
}) 

setTimeout(function() {
    console.log('10');
    process.nextTick(function() {
        console.log('13');
    })
    setTimeout(function(){
        console.log('27');
        new Promise(function(resolve) {
            resolve();
        }).then(function() {
            console.log('29')
        }) 
    })
    setImmediate(function() {
        console.log('21');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('15')
    })
}) 

process.nextTick(function() {
    console.log('5');
})
new Promise(function(resolve) {
    console.log('3');
    resolve();
}).then(function() {
    console.log('7');
})

setImmediate(function() {
    console.log('18');
    process.nextTick(function() {
        console.log('23');
    })
    new Promise(function(resolve) {
        console.log('19');
        resolve();
    }).then(function() {
        console.log('24')
    })
}) 
  


// demo03 浏览器环境
console.log(1);

setTimeout(function() {
    console.log('6');
    setTimeout(function(){
        console.log('12');
        new Promise(function(resolve) {
            resolve();
        }).then(function() {
            console.log('13')
        }) 
    })
    new Promise(function(resolve) {
        console.log('7');
        resolve();
    }).then(function() {
        console.log('8')
    }) 
}) 

new Promise(function(resolve) {
    console.log(2);
    resolve();
}).then(function() {
    console.log('4');
}) 

setTimeout(function() {
    console.log('9');
    setTimeout(function(){
        console.log('14');
        new Promise(function(resolve) {
            resolve();
        }).then(function() {
            console.log('15')
        }) 
    })
    new Promise(function(resolve) {
        console.log('10');
        resolve();
    }).then(function() {
        console.log('11')
    })
}) 

new Promise(function(resolve) {
    console.log('3');
    resolve();
}).then(function() {
    console.log('5');
})
