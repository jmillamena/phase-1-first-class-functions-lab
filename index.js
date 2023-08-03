// Code your solution in this file!
const returnFirstTwoDrivers = function (arrayOfDrivers) {
  return arrayOfDrivers.slice(0, 2);
};

returnFirstTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]);

const returnLastTwoDrivers = function (arrayOfDrivers) {
  return arrayOfDrivers.slice(2, 4);
};

returnLastTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  return function fareMultiplier(fare) {
    return fare * int;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, chooseFunction) {
  return chooseFunction(arrayOfDrivers);
}
