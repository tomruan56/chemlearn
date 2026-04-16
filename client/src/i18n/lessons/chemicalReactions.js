export const chemicalReactionsData = {
  icon: '⚗️',
  quizTopic: 'chemical_reactions',
  theme: {
    heading: 'text-red-400',
    border: 'border-red-500',
    term: 'text-red-300',
    formula: 'text-red-200',
    link: 'text-red-400',
  },
  en: {
    title: 'Chemical Reactions',
    subtitle: 'Types, rates, redox, and energy changes',
    sections: [
      {
        title: '1. Types of Chemical Reactions',
        blocks: [
          { type: 'table',
            headers: ['Type', 'Pattern', 'Description', 'Example'],
            rows: [
              ['Synthesis', 'A + B → AB', 'Two or more substances combine into one.', '2Mg + O₂ → 2MgO'],
              ['Decomposition', 'AB → A + B', 'One compound breaks into simpler products.', 'CaCO₃ → CaO + CO₂'],
              ['Single Displacement', 'A + BC → AC + B', 'One element replaces another in a compound.', 'Zn + CuSO₄ → ZnSO₄ + Cu'],
              ['Double Displacement', 'AB + CD → AD + CB', 'Two compounds exchange ions.', 'AgNO₃ + NaCl → AgCl↓ + NaNO₃'],
              ['Combustion', 'Fuel + O₂ → CO₂ + H₂O', 'Rapid reaction with oxygen, releases heat/light.', 'CH₄ + 2O₂ → CO₂ + 2H₂O'],
              ['Neutralisation', 'Acid + Base → Salt + Water', 'H⁺ and OH⁻ ions combine.', 'HCl + NaOH → NaCl + H₂O'],
            ]
          },
        ],
      },
      {
        title: '2. Balancing Chemical Equations',
        blocks: [
          { type: 'p', html: 'A balanced equation has the same number of each atom on both sides (conservation of mass).' },
          { type: 'ol', items: [
            'Write unbalanced equation with correct formulas.',
            'Count atoms of each element on each side.',
            'Adjust coefficients (never subscripts!) to balance.',
            'Start with the most complex molecule; leave H and O for last.',
            'Verify all atoms balance and coefficients are whole numbers in lowest ratio.',
          ]},
          { type: 'code', lines: [
            { text: 'Unbalanced: C₃H₈ + O₂ → CO₂ + H₂O', color: 'text-gray-400' },
            { text: 'Balanced:   C₃H₈ + 5O₂ → 3CO₂ + 4H₂O', color: 'text-yellow-300' },
            { text: 'Check: C 3=3 ✓  H 8=8 ✓  O 10=10 ✓', color: 'text-green-300' },
          ]},
        ],
      },
      {
        title: '3. Redox Reactions',
        blocks: [
          { type: 'p', html: 'Redox reactions involve the transfer of electrons — one species is oxidised and another is reduced simultaneously.' },
          { type: 'mnemonic', title: 'OIL RIG', sub: 'Oxidation Is Loss  |  Reduction Is Gain (of electrons)' },
          { type: 'keybox', term: 'Oxidation number', def: 'A number assigned to each atom in a compound based on electron ownership rules. Increase = oxidised; decrease = reduced.' },
          { type: 'ul', items: [
            'Free element: 0 (e.g. Fe, O₂, Cl₂)',
            'Monoatomic ion: equals its charge (e.g. Na⁺ = +1)',
            'O is usually −2 (except in peroxides: −1)',
            'H is +1 when bonded to nonmetals, −1 in metal hydrides',
            'Sum of oxidation numbers = overall charge on species',
          ]},
          { type: 'keybox', term: 'Reducing agent', def: 'The species that is oxidised (loses electrons) — it reduces the other species.' },
          { type: 'keybox', term: 'Oxidising agent', def: 'The species that is reduced (gains electrons) — it oxidises the other species.' },
        ],
      },
      {
        title: '4. Reaction Rates',
        blocks: [
          { type: 'p', html: 'Reaction rate is the change in concentration of a reactant or product per unit time.' },
          { type: 'grid', cols: 2, items: [
            { title: '🌡️ Temperature', body: 'More particles have energy ≥ Eₐ. Rate roughly doubles every 10 °C rise.' },
            { title: '📈 Concentration', body: 'More particles per unit volume → more frequent collisions.' },
            { title: '🔬 Surface area', body: 'Smaller particles expose more surface → more collision sites.' },
            { title: '⚗️ Catalyst', body: 'Provides alternative pathway with lower activation energy.' },
          ]},
          { type: 'keybox', term: 'Activation energy (Eₐ)', def: 'The minimum energy that colliding particles must have for a reaction to occur.' },
          { type: 'keybox', term: 'Collision theory', def: 'Reactions occur when particles collide with sufficient energy AND correct orientation.' },
        ],
      },
      {
        title: '5. Energy Changes & Enthalpy',
        blocks: [
          { type: 'p', html: 'Chemical reactions involve breaking bonds (endothermic) and forming bonds (exothermic). The net energy change is the enthalpy change (ΔH).' },
          { type: 'twobox', items: [
            { bg: 'bg-red-900/30', borderCol: 'border-red-700', title: '🔥 Exothermic', titleColor: 'text-red-300', sub: 'ΔH < 0', sub_color: 'text-yellow-300', body: 'Energy released to surroundings. Examples: combustion, neutralisation' },
            { bg: 'bg-blue-900/30', borderCol: 'border-blue-700', title: '❄️ Endothermic', titleColor: 'text-blue-300', sub: 'ΔH > 0', sub_color: 'text-cyan-300', body: 'Energy absorbed from surroundings. Examples: photosynthesis, dissolving NH₄NO₃' },
          ]},
          { type: 'info', bg: 'bg-red-900/20', borderCol: 'border-red-800', title: 'Hess\'s Law:', titleColor: 'text-red-300', formula: 'ΔH = Σ ΔHf°(products) − Σ ΔHf°(reactants)', note: 'Total enthalpy change is the same regardless of the route taken.' },
        ],
      },
    ],
    examTips: [
      'In combustion, always balance C first, then H, then O.',
      'The oxidising agent is reduced; the reducing agent is oxidised — do not mix them up!',
      'A catalyst lowers Eₐ but does NOT change ΔH or the position of equilibrium.',
      'OIL RIG is the most important mnemonic in redox chemistry — commit it to memory.',
    ],
  },

  vi: {
    title: 'Phản Ứng Hóa Học',
    subtitle: 'Phân loại, tốc độ, oxi hóa-khử và biến đổi năng lượng',
    sections: [
      {
        title: '1. Phân Loại Phản Ứng Hóa Học',
        blocks: [
          { type: 'table',
            headers: ['Loại', 'Dạng tổng quát', 'Mô tả', 'Ví dụ'],
            rows: [
              ['Tổng hợp', 'A + B → AB', 'Hai hay nhiều chất kết hợp thành một sản phẩm.', '2Mg + O₂ → 2MgO'],
              ['Phân hủy', 'AB → A + B', 'Một hợp chất phân hủy thành các sản phẩm đơn giản hơn.', 'CaCO₃ → CaO + CO₂'],
              ['Thế đơn', 'A + BC → AC + B', 'Một nguyên tố thay thế nguyên tố khác trong hợp chất.', 'Zn + CuSO₄ → ZnSO₄ + Cu'],
              ['Thế đôi', 'AB + CD → AD + CB', 'Hai hợp chất trao đổi ion cho nhau.', 'AgNO₃ + NaCl → AgCl↓ + NaNO₃'],
              ['Đốt cháy', 'Nhiên liệu + O₂ → CO₂ + H₂O', 'Phản ứng nhanh với oxi, giải phóng nhiệt/ánh sáng.', 'CH₄ + 2O₂ → CO₂ + 2H₂O'],
              ['Trung hòa', 'Axit + Bazơ → Muối + H₂O', 'Ion H⁺ và OH⁻ kết hợp với nhau.', 'HCl + NaOH → NaCl + H₂O'],
            ]
          },
        ],
      },
      {
        title: '2. Cân Bằng Phương Trình Hóa Học',
        blocks: [
          { type: 'p', html: 'Phương trình cân bằng có số lượng mỗi nguyên tử bằng nhau ở cả hai vế (bảo toàn khối lượng).' },
          { type: 'ol', items: [
            'Viết phương trình chưa cân bằng với công thức đúng.',
            'Đếm số nguyên tử của mỗi nguyên tố ở cả hai vế.',
            'Điều chỉnh hệ số (không bao giờ thay đổi chỉ số!) để cân bằng.',
            'Bắt đầu với phân tử phức tạp nhất; để H và O sau cùng.',
            'Kiểm tra tất cả nguyên tử đã cân bằng và hệ số là số nguyên dương nhỏ nhất.',
          ]},
          { type: 'code', lines: [
            { text: 'Chưa cân bằng: C₃H₈ + O₂ → CO₂ + H₂O', color: 'text-gray-400' },
            { text: 'Đã cân bằng:   C₃H₈ + 5O₂ → 3CO₂ + 4H₂O', color: 'text-yellow-300' },
            { text: 'Kiểm tra: C 3=3 ✓  H 8=8 ✓  O 10=10 ✓', color: 'text-green-300' },
          ]},
        ],
      },
      {
        title: '3. Phản Ứng Oxi Hóa–Khử',
        blocks: [
          { type: 'p', html: 'Phản ứng oxi hóa–khử liên quan đến sự chuyển electron — một chất bị oxi hóa và một chất bị khử đồng thời.' },
          { type: 'mnemonic', title: 'Chất khử bị oxi hóa — Chất oxi hóa bị khử', sub: 'Mất electron = bị oxi hóa | Nhận electron = bị khử' },
          { type: 'keybox', term: 'Số oxi hóa', def: 'Số được gán cho mỗi nguyên tử trong hợp chất dựa trên quy tắc sở hữu electron. Tăng = bị oxi hóa; giảm = bị khử.' },
          { type: 'ul', items: [
            'Đơn chất: 0 (ví dụ: Fe, O₂, Cl₂)',
            'Ion đơn nguyên tử: bằng điện tích của nó (ví dụ: Na⁺ = +1)',
            'O thường là −2 (trừ trong peroxit: −1)',
            'H là +1 khi liên kết với phi kim, −1 trong hidrua kim loại',
            'Tổng số oxi hóa = điện tích chung của hợp chất',
          ]},
          { type: 'keybox', term: 'Chất khử', def: 'Chất bị oxi hóa (mất electron) — nó khử chất kia.' },
          { type: 'keybox', term: 'Chất oxi hóa', def: 'Chất bị khử (nhận electron) — nó oxi hóa chất kia.' },
        ],
      },
      {
        title: '4. Tốc Độ Phản Ứng',
        blocks: [
          { type: 'p', html: 'Tốc độ phản ứng là sự thay đổi nồng độ chất phản ứng hoặc sản phẩm theo thời gian.' },
          { type: 'grid', cols: 2, items: [
            { title: '🌡️ Nhiệt độ', body: 'Nhiều phân tử có năng lượng ≥ Eₐ. Tốc độ tăng gấp đôi khi nhiệt độ tăng 10°C.' },
            { title: '📈 Nồng độ', body: 'Nhiều hạt hơn trong một đơn vị thể tích → va chạm nhiều hơn.' },
            { title: '🔬 Diện tích bề mặt', body: 'Hạt nhỏ hơn lộ ra nhiều bề mặt hơn → nhiều vị trí va chạm hơn.' },
            { title: '⚗️ Chất xúc tác', body: 'Cung cấp con đường phản ứng thay thế với năng lượng hoạt hóa thấp hơn.' },
          ]},
          { type: 'keybox', term: 'Năng lượng hoạt hóa (Eₐ)', def: 'Năng lượng tối thiểu mà các hạt va chạm phải có để phản ứng xảy ra.' },
          { type: 'keybox', term: 'Thuyết va chạm', def: 'Phản ứng xảy ra khi các hạt va chạm với đủ năng lượng VÀ đúng hướng.' },
        ],
      },
      {
        title: '5. Biến Đổi Năng Lượng & Entanpi',
        blocks: [
          { type: 'p', html: 'Phản ứng hóa học bao gồm phá vỡ liên kết (thu nhiệt) và tạo liên kết (tỏa nhiệt). Biến đổi năng lượng ròng là biến thiên entanpi (ΔH).' },
          { type: 'twobox', items: [
            { bg: 'bg-red-900/30', borderCol: 'border-red-700', title: '🔥 Tỏa nhiệt', titleColor: 'text-red-300', sub: 'ΔH < 0', sub_color: 'text-yellow-300', body: 'Giải phóng nhiệt ra môi trường. Ví dụ: đốt cháy, trung hòa' },
            { bg: 'bg-blue-900/30', borderCol: 'border-blue-700', title: '❄️ Thu nhiệt', titleColor: 'text-blue-300', sub: 'ΔH > 0', sub_color: 'text-cyan-300', body: 'Hấp thụ nhiệt từ môi trường. Ví dụ: quang hợp, hòa tan NH₄NO₃' },
          ]},
          { type: 'info', bg: 'bg-red-900/20', borderCol: 'border-red-800', title: 'Định luật Hess:', titleColor: 'text-red-300', formula: 'ΔH = Σ ΔHf°(sản phẩm) − Σ ΔHf°(chất đầu)', note: 'Biến thiên entanpi tổng không phụ thuộc vào con đường phản ứng.' },
        ],
      },
    ],
    examTips: [
      'Trong phản ứng đốt cháy, luôn cân bằng C trước, sau đó H, rồi O.',
      'Chất oxi hóa bị khử; chất khử bị oxi hóa — đừng nhầm lẫn!',
      'Chất xúc tác làm giảm Eₐ nhưng KHÔNG thay đổi ΔH hay vị trí cân bằng.',
      'Ghi nhớ: chất mất electron là chất khử, chất nhận electron là chất oxi hóa.',
    ],
  },
}
