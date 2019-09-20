import React from 'react';

import CurrentTime from './CurrentTime';
import Users from './Users';

const Dashboard = () => (
  <>
    <h1>Example React App</h1>
    <Container>
      <CurrentTime />
      <Users />
    </Container>
  </>
);

export default Dashboard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
