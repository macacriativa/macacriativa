<section class="portifolio">
  <div class="container">
  	<div class="row">
  		<div class="container" data-scrollreveal="enter left after 0.15s over 1s">
  			
  			<h2 class="container__title">Portifólio</h2>

  	    <div id="filters" class="button-group">
  	        <a class="btn btn-primary" data-filter="*">Todos</a>
  	        <a class="btn btn-primary" data-filter=".web-sites">Web sites</a>	       
  	        <a class="btn btn-primary" data-filter=".logos">Logos</a>
  	        <a class="btn btn-primary" data-filter=".facebook">Facebook</a>
  	    </div>

  			<div class="eventos-box" >
            <?php
                $args = array(
                    'posts_per_page' => 8,
                    'tax_query' => array(
                        array(
                            'taxonomy' => 'category',
                            'field' => 'slug',
                            'terms' => array("web-sites","logos", "facebook")
                        )
                     )
                );
            ?>
  					<?php query_posts($args); ?>
  					<?php while ( have_posts() ) : the_post(); ?>
            <?php
                $category = get_the_category();
                $cat_slug =  $category[0]->slug;
            ?>
  		  
            <div class="col-lg-3 col-md-3 col-sm-3 box-evento focus-box <?php echo $cat_slug; ?>">

              <div class="service-icon">
                     
                  <a class="link-evento" href="<?php the_permalink()?>">
                		<?php the_post_thumbnail(array('250','200'));?>
                		<h5 class="title-trabalhos"><?php the_title() ?></h5>
                		<p><?php the_excerpt(); ?></p>
                  </a>

              </div>
            </div>

  					<?php endwhile; ?>              
  			</div>
  			
  			<a href="/portifolio" title="Veja nosso portifólio completo" class="portifolio__ver-mais btn btn-primary">Ver Mais</a>

  		</div>		
  	</div>    
  </div>
</section>  