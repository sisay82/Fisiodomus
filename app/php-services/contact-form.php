<?php
require_once '../wordpress/wp-includes/class-phpmailer.php';
//Make sure that it is a POST request.
if(strcasecmp($_SERVER['REQUEST_METHOD'], 'POST') != 0){
    $data = array('success' => false, 'message' => 'Request method must be POST!');
    echo json_encode($data);
    exit;
}

//Make sure that the content type of the POST request has been set to application/json
$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
if(stripos($contentType, 'application/json') === false){
    $data = array('success' => false, 'message' => 'Content type must be: application/json');
    echo json_encode($data);
    exit;
}

//Receive the RAW post data.
$content = trim(file_get_contents("php://input"));

//Attempt to decode the incoming RAW post data from JSON.
$decoded = json_decode($content, true);

//If json_decode failed, the JSON is invalid.
if(!is_array($decoded)){
    $data = array('success' => false, 'message' => 'Received content contained invalid JSON!');
    echo json_encode($data);
    exit;
}

$_POST=$decoded;

if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) && isset($_POST['privacyAgree'])) {
    //check if any of the inputs are empty
    if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phoneNumber']) || empty($_POST['message'])) {
        $data = array('success' => false, 'message' => 'Please fill out the form completely. Some inputs are empty.');
        echo json_encode($data);
        exit;
    }

    //create an instance of PHPMailer
    $mail = new PHPMailer();

    $mail->AddReplyTo($_POST['email'], $_POST['name']);
    $mail->SetFrom($_POST['email'], $_POST['name']);
    $mail->AddAddress('info@fisiodomus.it'); //recipient 
    $mail->Subject = 'Richiesta di intervento di ' .  $_POST['name'] . ' del '. date("d/m/Y"); //Subject 
    $mail->Body = "Nome: " . $_POST['name'] . "\r\n E-mail: " . $_POST['email'] . "\r\n Numero di telefono: " . $_POST['phoneNumber'] . "\r\n Comune: " . $_POST['municipality'] ;
    
    if($_POST['privacyAgree']) {
        $mail->Body = $mail->Body. "\r\n Informativa sulla privacy: accettata.";
    } else {
        $mail->Body = $mail->Body. "\r\n Informativa sulla privacy: rifiutata.";
    }

    $mail->Body = $mail->Body. "\r\n\r\n Message: " . stripslashes($_POST['message']);


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