function timeout(ms) {
  return new Promise((resolve, reject) => {
    // xx毫秒之后将状态变更为resolved
    setTimeout(resolve, ms);
  });
}

// 多个promise操作的执行顺序
timeout(1000)
  .then(() => {
    console.log('done1', new Date().toLocaleString());
    return 'done1'
  })
  .then((param) => {
    timeout(100).then(() => {
      console.log('done3', new Date().toLocaleString());
    });
    console.log(param, 'done2', new Date().toLocaleString());
  });

console.log('done0', new Date().toLocaleString());
