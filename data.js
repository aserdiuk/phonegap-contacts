function Formdata(data){
/* если не заполнено поле Ваше имя, длина менее 3-x*/
if (data.fname != null && data.fnm.value.length < 3 )
{
alert('Заполните поле "Ваше имя"');
return false;}

/* если не заполнено поле Фамилия */
if (data.surname != null && data.text.value.length < 3)
{
alert('Заполните поле "Ваша Фамилия"');
return false;}

/* если не заполнено поле год рождения */
if (data.birthday != null && data.text.value.length < 4)
{
alert('Заполните поле "Вы не указали год рождения"');
return false;}

/* контактный телефон */
if(data.phone != null && data.phone.value.length == 0)
{
alert('поле "Контактный телефон" пустое');
return false;}
  
if(data.phone != null && data.phone.value.length < 5)
{
alert('поле "Контактный телефон" должно содержать минимум пять символов');
return false;}
  
if(!(/^[0-9-+()s]+z/.test(data.phone.value+"z")))
{
alert('"Контактный телефон" указан неверно');
return false;}

/* e-mail Юзера */
if(data.email != null && data.email.value.length == 0)
{
alert('поле "E-Mail" пустое');
return false;}

if(data.email != null && data.email.value.length < 6)
{
alert('слишком короткий "E-Mail"');
return false;}

if(!(/^\w+[-_\.]*\w+@\w+-?\w+\.[a-z]{2,4}$/.test(data.email.value)) )
{
alert("Введите правильный E-Mail адрес");
return false;}
   
}