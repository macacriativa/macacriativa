<?php
/**
 * Template Name: Criação de Sites
 */
get_header();

?>

<section class="cricao-de-sites">
	<div id="particles-js" class="particle-js">
	       <h2 class="particle__title"><?php echo get_the_title(); ?></h2>          
	</div>
	
	<div class="container">
		<div class="row">
			<div class="services__wrapper">
				<div class="services--description">
					<p class="services--text">
						Todos os seus clientes estão na internet hoje, e o site é o portifólio do seu produto na internet. Seu cliente precisa ter a possibilidade de conhecer o seu produto sem sair de casa, onde ele vai definir o lugar que vai comprar. Se você possui um site, muitos clientes irão escolher você. 
					</p>
					
					<p class="services--text">
						A Maçã Criativa quer te ajudar a conseguir mais clientes! 
						Iremos criar um site para você, focado em atingir o cliente final.
					</p>

					<p class="services--text">
						Atualmente 60% dos acessos a um site são feitos por smartphones. Com o intuito de deixar o seu site acessível por qualquer dispositivo, criaremos um site responsivo, ou seja, ele se ajustará ao dispositivo que está sendo acessado, tornando sua leitura mais fácil. 
					</p>

					<p class="services--text">
						Entre em contato conosco e <a href="<?php echo get_site_url()."/contato"?>">saiba mais</a> 
					</p>
					
				</div>						
			</div>
		</div>
	</div>
</section>

<?php get_footer(); ?>