import { render, screen, waitFor } from "@testing-library/react";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import IPageRepository from "../../../2_domain/page/IPageRepository";
import Page from "../../../2_domain/page/page";
import Get from "../../../lib/di/get";
import Header from "./Header";

class MockPageRepo implements IPageRepository {
  async getMyPage(role: string): Promise<Page[]> {
    await new Promise((r) => setTimeout(r, 10));
    return [];
  }
}

describe("Header component", () => {
  test("Header component rendering test", async () => {
    // Arrange
    Get.put("IPageRepository", new MockPageRepo());
    render(
      <BrowserRouter>
        <RecoilRoot>
          <Suspense>
            <Header />
          </Suspense>
        </RecoilRoot>
      </BrowserRouter>
    );
    // Act

    // Assert
    await waitFor(async () => {
      const oliLogoElement = await screen.findByText("Oli", { exact: false });
      expect(oliLogoElement).not.toBeNull();
    });
  });
});
