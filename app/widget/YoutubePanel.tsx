// src/components/YoutubePanel.tsx 또는 .jsx
import React from 'react';
import { Youtube, Send, Save } from 'lucide-react';

interface YoutubePanelProps {
  youtubeUrl: string;
  youtubeTitle: string;
  youtubeSummary: string;
}

const YoutubePanel: React.FC<YoutubePanelProps> = ({
  youtubeUrl,
  youtubeTitle,
  youtubeSummary,
}) => {
  // YouTube URL에서 비디오 ID 추출 함수 (간단한 예시)
  const getEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    const videoId = videoIdMatch ? videoIdMatch[1] : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
  };

  const embedUrl = getEmbedUrl(youtubeUrl);

  return (
    <div className="fixed right-0 top-0 h-full w-[350px] bg-neutral-900 p-6 flex flex-col">
      <h2 className="text-xl font-bold mb-4 text-white flex items-center">
        <Youtube size={24} className="mr-2 text-red-500" /> YouTube 콘텐츠
      </h2>

      {embedUrl ? (
        <div className="aspect-video w-full mb-4 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
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

      <div className="flex justify-between items-center mt-auto border-t border-neutral-700 pt-4 gap-2">
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-neutral-400 hover:text-white transition-colors border border-neutral-700 rounded-lg">
          <Save size={18} />
          <span>저장</span>
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-lg">
          <Send size={18} />
          <span>퍼블리시</span>
        </button>
      </div>
    </div>
  );
};

export default YoutubePanel;