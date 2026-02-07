const cap = {
  name: "Steve",
  team: "cap",
  petersTeam: function (mem1, mem2) {
    console.log(
      `Hey ${this.name} am your neighborhood spiderman and I belong to ${this.team}'s team`
    );
    console.log(`I am working with ${mem1} & ${mem2} `);
  },
};

cap.petersTeam("Nayak", "Adil");
// DRY - do not repeat yourself
const ironman = {
  name: "Tony Strac",
  team: "Iron Man",
};
