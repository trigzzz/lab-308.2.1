const PI = 3.1415;
const initialRadius = 5;
const minimumSpacePerPlant = 0.8;
const initialPlantCount = 20;

function calculateArea(radius) {
  return PI * radius * radius;
}

function predictPlantGrowth(weeks) {
  let plantCount = initialPlantCount *2 ** weeks;
  let gardenCapacity = calculateArea(initialRadius) / minimumSpacePerPlant;

  if (plantCount > 0.8 * gardenCapacity) {
    return `After ${weeks} weeks: Prune the plants to avoid exceeding the capacity of the garden. Current plant count: ${plantCount}`;
  } else if (plantCount > 0.5 * gardenCapacity) {
    return `After ${weeks} weeks: Monitor the plants as they are growing at an acceptable rate. Current plant count: ${plantCount}`;
  } else {
    return `After ${weeks} weeks: Plant more plants as there is room. Current plant count: ${plantCount}`;
  }
}


console.log(predictPlantGrowth(1));
console.log(predictPlantGrowth(2));
console.log(predictPlantGrowth(3));
