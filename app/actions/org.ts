'use server';

import { getLabAutomatedData, type LabAutomatedData } from '@/lib/github';

export async function fetchLiveLabData(): Promise<LabAutomatedData> {
  return await getLabAutomatedData();
}
