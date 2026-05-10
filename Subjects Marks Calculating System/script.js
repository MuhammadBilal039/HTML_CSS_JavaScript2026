const calculatingSubjectsMarks = () => {
  let subOne = +document.getElementById("subOne").value;
  let subTwo = +document.getElementById("subTwo").value;
  let subThree = +document.getElementById("subThree").value;
  let subFour = +document.getElementById("subFour").value;
  let subFive = +document.getElementById("subFive").value;

  if (
    subOne > 100 ||
    subTwo > 100 ||
    subThree > 100 ||
    subFour > 100 ||
    subFive > 100
  ) {
    alert("Please Enter the Numbers between 1 - 100");
  } else {
    let obtainedMarks = subOne + subTwo + subThree + subFour + subFive;
    document.getElementById("obtainedMarks").innerText = obtainedMarks;
    let percentage = (obtainedMarks / 500) * 100;
    document.getElementById("percentage").innerText = percentage;
    if (
      subOne > 40 &&
      subTwo > 40 &&
      subThree > 40 &&
      subFour > 40 &&
      subFive > 40
    ) {
      document.getElementById("remarks").innerHTML =
        "<span style='color: green'>Pass</span>";
    } else {
      document.getElementById("remarks").innerHTML =
        "<span style='color: red'>Fail</span>";
    }

    if (percentage >= 80) {
      document.getElementById("grade").textContent = "A";
    } else if (percentage >= 70) {
      document.getElementById("grade").textContent = "B";
    } else if (percentage >= 60) {
      document.getElementById("grade").textContent = "C";
    } else if (percentage >= 50) {
      document.getElementById("grade").textContent = "D";
    } else if (percentage >= 40) {
      document.getElementById("grade").textContent = "F";
    }
  }
};
