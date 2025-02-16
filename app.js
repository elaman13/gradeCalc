function calcGrade() {
  const grades = document.getElementsByClassName("grade");
  const crh = document.getElementsByClassName("crh");

  const gradeArr = [];
  const crhArr = [];

  for (let i = 0; i < grades.length; i++) {
    gradeArr.push(grades[i].value);
  }

  for (let i = 0; i < crh.length; i++) {
    crhArr.push(Number(crh[i].value));
  }

  let totalCrh = 0;
  let totalAddedGrade = 0;

  for (let i = 0; i < crhArr.length; i++) {
    if (gradeArr[i] != "" && crhArr[i] != "") {
      if (
        gradeArr[i].toUpperCase() === "A" ||
        gradeArr[i].toUpperCase() === "A+"
      ) {
        totalAddedGrade += 4 * crhArr[i];
      } else if (gradeArr[i].toUpperCase() === "A-") {
        totalAddedGrade += 3.75 * crhArr[i];
      } else if (gradeArr[i].toUpperCase() === "B+") {
        totalAddedGrade += 3.5 * crhArr[i];
      } else if (gradeArr[i].toUpperCase() === "B") {
        totalAddedGrade += 3.0 * crhArr[i];
      } else if (gradeArr[i].toUpperCase() === "B-") {
        totalAddedGrade += 2.75 * crhArr[i];
      } else if (gradeArr[i].toUpperCase() === "C+") {
        totalAddedGrade += 2.5 * crhArr[i];
      } else if (gradeArr[i].toUpperCase() === "C") {
        totalAddedGrade += 2 * crhArr[i];
      } else if (gradeArr[i].toUpperCase() === "D") {
        totalAddedGrade += 1 * crhArr[i];
      }

      totalCrh += Number(crhArr[i]);
    }
  }
  let finalGrade = totalAddedGrade / totalCrh;
  document.getElementById("result").innerHTML = finalGrade.toFixed(2);
}
