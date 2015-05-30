//Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects.
console.log('\nProblem 4. Lexicographically smallest');

console.log('\n\twindow');
getProperties(window);
console.log('\n\tnavigator');
getProperties(navigator);
console.log('\n\tdocument');
getProperties(document);

function getProperties(obj){
    var min = 0,
        max = 0,
        property;

    for(property in obj){
        if(!min){
            min = property;
        }
        if(!max){
            max = property;
        }

        if(property < min){
            min = property;
        }

        if(property > max){
            max = property;
        }
    }

    console.log('min: ' + min);
    console.log('max: ' + max);
}