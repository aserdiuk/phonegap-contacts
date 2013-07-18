function Formdata(data){
/* ���� �� ��������� ���� ���� ���, ����� ����� 3-x*/
if (data.fname != null && data.fnm.value.length < 3 )
{
alert('��������� ���� "���� ���"');
return false;}

/* ���� �� ��������� ���� ������� */
if (data.surname != null && data.text.value.length < 3)
{
alert('��������� ���� "���� �������"');
return false;}

/* ���� �� ��������� ���� ��� �������� */
if (data.birthday != null && data.text.value.length < 4)
{
alert('��������� ���� "�� �� ������� ��� ��������"');
return false;}

/* ���������� ������� */
if(data.phone != null && data.phone.value.length == 0)
{
alert('���� "���������� �������" ������');
return false;}
  
if(data.phone != null && data.phone.value.length < 5)
{
alert('���� "���������� �������" ������ ��������� ������� ���� ��������');
return false;}
  
if(!(/^[0-9-+()s]+z/.test(data.phone.value+"z")))
{
alert('"���������� �������" ������ �������');
return false;}

/* e-mail ����� */
if(data.email != null && data.email.value.length == 0)
{
alert('���� "E-Mail" ������');
return false;}

if(data.email != null && data.email.value.length < 6)
{
alert('������� �������� "E-Mail"');
return false;}

if(!(/^\w+[-_\.]*\w+@\w+-?\w+\.[a-z]{2,4}$/.test(data.email.value)) )
{
alert("������� ���������� E-Mail �����");
return false;}
   
}