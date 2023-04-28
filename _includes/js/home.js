$(document).ready( function () {
    $('table.display').DataTable({
    	paging: false,
    	searching: false,
    	info: false,
        order: [[ 1, "dsc" ], [5, "dsc"], [4, "dsc"]],
    	aoColumnDefs: [
            {
                orderSequence: ["desc", "asc"],
                aTargets: ['_all']
            }
        ]
    });
    } );