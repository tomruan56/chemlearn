export const atomicStructureData = {
  icon: '⚛️',
  quizTopic: 'atomic_structure',
  theme: {
    heading: 'text-blue-400',
    border: 'border-blue-500',
    term: 'text-blue-300',
    formula: 'text-blue-200',
    link: 'text-blue-400',
  },
  en: {
    title: 'Atomic Structure',
    subtitle: 'The building blocks of matter',
    sections: [
      {
        title: '1. Subatomic Particles',
        blocks: [
          { type: 'p', html: 'Every atom is made of three types of subatomic particles:' },
          { type: 'table',
            headers: ['Particle', 'Symbol', 'Charge', 'Relative Mass', 'Location'],
            rows: [
              ['Proton', 'p⁺', '+1', '1', 'Nucleus'],
              ['Neutron', 'n⁰', '0', '1', 'Nucleus'],
              ['Electron', 'e⁻', '−1', '1/1836', 'Shells around nucleus'],
            ]
          },
          { type: 'keybox', term: 'Atomic number (Z)', def: 'The number of protons in an atom. It uniquely identifies an element. Example: Carbon has Z = 6.' },
          { type: 'keybox', term: 'Mass number (A)', def: 'Total number of protons + neutrons. A = Z + N. Example: Carbon-12 has A = 12 (6p + 6n).' },
        ],
      },
      {
        title: '2. Isotopes',
        blocks: [
          { type: 'p', html: 'Isotopes are atoms of the same element with the <strong class="text-white">same number of protons</strong> but different numbers of neutrons. They have the same chemical properties but different masses.' },
          { type: 'code', lines: [
            { text: 'Carbon-12: 6 protons, 6 neutrons (stable, 98.9% of carbon)', color: 'text-green-300' },
            { text: 'Carbon-13: 6 protons, 7 neutrons (stable, 1.1% of carbon)', color: 'text-yellow-300' },
            { text: 'Carbon-14: 6 protons, 8 neutrons (radioactive — used in carbon dating)', color: 'text-red-300' },
          ]},
          { type: 'keybox', term: 'Relative atomic mass (Ar)', def: 'The weighted average mass of all isotopes of an element, relative to ¹²C = 12. For chlorine: Ar ≈ 35.5 (due to ³⁵Cl and ³⁷Cl).' },
        ],
      },
      {
        title: '3. Electron Configuration',
        blocks: [
          { type: 'p', html: 'Electrons are arranged in shells (energy levels) around the nucleus. Each shell holds a maximum number of electrons:' },
          { type: 'table',
            headers: ['Shell (n)', 'Max electrons (2n²)', 'Subshells'],
            rows: [['1','2','s'],['2','8','s, p'],['3','18','s, p, d'],['4','32','s, p, d, f']]
          },
          { type: 'p', html: 'Subshell capacities: <strong class="text-white">s = 2</strong> electrons, <strong class="text-white">p = 6</strong>, <strong class="text-white">d = 10</strong>, <strong class="text-white">f = 14</strong>.' },
          { type: 'p', html: '<strong class="text-white">Rules for filling electrons:</strong>' },
          { type: 'ul', items: [
            '<strong class="text-yellow-300">Aufbau principle:</strong> Fill from lowest to highest energy level.',
            '<strong class="text-yellow-300">Pauli exclusion:</strong> Max 2 electrons per orbital, with opposite spins.',
            '<strong class="text-yellow-300">Hund\'s rule:</strong> Fill each orbital singly before pairing.',
          ]},
          { type: 'code', lines: [
            { text: 'Na (Z=11): 1s² 2s² 2p⁶ 3s¹  or  [Ne] 3s¹', color: 'text-blue-300' },
            { text: 'Fe (Z=26): [Ar] 3d⁶ 4s²', color: 'text-blue-300' },
            { text: 'Cl (Z=17): [Ne] 3s² 3p⁵', color: 'text-blue-300' },
          ]},
        ],
      },
      {
        title: '4. The Bohr Model',
        blocks: [
          { type: 'p', html: 'Niels Bohr (1913) proposed that electrons orbit the nucleus in fixed energy levels. When an electron absorbs energy it jumps to a higher level; when it falls back it emits a photon of light.' },
          { type: 'info', bg: 'bg-blue-900/30', borderCol: 'border-blue-700', title: 'Energy of a photon emitted/absorbed:', titleColor: 'text-blue-200', formula: 'E = hf = hc/λ', note: "h = Planck's constant (6.626 × 10⁻³⁴ J·s)" },
          { type: 'p', html: 'The Bohr model works well for hydrogen but fails for multi-electron atoms. It was replaced by the quantum mechanical model.' },
        ],
      },
      {
        title: '5. Quantum Numbers',
        blocks: [
          { type: 'p', html: 'Each electron is described by four quantum numbers:' },
          { type: 'table',
            headers: ['Symbol', 'Name', 'Describes', 'Values'],
            rows: [
              ['n', 'Principal', 'Energy level / shell size', '1, 2, 3, …'],
              ['l', 'Angular momentum', 'Orbital shape', '0 to (n−1)'],
              ['mₗ', 'Magnetic', 'Orbital orientation', '−l to +l'],
              ['mₛ', 'Spin', 'Electron spin direction', '+½ or −½'],
            ]
          },
          { type: 'p', html: 'l = 0 → s orbital (sphere) &nbsp;|&nbsp; l = 1 → p orbital (dumbbell) &nbsp;|&nbsp; l = 2 → d orbital (cloverleaf)' },
        ],
      },
    ],
    examTips: [
      'Always write electron configs with noble-gas shorthand for period 4+ elements.',
      'Cr ([Ar] 3d⁵ 4s¹) and Cu ([Ar] 3d¹⁰ 4s¹) are common exceptions — half/fully filled d subshells are extra stable.',
      'Remember: ions lose electrons from the highest n first (e.g. Fe²⁺ loses both 4s electrons).',
      'Mass number − atomic number = neutron count.',
    ],
  },

  vi: {
    title: 'Cấu Trúc Nguyên Tử',
    subtitle: 'Các khối cơ bản của vật chất',
    sections: [
      {
        title: '1. Các Hạt Hạ Nguyên Tử',
        blocks: [
          { type: 'p', html: 'Mỗi nguyên tử được cấu tạo từ ba loại hạt hạ nguyên tử:' },
          { type: 'table',
            headers: ['Hạt', 'Ký hiệu', 'Điện tích', 'Khối lượng tương đối', 'Vị trí'],
            rows: [
              ['Proton', 'p⁺', '+1', '1', 'Hạt nhân'],
              ['Neutron', 'n⁰', '0', '1', 'Hạt nhân'],
              ['Electron', 'e⁻', '−1', '1/1836', 'Lớp vỏ xung quanh hạt nhân'],
            ]
          },
          { type: 'keybox', term: 'Số nguyên tử (Z)', def: 'Số proton trong một nguyên tử. Số nguyên tử xác định duy nhất một nguyên tố. Ví dụ: Carbon có Z = 6.' },
          { type: 'keybox', term: 'Số khối (A)', def: 'Tổng số proton + neutron. A = Z + N. Ví dụ: Carbon-12 có A = 12 (6p + 6n).' },
        ],
      },
      {
        title: '2. Đồng Vị',
        blocks: [
          { type: 'p', html: 'Đồng vị là các nguyên tử của cùng một nguyên tố có <strong class="text-white">cùng số proton</strong> nhưng khác số neutron. Chúng có tính chất hóa học giống nhau nhưng khối lượng khác nhau.' },
          { type: 'code', lines: [
            { text: 'Carbon-12: 6 proton, 6 neutron (bền, chiếm 98,9% carbon)', color: 'text-green-300' },
            { text: 'Carbon-13: 6 proton, 7 neutron (bền, chiếm 1,1% carbon)', color: 'text-yellow-300' },
            { text: 'Carbon-14: 6 proton, 8 neutron (phóng xạ — dùng trong định tuổi carbon)', color: 'text-red-300' },
          ]},
          { type: 'keybox', term: 'Nguyên tử khối trung bình (Ar)', def: 'Khối lượng trung bình có trọng số của tất cả đồng vị của một nguyên tố, tính theo ¹²C = 12. Ví dụ: Cl có Ar ≈ 35,5 (do ³⁵Cl và ³⁷Cl).' },
        ],
      },
      {
        title: '3. Cấu Hình Electron',
        blocks: [
          { type: 'p', html: 'Electron được sắp xếp trong các lớp (mức năng lượng) xung quanh hạt nhân. Số electron tối đa trong mỗi lớp:' },
          { type: 'table',
            headers: ['Lớp (n)', 'Số e tối đa (2n²)', 'Phân lớp'],
            rows: [['1','2','s'],['2','8','s, p'],['3','18','s, p, d'],['4','32','s, p, d, f']]
          },
          { type: 'p', html: 'Sức chứa phân lớp: <strong class="text-white">s = 2</strong> electron, <strong class="text-white">p = 6</strong>, <strong class="text-white">d = 10</strong>, <strong class="text-white">f = 14</strong>.' },
          { type: 'p', html: '<strong class="text-white">Các nguyên lý điền electron:</strong>' },
          { type: 'ul', items: [
            '<strong class="text-yellow-300">Nguyên lý Aufbau:</strong> Điền vào từ mức năng lượng thấp đến cao.',
            '<strong class="text-yellow-300">Nguyên lý Pauli:</strong> Mỗi obitan chứa tối đa 2 electron với spin ngược chiều.',
            '<strong class="text-yellow-300">Quy tắc Hund:</strong> Điền mỗi obitan một electron trước khi ghép đôi.',
          ]},
          { type: 'code', lines: [
            { text: 'Na (Z=11): 1s² 2s² 2p⁶ 3s¹  hay  [Ne] 3s¹', color: 'text-blue-300' },
            { text: 'Fe (Z=26): [Ar] 3d⁶ 4s²', color: 'text-blue-300' },
            { text: 'Cl (Z=17): [Ne] 3s² 3p⁵', color: 'text-blue-300' },
          ]},
        ],
      },
      {
        title: '4. Mô Hình Bohr',
        blocks: [
          { type: 'p', html: 'Niels Bohr (1913) đề xuất rằng electron chuyển động xung quanh hạt nhân theo các quỹ đạo có mức năng lượng cố định. Khi electron hấp thụ năng lượng, nó nhảy lên mức cao hơn; khi rơi xuống mức thấp hơn, nó phát ra photon ánh sáng.' },
          { type: 'info', bg: 'bg-blue-900/30', borderCol: 'border-blue-700', title: 'Năng lượng photon phát/hấp thụ:', titleColor: 'text-blue-200', formula: 'E = hf = hc/λ', note: 'h = hằng số Planck (6,626 × 10⁻³⁴ J·s)' },
          { type: 'p', html: 'Mô hình Bohr phù hợp với hydro nhưng không đúng cho nguyên tử nhiều electron. Nó được thay thế bằng mô hình cơ học lượng tử.' },
        ],
      },
      {
        title: '5. Số Lượng Tử',
        blocks: [
          { type: 'p', html: 'Mỗi electron được mô tả bằng bốn số lượng tử:' },
          { type: 'table',
            headers: ['Ký hiệu', 'Tên', 'Mô tả', 'Giá trị'],
            rows: [
              ['n', 'Chính', 'Mức năng lượng / kích thước lớp vỏ', '1, 2, 3, …'],
              ['l', 'Mômen góc', 'Hình dạng obitan', '0 đến (n−1)'],
              ['mₗ', 'Từ', 'Định hướng obitan', '−l đến +l'],
              ['mₛ', 'Spin', 'Chiều spin electron', '+½ hoặc −½'],
            ]
          },
          { type: 'p', html: 'l = 0 → obitan s (hình cầu) &nbsp;|&nbsp; l = 1 → obitan p (hình số 8) &nbsp;|&nbsp; l = 2 → obitan d' },
        ],
      },
    ],
    examTips: [
      'Luôn viết cấu hình electron dạng rút gọn với khí hiếm cho các nguyên tố chu kỳ 4 trở lên.',
      'Cr ([Ar] 3d⁵ 4s¹) và Cu ([Ar] 3d¹⁰ 4s¹) là các ngoại lệ phổ biến — phân lớp d nửa đầy hoặc đầy hoàn toàn rất bền.',
      'Lưu ý: ion mất electron từ lớp n cao nhất trước (ví dụ Fe²⁺ mất cả 2 electron 4s).',
      'Số khối − số nguyên tử = số neutron.',
    ],
  },
}
