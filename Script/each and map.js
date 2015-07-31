$(document).ready(function() {


    //defining arrays for the names,ages,roll numbers and final array
    var studentNames = ['Aastha', 'Smriti', 'Rishabh', 'Mohit',
                      'Nipun', 'Himanshu', 'Swati', 'Saurabh', 'Vaishali', 'norollnum'];
    var studentAges = [18, 19, 20, 21, 22, 23, 24, 25, 26];
    var studentRollNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];


    var tempName = [];
    var tempAge = [];
    var tempRollNum = [];
    var student = [];
    var studentAppend = [];

    // Function to set values of Student in DOM (creating dynamically)
    var setStudentData = function() {

    //mapping data into the spans dynamically from arrays

    //without pushing
    // studentNames.map(function(studentName) {
    //   $('.c-students__names').append('<span>' + studentName + ' ' + '</span>');
    // });
    // studentAges.map(function(studentAge) {
    //     $('.c-students__ages').append('<span>' + studentAge +  ' ' + '</span>');
    // });
    // studentRollNums.map(function(studentRollNum) {
    //     $('.c-students__rolls').append('<span>' + studentRollNum +  '  ' + '</span>');
    // });

    //pushing the values into a temp array and then appending into the class
    studentNames.map(function(studentName) {
        tempName.push('<span>' + studentName + ' ' + '</span>');
    });

    studentAges.map(function(studentAge) {
        tempAge.push('<span>' + studentAge +  ' ' + '</span>');
    });

    studentRollNums.map(function(studentRollNum) {
        tempRollNum.push('<span>' + studentRollNum +  '  ' + '</span>');
    });

    $('.c-students__names').append(tempName);
    $('.c-students__ages').append(tempAge);
    $('.c-students__rolls').append(tempRollNum);

    }


    setStudentData();


    //push data to the student array of objects
    $('.c-click').on('click', function() {
        studentNames.map(function(item, index) {
            studentAppend.push ({
                Name: studentNames[index],
                Age: studentAges[index],
                Roll: studentRollNums[index]
            });

        student.push('<div>' + studentAppend[index].Name +
                ' ' + studentAppend[index].Age + ' ' + studentAppend[index].Roll + '</div>')
        });
    $('.c-arrangedData').append(student);

    });
});
