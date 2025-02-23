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
      } else if (gradeArr[i].toUpperCase() === "C-") {
        totalAddedGrade += 1.75 * crhArr[i];
      } else if (gradeArr[i].toUpperCase() === "D") {
        totalAddedGrade += 1 * crhArr[i];
      } else if (gradeArr[i].toUpperCase() === "F") {
        totalAddedGrade += 0;
      }

      totalCrh += Number(crhArr[i]);
    }
  }
  let finalGrade = totalAddedGrade / totalCrh;
  document.getElementById("result").innerHTML = finalGrade.toFixed(2);
  errorMsg("massage");
}

function resetInputs() {
  document.getElementById("result").innerHTML = "0";
}

function errorMsg(txt) {
  let errorBox = document.getElementsByClassName("top-section");
  document.getElementsByClassName("error-msg")[0].innerHTML = txt;
  errorBox[0].style.transition = "opacity 2s";
  void errorBox[0].offsetWidth;
  errorBox[0].style.opacity = 1;

  setTimeout(() => {
    errorBox[0].style.opacity = 0;
  }, 5000);
}

function closeBox() {
  let errorBox = document.getElementsByClassName("top-section");
  errorBox[0].style.transition = "opacity 2s";
  errorBox[0].style.opacity = 0;
}
