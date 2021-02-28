//闭包暴露方式一
function myModule() {
    var msg = 'lvLV'
    function dos() {
        console.log('dos()' + msg.toUpperCase())
    }

    function doo() {
        console.log('doo()' + msg.toLowerCase())
    }
    return {
        dos: dos,
        doo: doo
    }
}

//闭包暴露方式二
//--------------------------------
(function(){
    var msg = 'lvLV'
    function dos() {
        console.log('dos()' + msg.toUpperCase())
    }

    function doo() {
        console.log('doo()' + msg.toLowerCase())
    }
    window.module = {
        doo: doo,
        dos: dos
    }
})()