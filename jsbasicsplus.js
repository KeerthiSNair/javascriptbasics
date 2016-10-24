function fnjavascriptplus()

{
	var number=document.getElementById('txtNumber').value;
	var result;
	var result1;
	
	var sum=0;
	var diff=0;
	var answer;

	result= number.split('+');
	for (var i = 0; i < result.length; i++) 
	{
     sum =sum+ parseInt(result[i]);   
      }

         result1= number.split('-');

      
	for (var i = 1; i < result1.length; i++) 
	{
     diff = diff- parseInt(result1[i]);   
      }

      answer=sum+diff;
	document.getElementById("txtresult").value=answer;
}