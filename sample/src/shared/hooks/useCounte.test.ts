import { act, renderHook } from '@testing-library/react';

import { useCounter } from './useCounter';

describe('useCounter', () => {
  it('should return the correct values', () => {
    const { result } = renderHook(() => useCounter(0));

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.setCount(10);
    });

    expect(result.current.count).toBe(10);

    act(() => {
      result.current.reset();
    });

    expect(result.current.count).toBe(0);
  });
});
