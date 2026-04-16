export const thermochemistryData = {
  icon: '🔥',
  quizTopic: null,
  theme: {
    heading: 'text-orange-400',
    border: 'border-orange-500',
    term: 'text-orange-300',
    formula: 'text-orange-200',
    link: 'text-orange-400',
  },
  en: {
    title: 'Thermochemistry',
    subtitle: 'Energy changes in chemical reactions',
    sections: [
      {
        title: '1. Energy & Enthalpy',
        blocks: [
          { type: 'p', html: 'Thermochemistry studies the heat energy transferred during chemical reactions and physical changes. Energy is measured in joules (J) or kilojoules (kJ).' },
          { type: 'keybox', term: 'Enthalpy (H)', def: 'A thermodynamic quantity representing the heat content of a system at constant pressure. We measure changes in enthalpy: ΔH = H(products) − H(reactants).' },
          { type: 'keybox', term: 'Exothermic reaction', def: 'Releases heat to the surroundings. ΔH is negative (products have lower energy than reactants). Example: combustion.' },
          { type: 'keybox', term: 'Endothermic reaction', def: 'Absorbs heat from the surroundings. ΔH is positive (products have higher energy than reactants). Example: photosynthesis.' },
          { type: 'code', lines: [
            { text: 'CH₄ + 2O₂ → CO₂ + 2H₂O   ΔH = −890 kJ/mol (exothermic)', color: 'text-red-300' },
            { text: 'CaCO₃ → CaO + CO₂   ΔH = +178 kJ/mol (endothermic)', color: 'text-blue-300' },
          ]},
        ],
      },
      {
        title: '2. Calorimetry',
        blocks: [
          { type: 'p', html: 'Calorimetry is the experimental measurement of heat transferred. The heat gained or lost by a substance is:' },
          { type: 'info', bg: 'bg-orange-900/30', borderCol: 'border-orange-700', title: 'Heat equation:', titleColor: 'text-orange-300', formula: 'q = mcΔT', note: 'q = heat (J), m = mass (g), c = specific heat capacity (J g⁻¹ °C⁻¹), ΔT = temperature change' },
          { type: 'table',
            headers: ['Symbol', 'Meaning', 'Units'],
            rows: [
              ['q', 'Heat transferred', 'J or kJ'],
              ['m', 'Mass of substance', 'g or kg'],
              ['c', 'Specific heat capacity', 'J g⁻¹ °C⁻¹'],
              ['ΔT', 'Temperature change (T_final − T_initial)', '°C or K'],
            ]
          },
          { type: 'p', html: 'For water, c = 4.18 J g⁻¹ °C⁻¹. In a calorimeter: <strong class="text-white">q(reaction) = −q(solution)</strong>' },
          { type: 'p', html: '<em class="text-gray-400">Example: 50 g water heated from 20 °C to 35 °C. q = 50 × 4.18 × 15 = 3135 J = 3.135 kJ.</em>' },
        ],
      },
      {
        title: "3. Hess's Law",
        blocks: [
          { type: 'p', html: "Hess's Law states that the total enthalpy change for a reaction is the same regardless of the pathway taken — only the initial and final states matter (state function)." },
          { type: 'keybox', term: "Hess's Law", def: 'ΔH for an overall reaction = sum of ΔH values for each step. Reactions can be added, reversed (sign of ΔH flips), or scaled (ΔH scales by the same factor).' },
          { type: 'code', lines: [
            { text: 'Find ΔH for: C + ½O₂ → CO', color: 'text-gray-400' },
            { text: 'Step 1: C + O₂ → CO₂   ΔH₁ = −393 kJ', color: 'text-green-300' },
            { text: 'Step 2: CO + ½O₂ → CO₂   ΔH₂ = −283 kJ  (reverse → +283 kJ)', color: 'text-yellow-300' },
            { text: 'Overall: ΔH = −393 + 283 = −110 kJ', color: 'text-orange-300' },
          ]},
        ],
      },
      {
        title: '4. Standard Enthalpy of Formation (ΔH°f)',
        blocks: [
          { type: 'p', html: 'The standard enthalpy of formation is the enthalpy change when <strong class="text-white">1 mole</strong> of a compound is formed from its elements in their standard states (25 °C, 1 atm).' },
          { type: 'keybox', term: 'ΔH°f of elements', def: 'By definition, ΔH°f = 0 for elements in their standard state (e.g., O₂(g), C(graphite), Na(s)).' },
          { type: 'info', bg: 'bg-orange-900/30', borderCol: 'border-orange-700', title: 'Formation enthalpy formula:', titleColor: 'text-orange-300', formula: 'ΔH°rxn = Σ ΔH°f (products) − Σ ΔH°f (reactants)', note: '' },
          { type: 'table',
            headers: ['Compound', 'ΔH°f (kJ/mol)'],
            rows: [
              ['H₂O(l)', '−286'],
              ['CO₂(g)', '−394'],
              ['NH₃(g)', '−46'],
              ['NO(g)', '+90'],
              ['CH₄(g)', '−75'],
            ]
          },
        ],
      },
      {
        title: '5. Bond Energies',
        blocks: [
          { type: 'p', html: 'Bond energy is the energy required to break one mole of a particular bond in the gas phase. Breaking bonds <strong class="text-white">requires</strong> energy; forming bonds <strong class="text-white">releases</strong> energy.' },
          { type: 'info', bg: 'bg-orange-900/30', borderCol: 'border-orange-700', title: 'Bond energy method:', titleColor: 'text-orange-300', formula: 'ΔH ≈ Σ (bonds broken) − Σ (bonds formed)', note: 'This gives approximate ΔH values. Use ΔH°f data for more accurate results.' },
          { type: 'table',
            headers: ['Bond', 'Average Energy (kJ/mol)'],
            rows: [
              ['H–H', '436'],
              ['O=O', '498'],
              ['C–H', '413'],
              ['C=O', '745'],
              ['O–H', '463'],
              ['N≡N', '945'],
            ]
          },
        ],
      },
      {
        title: '6. Entropy & Spontaneity',
        blocks: [
          { type: 'keybox', term: 'Entropy (S)', def: 'A measure of disorder or randomness in a system. Processes that increase entropy (ΔS > 0) are naturally favoured. Gases > liquids > solids in entropy.' },
          { type: 'keybox', term: 'Gibbs Free Energy (ΔG)', def: 'Combines enthalpy and entropy to predict spontaneity: ΔG = ΔH − TΔS. If ΔG < 0, reaction is spontaneous at that temperature.' },
          { type: 'table',
            headers: ['ΔH', 'ΔS', 'Spontaneous?'],
            rows: [
              ['−', '+', 'Always (ΔG always < 0)'],
              ['−', '−', 'At low temperature only'],
              ['+', '+', 'At high temperature only'],
              ['+', '−', 'Never (ΔG always > 0)'],
            ]
          },
        ],
      },
    ],
    examTips: [
      'Always check the sign of ΔH — negative = exothermic, positive = endothermic.',
      "In Hess's Law: if you reverse a reaction, flip the sign of ΔH. If you multiply by a factor, multiply ΔH too.",
      'For q = mcΔT, use c = 4.18 J g⁻¹ °C⁻¹ for water unless told otherwise.',
      'ΔH°f of any element in its standard state is always zero.',
      'Bond energy method: remember "break bonds in reactants, form bonds in products."',
    ],
  },

  vi: {
    title: 'Nhiệt Hóa Học',
    subtitle: 'Biến đổi năng lượng trong phản ứng hóa học',
    sections: [
      {
        title: '1. Năng Lượng & Entanpi',
        blocks: [
          { type: 'p', html: 'Nhiệt hóa học nghiên cứu nhiệt năng được truyền trong các phản ứng hóa học và biến đổi vật lý. Năng lượng được đo bằng jun (J) hoặc kilojun (kJ).' },
          { type: 'keybox', term: 'Entanpi (H)', def: 'Đại lượng nhiệt động lực học biểu thị hàm lượng nhiệt của hệ ở áp suất không đổi. Ta đo biến thiên entanpi: ΔH = H(sản phẩm) − H(chất đầu).' },
          { type: 'keybox', term: 'Phản ứng tỏa nhiệt', def: 'Giải phóng nhiệt ra môi trường. ΔH âm (sản phẩm có năng lượng thấp hơn chất đầu). Ví dụ: đốt cháy.' },
          { type: 'keybox', term: 'Phản ứng thu nhiệt', def: 'Hấp thụ nhiệt từ môi trường. ΔH dương (sản phẩm có năng lượng cao hơn chất đầu). Ví dụ: quang hợp.' },
          { type: 'code', lines: [
            { text: 'CH₄ + 2O₂ → CO₂ + 2H₂O   ΔH = −890 kJ/mol (tỏa nhiệt)', color: 'text-red-300' },
            { text: 'CaCO₃ → CaO + CO₂   ΔH = +178 kJ/mol (thu nhiệt)', color: 'text-blue-300' },
          ]},
        ],
      },
      {
        title: '2. Đo Nhiệt Lượng',
        blocks: [
          { type: 'p', html: 'Đo nhiệt lượng là phép đo thực nghiệm nhiệt lượng truyền đi. Nhiệt lượng mà một chất nhận hoặc mất đi là:' },
          { type: 'info', bg: 'bg-orange-900/30', borderCol: 'border-orange-700', title: 'Phương trình nhiệt lượng:', titleColor: 'text-orange-300', formula: 'q = mcΔT', note: 'q = nhiệt lượng (J), m = khối lượng (g), c = nhiệt dung riêng (J/g·°C), ΔT = biến thiên nhiệt độ' },
          { type: 'table',
            headers: ['Ký hiệu', 'Ý nghĩa', 'Đơn vị'],
            rows: [
              ['q', 'Nhiệt lượng truyền', 'J hoặc kJ'],
              ['m', 'Khối lượng chất', 'g hoặc kg'],
              ['c', 'Nhiệt dung riêng', 'J/g·°C'],
              ['ΔT', 'Biến thiên nhiệt độ (T_cuối − T_đầu)', '°C hoặc K'],
            ]
          },
          { type: 'p', html: 'Với nước, c = 4,18 J/g·°C. Trong nhiệt lượng kế: <strong class="text-white">q(phản ứng) = −q(dung dịch)</strong>' },
          { type: 'p', html: '<em class="text-gray-400">Ví dụ: 50 g nước được đun từ 20°C đến 35°C. q = 50 × 4,18 × 15 = 3135 J = 3,135 kJ.</em>' },
        ],
      },
      {
        title: '3. Định Luật Hess',
        blocks: [
          { type: 'p', html: 'Định luật Hess phát biểu rằng biến thiên entanpi tổng của một phản ứng không phụ thuộc vào con đường phản ứng — chỉ phụ thuộc vào trạng thái đầu và cuối (hàm trạng thái).' },
          { type: 'keybox', term: 'Định luật Hess', def: 'ΔH của phản ứng tổng = tổng ΔH của từng bước. Các phản ứng có thể được cộng, đảo chiều (đổi dấu ΔH), hoặc nhân bội (ΔH nhân theo hệ số tương ứng).' },
          { type: 'code', lines: [
            { text: 'Tìm ΔH cho: C + ½O₂ → CO', color: 'text-gray-400' },
            { text: 'Bước 1: C + O₂ → CO₂   ΔH₁ = −393 kJ', color: 'text-green-300' },
            { text: 'Bước 2: CO + ½O₂ → CO₂   ΔH₂ = −283 kJ  (đảo → +283 kJ)', color: 'text-yellow-300' },
            { text: 'Tổng: ΔH = −393 + 283 = −110 kJ', color: 'text-orange-300' },
          ]},
        ],
      },
      {
        title: '4. Entanpi Tạo Thành Tiêu Chuẩn (ΔH°tt)',
        blocks: [
          { type: 'p', html: 'Entanpi tạo thành tiêu chuẩn là biến thiên entanpi khi tạo thành <strong class="text-white">1 mol</strong> hợp chất từ các nguyên tố ở trạng thái tiêu chuẩn (25°C, 1 atm).' },
          { type: 'keybox', term: 'ΔH°tt của đơn chất', def: 'Theo định nghĩa, ΔH°tt = 0 đối với các đơn chất ở trạng thái tiêu chuẩn (ví dụ: O₂(g), C(than chì), Na(s)).' },
          { type: 'info', bg: 'bg-orange-900/30', borderCol: 'border-orange-700', title: 'Công thức entanpi tạo thành:', titleColor: 'text-orange-300', formula: 'ΔH°pứ = Σ ΔH°tt (sản phẩm) − Σ ΔH°tt (chất đầu)', note: '' },
          { type: 'table',
            headers: ['Hợp chất', 'ΔH°tt (kJ/mol)'],
            rows: [
              ['H₂O(l)', '−286'],
              ['CO₂(k)', '−394'],
              ['NH₃(k)', '−46'],
              ['NO(k)', '+90'],
              ['CH₄(k)', '−75'],
            ]
          },
        ],
      },
      {
        title: '5. Năng Lượng Liên Kết',
        blocks: [
          { type: 'p', html: 'Năng lượng liên kết là năng lượng cần thiết để phá vỡ một mol liên kết cụ thể ở pha khí. Phá vỡ liên kết <strong class="text-white">cần</strong> năng lượng; tạo liên kết <strong class="text-white">giải phóng</strong> năng lượng.' },
          { type: 'info', bg: 'bg-orange-900/30', borderCol: 'border-orange-700', title: 'Phương pháp năng lượng liên kết:', titleColor: 'text-orange-300', formula: 'ΔH ≈ Σ (liên kết phá vỡ) − Σ (liên kết tạo thành)', note: 'Cho giá trị ΔH gần đúng. Dùng dữ liệu ΔH°tt để có kết quả chính xác hơn.' },
          { type: 'table',
            headers: ['Liên kết', 'Năng lượng trung bình (kJ/mol)'],
            rows: [
              ['H–H', '436'],
              ['O=O', '498'],
              ['C–H', '413'],
              ['C=O', '745'],
              ['O–H', '463'],
              ['N≡N', '945'],
            ]
          },
        ],
      },
      {
        title: '6. Entropi & Tính Tự Phát',
        blocks: [
          { type: 'keybox', term: 'Entropi (S)', def: 'Đại lượng đo độ hỗn loạn hay ngẫu nhiên của hệ. Các quá trình làm tăng entropi (ΔS > 0) được ưa thích tự nhiên. Khí > lỏng > rắn về entropi.' },
          { type: 'keybox', term: 'Năng lượng tự do Gibbs (ΔG)', def: 'Kết hợp entanpi và entropi để dự đoán tính tự phát: ΔG = ΔH − TΔS. Nếu ΔG < 0, phản ứng tự phát ở nhiệt độ đó.' },
          { type: 'table',
            headers: ['ΔH', 'ΔS', 'Tự phát?'],
            rows: [
              ['−', '+', 'Luôn luôn (ΔG luôn < 0)'],
              ['−', '−', 'Chỉ ở nhiệt độ thấp'],
              ['+', '+', 'Chỉ ở nhiệt độ cao'],
              ['+', '−', 'Không bao giờ (ΔG luôn > 0)'],
            ]
          },
        ],
      },
    ],
    examTips: [
      'Luôn kiểm tra dấu của ΔH — âm = tỏa nhiệt, dương = thu nhiệt.',
      'Trong định luật Hess: đảo chiều phản ứng thì đổi dấu ΔH. Nhân hệ số thì nhân ΔH theo.',
      'Với q = mcΔT, dùng c = 4,18 J/g·°C cho nước trừ khi có số liệu khác.',
      'ΔH°tt của bất kỳ đơn chất nào ở trạng thái tiêu chuẩn luôn bằng 0.',
      'Phương pháp năng lượng liên kết: nhớ "phá liên kết trong chất đầu, tạo liên kết ở sản phẩm."',
    ],
  },
}
