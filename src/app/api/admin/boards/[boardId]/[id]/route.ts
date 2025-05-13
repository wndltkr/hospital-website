import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/app/lib/db';
import { unlink } from 'fs/promises';
import { join } from 'path';

export const dynamic = 'force-dynamic';

interface Post {
  fileId: number | null;
  url: string | null;
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ boardId: string; id: string }> }
) {
  try {
    const params = await context.params;
    const id = parseInt(params.id, 10);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid ID format' },
        { status: 400 }
      );
    }

    // 게시글 정보 가져오기
    const [rows] = await db.query(
      'SELECT b.fileId, f.url FROM board b LEFT JOIN files f ON b.fileId = f.id WHERE b.id = ? AND b.boardId = ?',
      [id, params.boardId]
    );

    if (!Array.isArray(rows) || rows.length === 0) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    const post = rows[0] as Post;
    
    // 이미지 파일이 있는 경우 삭제
    if (post.fileId && post.url) {
      const filePath = join(process.cwd(), 'public', post.url);
      try {
        await unlink(filePath);
        // files 테이블에서도 삭제
        await db.query('DELETE FROM files WHERE id = ?', [post.fileId]);
      } catch (error) {
        console.error('Error deleting file from filesystem:', error);
      }
    }

    // DB에서 게시글 삭제
    await db.query(
      'DELETE FROM board WHERE id = ? AND boardId = ?',
      [id, params.boardId]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { error: 'Error deleting post' },
      { status: 500 }
    );
  }
} 