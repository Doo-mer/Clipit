"use client";

// src/components/YoutubePanel.tsx 또는 .jsx
import React, { useState } from 'react';
import { Youtube, Send, Save, X, Check, Share2, Plus, Lock, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';
import PublishModal from './PublishModal';

interface YoutubePanelProps {
  youtubeUrl: string;
  youtubeTitle: string;
  youtubeSummary: string;
  isViewer: boolean;
}

const YoutubePanel: React.FC<YoutubePanelProps> = ({
  youtubeUrl,
  youtubeTitle,
  youtubeSummary,
  isViewer
}) => {
  const router = useRouter();
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);

  // YouTube URL에서 비디오 ID 추출 함수 (간단한 예시)
  const getEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    const videoId = videoIdMatch ? videoIdMatch[1] : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
  };

  const embedUrl = getEmbedUrl(youtubeUrl);

  return (
    <div className="fixed right-0 top-0 h-full w-[350px] p-6 flex flex-col">
      {embedUrl ? (
        <div className="aspect-video w-full my-12 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src={embedUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="w-full aspect-video bg-neutral-800 flex items-center justify-center text-neutral-500 rounded-lg mb-4">
          유효한 YouTube URL을 입력해주세요.
        </div>
      )}

      <h3 className="text-2xl font-semibold mb-2 text-white">{youtubeTitle || 'YouTube 영상 제목'}</h3>

      <div className="text-[0.925rem] text-neutral-400 mb-4 overflow-y-auto flex-grow custom-scrollbar pr-2 leading-6 mt-2">
        <p className="whitespace-pre-wrap">{youtubeSummary || '여기에 3줄 요약 내용이 표시됩니다.'}</p>
      </div>
      {
        isViewer &&
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

export default YoutubePanel;