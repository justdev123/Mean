module.exports = ResponseModel;

function ResponseModel(StatusCode,StatusDescription,RecordSet){
    this.StatusCode= StatusCode;
    this.StatusDescription = StatusDescription;
    this.RecordSet= RecordSet;
}