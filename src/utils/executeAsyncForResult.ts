// @ts-nocheck

import Result from '../components/markdown/types/Result';

export default async function executeAsyncForResult<T>(
  func: () => Promise<T>
): Promise<Result<T>> {
  try {
    return {
      data: await func(),
    };
  } catch (error) {
    return {
      error,
    };
  }
}
