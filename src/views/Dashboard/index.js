import React from 'react';

import CurrentTime from './CurrentTime';
import Users from './Users';

const Dashboard = () => (
  <>
    <h1>Example React App</h1>
    {window.env.ENABLE_DEBUG_MODE === 'true' && <div>debug mode enabled</div>}
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <CurrentTime />
      <Users />
    </div>
  </>
);

export default Dashboard;
