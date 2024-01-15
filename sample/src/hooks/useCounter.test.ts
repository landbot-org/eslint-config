import { act, renderHook } from '@testing-library/react';

import { useCounter } from './useCounter';

describe('useCounter', () => {
  it('should return the correct initial value', () => {
    const { result } = renderHook(() => useCounter(0));

    expect(result.current.count).toBe(0);
  });

  it('should return the correct value with increment', () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it('should return the correct value with decrement', () => {
    const { result } = renderHook(() => useCounter(1));

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(0);
  });

  it('should return the correct value with reset', () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => {
      result.current.increment();
      result.current.reset();
    });

    expect(result.current.count).toBe(0);
  });

  it('should return the correct value with setCount', () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => {
      result.current.setCount(100);
    });

    expect(result.current.count).toBe(100);
  });
});
