class BankAccount {
  constructor(name,initialDeposit) {
    this.name = name;
    this.initialDeposit = initialDeposit;
    this.total = this.initialDeposit;
  }
}

BankAccount.prototype.deposit = function(amount){
  this.total += amount;
  return this.total;
}

BankAccount.prototype.withdraw = function(amount){

  // this.total -= amount;
  //   return this.total;
  if(this.total > amount){
    this.total -= amount;
    return this.total;
  }
  throw new Error('You have insufficient amount');
}

var account;
$(document).ready(function(){
  $('#form').submit(function(e){
    e.preventDefault();

    var nameInput = $('input#name').val();
    var firstDeposit = $('input#firstDeposit').val();
   
    account = new BankAccount(nameInput,+firstDeposit);

    $('#show-balance').show();
    $('span.name').text(nameInput);
    update();

  
    $('input#name').val('');
    $('input#firstDeposit').val('');
    })

    $('#depo').submit(function(e){
      e.preventDefault();

      var deposit = $('#secondDeposit').val();
      var withdraw = $('#withdraw').val();

      if(account){
        if(deposit){
          account.deposit(parseInt(deposit));
        }else if(withdraw){
          account.withdraw(parseInt(withdraw));
        }
        update();
      }
       $('#secondDeposit').val('');
       $('#withdraw').val('');
    })
})
function update(){
  $('span.balance').text(account.total);
}





