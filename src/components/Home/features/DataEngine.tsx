import React from 'react';
import Chatboxes from 'react-icons/lib/io/chatboxes';
import {
  ph,
  pv,
  borderRadius,
  colors,
  Text,
  TextTypes,
  mt,
} from 'gather-style';
import styled from 'styled-components';
import { utils } from 'hedron';

import cloud from './cloud.svg';
import dataEngine from './data-engine.svg';

interface CategoryInterface {
  name: string;
  icon: JSX.Element;
  lightColor: string;
  boldColor: string;
}

const categories: CategoryInterface[] = [
  {
    name: 'Support',
    icon: <Chatboxes isize={28} color={colors.white} />,
    lightColor: '#F5DAB5',
    boldColor: '#E5A853',
  },
  {
    name: 'Product Usage',
    icon: <Chatboxes size={28} color="#5D75F6" />,
    lightColor: '#CEF1FF',
    boldColor: '#85CDED',
  },
  {
    name: 'Activity',
    icon: <Chatboxes size={28} color="#2F9340" />,
    lightColor: '#BDF5C7',
    boldColor: '#78DD89',
  },
  {
    name: 'Customer Data',
    icon: <Chatboxes size={28} color={colors.white} />,
    lightColor: '#D2D8F8',
    boldColor: '#96A3E8',
  },
  {
    name: 'Feedback',
    icon: <Chatboxes size={28} color="#AF2525" />,
    lightColor: '#FFD2D2',
    boldColor: '#EE6D6D',
  },
  {
    name: 'Financial',
    icon: <Chatboxes size={28} color={colors.white} />,
    lightColor: '#DAE8F5',
    boldColor: '#5C6496',
  },
];

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-20px, 0);
  ${mt(1)};

  --diameter: 250px;
  --radius: calc(var(--diameter) / 2);

  --category-diameter: 60px;
  --category-radius: calc(var(--category-diameter) / 2);
  --category-inner-circle: calc(var(--category-diameter) / 1.8);

  ${utils.breakpoint(
    'md',
    () => `
      --diameter: 340px;
      --category-diameter: 74px;
      transform: none;
      ${mt(0)()};
    `
  )};

  width: var(--diameter);
  height: var(--diameter);
`;

const BackgroundCircle = styled.div`
  border-radius: 50%;
  height: 100%;
  width: 100%;
  border: 1px dashed ${colors.border};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

interface CategoryContainerProps {
  startingDegree: number;
  containerWidth: number;
  containerRadius: number;
}

const CategoriesContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Category = styled.div<CategoryContainerProps>`
  position: absolute;

  @keyframes orbit${props => props.startingDegree} {
    from {
      transform: ${props => `rotate(${
        props.startingDegree
      }deg) translateX(var(--radius))
        rotate(-${props.startingDegree}deg)`};
    }
    to {
      transform: ${props => `rotate(${props.startingDegree + 360}deg)
        translateX(var(--radius)) rotate(-${props.startingDegree + 360}deg)`};
    }
  }

  animation: orbit${props => props.startingDegree} 64s linear infinite;
  left: 50%;
  top: 50%;
`;

const CategoryLabel = styled(Text)<CategoryInterface>`
  background: ${colors.white};
  border: 1px solid ${props => props.lightColor};
  ${borderRadius};
  ${ph(0.5)};
  ${pv(0.5)};
  position: absolute;
  top: var(--category-diameter);
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

const CategoryOuterCircle = styled.div<CategoryInterface>`
  background: ${props => props.lightColor};
  width: var(--category-diameter);
  height: var(--category-diameter);
  border-radius: var(--category-radius);
  position: absolute;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryInnerCircle = styled.div<CategoryInterface>`
  background: ${props => props.boldColor};
  width: var(--category-inner-circle);
  height: var(--category-inner-circle);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryIcon = styled.div``;

const Cloud = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const DataEngineLogo = styled.img`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

interface DataEngineProps {
  size: {
    width: number;
    height: number;
  };
}

const DataEngine: React.SFC<DataEngineProps> = ({ size }) => (
  <Container>
    <Cloud src={cloud} />
    <BackgroundCircle />
    <DataEngineLogo src={dataEngine} />
    <CategoriesContainer>
      {categories.map((category, index) => (
        <Category
          startingDegree={(index + 0) * (360 / categories.length)}
          containerRadius={150}
        >
          <CategoryOuterCircle {...category}>
            <CategoryInnerCircle {...category}>
              <CategoryIcon>{category.icon}</CategoryIcon>
            </CategoryInnerCircle>
            <CategoryLabel
              align="center"
              mt={1}
              type={TextTypes.BODY_TINY}
              {...category}
            >
              {category.name}
            </CategoryLabel>
          </CategoryOuterCircle>
        </Category>
      ))}
    </CategoriesContainer>
  </Container>
);

export default DataEngine;
