import { Flex, Select, Typography } from "antd";
import { useParams } from "react-router";
import { OperationsTable } from "../../Features/OperationsTable/OperationsTable";
import { AddOperationModal } from "../../Features/AddOperationModal/AddOperationModal";

const { Title } = Typography;

export const AccountOperationsPage = () => {
  const { account } = useParams();

  return (
    <Flex vertical gap="16px">
      <Title
        style={{ textAlign: "start" }}
      >{`Список операций по счету ${account?.replace(":", "")}`}</Title>
      <Flex align="center" gap="16px">
        <AddOperationModal />
        <Select
          defaultValue="june"
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
      <OperationsTable />
    </Flex>
  );
};
