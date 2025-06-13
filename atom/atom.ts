import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

interface ContentData {
    reply: string;
    og_title: string;
    og_description: string;
    og_image: string;
}

export const contentAtom = atomWithStorage<ContentData | null>('content', null)