$(document).ready( function () {
    $('table.display').DataTable({
        paging: true,
        searching: false,
        info: false,
        order: [[ 1, "dsc" ]],
    	aoColumnDefs: [
            {
                orderSequence: ["desc", "asc"],
                aTargets: ['_all']
            }
        ]
    });
    } );