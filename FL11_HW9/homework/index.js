function getNumbers(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let number = Number(str[i]);
        if (!Number.isNaN(number)) {
            arr.push(number);
        }
    }
    return arr;
}
console.log(getNumbers('string')); 
console.log(getNumbers('n1um3ber95')); 

function findTypes() {
    let obj = {};
    for (let i = 0; i < arguments.length; i++) {
        let value = arguments[i];
        let elem = typeof value;
        if (elem in obj) {
            obj[elem]++;
        } else {
            obj[elem] = 1;
        }
    }
    return obj;
}
console.log(findTypes('number'));

function executeforEach(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i]);
    }
}

function mapArray(arr, fn) {
    let newArr = [];
    executeforEach(arr, function (el) {
        newArr.push(fn(el));
    });
    return newArr;
}

function filterArray(arr, fn) {
    let newArr = [];
    executeforEach(arr, function(el) {
        if (fn(el)) {
            newArr.push(el);
        }
    });
    return newArr;
}

function showFormattedDate(date) {
    let day = date.getDate();
    let month = date.toLocaleDateString('default', {month: 'short'});
    let year = date.getFullYear();
    return `Date: ${month} ${day} ${year}`;
}
console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

function canConvertToDate(strDate) {
    let date = new Date(strDate);
    return !isNaN(Date.parse(date));
}
console.log(canConvertToDate('2016-13-18T00:00:00'));
console.log(canConvertToDate('2016-03-18T00:00:00'));


function daysBetween(firstDate, secondDate) {
    return Math.round((secondDate.getTime() - firstDate.getTime()) / ('1000' * '60' * '60' * '24'));
}
console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

function getAmountOfAdultPeople(data) {
    let daysOfYearsOld = 6570;
    return filterArray(data, function(el) {
        let birthday = new Date(el.birthday);
        return daysBetween(birthday, new Date()) > daysOfYearsOld;
    }).length;
}

function keys(obj) {
    let arr = [];
    for (let key in obj){
        if (obj.hasOwnProperty(key)) {
            arr.push(key);
        }
    }
    return arr;
}
console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));

function values(obj) {
    const arr = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(obj[key]);
        }
    }
    return arr;
}
console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));