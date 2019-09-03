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
            

    /* var listStudents = testList; */
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
    
        function writeInt(value) {
    
            var buffer = Buffer.alloc(4);
            buffer.writeInt32BE(value);
            wstream.write(buffer);
        };
        
        function writeStr(value) {
            wstream.write(value);
        };
    
        writeInt(listStudents.length);
    
        for ( let i = 0; i < listStudents.length; i++ ) {
    
            writeInt(listStudents[i].name.length);
            writeStr(listStudents[i]['name'])
            writeInt(listStudents[i]['group'])
            writeInt(Object.keys(listStudents[i].marks).length)
    
            for (var key in listStudents[i].marks) {
    
                writeInt(key.length);
                writeStr(key);
                writeInt(listStudents[i].marks[key]);
    
            };
    
        };
        
        wstream.end(function () {
            console.log('Done');
        });
};
function readStream(listStudents) {
    
        var fsExt = require('./fsExt');
        
        var rstreamSync = fsExt.createReadStream('students_list.bin');
        var stat = fs.statSync('students_list.bin');
        function readInt() {
         
            var buffer = rstreamSync.read(4);
            var value = buffer.readInt32BE();
            return value;
        
        };
        function readStr(value) {
        
            var buffer = rstreamSync.read(value);
            var value = buffer.toString('utf8',buffer);
            return value;
                
        };

        if ( stat.size === 0 ) {

            var listStudents= [];
            return listStudents;

        }

        var listStudents= [];
        
        var countStudents = readInt();

        
            for ( var i = 0; i < countStudents; i++ ) {
            
                var nameLength = readInt();
                var name = readStr(nameLength);
                var obj = {};
                obj.name = name;
                var group = readInt();
                obj.group = group;
                let count = readInt();
                var marksObj = {};
    
                    for ( let k = 0; k < count; k++ ) {
    
                        
                        var subjectLength = readInt();
                       
                        let nameSubject = readStr(subjectLength);
                       
                        var mark = readInt();
                        
                        marksObj[nameSubject] = mark;
                        
                    
                    };
    
                        
                        obj.marks = marksObj;
                        
                        listStudents[i] = obj;
                        
                        
        
        };
        
    
        rstreamSync.close();
        
        return listStudents;
};
function isCorrectSubject(subject) {
    var reg = /^[a-zA-Z]+$/;
    while (subject.search(reg)) {
        console.log('Некорректное имя. Введите имя заного\n')
        subject = readLineSync.question('');
    }
    return subject;
}

if( !fs.existsSync('students_list.bin' )) {

    fs.writeFileSync('students_list.bin', Buffer.alloc(4));
    
} 
    
    var listStudents = readStream();
    while (!exit) {

    console.log("\n1. Список студентов\n2. Отличники.\n3. Неуспевающие.\n4. Добавить студента.\n5. Редактировать студента.\n6. Выход.\n")
    
    var number = readLineSync.questionInt();
    number = isCorrectMenuNumber(number,1,6);
    if ( number === 1 ) { 

        sortListStudents(listStudents);
        
        for ( let i = 0; i < listStudents.length; i++ ) {

            console.log(i+1+".  "+listStudents[i].name+"  "+listStudents[i].group+"  ");
            writeMarks(listStudents[i].marks);
        }

    } else if ( number === 2 ) { 

        console.log("\nСписок отличников:\n");
        
        var excArray = exc(listStudents);
        sortListStudents(excArray);

        for ( let i = 0; i < excArray.length; i++ ) {

            console.log(`${i+1}. ${excArray[i].name} ${excArray[i].group}\n`)
        };

    } else if ( number === 3 ) { 

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
        newStudent.marks = {};

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
        
        
    } else if ( number === 5 ) {

        console.log('\nВведите номер студента, которого хотите изменить\n');
        
            if ( listStudents.length === 0 ) {

                console.log('Список пуст\nВведите номер для выбора меню\n');
                

                } else {

                    sortListStudents(listStudents);

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
                        
                        if ( number === 1 ) { 

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

                            var empty = 0;

                            for (var key in listStudents[studentNumber-1].marks) {

                                empty++;

                            };
                            var count = 1;
                            if ( empty > 0 ) {

                                    
                                    console.log('Введите номер предмета\n');
                                    for ( let key in listStudents[studentNumber-1].marks ) {

                                        console.log(count+'. '+ key+' : '+listStudents[studentNumber-1].marks[key]+"\n");
                                        count++;

                                    };
                                    
                                    var number = readLineSync.questionInt('');
                                    number = isCorrectMenuNumber(number,1,count-1);
                                    console.log('Введите оценку\n ');
                                    let mark = readLineSync.questionInt('');
                                    mark = isCorrectMenuNumber(mark,1,5)
                                    listStudents[studentNumber-1].marks[subject] = mark;
                                    writeStream(listStudents); 

                                    

                                } else {
                                    
                                    for ( let key in listStudents[studentNumber-1].marks ) {

                                        
                                        count++;

                                    };
                                    console.log(count)
                                    console.log('Введите предмет\n ');
                                    var subject = readLineSync.question('');
                                    subject = isCorrectSubject(subject);
                                    console.log('Введите оценку\n ');
                                    let mark = readLineSync.questionInt('');
                                    mark = isCorrectMenuNumber(mark,1,5)
                                    listStudents[studentNumber-1].marks[subject] = mark;
                                    writeStream(listStudents); 

                                }

                        } else if ( number === 4 ) {

                            sortListStudents(listStudents);
                            listStudents.splice(studentNumber-1,1);
                            writeStream(listStudents);
                            console.log(`\nСтудент удален\n`);
                            flag = true;

                        } else if ( number === 5 ) {

                            flag = true;

                        }
                    }

                }

    } else if ( number === 6 ) {

        exit = true;
        writeStream(listStudents);

    }; 

};

};
    
StudentsInfo()