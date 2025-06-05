import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import Typography from '@tiptap/extension-typography' // Typography 추가 (첫 번째 코드에 있었음)
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useState, useEffect, useRef } from 'react' // useRef 추가
import { marked } from 'marked'; // marked 라이브러리 임포트
import { useSearchParams } from 'next/navigation';

import {
    Heading1,
    Heading2,
    Heading3,
    Type,
    Bold,
    Italic,
    Strikethrough,
    Highlighter,
} from 'lucide-react';

// YoutubePanel 컴포넌트 임포트 (경로에 맞게 수정)
import YoutubePanel from './YoutubePanel';

// MenuBar 컴포넌트 (기존 NewPostPage의 MenuBar와 동일)
const MenuBar = ({ editor }: { editor: any }) => {
    if (!editor) {
        return null
    }

    return (
        <div className="control-group">
            <div className="button-group">
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>
                    <Heading1 size={24} />
                </button>
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}>
                    <Heading2 size={24} />
                </button>
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}>
                    <Heading3 size={24} />
                </button>
                <div className='m-1 w-[1px] h-8 bg-neutral-800'></div>
                <button onClick={() => editor.chain().focus().setParagraph().run()} className={editor.isActive('paragraph') ? 'is-active' : ''}>
                    <Type size={24} />
                </button>
                <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is-active' : ''}>
                    <Bold size={24} />
                </button>
                <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''}>
                    <Italic size={24} />
                </button>
                <button onClick={() => editor.chain().focus().toggleStrike().run()} className={editor.isActive('strike') ? 'is-active' : ''}>
                    <Strikethrough size={24} />
                </button>
                <div className='m-1 w-[1px] h-8 bg-neutral-800'></div>
                <button onClick={() => editor.chain().focus().toggleHighlight().run()} className={editor.isActive('highlight') ? 'is-active' : ''}>
                    <Highlighter size={24} />
                </button>
            </div>
        </div>
    )
}

export default function NewPostPage() {
    const [title, setTitle] = useState('');
    const [tagInput, setTagInput] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const searchParams = useSearchParams();
    const contentParam = searchParams.get('content'); // URL 쿼리 파라미터에서 마크다운 content 가져오기 (이름 변경)
    const [isTyping, setIsTyping] = useState(false);
    const hasContentBeenSet = useRef(false); // 콘텐츠가 이미 설정되었는지 추적하기 위한 ref

    // YouTube 패널에 전달할 상태
    const [youtubeVideoUrl, setYoutubeVideoUrl] = useState('https://www.youtube.com/watch?v=dQw4w9WgXcQ'); // 예시 URL
    const [youtubeVideoTitle, setYoutubeVideoTitle] = useState('Rick Astley - Never Gonna Give You Up (Official Music Video)');
    const [youtubeVideoSummary, setYoutubeVideoSummary] = useState(
        '유명한 릭롤링(Rickrolling) 밈의 원조인 릭 애슬리의 "Never Gonna Give You Up" 공식 뮤직 비디오입니다. 이 곡은 1987년에 발매되어 전 세계적으로 큰 인기를 끌었으며, 중독성 있는 멜로디와 애슬리의 독특한 보컬로 현재까지도 많은 사랑을 받고 있습니다.'
    );

    const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && tagInput.trim() !== '') {
            e.preventDefault();
            setTags([...tags, tagInput.trim()]);
            setTagInput('');
        }
        else if (e.key === 'Backspace' && tagInput === '') {
            if (tags.length > 0) {
                const newTags = [...tags];
                newTags.pop();
                setTags(newTags);
            }
        }
    };

    const removeTag = (indexToRemove: number) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };

    const editor = useEditor({
        extensions: [
            StarterKit,
            Highlight,
            Typography, // Typography 확장 추가 (첫 번째 코드에 있었음)
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
        ],
        // 초기 content는 비워두거나, 필요에 따라 기본 HTML을 설정합니다.
        content: '',
    });

    // URL 쿼리 파라미터로 마크다운 content가 넘어왔을 때 에디터에 로드 또는 타이핑 애니메이션
    useEffect(() => {
        if (editor && contentParam && !hasContentBeenSet.current) {
            try {
                // 마크다운을 HTML로 변환
                const htmlContent = marked.parse(contentParam);

                // `isTyping` 상태에 따라 타이핑 애니메이션 또는 즉시 콘텐츠 설정
                if (isTyping) {
                    let currentIndex = 0;
                    const text = contentParam;

                    const typeNextChar = () => {
                        if (currentIndex < text.length) {
                            const currentChar = text[currentIndex];
                            const nextChar = text[currentIndex + 1];

                            // Simple markdown parsing for typing animation (not full HTML conversion)
                            if (currentChar === '#' && nextChar === ' ') {
                                editor.commands.insertContent('\n# ');
                                currentIndex += 2;
                            } else if (currentChar === '*' && nextChar === '*') {
                                editor.commands.insertContent('**');
                                currentIndex += 2;
                            } else if (currentChar === '_' && nextChar === '_') {
                                editor.commands.insertContent('__');
                                currentIndex += 2;
                            } else if (currentChar === '`' && nextChar === '`' && text[currentIndex + 2] === '`') {
                                editor.commands.insertContent('```\n');
                                currentIndex += 3;
                            } else if (currentChar === '\n') {
                                editor.commands.insertContent('\n');
                                currentIndex++;
                            } else {
                                editor.commands.insertContent(currentChar);
                                currentIndex++;
                            }

                            const randomDelay = 1; // Faster typing for better user experience
                            setTimeout(typeNextChar, randomDelay);
                        } else {
                            setIsTyping(false);
                            hasContentBeenSet.current = true; // 콘텐츠가 완전히 로드되었음을 표시
                        }
                    };
                    typeNextChar();
                } else {
                    // isTyping이 false이면 즉시 HTML 콘텐츠 설정
                    editor.commands.setContent(htmlContent);
                    hasContentBeenSet.current = true; // 콘텐츠가 완전히 로드되었음을 표시
                    console.log('마크다운 콘텐츠가 HTML로 변환되어 에디터에 즉시 로드되었습니다.');
                }
            } catch (error) {
                console.error('마크다운 파싱 또는 Tiptap 로드 중 오류 발생:', error);
            }
        }
    }, [editor, contentParam, isTyping]); // isTyping도 의존성 배열에 추가

    return (
        <div className="flex flex-col h-screen bg-neutral-900 text-white">
            {/* Main Content Area */}
            <div className="flex flex-1 overflow-hidden">
                {/* Editor and Title/Tags Section */}
                <div className="flex-1 flex flex-col p-8 overflow-y-auto">
                    <input
                        type="text"
                        placeholder="제목을 입력하세요"
                        className="w-full text-4xl font-bold mb-4 bg-transparent outline-none placeholder-neutral-600 text-white"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <div className="border-b border-neutral-700 mb-6"></div>

                    <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="flex items-center text-blue-400 text-[1rem] px-3 py-1 rounded-full bg-neutral-800"
                                    onClick={() => removeTag(index)}
                                >
                                    {tag}
                                </span>
                            ))}
                            <input
                                type="text"
                                placeholder="태그를 입력하세요"
                                className="w-62 bg-transparent outline-none placeholder-neutral-600 text-neutral-300 text-[1.125rem]"
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onKeyDown={handleTagInputKeyDown}
                            />
                        </div>
                    </div>

                    {/* MenuBar and EditorContent */}
                    <div className="flex-grow overflow-y-auto custom-scrollbar pr-4">
                        <MenuBar editor={editor} />
                        <EditorContent editor={editor} />
                    </div>
                </div>

                {/* Categories and other Widgets Area */}
                <div className="w-[350px] border-neutral-800 overflow-y-auto flex flex-col">
                    {/* YouTube Panel */}
                    <YoutubePanel
                        youtubeUrl={youtubeVideoUrl}
                        youtubeTitle={youtubeVideoTitle}
                        youtubeSummary={youtubeVideoSummary}
                        isViewer={true}
                    />
                </div>
            </div>
        </div>
    )
}