
export class base{
    id='';
    data=[];
    constructor(id, data){
        this.id=id;
        this.data=data;
    }

    setHtmlContent(content){
        this.id.innerHTML=content;
    }
};