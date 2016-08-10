<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<?php wp_head(); ?>
		<script>
        // conditionizr.com
        // configure environment tests
        conditionizr.config({
            assets: '<?php echo get_template_directory_uri(); ?>',
            tests: {}
        });
        </script>

	</head>
	<?php if(isset($_POST['scrollPosition'])): ?>

		<body <?php body_class(); ?> onLoad="window.scrollTo(0,<?php echo intval($_POST['scrollPosition']); ?>)">

	<?php else: ?>

		<body <?php body_class(); ?> >

	<?php endif; ?>
	
	<body <?php body_class(); ?>>		

<header class="header">
	<div class="header__top">
		<div class="container">
		    <div class="row">
		        <div class="header__top--social">
		            <a href="https://facebook.com"><i class="fa fa-facebook"></i></a>
		            <a href="https://twitter.com"><i class="fa fa-twitter"></i></a>
		            <a href="https://www.youtube.com"><i class="fa fa-instagram"></i></a>
		        </div>

		        <div class="header__top--contact hidden-xs">
		            <a href="contact_us.html" class="header__top--contact-email  hidden-xs"><i class="fa fa-envelope ph-size" aria-hidden="true"></i> contato@macacriativa.com</a>
		            <span class="divisor">|</span>
		            <a href="tel:12981433344" class="header__top--contact-phone"><i class="fa fa-mobile-phone ph-size" aria-hidden="true"></i> (12) 98143 3344</a>
		        </div>

		        <div class="header__top--menu menu-mobile hidden-sm">
		        	<div class="menu-mobile__bottom"></div>	
		        </div>
        	</div>
        </div>
    </div>

	<div class="container">
	    <div class="row">
			<div class="header__bottom" id="menu-navbar">
		        <div class="header__bottom--logo">
		            <a href="<?php echo home_url(); ?>">
		                <img src="<?php echo get_stylesheet_directory_uri(); ?>/library/images/logo.png" alt="Maçã Criativa" id="logotop">
		            </a>
		        </div>
		        <div class="header__bottom--navbar">
		            <nav class="navbar navbar-default">
                        <ul class="nav navbar-nav">
                            <li class="active">
                                <a href="<?php echo home_url(); ?>" class="dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home
                                </a>   
                            </li>
                            <li>
                                <a href="<?php echo get_site_url()."/category/portifolio"?>" class="hvr-underline-from-center">Portifólio</a>
                            </li>
                            <li>
                                <a href="<?php echo get_site_url()."/quem-somos"?>" class="hvr-underline-from-center">Quem Somos</a>
                            </li>
                            <li>
                                <a href="<?php echo get_site_url()."/servicos"?>" class="hvr-underline-from-center">Serviços</a>
                            </li>
                            <li>
                                <a href="<?php echo get_site_url()."/contatos"?>" class="hvr-underline-from-center">Contato</a>
                            </li>                                       
                        </ul>		               
		            </nav>
		        </div>
		    </div>
    	</div>
	</div>
</header>
