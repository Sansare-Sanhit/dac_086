var bigb={};
console.log("bigB",bigb);
bigb.name="Amitabh Bachchan";
bigb.occupation="Actor";
console.log("bigB",bigb);

bigb.speak=function speak(){console.log(`Mein ${this.name}bol raha hoon`);};
console.log("bigB",bigb);
bigb.speak();