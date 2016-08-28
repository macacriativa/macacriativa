<section class="portifolio">
  <div class="container">
  	<div class="row">
  		<div class="container" data-scrollreveal="enter left after 0.15s over 1s">
  			

  			<h2 class="container__title">Portifólio</h2>

            <div id="filters" class="portifolio__filters button-group">
            <a class="btn" data-filter="*">Todos</a>
              <?php     
                get_the_categories();

              ?>        
            </div>

  			<div class="portifolio__wrapper" >
            <?php
                $args = array(
                    'posts_per_page' => 6,
                    'tax_query' => array(
                        array(
                            'taxonomy' => 'category',
                            'field' => 'slug',
                            'terms' => array("web-sites","logos", "cartoes-de-visita")
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
  		  
            <div class="portifolio-box focus-box <?php echo $cat_slug; ?>">

              <div class="portifolio-itens">
                     
                  <a class="portifolio-box--link" href="<?php the_permalink()?>">
                		<?php the_post_thumbnail(array('350','280'));?>
                		<h4 class="portifolio-box--tittle"><?php the_title() ?></h4>
                		
                  </a>

              </div>
            </div>

  					<?php endwhile; ?>              
  			</div>
                
        <a href="<?php echo getCategoryLink('portifolio'); ?>" title="Veja nosso portifólio completo" class="portifolio__ver-mais btn">Ver Mais</a>          
        

  		</div>		
  	</div>    
  </div>
</section>  