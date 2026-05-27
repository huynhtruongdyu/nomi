import React from 'react';
import logo from '@/assets/images/logo-universal.png';
import './App.css';
import { GreetingForm } from '@/features/greeting';
import ErrorBoundary from '@/components/common/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div id="App">
        <img src={logo} id="logo" alt="logo" />
        <GreetingForm />
      </div>
    </ErrorBoundary>
  );
}


export default App;
