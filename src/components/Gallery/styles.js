import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 1rem;
  padding: 0 1rem;

  picture {
    img {
      aspect-ratio: 4/3;
      object-fit: cover;
      width: 100%;
      height: auto;
      display: block;
    }
  }
`;
