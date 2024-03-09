import React from "react";
import { Webdev } from "./Webdev";
import { Dm } from "./Dm";
import { Fcpit } from "./Fcpit";
import { Python } from "./Python";
import { Dbms } from "./Dbms";
import { Ds } from "./Ds";
import { Ml } from "./Ml";
import { Gd } from "./Gd";
import { Gaming } from "./Gaming";
import { Communication } from "./Communication";
import { Git } from "./Git";
import { Php } from "./Php";
import { Java } from "./Java";
import { Linux } from "./Linux";
import { Dataware } from "./Dataware";
export const Subjects = () => {
  return (
    <div className="my-[30px]">
      <Webdev />
      <Fcpit />
      <Python />
      <Dbms />
      <Git />
      <Dataware/>
      <Communication />
      <Ds />
      <Java />
      <Linux />
      <Ml />
      <Php />
      <Gd />
      <Gaming />

      <Dm />
    </div>
  );
};
