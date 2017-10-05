
function bar(_r){

return 5;

}

function foo(_r){


var _bar=_r("import bar");

console.log(_bar);

}

var _req = function (_request){
//write your code within this block
var regex = /import\s([a-z]+)/g;
var str =_request;
var m=regex.exec(str);
var d=eval(m[1]);
return d(_req);
//=================================

}


foo(_req)
