"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import SidebarContainer from "../../components/SidebarContainer";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Image from '@tiptap/extension-image';
import Typography from '@tiptap/extension-typography';
import { Heading1, Heading2, Heading3, Bold, Italic, Underline as UnderlineIcon, List, ListOrdered } from 'lucide-react';

export default function NewPostPage() {
  const [isExpanded, setIsExpanded] = useState(true);

  // 에디터 내용 관리를 위한 임시 상태 (실제 폼 관리와 연결 필요)
  const [editorContent, setEditorContent] = useState('<p>AI가 요약한 글입니다. 여기에 요약된 내용이 들어갑니다. 이 내용은 나중에 실제 AI 요약 기능과 연동될 예정입니다.</p>');

  // Tiptap 에디터 인스턴스 생성
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "prose dark:prose-invert outline-none",
      },
    },
    extensions: [
      StarterKit,
      Underline,
      Image,
      Typography,
    ],
    content: editorContent,
    onUpdate: ({ editor: updatedEditor }) => {
      setEditorContent(updatedEditor.getHTML());
    },
    immediatelyRender: false,
  });

  // editor 인스턴스가 준비되지 않았을 경우 로딩 상태 처리
  if (!editor) {
    return null;
  }

  // 사이드바 너비 계산 로직 추가
  const thinSidebarWidth = 80; // w-20 = 80px
  const expandableSidebarExpandedWidth = 240; // w-60 = 240px
  const expandableSidebarCollapsedWidth = 0; // w-0 = 0px

  const totalSidebarWidth = thinSidebarWidth + (isExpanded ? expandableSidebarExpandedWidth : expandableSidebarCollapsedWidth);
  const mainContentLeftMargin = totalSidebarWidth;

  // 하드코딩된 예시 데이터
  const hardcodedData = {
    imageSrc: '/placeholder-image.jpg', // 실제 이미지 경로로 변경 필요
    title: '하드코딩된 제목',
    date: '2023-10-27',
    description: '하드코딩된 부제목/설명',
    aiSummary: 'AI가 요약한 글입니다. 여기에 요약된 내용이 들어갑니다. 이 내용은 나중에 실제 AI 요약 기능과 연동될 예정입니다.'
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-neutral-950">
      {/* Sidebar Container */}
      <SidebarContainer isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

      {/* 메인 콘텐츠와 편집기능 바 영역 */}
      <div className="flex-1 transition-all duration-300 flex" style={{ marginLeft: `${mainContentLeftMargin}px` }}>
        {/* 좌측 콘텐츠 영역 */}
        <div className="flex-1 p-8">
          {/* 이미지 */}
          <div className="mb-6">
            <img
              src={hardcodedData.imageSrc}
              alt="Placeholder Content Image"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* 제목, 날짜, 부제목 */}
          <div className="mb-6">
            {hardcodedData.date && <div className="text-sm text-neutral-500 mb-1">{hardcodedData.date}</div>}
            {hardcodedData.title && <h1 className="text-2xl font-bold mb-2">{hardcodedData.title}</h1>}
            {hardcodedData.description && <p className="text-neutral-600 text-base">{hardcodedData.description}</p>}
          </div>

          {/* AI 요약 글 */}
          <div>
            <h2 className="text-lg font-semibold mb-3">AI 요약</h2>
            {/* 툴바 */}
            <div className="flex items-center gap-3 border-b border-neutral-500 p-2 max-sm:gap-1 max-sm:overflow-x-auto">
              <div className="flex items-center gap-4 transition-all max-sm:gap-1">
                <button
                  type="button"
                  className="toolbarBtn"
                  onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                  aria-label="제목 크기 1"
                >
                  <Heading1 className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="toolbarBtn"
                  onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                  aria-label="제목 크기 2"
                >
                  <Heading2 className="h-5 w-5 cursor-pointer" />
                </button>
                <button
                  type="button"
                  className="toolbarBtn"
                  onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                  aria-label="제목 크기 3"
                >
                  <Heading3 className="h-5 w-5 cursor-pointer" />
                </button>
                <div className="h-5 w-[1px] bg-neutral-400" />
              </div>
              <div className="flex items-center gap-4 transition-all max-sm:gap-1">
                <button
                  type="button"
                  className="toolbarBtn"
                  onClick={() => editor.chain().focus().toggleBold().run()}
                  aria-label="텍스트 진하게"
                >
                  <Bold className="h-5 w-5 cursor-pointer" />
                </button>
                <button
                  type="button"
                  className="toolbarBtn"
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                  aria-label="텍스트 기울기"
                >
                  <Italic className="h-5 w-5 cursor-pointer" />
                </button>
                <button
                  type="button"
                  className="toolbarBtn"
                  onClick={() => editor.chain().focus().toggleUnderline().run()}
                  aria-label="텍스트 밑줄"
                >
                  <UnderlineIcon className="h-5 w-5 cursor-pointer" />
                </button>
                <div className="h-5 w-[1px] bg-neutral-400" />
              </div>
              <div className="flex items-center gap-4 transition-all max-sm:gap-1">
                <button
                  type="button"
                  className="toolbarBtn"
                  onClick={() => editor.chain().focus().toggleBulletList().run()}
                  aria-label="순서가 없는 리스트 정렬"
                >
                  <List className="h-5 w-5 cursor-pointer" />
                </button>
                <button
                  type="button"
                  className="toolbarBtn"
                  onClick={() => editor.chain().focus().toggleOrderedList().run()}
                  aria-label="순서가 있는 리스트 정렬"
                >
                  <ListOrdered className="h-5 w-5 cursor-pointer" />
                </button>
                <div className="h-5 w-[1px] bg-neutral-400" />
              </div>
              <div className="flex gap-4 transition-all max-sm:gap-1">
                {/* TiptabImage 및 TiptabLink 컴포넌트는 별도 구현 필요 */}
                {/* <TiptabImage editor={editor} /> */}
                {/* <TiptabLink editor={editor} /> */}
              </div>
            </div>
            {/* Tiptap 에디터 콘텐츠 */}
            <div className="w-full p-3 bg-neutral-50 dark:bg-neutral-800 rounded-md text-neutral-700 dark:text-neutral-300 leading-relaxed focus-within:ring-2 focus-within:ring-blue-500">
              <EditorContent editor={editor} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
} 