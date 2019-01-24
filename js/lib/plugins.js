// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
	(function() {
		var noop = function() {
		};
		var methods = [ 'assert', 'clear', 'count', 'debug', 'dir', 'dirxml',
				'error', 'exception', 'group', 'groupCollapsed', 'groupEnd',
				'info', 'log', 'markTimeline', 'profile', 'profileEnd',
				'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp',
				'trace', 'warn' ];
		var length = methods.length;
		var console = window.console = {};
		while (length--) {
			console[methods[length]] = noop;
		}
	}());
}

	// alinhamento box com as etiquetas
var alignBox = function() {
		var marginLef		= parseInt($('section.etiquetas article').css('margin-left')),
			marginRight		= parseInt($('section.etiquetas article').css('margin-right')),
			paddingLeft		= parseInt($('section.etiquetas article').css('padding-left')),
			paddingRight	= parseInt($('section.etiquetas article').css('padding-right'));
		
		var espaco = marginLef + marginRight + paddingLeft + paddingRight + 10;
		
		var resultado = parseInt($('section.etiquetas article').width()) + espaco;
	
		var qtidade = Math.floor((parseInt($('section.conteudo').width())) / resultado);

		var valor = qtidade * resultado;

		$('section.etiquetas').css({'width': valor});
	},
	
	// abrir tela de impressao
	triggerPrint = function(media) {
		if (media.matches) {
			window.open('share/Wesley_Curriculo_Web_Developer.pdf','_self');
		}		
	};