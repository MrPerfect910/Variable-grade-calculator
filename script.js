// ================================
// 🎯 MAIN CALCULATOR FUNCTION
// ================================
function calculate() {

  // ----------------------------
  // 📥 INPUTS OPHALEN
  // ----------------------------
  const percentSix = parseFloat(document.getElementById("percentSix").value);
  const nTerm = parseFloat(document.getElementById("nTerm").value);
  const maxGrades = parseFloat(document.getElementById("maxGrades").value);
  const passedGrades = parseFloat(document.getElementById("passedGrades").value);

  // ----------------------------
  // ❌ VALIDATIE CHECK
  // ----------------------------
  if (
    isNaN(percentSix) ||
    isNaN(nTerm) ||
    isNaN(maxGrades) ||
    isNaN(passedGrades)
  ) {
    document.getElementById("result").innerText =
      "Vul alle velden correct in.";
    return;
  }

  // ----------------------------
  // 📊 NORMALISATIE
  // ----------------------------
  // x = score als percentage (0 → 1)
  const x = passedGrades / maxGrades;

  // ----------------------------
  // 📍 KNIKPUNT DEFINITIE
  // ----------------------------
  // hier splitst je grafiek in 2 delen
  const kink = 0.70;

  // ----------------------------
  // 🧠 SELECTIE LOGICA (PIECEWISE FUNCTION)
  // ----------------------------
  let result;

  if (x < kink) {

    // ============================
    // 🔻 ONDER DE KINK
    // ============================
    result = lowerCurve(
      x,
      percentSix,
      nTerm
    );

  } else {

    // ============================
    // 🔺 BOVEN DE KINK
    // ============================
    result = upperCurve(
      x,
      percentSix,
      nTerm
    );
  }

  // ----------------------------
  // 📤 OUTPUT
  // ----------------------------
  document.getElementById("result").innerText =
    `Cijfer: ${result.toFixed(2)}`;
}


// =======================================
// 🔻 FUNCTIE 1: ONDER DE KINK (0 → 0.70)
// =======================================
function lowerCurve(x, percentSix, nTerm) {

  // -----------------------------------
  // 👉 HIER KOMT JOUW FORMULE
  // -----------------------------------
  // doel:
  // - gedrag onder 70%
  // - hoe snel je richting 6 gaat
  // - invloed van percentSix + nTerm

  let result;

  // TODO: vervang dit met jouw model
  result = 0;

  return result;
}


// =======================================
// 🔺 FUNCTIE 2: BOVEN DE KINK (0.70 → 1)
// =======================================
function upperCurve(x, percentSix, nTerm) {

  // -----------------------------------
  // 👉 HIER KOMT JOUW FORMULE
  // -----------------------------------
  // doel:
  // - gedrag boven 70%
  // - stijging richting 10
  // - eventueel sneller/langzamer verloop

  let result;

  // TODO: vervang dit met jouw model
  result = 0;

  return result;
}
