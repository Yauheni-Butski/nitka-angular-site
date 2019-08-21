import { Pipe, PipeTransform } from '@angular/core';
import { IImageCard } from '../../models/interfaces/IImageCard';

@Pipe({
  name: 'imageCardLink'
})
export class ImageCardLinkPipe implements PipeTransform {

  transform(value: IImageCard): any {
    const elementType = value.isLeaf === true ? 'section' : 'category';
    return `/${elementType}/${value.id}`;
  }
}
