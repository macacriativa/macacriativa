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
				<div class="services__wrapper">
					<div class="services--description">
						<p class="services--text">
							Além dos meios digitais, o Maçã Criativa tambem faz a divulgação física da sua empresa, através de impressos elaborados especialmente para sua marca.
							Com os impressos você pode trazer uma experiência sensorial ainda maior que a divulgação digital, uma combinação de cores, texturas e desenhhos que colocam na mão do cliente um pouco daquilo que sua empresa quer transmitir							
						</p>

						<span class=".design-grafico--bg"></span>
						
						<p class="services--text">
							Fazemos os impressos para todo tipo de negócio e buscamos a fundo colocar no papel aquilo que sua empresa tem como propósito.
							Flyers, Banners, cartões de visita, cartazes , adesivos, ìmãs e muitos outros produtos que você pode escolher para sua divulgação.
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