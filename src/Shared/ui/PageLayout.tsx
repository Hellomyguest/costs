import { ConfigProvider, Input, Layout, Menu, type MenuProps } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import type { ReactNode } from "react";
import { TABS } from "../const";
import { useLocation, useNavigate } from "react-router";
import type { SearchProps } from "antd/es/input";

const { Search } = Input;

export const PageLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick: MenuProps["onClick"] = (menuInfo) => {
    navigate(menuInfo.key);
  };

  const handleSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemHeight: "40px",
            groupTitleLineHeight: 1,
            horizontalLineHeight: "40px !important",
            algorithm: true,
          },
        },
      }}
    >
      <Layout style={{ paddingBottom: 48 }}>
        <Header
          style={{
            display: "flex",
            height: "48px",
            //  width: "80vw",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={TABS}
            // style={{ flex: 1, minWidth: 0 }}
            onClick={handleMenuClick}
          />
          <Search
            style={{ width: "auto" }}
            placeholder="Поиск"
            onSearch={handleSearch}
            enterButton
          />
        </Header>
        <Content style={{ padding: "0 48px" }}>{children}</Content>
      </Layout>
    </ConfigProvider>
  );
};
