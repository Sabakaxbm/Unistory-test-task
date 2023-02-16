import React from 'react';
import * as S from './style';
import planetImg from '../assets/planetImg.png';
import CircleIcon from '../../icons/CircleIcon';
import { useParams } from 'react-router-dom';

const arr = [
  { title: '12, 345', text: 'Lorem ipsum dolor' },
  { title: '12, 345', text: 'Lorem ipsum dolor' },
  { title: '12, 345', text: 'Lorem ipsum dolor' }
];

const TitleBlock = () => {
  const params = useParams();

  return (
    <>
      <S.Content>
        <S.TitleBox>
          {!params.id && (
            <>
              <div>
                <h1>
                  Explore Your own planet
                  <br /> In <S.TextNoColor>our New</S.TextNoColor> metaverse
                </h1>
                <S.SubTitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </S.SubTitle>
              </div>
              <S.RoadmapContainer>
                <S.Title>Roadmap stats</S.Title>
                {arr.map((item, index) => (
                  <S.Item key={index}>
                    <S.ItemTitle>{item.title}</S.ItemTitle>
                    <p>{item.text}</p>
                  </S.Item>
                ))}
              </S.RoadmapContainer>
            </>
          )}
          <S.ImageWrapper>
            <S.MixCircle />
            <img src={planetImg} alt={'planetImg'} />
            <CircleIcon />
          </S.ImageWrapper>
        </S.TitleBox>
      </S.Content>
    </>
  );
};

export default TitleBlock;
