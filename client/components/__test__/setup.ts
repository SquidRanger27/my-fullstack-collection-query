//setup.ts
import { beforeEach, expect } from 'vitest'
import { cleanup } from '@testing-library/react/pure'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

beforeEach(() => {
  cleanup()
})

expect.extend(matchers)

// Set up QueryClient for tests
const queryClient = new QueryClient()

// Provide QueryClient in the testing environment
globalThis.queryClient = queryClient

// Provide QueryClientProvider in the testing environment
globalThis.QueryClientProvider = QueryClientProvider
