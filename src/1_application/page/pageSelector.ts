import { selectorFamily } from "recoil";
import IPageRepository from "../../2_domain/page/IPageRepository";
import Page from "../../2_domain/page/page";
import { userAtom } from "../user/userAtom";

interface PagesSelectorParamInterface {
  repo: IPageRepository;
}

interface PagesSelectorParams extends PagesSelectorParamInterface {
  [key: string]: any;
}

export const pagesSelector = selectorFamily<Page[], PagesSelectorParams>({
  key: "pagesSelectorKey",
  get:
    (param) =>
    async ({ get }) => {
      const user = get(userAtom);
      const pages = await param.repo.getMyPage(user.role);
      return pages;
    },
});
