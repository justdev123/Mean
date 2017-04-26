

module.exports = ResponseModel;

function ResponseModel(StatusCode,StatusDescription)
{
    this.StatusCode = StatusCode;
    this.StatusDescription = StatusDescription;
}

//require('util').inherits(module.exports,Error);