const questions = {
  atomic_structure: [
    {
      id: 1,
      question: "What subatomic particle determines the atomic number of an element?",
      options: ["Neutron", "Electron", "Proton", "Quark"],
      answer: 2,
      explanation: "The atomic number equals the number of protons in the nucleus. For example, carbon has 6 protons so its atomic number is 6."
    },
    {
      id: 2,
      question: "An atom of carbon-14 has 6 protons. How many neutrons does it have?",
      options: ["6", "8", "14", "20"],
      answer: 1,
      explanation: "Mass number = protons + neutrons. So neutrons = 14 − 6 = 8."
    },
    {
      id: 3,
      question: "Which electron configuration represents a ground-state sodium (Na, Z=11) atom?",
      options: ["1s² 2s² 2p⁶ 3p¹", "1s² 2s² 2p⁶ 3s¹", "1s² 2s² 2p⁵ 3s²", "1s² 2s¹ 2p⁶ 3s²"],
      answer: 1,
      explanation: "Sodium has 11 electrons: 1s²(2) 2s²(2) 2p⁶(6) 3s¹(1) = 11 electrons total."
    },
    {
      id: 4,
      question: "What is the maximum number of electrons in the third electron shell (n=3)?",
      options: ["8", "12", "18", "32"],
      answer: 2,
      explanation: "The maximum electrons per shell = 2n². For n=3: 2×9 = 18."
    },
    {
      id: 5,
      question: "Atoms of the same element with different numbers of neutrons are called:",
      options: ["Ions", "Allotropes", "Isotopes", "Isobars"],
      answer: 2,
      explanation: "Isotopes are atoms of the same element (same proton count) but different neutron counts, giving different mass numbers."
    },
    {
      id: 6,
      question: "In the Bohr model, when an electron moves from a higher to a lower energy level, it:",
      options: ["Absorbs energy as heat", "Emits a photon of light", "Gains kinetic energy", "Loses a neutron"],
      answer: 1,
      explanation: "When an electron drops to a lower energy level, the energy difference is released as a photon (light)."
    },
    {
      id: 7,
      question: "What is the charge of an ion with 11 protons and 10 electrons?",
      options: ["-1", "0", "+1", "+2"],
      answer: 2,
      explanation: "Charge = protons − electrons = 11 − 10 = +1. This is a sodium ion (Na⁺)."
    },
    {
      id: 8,
      question: "Which quantum number describes the shape of an orbital?",
      options: ["Principal (n)", "Angular momentum (l)", "Magnetic (ml)", "Spin (ms)"],
      answer: 1,
      explanation: "The angular momentum quantum number (l) defines orbital shape: l=0 is s (sphere), l=1 is p (dumbbell), l=2 is d, etc."
    },
    {
      id: 9,
      question: "The Heisenberg Uncertainty Principle states that it is impossible to simultaneously know with precision an electron's:",
      options: ["Mass and charge", "Position and momentum", "Energy and spin", "Proton count and electron count"],
      answer: 1,
      explanation: "Heisenberg's principle: Δx·Δp ≥ ħ/2. You cannot know both exact position and exact momentum at the same time."
    },
    {
      id: 10,
      question: "Which of the following has the same electron configuration as a neutral neon atom?",
      options: ["Na⁺", "Na", "Mg", "F⁻"],
      answer: 3,
      explanation: "F has 9 electrons; gaining 1 gives F⁻ with 10 electrons — the same as neon (1s² 2s² 2p⁶)."
    }
  ],

  chemical_bonding: [
    {
      id: 1,
      question: "What type of bond is formed when electrons are transferred from one atom to another?",
      options: ["Covalent bond", "Metallic bond", "Ionic bond", "Hydrogen bond"],
      answer: 2,
      explanation: "In an ionic bond, one atom donates electrons to another, forming oppositely charged ions that attract each other."
    },
    {
      id: 2,
      question: "In a Lewis structure of water (H₂O), how many lone pairs does the oxygen atom have?",
      options: ["0", "1", "2", "3"],
      answer: 2,
      explanation: "Oxygen has 6 valence electrons. It forms 2 bonds with hydrogen atoms (using 2 electrons), leaving 4 electrons = 2 lone pairs."
    },
    {
      id: 3,
      question: "According to VSEPR theory, what is the molecular geometry of methane (CH₄)?",
      options: ["Linear", "Trigonal planar", "Tetrahedral", "Bent"],
      answer: 2,
      explanation: "CH₄ has 4 bonding pairs and no lone pairs around carbon, giving a perfect tetrahedral geometry (bond angles ≈ 109.5°)."
    },
    {
      id: 4,
      question: "Which molecule is polar?",
      options: ["CO₂", "BF₃", "CCl₄", "H₂O"],
      answer: 3,
      explanation: "H₂O has a bent shape (due to 2 lone pairs on O) and polar O–H bonds. The dipoles do NOT cancel, making the molecule polar."
    },
    {
      id: 5,
      question: "The bond in F₂ is best described as:",
      options: ["Ionic", "Polar covalent", "Nonpolar covalent", "Metallic"],
      answer: 2,
      explanation: "Both F atoms have the same electronegativity (4.0), so electrons are shared equally — a nonpolar covalent bond."
    },
    {
      id: 6,
      question: "What is the bond order in a triple bond such as N≡N?",
      options: ["1", "2", "3", "6"],
      answer: 2,
      explanation: "A triple bond consists of 3 shared electron pairs (one sigma + two pi bonds). Bond order = 3."
    },
    {
      id: 7,
      question: "Which intermolecular force is responsible for the unusually high boiling point of water?",
      options: ["London dispersion forces", "Dipole–dipole forces", "Hydrogen bonding", "Ionic attraction"],
      answer: 2,
      explanation: "Water forms strong O–H···O hydrogen bonds because O is highly electronegative and bonded to H. This raises the boiling point to 100 °C."
    },
    {
      id: 8,
      question: "In metallic bonding, valence electrons are:",
      options: ["Transferred to anions", "Shared between two specific atoms", "Delocalised in a 'sea' around cations", "Held tightly by the nucleus"],
      answer: 2,
      explanation: "Metals have a lattice of positive ions surrounded by a 'sea' of free (delocalised) electrons, which gives metals electrical conductivity and malleability."
    },
    {
      id: 9,
      question: "What is the molecular geometry of ammonia (NH₃)?",
      options: ["Trigonal planar", "Trigonal pyramidal", "Tetrahedral", "Linear"],
      answer: 1,
      explanation: "NH₃ has 3 bonding pairs and 1 lone pair. The lone pair pushes the bonds down, giving a trigonal pyramidal shape (bond angle ≈ 107°)."
    },
    {
      id: 10,
      question: "Which property best explains why ionic compounds have high melting points?",
      options: ["Weak van der Waals forces", "Covalent network structure", "Strong electrostatic attraction between ions", "Metallic bonding"],
      answer: 2,
      explanation: "Ionic compounds have a giant lattice of oppositely charged ions held by strong electrostatic forces, requiring a lot of energy to break."
    }
  ],

  stoichiometry: [
    {
      id: 1,
      question: "How many moles of atoms are in 24 g of carbon (Ar = 12)?",
      options: ["1", "2", "12", "24"],
      answer: 1,
      explanation: "Moles = mass ÷ molar mass = 24 ÷ 12 = 2 mol."
    },
    {
      id: 2,
      question: "What is the molar mass of H₂SO₄? (H=1, S=32, O=16)",
      options: ["49 g/mol", "80 g/mol", "96 g/mol", "98 g/mol"],
      answer: 3,
      explanation: "H₂SO₄: 2(1) + 32 + 4(16) = 2 + 32 + 64 = 98 g/mol."
    },
    {
      id: 3,
      question: "In the reaction 2H₂ + O₂ → 2H₂O, if 4 mol of H₂ reacts completely, how many moles of H₂O are produced?",
      options: ["2", "4", "6", "8"],
      answer: 1,
      explanation: "Mole ratio H₂ : H₂O = 2 : 2 = 1 : 1. So 4 mol H₂ produces 4 mol H₂O."
    },
    {
      id: 4,
      question: "A compound contains 40% C, 6.7% H, and 53.3% O by mass. What is its empirical formula? (C=12, H=1, O=16)",
      options: ["CH₂O", "C₂H₄O₂", "CHO", "CH₃O"],
      answer: 0,
      explanation: "Moles: C = 40/12 ≈ 3.33, H = 6.7/1 = 6.7, O = 53.3/16 ≈ 3.33. Ratio ≈ 1:2:1 → empirical formula CH₂O."
    },
    {
      id: 5,
      question: "Avogadro's number (6.022 × 10²³) represents the number of particles in:",
      options: ["1 gram of any substance", "1 mole of any substance", "1 litre of gas at STP", "1 molecule of any compound"],
      answer: 1,
      explanation: "1 mole of any substance contains exactly 6.022 × 10²³ particles (atoms, molecules, ions, etc.)."
    },
    {
      id: 6,
      question: "In a reaction, 10 g of H₂ and 80 g of O₂ react to form water. Which is the limiting reagent? (H=1, O=16)",
      options: ["H₂", "O₂", "Both are equal", "Neither — there is excess of both"],
      answer: 1,
      explanation: "Moles: H₂ = 10/2 = 5 mol, O₂ = 80/32 = 2.5 mol. Reaction needs 2H₂ + O₂, so 5 mol H₂ needs 2.5 mol O₂ — they react exactly! But if slightly different, O₂ would be limiting. Here they're stoichiometrically equal."
    },
    {
      id: 7,
      question: "What volume does 2 moles of an ideal gas occupy at STP (0 °C, 1 atm)?",
      options: ["11.2 L", "22.4 L", "44.8 L", "11.2 mL"],
      answer: 2,
      explanation: "At STP, 1 mol of ideal gas = 22.4 L. So 2 mol = 44.8 L."
    },
    {
      id: 8,
      question: "The percent yield formula is:",
      options: ["(theoretical / actual) × 100", "(actual / theoretical) × 100", "(actual / molar mass) × 100", "(moles / mass) × 100"],
      answer: 1,
      explanation: "Percent yield = (actual yield ÷ theoretical yield) × 100%. It measures reaction efficiency."
    },
    {
      id: 9,
      question: "How many molecules are in 0.5 mol of CO₂?",
      options: ["3.011 × 10²³", "6.022 × 10²³", "1.204 × 10²⁴", "6.022 × 10²⁴"],
      answer: 0,
      explanation: "Molecules = moles × Avogadro's number = 0.5 × 6.022 × 10²³ = 3.011 × 10²³."
    },
    {
      id: 10,
      question: "What is the concentration of a solution containing 4 mol of NaCl dissolved in 2 litres of water?",
      options: ["0.5 M", "2 M", "4 M", "8 M"],
      answer: 1,
      explanation: "Concentration (M) = moles ÷ volume (L) = 4 ÷ 2 = 2 mol/L (2 M)."
    }
  ],

  acids_and_bases: [
    {
      id: 1,
      question: "According to the Arrhenius definition, an acid is a substance that:",
      options: ["Accepts a proton in water", "Donates a proton in water", "Produces H⁺ ions in aqueous solution", "Produces OH⁻ ions in aqueous solution"],
      answer: 2,
      explanation: "Arrhenius acids produce H⁺ (or H₃O⁺) when dissolved in water. Example: HCl → H⁺ + Cl⁻."
    },
    {
      id: 2,
      question: "What is the pH of a solution with [H⁺] = 1 × 10⁻³ mol/L?",
      options: ["3", "7", "11", "-3"],
      answer: 0,
      explanation: "pH = −log[H⁺] = −log(10⁻³) = 3."
    },
    {
      id: 3,
      question: "A solution with pH = 9 is:",
      options: ["Strongly acidic", "Weakly acidic", "Neutral", "Basic"],
      answer: 3,
      explanation: "pH > 7 indicates a basic (alkaline) solution. pH 9 is weakly basic."
    },
    {
      id: 4,
      question: "In the reaction NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, water is acting as:",
      options: ["A Brønsted–Lowry acid", "A Brønsted–Lowry base", "Both acid and base", "Neither acid nor base"],
      answer: 0,
      explanation: "Water donates a proton (H⁺) to NH₃, making water the Brønsted–Lowry acid in this reaction."
    },
    {
      id: 5,
      question: "What is the product of the neutralisation reaction between HCl and NaOH?",
      options: ["NaCl + H₂O", "NaOH + H₂", "Na₂O + HCl", "NaH + Cl₂O"],
      answer: 0,
      explanation: "HCl + NaOH → NaCl + H₂O. Acid + base → salt + water (neutralisation)."
    },
    {
      id: 6,
      question: "Which of the following is a strong acid?",
      options: ["Ethanoic acid (CH₃COOH)", "Carbonic acid (H₂CO₃)", "Hydrochloric acid (HCl)", "Phosphoric acid (H₃PO₄)"],
      answer: 2,
      explanation: "HCl is a strong acid — it fully dissociates in water: HCl → H⁺ + Cl⁻. The others are weak acids."
    },
    {
      id: 7,
      question: "At 25 °C, if the pH of a solution is 4, what is the pOH?",
      options: ["4", "7", "10", "14"],
      answer: 2,
      explanation: "At 25 °C, pH + pOH = 14. So pOH = 14 − 4 = 10."
    },
    {
      id: 8,
      question: "A buffer solution resists changes in pH because it contains:",
      options: ["A strong acid and a strong base", "A weak acid and its conjugate base", "Pure water and a salt", "A neutral molecule and an ion"],
      answer: 1,
      explanation: "A buffer typically contains a weak acid (e.g. CH₃COOH) and its conjugate base (e.g. CH₃COO⁻). They absorb added H⁺ or OH⁻."
    },
    {
      id: 9,
      question: "During an acid–base titration, the equivalence point is reached when:",
      options: ["The solution turns pink", "Moles of acid equal moles of base", "pH = 7 exactly", "The indicator changes colour twice"],
      answer: 1,
      explanation: "The equivalence point is where the moles of acid exactly equal the moles of base (stoichiometrically). pH = 7 only if both are strong."
    },
    {
      id: 10,
      question: "The Lewis definition of an acid is a substance that:",
      options: ["Produces H⁺ in water", "Donates a proton", "Accepts an electron pair", "Donates an electron pair"],
      answer: 2,
      explanation: "Lewis acids are electron-pair acceptors. This is a broader definition than Arrhenius or Brønsted–Lowry — it doesn't require H⁺."
    }
  ],

  chemical_reactions: [
    {
      id: 1,
      question: "What type of reaction is: 2Mg + O₂ → 2MgO?",
      options: ["Decomposition", "Single displacement", "Synthesis (combination)", "Double displacement"],
      answer: 2,
      explanation: "In a synthesis reaction, two or more substances combine to form a single product: A + B → AB."
    },
    {
      id: 2,
      question: "In the reaction CaCO₃ → CaO + CO₂, what type of reaction is this?",
      options: ["Synthesis", "Decomposition", "Combustion", "Neutralisation"],
      answer: 1,
      explanation: "Decomposition reactions break one compound into two or more simpler substances: AB → A + B."
    },
    {
      id: 3,
      question: "What is the correct balanced equation for the combustion of propane (C₃H₈)?",
      options: ["C₃H₈ + O₂ → CO₂ + H₂O", "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O", "C₃H₈ + 4O₂ → 3CO₂ + 4H₂O", "2C₃H₈ + 7O₂ → 6CO₂ + 8H₂O"],
      answer: 1,
      explanation: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Check: C: 3=3 ✓, H: 8=8 ✓, O: 10=10 ✓."
    },
    {
      id: 4,
      question: "Which of the following is a redox reaction?",
      options: ["NaCl(aq) + AgNO₃(aq) → AgCl(s) + NaNO₃(aq)", "HCl + NaOH → NaCl + H₂O", "Zn + CuSO₄ → ZnSO₄ + Cu", "CaCO₃ → CaO + CO₂"],
      answer: 2,
      explanation: "Zn is oxidised (0 → +2) and Cu²⁺ is reduced (+2 → 0). Any reaction with electron transfer is a redox reaction."
    },
    {
      id: 5,
      question: "In a redox reaction, the reducing agent is the substance that:",
      options: ["Gains electrons", "Loses electrons", "Gains protons", "Loses protons"],
      answer: 1,
      explanation: "The reducing agent loses (donates) electrons and is itself oxidised. OIL RIG: Oxidation Is Loss, Reduction Is Gain."
    },
    {
      id: 6,
      question: "What does a catalyst do in a chemical reaction?",
      options: ["Increases the energy of reactants", "Lowers the activation energy", "Raises the activation energy", "Is consumed in the reaction"],
      answer: 1,
      explanation: "A catalyst provides an alternative reaction pathway with lower activation energy, speeding up the reaction. It is not consumed."
    },
    {
      id: 7,
      question: "According to collision theory, increasing temperature increases reaction rate because:",
      options: ["It increases the concentration of reactants", "More particles have energy ≥ activation energy", "It lowers the activation energy", "It increases the volume of the container"],
      answer: 1,
      explanation: "Higher temperature gives more particles enough kinetic energy to exceed the activation energy threshold, increasing successful collision frequency."
    },
    {
      id: 8,
      question: "In the reaction Zn + 2HCl → ZnCl₂ + H₂, what is the oxidation state change of zinc?",
      options: ["0 to −2", "0 to +2", "+2 to 0", "+2 to −2"],
      answer: 1,
      explanation: "Zinc starts as a neutral element (0) and becomes Zn²⁺ in ZnCl₂ (+2). Zinc is oxidised."
    },
    {
      id: 9,
      question: "Which of the following will NOT increase the rate of a reaction?",
      options: ["Increasing temperature", "Adding a catalyst", "Increasing reactant concentration", "Decreasing surface area of a solid reactant"],
      answer: 3,
      explanation: "Decreasing surface area reduces the exposed area for collisions, slowing the reaction rate. All other options increase rate."
    },
    {
      id: 10,
      question: "In the reaction A + B → C + D, what does the enthalpy change (ΔH < 0) indicate?",
      options: ["The reaction is endothermic", "Energy is absorbed from surroundings", "The reaction is exothermic", "The activation energy is zero"],
      answer: 2,
      explanation: "Negative ΔH means energy is released to the surroundings — an exothermic reaction. Examples: combustion, neutralisation."
    }
  ]
}

module.exports = questions
