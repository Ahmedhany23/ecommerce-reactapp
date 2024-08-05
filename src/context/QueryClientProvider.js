import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Instantiate a new QueryClient
const queryClient = new QueryClient();

// Create a provider component
const ReactQueryClientProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryClientProvider;
