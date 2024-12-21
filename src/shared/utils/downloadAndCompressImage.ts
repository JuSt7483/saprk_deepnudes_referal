import sharp from "sharp"

export async function downloadAndCompressImage(imageUrl: string, maxSizeInMB: number, width?: number, height?: number) {
    try {
        // Скачивание изображения с помощью fetch
        const response = await fetch(imageUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch image. Status: ${response.status}`);
        }
        const buffer = Buffer.from(await response.arrayBuffer());

        // Проверка исходного размера изображения
        console.log(`Original Image Size: ${buffer.length / 1024 / 1024} MB`);

        // Уменьшение изображения
        let compressedBuffer = buffer;
        let quality = 80; // Начальное качество

        if(width && height)
        {
            compressedBuffer = await sharp(compressedBuffer)
                .resize({ width, height })
                .toBuffer()
        }

        while (compressedBuffer.length > maxSizeInMB * 1024 * 1024) {
            compressedBuffer = await sharp(buffer)
                .jpeg({ quality })
                .toBuffer();

            quality -= 10; // Постепенное снижение качества
            if (quality < 10) break; // Минимальное качество 10%
        }

        console.log(`Compressed Image Size: ${compressedBuffer.length / 1024 / 1024} MB`);

        // Преобразование в Base64
        const base64String = compressedBuffer.toString('base64');

        // Resizing if need
        return base64String;
    } catch (error) {
        console.error('Error processing image:', error);
        throw error;
    }
}