<?php
/* Здесь проверяется существование переменных */
if (isset($_POST['name-field'])) {$name = $_POST['name-field'];}
if (isset($_POST['phone-field'])) {$phone = $_POST['phone-field'];}

/* Сюда впишите свою эл. почту */
$myaddres  = "kuznetsov4workmail@gmail.com"; // кому отправляем

/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes = "Тема: Заказ обратного звонка!\nТелефон: $phone\nИмя: $name";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Заказ'; //сабж
$email='Заказ обратного звонка'; // от кого
$send = mail ($myaddres,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");

ini_set('short_open_tag', 'On');
?>
