type IProps = {
 title: string;
 children: any;
};
const MovieItem = ({ title, children }: IProps) => {
 return (
  <div className="mt-5 flex flex-row flex-wrap justify-start items-center">
   <div className="text-indigo-600 font-normal text-lg mr-3">{title}:</div>
   {children}
  </div>
 );
};

export default MovieItem;
