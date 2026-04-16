// UI translations for all non-lesson pages
// Usage: const { lang } = useLanguage(); const t = (k) => T[lang]?.[k] ?? T.en[k] ?? k

export const T = {
  en: {
    // ── Navbar ──────────────────────────────────────────────────────────────
    nav_home: 'Home',
    nav_periodic: 'Periodic Table',
    nav_lessons: 'Lessons',
    nav_quiz: 'Quiz',
    nav_balancer: 'Equation Balancer',
    nav_reactions: 'Reactions',
    nav_graph: 'Reaction Graph',
    nav_close_menu: 'Close menu',
    nav_toggle_menu: 'Toggle menu',

    // ── Home ─────────────────────────────────────────────────────────────────
    home_hero_title: 'Master High School',
    home_hero_title_accent: 'Chemistry',
    home_hero_sub: 'Interactive lessons, quizzes, a full periodic table and equation balancer — everything you need to ace your chemistry exams.',
    home_start_quiz: 'Start Quiz',
    home_explore_table: 'Explore Periodic Table',
    home_progress_title: 'Your Progress',
    home_tests_passed: 'tests passed',
    home_not_started: 'Not started',
    home_features_title: '',
    home_topics_title: 'Topics Covered',

    // ── Home feature cards ────────────────────────────────────────────────────
    home_feat_pt_title: 'Interactive Periodic Table',
    home_feat_pt_desc: 'Explore all 118 elements with properties, electron configurations, and detailed descriptions.',
    home_feat_les_title: 'Topic Lessons',
    home_feat_les_desc: 'Study Atomic Structure, Chemical Bonding, Stoichiometry, Acids & Bases, and Chemical Reactions.',
    home_feat_quiz_title: 'Practice Quizzes',
    home_feat_quiz_desc: 'Test yourself with 10 difficulty-graded tests per topic (100 questions each) — from Very Easy to Expert.',
    home_feat_bal_title: 'Equation Balancer',
    home_feat_bal_desc: 'Enter any chemical equation and get it balanced step-by-step instantly.',
    home_feat_rx_title: 'Reaction Library',
    home_feat_rx_desc: 'Search 200+ reactions by element or compound — see balanced equations, types, conditions, and explanations.',
    home_feat_graph_title: 'Reaction Chain Graph',
    home_feat_graph_desc: 'Explore an interactive force-directed graph showing how every element and compound is connected through reactions.',

    // ── Lessons landing ───────────────────────────────────────────────────────
    lessons_title: 'Lessons',
    lessons_sub: 'Select a topic to study. Each lesson covers key concepts, worked examples, and tips for exams.',

    // ── Lesson topics (landing card data) ────────────────────────────────────
    topic_atomic_title: 'Atomic Structure',
    topic_atomic_summary: 'Protons, neutrons, electrons, isotopes, electron configuration, and quantum numbers.',
    topic_atomic_tags: ['Subatomic particles', 'Isotopes & mass number', 'Electron configuration', 'Bohr model', 'Quantum numbers'],

    topic_bonding_title: 'Chemical Bonding',
    topic_bonding_summary: 'Ionic, covalent and metallic bonds, Lewis structures, VSEPR, polarity, and intermolecular forces.',
    topic_bonding_tags: ['Ionic bonds', 'Covalent bonds', 'Lewis structures', 'VSEPR theory', 'Polarity & IMFs'],

    topic_reactions_title: 'Chemical Reactions',
    topic_reactions_summary: 'Reaction types, redox, balancing equations, reaction rates, activation energy, and enthalpy.',
    topic_reactions_tags: ['Reaction types', 'Redox reactions', 'Balancing equations', 'Reaction rates', 'Enthalpy & ΔH'],

    topic_stoich_title: 'Stoichiometry',
    topic_stoich_summary: 'The mole concept, molar mass, mole ratios, limiting reagents, percent yield, and concentration.',
    topic_stoich_tags: ['The mole & Avogadro', 'Molar mass', 'Mole ratios', 'Limiting reagents', 'Percent yield'],

    topic_acids_title: 'Acids & Bases',
    topic_acids_summary: 'Arrhenius, Brønsted–Lowry and Lewis definitions, pH scale, strong vs weak, titration, and buffers.',
    topic_acids_tags: ['Definitions (Arrhenius, B-L, Lewis)', 'pH & pOH', 'Strong vs weak', 'Neutralisation', 'Buffers & titration'],

    topic_thermo_title: 'Thermochemistry',
    topic_thermo_summary: "Enthalpy, calorimetry (q = mcΔT), Hess's Law, bond energies, standard enthalpies, and Gibbs free energy.",
    topic_thermo_tags: ['Enthalpy & ΔH', 'Calorimetry', "Hess's Law", 'Bond energies', 'Gibbs free energy'],

    topic_gases_title: 'Gases',
    topic_gases_summary: "Kinetic molecular theory, Boyle's, Charles's and ideal gas laws, Dalton's law, and Graham's law.",
    topic_gases_tags: ['Kinetic molecular theory', "Boyle's & Charles's laws", 'Ideal gas law PV=nRT', "Dalton's law", "Graham's law"],

    topic_organic_title: 'Organic Chemistry',
    topic_organic_summary: 'Hydrocarbons, IUPAC naming, functional groups, isomers, key reaction types, and polymers.',
    topic_organic_tags: ['Hydrocarbons', 'IUPAC naming', 'Functional groups', 'Reaction types', 'Polymers'],

    topic_nuclear_title: 'Nuclear Chemistry',
    topic_nuclear_summary: 'Radioactive decay (α, β, γ), half-life calculations, nuclear fission and fusion, and mass–energy equivalence.',
    topic_nuclear_tags: ['Radioactive decay', 'Half-life', 'Nuclear equations', 'Fission & fusion', 'E = mc²'],

    // ── Quiz ─────────────────────────────────────────────────────────────────
    quiz_title: 'Chemistry Quiz',
    quiz_choose_topic: 'Choose a Topic',
    quiz_choose_sub: 'Select a topic to see available tests',
    quiz_choose_test: 'Choose a Test',
    quiz_back_topics: '← Topics',
    quiz_back_tests: '← Tests',
    quiz_all_tests: 'All Tests',
    quiz_change_topic: 'Change Topic',
    quiz_difficulty: 'Difficulty',
    quiz_questions: 'questions',
    quiz_best: 'Best',
    quiz_passed: 'Passed',
    quiz_not_attempted: 'Not attempted',
    quiz_start: 'Start Test',
    quiz_q_of: 'of',
    quiz_lock_answer: 'Lock in Answer',
    quiz_submit: 'Submit Quiz',
    quiz_loading: 'Loading questions…',
    quiz_results_title: 'Test Complete!',
    quiz_score: 'Score',
    quiz_retry: 'Retry Test',
    quiz_next_test: 'Next Test',
    quiz_explanation: 'Explanation',
    quiz_your_answer: 'Your answer',
    quiz_correct_answer: 'Correct answer',
    quiz_review: 'Review',
    quiz_no_questions: 'No questions found.',
    quiz_coming_soon: 'Quiz coming soon',

    // ── Periodic Table ────────────────────────────────────────────────────────
    pt_title: 'Periodic Table',
    pt_all_categories: 'All categories',
    pt_category: 'Category',
    pt_group: 'Group',
    pt_period: 'Period',
    pt_mass: 'Mass',
    pt_electron_config: 'Electron configuration',

    // ── Equation Balancer ─────────────────────────────────────────────────────
    bal_title: 'Equation Balancer',
    bal_sub: 'Enter any chemical equation to balance it instantly',
    bal_label: 'Enter equation (use → or -> for the arrow, + between compounds):',
    bal_placeholder: 'e.g. H2 + O2 -> H2O',
    bal_tip: 'Tip: use capital letters for elements. Parentheses supported: Ca(OH)2, Al2(SO4)3.',
    bal_balance_btn: 'Balance',
    bal_try_example: 'Try an example:',
    bal_result_title: 'Balanced Equation',
    bal_atom_check: 'Atom balance check',
    bal_element: 'Element',
    bal_left: 'Left',
    bal_right: 'Right',
    bal_balanced: '✓',
    bal_steps_title: 'Step-by-step coefficients',
    bal_mol_ratios: 'Mole ratios',
    bal_error_empty: 'Please enter a chemical equation.',

    // ── Reactions ────────────────────────────────────────────────────────────
    rx_title: 'Reaction Library',
    rx_sub_prefix: 'reactions — search by element symbol or compound formula',
    rx_placeholder: 'e.g.  Fe  ·  NaOH  ·  H2SO4  ·  CO2',
    rx_clear: 'Clear',
    rx_all_types: 'All types',
    rx_elements: 'Elements involved:',
    rx_compounds: 'Compounds:',
    rx_no_results: 'No reactions found for',
    rx_showing: 'Showing',
    rx_show_all: 'Show all',
    rx_results: 'results',

    // ── Reaction Graph ────────────────────────────────────────────────────────
    rg_title: 'Reaction Chain Graph',
    rg_search: 'Search formula…',
    rg_all: 'All',
    rg_nodes: 'nodes',
    rg_edges: 'edges',
    rg_fit: 'Fit view',
    rg_legend: 'Legend',
    rg_element: 'Element',
    rg_compound: 'Compound',
    rg_node_size: 'Node size = reaction count',
    rg_hint: 'Click a node to see its reactions',
    rg_pure_element: '⚡ Pure element',
    rg_compound_label: '🧪 Compound',
    rg_reactions: 'reactions',
    rg_laying_out: 'Laying out graph…',

    // ── Shared lesson UI ──────────────────────────────────────────────────────
    lesson_back: '← All Lessons',
    lesson_exam_tips: 'Exam Tips',
    lesson_quiz_btn: 'Quiz',
    lesson_quiz_coming: 'Quiz coming soon',
  },

  vi: {
    // ── Navbar ──────────────────────────────────────────────────────────────
    nav_home: 'Trang chủ',
    nav_periodic: 'Bảng tuần hoàn',
    nav_lessons: 'Bài học',
    nav_quiz: 'Kiểm tra',
    nav_balancer: 'Cân bằng phương trình',
    nav_reactions: 'Thư viện phản ứng',
    nav_graph: 'Sơ đồ phản ứng',
    nav_close_menu: 'Đóng menu',
    nav_toggle_menu: 'Mở/đóng menu',

    // ── Home ─────────────────────────────────────────────────────────────────
    home_hero_title: 'Học tốt Hóa học',
    home_hero_title_accent: 'THPT',
    home_hero_sub: 'Bài học tương tác, bài kiểm tra, bảng tuần hoàn đầy đủ và công cụ cân bằng phương trình — tất cả những gì bạn cần để xuất sắc trong các kỳ thi hóa học.',
    home_start_quiz: 'Làm bài kiểm tra',
    home_explore_table: 'Khám phá bảng tuần hoàn',
    home_progress_title: 'Tiến độ của bạn',
    home_tests_passed: 'bài đã qua',
    home_not_started: 'Chưa bắt đầu',
    home_features_title: '',
    home_topics_title: 'Các chủ đề',

    // ── Home feature cards ────────────────────────────────────────────────────
    home_feat_pt_title: 'Bảng Tuần Hoàn Tương Tác',
    home_feat_pt_desc: 'Khám phá tất cả 118 nguyên tố với tính chất, cấu hình electron và mô tả chi tiết.',
    home_feat_les_title: 'Bài Học Theo Chủ Đề',
    home_feat_les_desc: 'Học Cấu trúc nguyên tử, Liên kết hóa học, Tính toán hóa học, Axit & Bazơ và Phản ứng hóa học.',
    home_feat_quiz_title: 'Kiểm Tra Luyện Tập',
    home_feat_quiz_desc: 'Tự kiểm tra với 10 bài thi phân cấp độ khó mỗi chủ đề (100 câu hỏi mỗi bài) — từ Rất dễ đến Chuyên gia.',
    home_feat_bal_title: 'Cân Bằng Phương Trình',
    home_feat_bal_desc: 'Nhập bất kỳ phương trình hóa học và nhận kết quả cân bằng theo từng bước ngay lập tức.',
    home_feat_rx_title: 'Thư Viện Phản Ứng',
    home_feat_rx_desc: 'Tìm kiếm hơn 200 phản ứng theo nguyên tố hoặc hợp chất — xem phương trình cân bằng, loại, điều kiện và giải thích.',
    home_feat_graph_title: 'Sơ Đồ Chuỗi Phản Ứng',
    home_feat_graph_desc: 'Khám phá sơ đồ lực hướng tương tác cho thấy cách mọi nguyên tố và hợp chất kết nối qua các phản ứng.',

    // ── Lessons landing ───────────────────────────────────────────────────────
    lessons_title: 'Bài Học',
    lessons_sub: 'Chọn một chủ đề để học. Mỗi bài học bao gồm các khái niệm chính, ví dụ thực tế và mẹo thi cử.',

    // ── Lesson topics ─────────────────────────────────────────────────────────
    topic_atomic_title: 'Cấu Trúc Nguyên Tử',
    topic_atomic_summary: 'Proton, neutron, electron, đồng vị, cấu hình electron và số lượng tử.',
    topic_atomic_tags: ['Hạt hạ nguyên tử', 'Đồng vị & số khối', 'Cấu hình electron', 'Mô hình Bohr', 'Số lượng tử'],

    topic_bonding_title: 'Liên Kết Hóa Học',
    topic_bonding_summary: 'Liên kết ion, cộng hóa trị và kim loại, cấu trúc Lewis, thuyết VSEPR, độ phân cực và lực liên phân tử.',
    topic_bonding_tags: ['Liên kết ion', 'Liên kết cộng hóa trị', 'Cấu trúc Lewis', 'Thuyết VSEPR', 'Phân cực & lực LPT'],

    topic_reactions_title: 'Phản Ứng Hóa Học',
    topic_reactions_summary: 'Các loại phản ứng, oxi hóa-khử, cân bằng phương trình, tốc độ phản ứng, năng lượng hoạt hóa và entanpi.',
    topic_reactions_tags: ['Loại phản ứng', 'Phản ứng oxi hóa-khử', 'Cân bằng phương trình', 'Tốc độ phản ứng', 'Entanpi & ΔH'],

    topic_stoich_title: 'Tính Toán Hóa Học',
    topic_stoich_summary: 'Khái niệm mol, khối lượng mol, tỉ lệ mol, chất phản ứng hạn chế, hiệu suất phần trăm và nồng độ.',
    topic_stoich_tags: ['Mol & Avogadro', 'Khối lượng mol', 'Tỉ lệ mol', 'Chất phản ứng hạn chế', 'Hiệu suất phần trăm'],

    topic_acids_title: 'Axit và Bazơ',
    topic_acids_summary: 'Định nghĩa Arrhenius, Brønsted–Lowry và Lewis, thang pH, axit/bazơ mạnh/yếu, chuẩn độ và dung dịch đệm.',
    topic_acids_tags: ['Định nghĩa (Arrhenius, B-L, Lewis)', 'pH & pOH', 'Mạnh vs yếu', 'Trung hòa', 'Đệm & chuẩn độ'],

    topic_thermo_title: 'Nhiệt Hóa Học',
    topic_thermo_summary: 'Entanpi, nhiệt lượng kế (q = mcΔT), định luật Hess, năng lượng liên kết, entanpi tiêu chuẩn và năng lượng Gibbs.',
    topic_thermo_tags: ['Entanpi & ΔH', 'Nhiệt lượng kế', 'Định luật Hess', 'Năng lượng liên kết', 'Năng lượng Gibbs'],

    topic_gases_title: 'Chất Khí',
    topic_gases_summary: 'Thuyết động học phân tử, định luật Boyle, Charles, khí lý tưởng, định luật Dalton và định luật Graham.',
    topic_gases_tags: ['Thuyết động học PT', 'Định luật Boyle & Charles', 'Khí lý tưởng PV=nRT', 'Định luật Dalton', 'Định luật Graham'],

    topic_organic_title: 'Hóa Học Hữu Cơ',
    topic_organic_summary: 'Hiđrocacbon, danh pháp IUPAC, nhóm chức, đồng phân, các loại phản ứng chính và polime.',
    topic_organic_tags: ['Hiđrocacbon', 'Danh pháp IUPAC', 'Nhóm chức', 'Loại phản ứng', 'Polime'],

    topic_nuclear_title: 'Hóa Học Hạt Nhân',
    topic_nuclear_summary: 'Phân rã phóng xạ (α, β, γ), tính toán chu kỳ bán rã, phân hạch và nhiệt hạch hạt nhân, hệ thức E = mc².',
    topic_nuclear_tags: ['Phân rã phóng xạ', 'Chu kỳ bán rã', 'Phương trình hạt nhân', 'Phân hạch & nhiệt hạch', 'E = mc²'],

    // ── Quiz ─────────────────────────────────────────────────────────────────
    quiz_title: 'Kiểm Tra Hóa Học',
    quiz_choose_topic: 'Chọn Chủ Đề',
    quiz_choose_sub: 'Chọn một chủ đề để xem các bài kiểm tra',
    quiz_choose_test: 'Chọn Bài Kiểm Tra',
    quiz_back_topics: '← Chủ đề',
    quiz_back_tests: '← Bài kiểm tra',
    quiz_all_tests: 'Tất cả bài kiểm tra',
    quiz_change_topic: 'Đổi chủ đề',
    quiz_difficulty: 'Độ khó',
    quiz_questions: 'câu hỏi',
    quiz_best: 'Cao nhất',
    quiz_passed: 'Đạt',
    quiz_not_attempted: 'Chưa làm',
    quiz_start: 'Bắt đầu',
    quiz_q_of: 'trong',
    quiz_lock_answer: 'Xác nhận đáp án',
    quiz_submit: 'Nộp bài',
    quiz_loading: 'Đang tải câu hỏi…',
    quiz_results_title: 'Hoàn thành bài kiểm tra!',
    quiz_score: 'Điểm',
    quiz_retry: 'Làm lại bài',
    quiz_next_test: 'Bài tiếp theo',
    quiz_explanation: 'Giải thích',
    quiz_your_answer: 'Đáp án của bạn',
    quiz_correct_answer: 'Đáp án đúng',
    quiz_review: 'Xem lại',
    quiz_no_questions: 'Không tìm thấy câu hỏi.',
    quiz_coming_soon: 'Sắp có bài kiểm tra',

    // ── Periodic Table ────────────────────────────────────────────────────────
    pt_title: 'Bảng Tuần Hoàn',
    pt_all_categories: 'Tất cả nhóm',
    pt_category: 'Nhóm',
    pt_group: 'Nhóm',
    pt_period: 'Chu kỳ',
    pt_mass: 'Khối lượng',
    pt_electron_config: 'Cấu hình electron',

    // ── Equation Balancer ─────────────────────────────────────────────────────
    bal_title: 'Cân Bằng Phương Trình',
    bal_sub: 'Nhập bất kỳ phương trình hóa học để cân bằng ngay lập tức',
    bal_label: 'Nhập phương trình (dùng → hoặc -> cho mũi tên, + giữa các chất):',
    bal_placeholder: 'vd: H2 + O2 -> H2O',
    bal_tip: 'Mẹo: dùng chữ hoa cho ký hiệu nguyên tố. Hỗ trợ dấu ngoặc: Ca(OH)2, Al2(SO4)3.',
    bal_balance_btn: 'Cân bằng',
    bal_try_example: 'Thử ví dụ:',
    bal_result_title: 'Phương Trình Đã Cân Bằng',
    bal_atom_check: 'Kiểm tra bảo toàn nguyên tử',
    bal_element: 'Nguyên tố',
    bal_left: 'Trái',
    bal_right: 'Phải',
    bal_balanced: '✓',
    bal_steps_title: 'Hệ số từng bước',
    bal_mol_ratios: 'Tỉ lệ mol',
    bal_error_empty: 'Vui lòng nhập phương trình hóa học.',

    // ── Reactions ────────────────────────────────────────────────────────────
    rx_title: 'Thư Viện Phản Ứng',
    rx_sub_prefix: 'phản ứng — tìm theo ký hiệu nguyên tố hoặc công thức hợp chất',
    rx_placeholder: 'vd:  Fe  ·  NaOH  ·  H2SO4  ·  CO2',
    rx_clear: 'Xóa',
    rx_all_types: 'Tất cả loại',
    rx_elements: 'Nguyên tố liên quan:',
    rx_compounds: 'Hợp chất:',
    rx_no_results: 'Không tìm thấy phản ứng cho',
    rx_showing: 'Hiển thị',
    rx_show_all: 'Hiển thị tất cả',
    rx_results: 'kết quả',

    // ── Reaction Graph ────────────────────────────────────────────────────────
    rg_title: 'Sơ Đồ Chuỗi Phản Ứng',
    rg_search: 'Tìm công thức…',
    rg_all: 'Tất cả',
    rg_nodes: 'nút',
    rg_edges: 'cạnh',
    rg_fit: 'Vừa khung',
    rg_legend: 'Chú giải',
    rg_element: 'Nguyên tố',
    rg_compound: 'Hợp chất',
    rg_node_size: 'Kích thước nút = số phản ứng',
    rg_hint: 'Nhấn vào nút để xem các phản ứng',
    rg_pure_element: '⚡ Nguyên tố thuần',
    rg_compound_label: '🧪 Hợp chất',
    rg_reactions: 'phản ứng',
    rg_laying_out: 'Đang vẽ sơ đồ…',

    // ── Shared lesson UI ──────────────────────────────────────────────────────
    lesson_back: '← Tất cả bài học',
    lesson_exam_tips: 'Mẹo thi cử',
    lesson_quiz_btn: 'Kiểm tra',
    lesson_quiz_coming: 'Sắp có bài kiểm tra',
  },
}

export function useT() {
  // This is a utility — import useLanguage separately and call useT inside component
  // Usage: import {T} from '...'; const t = k => T[lang]?.[k] ?? T.en[k] ?? k
}
