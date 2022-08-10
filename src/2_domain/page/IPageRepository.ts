import Page from "./page";

interface IPageRepository {
  getMyPage(role:string): Promise<Page[]>;
}

export default IPageRepository;
