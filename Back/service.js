function bmiCounter(weight, height) {
  let bmi = weight / height ** 2;
  return bmi;
}

module.exports.bmiCounter = bmiCounter;
