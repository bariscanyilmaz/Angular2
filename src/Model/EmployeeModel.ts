export class EmployeeModel{
    firstName:string;
    lastName:string;
    isFullTime:boolean;
    paymentType:string;
    language:string;
    /**
     *
     */
    constructor(FirstName:string,LastName:string,IsFullTime:boolean,PaymentType:string,Language:string="default") {
        this.firstName=FirstName;
        this.lastName=LastName;
        this.isFullTime=IsFullTime;
        this.paymentType=PaymentType;
        this.language=Language;
    }
}