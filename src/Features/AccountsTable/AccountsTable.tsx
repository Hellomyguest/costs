import { RightOutlined } from "@ant-design/icons";
import { Button, Table, type TableColumnsType } from "antd";
import { useNavigate, type NavigateFunction } from "react-router";

type TAccount = {
  key: string;
  bank: string;
  children: {
    account: string;
    dateOpen: string;
    dateClose: string;
    currency: string;
    value: string;
  }[];
};

const buildColumns = (
  navigate: NavigateFunction
): TableColumnsType<TAccount> => [
  {
    title: "Банк",
    dataIndex: "bank",
    key: "bank",
  },
  {
    title: "Счет",
    dataIndex: "account",
    key: "account",
  },
  {
    title: "Дата открытия",
    dataIndex: "dateOpen",
    key: "dateOpen",
  },
  {
    title: "Дата закрытия",
    dataIndex: "dateClose",
    key: "dateClose",
  },
  {
    title: "Валюта счета",
    dataIndex: "currency",
    key: "currency",
  },
  {
    title: "Сумма",
    dataIndex: "value",
    key: "value",
  },
  {
    title: "",
    fixed: "right",
    width: 48,
    render: (value) => {
      if (value.children) return null;
      return (
        <Button
          color="primary"
          variant="text"
          style={{ padding: 0 }}
          onClick={() => navigate(`/operations/:${value.account}`)}
        >
          <RightOutlined />
        </Button>
      );
    },
  },
];

const MOCK = [
  {
    key: "alfa1",
    bank: "Альфа-банк",
    children: [
      {
        account: "Alfa1",
        dateOpen: "01.01.2020",
        dateClose: "31.07.2020",
        currency: "RUB",
        value: "50 000",
      },
      {
        account: "Альфа-счет2",
        dateOpen: "01.01.2020",
        dateClose: "31.07.2020",
        currency: "RUB",
        value: "50 000",
      },
    ],
  },
];

export const AccountsTable = () => {
  const navigate = useNavigate();

  const columns = buildColumns(navigate);
  return (
    <Table<TAccount>
      columns={columns}
      dataSource={MOCK}
      pagination={false}
      expandable={{ defaultExpandAllRows: true }}
    />
  );
};
