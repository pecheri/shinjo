import { Noto_Sans, Ubuntu } from '@next/font/google';

export const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['500'], variable: '--font-ubuntu' });
export const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans',
});
