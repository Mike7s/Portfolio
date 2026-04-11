function Button () {


    function test() { return { message: "Hello" }; } console.log(test());
    function test1() { return { message: "Hello" }; } console.log(test1());
console.log();
function getName(name = "Guest") {
 return name || "Anonymous";
}

console.log(getName(""));

    return (
        <button>
            Click me
        </button>
    );
}
export default Button