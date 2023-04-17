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


$(document).ready( function () {
    $('table.display2').DataTable({
        paging: false,
        order: false,
        columnDefs: [ { orderable: false, targets: [0, 1, 2, 3] }],
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