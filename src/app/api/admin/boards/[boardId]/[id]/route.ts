import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/app/lib/db';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

export const dynamic = 'force-dynamic';

interface Post extends RowDataPacket {
  id: number;
  title: string;
  content: string;
  date: string;
  boardId: number;
  fileId: number | null;
  youtubeUrl: string | null;
  username: string;
  imageUrl: string | null;
}

type RouteContext = {
  params: {
    boardId: string;
    id: string;
  };
};

export async function DELETE(
  request: NextRequest,
  context: RouteContext
) {
  try {
    await db.query<ResultSetHeader>(
      'DELETE FROM board WHERE boardId = ? AND id = ?',
      [context.params.boardId, context.params.id]
    );

    return NextResponse.json({ message: '게시글이 삭제되었습니다.' });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { error: '게시글 삭제에 실패했습니다.' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const [posts] = await db.query<Post[]>(`
      SELECT 
        p.*,
        f.url as imageUrl
      FROM board p
      LEFT JOIN files f ON p.fileId = f.id
      WHERE p.boardId = ? AND p.id = ?
    `, [context.params.boardId, context.params.id]);

    if (!posts || posts.length === 0) {
      return NextResponse.json(
        { error: '게시글을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    return NextResponse.json(posts[0]);
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      { error: '게시글을 가져오는데 실패했습니다.' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const fileId = formData.get('fileId') ? parseInt(formData.get('fileId') as string) : null;
    const youtubeUrl = formData.get('youtubeUrl') as string | null;
    const username = formData.get('username') as string;

    // 필수 필드 검증
    if (!title || !content || !username) {
      return NextResponse.json(
        { error: '필수 정보가 누락되었습니다.' },
        { status: 400 }
      );
    }

    // 게시글 수정
    await db.query<ResultSetHeader>(`
      UPDATE board
      SET
        title = ?,
        content = ?,
        fileId = ?,
        youtubeUrl = ?,
        username = ?
      WHERE boardId = ? AND id = ?
    `, [
      title,
      content,
      fileId,
      youtubeUrl,
      username,
      context.params.boardId,
      context.params.id
    ]);

    // 수정된 게시글 조회
    const [updatedPosts] = await db.query<Post[]>(`
      SELECT 
        p.*,
        f.url as imageUrl
      FROM board p
      LEFT JOIN files f ON p.fileId = f.id
      WHERE p.boardId = ? AND p.id = ?
    `, [context.params.boardId, context.params.id]);

    if (!updatedPosts || updatedPosts.length === 0) {
      throw new Error('수정된 게시글을 찾을 수 없습니다.');
    }

    return NextResponse.json(updatedPosts[0]);
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json(
      { error: '게시글 수정에 실패했습니다.' },
      { status: 500 }
    );
  }
} 