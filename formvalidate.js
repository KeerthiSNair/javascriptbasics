$(document).ready(function(){

$("#form1").validate({

rules:
{
	txtName:"required",
	txtTitle:"required",
	txtCompany:"required",

	txtEmail:
	{
		required:true,
		email:true
	},

txtNumber:
{
	required:true,
	minlength:10,
	maxlength:10
}
},
messages:
{

	txtName:"please enter your name",
	txtTitle:"please enter the title",
	txtCompany:"please enter the company",
	


	txtEmail:
	{
		required:"please enter a mail address",
		email:"please enter a valid email address"

	},

	txtNumber:
	{
       required:"please enter a number",
       minlength:"please enter a 10 digt phone number",
       maxlength:"phone number must be 10 digits"
	},
},



});
});