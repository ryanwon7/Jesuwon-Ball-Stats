$(document).ready( function () {
    $('table.display').DataTable({
    	paging: false,
    	order: [[ 1, "dsc" ]],
    	searching: false,
    	info: false
    });
    } );