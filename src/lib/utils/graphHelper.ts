import { GraphQLClient } from 'graphql-request';

// Function to fetch data using GraphQLClient
export async function fetchData<T>(query: string, variables?: object): Promise<T> {
  const client = new GraphQLClient('https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql');

  try {
    const data = await client.request<T>(query, variables);
    return data;
  } catch (error) {
    console.log(`Failed to fetch data: ${error}`)
    throw error;
  }
}