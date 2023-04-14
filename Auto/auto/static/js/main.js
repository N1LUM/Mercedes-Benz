function drop(){
	document.getElementById("drop1").classList.remove("showDrop");
	document.getElementById("drop3").classList.remove("showDrop");
	document.getElementById("drop4").classList.remove("showDrop");
	document.getElementById("drop5").classList.remove("showDrop");
}
function drop1(){
	document.getElementById("drop1").classList.toggle("showDrop");
	document.getElementById("drop3").classList.remove("showDrop");
	document.getElementById("drop4").classList.remove("showDrop");
	document.getElementById("drop5").classList.remove("showDrop");
}
function drop3(){
	document.getElementById("drop1").classList.remove("showDrop");
	document.getElementById("drop3").classList.toggle("showDrop");
	document.getElementById("drop4").classList.remove("showDrop");
	document.getElementById("drop5").classList.remove("showDrop");
}
function drop4(){
	document.getElementById("drop1").classList.remove("showDrop");
	document.getElementById("drop3").classList.remove("showDrop");
	document.getElementById("drop4").classList.toggle("showDrop");
	document.getElementById("drop5").classList.remove("showDrop");
}
function drop5(){
	document.getElementById("drop1").classList.remove("showDrop");
	document.getElementById("drop3").classList.remove("showDrop");
	document.getElementById("drop4").classList.remove("showDrop");
	document.getElementById("drop5").classList.toggle("showDrop");
}

function button1(){
	document.getElementById("sedan").classList.toggle("showAuto");
	document.getElementById("cabriolet").classList.remove("showAuto");
	document.getElementById("minivan").classList.remove("showAuto");
	document.getElementById("all").classList.remove("showAuto");
	document.getElementById("eq").classList.remove("showAuto");
	document.getElementById("amg").classList.remove("showAuto");
	document.getElementById("new").classList.remove("showAuto");
	document.getElementById("electric").classList.remove("showAuto");
	document.getElementById("gazoline").classList.remove("showAuto");
	document.getElementById('gazolineBox').checked = false;
	document.getElementById('electricBox').checked = false;
}
function button2(){
	document.getElementById("sedan").classList.remove("showAuto");
	document.getElementById("cabriolet").classList.toggle("showAuto");
	document.getElementById("minivan").classList.remove("showAuto");
	document.getElementById("all").classList.remove("showAuto");
	document.getElementById("eq").classList.remove("showAuto");
	document.getElementById("amg").classList.remove("showAuto");
	document.getElementById("new").classList.remove("showAuto");
	document.getElementById("electric").classList.remove("showAuto");
	document.getElementById("gazoline").classList.remove("showAuto");
	document.getElementById('gazolineBox').checked = false;
	document.getElementById('electricBox').checked = false;
}
function button3(){
	document.getElementById("sedan").classList.remove("showAuto");
	document.getElementById("cabriolet").classList.remove("showAuto");
	document.getElementById("minivan").classList.toggle("showAuto");
	document.getElementById("all").classList.remove("showAuto");
	document.getElementById("eq").classList.remove("showAuto");
	document.getElementById("amg").classList.remove("showAuto");
	document.getElementById("new").classList.remove("showAuto");
	document.getElementById("electric").classList.remove("showAuto");
	document.getElementById("gazoline").classList.remove("showAuto");
	document.getElementById('gazolineBox').checked = false;
	document.getElementById('electricBox').checked = false;
}
function All(){
	document.getElementById("sedan").classList.remove("showAuto");
	document.getElementById("cabriolet").classList.remove("showAuto");
	document.getElementById("minivan").classList.remove("showAuto");
	document.getElementById("all").classList.toggle("showAuto");
	document.getElementById("eq").classList.remove("showAuto");
	document.getElementById("amg").classList.remove("showAuto");
	document.getElementById("new").classList.remove("showAuto");
	document.getElementById("electric").classList.remove("showAuto");
	document.getElementById("gazoline").classList.remove("showAuto");
	document.getElementById('gazolineBox').checked = false;
	document.getElementById('electricBox').checked = false;
}
function eq(){
	document.getElementById("sedan").classList.remove("showAuto");
	document.getElementById("cabriolet").classList.remove("showAuto");
	document.getElementById("minivan").classList.remove("showAuto");
	document.getElementById("all").classList.remove("showAuto");
	document.getElementById("eq").classList.toggle("showAuto");
	document.getElementById("amg").classList.remove("showAuto");
	document.getElementById("new").classList.remove("showAuto");
	document.getElementById("electric").classList.remove("showAuto");
	document.getElementById("gazoline").classList.remove("showAuto");
	document.getElementById('gazolineBox').checked = false;
	document.getElementById('electricBox').checked = false;
}
function amg(){
	document.getElementById("sedan").classList.remove("showAuto");
	document.getElementById("cabriolet").classList.remove("showAuto");
	document.getElementById("minivan").classList.remove("showAuto");
	document.getElementById("all").classList.remove("showAuto");
	document.getElementById("eq").classList.remove("showAuto");
	document.getElementById("amg").classList.toggle("showAuto");
	document.getElementById("new").classList.remove("showAuto");
	document.getElementById("electric").classList.remove("showAuto");
	document.getElementById("gazoline").classList.remove("showAuto");
	document.getElementById('gazolineBox').checked = false;
	document.getElementById('electricBox').checked = false;
}
function New(){
	document.getElementById("sedan").classList.remove("showAuto");
	document.getElementById("cabriolet").classList.remove("showAuto");
	document.getElementById("minivan").classList.remove("showAuto");
	document.getElementById("all").classList.remove("showAuto");
	document.getElementById("eq").classList.remove("showAuto");
	document.getElementById("amg").classList.remove("showAuto");
	document.getElementById("new").classList.toggle("showAuto");
	document.getElementById("electric").classList.remove("showAuto");
	document.getElementById("gazoline").classList.remove("showAuto");
	document.getElementById('gazolineBox').checked = false;
	document.getElementById('electricBox').checked = false;
}
function electric(){
	if (document.getElementById('electricBox').checked) {
		document.getElementById("sedan").classList.remove("showAuto");
		document.getElementById("cabriolet").classList.remove("showAuto");
		document.getElementById("minivan").classList.remove("showAuto");
		document.getElementById("all").classList.remove("showAuto");
		document.getElementById("eq").classList.remove("showAuto");
		document.getElementById("amg").classList.remove("showAuto");
		document.getElementById("new").classList.remove("showAuto");
		document.getElementById("electric").classList.toggle("showAuto");
		document.getElementById("gazoline").classList.remove("showAuto");
		document.getElementById('gazolineBox').checked = false;
	}
}
function gazoline() {
	if (document.getElementById('gazolineBox').checked) {
		document.getElementById("sedan").classList.remove("showAuto");
		document.getElementById("cabriolet").classList.remove("showAuto");
		document.getElementById("minivan").classList.remove("showAuto");
		document.getElementById("all").classList.remove("showAuto");
		document.getElementById("eq").classList.remove("showAuto");
		document.getElementById("amg").classList.remove("showAuto");
		document.getElementById("new").classList.remove("showAuto");
		document.getElementById("electric").classList.remove("showAuto");
		document.getElementById("gazoline").classList.toggle("showAuto");
		document.getElementById('electricBox').checked = false;
	}
}
function year2021(){
	if(document.getElementById('2021').classList.contains("invis")){
		document.getElementById('2021').classList.remove("invis");
		document.getElementById('2020').classList.toggle("invis");
	}
	else{
		return false;
	}
}
function year2020(){
	if(document.getElementById('2020').classList.contains("invis")){
		document.getElementById('2020').classList.remove("invis");
		document.getElementById('2021').classList.toggle("invis");
	}
	else{
		return false;
	}
}
function news2021(id) {
	document.getElementById(id + 'news2021').classList.toggle("showCard");
}
function news2020(id) {
	document.getElementById(id + 'news2020').classList.toggle("showCard");
}
function closeNews2021(){
	for(i = 1 ; i<99 ; i++){
		i = i.toString()
		if(document.getElementById(i + 'news2021') == null){
			break;
		}
		if(document.getElementById(i + 'news2021').classList.contains("showCard")){
			document.getElementById(i + 'news2021').classList.remove("showCard");
		}
	}
}
function closeNews2020(){
	for(i = 1 ; i<99 ; i++){
		i = i.toString()
		if(document.getElementById(i + 'news2020') == null){
			break;
		}
		if(document.getElementById(i + 'news2020').classList.contains("showCard")){
			document.getElementById(i + 'news2020').classList.remove("showCard");
		}
	}
}

var input,search,pr,result,result_arr, locale_HTML, result_store;
//input - принимаем текст, который ввел пользователь
//search - делаем из строки регулярное выражение
//pr - сохраняем в нее текущий <body></body>
//result - выборка текста из pr (т.е. отсекаем теги и атрибуты)
//result_arr - аналог pr, но со стилями для подсветки
//locale_HTML - оригинал <body></body> который менять не будем, используем для обнуления стилей

locale_HTML = document.body.innerHTML;   // сохраняем в переменную весь body (Исходный)

function FindOnPage(name, status) {

	input = document.getElementById(name).value; //получаем значение из поля в html

	input = input.replace(/^\s+/g,'');
	input = input.replace(/[ ]{1,}/g,' ')
	
	if(input.length<3&&status==true) {
		alert('Для поиска вы должны ввести три или более символов');
		function FindOnPageBack() { document.body.innerHTML = locale_HTML; }   //обнуляем стили
	}
        
    if(input.length>=3){
		function FindOnPageGo(){
			search = '/'+input+'/g';  //делаем из строки регуярное выражение
			pr = document.body.innerHTML;   // сохраняем в переменную весь body
			result = pr.match(/>(.*?)</g);  //отсекаем все теги и получаем только текст
			result_arr = [];   //в этом массиве будем хранить результат работы (подсветку)

			var warning = true;
			for(var i=0;i<result.length;i++) {
				if(result[i].match(eval(search))!=null) {
					warning = false;
				}
			}
			if(warning == true) {
				alert('Не найдено ни одного совпадения');
			}

			for(var i=0; i<result.length;i++) {
				result_arr[i] = result[i].replace(eval(search), '<span style="background-color:yellow;">'+input+'</span>'); //находим нужные элементы, задаем стиль и сохраняем в новый массив
			}
			for(var i=0; i<result.length;i++) {
			pr=pr.replace(result[i],result_arr[i])  //заменяем в переменной с html текст на новый из новогом ассива
			}	
			document.body.innerHTML = pr;  //заменяем html код
		}
    }
    function FindOnPageBack() { document.body.innerHTML = locale_HTML; }   //обнуляем стили
        if(status) { FindOnPageBack(); FindOnPageGo(); } //чистим прошлое и Выделяем найденное
		if(!status) { FindOnPageBack(); } //Снимаем выделение
}
