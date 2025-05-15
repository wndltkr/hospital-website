import { NextResponse } from 'next/server';
import { db } from '@/app/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const [rows] = await db.query('SELECT * FROM board WHERE boardId = "consultation" ORDER BY id DESC');
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ error: 'Failed to fetch consultation' }, { status: 500 });
  }
} 