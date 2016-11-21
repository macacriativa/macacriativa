<section class="social">
	<div class="container">
		<div class="row">
			<h2 class="container__title">Fale com a gente </h2>
			
			<ul class="social__wrapper">
				<li class="social__box link-whatsapp">
					<a href="#" id="whatsapp" class="social__box--link">Envie uma mensagem no whatsApp
						<span class="social__box--icon fa fa-whatsapp"></span>
					</a>
				</li>
				<li class="social__box link-messenger">
					<a href='//m.me/256474044701813' class="social__box--link" onclick='event.preventDefault(); openMessenger()'>Envie uma mensagem no facebook
					  <svg class='social__box--icon' viewBox='0 0 800 800' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
					    <path d='M399.494079,0.00274415094 C178.859771,0.00274415094 0.000304955527,167.227237 0.000304955527,373.508113 C0.000304955527,490.856138 57.8859466,595.562774 148.414028,664.036455 L148.414028,806.983343 L284.747446,731.373854 C321.092046,741.545506 359.609962,747.013481 399.494079,747.013481 C620.128386,747.013481 798.987853,579.788988 798.987853,373.508113 C798.987853,167.227237 620.128386,0.00274415094 399.494079,0.00274415094 M441.568386,500.879189L338.245388 393.558495 139.264956 503.581669 357.419975 272.117619 460.742973 379.437297 659.722389 269.414122z'></path>
					  </svg>
					</a>				
				</li>
				<li class="social__box link-email">
				<a href="/contato" id="whatsapp" class="social__box--link">Envie um email com suas dúvidas
					<span class="social__box--icon fa fa-envelope"></span>
				</a>
				</li>
			</ul>
		</div>
	</div>
</section>

<script>
	var isMobile = {
	  Android: function() {
	    return navigator.userAgent.match(/Android/i);
	  },
	  BlackBerry: function() {
	    return navigator.userAgent.match(/BlackBerry/i);
	  },
	  iOS: function() {
	    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	  },
	  Opera: function() {
	    return navigator.userAgent.match(/Opera Mini/i);
	  },
	  Windows: function() {
	    return navigator.userAgent.match(/IEMobile/i);
	  },
	  any: function() {
	    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	  }
	};

	if (isMobile.Android()) {

	  document.getElementById("whatsapp").href = "intent://send/+5512981433344#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end";

	} else if (isMobile.iOS()) {

	  document.getElementById("whatsapp").href = "tel:+5512981433344";

	} else {
	  document.getElementById("whatsapp").href = "tel:+5512981433344";

	}




	function openMessenger() {
	  window.open('//m.me/256474044701813', 'messenger', 'top=50, left=' + (screen.width-360) + ', width=360, bottom=50, height=' + (screen.height-30));
	  document.body.classList.add('inactive'); 
	  setTimeout(function(){ 
	    checkFocus = setInterval(function(){
	      if (document.hasFocus()) {
	        document.body.classList.remove('inactive');
	        clearInterval(checkFocus);
	      }
	    }, 1) 
	  }, 1000);
	}





</script>