import { NextRequest, NextResponse } from 'next/server'
import { adminAuth } from '@/lib/firebase-admin-server'

// These legacy public-site routes must never issue upload credentials or write
// to Storage without a verified Firebase identity.
export async function requireUploadAuth(request: NextRequest): Promise<NextResponse | null> {
  if (!process.env.FIREBASE_PROJECT_ID || !adminAuth) {
    return NextResponse.json({ error: 'Upload service unavailable' }, { status: 503 })
  }

  const match = /^Bearer (\S+)$/i.exec(request.headers.get('authorization') || '')
  if (!match) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
  }

  try {
    await adminAuth.verifyIdToken(match[1])
    return null
  } catch {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
  }
}
