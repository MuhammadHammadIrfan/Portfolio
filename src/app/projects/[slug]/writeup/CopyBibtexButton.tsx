"use client";

import { useState } from 'react';
import { HiClipboardCopy, HiCheck } from 'react-icons/hi';

export default function CopyBibtexButton({ bibtex }: { bibtex: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(bibtex);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch (err) {
            console.error('Failed to copy BibTeX: ', err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
            title="Copy BibTeX Citation"
        >
            {copied ? (
                <>
                    <HiCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
            ) : (
                <>
                    <HiClipboardCopy className="w-4 h-4 text-slate-400" />
                    <span>Copy BibTeX</span>
                </>
            )}
        </button>
    );
}
