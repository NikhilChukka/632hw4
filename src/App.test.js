import React from 'react';
import { MemoryRouter, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './components/Home';
import Assignment from './components/Assignment';
import Newhomework from './components/Newhomework';
import Activitystream from './components/Activitystream';
import Grading from './components/Grading';
import GPACalculator from './components/GPACalculator';
import Sendemail from './components/Sendemail';

test('renders correct components for each route', () => {
  render(
    <Routes initialEntries={['/']}>
      <App />
    </Routes>
  );

  expect(screen.getByText(/home/i)).toBeInTheDocument();

  render(
    <Routes initialEntries={['/assignments/1']}>
      <App />
    </Routes>
  );

  expect(screen.getByText(/assignment/i)).toBeInTheDocument();

  // Add similar render tests for other routes
});
