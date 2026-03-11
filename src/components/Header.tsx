import { CATEGORIES } from '../constants/categories';

interface Props {
    selectedCategory?: string;
    onSelect: (category?: string) => void;
}

const Header = ({ selectedCategory, onSelect }: Props) => {
    return (
        <header className="w-full shadow-sm">
            {/* 상단 바 */}
            <div className="bg-[#2b2b2b] text-white">
                <div className='flex items-center justify-between px-8 py-4'>
                    {/* 로고 */}
                    <div className='flex items-center gap-2'>
                        <span className='text-xl'>📰</span>
                        <h1 className="text-[1.4rem] font-bold tracking-wide">
                            World News
                        </h1>
                    </div>
                    {/* 검색창 */}
                    <div className='relative'>
                        <input
                            type='text'
                            placeholder='🔍️ what to search for'
                            className='w-70 px-4 py-2 rounded-md bg-white text-black text-black outline-none'
                        />
                    </div>

                </div>
            </div>

            {/* 카테고리 메뉴 */}
            <div className='border-b border-gray-200 bg-white'>
                <nav className='flex gap-24 px-16 py-5 text-base text-[1.2rem] font-semibold'>

                    {CATEGORIES.map((cat) => {
                        const isActive = selectedCategory === cat.value;

                        return (
                            <button
                                key={cat.label}
                                onClick={() => onSelect(cat.value)}
                                className={`relative pb-1 transition-colors duration-200
                                    ${isActive
                                        ? `text-orange-500 font-semibold`
                                        : `text-gray-600 hover:text-black`
                                    }
                                    `}
                            >
                                {cat.label}
                                {isActive && (
                                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-500" />
                                )}
                            </button>
                        )
                    })}

                </nav>
            </div>
        </header>
    );
};

export default Header;