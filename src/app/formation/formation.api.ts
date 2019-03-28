import {Formation} from "../model/Formation";


export default class FormationApi {

  fetchFormation():Promise<Array<Formation>> {

    return new Promise((resolve)=> {

     let i:number= 1;


      setTimeout(()=> {
        resolve([
            new Formation(i++, 'PHP', 'php poo, impérative'),
            new Formation(i++, 'JS', 'javascript'),
            new Formation(i++, 'Angular', 'framework'),
            new Formation(i++, 'Java', 'avec utilisation de spring')
          ]
        )
      }, 2000);
    });
  }
}
