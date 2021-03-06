import LoanObject from "../objects/loanObject";
import LoanObjectUI from "../objects/LoanObject_UI";

export default class LoanScene extends Phaser.Scene {
  BOX: Phaser.GameObjects.Rectangle;
  addmoney: Phaser.GameObjects.Rectangle;

  loanMoney: number;
  tex: Phaser.GameObjects.Text;
  income_sent: number
  addloanmoney: number;
  Loan_Sponsor_UI: Phaser.GameObjects.Image;
  // loanArray: never[];
  lastUIindex: number;
  x: any;
  UIgroup: Phaser.GameObjects.Group;
  UIArray: never[];
  run_interest: boolean;
  take_loan_box: Phaser.GameObjects.Rectangle;
  comfirm: Phaser.GameObjects.Rectangle;
  comfirm_deal: Phaser.GameObjects.Rectangle;
  cancel_deal: Phaser.GameObjects.Rectangle;
  comfirm_deal_text: Phaser.GameObjects.Text;
  getloan: number;
  take_loan_box_text: Phaser.GameObjects.Text;
  loanArray: LoanObject[];
  hello: Phaser.Data.DataManager[];
  counting: any;

  //loanArray: any;

  constructor() {
    super({ key: 'loans_test' });
  }


  init(data) {
    this.income_sent = data.income_send;
    this.run_interest = data.calculate;
  }



  create() {
    this.counting=0;
    this.run_interest = false;
    this.lastUIindex = -1;
    //this.BOX=this.add.rectangle(0,0,1920,1080,0xffffff);
    //this.BOX.setOrigin(0,0);
    this.Loan_Sponsor_UI = this.add.image(90, 100, 'Loan_Sponsor');
    this.Loan_Sponsor_UI.setOrigin(0, 0);
    this.Loan_Sponsor_UI.setInteractive();

     //this.loanArray=LoanObject[0]=[];
    this.loanArray = new Array<LoanObject>(10);
    // this.UIArray=LoanObjectUI[3]=[];
    this.UIgroup = this.add.group();
    this.Add_Loans_To_Array(this.loanArray);
    //this.PrintArray(this.loanArray);
    this.CreateUILoanList(this.loanArray);

    this.take_loan_box = this.add.rectangle(300, 900, 200, 100, 0x00ffff);
    this.take_loan_box.setInteractive();
    this.take_loan_box.on('pointerup', () => { this.confirmLoanTake(this.loanArray) });
    this.take_loan_box_text = this.add.text(this.take_loan_box.x - 100, this.take_loan_box.y, '', { font: '30px Arial', fill: 'black' });


    this.comfirm = this.add.rectangle(800, 500, 1200, 500, 0xf0f0f0);
    this.comfirm.setVisible(false);
    this.comfirm_deal_text = this.add.text(this.comfirm.x - 600, this.comfirm.y - 130, '', { font: '60px Arial', fill: 'black' }).setVisible(false);
    this.comfirm_deal = this.add.rectangle(this.comfirm.x - 300, this.comfirm.y + 150, 100, 100, 0x00ff00).setVisible(false);
    this.cancel_deal = this.add.rectangle(this.comfirm.x + 300, this.comfirm.y + 150, 100, 100, 0xff0000).setVisible(false);

    
    this.hello=this.scene.get('Car_Garage').data.parent;



    //this.addmoney=this.add.rectangle(500,600,100,100,0xff0000);
    //this.addmoney.setInteractive();
    this.addloanmoney = 0;
    //this.addmoney.on('pointerdown',()=> {this.addloan()});
    //this.registry.events.on('changedata',this.moneytoscene,this);
    // this.tex=this.add.text(100,100,this.income_sent.toString(), { font: '100px Arial', fill: '#000000' });
    this.events.on('resume', (sys, data) => { this.calculate_interest(data, this.loanArray) });
  }



  Add_Loans_To_Array(Array_list: LoanObject[]) {

    for (var i = 0; i < 9; i++) {
      Array_list[i] = new LoanObject(1000 + i, 2, 10, 30);
      Array_list[i].taken = false;
      // console.log(Array_list[i].logo_number);
    }
    
    //console.log(Array_list.length);
  }
  CreateUILoanList(arr: LoanObject[]) {
    for (var i = 0; i < 4; i++) {
      let x = new LoanObjectUI(this, 1408, 130+175 + (i * 175), arr[i], i);
      x.on('pointerdown', () => { this.showtext(x) });

      this.UIgroup.add(x);
      x.tex.setVisible(false);
    }
  }
  showtext(x: LoanObjectUI) {
    this.lastUIindex = x.index;
    let t = this.loanArray[x.index] as LoanObject;
   console.log(String(x.index) +"is the index of this object and " +String(this.lastUIindex) +"is the last UI index.");

    if (t.taken == true) {
      this.take_loan_box_text.text = "Pay Loan";
    }
    else if(t.taken==false){
      this.take_loan_box_text.text = "Get Loan";
    }
    let y = this.UIgroup.getChildren() as LoanObjectUI[];
    for (var i = 0; i < y.length; i++) {
      y[i].tex.setVisible(false);
    }
    x.tex.setVisible(true);
  }

  addloan() {
    this.scene.pause('Car_Garage');
    this.scene.resume('Car_Garage', { sendLoan: this.addloanmoney });
    this.scene.bringToTop('Car_Garage');
  }



  confirmLoanTake(Array_list: LoanObject[]) {

    if (this.lastUIindex != (-1)) {
      this.comfirm.setVisible(true);
      this.comfirm_deal.setVisible(true);
      this.cancel_deal.setVisible(true);
      this.comfirm_deal.setInteractive();
      this.cancel_deal.setInteractive();

      let x = this.loanArray[this.lastUIindex] as LoanObject;
      if (x.taken == false) {

        this.comfirm_deal_text.text = "This loan is worth $" + x.worth + " with a " +
          x.interest + "% interest.\n Are you sure you want to take this loan?";
        this.comfirm_deal_text.setVisible(true);
        this.getloan = x.worth;
      }
      else {
        this.comfirm_deal_text.text = "This loan is worth $" + x.worth + " with a " +
          x.interest + "% interest.\n Are you sure you want to Pay this loan?";
        this.comfirm_deal_text.setVisible(true);
        this.getloan = x.worth;
      }
      //console.log(x.worth);
    }
    
    this.comfirm_deal.on('pointerup', () => {
      //console.log('comfirm'); 
      this.ComformationBoxLeave();
      if (Array_list[this.lastUIindex].taken == false) {
        this.addloanmoney = this.getloan;
        

        Array_list[this.lastUIindex].taken = true;
        this.take_loan_box_text.text = "get Loan";
        
        //console.log(String(this.lastUIindex) +"is the last UI index.");
        this.counting++;
        console.log(this.counting);
        this.addloan();
        this.getloan = 0;
        this.addloanmoney = 0;

        //console.log("when taken == false");
       // this.Loan_taken(this.loanArray);
      }
      else {
         console.log("when taken == true");
         Array_list[this.lastUIindex].taken = false;
         Array_list[this.lastUIindex].TakenToFalse();
         
        this.addloanmoney = this.getloan - (this.getloan * 2);
        this.take_loan_box_text.text = "Pay Loan";
        //this.take_loan_box_text.updateText();

        
        this.addloan();
        this.getloan = 0;
        this.addloanmoney = 0;
      }
    });
    this.cancel_deal.on('pointerdown', () => {
      //console.log('cancel');
      this.ComformationBoxLeave();
    });
  }

  ComformationBoxLeave() {
    this.comfirm_deal_text.setVisible(false);
    this.comfirm_deal.setVisible(false);
    this.cancel_deal.setVisible(false);
    this.comfirm.setVisible(false);
  }

  calculate_interest(data, Array_list: LoanObject[]) {
    if (data.calculate == true) {
      for (let i = 0; i < 9; i++) {
        if (Array_list[i].taken == true) {
          Array_list[i].worth += ((Array_list[i].interest * .01) * Array_list[i].worth);
          console.log("the index "+String(i)+"has a taken value of "+String(Array_list[i].taken) );
          this.addloanmoney += ((Array_list[i].interest * .01) * Array_list[i].worth);
        }
        else{

        }
      }
    }
    //this.PrintArray(Array_list);
    data.calculate = false;
    this.scene.pause('Car_Garage');
    this.scene.resume('Car_Garage', { sendLoan: this.addloanmoney, calculate: false });

    this.addloanmoney = 0;
  }
  //***********************************************************************************Test Print  Functions */
  PrintArray(Array_list: LoanObject[]) {
    for (let  i = 0; i < 9; i++) {
     // console.log(Array_list[i].taken);
      //console.log(Array_list[i].logo_number);
    }
  }

  Loan_taken(Array_list: LoanObject[]) {
    for (let i = 0; i < 9; i++) {
      let x = String(Array_list[i].taken) + " for loan " + Array_list[i].worth;
      //console.log(x);
    }
    //console.log("**********");*/
  }


  update() {

  }
}
