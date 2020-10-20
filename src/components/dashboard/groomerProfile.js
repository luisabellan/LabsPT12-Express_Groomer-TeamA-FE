import React from 'react';
import styled from 'styled-components';

const Card = styled.div``;
const ProfileContainer = styled.div``;
const ProfileName = styled.h1``;
const ProfileLocation = styled.h3``;
const DescriptionDiv = styled.div``;

const GroomerProfile = () => {
  return (
    <>
      <Card>
        <ProfileContainer>
          <ProfileName>Groomer Name Here</ProfileName>
          <ProfileLocation>Location Here</ProfileLocation>
          <DescriptionDiv>
            <h3>Description Title</h3>
            <p>Description Here</p>
          </DescriptionDiv>
        </ProfileContainer>
      </Card>
    </>
  );
};

export default GroomerProfile;
