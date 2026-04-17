// Popular compounds and practical applications for 30 key elements
// keyed by atomic number
export const elementCompounds = {
  // Hydrogen
  1: [
    { formula: 'H₂O',   name: 'Water',               use: 'Universal solvent; essential for all life, industrial coolant, and hydroelectric power.' },
    { formula: 'H₂SO₄', name: 'Sulfuric acid',        use: 'Most-produced industrial chemical — car batteries, fertiliser production, metal refining.' },
    { formula: 'HCl',   name: 'Hydrochloric acid',    use: 'Stomach acid (digestion); metal pickling, PVC and pharmaceutical production.' },
    { formula: 'NH₃',   name: 'Ammonia',              use: 'Haber process for fertilisers; household cleaners, refrigerant, explosives precursor.' },
    { formula: 'H₂O₂',  name: 'Hydrogen peroxide',   use: 'Antiseptic for wounds; hair/textile bleaching; rocket propellant (high concentration).' },
  ],
  // Lithium
  3: [
    { formula: 'Li₂CO₃',  name: 'Lithium carbonate',        use: 'Mood stabiliser for bipolar disorder; key raw material for glass and ceramics.' },
    { formula: 'LiOH',    name: 'Lithium hydroxide',         use: 'CO₂ scrubber on submarines and spacecraft; lubricating greases for high-temperature use.' },
    { formula: 'LiCoO₂',  name: 'Lithium cobalt oxide',      use: 'Cathode material in lithium-ion batteries powering smartphones, laptops, and EVs.' },
    { formula: 'LiCl',    name: 'Lithium chloride',          use: 'Industrial desiccant; air-conditioning brine; precursor to lithium metal production.' },
    { formula: 'LiAlH₄',  name: 'Lithium aluminium hydride', use: 'Powerful reducing agent in pharmaceutical and organic synthesis.' },
  ],
  // Carbon
  6: [
    { formula: 'CO₂',        name: 'Carbon dioxide',    use: 'Carbonated drinks; dry-ice refrigerant; fire extinguishers; plant photosynthesis.' },
    { formula: 'CH₄',        name: 'Methane',           use: 'Natural gas fuel for heating and electricity; hydrogen production; chemical feedstock.' },
    { formula: 'CaCO₃',      name: 'Calcium carbonate', use: 'Limestone (construction, cement), chalk (education), antacid tablets.' },
    { formula: 'C₆H₁₂O₆',   name: 'Glucose',           use: 'Primary energy molecule in cellular respiration; IV drips; food sweetener.' },
    { formula: '(C₂H₄)ₙ',   name: 'Polyethylene',      use: 'Most common plastic — packaging, bottles, pipes, and plastic bags.' },
  ],
  // Nitrogen
  7: [
    { formula: 'NH₃',     name: 'Ammonia',          use: 'Basis of the global fertiliser industry (Haber process); refrigerant; cleaning products.' },
    { formula: 'HNO₃',   name: 'Nitric acid',       use: 'Fertiliser production (ammonium nitrate); explosives (TNT, nitroglycerin); metal etching.' },
    { formula: 'NH₄NO₃', name: 'Ammonium nitrate',  use: 'High-nitrogen fertiliser; oxidiser in ANFO mining explosive.' },
    { formula: 'N₂O',    name: 'Nitrous oxide',     use: 'Anaesthetic ("laughing gas") in dentistry and surgery; aerosol food propellant.' },
    { formula: 'NO',     name: 'Nitric oxide',      use: 'Vasodilator drug (angina treatment); signalling molecule in the body; Ostwald process intermediate.' },
  ],
  // Oxygen
  8: [
    { formula: 'H₂O',   name: 'Water',              use: 'Universal biological solvent; coolant in reactors and engines; hydroelectric energy source.' },
    { formula: 'CO₂',   name: 'Carbon dioxide',     use: 'Fire suppressant; carbonated drinks; cryogenic refrigerant (dry ice).' },
    { formula: 'SiO₂',  name: 'Silicon dioxide',    use: 'Glass manufacturing; optical fibres; quartz oscillators in electronics.' },
    { formula: 'Fe₂O₃', name: 'Iron(III) oxide',    use: 'Iron ore (haematite) for steel production; red pigment in paints; thermite reaction.' },
    { formula: 'O₃',    name: 'Ozone',              use: 'Stratospheric UV shield; water and air purification; industrial bleaching agent.' },
  ],
  // Fluorine
  9: [
    { formula: 'NaF',    name: 'Sodium fluoride',          use: 'Toothpaste additive preventing tooth decay; drinking water fluoridation.' },
    { formula: 'CaF₂',   name: 'Calcium fluoride',         use: 'Flux in steelmaking; raw material for HF; optical lenses (low UV absorption).' },
    { formula: 'HF',     name: 'Hydrofluoric acid',         use: 'Etching glass and silicon wafers; oil refining (alkylation catalyst).' },
    { formula: '(C₂F₄)ₙ', name: 'PTFE (Teflon)',           use: 'Non-stick cookware; wire insulation; chemical-resistant gaskets and seals.' },
    { formula: 'SF₆',    name: 'Sulfur hexafluoride',       use: 'Electrical insulator in high-voltage switchgear; tracer gas for leak detection.' },
  ],
  // Sodium
  11: [
    { formula: 'NaCl',    name: 'Sodium chloride',   use: 'Table salt (seasoning and food preservation); road de-icing; chlorine/NaOH production.' },
    { formula: 'NaOH',   name: 'Sodium hydroxide',   use: 'Soap and paper making; drain cleaners; aluminium smelting (Bayer process).' },
    { formula: 'NaHCO₃', name: 'Sodium bicarbonate', use: 'Baking soda (leavening agent); antacid; fire extinguisher for grease fires.' },
    { formula: 'Na₂CO₃', name: 'Sodium carbonate',   use: 'Glass manufacturing; laundry soda (water softening); textile and paper processing.' },
    { formula: 'NaClO',  name: 'Sodium hypochlorite', use: 'Household bleach; water disinfection in pools and municipal supply.' },
  ],
  // Magnesium
  12: [
    { formula: 'MgO',     name: 'Magnesium oxide',      use: 'Refractory bricks in furnaces and kilns; antacid; nutritional supplement.' },
    { formula: 'Mg(OH)₂', name: 'Magnesium hydroxide',  use: 'Milk of magnesia (antacid and laxative); wastewater neutralisation.' },
    { formula: 'MgSO₄',  name: 'Magnesium sulfate',    use: 'Epsom salt (muscle pain relief, bath soaks); agricultural soil amendment.' },
    { formula: 'MgCO₃',  name: 'Magnesium carbonate',  use: 'Gym chalk for grip (gymnastics, climbing); antacid; heat insulation.' },
    { formula: 'MgCl₂',  name: 'Magnesium chloride',   use: 'Road de-icing; dietary supplement; coagulant for making tofu.' },
  ],
  // Aluminium
  13: [
    { formula: 'Al₂O₃',     name: 'Aluminium oxide',    use: 'Abrasives (corundum); synthetic ruby/sapphire; ceramic insulation in spark plugs.' },
    { formula: 'Al(OH)₃',   name: 'Aluminium hydroxide', use: 'Antacid (Maalox); vaccine adjuvant; water purification coagulant.' },
    { formula: 'Al₂(SO₄)₃', name: 'Aluminium sulfate',  use: 'Water treatment (flocculation of suspended particles); paper sizing.' },
    { formula: 'AlCl₃',     name: 'Aluminium chloride',  use: 'Friedel-Crafts reactions in chemical synthesis; antiperspirant active ingredient.' },
    { formula: 'AlN',       name: 'Aluminium nitride',   use: 'Ceramic heat sinks for electronics; substrate for high-power semiconductors.' },
  ],
  // Silicon
  14: [
    { formula: 'SiO₂',    name: 'Silicon dioxide',    use: 'Plate glass and optical fibres; quartz watches; semiconductor wafer substrate.' },
    { formula: 'SiC',     name: 'Silicon carbide',    use: 'Abrasive grit and cutting tools; power electronics (EVs); bulletproof vests.' },
    { formula: 'Na₂SiO₃', name: 'Sodium silicate',   use: 'Water glass adhesive; fireproofing coatings; cement and concrete sealant.' },
    { formula: 'Si₃N₄',  name: 'Silicon nitride',    use: 'Ceramic engine components and ball bearings; cutting tool inserts.' },
    { formula: '(R₂SiO)ₙ', name: 'Silicone polymers', use: 'Sealants and caulks; medical implants; cookware coatings; lubricants.' },
  ],
  // Phosphorus
  15: [
    { formula: 'H₃PO₄',       name: 'Phosphoric acid',    use: 'Fertiliser production; rust remover; acidulant in cola beverages.' },
    { formula: 'Ca₃(PO₄)₂',   name: 'Calcium phosphate',  use: 'Main mineral of bones and teeth; fertiliser (superphosphate); food additive.' },
    { formula: 'NH₄H₂PO₄',    name: 'Ammonium phosphate', use: 'High-phosphorus fertiliser; dry chemical fire extinguisher charge.' },
    { formula: 'Na₅P₃O₁₀',    name: 'Sodium tripolyphosphate', use: 'Detergent builder (softens water by chelating Ca²⁺/Mg²⁺); food preservative.' },
    { formula: 'PCl₃',        name: 'Phosphorus trichloride', use: 'Intermediate for pesticides, pharmaceuticals, and flame retardants.' },
  ],
  // Sulfur
  16: [
    { formula: 'H₂SO₄', name: 'Sulfuric acid',      use: 'World\'s most-produced chemical — fertilisers, batteries, petroleum refining, metal processing.' },
    { formula: 'SO₂',   name: 'Sulfur dioxide',     use: 'Food preservative (E220, in dried fruit and wine); pulp bleaching; catalyst for H₂SO₄.' },
    { formula: 'CaSO₄', name: 'Calcium sulfate',    use: 'Gypsum for drywall and plaster; plaster of Paris (casts); food coagulant (tofu).' },
    { formula: 'Na₂S₂O₃', name: 'Sodium thiosulfate', use: 'Photographic fixer ("hypo"); aquarium dechlorinator; analytical titration agent.' },
    { formula: 'FeS₂',  name: 'Iron pyrite',        use: '"Fool\'s gold"; sulfuric acid feedstock; cathode in some lithium batteries.' },
  ],
  // Chlorine
  17: [
    { formula: 'NaCl',          name: 'Sodium chloride',     use: 'Table salt; food preservation; road de-icing; electrolysis feedstock for Cl₂ and NaOH.' },
    { formula: 'HCl',           name: 'Hydrochloric acid',   use: 'Metal cleaning and pickling; stomach acid (digestion); PVC and pharmaceutical production.' },
    { formula: '(C₂H₃Cl)ₙ',    name: 'PVC',                 use: 'Pipes and fittings; electrical cable insulation; window frames; flooring.' },
    { formula: 'NaClO',         name: 'Sodium hypochlorite', use: 'Household bleach; swimming pool disinfectant; municipal water treatment.' },
    { formula: 'CaCl₂',        name: 'Calcium chloride',    use: 'Road de-icing; desiccant; food firming agent; concrete accelerator.' },
  ],
  // Potassium
  19: [
    { formula: 'KCl',    name: 'Potassium chloride',   use: 'Main potash fertiliser; salt substitute for low-sodium diets; IV fluid electrolyte.' },
    { formula: 'KOH',    name: 'Potassium hydroxide',  use: 'Soft soap and liquid soap production; electrolyte in alkaline batteries.' },
    { formula: 'KNO₃',  name: 'Potassium nitrate',    use: 'Fertiliser; component of gunpowder; food preservative (E252) in cured meats.' },
    { formula: 'K₂SO₄', name: 'Potassium sulfate',    use: 'Chloride-free fertiliser for sensitive crops (fruit, vegetables); alum production.' },
    { formula: 'KMnO₄', name: 'Potassium permanganate', use: 'Disinfectant for wounds and water; oxidising agent in organic chemistry.' },
  ],
  // Calcium
  20: [
    { formula: 'CaCO₃',  name: 'Calcium carbonate',  use: 'Limestone/chalk (construction, education); cement raw material; antacid tablets.' },
    { formula: 'CaO',    name: 'Calcium oxide',       use: 'Quicklime for steelmaking, cement, and soil pH correction; CO₂ capture.' },
    { formula: 'Ca(OH)₂', name: 'Calcium hydroxide', use: 'Slaked lime for mortar and plaster; water purification; soil liming in agriculture.' },
    { formula: 'CaSO₄',  name: 'Calcium sulfate',    use: 'Gypsum wallboard (drywall); plaster of Paris for casts; calcium supplement.' },
    { formula: 'CaF₂',   name: 'Calcium fluoride',   use: 'Fluorite gem; optical lenses (UV/IR transparent); metallurgical flux in steelmaking.' },
  ],
  // Titanium
  22: [
    { formula: 'TiO₂',  name: 'Titanium dioxide',     use: 'Brightest white pigment in paints and coatings; sunscreen UV blocker; food colouring (E171).' },
    { formula: 'TiCl₄', name: 'Titanium tetrachloride', use: 'Ziegler-Natta catalyst for polyolefin plastics; smoke-screen agent; TiO₂ production.' },
    { formula: 'TiN',   name: 'Titanium nitride',      use: 'Gold-coloured hard coating on cutting tools and watches; biocompatible implant coating.' },
    { formula: 'TiC',   name: 'Titanium carbide',      use: 'Extremely hard cermet cutting inserts; wear-resistant coatings; abrasives.' },
    { formula: 'BaTiO₃', name: 'Barium titanate',      use: 'Piezoelectric sensors and actuators; ceramic capacitors (MLCCs) in electronics.' },
  ],
  // Chromium
  24: [
    { formula: 'Cr₂O₃',    name: 'Chromium(III) oxide',  use: 'Green pigment in paints and glass; abrasive (chrome polish); refractory material.' },
    { formula: 'K₂Cr₂O₇',  name: 'Potassium dichromate', use: 'Strong oxidising agent; leather tanning; analytical chemistry standard.' },
    { formula: 'CrO₃',     name: 'Chromium trioxide',    use: 'Chrome electroplating bath; wood preservative; oxidation catalyst.' },
    { formula: 'Na₂CrO₄',  name: 'Sodium chromate',     use: 'Corrosion inhibitor in cooling water; chrome tanning of leather.' },
    { formula: 'Cr(CO)₆',  name: 'Chromium hexacarbonyl', use: 'CVD precursor for chromium coatings; catalyst in organometallic chemistry.' },
  ],
  // Manganese
  25: [
    { formula: 'MnO₂',   name: 'Manganese dioxide',     use: 'Depolariser in dry-cell (Leclanche) batteries; decolourant in glass; oxidation catalyst.' },
    { formula: 'KMnO₄',  name: 'Potassium permanganate', use: 'Powerful disinfectant for water and wounds; oxidant in organic synthesis.' },
    { formula: 'MnSO₄',  name: 'Manganese sulfate',     use: 'Micronutrient fertiliser; animal feed supplement; electrolyte in batteries.' },
    { formula: 'MnO',    name: 'Manganese(II) oxide',   use: 'Catalyst in chemical reactions; pigment in ceramics; steel desulfuriser.' },
    { formula: 'MnCl₂',  name: 'Manganese chloride',    use: 'Dietary supplement; catalyst; precursor to other Mn compounds.' },
  ],
  // Iron
  26: [
    { formula: 'Fe₂O₃',  name: 'Iron(III) oxide',     use: 'Haematite iron ore for steelmaking; red pigment (iron oxide red); thermite reaction.' },
    { formula: 'Fe₃O₄',  name: 'Iron(II,III) oxide',  use: 'Magnetite ore; ferrofluid; MRI contrast agent; magnetic recording media.' },
    { formula: 'FeSO₄',  name: 'Iron(II) sulfate',    use: 'Iron deficiency anaemia supplement; water treatment coagulant; lawn moss killer.' },
    { formula: 'FeCl₃',  name: 'Iron(III) chloride',  use: 'PCB circuit board etching; water/wastewater treatment; catalyst.' },
    { formula: 'FeS₂',   name: 'Iron pyrite',         use: '"Fool\'s gold"; raw material for sulfuric acid production; cathode in Li batteries.' },
  ],
  // Cobalt
  27: [
    { formula: 'LiCoO₂',    name: 'Lithium cobalt oxide',  use: 'Cathode in lithium-ion batteries for smartphones, laptops, and EVs.' },
    { formula: 'CoO',        name: 'Cobalt(II) oxide',      use: 'Cobalt blue pigment in glass, ceramics, and paints.' },
    { formula: 'CoCl₂',     name: 'Cobalt chloride',       use: 'Humidity indicator (blue when dry → pink when wet); invisible ink; desiccant indicator.' },
    { formula: 'CoSO₄',     name: 'Cobalt sulfate',        use: 'Cobalt electroplating; animal feed supplement; precursor to battery materials.' },
    { formula: 'C₆₃H₈₈CoN₁₄O₁₄P', name: 'Vitamin B₁₂ (cobalamin)', use: 'Essential vitamin for DNA synthesis and neurological function; deficiency causes anaemia.' },
  ],
  // Nickel
  28: [
    { formula: 'Ni(OH)₂',  name: 'Nickel hydroxide',     use: 'Positive electrode in NiMH and NiCd rechargeable batteries (cameras, hybrid cars).' },
    { formula: 'NiSO₄',    name: 'Nickel sulfate',        use: 'Nickel electroplating (corrosion-resistant coatings); battery production.' },
    { formula: 'NiO',      name: 'Nickel(II) oxide',      use: 'Catalyst for hydrogenation reactions; ceramic colorant; fuel cell electrode.' },
    { formula: 'Ni(CO)₄',  name: 'Nickel tetracarbonyl',  use: 'Mond process for ultra-pure nickel refining (highly toxic intermediate).' },
    { formula: 'NiCl₂',   name: 'Nickel chloride',       use: 'Nickel electroplating baths; catalyst; nickel-metal hydride battery precursor.' },
  ],
  // Copper
  29: [
    { formula: 'CuSO₄',        name: 'Copper(II) sulfate',  use: 'Bordeaux mixture fungicide for crops; electroplating; algaecide in pools.' },
    { formula: 'CuO',          name: 'Copper(II) oxide',    use: 'Black pigment; catalyst; blue/green colourant in glass and ceramics.' },
    { formula: 'Cu₂O',         name: 'Copper(I) oxide',     use: 'Red antifouling paint for ship hulls; photovoltaic cells; fungicide.' },
    { formula: 'CuCl₂',        name: 'Copper(II) chloride', use: 'Catalyst for organic reactions (Wacker process); wood preservative; mordant.' },
    { formula: 'Cu(CH₃COO)₂',  name: 'Copper acetate',     use: 'Verdigris green pigment (historical art); fungicide; catalyst in synthesis.' },
  ],
  // Zinc
  30: [
    { formula: 'ZnO',    name: 'Zinc oxide',      use: 'Physical UV filter in sunscreen; rubber vulcanisation accelerator; white pigment.' },
    { formula: 'ZnSO₄',  name: 'Zinc sulfate',    use: 'Micronutrient fertiliser; dietary zinc supplement; wood preservative.' },
    { formula: 'ZnS',    name: 'Zinc sulfide',    use: 'Phosphorescent coating in CRT screens and X-ray detectors; luminescent paint.' },
    { formula: 'ZnCl₂',  name: 'Zinc chloride',  use: 'Flux for soldering and brazing; wood preservative; electrolyte in zinc-carbon batteries.' },
    { formula: 'ZnO₂',   name: 'Zinc peroxide',  use: 'Antiseptic and antifungal in skin creams; slow-release oxygen source.' },
  ],
  // Bromine
  35: [
    { formula: 'AgBr',    name: 'Silver bromide',      use: 'Light-sensitive emulsion in photographic film and paper.' },
    { formula: 'NaBr',    name: 'Sodium bromide',      use: 'Photographic chemicals; oil-well drilling fluid; mild sedative (historical).' },
    { formula: 'HBr',     name: 'Hydrogen bromide',    use: 'Pharmaceutical synthesis; semiconductor surface cleaning; catalyst.' },
    { formula: 'CH₂Br₂',  name: 'Dibromomethane',     use: 'Solvent in chemical synthesis; density gradient separation in geology.' },
    { formula: '(C₄H₇Br₂O)ₙ', name: 'Brominated flame retardants', use: 'Fire safety in electronics, textiles, and foam furniture.' },
  ],
  // Silver
  47: [
    { formula: 'AgNO₃',  name: 'Silver nitrate',   use: 'Photography (sensitiser); wound cauterisation; analytical chemistry; staining tissues.' },
    { formula: 'AgCl',   name: 'Silver chloride',  use: 'Photochromic lenses (darken in sunlight); reference electrodes; film photography.' },
    { formula: 'AgBr',   name: 'Silver bromide',   use: 'Main light-sensitive compound in traditional black-and-white photographic film.' },
    { formula: 'Ag₂O',   name: 'Silver oxide',     use: 'Button cell batteries (watches, calculators); antimicrobial coatings; catalyst.' },
    { formula: 'AgI',    name: 'Silver iodide',    use: 'Cloud seeding to induce rainfall; film photography; antiseptic applications.' },
  ],
  // Tin
  50: [
    { formula: 'SnO₂',   name: 'Tin(IV) oxide',      use: 'Transparent conductive coating (ITO) in touchscreens; ceramic opacifier; polishing agent.' },
    { formula: 'SnCl₂',  name: 'Tin(II) chloride',   use: 'Reducing agent; tin plating of food cans; mordant in textile dyeing.' },
    { formula: 'SnF₂',   name: 'Tin(II) fluoride',   use: 'Stannous fluoride in toothpaste (anti-cavity and anti-sensitivity treatment).' },
    { formula: 'Sn(Pb)', name: 'Solder (Sn-Pb alloy)', use: 'Joining metal parts in electronics; now largely replaced by lead-free Sn-Ag-Cu alloys.' },
    { formula: '(C₄H₉)₂SnO', name: 'Dibutyltin oxide', use: 'PVC heat stabiliser; catalyst for polyurethane production.' },
  ],
  // Iodine
  53: [
    { formula: 'KI',     name: 'Potassium iodide',   use: 'Iodised table salt (prevents goitre); thyroid radiation protection (nuclear emergency).' },
    { formula: 'NaI',    name: 'Sodium iodide',      use: 'Radiation detection scintillator crystals; iodised salt; medical imaging.' },
    { formula: 'I₂(aq)', name: 'Iodine solution',    use: 'Antiseptic (tincture of iodine) for wounds; starch indicator in chemistry.' },
    { formula: 'CH₂I₂',  name: 'Diiodomethane',     use: 'High-density solvent (ρ = 3.3 g/mL) for mineral separation in geology.' },
    { formula: 'C₃H₅I₃O₂', name: 'Iohexol',        use: 'Non-ionic iodine-based contrast agent for CT scans and X-ray imaging.' },
  ],
  // Barium
  56: [
    { formula: 'BaSO₄',   name: 'Barium sulfate',   use: 'Barium meal/enema for GI tract X-ray imaging; brilliant white pigment; drilling mud.' },
    { formula: 'BaCO₃',   name: 'Barium carbonate', use: 'Rodenticide; ceramic and glass flux; precursor to other barium compounds.' },
    { formula: 'Ba(NO₃)₂', name: 'Barium nitrate',  use: 'Green colour in fireworks and signal flares; oxidiser in pyrotechnics.' },
    { formula: 'BaCl₂',   name: 'Barium chloride',  use: 'Water softening; PVC thermal stabiliser; flame test (apple-green colour).' },
    { formula: 'BaTiO₃',  name: 'Barium titanate',  use: 'Piezoelectric transducers in sonar, ultrasound; ceramic capacitors in electronics.' },
  ],
  // Gold
  79: [
    { formula: 'HAuCl₄',  name: 'Chloroauric acid',   use: 'Gold electroplating solution; synthesis of gold nanoparticles; photography toning.' },
    { formula: 'AuCl₃',   name: 'Gold(III) chloride', use: 'Homogeneous catalyst for organic reactions (alkyne hydration, cyclisation).' },
    { formula: 'Au (NP)',  name: 'Gold nanoparticles', use: 'Rapid diagnostic tests (pregnancy, COVID strips); targeted cancer drug delivery; biosensors.' },
    { formula: 'AuCN',    name: 'Gold cyanide',       use: 'Electroplating bath for gold coatings on jewellery and electronic contacts.' },
    { formula: 'Au₂O₃',   name: 'Gold(III) oxide',   use: 'Decorative gold films on ceramics and glass; catalyst; electronics.' },
  ],
  // Lead
  82: [
    { formula: 'PbO₂',        name: 'Lead(IV) oxide',    use: 'Positive plate in lead-acid car batteries; strong oxidising agent.' },
    { formula: 'PbSO₄',       name: 'Lead sulfate',      use: 'Lead-acid battery (discharged state); historical white pigment (now banned).' },
    { formula: 'PbO',         name: 'Lead(II) oxide',    use: 'Lead crystal glass (high refractive index); ceramics; lead-acid battery plates.' },
    { formula: 'Pb(NO₃)₂',   name: 'Lead nitrate',      use: 'Analytical chemistry; lead glass production; historical yellow pigment.' },
    { formula: 'Pb(C₂H₅)₄',  name: 'Tetraethyllead',   use: 'Anti-knock additive in petrol (now banned globally due to neurotoxicity).' },
  ],
}
