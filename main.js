/* Formatting function for row details - modify as you need */
function format(d) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>Year</td>' +
        // '<td>2000</td>' +
        // '<td>2001</td>' +
        // '<td>2002</td>' +
        // '<td>2003</td>' +
        // '<td>2004</td>' +
        // '<td>2005</td>' +
        // '<td>2006</td>' +
        // '<td>2007</td>' +
        // '<td>2008</td>' +
        // '<td>2009</td>' +
        '<td>2010</td>' +
        '<td>2011</td>' +
        '<td>2012</td>' +
        '<td>2013</td>' +
        '<td>2014</td>' +
        '<td>2015</td>' +
        '<td>2016</td>' +
        '<td>2017</td>' +
        '<td>2018</td>' +
        '<td>2019</td>' +
        '<td>2020</td>' +
        '</tr>' +
        '<tr>' +

        '<td>Value</td>' +
        // '<td>' + d[2000] + '</td>' +
        // '<td>' + d[2001] + '</td>' +
        // '<td>' + d[2002] + '</td>' +
        // '<td>' + d[2003] + '</td>' +
        // '<td>' + d[2004] + '</td>' +
        // '<td>' + d[2005] + '</td>' +
        // '<td>' + d[2006] + '</td>' +
        // '<td>' + d[2007] + '</td>' +
        // '<td>' + d[2008] + '</td>' +
        // '<td>' + d[2009] + '</td>' +
        '<td>' + d[2010] + '</td>' +
        '<td>' + d[2011] + '</td>' +
        '<td>' + d[2012] + '</td>' +
        '<td>' + d[2013] + '</td>' +
        '<td>' + d[2014] + '</td>' +
        '<td>' + d[2015] + '</td>' +
        '<td>' + d[2016] + '</td>' +
        '<td>' + d[2017] + '</td>' +
        '<td>' + d[2018] + '</td>' +
        '<td>' + d[2019] + '</td>' +
        '<td>' + d[2020] + '</td>' +
        '</tr>' +


        '</table>';
}


// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************

$(document).ready(function () {

    var table = $('#table_1').DataTable({

        "ajax": "./data/National Accounts.json",
        "columns": [{
                "className": 'dt-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            {
                "data": "Indicator"
            },
            {
                "data": "Price type"
            },
            {
                "data": "Kind of economic activity"
            },
            {
                "data": "Unit"
            }

        ],
        "order": [
            [1, 'asc']
        ],

        scrollY: 400,

        // dom: 'Bfrtip',
        dom: 'Bfrip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 15,


        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ]


    });

    // Add event listener for opening and closing details
    $('#table_1 tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });


});


// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************

$(document).ready(function () {

    var table = $('#table_finance').DataTable({

        "ajax": "./data/Finance.json",
        "columns": [{
                "className": 'dt-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            {
                "data": "Indicator"
            },
            {
                "data": "Unit"
            },
            {
                "data": "Source"
            }

        ],
        "order": [
            [1, 'asc']
        ],

        scrollY: 400,

        // dom: 'Bfrtip',
        dom: 'Bfrip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 15,


        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ]


    });

    // Add event listener for opening and closing details
    $('#table_finance tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });


});



// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************

$(document).ready(function () {

    var table = $('#table_2').DataTable({

        "ajax": "./data/Trade.json",
        "columns": [{
                "className": 'dt-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            {
                "data": "Indicator"
            },
            {
                "data": "Flow"
            },
            {
                "data": "Partner"
            },
            {
                "data": "Commodity"
            }

        ],
        "order": [
            [1, 'asc']
        ],

        scrollY: 400,

        // dom: 'Bfrtip',
        dom: 'Bfrip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 15,


        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ]


    });

    // Add event listener for opening and closing details
    $('#table_2 tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });


});


// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************

$(document).ready(function () {

    var table = $('#table_3').DataTable({

        "ajax": "./data/Transport.json",
        "columns": [{
                "className": 'dt-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            {
                "data": "Indicator"
            },
            {
                "data": "Unit"
            }

        ],
        "order": [
            [1, 'asc']
        ],

        scrollY: 400,

        // dom: 'Bfrtip',
        dom: 'Bfrip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 15,


        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ]


    });

    // Add event listener for opening and closing details
    $('#table_3 tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });


});


// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************

$(document).ready(function () {

    var table = $('#table_4').DataTable({

        "ajax": "./data/Industry.json",
        "columns": [{
                "className": 'dt-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            {
                "data": "Indicator"
            },
            {
                "data": "Industry"
            },
            {
                "data": "ISIC Revision"
            },
            {
                "data": "Unit"
            }

        ],
        "order": [
            [1, 'asc']
        ],

        scrollY: 400,

        // dom: 'Bfrtip',
        dom: 'Bfrip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 15,


        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ]


    });

    // Add event listener for opening and closing details
    $('#table_4 tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });


});


// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************

$(document).ready(function () {

    var table = $('#table_population').DataTable({

        "ajax": "./data/Population.json",
        "columns": [{
                "className": 'dt-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            {
                "data": "Indicator"
            },
            {
                "data": "Age"
            },
            {
                "data": "Sex"
            },
            {
                "data": "Area"
            },
            {
                "data": "Nationality"
            },
            {
                "data": "Marital status"
            },
            {
                "data": "Causes of death"
            }
        ],
        "order": [
            [1, 'asc']
        ],

        scrollY: 400,

        // dom: 'Bfrtip',
        dom: 'Bfrip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 15,


        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ]


    });

    // Add event listener for opening and closing details
    $('#table_population tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });


});


// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************

$(document).ready(function () {

    var table = $('#table_household_budget').DataTable({

        "ajax": "./data/Household Budget.json",
        "columns": [{
                "className": 'dt-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            {
                "data": "Indicator"
            },
            {
                "data": "Age"
            },
            {
                "data": "Sex"
            },
            {
                "data": "Area"
            },
            {
                "data": "Nationality"
            },
            {
                "data": "Quintile"
            },
            {
                "data": "Types of products/services"
            }
        ],
        "order": [
            [1, 'asc']
        ],

        scrollY: 400,

        // dom: 'Bfrtip',
        dom: 'Bfrip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 15,


        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ]


    });

    // Add event listener for opening and closing details
    $('#table_household_budget tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });


});



// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************

$(document).ready(function () {

    var table = $('#table_health').DataTable({

        "ajax": "./data/Health.json",
        "columns": [{
                "className": 'dt-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            {
                "data": "Indicator"
            },
            {
                "data": "Age"
            },
            {
                "data": "Sex"
            },
            {
                "data": "Area"
            },
            {
                "data": "Nationality"
            },
            {
                "data": "Immunization"
            },
            {
                "data": "Contraception method"
            }
        ],
        "order": [
            [1, 'asc']
        ],

        scrollY: 400,

        // dom: 'Bfrtip',
        dom: 'Bfrip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 15,


        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ]


    });

    // Add event listener for opening and closing details
    $('#table_health tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });


});

// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************

$(document).ready(function () {

    var table = $('#table_education').DataTable({

        "ajax": "./data/Education.json",
        "columns": [{
                "className": 'dt-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            {
                "data": "Indicator"
            },
            {
                "data": "Age"
            },
            {
                "data": "Sex"
            },
            {
                "data": "Education level"
            },
            {
                "data": "Sector"
            },
            {
                "data": "Nationality"
            }
        ],
        "order": [
            [1, 'asc']
        ],

        scrollY: 400,

        // dom: 'Bfrtip',
        dom: 'Bfrip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 15,


        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ]


    });

    // Add event listener for opening and closing details
    $('#table_education tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });


});


// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************

$(document).ready(function () {

    var table = $('#table_labor').DataTable({

        "ajax": "./data/Labor.json",
        "columns": [{
                "className": 'dt-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            {
                "data": "Indicator"
            },
            {
                "data": "Sex"
            },
            {
                "data": "Age"
            },
            {
                "data": "Nationality"
            },
            {
                "data": "Area"
            },
            {
                "data": "Employment status"
            },
            {
                "data": "Main occupation"
            },
            {
                "data": "Reasons for inactivity"
            },
            {
                "data": "Economic sector"
            },
            {
                "data": "Economic activity"
            }
        ],
        "order": [
            [1, 'asc']
        ],

        scrollY: 400,

        // dom: 'Bfrtip',
        dom: 'Bfrip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 15,


        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ]


    });

    // Add event listener for opening and closing details
    $('#table_labor tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });


});



// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************

$(document).ready(function () {

    var table = $('#table_environment').DataTable({

        "ajax": "./data/Environment.json",
        "columns": [{
                "className": 'dt-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            {
                "data": "Indicator"
            },
            {
                "data": "Unit"
            }
        ],
        "order": [
            [1, 'asc']
        ],

        scrollY: 400,

        // dom: 'Bfrtip',
        dom: 'Bfrip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 15,


        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ]


    });

    // Add event listener for opening and closing details
    $('#table_environment tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });


});



// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************

$(document).ready(function () {

    var table = $('#table_energy').DataTable({

        "ajax": "./data/Energy.json",
        "columns": [{
                "className": 'dt-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            {
                "data": "Indicator"
            },
            {
                "data": "Unit"
            }
        ],
        "order": [
            [1, 'asc']
        ],

        scrollY: 400,

        // dom: 'Bfrtip',
        dom: 'Bfrip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 15,


        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ]


    });

    // Add event listener for opening and closing details
    $('#table_energy tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });


});



// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************
// ********************************************************************************

$(document).ready(function () {

    var table = $('#table_sdg').DataTable({

        "ajax": "./data/SDG.json",
        "columns": [{
                "className": 'dt-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            {
                'data': 'Goal'
            },
            {
                'data': 'Indicator'
            },
            {
                'data': 'Indicator number'
            },
            {
                'data': 'Age'
            },
            {
                'data': 'Activity'
            },
            {
                'data': 'Custom breakdown'
            },
            {
                'data': 'Composite breakdown'
            },
            {
                'data': 'Disability status'
            },
            {
                'data': 'Education level'
            },
            {
                'data': 'Data frequency'
            },
            {
                'data': 'Geo info type'
            },
            {
                'data': 'Income wealth quantile'
            },
            {
                'data': 'Nature'
            },
            {
                'data': 'Observation status'
            },
            {
                'data': 'Occupation'
            },
            {
                'data': 'Product'
            },
            {
                'data': 'Reporting type'
            },
            {
                'data': 'Sex'
            },
            {
                'data': 'Unit measure'
            },
            {
                'data': 'Unit multiplier'
            },
            {
                'data': 'Urbanisation'
            }
        ],
        "order": [
            [1, 'asc']
        ],

        scrollY: 400,

        // dom: 'Bfrtip',
        dom: 'Bfrip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        paging: true,
        pageLength: 15,


        buttons: [{
                extend: 'copy',
                className: 'btn btn-primary glyphicon glyphicon-duplicate'
            },
            {
                extend: 'csv',
                className: 'btn btn-primary glyphicon glyphicon-save-file'
            },
            {
                extend: 'excel',
                className: 'btn btn-primary glyphicon glyphicon-list-alt'
            },
            {
                extend: 'pdf',
                className: 'btn btn-primary glyphicon glyphicon-file'
            },
            {
                extend: 'print',
                className: 'btn btn-primary glyphicon glyphicon-print'
            },

        ]


    });

    // Add event listener for opening and closing details
    $('#table_sdg tbody').on('click', 'td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });


});