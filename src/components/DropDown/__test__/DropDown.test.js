import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DropDown from '../DropDown';

test('renders the component', () => {
  render(<DropDown />);
});

test('renders title of the dropdown', () => {
  render(<DropDown title={'Country'} />);
  expect(screen.getByText('Country')).toBeInTheDocument();
  expect(screen.getByTestId('title-id')).toHaveTextContent('Country');
});

test('renders header of the dropdown', () => {
  render(<DropDown header={'Select a country'} />);
  expect(screen.getByText('Select a country')).toBeInTheDocument();

  expect(screen.getByTestId('header-id')).toHaveTextContent('Select a country');
});

test('renders header and title', () => {
  render(<DropDown title={'Title'} header={'Header'} />);
  expect(screen.getByText('Title')).toBeInTheDocument();
  expect(screen.getByText('Header')).toBeInTheDocument();

  expect(screen.getByTestId('title-id')).toHaveTextContent('Title');
  expect(screen.getByTestId('header-id')).toHaveTextContent('Header');
});

test('click the dropdown', () => {
  render(<DropDown header={'Select a country'} />);
  userEvent.click(screen.getByTestId('header-id'));
  //Assert
});
