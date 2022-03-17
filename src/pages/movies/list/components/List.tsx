import { motion } from "framer-motion";
import React from "react";
import ListItem from "./ListItem";

type IProps = {
 children: any;
 setShowDate: React.Dispatch<React.SetStateAction<boolean>>;
};

const List = ({ children, setShowDate }: IProps) => {
 const listVariants = {
  visible: {
   opacity: 1,
   transition: {
    when: "beforeChildren",
    staggerChildren: 1,
   },
  },
  hidden: {
   opacity: 0,
   transition: {
    when: "afterChildren",
   },
  },
 };

 return (
  <motion.ul
   initial="hidden"
   animate="visible"
   variants={listVariants}
   className="flex flex-col justify-center items-center"
   onAnimationComplete={() => setShowDate(true)}
  >
   {children}
  </motion.ul>
 );
};

List.Item = ListItem;

export default List;
