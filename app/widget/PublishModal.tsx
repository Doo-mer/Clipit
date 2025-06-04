import React from 'react';
import { X, Check, Share2, Plus, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface PublishModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PublishModal: React.FC<PublishModalProps> = ({ isOpen, onClose }) => {
    const router = useRouter();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-neutral-900 w-[550px] rounded-xl p-6 flex flex-col z-4">
                {/* 헤더 */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-white">퍼블리시</h2>
                    <button onClick={onClose} className="text-neutral-400 hover:text-white">
                        <X size={24} />
                    </button>
                </div>

                {/* 메인 컨텐츠 */}
                <div className="flex gap-6 flex-col mb-4">
                    {/* 썸네일 영역 */}
                    <div className="w-[500px] h-[270px] bg-neutral-800 rounded-lg flex items-center justify-center">
                        <span className="text-neutral-500">썸네일 선택</span>
                    </div>

                    {/* 우측 컨트롤 영역 */}
                    <div className="flex-1 flex flex-col">
                        <div className="space-y-4">
                            <button className="w-full flex items-center gap-2 px-4 py-2 text-neutral-400 hover:bg-neutral-800 transition-colors rounded-lg">
                                <Plus size={20} />
                                <span>시리즈 추가</span>
                            </button>
                            <button className="w-full flex items-center gap-2 px-4 py-2 text-neutral-400 hover:bg-neutral-800 transition-colors rounded-lg">
                                <Globe size={20} />
                                <span>공개</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* 하단 버튼 영역 */}
                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-neutral-400 hover:bg-neutral-800 transition-colors rounded-lg"
                    >
                        나가기
                    </button>
                    <button
                        onClick={() => router.push('/')}
                        className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-lg flex items-center gap-2"
                    >
                        <Check size={20} />
                        <span>확인</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PublishModal; 