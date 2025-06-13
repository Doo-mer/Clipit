"use client";

// src/components/YoutubePanel.tsx 또는 .jsx
import React, { useState } from 'react';
import { Send, Save } from 'lucide-react';
import { useRouter } from 'next/navigation';
import PublishModal from './PublishModal';

interface SummaryPanelProps {
  title: string;
  summary: string;
  imageLink: string;
  isViewer: boolean;
}

const SummaryPanel: React.FC<SummaryPanelProps> = ({
  title,
  summary,
  imageLink,
  isViewer
}) => {
  const router = useRouter();
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
  console.log(title, summary, imageLink)

  return (
    <div className="fixed right-0 top-0 h-full w-[350px] p-6 flex flex-col pt-20">
      {(
        <div className="w-full aspect-video rounded-lg overflow-hidden mb-4 h-30">
          <img
            src={imageLink}
            alt="Preview"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <h3 className="text-2xl font-semibold mb-2 text-white">{title || '제목'}</h3>

      <div className="text-[0.925rem] text-neutral-400 mb-4 overflow-y-auto flex-grow custom-scrollbar pr-2 leading-6 mt-2">
        <p className="whitespace-pre-wrap">{summary || '여기에 요약 내용이 표시됩니다.'}</p>
      </div>
      {
        !isViewer &&
        <div className="flex justify-between items-center mt-auto border-t border-neutral-700 pt-4 gap-2">
          <button
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-neutral-400 hover:text-white transition-colors border border-neutral-700 rounded-lg"
          >
            <Save size={18} />
            <span>저장</span>
          </button>
          <button
            onClick={() => setIsPublishModalOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-lg"
          >
            <Send size={18} />
            <span>퍼블리시</span>
          </button>
        </div>
      }

      <PublishModal
        isOpen={isPublishModalOpen}
        onClose={() => setIsPublishModalOpen(false)}
      />
    </div>
  );
};

export default SummaryPanel;