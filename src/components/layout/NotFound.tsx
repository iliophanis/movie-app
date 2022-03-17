import { useNavigate } from "react-router-dom";

import { RiMovie2Line } from "react-icons/ri";

const NotFound = () => {
 const navigate = useNavigate();
 return (
  <div className="select-none  text-gray-900 flex items-center">
   <div className="container mx-auto p-4 flex flex-wrap items-center">
    <div className="select-none w-full md:w-5/12 flex justify-center p-4">
     <RiMovie2Line className="select-none mx-auto h-40 w-auto text-indigo-500" />
    </div>
    <div className="w-full md:w-7/12 text-center md:text-left p-4">
     <div className="text-6xl font-medium">404</div>
     <div className="text-xl md:text-3xl font-medium mb-4">
      Oops. Αυτή η σελίδα δεν υπάρχει...
     </div>
     <div className="text-lg mb-8">
      Μπορεί να έχετε πληκτρολογήσει εσφαλμένα την διεύθυνση ή η σελίδα έχει
      μετακινηθεί.
     </div>
     <button
      className="border border-indigo-600 rounded p-4 bg-transparent hover:bg-gray-800 font-semibold hover:text-white"
      onClick={() => navigate("/")}
     >
      Επιστροφή στην Κεντρική
     </button>
    </div>
   </div>
  </div>
 );
};

export default NotFound;
