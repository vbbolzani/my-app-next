import * as S from './style.js'
import { FlexBox } from '@/app/style.js'

export const WelcomeText = ({text}) => {
    return(
        <FlexBox size="full" justify="center" align="center">
            <S.Text>{text}</S.Text>
        </FlexBox>
    )
}