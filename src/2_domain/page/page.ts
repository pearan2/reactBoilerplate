import React from "react";
import { LocalPath } from "../core/type";

type PageConstructorParam = {
  filePath: LocalPath;
  label: string;
  routePath: LocalPath;
};

class Page {
  readonly component: React.LazyExoticComponent<React.ComponentType<any>>;
  readonly label: string;
  readonly to: string;

  private constructor(param: PageConstructorParam) {
    this.component = React.lazy(
      () => import(`../../0_presentation/pages/${param.filePath}`)
    );
    this.label = param.label;
    this.to = param.routePath;
  }

  static fromJson = (json: any): Page => {
    return new Page({
      filePath: json["file_path"],
      label: json["label"],
      routePath: json["route_path"],
    });
  };
}

export default Page;
