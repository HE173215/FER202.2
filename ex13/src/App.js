import React, { useState } from 'react';
import ValidatedInput from './components/ValidatedInput';
import WindowSize from './components/WindowSize';
import CountdownTimer from './components/CountdownTimer';
import UserPosts from './components/userPosts';

function App() {
  const [userId, setUserId] = useState(1);
  const [initialValue, setInitialValue] = useState(10);

  return (
    <div>
      <h1>My React App</h1>

      <h2>Validated Input</h2>
      <ValidatedInput
        validationFunction={(value) => value.length > 5}
        errorMessage="Value must be more than 5 characters"
        Message="Done"
      />

      <h2>Window Size Listener</h2>
      <WindowSize />

      <h2>Countdown Timer</h2>
      <input
        type="number"
        value={initialValue}
        onChange={(e) => setInitialValue(Number(e.target.value))}
        placeholder="Enter initial time"
      />
      <CountdownTimer initialValue={initialValue} />

      <h2>User Posts</h2>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(Number(e.target.value))}
        placeholder="Enter user ID"
      />
      <UserPosts userId={userId} />
    </div>
  );
}

export default App;
