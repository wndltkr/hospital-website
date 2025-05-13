import { NextResponse } from 'next/server';
import { db } from '@/app/lib/db';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export const dynamic = 'force-dynamic';

interface FileResult {
  insertId: number;
}

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
  context: { params: Promise<{ boardId: string }> }
) {
  try {
    const params = await context.params;
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
  request: Request,
  context: { params: Promise<{ boardId: string }> }
) {
  try {
    const params = await context.params;
    const formData = await request.formData();
    const file = formData.get('image') as File;
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const youtubeUrl = formData.get('youtubeUrl') as string;
    const username = formData.get('username') as string;
    const boardId = params.boardId;

    if (!title || !content) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    let fileId = null;
    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // 파일명 생성 (원본 파일명 유지)
      const originalFileName = file.name;
      const filePath = join(process.cwd(), 'public/attach/images', originalFileName);

      // 파일 저장
      await writeFile(filePath, buffer);
      
      // files 테이블에 파일 정보 저장
      const [fileResult] = await db.query(
        'INSERT INTO files (url, fileName) VALUES (?, ?)',
        [`/attach/images/${originalFileName}`, originalFileName]
      );
      fileId = (fileResult as FileResult).insertId;
    }

    // DB에 게시글 저장
    await db.query(
      `INSERT INTO board (boardId, title, content, fileId, youtubeUrl, username, date) 
       VALUES (?, ?, ?, ?, ?, ?, NOW())`,
      [boardId, title, content, fileId, youtubeUrl, username]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: 'Error creating post' },
      { status: 500 }
    );
  }
} 