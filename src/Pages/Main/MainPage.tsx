import { PlusOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Select, Typography } from "antd";

const { Title } = Typography;

export const MainPage = () => {
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
                icon={<RightOutlined style={{ color: "blue" }} />}
                iconPosition="end"
                type="text"
              >
                Все
              </Button>
            </Flex>
            <Card>
              <Flex justify="space-between">
                <Title level={4} style={{ margin: "auto 0" }}>
                  Общий баланс
                </Title>
                <Button
                  color="primary"
                  variant="outlined"
                  size="large"
                  icon={<PlusOutlined />}
                  shape="circle"
                />
              </Flex>
            </Card>
            <Card>
              <Flex justify="space-between">
                <Title level={4} style={{ margin: "auto 0" }}>
                  Последние операции
                </Title>
                <Button
                  color="primary"
                  variant="outlined"
                  size="large"
                  icon={<PlusOutlined />}
                  shape="circle"
                />
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
              <Title level={4} style={{ textAlign: "start" }}>
                Доход
              </Title>
            </Card>
            <Card>
              <Title level={4} style={{ textAlign: "start" }}>
                Расход
              </Title>
            </Card>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};
