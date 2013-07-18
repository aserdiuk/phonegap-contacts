/*		This js file provides localization data to whole app
 * 
 * 
 * */

(function () {
	var locUI = {
			firstname: "Имя",
			lastname : "Фамилия",
			birthday : "DD.MM.YY",
			email : "Email",
			phone : "(XXX)XXXXXXX",
			orderBtn: "Заказать",
			topBackBtn : "Назад"
	}
	document.getElementById("fname").setAttribute("placeholder", locUI.firstname);
	document.getElementById("surname").setAttribute("placeholder", locUI.lastname);
	document.getElementById("birthday").setAttribute("placeholder", locUI.birthday);
	document.getElementById("email").setAttribute("placeholder", locUI.email);
	document.getElementById("phone").setAttribute("placeholder", locUI.phone);
	document.getElementById("topBack").setAttribute("back", locUI.topBackBtn);
})();	


