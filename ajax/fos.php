<?
$name=$_POST['name'];
$phone=$_POST['phone'];
$email=$_POST['email'];
$theme=$_POST['theme'];
$id = $_POST['id'];



$subject = $theme;
// echo '<pre>';
// PRint_r($_POST);
// echo '</pre>';
if (($_POST['name']!='') and ($_POST['phone']!='') and ($_POST['email']!=''))
{

    $to = "web8@site-rb.ru";
// echo '!!!!!!!!!!!!!!!!!!!';
$message = 
    '<html>
        <head>
            <title>'.$subject.'</title>
        </head>
        <body>
            <b>Имя: </b>'.$_POST['name'].'<br>
            <b>Телефон: </b>'.$_POST['phone'].'<br>
            <b>Email </b>'.$_POST['email'].'<br>
        </body>
    </html>';


    $headers = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From:ulfar.ru <info@ulfar.ru>\r\n";
    $headers .= "Reply-To: info@ulfar.ru\r\n";



//mail($to, $subject, $message, $headers);
//mail($to, $subject, $message, $headers, '-f info@ulfar.ru');


//  echo '<p>$to='.$to.'</p>';
// echo '<p>$subject='.$subject.'</p>';
// echo '<p>$message='.$message.'</p>';
// echo '<p>$to='.$headers.'</p>';
// echo '<p>$to='.$id.'</p>';


if (mail($to, $subject, $message, $headers)){

    
    if ($id == 'popup')
    {
        echo '<img class="popup__close popup-close-js" src="local/templates/ulfarOrtopedia/images/close.svg"
            width="16" height="16" alt="close">
        <div class="popup__main">
        <div class="block__hdr1">Ваша заявка отправлена</div>
        <div class="sent">Наш менеджер скоро перезвонит вам, чтобы уточнить информацию</div>
        <img class="sent-pic" src="local/templates/ulfarOrtopedia/images/sent-pic.svg"
        width="186" height="186" alt="отправлена">
        <div class="button mt60 popup-close-js">Понятно</div>
            
        </div>';
    }

    else

    {
        echo '<div class="block__hdr1 hdr1-sent">Ваша заявка отправлена</div>
        <div class="feedback__line1">Наш менеджер скоро перезвонит вам, чтобы уточнить информацию</div>';
    }






        
    
       
    
        
    

    
}


}



