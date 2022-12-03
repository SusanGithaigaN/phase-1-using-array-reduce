const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
//Define the totalBatteries variable.
const totalBatteries = batteryBatches.reduce(function(accumulator , currentValue)
{
    // Return the sum of all the assembled batteries.
    return accumulator + currentValue
}
)