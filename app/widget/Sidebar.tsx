// components/Sidebar.tsx

export default function Sidebar() {
    return (
      <aside className="w-64 bg-[#1E1E1E] text-white p-4 space-y-4 sticky top-23 h-fit overflow-y-auto custom-scrollbar rounded-2xl">
        <div className="flex items-center space-x-4">
          <span role="img" aria-label="icon">🍕</span>
          <h2 className="text-xl font-semibold">관심 카테고리</h2>
        </div>
  
        <nav className="space-y-2 text-sm">
          <ul className="space-y-3 pl-2">
            {[
              'Javascript',
              'React',
              'Node.js',
              'Java',
              'Python',
              'Infra Structure',
              'Database',
              'Android',
              'iOS',
            ].map((item) => (
              <li key={item} className="hover:text-white text-gray-400 cursor-pointer text-lg">
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    );
  }
  