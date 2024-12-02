import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { OntologyService } from "@telicent-oss/ontologyservice";


type DSProvidersProps = Partial<{
  children: React.ReactNode;
  ontologyService: OntologyService;
}>;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 5000, // 5 minutes
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

const DSProviders: React.FC<DSProvidersProps> = ({
  ontologyService,
  children,
}) => {
  if (ontologyService) {
    return (
      <QueryClientProvider client={queryClient}>
          {children}
      </QueryClientProvider>
    );
  }

  return children;
};

export default DSProviders;
