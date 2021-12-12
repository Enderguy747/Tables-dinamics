

$(document).ready(function () {

	$('#tabla').DataTable({

		responsive: true,

		paging: false,

		searching: true,

		ordering: true,

		language: {

			"decimal": "",

			"emptyTable": "No hay información",

			//"info": "Mostrando START a END de TOTAL Entradas",

			//"infoEmpty": "Mostrando 0 to 0 of 0 Entradas",

			//"infoFiltered": "(Filtrado de MAX total entradas)",

			"infoPostFix": "",

			"thousands": ",",

			"lengthMenu": "Mostrar MENU Entradas",

			"loadingRecords": "Cargando...",

			"processing": "Procesando...",

			"search": "Buscar:",

			"zeroRecords": "Sin resultados encontrados",

			"paginate": {

				"first": "Primero",

				"last": "Ultimo",

				"next": "Siguiente",

				"previous": "Anterior"

			}

		},

	});

	$('.dataTables_length').addClass('bs-select');

});



