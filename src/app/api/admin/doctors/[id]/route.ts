import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/app/lib/db';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

export const dynamic = 'force-dynamic';

interface Doctor extends RowDataPacket {
  id: number;
  name: string;
  department: string;
  position: string;
  treatment: string;
  field: string;
  biography: string;
  thesis: string;
  note: string;
  picId: number | null;
  useyn: 'Y' | 'N';
  imageUrl: string | null;
}

interface RouteParams {
  params: {
    id: string;
  };
}

export async function GET(
  request: NextRequest,
  context: RouteParams
) {
  try {
    const [doctors] = await db.query<Doctor[]>(`
      SELECT 
        d.*,
        f.url as imageUrl
      FROM doctors d
      LEFT JOIN files f ON d.picId = f.id
      WHERE d.id = ?
    `, [context.params.id]);

    if (!doctors || doctors.length === 0) {
      return NextResponse.json(
        { error: '의료진을 찾을 수 없습니다.' },
        { status: 404 }
      );
    }

    // JSON 문자열을 파싱
    const doctor = {
      ...doctors[0],
      treatment: JSON.parse(doctors[0].treatment || '[]'),
      biography: JSON.parse(doctors[0].biography || '[]'),
      thesis: JSON.parse(doctors[0].thesis || '[]')
    };

    return NextResponse.json(doctor);
  } catch (error) {
    console.error('Error fetching doctor:', error);
    return NextResponse.json(
      { error: '의료진 정보를 가져오는데 실패했습니다.' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  context: RouteParams
) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const department = formData.get('department') as string;
    const position = formData.get('position') as string;
    const treatment = formData.get('treatment') as string;
    const field = formData.get('field') as string;
    const biography = formData.get('biography') as string;
    const thesis = formData.get('thesis') as string;
    const note = formData.get('note') as string;
    const useyn = formData.get('useyn') as 'Y' | 'N';
    const file = formData.get('file') as File | null;

    // 필수 필드 검증
    if (!name || !department || !position || !field) {
      return NextResponse.json(
        { error: '필수 정보가 누락되었습니다.' },
        { status: 400 }
      );
    }

    let picId: number | null = null;
    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileExtension = file.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExtension}`;
      const uploadsDir = join(process.cwd(), 'public', 'attach', 'images');
      const filePath = join(uploadsDir, fileName);
      await mkdir(uploadsDir, { recursive: true });
      await writeFile(filePath, buffer);
      // files 테이블에 저장
      await db.query<ResultSetHeader>(
        'INSERT INTO files (url, fileName) VALUES (?, ?)',
        [`/attach/images/${fileName}`, fileName]
      );
      // insertId 가져오기
      const [rows] = await db.query<RowDataPacket[]>(
        'SELECT id FROM files WHERE url = ? ORDER BY id DESC LIMIT 1',
        [`/attach/images/${fileName}`]
      );
      if (Array.isArray(rows) && rows.length > 0) {
        picId = rows[0].id;
      }
    }

    // 의료진 정보 수정
    await db.query<ResultSetHeader>(`
      UPDATE doctors
      SET
        name = ?,
        department = ?,
        position = ?,
        treatment = ?,
        field = ?,
        biography = ?,
        thesis = ?,
        note = ?,
        picId = ?,
        useyn = ?
      WHERE id = ?
    `, [
      name,
      department,
      position,
      treatment,
      field,
      biography,
      thesis,
      note,
      picId,
      useyn,
      context.params.id
    ]);

    // 수정된 의료진 정보 조회
    const [updatedDoctors] = await db.query<Doctor[]>(`
      SELECT 
        d.*,
        f.url as imageUrl
      FROM doctors d
      LEFT JOIN files f ON d.picId = f.id
      WHERE d.id = ?
    `, [context.params.id]);

    if (!updatedDoctors || updatedDoctors.length === 0) {
      throw new Error('수정된 의료진을 찾을 수 없습니다.');
    }

    // JSON 문자열을 파싱
    const updatedDoctor = {
      ...updatedDoctors[0],
      treatment: JSON.parse(updatedDoctors[0].treatment || '[]'),
      biography: JSON.parse(updatedDoctors[0].biography || '[]'),
      thesis: JSON.parse(updatedDoctors[0].thesis || '[]')
    };

    return NextResponse.json(updatedDoctor);
  } catch (error) {
    console.error('Error updating doctor:', error);
    return NextResponse.json(
      { error: '의료진 정보 수정에 실패했습니다.' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  context: RouteParams
) {
  try {
    await db.query<ResultSetHeader>(
      'DELETE FROM doctors WHERE id = ?',
      [context.params.id]
    );

    return NextResponse.json({ message: '의료진이 삭제되었습니다.' });
  } catch (error) {
    console.error('Error deleting doctor:', error);
    return NextResponse.json(
      { error: '의료진 삭제에 실패했습니다.' },
      { status: 500 }
    );
  }
} 