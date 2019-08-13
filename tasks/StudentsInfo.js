var readLineSync = require('readline-sync');
var fs = require('fs');
var json5 = require('json5');

function StudentsInfo() {

    var testList = [{

        name : "Biryukov Nikita",
        group : 334,
        marks : { 
            math: 3,
            english: 2,
            science: 5,
            biology: 4,
            geogpraphy: 3,
            politology: 4
        }
        
    }, {
    
        name : "Krasnov Egor",
        group : 214,
        marks : { 
            math: 4,
            english: 4,
            science: 5,
            biology: 4,
            geogpraphy: 4,
            politology: 4
        }
        
    }, {
        name : "Tishin Ivan",
        group : 744,
        marks : { 
            math: 5,
            english: 2,
            science: 5,
            biology: 4,
            geogpraphy: 2,
            politology: 4
        }
    
    }, {
    
        name : "Arhipova Ludmila",
        group : 229,
        marks : { 
            math: 4,
            english: 2,
            science: 5,
            biology: 4,
            geogpraphy: 3,
            politology: 4
        }
        
    }, {
    
        name : "Drugin Mihail",
        group : 673,
        marks : { 
            math: 2,
            english: 2,
            science: 2,
            biology: 2,
            geogpraphy: 3,
            politology: 3
        }
        
    }, {
    
        name : "Andreev Vladimir",
        group : 112,
        marks : { 
            math: 2,
            english: 2,
            science: 2,
            biology: 2,
            geogpraphy: 2,
            politology: 4
        }
        
    }, {
    
        name : "Putin Vladimir",
        group : 334,
        marks : { 
            math: 5,
            english: 5,
            science: 5,
            biology: 5,
            geogpraphy: 5,
            politology: 5
        }
    }, {
    
        name : "Medved Vladimir",
        group : 101,
        marks : { 
            math: 5,
            english: 5,
            science: 5,
            biology: 5,
            geogpraphy: 5,
            politology: 5
            } }]
            

    var listStudents = testList;
    var exit = false;

function sortListStudents() {
    
listStudents.sort(

    function(x,y) {
        //return x['name'].localeCompare(y['name']);

        if ( x['name'] > y['name']) {return 1}
        if ( x['name'] < y['name']) {return -1};
        return 0;
    
    
    });
};
function exc(listStudents) {

        var excList = [];
        
        for ( let k = 0; k < listStudents.length; k++ ) {
    
                var count = 0;
                       
                for ( var key in listStudents[k].marks ) {
    
                    if (  listStudents[k].marks[key] !== 5 ) {
    
                    break;
    
                    }; 
                    count ++;
                    };
           
                if ( count === Object.keys(listStudents[k].marks).length) {
    
                excList.push(listStudents[k]);
    
                };
    
            };
            
        return excList;
            
};
function fail(listStudents) {

    var failList = [];

    for ( let k = 0; k < listStudents.length; k++ ) {

            var count = 0;
            var result = 0;

            for ( let key in listStudents[k].marks) {

                result += listStudents[k].marks[key];

                };
            
                result = Math.floor(result / Object.keys(listStudents[k].marks).length)
        
                if ( result < 3 ) {

                failList.push(listStudents[k]);

                };
            };
    
    return failList;
        
};
function writeMarks(listStudents) {
    for ( let key in listStudents ) {
        process.stdout.write("\t".repeat(4)+key+' : '+listStudents[key]+'\n')
};
};
function isCorrectGroupNumber(numGroup) {

    while (numGroup > 999 || numGroup < 1) {
        console.log('Некорректное группа. Введите группу заного\n')
        numGroup = readLineSync.questionInt();
    };
    return numGroup;
};
function isCorrectNameStudent(fio) {
    //var re = /^ \D+\s\D+ $/;
    var re = /^[a-zA-Z]+\s[a-zA-Z]+$/;
        while (fio.search(re)) {
            console.log('Некорректное имя. Введите имя заного\n')
            fio = readLineSync.question('');
        }
        return fio;

};
function isCorrectMenuNumber(number,min,max) {

    while ( number < min || number > max ) {
        console.log('Ошибка!\nВведите число еще раз\n');
        var number = readLineSync.questionInt();
    };
    return number;
};
function writeStream(listStudents) {

    var wstream = fs.createWriteStream('students_list.bin');
    
    
    writeInt(listStudents.length)
    
    function writeInt(value) {
    var buffer = Buffer.alloc(4);
    buffer.writeInt32BE(value);
    wstream.write(buffer);
    };
    function writeStr(value) {
    var buffer = Buffer.alloc(4);
    buffer.write(value);
    wstream.write(buffer)
    };
    
    for ( let i = 0; i < listStudents.length; i++ ) {
    
    writeInt(listStudents[i].name.length);
    writeStr(listStudents[i]['name'])
    writeInt(listStudents[i]['group'])
    writeInt(Object.keys(listStudents[i].marks).length)
    
    var count = 0;
    
    for ( var key in listStudents[i].marks) {
    
        count++;
        
    };
    
    writeInt(count);
    
    for (var key in listStudents[i].marks) {
    
        writeStr(key);
        writeInt(listStudents[i].marks['key']);
    
    }
    
    };
    wstream.end(function () {
        console.log('done');
    });
    
    };
    while (!exit) {

    console.log("\n1. Список студентов\n2. Отличники.\n3. Неуспевающие.\n4. Добавить студента.\n5. Редактировать студента.\n6. Выход.\n")
    

    var number = readLineSync.questionInt();
    number = isCorrectMenuNumber(number,1,6);
    console.log(number)
    if ( number === 1 ) { // ---- ТЕСТ,ВЫВОД ГОТОВ

        sortListStudents(listStudents);
        
        for ( let i = 0; i < listStudents.length; i++ ) {
            console.log(i+1+".  "+listStudents[i].name+"  "+listStudents[i].group+"  ");
            writeMarks(listStudents[i].marks);
        }

    } else if ( number === 2 ) { // ---- ТУТ ВРОДЕ ВСЁ ОГОНЬ,ДЕКОР?

        console.log("\nСписок отличников:\n");

        var excArray = exc(listStudents);
        sortListStudents(excArray);

        for ( let i = 0; i < excArray.length; i++ ) {

            console.log(`${i+1}. ${excArray[i].name} ${excArray[i].group}\n`)
        };

    } else if ( number === 3 ) { // ---ОГОНЬ,ДЕКОР?

        console.log('\nСписок не успевающих:\n');
        var failArray = fail(listStudents);
        sortListStudents(failArray);

        for ( let i = 0; i < failArray.length; i++ ) {

            console.log(`${i+1}. ${failArray[i].name} ${failArray[i].group}\n`)
        };

    } else if ( number === 4 ) {

        console.log('\nВведите ФИО нового студента\n');
        var fio = readLineSync.question(' ');
        fio = isCorrectNameStudent(fio);
        
        var newStudent = {};
        newStudent.name = fio;

        console.log('\nВведите номер группы нового студента\n')
        var numGroup = readLineSync.questionInt();
        numGroup = isCorrectGroupNumber(numGroup,999,1);
        
        newStudent.group = numGroup;

        console.log(`\nСохранить студента ${newStudent.name} ${newStudent.group} , Yes/No?\n`);
        var answer = readLineSync.question('');
        

        while ( answer != 'Yes' && answer != 'No') {
            
            console.log('Некорректное значение,введите заного')
            answer = readLineSync.question('');
            
        };
        if ( answer === 'Yes') {

            listStudents.push(newStudent);
            writeStream(listStudents);
            console.log('\n Студент '+newStudent.name+' добавлен\n')
        };
        
            
        /* fs.writeFileSync('students.txt'); */ // ---- ЗДЕСЬ БУДЕТ ЗАПИСЬ В БУФЕР И ДВОИЧНЫМ В ТХТ
        
    } else if ( number === 5 ) {

        console.log('\nВведите номер студента, которого хотите изменить\n');
        
        
            sortListStudents(listStudents)

            for ( let i = 0; i < listStudents.length; i++ ) {

                console.log(i+1+".  "+listStudents[i].name+"  "+listStudents[i].group+"  ");
                            
            };

            var studentNumber = readLineSync.questionInt();
            studentNumber = isCorrectMenuNumber(studentNumber,1,listStudents.length)

            
            var flag = false;
            while (!flag) {

                console.log(`Студент \n${listStudents[studentNumber-1].name} ${listStudents[studentNumber-1].group}`);
                console.log('\n1. Изменить ФИО студента\n2. Изменить номер группы\n3. Изменить оценки студента\n4. Удалить студента.\n5. Отмена\n');
                
                console.log('\nВведите номер для выбора меню\n');
                number = readLineSync.questionInt('');
                number = isCorrectMenuNumber(number,1,5);
                
                if ( number === 1 ) { // ВРОДЕ ОГОНЬ,ДЕКОР?

                    console.log('\nВведите новое имя и фамилию\n');
                    var rewriteName = readLineSync.question('');
                    rewriteName = isCorrectNameStudent(rewriteName);
                    
                    listStudents[studentNumber-1]["name"] = rewriteName;
                    writeStream(listStudents);
                    console.log('Данные изменены');
                    
                    
                } else if ( number === 2 ) {

                    console.log('\nВведите новую группу\n');
                    let groupNumber = readLineSync.questionInt('');
                    groupNumber = isCorrectGroupNumber(groupNumber);

                    listStudents[studentNumber-1]['group'] = groupNumber;
                    writeStream(listStudents);
                    console.log('Данные изменены');

                } else if ( number === 3 ) {

                    console.log("\nВыберете предмет для изменения\n");
                    let count = 1;
                    
                for ( let key in listStudents[studentNumber-1].marks ) {

                    console.log(count+'. '+ key+' : '+listStudents[studentNumber-1].marks[key]+"\n");
                    count +=1;

                };

                var numberStudy = readLineSync.questionInt('');
                numberStudy = isCorrectMenuNumber(numberStudy,1,Object.keys(listStudents[studentNumber-1].marks).length);

                console.log('\nВведите новую оценку\n');
                var newMark = readLineSync.questionInt('');
                newMark = isCorrectMenuNumber(newMark,1,5);
                count = 1;

                for ( let key in listStudents[studentNumber-1].marks) {

                    if (count === numberStudy ) {

                        listStudents[studentNumber-1].marks[key] = newMark;

                    };
                    count++;
                };
                writeStream(listStudents);
                console.log(`Данные изменены\n${listStudents[studentNumber-1].name}\n`)
                for ( var key in listStudents[studentNumber-1].marks ) {

                    console.log(`\t ${key}:${listStudents[studentNumber-1].marks[key]}\n`)
                }

                } else if ( number === 4 ) {

                    sortListStudents(listStudents);
                    listStudents.splice(studentNumber-1,1);
                    writeStream(listStudents);
                    console.log(`\nСтудент ${listStudents[studentNumber-1].name} удален\n`);

                } else if ( number === 5 ) {

                    flag = true;

                };

            };

    } else if ( number === 6 ) {

        console.log('Konec')

        exit = true;

    }; 

};
};
    
StudentsInfo()