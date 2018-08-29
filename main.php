<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message= $_POST['message'];
if (isset ($name))
{
    $name = substr($name,0,40); //etc length
    if (empty($name))
    {
        echo "<center><b>Не указано имя !!!<BR><p>";
        exit;
    }
}
else
{
    $name = "не указано";
}
if (isset ($email))
{
    $email = substr($email,0,40);
    if (empty($email))
    {
        echo "<center><b>Не указан адрес электронной почты!!!<BR><p>";
        exit;
    }
}
else
{
    $email = "не указано";
}

if (isset ($message))
{
    $message= substr($message,0,10000);
    if (empty($message))
    {
        echo "<center><b>Вы не указали сообщение!!!<BR><p>";
        exit;
    }
}
else
{
    $message= "не указано";
}
$i = "не указано";
if ($name == $i AND $email == $i AND $message == $i)
{
    echo "Внимание! Произошла ошибка! Вы не заполнили все поля!<BR>";
    exit;
}
$to = "dmitriy1a222221@gmail.com";
$subject = "Сообщение с сайта DaDecor";
$text_message = "
   Имя заказчика: $name \n
   Электронный адрес: $email \n
   Текст сообщения: $message;
mail ($to, $subject, $text_message,"Content-type:text/plain; charset = UTF-8") or print "Не могу отправить письмо !!!";
echo "<center><b>Спасибо за то, что написали нам! <br><br> Для нас это очень важно! <br><br> В ближайшее время с Вами обязательно свяжутся для уточнения заказа.";
exit;
?>

