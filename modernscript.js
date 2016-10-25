$(document).ready(function(){

	var calObj = new Calculator();

	$("btnAdd").click(function(){

		calObj.fnAdd();
});
		$("btnSubstract").click(function(){

		calObj.fnSub();
});
		$("btnMultiply").click(function(){

		calObj.fnMul();
});
		$("btnDivision").click(function(){

		calObj.fnDiv();

	});

});
class Calculator
{
	constructor()
	{

	}


fnAdd()
{

    let [number1,number2]=[parseInt($("#txtNumber1").val()),parseInt($("#txtNumber2").val())];
	let result= number1+number2;

	$("#txtResult").val(result);
	
}

fnSub()
{
	let [number1,number2]=[parseInt($("#txtNumber1").val()),parseInt($("#txtNumber2").val())];
	let result= parseInt(number1-number2);

	$("#txtResult").val(result);
	
}
fnMul()
{
	let [number1,number2]=[parseInt($("#txtNumber1").val()),parseInt($("#txtNumber2").val())];
	let result= parseInt(number1*number2);

	$("#txtResult").val(result);
}
fnDiv()
{
	let [number1,number2]=[parseInt($("#txtNumber1").val()),parseInt($("#txtNumber2").val())];
	let result= parseInt(number1/number2);

	$("#txtResult").val(result);
}
}

