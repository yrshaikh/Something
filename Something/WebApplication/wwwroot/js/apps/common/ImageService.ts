export const ImageService = {
    getPlaceholderImage(height: number, width: number, text: string): string {
        const imgText = text ? text : 'placeholder';
        return `https://www.colorbook.io/imagecreator.php?hex=E7E5F1&width=${width}&height=${height}&text=${imgText}`;
    }
}