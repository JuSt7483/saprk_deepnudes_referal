import sharp from "sharp";

export async function getImageDimensions(base64String: string) {
    // Remove the prefix (e.g., "data:image/jpeg;base64,") if present
    const base64Data = base64String.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(base64Data, "base64");

    // Use sharp to get image metadata
    try {
        const metadata = await sharp(buffer).metadata();
        return { width: metadata.width, height: metadata.height };
    } catch (error) {
        console.error("Error getting dimensions:", error);
        throw error;
    }
}