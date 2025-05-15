import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/app/lib/db';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { RowDataPacket } from 'mysql2';

export const dynamic = 'force-dynamic';

interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
  boardId: string;
  fileId: number | null;
  youtubeUrl: string | null;
  username: string | null;
}

// 게시글 목록 가져오기
export async function GET(
  request: Request,
  context: { params: { boardId: string } }
) {
  try {
    const params = context.params;
    const [rows] = await db.query(
      'SELECT id, title, content, date, boardId, fileId, youtubeUrl, username FROM board WHERE boardId = ? ORDER BY id DESC',
      [params.boardId]
    );
    return NextResponse.json(rows as Post[]);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Error fetching posts' },
      { status: 500 }
    );
  }
}

// 새 게시글 작성
export async function POST(
  request: NextRequest,
  { params }: { params: { boardId: string } }
) {
  try {
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const youtubeUrl = formData.get('youtubeUrl') as string;
    const username = formData.get('username') as string;
    const file = formData.get('file') as File | null;

    if (!title || !content) {
      return NextResponse.json(
        { error: '제목과 내용은 필수입니다.' },
        { status: 400 }
      );
    }

    let fileId = null;
    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      // 파일 확장자 추출
      const fileExtension = file.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExtension}`;
      const filePath = join(process.cwd(), 'public/attach/images', fileName);
      
      // 파일 저장
      await writeFile(filePath, buffer);
      
      // files 테이블에 파일 정보 저장
      await db.query(
        'INSERT INTO files (url, fileName) VALUES (?, ?)',
        [`/attach/images/${fileName}`, fileName]
      );
      
      // insertId 가져오기
      const [rows] = await db.query<RowDataPacket[]>(
        'SELECT id FROM files WHERE url = ? ORDER BY id DESC LIMIT 1',
        [`/attach/images/${fileName}`]
      );
      
      if (Array.isArray(rows) && rows.length > 0) {
        fileId = (rows[0] as RowDataPacket).id;
      }
    }

    // 게시글 저장
    await db.query(
      'INSERT INTO board (boardId, title, content, youtubeUrl, username, fileId, date) VALUES (?, ?, ?, ?, ?, ?, NOW())',
      [params.boardId, title, content, youtubeUrl || null, username || null, fileId]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in POST /api/admin/boards/[boardId]:', error);
    return NextResponse.json(
      { error: '게시글 작성에 실패했습니다.' },
      { status: 500 }
    );
  }
} 