"use client";
import React from "react";
import { Transition$1, Variants, motion } from "framer-motion";
interface Props {
  children: React.ReactNode;
  transition: Transition$1;
  variants: Variants;
  classNames: string;
}
const Motion: React.FC<Props> = ({ children, transition, variants, classNames, ...restProps }) => {
  return (
    <motion.div
      {...restProps}
      // viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      variants={variants}
      transition={transition}
      className={`w-full ${classNames}`}>
      {children}
    </motion.div>
  );
};

export default Motion;
