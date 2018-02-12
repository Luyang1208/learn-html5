// 函数默认值demo1, 手动判断参数是否有值，这样是不准确的，如果给参数赋值的布尔值正好等于false,那么赋值将不起作用
function log(a, b) {
    b = b || 'World'
    console.log(a, b)
}
log('hello')
log('hello', 'China')
log('hello', '')


// 优化过后的手动判断参数
function log2(a, b) {
    if (typeof b === 'undefined') {
        b = 'World'
    }
    console.log(a, b)
}

log2('hello')
log2('hello', 'China')
log2('hello', '')