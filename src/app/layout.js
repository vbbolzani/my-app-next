import * as S from './style.js';

import { Inter } from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export default function RootLayout({ children }) {
  return (
    <html>
        <S.Body className={inter.className}>{children}</S.Body>
    </html>
  );
}
