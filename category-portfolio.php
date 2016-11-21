<?php
/**
 * The template for displaying Category Portifolio.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 */

get_header(); ?>
<div class="clear"></div>
</header> <!-- / END HOME SECTION  -->
<div id="content" class="site-content">

<div id="particles-js" class="particle-js">
       <h2 class="particle__title">Portfólio</h2>          
</div>

<div class="container">
    <div class="row">
		<?php if ( have_posts() ) : ?>			

            <div id="midia-filters" class="portifolio__filters button-group">
            <a class="btn" data-filter="*">Todos</a>
              <?php     
                get_the_categories();             

              ?>        
            </div>

            <div class="portifolio__wrapper" >
            <?php
              $args = array(
                  'posts_per_page' => 12,
                  'tax_query' => array(
                      array(
                          'taxonomy' => 'category',
                          'field' => 'slug',
                          'terms' => array("web-sites","logos", "cartoes-de-visita", "flyers")
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
            <div id="paginate-container">
			     <?php 
                    function custom_pagination() {
                    global $wp_query;
                    $big = 999999999; // need an unlikely integer
                    $pages = paginate_links( array(
                            'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
                            'format' => '?paged=%#%',
                            'current' => max( 1, get_query_var('paged') ),
                            'total' => $wp_query->max_num_pages,
                            'prev_next' => false,
                            'type'  => 'array',
                            'prev_next'   => TRUE,
                            'prev_text'    => __('« Anterior'),
                            'next_text'    => __('Próximo »'),
                        ) );
                        if( is_array( $pages ) ) {
                            $paged = ( get_query_var('paged') == 0 ) ? 1 : get_query_var('paged');
                            echo '<ul class="pagination">';
                            foreach ( $pages as $page ) {
                                    echo "<li>$page</li>";
                            }
                           echo '</ul>';
                        }
                    }
                ?>
               <?php echo custom_pagination(); ?>
            </div>

		<?php else : ?>

			<?php get_template_part( 'content', 'none' ); ?>

		<?php endif; ?>
        
    </div>
</div><!-- .container -->

<?php get_footer(); ?>