$(document).ready(function() {

    //initialising the array
    var row1 = [1, 2, 3];
    var row2 = [4, 5, 6];
    var row3 = [7, 8, 9];

    var tempRow1 = [];
    var tempRow2 = [];
    var tempRow3 = [];

    var matrixAppend = [];
    var Tmatrix = [];
    var i, l;

    //mapping the dom dynamically from array
    var setMatrixData = function() {
        tempRow1.push('<div c-matrix__row>');
        row1.map(function(valRow1) {
            tempRow1.push('<span>' + valRow1 + ' ' + '</span>');
        });
        tempRow1.push('</div>');

        tempRow2.push('<div c-matrix__row>');
        row2.map(function(valRow2) {
            tempRow2.push('<span>' + valRow2 +  ' ' + '</span>');
        });
        tempRow2.push('</div>');

        tempRow3.push('<div c-matrix__row>');
        row3.map(function(valRow3) {
            tempRow3.push('<span>' + valRow3 +  '  ' + '</span>');
        });
        tempRow3.push('</div>');

        $('.c-matrix').append(tempRow1);
        $('.c-matrix').append(tempRow2);
        $('.c-matrix').append(tempRow3);

    }
    setMatrixData();

    //on click
    $('.c-click').on('click', function() {
        debugger;
    //     row1.map(function(value, index) {
    //         matrixAppend.push ({
    //             R1: row1[index],
    //             R2: row2[index],
    //             R3: row3[index]
    //         });
    //
    //         Tmatrix.push('<div>' + matrixAppend[index].R1 +
    //             ' ' + matrixAppend[index].R2 + ' ' + matrixAppend[index].R3 + '</div>')
    //     });
    // $('.c-transformed-data').append(Tmatrix);


    for ( var i = row1.length; i > 0 ; i-- )
    {
        matrixAppend.push ({
                    R1: row1[i],
                    R2: row2[i],
                    R3: row3[i]
                });
        console.log(matrixAppend.R1);

        Tmatrix.push('<div>' + matrixAppend[i].R1 +
                    ' ' + matrixAppend[i].R2 + ' ' + matrixAppend[i].R3 + '</div>')

        $('.c-transformed-data').append(Tmatrix);
    }


    });
});
