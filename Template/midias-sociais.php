<?php
/**
 * Template Name: Mídias Sociais
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
						Hoje a maior parte das pessoas estão com seus smartphones conectados as redes sociais o dia todo, através da praticidade das redes
						móveis é possível estar sempre conectado ao Facebook, Instagram, WhatsApp entre outros.
					</p>
					
					<p class="services--text">
						Com todo esse crescimento das redes sociais fez com que elas se tornassem uma ótima ferramenta para divulgar seus serviços ou marca,
						afinal se toda a população esta conectada o seu cliente tambem estará.
						Então porque não investir em divulgação para midias sociais?!
					</p>

					<p class="services--text">
						O Maça Criativa vai trabalhar a melhor estratégia para alcancar seus clientes. Temos várias opções de divulgação para voce escolher.
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