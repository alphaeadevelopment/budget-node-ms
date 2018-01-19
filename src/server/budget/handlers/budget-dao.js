import DynamoDbDao from '@alphaeadev/dynamo-db-dao';

const schema = {
  year: 'S',
  id: 'S',
  name: 'S',
}
class BudgetDao extends DynamoDbDao {
  constructor() {
    super('Budget', schema);
  }
}

export default new BudgetDao();
