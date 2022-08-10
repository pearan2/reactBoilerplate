import Get from "../../lib/di/get";
import PageRepository from "../page/PageRepository";

const dependencyInject = () => {
  Get.put("IPageRepository", new PageRepository());
};

export default dependencyInject;
