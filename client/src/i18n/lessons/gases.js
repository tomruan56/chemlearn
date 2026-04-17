export const gasesData = {
  icon: '💨',
  quizTopic: 'gases',
  theme: {
    heading: 'text-cyan-400',
    border: 'border-cyan-500',
    term: 'text-cyan-300',
    formula: 'text-cyan-200',
    link: 'text-cyan-400',
  },
  en: {
    title: 'Gases',
    subtitle: 'Gas laws, kinetic theory, and ideal behaviour',
    sections: [
      {
        title: '1. Kinetic Molecular Theory (KMT)',
        blocks: [
          { type: 'p', html: 'KMT explains the behaviour of an ideal gas based on assumptions about particles at the molecular level.' },
          { type: 'ul', items: [
            'Gas particles are in constant, rapid, <strong class="text-white">random</strong> motion.',
            'Gas particles are <strong class="text-white">very small</strong> — their volume is negligible compared to the container.',
            'There are <strong class="text-white">no intermolecular forces</strong> between particles (ideal assumption).',
            'Collisions between particles and container walls are perfectly <strong class="text-white">elastic</strong> (no energy lost).',
            'Average kinetic energy is proportional to <strong class="text-white">absolute temperature (T in Kelvin)</strong>.',
          ]},
          { type: 'keybox', term: 'Pressure', def: 'Force per unit area exerted by gas particles colliding with container walls. Units: Pa, kPa, atm, mmHg (1 atm = 101.325 kPa = 760 mmHg).' },
          { type: 'keybox', term: 'STP', def: 'Standard Temperature and Pressure: 0 °C (273.15 K) and 1 atm. 1 mol of ideal gas occupies 22.4 L at STP.' },
        ],
      },
      {
        title: "2. Boyle's Law",
        blocks: [
          { type: 'p', html: 'At <strong class="text-white">constant temperature and amount</strong>, pressure and volume are inversely proportional.' },
          { type: 'info', bg: 'bg-cyan-900/30', borderCol: 'border-cyan-700', title: "Boyle's Law:", titleColor: 'text-cyan-300', formula: 'P₁V₁ = P₂V₂   (T constant)', note: '' },
          { type: 'code', lines: [
            { text: 'Example: Gas at 2 atm occupies 6 L. What volume at 4 atm?', color: 'text-cyan-300' },
            { text: 'V₂ = P₁V₁/P₂ = (2 × 6)/4 = 3 L', color: 'text-yellow-300' },
          ]},
        ],
      },
      {
        title: "3. Charles's Law",
        blocks: [
          { type: 'p', html: 'At <strong class="text-white">constant pressure and amount</strong>, volume is directly proportional to absolute temperature.' },
          { type: 'info', bg: 'bg-cyan-900/30', borderCol: 'border-cyan-700', title: "Charles's Law:", titleColor: 'text-cyan-300', formula: 'V₁/T₁ = V₂/T₂   (P constant, T in Kelvin)', note: 'Always convert Celsius to Kelvin: K = °C + 273.15' },
          { type: 'code', lines: [
            { text: 'Example: 4 L at 300 K. What volume at 450 K?', color: 'text-cyan-300' },
            { text: 'V₂ = V₁ × T₂/T₁ = 4 × 450/300 = 6 L', color: 'text-yellow-300' },
          ]},
        ],
      },
      {
        title: "4. Gay-Lussac's & Combined Gas Law",
        blocks: [
          { type: 'keybox', term: "Gay-Lussac's Law", def: 'At constant volume and amount, pressure is directly proportional to absolute temperature: P₁/T₁ = P₂/T₂.' },
          { type: 'info', bg: 'bg-cyan-900/30', borderCol: 'border-cyan-700', title: 'Combined Gas Law:', titleColor: 'text-cyan-300', formula: 'P₁V₁/T₁ = P₂V₂/T₂', note: 'Use when only the amount (moles) is constant but P, V, and T all change.' },
          { type: 'code', lines: [
            { text: 'Gas at 1 atm, 2 L, 300 K → compressed to 0.5 L at 400 K. New pressure?', color: 'text-cyan-300' },
            { text: 'P₂ = P₁V₁T₂/(T₁V₂) = (1 × 2 × 400)/(300 × 0.5) = 5.33 atm', color: 'text-yellow-300' },
          ]},
        ],
      },
      {
        title: '5. Ideal Gas Law',
        blocks: [
          { type: 'p', html: 'The ideal gas law combines all variables including the amount of gas (moles):' },
          { type: 'info', bg: 'bg-cyan-900/30', borderCol: 'border-cyan-700', title: 'Ideal Gas Law:', titleColor: 'text-cyan-300', formula: 'PV = nRT', note: 'R = 0.0821 L·atm·mol⁻¹·K⁻¹  or  8.314 J·mol⁻¹·K⁻¹' },
          { type: 'table',
            headers: ['Symbol', 'Meaning', 'Units'],
            rows: [
              ['P', 'Pressure', 'atm (or kPa)'],
              ['V', 'Volume', 'L'],
              ['n', 'Moles of gas', 'mol'],
              ['R', 'Gas constant', '0.0821 L·atm·mol⁻¹·K⁻¹'],
              ['T', 'Temperature', 'K (always Kelvin)'],
            ]
          },
          { type: 'code', lines: [
            { text: 'Example: How many moles occupy 5 L at 2 atm and 300 K?', color: 'text-cyan-300' },
            { text: 'n = PV/RT = (2 × 5)/(0.0821 × 300) = 0.407 mol', color: 'text-yellow-300' },
          ]},
        ],
      },
      {
        title: "6. Dalton's Law of Partial Pressures",
        blocks: [
          { type: 'p', html: 'In a mixture of non-reacting gases, the total pressure equals the sum of the partial pressures of each gas.' },
          { type: 'info', bg: 'bg-cyan-900/30', borderCol: 'border-cyan-700', title: "Dalton's Law:", titleColor: 'text-cyan-300', formula: 'P(total) = P₁ + P₂ + P₃ + …', note: 'P_i = χ_i × P_total  (χ_i = mole fraction)' },
          { type: 'keybox', term: 'Gas collected over water', def: 'The total pressure includes water vapour pressure: P(gas) = P(total) − P(H₂O)' },
        ],
      },
      {
        title: "7. Graham's Law of Effusion",
        blocks: [
          { type: 'p', html: 'Lighter gas molecules move faster and effuse (escape through a tiny hole) more quickly.' },
          { type: 'info', bg: 'bg-cyan-900/30', borderCol: 'border-cyan-700', title: "Graham's Law:", titleColor: 'text-cyan-300', formula: 'rate₁ / rate₂ = √(M₂ / M₁)', note: 'M = molar mass. H₂ (M=2) effuses ~4× faster than O₂ (M=32) since √(32/2) = 4.' },
          { type: 'keybox', term: 'Real vs Ideal gases', def: 'Real gases deviate from ideal behaviour at high pressure and low temperature (particles have volume; intermolecular forces exist). The van der Waals equation corrects for these.' },
        ],
      },
    ],
    examTips: [
      'Always convert temperature to Kelvin (K = °C + 273) before using any gas law.',
      'Identify what is held constant to choose the correct gas law (P, V, T, or n).',
      'For PV = nRT, use R = 0.0821 L·atm·mol⁻¹·K⁻¹ when P is in atm and V in litres.',
      "Dalton's law: subtract water vapour pressure when gas is collected over water.",
      'Real gases behave most ideally at high temperature and low pressure.',
    ],
  },

  vi: {
    title: 'Chất Khí',
    subtitle: 'Các định luật khí, thuyết động học và hành vi khí lý tưởng',
    sections: [
      {
        title: '1. Thuyết Động Học Phân Tử (KMT)',
        blocks: [
          { type: 'p', html: 'Thuyết động học phân tử giải thích hành vi của khí lý tưởng dựa trên các giả thuyết về hạt ở cấp độ phân tử.' },
          { type: 'ul', items: [
            'Các hạt khí chuyển động không ngừng, nhanh và <strong class="text-white">ngẫu nhiên</strong>.',
            'Các hạt khí <strong class="text-white">rất nhỏ</strong> — thể tích của chúng không đáng kể so với bình chứa.',
            '<strong class="text-white">Không có lực liên phân tử</strong> giữa các hạt (giả thiết lý tưởng).',
            'Va chạm giữa các hạt và thành bình là hoàn toàn <strong class="text-white">đàn hồi</strong> (không mất năng lượng).',
            'Động năng trung bình tỉ lệ thuận với <strong class="text-white">nhiệt độ tuyệt đối (T tính bằng Kelvin)</strong>.',
          ]},
          { type: 'keybox', term: 'Áp suất', def: 'Lực trên một đơn vị diện tích do các hạt khí va đập vào thành bình. Đơn vị: Pa, kPa, atm, mmHg (1 atm = 101,325 kPa = 760 mmHg).' },
          { type: 'keybox', term: 'Điều kiện tiêu chuẩn (STP)', def: '0°C (273,15 K) và 1 atm. 1 mol khí lý tưởng chiếm 22,4 L ở STP.' },
        ],
      },
      {
        title: '2. Định Luật Boyle',
        blocks: [
          { type: 'p', html: 'Ở <strong class="text-white">nhiệt độ và lượng khí không đổi</strong>, áp suất và thể tích tỉ lệ nghịch với nhau.' },
          { type: 'info', bg: 'bg-cyan-900/30', borderCol: 'border-cyan-700', title: 'Định luật Boyle:', titleColor: 'text-cyan-300', formula: 'P₁V₁ = P₂V₂   (T không đổi)', note: '' },
          { type: 'code', lines: [
            { text: 'Ví dụ: Khí ở 2 atm chiếm 6 L. Thể tích ở 4 atm là bao nhiêu?', color: 'text-cyan-300' },
            { text: 'V₂ = P₁V₁/P₂ = (2 × 6)/4 = 3 L', color: 'text-yellow-300' },
          ]},
        ],
      },
      {
        title: '3. Định Luật Charles',
        blocks: [
          { type: 'p', html: 'Ở <strong class="text-white">áp suất và lượng khí không đổi</strong>, thể tích tỉ lệ thuận với nhiệt độ tuyệt đối.' },
          { type: 'info', bg: 'bg-cyan-900/30', borderCol: 'border-cyan-700', title: 'Định luật Charles:', titleColor: 'text-cyan-300', formula: 'V₁/T₁ = V₂/T₂   (P không đổi, T tính bằng Kelvin)', note: 'Luôn chuyển Celsius sang Kelvin: K = °C + 273,15' },
          { type: 'code', lines: [
            { text: 'Ví dụ: 4 L ở 300 K. Thể tích ở 450 K là bao nhiêu?', color: 'text-cyan-300' },
            { text: 'V₂ = V₁ × T₂/T₁ = 4 × 450/300 = 6 L', color: 'text-yellow-300' },
          ]},
        ],
      },
      {
        title: '4. Định Luật Gay-Lussac & Phương Trình Kết Hợp',
        blocks: [
          { type: 'keybox', term: 'Định luật Gay-Lussac', def: 'Ở thể tích và lượng khí không đổi, áp suất tỉ lệ thuận với nhiệt độ tuyệt đối: P₁/T₁ = P₂/T₂.' },
          { type: 'info', bg: 'bg-cyan-900/30', borderCol: 'border-cyan-700', title: 'Phương trình khí kết hợp:', titleColor: 'text-cyan-300', formula: 'P₁V₁/T₁ = P₂V₂/T₂', note: 'Dùng khi chỉ có lượng khí (mol) không đổi nhưng P, V và T đều thay đổi.' },
          { type: 'code', lines: [
            { text: 'Khí ở 1 atm, 2 L, 300 K → nén xuống 0,5 L ở 400 K. Áp suất mới?', color: 'text-cyan-300' },
            { text: 'P₂ = P₁V₁T₂/(T₁V₂) = (1 × 2 × 400)/(300 × 0,5) = 5,33 atm', color: 'text-yellow-300' },
          ]},
        ],
      },
      {
        title: '5. Phương Trình Khí Lý Tưởng',
        blocks: [
          { type: 'p', html: 'Phương trình khí lý tưởng kết hợp tất cả các biến số kể cả lượng khí (mol):' },
          { type: 'info', bg: 'bg-cyan-900/30', borderCol: 'border-cyan-700', title: 'Phương trình khí lý tưởng:', titleColor: 'text-cyan-300', formula: 'PV = nRT', note: 'R = 0,0821 L·atm·mol⁻¹·K⁻¹  hoặc  8,314 J·mol⁻¹·K⁻¹' },
          { type: 'table',
            headers: ['Ký hiệu', 'Ý nghĩa', 'Đơn vị'],
            rows: [
              ['P', 'Áp suất', 'atm (hoặc kPa)'],
              ['V', 'Thể tích', 'L'],
              ['n', 'Số mol khí', 'mol'],
              ['R', 'Hằng số khí', '0,0821 L·atm·mol⁻¹·K⁻¹'],
              ['T', 'Nhiệt độ', 'K (luôn dùng Kelvin)'],
            ]
          },
          { type: 'code', lines: [
            { text: 'Ví dụ: Bao nhiêu mol chiếm 5 L ở 2 atm và 300 K?', color: 'text-cyan-300' },
            { text: 'n = PV/RT = (2 × 5)/(0,0821 × 300) = 0,407 mol', color: 'text-yellow-300' },
          ]},
        ],
      },
      {
        title: '6. Định Luật Dalton Về Áp Suất Riêng Phần',
        blocks: [
          { type: 'p', html: 'Trong hỗn hợp các khí không phản ứng, áp suất tổng bằng tổng áp suất riêng phần của từng khí.' },
          { type: 'info', bg: 'bg-cyan-900/30', borderCol: 'border-cyan-700', title: 'Định luật Dalton:', titleColor: 'text-cyan-300', formula: 'P(tổng) = P₁ + P₂ + P₃ + …', note: 'P_i = χ_i × P(tổng)  (χ_i = phần mol)' },
          { type: 'keybox', term: 'Khí thu trên nước', def: 'Áp suất tổng bao gồm áp suất hơi nước: P(khí) = P(tổng) − P(H₂O)' },
        ],
      },
      {
        title: '7. Định Luật Graham Về Khuyếch Tán',
        blocks: [
          { type: 'p', html: 'Các phân tử khí nhẹ hơn chuyển động nhanh hơn và khuếch tán (thoát qua lỗ nhỏ) nhanh hơn.' },
          { type: 'info', bg: 'bg-cyan-900/30', borderCol: 'border-cyan-700', title: 'Định luật Graham:', titleColor: 'text-cyan-300', formula: 'v₁ / v₂ = √(M₂ / M₁)', note: 'M = khối lượng mol. H₂ (M=2) khuếch tán ~4× nhanh hơn O₂ (M=32) vì √(32/2) = 4.' },
          { type: 'keybox', term: 'Khí thực vs Khí lý tưởng', def: 'Khí thực lệch khỏi hành vi lý tưởng ở áp suất cao và nhiệt độ thấp (hạt có thể tích; tồn tại lực liên phân tử). Phương trình van der Waals hiệu chỉnh cho các yếu tố này.' },
        ],
      },
    ],
    examTips: [
      'Luôn chuyển nhiệt độ sang Kelvin (K = °C + 273) trước khi dùng bất kỳ định luật khí nào.',
      'Xác định đại lượng nào không đổi để chọn định luật khí đúng (P, V, T hay n).',
      'Với PV = nRT, dùng R = 0,0821 L·atm·mol⁻¹·K⁻¹ khi P tính bằng atm và V tính bằng lít.',
      'Định luật Dalton: trừ áp suất hơi nước khi khí được thu trên nước.',
      'Khí thực hoạt động gần lý tưởng nhất ở nhiệt độ cao và áp suất thấp.',
    ],
  },
}
