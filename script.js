function calculate() {
  const percentSix = parseFloat(document.getElementById("percentSix").value);
  const nTerm = parseFloat(document.getElementById("nTerm").value);
  const maxGrades = parseFloat(document.getElementById("maxGrades").value);
  const passedGrades = parseFloat(document.getElementById("passedGrades").value);

  if (
    isNaN(percentSix) ||
    isNaN(nTerm) ||
    isNaN(maxGrades) ||
    isNaN(passedGrades)
  ) {
    document.getElementById("result").innerText = "Vul alle velden correct in.";
    return;
  }

  // 🔧 JOUW FORMULE HIER
  const result =
    (passedGrades / maxGrades) * 10 +
    nTerm;

  document.getElementById("result").innerText =
    `Cijfer: ${result.toFixed(2)}`;
}
