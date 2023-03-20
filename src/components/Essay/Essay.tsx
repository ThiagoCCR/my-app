import { FC } from 'react';

import { ImgContainer, Wrapper } from './Essay.style';

interface Props {
  imgUrl: string;
  handleClick: React.Dispatch<React.SetStateAction<string>>;
}

export const Essay: FC<Props> = ({
  imgUrl,
  handleClick,
}: Props): JSX.Element => {
  return (
    <Wrapper>
      {imgUrl.slice(-3) === 'pdf' ? (
        <ImgContainer onClick={() => handleClick(imgUrl)}>
          <h1>PDF</h1>
        </ImgContainer>
      ) : (
        <ImgContainer onClick={() => handleClick(imgUrl)}>
          <img alt="essayPic" src={imgUrl} />
        </ImgContainer>
      )}
    </Wrapper>
  );
};
