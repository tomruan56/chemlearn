export const stoichiometryData = {
  icon: '⚖️',
  quizTopic: 'stoichiometry',
  theme: {
    heading: 'text-green-400',
    border: 'border-green-500',
    term: 'text-green-300',
    formula: 'text-green-200',
    link: 'text-green-400',
  },
  en: {
    title: 'Stoichiometry',
    subtitle: 'Quantitative relationships in chemistry',
    sections: [
      {
        title: "1. The Mole & Avogadro's Number",
        blocks: [
          { type: 'p', html: "The <strong class='text-white'>mole</strong> is the SI unit for amount of substance. It bridges the atomic scale and the laboratory scale." },
          { type: 'keybox', term: "Avogadro's number (Nₐ)", def: '6.022 × 10²³ particles per mole. This applies to atoms, molecules, ions, electrons — any particle.' },
          { type: 'info', bg: 'bg-green-900/30', borderCol: 'border-green-700', title: 'Mole–particle relationship:', titleColor: 'text-green-300', formula: 'n = N / Nₐ   |   N = n × Nₐ', note: 'n = moles,  N = number of particles' },
        ],
      },
      {
        title: '2. Molar Mass',
        blocks: [
          { type: 'p', html: 'The molar mass (M) of a substance equals its relative formula mass in g/mol. Add atomic masses from the periodic table.' },
          { type: 'info', bg: 'bg-green-900/30', borderCol: 'border-green-700', title: 'Molar mass formula:', titleColor: 'text-green-300', formula: 'n (mol) = mass (g) / molar mass (g mol⁻¹)', note: 'Example: M(H₂SO₄) = 2(1) + 32 + 4(16) = 98 g/mol' },
          { type: 'code', lines: [
            { text: 'M(H₂SO₄) = 2 + 32 + 64 = 98 g/mol', color: 'text-gray-300' },
            { text: 'n = 49 g ÷ 98 g/mol = 0.5 mol', color: 'text-green-300' },
          ]},
        ],
      },
      {
        title: '3. Mole Ratios & Balanced Equations',
        blocks: [
          { type: 'p', html: 'Coefficients in a balanced equation give the mole ratio between reactants and products.' },
          { type: 'code', lines: [
            { text: '2H₂ + O₂ → 2H₂O', color: 'text-yellow-300' },
            { text: '2 mol H₂ reacts with 1 mol O₂ to produce 2 mol H₂O', color: 'text-gray-300' },
            { text: 'If 4 mol H₂ is used → 4 mol H₂O produced, 2 mol O₂ needed', color: 'text-green-300' },
          ]},
          { type: 'p', html: 'Always balance the equation first. Then use ratios to scale up or down.' },
        ],
      },
      {
        title: '4. Limiting Reagents',
        blocks: [
          { type: 'p', html: 'The <strong class="text-white">limiting reagent</strong> is the reactant that is completely consumed first, limiting how much product can form. The other reactant is in <strong class="text-white">excess</strong>.' },
          { type: 'ol', items: [
            'Convert all given masses to moles.',
            'Divide each by its stoichiometric coefficient.',
            'The reactant with the smaller result is the limiting reagent.',
          ]},
          { type: 'code', lines: [
            { text: 'N₂ + 3H₂ → 2NH₃  |  Given: 28 g N₂, 6 g H₂', color: 'text-gray-400' },
            { text: 'n(N₂) = 28/28 = 1 mol  →  1/1 = 1', color: 'text-gray-300' },
            { text: 'n(H₂) = 6/2 = 3 mol   →  3/3 = 1', color: 'text-gray-300' },
            { text: 'Equal ratio — both consumed exactly (neither in excess)', color: 'text-green-300' },
          ]},
        ],
      },
      {
        title: '5. Percent Yield',
        blocks: [
          { type: 'p', html: 'In practice, reactions rarely produce 100% of the theoretical yield due to side reactions, incomplete reactions, or product loss.' },
          { type: 'info', bg: 'bg-green-900/30', borderCol: 'border-green-700', title: 'Percent yield formula:', titleColor: 'text-green-300', formula: '% yield = (actual yield / theoretical yield) × 100%', note: 'Example: actual = 4.97 g, theoretical = 5.85 g → yield = 84.9%' },
        ],
      },
      {
        title: '6. Empirical & Molecular Formulas',
        blocks: [
          { type: 'keybox', term: 'Empirical formula', def: 'The simplest whole-number ratio of atoms in a compound.' },
          { type: 'keybox', term: 'Molecular formula', def: 'The actual number of each atom in a molecule. Always a whole-number multiple of the empirical formula.' },
          { type: 'ol', items: [
            'Assume 100 g — percentages become grams.',
            'Convert grams to moles (divide by Ar).',
            'Divide all by the smallest mole value.',
            'Round to nearest whole number (multiply if needed).',
          ]},
        ],
      },
      {
        title: '7. Concentration & Volume',
        blocks: [
          { type: 'info', bg: 'bg-green-900/30', borderCol: 'border-green-700', title: 'Molar concentration:', titleColor: 'text-green-300', formula: 'c (mol L⁻¹) = n (mol) / V (L)', note: 'Example: 4 mol NaOH in 500 mL → c = 4/0.5 = 8 mol/L' },
          { type: 'keybox', term: 'Molar concentration (c)', def: 'The number of moles of solute per litre of solution. Units: mol/L or M.' },
        ],
      },
    ],
    examTips: [
      'Always convert mass to moles as the first step in any stoichiometry calculation.',
      'At STP, 1 mol of any ideal gas = 22.4 L.',
      'Empirical formula ratios: if you get 1.5, multiply all by 2; if 1.33, multiply by 3.',
      'Check your answer makes chemical sense — moles of product cannot exceed moles of limiting reagent.',
    ],
  },

  vi: {
    title: 'Hóa Học Định Lượng',
    subtitle: 'Quan hệ định lượng trong hóa học',
    sections: [
      {
        title: '1. Mol & Số Avogadro',
        blocks: [
          { type: 'p', html: '<strong class="text-white">Mol</strong> là đơn vị SI đo lượng chất. Nó kết nối thế giới nguyên tử với thế giới thực nghiệm.' },
          { type: 'keybox', term: 'Số Avogadro (Nₐ)', def: '6,022 × 10²³ hạt mỗi mol. Áp dụng cho nguyên tử, phân tử, ion, electron — bất kỳ loại hạt nào.' },
          { type: 'info', bg: 'bg-green-900/30', borderCol: 'border-green-700', title: 'Quan hệ mol–hạt:', titleColor: 'text-green-300', formula: 'n = N / Nₐ   |   N = n × Nₐ', note: 'n = số mol,  N = số hạt' },
        ],
      },
      {
        title: '2. Khối Lượng Mol',
        blocks: [
          { type: 'p', html: 'Khối lượng mol (M) của một chất bằng khối lượng phân tử tương đối tính bằng g/mol. Cộng khối lượng nguyên tử từ bảng tuần hoàn.' },
          { type: 'info', bg: 'bg-green-900/30', borderCol: 'border-green-700', title: 'Công thức khối lượng mol:', titleColor: 'text-green-300', formula: 'n (mol) = khối lượng (g) / khối lượng mol (g/mol)', note: 'Ví dụ: M(H₂SO₄) = 2(1) + 32 + 4(16) = 98 g/mol' },
          { type: 'code', lines: [
            { text: 'M(H₂SO₄) = 2 + 32 + 64 = 98 g/mol', color: 'text-gray-300' },
            { text: 'n = 49 g ÷ 98 g/mol = 0,5 mol', color: 'text-green-300' },
          ]},
        ],
      },
      {
        title: '3. Tỉ Lệ Mol & Phương Trình Cân Bằng',
        blocks: [
          { type: 'p', html: 'Hệ số trong phương trình cân bằng cho biết tỉ lệ mol giữa các chất phản ứng và sản phẩm.' },
          { type: 'code', lines: [
            { text: '2H₂ + O₂ → 2H₂O', color: 'text-yellow-300' },
            { text: '2 mol H₂ phản ứng với 1 mol O₂ tạo ra 2 mol H₂O', color: 'text-gray-300' },
            { text: 'Nếu dùng 4 mol H₂ → tạo ra 4 mol H₂O, cần 2 mol O₂', color: 'text-green-300' },
          ]},
          { type: 'p', html: 'Luôn cân bằng phương trình trước. Sau đó dùng tỉ lệ để tính toán.' },
        ],
      },
      {
        title: '4. Chất Phản Ứng Hết',
        blocks: [
          { type: 'p', html: '<strong class="text-white">Chất phản ứng hết</strong> là chất bị tiêu thụ hết trước, giới hạn lượng sản phẩm tạo thành. Chất còn lại là chất <strong class="text-white">dư</strong>.' },
          { type: 'ol', items: [
            'Chuyển đổi tất cả khối lượng thành số mol.',
            'Chia mỗi số mol cho hệ số tỉ lượng của nó.',
            'Chất có kết quả nhỏ hơn là chất phản ứng hết.',
          ]},
          { type: 'code', lines: [
            { text: 'N₂ + 3H₂ → 2NH₃  |  Cho: 28 g N₂, 6 g H₂', color: 'text-gray-400' },
            { text: 'n(N₂) = 28/28 = 1 mol  →  1/1 = 1', color: 'text-gray-300' },
            { text: 'n(H₂) = 6/2 = 3 mol   →  3/3 = 1', color: 'text-gray-300' },
            { text: 'Tỉ lệ bằng nhau — cả hai đều phản ứng hết', color: 'text-green-300' },
          ]},
        ],
      },
      {
        title: '5. Hiệu Suất Phản Ứng',
        blocks: [
          { type: 'p', html: 'Trong thực tế, phản ứng hiếm khi đạt hiệu suất 100% do phản ứng phụ, phản ứng không hoàn toàn, hoặc mất sản phẩm.' },
          { type: 'info', bg: 'bg-green-900/30', borderCol: 'border-green-700', title: 'Công thức hiệu suất:', titleColor: 'text-green-300', formula: 'H% = (khối lượng thực tế / khối lượng lý thuyết) × 100%', note: 'Ví dụ: thực tế = 4,97 g, lý thuyết = 5,85 g → H% = 84,9%' },
        ],
      },
      {
        title: '6. Công Thức Thực Nghiệm & Phân Tử',
        blocks: [
          { type: 'keybox', term: 'Công thức thực nghiệm', def: 'Tỉ lệ số nguyên đơn giản nhất của các nguyên tử trong hợp chất.' },
          { type: 'keybox', term: 'Công thức phân tử', def: 'Số thực tế của mỗi nguyên tử trong phân tử. Luôn là bội số nguyên của công thức thực nghiệm.' },
          { type: 'ol', items: [
            'Giả sử 100 g — phần trăm trở thành số gam.',
            'Chuyển đổi gam sang mol (chia cho Ar).',
            'Chia tất cả cho giá trị mol nhỏ nhất.',
            'Làm tròn đến số nguyên gần nhất (nhân nếu cần).',
          ]},
        ],
      },
      {
        title: '7. Nồng Độ & Thể Tích',
        blocks: [
          { type: 'info', bg: 'bg-green-900/30', borderCol: 'border-green-700', title: 'Nồng độ mol:', titleColor: 'text-green-300', formula: 'C (mol/L) = n (mol) / V (L)', note: 'Ví dụ: 4 mol NaOH trong 500 mL → C = 4/0,5 = 8 mol/L' },
          { type: 'keybox', term: 'Nồng độ mol (C)', def: 'Số mol chất tan trong một lít dung dịch. Đơn vị: mol/L hoặc M.' },
        ],
      },
    ],
    examTips: [
      'Luôn chuyển đổi khối lượng sang mol là bước đầu tiên trong bất kỳ bài toán hóa học định lượng nào.',
      'Ở điều kiện tiêu chuẩn (STP), 1 mol khí lý tưởng chiếm 22,4 L.',
      'Tỉ lệ công thức thực nghiệm: nếu được 1,5 thì nhân tất cả với 2; nếu 1,33 thì nhân với 3.',
      'Kiểm tra kết quả có hợp lý về mặt hóa học — số mol sản phẩm không thể vượt quá số mol chất phản ứng hết.',
    ],
  },
}
