<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $message = $_POST['Message'];

    // Email address to send the message
    $to = "your_email@example.com";
    $subject = "New Message from Contact Form";

    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message: $message\n";

    // Headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Sending email
    if (mail($to, $subject, $body, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    echo "Oops! An error occurred.";
}
?>
