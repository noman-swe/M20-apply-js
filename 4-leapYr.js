function isLeapYear(year){
    if(year % 4 == 0){
        return true;
    }
    return false;
}
const MyYear = 2887;
const isMyYEarLeapYr = isLeapYear(MyYear);
console.log('Is My year leap year: ' + isMyYEarLeapYr);

const yourYear = 2224;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('Is Your Year Leap Year: ' + isYourYearLeapYear);