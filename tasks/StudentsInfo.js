var readLineSync = require('readline-sync');
var fs = require('fs');

function StudentsInfo() {
    
    
    var listStudents = [];
    var exit = false;

    function exc(listStudents) {

        var excList = [];

        for ( var i = 0; i < listStudents[i].marks; i++ ) {

            var count = 0;

            if ( listStudents.marks[i] === 5 ) {

            count++;

            } else {
            
            break;

            };
            
        };

        if ( count === listStudents[0].length*5 ) {

            excList.push(student);

        };

    };

    exc(listStudents);

    console.log("\n1. Список студентов\n2. Отличники.\n3. Неуспевающие.\n4. Добавить студента.\n5. Редактировать студента.\n6. Выход.\n")
    
    while (!exit) {

    console.log('Введите число для выбора меню')
    var number = parseInt(readLineSync.question(' '));

    if ( number == 1 ) {
        
        console.log(listStudents) // ---- КРАСИВЫЙ СПИСОК КОТОРЫЙ НУЖНО ДОРАБОТАТЬ

    } else if ( number == 2 ) {

        console.log("Список отличников\n");
        console.log(' ')

    }  else if ( number == 4 ) {

        console.log('Введите ФИО нового студента');
        var fio = readLineSync.question(' ');

        var student = {};
        student.name = fio;

        console.log('Введите номер группы нового студента')
        var numGroup = parseInt(readLineSync.question(' '));
        student.group = numGroup;
        console.log(student);


        /* fs.writeFileSync('students.txt'); */ // ---- ЗДЕСЬ БУДЕТ ЗАПИСЬ В БУФЕР И ДВОИЧНЫМ В ТХТ
        
    };

};
    

}
StudentsInfo()