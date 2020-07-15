$(document).ready( function () {
    $('table.display').DataTable({
        paging: false,
        searching: false,
        info: false,
        order: [[ 3, "dsc" ], [5, "dsc"]],
        aoColumnDefs: [
            {
                orderSequence: ["desc", "asc"],
                aTargets: ['_all']
            },
            {
                bSortable: false,
                aTargets: [0, 1, 2]
            }
        ]
    });
    } );