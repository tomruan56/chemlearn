export const acidsAndBasesData = {
  icon: '🧪',
  quizTopic: 'acids_and_bases',
  theme: {
    heading: 'text-yellow-400',
    border: 'border-yellow-500',
    term: 'text-yellow-300',
    formula: 'text-yellow-200',
    link: 'text-yellow-400',
  },
  en: {
    title: 'Acids & Bases',
    subtitle: 'The chemistry of proton transfer',
    sections: [
      {
        title: '1. Definitions',
        blocks: [
          { type: 'table',
            headers: ['Theory', 'Acid', 'Base', 'Example'],
            rows: [
              ['Arrhenius (1884)', 'Produces H⁺ in water', 'Produces OH⁻ in water', 'HCl → H⁺ + Cl⁻'],
              ['Brønsted–Lowry (1923)', 'Proton donor', 'Proton acceptor', 'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻'],
              ['Lewis (1923)', 'Electron pair acceptor', 'Electron pair donor', 'BF₃ + NH₃ → F₃B–NH₃'],
            ]
          },
          { type: 'keybox', term: 'Conjugate acid–base pair', def: 'Differ by only one H⁺. In CH₃COOH ⇌ CH₃COO⁻ + H⁺, the conjugate base is CH₃COO⁻.' },
          { type: 'keybox', term: 'Amphoteric', def: 'Can act as both acid and base. Water is the classic example: can donate or accept H⁺.' },
        ],
      },
      {
        title: '2. The pH Scale',
        blocks: [
          { type: 'p', html: 'pH measures the concentration of hydrogen ions in solution (0–14 for aqueous solutions at 25 °C).' },
          { type: 'info', bg: 'bg-yellow-900/30', borderCol: 'border-yellow-700', title: 'pH formulas:', titleColor: 'text-yellow-300', formula: 'pH = −log[H⁺]   |   pOH = −log[OH⁻]   |   pH + pOH = 14', note: 'Valid at 25 °C. [H⁺] = 10⁻ᵖᴴ' },
          { type: 'table',
            headers: ['pH range', 'Category', 'Example'],
            rows: [
              ['0–2', 'Strong acid', 'HCl, H₂SO₄'],
              ['3–5', 'Weak acid', 'CH₃COOH, H₂CO₃'],
              ['7', 'Neutral', 'Pure H₂O'],
              ['8–9', 'Weak base', 'NaHCO₃, baking soda'],
              ['10–12', 'Moderate base', 'NH₃, Mg(OH)₂'],
              ['13–14', 'Strong base', 'NaOH, KOH'],
            ]
          },
        ],
      },
      {
        title: '3. Strong vs Weak Acids & Bases',
        blocks: [
          { type: 'p', html: '<strong class="text-white">Strong</strong> acids/bases fully dissociate in water. <strong class="text-white">Weak</strong> ones only partially dissociate.' },
          { type: 'twobox', items: [
            { bg: 'bg-red-900/30', borderCol: 'border-red-700', title: 'Strong Acids (memorise!)', titleColor: 'text-red-300', sub: 'HCl, HBr, HI', sub_color: 'text-yellow-300', body: 'Also: HNO₃, H₂SO₄, HClO₄' },
            { bg: 'bg-blue-900/30', borderCol: 'border-blue-700', title: 'Strong Bases (memorise!)', titleColor: 'text-blue-300', sub: 'NaOH, KOH', sub_color: 'text-yellow-300', body: 'Also: LiOH, Ca(OH)₂, Ba(OH)₂' },
          ]},
          { type: 'keybox', term: 'Ka (acid dissociation constant)', def: 'Larger Ka → stronger acid → more dissociation. pKa = −log Ka.' },
        ],
      },
      {
        title: '4. Neutralisation',
        blocks: [
          { type: 'p', html: 'Acid + Base → Salt + Water' },
          { type: 'info', bg: 'bg-yellow-900/20', borderCol: 'border-yellow-800', title: 'Net ionic equation:', titleColor: 'text-yellow-300', formula: 'H⁺ + OH⁻ → H₂O', note: '' },
          { type: 'code', lines: [
            { text: 'HCl + NaOH → NaCl + H₂O', color: 'text-gray-300' },
            { text: 'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O', color: 'text-gray-300' },
            { text: 'CH₃COOH + NaOH → CH₃COONa + H₂O', color: 'text-gray-300' },
          ]},
        ],
      },
      {
        title: '5. Titration',
        blocks: [
          { type: 'p', html: 'A titration is used to find the concentration of an unknown acid or base by reacting it with a known concentration (standard solution) from a burette.' },
          { type: 'keybox', term: 'Equivalence point', def: 'The point where moles of acid = moles of base (stoichiometrically). An indicator changes colour near here.' },
          { type: 'info', bg: 'bg-yellow-900/30', borderCol: 'border-yellow-700', title: 'Titration formula:', titleColor: 'text-yellow-300', formula: 'c₁V₁ / n₁ = c₂V₂ / n₂', note: 'c = concentration, V = volume, n = stoichiometric coefficient' },
          { type: 'p', html: '<strong class="text-white">Indicators:</strong> Phenolphthalein — colourless → pink (pH > 8.2), for strong acid/base. Methyl orange — red → yellow (pH > 4.4), for strong acid/weak base.' },
        ],
      },
      {
        title: '6. Buffer Solutions',
        blocks: [
          { type: 'keybox', term: 'Buffer', def: 'A solution that resists changes in pH when small amounts of acid or base are added. Contains a weak acid + its conjugate base (or weak base + conjugate acid).' },
          { type: 'code', lines: [
            { text: 'Example: CH₃COOH / CH₃COO⁻ buffer', color: 'text-gray-400' },
            { text: 'Add H⁺: CH₃COO⁻ + H⁺ → CH₃COOH  (absorbs acid)', color: 'text-gray-300' },
            { text: 'Add OH⁻: CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O  (absorbs base)', color: 'text-gray-300' },
            { text: 'Blood is buffered at pH ≈ 7.4 by the H₂CO₃/HCO₃⁻ system', color: 'text-yellow-300' },
          ]},
        ],
      },
    ],
    examTips: [
      'pH + pOH = 14 (at 25 °C only — temperature affects Kw).',
      'For a strong acid, [H⁺] = concentration of acid directly (fully dissociates).',
      'Equivalence point ≠ pH 7 unless both acid and base are strong.',
      'Lewis acid/base covers all reactions, including those without H⁺ transfer (e.g. metal–ligand complexes).',
    ],
  },

  vi: {
    title: 'Axit & Bazơ',
    subtitle: 'Hóa học của sự chuyển proton',
    sections: [
      {
        title: '1. Các Định Nghĩa',
        blocks: [
          { type: 'table',
            headers: ['Thuyết', 'Axit', 'Bazơ', 'Ví dụ'],
            rows: [
              ['Arrhenius (1884)', 'Tạo H⁺ trong nước', 'Tạo OH⁻ trong nước', 'HCl → H⁺ + Cl⁻'],
              ['Brønsted–Lowry (1923)', 'Cho proton', 'Nhận proton', 'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻'],
              ['Lewis (1923)', 'Nhận cặp electron', 'Cho cặp electron', 'BF₃ + NH₃ → F₃B–NH₃'],
            ]
          },
          { type: 'keybox', term: 'Cặp axit–bazơ liên hợp', def: 'Hơn kém nhau 1 H⁺. Trong CH₃COOH ⇌ CH₃COO⁻ + H⁺, bazơ liên hợp là CH₃COO⁻.' },
          { type: 'keybox', term: 'Chất lưỡng tính', def: 'Có thể hoạt động như cả axit lẫn bazơ. Nước là ví dụ điển hình: có thể cho hoặc nhận H⁺.' },
        ],
      },
      {
        title: '2. Thang pH',
        blocks: [
          { type: 'p', html: 'pH đo nồng độ ion hydro trong dung dịch (0–14 đối với dung dịch nước ở 25°C).' },
          { type: 'info', bg: 'bg-yellow-900/30', borderCol: 'border-yellow-700', title: 'Công thức pH:', titleColor: 'text-yellow-300', formula: 'pH = −lg[H⁺]   |   pOH = −lg[OH⁻]   |   pH + pOH = 14', note: 'Hiệu lực ở 25°C. [H⁺] = 10⁻ᵖᴴ' },
          { type: 'table',
            headers: ['Khoảng pH', 'Phân loại', 'Ví dụ'],
            rows: [
              ['0–2', 'Axit mạnh', 'HCl, H₂SO₄'],
              ['3–5', 'Axit yếu', 'CH₃COOH, H₂CO₃'],
              ['7', 'Trung tính', 'H₂O tinh khiết'],
              ['8–9', 'Bazơ yếu', 'NaHCO₃, baking soda'],
              ['10–12', 'Bazơ trung bình', 'NH₃, Mg(OH)₂'],
              ['13–14', 'Bazơ mạnh', 'NaOH, KOH'],
            ]
          },
        ],
      },
      {
        title: '3. Axit Mạnh & Yếu, Bazơ Mạnh & Yếu',
        blocks: [
          { type: 'p', html: 'Axit/bazơ <strong class="text-white">mạnh</strong> phân li hoàn toàn trong nước. Axit/bazơ <strong class="text-white">yếu</strong> chỉ phân li một phần.' },
          { type: 'twobox', items: [
            { bg: 'bg-red-900/30', borderCol: 'border-red-700', title: 'Axit mạnh (cần thuộc!)', titleColor: 'text-red-300', sub: 'HCl, HBr, HI', sub_color: 'text-yellow-300', body: 'Ngoài ra: HNO₃, H₂SO₄, HClO₄' },
            { bg: 'bg-blue-900/30', borderCol: 'border-blue-700', title: 'Bazơ mạnh (cần thuộc!)', titleColor: 'text-blue-300', sub: 'NaOH, KOH', sub_color: 'text-yellow-300', body: 'Ngoài ra: LiOH, Ca(OH)₂, Ba(OH)₂' },
          ]},
          { type: 'keybox', term: 'Ka (hằng số phân li axit)', def: 'Ka càng lớn → axit càng mạnh → phân li càng nhiều. pKa = −lgKa.' },
        ],
      },
      {
        title: '4. Phản Ứng Trung Hòa',
        blocks: [
          { type: 'p', html: 'Axit + Bazơ → Muối + Nước' },
          { type: 'info', bg: 'bg-yellow-900/20', borderCol: 'border-yellow-800', title: 'Phương trình ion rút gọn:', titleColor: 'text-yellow-300', formula: 'H⁺ + OH⁻ → H₂O', note: '' },
          { type: 'code', lines: [
            { text: 'HCl + NaOH → NaCl + H₂O', color: 'text-gray-300' },
            { text: 'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O', color: 'text-gray-300' },
            { text: 'CH₃COOH + NaOH → CH₃COONa + H₂O', color: 'text-gray-300' },
          ]},
        ],
      },
      {
        title: '5. Chuẩn Độ',
        blocks: [
          { type: 'p', html: 'Chuẩn độ được dùng để xác định nồng độ của axit hoặc bazơ chưa biết bằng cách cho phản ứng với dung dịch chuẩn từ buret.' },
          { type: 'keybox', term: 'Điểm tương đương', def: 'Điểm mà số mol axit = số mol bazơ (theo tỉ lượng). Chỉ thị đổi màu gần điểm này.' },
          { type: 'info', bg: 'bg-yellow-900/30', borderCol: 'border-yellow-700', title: 'Công thức chuẩn độ:', titleColor: 'text-yellow-300', formula: 'C₁V₁ / n₁ = C₂V₂ / n₂', note: 'C = nồng độ, V = thể tích, n = hệ số tỉ lượng' },
          { type: 'p', html: '<strong class="text-white">Chỉ thị:</strong> Phenolphthalein — không màu → hồng (pH > 8,2), dùng cho axit/bazơ mạnh. Methyl da cam — đỏ → vàng (pH > 4,4), dùng cho axit mạnh/bazơ yếu.' },
        ],
      },
      {
        title: '6. Dung Dịch Đệm',
        blocks: [
          { type: 'keybox', term: 'Dung dịch đệm', def: 'Dung dịch chống lại sự thay đổi pH khi thêm lượng nhỏ axit hoặc bazơ. Gồm axit yếu + bazơ liên hợp (hoặc bazơ yếu + axit liên hợp).' },
          { type: 'code', lines: [
            { text: 'Ví dụ: Đệm CH₃COOH / CH₃COO⁻', color: 'text-gray-400' },
            { text: 'Thêm H⁺: CH₃COO⁻ + H⁺ → CH₃COOH  (trung hòa axit)', color: 'text-gray-300' },
            { text: 'Thêm OH⁻: CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O  (trung hòa bazơ)', color: 'text-gray-300' },
            { text: 'Máu được đệm ở pH ≈ 7,4 bởi hệ H₂CO₃/HCO₃⁻', color: 'text-yellow-300' },
          ]},
        ],
      },
    ],
    examTips: [
      'pH + pOH = 14 (chỉ ở 25°C — nhiệt độ ảnh hưởng đến Kw).',
      'Với axit mạnh, [H⁺] = nồng độ axit trực tiếp (phân li hoàn toàn).',
      'Điểm tương đương ≠ pH 7 trừ khi cả axit và bazơ đều mạnh.',
      'Thuyết Lewis bao gồm tất cả phản ứng, kể cả không có sự chuyển H⁺ (ví dụ: phức kim loại–phối tử).',
    ],
  },
}
