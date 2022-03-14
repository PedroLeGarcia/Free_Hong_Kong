function funcao(){

  var v1 = parseInt(document.getElementById("v1").value);
  var v2 = parseInt(document.getElementById("v2").value);
  var v3 = parseInt(document.getElementById("v3").value);
 
  if(v1 + v2 && v1 + v3 >= v2 && v2 + v3 >= v1){
    if(v1 == v2 && v2 == v3 && v3 == v1){
      document.write("O triângulo é equilátero!");
    }else if(v1 == v2 || v2 == v3 || v3 == v1){
       document.write("O triângulo é isósceles!");
    }else if(v1 != v2 && v2 != v3 && v3 != v1){
       document.write("O triângulo é escaleno");
    }
  }else{
     document.write("Os valores digitados são inválidos!");
  }
}
