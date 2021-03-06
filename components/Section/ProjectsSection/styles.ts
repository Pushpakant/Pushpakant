import { motion } from 'framer-motion';
import styled from 'styled-components';

import bounce from '../../../styles/shared/animations/bounce';

import {
  primaryFontColor,
  primaryAccentColor,
  secondaryFontColor,
  secondaryColor,
  primaryColor,
  secondaryAccentColor,
  sidePaddingMob,
  mobileSize,
  monitorSize,
} from '../../../styles/variables';

export const ProjectsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  padding: 2rem 0;
  width: 100%;
`;

export const SectionIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const SectionTitle = styled(motion.h1)`
  color: ${primaryAccentColor};
  letter-spacing: 0.05rem;

  margin-bottom: 1rem;
`;

export const SectionAlt = styled(motion.a)`
  position: relative;
  width: fit-content;

  padding: 0 0.5rem;
  padding-bottom: 0.2rem;
  font-size: 0.85rem;
  letter-spacing: 0.05rem;
  color: ${primaryFontColor};
  margin-bottom: 2rem;

  &:hover {
    color: ${secondaryFontColor};
    &::after {
      transform-origin: left;

      transform: scaleX(1);
    }
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${primaryAccentColor};

    transform: scaleX(0);
    transform-origin: right;

    transition: transform 200ms 100ms cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  transition: color 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const ProjectsList = styled.ul`
  display: grid;
  gap: ${sidePaddingMob};
  max-width: 1200px;
  margin-bottom: 4rem;

  @media only screen and (min-width: ${mobileSize}) {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }

  @media only screen and (min-width: ${monitorSize}) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
`;

export const ProjectListItem = styled(motion.li)`
  padding: 2rem;
  border-radius: 0.25rem;
  line-height: 1.5rem;

  display: flex;
  flex-direction: column;

  border: 0.2rem solid ${secondaryColor};

  transition: all 250ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    background-color: ${`${secondaryColor}80`};

    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    scale: 1.05;
  }
`;

export const ProjectTitle = styled(motion.h3)`
  word-break: break-word;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  flex-wrap: nowrap;
  position: relative;
  text-transform: capitalize;
  color: ${primaryColor};
  width: 100%;

  &:hover {
    color: ${primaryAccentColor};
  }
  transition: all 250ms cubic-bezier(0.645, 0.045, 0.355, 1);
  font-weight: 400;
`;

export const TitleContainer = styled.div`
  margin-right: 1rem;
`;

export const LinksContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  min-width: fit-content;
  color: ${secondaryAccentColor};
`;

export const GithubLink = styled(motion.h5)`
  transition: all 250ms cubic-bezier(0.645, 0.045, 0.355, 1);
  a {
    &:hover {
      color: ${primaryAccentColor};
    }

    svg {
      transition: all 250ms cubic-bezier(0.645, 0.045, 0.355, 1);

      &:hover {
        animation: ${bounce} 500ms cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
      }
    }
  }
`;

export const Homepage = styled(motion.h5)`
  transition: all 250ms cubic-bezier(0.645, 0.045, 0.355, 1);
  a {
    &:hover {
      color: ${primaryAccentColor};
    }

    svg {
      transition: all 250ms cubic-bezier(0.645, 0.045, 0.355, 1);

      &:hover {
        animation: ${bounce} 500ms cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
      }
    }
  }
  margin-left: 2rem;
`;

export const Lower = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const ProjectDescription = styled(motion.h4)`
  word-break: break-word;
  color: ${primaryFontColor};
  font-weight: 400;
  user-select: none;

  margin-bottom: 1rem;
`;

export const LangToolsAndLibContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  font-size: 0.75rem;
  color: ${primaryFontColor};
`;

export const LangToolsAndLibItem = styled(motion.div)`
  margin-right: 1rem;
  padding-right: 0.3rem;
`;

export const ShowMore = styled.div`
  margin-bottom: 2rem;
`;
