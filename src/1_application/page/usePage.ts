import { useRecoilValue } from "recoil";
import IPageRepository from "../../2_domain/page/IPageRepository";
import Get from "../../lib/di/get";
import { pagesSelector } from "./pageSelector";

const usePage = () => {
  const repo = Get.get<IPageRepository>("IPageRepository");
  const pages = useRecoilValue(pagesSelector({ repo: repo }));
  return {
    pages: pages,
  };
};

export default usePage;
