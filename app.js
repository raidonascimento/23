Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'realPneus',
    requires: [
	'Ext.field.Search'
    ],
    controllers: [
	'main'
	
    ],
    views: [
	'menuIniciar',
	'clientesList',
	'servicoList',
	'pneusList',
	'coletasForm'
	//novo//,
	
	//'loginForm',
	//'ipSincronizarForm'

    ],
    models: [
	'sincronizarClientesModel',
	'clientesModel',
	'sincronizarPneusModel',
	'pneusModel',
	'sincronizarServicosModel',
	'servicosModel',
	'coletasModel',
	'sincronizarFuncionariosModel',
	'funcionariosModel',
	'pneusColetaModel',
	'coletasCompletoModel'//,
	//novo
	//'codigoFuncionarioModel',
	//'ipSincronizarModel'

    ],
    stores: [
	'sincronizarClientesStore',
	'clientesStore',
	'sincronizarPneusStore',
	'pneusStore',
	'sincronizarServicosStore',
	'servicosStore',
	'coletasStore',
	'sincronizarFuncionariosStore',
	'funcionariosStore',
	'pneusColetaStore'//,
	//novo
	//'codigoFuncionarioStore',
	//'ipSincronizarStore',
	//'Contatos'
    ],
    viewport: {
	layout: {
	    type: 'card',
	    animation: {
		type: 'slide',
		duration: 5
	    }
	}
    },
    launch: function () {
	
	
	Ext.Date.monthNames = [
	    'Janeiro',
	    'Fevereiro',
	    'Março',
	    'Abril',
	    'Maio',
	    'Junho',
	    'Julho',
	    'Agosto',
	    'Setembro',
	    'Outubro',
	    'Novembro',
	    'Dezembro'
	];

    }
});
