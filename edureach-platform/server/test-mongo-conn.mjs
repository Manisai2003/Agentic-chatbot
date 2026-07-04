import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = 'mongodb+srv://238r5a1210_db_user:238r5a1210@cluster0.aadkepp.mongodb.net/?appName=Cluster0';
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  await client.connect();
  await client.db('admin').command({ ping: 1 });
  console.log('PING_OK');
} catch (err) {
  console.error('ERROR_MESSAGE=' + (err instanceof Error ? err.message : String(err)));
  console.error('ERROR_CODE=' + (err && typeof err === 'object' && 'code' in err ? String(err.code) : 'N/A'));
} finally {
  await client.close();
}
