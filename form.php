<?php
  $name = $_POST['name'];
  $sender = $_POST['email'];
  $body = $_POST['message'];

  $email_from = "koryyoung07@gmail.com";
  $subject = "New Form Submission";
  $message = "You recieved a message from $name.\n
                Email: $sender\n
                Message:\n
                $body";
  $message = wordwrap($message, 70, "\r\n");
  $to = "koryyoung07@gmail.com";
  $headers[] = "From: $email_from";
  $headers[] = "Reply-To: $sender";
  
  function IsInjected($str)
  {
      $injections = array('(\n+)',
             '(\r+)',
             '(\t+)',
             '(%0A+)',
             '(%0D+)',
             '(%08+)',
             '(%09+)'
             );
                 
      $inject = join('|', $injections);
      $inject = "/$inject/i";
      
      if(preg_match($inject,$str))
      {
        return true;
      }
      else
      {
        return false;
      }
  }
  
  if(IsInjected($sender))
  {
      echo "Bad email value!";
      exit;
  }

  mail($to, $subject, $message, implode("\r\n", $headers));
?>