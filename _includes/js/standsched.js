$(document).ready( function () {
    $('table.display').DataTable({
    	paging: false,
    	searching: false,
    	info: false,
        order: [[ 2, "dsc" ], [6, "dsc"], [4, "dsc"]],
    	aoColumnDefs: [
            {
                orderSequence: ["desc", "asc"],
                aTargets: ['_all']
            }
        ]
    });
    } );

$(document).ready( function () {
    $('table.display2').DataTable({
        paging: false,
        searching: false,
        info: false,
        order: [[ 1, "asc" ]],
        columnDefs: [ { orderable: false, targets: [0, 2, 3, 4] }]
    });
    } );
$(document).ready( function () {
    $('table.display3').DataTable({
        paging: false,
        searching: false,
        info: false,
        order: [[ 2, "asc" ]],
        columnDefs: [ { orderable: false, targets: [3, 4, 5] }]
    });
    } );