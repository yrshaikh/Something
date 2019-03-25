import { ImageService } from "./ImageService";

describe('imageservice tests', function(){
    it('should work as expected', function(){
        const actual = ImageService.getPlaceholderImage(500, 200, "hello");
        const expected = `https://www.colorbook.io/imagecreator.php?hex=E7E5F1&width=200&height=500&text=hello`;
        expect(actual).toBe(expected);
    })
});