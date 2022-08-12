import { Pipe, PipeTransform } from '@angular/core';

// Criando um PIPE

@Pipe({
  name: 'printList',
  pure: false, // transformando em pipe IMPURO, para observar as mudanças
})
export class PrintListPipe implements PipeTransform { // PipeTransform é o que permite usar o método 'transform()'

  transform(value: String[], ...args: unknown[]): unknown {
    let returnStr = '';
    if(value.length){
      value.forEach(val => {
        returnStr = returnStr + ' ' + val;
      });
    }
    return returnStr;
  }

}
