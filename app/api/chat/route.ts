import { NextRequest, NextResponse } from 'next/server';
import { getAI } from '@/lib/ai/claude-client';
import { getMockAI } from '@/lib/ai/mock-client';

export async function POST(request: NextRequest) {
  try {
    const { scenarioType, messages, clientPersona } = await request.json();

    // Проверяем, сконфигурирован ли реальный AI
    const realAI = getAI();
    console.log('isConfigured:', realAI.isConfigured());

    if (realAI.isConfigured()) {
      // Используем реальный Claude API
      console.log('🤖 Using real Claude API');
      const response = await realAI.generateResponse(
        scenarioType,
        messages,
        clientPersona
      );
      return NextResponse.json(response);
    } else {
      // Используем mock AI для тестирования
      console.log('🎭 Using mock AI (no API key configured)');
      const mockAI = getMockAI();
      const response = await mockAI.generateResponse(
        scenarioType,
        messages,
        clientPersona
      );
      return NextResponse.json(response);
    }
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Не удалось получить ответ от AI' },
      { status: 500 }
    );
  }
}
