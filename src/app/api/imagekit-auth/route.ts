import { NextRequest, NextResponse } from 'next/server'
import ImageKit from 'imagekit'
import { requireUploadAuth } from '@/lib/require-upload-auth'

// Get ImageKit credentials from environment
const privateKey = process.env.IMAGEKIT_PRIVATE_KEY

// Only initialize ImageKit if we have the private key
const getImageKit = () => {
  if (!privateKey) {
    throw new Error('IMAGEKIT_PRIVATE_KEY environment variable is not set')
  }
  
  return new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY || 'public_BkD10I8kVc0GOzh5B+6y89y/l2Q=',
    privateKey: privateKey,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/eenbmk547'
  })
}

export async function GET(request: NextRequest) {
  const denied = await requireUploadAuth(request)
  if (denied) return denied

  try {
    const imagekit = getImageKit()
    const authenticationParameters = imagekit.getAuthenticationParameters()
    return NextResponse.json(authenticationParameters, {
      headers: { 'Cache-Control': 'no-store' }
    })
  } catch (error) {
    console.error('ImageKit auth error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to generate authentication parameters' },
      { status: 500 }
    )
  }
}
