// components/Sidebar.tsx

const categories = [
  '프로그래밍',
  '디자인',
  '마케팅',
  '비즈니스',
  '개발자 생존기',
  'AI/ML',
  '프론트엔드',
  '백엔드',
  '데이터 사이언스',
  '클라우드'
];

export default function Sidebar() {
    return (
      <aside className="w-64 bg-[#1E1E1E] text-white p-4 space-y-4 sticky top-23 h-fit overflow-y-auto custom-scrollbar rounded-2xl">
        <div className="flex items-center space-x-4">
          <span role="img" aria-label="icon">🍕</span>
          <h2 className="text-xl font-semibold">주제</h2>
        </div>
  
        <nav className="space-y-2 text-sm">
          <ul className="space-y-3 pl-2">
            {categories.map((item) => (
              <li key={item} className="hover:text-white hover:ml-2 text-gray-400 cursor-pointer text-lg duration-200">
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    );
  }
  