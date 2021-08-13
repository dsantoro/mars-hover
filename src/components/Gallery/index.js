import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { Container } from "./styles";

const Gallery = ({ data: { photos } }) => {
  return (
    <Container>
      {photos?.map((item) => {
        return (
          <SRLWrapper key={item.id}>
            <picture>
              <img src={item.img_src} alt={item.earth_date} />
            </picture>
          </SRLWrapper>
        );
      })}
    </Container>
  );
};

export default Gallery;
