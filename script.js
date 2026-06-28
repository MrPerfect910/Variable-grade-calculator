function calculate() {
  const percentSix = parseFloat(document.getElementById("percentSix").value);
  const nTerm = parseFloat(document.getElementById("nTerm").value);
  const typeTest = document.getElementById("typeTest").value;
  const maxGrades = parseFloat(document.getElementById("maxGrades").value);
  const passedGrades = parseFloat(document.getElementById("passedGrades").value);

  // check input
  if (
    isNaN(percentSix) ||
    isNaN(nTerm) ||
    isNaN(maxGrades) ||
    isNaN(passedGrades)
  ) {
    document.getElementById("result").innerText = "Vul alle velden correct in.";
    return;
  }

  // -------------------------
  // 🔧 JOUW CALCULATIE HIER
  // -------------------------

  let result;

  if (typeTest === "6") {
    result = calculateForSix(percentSix, nTerm, maxGrades, passedGrades);
  } else {
    result = calculateForPass(percentSix, nTerm, maxGrades, passedGrades);
  }

  document.getElementById("result").innerText =
    `Cijfer: ${result.toFixed(2)}`;
}

/* =========================
   🔧 PLACEHOLDER FUNCTIES
   ========================= */

function calculateForSix(percentSix, nTerm, maxGrades, passedGrades) {
  // 👉 hier komt jouw formule
  return (passedGrades / maxGrades) * 10 + nTerm;
}

function calculateForPass(percentSix, nTerm, maxGrades, passedGrades) {
  // 👉 hier ook jouw eigen logica
  return (passedGrades / maxGrades) * 5 + nTerm;
}
