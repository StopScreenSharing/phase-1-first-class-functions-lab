const returnFirstTwoDrivers = function(driversArray) {
    return driversArray.slice(0, 2);
};
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function(driversArray) {
    return driversArray.slice(2, 4)
};
console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (fare){
        return fare * multiplier;
    } ;
}

const fareDoubler = createFareMultiplier(2);
    console.log(fareDoubler(10));

const fareTripler = createFareMultiplier(3);
    cosnole.log(fareTripler(10));

function selectDifferentDrivers(drivers, selectionFunction) {
    return selectionFunction(drivers);
    
};

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));

console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));