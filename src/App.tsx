import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

import Loading from "components/layout/Loading";
import Layout from "components/layout/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import SearchProvider from "contexts/SearchProvider";

function App() {
 const contextClass: any = {
  success: "bg-blue-600",
  error: "bg-red-600",
  info: "bg-gray-600",
  warning: "bg-orange-400",
  default: "bg-indigo-600",
  dark: "bg-white-600 font-gray-300",
 };

 const queryClient = new QueryClient({
  defaultOptions: {
   queries: {
    retry: false,
    suspense: true,
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000 * 5,
   },
  },
 });

 return (
  <QueryClientProvider client={queryClient}>
   <ToastContainer
    toastClassName={({ type }: any) =>
     contextClass[type || "default"] +
     " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
    }
    bodyClassName={() => "text-sm font-white font-med block p-3"}
    autoClose={4000}
    position="top-center"
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
   />
   <Suspense fallback={<Loading />}>
    <SearchProvider>
     <Layout />
    </SearchProvider>
   </Suspense>
  </QueryClientProvider>
 );
}

export default App;
