
const returnFirstTwoDrivers = function(drivers) {
    //console.log( drivers.slice(0,2));
    return  drivers.slice(0,2);
    }

const returnLastTwoDrivers = function(drivers) {
   // console.log(drivers.slice(-2));
    return drivers.slice(-2);
    }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num1){
  return function (num2){
      return num1 * num2;
}
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

    function selectDifferentDrivers(drivers , eitherDrivers){
        console.log(eitherDrivers);
        return eitherDrivers(drivers);
        }


   

