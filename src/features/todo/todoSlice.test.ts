import reducer, { addTodo, toggleTodo, removeCompleted } from './todoSlice';
import { test, expect } from 'vitest';

test('addTodo добавляет новую задачу', () => {
  const state = { data: []};
  const next = reducer(state, addTodo('Новая'));
  expect(next.data[0].title).toBe('Новая');
  expect(next.data[0].completed).toBe(false);
});

test('toggleTodo переключает completed', () => {
  const state = { data: [{ title: 'A', completed: false, id: 0 }]};
  const next = reducer(state, toggleTodo(0));
  expect(next.data[0].completed).toBe(true);
});

test('removeCompleted очищает выполненные', () => {
  const state = { data: [{ title: 'A', completed: true, id: 0 }, { title: 'B', completed: false, id: 1 }]};
  const next = reducer(state, removeCompleted());
  expect(next.data).toEqual([{ title: 'B', completed: false, id: 1 }]);
});