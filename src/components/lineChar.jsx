import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import lineCharData from "./data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChar = () => {
  const options = {
    responsive : false,
    width : 800,
    height : 700
  };
  return (
    <div>
      <Line options={options} data={lineCharData} />
    </div>
  );
};

export default LineChar;
