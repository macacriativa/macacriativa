			<!-- footer -->
			<footer class="footer" role="contentinfo">
				<div class="footer__overlay">
					<div class="container">
						<div class="row">
							<!-- copyright -->
							<p class="copyright">
								&copy; <?php echo date('Y'); ?> Copyright <?php bloginfo('name'); ?>
							</p>
							<!-- /copyright -->
							<div class="list-social">
	                            <a href="https://www.facebook.com/amacacriativa/" target="_blank" class="fa fa-facebook"></a>
	                            <a href="https://www.instagram.com/macacriativa/" target="_blank" class="fa fa-instagram"></a>
	                        </div>							
						</div>
					</div>
				</div>								

			</footer>
			<!-- /footer -->		

		<?php wp_footer(); ?>

		<?php wp_enqueue_script( 'jquery' ); ?>

		<script type='text/javascript' src='<?php echo get_stylesheet_uri(); ?>/../library/js/isotope.pkgd.min.js?ver=2.2.0'></script>

		<script type='text/javascript' src='<?php echo get_stylesheet_uri(); ?>/../library/js/jquery.validate.min.js?ver=2.2.0'></script>
		
		<script type='text/javascript' src='<?php echo get_stylesheet_uri(); ?>/../library/js/contact.js?ver=2.2.0'></script>

		<script type='text/javascript' src='<?php echo get_stylesheet_uri(); ?>/../library/js/isotope-config.js?ver=2.2.0'></script>

		<script type='text/javascript' src='<?php echo get_stylesheet_uri(); ?>/../library/js/particle.js?ver=2.2.0'></script>

		<script type='text/javascript' src='<?php echo get_stylesheet_uri(); ?>/../library/js/jquery.counterup.min.js?ver=2.2.0'></script>

		<!-- analytics -->
		<script>
		(function(f,i,r,e,s,h,l){i['GoogleAnalyticsObject']=s;f[s]=f[s]||function(){
		(f[s].q=f[s].q||[]).push(arguments)},f[s].l=1*new Date();h=i.createElement(r),
		l=i.getElementsByTagName(r)[0];h.async=1;h.src=e;l.parentNode.insertBefore(h,l)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-XXXXXXXX-XX', 'yourdomain.com');
		ga('send', 'pageview');
		</script>

	</body>
</html>
