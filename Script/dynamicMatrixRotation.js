$(document).ready(function() {

    var numOfRows;
    var matrix = [];

    $('.c-enter-matrix').on('click',function() {
        numOfRows = document.getElementById('total-rows').value;
        for(var i = 0; i < numOfRows; i++) {
            for (var j = 0; j < numOfRows; j++) {
                matrix.push('<input type=number>').value;
            }
            matrix.push('<br>');

        }
        $('.c-matrix__row').append(matrix);

    });

    $('.c-display-matrix').on('click',function() {

        $('.c-matrix__row > input').each(function(index,value) {
            matrix[index]=value.value;
            console.log(matrix[index]);
        });

        var k = 0;
        var createMatrix = [];
        var transpose = [];
        var displayArray = [];

        for(i = 0; i < numOfRows; i++) {
            createMatrix[i] = [];
        }

        for(i = 0; i < numOfRows; i++) {
            transpose[i] = [];
        }

        for(i = 0; i < numOfRows; i++) {
            for(j = 0; j < numOfRows; j++) {
                createMatrix[i][j] = matrix[k++];
            }
        }

        for (var i = 0; i < numOfRows; i++) {
            for (var j = 0; j < numOfRows; j++) {
                alert(createMatrix[j][i]);
                transpose[i][j] = createMatrix[j][i];
            }
        }

        for (var  i = 0; i < transpose.length/2; i++) {
            for (var j = 0; j < transpose[0].length; j++) {
                var x = transpose[i][j];
                transpose[i][j] = transpose[transpose.length -1 -i][j];
                transpose[transpose.length -1 -i][j] = x;
            }
        }

        for (var i = 0; i < numOfRows; i++) {
            for(var j = 0;j < numOfRows; j++) {
                displayArray.push(transpose[i][j]);
            }
            displayArray.push('</br>');
        }
        $('.c-Tmatrix').append(displayArray)
    });

});
