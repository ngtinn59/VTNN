import { Storage } from "@google-cloud/storage"

const storage = new Storage({
    projectId: process.env.GCS_PROJECT_ID,
    credentials: {
        client_email: process.env.GCS_CLIENT_EMAIL,
        private_key: process.env.GCS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
})

export const bucket = storage.bucket(process.env.GCS_BUCKET_NAME!)

export async function uploadToGCS(file: Buffer, destination: string) {
    const blob = bucket.file(destination)
    await blob.save(file)
    return `https://storage.googleapis.com/${bucket.name}/${destination}`
}
