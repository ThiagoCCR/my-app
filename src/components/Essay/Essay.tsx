import { FC } from 'react';

import { ImgContainer, Wrapper } from './Essay.style';

interface Props {
  imgUrl: string;
  school: object;
  student: object;
  handleClick: React.Dispatch<React.SetStateAction<string>>;
}

export const Essay: FC<Props> = ({
  imgUrl,
  school,
  student,
  handleClick,
}: Props): JSX.Element => {
  return (
    <Wrapper>
      <ImgContainer onClick={() => handleClick(imgUrl)}>
        <img alt="essayPic" src={imgUrl} />
      </ImgContainer>
    </Wrapper>
  );
};
