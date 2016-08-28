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
<div class="container">

<div class="content-left-wrap col-md-12" id="midias">
	<div id="primary" class="content-area">
        <div class="breadcrumbs" xmlns:v="http://rdf.data-vocabulary.org/#">
            <?php if(function_exists('bcn_display'))
            {
                bcn_display();
            }?>
        </div>
		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<h1 class="page-title"><?php single_cat_title(); ?></h1>
				<?php
					// Show an optional term description.
					$term_description = term_description();
					if ( ! empty( $term_description ) ) :
						printf( '<div class="taxonomy-description">%s</div>', $term_description );
					endif;
				?>
			</header><!-- .page-header -->
            <ul id="midia-filters">
                <li><a data-filter="*">Todos</a></li>
                <li><a data-filter=".fotos">Fotos</a></li>
                <li><a data-filter=".videos">Videos</a></li>
            </ul>
            <div class="midias-row" >
                <?php /* Start the Loop */ ?>
                <?php while ( have_posts() ) : the_post(); ?>
                <?php
                    $category = get_the_category();
                    $cat_slug =  $category[0]->slug;
                ?>

                    <div class="col-lg-4 col-md-4 col-sm-4 midia-box <?php echo $cat_slug; ?>">

                        <div class="service-icon">
                            <a href="<?php the_permalink()?>">
                                <?php the_post_thumbnail(array('250','250'));?>
                                <h5 class="title-trabalhos"><?php the_title() ?></h5>
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

		</main><!-- #main -->
	</div><!-- #primary -->

</div><!-- .content-left-wrap -->
</div><!-- .container -->

<?php get_footer(); ?>