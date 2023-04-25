import { fetchData } from '$lib/utils/graphHelper';
import { GraphQLClient } from 'graphql-request';
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('graphql-request');

describe('fetchData', () => {
  const mockClient = new GraphQLClient('https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql');
  const mockData = { example: 'data' };
  const mockQuery = 'EXAMPLE_QUERY';
  const mockVariables = { example: 'variables' };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should create a new GraphQLClient with the correct URL', async () => {
    await fetchData(mockQuery, mockVariables);
    expect(GraphQLClient).toHaveBeenCalledWith('https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql');
  });

  it('should call client.request with the correct query and variables', async () => {
    await fetchData(mockQuery, mockVariables);
    expect(mockClient.request).toHaveBeenCalledWith(mockQuery, mockVariables);
  });

  // I cannot get this test to work :(
  it('should return the data returned by client.request', async () => {
    
    const result = await fetchData(mockQuery, mockVariables);
    expect(result).toEqual(mockData);
  });

  it('should throw an error if client.request fails', async () => {
    const mockError = new Error('example error');
    (mockClient.request as vi.Mock).mockRejectedValue(mockError);

    await expect(fetchData(mockQuery, mockVariables)).rejects.toThrow(mockError);
  });
});
