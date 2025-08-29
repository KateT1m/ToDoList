import { describe, it, expect } from 'vitest';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { store } from './app/store';
import App from './App';

const renderApp = () =>
  render(<Provider store={store}><App /></Provider>);

describe('Todo UI', () => {
  it('добавляет задачу по Enter', async () => {
    renderApp();
    const input = screen.getByPlaceholderText(/добавить задачу/i);
    await userEvent.type(input, 'Купить молоко{enter}');
    expect(screen.getByText(/Купить молоко/i)).toBeInTheDocument();
  });

  it('переключает фильтры и очищает выполненные', async () => {
    renderApp();
    const input = screen.getByPlaceholderText(/добавить задачу/i);
    await userEvent.type(input, 'Сделать ДЗ{enter}');
    const cb = screen.getAllByRole('checkbox')[0];
    await userEvent.click(cb);

    await userEvent.click(screen.getByRole('button', { name: /выполненные/i }));
    expect(screen.getByText(/Сделать ДЗ/i)).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: /очистить выполненные/i }));
    expect(screen.queryByText(/Сделать ДЗ/i)).not.toBeInTheDocument();
  });
});