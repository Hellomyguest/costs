import { Flex, Select, Typography } from "antd";
import { AccountsTable } from "../../Features/AccountsTable/AccountsTable";
import { AddAccountModal } from "../../Features/AddAccountModal.tsx/AddAccountModal";

const { Title } = Typography;

export const PaymentsPage = () => {
  return (
    <Flex vertical gap="16px">
      <Title style={{ textAlign: "start" }}>Список счетов</Title>
      <Flex align="center" gap="16px">
        <AddAccountModal />
        <Select
          placeholder="Выбор банка"
          defaultValue={undefined}
          style={{ width: 120 }}
          //  onChange={handleChange}
          options={[
            { value: "june", label: "Июнь" },
            { value: "july", label: "Июль" },
            { value: "august", label: "Август" },
            { value: "september", label: "Сентябрь" },
          ]}
        />
        <Select
          placeholder="Выбор счета"
          defaultValue={undefined}
          style={{ width: 120 }}
          //  onChange={handleChange}
          options={[
            { value: "june", label: "Июнь" },
            { value: "july", label: "Июль" },
            { value: "august", label: "Август" },
            { value: "september", label: "Сентябрь" },
          ]}
        />
      </Flex>
      <AccountsTable />
    </Flex>
  );
};
