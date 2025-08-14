import { Table, type TableColumnsType } from "antd";

type TOperation = {
  key: string;
  type: string;
  value: string;
  children: {
    operation: string;
    date: string;
    category: string;
    project: string;
    value: string;
  }[];
};

const columns: TableColumnsType<TOperation> = [
  {
    title: "Тип операции",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Операция",
    dataIndex: "operation",
    key: "operation",
  },
  {
    title: "Дата операции",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Категория",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Проект",
    dataIndex: "project",
    key: "project",
  },
  {
    title: "Сумма",
    dataIndex: "value",
    key: "value",
  },
];

const MOCK = [
  {
    key: "expense",
    type: "Расход",
    value: "160",
    children: [
      {
        operation: "Перекресток",
        date: "31.07.2020",
        category: "Продукты",
        project: "Ежедневные расходы",
        value: "100",
      },
      {
        operation: "Пятерочка",
        date: "21.07.2020",
        category: "Продукты",
        project: "Ежедневные расходы",
        value: "60",
      },
    ],
  },
  {
    key: "income",
    type: "Доход",
    value: "10",
    children: [
      {
        operation: "Кэшбэк",
        date: "01.07.2020",
        category: "Кэшбэк",
        project: "",
        value: "10",
      },
    ],
  },
];

export const OperationsTable = () => {
  return (
    <Table<TOperation>
      columns={columns}
      dataSource={MOCK}
      pagination={false}
      expandable={{ defaultExpandAllRows: true }}
    />
  );
};
