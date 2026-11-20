import { Geist, Geist_Mono, Bricolage_Grotesque } from 'next/font/google';

export const fontSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
export const fontMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

/** High-impact display face for lab headlines and brand typography */
export const fontDisplay = Bricolage_Grotesque({
  variable: '--font-display',
  subsets: ['latin'],
});
