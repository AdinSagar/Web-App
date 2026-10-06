import { NextRequest, NextResponse } from 'next/server'
import { getStorage } from 'firebase-admin/storage'
import { randomUUID } from 'node:crypto'
import { requireUploadAuth } from '@/lib/require-upload-auth'
import { adminApp } from '@/lib/firebase-admin-server'

export async function POST(request: NextRequest) {
  const denied = await requireUploadAuth(request)
  if (denied) return denied
  if (!adminApp || !process.env.FIREBASE_STORAGE_BUCKET) {
    return NextResponse.json({ success: false, error: 'Upload service unavailable' }, { status: 503 })
  }

  try {
    const contentLength = Number(request.headers.get('content-length'))
    if (contentLength > 5 * 1024 * 1024 + 64 * 1024) {
      return NextResponse.json({ success: false, error: 'Image must be 5 MB or smaller' }, { status: 413 })
    }
    const formData = await request.formData()
    const file = formData.get('file')

    if (!(file instanceof File)) {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      )
    }

    const allowedTypes: Record<string, string> = {
      'image/jpeg': '.jpg',
      'image/png': '.png',
      'image/webp': '.webp'
    }
    if (!allowedTypes[file.type] || file.size === 0 || file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, error: 'Upload a JPEG, PNG or WebP image up to 5 MB' },
        { status: 400 }
      )
    }

    // Convert File to Buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    const finalFileName = `${randomUUID()}${allowedTypes[file.type]}`
    const filePath = `products/${finalFileName}`

    try {
      // Explicitly pass bucket name to avoid "bucket not specified" error
      const bucket = getStorage(adminApp).bucket(process.env.FIREBASE_STORAGE_BUCKET)
      const fileRef = bucket.file(filePath)
      
      await fileRef.save(buffer, {
        metadata: {
          contentType: file.type,
        },
      })
      
      // Make the file publicly accessible
      await fileRef.makePublic()
      
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filePath}`

      return NextResponse.json({
        success: true,
        url: publicUrl,
        fileId: finalFileName,
        name: finalFileName
      })
    } catch (storageError) {
      console.error('Firebase Storage error:', storageError)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Storage upload failed. Please ensure Firebase Storage is properly configured.' 
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Upload failed' 
      },
      { status: 500 }
    )
  }
}
