"use client"

import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useState } from 'react'
// import YoutubePanel from '../../widget/YoutubePanel'; // YoutubePanel 컴포넌트 경로에 맞게 수정

export default function NewPostPage() { // 컴포넌트 이름 변경
    const [title, setTitle] = useState('');
    const [tagInput, setTagInput] = useState('');
    const [tags, setTags] = useState<string[]>(['실천', '인정']);

    // YouTube 패널에 전달할 상태 추가
    const [youtubeVideoUrl, setYoutubeVideoUrl] = useState('https://www.youtube.com/watch?v=dQw4w9WgXcQ'); // 예시 URL
    const [youtubeVideoTitle, setYoutubeVideoTitle] = useState('Rick Astley - Never Gonna Give You Up (Official Music Video)');
    const [youtubeVideoSummary, setYoutubeVideoSummary] = useState(
        '유명한 릭롤링(Rickrolling) 밈의 원조인 릭 애슬리의 "Never Gonna Give You Up" 공식 뮤직 비디오입니다. 이 곡은 1987년에 발매되어 전 세계적으로 큰 인기를 끌었으며, 중독성 있는 멜로디와 애슬리의 독특한 보컬로 현재까지도 많은 사랑을 받고 있습니다.'
    );

    return (
        <div className="flex flex-col h-screen bg-neutral-900 text-white">

            {/* Main Content Area */}
            <div className="flex flex-1 overflow-hidden">
                {/* Editor and Title/Tags Section */}
                <div className="flex-1 flex flex-col p-8 overflow-y-auto">
                    <div
                        className="w-full text-4xl font-bold mb-4 bg-transparent outline-none placeholder-neutral-600 text-white"
                    >
                        안녕하세요
                    </div>
                    <div className="border-b border-neutral-700 mb-6"></div>

                    <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="flex items-center text-blue-400 text-[1rem] px-3 py-1 rounded-full bg-neutral-800"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* MenuBar and EditorContent */}
                    <div className="flex-grow overflow-y-auto custom-scrollbar pr-4">
                        김규민입니다
                    </div>
                </div>

                {/* Categories and other Widgets Area */}
                <div className="w-[350px]  border-neutral-800 overflow-y-auto flex flex-col">
                    {/* Categories Section (Placeholder)*/}
                    {/* YouTube Panel */}
                     {/* <YoutubePanel
                        youtubeUrl={youtubeVideoUrl}
                        youtubeTitle={youtubeVideoTitle}
                        youtubeSummary={youtubeVideoSummary}
                        isViewer={false}
                    /> */}
                </div>
            </div>
        </div>
    )
}