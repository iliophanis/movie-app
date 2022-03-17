const Footer = () => {
 const thisYear = new Date().getFullYear();
 return (
  <footer className="bg-gray-800">
   <div className="border-t-2 border-gray flex flex-col items-center">
    <div className="sm:w-2/3 text-center py-3">
     <p className="text-sm text-white font-bold mb-2 select-none">
      Δικαιώματα © {thisYear} iliophanis.github.io
     </p>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
