			<!-- footer -->
			<footer class="footer" role="contentinfo">
				<div class="container">
					<div class="row">
						<!-- copyright -->
						<p class="copyright">
							&copy; <?php echo date('Y'); ?> Copyright <?php bloginfo('name'); ?>. <?php _e('Powered by', 'html5blank'); ?>
							<a href="//wordpress.org" title="WordPress">Maça Criativa</a>
						</p>
						<!-- /copyright -->
					</div>
				</div>								

			</footer>
			<!-- /footer -->		

		<?php wp_footer(); ?>

		<?php wp_enqueue_script( 'jquery' ); ?>

		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

		<script type='text/javascript' src='<?php echo get_stylesheet_uri(); ?>/../library/js/isotope.pkgd.min.js?ver=2.2.0'></script>
		
		<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.11.1/jquery.validate.min.js"></script>
		
		<script type='text/javascript' src='<?php echo get_stylesheet_uri(); ?>/../library/js/contact.js?ver=2.2.0'></script>

		<script type='text/javascript' src='<?php echo get_stylesheet_uri(); ?>/../library/js/isotope-config.js?ver=2.2.0'></script>


		<script src="//cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js"></script>

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
