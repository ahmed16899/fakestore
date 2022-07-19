import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: any[], filterText:string):any {
    if( filterText == '' ||products.length == 0)
    {    
      return products
    }
    else
    {
      const arr: any[] =[] 
      for(let i = 0 ; i<products.length ; i++)
      {
        if(products[i].title.toLowerCase().includes(filterText.toLowerCase()))
        {
            arr.push(products[i])
        }
      }
      //console.log(products)

      return arr

    }
  }

}
