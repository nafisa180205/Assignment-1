{
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }
      
      function getDayType(day: Day): string {
        if (day === Day.Monday || day === Day.Tuesday || day === Day.Wednesday || day === Day.        Thursday  || day === Day.Friday) {
          return "Weekday";
        } 

        return "Weekend"
      }

      console.log(getDayType(Day.Monday))
      console.log(getDayType(Day.Sunday))
}