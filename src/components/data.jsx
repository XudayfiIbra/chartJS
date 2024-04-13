const lineCharData = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "sunday",
  ],
  datasets: [
    {
      label: "Users",
      data: [100, 2500, 3200, 4300, 5000, 5700, 15000],
      borderColor: "red",
    },
    {
      label: "Customers",
      data: [100, 3500, 4200, 5300, 6000, 7700, 10000],
      borderColor: "blue",
    },
    {
      label: "Dealer",
      data: [0, 200, 400, 700, 2000, 1700, 4000],
      borderColor: "green",
    },
  ],
};

export default lineCharData;
