import { NextRequest, NextResponse } from 'next/server';
import { getAI } from '@/lib/ai/claude-client';
import { getMockAI } from '@/lib/ai/mock-client';

export async function POST(request: NextRequest) {
  try {
    const { scenarioType, messages, successCriteria } = await request.json();

    // Проверяем, сконфигурирован ли реальный AI
    const realAI = getAI();

    if (realAI.isConfigured()) {
      // Используем реальный Claude API
      console.log('🤖 Using real Claude API for evaluation');
      const result = await realAI.evaluateDialog(
        scenarioType,
        messages,
        successCriteria
      );
      return NextResponse.json(result);
    } else {
      // Используем mock AI для тестирования
      console.log('🎭 Using mock AI for evaluation (no API key configured)');
      const mockAI = getMockAI();
      const result = await mockAI.evaluateDialog(
        scenarioType,
        messages,
        successCriteria
      );
      return NextResponse.json(result);
    }
  } catch (error) {
    console.error('Evaluate API Error:', error);
    return NextResponse.json(
      { error: 'Не удалось оценить диалог' },
      { status: 500 }
    );
  }
}
