<?php
/**
 * Template Name: Serviços
 */
get_header();

?>

<section class="page-servicos">
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
					<a href="<?php echo get_site_url()."/servicos/criacao-de-sites"?>" title="aiba mais sobre a Criação de Sites" class="services__box--read-more text-center">Sabia Mais</a>	
				</div>

				<div class="page-servicos__description">
					<h3 class="page-servicos__title">Design Gráfico</h3>
					<p class="page-servicos__text">
						Não tem um cartão de visita para deixar com seu cliente? Relaxa, que fazemos isso pra você. Fazemos também a criação de Panfletos e outros meios de marketing impresso.
					</p>
					<a href="<?php echo get_site_url()."/servicos/design-grafico"?>" title="aiba mais sobre a Criação de Sites" class="services__box--read-more text-center">Clique aqui e saiba mais</a>			
				</div>
				
				<div class="page-servicos__img--laptop"></div>
				
				<div class="page-servicos__img--smartphone">
					<div class="page-servicos__hover">
						<div class="page-servicos__hover--img"></div>
					</div>
				</div>	

				<div class="page-servicos__description">
					<h3 class="page-servicos__title">Mídias Sociais</h3>
					<p class="page-servicos__text">
						Você tem uma página no Facebook, mas não sabe como se aproximar de seus clientes? Calma, que temos uma solução pra você. Podemos ajudar a alavancar o seu negócio nas mídias sociais e trazer mais clientes para sua empresa.
					</p>					
					<a href="<?php echo get_site_url()."/servicos/midias-sociais"?>" title="aiba mais sobre a Criação de Sites" class="services__box--read-more text-center">Clique aqui e saiba mais</a>
				</div>							
			</div>
		</div>
	</div>
</section>

<?php get_footer(); ?>