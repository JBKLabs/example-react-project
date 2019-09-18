import React from 'react';

import CurrentTime from './CurrentTime';
import Users from './Users';

const Dashboard = () => (
  <>
    <h1>Example React App</h1>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
    	<CurrentTime />
    	<Users />
    </div>
  </>
);

export default Dashboard;
