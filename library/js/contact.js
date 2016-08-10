jQuery(document).ready(function($){

    $('.menu-mobile').click(function(){
        $('body').toggleClass('menu-opened');
    });

    function addBlurValidation(){
        jQuery("#enviar").mousedown(function(){
              jQuery(".form-horizontal input, textarea").blur(function(){
                erros = jQuery(".wpcf7-not-valid");
                if(erros.length>1){
              jQuery("#enviar").trigger("click");
              }
            });          
        })  
    }
    addBlurValidation();

    var oldLabels = {};
    //declarando mensagens de erro; 
    var msg = {
        messages: {
            mensagem: {
                required: "Por favor digite uma mensagem",
                minlength: "Este campo de conter pelo menos 50 caracteres"
            },
            email: "Digite um email válido"
        }
    };
    //armazenando as labels originais
    $('.wpcf7-form-control').each(function( index ) {
        var label = $(this).parent('span').next().next();
        oldLabels[$(this).attr("id")] = $(label).text();
    });

    $('.form-control').focus(function(){ 
    if( $(this).is(':empty') ){        
        $(this).parent('span').next().next().addClass('stay');            
    } else {
        $(this).parent('span').next().next().removeClass('stay');           
    }        
    });

    //validação ao dar submit 
    $('form').submit(function(){
        setTimeout(function(){ change();}, 1000);
    });

    //chamando validação jquery validate
    $('.wpcf7-form').validate(msg);

    //validação em tempo real
    $('.wpcf7-form-control').blur(function(){   
        $('.wpcf7-form').valid();
        var label = $(this).parent('span').next().next();
        var currentID = $(this).attr('id');
        if($(this).hasClass('wpcf7-validates-as-required')  && $(this).val().length == 0){
            $(label).text('Ops, você esqueceu do campo' + " " + currentID);
            label.addClass('stay');
            label.removeClass('fa fa-check');
            label.css('color', 'red');
        }else if($(this).hasClass('error')){    
            label.text($("label.error").text());
            label.addClass('stay');
            label.removeClass('fa fa-check');
            label.css('color', 'red');
        }else{
            label.text(currentID);
            label.addClass('fa fa-check');
            label.css('color', 'green');
        }
    });

    function change(){  
        jQuery('input, textarea').each(function(index, element){
            var label = jQuery(element).parent('span').next().next();
            var currentID = jQuery(element).attr('id');
            if(jQuery(element).hasClass('wpcf7-not-valid')){
                label.addClass('stay');
                label.css('color', 'red');
                jQuery(label).text('Por favor preencha o campo' + " " + currentID);
                $("label.error").hide();
            } else {
                jQuery(label).text();
                //jQuery(label).text(currentID);
                //label.css('color', 'green');
            }
        });
    
        if(jQuery('.wpcf7-mail-sent-ok').length > 0) {
            jQuery('input, textarea').each(function(index, element){
                var label = jQuery(element).parent('span').next().next();
                var currentID = jQuery(element).attr('id');
                label.css('color', 'gray');
                jQuery(label).text(currentID);
            
            });
            jQuery('.wpcf7-character-count').removeClass('alert-success');
            jQuery('.wpcf7-character-count').addClass('alert-danger too-short');
            jQuery('.wpcf7-character-count').text('0');
        }
    }
});