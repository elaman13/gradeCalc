function calcGrade() {
  const grades = document.getElementsByClassName("grade");
  const crh = document.getElementsByClassName("crh");

  let totalCrh = 0;
  let totalAddedGrade = 0;

  for (let i = 0; i < crh.length; i++) {
    let crhValue = Number(crh[i].value) || 0;
    let gradeValue = grades[i].value;

    if (gradeValue === "A" || gradeValue === "A+") {
      totalAddedGrade += 4 * crhValue;
    } else if (gradeValue === "A-") {
      totalAddedGrade += 3.75 * crhValue;
    } else if (gradeValue === "B+") {
      totalAddedGrade += 3.5 * crhValue;
    } else if (gradeValue === "B") {
      totalAddedGrade += 3.0 * crhValue;
    } else if (gradeValue === "B-") {
      totalAddedGrade += 2.75 * crhValue;
    } else if (gradeValue === "C+") {
      totalAddedGrade += 2.5 * crhValue;
    } else if (gradeValue === "C") {
      totalAddedGrade += 2 * crhValue;
    } else if (gradeValue === "C-") {
      totalAddedGrade += 1.75 * crhValue;
    } else if (gradeValue === "D") {
      totalAddedGrade += 1 * crhValue;
    } else if (gradeValue === "F") {
      totalAddedGrade += 0;
    }

    totalCrh += crhValue;
  }

  console.log("totalCrh: ", totalCrh);
  console.log("totalAddedGrade: ", totalAddedGrade);

  let finalGrade = totalAddedGrade / totalCrh;
  console.log(finalGrade);
  document.getElementById("result").innerHTML = finalGrade.toFixed(2);
}
