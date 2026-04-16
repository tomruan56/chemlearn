export const nuclearChemistryData = {
  icon: '☢️',
  quizTopic: null,
  theme: {
    heading: 'text-violet-400',
    border: 'border-violet-500',
    term: 'text-violet-300',
    formula: 'text-violet-200',
    link: 'text-violet-400',
  },
  en: {
    title: 'Nuclear Chemistry',
    subtitle: 'Radioactivity, half-life, fission, and fusion',
    sections: [
      {
        title: '1. The Nucleus & Nuclear Stability',
        blocks: [
          { type: 'p', html: 'The nucleus contains protons and neutrons held together by the <strong class="text-white">strong nuclear force</strong>, which overcomes electrostatic repulsion between protons at very short ranges.' },
          { type: 'keybox', term: 'Nucleon', def: 'Any particle in the nucleus (proton or neutron). Nucleon number = mass number (A).' },
          { type: 'keybox', term: 'Nuclide', def: 'A specific nucleus characterised by its proton number (Z) and mass number (A). Written as ᴬ_Z X, e.g., ¹⁴₆C.' },
          { type: 'keybox', term: 'Binding energy', def: 'The energy required to completely separate all nucleons in a nucleus. Released when a nucleus forms from its nucleons (mass defect × c²). Higher binding energy per nucleon = more stable nucleus.' },
        ],
      },
      {
        title: '2. Types of Radioactive Decay',
        blocks: [
          { type: 'table',
            headers: ['Radiation', 'Symbol', 'Composition', 'Charge', 'Penetrating power'],
            rows: [
              ['Alpha (α)', 'α or ⁴₂He', '2 protons + 2 neutrons', '+2', 'Low — stopped by paper or skin'],
              ['Beta-minus (β⁻)', 'β⁻ or ⁰₋₁e', 'Electron', '−1', 'Medium — stopped by few mm aluminium'],
              ['Beta-plus (β⁺)', 'β⁺ or ⁰₊₁e', 'Positron', '+1', 'Medium — annihilates with electron'],
              ['Gamma (γ)', 'γ', 'High-energy photon', '0', 'High — requires lead or thick concrete'],
            ]
          },
          { type: 'p', html: 'In nuclear equations, <strong class="text-white">mass numbers (A)</strong> and <strong class="text-white">atomic numbers (Z)</strong> are conserved on both sides.' },
          { type: 'code', lines: [
            { text: 'Alpha decay:  ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He', color: 'text-violet-300' },
            { text: 'Beta-minus:   ¹⁴₆C → ¹⁴₇N + ⁰₋₁e + antineutrino', color: 'text-violet-300' },
            { text: 'Gamma:        no change in Z or A — just energy release', color: 'text-violet-300' },
          ]},
        ],
      },
      {
        title: '3. Half-Life',
        blocks: [
          { type: 'p', html: 'The <strong class="text-white">half-life (t½)</strong> is the time taken for half the nuclei in a sample to decay. It is constant for a given isotope regardless of temperature, pressure, or chemical state.' },
          { type: 'info', bg: 'bg-violet-900/30', borderCol: 'border-violet-700', title: 'Half-life decay equation:', titleColor: 'text-violet-300', formula: 'N = N₀ × (½)^(t / t½)', note: 'N₀ = initial nuclei, N = remaining after time t, t½ = half-life' },
          { type: 'code', lines: [
            { text: 'Example: ¹⁴C (t½ = 5730 yr), start with 1000 atoms. After 17190 years?', color: 'text-violet-300' },
            { text: '17190 / 5730 = 3 half-lives', color: 'text-gray-300' },
            { text: 'N = 1000 × (½)³ = 125 atoms', color: 'text-yellow-300' },
          ]},
          { type: 'info', bg: 'bg-violet-900/30', borderCol: 'border-violet-700', title: 'Decay constant:', titleColor: 'text-violet-300', formula: 'λ = ln 2 / t½  ≈  0.693 / t½', note: '' },
        ],
      },
      {
        title: '4. Applications of Radioactivity',
        blocks: [
          { type: 'table',
            headers: ['Application', 'Radiation used', 'How it works'],
            rows: [
              ['Carbon dating (¹⁴C)', 'Beta', 'Living things maintain constant ¹⁴C ratio; after death ratio decays → age from remaining ¹⁴C'],
              ['Medical imaging (PET scan)', 'Beta-plus (positron)', 'Tracer injected; annihilation photons detected by scanner'],
              ['Cancer radiotherapy', 'Gamma (Co-60)', 'Gamma rays targeted to kill tumour cells'],
              ['Smoke detectors', 'Alpha (Am-241)', 'Alpha particles ionise air; smoke absorbs ions and triggers alarm'],
              ['Thickness gauging', 'Beta/Gamma', 'Detector measures radiation through material; attenuation indicates thickness'],
            ]
          },
        ],
      },
      {
        title: '5. Nuclear Fission',
        blocks: [
          { type: 'keybox', term: 'Nuclear fission', def: 'A heavy nucleus (e.g., ²³⁵U) splits into two smaller nuclei after absorbing a neutron, releasing enormous energy and additional neutrons which can trigger further fission.' },
          { type: 'code', lines: [
            { text: '²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n + energy (~200 MeV)', color: 'text-violet-300' },
          ]},
          { type: 'p', html: 'A <strong class="text-white">chain reaction</strong> occurs when released neutrons cause further fissions. Control rods (e.g., boron) absorb excess neutrons to maintain a controlled, sustainable reaction.' },
          { type: 'keybox', term: 'Critical mass', def: 'The minimum mass of fissile material needed to sustain a chain reaction.' },
        ],
      },
      {
        title: '6. Nuclear Fusion',
        blocks: [
          { type: 'keybox', term: 'Nuclear fusion', def: 'Light nuclei combine to form a heavier nucleus, releasing even more energy per nucleon than fission. Powers the Sun and stars.' },
          { type: 'code', lines: [
            { text: '²₁H + ³₁H → ⁴₂He + ¹₀n + 17.6 MeV', color: 'text-violet-300' },
            { text: '(deuterium + tritium → helium + neutron)', color: 'text-gray-400' },
          ]},
          { type: 'p', html: 'Fusion requires extremely high temperatures (~10⁷–10⁸ K) to overcome electrostatic repulsion between nuclei.' },
          { type: 'table',
            headers: ['', 'Fission', 'Fusion'],
            rows: [
              ['Nuclei', 'Heavy (U-235, Pu-239)', 'Light (H isotopes)'],
              ['Energy', 'Large (~200 MeV/reaction)', 'Even larger per nucleon'],
              ['Waste', 'Radioactive isotopes', 'Helium (non-radioactive)'],
              ['Current use', 'Nuclear power plants', 'Experimental only'],
            ]
          },
        ],
      },
      {
        title: '7. Mass–Energy Equivalence',
        blocks: [
          { type: 'p', html: 'In nuclear reactions, the products have slightly less mass than the reactants. This <strong class="text-white">mass defect (Δm)</strong> is converted to energy according to Einstein\'s famous equation:' },
          { type: 'info', bg: 'bg-violet-900/30', borderCol: 'border-violet-700', title: 'Mass-energy equivalence:', titleColor: 'text-violet-300', formula: 'E = Δm × c²', note: 'c = 3.00 × 10⁸ m/s. Even a tiny mass defect releases an enormous amount of energy.' },
        ],
      },
    ],
    examTips: [
      'In nuclear equations, check that both mass numbers (A) and atomic numbers (Z) are conserved.',
      'Alpha emission: A decreases by 4, Z decreases by 2. Beta-minus: Z increases by 1, A unchanged.',
      'For half-life problems, count the number of half-lives elapsed: N = N₀ × (½)ⁿ where n = t / t½.',
      '¹⁴C dating is used for organic materials up to ~50,000 years old; ²³⁸U dating for geological timescales.',
      'Fusion releases more energy per nucleon than fission but requires much higher temperature to initiate.',
    ],
  },

  vi: {
    title: 'Hóa Học Hạt Nhân',
    subtitle: 'Phóng xạ, chu kỳ bán rã, phân hạch và nhiệt hạch',
    sections: [
      {
        title: '1. Hạt Nhân & Tính Bền Vững',
        blocks: [
          { type: 'p', html: 'Hạt nhân chứa proton và neutron được giữ lại bởi <strong class="text-white">lực hạt nhân mạnh</strong>, vượt qua lực đẩy tĩnh điện giữa các proton ở khoảng cách rất ngắn.' },
          { type: 'keybox', term: 'Nucleon', def: 'Bất kỳ hạt nào trong hạt nhân (proton hoặc neutron). Số nucleon = số khối (A).' },
          { type: 'keybox', term: 'Nuclide', def: 'Một hạt nhân cụ thể được xác định bởi số proton (Z) và số khối (A). Viết là ᴬ_Z X, ví dụ: ¹⁴₆C.' },
          { type: 'keybox', term: 'Năng lượng liên kết', def: 'Năng lượng cần thiết để tách hoàn toàn tất cả nucleon trong hạt nhân. Được giải phóng khi hạt nhân hình thành từ các nucleon (độ hụt khối × c²). Năng lượng liên kết trên nucleon càng cao = hạt nhân càng bền.' },
        ],
      },
      {
        title: '2. Các Loại Phân Rã Phóng Xạ',
        blocks: [
          { type: 'table',
            headers: ['Bức xạ', 'Ký hiệu', 'Thành phần', 'Điện tích', 'Khả năng xuyên thấu'],
            rows: [
              ['Alpha (α)', 'α hoặc ⁴₂He', '2 proton + 2 neutron', '+2', 'Thấp — bị chặn bởi giấy hoặc da'],
              ['Beta âm (β⁻)', 'β⁻ hoặc ⁰₋₁e', 'Electron', '−1', 'Trung bình — bị chặn bởi vài mm nhôm'],
              ['Beta dương (β⁺)', 'β⁺ hoặc ⁰₊₁e', 'Positron', '+1', 'Trung bình — hủy cặp với electron'],
              ['Gamma (γ)', 'γ', 'Photon năng lượng cao', '0', 'Cao — cần chì hoặc bê tông dày'],
            ]
          },
          { type: 'p', html: 'Trong phương trình hạt nhân, <strong class="text-white">số khối (A)</strong> và <strong class="text-white">số nguyên tử (Z)</strong> được bảo toàn ở cả hai vế.' },
          { type: 'code', lines: [
            { text: 'Phân rã alpha:  ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He', color: 'text-violet-300' },
            { text: 'Beta âm:        ¹⁴₆C → ¹⁴₇N + ⁰₋₁e + phản neutrino', color: 'text-violet-300' },
            { text: 'Gamma:          Z và A không thay đổi — chỉ giải phóng năng lượng', color: 'text-violet-300' },
          ]},
        ],
      },
      {
        title: '3. Chu Kỳ Bán Rã',
        blocks: [
          { type: 'p', html: '<strong class="text-white">Chu kỳ bán rã (t½)</strong> là thời gian cần để một nửa số hạt nhân trong mẫu phân rã. Nó không đổi với mỗi đồng vị, bất kể nhiệt độ, áp suất hay trạng thái hóa học.' },
          { type: 'info', bg: 'bg-violet-900/30', borderCol: 'border-violet-700', title: 'Phương trình phân rã:', titleColor: 'text-violet-300', formula: 'N = N₀ × (½)^(t / t½)', note: 'N₀ = số hạt nhân ban đầu, N = số hạt nhân còn lại sau thời gian t' },
          { type: 'code', lines: [
            { text: 'Ví dụ: ¹⁴C (t½ = 5730 năm), ban đầu 1000 nguyên tử. Sau 17190 năm?', color: 'text-violet-300' },
            { text: '17190 / 5730 = 3 chu kỳ bán rã', color: 'text-gray-300' },
            { text: 'N = 1000 × (½)³ = 125 nguyên tử', color: 'text-yellow-300' },
          ]},
          { type: 'info', bg: 'bg-violet-900/30', borderCol: 'border-violet-700', title: 'Hằng số phân rã:', titleColor: 'text-violet-300', formula: 'λ = ln 2 / t½  ≈  0,693 / t½', note: '' },
        ],
      },
      {
        title: '4. Ứng Dụng Của Phóng Xạ',
        blocks: [
          { type: 'table',
            headers: ['Ứng dụng', 'Bức xạ sử dụng', 'Nguyên lý'],
            rows: [
              ['Định tuổi carbon (¹⁴C)', 'Beta', 'Sinh vật sống duy trì tỉ lệ ¹⁴C không đổi; sau khi chết tỉ lệ giảm → xác định tuổi từ lượng ¹⁴C còn lại'],
              ['Chẩn đoán hình ảnh (PET scan)', 'Beta dương (positron)', 'Tiêm chất đánh dấu phóng xạ; máy scanner phát hiện photon hủy cặp'],
              ['Xạ trị ung thư', 'Gamma (Co-60)', 'Tia gamma nhắm vào tiêu diệt tế bào khối u'],
              ['Đầu báo khói', 'Alpha (Am-241)', 'Hạt alpha ion hóa không khí; khói hấp thụ ion và kích hoạt báo động'],
              ['Đo độ dày công nghiệp', 'Beta/Gamma', 'Đầu dò đo bức xạ qua vật liệu; suy giảm cho biết độ dày'],
            ]
          },
        ],
      },
      {
        title: '5. Phân Hạch Hạt Nhân',
        blocks: [
          { type: 'keybox', term: 'Phân hạch hạt nhân', def: 'Hạt nhân nặng (ví dụ: ²³⁵U) tách thành hai hạt nhân nhỏ hơn sau khi hấp thụ neutron, giải phóng năng lượng khổng lồ và thêm neutron có thể kích hoạt phân hạch tiếp theo.' },
          { type: 'code', lines: [
            { text: '²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n + năng lượng (~200 MeV)', color: 'text-violet-300' },
          ]},
          { type: 'p', html: '<strong class="text-white">Phản ứng dây chuyền</strong> xảy ra khi neutron được giải phóng gây ra thêm phân hạch. Thanh điều khiển (ví dụ: boron) hấp thụ neutron dư để duy trì phản ứng kiểm soát được.' },
          { type: 'keybox', term: 'Khối lượng tới hạn', def: 'Khối lượng tối thiểu của vật liệu phân hạch cần thiết để duy trì phản ứng dây chuyền.' },
        ],
      },
      {
        title: '6. Nhiệt Hạch Hạt Nhân',
        blocks: [
          { type: 'keybox', term: 'Nhiệt hạch hạt nhân', def: 'Các hạt nhân nhẹ kết hợp tạo thành hạt nhân nặng hơn, giải phóng năng lượng trên mỗi nucleon còn nhiều hơn phân hạch. Là nguồn năng lượng của Mặt Trời và các ngôi sao.' },
          { type: 'code', lines: [
            { text: '²₁H + ³₁H → ⁴₂He + ¹₀n + 17,6 MeV', color: 'text-violet-300' },
            { text: '(đơteri + triti → heli + neutron)', color: 'text-gray-400' },
          ]},
          { type: 'p', html: 'Nhiệt hạch cần nhiệt độ cực cao (~10⁷–10⁸ K) để vượt qua lực đẩy tĩnh điện giữa các hạt nhân.' },
          { type: 'table',
            headers: ['', 'Phân hạch', 'Nhiệt hạch'],
            rows: [
              ['Hạt nhân', 'Nặng (U-235, Pu-239)', 'Nhẹ (đồng vị H)'],
              ['Năng lượng', 'Lớn (~200 MeV/phản ứng)', 'Còn lớn hơn tính trên nucleon'],
              ['Chất thải', 'Đồng vị phóng xạ', 'Heli (không phóng xạ)'],
              ['Ứng dụng hiện tại', 'Nhà máy điện hạt nhân', 'Chỉ thí nghiệm'],
            ]
          },
        ],
      },
      {
        title: '7. Tương Đương Khối Lượng–Năng Lượng',
        blocks: [
          { type: 'p', html: 'Trong phản ứng hạt nhân, sản phẩm có khối lượng nhỏ hơn một chút so với chất đầu. <strong class="text-white">Độ hụt khối (Δm)</strong> này được chuyển đổi thành năng lượng theo phương trình nổi tiếng của Einstein:' },
          { type: 'info', bg: 'bg-violet-900/30', borderCol: 'border-violet-700', title: 'Tương đương khối lượng–năng lượng:', titleColor: 'text-violet-300', formula: 'E = Δm × c²', note: 'c = 3,00 × 10⁸ m/s. Dù độ hụt khối rất nhỏ, năng lượng giải phóng cực kỳ lớn.' },
        ],
      },
    ],
    examTips: [
      'Trong phương trình hạt nhân, kiểm tra cả số khối (A) và số nguyên tử (Z) đều được bảo toàn.',
      'Phân rã alpha: A giảm 4, Z giảm 2. Beta âm: Z tăng 1, A không đổi.',
      'Bài toán chu kỳ bán rã: đếm số chu kỳ đã qua: N = N₀ × (½)ⁿ với n = t / t½.',
      'Định tuổi ¹⁴C dùng cho vật liệu hữu cơ đến ~50.000 năm; định tuổi ²³⁸U cho thang thời gian địa chất.',
      'Nhiệt hạch giải phóng nhiều năng lượng hơn trên mỗi nucleon so với phân hạch nhưng cần nhiệt độ cao hơn nhiều.',
    ],
  },
}
