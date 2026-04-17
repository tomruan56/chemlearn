export const organicChemistryData = {
  icon: '🧬',
  quizTopic: 'organic_chemistry',
  theme: {
    heading: 'text-pink-400',
    border: 'border-pink-500',
    term: 'text-pink-300',
    formula: 'text-pink-200',
    link: 'text-pink-400',
  },
  en: {
    title: 'Organic Chemistry',
    subtitle: 'Carbon compounds, naming, and reactions',
    sections: [
      {
        title: '1. Introduction to Organic Chemistry',
        blocks: [
          { type: 'p', html: 'Organic chemistry is the study of carbon-containing compounds. Carbon is unique because it forms 4 stable covalent bonds and can chain together into long molecules, rings, and branched structures.' },
          { type: 'keybox', term: 'Hydrocarbon', def: 'An organic compound containing only carbon and hydrogen atoms. The simplest organic molecules.' },
          { type: 'keybox', term: 'Homologous series', def: 'A family of compounds with the same general formula, differing by –CH₂– units. Each member has similar chemical properties but gradually changing physical properties (e.g., boiling point increases with chain length).' },
          { type: 'table',
            headers: ['Series', 'General Formula', 'Bond type', 'Example'],
            rows: [
              ['Alkanes', 'CₙH₂ₙ₊₂', 'C–C single only', 'CH₄, C₂H₆, C₃H₈'],
              ['Alkenes', 'CₙH₂ₙ', 'One C=C double bond', 'C₂H₄, C₃H₆'],
              ['Alkynes', 'CₙH₂ₙ₋₂', 'One C≡C triple bond', 'C₂H₂, C₃H₄'],
              ['Cycloalkanes', 'CₙH₂ₙ', 'Ring of C–C bonds', 'Cyclopropane C₃H₆'],
            ]
          },
        ],
      },
      {
        title: '2. IUPAC Naming of Hydrocarbons',
        blocks: [
          { type: 'p', html: 'IUPAC names use a <strong class="text-white">root</strong> (chain length) + <strong class="text-white">suffix</strong> (bond type) + <strong class="text-white">prefix</strong> (substituents).' },
          { type: 'table',
            headers: ['Root', 'Carbon atoms', 'Alkane name'],
            rows: [
              ['meth-', '1', 'methane'],
              ['eth-', '2', 'ethane'],
              ['prop-', '3', 'propane'],
              ['but-', '4', 'butane'],
              ['pent-', '5', 'pentane'],
              ['hex-', '6', 'hexane'],
            ]
          },
          { type: 'ol', items: [
            'Find the longest carbon chain — this gives the root name.',
            'Number the chain from the end closest to the first branch.',
            'Name substituents (branches) as prefixes with position numbers: methyl (–CH₃), ethyl (–C₂H₅).',
            'Use di-, tri-, tetra- for multiple identical substituents.',
            'For alkenes/alkynes, indicate position of double/triple bond (e.g., but-2-ene).',
          ]},
          { type: 'code', lines: [
            { text: 'CH₃–CH(CH₃)–CH₂–CH₃  →  2-methylbutane', color: 'text-pink-300' },
            { text: 'CH₂=CH–CH₃  →  prop-1-ene (propene)', color: 'text-pink-300' },
          ]},
        ],
      },
      {
        title: '3. Functional Groups',
        blocks: [
          { type: 'p', html: 'Functional groups are specific atoms or arrangements of atoms that determine the chemical behaviour of organic molecules.' },
          { type: 'table',
            headers: ['Functional Group', 'Structure', 'Suffix/Prefix', 'Example'],
            rows: [
              ['Alcohol (–OH)', 'C–OH', '-ol', 'ethanol CH₃CH₂OH'],
              ['Aldehyde (–CHO)', 'C–CH=O', '-al', 'ethanal CH₃CHO'],
              ['Ketone (C=O)', 'C–CO–C', '-one', 'propanone CH₃COCH₃'],
              ['Carboxylic acid', 'C–COOH', '-oic acid', 'ethanoic acid CH₃COOH'],
              ['Ester (–COO–)', 'C–COO–C', '-oate', 'ethyl ethanoate'],
              ['Amine (–NH₂)', 'C–NH₂', '-amine', 'methylamine CH₃NH₂'],
              ['Halogenoalkane', 'C–X (X=halogen)', 'halo-', 'chloromethane CH₃Cl'],
            ]
          },
          { type: 'keybox', term: 'Isomers', def: 'Compounds with the same molecular formula but different structural arrangements. Structural isomers differ in connectivity; stereoisomers differ in 3D arrangement.' },
        ],
      },
      {
        title: '4. Key Reaction Types',
        blocks: [
          { type: 'p', html: 'Organic reactions follow predictable patterns based on functional groups and bond types.' },
          { type: 'code', lines: [
            { text: 'Substitution (alkanes + halogens, UV light):', color: 'text-white' },
            { text: 'CH₄ + Cl₂ →(UV) CH₃Cl + HCl   (free-radical substitution)', color: 'text-gray-300' },
          ]},
          { type: 'code', lines: [
            { text: 'Addition (alkenes — break the C=C):', color: 'text-white' },
            { text: 'CH₂=CH₂ + H₂ → CH₃–CH₃   (hydrogenation, Ni catalyst)', color: 'text-gray-300' },
            { text: 'CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br   (bromine water decolourises)', color: 'text-gray-300' },
            { text: 'CH₂=CH₂ + H₂O → CH₃CH₂OH   (hydration → ethanol)', color: 'text-gray-300' },
          ]},
          { type: 'code', lines: [
            { text: 'Elimination (alcohols → alkenes):', color: 'text-white' },
            { text: 'CH₃CH₂OH →(H₃PO₄, heat) CH₂=CH₂ + H₂O', color: 'text-gray-300' },
          ]},
          { type: 'code', lines: [
            { text: 'Esterification (acid + alcohol ⇌ ester + water):', color: 'text-white' },
            { text: 'CH₃COOH + CH₃CH₂OH ⇌ CH₃COOC₂H₅ + H₂O   (H⁺ catalyst)', color: 'text-gray-300' },
          ]},
        ],
      },
      {
        title: '5. Polymers',
        blocks: [
          { type: 'p', html: 'Polymers are large molecules formed by joining many small repeat units (monomers).' },
          { type: 'table',
            headers: ['Type', 'How formed', 'Example'],
            rows: [
              ['Addition polymer', 'Alkene monomers add across C=C; no by-product', 'Poly(ethene) from ethene'],
              ['Condensation polymer', 'Monomers with two functional groups react, losing H₂O or HCl', 'Nylon, polyester'],
            ]
          },
          { type: 'code', lines: [
            { text: 'n CH₂=CH₂  →  –(CH₂–CH₂)ₙ–   (poly(ethene) / polyethylene)', color: 'text-gray-300' },
          ]},
          { type: 'keybox', term: 'Biodegradability', def: 'Addition polymers (e.g., polyethylene) are not easily broken down. Condensation polymers (with ester or amide links) can be hydrolysed and are more biodegradable.' },
        ],
      },
    ],
    examTips: [
      'Bromine water test: decolourises with alkenes (addition); no reaction with alkanes in cold/dark.',
      'Primary alcohols oxidise to aldehydes then carboxylic acids; secondary alcohols give ketones; tertiary alcohols resist oxidation.',
      'Always number the carbon chain from the end nearest the first substituent or functional group.',
      'Esterification is reversible — use excess acid/alcohol or remove product to improve yield.',
      'Addition polymers have no by-product; condensation polymers release H₂O or HCl per bond formed.',
    ],
  },

  vi: {
    title: 'Hóa Học Hữu Cơ',
    subtitle: 'Hợp chất carbon, danh pháp và phản ứng',
    sections: [
      {
        title: '1. Giới Thiệu Về Hóa Học Hữu Cơ',
        blocks: [
          { type: 'p', html: 'Hóa học hữu cơ là nghiên cứu các hợp chất chứa carbon. Carbon đặc biệt vì tạo được 4 liên kết cộng hóa trị bền và có thể kết nối thành chuỗi dài, vòng và cấu trúc phân nhánh.' },
          { type: 'keybox', term: 'Hydrocacbon', def: 'Hợp chất hữu cơ chỉ chứa carbon và hydro. Đây là các phân tử hữu cơ đơn giản nhất.' },
          { type: 'keybox', term: 'Dãy đồng đẳng', def: 'Họ các hợp chất có cùng công thức tổng quát, hơn kém nhau nhóm –CH₂–. Các thành viên có tính chất hóa học tương tự nhưng tính chất vật lý thay đổi dần (ví dụ: nhiệt độ sôi tăng theo chiều dài mạch).' },
          { type: 'table',
            headers: ['Dãy', 'Công thức tổng quát', 'Loại liên kết', 'Ví dụ'],
            rows: [
              ['Ankan', 'CₙH₂ₙ₊₂', 'Chỉ có liên kết C–C đơn', 'CH₄, C₂H₆, C₃H₈'],
              ['Anken', 'CₙH₂ₙ', 'Một liên kết C=C đôi', 'C₂H₄, C₃H₆'],
              ['Ankyn', 'CₙH₂ₙ₋₂', 'Một liên kết C≡C ba', 'C₂H₂, C₃H₄'],
              ['Xicloankan', 'CₙH₂ₙ', 'Vòng liên kết C–C', 'Xiclopropan C₃H₆'],
            ]
          },
        ],
      },
      {
        title: '2. Danh Pháp IUPAC Của Hydrocacbon',
        blocks: [
          { type: 'p', html: 'Tên IUPAC dùng <strong class="text-white">gốc</strong> (độ dài mạch) + <strong class="text-white">hậu tố</strong> (loại liên kết) + <strong class="text-white">tiền tố</strong> (nhóm thế).' },
          { type: 'table',
            headers: ['Gốc', 'Số nguyên tử C', 'Tên ankan'],
            rows: [
              ['meth-', '1', 'metan'],
              ['eth-', '2', 'etan'],
              ['prop-', '3', 'propan'],
              ['but-', '4', 'butan'],
              ['pent-', '5', 'pentan'],
              ['hex-', '6', 'hexan'],
            ]
          },
          { type: 'ol', items: [
            'Tìm mạch carbon dài nhất — cho tên gốc.',
            'Đánh số mạch từ đầu gần nhánh đầu tiên nhất.',
            'Đặt tên nhóm thế (nhánh) làm tiền tố kèm số vị trí: metyl (–CH₃), etyl (–C₂H₅).',
            'Dùng đi-, tri-, tetra- cho nhiều nhóm thế giống nhau.',
            'Với anken/ankyn, ghi vị trí liên kết đôi/ba (ví dụ: but-2-en).',
          ]},
          { type: 'code', lines: [
            { text: 'CH₃–CH(CH₃)–CH₂–CH₃  →  2-metylbutan', color: 'text-pink-300' },
            { text: 'CH₂=CH–CH₃  →  prop-1-en (propen)', color: 'text-pink-300' },
          ]},
        ],
      },
      {
        title: '3. Nhóm Chức',
        blocks: [
          { type: 'p', html: 'Nhóm chức là các nguyên tử hoặc nhóm nguyên tử đặc trưng quyết định tính chất hóa học của phân tử hữu cơ.' },
          { type: 'table',
            headers: ['Nhóm chức', 'Cấu trúc', 'Hậu tố/Tiền tố', 'Ví dụ'],
            rows: [
              ['Ancol (–OH)', 'C–OH', '-ol', 'etanol CH₃CH₂OH'],
              ['Anđehit (–CHO)', 'C–CH=O', '-al', 'etanal CH₃CHO'],
              ['Xeton (C=O)', 'C–CO–C', '-on', 'propanon CH₃COCH₃'],
              ['Axit cacboxylic', 'C–COOH', '-oic axit', 'axit etanoic CH₃COOH'],
              ['Este (–COO–)', 'C–COO–C', '-oat', 'etyl etanoat'],
              ['Amin (–NH₂)', 'C–NH₂', '-amin', 'metylamit CH₃NH₂'],
              ['Dẫn xuất halogen', 'C–X (X=halogen)', 'halo-', 'clometan CH₃Cl'],
            ]
          },
          { type: 'keybox', term: 'Đồng phân', def: 'Các hợp chất có cùng công thức phân tử nhưng cấu trúc khác nhau. Đồng phân cấu tạo khác về cách kết nối; đồng phân lập thể khác về sắp xếp trong không gian.' },
        ],
      },
      {
        title: '4. Các Loại Phản Ứng Chính',
        blocks: [
          { type: 'p', html: 'Các phản ứng hữu cơ tuân theo các quy luật dự đoán được dựa trên nhóm chức và loại liên kết.' },
          { type: 'code', lines: [
            { text: 'Thế (ankan + halogen, tia UV):', color: 'text-white' },
            { text: 'CH₄ + Cl₂ →(UV) CH₃Cl + HCl   (thế gốc tự do)', color: 'text-gray-300' },
          ]},
          { type: 'code', lines: [
            { text: 'Cộng (anken — phá liên kết C=C):', color: 'text-white' },
            { text: 'CH₂=CH₂ + H₂ → CH₃–CH₃   (hidro hóa, xúc tác Ni)', color: 'text-gray-300' },
            { text: 'CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br   (nước brom mất màu)', color: 'text-gray-300' },
            { text: 'CH₂=CH₂ + H₂O → CH₃CH₂OH   (hidrat hóa → etanol)', color: 'text-gray-300' },
          ]},
          { type: 'code', lines: [
            { text: 'Tách (ancol → anken):', color: 'text-white' },
            { text: 'CH₃CH₂OH →(H₃PO₄, nung) CH₂=CH₂ + H₂O', color: 'text-gray-300' },
          ]},
          { type: 'code', lines: [
            { text: 'Este hóa (axit + ancol ⇌ este + nước):', color: 'text-white' },
            { text: 'CH₃COOH + CH₃CH₂OH ⇌ CH₃COOC₂H₅ + H₂O   (xúc tác H⁺)', color: 'text-gray-300' },
          ]},
        ],
      },
      {
        title: '5. Polime',
        blocks: [
          { type: 'p', html: 'Polime là các phân tử lớn được tạo thành bằng cách liên kết nhiều đơn vị nhỏ lặp lại (monome).' },
          { type: 'table',
            headers: ['Loại', 'Cách tạo thành', 'Ví dụ'],
            rows: [
              ['Polime cộng', 'Monome anken cộng qua C=C liên tục; không có sản phẩm phụ', 'Poli(eten) từ eten'],
              ['Polime ngưng tụ', 'Monome có hai nhóm chức phản ứng, loại bỏ H₂O hoặc HCl', 'Nilon, polyeste'],
            ]
          },
          { type: 'code', lines: [
            { text: 'n CH₂=CH₂  →  –(CH₂–CH₂)ₙ–   (poli(eten) / polyetylen)', color: 'text-gray-300' },
          ]},
          { type: 'keybox', term: 'Khả năng phân hủy sinh học', def: 'Polime cộng (ví dụ: polyetylen) khó bị phân hủy. Polime ngưng tụ (có liên kết este hoặc amit) có thể bị thủy phân và dễ phân hủy sinh học hơn.' },
        ],
      },
    ],
    examTips: [
      'Thử nghiệm nước brom: mất màu với anken (cộng); không phản ứng với ankan trong điều kiện lạnh/tối.',
      'Ancol bậc một oxi hóa thành anđehit rồi axit cacboxylic; ancol bậc hai tạo xeton; ancol bậc ba kháng oxi hóa.',
      'Luôn đánh số mạch carbon từ đầu gần nhóm thế hoặc nhóm chức đầu tiên nhất.',
      'Este hóa là thuận nghịch — dùng axit/ancol dư hoặc loại bỏ sản phẩm để tăng hiệu suất.',
      'Polime cộng không có sản phẩm phụ; polime ngưng tụ giải phóng H₂O hoặc HCl mỗi liên kết tạo thành.',
    ],
  },
}
