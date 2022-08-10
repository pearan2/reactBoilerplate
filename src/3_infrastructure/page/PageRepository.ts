import Page from "../../2_domain/page/page";
import IPageRepository from "../../2_domain/page/IPageRepository";

class PageRepository implements IPageRepository {
  async getMyPage(role: string): Promise<Page[]> {
    await new Promise((r) => setTimeout(r, 500));
    if (role === "user") {
      return [
        Page.fromJson({
          file_path: "Setting",
          label: "Setting",
          route_path: "/setting",
        }),
      ];
    } else {
      return [
        Page.fromJson({
          file_path: "Setting",
          label: "Setting",
          route_path: "/setting",
        }),
        Page.fromJson({
          file_path: "About",
          label: "About",
          route_path: "/about",
        }),
      ];
    }
  }
}

export default PageRepository;
