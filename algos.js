  var user = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    height: document.getElementById("height").value,
    weight: document.getElementById("weight").value,
    sex: document.getElementById("sex").value,
    currExercise: document.getElementById("curr").value,
  }

  function BMI_Calc() {
    //     hMeters = user.height/39.3701 // converting height in inches to meters
    //     wKilo = user.weight/2.205  // converting weight in pounds to kilos
    //     return wKilo/(hMeters*hMeters)  // calculating BMI
    return 5;
  }
  function idealWeight() {
    return 22 * (user.height*0.0254) *(user.height*0.0254) * 2.20462 //weight(lb) = ideal BMI(22) * height(in meters) * height(in meters) * 2.20462 (kilos to pounds)
  }

  function WorkoutPlan() {
    var status = ''
    BMI = BMI_Calc()
    // assigns at status depending on BMI
    if (BMI <= 18.5) {
    status = 'U'
    } else if (BMI > 18.5 && BMI <= 24.9) {
      status = 'N'
    } else if (BMI > 24.9 && BMI < 30) {
      status = 'Ov'
    }
    else {
         status = 'Ob'
     }
    
// creates workout plan, considering status and age
    if (user.age > 15 && user.age < 45) {
      if (status == 'U') {
        return 'Workout Type: Strength Training\t\tWeekly Hours: 3'
      }
      else if (status == 'N') {
        return 'Workout Type: Strength Training\t\tWeekly Hours: 1\nWorkout Type: Aerobic Exercise\t\tWeekly Hours: 2'
      }
      else if (status == 'Ov') {
        return 'Workout Type: Strength Training\t\tWeekly Hours: 3\nWorkout Type: Aerobic Exercise\t\tWeekly Hours: 3'
      }
      if (status == 'Ob') {
        return 'Workout Type: Strength Training\t\tWeekly Hours: 1\nWorkout Type: Aerobic Exercise\t\tWeekly Hours: 4'
      }
      }
    else if (user.age >= 45) {
      if (status == 'U') {
        return 'Workout Type: Aerobic Exercise\t\tWeekly Hours: 3'
      }
      else if (status == 'N') {
        return 'Workout Type: Aerobic Exercise\t\tWeekly Hours: 3'
      }
      else if (status == 'Ov') {
        return 'Workout Type: Aerobic Exercise\t\tWeekly Hours: 4'
      }
      if (status == 'Ob') {
        return 'Workout Type: Aerobic Exercise\t\tWeekly Hours: 5'
      }
      }
      else {
        return 'Workout Type: Aerobic Exercise\t\tWeekly Hours: 3'
      }
      }
  