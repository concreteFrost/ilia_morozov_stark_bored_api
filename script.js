class ActivitiesService {
  getActivity = async () => {
    try {
      const res = await fetch("https://www.boredapi.com/api/activity");
      const data = await res.json();
      return data["activity"];
    } catch (e) {
      console.log("Something went wrong");
      return 'No Activities Found';
    }
  };

  retrieveActivities = async (x) => {
    const arr = [];
    for (let i = 0; i < x; i++) {
      arr.push(await this.getActivity());
    }
    return arr;
  };
}

const service = new ActivitiesService();
service.retrieveActivities(5).then((data) => {
  for (let i = 0; i < data.length; i++) {
    const display = document.getElementById("display");
    const activity = document.createTextNode(data[i]);
    const lineBreak = document.createElement("br");
    display.appendChild(activity);
    display.appendChild(lineBreak);
    console.log(data[i]);
  }
});
