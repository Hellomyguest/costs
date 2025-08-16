import { RightOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Select, Statistic, Typography } from "antd";
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
              <Flex vertical gap="16px" align="start">
                <Flex justify="space-between" style={{ width: "100%" }}>
                  <Title level={4} style={{ margin: "auto 0" }}>
                    Общий баланс
                  </Title>
                  <AddAccountModal middle />
                </Flex>
                <Statistic prefix="₽ " value={112893} precision={2} />
                <Statistic
                  prefix="+ "
                  value={20000}
                  precision={2}
                  valueStyle={{ color: "green" }}
                />
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
              <Flex vertical gap="16px" align="start">
                <Title
                  level={4}
                  style={{ textAlign: "start", margin: "auto 0" }}
                >
                  Доход
                </Title>
                <Statistic prefix="₽ " value={1000} precision={2} />
                <Statistic
                  prefix="+ "
                  value={200}
                  precision={2}
                  valueStyle={{ color: "green" }}
                />
              </Flex>
            </Card>
            <Card>
              <Flex vertical gap="16px" align="start">
                <Title
                  level={4}
                  style={{ textAlign: "start", margin: "auto 0" }}
                >
                  Расход
                </Title>
                <Statistic
                  prefix="- "
                  value={300}
                  precision={2}
                  valueStyle={{ color: "green" }}
                />
              </Flex>
            </Card>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};
