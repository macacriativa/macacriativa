<?php
/**
 * Template Name: Contato
 */
get_header();

?>

<section class="contact">
	<div id="particles-js" class="particle-js">
	       <h2 class="particle__title"><?php echo get_the_title(); ?></h2>          
	</div>
	
	<div class="container">
		<div class="row">
			<?php
				if (have_posts()) : while(have_posts()) : the_post();
					the_content();	
				endwhile;
				endif;
			 ?>	
		</div>
	</div>
</section>

<?php get_footer(); ?>