import { WelcomeText } from '@/components/special/WelcomeText/welcome.js';
import * as S from './style.js'

export default function Home() {
  return (
    <S.Main>
        <WelcomeText text={'Hello Word'}/>
    </S.Main>
  );
}
