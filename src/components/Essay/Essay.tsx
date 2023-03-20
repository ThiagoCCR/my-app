import { FC } from 'react';

import { ImgContainer, Wrapper } from './Essay.style';

interface Props {
  imgUrl: string;
  school: object;
  student: object;
}

export const Essay: FC<Props> = ({
  imgUrl,
  school,
  student,
}: Props): JSX.Element => {
  return (
    <Wrapper>
      <ImgContainer>
        <img alt="essayPic" src={imgUrl} />
      </ImgContainer>
    </Wrapper>
  );
};
