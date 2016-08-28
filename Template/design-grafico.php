<?php
/**
 * Template Name: Design Gráfico
 */
get_header();

?>

<section class="cricao-de-sites">
	<div id="particles-js" class="particle-js">
	       <h2 class="particle__title"><?php echo get_the_title(); ?></h2>          
	</div>
	
	<div class="container">
		<div class="row">
			<div class="page-servicos__wrapper">
				<div class="page-servicos__img--laptop"></div>

				<div class="page-servicos__description">
					<h3 class="page-servicos__title">Criação de sites</h3>
					<p class="page-servicos__text">
						Sua empresa não tem um site? Relaxa que resolvemos isso para você. Fazemos a criação de site para todos os tipos de dispositivos.
					</p>					
					
				</div>						
			</div>
		</div>
	</div>
</section>

<?php get_footer(); ?>