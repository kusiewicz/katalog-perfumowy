import styled from 'styled-components/macro';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 35vh;

  @media (min-width: 34rem) and (max-width: 80rem) {
    grid-template-columns: 33% 33% 33%;
    justify-content: center;
    margin-top: 50vh;
  }

  @media (orientation: landscape) and (max-width: 59rem) {
    margin-top: 60vh;
  }

  @media (min-width: 60rem) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 23rem);
    justify-content: center;
    grid-gap: 1.5rem;
  }
`;

export const PerfumeItem = styled.div`
  border: 0.5px solid white;
  border-radius: 20px;
  font-family: Quicksand;
  margin-bottom: 15px;
  background-color: white;
  padding: 0.5rem;
  text-align: center;
  width: 100%;

  @media (min-width: 60rem) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Name = styled.h1`
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0;

  @media (min-width: 34rem) and (max-width: 60rem) {
    font-size: 1.4rem;
  }

  @media (min-width: 60rem) {
    font-size: 1.8rem;
  }
`;

export const Brand = styled.h1`
  color: rgb(105, 102, 102);
  font-weight: 500;
  font-size: 1rem;
  margin: 0;
  margin-top: 2px;

  @media (min-width: 34rem) and (max-width: 60rem) {
    font-size: 1.05rem;
  }

  @media (min-width: 60rem) {
    font-size: 1.4rem;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 6px;
  margin-top: 5px;
  width: 100%;

  @media (min-width: 60rem) {
    width: 80%;
    flex-direction: row;
  }
`;

export const Filter = styled.div`
  &:first-of-type {
    display: flex;
    justify-content: flex-start;
  }

  &:nth-of-type(2) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const FilterIcon = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 6px;

  @media (min-width: 34rem) and (max-width: 60rem) {
    height: 30px;
    width: 30px;
  }

  @media (min-width: 60rem) {
    height: 40px;
    width: 40px;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 120px;
  margin-top: 5px;

  img {
    width: 90px;
    height: 100%;
  }

  @media (min-width: 60rem) {
    width: 190px;
    height: 230px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Description = styled.h2`
  font-style: italic;
  margin: 0;

  &:first-of-type {
    font-weight: 600;
    font-size: 1rem;
    margin-top: 5px;
  }

  &:nth-of-type(2) {
    font-size: 0.8rem;
    font-weight: 400;
    margin-bottom: 5px;
  }

  @media (min-width: 34rem) and (max-width: 60rem) {
    &:first-of-type {
      font-size: 1.2rem;
    }

    &:nth-of-type(2) {
      font-size: 1rem;
    }
  }

  @media (min-width: 60rem) {
    &:first-of-type {
      font-size: 1.4rem;
    }

    &:nth-of-type(2) {
      font-size: 1.2rem;
      margin-top: 3px;
    }
  }
`;

export const Link = styled.a`
  padding: 3px;
  display: block;
  color: black;
  font-weight: 400;
  font-size: 0.8rem;

  &:hover {
    color: rgb(170, 170, 170);
  }

  @media (min-width: 60rem) {
    font-size: 1.2rem;
  }
`;
