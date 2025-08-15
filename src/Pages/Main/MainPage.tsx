import { RightOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Select, Typography } from "antd";
import { AddAccountModal } from "../../Features/AddAccountModal.tsx/AddAccountModal";
import { AddOperationModal } from "../../Features/AddOperationModal/AddOperationModal";
import { useNavigate } from "react-router";

const { Title } = Typography;

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <Flex vertical gap="16px">
      <Title style={{ textAlign: "start" }}>Мой дашборд</Title>
      <Flex justify="space-between">
        <Card style={{ width: 400 }}>
          <Flex gap={16} vertical>
            <Flex align="center" justify="space-between">
              <Title level={3} style={{ margin: 0 }}>
                Мои счета
              </Title>
              <Button
                icon={<RightOutlined />}
                iconPosition="end"
                color="primary"
                variant="text"
                onClick={() => navigate("/payments")}
              >
                Все
              </Button>
            </Flex>
            <Card>
              <Flex justify="space-between">
                <Title level={4} style={{ margin: "auto 0" }}>
                  Общий баланс
                </Title>
                <AddAccountModal middle />
                {/* <Button
                  color="primary"
                  variant="outlined"
                  size="middle"
                  icon={<PlusOutlined />}
                  shape="circle"
                /> */}
              </Flex>
            </Card>
            <Card>
              <Flex justify="space-between">
                <Title level={4} style={{ margin: "auto 0" }}>
                  Последние операции
                </Title>
                <AddOperationModal middle />
              </Flex>
            </Card>
          </Flex>
        </Card>
        <Card style={{ width: 400 }}>
          <Flex vertical gap={16}>
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
            <Card>
              <Title level={4} style={{ textAlign: "start", margin: "auto 0" }}>
                Доход
              </Title>
            </Card>
            <Card>
              <Title level={4} style={{ textAlign: "start", margin: "auto 0" }}>
                Расход
              </Title>
            </Card>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};
