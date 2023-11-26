const PI = 3.1415;
const initialRadius = 5;
const minimumSpacePerPlant = 0.8;
const initialPlantCount = 100; 

function calculateArea(radius) {
  return PI * radius * radius;
}

function predictPlantGrowth(weeks) {
  let plantCount = initialPlantCount * 2 ** weeks;
  let gardenCapacity = calculateArea(initialRadius) / minimumSpacePerPlant;

  if (plantCount > 0.8 * gardenCapacity) {
    return `After ${weeks} weeks: Prune the plants to avoid exceeding the capacity of the garden. Current plant count: ${plantCount}`;
  } else if (plantCount > 0.5 * gardenCapacity) {
    return `After ${weeks} weeks: Monitor the plants as they are growing at an acceptable rate. Current plant count: ${plantCount}`;
  } else {
    return `After ${weeks} weeks: Plant more plants as there is room. Current plant count: ${plantCount}`;
  }
}

function calculateAdditionalSpace(weeks) {
  let plantCount = initialPlantCount * 2 ** weeks;
  let currentGardenCapacity = calculateArea(initialRadius) / minimumSpacePerPlant;
  let additionalSpaceRequired = (plantCount * minimumSpacePerPlant) - calculateArea(initialRadius);
  return additionalSpaceRequired;
}

function calculateExpandedRadius(additionalSpace) {
  let expandedArea = calculateArea(initialRadius) + additionalSpace;
  return Math.sqrt(expandedArea / PI);
}

// Error block using try and catch
try {
  // Calculate additional space and expanded radius for 10 weeks
  let additionalSpace = calculateAdditionalSpace(10);
  let expandedRadius = calculateExpandedRadius(additionalSpace);

  if (additionalSpace > calculateArea(initialRadius)) {
    throw new Error('Not enough space to accommodate the provided number of plants.');
  }

  console.log(`Additional space required after 10 weeks: ${additionalSpace} square meters`);
  console.log(`Expanded garden radius after 10 weeks: ${expandedRadius} meters`);

} catch (error) {
  console.error(error.message);
}
