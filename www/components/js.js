// This is a JavaScript file

window.onload = function(){
    const valor1 = document.querySelector("#valor1");
    const valor2 = document.querySelector("#valor2");

    const somar = document.querySelector("#somar");

    result.addEventListener("click", function(){
        let result = parseFloat(valor1.value) + parseFloat(valor2.value);
        document.querySelector("#result").value = result;
});
}