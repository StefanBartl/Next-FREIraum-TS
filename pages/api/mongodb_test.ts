import { v4 as uuidv4 } from 'uuid';
import clientPromise from '../../lib/mongodb';
import { NextApiRequest, NextApiResponse } from 'next'

const   MONGODB_DB = process.env.DATABASE_ALPHA as string, 
        MONGODB_COLLECTION_USERS = process.env.COLLECTION_USERS as string;   

export default async function MongoDB (req: NextApiRequest, res: NextApiResponse) {
  
  const client = await clientPromise;
  const db = client.db(MONGODB_DB);
  await db.collection(MONGODB_COLLECTION_USERS)
          .insertOne({id: uuidv4(),  username: 'TESTOBJECT', createdAt: new Date()}, (err, data) => {
            if (err) console.log(err);
            res.send(data);
          });
}

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }