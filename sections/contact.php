<section class="contact">
	<div class="container">
	<div class="row">
	<h1 class="container__title">Entre em contato com a gente</h1>
		<?php
			if(isset($_POST['submitted'])) :

				/* name */
				if(trim($_POST['myname']) === ''):
					$nameError = 'Ops, você esqueceu de digitar o seu nome';
					$hasError = true;
				else:
					$name = trim($_POST['myname']);
				endif;

				/* email */
				if(trim($_POST['myemail']) === ''):
					$emailError = 'Ops, você esqueceu de digitar o seu email';
					$hasError = true;
				elseif (!preg_match("/^[[:alnum:]][a-z0-9_.-]*@[a-z0-9.-]+\.[a-z]{2,4}$/i", trim($_POST['myemail']))) :
					$emailError ='Opa, parece que você digitou um email inválido';
					$hasError = true;
				else:
					$email = trim($_POST['myemail']);
				endif;


				/* subject */
				if(trim($_POST['mysubject']) === ''):
					$subjectError = __('Ops, voce esqueceu de digitar o Assunto','zerif-lite');
					$hasError = true;
				else:
					$subject = trim($_POST['mysubject']);
				endif;


				/* message */
				if(trim($_POST['mymessage']) === ''):
					$messageError = 'Digite sua mensagem';
					$hasError = true;
				else:
					$message = stripslashes(trim($_POST['mymessage']));
				endif;


				/* send the email */
				if(!isset($hasError)):
					$emailTo = 'contato@macacriativa.esy.es';
					if(isset($emailTo) && $emailTo != ""):
						if( empty($subject) ):
							$subject = 'From '.$name;
						endif;
						$body = "Name: $name \n\nEmail: $email \n\n Subject: $subject \n\n Message: $message";
						$headers = 'From: '.$name.' <'.$emailTo.'>' . "\r\n" . 'Reply-To: ' . $email;

						wp_mail($emailTo, $subject, $body, $headers);
						$emailSent = true;
					else:
						$emailSent = false;
					endif;
				endif;

			endif;
	
			if(isset($emailSent) && $emailSent == true) :
				echo '<p class="contact__success white-text">'.__('Obrigado, seu email foi enviado com Sucesso. Em breve entraremos em contato.','zerif-lite').'</p>';
			elseif(isset($_POST['submitted'])):
				echo '<p class="error white-text">'.__('Ops, parece que algo deu errado :/ Verifique se seus dados estão corretos','zerif-lite').'<p>';
			endif;		
		?>

			<form role="form" method="POST" action="" onSubmit="this.scrollPosition.value=document.body.scrollTop" id="contact-form" class="contact__form">

				<input type="hidden" name="scrollPosition">

				<input type="hidden" name="submitted" id="submitted" value="true" />

				<div class="contact__form--box" data-scrollreveal="enter left after 0s over 1s">
				<?php
				if(isset($nameError) && $nameError != '') :
					echo '<p class="contact__form--error">'.$nameError.'</p>';
				endif;
				?>
					<input type="text" name="myname" placeholder="Seu nome" class="form-control input-box" value="<?php if(isset($_POST['myname'])) echo $_POST['myname'];?>">
				</div>

				<div class="contact__form--box" data-scrollreveal="enter left after 0s over 1s">
				<?php
				if(isset($emailError) && $emailError != '') :
					echo '<p class="contact__form--error">'.$emailError.'</p>';
				endif;
				?>
					<input type="email" name="myemail" placeholder="Seu email" class="form-control input-box" value="<?php if(isset($_POST['myemail'])) echo $_POST['myemail'] ? $_POST['myemail'] : ""; ?>">
				</div>


				<div class="contact__form--box" data-scrollreveal="enter left after 0s over 1s">
				<?php
				if(isset($subjectError) && $subjectError != '') :
					echo '<p class="contact__form--error">'.$subjectError.'</p>';
				endif;
				?>
					<input type="text" name="mysubject" placeholder="Assunto" class="form-control input-box" value="<?php if(isset($_POST['mysubject'])) echo $_POST['mysubject'];?>">
				</div>

				<div class="contact__form--message" data-scrollreveal="enter right after 0s over 1s">
				<?php
				if(isset($messageError) && $messageError != '') :
					echo '<p class="contact__form--error">'.$messageError.'</p>';
				endif;
				?>
					<textarea name="mymessage" class="form-control textarea-box" placeholder="Sua mensagem"><?php if(isset($_POST['mymessage'])) { echo stripslashes($_POST['mymessage']); } ?></textarea>
				</div>

				<button class="btn contact__form--button" id="contact-button" type="submit" data-scrollreveal="enter left after 0s over 1s">Enviar mensagem<span class="glyphicon glyphicon-envelope"></span></button>

			</form>

	
		</div>
		
	</div>
</section>