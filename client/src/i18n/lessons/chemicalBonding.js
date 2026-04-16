export const chemicalBondingData = {
  icon: '🔗',
  quizTopic: 'chemical_bonding',
  theme: {
    heading: 'text-purple-400',
    border: 'border-purple-500',
    term: 'text-purple-300',
    formula: 'text-purple-200',
    link: 'text-purple-400',
  },
  en: {
    title: 'Chemical Bonding',
    subtitle: 'How atoms join together',
    sections: [
      {
        title: '1. Ionic Bonds',
        blocks: [
          { type: 'p', html: 'Ionic bonds form when one atom <strong class="text-white">transfers electrons</strong> to another, creating oppositely charged ions that attract each other by electrostatic force.' },
          { type: 'keybox', term: 'Cation', def: 'Positively charged ion formed when a metal loses electrons. Na → Na⁺ + e⁻' },
          { type: 'keybox', term: 'Anion', def: 'Negatively charged ion formed when a non-metal gains electrons. Cl + e⁻ → Cl⁻' },
          { type: 'code', lines: [
            { text: 'Na (2,8,1) → Na⁺ (2,8) — loses 1 electron', color: 'text-yellow-300' },
            { text: 'Cl (2,8,7) → Cl⁻ (2,8,8) — gains 1 electron', color: 'text-yellow-300' },
            { text: 'Na⁺ + Cl⁻ → NaCl lattice (electrostatic attraction)', color: 'text-green-300' },
          ]},
          { type: 'p', html: '<strong class="text-white">Properties:</strong> High melting/boiling points, conduct electricity when molten or dissolved, form crystalline lattices.' },
        ],
      },
      {
        title: '2. Covalent Bonds',
        blocks: [
          { type: 'p', html: 'Covalent bonds form when atoms <strong class="text-white">share electrons</strong>. Each shared pair counts as one bond.' },
          { type: 'grid', cols: 3, items: [
            { title: 'Single bond', sub: 'H–H', info: 'σ bond, 2 shared e⁻' },
            { title: 'Double bond', sub: 'O=O', info: 'σ + π, 4 shared e⁻' },
            { title: 'Triple bond', sub: 'N≡N', info: 'σ + 2π, 6 shared e⁻' },
          ]},
          { type: 'keybox', term: 'Electronegativity', def: "A measure of an atom's ability to attract bonding electrons. Increases across a period and up a group. F is highest (4.0)." },
          { type: 'keybox', term: 'Polar covalent', def: 'When atoms have different electronegativities (ΔEN 0.4–1.7). Electrons are pulled toward the more electronegative atom, creating partial charges (δ+ and δ−). Example: H–Cl.' },
          { type: 'keybox', term: 'Nonpolar covalent', def: 'When atoms have equal or very similar electronegativities (ΔEN < 0.4). Example: H–H, Cl–Cl.' },
        ],
      },
      {
        title: '3. Lewis Structures',
        blocks: [
          { type: 'p', html: 'Lewis structures show valence electrons as dots and bonding pairs as lines.' },
          { type: 'ol', items: [
            'Count total valence electrons.',
            'Place the least electronegative atom in the centre.',
            'Connect atoms with single bonds.',
            'Complete octets on outer atoms with lone pairs.',
            'Place remaining electrons on central atom.',
            'Form double/triple bonds if central atom needs more electrons.',
          ]},
          { type: 'code', lines: [
            { text: 'H₂O: H–Ö–H (O has 2 lone pairs)', color: 'text-yellow-300' },
            { text: 'CO₂: O=C=O (each O has 2 lone pairs)', color: 'text-yellow-300' },
            { text: 'NH₃: H–N–H with lone pair on N', color: 'text-yellow-300' },
          ]},
        ],
      },
      {
        title: '4. VSEPR Theory',
        blocks: [
          { type: 'p', html: 'Valence Shell Electron Pair Repulsion (VSEPR): electron pairs repel each other and arrange to maximise distance. Lone pairs repel more than bonding pairs.' },
          { type: 'table',
            headers: ['Bonding pairs', 'Lone pairs', 'Shape', 'Bond angle', 'Example'],
            rows: [
              ['2', '0', 'Linear', '180°', 'CO₂, BeCl₂'],
              ['3', '0', 'Trigonal planar', '120°', 'BF₃, SO₃'],
              ['4', '0', 'Tetrahedral', '109.5°', 'CH₄, CCl₄'],
              ['3', '1', 'Trigonal pyramidal', '~107°', 'NH₃'],
              ['2', '2', 'Bent', '~104.5°', 'H₂O'],
            ]
          },
        ],
      },
      {
        title: '5. Molecular Polarity & Intermolecular Forces',
        blocks: [
          { type: 'p', html: 'A molecule is polar if it has polar bonds AND an asymmetric shape (dipoles do not cancel).' },
          { type: 'keybox', term: 'Hydrogen bonding', def: 'Strong dipole–dipole interaction between δ+ H and a lone pair on N, O, or F. Explains water\'s high boiling point.' },
          { type: 'keybox', term: 'Dipole–dipole', def: 'Attraction between polar molecules. Stronger with larger polarity.' },
          { type: 'keybox', term: 'London dispersion forces', def: 'Weak temporary dipoles in all molecules. Increase with molecular size/surface area.' },
          { type: 'keybox', term: 'Metallic bonding', def: "Metals consist of a lattice of positive ions surrounded by a 'sea' of delocalised electrons. This explains electrical conductivity, thermal conductivity, malleability, and ductility." },
        ],
      },
    ],
    examTips: [
      'Always check if molecular shape is symmetric before deciding polarity.',
      'Lone pairs reduce bond angles by ~2.5° each from ideal tetrahedral.',
      'Bond strength: triple > double > single; bond length: triple < double < single.',
      'Hydrogen bonding requires H bonded directly to N, O, or F — not just any polar bond.',
    ],
  },

  vi: {
    title: 'Liên Kết Hóa Học',
    subtitle: 'Cách các nguyên tử liên kết với nhau',
    sections: [
      {
        title: '1. Liên Kết Ion',
        blocks: [
          { type: 'p', html: 'Liên kết ion hình thành khi một nguyên tử <strong class="text-white">nhường electron</strong> cho nguyên tử khác, tạo ra các ion trái dấu hút nhau bằng lực tĩnh điện.' },
          { type: 'keybox', term: 'Cation', def: 'Ion mang điện tích dương, hình thành khi kim loại mất electron. Na → Na⁺ + e⁻' },
          { type: 'keybox', term: 'Anion', def: 'Ion mang điện tích âm, hình thành khi phi kim nhận electron. Cl + e⁻ → Cl⁻' },
          { type: 'code', lines: [
            { text: 'Na (2,8,1) → Na⁺ (2,8) — mất 1 electron', color: 'text-yellow-300' },
            { text: 'Cl (2,8,7) → Cl⁻ (2,8,8) — nhận 1 electron', color: 'text-yellow-300' },
            { text: 'Na⁺ + Cl⁻ → mạng tinh thể NaCl (lực hút tĩnh điện)', color: 'text-green-300' },
          ]},
          { type: 'p', html: '<strong class="text-white">Tính chất:</strong> Nhiệt độ nóng chảy/sôi cao, dẫn điện khi nóng chảy hoặc hòa tan, hình thành mạng tinh thể.' },
        ],
      },
      {
        title: '2. Liên Kết Cộng Hóa Trị',
        blocks: [
          { type: 'p', html: 'Liên kết cộng hóa trị hình thành khi các nguyên tử <strong class="text-white">dùng chung electron</strong>. Mỗi cặp electron dùng chung tạo thành một liên kết.' },
          { type: 'grid', cols: 3, items: [
            { title: 'Liên kết đơn', sub: 'H–H', info: 'Liên kết σ, 2 e⁻ dùng chung' },
            { title: 'Liên kết đôi', sub: 'O=O', info: 'σ + π, 4 e⁻ dùng chung' },
            { title: 'Liên kết ba', sub: 'N≡N', info: 'σ + 2π, 6 e⁻ dùng chung' },
          ]},
          { type: 'keybox', term: 'Độ âm điện', def: 'Khả năng của một nguyên tử hút electron liên kết về phía mình. Tăng theo chiều từ trái sang phải và từ dưới lên trên trong bảng tuần hoàn. F có độ âm điện cao nhất (4,0).' },
          { type: 'keybox', term: 'Liên kết cộng hóa trị có cực', def: 'Khi các nguyên tử có độ âm điện khác nhau (ΔEN 0,4–1,7). Electron bị kéo về phía nguyên tử có độ âm điện lớn hơn, tạo ra điện tích riêng phần (δ+ và δ−). Ví dụ: H–Cl.' },
          { type: 'keybox', term: 'Liên kết cộng hóa trị không cực', def: 'Khi các nguyên tử có độ âm điện bằng nhau hoặc gần bằng nhau (ΔEN < 0,4). Ví dụ: H–H, Cl–Cl.' },
        ],
      },
      {
        title: '3. Cấu Trúc Lewis',
        blocks: [
          { type: 'p', html: 'Cấu trúc Lewis biểu diễn các electron hóa trị bằng dấu chấm và các cặp liên kết bằng gạch ngang.' },
          { type: 'ol', items: [
            'Đếm tổng số electron hóa trị.',
            'Đặt nguyên tử có độ âm điện thấp nhất ở trung tâm.',
            'Nối các nguyên tử bằng liên kết đơn.',
            'Hoàn thành octet cho các nguyên tử ngoài bằng cặp electron không liên kết.',
            'Đặt electron còn lại lên nguyên tử trung tâm.',
            'Tạo liên kết đôi/ba nếu nguyên tử trung tâm cần thêm electron.',
          ]},
          { type: 'code', lines: [
            { text: 'H₂O: H–Ö–H (O có 2 cặp electron không liên kết)', color: 'text-yellow-300' },
            { text: 'CO₂: O=C=O (mỗi O có 2 cặp electron không liên kết)', color: 'text-yellow-300' },
            { text: 'NH₃: H–N–H với 1 cặp electron không liên kết trên N', color: 'text-yellow-300' },
          ]},
        ],
      },
      {
        title: '4. Thuyết VSEPR',
        blocks: [
          { type: 'p', html: 'Thuyết đẩy cặp electron hóa trị (VSEPR): các cặp electron đẩy nhau và sắp xếp để tối đa hóa khoảng cách. Cặp electron không liên kết đẩy mạnh hơn cặp liên kết.' },
          { type: 'table',
            headers: ['Cặp liên kết', 'Cặp tự do', 'Hình dạng', 'Góc liên kết', 'Ví dụ'],
            rows: [
              ['2', '0', 'Đường thẳng', '180°', 'CO₂, BeCl₂'],
              ['3', '0', 'Tam giác phẳng', '120°', 'BF₃, SO₃'],
              ['4', '0', 'Tứ diện', '109,5°', 'CH₄, CCl₄'],
              ['3', '1', 'Chóp tam giác', '~107°', 'NH₃'],
              ['2', '2', 'Gấp khúc', '~104,5°', 'H₂O'],
            ]
          },
        ],
      },
      {
        title: '5. Phân Tử Có Cực & Lực Liên Phân Tử',
        blocks: [
          { type: 'p', html: 'Phân tử có cực khi có liên kết cực VÀ hình dạng bất đối xứng (các lưỡng cực không triệt tiêu nhau).' },
          { type: 'keybox', term: 'Liên kết hydro', def: 'Tương tác lưỡng cực–lưỡng cực mạnh giữa H mang δ+ và cặp electron tự do trên N, O, hoặc F. Giải thích nhiệt độ sôi cao của nước.' },
          { type: 'keybox', term: 'Lực lưỡng cực–lưỡng cực', def: 'Lực hút giữa các phân tử có cực. Mạnh hơn khi độ phân cực lớn hơn.' },
          { type: 'keybox', term: 'Lực phân tán London', def: 'Lưỡng cực tạm thời yếu trong tất cả các phân tử. Tăng theo kích thước/diện tích bề mặt phân tử.' },
          { type: 'keybox', term: 'Liên kết kim loại', def: 'Kim loại gồm mạng lưới ion dương được bao quanh bởi "biển" electron tự do. Giải thích tính dẫn điện, dẫn nhiệt, tính dẻo và tính uốn được.' },
        ],
      },
    ],
    examTips: [
      'Luôn kiểm tra hình dạng phân tử có đối xứng không trước khi xác định tính phân cực.',
      'Mỗi cặp electron tự do làm giảm góc liên kết khoảng 2,5° so với tứ diện lý tưởng.',
      'Độ bền liên kết: ba > đôi > đơn; độ dài liên kết: ba < đôi < đơn.',
      'Liên kết hydro yêu cầu H liên kết trực tiếp với N, O, hoặc F — không phải bất kỳ liên kết có cực nào.',
    ],
  },
}
