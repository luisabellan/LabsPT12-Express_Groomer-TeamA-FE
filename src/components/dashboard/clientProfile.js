import React from 'react';
import styled from 'styled-components';

const Card = styled.div``;
const ProfileContainer = styled.div``;
const ProfileName = styled.h1``;
const ProfileLocation = styled.h3``;
const PetsDiv = styled.div``;

const ClientProfile = () => {
  return (
    <>
      <Card>
        <ProfileContainer>
          <ProfileName>Client Name Here</ProfileName>
          <ProfileLocation>Location Here</ProfileLocation>
          <PetsDiv>
            <p>Put Pets Here</p>
          </PetsDiv>
        </ProfileContainer>
      </Card>
    </>
  );
};

export default ClientProfile;
