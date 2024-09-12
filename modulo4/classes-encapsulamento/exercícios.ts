// 1 - 
// a - ele serve para typar e consolidar um tipo de acesso seguro para set e get, podemos chamar como se fosse uma função.

// b - Não chamou nenhuma pois não tem referência da Transaction

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  
  }

//   2 - 
//   a - 

  class Transaction {
    description: string
    value: number
    date: string

    constructor(description: string, value: number, date: string){
        this.description = description
        this.value = value
        this.date = date
    }
  }

  class bank  {
    private accounts : UserAccount[];

    constructor(accounts : UserAccount[]){
        this.accounts = accounts
    }
  }