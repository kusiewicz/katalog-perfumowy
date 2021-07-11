import styled from 'styled-components/macro';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const PerfumeItem = styled.div`
  border: 0.5px solid white;
  border-radius: 20px;
  font-family: Quicksand;
  margin-bottom: 2rem;
  background-color: white;
  padding: 0.5rem;
  text-align: center;
  width: 100%;
`;

export const Name = styled.h1`
  font-weight: 600;
  font-size: 1.2rem;
`;

export const Brand = styled.h1`
  color: rgb(105, 102, 102);
  font-weight: 500;
  font-size: 1rem;
  margin-botton: 0.3rem;
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 0.2rem;
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

export const Image = styled.div`
  width: 100%;
  height: 120px;
  margin-top: 0.5rem;

  img {
    width: 90px;
    height: 100%;
  }
`;

export const Description = styled.h2`
  font-style: italic;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 0.3rem;
`;

export const Link = styled.h5`
  margin: 0.3rem 0;

  a {
    color: black;
    font-weight: 400;
    font-size: 0.8rem;
  }
`;
