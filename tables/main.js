// Initializing DataTables
$(document).ready(function () {
    $('#example thead tr').clone(true).appendTo( '#example thead' );


    $('#example').DataTable({ 

        initComplete: function () {
            this.api().columns().every(function () {
                var column = this;
                var select = $('<select class="form-select-sm"><option value=""></option></select>')
                    .appendTo($(column.header()).empty())
                    .on('change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search(val ? '^' + val + '$' : '', true, false)
                           .draw();
                    });

                column.data().unique().sort().each(function (d, j) {
                    select.append('<option value="' + d + '">' + d + '</option>')
                });
            });
           
        },


        "ajax": "./data/economic_national_account.txt",

        

        "columns": [{
                "data": "Country Name"
            },
            {
                "data": "Indicator Name"
            },
            {
                "data": "Kind of economic activity Name"
            },
            {
                "data": "Price type Name"
            },
            {
                "data": "Unit Name"
            },
          
            {
                "data": "Time"
            },
            {
                "data": "Value"
            }
        ],
        scrollY: 300,
        responsive: true,
        dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true, 
        pageLength: 40, 
        buttons: [
            { extend: 'copy', className: 'btn btn-primary glyphicon glyphicon-duplicate'},
            { extend: 'csv', className: 'btn btn-primary glyphicon glyphicon-save-file' },
            { extend: 'excel', className: 'btn btn-primary glyphicon glyphicon-list-alt' },
            { extend: 'pdf', className: 'btn btn-primary glyphicon glyphicon-file' },
            { extend: 'print', className: 'btn btn-primary glyphicon glyphicon-print' },
            
        ],
       
        
        scrollCollapse: true,
        scrollX: true,
        sScrollX: true,
        // fixedHeader: {
        //     header: false,
        //     footer: true
        // },
        autoWidth: true,

    });


    var table = $('#example').DataTable();

    $('#example tbody')
        .on('mouseenter', 'td', function () {
            var colIdx = table.cell(this).index().column;

            $(table.cells().nodes()).removeClass('highlight');
            $(table.column(colIdx).nodes()).addClass('highlight');
        });

    // $('a.toggle-vis').on('click', function (e) {
    //     e.preventDefault();

    //     // Get the column API object
    //     var column = table.column($(this).attr('data-column'));

    //     // Toggle the visibility
    //     column.visible(!column.visible());
    // });


    $('#example_filter input')
    .attr('class', 'form-control rounded')
    .attr('placeholder', 'Search by indicators and keywords')
    .attr('style', 'margin: 10px 0px');

    $('label').contents().first().remove();

    



 

    
    


});


