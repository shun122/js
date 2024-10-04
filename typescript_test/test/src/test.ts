export const test = () => {
  const name:string = "mike";
  console.log(name);
  
  const age:number = 20;
  console.log(age);
  
  const isAdult:boolean = true;
  console.log(isAdult);
  
  const hobbies:string[] = ["sports", "cooking"];
  console.log(hobbies);
  
  const address:object = {
    street: "123aaa"
  }
  console.log(address);
  
  const today:Date = new Date();
  console.log(today);
  
  const none:null = null;
  console.log(none);
  
  const undef:undefined = undefined;
  console.log(undef);

  const random:any = "hello world!!!"
  console.log(random);
  
  const gender: "male" | "female" = "male";
  console.log(gender);

  const value:string | number | null= 123;
  console.log(value);
}


