import React from 'react';

function App() {
  // Hardcoded configuration details for this showcase project
  const apiUrl = "https://api.my-showcase-backend.com/data";
  
  // Inline styling for the main container. 
  // In Phase 7, you will change the backgroundColor to 'red' to test a pipeline rollback!
  const containerStyle = {
    backgroundColor: '#282c34', // <-- Change this to 'red' later!
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px'
  };

  const cardStyle = {
    backgroundColor: '#3b4048',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '20px',
    border: '1px solid #61dafb'
  };

  return (
    <div style={containerStyle}>
      <h1>🚀 My AWS Deployment Pipeline</h1>
      <p>This React application was automatically deployed using GitHub Actions and AWS SSM!</p>
      
      <div style={cardStyle}>
        <h3>System Configuration</h3>
        <p><strong>Status:</strong> Online and Running</p>
        <p><strong>Hardcoded API Target:</strong> {apiUrl}</p>
      </div>
    </div>
  );
}

export default App;