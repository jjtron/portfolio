import { Client, QueryResult } from 'pg';
import pw from '../password';

const client = await new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: pw(),
    port: 5432,
});
client.connect();

export default async function handler(req, res) {
    try {
        const statement = 'INSERT INTO public.contactme (firstname, email, type, comment) VALUES (($1), ($2), ($3), ($4))';
        const result = await client.query(
          statement,
          [req.body.firstName, req.body.email, req.body.type, req.body.comment]
        );
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ success: false })
        throw new Error('Failed to insert record.');
    }
}