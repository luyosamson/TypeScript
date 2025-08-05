var x = 10;
function test() {
    var x = 20; // Function-scoped
    console.log(x); // 20
}
test();
console.log(x); // 10
