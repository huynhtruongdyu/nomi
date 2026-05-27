import React from 'react';
import logo from '@/assets/images/logo-universal.png';
import './App.css';
import { GreetingForm } from '@/features/greeting';
import { DeviceInfoCard } from '@/features/device';
import ErrorBoundary from '@/components/common/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div id="App">
        <img src={logo} id="logo" alt="logo" />
        <div className="content-layout">
          <GreetingForm />
          <DeviceInfoCard />
        </div>
      </div>
    </ErrorBoundary>
  );
}



export default App;
