'use client';

import { useRef, useEffect, useCallback } from 'react';

interface EmailBodyEditorProps {
  initialHtml: string;
  onChange: (html: string) => void;
  placeholder?: string;
  className?: string;
}

export default function EmailBodyEditor({
  initialHtml,
  onChange,
  placeholder = 'Write your email here. Use {{name}} for the recipient\'s name.',
  className = '',
}: EmailBodyEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);

  // Set content only when parent sends new HTML (e.g. template selected), not on every keystroke
  useEffect(() => {
    const el = editorRef.current;
    if (!el) return;
    if (el.innerHTML !== initialHtml) {
      el.innerHTML = initialHtml || '';
    }
  }, [initialHtml]);

  const handleInput = useCallback(() => {
    const el = editorRef.current;
    if (!el) return;
    onChange(el.innerHTML);
  }, [onChange]);

  const exec = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    handleInput();
  };

  const insertName = () => {
    exec('insertHTML', '{{name}}');
  };

  return (
    <div className={`border border-gray-300 rounded-lg overflow-hidden bg-white ${className}`}>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-gray-200 bg-gray-50">
        <button
          type="button"
          onClick={() => exec('bold')}
          className="p-2 rounded hover:bg-gray-200 font-bold text-gray-700"
          title="Bold"
        >
          B
        </button>
        <button
          type="button"
          onClick={() => exec('italic')}
          className="p-2 rounded hover:bg-gray-200 italic text-gray-700"
          title="Italic"
        >
          I
        </button>
        <button
          type="button"
          onClick={() => exec('underline')}
          className="p-2 rounded hover:bg-gray-200 underline text-gray-700"
          title="Underline"
        >
          U
        </button>
        <span className="w-px h-6 bg-gray-300 mx-1" />
        <button
          type="button"
          onClick={() => exec('formatBlock', 'h2')}
          className="px-2 py-1 rounded hover:bg-gray-200 text-sm text-gray-700"
          title="Heading 2"
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => exec('formatBlock', 'p')}
          className="px-2 py-1 rounded hover:bg-gray-200 text-sm text-gray-700"
          title="Paragraph"
        >
          P
        </button>
        <span className="w-px h-6 bg-gray-300 mx-1" />
        <button
          type="button"
          onClick={() => {
            const url = window.prompt('Link URL:', 'https://');
            if (url) exec('createLink', url);
          }}
          className="px-2 py-1 rounded hover:bg-gray-200 text-sm text-blue-600"
          title="Insert link"
        >
          Link
        </button>
        <button
          type="button"
          onClick={insertName}
          className="px-2 py-1 rounded hover:bg-blue-100 text-sm text-blue-700 border border-blue-200"
          title="Insert recipient name"
        >
          {'{{name}}'}
        </button>
      </div>
      {/* Editor area - matches email template styling */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onBlur={handleInput}
        data-placeholder={placeholder}
        className="email-body-editor min-h-[280px] p-6 text-gray-700 focus:outline-none prose prose-sm max-w-none"
        style={{
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          maxWidth: '560px',
        }}
        suppressContentEditableWarning
      />
      <style dangerouslySetInnerHTML={{ __html: '.email-body-editor:empty::before{content:attr(data-placeholder);color:#9ca3af}' }} />
    </div>
  );
}
