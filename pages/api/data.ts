import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { GetItemCommand } from "@aws-sdk/client-dynamodb";
const REGION = process.env.AWS_DEFAULT_REGION;
const ddbClient = new DynamoDBClient({ region: REGION });

export const params = {
  TableName: "TABLE_NAME",
  Key: {
    KEY_NAME: { N: "KEY_VALUE" },
  },
  ProjectionExpression: "ATTRIBUTE_NAME",
};

export const run = async () => {
  const data = await ddbClient.send(new GetItemCommand(params));
  console.log("Success", data.Item);
  return data;
};
run();
