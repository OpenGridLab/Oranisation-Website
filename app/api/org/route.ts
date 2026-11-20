import { NextResponse } from 'next/server';
import { getLabAutomatedData } from '@/lib/github';

export const revalidate = 300;

export async function GET() {
  try {
    const data = await getLabAutomatedData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch lab data' }, { status: 500 });
  }
}
