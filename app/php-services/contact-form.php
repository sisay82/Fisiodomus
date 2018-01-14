<?php
require_once '../wordpress/wp-includes/class-phpmailer.php';

if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])) {

    //check if any of the inputs are empty
    if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phoneNumber']) || empty($_POST['message'])) {
        $data = array('success' => false, 'message' => 'Please fill out the form completely.');
        echo json_encode($data);
        exit;
    }

    //create an instance of PHPMailer
    $mail = new PHPMailer();

    $mail->AddReplyTo($_POST['email'], $_POST['name']);
    $mail->SetFrom($_POST['email'], $_POST['name']);
    $mail->AddAddress('info@fisiodomus.it'); //recipient 
    $mail->Subject = 'Richiesta di intervento di ' .  $_POST['name'] . ' del '. date("d/m/Y"); //Subject 
    $mail->Body = "Nome: " . $_POST['name'] . "\r\n E-mail: " . $_POST['email'] . "\r\n Numero di telefono: " . $_POST['phoneNumber'] . "\r\n Comune: " . $_POST['municipality'] . "\r\n\r\n Message: " . stripslashes($_POST['message']);


    if(!$mail->send()) {
        $data = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
        echo json_encode($data);
        exit;
    }

    $data = array('success' => true, 'message' => 'Thanks! We have received your message.');
    echo json_encode($data);

} else {

    $data = array('success' => false, 'message' => 'Please fill out the form completely.');
    echo json_encode($data);

}