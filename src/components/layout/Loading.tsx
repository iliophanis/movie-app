import { ImSpinner2 } from "react-icons/im";

const Loading = () => {
 return (
  <div className="flex h-screen justify-center items-center">
   <div className="text-center text-lg">
    <ImSpinner2 className="animate-spin h-10 w-10 text-indigo-600" />
   </div>
  </div>
 );
};

export default Loading;
