$(document).ready( function () {
    $('table.display').DataTable({
    	paging: false,
    	order: [[ 2, "dsc" ]],
    	searching: false,
    	info: false,
    	aoColumnDefs: [
            {
                orderSequence: ["desc", "asc"],
                aTargets: ['_all']
            }
        ]
    });
    } );