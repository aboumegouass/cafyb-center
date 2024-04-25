import React, { ReactNode, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryClientOptions } from './constants';

interface Props {
    children: ReactNode
}
function Provider({ children }: Props) {
    const [queryClient] = useState(() => new QueryClient(queryClientOptions));
    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}

export default Provider